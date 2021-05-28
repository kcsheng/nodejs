// console.log(global);

setTimeout(() => {
  console.log("Arrive after 5 sec.");
  clearInterval(intv);
}, 5000);

const intv = setInterval(() => {
  console.log("Arrive every sec.");
}, 1000);

console.log(__dirname); // current directory path
console.log(__filename); //current file path
