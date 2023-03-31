- in most basic from JavaScript is Synchronous , single threaded and blocking

- Synchronous means that the code is executed line by line

```js
function one() {
  console.log("one");
}
function two() {
  console.log("two");
}
one();
two();
// logs one then two
```

- blocking : no matter how long previous takes to execute , the next task will not be executed until the previous task is done

- single threaded : means that only one task can be executed at a time. each thread do one task at a time.only one thread main thread that executes the code.

- Async Js How?
  - just js is not enough.
  - we need new pieces are outside js to help us
  - where browser or node or any js runtime comes into play
  - in web browser web apis help us to make js async
    - setTimeout,setInterval
    - addEventListener
    - callback
    - promise
    - async and await is help us to do this async work

### setTimeout()

- after a set time period is elapsed run block of code

```js
setTimeout(function,durations(in ms),param1,param2)
```

- to clear the timeout

```js
const timerId = setTimeout(function,duration,params...)
clearTimeout(timerId)
```

### setInterval()

- this function repeatedly runs same code over and over again at regular intervale

```js
setInterval(function,durations(in ms),param1,param2)
```

- to clear the interval

```js
const timerId = setInterval(function,duration,params...)
clearInterval(timerId)
```

### Some point to notes about timeout and interval

- timers and interval are not feature of js. implemented by browser or js run time(node,deno,bun etc..)

- duration parameter is min delay not guaranteed delay

```js
setTimeout(() => {
  console.log("Hello world");
}, 0);

for (let index = 0; index < 10000; index++) {
  console.log(index);
}
```

- this code will print 0 to 9999 (it will take some time then) then hello world because 0 is min delay not guaranteed delay

- it is possible to achieve same effect as setInterval using recursive setTimeout()

```js
setTimeout(function run() {
  console.log("Hello");
  setTimeout(run, 100);
}, 100);
```

### Callback:

- in javascript function is first class citizen
- just like any other object we can pass function as argument to another function
- a function can also return another function

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

function greetJay(greetFn) {
  const name = "Jay";
  greetFn(name);
}

greetJay(greet);
```

- any function that is passed as argument to another function is called callback function

- the function that are accepting callback function are called higher order function

- callback can be synchronous or asynchronous

- example of synchronous callback are

```js
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.sort((a, b) => a - b);
nums.map((num) => num * 2);
```

- example of asynchronous callback are

```js
function greet(name) {
  console.log(`Hello ${name}`);
}
setTimeout(greet, 1000, "Jay");
```

- problem with callback : callback hell

```js
setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("world");
    setTimeout(() => {
      console.log("Jay");
    }, 1000);
  }, 1000);
}, 1000);
```

### Promise

- A promise is simply an object that represents the eventual completion or failure of an asynchronous operation

- A promise always in one of three states

  - pending : initial state , neither fulfilled nor rejected

  - fulfilled : meaning that the operation was completed successfully

  - rejected : meaning that the operation failed

- promise help us to deal with async code in more readable and manageable way compare to callback

- callback hell can be avoided by using promise

- How to create promise

```js
const promise = new Promise();
```

- how to fullfil or reject promise

```js
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("success");
  } else {
    reject("failure");
  }
});
```

- how to execute callback when promise is fulfilled or rejected

```js
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

- it is also possible to chain multiple then

```js
promise
  .then((data) => {
    console.log(data);
    return "hello";
  })
  .then((data) => {
    console.log(data);
    return "world";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```
