// @ts-nocheck

function objectFactory() {
  let obj = new Object();
  const Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.Prototype
  let ret = Constructor.apply(obj, arguments)
  return ret
}