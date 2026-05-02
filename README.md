# 酷X众创社区主页

一个开放式协作众创平台网站，旨在聚合多方力量，以融合人工智能、网络安全、监测预警为主题进行市场探索。

## 项目定位

一个静态网站，作为社区的主页，用于展示项目介绍、成员介绍、招募信息、社交媒体链接等。

## 技术栈

| 类别 | 技术                | 版本 |
| -- | ----------------- | -- |
| 语言 | HTML5             | -  |
| 样式 | CSS3              | -  |
| 脚本 | JavaScript (ES6+) | -  |
| 图标 | SVG               | -  |

## 快速开始

### 运行项目

直接在浏览器中打开 `index.html` 即可查看网站：

```bash
# 方式1：使用浏览器直接打开
open index.html

# 方式2：使用本地服务器（推荐）
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 部署项目

#### 全新的Nginx环境

1.给脚本权限

```bash
chmod +x deploy_website.sh
```

2.执行部署

```bash
./deploy_website.sh 你的服务器IP
```

示例：

```bash
./deploy_website.sh 120.77.xx.xx
```

然后**输入服务器密码**，等待自动完成即可。

#### 已有的Nginx环境上更新

手动拷贝项目内容到Nginx服务器，例如：

```bash
chmod +x ./upload_file.sh
./upload_file.sh aliyun
```

然后重启Nginx服务，使新配置生效。

```bash
nginx -s reload
```

## 项目结构

```
.
├── index.html                 # 首页（英雄区、成员轮播、产品招募、社交媒体）
├── AGENTS.md                  # 项目详细文档
├── README.md                  # 项目说明文件
├── .gitignore                 # Git忽略文件配置
├── deploy_website.sh          # 自动部署脚本
├── nginx_site.conf            # Nginx站点配置
├── upload_file.sh             # 上传文件到Nginx服务器脚本
├── common/                    # 公共组件
│   ├── 404.html               # 404错误页面
│   ├── 50x.html               # 500服务器错误页面
│   └── css/
│       └── error.css          # 错误页面样式（404/50x共用）
├── community/                 # 社区相关页面
│   ├── community-about.html   # 社区介绍页面
│   ├── community-details.html # 社区章程页面
│   ├── css/
│   │   ├── community-about.css
│   │   └── community-details.css
│   └── js/
│       └── community-details.js
├── member/                    # 成员相关页面
│   ├── member-profile-example.html
│   ├── css/
│   │   └── member-profile.css
│   ├── js/
│   │   └── member-profile.js
│   └── images/
│       └── user1.png
├── recruitment/               # 招募相关页面
│   ├── recruitment-example.html
│   ├── css/
│   │   └── recruitment-example.css
│   └── js/
│       └── recruitment.js
├── css/                       # 全局样式
│   └── index.css              # 首页样式
├── js/                        # 全局脚本
│   └── index.js               # 首页核心功能
├── images/                    # 图片资源目录
│   ├── qrcode.png             # 默认二维码占位图
│   ├── qrcode_gongzhonghao.jpg
│   ├── qrcode_wechat.jpg
│   ├── qrcode_shipinhao.jpg
│   ├── qrcode_douyin.jpg
│   └── qrcode_bilibili.jpg
└── doc/                       # 文档目录
    └── 《酷X众创社区章程》.md
```

## 页面功能

| 页面   | 功能说明                              |
| ---- | --------------------------------- |
| 首页   | 动态星星背景、成员轮播、招募活动展示、社交媒体二维码、加入社区弹窗 |
| 社区介绍 | 社区创立背景、核心价值观、发展愿景                 |
| 社区章程 | 完整的社区章程文档（11章33条），可折叠目录导航         |
| 成员资料 | 成员头像（动态渐变背景）、技能标签、贡献成就            |
| 招募页面 | 项目详情卡片、角色招募网格、进度条展示、申请功能          |
| 错误页面 | 统一错误页面样式，包含返回首页链接                 |

## 代码提交流程

代码提交主要用于社区成员更新个人主页信息及发布招募活动使用，具体流程如下：

### 成员信息更新

1. 基于主分支拉取最新代码
2. 在 `member` 目录下创建个人主页文件（如 `member/member-profile-{主页id}.html`）
3. 参考 `member/member-profile-example.html` 实现，更新头像、技能标签、贡献成就等信息
4. 如需自定义样式或脚本，可在 `css`、`js`、`images` 目录下添加对应文件
5. 提交更新到个人分支，并提交merge request到主分支
6. 等待管理员审核通过后合并到主分支，触发 CI/CD 自动部署

### 招募活动更新

1. 基于主分支拉取最新代码
2. 在 `recruitment` 目录下创建招募活动文件（如 `recruitment/recruitment-{活动id}.html`）
3. 参考 `recruitment/recruitment-example.html` 实现，更新项目详情、角色招募、进度条展示等
4. 如需自定义样式或脚本，可在对应目录下添加文件
5. 提交更新到个人分支，并提交merge request到主分支
6. 等待管理员审核通过后合并到主分支，触发 CI/CD 自动部署

***

## 联系信息

- 邮箱：<coolxer@163.com>
- 社区域名：[www.coolxer.com](http://www.coolxer.com)

## License
This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
