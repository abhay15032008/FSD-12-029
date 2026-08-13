// function hello(){
//     console.log("hello");
// }
// function printName(){
//     console.log("abhay singh");
//     console.log("CSE student")
// }
// function print(){
//     for(let i=1;i<=5;i++){
//         console.log(i)
        
//     }
   
// }
//  print();
// printName();
// hello();



// function isadult(){
//     let age=prompt('input the age')
//     if(age>=12 && age<=17){
//         console.log('teenager');
//     }
//     else if(age>=18 && age<=45){
//     console.log('adult 18+')
// }else{
//     console.log('minor')
// }
// }
// isadult();


//Create a func to roll a dice always display the value of the dice (1to6).........
// function rolldice(){


// let random=Math.floor(Math.random()*6)+1;
// console.log(random)
// }
// rolldice();
 
//function with argument
// function printname( name, age){
//     console.log(`${name}'s age is ${age}`);

// }
// printname("Abhay",20);
// printname('kli',21);
// printname( '',14);

//sum function
// function sum(a,b){
//     console.log(a+b);

// }
// sum(301133343,53838838);
// sum(3,9);
// sum(2,4);

//PRACTICE average of three numbers
// function average(a,b,c){
//     let avg=((a+b+c)/3);
//     console.log((avg) );

// }
// average(6,6,6);

//PRACTICE multiplication table

// function multi(n){
//     for(let i=n;i<=n*10;i=i+n){
//         setTimeout(()=>{
//              console.log(i);

//         },((i/n)-1)*900)
       

//     }
// }
// multi(3);


// function getsum(n){
//     let sum=0;
//          for(let i=1;i<=n;i++){
//             sum+=i;
            

//          }
//          return sum;
         
//         }
 
//concatenate the string function

// let str=['hi',"hello","bye",'!'];
 
// function concat(str){
//    let allstr=''
//    for(let i=0;i<str.length;i++){
//       allstr+=str[i]+" ";
//    }

//    return allstr;
   
// }

// let sum=54;
// function calsum(a,b){
//    let sum=a+b;
// console.log(sum);
// }
// //calsum(1,5);
// console.log(sum);
  

//practice question

// let greet ='hello';  //global scope
// function changegreet(){
//    let greet ="namaste";
//    console.log(greet);
//    function innergreet(){
//       console.log(greet);
      
//    }
   
// }
// console.log(greet);
// changegreet();

// let sum=function(a,b){
//    return a+b;

// }
// let hello=function(){
//    console.log('hello')
// }
//  hello=function(){
//    console.log('namaste')
// }

// //Higher Order Function
//  function multigreet(func,n){//higher order function
//    for( let i=1;i<=n;i++){
//       func();
//    }
//  }
//  let greet = function(){
//    console.log("hello");

//  }
//  multigreet(greet ,5);

// let odd =function(n){
//    console.log(!(n%2== 0));
// }
// let even=function(n){
//    console.log((n%2== 0));
// }
// function oddoreven(request){
//    if(request == 'odd'){
//        let odd =function(n){
//            console.log(!(n%2== 0));
//        }
//        return odd;
//    }else if(request == 'even'){
//       let even=function(n){
//           console.log((n%2== 0));
//    } 
//    return even;
// }
//    else {
//       console.log('wrong request');
//    }
// }
  
// const calculator={
//    add(a,b){
//       return a+b;
//    },
//    sub(a,b){
//       return a-b;
//    },
//    multi(a,b){
//       return a*b;
//    }, 
// };


// practice question
// let arr=[24,34,59,6,9];
// function element(arr){
// let num=20;
// let result=[];

// for(let  i=0;i<arr.length;i++){
//    if(arr[i]>num){
//       result.push(arr[i]);
//    }
// }
   
// return result;
// }
// console.log(element(arr));

//write a js func to extract unique characters from a string
// function unique(str){
//    let result='';
//    for(let i=0;i<str.length;i++){
//       if(!result.includes(str[i])){
//       result+=str[i];
//    }
// }
// return result;
   
// }
// console.log(unique('asjhfhsjsajdhrt'))


//return longest country name with js function
// let list=['india','indonesia','united states of amrica','finland'];
// function country(list){
//    let longest=list[0];

//    for(let i=0;i<list.length;i++){
//       if(list[i].length>longest.length){
//          longest=list[i];
//       }

//    }
//    return longest;
// }
// console.log(country(list));

//count the no. of vowels in string arguments
// function countvowel(str){
//    let count=0;

//    for(let ch of str.toLowerCase()){
//       if("aeiou".includes(ch)){
//          count++;
//       }
//    }
//    return count;
// }
// console.log(countvowel("hello abhay"));

//another method
let str="apnacollege";
function countVowels(str){
   let count=0;
   for(let i=0;i<str.length;i++){
      if(str.charAt(i)=="a"
      ||str.charAt(i)=="e"
      ||str.charAt(i)=="i"
      ||str.charAt(i)=="o"
      ||str.charAt(i)=="u")
      {
         count++;
      }

      }

      return count;
}




