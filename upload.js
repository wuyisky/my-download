/**
* 这个文件会把当前执行目录同级的download同步到WebDav网盘
* 默认覆盖文件，不保留目录结构
* 系统变量
* @Param xxx_url dav地址 如https://dav.box.com/dav/download
* @Param xxx_username 
* @Param xxx_password
*/
const process = require("process")
const fs = require("fs")
const path = require('path');
const { createClient } = require("webdav");

const prefix = process.env.drive?.slice(0,-3).concat("_") || ""

const webdavUrl = process.env[prefix + 'url'] || process.env.url
const webdavUsername = process.env[prefix + 'username'] || process.env.username
const webdavPassword = process.env[prefix + 'password'] || process.env.password

~function checkSecret(){
    webdavUrl?? console.error(Error("WebDAV url is null"))
    webdavUsername?? console.error(Error("WebDAV username is null"))
    webdavPassword?? console.error(Error("WebDAV password is null"))
}()

const client = createClient(
    webdavUrl,
    {
        username: webdavUsername,
        password: webdavPassword,
    }
);

var downloadPath = path.join(__dirname, 'download');

async function uploadFile(filePath,filename){
    var buffer = fs.readFileSync(filePath)
    await client.putFileContents(filename, buffer, { overwrite: true, maxContentLength: 1024 ** 3 });
}

async function recursivelyUpload(basepath){
    var dir = fs.readdirSync(basepath,{
        withFileTypes: true
    })
    for (var file of dir){
        var subPath = path.join(basepath, file.name)
        if(file.isDirectory()){
            await recursivelyUpload(subPath)
        }else{
            await uploadFile(subPath,file.name)
        }
    }
}

(async () => {
    await recursivelyUpload(downloadPath)
    console.log(`✨ All file uploaded`)
})();
