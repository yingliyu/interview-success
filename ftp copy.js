/*
 * @Author: ylyu
 * @Date: 2022-07-11 15:18:26
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-11 17:54:34
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

// 读ftp服务器目录下的文件，并删除本地目录下的文件(夹)
c.on('ready', function () {
  console.log('正在上传，请耐心等待...')

  c.list(async (err, list) => {
    if (err) throw err
    // 删除ftp服务器目录下的文件(夹)
    // deleteFiles(list)
    // 读取本地文件
    try {
      const res = await readFiles(publicPath)
      console.log('res--', res)

      if (res) {
        // 文件至ftp服务器
        uploadToFtp(res)
      } else {
        console.log('read file error')
      }
    } catch (error) {
      throw error
    }
    // console.log('上传完成')
    // c.end()
  })
})

// 读取本地指定目录下所有文件(夹)
const readFiles = (filePath) => {
  // console.log('readFiles')
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) {
        console.warn(err)
        reject(err)
      }
      // console.log('=11==', files)
      resolve({ filePath, files })
    })
  })
}

// 文件(夹)批量上传至ftp服务器
const uploadToFtp = ({ filePath, files }, type) => {
  console.log('files--', filePath, files)
  files.forEach(async (filename) => {
    // console.log('filename--', filename)

    const fileDir = path.join(filePath, filename)
    const d = fs.statSync(fileDir)
    if (d.isDirectory()) {
      try {
        const result = await makeDir(filename)
        if (!result) {
          return
        }
        const res = await readFiles(fileDir)
        console.log('目录==', filename, fileDir, res)

        if (res) {
          // 文件至ftp服务器
          uploadToFtp(res, 1)
        }
      } catch (error) {
        throw error
      }
      return
    }
    const [, name] = filePath.split('\\dist\\')
    // console.log('name--', name)

    const destPath = !type && !name ? `./${filename}` : `./${name}/${filename}`
    // data可以是可读流、缓冲区或本地文件的路径。useCompression可选默认为false
    c.put(fileDir, destPath, (err) => {
      if (err) {
        console.log('client put error: ', err)
      }
    })
  })
}

const makeDir = (name) => {
  return new Promise((resolve, reject) => {
    c.mkdir('./' + name, (err) => {
      if (err) {
        console.log('mkdir error: ', err)
        resolve(false)
      }
      resolve(true)
    })
  })
}

// 删除ftp服务器目录下的文件(夹)
const deleteFiles = (files) => {
  files.forEach((item) => {
    if (item.type === 'd') {
      // 删除目录
      c.rmdir(item.name, true, function (err) {
        if (err) {
          console.log('rmdir: ', err)
        }
      })
    } else {
      // 删除文件
      c.delete('./' + item.name, function (err) {
        if (err) {
          console.log('delete file error: ', err)
          return
        }
      })
    }
  })
}
// --------------2.download file-------------
// c.on('ready', function () {
//   c.get('README.md', function (err, stream) {
//     if (err) throw err
//     stream.once('close', function () {
//       c.end()
//     })
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
