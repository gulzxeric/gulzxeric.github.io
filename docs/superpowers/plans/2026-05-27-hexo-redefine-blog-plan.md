# Hexo + Redefine 博客实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 gulzxeric.github.io 上搭建使用 Redefine 主题的 Hexo 博客，支持中文，通过 GitHub Actions 自动部署。

**Architecture:** 使用 Hexo 静态博客框架，通过 npm 安装 Redefine 主题，配置中文语言支持，使用 GitHub Actions 实现自动部署到 GitHub Pages。

**Tech Stack:** Hexo 7.x, hexo-theme-redefine, npm, GitHub Actions, GitHub Pages

---

## 文件结构

```
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions 部署配置
├── source/
│   ├── _posts/                     # 文章目录
│   │   └── hello-world.md          # 示例文章
│   └── assets/                     # 静态资源目录
├── _config.yml                     # Hexo 主配置文件
├── _config.redefine.yml            # Redefine 主题配置文件
├── package.json                    # 项目依赖
└── scaffolds/                      # 文章模板
    ├── draft.md
    ├── page.md
    └── post.md
```

---

## Task 1: 初始化 Hexo 项目

**Files:**
- Create: `package.json`
- Create: `_config.yml`
- Create: `scaffolds/draft.md`
- Create: `scaffolds/page.md`
- Create: `scaffolds/post.md`
- Create: `source/_posts/.gitkeep`
- Create: `source/assets/.gitkeep`

- [ ] **Step 1: 初始化 npm 项目**

Run: `npm init -y`
Expected: 创建 package.json 文件

- [ ] **Step 2: 安装 Hexo 依赖**

Run: `npm install hexo hexo-cli hexo-server hexo-generator-archive hexo-generator-category hexo-generator-index hexo-generator-tag hexo-renderer-ejs hexo-renderer-marked hexo-renderer-stylus hexo-deployer-git`
Expected: 安装所有 Hexo 核心依赖

- [ ] **Step 3: 创建 Hexo 主配置文件**

```yaml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html

title: gulzxeric's Blog
subtitle: ''
description: '个人博客'
keywords:
author: gulzxeric
language: zh-CN
timezone: 'Asia/Shanghai'

# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://gulzxeric.github.io
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true
  trailing_html: true

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md
default_layout: post
auto_spacing: false
titlecase: false
external_link:
  enable: true
  field: site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss
updated_option: 'mtime'

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude:
ignore:

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: redefine

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: ''
```

- [ ] **Step 4: 创建文章模板**

`scaffolds/post.md`:
```markdown
---
title: {{ title }}
date: {{ date }}
tags:
categories:
---
```

`scaffolds/draft.md`:
```markdown
---
title: {{ title }}
tags:
categories:
---
```

`scaffolds/page.md`:
```markdown
---
title: {{ title }}
date: {{ date }}
---
```

- [ ] **Step 5: 创建必要目录**

Run:
```bash
mkdir -p source/_posts
mkdir -p source/assets
```

- [ ] **Step 6: 创建 .gitkeep 文件**

```bash
touch source/_posts/.gitkeep
touch source/assets/.gitkeep
```

- [ ] **Step 7: 验证项目结构**

Run: `ls -la`
Expected: 看到 package.json, _config.yml, scaffolds/, source/ 等文件和目录

---

## Task 2: 安装和配置 Redefine 主题

**Files:**
- Create: `_config.redefine.yml`

- [ ] **Step 1: 安装 Redefine 主题**

Run: `npm install hexo-theme-redefine`
Expected: 安装成功，主题文件在 node_modules/hexo-theme-redefine

- [ ] **Step 2: 创建 Redefine 主题配置文件**

