// @ts-nocheck
Function.prototype.myCall = function (context, ...argvs) {
  console.log('myCall: ', context, argvs, this);
  let symFn = Symbol()
  context[symFn] = this
  const fnRes = context[symFn](...argvs)
  Reflect.deleteProperty(context, symFn)
  return fnRes
};

function test(a, b) {
  console.log('inner test: ', a, b, this);
}

test.myCall(1, 2);

Function.prototype.myBind = function (context) {
  const self = this;
  const outArgus = Array.from(arguments).slice(1)
  const cb = function () {
    const isNew = typeof new.target !== 'undefined'
    const inArgus = Array.from(arguments).slice()
    return self.call(isNew ? this : context, ...outArgus.concat(inArgus))
  }
  cb.prototype === self.prototype;
  return cb;
}
