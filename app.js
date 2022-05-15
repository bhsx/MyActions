console.log("hi node.js");
process.argv.forEach((val, index) => {
  console.log(`${"_"+index+"_"}: ${"_"+val+"_"}`)
})

// console.log(JSON.parse(process.argv.TEST1))
