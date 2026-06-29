QuizData.questions.push(
  //array-method ,dsa -basic
{
  id: 'js_array_methods_1',
  topicId: 'js_array_methods',
  question: 'Use push() method to add element to end of array.',
  mathSolution: 'push() adds element and returns new length.',
  codeSolution: 'const fruits = ["apple", "banana"];\nconst newLength = fruits.push("orange");\nconsole.log(fruits);     // ["apple", "banana", "orange"]\nconsole.log(newLength);  // 3',
  hint: 'push() modifies original array, returns new length.'
},
{
  id: 'js_array_methods_2',
  topicId: 'js_array_methods',
  question: 'Use pop() method to remove last element from array.',
  mathSolution: 'pop() removes last element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.pop();\nconsole.log(removed);  // orange\nconsole.log(fruits);   // ["apple", "banana"]',
  hint: 'pop() removes from end, returns removed element.'
},
{
  id: 'js_array_methods_3',
  topicId: 'js_array_methods',
  question: 'Use unshift() method to add element to beginning of array.',
  mathSolution: 'unshift() adds to start, returns new length.',
  codeSolution: 'const fruits = ["banana", "orange"];\nconst newLength = fruits.unshift("apple");\nconsole.log(fruits);     // ["apple", "banana", "orange"]\nconsole.log(newLength);  // 3',
  hint: 'unshift() adds to beginning, modifies original.'
},
{
  id: 'js_array_methods_4',
  topicId: 'js_array_methods',
  question: 'Use shift() method to remove first element from array.',
  mathSolution: 'shift() removes first element and returns it.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst removed = fruits.shift();\nconsole.log(removed);  // apple\nconsole.log(fruits);   // ["banana", "orange"]',
  hint: 'shift() removes from beginning, returns removed element.'
},
{
  id: 'js_array_methods_5',
  topicId: 'js_array_methods',
  question: 'Use map() method to create new array with transformed values.',
  mathSolution: 'map() returns new array with results of callback.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6, 8]\nconsole.log(numbers);  // [1, 2, 3, 4] (unchanged)',
  hint: 'map() creates new array, doesn\'t modify original.'
},
{
  id: 'js_array_methods_6',
  topicId: 'js_array_methods',
  question: 'Use filter() method to create array with elements passing test.',
  mathSolution: 'filter() returns new array with elements where callback returns true.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);  // [2, 4, 6]',
  hint: 'filter() keeps elements where callback returns true.'
},
{
  id: 'js_array_methods_7',
  topicId: 'js_array_methods',
  question: 'Use reduce() method to accumulate array values.',
  mathSolution: 'reduce() accumulates values left to right.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum);  // 15',
  hint: 'reduce() takes accumulator and current value.'
},
{
  id: 'js_array_methods_8',
  topicId: 'js_array_methods',
  question: 'Use reduceRight() method to accumulate from right to left.',
  mathSolution: 'reduceRight() reduces from rightmost element.',
  codeSolution: 'const words = ["world", " ", "hello"];\nconst sentence = words.reduceRight((acc, word) => acc + word, "");\nconsole.log(sentence);  // "hello world"',
  hint: 'reduceRight() works like reduce() but from right to left.'
},
{
  id: 'js_array_methods_9',
  topicId: 'js_array_methods',
  question: 'Use forEach() method to iterate over array elements.',
  mathSolution: 'forEach() executes callback for each element.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nfruits.forEach((fruit, index) => {\n    console.log(`${index}: ${fruit}`);\n});\n// 0: apple\n// 1: banana\n// 2: orange',
  hint: 'forEach() doesn\'t return anything, just iterates.'
},
{
  id: 'js_array_methods_10',
  topicId: 'js_array_methods',
  question: 'Use find() method to get first element matching condition.',
  mathSolution: 'find() returns first element where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(n => n > 10);\nconsole.log(found);  // 12',
  hint: 'find() returns element, not index.'
},
{
  id: 'js_array_methods_11',
  topicId: 'js_array_methods',
  question: 'Use findIndex() method to get index of first matching element.',
  mathSolution: 'findIndex() returns index of first element where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst index = numbers.findIndex(n => n > 10);\nconsole.log(index);  // 1',
  hint: 'findIndex() returns index or -1 if not found.'
},
{
  id: 'js_array_methods_12',
  topicId: 'js_array_methods',
  question: 'Use findLast() method to get last element matching condition.',
  mathSolution: 'findLast() returns last element where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.findLast(n => n > 10);\nconsole.log(found);  // 44',
  hint: 'findLast() searches from end of array.'
},
{
  id: 'js_array_methods_13',
  topicId: 'js_array_methods',
  question: 'Use findLastIndex() method to get index of last matching element.',
  mathSolution: 'findLastIndex() returns last index where callback returns true.',
  codeSolution: 'const numbers = [5, 12, 8, 130, 44];\nconst index = numbers.findLastIndex(n => n > 10);\nconsole.log(index);  // 4',
  hint: 'findLastIndex() searches from end, returns index.'
},
{
  id: 'js_array_methods_14',
  topicId: 'js_array_methods',
  question: 'Use some() method to check if any element passes test.',
  mathSolution: 'some() returns true if callback returns true for any element.',
  codeSolution: 'const numbers = [1, 3, 5, 7, 8];\nconst hasEven = numbers.some(n => n % 2 === 0);\nconsole.log(hasEven);  // true\n\nconst allOdd = numbers.some(n => n % 2 !== 0);\nconsole.log(allOdd);  // true',
  hint: 'some() returns boolean, stops on first true.'
},
{
  id: 'js_array_methods_15',
  topicId: 'js_array_methods',
  question: 'Use every() method to check if all elements pass test.',
  mathSolution: 'every() returns true only if callback returns true for all elements.',
  codeSolution: 'const numbers = [2, 4, 6, 8];\nconst allEven = numbers.every(n => n % 2 === 0);\nconsole.log(allEven);  // true\n\nconst mixed = [2, 4, 5, 8];\nconsole.log(mixed.every(n => n % 2 === 0));  // false',
  hint: 'every() returns false as soon as one fails.'
},
{
  id: 'js_array_methods_16',
  topicId: 'js_array_methods',
  question: 'Use includes() method to check if array contains value.',
  mathSolution: 'includes() returns true if value exists in array.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.includes("banana"));  // true\nconsole.log(fruits.includes("grape"));   // false',
  hint: 'includes() uses strict equality (===).'
},
{
  id: 'js_array_methods_17',
  topicId: 'js_array_methods',
  question: 'Use indexOf() method to find first index of value.',
  mathSolution: 'indexOf() returns first index or -1 if not found.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "banana"];\nconsole.log(fruits.indexOf("banana"));  // 1\nconsole.log(fruits.indexOf("grape"));   // -1',
  hint: 'indexOf() searches from start.'
},
{
  id: 'js_array_methods_18',
  topicId: 'js_array_methods',
  question: 'Use lastIndexOf() method to find last index of value.',
  mathSolution: 'lastIndexOf() returns last index or -1.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "banana"];\nconsole.log(fruits.lastIndexOf("banana"));  // 3\nconsole.log(fruits.lastIndexOf("grape"));    // -1',
  hint: 'lastIndexOf() searches from end.'
},
{
  id: 'js_array_methods_19',
  topicId: 'js_array_methods',
  question: 'Use sort() method to sort array alphabetically.',
  mathSolution: 'sort() sorts strings lexicographically by default.',
  codeSolution: 'const fruits = ["banana", "apple", "orange", "grape"];\nfruits.sort();\nconsole.log(fruits);  // ["apple", "banana", "grape", "orange"]',
  hint: 'sort() modifies original array.'
},
{
  id: 'js_array_methods_20',
  topicId: 'js_array_methods',
  question: 'Use sort() with compare function to sort numbers ascending.',
  mathSolution: 'compare function (a,b) => a - b sorts numbers ascending.',
  codeSolution: 'const numbers = [10, 5, 80, 2, 35];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers);  // [2, 5, 10, 35, 80]',
  hint: 'Return negative if a < b, positive if a > b.'
},
{
  id: 'js_array_methods_21',
  topicId: 'js_array_methods',
  question: 'Use sort() with compare function to sort numbers descending.',
  mathSolution: 'compare function (a,b) => b - a sorts descending.',
  codeSolution: 'const numbers = [10, 5, 80, 2, 35];\nnumbers.sort((a, b) => b - a);\nconsole.log(numbers);  // [80, 35, 10, 5, 2]',
  hint: 'Return b - a for descending order.'
},
{
  id: 'js_array_methods_22',
  topicId: 'js_array_methods',
  question: 'Use reverse() method to reverse array order.',
  mathSolution: 'reverse() reverses array in place.',
  codeSolution: 'const numbers = [1, 2, 3, 4, 5];\nnumbers.reverse();\nconsole.log(numbers);  // [5, 4, 3, 2, 1]',
  hint: 'reverse() modifies original array.'
},
{
  id: 'js_array_methods_23',
  topicId: 'js_array_methods',
  question: 'Use slice() method to extract portion of array.',
  mathSolution: 'slice(start, end) returns new array without modifying original.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango", "grape"];\nconst citrus = fruits.slice(1, 4);\nconsole.log(citrus);  // ["banana", "orange", "mango"]\nconsole.log(fruits);  // Original unchanged',
  hint: 'slice() doesn\'t modify original array.'
},
{
  id: 'js_array_methods_24',
  topicId: 'js_array_methods',
  question: 'Use slice() with negative indexes.',
  mathSolution: 'Negative index counts from end.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconst lastTwo = fruits.slice(-2);\nconsole.log(lastTwo);  // ["orange", "mango"]\nconst withoutLast = fruits.slice(0, -1);\nconsole.log(withoutLast);  // ["apple", "banana", "orange"]',
  hint: '-1 is last element, -2 is second last.'
},
{
  id: 'js_array_methods_25',
  topicId: 'js_array_methods',
  question: 'Use splice() method to remove elements at specific index.',
  mathSolution: 'splice(start, deleteCount) removes elements and returns them.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconst removed = fruits.splice(1, 2);\nconsole.log(removed);  // ["banana", "orange"]\nconsole.log(fruits);   // ["apple", "mango"]',
  hint: 'splice() modifies original array.'
},
{
  id: 'js_array_methods_26',
  topicId: 'js_array_methods',
  question: 'Use splice() to insert elements at specific index.',
  mathSolution: 'splice(start, 0, ...items) inserts without removing.',
  codeSolution: 'const fruits = ["apple", "mango"];\nfruits.splice(1, 0, "banana", "orange");\nconsole.log(fruits);  // ["apple", "banana", "orange", "mango"]',
  hint: 'Set deleteCount to 0 for insertion only.'
},
{
  id: 'js_array_methods_27',
  topicId: 'js_array_methods',
  question: 'Use splice() to replace elements at specific index.',
  mathSolution: 'splice(start, deleteCount, ...items) replaces elements.',
  codeSolution: 'const fruits = ["apple", "banana", "grape", "mango"];\nfruits.splice(2, 1, "orange", "kiwi");\nconsole.log(fruits);  // ["apple", "banana", "orange", "kiwi", "mango"]',
  hint: 'Replace deleteCount elements with new items.'
},
{
  id: 'js_array_methods_28',
  topicId: 'js_array_methods',
  question: 'Use concat() method to merge arrays.',
  mathSolution: 'concat() returns new array combining arrays.',
  codeSolution: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = arr1.concat(arr2);\nconsole.log(combined);  // [1, 2, 3, 4, 5, 6]',
  hint: 'concat() doesn\'t modify original arrays.'
},
{
  id: 'js_array_methods_29',
  topicId: 'js_array_methods',
  question: 'Use join() method to convert array to string.',
  mathSolution: 'join(separator) combines elements with separator.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconsole.log(fruits.join(", "));  // "apple, banana, orange"\nconsole.log(fruits.join("-"));   // "apple-banana-orange"',
  hint: 'join() returns string, default separator is comma.'
},
{
  id: 'js_array_methods_30',
  topicId: 'js_array_methods',
  question: 'Use split() method (string method) to convert string to array.',
  mathSolution: 'split() divides string into array based on separator.',
  codeSolution: 'const str = "apple,banana,orange";\nconst fruits = str.split(",");\nconsole.log(fruits);  // ["apple", "banana", "orange"]',
  hint: 'split() is string method that returns array.'
},
{
  id: 'js_array_methods_31',
  topicId: 'js_array_methods',
  question: 'Use flat() method to flatten nested array one level.',
  mathSolution: 'flat(depth) concatenates sub-arrays.',
  codeSolution: 'const nested = [1, [2, 3], [4, [5, 6]]];\nconst flatOnce = nested.flat();\nconsole.log(flatOnce);  // [1, 2, 3, 4, [5, 6]]',
  hint: 'flat() returns new array, default depth is 1.'
},
{
  id: 'js_array_methods_32',
  topicId: 'js_array_methods',
  question: 'Use flat() with Infinity to flatten completely.',
  mathSolution: 'flat(Infinity) flattens all nested arrays.',
  codeSolution: 'const nested = [1, [2, [3, [4, [5]]]]];\nconst flatAll = nested.flat(Infinity);\nconsole.log(flatAll);  // [1, 2, 3, 4, 5]',
  hint: 'Use Infinity for unlimited depth.'
},
{
  id: 'js_array_methods_33',
  topicId: 'js_array_methods',
  question: 'Use flatMap() method to map and flatten (one level).',
  mathSolution: 'flatMap() is map() followed by flat() of depth 1.',
  codeSolution: 'const sentences = ["Hello world", "Good morning"];\nconst words = sentences.flatMap(s => s.split(" "));\nconsole.log(words);  // ["Hello", "world", "Good", "morning"]\n\n// Equivalent to: sentences.map(s => s.split(" ")).flat()',
  hint: 'flatMap() is more efficient than map().flat().'
},
{
  id: 'js_array_methods_34',
  topicId: 'js_array_methods',
  question: 'Use fill() method to fill array with static value.',
  mathSolution: 'fill(value, start, end) fills portion of array.',
  codeSolution: 'const arr = new Array(5).fill(0);\nconsole.log(arr);  // [0, 0, 0, 0, 0]\n\nconst numbers = [1, 2, 3, 4, 5];\nnumbers.fill(0, 1, 4);\nconsole.log(numbers);  // [1, 0, 0, 0, 5]',
  hint: 'fill() modifies original array.'
},
{
  id: 'js_array_methods_35',
  topicId: 'js_array_methods',
  question: 'Use Array.from() to create array from iterable.',
  mathSolution: 'Array.from() converts iterable or array-like to array.',
  codeSolution: 'const str = "hello";\nconst arr = Array.from(str);\nconsole.log(arr);  // ["h", "e", "l", "l", "o"]\n\nconst set = new Set([1, 2, 3]);\nconsole.log(Array.from(set));  // [1, 2, 3]',
  hint: 'Array.from() works on any iterable.'
},
{
  id: 'js_array_methods_36',
  topicId: 'js_array_methods',
  question: 'Use Array.from() with mapping function.',
  mathSolution: 'Array.from(iterable, mapper) creates mapped array.',
  codeSolution: 'const numbers = Array.from({ length: 5 }, (_, i) => i + 1);\nconsole.log(numbers);  // [1, 2, 3, 4, 5]\n\nconst doubled = Array.from([1, 2, 3], x => x * 2);\nconsole.log(doubled);  // [2, 4, 6]',
  hint: 'Second argument is map function.'
},
{
  id: 'js_array_methods_37',
  topicId: 'js_array_methods',
  question: 'Use Array.of() to create array from arguments.',
  mathSolution: 'Array.of() creates array with given elements.',
  codeSolution: 'const arr1 = Array.of(1, 2, 3);\nconsole.log(arr1);  // [1, 2, 3]\n\nconst arr2 = Array.of(5);\nconsole.log(arr2);  // [5] (not [empty x5] like Array(5))',
  hint: 'Array.of() avoids ambiguity of Array() constructor.'
},
{
  id: 'js_array_methods_38',
  topicId: 'js_array_methods',
  question: 'Use isArray() method to check if value is array.',
  mathSolution: 'Array.isArray() returns true for arrays.',
  codeSolution: 'console.log(Array.isArray([1, 2, 3]));  // true\nconsole.log(Array.isArray({ a: 1 }));      // false\nconsole.log(Array.isArray("hello"));        // false',
  hint: 'Always use Array.isArray() instead of typeof for arrays.'
},
{
  id: 'js_array_methods_39',
  topicId: 'js_array_methods',
  question: 'Use keys() method to get iterator of indices.',
  mathSolution: 'keys() returns iterator of array indices.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst keys = fruits.keys();\nfor (const key of keys) {\n    console.log(key);  // 0, 1, 2\n}',
  hint: 'keys() returns iterator, not array.'
},
{
  id: 'js_array_methods_40',
  topicId: 'js_array_methods',
  question: 'Use values() method to get iterator of values.',
  mathSolution: 'values() returns iterator of array values.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst values = fruits.values();\nfor (const value of values) {\n    console.log(value);  // apple, banana, orange\n}',
  hint: 'values() returns iterator of values.'
},
{
  id: 'js_array_methods_41',
  topicId: 'js_array_methods',
  question: 'Use entries() method to get iterator of [index, value] pairs.',
  mathSolution: 'entries() returns iterator of key-value pairs.',
  codeSolution: 'const fruits = ["apple", "banana", "orange"];\nconst entries = fruits.entries();\nfor (const [index, value] of entries) {\n    console.log(`${index}: ${value}`);\n}\n// 0: apple\n// 1: banana\n// 2: orange',
  hint: 'entries() works well with destructuring.'
},
{
  id: 'js_array_methods_42',
  topicId: 'js_array_methods',
  question: 'Use copyWithin() method to copy part of array to another location.',
  mathSolution: 'copyWithin(target, start, end) copies elements within array.',
  codeSolution: 'const arr = [1, 2, 3, 4, 5];\narr.copyWithin(0, 3, 5);\nconsole.log(arr);  // [4, 5, 3, 4, 5]\n\nconst arr2 = [1, 2, 3, 4, 5];\narr2.copyWithin(2, 0, 2);\nconsole.log(arr2);  // [1, 2, 1, 2, 5]',
  hint: 'copyWithin() modifies original array.'
},
{
  id: 'js_array_methods_43',
  topicId: 'js_array_methods',
  question: 'Use at() method to access element with negative index.',
  mathSolution: 'at(index) supports negative indexing from end.',
  codeSolution: 'const fruits = ["apple", "banana", "orange", "mango"];\nconsole.log(fruits.at(0));   // apple\nconsole.log(fruits.at(-1));  // mango\nconsole.log(fruits.at(-2));  // orange',
  hint: 'at(-1) is same as arr[arr.length - 1].'
},
{
  id: 'js_array_methods_44',
  topicId: 'js_array_methods',
  question: 'Use toReversed() method (ES2023) to reverse without modifying.',
  mathSolution: 'toReversed() returns reversed copy, original unchanged.',
  codeSolution: 'const original = [1, 2, 3, 4, 5];\nconst reversed = original.toReversed();\nconsole.log(reversed);  // [5, 4, 3, 2, 1]\nconsole.log(original);  // [1, 2, 3, 4, 5] (unchanged)',
  hint: 'toReversed() is immutable version of reverse().'
},
{
  id: 'js_array_methods_45',
  topicId: 'js_array_methods',
  question: 'Use toSorted() method (ES2023) to sort without modifying.',
  mathSolution: 'toSorted() returns sorted copy, original unchanged.',
  codeSolution: 'const original = [3, 1, 4, 1, 5];\nconst sorted = original.toSorted((a, b) => a - b);\nconsole.log(sorted);   // [1, 1, 3, 4, 5]\nconsole.log(original); // [3, 1, 4, 1, 5] (unchanged)',
  hint: 'toSorted() is immutable version of sort().'
},
{
  id: 'js_array_methods_46',
  topicId: 'js_array_methods',
  question: 'Use toSpliced() method (ES2023) to splice without modifying.',
  mathSolution: 'toSpliced() returns spliced copy, original unchanged.',
  codeSolution: 'const original = [1, 2, 3, 4, 5];\nconst spliced = original.toSpliced(1, 2, 10, 20);\nconsole.log(spliced);   // [1, 10, 20, 4, 5]\nconsole.log(original);  // [1, 2, 3, 4, 5] (unchanged)',
  hint: 'toSpliced() is immutable version of splice().'
},
{
  id: 'js_array_methods_47',
  topicId: 'js_array_methods',
  question: 'Use with() method (ES2023) to replace single element immutably.',
  mathSolution: 'with(index, value) returns new array with changed element.',
  codeSolution: 'const original = [1, 2, 3, 4, 5];\nconst updated = original.with(2, 99);\nconsole.log(updated);   // [1, 2, 99, 4, 5]\nconsole.log(original);  // [1, 2, 3, 4, 5] (unchanged)',
  hint: 'with() is immutable alternative to bracket assignment.'
},
{
  id: 'js_array_methods_48',
  topicId: 'js_array_methods',
  question: 'Use groupBy() method to group array elements by key.',
  mathSolution: 'groupBy() groups elements based on callback return value.',
  codeSolution: 'const people = [\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 30 },\n    { name: "Charlie", age: 25 }\n];\nconst grouped = Object.groupBy(people, person => person.age);\nconsole.log(grouped);\n// {\n//   25: [{name:"Alice",age:25}, {name:"Charlie",age:25}],\n//   30: [{name:"Bob",age:30}]\n// }',
  hint: 'Object.groupBy() is static method (ES2024).'
},
{
  id: 'js_array_methods_49',
  topicId: 'js_array_methods',
  question: 'Use groupByToMap() to group elements into Map.',
  mathSolution: 'groupByToMap() returns Map with grouped elements.',
  codeSolution: 'const people = [\n    { name: "Alice", age: 25 },\n    { name: "Bob", age: 30 },\n    { name: "Charlie", age: 25 }\n];\nconst grouped = Map.groupBy(people, person => person.age);\nconsole.log(grouped.get(25));  // [{name:"Alice",age:25}, {name:"Charlie",age:25}]\nconsole.log(grouped.get(30));  // [{name:"Bob",age:30}]',
  hint: 'Map.groupBy() returns Map instead of object.'
},
{
  id: 'js_array_methods_50',
  topicId: 'js_array_methods',
  question: 'Comprehensive: Chain multiple array methods for data processing.',
  mathSolution: 'Combine filter, map, reduce for data pipeline.',
  codeSolution: 'const products = [\n    { name: "Laptop", price: 1000, inStock: true },\n    { name: "Phone", price: 500, inStock: false },\n    { name: "Tablet", price: 300, inStock: true },\n    { name: "Monitor", price: 200, inStock: true },\n    { name: "Keyboard", price: 50, inStock: false }\n];\n\nconst totalValue = products\n    .filter(p => p.inStock)           // Keep only in stock\n    .map(p => p.price)                 // Extract prices\n    .reduce((sum, price) => sum + price, 0);  // Sum prices\n\nconsole.log(totalValue);  // 1000 + 300 + 200 = 1500',
  hint: 'Method chaining creates readable data pipelines.'
},
//json-handling
{
  id: 'js_json_1',
  topicId: 'js_json',
  question: 'Convert JavaScript object to JSON string using JSON.stringify().',
  mathSolution: 'JSON.stringify() serializes object to JSON string.',
  codeSolution: 'const person = { name: "John", age: 30, city: "New York" };\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString);  // {"name":"John","age":30,"city":"New York"}',
  hint: 'Use JSON.stringify() to convert object to string.'
},
{
  id: 'js_json_2',
  topicId: 'js_json',
  question: 'Convert JSON string back to JavaScript object using JSON.parse().',
  mathSolution: 'JSON.parse() deserializes JSON string to object.',
  codeSolution: 'const jsonString = \'{"name":"John","age":30,"city":"New York"}\';\nconst person = JSON.parse(jsonString);\nconsole.log(person.name);  // John\nconsole.log(person.age);   // 30',
  hint: 'Use JSON.parse() to convert JSON string to object.'
},
{
  id: 'js_json_3',
  topicId: 'js_json',
  question: 'Pretty print JSON with indentation using JSON.stringify() spacing parameter.',
  mathSolution: 'Add spacing parameter for formatted output.',
  codeSolution: 'const person = { name: "John", age: 30, address: { city: "NYC", zip: 10001 } };\nconst prettyJson = JSON.stringify(person, null, 2);\nconsole.log(prettyJson);\n// {\n//   "name": "John",\n//   "age": 30,\n//   "address": {\n//     "city": "NYC",\n//     "zip": 10001\n//   }\n// }',
  hint: 'JSON.stringify(obj, null, 2) formats with 2 spaces.'
},
{
  id: 'js_json_4',
  topicId: 'js_json',
  question: 'Use replacer function in JSON.stringify() to filter properties.',
  mathSolution: 'Replacer function controls which properties are included.',
  codeSolution: 'const user = { id: 1, name: "John", password: "secret", email: "john@example.com" };\nconst safeJson = JSON.stringify(user, (key, value) => {\n    if (key === "password") return undefined;\n    return value;\n});\nconsole.log(safeJson);  // {"id":1,"name":"John","email":"john@example.com"}',
  hint: 'Return undefined from replacer to omit property.'
},
{
  id: 'js_json_5',
  topicId: 'js_json',
  question: 'Use replacer array in JSON.stringify() to whitelist properties.',
  mathSolution: 'Replacer array specifies which properties to include.',
  codeSolution: 'const user = { id: 1, name: "John", age: 30, email: "john@example.com" };\nconst filteredJson = JSON.stringify(user, ["id", "name"]);\nconsole.log(filteredJson);  // {"id":1,"name":"John"}',
  hint: 'Pass array of property names as replacer to whitelist.'
},
{
  id: 'js_json_6',
  topicId: 'js_json',
  question: 'Parse JSON with reviver function to transform values.',
  mathSolution: 'Reviver function can modify parsed values.',
  codeSolution: 'const jsonString = \'{"name":"John","birthDate":"1990-01-15T00:00:00.000Z"}\';\nconst data = JSON.parse(jsonString, (key, value) => {\n    if (key === "birthDate") return new Date(value);\n    return value;\n});\nconsole.log(data.birthDate instanceof Date);  // true\nconsole.log(data.birthDate.getFullYear());    // 1990',
  hint: 'Use reviver to convert date strings to Date objects.'
},
{
  id: 'js_json_7',
  topicId: 'js_json',
  question: 'Handle circular reference error in JSON.stringify().',
  mathSolution: 'Circular references cause TypeError, need custom replacer.',
  codeSolution: 'const obj = { name: "John" };\nobj.self = obj;  // Circular reference\n\n// This would throw: JSON.stringify(obj);\n\n// Solution: Custom replacer to handle circular references\nfunction circularReplacer() {\n    const seen = new WeakSet();\n    return (key, value) => {\n        if (typeof value === "object" && value !== null) {\n            if (seen.has(value)) return "[Circular]";\n            seen.add(value);\n        }\n        return value;\n    };\n}\nconst safeJson = JSON.stringify(obj, circularReplacer());\nconsole.log(safeJson);  // {"name":"John","self":"[Circular]"}',
  hint: 'Track seen objects in WeakSet to detect circular references.'
},
{
  id: 'js_json_8',
  topicId: 'js_json',
  question: 'Handle BigInt serialization in JSON.',
  mathSolution: 'JSON.stringify() throws error with BigInt, need custom replacer.',
  codeSolution: 'const data = { id: 12345678901234567890n, name: "John" };\n// JSON.stringify(data);  // TypeError: Do not know how to serialize a BigInt\n\nconst jsonString = JSON.stringify(data, (key, value) => {\n    if (typeof value === "bigint") {\n        return value.toString();\n    }\n    return value;\n});\nconsole.log(jsonString);  // {"id":"12345678901234567890","name":"John"}',
  hint: 'Convert BigInt to string in replacer function.'
},
{
  id: 'js_json_9',
  topicId: 'js_json',
  question: 'Serialize Date objects to ISO string.',
  mathSolution: 'Date objects become ISO strings in JSON.',
  codeSolution: 'const event = { name: "Meeting", date: new Date("2024-01-15T10:30:00Z") };\nconst jsonString = JSON.stringify(event);\nconsole.log(jsonString);  // {"name":"Meeting","date":"2024-01-15T10:30:00.000Z"}\n\n// Parse back\nconst parsed = JSON.parse(jsonString);\nparsed.date = new Date(parsed.date);  // Convert back to Date\nconsole.log(parsed.date.getHours());  // 10',
  hint: 'Date objects become ISO strings, need conversion on parse.'
},
{
  id: 'js_json_10',
  topicId: 'js_json',
  question: 'Serialize undefined, Symbol, and function values.',
  mathSolution: 'These values are omitted or become null in JSON.',
  codeSolution: 'const data = {\n    name: "John",\n    age: undefined,      // Omitted\n    id: Symbol("id"),    // Omitted\n    greet: function() {}  // Omitted\n};\nconsole.log(JSON.stringify(data));  // {"name":"John"}\n\n// In arrays, they become null\nconst arr = [1, undefined, 2, function() {}, 3];\nconsole.log(JSON.stringify(arr));  // [1,null,2,null,3]',
  hint: 'undefined, Symbol, functions are omitted in objects, become null in arrays.'
},
{
  id: 'js_json_11',
  topicId: 'js_json',
  question: 'Handle JSON parsing errors with try-catch.',
  mathSolution: 'Always wrap JSON.parse in try-catch for invalid JSON.',
  codeSolution: 'function safeJSONParse(jsonString, fallback = null) {\n    try {\n        return JSON.parse(jsonString);\n    } catch (error) {\n        console.error("Invalid JSON:", error.message);\n        return fallback;\n    }\n}\n\nconsole.log(safeJSONParse(\'{"name":"John"}\'));  // {name: "John"}\nconsole.log(safeJSONParse(\'invalid json\'));     // null (with error log)',
  hint: 'Always use try-catch with JSON.parse for user input.'
},
{
  id: 'js_json_12',
  topicId: 'js_json',
  question: 'Serialize Map and Set objects to JSON.',
  mathSolution: 'Map and Set need conversion to array for JSON.',
  codeSolution: 'const map = new Map([["name", "John"], ["age", 30]]);\nconst set = new Set([1, 2, 3, 3, 4]);\n\nconst data = {\n    map: Array.from(map.entries()),\n    set: Array.from(set)\n};\n\nconst jsonString = JSON.stringify(data);\nconsole.log(jsonString);  // {"map":[["name","John"],["age",30]],"set":[1,2,3,4]}\n\n// Parse back\nconst parsed = JSON.parse(jsonString);\nconst recoveredMap = new Map(parsed.map);\nconst recoveredSet = new Set(parsed.set);\nconsole.log(recoveredMap.get("name"));  // John',
  hint: 'Convert Map/Set to arrays before stringifying.'
},
{
  id: 'js_json_13',
  topicId: 'js_json',
  question: 'Use toJSON() method for custom serialization.',
  mathSolution: 'Objects with toJSON() method control their serialization.',
  codeSolution: 'class User {\n    constructor(name, password) {\n        this.name = name;\n        this.password = password;\n    }\n    \n    toJSON() {\n        // Don\'t include password in JSON\n        return {\n            name: this.name,\n            hashed: true\n        };\n    }\n}\n\nconst user = new User("John", "secret123");\nconsole.log(JSON.stringify(user));  // {"name":"John","hashed":true}',
  hint: 'Implement toJSON() method for custom JSON representation.'
},
{
  id: 'js_json_14',
  topicId: 'js_json',
  question: 'Deep clone object using JSON.parse(JSON.stringify()).',
  mathSolution: 'JSON methods create deep copy (with limitations).',
  codeSolution: 'const original = {\n    name: "John",\n    address: {\n        city: "NYC",\n        zip: 10001\n    },\n    hobbies: ["reading", "gaming"]\n};\n\nconst deepCopy = JSON.parse(JSON.stringify(original));\ndeepCopy.address.city = "Boston";\ndeepCopy.hobbies.push("swimming");\n\nconsole.log(original.address.city);  // NYC (unchanged)\nconsole.log(original.hobbies);       // ["reading", "gaming"] (unchanged)',
  hint: 'Use JSON methods for quick deep clone (loses functions, undefined, dates).'
},
{
  id: 'js_json_15',
  topicId: 'js_json',
  question: 'Understand JSON.stringify() limitations for deep cloning.',
  mathSolution: 'JSON methods cannot clone functions, undefined, symbols, or circular refs.',
  codeSolution: 'const original = {\n    name: "John",\n    greet: () => "Hello",  // Function - will be lost\n    age: undefined,         // Undefined - will be lost\n    id: Symbol("id"),       // Symbol - will be lost\n    date: new Date()        // Date - becomes string\n};\n\nconst clone = JSON.parse(JSON.stringify(original));\nconsole.log(clone.greet);  // undefined\nconsole.log(clone.age);    // undefined\nconsole.log(clone.id);     // undefined\nconsole.log(typeof clone.date);  // string (not Date object)',
  hint: 'JSON clone loses functions, undefined, symbols, and converts dates to strings.'
},
{
  id: 'js_json_16',
  topicId: 'js_json',
  question: 'Format JSON for readability with custom spacing.',
  mathSolution: 'Use third parameter for indentation (spaces or string).',
  codeSolution: 'const data = { name: "John", age: 30, address: { city: "NYC" } };\n\n// 4 spaces\nconsole.log(JSON.stringify(data, null, 4));\n\n// Tab character\nconsole.log(JSON.stringify(data, null, "\\t"));\n\n// Custom string\nconsole.log(JSON.stringify(data, null, "--"));',
  hint: 'Third parameter in JSON.stringify() controls formatting.'
},
{
  id: 'js_json_17',
  topicId: 'js_json',
  question: 'Validate if string is valid JSON.',
  mathSolution: 'Try-catch JSON.parse to check validity.',
  codeSolution: 'function isValidJSON(str) {\n    try {\n        JSON.parse(str);\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\n\nconsole.log(isValidJSON(\'{"name":"John"}\'));  // true\nconsole.log(isValidJSON(\'name: John\'));       // false\nconsole.log(isValidJSON(\'42\'));               // true (valid JSON number)\nconsole.log(isValidJSON(\'"hello"\'));          // true (valid JSON string)',
  hint: 'Use try-catch JSON.parse() to validate JSON strings.'
},
{
  id: 'js_json_18',
  topicId: 'js_json',
  question: 'Remove circular references before JSON.stringify().',
  mathSolution: 'Use replacer with WeakSet to detect cycles.',
  codeSolution: 'function getCircularReplacer() {\n    const seen = new WeakSet();\n    return (key, value) => {\n        if (typeof value === "object" && value !== null) {\n            if (seen.has(value)) return "[Circular Reference]";\n            seen.add(value);\n        }\n        return value;\n    };\n}\n\nconst obj = { a: 1 };\nobj.b = obj;  // Circular reference\n\nconst jsonString = JSON.stringify(obj, getCircularReplacer());\nconsole.log(jsonString);  // {"a":1,"b":"[Circular Reference]"}',
  hint: 'Track seen objects to detect and handle circular references.'
},
{
  id: 'js_json_19',
  topicId: 'js_json',
  question: 'Serialize objects with getters to JSON.',
  mathSolution: 'Getters are properly serialized by JSON.stringify().',
  codeSolution: 'const person = {\n    firstName: "John",\n    lastName: "Doe",\n    get fullName() {\n        return `${this.firstName} ${this.lastName}`;\n    }\n};\n\nconst jsonString = JSON.stringify(person);\nconsole.log(jsonString);  // {"firstName":"John","lastName":"Doe","fullName":"John Doe"}',
  hint: 'JSON.stringify() includes values from getters.'
},
{
  id: 'js_json_20',
  topicId: 'js_json',
  question: 'Escape special characters in JSON strings.',
  mathSolution: 'JSON.stringify() automatically escapes special characters.',
  codeSolution: 'const data = {\n    message: \'He said, "Hello!\\\\nHow are you?"\',\n    path: "C:\\\\Users\\\\John",\n    unicode: "😀🎉"\n};\n\nconst jsonString = JSON.stringify(data);\nconsole.log(jsonString);\n// {"message":"He said, \\"Hello!\\nHow are you?\\"","path":"C:\\\\Users\\\\John","unicode":"😀🎉"}\n\n// Parse back (works correctly)\nconst parsed = JSON.parse(jsonString);\nconsole.log(parsed.message);  // He said, "Hello!\nHow are you?"',
  hint: 'JSON.stringify() handles quotes, backslashes, newlines, and Unicode.'
},
{
  id: 'js_json_21',
  topicId: 'js_json',
  question: 'Compare two JSON objects for equality.',
  mathSolution: 'Stringify both and compare strings (order-sensitive).',
  codeSolution: 'function isJSONEqual(obj1, obj2) {\n    return JSON.stringify(obj1) === JSON.stringify(obj2);\n}\n\nconst objA = { name: "John", age: 30 };\nconst objB = { name: "John", age: 30 };\nconst objC = { age: 30, name: "John" };\n\nconsole.log(isJSONEqual(objA, objB));  // true\nconsole.log(isJSONEqual(objA, objC));  // false (different key order)\n\n// For deep equality ignoring order, use library like Lodash or custom function',
  hint: 'String comparison is order-sensitive; key order matters.'
},
{
  id: 'js_json_22',
  topicId: 'js_json',
  question: 'Sort object keys before stringifying for consistent output.',
  mathSolution: 'Use replacer to sort keys before serialization.',
  codeSolution: 'function stringifySorted(obj, space = 0) {\n    const sortedKeys = Object.keys(obj).sort();\n    const sortedObj = {};\n    sortedKeys.forEach(key => {\n        sortedObj[key] = obj[key];\n    });\n    return JSON.stringify(sortedObj, null, space);\n}\n\nconst obj = { b: 2, a: 1, c: 3 };\nconsole.log(stringifySorted(obj));  // {"a":1,"b":2,"c":3}\nconsole.log(JSON.stringify(obj));    // {"b":2,"a":1,"c":3}',
  hint: 'Sort keys before stringifying for deterministic output.'
},
{
  id: 'js_json_23',
  topicId: 'js_json',
  question: 'Parse large JSON files without loading entire file (streaming).',
  mathSolution: 'Use streaming JSON parsers for large data.',
  codeSolution: '// For Node.js streaming JSON parsing\n// const { parse } = require("jsonstream2");\n// \n// async function processLargeJSON(filename) {\n//     const stream = fs.createReadStream(filename);\n//     const parser = parse("*");\n//     \n//     stream.pipe(parser);\n//     \n//     for await (const item of parser) {\n//         console.log(item);  // Process each item\n//     }\n// }\n\n// Browser: Use streaming with fetch\nasync function streamJSONArray(url, onItem) {\n    const response = await fetch(url);\n    const reader = response.body.getReader();\n    const decoder = new TextDecoder();\n    let buffer = "";\n    \n    while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        \n        buffer += decoder.decode(value, { stream: true });\n        const lines = buffer.split("\\n");\n        buffer = lines.pop();\n        \n        for (const line of lines) {\n            if (line.trim()) {\n                try {\n                    onItem(JSON.parse(line));\n                } catch (e) {\n                    console.error("Parse error:", e);\n                }\n            }\n        }\n    }\n}',
  hint: 'Use streaming for large JSON files to reduce memory usage.'
},
{
  id: 'js_json_24',
  topicId: 'js_json',
  question: 'Merge multiple JSON objects.',
  mathSolution: 'Use spread operator or Object.assign() to merge.',
  codeSolution: 'const obj1 = { name: "John", age: 30 };\nconst obj2 = { city: "NYC", country: "USA" };\nconst obj3 = { age: 31, job: "Engineer" };\n\nconst merged = { ...obj1, ...obj2, ...obj3 };\nconsole.log(merged);  // { name: "John", age: 31, city: "NYC", country: "USA", job: "Engineer" }\n\n// Or using Object.assign\nconst merged2 = Object.assign({}, obj1, obj2, obj3);\nconsole.log(merged2);  // Same result',
  hint: 'Later objects override properties from earlier ones.'
},
{
  id: 'js_json_25',
  topicId: 'js_json',
  question: 'Extract specific properties from JSON object.',
  mathSolution: 'Use destructuring or custom function to pick properties.',
  codeSolution: 'const user = { id: 1, name: "John", age: 30, email: "john@example.com", password: "secret" };\n\n// Using destructuring\nconst { password, ...safeUser } = user;\nconsole.log(safeUser);  // { id: 1, name: "John", age: 30, email: "john@example.com" }\n\n// Custom pick function\nfunction pick(obj, keys) {\n    return keys.reduce((result, key) => {\n        if (key in obj) result[key] = obj[key];\n        return result;\n    }, {});\n}\n\nconst partial = pick(user, ["id", "name"]);\nconsole.log(partial);  // { id: 1, name: "John" }',
  hint: 'Use destructuring with rest operator to exclude properties.'
},
{
  id: 'js_json_26',
  topicId: 'js_json',
  question: 'Transform JSON data structure (remap keys).',
  mathSolution: 'Create new object with transformed keys.',
  codeSolution: 'const data = {\n    first_name: "John",\n    last_name: "Doe",\n    user_age: 30\n};\n\nconst transformed = Object.keys(data).reduce((result, key) => {\n    const newKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());\n    result[newKey] = data[key];\n    return result;\n}, {});\n\nconsole.log(transformed);  // { firstName: "John", lastName: "Doe", userAge: 30 }',
  hint: 'Use reduce with regex to transform keys.'
},
{
  id: 'js_json_27',
  topicId: 'js_json',
  question: 'Flatten nested JSON object into single level.',
  mathSolution: 'Recursively flatten nested structures.',
  codeSolution: 'function flattenJSON(obj, parentKey = "", result = {}) {\n    for (let key in obj) {\n        const newKey = parentKey ? `${parentKey}.${key}` : key;\n        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {\n            flattenJSON(obj[key], newKey, result);\n        } else {\n            result[newKey] = obj[key];\n        }\n    }\n    return result;\n}\n\nconst nested = {\n    user: {\n        name: "John",\n        address: {\n            city: "NYC",\n            zip: 10001\n        }\n    },\n    active: true\n};\n\nconst flattened = flattenJSON(nested);\nconsole.log(flattened);\n// {\n//   "user.name": "John",\n//   "user.address.city": "NYC",\n//   "user.address.zip": 10001,\n//   "active": true\n// }',
  hint: 'Recursively traverse object to create flattened structure.'
},
{
  id: 'js_json_28',
  topicId: 'js_json',
  question: 'Unflatten JSON object (restore nested structure).',
  mathSolution: 'Split dot notation keys to rebuild nested object.',
  codeSolution: 'function unflattenJSON(flatObj) {\n    const result = {};\n    for (let key in flatObj) {\n        const parts = key.split(".");\n        let current = result;\n        for (let i = 0; i < parts.length - 1; i++) {\n            const part = parts[i];\n            if (!current[part]) current[part] = {};\n            current = current[part];\n        }\n        current[parts[parts.length - 1]] = flatObj[key];\n    }\n    return result;\n}\n\nconst flattened = {\n    "user.name": "John",\n    "user.address.city": "NYC",\n    "user.address.zip": 10001,\n    "active": true\n};\n\nconst nested = unflattenJSON(flattened);\nconsole.log(nested);\n// {\n//   user: { name: "John", address: { city: "NYC", zip: 10001 } },\n//   active: true\n// }',
  hint: 'Split dot notation and build nested structure.'
},
{
  id: 'js_json_29',
  topicId: 'js_json',
  question: 'Remove null and undefined values from JSON object.',
  mathSolution: 'Filter out null/undefined recursively.',
  codeSolution: 'function removeNullUndefined(obj) {\n    if (Array.isArray(obj)) {\n        return obj.map(item => removeNullUndefined(item)).filter(item => item !== null && item !== undefined);\n    } else if (obj !== null && typeof obj === "object") {\n        return Object.keys(obj).reduce((result, key) => {\n            const value = removeNullUndefined(obj[key]);\n            if (value !== null && value !== undefined) {\n                result[key] = value;\n            }\n            return result;\n        }, {});\n    }\n    return obj;\n}\n\nconst data = {\n    name: "John",\n    age: null,\n    city: undefined,\n    address: {\n        street: "Main St",\n        zip: null,\n        country: "USA"\n    },\n    tags: [null, "active", undefined, "verified"]\n};\n\nconst cleaned = removeNullUndefined(data);\nconsole.log(cleaned);\n// {\n//   name: "John",\n//   address: { street: "Main St", country: "USA" },\n//   tags: ["active", "verified"]\n// }',
  hint: 'Recursively clean object and array properties.'
},
{
  id: 'js_json_30',
  topicId: 'js_json',
  question: 'Deep freeze JSON object using Object.freeze() recursively.',
  mathSolution: 'Recursively freeze all nested objects.',
  codeSolution: 'function deepFreeze(obj) {\n    Object.freeze(obj);\n    Object.keys(obj).forEach(key => {\n        if (typeof obj[key] === "object" && obj[key] !== null && !Object.isFrozen(obj[key])) {\n            deepFreeze(obj[key]);\n        }\n    });\n    return obj;\n}\n\nconst config = {\n    api: {\n        url: "https://api.example.com",\n        timeout: 5000\n    },\n    version: "1.0"\n};\n\ndeepFreeze(config);\n// config.api.timeout = 6000;  // TypeError in strict mode (fails silently in sloppy mode)\nconsole.log(Object.isFrozen(config));      // true\nconsole.log(Object.isFrozen(config.api));  // true',
  hint: 'Deep freeze prevents modification of JSON objects.'
},
{
  id: 'js_json_31',
  topicId: 'js_json',
  question: 'Calculate size of JSON object in bytes.',
  mathSolution: 'Stringify and measure length in bytes.',
  codeSolution: 'function getJSONSize(obj) {\n    const jsonString = JSON.stringify(obj);\n    // UTF-8: each character is 1-4 bytes\n    return new Blob([jsonString]).size;\n}\n\nconst data = {\n    name: "John Doe",\n    age: 30,\n    address: "123 Main Street, New York, NY 10001"\n};\n\nconst sizeInBytes = getJSONSize(data);\nconsole.log(`JSON size: ${sizeInBytes} bytes`);\nconsole.log(`JSON size: ${(sizeInBytes / 1024).toFixed(2)} KB`);\n\n// Alternative: manual UTF-8 byte calculation\nfunction utf8Length(str) {\n    let length = 0;\n    for (let i = 0; i < str.length; i++) {\n        const code = str.charCodeAt(i);\n        if (code < 0x80) length += 1;\n        else if (code < 0x800) length += 2;\n        else length += 3;\n    }\n    return length;\n}',
  hint: 'Use Blob or TextEncoder to calculate actual byte size.'
},
{
  id: 'js_json_32',
  topicId: 'js_json',
  question: 'Pretty print JSON with custom colors in console.',
  mathSolution: 'Use ANSI color codes or console styling.',
  codeSolution: 'function prettyPrintJSON(obj, indent = 2) {\n    const jsonString = JSON.stringify(obj, null, indent);\n    // Colorize using ANSI codes (Node.js) or CSS (browser)\n    const colorized = jsonString.replace(/("(\\\\.|[^"\\\\])*")/g, match => `\\x1b[32m${match}\\x1b[0m`) // strings green\n        .replace(/(\\d+)/g, match => `\\x1b[33m${match}\\x1b[0m`) // numbers yellow\n        .replace(/(true|false)/g, match => `\\x1b[35m${match}\\x1b[0m`) // booleans magenta\n        .replace(/(null)/g, match => `\\x1b[36m${match}\\x1b[0m`); // null cyan\n    \n    console.log(colorized);\n}\n\nconst data = { name: "John", age: 30, active: true, address: null };\nprettyPrintJSON(data);\n\n// Browser version\nfunction consolePrettyPrint(obj) {\n    console.log("%c" + JSON.stringify(obj, null, 2), \n        "color: #4CAF50; font-family: monospace;");\n}',
  hint: 'Use ANSI codes in Node.js or CSS in browser for colored JSON.'
},
{
  id: 'js_json_33',
  topicId: 'js_json',
  question: 'Parse JSON with comments (JSON5 or custom).',
  mathSolution: 'Remove comments before parsing or use JSON5 library.',
  codeSolution: '// JSON5 library supports comments, trailing commas\n// npm install json5\n// const JSON5 = require("json5");\n\nfunction parseJSONWithComments(jsonString) {\n    // Remove single-line comments\n    let cleaned = jsonString.replace(/\\/\\/.*$/gm, "");\n    // Remove multi-line comments\n    cleaned = cleaned.replace(/\\/\\*[\\s\\S]*?\\*\\//g, "");\n    // Remove trailing commas\n    cleaned = cleaned.replace(/,(\\s*[}\]])/g, "$1");\n    \n    return JSON.parse(cleaned);\n}\n\nconst jsonWithComments = `{\n    // User information\n    "name": "John", /* This is John */\n    "age": 30,\n    "tags": [\n        "developer",  // Primary role\n        "designer",   // Secondary role\n    ],\n}`;\n\nconst parsed = parseJSONWithComments(jsonWithComments);\nconsole.log(parsed);  // { name: "John", age: 30, tags: ["developer", "designer"] }',
  hint: 'Remove comments and trailing commas before parsing standard JSON.'
},
{
  id: 'js_json_34',
  topicId: 'js_json',
  question: 'Minify JSON by removing whitespace.',
  mathSolution: 'Use JSON.stringify() without spacing or custom minifier.',
  codeSolution: 'function minifyJSON(obj) {\n    return JSON.stringify(obj);\n}\n\nconst pretty = {\n    name: "John",\n    age: 30,\n    address: {\n        city: "NYC",\n        zip: 10001\n    }\n};\n\nconsole.log(JSON.stringify(pretty, null, 2));  // Pretty (132 characters)\nconsole.log(minifyJSON(pretty));                // Minified (62 characters)',
  hint: 'JSON.stringify(obj) produces minified output by default.'
},
{
  id: 'js_json_35',
  topicId: 'js_json',
  question: 'Convert JSON to YAML format.',
  mathSolution: 'Recursively convert JSON structure to YAML syntax.',
  codeSolution: 'function jsonToYaml(obj, indent = 0) {\n    const spaces = "  ".repeat(indent);\n    let yaml = "";\n    \n    if (Array.isArray(obj)) {\n        for (const item of obj) {\n            if (typeof item === "object" && item !== null) {\n                yaml += `${spaces}- \\n${jsonToYaml(item, indent + 1)}`;\n            } else {\n                yaml += `${spaces}- ${item}\\n`;\n            }\n        }\n    } else if (typeof obj === "object" && obj !== null) {\n        for (const [key, value] of Object.entries(obj)) {\n            if (typeof value === "object" && value !== null) {\n                yaml += `${spaces}${key}:\\n${jsonToYaml(value, indent + 1)}`;\n            } else {\n                yaml += `${spaces}${key}: ${value}\\n`;\n            }\n        }\n    } else {\n        yaml = `${obj}`;\n    }\n    \n    return yaml;\n}\n\nconst data = {\n    name: "John",\n    age: 30,\n    hobbies: [\"reading\", \"gaming\"],\n    address: {\n        city: \"NYC\",\n        zip: 10001\n    }\n};\n\nconsole.log(jsonToYaml(data));\n// name: John\n// age: 30\n// hobbies:\n//   - reading\n//   - gaming\n// address:\n//   city: NYC\n//   zip: 10001',
  hint: 'Recursively convert nested objects/arrays to YAML syntax.'
},
{
  id: 'js_json_36',
  topicId: 'js_json',
  question: 'Validate JSON schema using AJV or simple validation.',
  mathSolution: 'Check required fields and types against schema.',
  codeSolution: 'function validateSchema(obj, schema) {\n    const errors = [];\n    \n    for (const [key, rules] of Object.entries(schema)) {\n        if (rules.required && !(key in obj)) {\n            errors.push(`Missing required field: ${key}`);\n            continue;\n        }\n        \n        if (key in obj) {\n            const value = obj[key];\n            \n            if (rules.type && typeof value !== rules.type) {\n                errors.push(`Field ${key} should be ${rules.type}, got ${typeof value}`);\n            }\n            \n            if (rules.min !== undefined && value < rules.min) {\n                errors.push(`Field ${key} should be at least ${rules.min}`);\n            }\n            \n            if (rules.max !== undefined && value > rules.max) {\n                errors.push(`Field ${key} should be at most ${rules.max}`);\n            }\n            \n            if (rules.pattern && !rules.pattern.test(value)) {\n                errors.push(`Field ${key} does not match pattern`);\n            }\n        }\n    }\n    \n    return errors;\n}\n\nconst schema = {\n    name: { required: true, type: "string" },\n    age: { required: true, type: "number", min: 0, max: 150 },\n    email: { type: "string", pattern: /^[^@]+@[^@]+\\.[^@]+$/ }\n};\n\nconst validData = { name: "John", age: 30, email: "john@example.com" };\nconst invalidData = { name: "John", age: 200 };\n\nconsole.log(validateSchema(validData, schema));   // []\nconsole.log(validateSchema(invalidData, schema)); // ["Missing required field: email", "Field age should be at most 150"]',
  hint: 'Define schema with required fields, types, and constraints.'
},
{
  id: 'js_json_37',
  topicId: 'js_json',
  question: 'Patch/update JSON object using JSON Patch (RFC 6902).',
  mathSolution: 'Apply operations (add, remove, replace) to JSON object.',
  codeSolution: 'function applyJSONPatch(obj, patch) {\n    const result = JSON.parse(JSON.stringify(obj)); // Deep copy\n    \n    for (const operation of patch) {\n        const { op, path, value } = operation;\n        const pathParts = path.split("/").filter(p => p !== "");\n        let current = result;\n        \n        for (let i = 0; i < pathParts.length - 1; i++) {\n            const part = pathParts[i];\n            if (!current[part]) current[part] = {};\n            current = current[part];\n        }\n        \n        const lastKey = pathParts[pathParts.length - 1];\n        \n        switch (op) {\n            case "add":\n            case "replace":\n                current[lastKey] = value;\n                break;\n            case "remove":\n                delete current[lastKey];\n                break;\n        }\n    }\n    \n    return result;\n}\n\nconst original = { name: "John", age: 30, address: { city: "NYC" } };\n\nconst patch = [\n    { op: "replace", path: "/name", value: "Jane" },\n    { op: "add", path: "/email", value: "jane@example.com" },\n    { op: "remove", path: "/address/city" }\n];\n\nconst patched = applyJSONPatch(original, patch);\nconsole.log(patched);\n// { name: "Jane", age: 30, address: {}, email: "jane@example.com" }',
  hint: 'JSON Patch operations: add, remove, replace, copy, move, test.'
},
{
  id: 'js_json_38',
  topicId: 'js_json',
  question: 'Diff two JSON objects to find differences.',
  mathSolution: 'Recursively compare objects and return changes.',
  codeSolution: 'function jsonDiff(obj1, obj2, path = "") {\n    const differences = {};\n    \n    // Check for added/modified keys\n    for (const key in obj2) {\n        const currentPath = path ? `${path}.${key}` : key;\n        const val1 = obj1?.[key];\n        const val2 = obj2[key];\n        \n        if (typeof val1 === "object" && typeof val2 === "object" && val1 !== null && val2 !== null) {\n            const nestedDiff = jsonDiff(val1, val2, currentPath);\n            if (Object.keys(nestedDiff).length > 0) {\n                differences[currentPath] = nestedDiff;\n            }\n        } else if (val1 !== val2) {\n            differences[currentPath] = { from: val1, to: val2 };\n        }\n    }\n    \n    // Check for removed keys\n    for (const key in obj1) {\n        if (!(key in obj2)) {\n            const currentPath = path ? `${path}.${key}` : key;\n            differences[currentPath] = { from: obj1[key], to: undefined };\n        }\n    }\n    \n    return differences;\n}\n\nconst oldData = { name: "John", age: 30, city: "LA" };\nconst newData = { name: "John", age: 31, country: "USA" };\n\nconst diff = jsonDiff(oldData, newData);\nconsole.log(diff);\n// {\n//   age: { from: 30, to: 31 },\n//   city: { from: "LA", to: undefined },\n//   country: { from: undefined, to: "USA" }\n// }',
  hint: 'Recursively compare objects to detect added, removed, and changed fields.'
},
{
  id: 'js_json_39',
  topicId: 'js_json',
  question: 'JSONPath query to extract data from JSON.',
  mathSolution: 'Implement simple JSONPath parser or use library.',
  codeSolution: 'function jsonPath(obj, path) {\n    const parts = path.split(".");\n    let current = obj;\n    \n    for (const part of parts) {\n        if (current === undefined || current === null) return undefined;\n        \n        // Handle array notation [0]\n        const arrayMatch = part.match(/(\\w+)\\[(\\d+)\\]/);\n        if (arrayMatch) {\n            const [, arrayName, index] = arrayMatch;\n            current = current[arrayName]?.[parseInt(index)];\n        } else {\n            current = current[part];\n        }\n    }\n    \n    return current;\n}\n\nconst data = {\n    user: {\n        name: "John",\n        age: 30,\n        hobbies: [\"reading\", \"gaming\", \"coding\"]\n    },\n    active: true\n};\n\nconsole.log(jsonPath(data, "user.name"));           // John\nconsole.log(jsonPath(data, "user.hobbies[1]"));    // gaming\nconsole.log(jsonPath(data, "active"));              // true\nconsole.log(jsonPath(data, "user.address.city"));   // undefined',
  hint: 'Implement simple path notation for JSON property access.'
},
{
  id: 'js_json_40',
  topicId: 'js_json',
  question: 'Convert JSON to XML format.',
  mathSolution: 'Recursively convert JSON structure to XML elements.',
  codeSolution: 'function jsonToXml(obj, rootName = "root") {\n    let xml = `<${rootName}>`;\n    \n    function buildXml(data, indent = "") {\n        let result = "";\n        \n        if (Array.isArray(data)) {\n            for (const item of data) {\n                result += buildXml(item, indent);\n            }\n        } else if (typeof data === "object" && data !== null) {\n            for (const [key, value] of Object.entries(data)) {\n                if (Array.isArray(value)) {\n                    for (const item of value) {\n                        result += `<${key}>${buildXml(item, "")}</${key}>`;\n                    }\n                } else if (typeof value === "object" && value !== null) {\n                    result += `<${key}>${buildXml(value, "")}</${key}>`;\n                } else {\n                    result += `<${key}>${escapeXml(String(value))}</${key}>`;\n                }\n            }\n        } else {\n            result += escapeXml(String(data));\n        }\n        \n        return result;\n    }\n    \n    function escapeXml(str) {\n        return str.replace(/[&<>]/g, (match) => {\n            if (match === "&") return "&amp;";\n            if (match === "<") return "&lt;";\n            if (match === ">") return "&gt;";\n            return match;\n        });\n    }\n    \n    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {\n        xml += buildXml(obj);\n    } else {\n        xml += escapeXml(String(obj));\n    }\n    \n    xml += `</${rootName}>`;\n    return xml;\n}\n\nconst data = {\n    user: {\n        name: "John Doe",\n        age: 30,\n        hobbies: [\"reading\", \"coding\"]\n    }\n};\n\nconst xml = jsonToXml(data, "data");\nconsole.log(xml);\n// <data><user><name>John Doe</name><age>30</age><hobbies>reading</hobbies><hobbies>coding</hobbies></user></data>',
  hint: 'Recursively convert JSON objects to XML elements.'
},
//dsa-basic
{
  id: 'js_dsa_1',
  topicId: 'js_dsa',
  question: 'Implement a stack using array with push, pop, and peek operations.',
  mathSolution: 'Stack follows LIFO (Last In First Out) principle.',
  codeSolution: 'class Stack {\n    constructor() {\n        this.items = [];\n    }\n    push(element) {\n        this.items.push(element);\n    }\n    pop() {\n        if (this.isEmpty()) return "Stack is empty";\n        return this.items.pop();\n    }\n    peek() {\n        if (this.isEmpty()) return "Stack is empty";\n        return this.items[this.items.length - 1];\n    }\n    isEmpty() {\n        return this.items.length === 0;\n    }\n    size() {\n        return this.items.length;\n    }\n}\nconst stack = new Stack();\nstack.push(10);\nstack.push(20);\nconsole.log(stack.pop());   // 20\nconsole.log(stack.peek());  // 10',
  hint: 'Stack uses push/pop on array end for O(1) operations.'
},
{
  id: 'js_dsa_2',
  topicId: 'js_dsa',
  question: 'Implement a queue using array with enqueue and dequeue operations.',
  mathSolution: 'Queue follows FIFO (First In First Out) principle.',
  codeSolution: 'class Queue {\n    constructor() {\n        this.items = [];\n    }\n    enqueue(element) {\n        this.items.push(element);\n    }\n    dequeue() {\n        if (this.isEmpty()) return "Queue is empty";\n        return this.items.shift();\n    }\n    front() {\n        if (this.isEmpty()) return "Queue is empty";\n        return this.items[0];\n    }\n    isEmpty() {\n        return this.items.length === 0;\n    }\n    size() {\n        return this.items.length;\n    }\n}\nconst queue = new Queue();\nqueue.enqueue(10);\nqueue.enqueue(20);\nconsole.log(queue.dequeue());  // 10\nconsole.log(queue.front());    // 20',
  hint: 'Queue uses push for enqueue, shift for dequeue (O(n) for shift).'
},
{
  id: 'js_dsa_3',
  topicId: 'js_dsa',
  question: 'Implement a more efficient queue using two stacks.',
  mathSolution: 'Use two stacks: one for enqueue, one for dequeue operations.',
  codeSolution: 'class QueueWithStacks {\n    constructor() {\n        this.stack1 = [];\n        this.stack2 = [];\n    }\n    enqueue(element) {\n        this.stack1.push(element);\n    }\n    dequeue() {\n        if (this.stack2.length === 0) {\n            while (this.stack1.length > 0) {\n                this.stack2.push(this.stack1.pop());\n            }\n        }\n        if (this.stack2.length === 0) return "Queue is empty";\n        return this.stack2.pop();\n    }\n}\nconst queue = new QueueWithStacks();\nqueue.enqueue(1);\nqueue.enqueue(2);\nconsole.log(queue.dequeue());  // 1\nconsole.log(queue.dequeue());  // 2',
  hint: 'Amortized O(1) time complexity for both operations.'
},
{
  id: 'js_dsa_4',
  topicId: 'js_dsa',
  question: 'Implement a singly linked list node and basic operations.',
  mathSolution: 'Linked list consists of nodes with data and next pointer.',
  codeSolution: 'class Node {\n    constructor(data) {\n        this.data = data;\n        this.next = null;\n    }\n}\n\nclass LinkedList {\n    constructor() {\n        this.head = null;\n    }\n    append(data) {\n        const newNode = new Node(data);\n        if (!this.head) this.head = newNode;\n        else {\n            let current = this.head;\n            while (current.next) current = current.next;\n            current.next = newNode;\n        }\n    }\n    prepend(data) {\n        const newNode = new Node(data);\n        newNode.next = this.head;\n        this.head = newNode;\n    }\n    delete(data) {\n        if (!this.head) return;\n        if (this.head.data === data) {\n            this.head = this.head.next;\n            return;\n        }\n        let current = this.head;\n        while (current.next && current.next.data !== data) {\n            current = current.next;\n        }\n        if (current.next) current.next = current.next.next;\n    }\n}\nconst list = new LinkedList();\nlist.append(1);\nlist.append(2);\nlist.prepend(0);\nconsole.log(list.head.data);  // 0',
  hint: 'Singly linked list has O(1) insertion at head, O(n) at tail.'
},
{
  id: 'js_dsa_5',
  topicId: 'js_dsa',
  question: 'Implement binary search on a sorted array.',
  mathSolution: 'Divide array in half repeatedly until target is found.',
  codeSolution: 'function binarySearch(arr, target) {\n    let left = 0;\n    let right = arr.length - 1;\n    while (left <= right) {\n        const mid = Math.floor((left + right) / 2);\n        if (arr[mid] === target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\nconsole.log(binarySearch([1, 3, 5, 7, 9, 11], 7));  // 3\nconsole.log(binarySearch([1, 3, 5, 7, 9, 11], 4));  // -1',
  hint: 'Binary search requires sorted array, O(log n) time complexity.'
},
{
  id: 'js_dsa_6',
  topicId: 'js_dsa',
  question: 'Implement bubble sort algorithm.',
  mathSolution: 'Repeatedly swap adjacent elements if they are in wrong order.',
  codeSolution: 'function bubbleSort(arr) {\n    const n = arr.length;\n    for (let i = 0; i < n - 1; i++) {\n        let swapped = false;\n        for (let j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n    return arr;\n}\nconsole.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));\n// [11, 12, 22, 25, 34, 64, 90]',
  hint: 'Bubble sort O(n²) time, O(1) space; stable sort.',
},
{
  id: 'js_dsa_7',
  topicId: 'js_dsa',
  question: 'Implement selection sort algorithm.',
  mathSolution: 'Find minimum element and swap with first unsorted position.',
  codeSolution: 'function selectionSort(arr) {\n    const n = arr.length;\n    for (let i = 0; i < n - 1; i++) {\n        let minIndex = i;\n        for (let j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIndex]) minIndex = j;\n        }\n        if (minIndex !== i) {\n            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];\n        }\n    }\n    return arr;\n}\nconsole.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));\n// [11, 12, 22, 25, 34, 64, 90]',
  hint: 'Selection sort O(n²) time, O(1) space; not stable.',
},
{
  id: 'js_dsa_8',
  topicId: 'js_dsa',
  question: 'Implement insertion sort algorithm.',
  mathSolution: 'Build sorted array by inserting elements in correct position.',
  codeSolution: 'function insertionSort(arr) {\n    for (let i = 1; i < arr.length; i++) {\n        let key = arr[i];\n        let j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n    return arr;\n}\nconsole.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));\n// [11, 12, 22, 25, 34, 64, 90]',
  hint: 'Insertion sort O(n²) worst case, O(n) best case; good for small arrays.',
},
{
  id: 'js_dsa_9',
  topicId: 'js_dsa',
  question: 'Implement hash table (object-based) with collision handling.',
  mathSolution: 'Hash function maps keys to array indices; handle collisions with separate chaining.',
  codeSolution: 'class HashTable {\n    constructor(size = 10) {\n        this.size = size;\n        this.table = new Array(size).fill().map(() => []);\n    }\n    hash(key) {\n        let hash = 0;\n        for (let i = 0; i < key.length; i++) {\n            hash = (hash + key.charCodeAt(i)) % this.size;\n        }\n        return hash;\n    }\n    set(key, value) {\n        const index = this.hash(key);\n        const bucket = this.table[index];\n        for (let i = 0; i < bucket.length; i++) {\n            if (bucket[i][0] === key) {\n                bucket[i][1] = value;\n                return;\n            }\n        }\n        bucket.push([key, value]);\n    }\n    get(key) {\n        const index = this.hash(key);\n        const bucket = this.table[index];\n        for (let i = 0; i < bucket.length; i++) {\n            if (bucket[i][0] === key) return bucket[i][1];\n        }\n        return undefined;\n    }\n}\nconst ht = new HashTable();\nht.set("name", "John");\nconsole.log(ht.get("name"));  // John',
  hint: 'Hash tables provide O(1) average-case lookup, insertion, deletion.'
},
{
  id: 'js_dsa_10',
  topicId: 'js_dsa',
  question: 'Implement linear search algorithm.',
  mathSolution: 'Check each element sequentially until target is found.',
  codeSolution: 'function linearSearch(arr, target) {\n    for (let i = 0; i < arr.length; i++) {\n        if (arr[i] === target) return i;\n    }\n    return -1;\n}\nconsole.log(linearSearch([5, 3, 8, 4, 2], 8));  // 2\nconsole.log(linearSearch([5, 3, 8, 4, 2], 9));  // -1',
  hint: 'Linear search O(n) time complexity; works on unsorted arrays.',
},
{
  id: 'js_dsa_11',
  topicId: 'js_dsa',
  question: 'Implement two sum problem (find two numbers that sum to target).',
  mathSolution: 'Use hash map to store complements for O(n) solution.',
  codeSolution: 'function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) return [map.get(complement), i];\n        map.set(nums[i], i);\n    }\n    return [];\n}\nconsole.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]',
  hint: 'Hash map provides O(n) solution instead of O(n²) brute force.'
},
{
  id: 'js_dsa_12',
  topicId: 'js_dsa',
  question: 'Find the maximum subarray sum (Kadane\'s algorithm).',
  mathSolution: 'Keep running sum, reset if negative, track maximum.',
  codeSolution: 'function maxSubarraySum(arr) {\n    let maxSoFar = arr[0];\n    let maxEndingHere = arr[0];\n    for (let i = 1; i < arr.length; i++) {\n        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);\n        maxSoFar = Math.max(maxSoFar, maxEndingHere);\n    }\n    return maxSoFar;\n}\nconsole.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6',
  hint: 'Kadane\'s algorithm runs in O(n) time.'
},
{
  id: 'js_dsa_13',
  topicId: 'js_dsa',
  question: 'Check if a string is palindrome (using two pointers).',
  mathSolution: 'Compare characters from both ends moving inward.',
  codeSolution: 'function isPalindrome(str) {\n    let left = 0;\n    let right = str.length - 1;\n    while (left < right) {\n        if (str[left] !== str[right]) return false;\n        left++;\n        right--;\n    }\n    return true;\n}\nconsole.log(isPalindrome("racecar"));  // true\nconsole.log(isPalindrome("hello"));    // false',
  hint: 'Two-pointer technique O(n) time, O(1) space.',
},
{
  id: 'js_dsa_14',
  topicId: 'js_dsa',
  question: 'Find first non-repeating character in a string.',
  mathSolution: 'Use hash map to count frequencies, then find first with count 1.',
  codeSolution: 'function firstNonRepeating(str) {\n    const freq = {};\n    for (const char of str) freq[char] = (freq[char] || 0) + 1;\n    for (const char of str) if (freq[char] === 1) return char;\n    return null;\n}\nconsole.log(firstNonRepeating("swiss"));   // "w"\nconsole.log(firstNonRepeating("aabbcc")); // null',
  hint: 'Two passes: one for counting, one for finding.',
},
{
  id: 'js_dsa_15',
  topicId: 'js_dsa',
  question: 'Implement depth-first search (DFS) on a graph.',
  mathSolution: 'Visit node, then recursively visit all unvisited neighbors.',
  codeSolution: 'class Graph {\n    constructor() {\n        this.adjacencyList = {};\n    }\n    addVertex(vertex) {\n        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];\n    }\n    addEdge(v1, v2) {\n        this.adjacencyList[v1].push(v2);\n        this.adjacencyList[v2].push(v1);\n    }\n    dfs(start) {\n        const result = [];\n        const visited = {};\n        const dfsHelper = (vertex) => {\n            if (!vertex) return;\n            visited[vertex] = true;\n            result.push(vertex);\n            for (const neighbor of this.adjacencyList[vertex]) {\n                if (!visited[neighbor]) dfsHelper(neighbor);\n            }\n        };\n        dfsHelper(start);\n        return result;\n    }\n}\nconst g = new Graph();\ng.addVertex("A"); g.addVertex("B"); g.addVertex("C");\ng.addEdge("A", "B"); g.addEdge("A", "C");\nconsole.log(g.dfs("A"));  // ["A", "B", "C"]',
  hint: 'DFS uses recursion or stack; time O(V+E).',
},
{
  id: 'js_dsa_16',
  topicId: 'js_dsa',
  question: 'Implement breadth-first search (BFS) on a graph.',
  mathSolution: 'Use queue to visit nodes level by level.',
  codeSolution: 'class Graph {\n    constructor() {\n        this.adjacencyList = {};\n    }\n    addVertex(vertex) {\n        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];\n    }\n    addEdge(v1, v2) {\n        this.adjacencyList[v1].push(v2);\n        this.adjacencyList[v2].push(v1);\n    }\n    bfs(start) {\n        const queue = [start];\n        const result = [];\n        const visited = { [start]: true };\n        while (queue.length) {\n            const vertex = queue.shift();\n            result.push(vertex);\n            for (const neighbor of this.adjacencyList[vertex]) {\n                if (!visited[neighbor]) {\n                    visited[neighbor] = true;\n                    queue.push(neighbor);\n                }\n            }\n        }\n        return result;\n    }\n}\nconst g = new Graph();\ng.addVertex("A"); g.addVertex("B"); g.addVertex("C");\ng.addEdge("A", "B"); g.addEdge("A", "C");\nconsole.log(g.bfs("A"));  // ["A", "B", "C"]',
  hint: 'BFS uses queue; time O(V+E), finds shortest path in unweighted graph.',
},
{
  id: 'js_dsa_17',
  topicId: 'js_dsa',
  question: 'Implement binary tree node and inorder traversal.',
  mathSolution: 'Traverse left, visit node, traverse right.',
  codeSolution: 'class TreeNode {\n    constructor(val, left = null, right = null) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\nfunction inorderTraversal(root) {\n    const result = [];\n    function traverse(node) {\n        if (node) {\n            traverse(node.left);\n            result.push(node.val);\n            traverse(node.right);\n        }\n    }\n    traverse(root);\n    return result;\n}\nconst root = new TreeNode(2, new TreeNode(1), new TreeNode(3));\nconsole.log(inorderTraversal(root));  // [1, 2, 3]',
  hint: 'Inorder traversal on BST gives sorted order.',
},
{
  id: 'js_dsa_18',
  topicId: 'js_dsa',
  question: 'Implement binary search tree insertion.',
  mathSolution: 'Insert at correct position: left if smaller, right if larger.',
  codeSolution: 'class BSTNode {\n    constructor(val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\nclass BST {\n    constructor() { this.root = null; }\n    insert(val) {\n        const newNode = new BSTNode(val);\n        if (!this.root) this.root = newNode;\n        else this.insertNode(this.root, newNode);\n    }\n    insertNode(node, newNode) {\n        if (newNode.val < node.val) {\n            if (!node.left) node.left = newNode;\n            else this.insertNode(node.left, newNode);\n        } else {\n            if (!node.right) node.right = newNode;\n            else this.insertNode(node.right, newNode);\n        }\n    }\n}\nconst bst = new BST();\nbst.insert(5);\nbst.insert(3);\nbst.insert(7);\nconsole.log(bst.root.val);    // 5\nconsole.log(bst.root.left.val); // 3',
  hint: 'BST maintains order: left < parent < right.',
},
{
  id: 'js_dsa_19',
  topicId: 'js_dsa',
  question: 'Implement binary search tree search operation.',
  mathSolution: 'Recursively search left or right based on value comparison.',
  codeSolution: 'class BST {\n    // ... previous code\n    search(val) {\n        return this.searchNode(this.root, val);\n    }\n    searchNode(node, val) {\n        if (!node) return false;\n        if (node.val === val) return true;\n        if (val < node.val) return this.searchNode(node.left, val);\n        return this.searchNode(node.right, val);\n    }\n}\nconst bst = new BST();\nbst.insert(5); bst.insert(3); bst.insert(7);\nconsole.log(bst.search(3));  // true\nconsole.log(bst.search(9));  // false',
  hint: 'BST search has O(log n) average time complexity.',
},
{
  id: 'js_dsa_20',
  topicId: 'js_dsa',
  question: 'Implement merge sort algorithm.',
  mathSolution: 'Divide array into halves, recursively sort, then merge.',
  codeSolution: 'function mergeSort(arr) {\n    if (arr.length <= 1) return arr;\n    const mid = Math.floor(arr.length / 2);\n    const left = mergeSort(arr.slice(0, mid));\n    const right = mergeSort(arr.slice(mid));\n    return merge(left, right);\n}\nfunction merge(left, right) {\n    const result = [];\n    let i = 0, j = 0;\n    while (i < left.length && j < right.length) {\n        if (left[i] <= right[j]) result.push(left[i++]);\n        else result.push(right[j++]);\n    }\n    return result.concat(left.slice(i)).concat(right.slice(j));\n}\nconsole.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));\n// [3, 9, 10, 27, 38, 43, 82]',
  hint: 'Merge sort has O(n log n) time complexity, stable sort.',
},
{
  id: 'js_dsa_21',
  topicId: 'js_dsa',
  question: 'Implement quick sort algorithm.',
  mathSolution: 'Choose pivot, partition array, recursively sort partitions.',
  codeSolution: 'function quickSort(arr) {\n    if (arr.length <= 1) return arr;\n    const pivot = arr[0];\n    const left = [], right = [];\n    for (let i = 1; i < arr.length; i++) {\n        if (arr[i] < pivot) left.push(arr[i]);\n        else right.push(arr[i]);\n    }\n    return [...quickSort(left), pivot, ...quickSort(right)];\n}\nconsole.log(quickSort([3, 6, 8, 10, 1, 2, 1]));  // [1, 1, 2, 3, 6, 8, 10]',
  hint: 'Quick sort average O(n log n), worst O(n²), in-place version exists.',
},
{
  id: 'js_dsa_22',
  topicId: 'js_dsa',
  question: 'Find the intersection of two arrays.',
  mathSolution: 'Use Set for O(n) lookup.',
  codeSolution: 'function intersection(arr1, arr2) {\n    const set1 = new Set(arr1);\n    return [...new Set(arr2.filter(item => set1.has(item)))];\n}\nconsole.log(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));  // [3, 4, 5]',
  hint: 'Set provides O(1) lookup; total time O(n + m).',
},
{
  id: 'js_dsa_23',
  topicId: 'js_dsa',
  question: 'Find the missing number in array from 1 to n.',
  mathSolution: 'Sum formula: expected sum minus actual sum.',
  codeSolution: 'function missingNumber(arr, n) {\n    const expectedSum = n * (n + 1) / 2;\n    const actualSum = arr.reduce((a, b) => a + b, 0);\n    return expectedSum - actualSum;\n}\nconsole.log(missingNumber([1, 2, 4, 5, 6], 6));  // 3',
  hint: 'O(n) time, O(1) space using sum formula.',
},
{
  id: 'js_dsa_24',
  topicId: 'js_dsa',
  question: 'Find duplicate number in array (one duplicate).',
  mathSolution: 'Use Set or Floyd\'s cycle detection (tortoise and hare).',
  codeSolution: 'function findDuplicate(nums) {\n    const seen = new Set();\n    for (const num of nums) {\n        if (seen.has(num)) return num;\n        seen.add(num);\n    }\n    return null;\n}\nconsole.log(findDuplicate([1, 3, 4, 2, 2]));  // 2',
  hint: 'O(n) time, O(n) space with Set; O(1) space with Floyd\'s algorithm.',
},
{
  id: 'js_dsa_25',
  topicId: 'js_dsa',
  question: 'Rotate an array by k positions to the right.',
  mathSolution: 'Reverse entire array, then reverse first k, then reverse rest.',
  codeSolution: 'function rotateArray(arr, k) {\n    k = k % arr.length;\n    function reverse(start, end) {\n        while (start < end) {\n            [arr[start], arr[end]] = [arr[end], arr[start]];\n            start++;\n            end--;\n        }\n    }\n    reverse(0, arr.length - 1);\n    reverse(0, k - 1);\n    reverse(k, arr.length - 1);\n    return arr;\n}\nconsole.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));  // [5, 6, 7, 1, 2, 3, 4]',
  hint: 'Three-reversal approach uses O(1) extra space.',
},
{
  id: 'js_dsa_26',
  topicId: 'js_dsa',
  question: 'Implement a min-heap (priority queue) using array.',
  mathSolution: 'Heap property: parent <= children; bubble up/down on insert/delete.',
  codeSolution: 'class MinHeap {\n    constructor() { this.heap = []; }\n    insert(val) {\n        this.heap.push(val);\n        this.bubbleUp(this.heap.length - 1);\n    }\n    bubbleUp(index) {\n        while (index > 0) {\n            const parent = Math.floor((index - 1) / 2);\n            if (this.heap[parent] <= this.heap[index]) break;\n            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];\n            index = parent;\n        }\n    }\n    extractMin() {\n        if (this.heap.length === 0) return null;\n        if (this.heap.length === 1) return this.heap.pop();\n        const min = this.heap[0];\n        this.heap[0] = this.heap.pop();\n        this.bubbleDown(0);\n        return min;\n    }\n    bubbleDown(index) {\n        while (true) {\n            let smallest = index;\n            const left = 2 * index + 1;\n            const right = 2 * index + 2;\n            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;\n            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;\n            if (smallest === index) break;\n            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];\n            index = smallest;\n        }\n    }\n}\nconst heap = new MinHeap();\nheap.insert(5); heap.insert(3); heap.insert(8); heap.insert(1);\nconsole.log(heap.extractMin());  // 1\nconsole.log(heap.extractMin());  // 3',
  hint: 'Heap operations: insert and extractMin O(log n).',
},
{
  id: 'js_dsa_27',
  topicId: 'js_dsa',
  question: 'Find the kth largest element in an array (using quick select).',
  mathSolution: 'Quick select algorithm partitions array and recurses on one side.',
  codeSolution: 'function findKthLargest(nums, k) {\n    const targetIndex = nums.length - k;\n    return quickSelect(nums, 0, nums.length - 1, targetIndex);\n}\nfunction quickSelect(nums, left, right, targetIndex) {\n    if (left === right) return nums[left];\n    const pivotIndex = partition(nums, left, right);\n    if (pivotIndex === targetIndex) return nums[pivotIndex];\n    if (pivotIndex < targetIndex) return quickSelect(nums, pivotIndex + 1, right, targetIndex);\n    return quickSelect(nums, left, pivotIndex - 1, targetIndex);\n}\nfunction partition(nums, left, right) {\n    const pivot = nums[right];\n    let i = left;\n    for (let j = left; j < right; j++) {\n        if (nums[j] <= pivot) {\n            [nums[i], nums[j]] = [nums[j], nums[i]];\n            i++;\n        }\n    }\n    [nums[i], nums[right]] = [nums[right], nums[i]];\n    return i;\n}\nconsole.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));  // 5',
  hint: 'Quick select averages O(n) time, worst-case O(n²).',
},
{
  id: 'js_dsa_28',
  topicId: 'js_dsa',
  question: 'Implement a trie (prefix tree) for word storage and search.',
  mathSolution: 'Each node has children map and boolean for end of word.',
  codeSolution: 'class TrieNode {\n    constructor() {\n        this.children = {};\n        this.isEnd = false;\n    }\n}\nclass Trie {\n    constructor() { this.root = new TrieNode(); }\n    insert(word) {\n        let node = this.root;\n        for (const char of word) {\n            if (!node.children[char]) node.children[char] = new TrieNode();\n            node = node.children[char];\n        }\n        node.isEnd = true;\n    }\n    search(word) {\n        let node = this.root;\n        for (const char of word) {\n            if (!node.children[char]) return false;\n            node = node.children[char];\n        }\n        return node.isEnd;\n    }\n    startsWith(prefix) {\n        let node = this.root;\n        for (const char of prefix) {\n            if (!node.children[char]) return false;\n            node = node.children[char];\n        }\n        return true;\n    }\n}\nconst trie = new Trie();\ntrie.insert("cat");\ntrie.insert("car");\nconsole.log(trie.search("cat"));     // true\nconsole.log(trie.startsWith("ca"));   // true\nconsole.log(trie.search("can"));      // false',
  hint: 'Trie operations O(L) where L is string length.',
},
{
  id: 'js_dsa_29',
  topicId: 'js_dsa',
  question: 'Detect cycle in linked list (Floyd\'s cycle detection).',
  mathSolution: 'Use slow and fast pointers; if they meet, cycle exists.',
  codeSolution: 'function hasCycle(head) {\n    let slow = head;\n    let fast = head;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow === fast) return true;\n    }\n    return false;\n}\n// LinkedList with cycle\nconst node1 = new Node(1);\nconst node2 = new Node(2);\nnode1.next = node2;\nnode2.next = node1;\nconsole.log(hasCycle(node1));  // true',
  hint: 'Floyd\'s algorithm uses O(1) extra space.',
},
{
  id: 'js_dsa_30',
  topicId: 'js_dsa',
  question: 'Reverse a linked list (iterative and recursive).',
  mathSolution: 'Iterative: use prev, current, next pointers; Recursive: reverse rest, adjust pointers.',
  codeSolution: '// Iterative\nfunction reverseListIterative(head) {\n    let prev = null;\n    let current = head;\n    while (current) {\n        const next = current.next;\n        current.next = prev;\n        prev = current;\n        current = next;\n    }\n    return prev;\n}\n// Recursive\nfunction reverseListRecursive(head) {\n    if (!head || !head.next) return head;\n    const newHead = reverseListRecursive(head.next);\n    head.next.next = head;\n    head.next = null;\n    return newHead;\n}\n// Create list 1->2->3->4\nlet prev = null;\nfor (let i = 4; i >= 1; i--) {\n    const node = new Node(i);\n    node.next = prev;\n    prev = node;\n}\nconst reversed = reverseListIterative(prev);\nconsole.log(reversed.data);  // 4',
  hint: 'Iterative uses O(1) space, recursive uses O(n) stack space.',
},
{
  id: 'js_dsa_31',
  topicId: 'js_dsa',
  question: 'Find the middle of linked list (slow-fast pointer).',
  mathSolution: 'Slow moves one step, fast moves two steps; when fast reaches end, slow is at middle.',
  codeSolution: 'function findMiddle(head) {\n    let slow = head;\n    let fast = head;\n    while (fast && fast.next) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    return slow;\n}\n// Create list 1->2->3->4->5\nlet head = null;\nfor (let i = 5; i >= 1; i--) {\n    const node = new Node(i);\n    node.next = head;\n    head = node;\n}\nconsole.log(findMiddle(head).data);  // 3',
  hint: 'Slow-fast pointer technique finds middle in one pass.',
},
{
  id: 'js_dsa_32',
  topicId: 'js_dsa',
  question: 'Implement valid parentheses checker using stack.',
  mathSolution: 'Push opening brackets, pop when closing matches top.',
  codeSolution: 'function isValidParentheses(s) {\n    const stack = [];\n    const map = { "(": ")", "{": "}", "[": "]" };\n    for (const char of s) {\n        if (map[char]) stack.push(char);\n        else if (char === ")" || char === "}" || char === "]") {\n            if (stack.length === 0 || map[stack.pop()] !== char) return false;\n        }\n    }\n    return stack.length === 0;\n}\nconsole.log(isValidParentheses("()[]{}"));   // true\nconsole.log(isValidParentheses("([)]"));     // false\nconsole.log(isValidParentheses("({[]})"));   // true',
  hint: 'Stack ensures correct order of closing brackets.',
},
{
  id: 'js_dsa_33',
  topicId: 'js_dsa',
  question: 'Implement queue using two stacks (efficient amortized O(1)).',
  mathSolution: 'One stack for enqueue, one for dequeue; move elements when dequeue stack empty.',
  codeSolution: 'class MyQueue {\n    constructor() {\n        this.stack1 = [];\n        this.stack2 = [];\n    }\n    push(x) { this.stack1.push(x); }\n    pop() {\n        if (this.stack2.length === 0) {\n            while (this.stack1.length) this.stack2.push(this.stack1.pop());\n        }\n        return this.stack2.pop();\n    }\n    peek() {\n        if (this.stack2.length === 0) {\n            while (this.stack1.length) this.stack2.push(this.stack1.pop());\n        }\n        return this.stack2[this.stack2.length - 1];\n    }\n    empty() {\n        return this.stack1.length === 0 && this.stack2.length === 0;\n    }\n}\nconst q = new MyQueue();\nq.push(1); q.push(2);\nconsole.log(q.peek());  // 1\nconsole.log(q.pop());   // 1\nconsole.log(q.empty()); // false',
  hint: 'Amortized O(1) for each operation.',
},
{
  id: 'js_dsa_34',
  topicId: 'js_dsa',
  question: 'Generate all fibonacci numbers up to n (DP approach).',
  mathSolution: 'Use array to store previous two or two variables.',
  codeSolution: 'function fibonacciDP(n) {\n    const dp = [0, 1];\n    for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];\n    return dp.slice(0, n + 1);\n}\n// Space optimized\nfunction fibonacciSpaceOptimized(n) {\n    if (n <= 1) return n;\n    let prev2 = 0, prev1 = 1;\n    for (let i = 2; i <= n; i++) {\n        const curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\nconsole.log(fibonacciDP(10));        // [0,1,1,2,3,5,8,13,21,34,55]\nconsole.log(fibonacciSpaceOptimized(10)); // 55',
  hint: 'DP avoids exponential recursion; O(n) time, O(1) space optimized.',
},
{
  id: 'js_dsa_35',
  topicId: 'js_dsa',
  question: 'Implement longest common prefix among strings.',
  mathSolution: 'Compare characters of first string with all others until mismatch.',
  codeSolution: 'function longestCommonPrefix(strs) {\n    if (!strs.length) return "";\n    let prefix = strs[0];\n    for (let i = 1; i < strs.length; i++) {\n        while (strs[i].indexOf(prefix) !== 0) {\n            prefix = prefix.slice(0, -1);\n            if (!prefix) return "";\n        }\n    }\n    return prefix;\n}\nconsole.log(longestCommonPrefix(["flower", "flow", "flight"]));  // "fl"\nconsole.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""',
  hint: 'Reduce prefix length until all strings start with it.',
},
{
  id: 'js_dsa_36',
  topicId: 'js_dsa',
  question: 'Implement anagram check (using character count).',
  mathSolution: 'Count characters in both strings and compare.',
  codeSolution: 'function isAnagram(s, t) {\n    if (s.length !== t.length) return false;\n    const count = {};\n    for (const char of s) count[char] = (count[char] || 0) + 1;\n    for (const char of t) {\n        if (!count[char]) return false;\n        count[char]--;\n    }\n    return true;\n}\nconsole.log(isAnagram("listen", "silent"));  // true\nconsole.log(isAnagram("hello", "world"));    // false',
  hint: 'O(n) time, O(1) space (limited character set).',
},
{
  id: 'js_dsa_37',
  topicId: 'js_dsa',
  question: 'Implement sliding window maximum (find max in each window of size k).',
  mathSolution: 'Use deque to maintain indices of potential maximums.',
  codeSolution: 'function maxSlidingWindow(nums, k) {\n    const result = [];\n    const deque = [];\n    for (let i = 0; i < nums.length; i++) {\n        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) deque.pop();\n        deque.push(i);\n        if (deque[0] === i - k) deque.shift();\n        if (i >= k - 1) result.push(nums[deque[0]]);\n    }\n    return result;\n}\nconsole.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));\n// [3, 3, 5, 5, 6, 7]',
  hint: 'Deque maintains indices in decreasing order of values.',
},
{
  id: 'js_dsa_38',
  topicId: 'js_dsa',
  question: 'Implement longest palindromic substring (expand around center).',
  mathSolution: 'Expand from each center (odd and even length) to find max palindrome.',
  codeSolution: 'function longestPalindrome(s) {\n    if (s.length < 2) return s;\n    let start = 0, maxLen = 1;\n    function expandAroundCenter(left, right) {\n        while (left >= 0 && right < s.length && s[left] === s[right]) {\n            if (right - left + 1 > maxLen) {\n                start = left;\n                maxLen = right - left + 1;\n            }\n            left--;\n            right++;\n        }\n    }\n    for (let i = 0; i < s.length; i++) {\n        expandAroundCenter(i, i);     // odd length\n        expandAroundCenter(i, i + 1); // even length\n    }\n    return s.substring(start, start + maxLen);\n}\nconsole.log(longestPalindrome("babad"));  // "bab" or "aba"\nconsole.log(longestPalindrome("cbbd"));   // "bb"',
  hint: 'O(n²) time, O(1) space expand around center.',
},
{
  id: 'js_dsa_39',
  topicId: 'js_dsa',
  question: 'Implement valid sudoku checker.',
  mathSolution: 'Check rows, columns, and 3x3 boxes for duplicates.',
  codeSolution: 'function isValidSudoku(board) {\n    const rows = Array(9).fill().map(() => new Set());\n    const cols = Array(9).fill().map(() => new Set());\n    const boxes = Array(9).fill().map(() => new Set());\n    for (let i = 0; i < 9; i++) {\n        for (let j = 0; j < 9; j++) {\n            const val = board[i][j];\n            if (val === ".") continue;\n            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);\n            if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) return false;\n            rows[i].add(val);\n            cols[j].add(val);\n            boxes[boxIndex].add(val);\n        }\n    }\n    return true;\n}\nconst validBoard = [\n    ["5","3",".",".","7",".",".",".","."],\n    ["6",".",".","1","9","5",".",".","."],\n    // ... rest of valid board\n];\nconsole.log(isValidSudoku(validBoard));  // true',
  hint: 'Use Set to track seen numbers in row, column, and box.',
},
{
  id: 'js_dsa_40',
  topicId: 'js_dsa',
  question: 'Implement climbing stairs problem (DP).',
  mathSolution: 'Ways to reach step n = ways(n-1) + ways(n-2).',
  codeSolution: 'function climbStairs(n) {\n    if (n <= 2) return n;\n    let prev1 = 1, prev2 = 2;\n    for (let i = 3; i <= n; i++) {\n        const curr = prev1 + prev2;\n        prev1 = prev2;\n        prev2 = curr;\n    }\n    return prev2;\n}\nconsole.log(climbStairs(3));  // 3 (1+1+1, 1+2, 2+1)\nconsole.log(climbStairs(4));  // 5\nconsole.log(climbStairs(10)); // 89',
  hint: 'Fibonacci-style DP with O(1) space.',
},
{
  id: 'js_dsa_41',
  topicId: 'js_dsa',
  question: 'Implement house robber problem (max sum without adjacent).',
  mathSolution: 'DP: max of rob current + rob(n-2) or rob(n-1).',
  codeSolution: 'function rob(nums) {\n    if (!nums.length) return 0;\n    if (nums.length === 1) return nums[0];\n    let prev2 = nums[0];\n    let prev1 = Math.max(nums[0], nums[1]);\n    for (let i = 2; i < nums.length; i++) {\n        const curr = Math.max(prev1, prev2 + nums[i]);\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\nconsole.log(rob([1, 2, 3, 1]));      // 4 (1+3)\nconsole.log(rob([2, 7, 9, 3, 1]));   // 12 (2+9+1)',
  hint: 'DP with O(1) space: either take current or skip.',
},
{
  id: 'js_dsa_42',
  topicId: 'js_dsa',
  question: 'Implement coin change problem (minimum coins needed).',
  mathSolution: 'DP array where dp[i] = min coins to make amount i.',
  codeSolution: 'function coinChange(coins, amount) {\n    const dp = Array(amount + 1).fill(Infinity);\n    dp[0] = 0;\n    for (let i = 1; i <= amount; i++) {\n        for (const coin of coins) {\n            if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] === Infinity ? -1 : dp[amount];\n}\nconsole.log(coinChange([1, 2, 5], 11));  // 3 (5+5+1)\nconsole.log(coinChange([2], 3));         // -1',
  hint: 'Unbounded knapsack DP: O(amount * coins) time.',
},
{
  id: 'js_dsa_43',
  topicId: 'js_dsa',
  question: 'Implement longest increasing subsequence length.',
  mathSolution: 'DP: LIS ending at i = 1 + max(LIS ending at previous smaller values).',
  codeSolution: 'function lengthOfLIS(nums) {\n    const dp = Array(nums.length).fill(1);\n    let maxLen = 1;\n    for (let i = 1; i < nums.length; i++) {\n        for (let j = 0; j < i; j++) {\n            if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);\n        }\n        maxLen = Math.max(maxLen, dp[i]);\n    }\n    return maxLen;\n}\n// O(n log n) version using patience sorting\nconsole.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));  // 4 (2,5,7,101)',
  hint: 'O(n²) DP; O(n log n) with binary search patience sorting.',
},
{
  id: 'js_dsa_44',
  topicId: 'js_dsa',
  question: 'Implement edit distance (Levenshtein distance).',
  mathSolution: 'DP: dp[i][j] = min(insert, delete, replace) to match substrings.',
  codeSolution: 'function minDistance(word1, word2) {\n    const m = word1.length, n = word2.length;\n    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));\n    for (let i = 0; i <= m; i++) dp[i][0] = i;\n    for (let j = 0; j <= n; j++) dp[0][j] = j;\n    for (let i = 1; i <= m; i++) {\n        for (let j = 1; j <= n; j++) {\n            if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];\n            else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);\n        }\n    }\n    return dp[m][n];\n}\nconsole.log(minDistance("horse", "ros"));    // 3\nconsole.log(minDistance("intention", "execution")); // 5',
  hint: 'Dynamic programming: replace, insert, delete operations.',
},
{
  id: 'js_dsa_45',
  topicId: 'js_dsa',
  question: 'Implement topological sort for DAG (Kahn\'s algorithm).',
  mathSolution: 'Count in-degrees, queue nodes with 0 in-degree, remove them.',
  codeSolution: 'function topologicalSort(numNodes, edges) {\n    const adj = Array(numNodes).fill().map(() => []);\n    const inDegree = Array(numNodes).fill(0);\n    for (const [u, v] of edges) {\n        adj[u].push(v);\n        inDegree[v]++;\n    }\n    const queue = [];\n    for (let i = 0; i < numNodes; i++) if (inDegree[i] === 0) queue.push(i);\n    const result = [];\n    while (queue.length) {\n        const u = queue.shift();\n        result.push(u);\n        for (const v of adj[u]) {\n            inDegree[v]--;\n            if (inDegree[v] === 0) queue.push(v);\n        }\n    }\n    return result.length === numNodes ? result : [];\n}\nconsole.log(topologicalSort(6, [[5,2],[5,0],[4,0],[4,1],[2,3],[3,1]]));\n// [4,5,0,2,3,1] or similar topological order',
  hint: 'Kahn\'s algorithm uses BFS with in-degree counting.',
},
{
  id: 'js_dsa_46',
  topicId: 'js_dsa',
  question: 'Implement Dijkstra\'s shortest path algorithm.',
  mathSolution: 'Use priority queue, relax edges, track shortest distances.',
  codeSolution: 'class PriorityQueue {\n    constructor() { this.heap = []; }\n    enqueue(node, priority) {\n        this.heap.push({ node, priority });\n        this.bubbleUp(this.heap.length - 1);\n    }\n    dequeue() {\n        const min = this.heap[0];\n        const last = this.heap.pop();\n        if (this.heap.length) this.heap[0] = last, this.sinkDown(0);\n        return min;\n    }\n    bubbleUp(index) {\n        while (index > 0) {\n            const parent = Math.floor((index - 1) / 2);\n            if (this.heap[parent].priority <= this.heap[index].priority) break;\n            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];\n            index = parent;\n        }\n    }\n    sinkDown(index) {\n        while (true) {\n            let left = 2 * index + 1, right = 2 * index + 2;\n            let smallest = index;\n            if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority) smallest = left;\n            if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority) smallest = right;\n            if (smallest === index) break;\n            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];\n            index = smallest;\n        }\n    }\n    isEmpty() { return this.heap.length === 0; }\n}\nfunction dijkstra(graph, start) {\n    const distances = {};\n    for (const node in graph) distances[node] = Infinity;\n    distances[start] = 0;\n    const pq = new PriorityQueue();\n    pq.enqueue(start, 0);\n    while (!pq.isEmpty()) {\n        const { node: current } = pq.dequeue();\n        for (const [neighbor, weight] of graph[current]) {\n            const distance = distances[current] + weight;\n            if (distance < distances[neighbor]) {\n                distances[neighbor] = distance;\n                pq.enqueue(neighbor, distance);\n            }\n        }\n    }\n    return distances;\n}\nconst graph = {\n    A: [["B", 4], ["C", 2]],\n    B: [["A", 4], ["C", 1], ["D", 5]],\n    C: [["A", 2], ["B", 1], ["D", 8], ["E", 10]],\n    D: [["B", 5], ["C", 8], ["E", 2]],\n    E: [["C", 10], ["D", 2]]\n};\nconsole.log(dijkstra(graph, "A"));\n// { A:0, B:3, C:2, D:8, E:10 }',
  hint: 'Dijkstra uses priority queue; O((V+E) log V) time.',
},
{
  id: 'js_dsa_47',
  topicId: 'js_dsa',
  question: 'Implement Floyd-Warshall algorithm (all-pairs shortest paths).',
  mathSolution: 'DP: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).',
  codeSolution: 'function floydWarshall(graph) {\n    const n = graph.length;\n    const dist = graph.map(row => [...row]);\n    for (let k = 0; k < n; k++) {\n        for (let i = 0; i < n; i++) {\n            for (let j = 0; j < n; j++) {\n                if (dist[i][k] + dist[k][j] < dist[i][j]) {\n                    dist[i][j] = dist[i][k] + dist[k][j];\n                }\n            }\n        }\n    }\n    return dist;\n}\nconst INF = Infinity;\nconst graph2 = [\n    [0, 3, INF, 5],\n    [2, 0, INF, 4],\n    [INF, 1, 0, INF],\n    [INF, INF, 2, 0]\n];\nconsole.log(floydWarshall(graph2));\n// All-pairs shortest paths matrix',
  hint: 'Floyd-Warshall O(V³) time, works with negative edges (no negative cycles).',
},
{
  id: 'js_dsa_48',
  topicId: 'js_dsa',
  question: 'Implement Knuth-Morris-Pratt (KMP) pattern matching algorithm.',
  mathSolution: 'Build LPS (longest prefix suffix) array, use it to skip comparisons.',
  codeSolution: 'function kmpSearch(text, pattern) {\n    const lps = buildLPS(pattern);\n    const result = [];\n    let i = 0, j = 0;\n    while (i < text.length) {\n        if (pattern[j] === text[i]) { i++; j++; }\n        if (j === pattern.length) { result.push(i - j); j = lps[j - 1]; }\n        else if (i < text.length && pattern[j] !== text[i]) {\n            if (j !== 0) j = lps[j - 1];\n            else i++;\n        }\n    }\n    return result;\n}\nfunction buildLPS(pattern) {\n    const lps = Array(pattern.length).fill(0);\n    let len = 0, i = 1;\n    while (i < pattern.length) {\n        if (pattern[i] === pattern[len]) lps[i++] = ++len;\n        else if (len !== 0) len = lps[len - 1];\n        else lps[i++] = 0;\n    }\n    return lps;\n}\nconsole.log(kmpSearch("ABABDABACDABABCABAB", "ABABCABAB"));  // [10]',
  hint: 'KMP achieves O(n + m) time complexity for string matching.',
},
{
  id: 'js_dsa_49',
  topicId: 'js_dsa',
  question: 'Implement union-find (disjoint set) data structure.',
  mathSolution: 'Each element has parent; union by rank, find with path compression.',
  codeSolution: 'class UnionFind {\n    constructor(n) {\n        this.parent = Array(n).fill().map((_, i) => i);\n        this.rank = Array(n).fill(0);\n    }\n    find(x) {\n        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);\n        return this.parent[x];\n    }\n    union(x, y) {\n        const rootX = this.find(x);\n        const rootY = this.find(y);\n        if (rootX === rootY) return false;\n        if (this.rank[rootX] < this.rank[rootY]) this.parent[rootX] = rootY;\n        else if (this.rank[rootX] > this.rank[rootY]) this.parent[rootY] = rootX;\n        else { this.parent[rootY] = rootX; this.rank[rootX]++; }\n        return true;\n    }\n    connected(x, y) { return this.find(x) === this.find(y); }\n}\nconst uf = new UnionFind(5);\nuf.union(0, 1);\nuf.union(1, 2);\nconsole.log(uf.connected(0, 2));  // true\nconsole.log(uf.connected(0, 3));  // false',
  hint: 'Union-Find: nearly O(1) amortized time with path compression.',
},
{
  id: 'js_dsa_50',
  topicId: 'js_dsa',
  question: 'Implement segment tree for range sum queries and point updates.',
  mathSolution: 'Binary tree stores sums; query and update in O(log n).',
  codeSolution: 'class SegmentTree {\n    constructor(arr) {\n        this.n = arr.length;\n        this.tree = Array(4 * this.n).fill(0);\n        this.build(arr, 0, 0, this.n - 1);\n    }\n    build(arr, node, start, end) {\n        if (start === end) this.tree[node] = arr[start];\n        else {\n            const mid = Math.floor((start + end) / 2);\n            this.build(arr, 2 * node + 1, start, mid);\n            this.build(arr, 2 * node + 2, mid + 1, end);\n            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];\n        }\n    }\n    update(index, value, node = 0, start = 0, end = this.n - 1) {\n        if (start === end) this.tree[node] = value;\n        else {\n            const mid = Math.floor((start + end) / 2);\n            if (index <= mid) this.update(index, value, 2 * node + 1, start, mid);\n            else this.update(index, value, 2 * node + 2, mid + 1, end);\n            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];\n        }\n    }\n    query(L, R, node = 0, start = 0, end = this.n - 1) {\n        if (R < start || L > end) return 0;\n        if (L <= start && end <= R) return this.tree[node];\n        const mid = Math.floor((start + end) / 2);\n        const leftSum = this.query(L, R, 2 * node + 1, start, mid);\n        const rightSum = this.query(L, R, 2 * node + 2, mid + 1, end);\n        return leftSum + rightSum;\n    }\n}\nconst segTree = new SegmentTree([1, 3, 5, 7, 9, 11]);\nconsole.log(segTree.query(1, 3));  // 3+5+7 = 15\nsegTree.update(2, 10);\nconsole.log(segTree.query(1, 3));  // 3+10+7 = 20',
  hint: 'Segment tree supports range queries and point updates in O(log n).'
}
);