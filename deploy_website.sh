#!/bin/bash
set -e

# 检查参数
if [ $# -ne 1 ]; then
    echo "用法：$0 服务器IP"
    echo "示例：$0 192.168.1.100"
    exit 1
fi

SERVER_IP="$1"
SSH_USER="root"
LOCAL_NGINX_CONF="./nginx_site.conf"
REMOTE_NGINX_CONF="/etc/nginx/conf.d/default.conf"
WWW_PATH="/var/www/html"

# 检查配置文件是否存在
if [ ! -f "$LOCAL_NGINX_CONF" ]; then
    echo "错误：当前目录缺少 $LOCAL_NGINX_CONF 配置文件！"
    exit 1
fi

echo "========================================"
echo "       静态网站一键部署脚本"
echo "  服务器：$SERVER_IP"
echo "  系统：自动识别 CentOS / Ubuntu"
echo "========================================"
read -s -p "请输入服务器密码：" SERVER_PASS
echo -e "\n========================================"

# 安装 sshpass（用于自动输密码）
install_sshpass() {
    if ! command -v sshpass &> /dev/null; then
        echo "正在安装 sshpass 工具..."
        if [[ "$(uname -s)" == "Darwin" ]]; then
            brew install sshpass
        elif command -v apt &> /dev/null; then
            sudo apt update && sudo apt install -y sshpass
        elif command -v yum &> /dev/null; then
            sudo yum install -y sshpass
        fi
    fi
}
install_sshpass

# 远程执行命令
remote() {
    sshpass -p "$SERVER_PASS" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 \
    "$SSH_USER@$SERVER_IP" "$1"
}

# 远程上传文件
scp_put() {
    sshpass -p "$SERVER_PASS" scp -o StrictHostKeyChecking=no -r "$1" "$SSH_USER@$SERVER_IP:$2"
}

echo "开始部署..."

# 1. 安装 Nginx（自动识别系统）
echo "1/6：安装 Nginx..."
remote '
if command -v apt &> /dev/null; then
  apt update -y && apt install nginx -y
  systemctl enable --now nginx
elif command -v yum &> /dev/null; then
  yum install -y nginx
  systemctl enable --now nginx
fi
'

# 2. 创建网站目录
echo "2/6：创建网站目录 $WWW_PATH..."
remote "mkdir -p $WWW_PATH && rm -rf $WWW_PATH/*"

# 3. 上传本地所有网站文件（html/css/js/img等）
echo "3/6：上传网站文件..."
scp_put ./* "$WWW_PATH/"

# 4. 上传 Nginx 配置
echo "4/6：配置 Nginx..."
scp_put "$LOCAL_NGINX_CONF" "$REMOTE_NGINX_CONF"

# 5. 测试配置 + 重启 Nginx
echo "5/6：重启 Nginx..."
remote "nginx -t && systemctl restart nginx"

# 6. 放行防火墙 80 端口
echo "6/6：放行 80 端口..."
remote '
if command -v ufw &> /dev/null; then
  ufw allow 80/tcp
elif command -v firewall-cmd &> /dev/null; then
  firewall-cmd --permanent --add-service=http
  firewall-cmd --reload
fi
'

echo -e "\n========================================"
echo "部署成功！"
echo "访问地址：http://$SERVER_IP"
echo "========================================"