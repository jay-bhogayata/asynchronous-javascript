let p = new Promise((resolve, reject) => {
  let sum = 1 + 3;
  if (sum == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((m) => console.log(m)).catch((m) => console.error(m));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

console.log("Hello world");

const one = new Promise((resolve, reject) => {
  resolve("one resolve");
});
const two = new Promise((resolve, reject) => {
  resolve("two resolve");
});
const three = new Promise((resolve, reject) => {
  resolve("three resolve");
});

Promise.all([one, two, three]).then((msgs) => console.log(msgs));

Promise.race([one, two, three]).then((msg) => console.log(msg));

// simple promise example using setTimeout function
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 is resolved");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 is rejected");
  }, 2000);
});

p1.then((msg) => console.log(msg));
p2.then((msg) => console.log(msg)).catch((msg) => console.error(msg));
