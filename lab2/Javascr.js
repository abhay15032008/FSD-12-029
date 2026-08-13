// use of (this) in java script

//this keyword refers to an object that is executing the current piece if code

// const student={
// name:'abhay',
// age:20,
// eng:96,
// physics:97,
// math: 85,
// getAvg(){
//     let avg=(this.eng+this.physics+this.math)/3;
//     console.log(`${this.name} got average marks = ${Math.ceil(avg)}`);
// }
// //here this is used as calling object 'jo object function getAvg ko call kre'

// };

// //TRY
//the try statement allow you to define a block of code to be tested for errors while it is being executed

// //CATCH
//the catch statement allow you to define a block of code to be executed , if an error occurs in the try block..

// console.log('hello')
// console.log('hello')
// let a=5;
//  try{
//  console.log(a);
// }catch{
//     console.log('there ia an error')
// }
// console.log('hello2')

// console.log('hello3')




//Miscellaneous topics

// 1) Arrow function =>
//     const sum=(a,b)=>{
//         console.log(a+b);
//     };
// const cube=(n)=>{
//     return n*n*n;
// };
// const powr=(a,b)=>{
//     return a**b;
// };
// //arrow func IMPLICIT return

// const mult=(n)=>(
//      n*n*n
// );

//Set Timeout : inbuilt function hai
// console.log('hii there');

// setTimeout (()=>{
// console.log('abhay constructions work')
// },1000)

// console.log('welcome to');

//set Interval
// console.log('hello Abhay');
// let id= setInterval(()=>{
//     console.log('how are you ')
// },1000);
// console.log('are you a student')

// const student={
//     name:'abhay',
//     marks:96,
//     prop:this,
//     getName: function(){
//         console.log(this)
//         return this.name;
//     },
// getMarks:()=>{
//     console.log(this); //parent scope -> window
//     return this.marks;
// },
// getinfo1: function(){
//     setTimeout( () =>{
//         console.log(this)// student object
//     },1000)
// },
// getinfo2: function(){
//     setTimeout( function(){
//         console.log(this) // window object
//     },1000)
// },

// };

//practice ques:1
// const sqaure=(n)=>{
// return n*n;
// };

//practice ques:2
//   let id=  setInterval(()=>{
//         console.log('hello world')
//     },2000);
//     setTimeout(()=>{
//         clearInterval(id);
//         console.log("clear interval")
//     },10000 
// );

//  arrayaverage= (arr)=>{
//     let total=0;
//     for(let number of arr){
//         total+=number;
//     }
//     return total/arr.length;

// };
// let arr=[1,2,3,4,5,6];
// console.log(arrayaverage(arr));

//practice ques
// let n=7;
// even=(n)=>{
//     if(n%2==0){
//         return true;
//     }else{
//        return false;
//     }
   
// }
// console.log(even(n));

const object ={
    message: 'Hello world ! ',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);


