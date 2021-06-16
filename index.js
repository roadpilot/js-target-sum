// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not.

const findsum = (array,target) => {
  out = {}
  array.forEach(el => {
    if (el !== target-el && array.includes(target-el)) {out[el] = target-el;}
  })
  return Object.values(out).length>0;
}
console.log(findsum([5,7,1,2,8,4,3], 10))
console.log(findsum([5,7,1,2,8,4,3], 19))
