# Zephyrus-Engineering-Coding-Challenge 

https://zephyruscodingchallenge.netlify.app/

Test cases can be checked by inspecting the page and clicking on the console, alternatively, the code can be tested natively by using git clone and running node Zephyrus-Engineering-Coding-Challenge

Approach

ReverseString:
While this problem could be solved in one line using the built-in .reverse() function, I decided to code up a reverse loop manually.
this loop used the 2-pointer method of starting at the start and end of the string and swapping the characters until the left pointer becomes greater than the right pointer, indicating that all characters have been swapped.

FizzBuzz: 
I approached this problem by appending upon an empty string to create the output for each number, if the number is divisible by 3, Fizz is appended to the output string, if it is divisible by 5, Buzz is appended to the output string.
It is important to check the "Fizz" initially so that when a number is divisible by both 3 and 5 it creates the string FizzBuzz.
if the output string is empty at the end of the checks, the number is instead printed

EvenOrOdd:
This problem was solved relatively simply, by simply checking if the number is divisible by 2 using the modulus operator, and returning Even if so, if not, Odd is returned

for all of the above functions I also made a check for edge cases where an input of the wrong type is inserted into the function, if so, an error is returned


Interactive challenge:
I decided to keep this relatively simple in terms of design to focus on the functionality of the code, I created a change-text header and a change-text button. 
This button was linked up to a click event listener in my javascript file that changes the change-text header's text and color on click
the text is changed to Text Changed! and the color of the text is changed to a random color, determined by generating a random hexadecimal color on click of the button and setting it to the text's color

Challenges:
For this coding challenge, I didn't really run into any challenges as I've done similar problems in the past.
