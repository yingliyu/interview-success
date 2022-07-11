/**
 * 复制文件到指定目录
 */
const fs = require('fs')
const path = require('path')
const Client = require('ftp')
const publicPath = path.resolve('./dist')

let current = './'

const client = new Client()

// 检索路径的目录列表，路径默认为当前工作目录
function list(callback) {
  client.list(function (err, list) {
    if (err) {
      // console.log('list: ', err);
      return
    }
    if (callback) {
      callback(list)
    }
  })
}

// 删除服务器上的文件或目录
function remove(name) {
  client.delete(current + name, (err) => {
    if (err) {
      console.log('client delete error: ', err)
      return false
    }
    return true
  })
}

// 将数据发送到服务器以存储到serverName
function upload(data, serverName) {
  // console.log('upload func', data, serverName)

  // data可以是可读流、缓冲区或本地文件的路径。useCompression可选默认为false
  client.put(data, current + serverName, function (err) {
    if (err) {
      console.log('client put error: ', err)
    }
  })
}

function mkdir(name, callback) {
  client.mkdir(current + name, function (err) {
    if (err) {
      // console.log('mkdir: ', err);
      return false
    }
    if (callback) {
      callback()
    }
  })
}

function init() {
  list((data) => {
    console.log('===', data)

    for (const { type, name } of data) {
      console.log('list===', type, name)

      if (type === '-') {
        remove(name) // 删除文件（目录不删）
      }
    }
  })
}

function load(filePath, callBack) {
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
      throw error
    }
    files.forEach(function (filename) {
      const filedir = path.join(filePath, filename)
      // console.log('===', filedir, filename)
      fs.stat(filedir, function (error, stats) {
        if (error) {
          console.warn('获取文件stats失败')
          throw error
        }

        // create directory on server
        if (stats.isDirectory()) {
          mkdir(filename, () => load(filedir, callBack))
          return
        }

        const [, name] = filedir.split('\\dist\\')
        const content = fs.readFileSync(path.resolve(filedir))

        if (callBack) {
          callBack(content, name)
        }
      })
    })
  })
}

;(() => {
  // console.log('process==', process.argv)
  const host = '127.0.0.1'
  const user = 'root'
  const password = 'root'
  const url = ''
  // const [host, user, password, url = ''] = process.argv.splice(2) || {} // argv: [ 'D:\\nodejs\\node.exe', 'D:\\lemon\\leetcode\\deploy' ],
  const config = { host, user, password }
  client.connect(config)
  current += url

  client.on('ready', function () {
    init()

    setTimeout(() => {
      console.log('文件上传中，请耐心等待...')
      load(publicPath, (data, name) => upload(data, name))
    }, 5000)
  })

  setTimeout(() => {
    client.end()
    console.log('上传结束，请查看 ')
  }, 15000)
})()
