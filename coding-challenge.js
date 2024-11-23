



function reverseString(str) {
  //throw error if str is not of type string
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  //convert string to array 
  let arr = str.split('');

  // 2 pointer approach
  let l = 0, r = arr.length - 1;
  while (l < r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  
  return arr.join('');

  // could also be done using built in js methods
  // for example: str.split('').reverse().join('');
}

function fizzBuzz(n){
  // throw error if n is not of type number
  if (typeof n !== 'number') {
    throw new TypeError('Input must be a number');
  }

  for (let i = 1; i <=n; i++){
    str = '';

    // append Fizz or Buzz to str if i is divisible by 3 or 5
    if (i % 3 === 0) {
      str += 'Fizz';
    }
    if (i % 5 === 0) {
      str += 'Buzz';
    }
    // log the number if it is not divisible by 3 or 5, as str will be empty
    console.log(str || i);
  }
}

function evenOrOdd(n){
  // throw error if n is not of type number
  if (typeof n !== 'number') {
    throw new TypeError('Input must be a number');
  }

  // return even if n is divisible by 2, else return odd
  if (n % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// Event listener for changing text and color
document.getElementById('changeTextButton').addEventListener('click', function() {
  const changeTextElement = document.getElementById('change-text');
  changeTextElement.textContent = 'Text Changed!';

  // Generate a random hexadecimal color
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  changeTextElement.style.color = randomColor;
});


// Reverse string test cases
console.log("\n-------Reverse string test cases------\n")
console.log("hello: ", reverseString("hello"));
console.log("world: ", reverseString("world"));
console.log("JavaScript: ", reverseString("JavaScript"));
console.log("a: ", reverseString("a")); 
console.log("\n")

// Edge case
console.log("non string input: ")
try {
  reverseString(123);
} catch (error) {
  console.log("Error: ", error.message, "\n"); // Output: Error: Input must be a string
}

// FizzBuzz test cases
console.log("-------FizzBuzz test cases------\n")
fizzBuzz(100);

// Edge case
console.log("\nnon number input: ")
try {
  fizzBuzz("100");
} catch (error) {
  console.log("Error: ", error.message, "\n"); 
}

// Even or Odd test cases
console.log("-------Even or Odd test cases------\n")
console.log("2: ", evenOrOdd(2));
console.log("33: ", evenOrOdd(3));
console.log("44: ", evenOrOdd(4));
console.log("59: ", evenOrOdd(5));
console.log("0: ", evenOrOdd(0));
console.log("-1: ", evenOrOdd(-1), "\n");

// Edge case
console.log("non number input: ")
try {
  evenOrOdd("100");
} catch (error) {
  console.log("Error: ", error.message, "\n"); 
}




