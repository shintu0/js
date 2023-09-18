// problem
// data = 1;

// console.log(data);

// data = 2;
// setTimeout(() => {
//   console.log(data);
// }, 2000);

// data = 3;
// console.log(data);

// *************PROMISE**********

//staus PENDING 0  RESOLVED 1 REJECTED 2

//ALL error will be handled in catch block

console.warn(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
const request = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Resolved");
  }, 300);
}
);

request.then((data) => console.warn(data));

//Error
const errorRequest = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Promise Rejected");
  }, 300);
}
);
errorRequest.then((data) => console.warn(data)).catch(err => console.warn(err));

// ***************************REAL WORLD APPLICATIONS******************************

let data = fetch("https://dummy.restapiexample.com/api/v1/employees"); //return promise

data.then((response) => {
  console.log(response.json());
  return response.json();
}).catch((err) => {
  console.log(err);
});

//***********PROMISE CHAINING ******* */

data.then((response) => {
  return response.json();
}).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
});

// ******FINALLY**************
/*
Will run on either case resolved or rejected
*/


data.then((response) => {
  return response.json();
}).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
}).finally((result) => {
  console.log(">>>>>>>>>>>FINALLY>>>>>>>>>>>>");
  console.log(result);
});


data.finally((result) => {
  console.log(">>>>>>>>>>>FINALLY>>>>>>>>>>>>");
  console.log(result);
});


//parallel promise handling

let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1 Second to Resolve")
  }, 1000);
})

let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("2 Second to Resolve")
  }, 2000);
})

let promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3 Second to Resolve")
  }, 3000);
});

//Drawback: not inform even if any one of it is rejected
let responseAll = Promise.all([promise1, promise2, promise3]);


responseAll.then(result => {
  console.log(">>>>>>>>>>>Then>>>>>>>>>>>>");
  console.log(result);
}).catch(err => {

  console.log(err);
})



let promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("4 Second to Reject");
  }, 4000);
});

//Best
let responseSettled = Promise.allSettled([promise1, promise2, promise3, promise4]);



responseSettled.then(result => {
  console.log(">>>>>>>>>>>Then>>>>>>>>>>>>");
  console.log(result);
}).catch(err => {

  console.log(err);
})


//result one which complete fast and first

let responseRace = Promise.race([promise1, promise2, promise3, promise4]);



responseRace.then(result => {
  console.log(">>>>>>>>>>>Then>>>>>>>>>>>>");
  console.log(result);
}).catch(err => {

  console.log(err);
})



