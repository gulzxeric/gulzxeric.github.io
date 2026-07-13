---
title: git教学02
date: 2026-07-13 09:35:00
tags:
  - 教学
  - 工程化
categories:
  - 教学
---

上一篇讲了 Git 的基本操作，但很多概念只是提了一嘴。这篇深入理解 Git 的三个核心区域、分支管理，以及怎么撤销操作。

<!-- more -->

## 三大区域

Git 所有的操作都是围绕三个区域展开的：

| 区域 | 说明 |
|------|------|
| 工作区（Working Directory） | 你实际写代码的地方 |
| 暂存区（Staging Area / Index） | 存放准备提交的改动 |
| 仓库（Repository） | Git保存历史版本的地方 |

工作区就是你电脑上看到的文件。`git add` 是把工作区的改动放到暂存区，`git commit` 是把暂存区的内容提交到仓库。

理解了这个流程，后面很多东西就好懂了。

## 分支管理

每次 `git commit`，Git 都会在仓库里生成一个快照。而分支，本质上就是一个指向某个快照的指针。

默认分支叫 `main`（早期叫 `master`），你可以在任意节点上分出新的分支，各干各的，互不影响。

### 常用命令

```bash
# 查看分支（*表示当前所在分支）
git branch

# 创建新分支
git branch 分支名

# 切换分支（新式语法，Git 2.23+）
git switch 分支名

# 创建并切换（一步到位，新式语法）
git switch -c 分支名

# 合并某分支到当前分支
git merge 分支名

# 删除分支
git branch -d 分支名
```

> 旧版用 `git checkout 分支名` 和 `git checkout -b 分支名`，功能一样。`git switch` 是后来拆出来的专用命令，语义更清晰。

### 实际怎么用

一个常见的分支策略是这样的：

```
main  ← 稳定版本，随时可部署
  └── dev  ← 日常开发
        └── feature/login  ← 具体功能开发
```

从 `dev` 拉出 `feature/xxx` 分支开发新功能，开发完合并回 `dev`，测试通过后再合并到 `main`。这样 `main` 始终保持稳定。

如果遇到线上 bug，就从 `main` 拉个 `hotfix/xxx` 分支修，修完合回 `main` 和 `dev`。

## 撤销操作

结合三大区域来理解撤销，会更清晰：

- **工作区改了一半，想放弃** → `git checkout -- 文件名`（危险，改动的代码会丢失）
- **已经 `git add` 到暂存区，想撤回** → `git reset HEAD 文件名`
- **已经 `git commit` 了，但想保留改动重新提交** → `git reset --soft HEAD~1`
- **已经 `git commit` 了，想彻底回退到某个版本** → `git reset --hard commit_id`（危险！后面的提交全丢）

### 安全撤销：revert

如果已经把代码推送到了远程，不想用 `reset` 改历史，可以用 `revert` 创建一个"反做"的新提交：

```bash
git revert commit_id
```

这样不会改历史记录，团队协作时更安全。

## 总结

- 三大区域是 Git 的基础模型——工作区 → 暂存区 → 仓库
- 分支让你并行开发互不干扰
- 撤销操作要分清在哪一个区域撤销，选对命令
