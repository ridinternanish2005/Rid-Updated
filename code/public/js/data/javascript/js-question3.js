QuizData.questions.push(
  //string ,objeccct,oop ,arrowfunction
{
  id: 'js_strings_1',
  topicId: 'js_strings',
  question: 'Create a string using single quotes.',
  mathSolution: 'Use single quotes to define string literal.',
  codeSolution: 'const message = \'Hello World\';\nconsole.log(message);  // Hello World',
  hint: 'Strings can use single quotes (\').'
},
{
  id: 'js_strings_2',
  topicId: 'js_strings',
  question: 'Create a string using double quotes.',
  mathSolution: 'Use double quotes to define string literal.',
  codeSolution: 'const message = "Hello World";\nconsole.log(message);  // Hello World',
  hint: 'Strings can use double quotes (").'
},
{
  id: 'js_strings_3',
  topicId: 'js_strings',
  question: 'Create a string using backticks (template literals).',
  mathSolution: 'Use backticks for template literals.',
  codeSolution: 'const message = `Hello World`;\nconsole.log(message);  // Hello World',
  hint: 'Template literals use backticks (`).'
},
{
  id: 'js_strings_4',
  topicId: 'js_strings',
  question: 'Get length of a string using length property.',
  mathSolution: 'length property returns number of characters.',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.length);  // 10',
  hint: 'Use `string.length` property.'
},
{
  id: 'js_strings_5',
  topicId: 'js_strings',
  question: 'Access character at specific index using bracket notation.',
  mathSolution: 'Use [index] to access character (0-indexed).',
  codeSolution: 'const str = "Hello";\nconsole.log(str[0]);  // H\nconsole.log(str[4]);  // o',
  hint: 'Strings are zero-indexed like arrays.'
},
{
  id: 'js_strings_6',
  topicId: 'js_strings',
  question: 'Access character using charAt() method.',
  mathSolution: 'charAt() returns character at specified index.',
  codeSolution: 'const str = "Hello";\nconsole.log(str.charAt(1));  // e\nconsole.log(str.charAt(10)); // "" (empty string)',
  hint: '`charAt()` returns empty string for invalid index.'
},
{
  id: 'js_strings_7',
  topicId: 'js_strings',
  question: 'Convert string to uppercase using toUpperCase() method.',
  mathSolution: 'toUpperCase() returns new uppercase string.',
  codeSolution: 'const str = "Hello World";\nconst upper = str.toUpperCase();\nconsole.log(upper);  // HELLO WORLD',
  hint: '`toUpperCase()` doesn\'t modify original string.'
},
{
  id: 'js_strings_8',
  topicId: 'js_strings',
  question: 'Convert string to lowercase using toLowerCase() method.',
  mathSolution: 'toLowerCase() returns new lowercase string.',
  codeSolution: 'const str = "HELLO WORLD";\nconst lower = str.toLowerCase();\nconsole.log(lower);  // hello world',
  hint: '`toLowerCase()` returns new string.'
},
{
  id: 'js_strings_9',
  topicId: 'js_strings',
  question: 'Concatenate strings using + operator.',
  mathSolution: '+ operator joins strings together.',
  codeSolution: 'const firstName = "John";\nconst lastName = "Doe";\nconst fullName = firstName + " " + lastName;\nconsole.log(fullName);  // John Doe',
  hint: 'Use `+` to combine strings.'
},
{
  id: 'js_strings_10',
  topicId: 'js_strings',
  question: 'Concatenate strings using concat() method.',
  mathSolution: 'concat() joins strings and returns new string.',
  codeSolution: 'const str1 = "Hello";\nconst str2 = "World";\nconst result = str1.concat(" ", str2);\nconsole.log(result);  // Hello World',
  hint: '`concat()` can take multiple arguments.'
},
{
  id: 'js_strings_11',
  topicId: 'js_strings',
  question: 'Use template literals for string interpolation.',
  mathSolution: 'Embed expressions using ${} in backticks.',
  codeSolution: 'const name = "Alice";\nconst age = 25;\nconst message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);  // My name is Alice and I am 25 years old.',
  hint: 'Use `${variable}` inside backticks.'
},
{
  id: 'js_strings_12',
  topicId: 'js_strings',
  question: 'Use template literals for multi-line strings.',
  mathSolution: 'Backticks preserve line breaks.',
  codeSolution: 'const multiLine = `This is line 1\nThis is line 2\nThis is line 3`;\nconsole.log(multiLine);\n// This is line 1\n// This is line 2\n// This is line 3',
  hint: 'Line breaks are preserved in template literals.'
},
{
  id: 'js_strings_13',
  topicId: 'js_strings',
  question: 'Find index of substring using indexOf() method.',
  mathSolution: 'indexOf() returns first occurrence index or -1.',
  codeSolution: 'const str = "Hello World Hello";\nconsole.log(str.indexOf("World"));  // 6\nconsole.log(str.indexOf("xyz"));    // -1',
  hint: '`indexOf()` returns -1 if not found.'
},
{
  id: 'js_strings_14',
  topicId: 'js_strings',
  question: 'Find last index of substring using lastIndexOf() method.',
  mathSolution: 'lastIndexOf() returns last occurrence index.',
  codeSolution: 'const str = "Hello World Hello";\nconsole.log(str.lastIndexOf("Hello"));  // 12\nconsole.log(str.lastIndexOf("World"));  // 6',
  hint: '`lastIndexOf()` searches from end.'
},
{
  id: 'js_strings_15',
  topicId: 'js_strings',
  question: 'Check if string includes substring using includes() method.',
  mathSolution: 'includes() returns true/false.',
  codeSolution: 'const str = "JavaScript is awesome";\nconsole.log(str.includes("Script"));  // true\nconsole.log(str.includes("Python"));  // false',
  hint: '`includes()` returns boolean.'
},
{
  id: 'js_strings_16',
  topicId: 'js_strings',
  question: 'Check if string starts with substring using startsWith() method.',
  mathSolution: 'startsWith() checks beginning of string.',
  codeSolution: 'const str = "Hello World";\nconsole.log(str.startsWith("Hello"));  // true\nconsole.log(str.startsWith("World"));  // false',
  hint: '`startsWith()` checks the beginning.'
},
{
  id: 'js_strings_17',
  topicId: 'js_strings',
  question: 'Check if string ends with substring using endsWith() method.',
  mathSolution: 'endsWith() checks end of string.',
  codeSolution: 'const str = "Hello World";\nconsole.log(str.endsWith("World"));  // true\nconsole.log(str.endsWith("Hello"));  // false',
  hint: '`endsWith()` checks the ending.'
},
{
  id: 'js_strings_18',
  topicId: 'js_strings',
  question: 'Extract substring using slice() method.',
  mathSolution: 'slice(start, end) returns substring (end not included).',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.slice(0, 4));   // Java\nconsole.log(str.slice(4));      // Script\nconsole.log(str.slice(-6));     // Script (negative index)',
  hint: '`slice()` supports negative indexes.'
},
{
  id: 'js_strings_19',
  topicId: 'js_strings',
  question: 'Extract substring using substring() method.',
  mathSolution: 'substring(start, end) similar to slice but no negatives.',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.substring(0, 4));   // Java\nconsole.log(str.substring(4));      // Script\nconsole.log(str.substring(4, 0));   // Java (swaps indexes)',
  hint: '`substring()` swaps if start > end.'
},
{
  id: 'js_strings_20',
  topicId: 'js_strings',
  question: 'Extract substring using substr() method (deprecated but still used).',
  mathSolution: 'substr(start, length) extracts based on length.',
  codeSolution: 'const str = "JavaScript";\nconsole.log(str.substr(4, 6));   // Script\nconsole.log(str.substr(-6, 6));  // Script (negative start)',
  hint: '`substr()` takes length, not end index.'
},
{
  id: 'js_strings_21',
  topicId: 'js_strings',
  question: 'Split string into array using split() method.',
  mathSolution: 'split(separator) divides string into array.',
  codeSolution: 'const str = "apple,banana,orange";\nconst fruits = str.split(",");\nconsole.log(fruits);  // ["apple", "banana", "orange"]\nconst chars = "hello".split("");\nconsole.log(chars);   // ["h","e","l","l","o"]',
  hint: '`split()` converts string to array.'
},
{
  id: 'js_strings_22',
  topicId: 'js_strings',
  question: 'Replace first occurrence using replace() method.',
  mathSolution: 'replace(search, replacement) replaces first match.',
  codeSolution: 'const str = "Hello World Hello";\nconst replaced = str.replace("Hello", "Hi");\nconsole.log(replaced);  // Hi World Hello',
  hint: '`replace()` only replaces first match by default.'
},
{
  id: 'js_strings_23',
  topicId: 'js_strings',
  question: 'Replace all occurrences using replaceAll() method.',
  mathSolution: 'replaceAll() replaces all matches.',
  codeSolution: 'const str = "Hello World Hello";\nconst replaced = str.replaceAll("Hello", "Hi");\nconsole.log(replaced);  // Hi World Hi',
  hint: '`replaceAll()` replaces every occurrence.'
},
{
  id: 'js_strings_24',
  topicId: 'js_strings',
  question: 'Replace using regular expression with global flag.',
  mathSolution: 'Use /pattern/g in replace() for all matches.',
  codeSolution: 'const str = "Hello World Hello";\nconst replaced = str.replace(/Hello/g, "Hi");\nconsole.log(replaced);  // Hi World Hi',
  hint: 'Use `/pattern/g` for global replacement.'
},
{
  id: 'js_strings_25',
  topicId: 'js_strings',
  question: 'Remove whitespace from both ends using trim() method.',
  mathSolution: 'trim() removes leading/trailing whitespace.',
  codeSolution: 'const str = "  Hello World  ";\nconst trimmed = str.trim();\nconsole.log(trimmed);  // "Hello World"',
  hint: '`trim()` removes spaces, tabs, newlines.'
},
{
  id: 'js_strings_26',
  topicId: 'js_strings',
  question: 'Remove whitespace from start using trimStart() method.',
  mathSolution: 'trimStart() removes leading whitespace only.',
  codeSolution: 'const str = "  Hello World  ";\nconst trimmed = str.trimStart();\nconsole.log(trimmed);  // "Hello World  "',
  hint: '`trimStart()` removes only leading spaces.'
},
{
  id: 'js_strings_27',
  topicId: 'js_strings',
  question: 'Remove whitespace from end using trimEnd() method.',
  mathSolution: 'trimEnd() removes trailing whitespace only.',
  codeSolution: 'const str = "  Hello World  ";\nconst trimmed = str.trimEnd();\nconsole.log(trimmed);  // "  Hello World"',
  hint: '`trimEnd()` removes only trailing spaces.'
},
{
  id: 'js_strings_28',
  topicId: 'js_strings',
  question: 'Repeat string multiple times using repeat() method.',
  mathSolution: 'repeat(count) returns string repeated count times.',
  codeSolution: 'const str = "Ha";\nconsole.log(str.repeat(3));  // HaHaHa\nconsole.log("=".repeat(10)); // ==========',
  hint: '`repeat()` multiplies the string.'
},
{
  id: 'js_strings_29',
  topicId: 'js_strings',
  question: 'Pad string to certain length from start using padStart().',
  mathSolution: 'padStart(targetLength, padString) pads at beginning.',
  codeSolution: 'const str = "5";\nconsole.log(str.padStart(3, "0"));  // "005"\nconsole.log("123".padStart(5, "*")); // "**123"',
  hint: '`padStart()` adds characters to the left.'
},
{
  id: 'js_strings_30',
  topicId: 'js_strings',
  question: 'Pad string to certain length from end using padEnd().',
  mathSolution: 'padEnd(targetLength, padString) pads at end.',
  codeSolution: 'const str = "5";\nconsole.log(str.padEnd(3, "0"));  // "500"\nconsole.log("123".padEnd(5, "*")); // "123**"',
  hint: '`padEnd()` adds characters to the right.'
},
{
  id: 'js_strings_31',
  topicId: 'js_strings',
  question: 'Extract character code using charCodeAt() method.',
  mathSolution: 'charCodeAt() returns Unicode of character.',
  codeSolution: 'const str = "ABC";\nconsole.log(str.charCodeAt(0));  // 65 (A)\nconsole.log(str.charCodeAt(1));  // 66 (B)\nconsole.log(str.charCodeAt(2));  // 67 (C)',
  hint: '`charCodeAt()` returns UTF-16 code unit.'
},
{
  id: 'js_strings_32',
  topicId: 'js_strings',
  question: 'Create character from Unicode using fromCharCode() method.',
  mathSolution: 'String.fromCharCode() converts code to character.',
  codeSolution: 'console.log(String.fromCharCode(65));   // A\nconsole.log(String.fromCharCode(66, 67)); // BC\nconst word = String.fromCharCode(72, 101, 108, 108, 111);\nconsole.log(word);  // Hello',
  hint: '`String.fromCharCode()` is a static method.'
},
{
  id: 'js_strings_33',
  topicId: 'js_strings',
  question: 'Check if string contains only whitespace using trim().',
  mathSolution: 'Check if trimmed string is empty.',
  codeSolution: 'function isBlank(str) {\n    return str.trim() === "";\n}\nconsole.log(isBlank("   "));   // true\nconsole.log(isBlank("Hello")); // false',
  hint: '`trim().length === 0` checks for only spaces.'
},
{
  id: 'js_strings_34',
  topicId: 'js_strings',
  question: 'Reverse a string using split(), reverse(), join().',
  mathSolution: 'Convert to array, reverse, join back.',
  codeSolution: 'const str = "hello";\nconst reversed = str.split("").reverse().join("");\nconsole.log(reversed);  // "olleh"',
  hint: '`split("")` → array → `reverse()` → `join("")`'
},
{
  id: 'js_strings_35',
  topicId: 'js_strings',
  question: 'Check if string is palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'function isPalindrome(str) {\n    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n    return cleaned === cleaned.split("").reverse().join("");\n}\nconsole.log(isPalindrome("racecar"));  // true\nconsole.log(isPalindrome("hello"));    // false',
  hint: 'Remove non-alphanumeric characters and compare.'
},
{
  id: 'js_strings_36',
  topicId: 'js_strings',
  question: 'Count occurrences of substring in string.',
  mathSolution: 'Use split() or indexOf in loop.',
  codeSolution: 'function countOccurrences(str, sub) {\n    return str.split(sub).length - 1;\n}\nconsole.log(countOccurrences("hello hello hello", "hello"));  // 3\nconsole.log(countOccurrences("mississippi", "ss"));  // 2',
  hint: '`split(sub).length - 1` counts occurrences.'
},
{
  id: 'js_strings_37',
  topicId: 'js_strings',
  question: 'Capitalize first letter of string.',
  mathSolution: 'Extract first char, uppercase, then add rest.',
  codeSolution: 'function capitalize(str) {\n    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();\n}\nconsole.log(capitalize("hello"));   // Hello\nconsole.log(capitalize("WORLD"));   // World',
  hint: 'Use `charAt(0).toUpperCase() + slice(1).toLowerCase()`.'
},
{
  id: 'js_strings_38',
  topicId: 'js_strings',
  question: 'Capitalize first letter of each word in string.',
  mathSolution: 'Split into words, capitalize each, join back.',
  codeSolution: 'function capitalizeWords(str) {\n    return str.split(" ").map(word => \n        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()\n    ).join(" ");\n}\nconsole.log(capitalizeWords("hello world javascript"));  // Hello World Javascript',
  hint: 'Split by space, map capitalize, join.'
},
{
  id: 'js_strings_39',
  topicId: 'js_strings',
  question: 'Count vowels in a string.',
  mathSolution: 'Check each character against vowel set.',
  codeSolution: 'function countVowels(str) {\n    const vowels = "aeiouAEIOU";\n    let count = 0;\n    for (let char of str) {\n        if (vowels.includes(char)) count++;\n    }\n    return count;\n}\nconsole.log(countVowels("Hello World"));  // 3 (e, o, o)\nconsole.log(countVowels("JavaScript"));   // 3 (a, a, i)',
  hint: 'Use `includes()` to check for vowels.'
},
{
  id: 'js_strings_40',
  topicId: 'js_strings',
  question: 'Remove all spaces from string.',
  mathSolution: 'Use replaceAll() or split/join.',
  codeSolution: 'const str = "Hello World JavaScript";\nconst noSpaces = str.replaceAll(" ", "");\nconsole.log(noSpaces);  // HelloWorldJavaScript\n\n// Using split/join\nconst noSpaces2 = str.split(" ").join("");\nconsole.log(noSpaces2);  // HelloWorldJavaScript',
  hint: '`replaceAll(" ", "")` removes all spaces.'
},
//object
{
  id: 'js_objects_1',
  topicId: 'js_objects',
  question: 'Create an object using object literal syntax with name and age properties.',
  mathSolution: 'Use curly braces with key-value pairs.',
  codeSolution: 'const person = {\n    name: "John",\n    age: 30\n};\nconsole.log(person);  // { name: "John", age: 30 }',
  hint: 'Use `{ key: value }` syntax.'
},
{
  id: 'js_objects_2',
  topicId: 'js_objects',
  question: 'Create an object using Object() constructor.',
  mathSolution: 'Use new Object() to create empty object then add properties.',
  codeSolution: 'const person = new Object();\nperson.name = "Alice";\nperson.age = 25;\nconsole.log(person);  // { name: "Alice", age: 25 }',
  hint: '`new Object()` creates empty object.'
},
{
  id: 'js_objects_3',
  topicId: 'js_objects',
  question: 'Access object properties using dot notation.',
  mathSolution: 'Use object.propertyName to access value.',
  codeSolution: 'const car = { brand: "Toyota", year: 2020 };\nconsole.log(car.brand);  // Toyota\nconsole.log(car.year);   // 2020',
  hint: 'Use `.` followed by property name.'
},
{
  id: 'js_objects_4',
  topicId: 'js_objects',
  question: 'Access object properties using bracket notation.',
  mathSolution: 'Use object["propertyName"] with string key.',
  codeSolution: 'const car = { brand: "Honda", year: 2021 };\nconsole.log(car["brand"]);  // Honda\nconsole.log(car["year"]);   // 2021',
  hint: 'Use `["property"]` with quotes.'
},
{
  id: 'js_objects_5',
  topicId: 'js_objects',
  question: 'Add new property to existing object using dot notation.',
  mathSolution: 'Assign value to new property name.',
  codeSolution: 'const person = { name: "John" };\nperson.age = 30;\nperson.city = "New York";\nconsole.log(person);  // { name: "John", age: 30, city: "New York" }',
  hint: 'Simply assign to new property name.'
},
{
  id: 'js_objects_6',
  topicId: 'js_objects',
  question: 'Update existing property value in object.',
  mathSolution: 'Assign new value to existing property.',
  codeSolution: 'const person = { name: "John", age: 25 };\nperson.age = 30;\nconsole.log(person);  // { name: "John", age: 30 }',
  hint: 'Assign new value to property.'
},
{
  id: 'js_objects_7',
  topicId: 'js_objects',
  question: 'Delete property from object using delete operator.',
  mathSolution: 'delete object.property removes property.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\ndelete person.age;\nconsole.log(person);  // { name: "John", city: "NYC" }',
  hint: 'Use `delete object.property`.'
},
{
  id: 'js_objects_8',
  topicId: 'js_objects',
  question: 'Check if property exists using in operator.',
  mathSolution: '"property" in object returns boolean.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconsole.log("name" in person);  // true\nconsole.log("city" in person);  // false',
  hint: 'Use `"property" in object`.'
},
{
  id: 'js_objects_9',
  topicId: 'js_objects',
  question: 'Check if property exists using hasOwnProperty() method.',
  mathSolution: 'object.hasOwnProperty("property") checks own properties.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconsole.log(person.hasOwnProperty("name"));  // true\nconsole.log(person.hasOwnProperty("toString"));  // false (inherited)',
  hint: '`hasOwnProperty()` ignores inherited properties.'
},
{
  id: 'js_objects_10',
  topicId: 'js_objects',
  question: 'Get all keys of object using Object.keys() method.',
  mathSolution: 'Object.keys() returns array of property names.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nconst keys = Object.keys(person);\nconsole.log(keys);  // ["name", "age", "city"]',
  hint: '`Object.keys()` returns array of keys.'
},
{
  id: 'js_objects_11',
  topicId: 'js_objects',
  question: 'Get all values of object using Object.values() method.',
  mathSolution: 'Object.values() returns array of property values.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nconst values = Object.values(person);\nconsole.log(values);  // ["John", 30, "NYC"]',
  hint: '`Object.values()` returns array of values.'
},
{
  id: 'js_objects_12',
  topicId: 'js_objects',
  question: 'Get key-value pairs using Object.entries() method.',
  mathSolution: 'Object.entries() returns array of [key, value] pairs.',
  codeSolution: 'const person = { name: "John", age: 30 };\nconst entries = Object.entries(person);\nconsole.log(entries);  // [["name", "John"], ["age", 30]]',
  hint: '`Object.entries()` returns 2D array of pairs.'
},
{
  id: 'js_objects_13',
  topicId: 'js_objects',
  question: 'Iterate over object properties using for...in loop.',
  mathSolution: 'for...in iterates over enumerable properties.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nfor (let key in person) {\n    console.log(`${key}: ${person[key]}`);\n}',
  hint: 'Use `for (let key in object)`.'
},
{
  id: 'js_objects_14',
  topicId: 'js_objects',
  question: 'Iterate over object using Object.keys() with forEach().',
  mathSolution: 'Get keys array then iterate.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nObject.keys(person).forEach(key => {\n    console.log(`${key}: ${person[key]}`);\n});',
  hint: 'Combine `Object.keys()` and `forEach()`.'
},
{
  id: 'js_objects_15',
  topicId: 'js_objects',
  question: 'Iterate using Object.entries() with for...of and destructuring.',
  mathSolution: 'Destructure [key, value] pairs directly.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nfor (let [key, value] of Object.entries(person)) {\n    console.log(`${key}: ${value}`);\n}',
  hint: 'Use destructuring in for...of loop.'
},
{
  id: 'js_objects_16',
  topicId: 'js_objects',
  question: 'Compute property names dynamically using computed property names.',
  mathSolution: 'Use [expression] as property name in object literal.',
  codeSolution: 'const propName = "dynamicKey";\nconst obj = {\n    [propName]: "dynamic value",\n    [`computed_${Date.now()}`]: "timestamped"\n};\nconsole.log(obj);',
  hint: 'Use `[expression]` for dynamic keys.'
},
{
  id: 'js_objects_17',
  topicId: 'js_objects',
  question: 'Use property value shorthand (same name as variable).',
  mathSolution: 'If variable name matches property name, can use shorthand.',
  codeSolution: 'const name = "Alice";\nconst age = 25;\nconst person = { name, age };\nconsole.log(person);  // { name: "Alice", age: 25 }',
  hint: 'Omit value when variable and property name match.'
},
{
  id: 'js_objects_18',
  topicId: 'js_objects',
  question: 'Copy object using spread operator (shallow copy).',
  mathSolution: '{...original} creates shallow copy.',
  codeSolution: 'const original = { name: "John", age: 30 };\nconst copy = { ...original };\ncopy.age = 31;\nconsole.log(original.age);  // 30 (unchanged)\nconsole.log(copy.age);      // 31',
  hint: 'Use `{...obj}` for shallow copy.'
},
{
  id: 'js_objects_19',
  topicId: 'js_objects',
  question: 'Merge two objects using spread operator.',
  mathSolution: '{...obj1, ...obj2} merges properties (later overwrites earlier).',
  codeSolution: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 3, c: 4 };\nconst merged = { ...obj1, ...obj2 };\nconsole.log(merged);  // { a: 1, b: 3, c: 4 }',
  hint: 'Later properties override earlier ones.'
},
{
  id: 'js_objects_20',
  topicId: 'js_objects',
  question: 'Merge objects using Object.assign() method.',
  mathSolution: 'Object.assign(target, ...sources) merges objects.',
  codeSolution: 'const obj1 = { a: 1, b: 2 };\nconst obj2 = { c: 3, d: 4 };\nconst merged = Object.assign({}, obj1, obj2);\nconsole.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }',
  hint: 'Use `Object.assign(target, source)`.'
},
{
  id: 'js_objects_21',
  topicId: 'js_objects',
  question: 'Add method to object (function as property).',
  mathSolution: 'Assign function to property name.',
  codeSolution: 'const calculator = {\n    add: function(a, b) {\n        return a + b;\n    }\n};\nconsole.log(calculator.add(5, 3));  // 8',
  hint: 'Methods are functions stored as properties.'
},
{
  id: 'js_objects_22',
  topicId: 'js_objects',
  question: 'Use method shorthand syntax in object literal.',
  mathSolution: 'Omit function keyword and colon.',
  codeSolution: 'const calculator = {\n    add(a, b) {\n        return a + b;\n    },\n    multiply(a, b) {\n        return a * b;\n    }\n};\nconsole.log(calculator.add(5, 3));      // 8\nconsole.log(calculator.multiply(5, 3)); // 15',
  hint: 'Method shorthand: `methodName() {}`.'
},
{
  id: 'js_objects_23',
  topicId: 'js_objects',
  question: 'Use arrow function as object method (caution with this).',
  mathSolution: 'Arrow functions don\'t have their own this.',
  codeSolution: 'const obj = {\n    name: "My Object",\n    regularMethod() {\n        console.log(this.name);  // "My Object"\n    },\n    arrowMethod: () => {\n        console.log(this.name);  // undefined (lexical this)\n    }\n};\nobj.regularMethod();\nobj.arrowMethod();',
  hint: 'Arrow functions inherit `this` from outer scope.'
},
{
  id: 'js_objects_24',
  topicId: 'js_objects',
  question: 'Access object method that uses "this" to access other properties.',
  mathSolution: 'Use this.propertyName inside method.',
  codeSolution: 'const person = {\n    firstName: "John",\n    lastName: "Doe",\n    fullName() {\n        return `${this.firstName} ${this.lastName}`;\n    }\n};\nconsole.log(person.fullName());  // John Doe',
  hint: 'Use `this` to access object\'s own properties.'
},
{
  id: 'js_objects_25',
  topicId: 'js_objects',
  question: 'Freeze object using Object.freeze() (cannot modify properties).',
  mathSolution: 'Object.freeze() makes object immutable.',
  codeSolution: 'const obj = { name: "John", age: 30 };\nObject.freeze(obj);\nobj.age = 31;  // Fails silently (or error in strict mode)\nconsole.log(obj.age);  // 30 (unchanged)',
  hint: '`Object.freeze()` prevents modifications.'
},
{
  id: 'js_objects_26',
  topicId: 'js_objects',
  question: 'Seal object using Object.seal() (can modify existing, cannot add/delete).',
  mathSolution: 'Object.seal() prevents adding/deleting properties.',
  codeSolution: 'const obj = { name: "John", age: 30 };\nObject.seal(obj);\nobj.age = 31;     // OK (modify existing)\nobj.city = "NYC"; // Fails (cannot add)\ndelete obj.name;  // Fails (cannot delete)\nconsole.log(obj); // { name: "John", age: 31 }',
  hint: '`Object.seal()` allows modification but not addition/deletion.'
},
{
  id: 'js_objects_27',
  topicId: 'js_objects',
  question: 'Prevent extension using Object.preventExtensions().',
  mathSolution: 'Cannot add new properties, but can modify/delete existing.',
  codeSolution: 'const obj = { name: "John", age: 30 };\nObject.preventExtensions(obj);\nobj.age = 31;     // OK (modify)\nobj.city = "NYC"; // Fails (cannot add)\ndelete obj.name;  // OK (can delete)\nconsole.log(obj); // { age: 31 }',
  hint: '`preventExtensions()` stops new properties only.'
},
{
  id: 'js_objects_28',
  topicId: 'js_objects',
  question: 'Check if object is frozen using Object.isFrozen().',
  mathSolution: 'Returns true if object is frozen.',
  codeSolution: 'const obj1 = { name: "John" };\nconst obj2 = { name: "Jane" };\nObject.freeze(obj2);\nconsole.log(Object.isFrozen(obj1));  // false\nconsole.log(Object.isFrozen(obj2));  // true',
  hint: '`Object.isFrozen()` checks frozen status.'
},
{
  id: 'js_objects_29',
  topicId: 'js_objects',
  question: 'Define property with custom descriptor using Object.defineProperty().',
  mathSolution: 'Define property with configurable, enumerable, writable attributes.',
  codeSolution: 'const obj = {};\nObject.defineProperty(obj, "hidden", {\n    value: "secret",\n    enumerable: false,  // won\'t show in Object.keys\n    writable: false,    // read-only\n    configurable: false\n});\nconsole.log(obj.hidden);  // secret\nconsole.log(Object.keys(obj));  // [] (hidden not enumerated)',
  hint: 'Property descriptors control property behavior.'
},
{
  id: 'js_objects_30',
  topicId: 'js_objects',
  question: 'Define multiple properties using Object.defineProperties().',
  mathSolution: 'Define multiple properties with descriptors at once.',
  codeSolution: 'const obj = {};\nObject.defineProperties(obj, {\n    name: { value: "John", writable: true },\n    age: { value: 30, writable: false },\n    city: { value: "NYC", enumerable: true }\n});\nconsole.log(obj);  // { city: "NYC", name: "John", age: 30 }',
  hint: '`defineProperties()` defines multiple properties.'
},
{
  id: 'js_objects_31',
  topicId: 'js_objects',
  question: 'Get property descriptor using Object.getOwnPropertyDescriptor().',
  mathSolution: 'Returns descriptor object for specified property.',
  codeSolution: 'const obj = { name: "John" };\nconst descriptor = Object.getOwnPropertyDescriptor(obj, "name");\nconsole.log(descriptor);\n// { value: "John", writable: true, enumerable: true, configurable: true }',
  hint: 'Use to inspect property attributes.'
},
{
  id: 'js_objects_32',
  topicId: 'js_objects',
  question: 'Create object with null prototype (no inheritance).',
  mathSolution: 'Object.create(null) creates object without prototype.',
  codeSolution: 'const cleanObj = Object.create(null);\ncleanObj.name = "John";\nconsole.log(cleanObj.name);  // John\nconsole.log(cleanObj.toString);  // undefined (no prototype)',
  hint: '`Object.create(null)` removes prototype chain.'
},
{
  id: 'js_objects_33',
  topicId: 'js_objects',
  question: 'Create object with specified prototype using Object.create().',
  mathSolution: 'Object.create(proto) creates object inheriting from proto.',
  codeSolution: 'const parent = { greet() { return "Hello"; } };\nconst child = Object.create(parent);\nchild.name = "Alice";\nconsole.log(child.greet());  // Hello (inherited)\nconsole.log(child.name);     // Alice (own)',
  hint: '`Object.create()` sets prototype of new object.'
},
{
  id: 'js_objects_34',
  topicId: 'js_objects',
  question: 'Get prototype of object using Object.getPrototypeOf().',
  mathSolution: 'Returns prototype (internal [[Prototype]]).',
  codeSolution: 'const parent = { greet() { return "Hi"; } };\nconst child = Object.create(parent);\nconst proto = Object.getPrototypeOf(child);\nconsole.log(proto === parent);  // true\nconsole.log(proto.greet());     // Hi',
  hint: '`getPrototypeOf()` returns prototype object.'
},
{
  id: 'js_objects_35',
  topicId: 'js_objects',
  question: 'Set prototype of object using Object.setPrototypeOf().',
  mathSolution: 'Changes prototype of existing object.',
  codeSolution: 'const obj = { name: "John" };\nconst proto = { greet() { return "Hello"; } };\nObject.setPrototypeOf(obj, proto);\nconsole.log(obj.greet());  // Hello\nconsole.log(obj.name);     // John',
  hint: '`setPrototypeOf()` changes object\'s prototype.'
},
{
  id: 'js_objects_36',
  topicId: 'js_objects',
  question: 'Check if object has own property (not inherited).',
  mathSolution: 'Use hasOwnProperty() to check own properties.',
  codeSolution: 'const parent = { inherited: "from parent" };\nconst child = Object.create(parent);\nchild.own = "own property";\nconsole.log(child.hasOwnProperty("own"));        // true\nconsole.log(child.hasOwnProperty("inherited"));  // false',
  hint: '`hasOwnProperty()` ignores inherited properties.'
},
{
  id: 'js_objects_37',
  topicId: 'js_objects',
  question: 'Get all own property names including non-enumerable using getOwnPropertyNames().',
  mathSolution: 'Returns array of all own property names (including non-enumerable).',
  codeSolution: 'const obj = {};\nObject.defineProperty(obj, "hidden", { value: "secret", enumerable: false });\nobj.visible = "public";\nconsole.log(Object.keys(obj));                    // ["visible"]\nconsole.log(Object.getOwnPropertyNames(obj));     // ["hidden", "visible"]',
  hint: '`getOwnPropertyNames()` includes non-enumerable properties.'
},
{
  id: 'js_objects_38',
  topicId: 'js_objects',
  question: 'Get own property symbols using Object.getOwnPropertySymbols().',
  mathSolution: 'Returns array of symbol properties.',
  codeSolution: 'const sym1 = Symbol("id");\nconst sym2 = Symbol("key");\nconst obj = {\n    [sym1]: "symbol value 1",\n    [sym2]: "symbol value 2",\n    regular: "normal"\n};\nconst symbols = Object.getOwnPropertySymbols(obj);\nconsole.log(symbols);  // [Symbol(id), Symbol(key)]\nconsole.log(obj[symbols[0]]);  // symbol value 1',
  hint: 'Symbol properties are not included in Object.keys().'
},
{
  id: 'js_objects_39',
  topicId: 'js_objects',
  question: 'Use destructuring to extract properties from object.',
  mathSolution: 'Use {prop1, prop2} = object syntax.',
  codeSolution: 'const person = { name: "John", age: 30, city: "NYC" };\nconst { name, age } = person;\nconsole.log(name);  // John\nconsole.log(age);   // 30',
  hint: 'Use `{ property1, property2 } = object`.'
},
{
  id: 'js_objects_40',
  topicId: 'js_objects',
  question: 'Use destructuring with renaming properties.',
  mathSolution: '{oldName: newName} syntax renames while destructuring.',
  codeSolution: 'const person = { firstName: "John", lastName: "Doe" };\nconst { firstName: fName, lastName: lName } = person;\nconsole.log(fName);  // John\nconsole.log(lName);  // Doe',
  hint: 'Use `{ oldName: newName }` to rename variables.'
},
//oop
{
  id: 'js_oop_1',
  topicId: 'js_oop',
  question: 'Create a class with constructor to initialize properties.',
  mathSolution: 'Use class keyword with constructor method.',
  codeSolution: 'class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nconst john = new Person("John", 30);\nconsole.log(john.name);  // John\nconsole.log(john.age);   // 30',
  hint: 'Constructor runs automatically when creating new instance.'
},
{
  id: 'js_oop_2',
  topicId: 'js_oop',
  question: 'Add method to class using prototype or class syntax.',
  mathSolution: 'Methods defined inside class are added to prototype.',
  codeSolution: 'class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    greet() {\n        return `Hello, my name is ${this.name}`;\n    }\n    \n    birthday() {\n        this.age++;\n        return this.age;\n    }\n}\n\nconst john = new Person("John", 30);\nconsole.log(john.greet());     // Hello, my name is John\nconsole.log(john.birthday());  // 31',
  hint: 'Class methods are shared across all instances via prototype.'
},
{
  id: 'js_oop_3',
  topicId: 'js_oop',
  question: 'Use static methods that belong to class, not instances.',
  mathSolution: 'Static keyword creates class-level methods.',
  codeSolution: 'class MathUtils {\n    static add(a, b) {\n        return a + b;\n    }\n    \n    static multiply(a, b) {\n        return a * b;\n    }\n    \n    static PI = 3.14159;\n}\n\nconsole.log(MathUtils.add(5, 3));      // 8\nconsole.log(MathUtils.multiply(4, 2)); // 8\nconsole.log(MathUtils.PI);             // 3.14159\n\n// const utils = new MathUtils();\n// utils.add(5, 3);  // TypeError: utils.add is not a function',
  hint: 'Static methods are called on class, not instances.'
},
{
  id: 'js_oop_4',
  topicId: 'js_oop',
  question: 'Use static properties (class fields).',
  mathSolution: 'Static fields belong to class itself.',
  codeSolution: 'class Counter {\n    static count = 0;\n    \n    static increment() {\n        this.count++;\n        return this.count;\n    }\n    \n    static getCount() {\n        return this.count;\n    }\n}\n\nconsole.log(Counter.count);        // 0\nCounter.increment();\nCounter.increment();\nconsole.log(Counter.getCount());   // 2\nconsole.log(Counter.count);        // 2',
  hint: 'Static properties track class-level state.'
},
{
  id: 'js_oop_5',
  topicId: 'js_oop',
  question: 'Create inheritance using extends keyword.',
  mathSolution: 'Child class extends parent class with super().',
  codeSolution: 'class Animal {\n    constructor(name) {\n        this.name = name;\n    }\n    \n    speak() {\n        return `${this.name} makes a sound`;\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name, breed) {\n        super(name);  // Call parent constructor\n        this.breed = breed;\n    }\n    \n    speak() {\n        return `${this.name} barks loudly!`;\n    }\n    \n    getBreed() {\n        return this.breed;\n    }\n}\n\nconst rex = new Dog("Rex", "German Shepherd");\nconsole.log(rex.speak());     // Rex barks loudly!\nconsole.log(rex.getBreed());  // German Shepherd',
  hint: 'super() must be called before using `this` in child constructor.'
},
{
  id: 'js_oop_6',
  topicId: 'js_oop',
  question: 'Use super to call parent class methods.',
  mathSolution: 'super.methodName() calls parent implementation.',
  codeSolution: 'class Vehicle {\n    constructor(brand) {\n        this.brand = brand;\n    }\n    \n    info() {\n        return `Brand: ${this.brand}`;\n    }\n}\n\nclass Car extends Vehicle {\n    constructor(brand, model) {\n        super(brand);\n        this.model = model;\n    }\n    \n    info() {\n        return `${super.info()}, Model: ${this.model}`;\n    }\n}\n\nconst tesla = new Car("Tesla", "Model 3");\nconsole.log(tesla.info());  // Brand: Tesla, Model: Model 3',
  hint: 'super.method() calls parent method even if overridden.'
},
{
  id: 'js_oop_7',
  topicId: 'js_oop',
  question: 'Create getters and setters for computed properties.',
  mathSolution: 'Use get and set keywords.',
  codeSolution: 'class Rectangle {\n    constructor(width, height) {\n        this._width = width;\n        this._height = height;\n    }\n    \n    get area() {\n        return this._width * this._height;\n    }\n    \n    get perimeter() {\n        return 2 * (this._width + this._height);\n    }\n    \n    set width(value) {\n        if (value > 0) this._width = value;\n        else throw new Error("Width must be positive");\n    }\n    \n    set height(value) {\n        if (value > 0) this._height = value;\n        else throw new Error("Height must be positive");\n    }\n    \n    get width() {\n        return this._width;\n    }\n    \n    get height() {\n        return this._height;\n    }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area);       // 50\nconsole.log(rect.perimeter);  // 30\nrect.width = 8;\nconsole.log(rect.area);       // 80',
  hint: 'Getters/setters allow computed properties and validation.'
},
{
  id: 'js_oop_8',
  topicId: 'js_oop',
  question: 'Create private fields using # (hash) syntax.',
  mathSolution: 'Private fields are accessible only within class.',
  codeSolution: 'class BankAccount {\n    #balance = 0;\n    #accountNumber;\n    \n    constructor(accountNumber, initialBalance = 0) {\n        this.#accountNumber = accountNumber;\n        this.#balance = initialBalance;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) {\n            this.#balance += amount;\n            return true;\n        }\n        return false;\n    }\n    \n    withdraw(amount) {\n        if (amount > 0 && amount <= this.#balance) {\n            this.#balance -= amount;\n            return true;\n        }\n        return false;\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n}\n\nconst account = new BankAccount("12345", 1000);\nconsole.log(account.getBalance());  // 1000\n// console.log(account.#balance);   // SyntaxError: Private field\naccount.deposit(500);\nconsole.log(account.getBalance());  // 1500',
  hint: 'Private fields (start with #) are truly private in JavaScript.'
},
{
  id: 'js_oop_9',
  topicId: 'js_oop',
  question: 'Create private methods using # syntax.',
  mathSolution: 'Private methods can only be called within class.',
  codeSolution: 'class User {\n    #password;\n    \n    constructor(username, password) {\n        this.username = username;\n        this.#password = password;\n    }\n    \n    #encryptPassword() {\n        // Simulate encryption\n        return this.#password.split("").reverse().join("");\n    }\n    \n    verifyPassword(inputPassword) {\n        return this.#encryptPassword() === inputPassword.split("").reverse().join("");\n    }\n    \n    #validateUsername() {\n        return this.username.length >= 3;\n    }\n    \n    isValid() {\n        return this.#validateUsername();\n    }\n}\n\nconst user = new User("john", "secret123");\nconsole.log(user.verifyPassword("secret123"));  // true\nconsole.log(user.isValid());  // true\n// user.#encryptPassword();   // SyntaxError',
  hint: 'Private methods improve encapsulation and hide implementation.'
},
{
  id: 'js_oop_10',
  topicId: 'js_oop',
  question: 'Use instanceof operator to check object type.',
  mathSolution: 'instanceof checks if object is instance of class.',
  codeSolution: 'class Animal {}\nclass Dog extends Animal {}\nclass Cat extends Animal {}\n\nconst rex = new Dog();\nconst whiskers = new Cat();\n\nconsole.log(rex instanceof Dog);     // true\nconsole.log(rex instanceof Animal);  // true\nconsole.log(rex instanceof Cat);     // false\nconsole.log(whiskers instanceof Cat); // true\n\n// Works with built-in types\nconsole.log([] instanceof Array);    // true\nconsole.log({} instanceof Object);   // true',
  hint: 'instanceof checks entire prototype chain.'
},
{
  id: 'js_oop_11',
  topicId: 'js_oop',
  question: 'Check property existence using in and hasOwnProperty.',
  mathSolution: 'in checks prototype chain, hasOwnProperty checks own.',
  codeSolution: 'class Parent {\n    parentProp = "parent";\n}\n\nclass Child extends Parent {\n    childProp = "child";\n}\n\nconst obj = new Child();\n\nconsole.log("childProp" in obj);   // true\nconsole.log("parentProp" in obj);  // true\nconsole.log("toString" in obj);    // true (inherited)\n\nconsole.log(obj.hasOwnProperty("childProp"));   // true\nconsole.log(obj.hasOwnProperty("parentProp"));  // false (inherited)\nconsole.log(obj.hasOwnProperty("toString"));    // false (inherited)',
  hint: 'hasOwnProperty ignores inherited properties.'
},
{
  id: 'js_oop_12',
  topicId: 'js_oop',
  question: 'Create abstract class pattern (simulate abstraction).',
  mathSolution: 'Throw error in base class methods to enforce override.',
  codeSolution: 'class Shape {\n    constructor() {\n        if (this.constructor === Shape) {\n            throw new Error("Cannot instantiate abstract class");\n        }\n    }\n    \n    area() {\n        throw new Error("Abstract method area() must be implemented");\n    }\n    \n    perimeter() {\n        throw new Error("Abstract method perimeter() must be implemented");\n    }\n}\n\nclass Circle extends Shape {\n    constructor(radius) {\n        super();\n        this.radius = radius;\n    }\n    \n    area() {\n        return Math.PI * this.radius ** 2;\n    }\n    \n    perimeter() {\n        return 2 * Math.PI * this.radius;\n    }\n}\n\nclass Rectangle extends Shape {\n    constructor(width, height) {\n        super();\n        this.width = width;\n        this.height = height;\n    }\n    \n    area() {\n        return this.width * this.height;\n    }\n    \n    perimeter() {\n        return 2 * (this.width + this.height);\n    }\n}\n\n// const shape = new Shape();  // Error\nconst circle = new Circle(5);\nconsole.log(circle.area());  // 78.54',
  hint: 'Abstract classes define interface that child classes must implement.'
},
{
  id: 'js_oop_13',
  topicId: 'js_oop',
  question: 'Create singleton pattern using class.',
  mathSolution: 'Private constructor with static getInstance method.',
  codeSolution: 'class DatabaseConnection {\n    static #instance = null;\n    #connected = false;\n    \n    constructor() {\n        if (DatabaseConnection.#instance) {\n            throw new Error("Use DatabaseConnection.getInstance()");\n        }\n        DatabaseConnection.#instance = this;\n    }\n    \n    static getInstance() {\n        if (!DatabaseConnection.#instance) {\n            DatabaseConnection.#instance = new DatabaseConnection();\n        }\n        return DatabaseConnection.#instance;\n    }\n    \n    connect() {\n        if (!this.#connected) {\n            console.log("Connecting to database...");\n            this.#connected = true;\n        }\n        return this;\n    }\n    \n    query(sql) {\n        if (!this.#connected) {\n            throw new Error("Not connected to database");\n        }\n        console.log(`Executing: ${sql}`);\n        return `Result of ${sql}`;\n    }\n}\n\nconst db1 = DatabaseConnection.getInstance();\nconst db2 = DatabaseConnection.getInstance();\nconsole.log(db1 === db2);  // true\n\ndb1.connect();\nconsole.log(db1.query("SELECT * FROM users"));\n// const db3 = new DatabaseConnection(); // Error',
  hint: 'Singleton ensures only one instance of a class exists.'
},
{
  id: 'js_oop_14',
  topicId: 'js_oop',
  question: 'Use factory method pattern in classes.',
  mathSolution: 'Static method creates and returns appropriate instance.',
  codeSolution: 'class Vehicle {\n    constructor(type, brand) {\n        this.type = type;\n        this.brand = brand;\n    }\n    \n    static createCar(brand, model) {\n        return new Car(brand, model);\n    }\n    \n    static createMotorcycle(brand, cc) {\n        return new Motorcycle(brand, cc);\n    }\n}\n\nclass Car extends Vehicle {\n    constructor(brand, model) {\n        super("car", brand);\n        this.model = model;\n    }\n    \n    info() {\n        return `${this.brand} ${this.model} (car)`;\n    }\n}\n\nclass Motorcycle extends Vehicle {\n    constructor(brand, cc) {\n        super("motorcycle", brand);\n        this.cc = cc;\n    }\n    \n    info() {\n        return `${this.brand} ${this.cc}cc (motorcycle)`;\n    }\n}\n\nconst car = Vehicle.createCar("Tesla", "Model 3");\nconst bike = Vehicle.createMotorcycle("Yamaha", 600);\nconsole.log(car.info());   // Tesla Model 3 (car)\nconsole.log(bike.info());  // Yamaha 600cc (motorcycle)',
  hint: 'Factory method abstracts object creation logic.'
},
{
  id: 'js_oop_15',
  topicId: 'js_oop',
  question: 'Use mixins to compose multiple behaviors.',
  mathSolution: 'Copy methods from multiple source objects.',
  codeSolution: 'const Flyable = {\n    fly() {\n        return `${this.name} is flying!`;\n    },\n    land() {\n        return `${this.name} landed.`;\n    }\n};\n\nconst Swimmable = {\n    swim() {\n        return `${this.name} is swimming!`;\n    },\n    dive() {\n        return `${this.name} dove underwater.`;\n    }\n};\n\nclass Animal {\n    constructor(name) {\n        this.name = name;\n    }\n}\n\nclass Duck extends Animal {}\nclass Penguin extends Animal {}\n\n// Apply mixins\nObject.assign(Duck.prototype, Flyable, Swimmable);\nObject.assign(Penguin.prototype, Swimmable);\n\nconst donald = new Duck("Donald");\nconsole.log(donald.fly());   // Donald is flying!\nconsole.log(donald.swim());  // Donald is swimming!\n\nconst pengy = new Penguin("Pengy");\nconsole.log(pengy.swim());   // Pengy is swimming!\n// pengy.fly(); // Error: not a function',
  hint: 'Mixins allow sharing behavior across unrelated classes.'
},
{
  id: 'js_oop_16',
  topicId: 'js_oop',
  question: 'Create method chaining by returning this.',
  mathSolution: 'Return this from methods for fluent interface.',
  codeSolution: 'class QueryBuilder {\n    constructor() {\n        this.query = { select: [], from: "", where: [] };\n    }\n    \n    select(...fields) {\n        this.query.select = fields;\n        return this;\n    }\n    \n    from(table) {\n        this.query.from = table;\n        return this;\n    }\n    \n    where(condition) {\n        this.query.where.push(condition);\n        return this;\n    }\n    \n    build() {\n        let sql = `SELECT ${this.query.select.join(", ") || "*"} FROM ${this.query.from}`;\n        if (this.query.where.length) {\n            sql += ` WHERE ${this.query.where.join(" AND ")}`;\n        }\n        return sql;\n    }\n}\n\nconst query = new QueryBuilder()\n    .select("name", "age", "email")\n    .from("users")\n    .where("age > 18")\n    .where("active = true")\n    .build();\n\nconsole.log(query);\n// SELECT name, age, email FROM users WHERE age > 18 AND active = true',
  hint: 'Method chaining creates fluent and readable APIs.'
},
{
  id: 'js_oop_17',
  topicId: 'js_oop',
  question: 'Use instanceof with custom classes.',
  mathSolution: 'instanceof checks prototype inheritance chain.',
  codeSolution: 'class Vehicle {}\nclass Car extends Vehicle {}\nclass SportsCar extends Car {}\n\nconst ferrari = new SportsCar();\n\nconsole.log(ferrari instanceof SportsCar);  // true\nconsole.log(ferrari instanceof Car);        // true\nconsole.log(ferrari instanceof Vehicle);    // true\nconsole.log(ferrari instanceof Object);     // true\n\n// Using constructor property\nconsole.log(ferrari.constructor === SportsCar);  // true\nconsole.log(ferrari.constructor === Car);        // false',
  hint: 'instanceof walks up the entire prototype chain.'
},
{
  id: 'js_oop_18',
  topicId: 'js_oop',
  question: 'Create deep copy of class instance.',
  mathSolution: 'Implement clone method for deep copying.',
  codeSolution: 'class Address {\n    constructor(street, city, zip) {\n        this.street = street;\n        this.city = city;\n        this.zip = zip;\n    }\n    \n    clone() {\n        return new Address(this.street, this.city, this.zip);\n    }\n}\n\nclass Person {\n    constructor(name, age, address) {\n        this.name = name;\n        this.age = age;\n        this.address = address;\n    }\n    \n    clone() {\n        const addressClone = this.address.clone();\n        return new Person(this.name, this.age, addressClone);\n    }\n}\n\nconst address = new Address("123 Main St", "NYC", "10001");\nconst john = new Person("John", 30, address);\nconst johnClone = john.clone();\n\njohnClone.name = "Johnny";\njohnClone.address.city = "Boston";\n\nconsole.log(john.address.city);      // NYC (unchanged)\nconsole.log(johnClone.address.city); // Boston\nconsole.log(johnClone.name);         // Johnny',
  hint: 'Clone method creates new independent instance.'
},
{
  id: 'js_oop_19',
  topicId: 'js_oop',
  question: 'Use built-in mixin with Object.assign for multiple inheritance.',
  mathSolution: 'Object.assign copies properties to prototype.',
  codeSolution: 'const TimestampMixin = {\n    getTimestamp() {\n        return this.createdAt || new Date();\n    },\n    setTimestamp() {\n        this.createdAt = new Date();\n    }\n};\n\nconst SerializableMixin = {\n    toJSON() {\n        return JSON.stringify(this);\n    },\n    fromJSON(json) {\n        return JSON.parse(json);\n    }\n};\n\nclass Document {\n    constructor(title, content) {\n        this.title = title;\n        this.content = content;\n    }\n}\n\nObject.assign(Document.prototype, TimestampMixin, SerializableMixin);\n\nconst doc = new Document("My Doc", "Hello World");\ndoc.setTimestamp();\nconsole.log(doc.getTimestamp());  // Current date\nconsole.log(doc.toJSON());        // JSON string',
  hint: 'Mixins provide flexible code reuse across class hierarchies.'
},
{
  id: 'js_oop_20',
  topicId: 'js_oop',
  question: 'Create observer (event emitter) class.',
  mathSolution: 'Maintain listener list and notify on events.',
  codeSolution: 'class EventEmitter {\n    constructor() {\n        this.events = {};\n    }\n    \n    on(event, listener) {\n        if (!this.events[event]) {\n            this.events[event] = [];\n        }\n        this.events[event].push(listener);\n        return () => this.off(event, listener);\n    }\n    \n    off(event, listener) {\n        if (!this.events[event]) return;\n        const index = this.events[event].indexOf(listener);\n        if (index !== -1) this.events[event].splice(index, 1);\n    }\n    \n    emit(event, data) {\n        if (!this.events[event]) return;\n        this.events[event].forEach(listener => {\n            listener(data);\n        });\n    }\n    \n    once(event, listener) {\n        const wrapper = (data) => {\n            listener(data);\n            this.off(event, wrapper);\n        };\n        this.on(event, wrapper);\n    }\n}\n\nclass User extends EventEmitter {\n    constructor(name) {\n        super();\n        this.name = name;\n        this.status = "offline";\n    }\n    \n    login() {\n        this.status = "online";\n        this.emit("login", { user: this.name, time: Date.now() });\n    }\n    \n    logout() {\n        this.status = "offline";\n        this.emit("logout", { user: this.name });\n    }\n}\n\nconst user = new User("John");\nuser.on("login", (data) => {\n    console.log(`${data.user} logged in`);\n});\nuser.on("logout", (data) => {\n    console.log(`${data.user} logged out`);\n});\nuser.login();   // John logged in\nuser.logout();  // John logged out',
  hint: 'Observer pattern enables event-driven architecture.'
},
{
  id: 'js_oop_21',
  topicId: 'js_oop',
  question: 'Create builder pattern for object construction.',
  mathSolution: 'Builder class constructs complex objects step by step.',
  codeSolution: 'class Computer {\n    constructor() {\n        this.cpu = null;\n        this.ram = null;\n        this.storage = null;\n        this.gpu = null;\n    }\n}\n\nclass ComputerBuilder {\n    constructor() {\n        this.computer = new Computer();\n    }\n    \n    setCPU(cpu) {\n        this.computer.cpu = cpu;\n        return this;\n    }\n    \n    setRAM(ram) {\n        this.computer.ram = ram;\n        return this;\n    }\n    \n    setStorage(storage) {\n        this.computer.storage = storage;\n        return this;\n    }\n    \n    setGPU(gpu) {\n        this.computer.gpu = gpu;\n        return this;\n    }\n    \n    build() {\n        return this.computer;\n    }\n}\n\nconst gamingPC = new ComputerBuilder()\n    .setCPU("Intel i9")\n    .setRAM("32GB")\n    .setStorage("1TB SSD")\n    .setGPU("RTX 4080")\n    .build();\n\nconst officePC = new ComputerBuilder()\n    .setCPU("Intel i5")\n    .setRAM("16GB")\n    .setStorage("512GB SSD")\n    .build();\n\nconsole.log(gamingPC);\nconsole.log(officePC);',
  hint: 'Builder pattern simplifies creation of complex objects.'
},
{
  id: 'js_oop_22',
  topicId: 'js_oop',
  question: 'Create prototype pattern for object cloning.',
  mathSolution: 'Implement prototypal inheritance for cloning.',
  codeSolution: 'const carPrototype = {\n    init(make, model, year) {\n        this.make = make;\n        this.model = model;\n        this.year = year;\n        return this;\n    },\n    \n    clone() {\n        return Object.create(Object.getPrototypeOf(this), \n            Object.getOwnPropertyDescriptors(this));\n    },\n    \n    display() {\n        return `${this.make} ${this.model} (${this.year})`;\n    }\n};\n\nconst car1 = Object.create(carPrototype).init("Toyota", "Camry", 2022);\nconst car2 = car1.clone();\ncar2.init("Honda", "Civic", 2023);\n\nconsole.log(car1.display());  // Toyota Camry (2022)\nconsole.log(car2.display());  // Honda Civic (2023)\n\n// Class-based prototype\nclass PrototypeShape {\n    constructor(color, x, y) {\n        this.color = color;\n        this.position = { x, y };\n    }\n    \n    clone() {\n        // Deep clone using structured clone\n        return structuredClone(this);\n    }\n}\n\nconst rect = new PrototypeShape("red", 10, 20);\nconst rectClone = rect.clone();\nrectClone.position.x = 30;\nconsole.log(rect.position.x);      // 10 (unchanged)\nconsole.log(rectClone.position.x); // 30',
  hint: 'Prototype pattern creates new objects by copying existing ones.'
},
{
  id: 'js_oop_23',
  topicId: 'js_oop',
  question: 'Create decorator pattern to add behavior dynamically.',
  mathSolution: 'Wrapper class adds functionality to existing objects.',
  codeSolution: 'class Coffee {\n    cost() {\n        return 5;\n    }\n    \n    description() {\n        return "Simple coffee";\n    }\n}\n\nclass MilkDecorator {\n    constructor(coffee) {\n        this.coffee = coffee;\n    }\n    \n    cost() {\n        return this.coffee.cost() + 2;\n    }\n    \n    description() {\n        return this.coffee.description() + " with milk";\n    }\n}\n\nclass SugarDecorator {\n    constructor(coffee) {\n        this.coffee = coffee;\n    }\n    \n    cost() {\n        return this.coffee.cost() + 1;\n    }\n    \n    description() {\n        return this.coffee.description() + " with sugar";\n    }\n}\n\nclass WhippedCreamDecorator {\n    constructor(coffee) {\n        this.coffee = coffee;\n    }\n    \n    cost() {\n        return this.coffee.cost() + 3;\n    }\n    \n    description() {\n        return this.coffee.description() + " with whipped cream";\n    }\n}\n\nlet myCoffee = new Coffee();\nmyCoffee = new MilkDecorator(myCoffee);\nmyCoffee = new SugarDecorator(myCoffee);\nmyCoffee = new WhippedCreamDecorator(myCoffee);\n\nconsole.log(myCoffee.description());  // Simple coffee with milk with sugar with whipped cream\nconsole.log(myCoffee.cost());         // 11',
  hint: 'Decorators add responsibilities without modifying original class.'
},
{
  id: 'js_oop_24',
  topicId: 'js_oop',
  question: 'Create strategy pattern for interchangeable algorithms.',
  mathSolution: 'Encapsulate algorithms in separate classes.',
  codeSolution: 'class PaymentStrategy {\n    pay(amount) {\n        throw new Error("pay method must be implemented");\n    }\n}\n\nclass CreditCardPayment extends PaymentStrategy {\n    constructor(cardNumber, cvv) {\n        super();\n        this.cardNumber = cardNumber;\n        this.cvv = cvv;\n    }\n    \n    pay(amount) {\n        console.log(`Paid $${amount} using Credit Card ending in ${this.cardNumber.slice(-4)}`);\n        return true;\n    }\n}\n\nclass PayPalPayment extends PaymentStrategy {\n    constructor(email) {\n        super();\n        this.email = email;\n    }\n    \n    pay(amount) {\n        console.log(`Paid $${amount} using PayPal account ${this.email}`);\n        return true;\n    }\n}\n\nclass CryptoPayment extends PaymentStrategy {\n    constructor(walletAddress) {\n        super();\n        this.walletAddress = walletAddress;\n    }\n    \n    pay(amount) {\n        console.log(`Paid $${amount} using Crypto wallet ${this.walletAddress.slice(0, 6)}...`);\n        return true;\n    }\n}\n\nclass ShoppingCart {\n    constructor() {\n        this.items = [];\n        this.paymentStrategy = null;\n    }\n    \n    addItem(item, price) {\n        this.items.push({ item, price });\n    }\n    \n    setPaymentStrategy(strategy) {\n        this.paymentStrategy = strategy;\n    }\n    \n    checkout() {\n        const total = this.items.reduce((sum, item) => sum + item.price, 0);\n        if (!this.paymentStrategy) {\n            throw new Error("No payment strategy set");\n        }\n        return this.paymentStrategy.pay(total);\n    }\n}\n\nconst cart = new ShoppingCart();\ncart.addItem("Laptop", 1000);\ncart.addItem("Mouse", 50);\n\ncart.setPaymentStrategy(new CreditCardPayment("1234567890123456", "123"));\ncart.checkout();  // Paid $1050 using Credit Card\n\ncart.setPaymentStrategy(new PayPalPayment("user@example.com"));\ncart.checkout();  // Paid $1050 using PayPal',
  hint: 'Strategy pattern allows runtime algorithm changes.'
},
{
  id: 'js_oop_25',
  topicId: 'js_oop',
  question: 'Create adapter pattern for incompatible interfaces.',
  mathSolution: 'Adapter class converts one interface to another.',
  codeSolution: '// Old system\nclass OldLogger {\n    logMessage(msg) {\n        console.log(`[OLD] ${msg}`);\n    }\n}\n\n// New system expects different interface\nclass NewSystem {\n    constructor(logger) {\n        this.logger = logger;\n    }\n    \n    process() {\n        this.logger.log("Processing data...", "INFO");\n        this.logger.log("Data processed", "SUCCESS");\n    }\n}\n\n// Adapter\nclass LoggerAdapter {\n    constructor(oldLogger) {\n        this.oldLogger = oldLogger;\n    }\n    \n    log(message, level) {\n        const formatted = `[${level}] ${message}`;\n        this.oldLogger.logMessage(formatted);\n    }\n}\n\nconst oldLogger = new OldLogger();\nconst adapter = new LoggerAdapter(oldLogger);\nconst system = new NewSystem(adapter);\nsystem.process();\n// [OLD] [INFO] Processing data...\n// [OLD] [SUCCESS] Data processed',
  hint: 'Adapter pattern lets incompatible interfaces work together.'
},
{
  id: 'js_oop_26',
  topicId: 'js_oop',
  question: 'Create facade pattern for complex subsystem.',
  mathSolution: 'Facade provides simplified interface to complex system.',
  codeSolution: 'class CPU {\n    start() { console.log("CPU starting..."); }\n    execute() { console.log("CPU executing instructions"); }\n}\n\nclass Memory {\n    load(address, data) { console.log(`Loading ${data} to address ${address}`); }\n}\n\nclass HardDrive {\n    read(sector) { console.log(`Reading sector ${sector}`); return "data"; }\n}\n\n// Facade\nclass ComputerFacade {\n    constructor() {\n        this.cpu = new CPU();\n        this.memory = new Memory();\n        this.hardDrive = new HardDrive();\n    }\n    \n    startComputer() {\n        console.log("Starting computer...");\n        this.cpu.start();\n        this.memory.load(0, "OS");\n        this.hardDrive.read(0);\n        this.cpu.execute();\n        console.log("Computer ready!");\n    }\n}\n\n// Simple API for client\nconst computer = new ComputerFacade();\ncomputer.startComputer();\n// Starting computer...\n// CPU starting...\n// Loading OS to address 0\n// Reading sector 0\n// CPU executing instructions\n// Computer ready!',
  hint: 'Facade hides subsystem complexity from clients.'
},
{
  id: 'js_oop_27',
  topicId: 'js_oop',
  question: 'Create proxy pattern for lazy initialization.',
  mathSolution: 'Proxy controls access to expensive objects.',
  codeSolution: 'class ExpensiveImage {\n    constructor(filename) {\n        this.filename = filename;\n        this.loadFromDisk();\n    }\n    \n    loadFromDisk() {\n        console.log(`Loading ${this.filename} from disk...`);\n        // Simulate expensive operation\n        this.imageData = `Image data for ${this.filename}`;\n    }\n    \n    display() {\n        console.log(`Displaying ${this.filename}`);\n        return this.imageData;\n    }\n}\n\n// Proxy for lazy loading\nclass ImageProxy {\n    constructor(filename) {\n        this.filename = filename;\n        this.realImage = null;\n    }\n    \n    display() {\n        if (!this.realImage) {\n            this.realImage = new ExpensiveImage(this.filename);\n        }\n        return this.realImage.display();\n    }\n}\n\n// Usage\nconst image1 = new ImageProxy("photo1.jpg");\nconst image2 = new ImageProxy("photo2.jpg");\n\n// Image only loaded when needed\nimage1.display();  // Loads and displays\nimage1.display();  // Only displays (already loaded)\nimage2.display();  // Loads and displays',
  hint: 'Virtual proxy delays expensive operations until needed.'
},
{
  id: 'js_oop_28',
  topicId: 'js_oop',
  question: 'Create command pattern for undo/redo operations.',
  mathSolution: 'Command objects encapsulate actions with undo/redo.',
  codeSolution: 'class Calculator {\n    constructor() {\n        this.value = 0;\n        this.history = [];\n        this.redoStack = [];\n    }\n    \n    execute(command) {\n        command.execute();\n        this.history.push(command);\n        this.redoStack = [];\n    }\n    \n    undo() {\n        const command = this.history.pop();\n        if (command) {\n            command.undo();\n            this.redoStack.push(command);\n        }\n    }\n    \n    redo() {\n        const command = this.redoStack.pop();\n        if (command) {\n            command.execute();\n            this.history.push(command);\n        }\n    }\n    \n    getValue() {\n        return this.value;\n    }\n}\n\nclass AddCommand {\n    constructor(calculator, value) {\n        this.calculator = calculator;\n        this.value = value;\n    }\n    \n    execute() {\n        this.calculator.value += this.value;\n    }\n    \n    undo() {\n        this.calculator.value -= this.value;\n    }\n}\n\nclass SubtractCommand {\n    constructor(calculator, value) {\n        this.calculator = calculator;\n        this.value = value;\n    }\n    \n    execute() {\n        this.calculator.value -= this.value;\n    }\n    \n    undo() {\n        this.calculator.value += this.value;\n    }\n}\n\nconst calc = new Calculator();\ncalc.execute(new AddCommand(calc, 10));\ncalc.execute(new AddCommand(calc, 5));\ncalc.execute(new SubtractCommand(calc, 3));\nconsole.log(calc.getValue());  // 12\ncalc.undo();\nconsole.log(calc.getValue());  // 15\ncalc.undo();\nconsole.log(calc.getValue());  // 10\ncalc.redo();\nconsole.log(calc.getValue());  // 15',
  hint: 'Command pattern enables undo/redo and operation queuing.'
},
{
  id: 'js_oop_29',
  topicId: 'js_oop',
  question: 'Create chain of responsibility pattern.',
  mathSolution: 'Chain handlers that process request or pass to next.',
  codeSolution: 'class Logger {\n    constructor(level) {\n        this.level = level;\n        this.next = null;\n    }\n    \n    setNext(logger) {\n        this.next = logger;\n        return logger;\n    }\n    \n    log(level, message) {\n        if (this.level <= level) {\n            this.write(message);\n        }\n        if (this.next) {\n            this.next.log(level, message);\n        }\n    }\n    \n    write(message) {\n        // Override in subclasses\n    }\n}\n\nclass ConsoleLogger extends Logger {\n    write(message) {\n        console.log(`[CONSOLE] ${message}`);\n    }\n}\n\nclass FileLogger extends Logger {\n    write(message) {\n        console.log(`[FILE] ${message} (written to file)`);\n    }\n}\n\nclass ErrorLogger extends Logger {\n    write(message) {\n        console.error(`[ERROR] ${message}`);\n    }\n}\n\n// Build chain\nconst consoleLogger = new ConsoleLogger(1);\nconst fileLogger = new FileLogger(2);\nconst errorLogger = new ErrorLogger(3);\n\nconsoleLogger.setNext(fileLogger).setNext(errorLogger);\n\nconsoleLogger.log(1, "Info message");\nconsoleLogger.log(2, "Warning message");\nconsoleLogger.log(3, "Error message");',
  hint: 'Chain of responsibility decouples sender from receiver.'
},
{
  id: 'js_oop_30',
  topicId: 'js_oop',
  question: 'Create iterator pattern for custom collection.',
  mathSolution: 'Implement Symbol.iterator for custom iteration.',
  codeSolution: 'class CustomCollection {\n    constructor() {\n        this.items = [];\n    }\n    \n    add(item) {\n        this.items.push(item);\n    }\n    \n    [Symbol.iterator]() {\n        let index = 0;\n        const items = this.items;\n        \n        return {\n            next() {\n                if (index < items.length) {\n                    return { value: items[index++], done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n    \n    // Reverse iterator\n    reverse() {\n        let index = this.items.length - 1;\n        const items = this.items;\n        \n        return {\n            [Symbol.iterator]() {\n                return this;\n            },\n            next() {\n                if (index >= 0) {\n                    return { value: items[index--], done: false };\n                }\n                return { done: true };\n            }\n        };\n    }\n}\n\nconst collection = new CustomCollection();\ncollection.add("A");\ncollection.add("B");\ncollection.add("C");\n\nfor (const item of collection) {\n    console.log(item);  // A, B, C\n}\n\nfor (const item of collection.reverse()) {\n    console.log(item);  // C, B, A\n}',
  hint: 'Iterators enable for...of loops on custom objects.'
},
{
  id: 'js_oop_31',
  topicId: 'js_oop',
  question: 'Create state pattern for object behavior changing with state.',
  mathSolution: 'State objects encapsulate behavior for each state.',
  codeSolution: 'class TrafficLight {\n    constructor() {\n        this.state = new RedState(this);\n    }\n    \n    setState(state) {\n        this.state = state;\n    }\n    \n    change() {\n        this.state.change();\n    }\n    \n    getColor() {\n        return this.state.getColor();\n    }\n}\n\nclass RedState {\n    constructor(light) {\n        this.light = light;\n    }\n    \n    change() {\n        console.log("Red -> Green");\n        this.light.setState(new GreenState(this.light));\n    }\n    \n    getColor() {\n        return "Red";\n    }\n}\n\nclass GreenState {\n    constructor(light) {\n        this.light = light;\n    }\n    \n    change() {\n        console.log("Green -> Yellow");\n        this.light.setState(new YellowState(this.light));\n    }\n    \n    getColor() {\n        return "Green";\n    }\n}\n\nclass YellowState {\n    constructor(light) {\n        this.light = light;\n    }\n    \n    change() {\n        console.log("Yellow -> Red");\n        this.light.setState(new RedState(this.light));\n    }\n    \n    getColor() {\n        return "Yellow";\n    }\n}\n\nconst light = new TrafficLight();\nconsole.log(light.getColor());  // Red\nlight.change();  // Red -> Green\nconsole.log(light.getColor());  // Green\nlight.change();  // Green -> Yellow\nlight.change();  // Yellow -> Red',
  hint: 'State pattern allows object to change behavior when internal state changes.'
},
{
  id: 'js_oop_32',
  topicId: 'js_oop',
  question: 'Create template method pattern.',
  mathSolution: 'Base class defines skeleton, subclasses implement steps.',
  codeSolution: 'class DataProcessor {\n    // Template method\n    process() {\n        this.loadData();\n        this.processData();\n        this.saveData();\n        this.cleanup();\n    }\n    \n    loadData() {\n        throw new Error("loadData must be implemented");\n    }\n    \n    processData() {\n        throw new Error("processData must be implemented");\n    }\n    \n    saveData() {\n        console.log("Saving data (default implementation)");\n    }\n    \n    cleanup() {\n        console.log("Cleaning up resources");\n    }\n}\n\nclass CSVProcessor extends DataProcessor {\n    loadData() {\n        console.log("Loading CSV file...");\n        this.data = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];\n    }\n    \n    processData() {\n        console.log("Processing CSV data...");\n        this.data = this.data.map(row => ({ ...row, processed: true }));\n    }\n    \n    saveData() {\n        console.log("Saving processed CSV data to database");\n    }\n}\n\nclass JSONProcessor extends DataProcessor {\n    loadData() {\n        console.log("Loading JSON from API...");\n        this.data = { users: [{ id: 1 }, { id: 2 }] };\n    }\n    \n    processData() {\n        console.log("Processing JSON data...");\n        this.data.users = this.data.users.map(u => ({ ...u, validated: true }));\n    }\n    \n    saveData() {\n        console.log("Saving JSON data to cache");\n    }\n}\n\nconst csvProcessor = new CSVProcessor();\ncsvProcessor.process();\n\nconst jsonProcessor = new JSONProcessor();\njsonProcessor.process();',
  hint: 'Template method defines algorithm structure, subclasses implement steps.'
},
{
  id: 'js_oop_33',
  topicId: 'js_oop',
  question: 'Create visitor pattern for double dispatch.',
  mathSolution: 'Visitor adds operations without modifying object structure.',
  codeSolution: 'class Shape {\n    accept(visitor) {\n        throw new Error("accept must be implemented");\n    }\n}\n\nclass Circle extends Shape {\n    constructor(radius) {\n        super();\n        this.radius = radius;\n    }\n    \n    accept(visitor) {\n        visitor.visitCircle(this);\n    }\n}\n\nclass Rectangle extends Shape {\n    constructor(width, height) {\n        super();\n        this.width = width;\n        this.height = height;\n    }\n    \n    accept(visitor) {\n        visitor.visitRectangle(this);\n    }\n}\n\nclass AreaVisitor {\n    visitCircle(circle) {\n        const area = Math.PI * circle.radius ** 2;\n        console.log(`Circle area: ${area.toFixed(2)}`);\n    }\n    \n    visitRectangle(rect) {\n        const area = rect.width * rect.height;\n        console.log(`Rectangle area: ${area}`);\n    }\n}\n\nclass PerimeterVisitor {\n    visitCircle(circle) {\n        const perimeter = 2 * Math.PI * circle.radius;\n        console.log(`Circle perimeter: ${perimeter.toFixed(2)}`);\n    }\n    \n    visitRectangle(rect) {\n        const perimeter = 2 * (rect.width + rect.height);\n        console.log(`Rectangle perimeter: ${perimeter}`);\n    }\n}\n\nconst shapes = [new Circle(5), new Rectangle(4, 6)];\nconst areaVisitor = new AreaVisitor();\nconst perimeterVisitor = new PerimeterVisitor();\n\nshapes.forEach(shape => shape.accept(areaVisitor));\nshapes.forEach(shape => shape.accept(perimeterVisitor));',
  hint: 'Visitor pattern adds operations to objects without changing them.'
},
{
  id: 'js_oop_34',
  topicId: 'js_oop',
  question: 'Use Object.freeze() to create immutable objects.',
  mathSolution: 'Freeze prevents property changes, additions, deletions.',
  codeSolution: 'class ImmutableConfig {\n    constructor(config) {\n        Object.assign(this, config);\n        Object.freeze(this);\n        Object.freeze(this.settings);  // Deep freeze nested\n    }\n    \n    update(key, value) {\n        // Immutable: returns new instance instead of modifying\n        const newConfig = { ...this, [key]: value };\n        return new ImmutableConfig(newConfig);\n    }\n}\n\nconst config = new ImmutableConfig({ apiUrl: "https://api.com", timeout: 5000 });\nconsole.log(config.apiUrl);  // https://api.com\n\n// config.apiUrl = "new-url";  // TypeError in strict mode\n// config.newProp = "test";    // TypeError\n\nconst updatedConfig = config.update("timeout", 10000);\nconsole.log(updatedConfig.timeout);  // 10000\nconsole.log(config.timeout);          // 5000 (unchanged)',
  hint: 'Immutability prevents side effects and bugs.'
},
{
  id: 'js_oop_35',
  topicId: 'js_oop',
  question: 'Create value object pattern.',
  mathSolution: 'Value objects are immutable and compared by value.',
  codeSolution: 'class Money {\n    constructor(amount, currency) {\n        this.amount = amount;\n        this.currency = currency;\n        Object.freeze(this);\n    }\n    \n    add(other) {\n        if (this.currency !== other.currency) {\n            throw new Error("Cannot add different currencies");\n        }\n        return new Money(this.amount + other.amount, this.currency);\n    }\n    \n    equals(other) {\n        return other && \n               this.amount === other.amount && \n               this.currency === other.currency;\n    }\n    \n    toString() {\n        return `${this.currency} ${this.amount.toFixed(2)}`;\n    }\n}\n\nclass Point {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n        Object.freeze(this);\n    }\n    \n    distanceTo(other) {\n        const dx = this.x - other.x;\n        const dy = this.y - other.y;\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n    \n    translate(dx, dy) {\n        return new Point(this.x + dx, this.y + dy);\n    }\n    \n    equals(other) {\n        return other && this.x === other.x && this.y === other.y;\n    }\n}\n\nconst money1 = new Money(100, "USD");\nconst money2 = new Money(50, "USD");\nconst total = money1.add(money2);\nconsole.log(total.toString());  // USD 150.00\nconsole.log(money1.equals(money2));  // false\n\nconst p1 = new Point(0, 0);\nconst p2 = new Point(3, 4);\nconsole.log(p1.distanceTo(p2));  // 5',
  hint: 'Value objects are immutable and compared by properties, not identity.'
},
{
  id: 'js_oop_36',
  topicId: 'js_oop',
  question: 'Create factory pattern for object creation.',
  mathSolution: 'Factory methods centralize object creation logic.',
  codeSolution: 'class User {\n    constructor(type, name, permissions) {\n        this.type = type;\n        this.name = name;\n        this.permissions = permissions;\n    }\n    \n    describe() {\n        return `${this.name} (${this.type}) - Permissions: ${this.permissions.join(", ")}`;\n    }\n}\n\nclass UserFactory {\n    static createAdmin(name) {\n        return new User("admin", name, ["read", "write", "delete", "manage_users"]);\n    }\n    \n    static createEditor(name) {\n        return new User("editor", name, ["read", "write"]);\n    }\n    \n    static createViewer(name) {\n        return new User("viewer", name, ["read"]);\n    }\n    \n    static createGuest() {\n        return new User("guest", "Guest", ["read_only"]);\n    }\n}\n\nconst admin = UserFactory.createAdmin("Alice");\nconst editor = UserFactory.createEditor("Bob");\nconst viewer = UserFactory.createViewer("Charlie");\n\nconsole.log(admin.describe());\nconsole.log(editor.describe());\nconsole.log(viewer.describe());',
  hint: 'Factory pattern centralizes and simplifies object creation.'
},
{
  id: 'js_oop_37',
  topicId: 'js_oop',
  question: 'Use composition over inheritance.',
  mathSolution: 'Compose objects with behaviors rather than inheriting.',
  codeSolution: '// Behaviors\nconst FlyBehavior = {\n    fly() {\n        return `${this.name} is flying!`;\n    }\n};\n\nconst SwimBehavior = {\n    swim() {\n        return `${this.name} is swimming!`;\n    }\n};\n\nconst WalkBehavior = {\n    walk() {\n        return `${this.name} is walking!`;\n    }\n};\n\nconst QuackBehavior = {\n    quack() {\n        return `${this.name} says Quack!`;\n    }\n};\n\n// Composition\nclass Animal {\n    constructor(name) {\n        this.name = name;\n        this.behaviors = [];\n    }\n    \n    addBehavior(behavior) {\n        Object.assign(this, behavior);\n        this.behaviors.push(behavior);\n    }\n    \n    performActions() {\n        return this.behaviors.map(behavior => {\n            const action = Object.keys(behavior)[0];\n            return this[action]();\n        });\n    }\n}\n\nclass Duck extends Animal {\n    constructor(name) {\n        super(name);\n        this.addBehavior(WalkBehavior);\n        this.addBehavior(SwimBehavior);\n        this.addBehavior(QuackBehavior);\n        this.addBehavior(FlyBehavior);\n    }\n}\n\nclass Penguin extends Animal {\n    constructor(name) {\n        super(name);\n        this.addBehavior(WalkBehavior);\n        this.addBehavior(SwimBehavior);\n        // No FlyBehavior for penguins\n    }\n}\n\nconst duck = new Duck("Donald");\nconsole.log(duck.fly());    // Donald is flying!\nconsole.log(duck.swim());   // Donald is swimming!\nconsole.log(duck.quack());  // Donald says Quack!\n\nconst penguin = new Penguin("Pingu");\nconsole.log(penguin.walk()); // Pingu is walking!\nconsole.log(penguin.swim()); // Pingu is swimming!\n// penguin.fly(); // Error: not a function',
  hint: 'Composition provides more flexibility than inheritance.'
},
{
  id: 'js_oop_38',
  topicId: 'js_oop',
  question: 'Use dependency injection for loose coupling.',
  mathSolution: 'Inject dependencies rather than creating internally.',
  codeSolution: 'class Database {\n    query(sql) {\n        console.log(`Executing: ${sql}`);\n        return [{ id: 1, name: "John" }];\n    }\n}\n\nclass Logger {\n    log(message) {\n        console.log(`[LOG] ${message}`);\n    }\n}\n\nclass UserService {\n    constructor(database, logger) {\n        this.database = database;\n        this.logger = logger;\n    }\n    \n    async getUsers() {\n        this.logger.log("Fetching users");\n        const users = this.database.query("SELECT * FROM users");\n        this.logger.log(`Found ${users.length} users`);\n        return users;\n    }\n}\n\n// Manual DI\nconst db = new Database();\nconst logger = new Logger();\nconst userService = new UserService(db, logger);\n\nuserService.getUsers();\n\n// DI Container (simple)\nclass Container {\n    constructor() {\n        this.services = {};\n    }\n    \n    register(name, service, dependencies = []) {\n        this.services[name] = { service, dependencies, instance: null };\n    }\n    \n    get(name) {\n        const entry = this.services[name];\n        if (entry.instance) return entry.instance;\n        \n        const dependencies = entry.dependencies.map(dep => this.get(dep));\n        entry.instance = new entry.service(...dependencies);\n        return entry.instance;\n    }\n}\n\nconst container = new Container();\ncontainer.register("database", Database);\ncontainer.register("logger", Logger);\ncontainer.register("userService", UserService, ["database", "logger"]);\n\nconst userServiceDI = container.get("userService");\nuserServiceDI.getUsers();',
  hint: 'Dependency injection makes code more testable and flexible.'
},
{
  id: 'js_oop_39',
  topicId: 'js_oop',
  question: 'Create class with private static fields.',
  mathSolution: 'Static private fields shared across all instances.',
  codeSolution: 'class Bank {\n    static #totalDeposits = 0;\n    static #totalWithdrawals = 0;\n    #balance = 0;\n    \n    constructor(accountNumber, initialBalance = 0) {\n        this.accountNumber = accountNumber;\n        this.#balance = initialBalance;\n        Bank.#totalDeposits += initialBalance;\n    }\n    \n    deposit(amount) {\n        if (amount > 0) {\n            this.#balance += amount;\n            Bank.#totalDeposits += amount;\n            return true;\n        }\n        return false;\n    }\n    \n    withdraw(amount) {\n        if (amount > 0 && amount <= this.#balance) {\n            this.#balance -= amount;\n            Bank.#totalWithdrawals += amount;\n            return true;\n        }\n        return false;\n    }\n    \n    getBalance() {\n        return this.#balance;\n    }\n    \n    static getTotalDeposits() {\n        return Bank.#totalDeposits;\n    }\n    \n    static getTotalWithdrawals() {\n        return Bank.#totalWithdrawals;\n    }\n    \n    static getNetFlow() {\n        return Bank.#totalDeposits - Bank.#totalWithdrawals;\n    }\n}\n\nconst acc1 = new Bank("A001", 1000);\nconst acc2 = new Bank("A002", 500);\n\nacc1.deposit(500);\nacc2.deposit(300);\nacc1.withdraw(200);\n\nconsole.log(Bank.getTotalDeposits());   // 1000+500+500+300 = 2300\nconsole.log(Bank.getTotalWithdrawals()); // 200\nconsole.log(Bank.getNetFlow());          // 2100',
  hint: 'Static private fields maintain shared state across instances.'
},
{
  id: 'js_oop_40',
  topicId: 'js_oop',
  question: 'Create class with computed property names.',
  mathSolution: 'Use computed property names for dynamic methods.',
  codeSolution: 'class DynamicAPI {\n    constructor(prefix) {\n        this.prefix = prefix;\n    }\n    \n    [`${prefix}Get`]() {\n        return `${this.prefix} GET request`;\n    }\n    \n    [`${prefix}Post`](data) {\n        return `${this.prefix} POST: ${JSON.stringify(data)}`;\n    }\n    \n    [`${prefix}Delete`](id) {\n        return `${this.prefix} DELETE ${id}`;\n    }\n}\n\nclass EventManager {\n    constructor() {\n        this.events = {};\n    }\n    \n    addEvent(name, handler) {\n        this.events[name] = handler;\n        this[`on${name}`] = (data) => {\n            console.log(`Event: ${name}`);\n            return handler(data);\n        };\n    }\n}\n\nconst api = new DynamicAPI("user");\nconsole.log(api.userGet());      // user GET request\nconsole.log(api.userPost({ id: 1 }));  // user POST: {"id":1}\nconsole.log(api.userDelete(5));  // user DELETE 5\n\nconst manager = new EventManager();\nmanager.addEvent("click", (data) => `Clicked at ${data.x}, ${data.y}`);\nmanager.addEvent("hover", (data) => `Hover over ${data.element}`);\n\nconsole.log(manager.onclick({ x: 100, y: 200 }));\nconsole.log(manager.onhover({ element: "button" }));',
  hint: 'Computed property names enable dynamic method generation.'
},
//arrow-function
{
  id: 'js_arrow_1',
  topicId: 'js_arrow',
  question: 'Write an arrow function that adds two numbers and returns the result.',
  mathSolution: 'Use => syntax with parameters.',
  codeSolution: 'const add = (a, b) => a + b;\nconsole.log(add(5, 3));  // 8',
  hint: 'Arrow function with single expression has implicit return.'
},
{
  id: 'js_arrow_2',
  topicId: 'js_arrow',
  question: 'Write an arrow function that multiplies two numbers using explicit return.',
  mathSolution: 'Use curly braces and return keyword.',
  codeSolution: 'const multiply = (a, b) => {\n    return a * b;\n};\nconsole.log(multiply(4, 5));  // 20',
  hint: 'Use `{}` and `return` for multiple statements.'
},
{
  id: 'js_arrow_3',
  topicId: 'js_arrow',
  question: 'Write an arrow function with single parameter (no parentheses needed).',
  mathSolution: 'Single parameter can omit parentheses.',
  codeSolution: 'const square = x => x * x;\nconsole.log(square(5));  // 25',
  hint: 'You can omit parentheses with one parameter.'
},
{
  id: 'js_arrow_4',
  topicId: 'js_arrow',
  question: 'Write an arrow function with no parameters (empty parentheses).',
  mathSolution: 'Use empty parentheses for no parameters.',
  codeSolution: 'const greet = () => "Hello World!";\nconsole.log(greet());  // Hello World!',
  hint: 'Use `()` for zero parameters.'
},
{
  id: 'js_arrow_5',
  topicId: 'js_arrow',
  question: 'Write an arrow function that returns an object literal.',
  mathSolution: 'Wrap object in parentheses to avoid ambiguity.',
  codeSolution: 'const createPerson = (name, age) => ({ name, age });\nconsole.log(createPerson("Alice", 25));  // { name: "Alice", age: 25 }',
  hint: 'Wrap object literal in `()` to distinguish from block.'
},
{
  id: 'js_arrow_6',
  topicId: 'js_arrow',
  question: 'Use arrow function with array map() to double values.',
  mathSolution: 'Arrow function as callback for map.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]',
  hint: 'Arrow functions are perfect for array methods.'
},
{
  id: 'js_arrow_7',
  topicId: 'js_arrow',
  question: 'Use arrow function with filter() to get even numbers.',
  mathSolution: 'Arrow function returns boolean for filter.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: 'Return true to keep element in filtered array.'
},
{
  id: 'js_arrow_8',
  topicId: 'js_arrow',
  question: 'Use arrow function with reduce() to sum array.',
  mathSolution: 'Arrow function as accumulator callback.',
  codeSolution: 'const numbers = [10, 20, 30];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 60',
  hint: 'Reduce takes accumulator and current values.'
},
{
  id: 'js_arrow_9',
  topicId: 'js_arrow',
  question: 'Use arrow function with forEach() to print array elements.',
  mathSolution: 'Arrow function as forEach callback.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach(fruit => console.log(fruit));',
  hint: 'forEach executes function for each array element.'
},
{
  id: 'js_arrow_10',
  topicId: 'js_arrow',
  question: 'Show that arrow functions do not have their own "this".',
  mathSolution: 'Arrow functions inherit "this" from parent scope.',
  codeSolution: 'const obj = {\n    name: "My Object",\n    getName: () => {\n        return this.name;  // this is not obj, but outer scope\n    }\n};\nconsole.log(obj.getName());  // undefined (not "My Object")',
  hint: 'Arrow functions don\'t bind their own `this`.'
},
{
  id: 'js_arrow_11',
  topicId: 'js_arrow',
  question: 'Show that arrow functions work well with setTimeout to preserve this.',
  mathSolution: 'Arrow functions don\'t create their own this binding.',
  codeSolution: 'const obj = {\n    name: "Alice",\n    delayedGreet: function() {\n        setTimeout(() => {\n            console.log(`Hello, ${this.name}!`);  // Hello, Alice!\n        }, 1000);\n    }\n};\nobj.delayedGreet();',
  hint: 'Arrow function preserves `this` from surrounding scope.'
},
{
  id: 'js_arrow_12',
  topicId: 'js_arrow',
  question: 'Compare arrow function with regular function for this binding in event handler.',
  mathSolution: 'Arrow function doesn\'t have its own this for DOM events.',
  codeSolution: '// button.addEventListener("click", () => {\n//     console.log(this);  // window (not button)\n// });\n// button.addEventListener("click", function() {\n//     console.log(this);  // button element\n// });',
  hint: 'Regular functions bind this to event target, arrows to parent scope.'
},
{
  id: 'js_arrow_13',
  topicId: 'js_arrow',
  question: 'Show that arrow functions cannot be used as constructors with new.',
  mathSolution: 'Arrow functions lack internal [[Construct]] method.',
  codeSolution: 'const Person = (name) => {\n    this.name = name;\n};\n// const p = new Person("John");  // TypeError: Person is not a constructor',
  hint: 'Arrow functions cannot be used with `new` keyword.'
},
{
  id: 'js_arrow_14',
  topicId: 'js_arrow',
  question: 'Show that arrow functions do not have prototype property.',
  mathSolution: 'Arrow functions don\'t have prototype property.',
  codeSolution: 'const arrowFunc = () => {};\nfunction regularFunc() {}\nconsole.log(arrowFunc.prototype);  // undefined\nconsole.log(regularFunc.prototype);  // { constructor: f }',
  hint: 'Arrow functions cannot be used as constructor functions.'
},
{
  id: 'js_arrow_15',
  topicId: 'js_arrow',
  question: 'Show that arrow functions don\'t have arguments object.',
  mathSolution: 'Arrow functions inherit arguments from parent scope.',
  codeSolution: 'const arrow = () => {\n    console.log(arguments);  // ReferenceError or outer arguments\n};\nfunction regular() {\n    const arrow = () => console.log(arguments);\n    arrow();\n}\nregular(1, 2, 3);  // [Arguments] { 0:1, 1:2, 2:3 }',
  hint: 'Use rest parameters `(...args)` instead of arguments.'
},
{
  id: 'js_arrow_16',
  topicId: 'js_arrow',
  question: 'Use rest parameters in arrow function instead of arguments.',
  mathSolution: 'Rest parameters collect arguments into array.',
  codeSolution: 'const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);\nconsole.log(sumAll(1, 2, 3, 4));  // 10',
  hint: 'Use `...rest` parameter instead of `arguments`.'
},
{
  id: 'js_arrow_17',
  topicId: 'js_arrow',
  question: 'Write an arrow function that returns a function (closure).',
  mathSolution: 'Arrow function returning another arrow function.',
  codeSolution: 'const multiplier = factor => number => number * factor;\nconst double = multiplier(2);\nconsole.log(double(5));  // 10\nconst triple = multiplier(3);\nconsole.log(triple(5));  // 15',
  hint: 'Arrow functions can return functions (currying).'
},
{
  id: 'js_arrow_18',
  topicId: 'js_arrow',
  question: 'Use arrow function with sort() to sort numbers.',
  mathSolution: 'Arrow function defines comparison logic.',
  codeSolution: 'const numbers = [3, 1, 4, 1, 5, 9];\nconst sorted = numbers.sort((a, b) => a - b);\nconsole.log(sorted);  // [1, 1, 3, 4, 5, 9]',
  hint: 'Return negative, zero, or positive for sort comparison.'
},
{
  id: 'js_arrow_19',
  topicId: 'js_arrow',
  question: 'Use arrow function to sort array of objects by property.',
  mathSolution: 'Access object property in comparison.',
  codeSolution: 'const people = [\n    { name: "John", age: 30 },\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 35 }\n];\nconst sortedByAge = people.sort((a, b) => a.age - b.age);\nconsole.log(sortedByAge);  // Alice(25), John(30), Bob(35)',
  hint: 'Compare object properties in arrow function.'
},
{
  id: 'js_arrow_20',
  topicId: 'js_arrow',
  question: 'Use arrow function with setTimeout for delayed execution.',
  mathSolution: 'Arrow function as setTimeout callback.',
  codeSolution: 'setTimeout(() => {\n    console.log("Delayed message");\n}, 1000);',
  hint: 'Arrow functions work well as timer callbacks.'
},
{
  id: 'js_arrow_21',
  topicId: 'js_arrow',
  question: 'Use arrow function with setInterval for repeated execution.',
  mathSolution: 'Arrow function as interval callback.',
  codeSolution: 'let count = 0;\nconst interval = setInterval(() => {\n    count++;\n    console.log(`Tick ${count}`);\n    if (count === 5) clearInterval(interval);\n}, 1000);',
  hint: 'Use setInterval for repeated actions.'
},
{
  id: 'js_arrow_22',
  topicId: 'js_arrow',
  question: 'Use arrow function with event listeners (caution with this).',
  mathSolution: 'Arrow function doesn\'t bind this to event target.',
  codeSolution: '// const button = document.querySelector("button");\n// button.addEventListener("click", (event) => {\n//     console.log(this);  // window (not button)\n//     console.log(event.target);  // button element\n// });',
  hint: 'Use `event.target` to access element in arrow function.'
},
{
  id: 'js_arrow_23',
  topicId: 'js_arrow',
  question: 'Write an immediately invoked arrow function (IIFE).',
  mathSolution: 'Wrap arrow function in parentheses and call immediately.',
  codeSolution: '(() => {\n    console.log("Arrow IIFE executed!");\n})();  // Arrow IIFE executed!',
  hint: 'IIFE runs immediately after definition.'
},
{
  id: 'js_arrow_24',
  topicId: 'js_arrow',
  question: 'Use arrow function with promise .then() for chaining.',
  mathSolution: 'Arrow functions as promise handlers.',
  codeSolution: 'Promise.resolve(5)\n    .then(num => num * 2)\n    .then(num => num + 3)\n    .then(result => console.log(result));  // 13',
  hint: 'Arrow functions are great for promise chains.'
},
{
  id: 'js_arrow_25',
  topicId: 'js_arrow',
  question: 'Use arrow function with async/await.',
  mathSolution: 'Async arrow function returns promise.',
  codeSolution: 'const fetchData = async (url) => {\n    const response = await fetch(url);\n    return response.json();\n};\n// fetchData("https://api.example.com/data").then(data => console.log(data));',
  hint: 'Use `async () => {}` for async arrow functions.'
},
{
  id: 'js_arrow_26',
  topicId: 'js_arrow',
  question: 'Write an arrow function that throws an error.',
  mathSolution: 'Use throw statement inside arrow function body.',
  codeSolution: 'const divide = (a, b) => {\n    if (b === 0) throw new Error("Division by zero");\n    return a / b;\n};\ntry {\n    console.log(divide(10, 0));\n} catch (error) {\n    console.log(error.message);  // Division by zero\n}',
  hint: 'Use `{}` body when you need to throw error.'
},
{
  id: 'js_arrow_27',
  topicId: 'js_arrow',
  question: 'Show that arrow functions cannot be generators (no yield).',
  mathSolution: 'Arrow functions cannot use yield keyword.',
  codeSolution: '// const generator =* () => { yield 1; }  // SyntaxError\nfunction* regularGenerator() {\n    yield 1;\n    yield 2;\n}\nconst gen = regularGenerator();\nconsole.log(gen.next().value);  // 1',
  hint: 'Use regular functions for generators (`function*`).'
},
{
  id: 'js_arrow_28',
  topicId: 'js_arrow',
  question: 'Use arrow function with ternary operator for conditional return.',
  mathSolution: 'Ternary inside arrow function for concise conditionals.',
  codeSolution: 'const getFee = (isMember) => isMember ? "$2.00" : "$10.00";\nconsole.log(getFee(true));   // $2.00\nconsole.log(getFee(false));  // $10.00',
  hint: 'Ternary operator works well with implicit return.'
},
{
  id: 'js_arrow_29',
  topicId: 'js_arrow',
  question: 'Use arrow function with logical operators for short-circuiting.',
  mathSolution: 'Logical && and || for conditional execution.',
  codeSolution: 'const greet = (name) => name && `Hello, ${name}!`;\nconsole.log(greet("John"));  // Hello, John!\nconsole.log(greet(null));    // null',
  hint: 'Logical operators can create concise conditional returns.'
},
{
  id: 'js_arrow_30',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a simple pipe/compose functions.',
  mathSolution: 'Arrow functions for functional composition.',
  codeSolution: 'const add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst compose = (f, g) => x => f(g(x));\nconst add2ThenMultiply3 = compose(multiply3, add2);\nconsole.log(add2ThenMultiply3(5));  // (5+2)*3 = 21',
  hint: 'Arrow functions enable functional composition.'
},
{
  id: 'js_arrow_31',
  topicId: 'js_arrow',
  question: 'Use arrow function with array find() method.',
  mathSolution: 'Arrow function as predicate for find.',
  codeSolution: 'const users = [\n    { id: 1, name: "Alice" },\n    { id: 2, name: "Bob" },\n    { id: 3, name: "Charlie" }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user);  // { id: 2, name: "Bob" }',
  hint: '`find()` returns first element matching condition.'
},
{
  id: 'js_arrow_32',
  topicId: 'js_arrow',
  question: 'Use arrow function with array some() method.',
  mathSolution: 'Arrow function checks if any element passes test.',
  codeSolution: 'const numbers = [1, 3, 5, 7, 8];\nconst hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven);  // true',
  hint: '`some()` returns true if any element passes.'
},
{
  id: 'js_arrow_33',
  topicId: 'js_arrow',
  question: 'Use arrow function with array every() method.',
  mathSolution: 'Arrow function checks if all elements pass test.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(n => n % 2 === 0);\nconsole.log(allEven);  // true',
  hint: '`every()` returns true only if all elements pass.'
},
{
  id: 'js_arrow_34',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a memoized function.',
  mathSolution: 'Arrow function with closure for cache.',
  codeSolution: 'const memoize = (fn) => {\n    const cache = {};\n    return (...args) => {\n        const key = JSON.stringify(args);\n        if (cache[key] === undefined) {\n            cache[key] = fn(...args);\n        }\n        return cache[key];\n    };\n};\nconst slowSquare = memoize(x => {\n    console.log("Computing...");\n    return x * x;\n});\nconsole.log(slowSquare(5));  // Computing... 25\nconsole.log(slowSquare(5));  // 25 (cached)',
  hint: 'Arrow functions work well for memoization.'
},
{
  id: 'js_arrow_35',
  topicId: 'js_arrow',
  question: 'Use arrow function with object method shorthand comparison.',
  mathSolution: 'Arrow functions vs method shorthand for object methods.',
  codeSolution: 'const obj = {\n    regularMethod() {\n        console.log(this);  // obj\n    },\n    arrowMethod: () => {\n        console.log(this);  // outer scope (window/global)\n    }\n};\nobj.regularMethod();  // {regularMethod: f, arrowMethod: f}\nobj.arrowMethod();    // Window/global object',
  hint: 'Use method shorthand for object methods needing `this`.'
},
{
  id: 'js_arrow_36',
  topicId: 'js_arrow',
  question: 'Use arrow function to curry a function.',
  mathSolution: 'Arrow functions enable easy currying.',
  codeSolution: 'const add = a => b => c => a + b + c;\nconsole.log(add(1)(2)(3));  // 6\nconst add5 = add(5);\nconst add5and3 = add5(3);\nconsole.log(add5and3(2));  // 10',
  hint: 'Currying transforms multi-argument function into chain.'
},
{
  id: 'js_arrow_37',
  topicId: 'js_arrow',
  question: 'Use arrow function to debounce a function.',
  mathSolution: 'Arrow function with closure for debouncing.',
  codeSolution: 'const debounce = (fn, delay) => {\n    let timeoutId;\n    return (...args) => {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => fn(...args), delay);\n    };\n};\nconst log = () => console.log("Called");\nconst debouncedLog = debounce(log, 500);\ndebouncedLog();\ndebouncedLog();\ndebouncedLog();  // Only one call after 500ms pause',
  hint: 'Debounce delays execution until after pause.'
},
{
  id: 'js_arrow_38',
  topicId: 'js_arrow',
  question: 'Use arrow function to throttle a function.',
  mathSolution: 'Arrow function with closure for throttling.',
  codeSolution: 'const throttle = (fn, delay) => {\n    let lastCall = 0;\n    return (...args) => {\n        const now = Date.now();\n        if (now - lastCall >= delay) {\n            lastCall = now;\n            fn(...args);\n        }\n    };\n};\nconst log = () => console.log("Called");\nconst throttledLog = throttle(log, 1000);\nthrottledLog();  // Called\nthrottledLog();  // Ignored (too soon)',
  hint: 'Throttle limits calls to once per time interval.'
},
{
  id: 'js_arrow_39',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a once function.',
  mathSolution: 'Arrow function that executes only once.',
  codeSolution: 'const once = (fn) => {\n    let called = false;\n    let result;\n    return (...args) => {\n        if (!called) {\n            called = true;\n            result = fn(...args);\n        }\n        return result;\n    };\n};\nconst initialize = once(() => {\n    console.log("Initializing...");\n    return 42;\n});\nconsole.log(initialize());  // Initializing... 42\nconsole.log(initialize());  // 42 (no second message)',
  hint: 'Once function runs only first time it\'s called.'
},
{
  id: 'js_arrow_40',
  topicId: 'js_arrow',
  question: 'Use arrow function to create a partial application.',
  mathSolution: 'Fix some arguments with arrow functions.',
  codeSolution: 'const multiply = (a, b, c) => a * b * c;\nconst multiplyBy2 = (b, c) => multiply(2, b, c);\nconst multiplyBy2And3 = (c) => multiply(2, 3, c);\nconsole.log(multiplyBy2(3, 4));     // 2*3*4 = 24\nconsole.log(multiplyBy2And3(5));    // 2*3*5 = 30',
  hint: 'Partial application fixes some arguments.'
},
{
  id: 'js_arrow_41',
  topicId: 'js_arrow',
  question: 'Use arrow function to flatten array with reduce.',
  mathSolution: 'Arrow function with spread for flattening.',
  codeSolution: 'const flatten = (arr) => arr.reduce((flat, item) => \n    flat.concat(Array.isArray(item) ? flatten(item) : item), []\n);\nconsole.log(flatten([1, [2, [3, [4]]]]));  // [1,2,3,4]',
  hint: 'Recursive arrow function for nested arrays.'
},
{
  id: 'js_arrow_42',
  topicId: 'js_arrow',
  question: 'Use arrow function to group array elements by property.',
  mathSolution: 'Arrow function with reduce for grouping.',
  codeSolution: 'const groupBy = (arr, key) => arr.reduce((group, item) => {\n    const val = item[key];\n    group[val] = group[val] || [];\n    group[val].push(item);\n    return group;\n}, {});\nconst people = [\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 30 },\n    { name: "Charlie", age: 25 }\n];\nconsole.log(groupBy(people, "age"));\n// { 25: [{name:"Alice",age:25}, {name:"Charlie",age:25}], 30: [{name:"Bob",age:30}] }',
  hint: 'Use reduce to group objects by property value.'
},
{
  id: 'js_arrow_43',
  topicId: 'js_arrow',
  question: 'Use arrow function to remove falsy values from array.',
  mathSolution: 'Arrow function with filter(Boolean) pattern.',
  codeSolution: 'const removeFalsy = (arr) => arr.filter(Boolean);\nconst values = [0, 1, false, 2, "", 3, null, undefined, "hello"];\nconsole.log(removeFalsy(values));  // [1, 2, 3, "hello"]',
  hint: '`filter(Boolean)` removes all falsy values.'
},
{
  id: 'js_arrow_44',
  topicId: 'js_arrow',
  question: 'Use arrow function to get unique values from array.',
  mathSolution: 'Arrow function with Set and spread.',
  codeSolution: 'const unique = (arr) => [...new Set(arr)];\nconsole.log(unique([1, 2, 2, 3, 4, 4, 5]));  // [1,2,3,4,5]',
  hint: 'Set automatically removes duplicates.'
},
{
  id: 'js_arrow_45',
  topicId: 'js_arrow',
  question: 'Use arrow function to chunk array into smaller arrays.',
  mathSolution: 'Arrow function with slice in loop.',
  codeSolution: 'const chunk = (arr, size) => {\n    return arr.reduce((chunks, item, index) => {\n        const chunkIndex = Math.floor(index / size);\n        if (!chunks[chunkIndex]) chunks[chunkIndex] = [];\n        chunks[chunkIndex].push(item);\n        return chunks;\n    }, []);\n};\nconsole.log(chunk([1,2,3,4,5,6,7,8], 3));  // [[1,2,3], [4,5,6], [7,8]]',
  hint: 'Calculate chunk index using division.'
},
{
  id: 'js_arrow_46',
  topicId: 'js_arrow',
  question: 'Use arrow function to deep clone an object.',
  mathSolution: 'Arrow function with recursion for deep clone.',
  codeSolution: 'const deepClone = (obj) => {\n    if (obj === null || typeof obj !== "object") return obj;\n    if (Array.isArray(obj)) return obj.map(item => deepClone(item));\n    return Object.keys(obj).reduce((clone, key) => {\n        clone[key] = deepClone(obj[key]);\n        return clone;\n    }, {});\n};\nconst original = { a: 1, b: { c: 2 } };\nconst copy = deepClone(original);\ncopy.b.c = 3;\nconsole.log(original.b.c);  // 2 (unchanged)',
  hint: 'Recursively copy nested objects and arrays.'
},
{
  id: 'js_arrow_47',
  topicId: 'js_arrow',
  question: 'Use arrow function to check if two objects are equal deeply.',
  mathSolution: 'Recursive arrow function for deep equality.',
  codeSolution: 'const deepEqual = (obj1, obj2) => {\n    if (obj1 === obj2) return true;\n    if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;\n    if (obj1 === null || obj2 === null) return false;\n    const keys1 = Object.keys(obj1);\n    const keys2 = Object.keys(obj2);\n    if (keys1.length !== keys2.length) return false;\n    return keys1.every(key => deepEqual(obj1[key], obj2[key]));\n};\nconsole.log(deepEqual({ a:1, b:{c:2} }, { a:1, b:{c:2} }));  // true\nconsole.log(deepEqual({ a:1 }, { a:2 }));  // false',
  hint: 'Recursively compare all properties.'
},
{
  id: 'js_arrow_48',
  topicId: 'js_arrow',
  question: 'Use arrow function to get intersection of two arrays.',
  mathSolution: 'Arrow function with filter and includes.',
  codeSolution: 'const intersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));\nconsole.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // [3, 4]',
  hint: 'Filter elements present in both arrays.'
},
{
  id: 'js_arrow_49',
  topicId: 'js_arrow',
  question: 'Use arrow function to get difference of two arrays.',
  mathSolution: 'Arrow function for symmetric difference.',
  codeSolution: 'const difference = (arr1, arr2) => [\n    ...arr1.filter(item => !arr2.includes(item)),\n    ...arr2.filter(item => !arr1.includes(item))\n];\nconsole.log(difference([1, 2, 3, 4], [3, 4, 5, 6]));  // [1, 2, 5, 6]',
  hint: 'Elements that are in one array but not both.'
},
{
  id: 'js_arrow_50',
  topicId: 'js_arrow',
  question: 'Use arrow function to calculate average of array numbers.',
  mathSolution: 'Arrow function with reduce for average calculation.',
  codeSolution: 'const average = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;\nconsole.log(average([10, 20, 30, 40, 50]));  // 30\nconsole.log(average([1, 2, 3, 4, 5]));       // 3',
  hint: 'Sum array then divide by length.'
}
);