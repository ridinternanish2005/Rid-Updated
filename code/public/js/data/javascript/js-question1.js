QuizData.questions.push(
  //introduction ,variable ,datatype,operator
{
  id: 'js_intro_1',
  topicId: 'js_intro',
  question: 'Write a JavaScript program that prints "Hello World" to the console.',
  mathSolution: 'Use console.log() to output text.',
  codeSolution: 'console.log("Hello World");',
  hint: 'console.log() is used for debugging and output.'
},
{
  id: 'js_intro_2',
  topicId: 'js_intro',
  question: 'Declare a variable using var and assign it a value.',
  mathSolution: 'var declares function-scoped or globally-scoped variable.',
  codeSolution: 'var message = "Hello JavaScript";\nconsole.log(message);  // Hello JavaScript',
  hint: 'var is function-scoped (older way, avoid in modern code).'
},
{
  id: 'js_intro_3',
  topicId: 'js_intro',
  question: 'Declare a variable using let and assign it a value.',
  mathSolution: 'let declares block-scoped variable.',
  codeSolution: 'let age = 25;\nconsole.log(age);  // 25',
  hint: 'let is block-scoped and preferred over var.'
},
{
  id: 'js_intro_4',
  topicId: 'js_intro',
  question: 'Declare a constant using const that cannot be reassigned.',
  mathSolution: 'const declares block-scoped constant.',
  codeSolution: 'const PI = 3.14159;\nconsole.log(PI);  // 3.14159\n// PI = 3.14;  // Error: Assignment to constant variable',
  hint: 'const prevents reassignment, but object properties can still change.'
},
{
  id: 'js_intro_5',
  topicId: 'js_intro',
  question: 'Create a simple function that adds two numbers.',
  mathSolution: 'function keyword defines reusable block of code.',
  codeSolution: 'function add(a, b) {\n    return a + b;\n}\nconsole.log(add(5, 3));  // 8',
  hint: 'Functions can take parameters and return values.'
},
{
  id: 'js_intro_6',
  topicId: 'js_intro',
  question: 'Create an arrow function that multiplies two numbers.',
  mathSolution: 'Arrow function provides concise syntax.',
  codeSolution: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 5));  // 20',
  hint: 'Arrow functions have implicit return with single expression.'
},
{
  id: 'js_intro_7',
  topicId: 'js_intro',
  question: 'Use template literals to create a string with variables.',
  mathSolution: 'Backticks allow embedding expressions with ${}.',
  codeSolution: 'const name = "John";\nconst age = 30;\nconst message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);',
  hint: 'Template literals use backticks (`) and ${} interpolation.'
},
{
  id: 'js_intro_8',
  topicId: 'js_intro',
  question: 'Create an array of fruits using array literal syntax.',
  mathSolution: 'Arrays store multiple values in ordered list.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: 'Use [] for array literal.'
},
{
  id: 'js_intro_9',
  topicId: 'js_intro',
  question: 'Access array elements using index and find array length.',
  mathSolution: 'Array indices start at 0, length property returns count.',
  codeSolution: 'const colors = ["red", "green", "blue"];\nconsole.log(colors[0]);     // red\nconsole.log(colors.length);  // 3',
  hint: 'First element index is 0, last is length-1.'
},
{
  id: 'js_intro_10',
  topicId: 'js_intro',
  question: 'Use push() and pop() methods to manipulate array.',
  mathSolution: 'push adds to end, pop removes from end.',
  codeSolution: 'const numbers = [1, 2, 3];\nnumbers.push(4);\nconsole.log(numbers);  // [1, 2, 3, 4]\nnumbers.pop();\nconsole.log(numbers);  // [1, 2, 3]',
  hint: 'push/pop modify the original array.'
},
{
  id: 'js_intro_11',
  topicId: 'js_intro',
  question: 'Create an object using object literal syntax.',
  mathSolution: 'Objects store key-value pairs for structured data.',
  codeSolution: 'const person = {\n    name: "John",\n    age: 30,\n    city: "New York"\n};\nconsole.log(person.name);  // John',
  hint: 'Use {} for object literal.'
},
{
  id: 'js_intro_12',
  topicId: 'js_intro',
  question: 'Access and modify object properties using dot notation.',
  mathSolution: 'Dot notation accesses property values.',
  codeSolution: 'const car = { brand: "Toyota", year: 2020 };\nconsole.log(car.brand);  // Toyota\ncar.year = 2021;\nconsole.log(car.year);   // 2021',
  hint: 'Use dot or bracket notation to access properties.'
},
{
  id: 'js_intro_13',
  topicId: 'js_intro',
  question: 'Use if-else statement to check if number is positive or negative.',
  mathSolution: 'Conditional execution based on boolean expression.',
  codeSolution: 'const num = -5;\nif (num > 0) {\n    console.log("Positive");\n} else if (num < 0) {\n    console.log("Negative");\n} else {\n    console.log("Zero");\n}',
  hint: 'if-else executes code based on condition.'
},
{
  id: 'js_intro_14',
  topicId: 'js_intro',
  question: 'Use for loop to print numbers from 1 to 5.',
  mathSolution: 'For loop repeats code with counter variable.',
  codeSolution: 'for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}',
  hint: 'For loop syntax: for(init; condition; increment)'
},
{
  id: 'js_intro_15',
  topicId: 'js_intro',
  question: 'Use while loop to calculate sum of numbers from 1 to 10.',
  mathSolution: 'While loop continues while condition is true.',
  codeSolution: 'let sum = 0;\nlet i = 1;\nwhile (i <= 10) {\n    sum += i;\n    i++;\n}\nconsole.log(sum);  // 55',
  hint: 'While loop checks condition before each iteration.'
},
{
  id: 'js_intro_16',
  topicId: 'js_intro',
  question: 'Create a simple calculator using switch statement.',
  mathSolution: 'Switch executes different code blocks based on value.',
  codeSolution: 'function calculate(a, b, op) {\n    switch(op) {\n        case "+": return a + b;\n        case "-": return a - b;\n        case "*": return a * b;\n        case "/": return b !== 0 ? a / b : "Cannot divide by zero";\n        default: return "Invalid operator";\n    }\n}\nconsole.log(calculate(10, 5, "+"));  // 15',
  hint: 'switch is efficient for multiple equal comparisons.'
},
{
  id: 'js_intro_17',
  topicId: 'js_intro',
  question: 'Use typeof operator to check data type of variables.',
  mathSolution: 'typeof returns string indicating type.',
  codeSolution: 'console.log(typeof 42);        // number\nconsole.log(typeof "hello");    // string\nconsole.log(typeof true);       // boolean\nconsole.log(typeof undefined);  // undefined\nconsole.log(typeof null);       // object (historical bug)',
  hint: 'typeof helps identify variable types at runtime.'
},
{
  id: 'js_intro_18',
  topicId: 'js_intro',
  question: 'Create an immediately invoked function expression (IIFE).',
  mathSolution: 'IIFE runs immediately after definition.',
  codeSolution: '(function() {\n    console.log("IIFE executed!");\n})();\n\n// Arrow function IIFE\n(() => console.log("Arrow IIFE"))();',
  hint: 'Wrap function in parentheses and call immediately.'
},
{
  id: 'js_intro_19',
  topicId: 'js_intro',
  question: 'Use ternary operator for conditional assignment.',
  mathSolution: 'condition ? value_if_true : value_if_false',
  codeSolution: 'const age = 18;\nconst status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status);  // Adult',
  hint: 'Ternary operator is shorthand for simple if-else.'
},
{
  id: 'js_intro_20',
  topicId: 'js_intro',
  question: 'Create a simple class with constructor and method.',
  mathSolution: 'Class defines blueprint for objects.',
  codeSolution: 'class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    greet() {\n        return `Hello, my name is ${this.name}`;\n    }\n}\nconst john = new Person("John", 30);\nconsole.log(john.greet());  // Hello, my name is John',
  hint: 'Classes are syntactic sugar over prototypes.'
},
{
  id: 'js_intro_21',
  topicId: 'js_intro',
  question: 'Use spread operator to copy an array.',
  mathSolution: 'Spread (...) expands array into elements.',
  codeSolution: 'const original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original);  // [1, 2, 3]\nconsole.log(copy);      // [1, 2, 3, 4]',
  hint: 'Spread creates shallow copy of array.'
},
{
  id: 'js_intro_22',
  topicId: 'js_intro',
  question: 'Use rest parameters to collect remaining arguments.',
  mathSolution: 'Rest parameter collects arguments into array.',
  codeSolution: 'function sumAll(...numbers) {\n    return numbers.reduce((sum, num) => sum + num, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4));  // 10',
  hint: 'Rest parameters must be the last parameter.'
},
{
  id: 'js_intro_23',
  topicId: 'js_intro',
  question: 'Use destructuring to extract values from array.',
  mathSolution: 'Destructuring unpacks values into variables.',
  codeSolution: 'const colors = ["red", "green", "blue"];\nconst [first, second] = colors;\nconsole.log(first, second);  // red green',
  hint: 'Array destructuring uses [] on left side.'
},
{
  id: 'js_intro_24',
  topicId: 'js_intro',
  question: 'Use object destructuring to extract properties.',
  mathSolution: 'Object destructuring unpacks properties.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconst { name, age } = person;\nconsole.log(name, age);  // John 30',
  hint: 'Object destructuring uses {} on left side.'
},
{
  id: 'js_intro_25',
  topicId: 'js_intro',
  question: 'Use map() to transform array elements.',
  mathSolution: 'map creates new array with transformed values.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]',
  hint: 'map does not modify original array.'
},
{
  id: 'js_intro_26',
  topicId: 'js_intro',
  question: 'Use filter() to get even numbers from array.',
  mathSolution: 'filter returns elements that pass test.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: 'filter returns new array with elements where callback returns true.'
},
{
  id: 'js_intro_27',
  topicId: 'js_intro',
  question: 'Use reduce() to sum all array elements.',
  mathSolution: 'reduce accumulates values left to right.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 15',
  hint: 'reduce takes accumulator and current value.'
},
{
  id: 'js_intro_28',
  topicId: 'js_intro',
  question: 'Use forEach() to iterate over array.',
  mathSolution: 'forEach executes callback for each element.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach(fruit => console.log(fruit));',
  hint: 'forEach doesn\'t return anything, just iterates.'
},
{
  id: 'js_intro_29',
  topicId: 'js_intro',
  question: 'Use find() to get first element greater than 10.',
  mathSolution: 'find returns first element matching condition.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(n => n > 10);\nconsole.log(found);  // 12',
  hint: 'find returns element, not index.'
},
{
  id: 'js_intro_30',
  topicId: 'js_intro',
  question: 'Use some() and every() for array validation.',
  mathSolution: 'some checks if any element passes, every checks all.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconsole.log(numbers.some(n => n > 5));   // true\nconsole.log(numbers.every(n => n % 2 === 0));  // true',
  hint: 'some/every return boolean values.'
},
{
  id: 'js_intro_31',
  topicId: 'js_intro',
  question: 'Create a promise that resolves after delay.',
  mathSolution: 'Promise represents future completion/error.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\ndelay(1000).then(() => console.log("1 second passed"));',
  hint: 'Promise constructor takes executor with resolve/reject.'
},
{
  id: 'js_intro_32',
  topicId: 'js_intro',
  question: 'Handle promise rejection using catch.',
  mathSolution: 'catch handles rejected promises.',
  codeSolution: 'function failPromise() {\n    return new Promise((resolve, reject) => {\n        reject("Something went wrong");\n    });\n}\nfailPromise()\n    .then(result => console.log(result))\n    .catch(error => console.log(error));  // Something went wrong',
  hint: 'catch is for handling errors in promises.'
},
{
  id: 'js_intro_33',
  topicId: 'js_intro',
  question: 'Use async/await for cleaner promise handling.',
  mathSolution: 'async functions return promises, await pauses execution.',
  codeSolution: 'async function fetchData() {\n    const result = await Promise.resolve("Data loaded");\n    console.log(result);\n}\nfetchData();  // Data loaded',
  hint: 'await only works inside async functions.'
},
{
  id: 'js_intro_34',
  topicId: 'js_intro',
  question: 'Use try-catch with async/await.',
  mathSolution: 'try-catch handles errors in async functions.',
  codeSolution: 'async function safeFetch() {\n    try {\n        const result = await Promise.reject("Error occurred");\n        console.log(result);\n    } catch (error) {\n        console.log("Caught:", error);\n    }\n}\nsafeFetch();  // Caught: Error occurred',
  hint: 'Always use try-catch with await for error handling.'
},
{
  id: 'js_intro_35',
  topicId: 'js_intro',
  question: 'Use Promise.all to wait for multiple promises.',
  mathSolution: 'Promise.all resolves when all promises resolve.',
  codeSolution: 'const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconst p3 = Promise.resolve(3);\nPromise.all([p1, p2, p3])\n    .then(results => console.log(results));  // [1, 2, 3]',
  hint: 'Promise.all rejects if any promise rejects.'
},
{
  id: 'js_intro_36',
  topicId: 'js_intro',
  question: 'Create a Set to store unique values.',
  mathSolution: 'Set automatically removes duplicates.',
  codeSolution: 'const numbers = [1, 2, 2, 3, 4, 4, 5];\nconst unique = new Set(numbers);\nconsole.log([...unique]);  // [1, 2, 3, 4, 5]',
  hint: 'Set stores only unique values.'
},
{
  id: 'js_intro_37',
  topicId: 'js_intro',
  question: 'Create a Map for key-value storage.',
  mathSolution: 'Map allows any type as key.',
  codeSolution: 'const map = new Map();\nmap.set("name", "John");\nmap.set(42, "answer");\nconsole.log(map.get("name"));  // John\nconsole.log(map.get(42));      // answer',
  hint: 'Map preserves insertion order.'
},
{
  id: 'js_intro_38',
  topicId: 'js_intro',
  question: 'Use JSON.stringify() to convert object to JSON string.',
  mathSolution: 'JSON.stringify serializes object to string.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString);  // {"name":"John","age":30}',
  hint: 'JSON.stringify converts objects to strings.'
},
{
  id: 'js_intro_39',
  topicId: 'js_intro',
  question: 'Use JSON.parse() to convert JSON string to object.',
  mathSolution: 'JSON.parse deserializes JSON string.',
  codeSolution: 'const jsonString = \'{"name":"John","age":30}\';\nconst person = JSON.parse(jsonString);\nconsole.log(person.name);  // John',
  hint: 'JSON.parse converts JSON strings back to objects.'
},
{
  id: 'js_intro_40',
  topicId: 'js_intro',
  question: 'Use localStorage to store and retrieve data.',
  mathSolution: 'localStorage persists data across sessions.',
  codeSolution: 'localStorage.setItem("key", "value");\nconst value = localStorage.getItem("key");\nconsole.log(value);  // value\nlocalStorage.removeItem("key");',
  hint: 'localStorage stores key-value pairs as strings.'
},
//variable
{
  id: 'js_var_1',
  topicId: 'js_var',
  question: 'Declare a variable using var and assign it value 10, then print it.',
  mathSolution: 'Use var keyword to declare variable.',
  codeSolution: 'var num = 10;\nconsole.log(num);  // 10',
  hint: 'Use `var variableName = value;`'
},
{
  id: 'js_var_2',
  topicId: 'js_var',
  question: 'Declare a variable using let and assign it value "Hello", then print it.',
  mathSolution: 'Use let keyword for block-scoped variable.',
  codeSolution: 'let message = "Hello";\nconsole.log(message);  // Hello',
  hint: 'Use `let variableName = value;`'
},
{
  id: 'js_var_3',
  topicId: 'js_var',
  question: 'Declare a constant using const for PI value 3.14159 and print it.',
  mathSolution: 'Use const for values that never change.',
  codeSolution: 'const PI = 3.14159;\nconsole.log(PI);  // 3.14159',
  hint: 'Use `const VARIABLE_NAME = value;` (uppercase for constants)'
},
{
  id: 'js_var_4',
  topicId: 'js_var',
  question: 'Declare a var variable, reassign it a new value, and print both values.',
  mathSolution: 'var allows reassignment.',
  codeSolution: 'var age = 20;\nconsole.log(age);  // 20\nage = 25;\nconsole.log(age);  // 25',
  hint: 'You can reassign var variables anytime.'
},
{
  id: 'js_var_5',
  topicId: 'js_var',
  question: 'Declare a let variable, reassign it, and print the new value.',
  mathSolution: 'let allows reassignment.',
  codeSolution: 'let score = 50;\nconsole.log(score);  // 50\nscore = 75;\nconsole.log(score);  // 75',
  hint: 'let variables can be reassigned.'
},
{
  id: 'js_var_6',
  topicId: 'js_var',
  question: 'Try to reassign a const variable and observe the error (comment the error).',
  mathSolution: 'const cannot be reassigned.',
  codeSolution: 'const NAME = "John";\nconsole.log(NAME);  // John\n// NAME = "Jane";  // TypeError: Assignment to constant variable',
  hint: 'const variables cannot be reassigned after declaration.'
},
{
  id: 'js_var_7',
  topicId: 'js_var',
  question: 'Declare multiple variables (var, let, const) in one line and print them.',
  mathSolution: 'Use commas to declare multiple variables.',
  codeSolution: 'var a = 1, b = 2;\nlet c = 3, d = 4;\nconst E = 5, F = 6;\nconsole.log(a, b, c, d, E, F);  // 1 2 3 4 5 6',
  hint: 'Separate with commas: `var x=1, y=2;`'
},
{
  id: 'js_var_8',
  topicId: 'js_var',
  question: 'Demonstrate variable hoisting with var (print before declaration).',
  mathSolution: 'var declarations are hoisted (undefined before assignment).',
  codeSolution: 'console.log(x);  // undefined\nvar x = 5;\nconsole.log(x);  // 5',
  hint: 'var is hoisted to the top of its scope.'
},
{
  id: 'js_var_9',
  topicId: 'js_var',
  question: 'Show that let is not hoisted (ReferenceError).',
  mathSolution: 'let is hoisted but not initialized (Temporal Dead Zone).',
  codeSolution: '// console.log(y);  // ReferenceError: Cannot access before initialization\nlet y = 10;\nconsole.log(y);  // 10',
  hint: 'let variables are in TDZ until declaration.'
},
{
  id: 'js_var_10',
  topicId: 'js_var',
  question: 'Declare a variable without any keyword (bad practice) and print it.',
  mathSolution: 'Without keyword creates global property (avoid this).',
  codeSolution: 'z = 100;\nconsole.log(z);  // 100',
  hint: 'Always use var, let, or const to declare variables.'
},
{
  id: 'js_var_11',
  topicId: 'js_var',
  question: 'Demonstrate block scope with let inside an if block.',
  mathSolution: 'let is block-scoped, accessible only inside {}.',
  codeSolution: 'if (true) {\n    let blockVar = "Inside block";\n    console.log(blockVar);  // Inside block\n}\n// console.log(blockVar);  // ReferenceError',
  hint: 'let variables are only accessible within the block they are declared.'
},
{
  id: 'js_var_12',
  topicId: 'js_var',
  question: 'Demonstrate function scope with var inside a function.',
  mathSolution: 'var is function-scoped, not block-scoped.',
  codeSolution: 'function test() {\n    var funcVar = "Inside function";\n    console.log(funcVar);  // Inside function\n}\ntest();\n// console.log(funcVar);  // ReferenceError',
  hint: 'var is accessible anywhere inside the function.'
},
{
  id: 'js_var_13',
  topicId: 'js_var',
  question: 'Show that var ignores block scope (accessible outside if block).',
  mathSolution: 'var is not block-scoped, leaks outside blocks.',
  codeSolution: 'if (true) {\n    var leakVar = "I leak out!";\n}\nconsole.log(leakVar);  // I leak out!',
  hint: 'var variables are function-scoped, not block-scoped.'
},
{
  id: 'js_var_14',
  topicId: 'js_var',
  question: 'Redeclare a var variable multiple times and print.',
  mathSolution: 'var allows redeclaration in same scope.',
  codeSolution: 'var city = "New York";\nvar city = "Los Angeles";\nconsole.log(city);  // Los Angeles',
  hint: 'var can be redeclared without error.'
},
{
  id: 'js_var_15',
  topicId: 'js_var',
  question: 'Try to redeclare a let variable (error) and comment the error.',
  mathSolution: 'let does not allow redeclaration in same scope.',
  codeSolution: 'let country = "USA";\n// let country = "Canada";  // SyntaxError: Identifier already declared\nconsole.log(country);  // USA',
  hint: 'let cannot be redeclared in the same scope.'
},
{
  id: 'js_var_16',
  topicId: 'js_var',
  question: 'Declare a const object and modify its property (allowed).',
  mathSolution: 'const prevents reassignment, not mutation.',
  codeSolution: 'const person = { name: "Alice", age: 25 };\nperson.age = 26;\nconsole.log(person);  // { name: "Alice", age: 26 }',
  hint: 'const objects can have their properties changed.'
},
{
  id: 'js_var_17',
  topicId: 'js_var',
  question: 'Declare a const array and modify its elements (allowed).',
  mathSolution: 'const arrays can be mutated.',
  codeSolution: 'const colors = ["red", "blue"];\ncolors.push("green");\nconsole.log(colors);  // ["red", "blue", "green"]',
  hint: 'const arrays can use array methods like push(), pop().'
},
{
  id: 'js_var_18',
  topicId: 'js_var',
  question: 'Try to reassign a const array (error) and comment the error.',
  mathSolution: 'const cannot be reassigned to a new array.',
  codeSolution: 'const nums = [1, 2, 3];\n// nums = [4, 5, 6];  // TypeError: Assignment to constant variable\nconsole.log(nums);  // [1, 2, 3]',
  hint: 'const reference cannot change, even for arrays/objects.'
},
{
  id: 'js_var_19',
  topicId: 'js_var',
  question: 'Demonstrate global scope with var (window property in browsers).',
  mathSolution: 'var in global scope becomes window property.',
  codeSolution: 'var globalVar = "I am global";\nconsole.log(window.globalVar);  // I am global (in browser)',
  hint: 'Global var creates property on window object.'
},
{
  id: 'js_var_20',
  topicId: 'js_var',
  question: 'Show that let in global scope does NOT become window property.',
  mathSolution: 'let does not create property on window object.',
  codeSolution: 'let globalLet = "I am also global";\nconsole.log(window.globalLet);  // undefined (in browser)',
  hint: 'let and const do not add properties to window.'
},
{
  id: 'js_var_21',
  topicId: 'js_var',
  question: 'Use template literals with variables to create a sentence.',
  mathSolution: 'Use backticks and ${} for interpolation.',
  codeSolution: 'let name = "Bob";\nlet age = 30;\nconsole.log(`My name is ${name} and I am ${age} years old.`);  // My name is Bob and I am 30 years old.',
  hint: 'Use backticks (`) and ${variable} syntax.'
},
{
  id: 'js_var_22',
  topicId: 'js_var',
  question: 'Declare a variable without initializing it (undefined).',
  mathSolution: 'Variables declared without value are undefined.',
  codeSolution: 'let undeclaredVar;\nconsole.log(undeclaredVar);  // undefined',
  hint: 'Variables are undefined until assigned a value.'
},
{
  id: 'js_var_23',
  topicId: 'js_var',
  question: 'Check type of undefined variable using typeof.',
  mathSolution: 'typeof returns "undefined" for uninitialized variables.',
  codeSolution: 'let unknown;\nconsole.log(typeof unknown);  // undefined',
  hint: 'Use `typeof variable` to check type.'
},
{
  id: 'js_var_24',
  topicId: 'js_var',
  question: 'Declare a variable with var inside a loop and access outside (works).',
  mathSolution: 'var is function-scoped, not block-scoped.',
  codeSolution: 'for (var i = 0; i < 3; i++) {\n    var loopVar = i;\n}\nconsole.log(loopVar);  // 2',
  hint: 'var inside loop is accessible outside the loop.'
},
{
  id: 'js_var_25',
  topicId: 'js_var',
  question: 'Declare a variable with let inside a loop and try to access outside (error).',
  mathSolution: 'let is block-scoped, inaccessible outside loop.',
  codeSolution: 'for (let j = 0; j < 3; j++) {\n    let blockScoped = j;\n}\n// console.log(blockScoped);  // ReferenceError',
  hint: 'let is only accessible within the loop block.'
},
{
  id: 'js_var_26',
  topicId: 'js_var',
  question: 'Use const for a function expression.',
  mathSolution: 'const prevents reassignment of function variable.',
  codeSolution: 'const greet = function() {\n    return "Hello!";\n};\nconsole.log(greet());  // Hello!',
  hint: 'const is commonly used for function expressions.'
},
{
  id: 'js_var_27',
  topicId: 'js_var',
  question: 'Use let for a counter in a for loop (preferred way).',
  mathSolution: 'let creates a new binding for each iteration.',
  codeSolution: 'for (let i = 0; i < 3; i++) {\n    console.log(i);  // 0, 1, 2\n}',
  hint: 'Always use let for loop counters.'
},
{
  id: 'js_var_28',
  topicId: 'js_var',
  question: 'Compare var vs let in a setTimeout loop (Classic interview question).',
  mathSolution: 'var creates one variable; let creates block-scoped per iteration.',
  codeSolution: '// With var\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);  // 3, 3, 3\n}\n// With let\nfor (let j = 0; j < 3; j++) {\n    setTimeout(() => console.log(j), 100);  // 0, 1, 2\n}',
  hint: 'let creates a new scope for each loop iteration.'
},
{
  id: 'js_var_29',
  topicId: 'js_var',
  question: 'Declare multiple const variables with computed names.',
  mathSolution: 'Use object literal or computed property names (ES6).',
  codeSolution: 'const key = "score";\nconst obj = {\n    [key]: 100\n};\nconsole.log(obj.score);  // 100',
  hint: 'Use square brackets [] for computed property names.'
},
{
  id: 'js_var_30',
  topicId: 'js_var',
  question: 'Swap two variables using destructuring assignment.',
  mathSolution: 'Use array destructuring to swap values.',
  codeSolution: 'let a = 5, b = 10;\n[a, b] = [b, a];\nconsole.log(a, b);  // 10 5',
  hint: 'Use `[a, b] = [b, a]` for swapping.'
},
{
  id: 'js_var_31',
  topicId: 'js_var',
  question: 'Use const for a variable that should never change (best practice).',
  mathSolution: 'Use const by default, let only if reassignment needed.',
  codeSolution: 'const MAX_USERS = 100;\nconst API_URL = "https://api.example.com";\nconsole.log(MAX_USERS, API_URL);',
  hint: 'Always prefer const over let when possible.'
},
{
  id: 'js_var_32',
  topicId: 'js_var',
  question: 'Demonstrate Temporal Dead Zone (TDZ) with let.',
  mathSolution: 'TDZ is period between entering scope and declaration.',
  codeSolution: '{\n    // TDZ starts\n    // console.log(tdzVar);  // ReferenceError\n    let tdzVar = "Now safe";\n    console.log(tdzVar);  // Now safe\n}',
  hint: 'Cannot access let variables before declaration.'
},
{
  id: 'js_var_33',
  topicId: 'js_var',
  question: 'Show that var ignores TDZ (can access before declaration).',
  mathSolution: 'var is hoisted and initialized with undefined.',
  codeSolution: '{\n    console.log(varVar);  // undefined (no TDZ)\n    var varVar = "Works fine";\n    console.log(varVar);  // Works fine\n}',
  hint: 'var is initialized as undefined, no TDZ.'
},
{
  id: 'js_var_34',
  topicId: 'js_var',
  question: 'Declare a variable using let in a switch statement (block scope).',
  mathSolution: 'switch creates a block, let is scoped to it.',
  codeSolution: 'let value = "A";\nswitch(value) {\n    case "A":\n        let message = "Found A";\n        console.log(message);  // Found A\n        break;\n}\n// console.log(message);  // ReferenceError',
  hint: 'let in switch is block-scoped to the case.'
},
{
  id: 'js_var_35',
  topicId: 'js_var',
  question: 'Create a variable with var in a switch case (no block scope issues).',
  mathSolution: 'var is function-scoped, leaks out of switch.',
  codeSolution: 'switch("B") {\n    case "B":\n        var leakMessage = "I leak";\n        console.log(leakMessage);  // I leak\n}\nconsole.log(leakMessage);  // I leak (accessible)',
  hint: 'var ignores switch block boundaries.'
},
{
  id: 'js_var_36',
  topicId: 'js_var',
  question: 'Use destructuring to extract variables from an object.',
  mathSolution: 'Use {} on left side to extract properties.',
  codeSolution: 'const user = { name: "Alice", age: 25, city: "Paris" };\nconst { name, age } = user;\nconsole.log(name, age);  // Alice 25',
  hint: 'Use `const { prop1, prop2 } = object;` syntax.'
},
{
  id: 'js_var_37',
  topicId: 'js_var',
  question: 'Use destructuring to extract variables from an array.',
  mathSolution: 'Use [] on left side to extract array elements.',
  codeSolution: 'const colors = ["red", "green", "blue"];\nconst [first, second] = colors;\nconsole.log(first, second);  // red green',
  hint: 'Use `const [var1, var2] = array;` syntax.'
},
{
  id: 'js_var_38',
  topicId: 'js_var',
  question: 'Set default values in destructuring assignment.',
  mathSolution: 'Use = to provide default values.',
  codeSolution: 'const [a = 1, b = 2] = [10];\nconsole.log(a, b);  // 10 2\nconst { x = 5, y = 10 } = { x: 20 };\nconsole.log(x, y);  // 20 10',
  hint: 'Add = defaultValue after variable name.'
},
{
  id: 'js_var_39',
  topicId: 'js_var',
  question: 'Rename variables during object destructuring.',
  mathSolution: 'Use colon : to rename extracted properties.',
  codeSolution: 'const person = { firstName: "John", lastName: "Doe" };\nconst { firstName: fName, lastName: lName } = person;\nconsole.log(fName, lName);  // John Doe',
  hint: 'Use `{ oldName: newName }` syntax.'
},
{
  id: 'js_var_40',
  topicId: 'js_var',
  question: 'Use rest operator (...) with destructuring.',
  mathSolution: 'Rest collects remaining elements into an array.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst [first, second, ...rest] = numbers;\nconsole.log(first, second);  // 1 2\nconsole.log(rest);  // [3, 4, 5]',
  hint: 'Use `...rest` to collect remaining items.'
},
//datatype
{
  id: 'js_datatypes_1',
  topicId: 'js_datatypes',
  question: 'Declare a string variable and check its type using typeof.',
  mathSolution: 'Use typeof operator to get data type.',
  codeSolution: 'let str = "Hello World";\nconsole.log(typeof str);  // string',
  hint: 'Use `typeof variable` to check type.'
},
{
  id: 'js_datatypes_2',
  topicId: 'js_datatypes',
  question: 'Declare a number variable and check its type.',
  mathSolution: 'Numbers include integers and decimals.',
  codeSolution: 'let num = 42;\nconsole.log(typeof num);  // number\nlet decimal = 3.14;\nconsole.log(typeof decimal);  // number',
  hint: 'Both integers and decimals are "number" type.'
},
{
  id: 'js_datatypes_3',
  topicId: 'js_datatypes',
  question: 'Declare a boolean variable and check its type.',
  mathSolution: 'Boolean has only true/false values.',
  codeSolution: 'let isLogged = true;\nconsole.log(typeof isLogged);  // boolean\nlet isActive = false;\nconsole.log(typeof isActive);  // boolean',
  hint: 'Boolean values are true or false.'
},
{
  id: 'js_datatypes_4',
  topicId: 'js_datatypes',
  question: 'Declare an undefined variable and check its type.',
  mathSolution: 'Undefined means variable declared but no value.',
  codeSolution: 'let uncertain;\nconsole.log(typeof uncertain);  // undefined',
  hint: 'Variables without assignment are undefined.'
},
{
  id: 'js_datatypes_5',
  topicId: 'js_datatypes',
  question: 'Declare a null variable and check its type (note the quirk).',
  mathSolution: 'typeof null returns "object" (JavaScript bug).',
  codeSolution: 'let empty = null;\nconsole.log(typeof empty);  // object (historical bug)',
  hint: 'null is primitive but typeof returns "object".'
},
{
  id: 'js_datatypes_6',
  topicId: 'js_datatypes',
  question: 'Declare a symbol variable and check its type.',
  mathSolution: 'Symbol creates unique identifier.',
  codeSolution: 'let sym = Symbol("id");\nconsole.log(typeof sym);  // symbol',
  hint: 'Use `Symbol()` to create unique symbols.'
},
{
  id: 'js_datatypes_7',
  topicId: 'js_datatypes',
  question: 'Declare a bigint variable and check its type.',
  mathSolution: 'BigInt for large numbers beyond 2^53-1.',
  codeSolution: 'let bigNumber = 9007199254740991n;\nconsole.log(typeof bigNumber);  // bigint',
  hint: 'Add `n` suffix to create BigInt.'
},
{
  id: 'js_datatypes_8',
  topicId: 'js_datatypes',
  question: 'Create an array and check its type (returns object).',
  mathSolution: 'Arrays are objects in JavaScript.',
  codeSolution: 'let fruits = ["apple", "banana", "orange"];\nconsole.log(typeof fruits);  // object',
  hint: 'Use Array.isArray() to check if something is an array.'
},
{
  id: 'js_datatypes_9',
  topicId: 'js_datatypes',
  question: 'Create an object and check its type.',
  mathSolution: 'Objects are fundamental reference types.',
  codeSolution: 'let person = { name: "John", age: 30 };\nconsole.log(typeof person);  // object',
  hint: 'Objects return "object" type.'
},
{
  id: 'js_datatypes_10',
  topicId: 'js_datatypes',
  question: 'Create a function and check its type (returns function).',
  mathSolution: 'Functions are callable objects.',
  codeSolution: 'function greet() { return "Hello"; }\nconsole.log(typeof greet);  // function',
  hint: 'Functions return "function" type (special object).'
},
{
  id: 'js_datatypes_11',
  topicId: 'js_datatypes',
  question: 'Check type of NaN (Not a Number).',
  mathSolution: 'NaN is of type number despite name.',
  codeSolution: 'let notNumber = NaN;\nconsole.log(typeof notNumber);  // number',
  hint: 'NaN is a special numeric value.'
},
{
  id: 'js_datatypes_12',
  topicId: 'js_datatypes',
  question: 'Check type of Infinity.',
  mathSolution: 'Infinity is a number type.',
  codeSolution: 'let infinite = 1 / 0;\nconsole.log(typeof infinite);  // number\nconsole.log(infinite);  // Infinity',
  hint: 'Infinity represents mathematical infinity.'
},
{
  id: 'js_datatypes_13',
  topicId: 'js_datatypes',
  question: 'Convert string to number using Number() and check type.',
  mathSolution: 'Number() converts string to number.',
  codeSolution: 'let str = "123";\nlet num = Number(str);\nconsole.log(typeof num);  // number\nconsole.log(num);  // 123',
  hint: 'Use Number(), parseInt(), or parseFloat().'
},
{
  id: 'js_datatypes_14',
  topicId: 'js_datatypes',
  question: 'Convert number to string using String() and check type.',
  mathSolution: 'String() converts any type to string.',
  codeSolution: 'let num = 456;\nlet str = String(num);\nconsole.log(typeof str);  // string\nconsole.log(str);  // "456"',
  hint: 'Use String(), toString(), or + "" operator.'
},
{
  id: 'js_datatypes_15',
  topicId: 'js_datatypes',
  question: 'Convert to boolean using Boolean() and check type.',
  mathSolution: 'Boolean() converts to true/false.',
  codeSolution: 'let truthy = Boolean(1);\nlet falsy = Boolean(0);\nconsole.log(typeof truthy);  // boolean\nconsole.log(truthy, falsy);  // true false',
  hint: 'Falsy values: 0, "", null, undefined, NaN, false.'
},
{
  id: 'js_datatypes_16',
  topicId: 'js_datatypes',
  question: 'Check if a variable is an array using Array.isArray().',
  mathSolution: 'Array.isArray() returns true for arrays.',
  codeSolution: 'let arr = [1, 2, 3];\nlet obj = { a: 1 };\nconsole.log(Array.isArray(arr));  // true\nconsole.log(Array.isArray(obj));  // false',
  hint: 'Use Array.isArray() instead of typeof for arrays.'
},
{
  id: 'js_datatypes_17',
  topicId: 'js_datatypes',
  question: 'Check if a value is NaN using isNaN() function.',
  mathSolution: 'isNaN() checks if value is Not-a-Number.',
  codeSolution: 'console.log(isNaN(NaN));  // true\nconsole.log(isNaN("hello"));  // true\nconsole.log(isNaN(123));  // false',
  hint: 'Use isNaN() or Number.isNaN() for strict check.'
},
{
  id: 'js_datatypes_18',
  topicId: 'js_datatypes',
  question: 'Use Number.isNaN() for strict NaN check (recommended).',
  mathSolution: 'Number.isNaN() only true for actual NaN.',
  codeSolution: 'console.log(Number.isNaN(NaN));  // true\nconsole.log(Number.isNaN("hello"));  // false (string not converted)\nconsole.log(isNaN("hello"));  // true',
  hint: 'Number.isNaN() doesn\'t coerce values.'
},
{
  id: 'js_datatypes_19',
  topicId: 'js_datatypes',
  question: 'Check if a number is finite using isFinite().',
  mathSolution: 'isFinite() returns false for Infinity and NaN.',
  codeSolution: 'console.log(isFinite(100));  // true\nconsole.log(isFinite(Infinity));  // false\nconsole.log(isFinite(NaN));  // false',
  hint: 'Use isFinite() to check for valid numbers.'
},
{
  id: 'js_datatypes_20',
  topicId: 'js_datatypes',
  question: 'Demonstrate string concatenation with different types.',
  mathSolution: '+ operator with string causes coercion to string.',
  codeSolution: 'let str = "The answer is " + 42;\nconsole.log(typeof str);  // string\nconsole.log(str);  // The answer is 42',
  hint: 'When string is involved, + becomes concatenation.'
},
{
  id: 'js_datatypes_21',
  topicId: 'js_datatypes',
  question: 'Show type coercion with numbers and strings.',
  mathSolution: 'JavaScript automatically converts types.',
  codeSolution: 'console.log("5" - 3);  // 2 (string to number)\nconsole.log("5" + 3);  // "53" (number to string)\nconsole.log("5" * "2");  // 10 (both to numbers)',
  hint: '- * / convert to numbers, + with string concatenates.'
},
{
  id: 'js_datatypes_22',
  topicId: 'js_datatypes',
  question: 'Check type of Date object.',
  mathSolution: 'Date returns "object" type.',
  codeSolution: 'let today = new Date();\nconsole.log(typeof today);  // object\nconsole.log(today instanceof Date);  // true',
  hint: 'Use instanceof to check specific object types.'
},
{
  id: 'js_datatypes_23',
  topicId: 'js_datatypes',
  question: 'Check type of RegExp object.',
  mathSolution: 'Regular expressions return "object" type.',
  codeSolution: 'let pattern = /ab+c/;\nconsole.log(typeof pattern);  // object\nconsole.log(pattern instanceof RegExp);  // true',
  hint: 'RegExp is another object type.'
},
{
  id: 'js_datatypes_24',
  topicId: 'js_datatypes',
  question: 'Create and check type of Map object.',
  mathSolution: 'Map is an ES6 collection type.',
  codeSolution: 'let myMap = new Map();\nmyMap.set("key", "value");\nconsole.log(typeof myMap);  // object\nconsole.log(myMap instanceof Map);  // true',
  hint: 'Map returns "object" but is an instance of Map.'
},
{
  id: 'js_datatypes_25',
  topicId: 'js_datatypes',
  question: 'Create and check type of Set object.',
  mathSolution: 'Set is an ES6 collection for unique values.',
  codeSolution: 'let mySet = new Set([1, 2, 3]);\nconsole.log(typeof mySet);  // object\nconsole.log(mySet instanceof Set);  // true',
  hint: 'Set stores unique values of any type.'
},
{
  id: 'js_datatypes_26',
  topicId: 'js_datatypes',
  question: 'Use typeof on undeclared variable (safe).',
  mathSolution: 'typeof undeclared returns "undefined" (no error).',
  codeSolution: 'console.log(typeof nonExistentVariable);  // undefined (no error)',
  hint: 'typeof is safe to use on undeclared variables.'
},
{
  id: 'js_datatypes_27',
  topicId: 'js_datatypes',
  question: 'Demonstrate dynamic typing by changing variable type.',
  mathSolution: 'JavaScript variables can hold any type.',
  codeSolution: 'let dynamic = "Hello";\nconsole.log(typeof dynamic);  // string\ndynamic = 42;\nconsole.log(typeof dynamic);  // number\ndynamic = true;\nconsole.log(typeof dynamic);  // boolean',
  hint: 'Variables can change type at runtime.'
},
{
  id: 'js_datatypes_28',
  topicId: 'js_datatypes',
  question: 'Check type of empty array literal.',
  mathSolution: 'Empty array also returns "object".',
  codeSolution: 'let emptyArr = [];\nconsole.log(typeof emptyArr);  // object\nconsole.log(Array.isArray(emptyArr));  // true',
  hint: 'Always use Array.isArray() for array detection.'
},
{
  id: 'js_datatypes_29',
  topicId: 'js_datatypes',
  question: 'Check type of empty object literal.',
  mathSolution: 'Empty object returns "object".',
  codeSolution: 'let emptyObj = {};\nconsole.log(typeof emptyObj);  // object\nconsole.log(emptyObj.constructor === Object);  // true',
  hint: 'Objects have constructor property.'
},
{
  id: 'js_datatypes_30',
  topicId: 'js_datatypes',
  question: 'Use Object.prototype.toString.call() for precise type checking.',
  mathSolution: 'toString() method gives exact internal type.',
  codeSolution: 'console.log(Object.prototype.toString.call([]));  // [object Array]\nconsole.log(Object.prototype.toString.call({}));  // [object Object]\nconsole.log(Object.prototype.toString.call(null));  // [object Null]',
  hint: 'Best way to get accurate type in JavaScript.'
},
{
  id: 'js_datatypes_31',
  topicId: 'js_datatypes',
  question: 'Check if a value is an integer using Number.isInteger().',
  mathSolution: 'Number.isInteger() checks for whole numbers.',
  codeSolution: 'console.log(Number.isInteger(42));  // true\nconsole.log(Number.isInteger(42.5));  // false\nconsole.log(Number.isInteger("42"));  // false (string)',
  hint: 'Use Number.isInteger() for integer check.'
},
{
  id: 'js_datatypes_32',
  topicId: 'js_datatypes',
  question: 'Check if a value is safe integer using Number.isSafeInteger().',
  mathSolution: 'Safe integers between -(2^53-1) and 2^53-1.',
  codeSolution: 'console.log(Number.isSafeInteger(42));  // true\nconsole.log(Number.isSafeInteger(9007199254740991));  // true\nconsole.log(Number.isSafeInteger(9007199254740992));  // false',
  hint: 'Safe integers can be represented exactly.'
},
{
  id: 'js_datatypes_33',
  topicId: 'js_datatypes',
  question: 'Demonstrate truthy and falsy values with Boolean conversion.',
  mathSolution: 'Falsy: false, 0, "", null, undefined, NaN.',
  codeSolution: 'console.log(Boolean(0));  // false\nconsole.log(Boolean(""));  // false\nconsole.log(Boolean(null));  // false\nconsole.log(Boolean(undefined));  // false\nconsole.log(Boolean(NaN));  // false\nconsole.log(Boolean("hello"));  // true',
  hint: 'Only 6 falsy values in JavaScript.'
},
{
  id: 'js_datatypes_34',
  topicId: 'js_datatypes',
  question: 'Check type of document.all (historical quirk).',
  mathSolution: 'document.all returns "undefined" for type.',
  codeSolution: '// console.log(typeof document.all);  // "undefined" (in browsers)\n// This is a historical anomaly.',
  hint: 'document.all is falsy but defined.'
},
{
  id: 'js_datatypes_35',
  topicId: 'js_datatypes',
  question: 'Demonstrate automatic semicolon insertion with typeof.',
  mathSolution: 'typeof returns a string, no issues with ASI.',
  codeSolution: 'let val = 10;\nlet type = typeof\nval;\nconsole.log(type);  // "number" (ASI adds semicolon after typeof)',
  hint: 'Be careful with line breaks after typeof.'
},
{
  id: 'js_datatypes_36',
  topicId: 'js_datatypes',
  question: 'Check type of Math object.',
  mathSolution: 'Math is a built-in object.',
  codeSolution: 'console.log(typeof Math);  // object\nconsole.log(Math.PI);  // 3.141592653589793',
  hint: 'Math is not a constructor, just an object.'
},
{
  id: 'js_datatypes_37',
  topicId: 'js_datatypes',
  question: 'Check type of JSON object.',
  mathSolution: 'JSON is built-in object for parsing.',
  codeSolution: 'console.log(typeof JSON);  // object\nconsole.log(typeof JSON.parse);  // function',
  hint: 'JSON has static methods like parse() and stringify().'
},
{
  id: 'js_datatypes_38',
  topicId: 'js_datatypes',
  question: 'Create a primitive string vs String object.',
  mathSolution: 'Primitive string vs object wrapper.',
  codeSolution: 'let primitive = "hello";\nlet object = new String("hello");\nconsole.log(typeof primitive);  // string\nconsole.log(typeof object);  // object',
  hint: 'Avoid using String/Number/Boolean as constructors.'
},
{
  id: 'js_datatypes_39',
  topicId: 'js_datatypes',
  question: 'Check if two variables are same type using typeof comparison.',
  mathSolution: 'Compare typeof results.',
  codeSolution: 'let a = 42;\nlet b = 100;\nlet c = "hello";\nconsole.log(typeof a === typeof b);  // true\nconsole.log(typeof a === typeof c);  // false',
  hint: 'typeof returns strings that can be compared.'
},
{
  id: 'js_datatypes_40',
  topicId: 'js_datatypes',
  question: 'Demonstrate type coercion in if statements.',
  mathSolution: 'If statement coerces expression to boolean.',
  codeSolution: 'if ("hello") {\n    console.log("Truthy!");  // This runs\n}\nif (0) {\n    console.log("Falsy!");  // This doesn\'t run\n}',
  hint: 'Any value in condition is coerced to boolean.'
},
//operator
{
  id: 'js_operators_1',
  topicId: 'js_operators',
  question: 'Use addition operator (+) to add two numbers and print result.',
  mathSolution: 'Addition operator adds numeric values.',
  codeSolution: 'let a = 10, b = 20;\nlet sum = a + b;\nconsole.log(sum);  // 30',
  hint: 'Use `+` operator between numbers.'
},
{
  id: 'js_operators_2',
  topicId: 'js_operators',
  question: 'Use subtraction operator (-) to subtract two numbers.',
  mathSolution: 'Subtraction operator subtracts second from first.',
  codeSolution: 'let a = 25, b = 10;\nlet difference = a - b;\nconsole.log(difference);  // 15',
  hint: 'Use `-` operator between numbers.'
},
{
  id: 'js_operators_3',
  topicId: 'js_operators',
  question: 'Use multiplication operator (*) to multiply two numbers.',
  mathSolution: 'Multiplication operator multiplies values.',
  codeSolution: 'let a = 6, b = 7;\nlet product = a * b;\nconsole.log(product);  // 42',
  hint: 'Use `*` operator between numbers.'
},
{
  id: 'js_operators_4',
  topicId: 'js_operators',
  question: 'Use division operator (/) to divide two numbers.',
  mathSolution: 'Division operator returns quotient.',
  codeSolution: 'let a = 20, b = 4;\nlet quotient = a / b;\nconsole.log(quotient);  // 5',
  hint: 'Use `/` operator between numbers.'
},
{
  id: 'js_operators_5',
  topicId: 'js_operators',
  question: 'Use modulus operator (%) to get remainder of division.',
  mathSolution: 'Modulus returns remainder after division.',
  codeSolution: 'let a = 17, b = 5;\nlet remainder = a % b;\nconsole.log(remainder);  // 2',
  hint: 'Use `%` to get remainder.'
},
{
  id: 'js_operators_6',
  topicId: 'js_operators',
  question: 'Use exponentiation operator (**) to calculate power.',
  mathSolution: 'Exponentiation raises first to power of second.',
  codeSolution: 'let base = 2, exponent = 3;\nlet result = base ** exponent;\nconsole.log(result);  // 8',
  hint: 'Use `**` operator for power.'
},
{
  id: 'js_operators_7',
  topicId: 'js_operators',
  question: 'Use increment operator (++) as postfix.',
  mathSolution: 'Postfix increments after using value.',
  codeSolution: 'let x = 5;\nlet y = x++;\nconsole.log(x, y);  // 6 5',
  hint: '`x++` returns old value then increments.'
},
{
  id: 'js_operators_8',
  topicId: 'js_operators',
  question: 'Use increment operator (++) as prefix.',
  mathSolution: 'Prefix increments then uses new value.',
  codeSolution: 'let x = 5;\nlet y = ++x;\nconsole.log(x, y);  // 6 6',
  hint: '`++x` increments then returns new value.'
},
{
  id: 'js_operators_9',
  topicId: 'js_operators',
  question: 'Use decrement operator (--) as postfix.',
  mathSolution: 'Postfix decrements after using value.',
  codeSolution: 'let x = 5;\nlet y = x--;\nconsole.log(x, y);  // 4 5',
  hint: '`x--` returns old value then decrements.'
},
{
  id: 'js_operators_10',
  topicId: 'js_operators',
  question: 'Use decrement operator (--) as prefix.',
  mathSolution: 'Prefix decrements then uses new value.',
  codeSolution: 'let x = 5;\nlet y = --x;\nconsole.log(x, y);  // 4 4',
  hint: '`--x` decrements then returns new value.'
},
{
  id: 'js_operators_11',
  topicId: 'js_operators',
  question: 'Use addition assignment operator (+=).',
  mathSolution: 'Adds right operand to left and assigns.',
  codeSolution: 'let x = 10;\nx += 5;  // same as x = x + 5\nconsole.log(x);  // 15',
  hint: '`x += y` is shorthand for `x = x + y`.'
},
{
  id: 'js_operators_12',
  topicId: 'js_operators',
  question: 'Use subtraction assignment operator (-=).',
  mathSolution: 'Subtracts right from left and assigns.',
  codeSolution: 'let x = 10;\nx -= 3;  // same as x = x - 3\nconsole.log(x);  // 7',
  hint: '`x -= y` is shorthand for `x = x - y`.'
},
{
  id: 'js_operators_13',
  topicId: 'js_operators',
  question: 'Use multiplication assignment operator (*=).',
  mathSolution: 'Multiplies left by right and assigns.',
  codeSolution: 'let x = 6;\nx *= 4;  // same as x = x * 4\nconsole.log(x);  // 24',
  hint: '`x *= y` is shorthand for `x = x * y`.'
},
{
  id: 'js_operators_14',
  topicId: 'js_operators',
  question: 'Use division assignment operator (/=).',
  mathSolution: 'Divides left by right and assigns.',
  codeSolution: 'let x = 20;\nx /= 4;  // same as x = x / 4\nconsole.log(x);  // 5',
  hint: '`x /= y` is shorthand for `x = x / y`.'
},
{
  id: 'js_operators_15',
  topicId: 'js_operators',
  question: 'Use modulus assignment operator (%=).',
  mathSolution: 'Assigns remainder of division.',
  codeSolution: 'let x = 17;\nx %= 5;  // same as x = x % 5\nconsole.log(x);  // 2',
  hint: '`x %= y` is shorthand for `x = x % y`.'
},
{
  id: 'js_operators_16',
  topicId: 'js_operators',
  question: 'Use exponentiation assignment operator (**=).',
  mathSolution: 'Raises left to power of right and assigns.',
  codeSolution: 'let x = 2;\nx **= 3;  // same as x = x ** 3\nconsole.log(x);  // 8',
  hint: '`x **= y` is shorthand for `x = x ** y`.'
},
{
  id: 'js_operators_17',
  topicId: 'js_operators',
  question: 'Use equality operator (==) to compare two values.',
  mathSolution: 'Equality checks value after type coercion.',
  codeSolution: 'console.log(5 == 5);  // true\nconsole.log(5 == "5");  // true (type coercion)\nconsole.log(5 == 6);  // false',
  hint: '`==` compares values, not types.'
},
{
  id: 'js_operators_18',
  topicId: 'js_operators',
  question: 'Use strict equality operator (===) to compare.',
  mathSolution: 'Strict equality checks value AND type.',
  codeSolution: 'console.log(5 === 5);  // true\nconsole.log(5 === "5");  // false (different types)\nconsole.log(5 === 6);  // false',
  hint: '`===` compares both value and type.'
},
{
  id: 'js_operators_19',
  topicId: 'js_operators',
  question: 'Use inequality operator (!=).',
  mathSolution: 'Checks if values are not equal (with coercion).',
  codeSolution: 'console.log(5 != 3);  // true\nconsole.log(5 != "5");  // false (coerced equal)\nconsole.log(5 != 5);  // false',
  hint: '`!=` checks inequality with type coercion.'
},
{
  id: 'js_operators_20',
  topicId: 'js_operators',
  question: 'Use strict inequality operator (!==).',
  mathSolution: 'Checks if values are not equal in value or type.',
  codeSolution: 'console.log(5 !== "5");  // true (different types)\nconsole.log(5 !== 3);  // true\nconsole.log(5 !== 5);  // false',
  hint: '`!==` checks inequality without type coercion.'
},
{
  id: 'js_operators_21',
  topicId: 'js_operators',
  question: 'Use greater than operator (>).',
  mathSolution: 'Checks if left is greater than right.',
  codeSolution: 'console.log(10 > 5);  // true\nconsole.log(5 > 10);  // false\nconsole.log(5 > 5);  // false',
  hint: '`>` returns true if left > right.'
},
{
  id: 'js_operators_22',
  topicId: 'js_operators',
  question: 'Use greater than or equal operator (>=).',
  mathSolution: 'Checks if left is greater than or equal to right.',
  codeSolution: 'console.log(10 >= 5);  // true\nconsole.log(5 >= 5);  // true\nconsole.log(3 >= 5);  // false',
  hint: '`>=` returns true if left >= right.'
},
{
  id: 'js_operators_23',
  topicId: 'js_operators',
  question: 'Use less than operator (<).',
  mathSolution: 'Checks if left is less than right.',
  codeSolution: 'console.log(3 < 10);  // true\nconsole.log(10 < 5);  // false\nconsole.log(5 < 5);  // false',
  hint: '`<` returns true if left < right.'
},
{
  id: 'js_operators_24',
  topicId: 'js_operators',
  question: 'Use less than or equal operator (<=).',
  mathSolution: 'Checks if left is less than or equal to right.',
  codeSolution: 'console.log(3 <= 5);  // true\nconsole.log(5 <= 5);  // true\nconsole.log(10 <= 5);  // false',
  hint: '`<=` returns true if left <= right.'
},
{
  id: 'js_operators_25',
  topicId: 'js_operators',
  question: 'Use logical AND operator (&&).',
  mathSolution: 'Returns true if both operands are truthy.',
  codeSolution: 'console.log(true && true);  // true\nconsole.log(true && false);  // false\nconsole.log(5 > 3 && 10 > 5);  // true',
  hint: '`&&` requires both conditions to be true.'
},
{
  id: 'js_operators_26',
  topicId: 'js_operators',
  question: 'Use logical OR operator (||).',
  mathSolution: 'Returns true if at least one operand is truthy.',
  codeSolution: 'console.log(true || false);  // true\nconsole.log(false || false);  // false\nconsole.log(5 > 10 || 10 > 5);  // true',
  hint: '`||` requires at least one condition to be true.'
},
{
  id: 'js_operators_27',
  topicId: 'js_operators',
  question: 'Use logical NOT operator (!).',
  mathSolution: 'Inverts boolean value.',
  codeSolution: 'console.log(!true);  // false\nconsole.log(!false);  // true\nconsole.log(!(5 > 3));  // false',
  hint: '`!` negates the truth value.'
},
{
  id: 'js_operators_28',
  topicId: 'js_operators',
  question: 'Use ternary operator (?:) for conditional assignment.',
  mathSolution: 'condition ? value_if_true : value_if_false',
  codeSolution: 'let age = 18;\nlet status = age >= 18 ? "Adult" : "Minor";\nconsole.log(status);  // Adult',
  hint: '`condition ? trueValue : falseValue`'
},
{
  id: 'js_operators_29',
  topicId: 'js_operators',
  question: 'Use typeof operator to check variable type.',
  mathSolution: 'typeof returns string indicating type.',
  codeSolution: 'console.log(typeof 42);  // number\nconsole.log(typeof "hello");  // string\nconsole.log(typeof true);  // boolean',
  hint: '`typeof variable` returns type as string.'
},
{
  id: 'js_operators_30',
  topicId: 'js_operators',
  question: 'Use instanceof operator to check object type.',
  mathSolution: 'Checks if object is instance of constructor.',
  codeSolution: 'let arr = [1, 2, 3];\nlet date = new Date();\nconsole.log(arr instanceof Array);  // true\nconsole.log(date instanceof Date);  // true',
  hint: '`object instanceof Constructor` checks prototype chain.'
},
{
  id: 'js_operators_31',
  topicId: 'js_operators',
  question: 'Use bitwise AND operator (&).',
  mathSolution: 'Performs AND on each bit.',
  codeSolution: 'let a = 5;  // 101 binary\nlet b = 3;  // 011 binary\nconsole.log(a & b);  // 1 (001 binary)',
  hint: 'Bitwise AND returns 1 where both bits are 1.'
},
{
  id: 'js_operators_32',
  topicId: 'js_operators',
  question: 'Use bitwise OR operator (|).',
  mathSolution: 'Performs OR on each bit.',
  codeSolution: 'let a = 5;  // 101 binary\nlet b = 3;  // 011 binary\nconsole.log(a | b);  // 7 (111 binary)',
  hint: 'Bitwise OR returns 1 where at least one bit is 1.'
},
{
  id: 'js_operators_33',
  topicId: 'js_operators',
  question: 'Use bitwise XOR operator (^).',
  mathSolution: 'Performs XOR on each bit (exclusive OR).',
  codeSolution: 'let a = 5;  // 101 binary\nlet b = 3;  // 011 binary\nconsole.log(a ^ b);  // 6 (110 binary)',
  hint: 'XOR returns 1 where bits are different.'
},
{
  id: 'js_operators_34',
  topicId: 'js_operators',
  question: 'Use bitwise NOT operator (~).',
  mathSolution: 'Inverts all bits (returns -(n+1)).',
  codeSolution: 'let a = 5;\nconsole.log(~a);  // -6 (inverts bits: -5-1 = -6)',
  hint: '`~n` equals `-(n+1)`.'
},
{
  id: 'js_operators_35',
  topicId: 'js_operators',
  question: 'Use left shift operator (<<).',
  mathSolution: 'Shifts bits left, filling with zeros.',
  codeSolution: 'let a = 5;  // 101 binary\nconsole.log(a << 1);  // 10 (1010 binary, 5*2=10)',
  hint: 'Left shift by 1 multiplies by 2.'
},
{
  id: 'js_operators_36',
  topicId: 'js_operators',
  question: 'Use right shift operator (>>).',
  mathSolution: 'Shifts bits right, preserving sign.',
  codeSolution: 'let a = 10;  // 1010 binary\nconsole.log(a >> 1);  // 5 (101 binary, 10/2=5)',
  hint: 'Right shift by 1 divides by 2.'
},
{
  id: 'js_operators_37',
  topicId: 'js_operators',
  question: 'Use zero-fill right shift operator (>>>).',
  mathSolution: 'Shifts right, filling with zeros (unsigned).',
  codeSolution: 'let a = -5;\nconsole.log(a >>> 1);  // 2147483645 (treats as unsigned)',
  hint: '`>>>` shifts zero bits from left, works on unsigned numbers.'
},
{
  id: 'js_operators_38',
  topicId: 'js_operators',
  question: 'Use comma operator (,) to combine expressions.',
  mathSolution: 'Evaluates all, returns last value.',
  codeSolution: 'let x = (5, 10, 15);\nconsole.log(x);  // 15\nfor (let i = 0, j = 10; i < j; i++, j--) {\n    console.log(i, j);\n}',
  hint: 'Comma operator returns value of last expression.'
},
{
  id: 'js_operators_39',
  topicId: 'js_operators',
  question: 'Use delete operator to delete object property.',
  mathSolution: 'Deletes property from object.',
  codeSolution: 'let person = { name: "John", age: 30 };\ndelete person.age;\nconsole.log(person);  // { name: "John" }',
  hint: '`delete object.property` removes property.'
},
{
  id: 'js_operators_40',
  topicId: 'js_operators',
  question: 'Use in operator to check property existence.',
  mathSolution: 'Returns true if property exists in object.',
  codeSolution: 'let car = { brand: "Toyota", year: 2020 };\nconsole.log("brand" in car);  // true\nconsole.log("model" in car);  // false',
  hint: '`"property" in object` checks property existence.'
},
);