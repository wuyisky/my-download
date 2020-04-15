# plz-download
Using github action download something, like a release artifact and upload to my driver

# 用来干啥？
我想国外的用户是用不到的，国内下个release asset真的是慢的要死。

不如麻烦下github，我把asset的链接给github action。通过DAV传到我的网盘好了。

还是说下，也尽量不要下载与开发无关的东西。毕竟公共资源不应该被滥用。

# 使用？
Fork这个项目
1. setting 改自己的DAV账号密码，dav_username dav_password 这两个secret必须的
2. 每次要下载时编辑Wiki的Home页面写上几行uri
3. Action 成功就是传好了

## 定制指南
下载文件部分 查看.github\workflows\upload.yml 
上传文件部分 查看upload.js 这个文件
