function greet(name) {
  console.log(`Hello ${name}`);
}

function greetJay(greetFn) {
  const name = "Jay";
  greetFn(name);
}

greetJay(greet);

setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("world");
    setTimeout(() => {
      console.log("Jay");
    }, 1000);
  }, 1000);
}, 1000);
