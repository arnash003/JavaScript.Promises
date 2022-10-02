import "./styles.css";

let promise = new Promise(function (resolve, reject){
  //do something
});

// The Promise() constructor takes a function as an argument. The function also accepts two functions 
// resolve() and rejcet(). If the promise returns sucessfully, the resolve() function is called.
// If an error occurs, the reject() function is called.

const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);

// Promise {<pending>} <constructor>: "Promise"

// the then() method is used with the callback when the promise is sucessfully fulfilled or resolved
// the syntax of then() method is promiseObject.then(onFulfilled, onRejected);

// let countValue = new Promise(function (resolve, reject) {
//   resolve("Promise resolved")
// });

countValue
.then(function successValue(result) {
  console.log(result);
})
.then(function successValue() {
  console.log("You can call multiple functions this way");
});
// Output
// Promise resolved 
// You can call multiple functions this way 

// The catch(method)
// The catch() method us used with with the callback when the promise is rejected or if an error occurs

let countValue = new Promise(function (resolve, reject) {
  reject('Promise rejected')
});

countValue.then(
  function successValue(result) {
    console.log(result);
  },
)
.catch(
  function errorValue(result) {
    console.log(result);
  }
);
// Output
// Promise Rejected


document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
