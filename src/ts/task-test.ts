const f2 = async () => {
  console.log(2);
  return Promise.resolve(3);
  // return 3;
};
const f1 = async () => {
  console.log(1);
  // let f3 = await f2();
  let f3 = f2();
  console.log(f3);
};
f1();
new Promise((res, rej) => {
  console.log(4);
  res(5);
})
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err);
  });
console.log(10);
