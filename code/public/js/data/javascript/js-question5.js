QuizData.questions.push(
  //es6 ,scope hoisting ,recursion
{
  id: 'js_es6_1',
  topicId: 'js_es6',
  question: 'Use let keyword for block-scoped variable declaration.',
  mathSolution: 'let creates variables scoped to the nearest block {}',
  codeSolution: '{\n    let x = 10;\n    console.log(x);  // 10\n}\n// console.log(x);  // ReferenceError: x is not defined\n\nfor (let i = 0; i < 3; i++) {\n    // i is scoped to loop iteration\n}\n// console.log(i);  // ReferenceError',
  hint: 'let has block scope, var has function scope.'
},
{
  id: 'js_es6_2',
  topicId: 'js_es6',
  question: 'Use const keyword for immutable variable binding.',
  mathSolution: 'const creates block-scoped constant that cannot be reassigned.',
  codeSolution: 'const PI = 3.14159;\nconsole.log(PI);  // 3.14159\n// PI = 3.14;  // TypeError: Assignment to constant variable\n\nconst person = { name: "John" };\nperson.name = "Jane";  // Allowed: object properties can change\nconsole.log(person.name);  // Jane\n// person = {};  // TypeError: cannot reassign',
  hint: 'const prevents reassignment, not mutation of object properties.'
},
{
  id: 'js_es6_3',
  topicId: 'js_es6',
  question: 'Use arrow functions with implicit return.',
  mathSolution: 'Arrow functions with single expression have implicit return.',
  codeSolution: '// Traditional function\nfunction add(a, b) { return a + b; }\n\n// Arrow function with implicit return\nconst add = (a, b) => a + b;\n\n// Single parameter can omit parentheses\nconst square = x => x * x;\n\n// No parameters need empty parentheses\nconst greet = () => "Hello World";\n\nconsole.log(add(5, 3));   // 8\nconsole.log(square(4));   // 16\nconsole.log(greet());     // Hello World',
  hint: 'Arrow functions with {} need explicit return; without {} have implicit return.'
},
{
  id: 'js_es6_4',
  topicId: 'js_es6',
  question: 'Use arrow functions with explicit return (multiple statements).',
  mathSolution: 'Use curly braces and return keyword for multiple statements.',
  codeSolution: 'const processData = (data) => {\n    const result = data * 2;\n    console.log(`Processing: ${data}`);\n    return result;\n};\n\nconsole.log(processData(5));  // Processing: 5\\n10\n\n// Arrow function returning object literal (wrap in parentheses)\nconst createPerson = (name, age) => ({ name, age });\nconsole.log(createPerson("John", 30));  // { name: "John", age: 30 }',
  hint: 'Wrap object literal in parentheses() when using implicit return.'
},
{
  id: 'js_es6_5',
  topicId: 'js_es6',
  question: 'Use template literals for string interpolation.',
  mathSolution: 'Use backticks and ${} for embedding expressions.',
  codeSolution: 'const name = "John";\nconst age = 30;\n\n// String interpolation\nconst message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);  // My name is John and I am 30 years old.\n\n// Expression evaluation\nconst result = `2 + 3 = ${2 + 3}`;\nconsole.log(result);  // 2 + 3 = 5\n\n// Function calls in template\nconst upperName = `${name.toUpperCase()}`;\nconsole.log(upperName);  // JOHN',
  hint: 'Template literals use backticks (`) and ${expression} syntax.'
},
{
  id: 'js_es6_6',
  topicId: 'js_es6',
  question: 'Use multi-line strings with template literals.',
  mathSolution: 'Template literals preserve line breaks.',
  codeSolution: 'const multiLine = `\n    Line 1\n    Line 2\n    Line 3\n`;\nconsole.log(multiLine);\n//     Line 1\n//     Line 2\n//     Line 3\n\nconst html = `\n    <div>\n        <h1>Title</h1>\n        <p>Content</p>\n    </div>\n`;\nconsole.log(html);',
  hint: 'Line breaks are preserved automatically in template literals.'
},
{
  id: 'js_es6_7',
  topicId: 'js_es6',
  question: 'Use destructuring assignment for arrays.',
  mathSolution: 'Extract array values into variables using pattern matching.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\n\n// Basic destructuring\nconst [first, second] = numbers;\nconsole.log(first, second);  // 1 2\n\n// Skip elements\nconst [a, , b] = numbers;\nconsole.log(a, b);  // 1 3\n\n// Rest operator\nconst [head, ...tail] = numbers;\nconsole.log(head, tail);  // 1 [2, 3, 4, 5]\n\n// Default values\nconst [x = 0, y = 0] = [10];\nconsole.log(x, y);  // 10 0',
  hint: 'Use [var1, var2] = array to destructure arrays.'
},
{
  id: 'js_es6_8',
  topicId: 'js_es6',
  question: 'Use destructuring assignment for objects.',
  mathSolution: 'Extract object properties into variables.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\n\n// Basic destructuring\nconst { name, age } = person;\nconsole.log(name, age);  // John 30\n\n// Renaming variables\nconst { name: personName, city: location } = person;\nconsole.log(personName, location);  // John NYC\n\n// Default values\nconst { job = "Unemployed" } = person;\nconsole.log(job);  // Unemployed\n\n// Nested destructuring\nconst user = { profile: { username: "john_doe", email: "john@example.com" } };\nconst { profile: { username } } = user;\nconsole.log(username);  // john_doe',
  hint: 'Use {prop1, prop2} = object to destructure objects.'
},
{
  id: 'js_es6_9',
  topicId: 'js_es6',
  question: 'Use destructuring in function parameters.',
  mathSolution: 'Destructure objects directly in function signature.',
  codeSolution: '// Destructuring object parameter\nfunction printPerson({ name, age, city = "Unknown" }) {\n    console.log(`${name} is ${age} years old from ${city}`);\n}\n\nprintPerson({ name: "John", age: 30 });\n// John is 30 years old from Unknown\n\n// Destructuring array parameter\nfunction getFirstAndLast([first, ...rest]) {\n    const last = rest.pop();\n    return { first, last };\n}\n\nconsole.log(getFirstAndLast([10, 20, 30, 40]));  // { first: 10, last: 40 }',
  hint: 'Destructuring in parameters is great for configuration objects.'
},
{
  id: 'js_es6_10',
  topicId: 'js_es6',
  question: 'Use spread operator (...) to expand arrays.',
  mathSolution: 'Spread expands array elements into individual items.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\n\n// Combine arrays\nconst combined = [...arr1, ...arr2];\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]\n\n// Copy array\nconst copy = [...arr1];\nconsole.log(copy);  // [1, 2, 3]\n\n// Spread in function calls\nconst numbers = [5, 10, 15];\nconst max = Math.max(...numbers);\nconsole.log(max);  // 15\n\n// Convert string to array\nconst chars = [..."hello"];\nconsole.log(chars);  // ["h","e","l","l","o"]',
  hint: 'Spread operator (...) expands iterable elements.'
},
{
  id: 'js_es6_11',
  topicId: 'js_es6',
  question: 'Use spread operator (...) to copy and merge objects.',
  mathSolution: 'Spread copies object properties into new object.',
  codeSolution: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\n\n// Merge objects\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }\n\n// Copy object\nconst copy = { ...obj1 };\nconsole.log(copy);  // { a: 1, b: 2 }\n\n// Override properties\nconst user = { name: "John", age: 30 };\nconst updated = { ...user, age: 31, city: "NYC" };\nconsole.log(updated);  // { name: "John", age: 31, city: "NYC" }',
  hint: 'Spread in objects merges properties, later properties override earlier.'
},
{
  id: 'js_es6_12',
  topicId: 'js_es6',
  question: 'Use rest parameters (...) to collect remaining arguments.',
  mathSolution: 'Rest parameters collect arguments into an array.',
  codeSolution: 'function sumAll(...numbers) {\n    return numbers.reduce((sum, num) => sum + num, 0);\n}\n\nconsole.log(sumAll(1, 2, 3));      // 6\nconsole.log(sumAll(1, 2, 3, 4, 5)); // 15\n\n// Rest with regular parameters\nfunction greet(greeting, ...names) {\n    return `${greeting}, ${names.join(" and ")}!`;\n}\n\nconsole.log(greet("Hello", "John", "Jane", "Bob"));\n// Hello, John and Jane and Bob!',
  hint: 'Rest parameters (...) must be the last parameter.'
},
{
  id: 'js_es6_13',
  topicId: 'js_es6',
  question: 'Use default parameters in functions.',
  mathSolution: 'Assign default values to function parameters.',
  codeSolution: 'function greet(name = "Guest", greeting = "Hello") {\n    return `${greeting}, ${name}!`;\n}\n\nconsole.log(greet());              // Hello, Guest!\nconsole.log(greet("John"));        // Hello, John!\nconsole.log(greet("Jane", "Hi"));  // Hi, Jane!\n\n// Default with expressions\nfunction multiply(a, b = a * 2) {\n    return a * b;\n}\n\nconsole.log(multiply(5));    // 50 (5 * 10)\nconsole.log(multiply(5, 3)); // 15',
  hint: 'Default parameters work with undefined only, not null.'
},
{
  id: 'js_es6_14',
  topicId: 'js_es6',
  question: 'Use enhanced object literals (property shorthand).',
  mathSolution: 'Use variable name as property name when they match.',
  codeSolution: 'const name = "John";\nconst age = 30;\n\n// Property shorthand\nconst person = { name, age };\nconsole.log(person);  // { name: "John", age: 30 }\n\n// Method shorthand\nconst calculator = {\n    add(a, b) { return a + b; },\n    multiply(a, b) { return a * b; }\n};\n\nconsole.log(calculator.add(5, 3));      // 8\nconsole.log(calculator.multiply(5, 3)); // 15',
  hint: 'Property shorthand: { name } instead of { name: name }'
},
{
  id: 'js_es6_15',
  topicId: 'js_es6',
  question: 'Use computed property names in objects.',
  mathSolution: 'Use expressions in square brackets for dynamic property names.',
  codeSolution: 'const prefix = "user";\nconst id = 123;\n\nconst obj = {\n    [`${prefix}_name`]: "John",\n    [`${prefix}_${id}`]: "Active",\n    ["is" + "Admin"]: true\n};\n\nconsole.log(obj.user_name);     // John\nconsole.log(obj.user_123);      // Active\nconsole.log(obj.isAdmin);       // true\n\n// Dynamic method names\nconst methodName = "calculate";\nconst math = {\n    [methodName](a, b) { return a + b; }\n};\n\nconsole.log(math.calculate(5, 3));  // 8',
  hint: 'Computed properties: [expression]: value'
},
{
  id: 'js_es6_16',
  topicId: 'js_es6',
  question: 'Use for...of loop to iterate over iterables.',
  mathSolution: 'for...of iterates over values of iterable objects.',
  codeSolution: 'const arr = [10, 20, 30];\nfor (const value of arr) {\n    console.log(value);  // 10, 20, 30\n}\n\nconst str = "hello";\nfor (const char of str) {\n    console.log(char);  // h, e, l, l, o\n}\n\nconst map = new Map([["a", 1], ["b", 2]]);\nfor (const [key, value] of map) {\n    console.log(`${key}: ${value}`);  // a: 1, b: 2\n}\n\nconst set = new Set([1, 2, 3]);\nfor (const value of set) {\n    console.log(value);  // 1, 2, 3\n}',
  hint: 'for...of works with arrays, strings, maps, sets, and other iterables.'
},
{
  id: 'js_es6_17',
  topicId: 'js_es6',
  question: 'Use includes() method for strings and arrays.',
  mathSolution: 'includes() checks if value exists in array or string.',
  codeSolution: '// Array includes\nconst fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana"));  // true\nconsole.log(fruits.includes("grape"));    // false\n\n// String includes\nconst message = "Hello World";\nconsole.log(message.includes("World"));   // true\nconsole.log(message.includes("world"));   // false (case-sensitive)\n\n// With start position\nconsole.log(fruits.includes("apple", 1)); // false (starts at index 1)',
  hint: 'includes() returns boolean, perfect for conditions.'
},
{
  id: 'js_es6_18',
  topicId: 'js_es6',
  question: 'Use startsWith() and endsWith() string methods.',
  mathSolution: 'Check if string starts or ends with specific substring.',
  codeSolution: 'const url = "https://example.com";\nconsole.log(url.startsWith("https"));   // true\nconsole.log(url.startsWith("http"));    // true\nconsole.log(url.endsWith(".com"));      // true\n\nconst filename = "image.jpg";\nconsole.log(filename.endsWith(".jpg")); // true\nconsole.log(filename.endsWith(".png")); // false\n\n// With position parameter\nconsole.log(url.startsWith("example", 8));  // true (start at index 8)',
  hint: 'startsWith() and endsWith() are case-sensitive.'
},
{
  id: 'js_es6_19',
  topicId: 'js_es6',
  question: 'Use repeat() method for strings.',
  mathSolution: 'repeat() repeats string specified number of times.',
  codeSolution: 'console.log("Ha".repeat(3));      // HaHaHa\nconsole.log("=".repeat(10));       // ==========\nconsole.log(" ".repeat(5) + "Hi");  //      Hi\n\n// Creating ASCII art\nfunction drawLine(length) {\n    return "-".repeat(length);\n}\nconsole.log(drawLine(20));  // --------------------\n\n// Padding strings\nfunction padLeft(str, length, char = " ") {\n    return char.repeat(Math.max(0, length - str.length)) + str;\n}\nconsole.log(padLeft("42", 5, "0"));  // 00042',
  hint: 'repeat() returns new string, original unchanged.'
},
{
  id: 'js_es6_20',
  topicId: 'js_es6',
  question: 'Use padStart() and padEnd() string methods.',
  mathSolution: 'Pad string to specific length with characters.',
  codeSolution: '// Pad start\nconsole.log("5".padStart(3, "0"));     // 005\nconsole.log("123".padStart(5, "*"));   // **123\nconsole.log("hi".padStart(10));        // "        hi"\n\n// Pad end\nconsole.log("5".padEnd(3, "0"));       // 500\nconsole.log("123".padEnd(5, "*"));     // 123**\n\n// Aligning numbers\nconst numbers = [1, 10, 100, 1000];\nnumbers.forEach(n => {\n    console.log(n.toString().padStart(5, " "));\n});\n//     1\n//    10\n//   100\n//  1000',
  hint: 'padStart adds to beginning, padEnd adds to end.'
},
{
  id: 'js_es6_21',
  topicId: 'js_es6',
  question: 'Use trimStart() and trimEnd() string methods.',
  mathSolution: 'Remove whitespace from start or end of string.',
  codeSolution: 'const str = "  Hello World  ";\nconsole.log(str.trimStart());  // "Hello World  "\nconsole.log(str.trimEnd());    // "  Hello World"\nconsole.log(str.trim());       // "Hello World"\n\n// Useful for user input\nconst userInput = "   john@example.com   ";\nconst email = userInput.trim();\nconsole.log(email);  // "john@example.com"',
  hint: 'trimStart() removes leading spaces, trimEnd() removes trailing spaces.'
},
{
  id: 'js_es6_22',
  topicId: 'js_es6',
  question: 'Use Array.from() to convert iterables to arrays.',
  mathSolution: 'Array.from() creates array from array-like or iterable objects.',
  codeSolution: '// From string\nconst chars = Array.from("hello");\nconsole.log(chars);  // ["h","e","l","l","o"]\n\n// From Set\nconst set = new Set([1, 2, 3]);\nconst arr = Array.from(set);\nconsole.log(arr);  // [1, 2, 3]\n\n// With mapping function\nconst doubled = Array.from([1, 2, 3], x => x * 2);\nconsole.log(doubled);  // [2, 4, 6]\n\n// Creating range\nconst range = Array.from({ length: 5 }, (_, i) => i + 1);\nconsole.log(range);  // [1, 2, 3, 4, 5]',
  hint: 'Array.from() works on any iterable or array-like object.'
},
{
  id: 'js_es6_23',
  topicId: 'js_es6',
  question: 'Use Array.of() to create arrays from arguments.',
  mathSolution: 'Array.of() creates array with given elements.',
  codeSolution: '// Array.of vs Array constructor\nconsole.log(Array.of(1, 2, 3));     // [1, 2, 3]\nconsole.log(Array(1, 2, 3));        // [1, 2, 3]\n\n// Difference with single number\nconsole.log(Array.of(5));    // [5]\nconsole.log(Array(5));       // [empty x5]\n\n// With mixed types\nconsole.log(Array.of("a", 1, true, null));  // ["a", 1, true, null]',
  hint: 'Array.of() avoids ambiguity of Array() constructor.'
},
{
  id: 'js_es6_24',
  topicId: 'js_es6',
  question: 'Use find() and findIndex() array methods.',
  mathSolution: 'find returns first matching element, findIndex returns index.',
  codeSolution: 'const users = [\n    { id: 1, name: "John" },\n    { id: 2, name: "Jane" },\n    { id: 3, name: "Bob" }\n];\n\n// Find user by condition\nconst user = users.find(u => u.id === 2);\nconsole.log(user);  // { id: 2, name: "Jane" }\n\n// Find index\nconst index = users.findIndex(u => u.name === "Bob");\nconsole.log(index);  // 2\n\n// Not found returns undefined / -1\nconst notFound = users.find(u => u.id === 99);\nconsole.log(notFound);  // undefined\nconsole.log(users.findIndex(u => u.id === 99));  // -1',
  hint: 'find() returns element, findIndex() returns index or -1.'
},
{
  id: 'js_es6_25',
  topicId: 'js_es6',
  question: 'Use findLast() and findLastIndex() array methods (ES2023).',
  mathSolution: 'Search array from end to beginning.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44, 12];\n\n// Find last element > 10\nconst last = numbers.findLast(n => n > 10);\nconsole.log(last);  // 44 (from end, first match)\n\n// Find last index\nconst lastIndex = numbers.findLastIndex(n => n === 12);\nconsole.log(lastIndex);  // 5 (last occurrence)\n\n// Traditional find searches from start\nconst first = numbers.find(n => n === 12);\nconsole.log(first);  // 12 (first occurrence)',
  hint: 'findLast() and findLastIndex() search from the end.'
},
{
  id: 'js_es6_26',
  topicId: 'js_es6',
  question: 'Use flat() and flatMap() array methods.',
  mathSolution: 'flat() flattens nested arrays, flatMap() maps then flattens.',
  codeSolution: '// flat()\nconst nested = [1, [2, 3], [4, [5, 6]]];\nconsole.log(nested.flat());      // [1, 2, 3, 4, [5, 6]]\nconsole.log(nested.flat(2));     // [1, 2, 3, 4, 5, 6]\n\n// flatMap()\nconst sentences = ["Hello world", "Good morning"];\nconst words = sentences.flatMap(s => s.split(" "));\nconsole.log(words);  // ["Hello", "world", "Good", "morning"]\n\n// flatMap with filtering\nconst numbers = [1, 2, 3, 4];\nconst result = numbers.flatMap(x => x % 2 === 0 ? [x] : []);\nconsole.log(result);  // [2, 4]',
  hint: 'flatMap() is like map().flat() but more efficient.'
},
{
  id: 'js_es6_27',
  topicId: 'js_es6',
  question: 'Use Map data structure (key-value pairs with any key type).',
  mathSolution: 'Map allows objects, functions, any type as keys.',
  codeSolution: 'const map = new Map();\n\n// Set values\nmap.set("name", "John");\nmap.set(42, "answer");\nmap.set(true, "boolean");\n\n// Get values\nconsole.log(map.get("name"));  // John\nconsole.log(map.get(42));      // answer\n\n// Check existence\nconsole.log(map.has("name"));  // true\n\n// Delete\nmap.delete("name");\n\n// Size\nconsole.log(map.size);  // 2\n\n// Iteration\nfor (const [key, value] of map) {\n    console.log(`${key} => ${value}`);\n}',
  hint: 'Map uses any data type as key, unlike objects which convert keys to strings.'
},
{
  id: 'js_es6_28',
  topicId: 'js_es6',
  question: 'Use Set data structure (unique values collection).',
  mathSolution: 'Set stores unique values of any type.',
  codeSolution: 'const set = new Set();\n\n// Add values\nset.add(1);\nset.add(2);\nset.add(2);  // Duplicate ignored\nset.add(3);\n\nconsole.log(set);  // Set(3) {1, 2, 3}\n\n// Check existence\nconsole.log(set.has(2));  // true\nconsole.log(set.has(5));  // false\n\n// Delete\nset.delete(2);\n\n// Size\nconsole.log(set.size);  // 2\n\n// Remove duplicates from array\nconst arr = [1, 2, 2, 3, 4, 4, 5];\nconst unique = [...new Set(arr)];\nconsole.log(unique);  // [1, 2, 3, 4, 5]',
  hint: 'Set automatically eliminates duplicate values.'
},
{
  id: 'js_es6_29',
  topicId: 'js_es6',
  question: 'Use WeakMap and WeakSet for memory-efficient storage.',
  mathSolution: 'WeakMap/WeakSet hold weak references, allow garbage collection.',
  codeSolution: 'let obj = { name: "John" };\nconst weakMap = new WeakMap();\nweakMap.set(obj, "metadata");\nconsole.log(weakMap.get(obj));  // metadata\n\n// When obj is garbage collected, entry is removed\nobj = null;  // WeakMap entry becomes eligible for GC\n\n// WeakSet\nlet user = { id: 1 };\nconst weakSet = new WeakSet();\nweakSet.add(user);\nconsole.log(weakSet.has(user));  // true\nuser = null;  // WeakSet entry eligible for GC\n\n// WeakMap keys must be objects\n// weakMap.set("string", "value");  // TypeError',
  hint: 'WeakMap/WeakSet prevent memory leaks in caches and listeners.'
},
{
  id: 'js_es6_30',
  topicId: 'js_es6',
  question: 'Use Symbol primitive type for unique identifiers.',
  mathSolution: 'Symbol creates unique, immutable identifiers.',
  codeSolution: '// Create symbols\nconst sym1 = Symbol("id");\nconst sym2 = Symbol("id");\nconsole.log(sym1 === sym2);  // false (always unique)\n\n// As object keys\nconst obj = {\n    [sym1]: "secret value",\n    name: "John"\n};\nconsole.log(obj[sym1]);  // secret value\n\n// Symbols are not enumerable\nconsole.log(Object.keys(obj));  // ["name"]\n\n// Well-known symbols\nconst myIterable = {\n    [Symbol.iterator]: function* () {\n        yield 1;\n        yield 2;\n        yield 3;\n    }\n};\nfor (const val of myIterable) {\n    console.log(val);  // 1, 2, 3\n}',
  hint: 'Every Symbol is unique, even with same description.'
},
{
  id: 'js_es6_31',
  topicId: 'js_es6',
  question: 'Use class syntax for object-oriented programming.',
  mathSolution: 'class provides cleaner syntax for constructor functions and inheritance.',
  codeSolution: 'class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    \n    speak() {\n        return `${this.name} makes a sound`;\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name, breed) {\n        super(name);\n        this.breed = breed;\n    }\n    \n    speak() {\n        return `${this.name} barks loudly!`;\n    }\n    \n    getBreed() {\n        return this.breed;\n    }\n}\n\nconst rex = new Dog("Rex", "German Shepherd");\nconsole.log(rex.speak());      // Rex barks loudly!\nconsole.log(rex.getBreed());   // German Shepherd',
  hint: 'class syntax is syntactic sugar over prototypes.'
},
{
  id: 'js_es6_32',
  topicId: 'js_es6',
  question: 'Use getters and setters in classes.',
  mathSolution: 'get/set keywords define computed properties with validation.',
  codeSolution: 'class Rectangle {\n    constructor(width, height) {\n        this._width = width;\n        this._height = height;\n    }\n    \n    get area() {\n        return this._width * this._height;\n    }\n    \n    get perimeter() {\n        return 2 * (this._width + this._height);\n    }\n    \n    set width(value) {\n        if (value > 0) this._width = value;\n        else throw new Error("Width must be positive");\n    }\n    \n    get width() {\n        return this._width;\n    }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area);  // 50\nrect.width = 8;\nconsole.log(rect.area);  // 80',
  hint: 'Getters/setters are accessed like properties, not methods.'
},
{
  id: 'js_es6_33',
  topicId: 'js_es6',
  question: 'Use static methods and properties in classes.',
  mathSolution: 'static keyword defines class-level methods/properties.',
  codeSolution: 'class MathUtils {\n    static PI = 3.14159;\n    static E = 2.71828;\n    \n    static add(a, b) {\n        return a + b;\n    }\n    \n    static multiply(a, b) {\n        return a * b;\n    }\n    \n    static factorial(n) {\n        if (n <= 1) return 1;\n        return n * this.factorial(n - 1);\n    }\n}\n\nconsole.log(MathUtils.PI);           // 3.14159\nconsole.log(MathUtils.add(5, 3));    // 8\nconsole.log(MathUtils.factorial(5)); // 120\n\n// Cannot call on instances\n// const math = new MathUtils();\n// math.add(1, 2);  // TypeError',
  hint: 'Static members belong to class, not instances.'
},
{
  id: 'js_es6_34',
  topicId: 'js_es6',
  question: 'Use private class fields (# syntax).',
  mathSolution: 'Private fields are accessible only within class.',
  codeSolution: 'class BankAccount {\n    #balance = 0;\n    #accountNumber;\n    \n    constructor(accountNumber, initialBalance = 0) {\n        this.#accountNumber = accountNumber;\n        this.#balance = initialBalance;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) this.#balance += amount;\n        return this.#balance;\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n}\n\nconst account = new BankAccount("12345", 1000);\nconsole.log(account.getBalance());  // 1000\n// console.log(account.#balance);   // SyntaxError: Private field',
  hint: 'Private fields (#) are truly private, not just convention.'
},
{
  id: 'js_es6_35',
  topicId: 'js_es6',
  question: 'Use exponentiation operator (**).',
  mathSolution: '** operator raises first operand to power of second.',
  codeSolution: '// Basic exponentiation\nconsole.log(2 ** 3);   // 8\nconsole.log(5 ** 2);   // 25\nconsole.log(10 ** 0);  // 1\n\n// Exponentiation assignment\nlet x = 2;\nx **= 3;\nconsole.log(x);  // 8\n\n// Large numbers\nconsole.log(2 ** 10);  // 1024\nconsole.log(10 ** 6);  // 1000000\n\n// Before ES6: Math.pow\nconsole.log(Math.pow(2, 3));  // 8 (old way)',
  hint: '** is cleaner than Math.pow() for exponentiation.'
},
{
  id: 'js_es6_36',
  topicId: 'js_es6',
  question: 'Use Number methods: isNaN(), isFinite(), isInteger(), isSafeInteger().',
  mathSolution: 'Improved Number methods avoid global function coercion issues.',
  codeSolution: '// Number.isNaN (strict vs global isNaN)\nconsole.log(Number.isNaN(NaN));      // true\nconsole.log(Number.isNaN("hello"));   // false\nconsole.log(isNaN("hello"));          // true (coerces)\n\n// Number.isFinite\nconsole.log(Number.isFinite(100));    // true\nconsole.log(Number.isFinite(Infinity)); // false\n\n// Number.isInteger\nconsole.log(Number.isInteger(42));    // true\nconsole.log(Number.isInteger(42.5));  // false\n\n// Number.isSafeInteger (within 2^53-1)\nconsole.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));  // true\nconsole.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false',
  hint: 'Number methods don\'t coerce values like global functions do.'
},
{
  id: 'js_es6_37',
  topicId: 'js_es6',
  question: 'Use Object.assign() to copy and merge objects.',
  mathSolution: 'Object.assign() copies enumerable own properties.',
  codeSolution: 'const target = { a: 1 };\nconst source = { b: 2, c: 3 };\n\n// Copy properties\nObject.assign(target, source);\nconsole.log(target);  // { a: 1, b: 2, c: 3 }\n\n// Merge multiple objects\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst obj3 = { c: 3 };\nconst merged = Object.assign({}, obj1, obj2, obj3);\nconsole.log(merged);  // { a: 1, b: 2, c: 3 }\n\n// Override properties\nconst config = { theme: "light", language: "en" };\nconst override = { theme: "dark" };\nObject.assign(config, override);\nconsole.log(config);  // { theme: "dark", language: "en" }',
  hint: 'Object.assign() modifies the target object and returns it.'
},
{
  id: 'js_es6_38',
  topicId: 'js_es6',
  question: 'Use Object.keys(), Object.values(), Object.entries().',
  mathSolution: 'Get arrays of keys, values, or key-value pairs from object.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\n\n// Object.keys\nconst keys = Object.keys(person);\nconsole.log(keys);  // ["name", "age", "city"]\n\n// Object.values\nconst values = Object.values(person);\nconsole.log(values);  // ["John", 30, "NYC"]\n\n// Object.entries\nconst entries = Object.entries(person);\nconsole.log(entries);  // [["name","John"], ["age",30], ["city","NYC"]]\n\n// Iterate with entries\nfor (const [key, value] of Object.entries(person)) {\n    console.log(`${key}: ${value}`);\n}',
  hint: 'Object.entries() is great for iterating over objects.'
},
{
  id: 'js_es6_39',
  topicId: 'js_es6',
  question: 'Use Object.fromEntries() to convert entries back to object.',
  mathSolution: 'Object.fromEntries() creates object from key-value pairs.',
  codeSolution: 'const entries = [["name", "John"], ["age", 30], ["city", "NYC"]];\nconst person = Object.fromEntries(entries);\nconsole.log(person);  // { name: "John", age: 30, city: "NYC" }\n\n// Convert Map to object\nconst map = new Map([["a", 1], ["b", 2]]);\nconst obj = Object.fromEntries(map);\nconsole.log(obj);  // { a: 1, b: 2 }\n\n// Transform object using entries\nconst doubled = Object.fromEntries(\n    Object.entries({ a: 1, b: 2, c: 3 }).map(([k, v]) => [k, v * 2])\n);\nconsole.log(doubled);  // { a: 2, b: 4, c: 6 }',
  hint: 'Object.fromEntries() reverses Object.entries().'
},
{
  id: 'js_es6_40',
  topicId: 'js_es6',
  question: 'Use Promise for asynchronous operations.',
  mathSolution: 'Promise represents eventual completion of async operation.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => {\n        setTimeout(() => resolve(`Waited ${ms}ms`), ms);\n    });\n}\n\n// Using promise\nconst promise = delay(1000);\npromise.then(result => console.log(result));  // Waited 1000ms\n\n// Promise chain\nfetch("https://api.example.com/data")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error("Error:", error));\n\n// Promise.all for parallel\nPromise.all([delay(100), delay(200), delay(300)])\n    .then(results => console.log(results));  // ["Waited 100ms", ...]',
  hint: 'Promises avoid callback hell and provide better error handling.'
},
{
  id: 'js_es6_41',
  topicId: 'js_es6',
  question: 'Use async/await syntax for cleaner async code.',
  mathSolution: 'async functions return promises, await pauses execution.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function fetchData() {\n    try {\n        console.log("Start");\n        await delay(1000);\n        console.log("After 1 second");\n        \n        const response = await fetch("https://api.example.com/data");\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error("Error:", error);\n    }\n}\n\nfetchData();\n\n// Top-level await (in modules)\n// const data = await fetch("https://api.example.com/data");',
  hint: 'await only works inside async functions (or top-level in modules).'
},
{
  id: 'js_es6_42',
  topicId: 'js_es6',
  question: 'Use default export in modules.',
  mathSolution: 'Modules export values for use in other files.',
  codeSolution: '// math.js (export)\nexport default function add(a, b) {\n    return a + b;\n}\n\nexport const PI = 3.14159;\n\n// app.js (import)\nimport add, { PI } from "./math.js";\nconsole.log(add(5, 3));  // 8\nconsole.log(PI);          // 3.14159\n\n// HTML usage (type="module")\n// <script type="module" src="app.js"></script>',
  hint: 'Module exports are static and hoisted.'
},
{
  id: 'js_es6_43',
  topicId: 'js_es6',
  question: 'Use dynamic import() for lazy loading.',
  mathSolution: 'import() returns promise for on-demand module loading.',
  codeSolution: '// Lazy load module on demand\nasync function loadModule() {\n    const module = await import("./heavy-module.js");\n    module.default();\n}\n\n// Conditional loading\nif (featureFlag) {\n    const { heavyFunction } = await import("./heavy.js");\n    heavyFunction();\n}\n\n// React code splitting pattern\nfunction MyComponent() {\n    const [module, setModule] = useState(null);\n    \n    useEffect(() => {\n        import("./ChartComponent.js").then(comp => setModule(comp));\n    }, []);\n    \n    return module ? <module.default /> : <div>Loading...</div>;\n}',
  hint: 'Dynamic import reduces initial bundle size.'
},
{
  id: 'js_es6_44',
  topicId: 'js_es6',
  question: 'Use generator functions (function*).',
  mathSolution: 'Generators can pause and resume execution with yield.',
  codeSolution: 'function* numberGenerator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\n\nconst gen = numberGenerator();\nconsole.log(gen.next().value);  // 1\nconsole.log(gen.next().value);  // 2\nconsole.log(gen.next().value);  // 3\nconsole.log(gen.next().done);   // true\n\n// Infinite generator\nfunction* idGenerator() {\n    let id = 1;\n    while (true) {\n        yield id++;\n    }\n}\n\nconst ids = idGenerator();\nconsole.log(ids.next().value);  // 1\nconsole.log(ids.next().value);  // 2',
  hint: 'Generator functions use function* and yield keyword.'
},
{
  id: 'js_es6_45',
  topicId: 'js_es6',
  question: 'Use for...of with iterable objects (custom iterators).',
  mathSolution: 'Implement Symbol.iterator for custom iterables.',
  codeSolution: 'const range = {\n    start: 1,\n    end: 5,\n    [Symbol.iterator]() {\n        let current = this.start;\n        const end = this.end;\n        \n        return {\n            next() {\n                if (current <= end) {\n                    return { value: current++, done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n};\n\nfor (const num of range) {\n    console.log(num);  // 1, 2, 3, 4, 5\n}\n\n// Spread works with iterables too\nconsole.log([...range]);  // [1, 2, 3, 4, 5]',
  hint: 'Iterable protocol: implement [Symbol.iterator]() returning { next() }'
},
{
  id: 'js_es6_46',
  topicId: 'js_es6',
  question: 'Use Proxy for custom object behavior.',
  mathSolution: 'Proxy intercepts and customizes operations on objects.',
  codeSolution: 'const target = { name: "John", age: 30 };\n\nconst handler = {\n    get(obj, prop) {\n        if (prop === "age") {\n            return obj[prop] + " years old";\n        }\n        return obj[prop];\n    },\n    set(obj, prop, value) {\n        if (prop === "age" && (value < 0 || value > 150)) {\n            throw new Error("Invalid age");\n        }\n        obj[prop] = value;\n        return true;\n    }\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.age);  // 30 years old\nproxy.age = 31;\nconsole.log(proxy.age);  // 31 years old\n// proxy.age = -5;  // Error: Invalid age',
  hint: 'Proxy enables validation, logging, computed properties, etc.'
},
{
  id: 'js_es6_47',
  topicId: 'js_es6',
  question: 'Use Reflect API for default object operations.',
  mathSolution: 'Reflect provides methods for interceptable operations.',
  codeSolution: 'const obj = { name: "John" };\n\n// Traditional vs Reflect\nconsole.log("name" in obj);           // true\nconsole.log(Reflect.has(obj, "name")); // true\n\ndelete obj.name;\nconsole.log(obj.name);                 // undefined\n\nReflect.set(obj, "age", 30);\nconsole.log(Reflect.get(obj, "age"));  // 30\n\n// Useful with Proxy\nconst handler = {\n    get(target, prop, receiver) {\n        console.log(`Getting ${prop}`);\n        return Reflect.get(target, prop, receiver);\n    },\n    set(target, prop, value, receiver) {\n        console.log(`Setting ${prop} to ${value}`);\n        return Reflect.set(target, prop, value, receiver);\n    }\n};\n\nconst proxy = new Proxy({}, handler);\nproxy.name = "John";  // Setting name to John\nconsole.log(proxy.name);  // Getting name\\nJohn',
  hint: 'Reflect API provides standard methods for proxy handlers.'
},
{
  id: 'js_es6_48',
  topicId: 'js_es6',
  question: 'Use String.prototype.trim() for whitespace removal.',
  mathSolution: 'trim() removes whitespace from both ends of string.',
  codeSolution: 'const str = "  Hello World  ";\nconsole.log(str.trim());      // "Hello World"\nconsole.log(str.trimStart()); // "Hello World  "\nconsole.log(str.trimEnd());   // "  Hello World"\n\n// Form validation\nconst email = "  user@example.com  ";\nconst cleanEmail = email.trim();\nconsole.log(cleanEmail);  // "user@example.com"\n\n// Multi-line text\nconst text = `\n    Line 1\n    Line 2\n`;\nconsole.log(text.trim());  // "Line 1\\n    Line 2"',
  hint: 'trim() is essential for sanitizing user input.'
},
{
  id: 'js_es6_49',
  topicId: 'js_es6',
  question: 'Use Array.prototype.fill() to fill arrays with values.',
  mathSolution: 'fill() sets array elements to static value.',
  codeSolution: '// Create array of zeros\nconst zeros = new Array(5).fill(0);\nconsole.log(zeros);  // [0, 0, 0, 0, 0]\n\n// Fill part of array\nconst arr = [1, 2, 3, 4, 5];\narr.fill(0, 1, 4);\nconsole.log(arr);  // [1, 0, 0, 0, 5]\n\n// Fill with objects (same reference!)\nconst objArr = new Array(3).fill({});\nobjArr[0].name = "John";\nconsole.log(objArr[1].name);  // John (same object reference)',
  hint: 'fill() with objects creates references, not copies.'
},
{
  id: 'js_es6_50',
  topicId: 'js_es6',
  question: 'Use Array.prototype.copyWithin() to copy array elements.',
  mathSolution: 'copyWithin() copies portion of array to another location.',
  codeSolution: 'const arr = [1, 2, 3, 4, 5];\n\n// Copy from index 3 to 4 to position 0\narr.copyWithin(0, 3, 5);\nconsole.log(arr);  // [4, 5, 3, 4, 5]\n\nconst arr2 = [1, 2, 3, 4, 5];\n// Copy from start to position 2\narr2.copyWithin(2, 0, 2);\nconsole.log(arr2);  // [1, 2, 1, 2, 5]\n\n// Without end parameter (copy to end)\nconst arr3 = [1, 2, 3, 4, 5];\narr3.copyWithin(1, 3);\nconsole.log(arr3);  // [1, 4, 5, 4, 5]',
  hint: 'copyWithin() modifies array in place, doesn\'t change length.'
},
//scope-hoisting
{
  id: 'js_scope_1',
  topicId: 'js_scope',
  question: 'Demonstrate global scope by declaring a variable outside any function.',
  mathSolution: 'Global variables are accessible everywhere.',
  codeSolution: 'let globalVar = "I am global";\nfunction test() {\n    console.log(globalVar);  // I am global\n}\ntest();\nconsole.log(globalVar);  // I am global',
  hint: 'Variables declared outside functions are global.'
},
{
  id: 'js_scope_2',
  topicId: 'js_scope',
  question: 'Demonstrate function scope with var inside a function.',
  mathSolution: 'var is function-scoped, not accessible outside.',
  codeSolution: 'function test() {\n    var funcVar = "Inside function";\n    console.log(funcVar);  // Inside function\n}\ntest();\n// console.log(funcVar);  // ReferenceError',
  hint: 'var variables are scoped to the function they are declared in.'
},
{
  id: 'js_scope_3',
  topicId: 'js_scope',
  question: 'Demonstrate block scope with let inside an if block.',
  mathSolution: 'let is block-scoped, accessible only within {} braces.',
  codeSolution: 'if (true) {\n    let blockVar = "Inside block";\n    console.log(blockVar);  // Inside block\n}\n// console.log(blockVar);  // ReferenceError',
  hint: 'let and const are block-scoped, var is not.'
},
{
  id: 'js_scope_4',
  topicId: 'js_scope',
  question: 'Demonstrate block scope with const inside a for loop.',
  mathSolution: 'const creates new binding for each loop iteration.',
  codeSolution: 'for (const i = 0; i < 3; i++) {\n    // i is block-scoped to each iteration\n    console.log(i);  // Works in for...of, not regular for loop\n}\n// Better example:\nconst arr = [1, 2, 3];\nfor (const num of arr) {\n    console.log(num);  // 1,2,3 (const works here)\n}',
  hint: 'const in for...of creates new binding per iteration.'
},
{
  id: 'js_scope_5',
  topicId: 'js_scope',
  question: 'Show that var ignores block scope (leaks outside if block).',
  mathSolution: 'var is function-scoped, not block-scoped.',
  codeSolution: 'if (true) {\n    var leakVar = "I leak out!";\n}\nconsole.log(leakVar);  // I leak out! (accessible outside block)',
  hint: 'var variables escape block boundaries.'
},
{
  id: 'js_scope_6',
  topicId: 'js_scope',
  question: 'Demonstrate lexical scoping (nested functions access outer variables).',
  mathSolution: 'Inner functions have access to outer function variables.',
  codeSolution: 'function outer() {\n    let outerVar = "I am outer";\n    function inner() {\n        console.log(outerVar);  // I am outer\n    }\n    inner();\n}\nouter();',
  hint: 'Lexical scope means inner functions can access outer variables.'
},
{
  id: 'js_scope_7',
  topicId: 'js_scope',
  question: 'Demonstrate variable hoisting with var (declaration hoisted, not assignment).',
  mathSolution: 'var declarations move to top, initialized with undefined.',
  codeSolution: 'console.log(hoistedVar);  // undefined (no error)\nvar hoistedVar = "Value";\nconsole.log(hoistedVar);  // Value',
  hint: 'var is hoisted but not initialized.'
},
{
  id: 'js_scope_8',
  topicId: 'js_scope',
  question: 'Show that let is hoisted but in Temporal Dead Zone (TDZ).',
  mathSolution: 'let is hoisted but cannot be accessed before declaration.',
  codeSolution: '// console.log(tdzVar);  // ReferenceError: Cannot access before initialization\nlet tdzVar = "Safe now";\nconsole.log(tdzVar);  // Safe now',
  hint: 'TDZ exists from block start until let declaration.'
},
{
  id: 'js_scope_9',
  topicId: 'js_scope',
  question: 'Show that const is also hoisted with TDZ like let.',
  mathSolution: 'const has same hoisting behavior as let.',
  codeSolution: '// console.log(CONST_VAR);  // ReferenceError\nconst CONST_VAR = "Constant";\nconsole.log(CONST_VAR);  // Constant',
  hint: 'const is also in TDZ before declaration.'
},
{
  id: 'js_scope_10',
  topicId: 'js_scope',
  question: 'Demonstrate function hoisting (function declarations are hoisted completely).',
  mathSolution: 'Function declarations are fully hoisted, can be called before definition.',
  codeSolution: 'console.log(sayHello("John"));  // Hello, John!\nfunction sayHello(name) {\n    return `Hello, ${name}!`;\n}',
  hint: 'Function declarations are hoisted with their definition.'
},
{
  id: 'js_scope_11',
  topicId: 'js_scope',
  question: 'Show that function expressions are not hoisted like declarations.',
  mathSolution: 'Variable declaration is hoisted, assignment is not.',
  codeSolution: '// console.log(sayHi("John"));  // TypeError: sayHi is not a function\nvar sayHi = function(name) {\n    return `Hi, ${name}!`;\n};\nconsole.log(sayHi("John"));  // Hi, John!',
  hint: 'Function expressions follow variable hoisting rules.'
},
{
  id: 'js_scope_12',
  topicId: 'js_scope',
  question: 'Demonstrate scope chain resolution (variable lookup).',
  mathSolution: 'JavaScript looks up scope chain from inner to outer.',
  codeSolution: 'let global = "global";\nfunction outer() {\n    let outerVar = "outer";\n    function inner() {\n        let innerVar = "inner";\n        console.log(innerVar);  // inner (own scope)\n        console.log(outerVar);  // outer (outer scope)\n        console.log(global);    // global (global scope)\n    }\n    inner();\n}\nouter();',
  hint: 'Scope chain goes from inner to outer to global.'
},
{
  id: 'js_scope_13',
  topicId: 'js_scope',
  question: 'Demonstrate variable shadowing (inner variable overrides outer).',
  mathSolution: 'Inner scope variable shadows outer variable of same name.',
  codeSolution: 'let message = "Outer";\nfunction test() {\n    let message = "Inner";\n    console.log(message);  // Inner (shadows outer)\n}\ntest();\nconsole.log(message);  // Outer',
  hint: 'Inner scope variables take precedence over outer.'
},
{
  id: 'js_scope_14',
  topicId: 'js_scope',
  question: 'Show that var is function-scoped, not block-scoped in loops.',
  mathSolution: 'var in loop accessible outside loop (function scope).',
  codeSolution: 'for (var i = 0; i < 3; i++) {\n    var loopVar = i;\n}\nconsole.log(i);        // 3 (accessible)\nconsole.log(loopVar);  // 2 (accessible)',
  hint: 'var in loop leaks out of the loop block.'
},
{
  id: 'js_scope_15',
  topicId: 'js_scope',
  question: 'Show that let is block-scoped and creates separate binding in loops.',
  mathSolution: 'let creates new binding for each loop iteration.',
  codeSolution: 'for (let i = 0; i < 3; i++) {\n    // i is only accessible inside\n}\n// console.log(i);  // ReferenceError\n\n// Classic example with setTimeout\nfor (let i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);  // 0,1,2 (correct)\n}',
  hint: 'let creates block-scoped binding per iteration.'
},
{
  id: 'js_scope_16',
  topicId: 'js_scope',
  question: 'Show classic var loop problem with setTimeout.',
  mathSolution: 'var shares same variable across all iterations.',
  codeSolution: 'for (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 100);  // 3,3,3 (not 0,1,2)\n}\n// Fix with IIFE:\nfor (var i = 0; i < 3; i++) {\n    (function(j) {\n        setTimeout(() => console.log(j), 100);  // 0,1,2\n    })(i);\n}',
  hint: 'var creates single binding, let creates per-iteration binding.'
},
{
  id: 'js_scope_17',
  topicId: 'js_scope',
  question: 'Demonstrate block scope using {} braces with let and const.',
  mathSolution: 'Any {} creates a block scope for let/const.',
  codeSolution: '{\n    let blockLet = "Inside block";\n    const blockConst = "Also inside block";\n    console.log(blockLet);   // Inside block\n    console.log(blockConst); // Also inside block\n}\n// console.log(blockLet);   // ReferenceError\n// console.log(blockConst); // ReferenceError',
  hint: 'Curly braces alone create block scope for let/const.'
},
{
  id: 'js_scope_18',
  topicId: 'js_scope',
  question: 'Show that var variables become properties of global object (in browsers).',
  mathSolution: 'Global var creates property on window object.',
  codeSolution: 'var globalVar = "I am global";\n// In browser: console.log(window.globalVar);  // I am global\nconsole.log(globalThis.globalVar);  // I am global (Node/browser)',
  hint: 'Global var adds to globalThis object.'
},
{
  id: 'js_scope_19',
  topicId: 'js_scope',
  question: 'Show that let and const do NOT become properties of global object.',
  mathSolution: 'let/const in global scope don\'t add to global object.',
  codeSolution: 'let globalLet = "Not on window";\nconst globalConst = "Also not on window";\n// In browser: console.log(window.globalLet);  // undefined\n// console.log(window.globalConst);  // undefined\nconsole.log(globalThis.globalLet);  // undefined',
  hint: 'let/const don\'t pollute global object.'
},
{
  id: 'js_scope_20',
  topicId: 'js_scope',
  question: 'Demonstrate nested function scope (multiple levels).',
  mathSolution: 'Functions create scope at each level of nesting.',
  codeSolution: 'function level1() {\n    let a = "level1";\n    function level2() {\n        let b = "level2";\n        function level3() {\n            let c = "level3";\n            console.log(a, b, c);  // level1 level2 level3\n        }\n        level3();\n    }\n    level2();\n}\nlevel1();',
  hint: 'Each function creates its own scope level.'
},
{
  id: 'js_scope_21',
  topicId: 'js_scope',
  question: 'Demonstrate that var is function-scoped, not block-scoped in switch.',
  mathSolution: 'var in switch case accessible throughout function.',
  codeSolution: 'function testSwitch(choice) {\n    switch(choice) {\n        case 1:\n            var switchVar = "I am in case 1";\n            break;\n        case 2:\n            console.log(switchVar);  // accessible! (undefined if case 1 not run)\n            break;\n    }\n}\ntestSwitch(2);  // undefined',
  hint: 'var ignores switch block boundaries.'
},
{
  id: 'js_scope_22',
  topicId: 'js_scope',
  question: 'Demonstrate that let is block-scoped in switch statement.',
  mathSolution: 'let in switch case is scoped to that case block.',
  codeSolution: 'switch(1) {\n    case 1: {\n        let blockScoped = "Only in case 1";\n        console.log(blockScoped);  // Only in case 1\n        break;\n    }\n    case 2: {\n        // console.log(blockScoped);  // ReferenceError\n        break;\n    }\n}',
  hint: 'Use {} to create block scope in switch cases for let/const.'
},
{
  id: 'js_scope_23',
  topicId: 'js_scope',
  question: 'Demonstrate that functions create closure (retain outer scope).',
  mathSolution: 'Inner function retains access to outer variables even after outer returns.',
  codeSolution: 'function outerFunction(x) {\n    return function innerFunction(y) {\n        return x + y;  // x is from outer scope (closure)\n    };\n}\nconst add5 = outerFunction(5);\nconsole.log(add5(3));  // 8 (closure retains x=5)',
  hint: 'Closures remember the scope they were created in.'
},
{
  id: 'js_scope_24',
  topicId: 'js_scope',
  question: 'Demonstrate script scope vs module scope.',
  mathSolution: 'Modules have their own scope, variables not global.',
  codeSolution: '// In a module file (.mjs or with type="module")\n// let moduleVar = "Only in this module";\n// console.log(window.moduleVar);  // undefined\n// Global scope in module is different from script global.',
  hint: 'ES modules have their own top-level scope.'
},
{
  id: 'js_scope_25',
  topicId: 'js_scope',
  question: 'Demonstrate that arrow functions inherit scope (lexical this).',
  mathSolution: 'Arrow functions don\'t create their own this, they inherit from outer scope.',
  codeSolution: 'const obj = {\n    name: "Object",\n    regular: function() {\n        console.log(this.name);  // Object\n    },\n    arrow: () => {\n        console.log(this.name);  // undefined (outer this)\n    }\n};\nobj.regular();\nobj.arrow();',
  hint: 'Arrow functions use lexical this from surrounding scope.'
},
{
  id: 'js_scope_26',
  topicId: 'js_scope',
  question: 'Demonstrate that eval can access local scope (dangerous).',
  mathSolution: 'eval can access and modify local variables (use with caution).',
  codeSolution: 'function testEval() {\n    let secret = "secret value";\n    eval("console.log(secret)");  // secret value\n    eval("secret = \'modified\'");\n    console.log(secret);  // modified\n}\ntestEval();',
  hint: 'eval executes code in current scope (avoid using).'
},
{
  id: 'js_scope_27',
  topicId: 'js_scope',
  question: 'Demonstrate that with statement extends scope chain (deprecated).',
  mathSolution: 'with adds object properties to scope chain (avoid using).',
  codeSolution: 'const person = { name: "Alice", age: 25 };\nwith(person) {\n    console.log(name);  // Alice\n    console.log(age);   // 25\n}\n// Not recommended - causes ambiguity',
  hint: 'with is deprecated and not allowed in strict mode.'
},
{
  id: 'js_scope_28',
  topicId: 'js_scope',
  question: 'Demonstrate variable redeclaration allowed with var but not let/const.',
  mathSolution: 'var allows redeclaration, let/const throw error.',
  codeSolution: 'var x = 1;\nvar x = 2;  // Works fine\nconsole.log(x);  // 2\n\nlet y = 1;\n// let y = 2;  // SyntaxError: Identifier already declared\n\nconst z = 1;\n// const z = 2;  // SyntaxError',
  hint: 'let and const cannot be redeclared in same scope.'
},
{
  id: 'js_scope_29',
  topicId: 'js_scope',
  question: 'Demonstrate block scope in try-catch block.',
  mathSolution: 'try-catch creates block scope for error variable.',
  codeSolution: 'try {\n    throw new Error("Something went wrong");\n} catch (error) {\n    console.log(error.message);  // Something went wrong\n}\n// console.log(error);  // ReferenceError (error scoped to catch block)',
  hint: 'Error variable in catch is block-scoped.'
},
{
  id: 'js_scope_30',
  topicId: 'js_scope',
  question: 'Demonstrate that function parameters have function scope.',
  mathSolution: 'Parameters are scoped to the function body.',
  codeSolution: 'function testParams(param) {\n    console.log(param);  // parameter value\n    var param = "overwritten";  // Possible but confusing\n    console.log(param);  // overwritten\n}\ntestParams("original");\n// console.log(param);  // ReferenceError',
  hint: 'Parameters behave like local variables in function.'
},
{
  id: 'js_scope_31',
  topicId: 'js_scope',
  question: 'Demonstrate that default parameters create their own scope.',
  mathSolution: 'Default parameters have their own scope separate from function body.',
  codeSolution: 'let x = 10;\nfunction test(y = x) {  // x from outer scope\n    let x = 20;  // This x shadows outer\n    console.log(y);  // 10 (outer x, not inner)\n}\ntest();',
  hint: 'Default parameters are evaluated in outer scope, not function scope.'
},
{
  id: 'js_scope_32',
  topicId: 'js_scope',
  question: 'Demonstrate temporal dead zone (TDZ) with let in detail.',
  mathSolution: 'TDZ is period from entering block until actual declaration.',
  codeSolution: '{\n    // TDZ for myVar starts\n    // console.log(myVar);  // ReferenceError\n    let myVar = "Now initialized";\n    console.log(myVar);  // Now initialized (TDZ ends)\n}',
  hint: 'Cannot access let variables before declaration line.'
},
{
  id: 'js_scope_33',
  topicId: 'js_scope',
  question: 'Demonstrate TDZ with typeof (safe for var but not let).',
  mathSolution: 'typeof on undeclared var returns undefined, but on let in TDZ throws.',
  codeSolution: 'console.log(typeof undeclaredVar);  // undefined (safe)\n\n// console.log(typeof tdzVar);  // ReferenceError (cannot use typeof in TDZ)\nlet tdzVar = "value";\nconsole.log(typeof tdzVar);  // string (after declaration)',
  hint: 'Accessing let variable in TDZ throws ReferenceError even with typeof.'
},
{
  id: 'js_scope_34',
  topicId: 'js_scope',
  question: 'Demonstrate that catch block parameters are block-scoped.',
  mathSolution: 'Error parameter in catch is scoped to catch block only.',
  codeSolution: 'try {\n    throw new Error("Custom error");\n} catch (err) {\n    console.log(err.message);  // Custom error\n    // err is scoped to this catch block\n}\n// console.log(err);  // ReferenceError',
  hint: 'Each catch block has its own error variable scope.'
},
{
  id: 'js_scope_35',
  topicId: 'js_scope',
  question: 'Demonstrate scope with IIFE (Immediately Invoked Function Expression).',
  mathSolution: 'IIFE creates private scope, variables not leak to global.',
  codeSolution: '(function() {\n    var privateVar = "This is private";\n    console.log(privateVar);  // This is private\n})();\n// console.log(privateVar);  // ReferenceError (private)\n\n// Arrow function IIFE\n(() => {\n    let arrowPrivate = "Also private";\n    console.log(arrowPrivate);  // Also private\n})();',
  hint: 'IIFE creates isolated scope for private variables.'
},
{
  id: 'js_scope_36',
  topicId: 'js_scope',
  question: 'Demonstrate that global variables can be accessed via globalThis.',
  mathSolution: 'globalThis provides standard way to access global object.',
  codeSolution: 'var globalVar = "I am global";\nlet notGlobal = "Not on globalThis";\nconsole.log(globalThis.globalVar);  // I am global\nconsole.log(globalThis.notGlobal);   // undefined (let doesn\'t attach)',
  hint: 'Use globalThis for cross-platform global access.'
},
{
  id: 'js_scope_37',
  topicId: 'js_scope',
  question: 'Demonstrate that const cannot be reassigned but object properties can change.',
  mathSolution: 'const prevents reassignment, not mutation.',
  codeSolution: 'const obj = { name: "Original" };\nobj.name = "Modified";  // Allowed (property mutation)\nconsole.log(obj.name);  // Modified\n// obj = { newObj: true };  // TypeError (reassignment not allowed)',
  hint: 'const only prevents reassignment of the binding itself.'
},
{
  id: 'js_scope_38',
  topicId: 'js_scope',
  question: 'Demonstrate that var variables are added to global object in strict mode too.',
  mathSolution: 'var always adds to global object in global scope, even in strict mode.',
  codeSolution: '"use strict";\nvar strictVar = "Still on global";\nconsole.log(globalThis.strictVar);  // Still on global\n\nlet strictLet = "Not on global";\nconsole.log(globalThis.strictLet);   // undefined',
  hint: 'Global var always adds to globalThis, even in strict mode.'
},
{
  id: 'js_scope_39',
  topicId: 'js_scope',
  question: 'Demonstrate block scope in for loop with let (each iteration new binding).',
  mathSolution: 'let creates new binding for each loop iteration.',
  codeSolution: 'const functions = [];\nfor (let i = 0; i < 3; i++) {\n    functions.push(() => console.log(i));\n}\nfunctions[0]();  // 0\nfunctions[1]();  // 1\nfunctions[2]();  // 2\n// Each closure has its own i variable',
  hint: 'let creates per-iteration binding in for loops.'
},
{
  id: 'js_scope_40',
  topicId: 'js_scope',
  question: 'Demonstrate that var in for loop creates single binding across iterations.',
  mathSolution: 'var is function-scoped, so same variable for all iterations.',
  codeSolution: 'const functions = [];\nfor (var i = 0; i < 3; i++) {\n    functions.push(() => console.log(i));\n}\nfunctions[0]();  // 3\nfunctions[1]();  // 3\nfunctions[2]();  // 3\n// All closures share the same i variable',
  hint: 'var creates single binding across loop iterations.'
},
//recursion
{
  id: 'js_recursion_1',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate factorial of n (n!).',
  mathSolution: 'Base case: n <= 1 returns 1; Recursive case: n * factorial(n-1).',
  codeSolution: 'function factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nconsole.log(factorial(5));  // 120\nconsole.log(factorial(0));  // 1\nconsole.log(factorial(3));  // 6',
  hint: 'Base case stops recursion; recursive case calls itself with smaller value.'
},
{
  id: 'js_recursion_2',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate sum of numbers from 1 to n.',
  mathSolution: 'Base case: n === 1 returns 1; Recursive: n + sum(n-1).',
  codeSolution: 'function sumToN(n) {\n    if (n === 1) return 1;\n    return n + sumToN(n - 1);\n}\nconsole.log(sumToN(5));  // 15 (1+2+3+4+5)\nconsole.log(sumToN(10)); // 55',
  hint: 'Sum of first n natural numbers = n + sum of first (n-1) numbers.'
},
{
  id: 'js_recursion_3',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate nth Fibonacci number.',
  mathSolution: 'Base: F(0)=0, F(1)=1; Recursive: F(n)=F(n-1)+F(n-2).',
  codeSolution: 'function fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\nconsole.log(fibonacci(0)); // 0\nconsole.log(fibonacci(1)); // 1\nconsole.log(fibonacci(7)); // 13\n// Note: Exponential time complexity, inefficient for large n',
  hint: 'Fibonacci sequence: 0,1,1,2,3,5,8,13,21...'
},
{
  id: 'js_recursion_4',
  topicId: 'js_recursion',
  question: 'Write a recursive function to calculate power (exponentiation).',
  mathSolution: 'Base: exponent === 0 returns 1; Recursive: base * pow(base, exponent-1).',
  codeSolution: 'function power(base, exponent) {\n    if (exponent === 0) return 1;\n    return base * power(base, exponent - 1);\n}\nconsole.log(power(2, 3));  // 8\nconsole.log(power(5, 0));  // 1\nconsole.log(power(3, 4));  // 81',
  hint: 'x^n = x * x^(n-1), with base case x^0 = 1.'
},
{
  id: 'js_recursion_5',
  topicId: 'js_recursion',
  question: 'Optimize power function using exponentiation by squaring.',
  mathSolution: 'Even exponent: pow(base, exponent/2)^2; Odd: base * pow(base, exponent-1).',
  codeSolution: 'function powerOptimized(base, exponent) {\n    if (exponent === 0) return 1;\n    if (exponent % 2 === 0) {\n        const half = powerOptimized(base, exponent / 2);\n        return half * half;\n    } else {\n        return base * powerOptimized(base, exponent - 1);\n    }\n}\nconsole.log(powerOptimized(2, 10));  // 1024\nconsole.log(powerOptimized(3, 4));   // 81',
  hint: 'Exponentiation by squaring reduces O(n) to O(log n) operations.'
},
{
  id: 'js_recursion_6',
  topicId: 'js_recursion',
  question: 'Write a recursive function to reverse a string.',
  mathSolution: 'Base: empty string returns empty; Recursive: last char + reverse(rest).',
  codeSolution: 'function reverseString(str) {\n    if (str === "") return "";\n    return reverseString(str.slice(1)) + str[0];\n}\nconsole.log(reverseString("hello"));  // "olleh"\nconsole.log(reverseString("racecar")); // "racecar"\nconsole.log(reverseString("abc"));    // "cba"',
  hint: 'Reverse = reverse(substring) + first character.'
},
{
  id: 'js_recursion_7',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if a string is palindrome.',
  mathSolution: 'Base: length <= 1 returns true; Check first/last chars and recurse on inner.',
  codeSolution: 'function isPalindrome(str) {\n    if (str.length <= 1) return true;\n    if (str[0] !== str[str.length - 1]) return false;\n    return isPalindrome(str.slice(1, -1));\n}\nconsole.log(isPalindrome("racecar"));  // true\nconsole.log(isPalindrome("hello"));    // false\nconsole.log(isPalindrome("a"));        // true',
  hint: 'Palindrome if first==last AND inner substring is palindrome.'
},
{
  id: 'js_recursion_8',
  topicId: 'js_recursion',
  question: 'Write a recursive function to flatten a nested array.',
  mathSolution: 'Base: non-array returns element; Recursive: concat flatten of each element.',
  codeSolution: 'function flatten(arr) {\n    let result = [];\n    for (let i = 0; i < arr.length; i++) {\n        if (Array.isArray(arr[i])) {\n            result = result.concat(flatten(arr[i]));\n        } else {\n            result.push(arr[i]);\n        }\n    }\n    return result;\n}\nconsole.log(flatten([1, [2, [3, 4], 5], 6]));  // [1,2,3,4,5,6]',
  hint: 'If element is array, flatten it; else add to result.'
},
{
  id: 'js_recursion_9',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute greatest common divisor (GCD).',
  mathSolution: 'Euclidean algorithm: GCD(a,b) = GCD(b, a % b); Base: b === 0 returns a.',
  codeSolution: 'function gcd(a, b) {\n    if (b === 0) return a;\n    return gcd(b, a % b);\n}\nconsole.log(gcd(48, 18));  // 6\nconsole.log(gcd(100, 35)); // 5\nconsole.log(gcd(17, 13));  // 1',
  hint: 'Euclidean algorithm: GCD(a,b) = GCD(b, a mod b) until b=0.'
},
{
  id: 'js_recursion_10',
  topicId: 'js_recursion',
  question: 'Write a recursive function to count digits in a number.',
  mathSolution: 'Base: number < 10 returns 1; Recursive: 1 + countDigits(Math.floor(n/10)).',
  codeSolution: 'function countDigits(n) {\n    n = Math.abs(n);\n    if (n < 10) return 1;\n    return 1 + countDigits(Math.floor(n / 10));\n}\nconsole.log(countDigits(12345));  // 5\nconsole.log(countDigits(7));      // 1\nconsole.log(countDigits(-987));   // 3',
  hint: 'Digits = 1 + digits in number/10 until single digit.'
},
{
  id: 'js_recursion_11',
  topicId: 'js_recursion',
  question: 'Write a recursive function to sum digits of a number.',
  mathSolution: 'Base: n < 10 returns n; Recursive: n%10 + sumDigits(Math.floor(n/10)).',
  codeSolution: 'function sumDigits(n) {\n    n = Math.abs(n);\n    if (n < 10) return n;\n    return (n % 10) + sumDigits(Math.floor(n / 10));\n}\nconsole.log(sumDigits(123));   // 6\nconsole.log(sumDigits(4567));  // 22\nconsole.log(sumDigits(9));     // 9',
  hint: 'Sum digits = last digit + sum of remaining digits.'
},
{
  id: 'js_recursion_12',
  topicId: 'js_recursion',
  question: 'Write a recursive function to find the maximum value in an array.',
  mathSolution: 'Base: array length 1 returns that element; Compare first with max of rest.',
  codeSolution: 'function findMax(arr) {\n    if (arr.length === 1) return arr[0];\n    const maxOfRest = findMax(arr.slice(1));\n    return arr[0] > maxOfRest ? arr[0] : maxOfRest;\n}\nconsole.log(findMax([3, 7, 2, 9, 5]));  // 9\nconsole.log(findMax([-1, -5, -3]));     // -1',
  hint: 'Max = max(first element, max of remaining elements).'
},
{
  id: 'js_recursion_13',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if array is sorted.',
  mathSolution: 'Base: length <= 1 returns true; Check first <= second and recurse on rest.',
  codeSolution: 'function isSorted(arr) {\n    if (arr.length <= 1) return true;\n    if (arr[0] > arr[1]) return false;\n    return isSorted(arr.slice(1));\n}\nconsole.log(isSorted([1, 2, 3, 4, 5]));  // true\nconsole.log(isSorted([1, 3, 2, 4]));    // false\nconsole.log(isSorted([5]));              // true',
  hint: 'Array sorted if first <= second AND rest is sorted.'
},
{
  id: 'js_recursion_14',
  topicId: 'js_recursion',
  question: 'Write a recursive function for binary search.',
  mathSolution: 'Base: low > high returns -1; Compare mid with target, recurse left or right.',
  codeSolution: 'function binarySearch(arr, target, low = 0, high = arr.length - 1) {\n    if (low > high) return -1;\n    const mid = Math.floor((low + high) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);\n    return binarySearch(arr, target, mid + 1, high);\n}\nconst arr = [1, 3, 5, 7, 9, 11];\nconsole.log(binarySearch(arr, 7));   // 3\nconsole.log(binarySearch(arr, 4));   // -1',
  hint: 'Binary search divides problem in half at each step.'
},
{
  id: 'js_recursion_15',
  topicId: 'js_recursion',
  question: 'Write a recursive function to generate all subsets of an array.',
  mathSolution: 'Base: empty array returns [[]]; Recursively add/subtract first element.',
  codeSolution: 'function subsets(arr) {\n    if (arr.length === 0) return [[]];\n    const first = arr[0];\n    const restSubsets = subsets(arr.slice(1));\n    const withFirst = restSubsets.map(subset => [first, ...subset]);\n    return [...restSubsets, ...withFirst];\n}\nconsole.log(subsets([1, 2, 3]));\n// [[], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]]',
  hint: 'Subsets = subsets without first element + subsets with first element.'
},
{
  id: 'js_recursion_16',
  topicId: 'js_recursion',
  question: 'Write a recursive function to generate all permutations of a string.',
  mathSolution: 'Base: length 1 returns [char]; Insert char at all positions of each permutation.',
  codeSolution: 'function permutations(str) {\n    if (str.length === 1) return [str];\n    const result = [];\n    for (let i = 0; i < str.length; i++) {\n        const char = str[i];\n        const remaining = str.slice(0, i) + str.slice(i + 1);\n        const perms = permutations(remaining);\n        for (const perm of perms) {\n            result.push(char + perm);\n        }\n    }\n    return result;\n}\nconsole.log(permutations("abc"));\n// ["abc", "acb", "bac", "bca", "cab", "cba"]',
  hint: 'Permutations = each character + permutations of remaining characters.'
},
{
  id: 'js_recursion_17',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Tower of Hanoi (minimum moves).',
  mathSolution: 'Move n-1 disks to auxiliary, move largest, move n-1 to target.',
  codeSolution: 'function towerOfHanoi(n, from, to, auxiliary, moves = []) {\n    if (n === 1) {\n        moves.push(`Move disk 1 from ${from} to ${to}`);\n        return moves;\n    }\n    towerOfHanoi(n - 1, from, auxiliary, to, moves);\n    moves.push(`Move disk ${n} from ${from} to ${to}`);\n    towerOfHanoi(n - 1, auxiliary, to, from, moves);\n    return moves;\n}\nconsole.log(towerOfHanoi(3, "A", "C", "B"));',
  hint: 'Tower of Hanoi requires 2^n - 1 moves for n disks.'
},
{
  id: 'js_recursion_18',
  topicId: 'js_recursion',
  question: 'Write a recursive function to traverse a tree structure (DFS).',
  mathSolution: 'Visit node, then recursively traverse each child.',
  codeSolution: 'const tree = {\n    value: 1,\n    children: [\n        { value: 2, children: [{ value: 4, children: [] }, { value: 5, children: [] }] },\n        { value: 3, children: [{ value: 6, children: [] }] }\n    ]\n};\n\nfunction dfs(node, result = []) {\n    result.push(node.value);\n    for (const child of node.children) {\n        dfs(child, result);\n    }\n    return result;\n}\nconsole.log(dfs(tree));  // [1, 2, 4, 5, 3, 6]',
  hint: 'Depth-first traversal visits node then children recursively.'
},
{
  id: 'js_recursion_19',
  topicId: 'js_recursion',
  question: 'Write a recursive function to traverse binary tree (in-order).',
  mathSolution: 'Traverse left, visit node, traverse right.',
  codeSolution: 'class TreeNode {\n    constructor(value, left = null, right = null) {\n        this.value = value;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nconst tree2 = new TreeNode(4,\n    new TreeNode(2, new TreeNode(1), new TreeNode(3)),\n    new TreeNode(6, new TreeNode(5), new TreeNode(7))\n);\n\nfunction inorderTraversal(node, result = []) {\n    if (!node) return result;\n    inorderTraversal(node.left, result);\n    result.push(node.value);\n    inorderTraversal(node.right, result);\n    return result;\n}\nconsole.log(inorderTraversal(tree2));  // [1, 2, 3, 4, 5, 6, 7]',
  hint: 'In-order: left, node, right.'
},
{
  id: 'js_recursion_20',
  topicId: 'js_recursion',
  question: 'Write a recursive function for pre-order and post-order traversal.',
  mathSolution: 'Pre: node, left, right; Post: left, right, node.',
  codeSolution: 'function preorderTraversal(node, result = []) {\n    if (!node) return result;\n    result.push(node.value);\n    preorderTraversal(node.left, result);\n    preorderTraversal(node.right, result);\n    return result;\n}\n\nfunction postorderTraversal(node, result = []) {\n    if (!node) return result;\n    postorderTraversal(node.left, result);\n    postorderTraversal(node.right, result);\n    result.push(node.value);\n    return result;\n}\n\nconsole.log(preorderTraversal(tree2));  // [4, 2, 1, 3, 6, 5, 7]\nconsole.log(postorderTraversal(tree2)); // [1, 3, 2, 5, 7, 6, 4]',
  hint: 'Pre-order: root, left, right. Post-order: left, right, root.'
},
{
  id: 'js_recursion_21',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute the depth of a binary tree.',
  mathSolution: 'Base: null returns 0; Depth = 1 + max(depth left, depth right).',
  codeSolution: 'function treeDepth(node) {\n    if (!node) return 0;\n    const leftDepth = treeDepth(node.left);\n    const rightDepth = treeDepth(node.right);\n    return 1 + Math.max(leftDepth, rightDepth);\n}\nconsole.log(treeDepth(tree2));  // 3',
  hint: 'Depth = 1 + max(depth of left, depth of right).'
},
{
  id: 'js_recursion_22',
  topicId: 'js_recursion',
  question: 'Write a recursive function for QuickSort algorithm.',
  mathSolution: 'Pick pivot, partition, recursively sort left and right partitions.',
  codeSolution: 'function quickSort(arr) {\n    if (arr.length <= 1) return arr;\n    const pivot = arr[0];\n    const left = [];\n    const right = [];\n    for (let i = 1; i < arr.length; i++) {\n        if (arr[i] < pivot) left.push(arr[i]);\n        else right.push(arr[i]);\n    }\n    return [...quickSort(left), pivot, ...quickSort(right)];\n}\nconsole.log(quickSort([3, 6, 8, 10, 1, 2, 1]));  // [1, 1, 2, 3, 6, 8, 10]',
  hint: 'QuickSort: choose pivot, partition, recursively sort partitions.'
},
{
  id: 'js_recursion_23',
  topicId: 'js_recursion',
  question: 'Write a recursive function for MergeSort algorithm.',
  mathSolution: 'Divide array in half, recursively sort halves, merge results.',
  codeSolution: 'function mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    const mid = Math.floor(arr.length / 2);\n    const left = mergeSort(arr.slice(0, mid));\n    const right = mergeSort(arr.slice(mid));\n    return merge(left, right);\n}\n\nfunction merge(left, right) {\n    const result = [];\n    let i = 0, j = 0;\n    while (i < left.length && j < right.length) {\n        if (left[i] <= right[j]) result.push(left[i++]);\n        else result.push(right[j++]);\n    }\n    return result.concat(left.slice(i)).concat(right.slice(j));\n}\nconsole.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));\n// [3, 9, 10, 27, 38, 43, 82]',
  hint: 'MergeSort: divide and conquer, merge sorted halves.'
},
{
  id: 'js_recursion_24',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute n-th triangular number.',
  mathSolution: 'Base: n=1 returns 1; Recursive: n + triangular(n-1).',
  codeSolution: 'function triangular(n) {\n    if (n === 1) return 1;\n    return n + triangular(n - 1);\n}\nconsole.log(triangular(5));  // 15 (1+2+3+4+5)\nconsole.log(triangular(10)); // 55',
  hint: 'Triangular number = n + T(n-1), T(1)=1.'
},
{
  id: 'js_recursion_25',
  topicId: 'js_recursion',
  question: 'Write a recursive function for climbing stairs problem (ways to climb n steps).',
  mathSolution: 'Base: n=0 return 1; Recursive: climb(n-1) + climb(n-2).',
  codeSolution: 'function climbStairs(n) {\n    if (n < 0) return 0;\n    if (n === 0) return 1;\n    return climbStairs(n - 1) + climbStairs(n - 2);\n}\nconsole.log(climbStairs(3));  // 3 (1+1+1, 1+2, 2+1)\nconsole.log(climbStairs(4));  // 5',
  hint: 'Ways to climb = ways to climb (n-1) + ways to climb (n-2).'
},
{
  id: 'js_recursion_26',
  topicId: 'js_recursion',
  question: 'Write a recursive function for factorial with memoization (optimized).',
  mathSolution: 'Cache results in object to avoid recomputation.',
  codeSolution: 'const memo = {};\nfunction factorialMemo(n) {\n    if (n <= 1) return 1;\n    if (memo[n]) return memo[n];\n    memo[n] = n * factorialMemo(n - 1);\n    return memo[n];\n}\nconsole.log(factorialMemo(5));   // 120\nconsole.log(factorialMemo(10));  // 3628800\n// fibonacci with memoization\nconst fibMemo = {};\nfunction fibonacciMemo(n) {\n    if (n <= 1) return n;\n    if (fibMemo[n]) return fibMemo[n];\n    fibMemo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);\n    return fibMemo[n];\n}\nconsole.log(fibonacciMemo(40));  // 102334155 (fast!)',
  hint: 'Memoization stores computed results, reducing O(2^n) to O(n).'
},
{
  id: 'js_recursion_27',
  topicId: 'js_recursion',
  question: 'Write a recursive function for n choose k (combinations).',
  mathSolution: 'Base: k=0 or k=n returns 1; Recursive: C(n-1,k-1) + C(n-1,k).',
  codeSolution: 'function combinations(n, k) {\n    if (k === 0 || k === n) return 1;\n    return combinations(n - 1, k - 1) + combinations(n - 1, k);\n}\nconsole.log(combinations(5, 2));  // 10\nconsole.log(combinations(6, 3));  // 20',
  hint: 'Pascal\'s rule: C(n,k) = C(n-1,k-1) + C(n-1,k).'
},
{
  id: 'js_recursion_28',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute string length.',
  mathSolution: 'Base: empty string returns 0; Recursive: 1 + length of rest.',
  codeSolution: 'function stringLength(str) {\n    if (str === "") return 0;\n    return 1 + stringLength(str.slice(1));\n}\nconsole.log(stringLength("hello"));   // 5\nconsole.log(stringLength("abcde"));   // 5',
  hint: 'Length = 1 + length of string without first character.'
},
{
  id: 'js_recursion_29',
  topicId: 'js_recursion',
  question: 'Write a recursive function to remove duplicates from sorted array.',
  mathSolution: 'Base: empty or single element returns array; Compare and recurse.',
  codeSolution: 'function removeDuplicates(arr) {\n    if (arr.length <= 1) return arr;\n    if (arr[0] === arr[1]) return removeDuplicates(arr.slice(1));\n    return [arr[0], ...removeDuplicates(arr.slice(1))];\n}\nconsole.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));\n// [1, 2, 3, 4, 5]',
  hint: 'Skip duplicates, keep first occurrence of each number.'
},
{
  id: 'js_recursion_30',
  topicId: 'js_recursion',
  question: 'Write a recursive function for linear search.',
  mathSolution: 'Base: index >= length returns -1; Check current or recurse.',
  codeSolution: 'function linearSearch(arr, target, index = 0) {\n    if (index >= arr.length) return -1;\n    if (arr[index] === target) return index;\n    return linearSearch(arr, target, index + 1);\n}\nconsole.log(linearSearch([3, 7, 2, 9, 5], 7));  // 1\nconsole.log(linearSearch([3, 7, 2, 9, 5], 4));  // -1',
  hint: 'Check current index, if not found search remaining array.'
},
{
  id: 'js_recursion_31',
  topicId: 'js_recursion',
  question: 'Write a recursive function for exponential search (pow).',
  mathSolution: 'Base: exponent 0 returns 1; even/odd optimization.',
  codeSolution: 'function pow(base, exponent) {\n    if (exponent === 0) return 1;\n    if (exponent < 0) return 1 / pow(base, -exponent);\n    if (exponent % 2 === 0) {\n        const half = pow(base, exponent / 2);\n        return half * half;\n    }\n    return base * pow(base, exponent - 1);\n}\nconsole.log(pow(2, 10));   // 1024\nconsole.log(pow(5, -2));   // 0.04\nconsole.log(pow(3, 4));    // 81',
  hint: 'Handle negative exponents with reciprocal.'
},
{
  id: 'js_recursion_32',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute product of arrays elements.',
  mathSolution: 'Base: empty array returns 1; Recursive: first * product(rest).',
  codeSolution: 'function product(arr) {\n    if (arr.length === 0) return 1;\n    return arr[0] * product(arr.slice(1));\n}\nconsole.log(product([2, 3, 4]));   // 24\nconsole.log(product([1, 2, 3]));   // 6',
  hint: 'Product = first element * product of remaining elements.'
},
{
  id: 'js_recursion_33',
  topicId: 'js_recursion',
  question: 'Write a recursive function to find all occurrences of a value.',
  mathSolution: 'Use index parameter to collect positions.',
  codeSolution: 'function findAll(arr, target, index = 0, result = []) {\n    if (index >= arr.length) return result;\n    if (arr[index] === target) result.push(index);\n    return findAll(arr, target, index + 1, result);\n}\nconsole.log(findAll([1, 2, 3, 2, 4, 2, 5], 2));  // [1, 3, 5]',
  hint: 'Pass result array through recursion to collect indices.'
},
{
  id: 'js_recursion_34',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if number is prime.',
  mathSolution: 'Check divisors from 2 to sqrt(n) recursively.',
  codeSolution: 'function isPrime(n, divisor = 2) {\n    if (n <= 1) return false;\n    if (divisor * divisor > n) return true;\n    if (n % divisor === 0) return false;\n    return isPrime(n, divisor + 1);\n}\nconsole.log(isPrime(17));   // true\nconsole.log(isPrime(15));   // false\nconsole.log(isPrime(2));    // true',
  hint: 'Check divisibility from 2 to sqrt(n).'
},
{
  id: 'js_recursion_35',
  topicId: 'js_recursion',
  question: 'Write a recursive function to convert decimal to binary.',
  mathSolution: 'Base: n < 2 returns string of n; Recursive: convert(n/2) + (n%2).',
  codeSolution: 'function decimalToBinary(n) {\n    if (n === 0) return "0";\n    if (n === 1) return "1";\n    return decimalToBinary(Math.floor(n / 2)) + (n % 2);\n}\nconsole.log(decimalToBinary(10));  // "1010"\nconsole.log(decimalToBinary(42));  // "101010"',
  hint: 'Binary = binary of n/2 + (n % 2).'
},
{
  id: 'js_recursion_36',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute greatest common divisor (GCD) of multiple numbers.',
  mathSolution: 'GCD(a,b,c) = GCD(GCD(a,b), c).',
  codeSolution: 'function gcd(a, b) {\n    if (b === 0) return a;\n    return gcd(b, a % b);\n}\n\nfunction gcdMultiple(arr) {\n    if (arr.length === 1) return arr[0];\n    return gcd(arr[0], gcdMultiple(arr.slice(1)));\n}\nconsole.log(gcdMultiple([48, 18, 24]));  // 6\nconsole.log(gcdMultiple([100, 35, 15])); // 5',
  hint: 'GCD of multiple numbers = GCD(GCD(a,b), c).'
},
{
  id: 'js_recursion_37',
  topicId: 'js_recursion',
  question: 'Write a recursive function for least common multiple (LCM).',
  mathSolution: 'LCM(a,b) = a * b / GCD(a,b).',
  codeSolution: 'function gcd(a, b) {\n    if (b === 0) return a;\n    return gcd(b, a % b);\n}\n\nfunction lcm(a, b) {\n    return (a * b) / gcd(a, b);\n}\n\nfunction lcmMultiple(arr) {\n    if (arr.length === 1) return arr[0];\n    return lcm(arr[0], lcmMultiple(arr.slice(1)));\n}\nconsole.log(lcmMultiple([4, 6, 8]));   // 24\nconsole.log(lcmMultiple([2, 3, 5]));   // 30',
  hint: 'LCM = product / GCD.'
},
{
  id: 'js_recursion_38',
  topicId: 'js_recursion',
  question: 'Write a recursive function to generate all substrings of a string.',
  mathSolution: 'Take all substrings starting at each position and recurse on rest.',
  codeSolution: 'function substrings(str) {\n    if (str.length === 0) return [];\n    const result = [];\n    for (let i = 0; i < str.length; i++) {\n        result.push(str.slice(0, i + 1));\n    }\n    return [...result, ...substrings(str.slice(1))];\n}\nconsole.log(substrings("abc"));\n// ["a", "ab", "abc", "b", "bc", "c"]',
  hint: 'Substrings = prefixes + substrings of string without first char.'
},
{
  id: 'js_recursion_39',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Josephus problem.',
  mathSolution: 'J(n,k) = (J(n-1,k) + k-1) % n + 1 with base J(1,k)=1.',
  codeSolution: 'function josephus(n, k) {\n    if (n === 1) return 1;\n    return (josephus(n - 1, k) + k - 1) % n + 1;\n}\nconsole.log(josephus(7, 3));  // 4\nconsole.log(josephus(41, 3)); // 31 (famous problem)',
  hint: 'Josephus recurrence: (J(n-1,k)+k-1) % n + 1.'
},
{
  id: 'js_recursion_40',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Ackermann function.',
  mathSolution: 'A(0,m)=m+1; A(n,0)=A(n-1,1); A(n,m)=A(n-1,A(n,m-1)).',
  codeSolution: 'function ackermann(m, n) {\n    if (m === 0) return n + 1;\n    if (n === 0) return ackermann(m - 1, 1);\n    return ackermann(m - 1, ackermann(m, n - 1));\n}\nconsole.log(ackermann(0, 5));   // 6\nconsole.log(ackermann(1, 3));   // 5\nconsole.log(ackermann(2, 4));   // 11\n// ackermann(3, 4) grows very large quickly',
  hint: 'Ackermann function grows extremely fast; good for recursion depth testing.'
},
{
  id: 'js_recursion_41',
  topicId: 'js_recursion',
  question: 'Write a recursive function to compute the number of binary strings without consecutive zeros.',
  mathSolution: 'Count strings ending with 0 and 1 recursively.',
  codeSolution: 'function countBinaryStrings(n) {\n    if (n === 1) return 2;\n    if (n === 2) return 3;\n    return countBinaryStrings(n - 1) + countBinaryStrings(n - 2);\n}\nconsole.log(countBinaryStrings(3));  // 5 (010,011,101,110,111? Actually 5)\nconsole.log(countBinaryStrings(4));  // 8,\n// This follows Fibonacci pattern',
  hint: 'Number of binary strings without "00" = F(n+2).'
},
{
  id: 'js_recursion_42',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Catalan numbers.',
  mathSolution: 'C(0)=1; C(n)=sum(C(i)*C(n-1-i) for i=0 to n-1).',
  codeSolution: 'function catalan(n) {\n    if (n === 0) return 1;\n    let sum = 0;\n    for (let i = 0; i < n; i++) {\n        sum += catalan(i) * catalan(n - 1 - i);\n    }\n    return sum;\n}\nconsole.log(catalan(0));  // 1\nconsole.log(catalan(1));  // 1\nconsole.log(catalan(2));  // 2\nconsole.log(catalan(3));  // 5\nconsole.log(catalan(4));  // 14',
  hint: 'Catalan numbers count many combinatorial structures.'
},
{
  id: 'js_recursion_43',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if two strings are anagrams.',
  mathSolution: 'Anagrams if after sorting (or character count) they match.',
  codeSolution: 'function isAnagram(str1, str2) {\n    if (str1.length !== str2.length) return false;\n    if (str1.length === 0) return true;\n    const char = str1[0];\n    const index = str2.indexOf(char);\n    if (index === -1) return false;\n    return isAnagram(str1.slice(1), str2.slice(0, index) + str2.slice(index + 1));\n}\nconsole.log(isAnagram("listen", "silent"));  // true\nconsole.log(isAnagram("hello", "world"));    // false',
  hint: 'Remove matching character from both strings and recurse.'
},
{
  id: 'js_recursion_44',
  topicId: 'js_recursion',
  question: 'Write a recursive function to count occurrences of a character in string.',
  mathSolution: 'Base: empty returns 0; Recursive: (first matches ? 1:0) + count(rest).',
  codeSolution: 'function countChar(str, char) {\n    if (str.length === 0) return 0;\n    const match = str[0] === char ? 1 : 0;\n    return match + countChar(str.slice(1), char);\n}\nconsole.log(countChar("hello world", "l"));    // 3\nconsole.log(countChar("mississippi", "s"));   // 4',
  hint: 'Count = (first char matches ? 1:0) + count of remaining chars.'
},
{
  id: 'js_recursion_45',
  topicId: 'js_recursion',
  question: 'Write a recursive function for rope cutting problem (max pieces).',
  mathSolution: 'Try cutting piece of each length and take max.',
  codeSolution: 'function maxRopePieces(n, a, b, c) {\n    if (n === 0) return 0;\n    if (n < 0) return -1;\n    const result = Math.max(\n        maxRopePieces(n - a, a, b, c),\n        maxRopePieces(n - b, a, b, c),\n        maxRopePieces(n - c, a, b, c)\n    );\n    return result === -1 ? -1 : result + 1;\n}\nconsole.log(maxRopePieces(5, 2, 3, 5));  // 2 (2+3 or 5)\nconsole.log(maxRopePieces(23, 11, 9, 12)); // 2',
  hint: 'Max pieces = 1 + max of (n-length) for each possible cut.'
},
{
  id: 'js_recursion_46',
  topicId: 'js_recursion',
  question: 'Write a recursive function to check if string is a valid parentheses sequence.',
  mathSolution: 'Track balance; Base: empty string returns true if balance=0.',
  codeSolution: 'function isValidParentheses(str, balance = 0) {\n    if (balance < 0) return false;\n    if (str.length === 0) return balance === 0;\n    const newBalance = str[0] === "(" ? balance + 1 : balance - 1;\n    return isValidParentheses(str.slice(1), newBalance);\n}\nconsole.log(isValidParentheses("(()())"));  // true\nconsole.log(isValidParentheses("(()"));     // false\nconsole.log(isValidParentheses("())("));    // false',
  hint: 'Balance increases on "(", decreases on ")", never negative, ends at 0.'
},
{
  id: 'js_recursion_47',
  topicId: 'js_recursion',
  question: 'Write a recursive function for coin change problem (number of ways).',
  mathSolution: 'Ways = ways using first coin + ways without first coin.',
  codeSolution: 'function coinChange(coins, amount, index = 0) {\n    if (amount === 0) return 1;\n    if (amount < 0 || index >= coins.length) return 0;\n    return coinChange(coins, amount - coins[index], index) + \n           coinChange(coins, amount, index + 1);\n}\nconsole.log(coinChange([1, 2, 5], 5));  // 4 (1+1+1+1+1, 1+1+1+2, 1+2+2, 5)',
  hint: 'Two choices: use current coin or skip to next coin.'
},
{
  id: 'js_recursion_48',
  topicId: 'js_recursion',
  question: 'Write a recursive function for maze solving (path finding).',
  mathSolution: 'Try each direction (up, down, left, right) recursively.',
  codeSolution: 'function solveMaze(maze, x = 0, y = 0, path = []) {\n    if (x === maze.length - 1 && y === maze[0].length - 1) {\n        return [...path, [x, y]];\n    }\n    if (x < 0 || y < 0 || x >= maze.length || y >= maze[0].length) return null;\n    if (maze[x][y] === 1 || maze[x][y] === -1) return null;\n    maze[x][y] = -1; // Mark visited\n    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n    for (const [dx, dy] of directions) {\n        const result = solveMaze(maze, x + dx, y + dy, [...path, [x, y]]);\n        if (result) return result;\n    }\n    return null;\n}\nconst maze = [\n    [0, 0, 0, 1],\n    [1, 1, 0, 1],\n    [0, 0, 0, 0],\n    [0, 1, 1, 0]\n];\nconsole.log(solveMaze(maze));  // Path from (0,0) to (3,3)',
  hint: 'Backtracking: try each direction, mark visited cells.'
},
{
  id: 'js_recursion_49',
  topicId: 'js_recursion',
  question: 'Write a recursive function for Sudoku solver.',
  mathSolution: 'Find empty cell, try numbers 1-9, recursively solve rest.',
  codeSolution: 'function solveSudoku(board) {\n    for (let i = 0; i < 9; i++) {\n        for (let j = 0; j < 9; j++) {\n            if (board[i][j] === 0) {\n                for (let num = 1; num <= 9; num++) {\n                    if (isValid(board, i, j, num)) {\n                        board[i][j] = num;\n                        if (solveSudoku(board)) return true;\n                        board[i][j] = 0;\n                    }\n                }\n                return false;\n            }\n        }\n    }\n    return true;\n}\n\nfunction isValid(board, row, col, num) {\n    for (let i = 0; i < 9; i++) {\n        if (board[row][i] === num) return false;\n        if (board[i][col] === num) return false;\n        const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);\n        const boxCol = 3 * Math.floor(col / 3) + (i % 3);\n        if (board[boxRow][boxCol] === num) return false;\n    }\n    return true;\n}\n\nconst sudoku = [\n    [5, 3, 0, 0, 7, 0, 0, 0, 0],\n    [6, 0, 0, 1, 9, 5, 0, 0, 0],\n    [0, 9, 8, 0, 0, 0, 0, 6, 0],\n    // ... rest of board\n];',
  hint: 'Backtracking with constraints checking for Sudoku.'
},
{
  id: 'js_recursion_50',
  topicId: 'js_recursion',
  question: 'Write a recursive function for N-Queens problem.',
  mathSolution: 'Place queen in each row, check conflicts recursively.',
  codeSolution: 'function solveNQueens(n) {\n    const result = [];\n    const board = Array(n).fill().map(() => Array(n).fill("."));\n    \n    function isSafe(row, col) {\n        // Check column\n        for (let i = 0; i < row; i++) {\n            if (board[i][col] === "Q") return false;\n        }\n        // Check diagonal up-left\n        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {\n            if (board[i][j] === "Q") return false;\n        }\n        // Check diagonal up-right\n        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {\n            if (board[i][j] === "Q") return false;\n        }\n        return true;\n    }\n    \n    function backtrack(row) {\n        if (row === n) {\n            result.push(board.map(r => r.join("")));\n            return;\n        }\n        for (let col = 0; col < n; col++) {\n            if (isSafe(row, col)) {\n                board[row][col] = "Q";\n                backtrack(row + 1);\n                board[row][col] = ".";\n            }\n        }\n    }\n    \n    backtrack(0);\n    return result;\n}\nconsole.log(solveNQueens(4));  // 2 solutions for 4x4 board\nconsole.log(solveNQueens(8).length);  // 92 solutions for 8x8',
  hint: 'N-Queens: place one queen per row, check conflicts diagonally and vertically.'
}
);