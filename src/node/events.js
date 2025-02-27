const fs = require('fs');

setTimeout(() => {
  console.log('1 setTimeout');
}, 0);

setImmediate(() => {
  console.log('2 setImmediate')

});


fs.readFile(__filename, () => {
  console.log('3 I/O callback');
  setTimeout(() => {
    console.log('4 setTimeout inside I/O')
  }, 0)
  setImmediate(() => {
    console.log('5 setImmediate inside I/O')
  })
})

setTimeout(() => {
  console.log('6 next event timeout')
})

setImmediate(() => {
  console.log('7 setImmediate end')
})

console.log('8 Synchronous log');