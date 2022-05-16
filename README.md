# console-log-date
console.log/.info/.error/.warn日志输出带时间

#### Usage

```js
import "console-log-date" //import it first

console.log('1era')
//2022/5/16 下午4:09:59 [INFO]: 1era

console.error('1era', { 'as': [1, 'a', 123123] }, JSON.stringify(a))
//2022/5/16 下午4:09:59 [ERROR]: 1era [object Object] ["sadfa",23123,{"a":1,"b":"b"}]

```

