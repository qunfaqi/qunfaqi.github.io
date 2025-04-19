# 新彩虹群发器官方网站

这是新彩虹群发器的官方网站项目，采用纯静态HTML、CSS和JavaScript构建。

## 项目结构

```
/
├── index.html        # 主页面
├── css/              # 样式文件
│   └── style.css     # 主样式文件
├── js/               # JavaScript文件
│   └── main.js       # 主脚本文件
├── images/           # 图片文件夹
│   ├── dashboard.png # 主界面截图
│   ├── accounts.png  # 账号管理界面
│   ├── messaging.png # 消息编辑界面
│   └── analytics.png # 数据分析界面
└── README.md         # 项目说明
```

## 如何使用

1. 下载或克隆此项目到您的计算机
2. 用您的软件实际截图替换 `images` 目录中的占位图片
3. 根据需要编辑 `index.html` 文件更新内容
4. 部署到您的网站服务器

## 自定义

### 修改颜色方案

网站的颜色可以通过编辑 `css/style.css` 文件中的 `:root` 部分进行更改：

```css
:root {
    --primary-color: #6e48aa;     /* 主色调 */
    --secondary-color: #9d50bb;   /* 次要色调 */
    --accent-color: #ff8a00;      /* 强调色 */
    /* 其他颜色变量... */
}
```

### 更新联系信息

编辑 `index.html` 底部的 `footer` 部分来更新联系信息和社交媒体链接。

### 添加更多内容

可以通过复制现有的部分结构，并根据需要修改内容来添加新的内容板块。

## 部署

这是一个纯静态网站，可以部署到任何支持静态网站的托管服务，如：

- GitHub Pages
- Netlify
- Vercel
- 传统虚拟主机

## 兼容性

本网站兼容所有现代浏览器，包括：

- Chrome
- Firefox
- Safari
- Edge

## 许可

该项目仅供新彩虹群发器官方使用。 