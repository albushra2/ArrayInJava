console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 17 , 9 , 45 ]

 ["Str" , "alex","moh"]

 ['the','fox' 'over' lazy', 'dog' ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits=["tomato", "banana","watermelon"];
var bananaIndex = fruits.indexOf("banana");
var tomatoIndex = fruits.indexOf("tomato");

console.log("Index of banana :", bananaIndex);
console.log("Index of tomato :", tomatoIndex);


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var FavoriteFood=["Mnsaf","maqlobh", "yalanje","basta","kuba"];
var FavoriteSport=["padel", "tennis" , "swmming"];
var FavoriteMovie = [" frozen","ghambol","Fast & Furious ","The Green Mile"];


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(array){
    return array[0];
}
console.log(firstOfArray([1,4.5]));
console.log(firstOfArray(["t","u","g","x"]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(array){
    return array[array.length-1];
}
console.log(lastOfArray([1,4.5]));
console.log(lastOfArray(["t","u","g","x"]));


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// var array=[0,5,7,9];
// array.shift();
// array.shift();
// array.shift();
// array.unshift(1,3,4,6,8);
// array.push(10);

// console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// var array2 = [5,9,-7,3.5];
// array2.push(12);
// array2.pop();
// array2.unshift(4,9);
// array2.shift();
// console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

// function middleOfArray(array){
//  let mid=Math.floor(array.length/2);
// if(array.length % 2 === 1){
// return array[mid];
// }
// else {
//     return ` ${array[mid-1]} and ${array[mid]} `;
// }
// }
// console.log(middleOfArray([1,4,5]));
// console.log(middleOfArray(["t","u","g","x"]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// var animals= ['cat', 'ele', 'bird'];
// animals[0]='zebra';
// animals[1]='elephant';
// animals.pop();
// console.log(animals);  //['zebra', 'elephant']


// var nums=[1,2,3,8,9];
// nums[0]=5;
// nums[1]=-22;
// nums[2]=3.5;
// nums[3]=44;
// nums[4]=98;
// nums[5]=44;
// console.log(nums);  //[5,-22,3.5,44,98,44]

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

//  function indexOfArray(nums,index){
// return nums[index];

//  }
//  console.log(indexOfArray([1,2,3,8,9],3));
//  console.log(indexOfArray([1,2,3,8,9],1));
//  console.log(indexOfArray([1,2,3,8,9],4));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/


/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

// function addToEnd(array,num){
//  array.pop();
//  array.push(num);
//  return array;
// }
// console.log(addToEnd([1,2,3,8,9],55));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function sumArray(array){
// var sum=0;
// for(let i=0;i<array.length;i++){
// sum+=array[i];
// }
// return sum;
// }
// console.log(sumArray([1,2,3,8,9]));
// console.log(sumArray([1,2,3]));
// console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));


// another way
// function sumArray(array){
// var sum=0;
// let i=0;
// while(i<array.length){
// sum+=array[i];
// i++;
// }
// return sum;
// }
// console.log(sumArray([1,2,3,8,9]));
// console.log(sumArray([1,2,3]));
// console.log(sumArray([1,2,3,4,5,6,7,8,9,10]));



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function minInArray(array){
//     let short =array[0];
//     for(let i=1;i<array.length;i++){
//       if(short>array[i])
//     short=array[i];
//     }
//     return short;
// }
// console.log(minInArray([1,2,3,8,9,0]));
// console.log(minInArray([2,3,8,9]));
// console.log(minInArray([1,2,3,8,9]));


//another way
    //  function minInArray(array){
    //     let short =array[0];
    //     let i=1;
    //     while(i<array.length){
    //       if(short>array[i]){
    //       short=array[i];
    //       }
    //       i++;
    //     }
    //     return short;
    // }
    // console.log(minInArray([1,2,3,8,9,0]));
    // console.log(minInArray([2,3,8,9]));
    // console.log(minInArray([1,2,3,8,9]));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function removeFromArray(array,num){
// let i=0;
// while(i<array.length){
//     if(array[i]==num){
//     array.splice(i,1);
//     }
//     i++;
// }
// return array;
// }

// console.log(removeFromArray([1,2,3,8,9],8));
