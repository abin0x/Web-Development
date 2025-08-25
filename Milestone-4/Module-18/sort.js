const numbers = [5, 3, 8, 1, 2];
numbers.sort();
console.log(numbers);

const fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort();
console.log(fruits);
const ages=[1,5,2,88,77,3,4,6,22,55];
const age_sorted=ages.sort(function(a,b){return a-b});
console.log(age_sorted);
const ages_des=[1,5,2,88,77,3,4,6,22,55];
const age_sorted_descending=ages_des.sort(function(a,b){return b-a});
console.log(age_sorted_descending);