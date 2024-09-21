2024 BYR 前端考核题实现
----------------------------------------
# 基于 SSR 实现 PDF 的渲染与下载

使用 React 和 Nextjs 来完成 PDF 的前端渲染以及下载

其实就是第二课堂成绩单的原型功能

## 如何运行？

首先你需要安装 `nodejs` 推荐版本 [node 20](https://nodejs.org/zh-cn)

然后

```bash
git clone https://git.byr.moe/ChocoLZS/ssr-pdf.git
```

```bash
npm install
```

```bash
npm run dev
```

推荐使用 `vscode` 进行代码编写

## 任务

需要提供如下路由，并完成 pdf 渲染，需要展示 app/data.ts 里的所有数据

前端渲染：

http://localhost:3000/:id

即 http://localhost:3000/1 显示一号的信息

ssr 下载接口：

http://localhost:3000/generate/:id

即 http://localhost:3000/generate/1 提供一号 pdf 的下载，样式应该与前端渲染相同

排版可参考（不需要顶部素材）：![成绩单示例](/docs/report-example.jpg)

## 要求

需要使用 app/data.ts 中的全部数据

需要将 0 1 2 号的 pdf 均提供展示（可以从首页进入）和下载

即 http://localhost:3000/0 http://localhost:3000/1 http://localhost:3000/2 可以正常显示 pdf

http://localhost:3000/generate/0 http://localhost:3000/generate/1 http://localhost:3000/generate/2 可以下载 pdf

![首页](/docs/homepage.png)

## 提示/说明

Document.tsx 应该可以复用，包括浏览器渲染展示和下载

## 相关资料

### React

[React](https://zh-hans.react.dev/)

中文（社区翻译）

前端主流框架之一

### Nextjs

[nextjs 框架](https://nextjs.org/docs)

英文

React 框架，熟悉需要花一定的时间成本，但本仓库基本上搭建好了大致的框架，只需要实现功能即可

### React-pdf

[react-pdf](https://react-pdf.org/)

英文

封装为 React 组件的 pdf 库，用于浏览器渲染与文件生成

### 其它

除此之外你需要学会基本的 git 操作，如 git clone，git add ., git commit, git push

需要一点基本的 js 编程知识
