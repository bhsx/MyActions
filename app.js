console.log("hi node.js");
process.argv.forEach((val, index) => {
  console.log(`2${index}1: ${val}`)
  for (let i in val) {
  console.log(val[i]);
}
})
// console.log(JSON.parse(process.argv.TEST1))
