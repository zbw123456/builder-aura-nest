# 部署和导入指南

## 1. 部署到在线环境 (为了Figma导入)

### Netlify部署

1. 将 `dist/spa` 文件夹上传到 Netlify
2. 或者连接Git仓库自动部署
3. 获得类似 `https://your-app.netlify.app` 的URL

### Vercel部署

1. 安装Vercel CLI: `npm i -g vercel`
2. 在项目根目录运行: `vercel --prod`
3. 部署 `dist/spa` 文件夹

## 2. 导入到 Figma

### 方法A: 使用插件

1. 在Figma中安装 "html.to.design" 或 "Figma to HTML" 插件
2. 使用部署后的在线URL
3. 插件会自动转换所有页面

### 方法B: 手动重建

1. 在Figma中创建 375x812px 画板
2. 参考应用截图重建5个页面：
   - Splash (启动页)
   - Home (主页)
   - Learn (学习页)
   - Review (复习页)
   - Progress (进度页)

## 3. 发布到 Axure Share (axshare.com)

### 前提条件

- 需要 Axure RP 软件 (付费)
- 需要 Axure 账户

### 步骤

1. 在 Axure RP 中重建应用 (参考 AXURE_STEPS.md)
2. 创建5个页面和交互
3. 在 Axure RP 中选择 "Publish to Axure Share"
4. 输入项目名称和设置
5. 获得分享链接

## 4. 发布到 Adobe XD

### Creative Cloud方法

1. 在 Adobe XD 中重建设计
2. 创建原型和交互
3. 选择 "Share for Review" 或 "Share for Development"
4. 发布到 Adobe Creative Cloud

### 导出方法

1. 重建所有页面和组件
2. 设置页面间的交互流程
3. 使用 "Prototype" 模式预览
4. 分享链接或导出文件

## 快速在线预览方案

如果您只需要快速分享预览，我建议：

1. **GitHub Pages**: 免费托管静态文件
2. **Netlify**: 拖拽部署，即时获得URL
3. **Vercel**: 快速部署，自动HTTPS

构建文件已准备好，在 `dist/spa` 文件夹中。
