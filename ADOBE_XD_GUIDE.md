# Adobe XD 重建指南

## 📱 艺术板设置

### 创建画板

- 选择 "iPhone 12 Pro" 模板 (375x812px)
- 或自定义 375x600px 艺术板
- 创建7个画板对应7个页面

### 页面结构

1. **Login** - 登录页面
2. **Splash** - 启动页面
3. **Home** - 主页
4. **Learn** - 学习页面
5. **Review** - 复习页面
6. **Progress** - 进度页面
7. **Settings** - 设置页面

## 🎨 设计规范

### 颜色库

```
登录页背景: #dbeafe
启动页背景: #3b82f6
主页背景: #22c55e
学习页背景: #8b5cf6
复习页背景: #06b6d4
进度页背景: #f59e0b
设置页背景: #6b7280
```

### 组件库

- 按钮样式 (主要、次要、透明)
- 卡片组件 (白色半透明)
- 导航栏
- 下拉菜单
- 进度圆点 (白色、绿色、红色)

## 🔄 交互设计

### 页面跳转

- Tap触发 → 跳转到目标画板
- 添加过渡动画 (Push Left/Right)

### 状态变化

- 下拉菜单展开/收起
- 按钮按下状态
- 进度圆点颜色变化

### 组件状态

- Toggle开关 (设置页面)
- 选项卡切换 (Week/Month/Year)
- 表单验证状态

## 📊 数据内容

### 文本内容

- 界面文字: "Learning Assistant", "Daily Vocabulary"
- 示例数据: "156 Words Learned", "89% Accuracy"
- 词汇示例: "Guten Tag", "Danke schön"

### 图标

- 使用Adobe XD内置图标库
- 或导入SVG图标 (设置、用户、学习等)

## 🚀 发布到Adobe Creative Cloud

### 步骤

1. 完成所有画板和交互设计
2. 点击 "Share" → "Share for Review"
3. 选择 "Anyone with the link can view"
4. 获得分享链接: `https://xd.adobe.com/view/xxx`

### 分享选项

- **Review**: 获取反馈和评论
- **Development**: 提供CSS代码和资源
- **Presentation**: 全屏演示模式

## 💡 推荐工作流程

1. **导入截图**: 先截取React应用每个页面作为参考
2. **创建组件**: 建立可重用的UI组件
3. **添加交互**: 设置点击和导航
4. **预览测试**: 使用Preview模式测试
5. **发布分享**: 生成Creative Cloud链接

## 📋 检查清单

- [ ] 7个主要画板已创建
- [ ] 颜色和字体已设置
- [ ] 交互链接已添加
- [ ] 组件库已建立
- [ ] 响应式布局已调整
- [ ] 发布设置已配置