```yaml
# Redefine Theme Configuration
# Docs: https://redefine.ohevan.com/docs/

# ============================================================
# 基础配置
# ============================================================

# 网站图标
favicon: /images/favicon.svg

# 页脚信息
footer:
  since: 2024
  custom_text: Powered by Hexo & Redefine
  icp:
    enable: false
    number:
    link:

# ============================================================
# 导航栏配置
# ============================================================

navbar:
  # 导航栏左侧 Logo
  logo:
    image: /images/logo.svg
    enabled: true
  
  # 导航链接
  menu:
    首页: /
    归档: /archives
    分类: /categories
    标签: /tags
    关于: /about

# ============================================================
# 首页配置
# ============================================================

home:
  # 首页文章数量
  article_count: 10
  
  # 文章摘要
  auto_excerpt:
    enable: true
    length: 150

# ============================================================
# 文章页面配置
# ============================================================

post:
  # 文章元信息
  meta:
    author:
      enable: true
    date:
      enable: true
    updated:
      enable: true
    categories:
      enable: true
    tags:
      enable: true
  
  # 目录
  toc:
    enable: true
    number: true
    depth: 3
  
  # 版权信息
  copyright:
    enable: true
    content:
      author: 文章作者
      link: 文章链接
      license: 'CC BY-NC-SA 4.0'
      license_link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'

# ============================================================
# 侧边栏配置
# ============================================================

sidebar:
  # 侧边栏位置
  position: right
  
  # 个人信息卡片
  personal_info:
    avatar: /images/avatar.png
    name: gulzxeric
    description: 个人博客
  
  # 文章目录
  toc:
    enable: true

# ============================================================
# 搜索配置
# ============================================================

search:
  enable: true
  type: local

# ============================================================
# 代码块配置
# ============================================================

code_block:
  # 代码高亮主题
  highlight_theme: default
  
  # 代码复制按钮
  copy_button:
    enable: true

# ============================================================
# 暗色模式
# ============================================================

dark_mode:
  enable: true
  default: auto

# ============================================================
# 字体配置
# ============================================================

font:
  # 全局字体
  global: 
  # 标题字体
  title: 
  # 代码字体
  code: 
```

- [ ] **Step 3: 验证主题安装**

Run: `ls node_modules/hexo-theme-redefine/`
Expected: 看到主题文件目录

---

## Task 3: 创建示例内容

**Files:**
- Create: `source/_posts/hello-world.md`
- Create: `source/about/index.md`

- [ ] **Step 1: 创建示例文章**

```markdown
---
title: 你好，世界
date: 2026-05-27 10:00:00
tags:
  - 博客
  - Hexo
categories:
  - 技术
---

欢迎来到我的博客！这是使用 Hexo 和 Redefine 主题搭建的第一篇文章。

## 关于这个博客

这个博客使用以下技术搭建：

- **Hexo**: 静态博客框架
- **Redefine**: 现代化的 Hexo 主题
- **GitHub Pages**: 托管服务
- **GitHub Actions**: 自动部署

## 快速开始

### 本地运行

```bash
# 安装依赖
npm install

# 启动本地服务器
hexo server

# 访问 http://localhost:4000
```

### 创建新文章

```bash
hexo new "文章标题"
```

### 部署

```bash
# 生成静态文件
hexo generate

# 部署到 GitHub Pages
hexo deploy
```

## 特性

- 响应式设计
- 暗色/亮色主题切换
- 代码高亮
- 全文搜索
- 分类和标签

---

感谢访问！
```

- [ ] **Step 2: 创建关于页面**

```markdown
---
title: 关于
date: 2026-05-27 10:00:00
type: "about"
---

## 关于我

这是我的个人博客，用于分享技术笔记和个人思考。

## 联系方式

- GitHub: [gulzxeric](https://github.com/gulzxeric)

## 技术栈

- 博客框架: [Hexo](https://hexo.io/)
- 主题: [Redefine](https://redefine.ohevan.com/)
- 托管: [GitHub Pages](https://pages.github.com/)
```

- [ ] **Step 3: 验证文件创建**

Run: `ls source/_posts/`
Expected: 看到 hello-world.md

Run: `ls source/about/`
Expected: 看到 index.md

---

## Task 4: 配置 GitHub Actions 部署

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: 创建 GitHub Actions 工作流目录**

Run:
```bash
mkdir -p .github/workflows
```

- [ ] **Step 2: 创建部署工作流文件**

```yaml
name: Deploy Hexo Blog to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: true

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Hexo
        run: npx hexo generate

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: 验证工作流文件**

Run: `cat .github/workflows/deploy.yml`
Expected: 看到完整的 YAML 内容

---

## Task 5: 配置 Git 和初始提交

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: 创建 .gitignore 文件**

```gitignore
# Dependencies
node_modules/
package-lock.json

# Hexo generated files
public/
.deploy*/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

- [ ] **Step 2: 初始化 Git 仓库**

Run: `git init`
Expected: 初始化空的 Git 仓库

- [ ] **Step 3: 添加所有文件到暂存区**

Run: `git add .`
Expected: 所有文件被添加到暂存区

- [ ] **Step 4: 创建初始提交**

