/*
 * @Author: ylyu
 * @Date: 2022-07-11 15:18:26
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-12 11:24:42
 * @Description:
 */
const Client = require('ftp')
const fs = require('fs')
const path = require('path')
const CLI = require('clui')
const Spinner = CLI.Spinner
const publicPath = path.resolve('./dist')

const c = new Client()
const host = '127.0.0.1'
const user = 'root'
const password = 'root'
// 读ftp服务器目录下的文件，并删除本地目录下的文件(夹)
c.on('ready', async () => {
  console.time('耗时')
  console.log('正在上传，请耐心等待')
  const spinner = new Spinner('文件上传中...')
  spinner.start()
  try {
    // 删除ftp服务器目录下的文件(夹)
    await deleteFiles()
    // console.log('历史文件删除完成')
    await readFiles(publicPath)
    spinner.stop()
    console.log('--上传完成--')
    console.timeEnd('耗时')
  } catch (error) {
    spinner.message(error)
    spinner.stop()
    throw error
  }
  c.end()
})

// 读取本地指定目录下所有文件(夹)
const readFiles = (filePath) => {
  // console.log('readFiles')
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, async (err, files) => {
      if (err) {
        console.warn(err)
        reject(err)
      }
      for (let i = 0; i < files.length; i++) {
        const filename = files[i]
        const fileDir = path.join(filePath, filename)
        const d = fs.statSync(fileDir)
        if (d.isDirectory()) {
          try {
            await makeDir(filename)
            await readFiles(fileDir)
          } catch (error) {
            reject(error)
          }
        } else {
          const [, name] = fileDir.split('\\dist\\')
          try {
            await uploadToFtp(fileDir, name)
          } catch (error) {
            console.log('put error', error)
          }
        }
      }
      resolve()
    })
  })
}

// 文件(夹)批量上传至ftp服务器
const uploadToFtp = (filePath, name) => {
  return new Promise((resolve, reject) => {
    // data可以是可读流、缓冲区或本地文件的路径。useCompression可选默认为false
    c.put(filePath, './' + name, (err) => {
      if (err) {
        console.log('client put error: ', err)
        reject(err)
      }
    })
    resolve()
  })
}

const makeDir = (name) => {
  return new Promise((resolve, reject) => {
    c.mkdir('./' + name, (err) => {
      if (err) {
        // console.log(JSON.stringify(err), err)
        // Directory already exists
        if (err && err.code === 550) {
          resolve()
        } else {
          reject(err)
        }
      }
      resolve()
    })
  })
}

// 删除ftp服务器目录下的文件(夹)
const deleteFiles = () => {
  return new Promise((resolve, reject) => {
    // 读取本地文件
    c.list((err, list) => {
      if (err) throw err
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        if (item.type === 'd') {
          // 删除目录
          c.rmdir(item.name, true, function (err) {
            if (err) {
              reject(err)
              return
            }
          })
        } else {
          // 删除文件
          c.delete('./' + item.name, function (err) {
            if (err) {
              reject(err)
              return
            }
          })
        }
      }
      resolve()
    })
  })
}

c.connect({
  host,
  user,
  password,
})
