# 2024 BYRTeam 考核 | 基于 SSR 实现 PDF 的渲染与下载
使用 React 和 Nextjs 来完成 PDF 的前端渲染以及下载，即[第二课堂](https://dekt.bupt.edu.cn/)成绩单的原型功能

2024 BYR 前端考核题的实现，[这里](https://git.byr.moe/ChocoLZS/ssr-pdf)是原任务仓库

## 一些碎碎念
- 本来也没打算完全复刻的，但是搜资源的时候刚好找到背景原图和使用的字体了，遂复刻之！
- 虽然没要求加第二课堂的页眉，但是总感觉头上少了点什么，于是强行把图片扣下来加上了（你
- 计院名字太长，得给你自动计算下字号🤣
- 下载了自己的第二课堂成绩单发现，当活动名字很长时，字号会缩小并且会换行，但是大小不一的字号个人感觉有点乱，所以只是做了换行
- 最近在综测，刚好拿综测活动列表过来模拟一下数据🤓

## 踩坑记录
1. 先吐槽一下 @react-pdf/renderer 的组件和支持的 CSS 样式都有限，只能手搓列表和表格了啊啊啊啊...参考了一些 @react-pdf/renderer 仓库的 Issues 回答
2.  @react-pdf/renderer 中文支持不友好，文字无法自动换行，最后找到一个[邪门歪道](https://juejin.cn/post/7101581383545552910#heading-16)解决
3. 貌似 Next.js 和 @react-pdf/renderer 一起使用会出现静态资源引用的问题。\
   如果按照 [Next.js 文档](https://juejin.cn/post/7101581383545552910#heading-16) 的方法引入，会导致预览页面有效但是下载时提示找不到资源。\
   试了 Issue 里面提供的几个方法也没有效果，最后姑且通过加上服务器 url 解决，如 `https://localhost:3000/fonts/font-name.ttf`
