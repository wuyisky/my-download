/**
* 这个文件会把当前执行目录同级的Download全传WebDav
* 默认覆盖文件，不保留目录结构，全部放同级dav制定目录
* 系统变量
* @Param dav_url dav地址如https://dav.box.com/dav/download
* @Param dav_username 
* @Param dav_password 
*/
const process = require("process")
const fs = require("fs")
const { createClient } = require("webdav");
const path = require('path');


const username = process.env.dav_username
const password = process.env.dav_password
const davPath = process.env.dav_url

const client = createClient(
    davPath,{username, password}
);
var downloadPath = path.join(__dirname, 'Download');

async function uploadFile(path,filename){
    var buffer = fs.readFileSync(path)
    await client.putFileContents(filename, buffer, { overwrite: true });
}

async function recursivelyUpload(basepath){
    var dir = fs.readdirSync(basepath,{
        withFileTypes: true
    })
    for (var file of dir){
        console.log(file)
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
})();



