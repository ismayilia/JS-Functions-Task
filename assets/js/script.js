"use strict";


// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function numberDvided(){
//     let a = 20;
//     if (a%3==0 && a%7==0) {
//         console.log("Bolunur")
//     }
//     else{
//         console.log("Bolunmur")
//     }
// }

// numberDvided();


// let numberDivided = (a) =>{
//     if (a%3==0 && a%7==0) {
//         return "Bolunur";
//     }
//     else{
//         return "Bolunmur";
//     }

// }

// let result = numberDivided(22);
// console.log(result);



//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// function factorialNum(num){
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result*=i;

//     }
//     return result;
// }

// let nums = factorialNum(5);
// console.log(nums);

// let factorialNum = (num) =>{
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result*=i;

//     }
//     return result;
// }

// let nums = factorialNum(5);
// console.log(nums);


//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// function doubleNums(){
//     let nums = [1, 4, 5, 6];
//     let count=0;

//     nums.forEach(num => {
//         if (num%2==0) {
//             count+=num**2;

//         }       
//     });

//     console.log(count)
// }

// doubleNums();


// let doubleNums = (arr) =>{

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]%2==0) {
//             count+=arr[i]**2;
//         }

//     }
//     return count;
// }

// let array = [2,8,9];
// console.log(doubleNums(array));

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

// function loginUser(mail,password){


//     if (mail=="Cavid@code.edu.az" && password=="12345") {
//         console.log("Giris ugurludur");
//     }
//     else{
//         console.log("Giris ugursuzdur");
//     }
// }

// loginUser("Cavid@code.edu.az","12345");


// let loginUser = (mail,password) =>{
//     if (mail=="Cavid@code.edu.az" && password=="12345") {
//         console.log("Giris ugurludur");
//     }
//     else{
//         console.log("Giris ugursuzdur");
//     }
// }

// loginUser("Cavid@code.edu.az","12345");

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// function oddSumNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum += arr[i]
//         }
//     }
//     return sum;
// };


// let result = oddSumNumbers([1, 3, 5, 6]);

// console.log(result);


// let oddSumNumbers = (arr) => {
//     let sum = 0;
//     arr.forEach(element => {
//         if (element%2==1) {
//             sum+=element;
//         }
//     });
//     return sum;
// }

// let array = [5,7,8];

// console.log(oddSumNumbers(array));

//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// function doubleNumbers(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// };

// let array = [5,7,8,10];

// console.log(doubleNumbers(array));




// let doubleNumbers = (arr) =>{
//     let count = 0;
//     arr.forEach(element => {
//         if (element%2==0) {
//             count++;
//         }
//     });
//     return count;
// }

// let result = doubleNumbers([2,4,6,9]);
// console.log(result);


