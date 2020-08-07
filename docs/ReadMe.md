### 增加网盘
* 先确认网盘支持WebDav
* 假设我要追加一个网盘叫做XXX
1. 新建Wiki页面叫做XXX
2. 修改.github/workflows/download.yml
```
# env后追加
XXX_url: ${{ secrets.XXX_url }}
XXX_username: ${{ secrets.XXX_username }}
XXX_password: ${{ secrets.XXX_password }}
```

3. 设置secret
    - XXX_url: https://dav.XXX.com/dav/download(链接格式取决于网盘)
    - XXX_username: xxxxxxx@xxxx.com
    - XXX_password: \*\*\*\*\*

编辑wiki的XXX页面就会下载到XXX网盘

## 定制指南
- 下载文件部分 查看[.github\workflows\download.yml](https://github.com/ame-yu/plz-download/blob/master/.github/workflows/download.yml)
- 上传文件部分 查看[upload.js](https://github.com/ame-yu/plz-download/blob/master/upload.js)