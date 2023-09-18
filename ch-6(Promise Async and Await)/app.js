const PENDING = 0, FULFILLED = 1, REJECTED = 2;

function customPromise(executer) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(result) {
    if (state !== PENDING) {
      return;
    }
    state = FULFILLED;
    value = result;
    handlers.forEach((h) => h(value));


  }
  function reject(err) {
    if (state !== PENDING) return;
    state = REJECTED;
    value = err;

    catches.forEach(f => f(value));


  }
  this.then = function (callback) {
    if (state === FULFILLED) callback(value);
    else {
      handlers.push(callback)
    }
    executer(resolve, reject);
  }
}

const doWork = (res, rej) => {
  setTimeout(() => {
    res("Hello World");
  }, 3000);
}


let someFuturevalue = new customPromise(doWork);


someFuturevalue.then(value => console.log(value));