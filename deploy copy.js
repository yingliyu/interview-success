/**
 * 连接ftp，上传文件
 */
 const fs = require('fs');
 const path = require('path');
 const Client = require('ftp');
 const publicPath = path.resolve('./dist');
 
 let current = './';
 
 const client = new Client();
 
 function list(callback) {
   client.list(function (err, list) {
     if (err) {
       // console.log('list: ', err);
       return;
     }
     if (callback) {
       callback(list);
     }
   });
 }
 
 function has(name) {
   client.get(current + name, function (err) {
     if (err) {
       // console.log('has: ', err);
       return false;
     }
     return true;
   });
 }
 
 function remove(name) {
   client.delete(current + name, err => {
     if (err) {
       console.log('remove: ', err);
       return false;
     }
     return true;
   });
 }
 
 function upload(data, serverName, callback) {
   client.put(data, current + serverName, function (err) {
     if (err) {
       console.log('upload: ', err);
       return;
     }
     if (callback) {
       callback();
     }
   });
 }
 
 function mkdir(name, callback) {
   client.mkdir(current + name, function (err) {
     if (err) {
       // console.log('mkdir: ', err);
       return false;
     }
     if (callback) {
       callback();
     }
   });
 }
 
 function init() {
   list((data) => {
     for (const { type, name } of data) {
       if (type === '-') {
         remove(name);
       }
     }
   });
 }
 
 function load(filePath, callBack) {
   fs.readdir(filePath, function (err, files) {
     if (err) {
       console.warn(err);
       throw error;
     }
     files.forEach(function (filename) {
 
       const filedir = path.join(filePath, filename);
 
       fs.stat(filedir, function (error, stats) {
         if (error) {
           console.warn('获取文件stats失败');
           throw error;
         }
 
         // create directory on server
         if (stats.isDirectory()) {
           mkdir(filename, () => load(filedir, callBack));
           return;
         }
 
         const [, name] = filedir.split('dist/');
         const content = fs.readFileSync(path.resolve(filedir));
 
         if (callBack) {
           callBack(content, name);
         }
       });
 
     });
   });
 }
 
 (() => {
  const [host, user, password, url = ''] = process.argv.splice(2) || {};
  const config = { host, user, password };
  client.connect(config);
  current += url;
  
   client.on('ready', function () {
     init();
 
     setTimeout(() => {
       console.log('上传中，请等待');
       load(publicPath, (data, name) => upload(data, name));
     }, 5000);
   });
 
   setTimeout(() => {
     client.end();
     console.log('上传结束，请查看 ');
   }, 15000);

 })();
 
