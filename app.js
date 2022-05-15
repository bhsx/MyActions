console.log("hi node.js");
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})
// console.log(JSON.parse(process.argv.TEST1))
