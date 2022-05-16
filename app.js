console.log("hi node.js");
process.argv.forEach((val, index) => {
    console.log(`${"_" + index + "_"}: ${"_" + val + "_"}`)
})

let b = process.argv[2]
let parse = JSON.parse(b);
console.log(parse);
parse.forEach((val) => {
    console.log(val)
})
// console.log(b.substring(0, b.length - 2))
// let a=JSON.parse(process.argv[2])
// console.log(JSON.parse(process.argv.TEST1))

