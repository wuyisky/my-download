# plz-download
Github Action 离线下载到支持WebDAV的网盘

Using github action download resource then upload to netdisk.

![preview](https://raw.githubusercontent.com/ame-yu/plz-download/master/docs/preview.gif)

# 用途？
为Code、release做离线下载。

因为国内下个release真的是太慢了，不如asset的链接喂给github action。下完通过WebDAV传到我的网盘好了。

请勿滥用Github资源，谢谢🙏🏻

# 使用？
Fork这个项目, 点击项目workflow并启用
1. 新建wiki页面nutstore
2. settings->Secrets 
    - nutstore_url: DAV目录 e.g.https://dav.jianguoyun.com/dav/download
    - nutstore_username 用户名
    - nutstore_password 密码
3. 每次要下载时编辑Wiki的nutstore页面写上下载地址并保存页面(可多行)
4. 稍后前往网盘下载
> nutstore可以替换为box、yandex，如果是自建网盘或其他网盘请参照[添加指南](https://github.com/ame-yu/plz-download/tree/master/docs) <br>
> 添加后不同wiki页面填写会下载到不同的网盘<br>

# Tips 
本质上使用了wget,所以遇到复杂的下载链接,考虑如下格式编辑Wiki
```bash
"https://xxxxxx.com/download?123*(#*&^!*&#" -O download/修改这里的文件名
```


