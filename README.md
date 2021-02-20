TypeScript React MobX Async Observable Demo
==========================

在Mobx中处理异步操作追踪其状态比较麻烦，参看：https://cn.mobx.js.org/best/actions.html#async--await

我想利用之前使用 [react-async-hook](https://github.com/slorber/react-async-hook)，定义一个AsyncObservable来持有异步操作的结果状态，
初步尝试成功，但是这只是一个极简单的模型，如果真的使用，可能还需要处理很多种情况，担心搞不定。

Update:
react-async-hook因为是hook，可以依赖某些值进行变动，而在mobx里，人们似乎更倾向于手动触发副作用。但某些情况下，在mobx中当我们需要自动依赖于某个值变化触发操作时，可以使用`reaction`做到

```
npm install
npm run demo
```

It will open page on browser automatically.
