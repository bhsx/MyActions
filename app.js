console.log("hi node.js");
process.argv.forEach((val, index) => {
  console.log(`${"_"+index+"_"}: ${"_"+val+"_"}`)
})
let a=JSON.stringify(process.argv)
console.log(a)
// console.log(JSON.parse(process.argv.TEST1))
