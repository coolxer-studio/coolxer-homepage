# 酷X众创社区项目

## 项目概述

酷X众创社区是一个开放式协作众创平台网站，旨在聚合多方力量，以融合人工智能、网络安全、监测预警为主题进行市场探索。

### 项目定位
- **目标人群**：开发者、设计师、技术爱好者、初创团队
- **核心价值**：提供低成本的想法验证渠道、真实市场反馈机制与价值变现路径
- **运营模式**：社区成员自愿发起项目，其他成员志愿加入，运营单位提供平台支持

---

## 文件结构

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

---

## 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 语言 | HTML5 | - |
| 样式 | CSS3 | - |
| 脚本 | JavaScript (ES6+) | - |
| 图标 | SVG | - |

---

## 页面功能说明

### 首页 (index.html)
- **英雄区**：动态星星背景、社区介绍卡片（3D悬浮效果）、加入按钮
- **成员轮播**：社区成员卡片轮播展示，支持左右切换、自动播放、指示器
- **招募活动**：产品卡片展示，包含进度条（招募中/阶段/已完成）
- **社交媒体**：5个二维码卡片（微信公众号、微信群、视频号、抖音、B站）
- **社区弹窗**：点击"加入社区"按钮弹出社区详细说明（邮件申请模板）
- **3D交互**：鼠标移动时社区介绍卡片跟随视角变化

### 错误页面 (404.html / 50x.html)
- 统一错误页面样式，包含返回首页链接
- 动画效果（fadeInUp）

### 社区介绍 (community-about.html)
- 社区创立背景、核心价值观、发展愿景
- 响应式内容卡片布局

### 社区章程 (community-details.html)
- 完整的社区章程文档（11章33条）
- 可折叠目录导航（支持多级展开）

### 成员资料 (member-profile-example.html)
- 成员头像（支持真实图片或渐变背景字母）
- 技能标签展示
- 贡献成就列表
- 实名/匿名徽章

### 招募页面 (recruitment/recruitment-example.html)
- 项目详情卡片
- 角色招募网格
- 进度条展示
- 申请按钮（调用 `applyForProject()` 弹出模态框）

---

## JavaScript 功能模块

### index.js
- `createStars()` - 创建星星背景（100颗随机位置/大小/动画延迟）
- `showPopup()` / `hidePopup()` - 弹窗控制
- `initMembersCarousel()` - 初始化成员轮播
  - 10个成员数据（头像、姓名、角色）
  - 支持左右箭头切换
  - 自动播放（3秒间隔）
  - 鼠标悬停暂停
  - 指示器点击跳转
- 鼠标移动3D视角效果
- 平滑滚动导航

### community-details.js
- TOC目录切换功能
- 多级目录展开/折叠
- 自动展开第一个章节

### member-profile.js
- 头像渐变背景生成（基于名字首字母）
- 徽章显示逻辑（实名/匿名）

### recruitment.js
- `applyForProject()` - 弹出申请模态框
- `closeModal()` - 关闭模态框

---

## CSS 样式规范

### 命名约定
- 使用 kebab-case（短横线分隔）
- BEM风格：`.block__element--modifier`
- 组件前缀：`.hero-section`, `.product-card`, `.social-card`

### 颜色规范
- 主色调：蓝色系（#60a5fa 及变体）
- 背景：深色主题渐变（#1a2980 → #16213e → #0f172a → #1e293b）
- 强调色：红橙渐变（#ff6b6b, #e8cb97）
- 卡片背景：半透明白色（rgba(255, 255, 255, 0.1)）

### 动画效果
- `@keyframes float` - 浮动动画
- `@keyframes pulse` - 脉冲动画
- `@keyframes glow` - 发光动画
- `@keyframes fadeInUp` - 淡入上移
- `@keyframes morph` - 形状变形
- `@keyframes spin` - 旋转动画
- `@keyframes twinkle` - 星星闪烁

### 响应式断点
- 手机：< 768px
- 平板：768px - 1024px
- 桌面：> 1024px

---

## 部署说明

### 部署方式
- **自动部署**：使用 `deploy_website.sh` 脚本自动部署到Nginx服务器
- **手动部署**：拷贝文件到Nginx目录后重启服务

### Nginx配置
- 站点配置文件：`nginx_site.conf`
- 默认部署路径：`/var/www/html/`

---

## 代码风格指南

### HTML
- 使用语义化标签（section, article, footer 等）
- 缩进：2空格
- 属性值使用双引号
- 标签闭合完整

### CSS
- 缩进：2空格
- 使用 `rem` 作为主要单位
- 媒体查询放在文件末尾
- 使用CSS变量管理主题色

### JavaScript
- 缩进：2空格
- 使用 `const`/`let` 代替 `var`
- 使用箭头函数和DOM操作
- 使用 `addEventListener` 绑定事件
- 使用 `querySelector`/`getElementById` 获取元素

---

## 社交媒体渠道

| 平台 | 用途 |
|------|------|
| 微信公众号 | 获取最新资讯 |
| 微信群 | 社区成员交流 |
| 视频号 | 精彩视频内容 |
| 抖音 | 创意内容展示 |
| B站 | 技术分享视频 |

联系邮箱：coolxer@163.com
