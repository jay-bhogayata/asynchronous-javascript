function sayHello(name = "jay") {
  console.log(`Hello ${name}`);
}

const timer1Id = setTimeout(sayHello, 3000);
const timer2Id = setTimeout(sayHello, 3000, "john");

clearTimeout(timer1Id);
clearTimeout(timer2Id);

// Both setTimeout is clear nothing will be print on the console

const timer3Id = setInterval(sayHello, 500);
const timer4Id = setInterval(sayHello, 500, "john");

setTimeout(() => {
  clearInterval(timer3Id);
  clearInterval(timer4Id);
}, 5000); // stop the interval after 5 sec
