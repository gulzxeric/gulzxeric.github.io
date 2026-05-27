# Hexo + Redefine 主题博客设计文档

## 概述
在 gulzxeric.github.io 上重新部署 Hexo 博客，使用 Redefine 主题，支持中文，通过 GitHub Actions 自动部署。

## 需求
- 完全重新搭建博客
- 使用 Hexo 静态博客框架
- 使用 Redefine 主题（npm 安装）
- 中文语言支持
- GitHub Actions 自动部署
- 基础博客功能：文章发布、分类、标签、搜索

## 技术栈
- **框架**: Hexo 7.x
- **主题**: hexo-theme-redefine（最新版）
- **包管理**: npm
- **部署**: GitHub Actions
- **托管**: GitHub Pages

## 项目结构

```
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── source/
│   ├── _posts/                 # 文章目录
│   └── assets/                 # 静态资源（图片等）
├── themes/
│   └── redefine/               # Redefine 主题（npm 安装）
├── _config.yml                 # Hexo 主配置文件
├── _config.redefine.yml        # Redefine 主题配置文件
├── package.json                # 项目依赖
└── scaffolds/                  # 文章模板
```

## 功能特性

### 基础功能
- 响应式设计，支持移动端浏览
- 文章分类和标签系统
- 全文搜索功能
- 暗色/亮色主题切换
- 代码语法高亮
- 文章目录导航

### 文章格式
- Markdown 编写
- 支持 front-matter 配置
- 分类和标签支持
- 文章摘要

## 配置说明

### Hexo 主配置 (_config.yml)
- 站点信息：标题、描述、语言设置为中文
- URL 配置：指向 gulzxeric.github.io
- 文章配置：每页显示文章数、截断长度
- 时区设置：Asia/Shanghai

### Redefine 主题配置 (_config.redefine.yml)
- 外观设置：主色调、字体
- 导航栏配置
- 首页设置
- 文章页面设置
- 页脚配置

## 部署流程

### GitHub Actions 工作流
1. 触发条件：推送到 main 分支
2. 构建环境：Node.js 18
3. 构建步骤：
   - 检出代码
   - 安装依赖（npm install）
   - 构建静态文件（hexo generate）
   - 部署到 GitHub Pages

### 本地开发流程
1. 克隆仓库
2. 安装依赖：`npm install`
3. 本地预览：`hexo server`
4. 创建文章：`hexo new "文章标题"`
5. 提交推送，自动部署

## 文件说明

### 核心文件
- `_config.yml`: Hexo 全局配置
- `_config.redefine.yml`: Redefine 主题配置
- `package.json`: 项目依赖和脚本
- `.github/workflows/deploy.yml`: 部署配置

### 目录
- `source/_posts/`: 存放 Markdown 文章
- `source/assets/`: 存放图片等静态资源
- `scaffolds/`: 文章模板

## 验证标准
1. 本地运行 `hexo server` 能正常访问
2. 文章能正确显示分类和标签
3. 搜索功能正常工作
4. 暗色/亮色主题切换正常
5. 推送到 GitHub 后自动部署成功
6. gulzxeric.github.io 能正常访问
