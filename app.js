console.log("hi node.js");
process.argv.forEach((val, index) => {
  console.log(`${"_"+index+"_"}: ${"_"+val+"_"}`)
})
// let b=process.argv[2].split("")
console.log(process.argv[2].substr(0))
// let a=JSON.parse(process.argv[2])
// console.log(JSON.parse(process.argv.TEST1))

