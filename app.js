console.log("hi node.js");
process.argv.forEach((val, index) => {
  console.log(`${"_"+index+"_"}: ${"_"+val+"_"}`)
})
let a=JSON.parse(process.argv[2])
console.log(process.argv[2].split(""))
// console.log(JSON.parse(process.argv.TEST1))
