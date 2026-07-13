---
title: git入门
date: 2026-07-13 09:07:29
tags: 
  - 教学
  - 工程化
categories:
  - 教学
---

Git是目前世界上最先进的分布式版本控制系统（没有之一）。无论是个人开发还是团队协作，Git都是必备技能。

<!-- more -->

## 什么是版本控制？

简单说，就是记录文件的每一次改动。每当你完成一个阶段的工作，可以通过 `git add` 和 `git commit` 把改动提交给Git记录下来，之后随时可以回退到任何一个历史版本。

## 安装Git

- **Windows**：从 [git-scm.com](https://git-scm.com) 下载安装包，一路下一步
- **macOS**：`brew install git`
- **Linux (Ubuntu/Debian)**：`sudo apt install git`

安装完成后打开终端（cmd / PowerShell / terminal），输入：

```bash
git --version
```

能看到版本号就说明安装成功了。

## 基本配置

安装后先告诉Git你是谁，每次提交都会记录这些信息：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

查看配置：

```bash
git config --list
```

## 创建仓库

两种方式：

**方式一：从零开始**

打开终端（Windows 按 `Win+R` 输入 `powershell`，macOS 打开「终端」），依次输入：

```bash
# 创建一个名为 my-project 的文件夹
mkdir my-project

# 进入这个文件夹
cd my-project

# 把这个文件夹变成Git仓库
git init
```

**方式二：克隆已有项目**

```bash
git clone https://github.com/用户名/仓库名.git
```

## 基本操作流程

### 1. 查看状态

随时查看当前文件状态：

```bash
git status
```

### 2. 添加文件到暂存区

```bash
# 添加单个文件
git add 文件名

# 添加所有改动
git add .
```

### 3. 提交到仓库

```bash
git commit -m "本次改动的说明"
```

好的commit message习惯：用英文或中文简洁描述改动内容，如 `fix: 修复登录按钮点击无响应`。

### 4. 查看历史

```bash
# 查看提交历史
git log

# 简洁模式（一行显示）
git log --oneline

# 图形化显示分支
git log --graph --oneline --all
```

## 远程仓库（以GitHub为例）

### 关联远程仓库

```bash
git remote add origin https://github.com/用户名/仓库名.git
```

### 推送代码

```bash
# 第一次推送
git push -u origin main

# 之后推送
git push
```

### 拉取代码

```bash
git pull
```

## .gitignore

有些文件不该被Git管理（如 `node_modules`、`.env`、编译产物等）。在项目根目录创建 `.gitignore` 文件：

```
node_modules/
.env
dist/
*.log
.DS_Store
```

## 常用命令速查表

| 命令 | 作用 |
|------|------|
| `git init` | 初始化仓库 |
| `git clone <url>` | 克隆远程仓库 |
| `git add .` | 添加所有改动到暂存区 |
| `git commit -m "msg"` | 提交暂存区 |
| `git push` | 推送到远程 |
| `git pull` | 从远程拉取 |
| `git status` | 查看状态 |
| `git log` | 查看历史 |
| `git branch` | 查看分支 |
| `git checkout -b <name>` | 创建并切换分支 |
| `git merge <name>` | 合并分支 |
| `git diff` | 查看具体改动内容 |

## 推荐学习资源

- [Pro Git 中文版](https://git-scm.com/book/zh/v2) — 官方书籍，免费
- [Learn Git Branching](https://learngitbranching.js.org/) — 交互式学习分支
- [GitHub Git 入门](https://docs.github.com/zh/get-started/start-your-journey/about-git-and-github)
