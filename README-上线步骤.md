# 上线步骤

这个网站是纯静态网站，里面只有 `index.html`、`styles.css` 和图片资源。最简单的上线方式是 Netlify 拖拽部署。

## 方式一：Netlify 拖拽上线

1. 打开 https://app.netlify.com/drop
2. 登录或注册 Netlify。
3. 把整个 `starter-site` 文件夹拖进去。
4. 等待几十秒，Netlify 会给你一个临时网址。
5. 以后要改内容时，改完文件后重新拖拽部署即可。

## 方式二：Vercel

1. 打开 https://vercel.com/new
2. 导入 GitHub 仓库，或上传这个文件夹。
3. Framework Preset 选择 `Other`。
4. Build Command 留空，Output Directory 留空。
5. 点击 Deploy。

## 上线前建议替换

- `index.html` 第 6 行：网页标题里的“你的名字”
- `index.html` 第 13 行：导航左上角名字
- `index.html` 第 99 行：邮箱 `hello@example.com`
- 页面里的案例文字：换成你真正做过或准备展示的练习项目

## 第一次练习目标

不要追求完美。你的目标是拿到一个真实网址，然后发给朋友或潜在客户，看他们是否能在 10 秒内明白你提供什么服务。
