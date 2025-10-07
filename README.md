# Blueice工作室官方网站

欢迎访问Blueice工作室的官方网站。我们是一个专注于操作系统研发的技术团队，目前正在开发新一代操作系统——BlueiceOS。

## 项目概述

本项目是Blueice工作室的官方网站，采用现代化、响应式的设计风格，展示了我们的产品、新闻和团队信息。

## 项目特点

- **现代化设计**：采用卡片化设计和流畅动画效果
- **响应式布局**：适配各种设备屏幕尺寸
- **多页面结构**：包含首页、产品、新闻、关于和加入我们页面
- **动效增强**：滚动触发动画和交互效果
- **GitHub Pages 部署**：支持一键部署到 GitHub Pages

## 技术栈

- HTML5
- CSS3 (使用 CSS 变量和 Grid 布局)
- JavaScript (ES6+)
- Font Awesome 图标库

## 项目结构

```
.
├── index.html          # 首页
├── products.html       # 产品页面
├── news.html           # 新闻页面
├── about.html          # 关于页面
├── join.html           # 加入我们页面
├── 404.html            # 404 页面
├── css/
│   └── style.css       # 主样式文件
├── js/
│   └── main.js         # 主 JavaScript 文件
├── images/             # 图片资源目录
│   ├── hero-bg.jpg     # 首页背景图
│   ├── logo.png        # Logo 图片
│   └── os-preview.png  # 产品预览图
└── README.md           # 项目说明文件
```

## BlueiceOS

BlueiceOS是我们正在开发的全新操作系统，具有以下特点：
- 基于Blueice内核的微内核架构
- UEFI引导支持
- 智能资源管理
- 高性能文件系统
- 强大的安全机制
- 现代化的用户界面

## 网站特色

本网站具有以下特点：
- 简洁清晰的页面布局
- 响应式设计，适配不同设备
- 现代化的视觉风格
- 流畅的动画效果
- 多页面结构，内容组织清晰

## 本地运行

1. 克隆项目到本地：
   ```bash
   git clone https://github.com/SYSTEM-WIN-ZDY/blueice.git
   ```

2. 进入项目目录：
   ```bash
   cd blueice
   ```

3. 启动本地服务器：
   - 使用 Python：
     ```bash
     python -m http.server 8000
     ```
   - 使用 Node.js (需要安装 `http-server`)：
     ```bash
     npx http-server
     ```

4. 在浏览器中访问 `http://localhost:8000`

## 部署到 GitHub Pages

1. 确保您的项目已经推送到 GitHub 仓库

2. 在 GitHub 仓库页面，点击 "Settings" 选项卡

3. 向下滚动到 "Pages" 部分

4. 在 "Source" 下拉菜单中选择 "GitHub Actions" 或 "Deploy from a branch"

5. 如果选择 "Deploy from a branch"：
   - 选择源分支（通常是 `main` 或 `master`）
   - 选择 `/ (root)` 作为文件夹
   - 点击 "Save"

6. 等待几分钟，您的网站将在 `https://<username>.github.io/<repository-name>` 上线

## 自定义内容

要自定义网站内容，请编辑相应的 HTML 文件：

- **首页内容**：编辑 `index.html`
- **产品信息**：编辑 `products.html`
- **新闻文章**：编辑 `news.html`
- **团队信息**：编辑 `about.html`
- **职位信息**：编辑 `join.html`

要修改样式，请编辑 `css/style.css` 文件。

要修改交互效果，请编辑 `js/main.js` 文件。

## GitHub仓库

项目地址: [https://github.com/SYSTEM-WIN-ZDY/blueice](https://github.com/SYSTEM-WIN-ZDY/blueice)

## 联系我们

如果您对我们的项目感兴趣或有任何问题，请通过以下方式联系我们：
- GitHub: [SYSTEM-WIN-ZDY/blueice](https://github.com/SYSTEM-WIN-ZDY/blueice)
- 邮箱：hhfjhfuhj@outlook.com