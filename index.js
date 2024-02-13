//Qustion #1
// Sum of all digits of a number. For example, 123 -> 1+2+3=6
// let a = [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 90, 100];

// let result = 0;

//  for(var i =0; i < a.length; i++){
//    result += a[i];
//  }
//    console.log(result)


//Question #2
//Sum of the range of 2 numbers. For example, num1=2, num2=5 -> 2+3+4+5=14

// function sumRange(num1, num2) {
//     let sum = 0;
//     for (let i = num1; i <= num2; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   console.log(sumRange(5, 8));
    


//Question #3
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; // Return 0 if the array is empty
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; //add num
    }
  
    let average = sum / numbers.length; 
    return average; //avg num
  }
  
  let numbers = [1, 2, 3];
  console.log(calculateAverage(numbers));

//Question #4
// Compare strings by count of characters. For example, car and bat are equal. car and care are not.
// let str1 = 'car';
// let str2 = 'bat';

// if(str1.length === str2.length) {
//   console.log('String length are equal')
// }else {
//   console.log('String length are not equal')
// }

// let str1 = 'car';
// let str2 = 'care';

// if(str1.length === str2.length) {
//   console.log('String length are equal')
// }else {
//   console.log('String length are not equal')
// }



//Question #5
//Swap the string's first and last character. For example, name -> eamn
// let text = 'malaika';

// if (text.length > 1) {
//     text = text[text.length - 1] + text.substring(1, text.length - 1) + text[0];
// }

// console.log(text);

// let text = 'JavaScript';

// if (text.length > 1) {
//     text = text[text.length - 1] + text.substring(1, text.length - 1) + text[0];
// }

// console.log(text);