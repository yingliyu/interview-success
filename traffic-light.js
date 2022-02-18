// 题目:某个路口的红绿灯，会按照红灯亮5s，黄灯亮2s，绿灯亮3s这样的顺序无限循环。要求：每一秒打印当前在亮的灯。

//  打印内容
const printContent = (str) => {
  console.log(str)
}

//  ---------------1、使用定时器递归实现---------------------

// let timer = null
// const main = () => {
//   printContent('红灯')

//   clearInterval(timer)
//   timer = setInterval(() => {
//     printContent('红灯')
//   }, 1000)

//   setTimeout(() => {
//     printContent('黄灯')
//     clearInterval(timer)
//     timer = setInterval(() => {
//       printContent('黄灯')
//     }, 1000)

//     setTimeout(() => {
//       printContent('绿灯')
//       clearInterval(timer)
//       timer = setInterval(() => {
//         printContent('绿灯')
//       }, 1000)

//       setTimeout(() => {
//         clearInterval(timer)
//         main()
//       }, 3000)
//     }, 2000)
//   }, 5000)
// }
// main()

//  ---------------2、使用Promise实现 ---------------
// let timer = null
// const sleep = (time, light) => {
//   return new Promise((resolve, reject) => {
//     printContent(light)
//     clearInterval(timer)
//     timer = setInterval(() => {
//       printContent(light)
//     }, 1000)
//     setTimeout(resolve, time)
//   })
// }

// const main = () => {
//   sleep(5000, '红灯')
//     .then(() => {
//       return sleep(2000, '黄灯')
//     })
//     .then(() => {
//       return sleep(3000, '绿灯')
//     })
//     .then(() => {
//       main()
//     })
//     .catch((e) => console.log(e))
// }

// main()
//  ---------------3、使用async/await实现 ---------------
let timer = null

const sleep = (time, light) => {
  return new Promise((resolve, reject) => {
    printContent(light)
    clearInterval(timer)
    timer = setInterval(() => {
      printContent(light)
    }, 1000)
    setTimeout(resolve, time)
  })
}

const main = async () => {
  while (true) {
    await sleep(5000, '红灯')
    await sleep(2000, '黄灯')
    await sleep(3000, '绿灯')
    clearInterval(timer)
  }
}

main()
