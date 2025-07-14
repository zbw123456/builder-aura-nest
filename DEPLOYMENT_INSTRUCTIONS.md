# 部署说明 - 创建永久公开链接

## 方法1: Netlify (推荐 - 最简单)

### 步骤:

1. 访问 [netlify.com](https://netlify.com)
2. 点击 "Sites" → "Add new site" → "Deploy manually"
3. 将整个 `dist/spa` 文件夹拖拽到部署区域
4. 等待部署完成，获得类似 `https://xxx.netlify.app` 的链接

### 优点:

- ✅ 完全免费
- ✅ 即时部署
- ✅ 自动HTTPS
- ✅ 全球CDN

## 方法2: Vercel

### 步骤:

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 上传 `dist/spa` 文件夹或连接GitHub
4. 获得 `https://xxx.vercel.app` 链接

## 方法3: GitHub Pages

### 步骤:

1. ���建GitHub仓库
2. 上传所有项目文件
3. 在Settings → Pages中启用
4. 获得 `https://username.github.io/repo-name` 链接

## 方法4: Surge.sh (命令行)

### 步骤:

```bash
npm install -g surge
cd dist/spa
surge
```

## 当前构建文件

您的应用已构建完成，包含以下文件:

- `dist/spa/index.html` - 主页面
- `dist/spa/assets/` - CSS和JS文件
- `dist/spa/favicon.ico` - 网站图标

## 应用功能

部署后的链接将包含完整的中文学习应用:

- 🔐 登录页面
- 🏠 主页 (类别和等级选择)
- 📚 学习页面 (词汇卡片)
- 🔄 复习页面
- 📊 进度页面
- ⚙️ 设置页面 (8种语言选择)

## 分享链接

部署完成后，您将获得一个永久的HTTPS链接，可以:

- 📱 在手机浏览器中打开
- 💻 在电脑上访问
- 🔗 分享给他人使用
- 📋 导入到Figma/Axure等设计工具

**推荐使用Netlify，5分钟内就能获得永久链接！**
