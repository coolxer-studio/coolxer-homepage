#!/bin/bash

# ====================== 配置区（只改这里）======================
# 【父目录】：包含那5个子目录的上级目录
PARENT_DIR="./"

# 【需要上传的目录】：在这里写目录名，多个用空格分开
UPLOAD_DIRS="index.html css images js common community member recruitment"

# 【目标服务器默认上传目录】
REMOTE_DEFAULT_DIR="/usr/share/coolxer"
# ==============================================================

# 检查参数
if [ $# -ne 1 ]; then
    echo "用法: $0 <scp目标地址>"
    echo "示例: $0 root@192.168.1.100"
    exit 1
fi
SCP_DEST="$1"
FULL_DEST="${SCP_DEST}:${REMOTE_DEFAULT_DIR}"

# 循环上传指定的目录
echo "========================================"
echo "开始批量上传指定目录..."
echo "目标服务器: ${FULL_DEST}"
echo "========================================"

for dir in ${UPLOAD_DIRS}; do
    local_path="${PARENT_DIR}/${dir}"
    
    # 检查目录是否存在
    if [ ! -e "${local_path}" ]; then
        echo "⚠️  跳过不存在的目录: ${local_path}"
        continue
    fi

    echo "→ 正在上传: ${dir}"
    scp -r "${local_path}" "${FULL_DEST}"

    # 检查上传结果
    if [ $? -eq 0 ]; then
        echo "✅ ${dir} 上传成功"
    else
        echo "❌ ${dir} 上传失败"
    fi
    echo "----------------------------------------"
done

echo -e "\n🎉 所有目录上传任务完成！"
