const moonPerson = {
  [Symbol.toStringTag]: 'xxxxxxxx',
  arr: [1, 2, 3, 4],
  [Symbol.iterator]: function () {
    let current = 0;
    return {
      next: function () {
        return {
          value: 'mooon',
          done: current++ >= moonPerson.arr.length
        }
      }
    }
  },
  // [Symbol.asyncIterator]: function() {
  //   return {
  //     next: function() {
  //       return Promise.resolve({
  //         value: 'moon promise',
  //         done: false
  //       })
  //     }
  //   }
  // }
}

console.log('tag: ', moonPerson.toString())
let i = 0;
for (let item of moonPerson) {
  console.log('iterator: ', item);
  i++;
  if (i >= 10) {
    break;
  }
}


