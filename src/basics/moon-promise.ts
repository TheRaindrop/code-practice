const PENDING_STATE = 'pending';
const FULFILLED_STATE = 'fulfilled';
const REJECTED_STATE = 'rejected';

const isFunction = function (fun: any) {
  return typeof fun === 'function';
};

const isObject = function (obj: any) {
  return obj && typeof obj === 'object';
};

class MoonPromise {
  state: typeof PENDING_STATE | typeof FULFILLED_STATE | typeof REJECTED_STATE =
    PENDING_STATE;
  // 成功的值，或者失败的原因
  value: any = undefined;

  // 存储成功和失败时的回调
  onFulfilledCallbacks: Function[] = [];
  onRejectedCallbacks: Function[] = [];

  constructor(executor: (resolve: Function, reject: Function) => void) {
    executor(this._resolve.bind(this), this._reject.bind(this));
  }

  _resolve(value: any) {
    console.log('_resolve: ', value, this.onFulfilledCallbacks);
    this.state = FULFILLED_STATE;
    this.onFulfilledCallbacks.forEach((fn) => fn(value));
  }
  _reject(reason: any) {
    console.log('_reject: ', reason);
    this.state = REJECTED_STATE;
    this.onRejectedCallbacks.forEach((fn) => fn(reason));
  }

  // prototype
  then(onFulfilled: Function, onRejected?: Function) {
    this.onFulfilledCallbacks.push(onFulfilled);
    this.onRejectedCallbacks.push(onRejected);
  }
  catch() {}
  finally() {}

  resolutionProcedure(promise: MoonPromise, x: any) {
    if (x instanceof MoonPromise) {
      // return x.then(resolve, reject);
    }
  }
}

const mPro = new MoonPromise((r, j) => {
  setTimeout(() => {
    r('hello');
    // j('error')
  }, 0);
});

console.log('moonPromise: ', mPro);

mPro.then(
  (v) => {
    console.log('then: ', v);
  },
  (r) => console.log('then error: ', r)
);

setTimeout(() => {
  console.log('latest mPro: ', mPro);
});
