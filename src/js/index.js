const arr = [22, 44, 78];

let myFunc = (a) => {
  console.log(`myToo :  ${a}`);
};

const arr2 = [...arr, 487, 955];
myFunc(arr2[1]);
