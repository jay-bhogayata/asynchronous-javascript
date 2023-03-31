async function fetchDataWithAsyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error");
  }
}

console.log("Hello world");

const data = fetchDataWithAsyncAwait();

data.then((d) => console.log(d)).catch((e) => console.error(e));

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// // try to run without async-await and see the difference

//sequential execution

function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("world");
    }, 1000);
  });
}

async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello); // log after 2 sec

  const world = await resolveWorld();
  console.log(world); // log after 2+1 sec
}

// sequentialStart();

async function concurrentStart() {
  const hello = await resolveHello();
  const world = await resolveWorld();

  console.log(await hello); //log after 2 sec
  console.log(await world); //log after 2 sec
}

// concurrentStart();

// parallel execution

async function parallel() {
  Promise.all([
    (async () => console.log(await resolveHello()))(), // log after 2 sec
    (async () => console.log(await resolveWorld()))(),
    // log after 1 sec
  ]);
}

parallel();
