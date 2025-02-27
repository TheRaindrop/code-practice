class MyPromise {
  // [[PromiseState]] = ''
  // [[PromiseResult]] = ''

  // 初始状态
  state = 'pending';
  // 成功的值
  result = undefined;

  value: string | undefined;
  reason: string | undefined;

  constructor(resolve?: () => void, reject?: () => void) {}

  then(): MyPromise {
    return new MyPromise();
  }
  catch() {}
  finally() {}
}

MyPromise.prototype.then = () => {};
