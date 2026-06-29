QuizData.questions.push(
  //loop  ,array ,conditional statement ,function
{
  id: 'js_loop_1',
  topicId: 'js_loop',
  question: 'Use for loop to print numbers from 1 to 5.',
  mathSolution: 'Initialize counter, set condition, increment.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    console.log(i);  // 1,2,3,4,5\n}',
  hint: 'Use `for (let i = 1; i <= 5; i++)`'
},
{
  id: 'js_loop_2',
  topicId: 'js_loop',
  question: 'Use for loop to print numbers from 10 down to 1.',
  mathSolution: 'Start from 10, decrement until 1.',
  codeSolution: 'for (let i = 10; i >= 1; i--) {\n    console.log(i);  // 10,9,8,...,1\n}',
  hint: 'Use `i--` to decrement.'
},
{
  id: 'js_loop_3',
  topicId: 'js_loop',
  question: 'Use for loop to print even numbers from 2 to 10.',
  mathSolution: 'Start at 2, increment by 2 each time.',
  codeSolution: 'for (let i = 2; i <= 10; i += 2) {\n    console.log(i);  // 2,4,6,8,10\n}',
  hint: 'Use `i += 2` for step size.'
},
{
  id: 'js_loop_4',
  topicId: 'js_loop',
  question: 'Use for loop to calculate sum of numbers from 1 to 10.',
  mathSolution: 'Accumulate sum in a variable.',
  codeSolution: 'let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n    sum += i;\n}\nconsole.log(sum);  // 55',
  hint: 'Initialize sum = 0 before loop.'
},
{
  id: 'js_loop_5',
  topicId: 'js_loop',
  question: 'Use for loop to calculate factorial of 5 (5!).',
  mathSolution: 'Multiply numbers from 1 to 5.',
  codeSolution: 'let fact = 1;\nfor (let i = 1; i <= 5; i++) {\n    fact *= i;\n}\nconsole.log(fact);  // 120',
  hint: 'Start fact = 1 and multiply each iteration.'
},
{
  id: 'js_loop_6',
  topicId: 'js_loop',
  question: 'Use while loop to print numbers from 1 to 5.',
  mathSolution: 'Initialize counter before loop, increment inside.',
  codeSolution: 'let i = 1;\nwhile (i <= 5) {\n    console.log(i);  // 1,2,3,4,5\n    i++;\n}',
  hint: 'Don\'t forget to increment inside loop.'
},
{
  id: 'js_loop_7',
  topicId: 'js_loop',
  question: 'Use do-while loop to print numbers from 1 to 5.',
  mathSolution: 'Executes at least once before checking condition.',
  codeSolution: 'let i = 1;\ndo {\n    console.log(i);  // 1,2,3,4,5\n    i++;\n} while (i <= 5);',
  hint: 'do-while runs body first, then checks condition.'
},
{
  id: 'js_loop_8',
  topicId: 'js_loop',
  question: 'Use for loop to iterate over an array of fruits.',
  mathSolution: 'Use array length as condition.',
  codeSolution: 'let fruits = ["apple", "banana", "orange"];\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}',
  hint: 'Use `fruits.length` in condition.'
},
{
  id: 'js_loop_9',
  topicId: 'js_loop',
  question: 'Use for...of loop to iterate over an array.',
  mathSolution: 'for...of directly gives values.',
  codeSolution: 'let colors = ["red", "green", "blue"];\nfor (let color of colors) {\n    console.log(color);  // red, green, blue\n}',
  hint: 'Use `for (let item of array)`'
},
{
  id: 'js_loop_10',
  topicId: 'js_loop',
  question: 'Use for...in loop to iterate over object properties.',
  mathSolution: 'for...in iterates over enumerable properties.',
  codeSolution: 'let person = { name: "John", age: 30, city: "NYC" };\nfor (let key in person) {\n    console.log(`${key}: ${person[key]}`);\n}',
  hint: 'Use `for (let key in object)`'
},
{
  id: 'js_loop_11',
  topicId: 'js_loop',
  question: 'Use break statement to exit loop when number 5 is found.',
  mathSolution: 'Break stops loop execution completely.',
  codeSolution: 'for (let i = 1; i <= 10; i++) {\n    if (i === 5) {\n        break;\n    }\n    console.log(i);  // 1,2,3,4\n}',
  hint: '`break` exits the loop immediately.'
},
{
  id: 'js_loop_12',
  topicId: 'js_loop',
  question: 'Use continue statement to skip printing number 5.',
  mathSolution: 'Continue skips current iteration.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    if (i === 5) {\n        continue;\n    }\n    console.log(i);  // 1,2,3,4\n}',
  hint: '`continue` skips to next iteration.'
},
{
  id: 'js_loop_13',
  topicId: 'js_loop',
  question: 'Use nested for loop to print multiplication table (1-3).',
  mathSolution: 'Outer loop for rows, inner for columns.',
  codeSolution: 'for (let i = 1; i <= 3; i++) {\n    for (let j = 1; j <= 3; j++) {\n        console.log(`${i} * ${j} = ${i * j}`);\n    }\n}',
  hint: 'Inner loop completes all iterations for each outer iteration.'
},
{
  id: 'js_loop_14',
  topicId: 'js_loop',
  question: 'Use while loop to find first number divisible by 7 greater than 50.',
  mathSolution: 'Keep incrementing until condition met.',
  codeSolution: 'let num = 51;\nwhile (num % 7 !== 0) {\n    num++;\n}\nconsole.log(num);  // 56',
  hint: 'Condition checks divisibility by 7.'
},
{
  id: 'js_loop_15',
  topicId: 'js_loop',
  question: 'Use do-while to ensure user input is collected at least once.',
  mathSolution: 'Execute input prompt, check condition after.',
  codeSolution: 'let password;\ndo {\n    password = "secret";  // Simulating user input\n} while (password !== "secret");\nconsole.log("Access granted");',
  hint: 'do-while guarantees at least one execution.'
},
{
  id: 'js_loop_16',
  topicId: 'js_loop',
  question: 'Use for loop to reverse an array.',
  mathSolution: 'Start from last index to first.',
  codeSolution: 'let arr = [1, 2, 3, 4, 5];\nfor (let i = arr.length - 1; i >= 0; i--) {\n    console.log(arr[i]);  // 5,4,3,2,1\n}',
  hint: 'Start from `arr.length - 1` and decrement.'
},
{
  id: 'js_loop_17',
  topicId: 'js_loop',
  question: 'Use for loop to find largest number in array.',
  mathSolution: 'Initialize max with first element, compare each.',
  codeSolution: 'let numbers = [23, 45, 12, 67, 34];\nlet max = numbers[0];\nfor (let i = 1; i < numbers.length; i++) {\n    if (numbers[i] > max) {\n        max = numbers[i];\n    }\n}\nconsole.log(max);  // 67',
  hint: 'Start max with first element, compare rest.'
},
{
  id: 'js_loop_18',
  topicId: 'js_loop',
  question: 'Use for loop to count vowels in a string.',
  mathSolution: 'Check each character if it\'s a vowel.',
  codeSolution: 'let str = "Hello World";\nlet count = 0;\nlet vowels = "aeiouAEIOU";\nfor (let i = 0; i < str.length; i++) {\n    if (vowels.includes(str[i])) {\n        count++;\n    }\n}\nconsole.log(count);  // 3',
  hint: 'Use `.includes()` to check vowels.'
},
{
  id: 'js_loop_19',
  topicId: 'js_loop',
  question: 'Use while loop to reverse a number.',
  mathSolution: 'Extract digits using modulo and division.',
  codeSolution: 'let num = 12345;\nlet reversed = 0;\nwhile (num > 0) {\n    reversed = reversed * 10 + (num % 10);\n    num = Math.floor(num / 10);\n}\nconsole.log(reversed);  // 54321',
  hint: 'Use `% 10` to get last digit, `/ 10` to remove it.'
},
{
  id: 'js_loop_20',
  topicId: 'js_loop',
  question: 'Use for loop to check if number is prime.',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: 'let n = 17;\nlet isPrime = true;\nif (n < 2) isPrime = false;\nfor (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) {\n        isPrime = false;\n        break;\n    }\n}\nconsole.log(isPrime);  // true',
  hint: 'Loop only up to square root of n.'
},
{
  id: 'js_loop_21',
  topicId: 'js_loop',
  question: 'Use for loop to print Fibonacci series up to 10 terms.',
  mathSolution: 'Start with 0,1, then each term is sum of previous two.',
  codeSolution: 'let a = 0, b = 1;\nconsole.log(a);  // 0\nconsole.log(b);  // 1\nfor (let i = 3; i <= 10; i++) {\n    let c = a + b;\n    console.log(c);\n    a = b;\n    b = c;\n}',
  hint: 'Update a and b after each iteration.'
},
{
  id: 'js_loop_22',
  topicId: 'js_loop',
  question: 'Use nested loops to print star pattern (right triangle).',
  mathSolution: 'Outer loop for rows, inner for stars.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    let stars = "";\n    for (let j = 1; j <= i; j++) {\n        stars += "*";\n    }\n    console.log(stars);\n}',
  hint: 'Inner loop runs i times for row i.'
},
{
  id: 'js_loop_23',
  topicId: 'js_loop',
  question: 'Use forEach loop to iterate over array.',
  mathSolution: 'forEach accepts callback function.',
  codeSolution: 'let numbers = [10, 20, 30];\nnumbers.forEach(function(num) {\n    console.log(num);  // 10,20,30\n});',
  hint: '`array.forEach(callback)` is array method.'
},
{
  id: 'js_loop_24',
  topicId: 'js_loop',
  question: 'Use forEach with arrow function to double array values.',
  mathSolution: 'Modify each element using callback.',
  codeSolution: 'let arr = [1, 2, 3, 4];\nlet doubled = [];\narr.forEach(num => doubled.push(num * 2));\nconsole.log(doubled);  // [2,4,6,8]',
  hint: 'Use arrow function syntax `=>`.'
},
{
  id: 'js_loop_25',
  topicId: 'js_loop',
  question: 'Use map() to create new array with squared values.',
  mathSolution: 'map returns new transformed array.',
  codeSolution: 'let numbers = [1, 2, 3, 4];\nlet squares = numbers.map(n => n * n);\nconsole.log(squares);  // [1,4,9,16]',
  hint: '`map()` returns a new array without modifying original.'
},
{
  id: 'js_loop_26',
  topicId: 'js_loop',
  question: 'Use filter() to get even numbers from array.',
  mathSolution: 'filter returns array with elements that pass test.',
  codeSolution: 'let numbers = [1, 2, 3, 4, 5, 6];\nlet evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2,4,6]',
  hint: 'Return true in callback to keep element.'
},
{
  id: 'js_loop_27',
  topicId: 'js_loop',
  question: 'Use reduce() to sum all array elements.',
  mathSolution: 'reduce accumulates values.',
  codeSolution: 'let numbers = [10, 20, 30, 40];\nlet sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 100',
  hint: '`reduce` takes accumulator and current value.'
},
{
  id: 'js_loop_28',
  topicId: 'js_loop',
  question: 'Use some() to check if any number is greater than 10.',
  mathSolution: 'some returns true if at least one passes test.',
  codeSolution: 'let numbers = [5, 8, 12, 3];\nlet hasLarge = numbers.some(n => n > 10);\nconsole.log(hasLarge);  // true',
  hint: '`some()` returns boolean.'
},
{
  id: 'js_loop_29',
  topicId: 'js_loop',
  question: 'Use every() to check if all numbers are positive.',
  mathSolution: 'every returns true only if all pass test.',
  codeSolution: 'let numbers = [2, 4, 6, 8];\nlet allPositive = numbers.every(n => n > 0);\nconsole.log(allPositive);  // true',
  hint: '`every()` checks all elements satisfy condition.'
},
{
  id: 'js_loop_30',
  topicId: 'js_loop',
  question: 'Use find() to get first number greater than 10.',
  mathSolution: 'find returns first element that passes test.',
  codeSolution: 'let numbers = [5, 12, 8, 15];\nlet found = numbers.find(n => n > 10);\nconsole.log(found);  // 12',
  hint: '`find()` returns element, not index.'
},
{
  id: 'js_loop_31',
  topicId: 'js_loop',
  question: 'Use findIndex() to get index of first number greater than 10.',
  mathSolution: 'findIndex returns index, -1 if not found.',
  codeSolution: 'let numbers = [5, 12, 8, 15];\nlet index = numbers.findIndex(n => n > 10);\nconsole.log(index);  // 1',
  hint: '`findIndex()` returns index of first match.'
},
{
  id: 'js_loop_32',
  topicId: 'js_loop',
  question: 'Use for loop to create multiplication table for 5.',
  mathSolution: 'Loop from 1 to 10 and multiply.',
  codeSolution: 'let num = 5;\nfor (let i = 1; i <= 10; i++) {\n    console.log(`${num} * ${i} = ${num * i}`);\n}',
  hint: 'Print formatted string with template literals.'
},
{
  id: 'js_loop_33',
  topicId: 'js_loop',
  question: 'Use while loop to sum digits of a number.',
  mathSolution: 'Extract digits using modulo until number becomes 0.',
  codeSolution: 'let num = 1234;\nlet sum = 0;\nwhile (num > 0) {\n    sum += num % 10;\n    num = Math.floor(num / 10);\n}\nconsole.log(sum);  // 10',
  hint: 'Use `% 10` and `/ 10` to extract digits.'
},
{
  id: 'js_loop_34',
  topicId: 'js_loop',
  question: 'Use for loop with label to break outer loop.',
  mathSolution: 'Labels identify loops for break/continue.',
  codeSolution: 'outer: for (let i = 1; i <= 3; i++) {\n    for (let j = 1; j <= 3; j++) {\n        if (i === 2 && j === 2) {\n            break outer;\n        }\n        console.log(i, j);\n    }\n}',
  hint: 'Use `labelName:` before loop and `break labelName;`'
},
{
  id: 'js_loop_35',
  topicId: 'js_loop',
  question: 'Use infinite loop with break condition.',
  mathSolution: 'while(true) with break when condition met.',
  codeSolution: 'let count = 1;\nwhile (true) {\n    console.log(count);\n    if (count === 5) break;\n    count++;\n}',
  hint: 'Always include break condition to avoid infinite loop.'
},
{
  id: 'js_loop_36',
  topicId: 'js_loop',
  question: 'Use for...of with string to iterate characters.',
  mathSolution: 'Strings are iterable in for...of.',
  codeSolution: 'let str = "Hello";\nfor (let char of str) {\n    console.log(char);  // H,e,l,l,o\n}',
  hint: 'for...of works on any iterable (string, array, map, set).'
},
{
  id: 'js_loop_37',
  topicId: 'js_loop',
  question: 'Use for...in with array (not recommended, shows indices).',
  mathSolution: 'for...in iterates over enumerable property names.',
  codeSolution: 'let arr = ["a", "b", "c"];\nfor (let index in arr) {\n    console.log(index);  // 0,1,2 (strings)\n}',
  hint: 'Use for...of for arrays, for...in for objects.'
},
{
  id: 'js_loop_38',
  topicId: 'js_loop',
  question: 'Use Object.keys() with forEach to iterate object.',
  mathSolution: 'Object.keys returns array of property names.',
  codeSolution: 'let person = { name: "Alice", age: 25, city: "Paris" };\nObject.keys(person).forEach(key => {\n    console.log(`${key}: ${person[key]}`);\n});',
  hint: 'Combine Object.keys() with forEach for objects.'
},
{
  id: 'js_loop_39',
  topicId: 'js_loop',
  question: 'Use Object.values() to iterate object values.',
  mathSolution: 'Object.values returns array of property values.',
  codeSolution: 'let person = { name: "Bob", age: 30, city: "London" };\nObject.values(person).forEach(value => {\n    console.log(value);  // Bob,30,London\n});',
  hint: 'Object.values() gives values without keys.'
},
{
  id: 'js_loop_40',
  topicId: 'js_loop',
  question: 'Use Object.entries() to iterate key-value pairs.',
  mathSolution: 'Object.entries returns array of [key, value] pairs.',
  codeSolution: 'let person = { name: "Charlie", age: 35 };\nfor (let [key, value] of Object.entries(person)) {\n    console.log(`${key}: ${value}`);\n}',
  hint: 'Use destructuring `[key, value]` in for...of.'
},
//array
{
  id: 'js_arrays_1',
  topicId: 'js_arrays',
  question: 'Create an array of fruits using array literal syntax.',
  mathSolution: 'Use square brackets to create array.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: 'Use `[]` for array literal.'
},
{
  id: 'js_arrays_2',
  topicId: 'js_arrays',
  question: 'Create an array using Array() constructor.',
  mathSolution: 'Use new Array() to create array.',
  codeSolution: 'const numbers = new Array(1, 2, 3, 4, 5);\nconsole.log(numbers);  // [1, 2, 3, 4, 5]',
  hint: 'Use `new Array()` constructor.'
},
{
  id: 'js_arrays_3',
  topicId: 'js_arrays',
  question: 'Access first and last elements of an array using indexes.',
  mathSolution: 'Index 0 for first, length-1 for last.',
  codeSolution: 'const colors = ["red", "green", "blue", "yellow"];\nconsole.log(colors[0]);  // red\nconsole.log(colors[colors.length - 1]);  // yellow',
  hint: 'Array indexes start at 0.'
},
{
  id: 'js_arrays_4',
  topicId: 'js_arrays',
  question: 'Get the length of an array using length property.',
  mathSolution: 'length property returns number of elements.',
  codeSolution: 'const items = ["a", "b", "c", "d"];\nconsole.log(items.length);  // 4',
  hint: 'Use `array.length` property.'
},
{
  id: 'js_arrays_5',
  topicId: 'js_arrays',
  question: 'Add element to end of array using push() method.',
  mathSolution: 'push() adds element and returns new length.',
  codeSolution: 'const fruits = ["apple", "banana"];\nfruits.push("orange");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: '`push()` adds to end of array.'
},
{
  id: 'js_arrays_6',
  topicId: 'js_arrays',
  question: 'Remove last element from array using pop() method.',
  mathSolution: 'pop() removes last element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.pop();\nconsole.log(removed);  // orange\nconsole.log(fruits);   // ["apple", "banana"]',
  hint: '`pop()` removes from end.'
},
{
  id: 'js_arrays_7',
  topicId: 'js_arrays',
  question: 'Add element to beginning of array using unshift() method.',
  mathSolution: 'unshift() adds element to start and returns new length.',
  codeSolution: 'const fruits = ["banana", "orange"];\nfruits.unshift("apple");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: '`unshift()` adds to beginning.'
},
{
  id: 'js_arrays_8',
  topicId: 'js_arrays',
  question: 'Remove first element from array using shift() method.',
  mathSolution: 'shift() removes first element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.shift();\nconsole.log(removed);  // apple\nconsole.log(fruits);   // ["banana", "orange"]',
  hint: '`shift()` removes from beginning.'
},
{
  id: 'js_arrays_9',
  topicId: 'js_arrays',
  question: 'Find index of an element using indexOf() method.',
  mathSolution: 'indexOf() returns first index or -1 if not found.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.indexOf("banana"));  // 1\nconsole.log(fruits.indexOf("grape"));   // -1',
  hint: 'Use `indexOf()` to find position.'
},
{
  id: 'js_arrays_10',
  topicId: 'js_arrays',
  question: 'Check if array includes an element using includes() method.',
  mathSolution: 'includes() returns true or false.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana"));  // true\nconsole.log(fruits.includes("grape"));   // false',
  hint: '`includes()` returns boolean.'
},
{
  id: 'js_arrays_11',
  topicId: 'js_arrays',
  question: 'Join array elements into string using join() method.',
  mathSolution: 'join() combines elements with separator.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.join(", "));  // "apple, banana, orange"\nconsole.log(fruits.join("-"));    // "apple-banana-orange"',
  hint: '`join()` converts array to string.'
},
{
  id: 'js_arrays_12',
  topicId: 'js_arrays',
  question: 'Convert string to array using split() method.',
  mathSolution: 'split() divides string by separator into array.',
  codeSolution: 'const str = "apple,banana,orange";\nconst fruits = str.split(",");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: '`split()` is string method that returns array.'
},
{
  id: 'js_arrays_13',
  topicId: 'js_arrays',
  question: 'Extract portion of array using slice() method.',
  mathSolution: 'slice(start, end) returns new array without modifying original.',
  codeSolution: 'const numbers = [10, 20, 30, 40, 50];\nconst sliced = numbers.slice(1, 4);\nconsole.log(sliced);  // [20, 30, 40]\nconsole.log(numbers); // [10,20,30,40,50] (unchanged)',
  hint: '`slice()` doesn\'t modify original array.'
},
{
  id: 'js_arrays_14',
  topicId: 'js_arrays',
  question: 'Modify array by adding/removing elements using splice() method.',
  mathSolution: 'splice(start, deleteCount, ...items) modifies original array.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nfruits.splice(1, 2, "grape", "kiwi");\nconsole.log(fruits);  // ["apple", "grape", "kiwi", "mango"]',
  hint: '`splice()` modifies original array.'
},
{
  id: 'js_arrays_15',
  topicId: 'js_arrays',
  question: 'Remove elements using splice() without adding new ones.',
  mathSolution: 'splice(start, deleteCount) removes elements.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconst removed = fruits.splice(1, 2);\nconsole.log(removed);  // ["banana", "orange"]\nconsole.log(fruits);   // ["apple", "mango"]',
  hint: 'splice returns removed elements.'
},
{
  id: 'js_arrays_16',
  topicId: 'js_arrays',
  question: 'Insert elements using splice() without removing.',
  mathSolution: 'splice(start, 0, ...items) inserts elements.',
  codeSolution: 'const fruits = ["apple", "mango"];\nfruits.splice(1, 0, "banana", "orange");\nconsole.log(fruits);  // ["apple", "banana", "orange", "mango"]',
  hint: 'Set deleteCount to 0 to insert only.'
},
{
  id: 'js_arrays_17',
  topicId: 'js_arrays',
  question: 'Create shallow copy of array using spread operator.',
  mathSolution: '[...array] creates new array with same elements.',
  codeSolution: 'const original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original);  // [1, 2, 3]\nconsole.log(copy);      // [1, 2, 3, 4]',
  hint: '`[...array]` creates shallow copy.'
},
{
  id: 'js_arrays_18',
  topicId: 'js_arrays',
  question: 'Combine two arrays using concat() method.',
  mathSolution: 'concat() merges arrays and returns new array.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = arr1.concat(arr2);\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]',
  hint: '`concat()` doesn\'t modify original arrays.'
},
{
  id: 'js_arrays_19',
  topicId: 'js_arrays',
  question: 'Combine arrays using spread operator.',
  mathSolution: '[...arr1, ...arr2] merges arrays.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]',
  hint: 'Spread operator `...` can combine arrays.'
},
{
  id: 'js_arrays_20',
  topicId: 'js_arrays',
  question: 'Reverse array using reverse() method.',
  mathSolution: 'reverse() modifies original array.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nnumbers.reverse();\nconsole.log(numbers);  // [5, 4, 3, 2, 1]',
  hint: '`reverse()` modifies original array.'
},
{
  id: 'js_arrays_21',
  topicId: 'js_arrays',
  question: 'Sort array of strings alphabetically using sort() method.',
  mathSolution: 'sort() sorts strings lexicographically.',
  codeSolution: 'const fruits = ["banana", "apple", "orange", "grape"];\nfruits.sort();\nconsole.log(fruits);  // ["apple", "banana", "grape", "orange"]',
  hint: 'Default sort works on strings.'
},
{
  id: 'js_arrays_22',
  topicId: 'js_arrays',
  question: 'Sort array of numbers correctly using sort() with compare function.',
  mathSolution: 'compare function (a,b) => a-b sorts numbers ascending.',
  codeSolution: 'const numbers = [10, 5, 80, 2, 35];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers);  // [2, 5, 10, 35, 80]\nnumbers.sort((a, b) => b - a);\nconsole.log(numbers);  // [80, 35, 10, 5, 2]',
  hint: 'Use compare function for numeric sort.'
},
{
  id: 'js_arrays_23',
  topicId: 'js_arrays',
  question: 'Iterate over array using for loop.',
  mathSolution: 'Use index from 0 to length-1.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}',
  hint: 'Traditional for loop with index.'
},
{
  id: 'js_arrays_24',
  topicId: 'js_arrays',
  question: 'Iterate over array using for...of loop.',
  mathSolution: 'for...of gives values directly.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfor (const fruit of fruits) {\n    console.log(fruit);\n}',
  hint: '`for...of` iterates values, not indexes.'
},
{
  id: 'js_arrays_25',
  topicId: 'js_arrays',
  question: 'Iterate over array using forEach() method.',
  mathSolution: 'forEach executes callback for each element.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach((fruit, index) => {\n    console.log(`${index}: ${fruit}`);\n});',
  hint: '`forEach()` is array method for iteration.'
},
{
  id: 'js_arrays_26',
  topicId: 'js_arrays',
  question: 'Create new array by transforming each element using map().',
  mathSolution: 'map() returns new array with transformed values.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]',
  hint: '`map()` transforms each element.'
},
{
  id: 'js_arrays_27',
  topicId: 'js_arrays',
  question: 'Filter array elements using filter() method.',
  mathSolution: 'filter() returns new array with elements passing test.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: '`filter()` keeps elements where callback returns true.'
},
{
  id: 'js_arrays_28',
  topicId: 'js_arrays',
  question: 'Reduce array to single value using reduce() method.',
  mathSolution: 'reduce() accumulates values left to right.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 15',
  hint: '`reduce()` takes accumulator and current value.'
},
{
  id: 'js_arrays_29',
  topicId: 'js_arrays',
  question: 'Find first element matching condition using find() method.',
  mathSolution: 'find() returns first element passing test.',
  codeSolution: 'const users = [\n    { id: 1, name: "Alice" },\n    { id: 2, name: "Bob" },\n    { id: 3, name: "Charlie" }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user);  // { id: 2, name: "Bob" }',
  hint: '`find()` returns first match, not all.'
},
{
  id: 'js_arrays_30',
  topicId: 'js_arrays',
  question: 'Check if any element passes test using some() method.',
  mathSolution: 'some() returns true if any element passes.',
  codeSolution: 'const numbers = [1, 3, 5, 7, 8];\nconst hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven);  // true',
  hint: '`some()` returns boolean for "any".'
},
{
  id: 'js_arrays_31',
  topicId: 'js_arrays',
  question: 'Check if all elements pass test using every() method.',
  mathSolution: 'every() returns true if all elements pass.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(n => n % 2 === 0);\nconsole.log(allEven);  // true',
  hint: '`every()` returns boolean for "all".'
},
{
  id: 'js_arrays_32',
  topicId: 'js_arrays',
  question: 'Flatten nested array one level using flat() method.',
  mathSolution: 'flat() concatenates sub-arrays.',
  codeSolution: 'const nested = [1, [2, 3], [4, [5, 6]]];\nconst flatOnce = nested.flat();\nconsole.log(flatOnce);  // [1, 2, 3, 4, [5, 6]]',
  hint: '`flat()` flattens to specified depth.'
},
{
  id: 'js_arrays_33',
  topicId: 'js_arrays',
  question: 'Flatten nested array completely using flat() with Infinity.',
  mathSolution: 'flat(Infinity) flattens all nested arrays.',
  codeSolution: 'const nested = [1, [2, [3, [4, [5]]]]];\nconst flatAll = nested.flat(Infinity);\nconsole.log(flatAll);  // [1, 2, 3, 4, 5]',
  hint: 'Use `flat(Infinity)` for deep flattening.'
},
{
  id: 'js_arrays_34',
  topicId: 'js_arrays',
  question: 'Create array from iterable using Array.from() method.',
  mathSolution: 'Array.from() converts iterable to array.',
  codeSolution: 'const str = "hello";\nconst arr = Array.from(str);\nconsole.log(arr);  // ["h", "e", "l", "l", "o"]\n\nconst set = new Set([1, 2, 3]);\nconsole.log(Array.from(set));  // [1, 2, 3]',
  hint: '`Array.from()` works on any iterable.'
},
{
  id: 'js_arrays_35',
  topicId: 'js_arrays',
  question: 'Create array filled with values using fill() method.',
  mathSolution: 'fill() fills array with static value.',
  codeSolution: 'const arr = new Array(5).fill(0);\nconsole.log(arr);  // [0, 0, 0, 0, 0]\n\nconst partial = [1, 2, 3, 4, 5];\npartial.fill(0, 1, 4);\nconsole.log(partial);  // [1, 0, 0, 0, 5]',
  hint: 'fill(value, start, end) fills portion.'
},
{
  id: 'js_arrays_36',
  topicId: 'js_arrays',
  question: 'Remove duplicate values from array using Set.',
  mathSolution: 'Set stores unique values automatically.',
  codeSolution: 'const numbers = [1, 2, 2, 3, 4, 4, 5];\nconst unique = [...new Set(numbers)];\nconsole.log(unique);  // [1, 2, 3, 4, 5]',
  hint: 'Convert to Set then back to array.'
},
{
  id: 'js_arrays_37',
  topicId: 'js_arrays',
  question: 'Find maximum value in array using spread with Math.max().',
  mathSolution: 'Math.max(...array) finds maximum.',
  codeSolution: 'const numbers = [10, 5, 20, 15, 8];\nconst max = Math.max(...numbers);\nconsole.log(max);  // 20\nconst min = Math.min(...numbers);\nconsole.log(min);  // 5',
  hint: 'Spread array into Math.max/min.'
},
{
  id: 'js_arrays_38',
  topicId: 'js_arrays',
  question: 'Find maximum using reduce() method.',
  mathSolution: 'reduce() comparing each element.',
  codeSolution: 'const numbers = [10, 5, 20, 15, 8];\nconst max = numbers.reduce((max, curr) => curr > max ? curr : max, numbers[0]);\nconsole.log(max);  // 20',
  hint: 'Use reduce to track maximum value.'
},
{
  id: 'js_arrays_39',
  topicId: 'js_arrays',
  question: 'Check if array is empty using length property.',
  mathSolution: 'length === 0 means empty array.',
  codeSolution: 'const empty = [];\nconst notEmpty = [1, 2, 3];\nconsole.log(empty.length === 0);     // true\nconsole.log(notEmpty.length === 0);  // false',
  hint: 'Check `array.length === 0`.'
},
{
  id: 'js_arrays_40',
  topicId: 'js_arrays',
  question: 'Clear all elements from array.',
  mathSolution: 'Set length to 0 or assign empty array.',
  codeSolution: 'let arr = [1, 2, 3, 4, 5];\narr.length = 0;\nconsole.log(arr);  // []\n\n// Or assign new empty array\narr = [1, 2, 3];\narr = [];\nconsole.log(arr);  // []',
  hint: 'Set `array.length = 0` to clear.'
},
//conditional
{
  id: 'js_conditionals_1',
  topicId: 'js_conditionals',
  question: 'Write an if statement that prints "Adult" if age >= 18.',
  mathSolution: 'Use if condition to check age.',
  codeSolution: 'let age = 20;\nif (age >= 18) {\n    console.log("Adult");  // Adult\n}',
  hint: 'Use `if (age >= 18)`'
},
{
  id: 'js_conditionals_2',
  topicId: 'js_conditionals',
  question: 'Write if-else statement that prints "Even" if number is even, else "Odd".',
  mathSolution: 'Check remainder when divided by 2.',
  codeSolution: 'let num = 7;\nif (num % 2 === 0) {\n    console.log("Even");\n} else {\n    console.log("Odd");  // Odd\n}',
  hint: 'Use `%` operator with `===`'
},
{
  id: 'js_conditionals_3',
  topicId: 'js_conditionals',
  question: 'Write if-else if-else to print "Positive", "Negative", or "Zero".',
  mathSolution: 'Compare number with 0.',
  codeSolution: 'let num = -5;\nif (num > 0) {\n    console.log("Positive");\n} else if (num < 0) {\n    console.log("Negative");\n} else {\n    console.log("Zero");  // Negative\n}',
  hint: 'Use `>`, `<`, and `===`'
},
{
  id: 'js_conditionals_4',
  topicId: 'js_conditionals',
  question: 'Nested if: Check if number is positive and then check if it\'s even.',
  mathSolution: 'First check positivity, then check evenness.',
  codeSolution: 'let num = 12;\nif (num > 0) {\n    if (num % 2 === 0) {\n        console.log("Positive even");  // Positive even\n    }\n}',
  hint: 'Place one if inside another.'
},
{
  id: 'js_conditionals_5',
  topicId: 'js_conditionals',
  question: 'Use ternary operator to assign "Pass" if marks >= 33 else "Fail".',
  mathSolution: 'result = marks >= 33 ? "Pass" : "Fail"',
  codeSolution: 'let marks = 45;\nlet result = marks >= 33 ? "Pass" : "Fail";\nconsole.log(result);  // Pass',
  hint: 'Use `condition ? valueIfTrue : valueIfFalse`'
},
{
  id: 'js_conditionals_6',
  topicId: 'js_conditionals',
  question: 'Check if a year is leap year using if-else.',
  mathSolution: 'Divisible by 4 but not by 100, unless divisible by 400.',
  codeSolution: 'let year = 2024;\nif ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {\n    console.log("Leap year");  // Leap year\n} else {\n    console.log("Not leap year");\n}',
  hint: 'Combine conditions with `&&` and `||`'
},
{
  id: 'js_conditionals_7',
  topicId: 'js_conditionals',
  question: 'Check if a character is a vowel using if statement.',
  mathSolution: 'Check if char in "aeiouAEIOU".',
  codeSolution: 'let ch = "e";\nif ("aeiouAEIOU".includes(ch)) {\n    console.log("Vowel");  // Vowel\n} else {\n    console.log("Consonant");\n}',
  hint: 'Use `.includes()` method with string.'
},
{
  id: 'js_conditionals_8',
  topicId: 'js_conditionals',
  question: 'Find largest of three numbers using if-else if-else.',
  mathSolution: 'Compare numbers sequentially.',
  codeSolution: 'let a = 10, b = 25, c = 15;\nif (a >= b && a >= c) {\n    console.log(`Largest: ${a}`);\n} else if (b >= a && b >= c) {\n    console.log(`Largest: ${b}`);  // Largest: 25\n} else {\n    console.log(`Largest: ${c}`);\n}',
  hint: 'Compare each with others using `&&`'
},
{
  id: 'js_conditionals_9',
  topicId: 'js_conditionals',
  question: 'Check if a string is empty using if-else.',
  mathSolution: 'Empty string is falsy.',
  codeSolution: 'let s = "";\nif (s) {\n    console.log("Not empty");\n} else {\n    console.log("Empty");  // Empty\n}',
  hint: 'Directly check `if (s)`'
},
{
  id: 'js_conditionals_10',
  topicId: 'js_conditionals',
  question: 'Check if an array is empty using if-else.',
  mathSolution: 'Check length property.',
  codeSolution: 'let arr = [];\nif (arr.length > 0) {\n    console.log("Has elements");\n} else {\n    console.log("Empty");  // Empty\n}',
  hint: 'Use `if (arr.length === 0)`'
},
{
  id: 'js_conditionals_11',
  topicId: 'js_conditionals',
  question: 'Grade calculator: A(>=90), B(>=75), C(>=60), D(>=45), F(<45).',
  mathSolution: 'Use if-else if chain.',
  codeSolution: 'let marks = 85;\nif (marks >= 90) {\n    console.log("A");\n} else if (marks >= 75) {\n    console.log("B");  // B\n} else if (marks >= 60) {\n    console.log("C");\n} else if (marks >= 45) {\n    console.log("D");\n} else {\n    console.log("F");\n}',
  hint: 'Check from highest to lowest.'
},
{
  id: 'js_conditionals_12',
  topicId: 'js_conditionals',
  question: 'Check if a number is divisible by both 3 and 5 using if.',
  mathSolution: 'Use `&&` operator.',
  codeSolution: 'let num = 15;\nif (num % 3 === 0 && num % 5 === 0) {\n    console.log("Divisible by 3 and 5");  // Divisible by 3 and 5\n}',
  hint: 'Check both conditions with `&&`'
},
{
  id: 'js_conditionals_13',
  topicId: 'js_conditionals',
  question: 'Check if a number is between 1 and 100 inclusive using if.',
  mathSolution: 'Use comparison operators.',
  codeSolution: 'let num = 50;\nif (num >= 1 && num <= 100) {\n    console.log("In range");  // In range\n} else {\n    console.log("Out of range");\n}',
  hint: '`num >= 1 && num <= 100`'
},
{
  id: 'js_conditionals_14',
  topicId: 'js_conditionals',
  question: 'Check if a string starts with specific letter using if.',
  mathSolution: 'Use string indexing or startsWith().',
  codeSolution: 'let s = "JavaScript";\nif (s[0] === "J") {\n    console.log("Starts with J");  // Starts with J\n}',
  hint: 'Access first character with `[0]` or use `.startsWith()`'
},
{
  id: 'js_conditionals_15',
  topicId: 'js_conditionals',
  question: 'Check if two strings are equal ignoring case.',
  mathSolution: 'Convert both to same case.',
  codeSolution: 'let s1 = "Hello";\nlet s2 = "hello";\nif (s1.toLowerCase() === s2.toLowerCase()) {\n    console.log("Same");  // Same\n} else {\n    console.log("Different");\n}',
  hint: 'Use `.toLowerCase()` method.'
},
{
  id: 'js_conditionals_16',
  topicId: 'js_conditionals',
  question: 'Check if a number is a perfect square using if.',
  mathSolution: 'Square root should be integer.',
  codeSolution: 'let num = 16;\nlet sqrt = Math.sqrt(num);\nif (sqrt === Math.floor(sqrt)) {\n    console.log("Perfect square");  // Perfect square\n}',
  hint: 'Check if sqrt is integer using `Math.floor()`'
},
{
  id: 'js_conditionals_17',
  topicId: 'js_conditionals',
  question: 'Check if a year is a century year (ends with 00).',
  mathSolution: 'Check if divisible by 100.',
  codeSolution: 'let year = 1900;\nif (year % 100 === 0) {\n    console.log("Century year");  // Century year\n} else {\n    console.log("Not century year");\n}',
  hint: 'Use `% 100 === 0`'
},
{
  id: 'js_conditionals_18',
  topicId: 'js_conditionals',
  question: 'Check if a triangle is valid given three sides.',
  mathSolution: 'Sum of any two sides > third side.',
  codeSolution: 'let a = 3, b = 4, c = 5;\nif (a + b > c && b + c > a && a + c > b) {\n    console.log("Valid triangle");  // Valid triangle\n} else {\n    console.log("Invalid triangle");\n}',
  hint: 'Check triangle inequality with `&&`'
},
{
  id: 'js_conditionals_19',
  topicId: 'js_conditionals',
  question: 'Check if a number is prime using if-else (simple version).',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: 'let n = 17;\nlet isPrime = true;\nif (n < 2) {\n    isPrime = false;\n} else {\n    for (let i = 2; i <= Math.sqrt(n); i++) {\n        if (n % i === 0) {\n            isPrime = false;\n            break;\n        }\n    }\n}\nconsole.log(isPrime ? "Prime" : "Not prime");  // Prime',
  hint: 'Check divisors up to square root using `Math.sqrt()`'
},
{
  id: 'js_conditionals_20',
  topicId: 'js_conditionals',
  question: 'Check if a character is a digit using if.',
  mathSolution: 'Use regular expression or char code.',
  codeSolution: 'let ch = "7";\nif (ch >= "0" && ch <= "9") {\n    console.log("Digit");  // Digit\n} else {\n    console.log("Not digit");\n}',
  hint: 'Compare with character codes or use regex `/\\d/`'
},
{
  id: 'js_conditionals_21',
  topicId: 'js_conditionals',
  question: 'Check if a character is uppercase or lowercase.',
  mathSolution: 'Compare with character codes.',
  codeSolution: 'let ch = "A";\nif (ch >= "A" && ch <= "Z") {\n    console.log("Uppercase");  // Uppercase\n} else if (ch >= "a" && ch <= "z") {\n    console.log("Lowercase");\n} else {\n    console.log("Not a letter");\n}',
  hint: 'Check ASCII ranges A-Z and a-z'
},
{
  id: 'js_conditionals_22',
  topicId: 'js_conditionals',
  question: 'Simple login system using if-else.',
  mathSolution: 'Check username and password.',
  codeSolution: 'let username = "admin";\nlet password = "1234";\nif (username === "admin" && password === "1234") {\n    console.log("Login successful");  // Login successful\n} else {\n    console.log("Login failed");\n}',
  hint: 'Use `&&` to check both conditions'
},
{
  id: 'js_conditionals_23',
  topicId: 'js_conditionals',
  question: 'Check if a number is a multiple of 7 or 11.',
  mathSolution: 'Use `||` operator.',
  codeSolution: 'let num = 14;\nif (num % 7 === 0 || num % 11 === 0) {\n    console.log("Multiple of 7 or 11");  // Multiple of 7 or 11\n} else {\n    console.log("Not multiple");\n}',
  hint: 'Use `%` with `||`'
},
{
  id: 'js_conditionals_24',
  topicId: 'js_conditionals',
  question: 'Check if a string is palindrome using if.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'let s = "madam";\nlet reversed = s.split("").reverse().join("");\nif (s === reversed) {\n    console.log("Palindrome");  // Palindrome\n} else {\n    console.log("Not palindrome");\n}',
  hint: 'Use `.split("").reverse().join("")` to reverse'
},
{
  id: 'js_conditionals_25',
  topicId: 'js_conditionals',
  question: 'Check if a number is positive and even using nested if.',
  mathSolution: 'First check positive, then even.',
  codeSolution: 'let num = 8;\nif (num > 0) {\n    if (num % 2 === 0) {\n        console.log("Positive even");  // Positive even\n    }\n}',
  hint: 'Nest conditions inside each other'
},
{
  id: 'js_conditionals_26',
  topicId: 'js_conditionals',
  question: 'Check if a number is Armstrong number (3 digits: a³+b³+c³).',
  mathSolution: 'Cube each digit and sum.',
  codeSolution: 'let num = 153;\nlet strNum = num.toString();\nlet sum = 0;\nfor (let digit of strNum) {\n    sum += Math.pow(parseInt(digit), 3);\n}\nif (sum === num) {\n    console.log("Armstrong");  // Armstrong\n} else {\n    console.log("Not Armstrong");\n}',
  hint: 'Convert to string, extract digits, and cube them using `Math.pow()`'
},
{
  id: 'js_conditionals_27',
  topicId: 'js_conditionals',
  question: 'Check if a year is a millennium year (ends with 000).',
  mathSolution: 'Check if divisible by 1000.',
  codeSolution: 'let year = 2000;\nif (year % 1000 === 0) {\n    console.log("Millennium year");  // Millennium year\n} else {\n    console.log("Not millennium year");\n}',
  hint: 'Use `% 1000 === 0`'
},
{
  id: 'js_conditionals_28',
  topicId: 'js_conditionals',
  question: 'Check if a number is a palindrome (same forward and backward).',
  mathSolution: 'Convert to string and compare with reverse.',
  codeSolution: 'let num = 121;\nlet strNum = num.toString();\nif (strNum === strNum.split("").reverse().join("")) {\n    console.log("Palindrome");  // Palindrome\n} else {\n    console.log("Not palindrome");\n}',
  hint: 'Convert to string and reverse'
},
{
  id: 'js_conditionals_29',
  topicId: 'js_conditionals',
  question: 'Check if a triangle is equilateral, isosceles, or scalene.',
  mathSolution: 'Compare side lengths.',
  codeSolution: 'let a = 5, b = 5, c = 5;\nif (a === b && b === c) {\n    console.log("Equilateral");  // Equilateral\n} else if (a === b || b === c || a === c) {\n    console.log("Isosceles");\n} else {\n    console.log("Scalene");\n}',
  hint: 'Compare all three sides using `===` and `||`'
},
{
  id: 'js_conditionals_30',
  topicId: 'js_conditionals',
  question: 'Check if a number is positive and not greater than 100.',
  mathSolution: 'Combine conditions.',
  codeSolution: 'let num = 50;\nif (num > 0 && num <= 100) {\n    console.log("Positive <= 100");  // Positive <= 100\n}',
  hint: 'Use `&&` to combine conditions'
},
{
  id: 'js_conditionals_31',
  topicId: 'js_conditionals',
  question: 'Check if a character is alphabet using if.',
  mathSolution: 'Check ASCII range.',
  codeSolution: 'let ch = "Z";\nif ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {\n    console.log("Alphabet");  // Alphabet\n} else {\n    console.log("Not alphabet");\n}',
  hint: 'Check uppercase A-Z or lowercase a-z'
},
{
  id: 'js_conditionals_32',
  topicId: 'js_conditionals',
  question: 'Check if a number is between 10 and 20 or between 30 and 40.',
  mathSolution: 'Use `||` with ranges.',
  codeSolution: 'let num = 15;\nif ((num >= 10 && num <= 20) || (num >= 30 && num <= 40)) {\n    console.log("In valid range");  // In valid range\n} else {\n    console.log("Out of range");\n}',
  hint: 'Use `||` between two range checks'
},
{
  id: 'js_conditionals_33',
  topicId: 'js_conditionals',
  question: 'Check if a string contains only spaces using if.',
  mathSolution: 'Use trim() or regex.',
  codeSolution: 'let s = "   ";\nif (s.trim() === "") {\n    console.log("Only spaces");  // Only spaces\n} else {\n    console.log("Contains other chars");\n}',
  hint: 'Use `.trim()` to remove spaces and check if empty'
},
{
  id: 'js_conditionals_34',
  topicId: 'js_conditionals',
  question: 'Check if a number is a perfect number (sum of divisors equals number).',
  mathSolution: 'Sum proper divisors and compare.',
  codeSolution: 'let num = 6;\nlet sum = 0;\nfor (let i = 1; i < num; i++) {\n    if (num % i === 0) sum += i;\n}\nif (sum === num) {\n    console.log("Perfect number");  // Perfect number\n} else {\n    console.log("Not perfect");\n}',
  hint: 'Sum all proper divisors (excluding the number itself)'
},
{
  id: 'js_conditionals_35',
  topicId: 'js_conditionals',
  question: 'Check if a number is a strong number (sum of digit factorials equals number).',
  mathSolution: 'Sum factorial of each digit.',
  codeSolution: 'function factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nlet num = 145;\nlet strNum = num.toString();\nlet sum = 0;\nfor (let digit of strNum) {\n    sum += factorial(parseInt(digit));\n}\nif (sum === num) {\n    console.log("Strong number");  // Strong number\n} else {\n    console.log("Not strong");\n}',
  hint: 'Create a factorial function or precompute factorial values'
},
{
  id: 'js_conditionals_36',
  topicId: 'js_conditionals',
  question: 'Check if a number is a Harshad number (divisible by sum of its digits).',
  mathSolution: 'Sum digits and check divisibility.',
  codeSolution: 'let num = 18;\nlet strNum = num.toString();\nlet digitSum = 0;\nfor (let digit of strNum) {\n    digitSum += parseInt(digit);\n}\nif (num % digitSum === 0) {\n    console.log("Harshad number");  // Harshad number\n} else {\n    console.log("Not Harshad");\n}',
  hint: 'num % sum_of_digits === 0'
},
{
  id: 'js_conditionals_37',
  topicId: 'js_conditionals',
  question: 'Check if a number is a duck number (contains 0 but doesn\'t start with 0).',
  mathSolution: 'Check if "0" in string and first char not "0".',
  codeSolution: 'let num = "102";\nif (num.includes("0") && num[0] !== "0") {\n    console.log("Duck number");  // Duck number\n} else {\n    console.log("Not duck");\n}',
  hint: 'Check for zero and leading zero using `.includes()`'
},
{
  id: 'js_conditionals_38',
  topicId: 'js_conditionals',
  question: 'Check if a number is a spy number (sum of digits = product of digits).',
  mathSolution: 'Calculate sum and product of digits.',
  codeSolution: 'let num = 123;\nlet strNum = num.toString();\nlet sum = 0, product = 1;\nfor (let digit of strNum) {\n    let d = parseInt(digit);\n    sum += d;\n    product *= d;\n}\nif (sum === product) {\n    console.log("Spy number");  // Spy number\n} else {\n    console.log("Not spy");\n}',
  hint: 'Compare sum and product of digits'
},
{
  id: 'js_conditionals_39',
  topicId: 'js_conditionals',
  question: 'Check if a number is a neon number (square\'s sum of digits equals number).',
  mathSolution: 'Square number and sum its digits.',
  codeSolution: 'let num = 9;\nlet square = num * num;\nlet squareStr = square.toString();\nlet digitSum = 0;\nfor (let digit of squareStr) {\n    digitSum += parseInt(digit);\n}\nif (digitSum === num) {\n    console.log("Neon number");  // Neon number\n} else {\n    console.log("Not neon");\n}',
  hint: 'Square digit sum should equal original number'
},
{
  id: 'js_conditionals_40',
  topicId: 'js_conditionals',
  question: 'Check if a number is a buzz number (ends with 7 or divisible by 7).',
  mathSolution: 'Check last digit or divisibility.',
  codeSolution: 'let num = 14;\nif (num % 7 === 0 || num % 10 === 7) {\n    console.log("Buzz number");  // Buzz number\n} else {\n    console.log("Not buzz");\n}',
  hint: 'Use `% 7 === 0 || % 10 === 7`'
},
//function
{
  id: 'js_functions_1',
  topicId: 'js_functions',
  question: 'Write a function declaration that adds two numbers and returns the result.',
  mathSolution: 'Use function keyword with parameters.',
  codeSolution: 'function add(a, b) {\n    return a + b;\n}\nconsole.log(add(5, 3));  // 8',
  hint: 'Use `function name(parameters) { return value; }`'
},
{
  id: 'js_functions_2',
  topicId: 'js_functions',
  question: 'Write a function expression that multiplies two numbers.',
  mathSolution: 'Assign anonymous function to variable.',
  codeSolution: 'const multiply = function(a, b) {\n    return a * b;\n};\nconsole.log(multiply(4, 5));  // 20',
  hint: 'Function expression is stored in a variable.'
},
{
  id: 'js_functions_3',
  topicId: 'js_functions',
  question: 'Write an arrow function that subtracts two numbers.',
  mathSolution: 'Use => syntax, implicit return for single expression.',
  codeSolution: 'const subtract = (a, b) => a - b;\nconsole.log(subtract(10, 4));  // 6',
  hint: 'Arrow functions with single expression have implicit return.'
},
{
  id: 'js_functions_4',
  topicId: 'js_functions',
  question: 'Write a function with default parameter value.',
  mathSolution: 'Assign default in parameter list.',
  codeSolution: 'function greet(name = "Guest") {\n    return `Hello, ${name}!`;\n}\nconsole.log(greet());  // Hello, Guest!\nconsole.log(greet("John"));  // Hello, John!',
  hint: 'Use `param = defaultValue` in function definition.'
},
{
  id: 'js_functions_5',
  topicId: 'js_functions',
  question: 'Write a function that accepts rest parameters (...args).',
  mathSolution: 'Rest parameter collects all arguments into array.',
  codeSolution: 'function sumAll(...numbers) {\n    return numbers.reduce((sum, num) => sum + num, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4));  // 10',
  hint: 'Use `...parameterName` to collect remaining arguments.'
},
{
  id: 'js_functions_6',
  topicId: 'js_functions',
  question: 'Write a function that returns the maximum of three numbers.',
  mathSolution: 'Use Math.max or compare manually.',
  codeSolution: 'function maxOfThree(a, b, c) {\n    return Math.max(a, b, c);\n}\nconsole.log(maxOfThree(10, 25, 15));  // 25',
  hint: 'Use `Math.max()` for multiple numbers.'
},
{
  id: 'js_functions_7',
  topicId: 'js_functions',
  question: 'Write a recursive function to calculate factorial.',
  mathSolution: 'n! = n * (n-1)!, base case n <= 1.',
  codeSolution: 'function factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nconsole.log(factorial(5));  // 120',
  hint: 'Recursive functions call themselves with modified parameters.'
},
{
  id: 'js_functions_8',
  topicId: 'js_functions',
  question: 'Write a function that checks if a number is even using return value.',
  mathSolution: 'Return boolean based on modulus.',
  codeSolution: 'function isEven(num) {\n    return num % 2 === 0;\n}\nconsole.log(isEven(4));  // true\nconsole.log(isEven(7));  // false',
  hint: 'Return boolean directly from comparison.'
},
{
  id: 'js_functions_9',
  topicId: 'js_functions',
  question: 'Write a function that returns multiple values using object.',
  mathSolution: 'Return object with multiple properties.',
  codeSolution: 'function getMinMax(arr) {\n    return {\n        min: Math.min(...arr),\n        max: Math.max(...arr)\n    };\n}\nconsole.log(getMinMax([3, 7, 1, 9, 4]));  // {min:1, max:9}',
  hint: 'Use object literal to return multiple values.'
},
{
  id: 'js_functions_10',
  topicId: 'js_functions',
  question: 'Write a function that uses closure to create counter.',
  mathSolution: 'Inner function retains access to outer variable.',
  codeSolution: 'function createCounter() {\n    let count = 0;\n    return function() {\n        count++;\n        return count;\n    };\n}\nconst counter = createCounter();\nconsole.log(counter());  // 1\nconsole.log(counter());  // 2',
  hint: 'Inner function has access to outer function\'s variables.'
},
{
  id: 'js_functions_11',
  topicId: 'js_functions',
  question: 'Write a function that uses callback to process array.',
  mathSolution: 'Pass function as argument to another function.',
  codeSolution: 'function processArray(arr, callback) {\n    let result = [];\n    for (let item of arr) {\n        result.push(callback(item));\n    }\n    return result;\n}\nfunction double(x) { return x * 2; }\nconsole.log(processArray([1,2,3], double));  // [2,4,6]',
  hint: 'Callback functions are passed as arguments.'
},
{
  id: 'js_functions_12',
  topicId: 'js_functions',
  question: 'Write an Immediately Invoked Function Expression (IIFE).',
  mathSolution: 'Define and execute function immediately.',
  codeSolution: '(function() {\n    console.log("IIFE executed!");  // IIFE executed!\n})();\n\n(() => console.log("Arrow IIFE"))();  // Arrow IIFE',
  hint: 'Wrap function in parentheses and call immediately.'
},
{
  id: 'js_functions_13',
  topicId: 'js_functions',
  question: 'Write a function that demonstrates hoisting (function declaration).',
  mathSolution: 'Function declarations are hoisted completely.',
  codeSolution: 'console.log(sayHello("World"));  // Hello, World!\nfunction sayHello(name) {\n    return `Hello, ${name}!`;\n}',
  hint: 'Function declarations can be called before definition.'
},
{
  id: 'js_functions_14',
  topicId: 'js_functions',
  question: 'Show that function expressions are not hoisted.',
  mathSolution: 'Only variable declaration is hoisted, not assignment.',
  codeSolution: '// console.log(sayHi("John"));  // TypeError\nconst sayHi = function(name) {\n    return `Hi, ${name}!`;\n};\nconsole.log(sayHi("John"));  // Hi, John!',
  hint: 'Function expressions follow variable hoisting rules.'
},
{
  id: 'js_functions_15',
  topicId: 'js_functions',
  question: 'Write a higher-order function that returns a function.',
  mathSolution: 'Function that returns another function.',
  codeSolution: 'function multiplyBy(factor) {\n    return function(number) {\n        return number * factor;\n    };\n}\nconst double = multiplyBy(2);\nconsole.log(double(5));  // 10',
  hint: 'Return function from another function (closure).'
},
{
  id: 'js_functions_16',
  topicId: 'js_functions',
  question: 'Write a function that uses the arguments object.',
  mathSolution: 'arguments is array-like object of all parameters.',
  codeSolution: 'function sumAllArgs() {\n    let sum = 0;\n    for (let i = 0; i < arguments.length; i++) {\n        sum += arguments[i];\n    }\n    return sum;\n}\nconsole.log(sumAllArgs(1, 2, 3, 4));  // 10',
  hint: '`arguments` works only in non-arrow functions.'
},
{
  id: 'js_functions_17',
  topicId: 'js_functions',
  question: 'Write a function using call() method.',
  mathSolution: 'call() invokes function with specified this value.',
  codeSolution: 'function introduce() {\n    return `I am ${this.name} and I am ${this.age} years old.`;\n}\nconst person = { name: "Alice", age: 25 };\nconsole.log(introduce.call(person));  // I am Alice and I am 25 years old.',
  hint: '`call()` sets `this` and passes arguments individually.'
},
{
  id: 'js_functions_18',
  topicId: 'js_functions',
  question: 'Write a function using apply() method.',
  mathSolution: 'apply() similar to call but arguments as array.',
  codeSolution: 'function sum(a, b, c) {\n    return a + b + c;\n}\nconst numbers = [1, 2, 3];\nconsole.log(sum.apply(null, numbers));  // 6',
  hint: '`apply()` takes array of arguments.'
},
{
  id: 'js_functions_19',
  topicId: 'js_functions',
  question: 'Write a function using bind() method.',
  mathSolution: 'bind() returns new function with bound this value.',
  codeSolution: 'const person = { name: "Bob" };\nfunction greet() {\n    return `Hello, ${this.name}!`;\n}\nconst boundGreet = greet.bind(person);\nconsole.log(boundGreet());  // Hello, Bob!',
  hint: '`bind()` creates permanent this binding.'
},
{
  id: 'js_functions_20',
  topicId: 'js_functions',
  question: 'Write an arrow function that preserves lexical this.',
  mathSolution: 'Arrow functions don\'t have their own this.',
  codeSolution: 'const obj = {\n    name: "My Object",\n    getDelayedName: function() {\n        setTimeout(() => {\n            console.log(this.name);  // My Object (arrow preserves this)\n        }, 100);\n    }\n};\nobj.getDelayedName();',
  hint: 'Arrow functions inherit `this` from surrounding scope.'
},
{
  id: 'js_functions_21',
  topicId: 'js_functions',
  question: 'Write a function that uses default parameters with expression.',
  mathSolution: 'Default parameters can be expressions.',
  codeSolution: 'function getPrice(price, tax = price * 0.08) {\n    return price + tax;\n}\nconsole.log(getPrice(100));  // 108\nconsole.log(getPrice(100, 10));  // 110',
  hint: 'Default parameter can reference previous parameters.'
},
{
  id: 'js_functions_22',
  topicId: 'js_functions',
  question: 'Write a generator function that yields values.',
  mathSolution: 'Use function* and yield keyword.',
  codeSolution: 'function* numberGenerator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nconst gen = numberGenerator();\nconsole.log(gen.next().value);  // 1\nconsole.log(gen.next().value);  // 2\nconsole.log(gen.next().value);  // 3',
  hint: 'Generator functions use `function*` and `yield`.'
},
{
  id: 'js_functions_23',
  topicId: 'js_functions',
  question: 'Write an async function that returns a promise.',
  mathSolution: 'async functions always return a promise.',
  codeSolution: 'async function fetchData() {\n    return "Data loaded";\n}\nfetchData().then(result => console.log(result));  // Data loaded',
  hint: '`async` keyword makes function return a promise.'
},
{
  id: 'js_functions_24',
  topicId: 'js_functions',
  question: 'Write a function with error handling using try-catch.',
  mathSolution: 'Use try-catch to handle exceptions gracefully.',
  codeSolution: 'function divide(a, b) {\n    try {\n        if (b === 0) throw new Error("Division by zero");\n        return a / b;\n    } catch (error) {\n        return `Error: ${error.message}`;\n    }\n}\nconsole.log(divide(10, 0));  // Error: Division by zero',
  hint: 'Use `throw` to create custom errors.'
},
{
  id: 'js_functions_25',
  topicId: 'js_functions',
  question: 'Write a pure function (no side effects).',
  mathSolution: 'Pure function returns same output for same input.',
  codeSolution: 'function pureAdd(a, b) {\n    return a + b;  // No side effects, no external state\n}\nconsole.log(pureAdd(2, 3));  // 5\nconsole.log(pureAdd(2, 3));  // 5 (always same)',
  hint: 'Pure functions don\'t modify external state.'
},
{
  id: 'js_functions_26',
  topicId: 'js_functions',
  question: 'Write an impure function (has side effects).',
  mathSolution: 'Impure function modifies external state.',
  codeSolution: 'let counter = 0;\nfunction impureIncrement() {\n    counter++;  // Side effect: modifies external variable\n    return counter;\n}\nconsole.log(impureIncrement());  // 1\nconsole.log(impureIncrement());  // 2',
  hint: 'Impure functions modify external state or have side effects.'
},
{
  id: 'js_functions_27',
  topicId: 'js_functions',
  question: 'Write a memoized function to cache results.',
  mathSolution: 'Cache results to avoid recomputation.',
  codeSolution: 'function memoize(fn) {\n    const cache = {};\n    return function(...args) {\n        const key = JSON.stringify(args);\n        if (cache[key] === undefined) {\n            cache[key] = fn(...args);\n        }\n        return cache[key];\n    };\n}\nconst slowSquare = memoize(x => {\n    console.log("Computing...");\n    return x * x;\n});\nconsole.log(slowSquare(5));  // Computing... 25\nconsole.log(slowSquare(5));  // 25 (from cache)',
  hint: 'Cache stores results for repeated arguments.'
},
{
  id: 'js_functions_28',
  topicId: 'js_functions',
  question: 'Write a curry function that converts f(a,b,c) to f(a)(b)(c).',
  mathSolution: 'Currying transforms function to chain of single-argument functions.',
  codeSolution: 'function curry(fn) {\n    return function curried(...args) {\n        if (args.length >= fn.length) {\n            return fn(...args);\n        }\n        return (...more) => curried(...args, ...more);\n    };\n}\nfunction sum(a, b, c) { return a + b + c; }\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2)(3));  // 6',
  hint: 'Currying breaks down multi-argument functions.'
},
{
  id: 'js_functions_29',
  topicId: 'js_functions',
  question: 'Write a function composition function.',
  mathSolution: 'Compose multiple functions into one.',
  codeSolution: 'function compose(...fns) {\n    return function(x) {\n        return fns.reduceRight((acc, fn) => fn(acc), x);\n    };\n}\nconst add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst composed = compose(multiply3, add2);\nconsole.log(composed(5));  // (5+2)*3 = 21',
  hint: 'Composition applies functions from right to left.'
},
{
  id: 'js_functions_30',
  topicId: 'js_functions',
  question: 'Write a pipe function (left-to-right composition).',
  mathSolution: 'Pipe is composition from left to right.',
  codeSolution: 'function pipe(...fns) {\n    return function(x) {\n        return fns.reduce((acc, fn) => fn(acc), x);\n    };\n}\nconst add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst piped = pipe(add2, multiply3);\nconsole.log(piped(5));  // (5+2)*3 = 21',
  hint: 'Pipe applies functions left to right.'
},
{
  id: 'js_functions_31',
  topicId: 'js_functions',
  question: 'Write a function that uses destructuring in parameters.',
  mathSolution: 'Destructure object directly in parameter list.',
  codeSolution: 'function printPerson({ name, age, city = "Unknown" }) {\n    return `${name} is ${age} years old from ${city}`;\n}\nconst person = { name: "Alice", age: 30 };\nconsole.log(printPerson(person));  // Alice is 30 years old from Unknown',
  hint: 'Use `{ prop1, prop2 }` in parameters for object destructuring.'
},
{
  id: 'js_functions_32',
  topicId: 'js_functions',
  question: 'Write a function that uses array destructuring in parameters.',
  mathSolution: 'Destructure array elements in parameter list.',
  codeSolution: 'function getFirstAndLast([first, ...rest]) {\n    const last = rest.pop();\n    return { first, last };\n}\nconsole.log(getFirstAndLast([10, 20, 30, 40]));  // {first:10, last:40}',
  hint: 'Use `[first, second]` in parameters for array destructuring.'
},
{
  id: 'js_functions_33',
  topicId: 'js_functions',
  question: 'Write a function that checks if a string is palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'function isPalindrome(str) {\n    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n    return cleaned === cleaned.split("").reverse().join("");\n}\nconsole.log(isPalindrome("A man, a plan, a canal: Panama"));  // true',
  hint: 'Clean string by removing non-alphanumeric characters.'
},
{
  id: 'js_functions_34',
  topicId: 'js_functions',
  question: 'Write a function that counts character frequency.',
  mathSolution: 'Use object to track character counts.',
  codeSolution: 'function charFrequency(str) {\n    const freq = {};\n    for (let char of str) {\n        freq[char] = (freq[char] || 0) + 1;\n    }\n    return freq;\n}\nconsole.log(charFrequency("hello"));  // {h:1, e:1, l:2, o:1}',
  hint: 'Use object property as counter.'
},
{
  id: 'js_functions_35',
  topicId: 'js_functions',
  question: 'Write a function that finds the first non-repeating character.',
  mathSolution: 'Count frequencies, find first with count 1.',
  codeSolution: 'function firstNonRepeating(str) {\n    const freq = {};\n    for (let char of str) freq[char] = (freq[char] || 0) + 1;\n    for (let char of str) {\n        if (freq[char] === 1) return char;\n    }\n    return null;\n}\nconsole.log(firstNonRepeating("swiss"));  // "w"',
  hint: 'Two passes: one for counting, one for finding.'
},
{
  id: 'js_functions_36',
  topicId: 'js_functions',
  question: 'Write a function that flattens nested arrays (any depth).',
  mathSolution: 'Recursively flatten arrays.',
  codeSolution: 'function flattenDeep(arr) {\n    return arr.reduce((flat, item) => {\n        return flat.concat(Array.isArray(item) ? flattenDeep(item) : item);\n    }, []);\n}\nconsole.log(flattenDeep([1, [2, [3, [4]]]]));  // [1,2,3,4]',
  hint: 'Use recursion to handle nested arrays.'
},
{
  id: 'js_functions_37',
  topicId: 'js_functions',
  question: 'Write a function that returns unique elements from array.',
  mathSolution: 'Use Set for unique values.',
  codeSolution: 'function unique(arr) {\n    return [...new Set(arr)];\n}\nconsole.log(unique([1, 2, 2, 3, 4, 4, 5]));  // [1,2,3,4,5]',
  hint: '`new Set(arr)` automatically removes duplicates.'
},
{
  id: 'js_functions_38',
  topicId: 'js_functions',
  question: 'Write a function that rotates array by k positions.',
  mathSolution: 'Slice and concatenate.',
  codeSolution: 'function rotateArray(arr, k) {\n    k = k % arr.length;\n    return [...arr.slice(-k), ...arr.slice(0, -k)];\n}\nconsole.log(rotateArray([1,2,3,4,5], 2));  // [4,5,1,2,3]',
  hint: 'Use slice() to split array and spread to combine.'
},
{
  id: 'js_functions_39',
  topicId: 'js_functions',
  question: 'Write a throttle function that limits function calls.',
  mathSolution: 'Throttle ensures max one call per time interval.',
  codeSolution: 'function throttle(fn, delay) {\n    let lastCall = 0;\n    return function(...args) {\n        const now = Date.now();\n        if (now - lastCall >= delay) {\n            lastCall = now;\n            return fn(...args);\n        }\n    };\n}\nconst throttledLog = throttle(() => console.log("Called"), 1000);',
  hint: 'Throttle limits execution rate.'
},
{
  id: 'js_functions_40',
  topicId: 'js_functions',
  question: 'Write a debounce function that delays function execution.',
  mathSolution: 'Debounce waits for pause in calls before executing.',
  codeSolution: 'function debounce(fn, delay) {\n    let timeoutId;\n    return function(...args) {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n}\nconst debouncedLog = debounce(() => console.log("Called"), 500);',
  hint: 'Debounce resets timer on each call.'
},

);