Run: `git commit -m "feat: initialize Hexo blog with Redefine theme"`
Expected: 提交成功

- [ ] **Step 5: 验证 Git 状态**

Run: `git status`
Expected: 显示 "nothing to commit, working tree clean"

---

## Task 6: 配置 GitHub 仓库和推送

**Files:**
- None (GitHub 操作)

- [ ] **Step 1: 添加远程仓库**

Run: `git remote add origin https://github.com/gulzxeric/gulzxeric.github.io.git`
Expected: 远程仓库添加成功

- [ ] **Step 2: 推送到 GitHub**

Run: `git push -u origin main`
Expected: 代码推送到 GitHub

- [ ] **Step 3: 验证 GitHub Actions**

在 GitHub 仓库页面查看 Actions 标签，确认工作流正在运行

---

## Task 7: 本地测试和验证

**Files:**
- None (测试)

- [ ] **Step 1: 本地启动 Hexo 服务器**

Run: `npx hexo server`
Expected: 服务器启动，显示 "Hexo is running at http://localhost:4000"

- [ ] **Step 2: 访问本地博客**

在浏览器中访问 http://localhost:4000
Expected: 看到博客首页，显示示例文章

- [ ] **Step 3: 测试暗色模式**

点击主题切换按钮
Expected: 主题在暗色和亮色之间切换

- [ ] **Step 4: 测试搜索功能**

在搜索框中输入关键词
Expected: 显示搜索结果

- [ ] **Step 5: 停止本地服务器**

Run: `Ctrl+C`
Expected: 服务器停止

---

## Task 8: 创建新文章测试

**Files:**
- Create: `source/_posts/test-post.md`

- [ ] **Step 1: 使用 Hexo 创建新文章**

Run: `npx hexo new "测试文章"`
Expected: 显示 "INFO  Created: source/_posts/test-post.md"

- [ ] **Step 2: 编辑新文章**

```markdown
---
title: 测试文章
date: 2026-05-27 12:00:00
tags:
  - 测试
categories:
  - 博客
---

这是一篇测试文章，用于验证博客功能是否正常。

## 测试内容

### 代码块测试

```python
def hello():
    print("Hello, World!")
```

### 列表测试

- 项目 1
- 项目 2
- 项目 3

### 链接测试

[GitHub](https://github.com)

### 图片测试

![测试图片](/assets/test.png)

---

测试完成！
```

- [ ] **Step 3: 重新生成并测试**

Run: `npx hexo generate && npx hexo server`
Expected: 新文章出现在博客中

---

## Task 9: 部署到 GitHub Pages

**Files:**
- None (部署)

- [ ] **Step 1: 提交所有更改**

Run:
```bash
git add .
git commit -m "feat: add test post and finalize blog setup"
```

- [ ] **Step 2: 推送到 GitHub**

Run: `git push`
Expected: 代码推送到 GitHub

- [ ] **Step 3: 等待 GitHub Actions 完成**

在 GitHub 仓库页面查看 Actions 标签
Expected: 工作流成功完成

- [ ] **Step 4: 访问在线博客**

在浏览器中访问 https://gulzxeric.github.io
Expected: 博客正常显示，所有功能正常

---

## Task 10: 最终验证

**Files:**
- None (验证)

- [ ] **Step 1: 验证首页**

访问 https://gulzxeric.github.io
Expected: 看到博客首页，显示文章列表

- [ ] **Step 2: 验证文章页面**

点击任意文章
Expected: 文章内容正确显示，代码高亮正常

- [ ] **Step 3: 验证分类和标签**

点击分类或标签链接
Expected: 显示对应的文章列表

- [ ] **Step 4: 验证搜索功能**

使用搜索功能
Expected: 能够搜索到文章

- [ ] **Step 5: 验证暗色模式**

切换暗色/亮色模式
Expected: 主题切换正常

- [ ] **Step 6: 验证响应式设计**

在不同设备尺寸下查看
Expected: 布局自适应，显示正常

---

## 完成

博客搭建完成！现在你可以：

1. 在 `source/_posts/` 目录下创建新的 Markdown 文章
2. 推送到 GitHub 自动部署
3. 访问 https://gulzxeric.github.io 查看博客

**常用命令：**
- `npx hexo new "文章标题"` - 创建新文章
- `npx hexo server` - 本地预览
- `npx hexo generate` - 生成静态文件
- `git add . && git commit -m "message" && git push` - 部署更新
