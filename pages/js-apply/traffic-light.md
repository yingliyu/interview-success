# js 红绿灯的三种实现方法

## 题目

某个路口的红绿灯，会按照红灯亮 5s，黄灯亮 2s，绿灯亮 3s 这样的顺序无限循环。要求：每一秒打印当前在亮的灯。

```js
// 打印结果形如（每秒打印一次）
红灯
红灯
红灯
红灯
红灯
黄灯
黄灯
绿灯
绿灯
绿灯
...
```

## 解题方法

### 方法 1——定时器递归

#### 思路

封装一个函数专门打印入参内容，入参是红灯|黄灯|绿灯。
定义一个方法 main()，main()内部执行：打印当前亮的灯就用`setInterval`每秒执行打印，红灯打印`setTimeout` 5s 后打印黄灯，再 setTimeout 2s 后打印绿灯再 setTimeout 3s 后清除定时器调用自己进行循环。

#### 实现源码

```javascript
let timer = null
const printContent = (str) => {
  console.log(str)
}
const main = () => {
  printContent('红灯')

  clearInterval(timer)
  timer = setInterval(() => {
    printContent('红灯')
  }, 1000)

  setTimeout(() => {
    printContent('黄灯')
    clearInterval(timer)
    timer = setInterval(() => {
      printContent('黄灯')
    }, 1000)

    setTimeout(() => {
      printContent('绿灯')
      clearInterval(timer)
      timer = setInterval(() => {
        printContent('绿灯')
      }, 1000)

      setTimeout(() => {
        clearInterval(timer)
        main()
      }, 3000)
    }, 2000)
  }, 5000)
}
main()
```

### 方法 2——Promise 实现

#### 思路

封装一个 sleep 方法：用来在指定的时间段，每秒打印指定内容，入参是：时间和打印的内容。
然后在 main 方法中使用`promise`的 then 回调依次执行红、黄、绿灯，绿灯之后再调用 main 方法继续循环。

#### 实现源码

```javascript
let timer = null
const printContent = (str) => {
  console.log(str)
}

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

const main = () => {
  sleep(5000, '红灯')
    .then(() => {
      return sleep(2000, '黄灯')
    })
    .then(() => {
      return sleep(3000, '绿灯')
    })
    .then(() => {
      main()
    })
    .catch((e) => console.log(e))
}

main()
```

> promise 相对于 setTimeout 来说，明显的避免了“回调地狱”问题，但是 也有弊端，最明显的就是有很多 then 回调，使代码略显冗余，不够简洁和语义化。 ES2017 标准引入了 async 函数，它使得异步操作变得更加方便，接下来我们用 async 函数来实现一下这个红绿灯问题。

### 方法 3——async/await 实现

#### 思路

封装一个 sleep 方法：用来在指定的时间段，每秒打印指定内容，入参是：时间和打印的内容。
和方法 2 的区别就是 main 方法，使用 ES8 的新特性，`async/await`实现异步。

#### 实现源码

```javascript
let timer = null
const printContent = (str) => {
  console.log(str)
}
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
```

用`async`函数实现起来代码很清爽，也提高了可读性，同时没有了被“回调地狱”支配的恐惧，避免了 then 回调的代码冗余，异步代码以同步的方式优雅的呈现了出来。
