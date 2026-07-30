//manual way to print

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");

//loops using

// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// for(let k=5;k>=1;k=k-2){
//     console.log(k);
// }
// for(let j=1;j<=15;j=j+2){
//     console.log(j);
// }
// for (let l=2;l<=10;l=l+2){
//     console.log(l);
// }
//  let n= prompt("write your number"); 
//  n=parseInt(n);

// for(let m=n;m<=n*10;m=m+n){
//     console.log(m);
// }


// for(i=1;i<=3;i++){
//     console.log(`outer loop${i}`)
//     for(j=1;j<=3;j++){
//         console.log(j);
//     }

// While loop
//  let j=2;
//  while(j<=10){
//     console.log(j);
//     j=j+2;
//  }



// const favourite="lailamajnu" ;
// let guess=prompt("enter your Movie ");
// while((guess!=favourite)&&(guess!='quit')){
//    guess=prompt("please try again ");
// }
// if(guess==favourite){
//    console.log("congrats");
// }else{
//    console.log("you had quit")
// }


// let i=1;
// while(i<=5){
//    console.log(i);
//    i++;
//    if(i==5){
//       break;
//    }

// }

//loops with arrays

// let fruits=["mango","apple","litchi","guava","orange"]
// for(let i=0;i<fruits.length;i++){
//    console.log(i,fruits[i]);

// }console.log("reversed order")
//    //for reversed order
//    for(let i=fruits.length-1;i>=0;i--){
//       console.log(i,fruits[i]);
//    }


//Nested loops with Nested Arrays
// let heroes=[["ironman","thor","spiderman"],["superman","wonderwoman","flash"]]
// for(let i=0;i<heroes.length;i++){
//    console.log(i,heroes[i],heroes[i].length);
//    for(let j=0;j<heroes[i].length;j++){
//       console.log(`j=${j},${heroes[i][j]}`)
//    }
//    }
   

   //another exmaple
   let student=[["abhay",100],["kali",94],["kanak",92]];
   for(let i=0;i<student.length;i++){
      console.log(`info. of student #${i}`)
      for(let j=0;j<student[i].length;j++){
         console.log(student[i][j])
      }

   }























