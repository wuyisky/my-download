# plz-download
Using github action download something, like a release artifact and upload to my driver

![alt text](https://raw.githubusercontent.com/ame-yu/plz-download/master/docs/preview.gif)

# 用途？
我想国外的用户是用不到的，国内下个release asset真的是慢的要死。

不如麻烦下github，我把asset的链接给github action。通过DAV传到我的网盘好了。

还是说下，也尽量不要下载与开发无关的东西。毕竟公共资源不应该被滥用。

# 使用？
Fork这个项目, 点击项目workflow并启用
1. settings->Secrets 
    - dav_url: DAV目录 e.g.https://dav.jianguoyun.com/dav/download
    - dav_username 用户名
    - dav_password 密码
2. 每次要下载时编辑Wiki的Home页面写上下载地址并保存页面(可多行)
3. 等下去网盘取

> 建议把编辑Home的页面加入书签 https://github.com/你的账户名/plz-download/wiki/Home/_edit

## 定制指南
- 下载文件部分 查看[.github\workflows\download.yml](https://github.com/ame-yu/plz-download/blob/master/.github/workflows/upload.yml)
- 上传文件部分 查看[upload.js](https://github.com/ame-yu/plz-download/blob/master/upload.js)
