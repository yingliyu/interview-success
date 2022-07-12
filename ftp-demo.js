/*
 * @Author: ylyu
 * @Date: 2022-07-11 15:18:26
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-12 09:45:32
 * @Description:
 */
const Client = require('ftp')
const fs = require('fs')
const path = require('path')
const publicPath = path.resolve('./dist')

const c = new Client()
const host = '127.0.0.1'
const user = 'root'
const password = 'root'

// ----------1.读ftp服务器目录下的文件(夹)------------
c.on('ready', function () {
  c.list(async (err, list) => {
    if (err) throw err
    console.log(list)
    // 读取本地文件
    c.end()
  })
})

// --------------2.download file-------------
// c.on('ready', function () {
//   c.get('README.md', function (err, stream) {
//     if (err) throw err
//     stream.once('close', function () {
//
//     stream.pipe(fs.createWriteStream('README.local-copy.md'))
//   })
// })

// --------------------3.upload file--------------------
// c.on('ready', function () {
//   c.put('README.md', 'README.remote-copy.md', function (err) {
//     if (err) throw err
//     c.end()
//   })
// })

c.connect({
  host,
  user,
  password,
})
