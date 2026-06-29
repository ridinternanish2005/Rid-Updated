QuizData.questions.push(
    //loops Conditional Loops
  {
    id: 'py_loop_1',
    topicId: 'py_loop',
    question: 'Write a for loop that prints numbers 0 to 4.',
    mathSolution: 'Loop runs 5 times with range(5)',
    codeSolution: 'for i in range(5):\n    print(i)  # 0 1 2 3 4',
    hint: 'Use `range(5)` to generate numbers 0 through 4.'
  },
  {
    id: 'py_loop_2',
    topicId: 'py_loop',
    question: 'Write a for loop to print each character of the string "Python".',
    mathSolution: 'Prints each character on a new line: P, y, t, h, o, n',
    codeSolution: 'for ch in "Python":\n    print(ch)',
    hint: 'Strings are iterable; you can loop directly over them.'
  },
  {
    id: 'py_loop_3',
    topicId: 'py_loop',
    question: 'Write a while loop that prints numbers 1 to 5.',
    mathSolution: 'Starts at 1, increments until 5',
    codeSolution: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1  # 1 2 3 4 5',
    hint: 'Initialize a counter before the loop and increment it inside.'
  },
  {
    id: 'py_loop_4',
    topicId: 'py_loop',
    question: 'Write a for loop to compute the sum of all elements in the list [2, 4, 6, 8, 10].',
    mathSolution: 'Sum = 30',
    codeSolution: 'numbers = [2, 4, 6, 8, 10]\ntotal = 0\nfor num in numbers:\n    total += num\nprint(total)  # 30',
    hint: 'Use an accumulator variable to keep a running total.'
  },
  {
    id: 'py_loop_5',
    topicId: 'py_loop',
    question: 'Write a while loop to calculate the factorial of a number n (assume n = 5).',
    mathSolution: 'Factorial of 5 = 120',
    codeSolution: 'n = 5\nfactorial = 1\ni = 1\nwhile i <= n:\n    factorial *= i\n    i += 1\nprint(factorial)  # 120',
    hint: 'Multiply the accumulator by the counter each iteration.'
  },
  {
    id: 'py_loop_6',
    topicId: 'py_loop',
    question: 'Write nested for loops to print a multiplication table for numbers 1 to 3.',
    mathSolution: 'Prints multiplication pairs 1–3',
    codeSolution: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i} x {j} = {i*j}")',
    hint: 'Outer loop selects first number, inner loop second.'
  },
  {
    id: 'py_loop_7',
    topicId: 'py_loop',
    question: 'Use enumerate to print index and value of ["a","b","c"].',
    mathSolution: '0 a, 1 b, 2 c',
    codeSolution: 'items = ["a", "b", "c"]\nfor idx, val in enumerate(items):\n    print(idx, val)',
    hint: '`enumerate()` gives index + value.'
  },
  {
    id: 'py_loop_8',
    topicId: 'py_loop',
    question: 'Break loop when it reaches 5.',
    mathSolution: 'Prints 0–4',
    codeSolution: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0 1 2 3 4',
    hint: '`break` exits loop immediately.'
  },
  {
    id: 'py_loop_9',
    topicId: 'py_loop',
    question: 'Print odd numbers 1–10 using continue.',
    mathSolution: '1 3 5 7 9',
    codeSolution: 'for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)',
    hint: '`continue` skips iteration.'
  },
  {
    id: 'py_loop_10',
    topicId: 'py_loop',
    question: 'For loop with else.',
    mathSolution: '1 2 3 then Done',
    codeSolution: 'for i in range(1, 4):\n    print(i)\nelse:\n    print("Done")',
    hint: 'else runs if no break occurs.'
  },

  {
    id: 'py_loop_11',
    topicId: 'py_loop',
    question: 'Infinite loop until "quit".',
    mathSolution: 'Stops on quit',
    codeSolution: 'while True:\n    user_input = input("Enter: ")\n    if user_input == "quit":\n        break',
    hint: 'Use while True + break.'
  },

  {
    id: 'py_loop_12',
    topicId: 'py_loop',
    question: 'Print dictionary keys.',
    mathSolution: 'name, age',
    codeSolution: 'person = {"name": "Alice", "age": 25}\nfor key in person:\n    print(key)',
    hint: 'Default iteration gives keys.'
  },

  {
    id: 'py_loop_13',
    topicId: 'py_loop',
    question: 'Print dictionary values.',
    mathSolution: '10 20',
    codeSolution: 'd = {"x": 10, "y": 20}\nfor val in d.values():\n    print(val)',
    hint: '.values() returns values.'
  },

  {
    id: 'py_loop_14',
    topicId: 'py_loop',
    question: 'Print key-value pairs.',
    mathSolution: 'a:1 b:2',
    codeSolution: 'd = {"a": 1, "b": 2}\nfor k, v in d.items():\n    print(f"{k}: {v}")',
    hint: '.items() returns pairs.'
  },

  {
    id: 'py_loop_15',
    topicId: 'py_loop',
    question: 'Even numbers 2–8 using step.',
    mathSolution: '2 4 6 8',
    codeSolution: 'for i in range(2, 10, 2):\n    print(i)',
    hint: 'Use step in range.'
  },

  {
    id: 'py_loop_16',
    topicId: 'py_loop',
    question: 'Count down 5 to 1.',
    mathSolution: '5 4 3 2 1',
    codeSolution: 'for i in range(5, 0, -1):\n    print(i)',
    hint: 'Negative step.'
  },

  {
    id: 'py_loop_17',
    topicId: 'py_loop',
    question: 'Double list values.',
    mathSolution: '[2,4,6]',
    codeSolution: 'nums = [1,2,3]\nfor i in range(len(nums)):\n    nums[i] *= 2\nprint(nums)',
    hint: 'Modify by index.'
  },

 {
  id: 'py_loop_18',
  topicId: 'py_loop',
  question: 'Convert to list comprehension.',
  mathSolution: '[0,1,4,9,16]',
  codeSolution: 'result = [i**2 for i in range(5)]\nprint(result)  # Output: [0, 1, 4, 9, 16]',
  hint: 'Compact loop form.'
},

  {
    id: 'py_loop_19',
    topicId: 'py_loop',
    question: 'Pass statement loop.',
    mathSolution: 'No output',
    codeSolution: 'for i in range(3):\n    pass',
    hint: 'pass does nothing.'
  },

  {
    id: 'py_loop_20',
    topicId: 'py_loop',
    question: 'Use zip.',
    mathSolution: '(1,a) (2,b)',
    codeSolution: 'nums = [1,2]\nletters = ["a","b"]\nfor n,l in zip(nums, letters):\n    print(n,l)',
    hint: 'zip pairs lists.'
  },
  {
  id: 'py_loop_21',
  topicId: 'py_loop',
  question: 'Write a while loop that repeatedly asks the user for a number and stops when they enter 0.',
  mathSolution: 'Keeps asking until 0 is entered',
  codeSolution: 'num = int(input("Enter a number (0 to stop): "))\nwhile num != 0:\n    num = int(input("Enter another: "))\nprint("Stopped")  # Output: Stopped when user enters 0',
  hint: 'Get input first, then loop while the condition holds.'
},
  {
    id: 'py_loop_22',
    topicId: 'py_loop',
    question: 'Write a for loop to find the maximum value in the list [4, 7, 1, 9, 3] without using max().',
    mathSolution: 'Maximum is 9',
    codeSolution: 'numbers = [4, 7, 1, 9, 3]\nmax_val = numbers[0]\nfor num in numbers:\n    if num > max_val:\n        max_val = num\nprint(max_val)  # 9',
    hint: 'Initialize with first element and update if larger found.'
  },
  {
    id: 'py_loop_23',
    topicId: 'py_loop',
    question: 'Write a for loop to check if all numbers in [2, 4, 6, 8] are even.',
    mathSolution: 'Returns True (all even)',
    codeSolution: 'nums = [2, 4, 6, 8]\nall_even = True\nfor n in nums:\n    if n % 2 != 0:\n        all_even = False\n        break\nprint(all_even)  # True',
    hint: 'Assume True until a violation is found.'
  },
  {
    id: 'py_loop_24',
    topicId: 'py_loop',
    question: 'Print a right-angled triangle of stars with 4 rows.',
    mathSolution: '* ** *** ****',
    codeSolution: 'for i in range(1, 5):\n    print("*" * i)',
    hint: 'Use string multiplication.'
  },
  {
    id: 'py_loop_25',
    topicId: 'py_loop',
    question: 'Remove all even numbers from [1,2,3,4,5] while iterating.',
    mathSolution: '[1,3,5]',
    codeSolution: 'nums = [1,2,3,4,5]\nfor n in nums[:]:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)  # [1,3,5]',
    hint: 'Iterate over a copy of list.'
  },
  {
    id: 'py_loop_26',
    topicId: 'py_loop',
    question: 'While loop with else countdown 3 to 1.',
    mathSolution: '3 2 1 Blast off!',
    codeSolution: 'i = 3\nwhile i > 0:\n    print(i)\n    i -= 1\nelse:\n    print("Blast off!")',
    hint: 'else runs when loop ends normally.'
  },
  {
    id: 'py_loop_27',
    topicId: 'py_loop',
    question: 'Nested loops break when i == j.',
    mathSolution: 'Breaks inner loop at diagonal',
    codeSolution: 'for i in range(1,4):\n    for j in range(1,4):\n        print(i, j)\n        if i == j:\n            break',
    hint: 'break affects only inner loop.'
  },
  {
    id: 'py_loop_28',
    topicId: 'py_loop',
    question: 'Reverse string "Hello" using loop.',
    mathSolution: 'o l l e H',
    codeSolution: 's = "Hello"\nfor ch in s[::-1]:\n    print(ch)',
    hint: 'Use slicing reverse.'
  },
  {
    id: 'py_loop_29',
    topicId: 'py_loop',
    question: 'Count vowels in "Beautiful".',
    mathSolution: '5 vowels',
    codeSolution: 's = "Beautiful"\nvowels = "aeiouAEIOU"\ncount = 0\nfor ch in s:\n    if ch in vowels:\n        count += 1\nprint(count)  # 5',
    hint: 'Use membership check.'
  },
  {
    id: 'py_loop_30',
    topicId: 'py_loop',
    question: 'Reverse digits of 12345 using while loop.',
    mathSolution: '54321',
    codeSolution: 'n = 12345\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(rev)',
    hint: 'Extract last digit repeatedly.'
  },
  {
    id: 'py_loop_31',
    topicId: 'py_loop',
    question: 'First 5 Fibonacci numbers.',
    mathSolution: '0 1 1 2 3',
    codeSolution: 'a, b = 0, 1\nfor _ in range(5):\n    print(a)\n    a, b = b, a + b',
    hint: 'Use tuple swapping.'
  },
  {
    id: 'py_loop_32',
    topicId: 'py_loop',
    question: 'Even numbers 10 to 2.',
    mathSolution: '10 8 6 4 2',
    codeSolution: 'for i in range(10, 1, -2):\n    print(i)',
    hint: 'Use negative step.'
  },
  {
    id: 'py_loop_33',
    topicId: 'py_loop',
    question: 'Unpack tuples from list.',
    mathSolution: '1 one, 2 two',
    codeSolution: 'pairs = [(1,"one"), (2,"two")]\nfor num, word in pairs:\n    print(num, word)',
    hint: 'Tuple unpacking in loop.'
  },
  {
    id: 'py_loop_34',
    topicId: 'py_loop',
    question: 'Iterate over set {3,1,4,2}.',
    mathSolution: 'Unordered output',
    codeSolution: 's = {3,1,4,2}\nfor val in s:\n    print(val)',
    hint: 'Set order not guaranteed.'
  },
  {
    id: 'py_loop_35',
    topicId: 'py_loop',
    question: 'Extract uppercase letters from string.',
    mathSolution: 'HW',
    codeSolution: 's = "Hello World!"\nresult = ""\nfor ch in s:\n    if ch.isupper():\n        result += ch\nprint(result)  # HW',
    hint: 'Check isupper().'
  },
  {
    id: 'py_loop_36',
    topicId: 'py_loop',
    question: 'Sum 2x3 matrix.',
    mathSolution: '21',
    codeSolution: 'matrix = [[1,2,3],[4,5,6]]\ntotal = 0\nfor row in matrix:\n    for val in row:\n        total += val\nprint(total)',
    hint: 'Nested iteration.'
  },
  {
    id: 'py_loop_37',
    topicId: 'py_loop',
    question: 'Flatten nested list.',
    mathSolution: '[1,2,3,4,5,6]',
    codeSolution: 'nested = [[1,2],[3,4,5],[6]]\nflat = []\nfor sub in nested:\n    for x in sub:\n        flat.append(x)\nprint(flat)',
    hint: 'Append inner items.'
  },
  {
    id: 'py_loop_38',
    topicId: 'py_loop',
    question: 'Countdown 5 to Go.',
    mathSolution: '5 4 3 2 1 Go!',
    codeSolution: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Go!")',
    hint: 'Decrement loop.'
  },
  {
    id: 'py_loop_39',
    topicId: 'py_loop',
    question: 'Prime check using for-else.',
    mathSolution: 'Prime',
    codeSolution: 'num = 7\nfor i in range(2, num):\n    if num % i == 0:\n        print("Not prime")\n        break\nelse:\n    print("Prime")',
    hint: 'else runs if no break.'
  },
  {
    id: 'py_loop_40',
    topicId: 'py_loop',
    question: 'Find common elements.',
    mathSolution: '[3,4]',
    codeSolution: 'a = [1,2,3,4]\nb = [3,4,5,6]\ncommon = []\nfor x in a:\n    if x in b:\n        common.append(x)\nprint(common)',
    hint: 'Membership test.'
  },

  //conditionalStatement
  {
  id: 'py_cond_1',
  topicId: 'py_cond',
  question: 'Write an if statement that prints "Adult" if age >= 18.',
  mathSolution: 'Check if age is greater than or equal to 18.',
  codeSolution: 'age = 20\nif age >= 18:\n    print("Adult")',
  hint: 'Use simple if condition'
},
{
  id: 'py_cond_2',
  topicId: 'py_cond',
  question: 'Write if-else statement for Even or Odd.',
  mathSolution: 'Check remainder using % operator.',
  codeSolution: 'num = 7\nif num % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
  hint: 'Use modulo operator'
},
{
  id: 'py_cond_3',
  topicId: 'py_cond',
  question: 'Check Positive, Negative or Zero.',
  mathSolution: 'Compare with zero.',
  codeSolution: 'num = -5\nif num > 0:\n    print("Positive")\nelif num < 0:\n    print("Negative")\nelse:\n    print("Zero")',
  hint: 'Use elif'
},
{
  id: 'py_cond_4',
  topicId: 'py_cond',
  question: 'Nested if check positive even.',
  mathSolution: 'Check positivity then even.',
  codeSolution: 'num = 12\nif num > 0:\n    if num % 2 == 0:\n        print("Positive even")',
  hint: 'Nested condition'
},
{
  id: 'py_cond_5',
  topicId: 'py_cond',
  question: 'Ternary operator pass/fail.',
  mathSolution: 'One-line condition.',
  codeSolution: 'marks = 45\nresult = "Pass" if marks >= 33 else "Fail"\nprint(result)',
  hint: 'ternary operator'
},
{
  id: 'py_cond_6',
  topicId: 'py_cond',
  question: 'Leap year check.',
  mathSolution: 'Divisible by 4, not 100 unless 400.',
  codeSolution: 'year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print("Leap year")\nelse:\n    print("Not leap year")',
  hint: 'standard rule'
},
{
  id: 'py_cond_7',
  topicId: 'py_cond',
  question: 'Vowel check.',
  mathSolution: 'Check membership.',
  codeSolution: 'ch = "e"\nif ch in "aeiouAEIOU":\n    print("Vowel")\nelse:\n    print("Consonant")',
  hint: 'in operator'
},
{
  id: 'py_cond_8',
  topicId: 'py_cond',
  question: 'Largest of three numbers.',
  mathSolution: 'Compare all values.',
  codeSolution: 'a, b, c = 10, 25, 15\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)',
  hint: 'comparison'
},
{
  id: 'py_cond_9',
  topicId: 'py_cond',
  question: 'Empty string check.',
  mathSolution: 'Falsy value.',
  codeSolution: 's = ""\nif s:\n    print("Not empty")\nelse:\n    print("Empty")',
  hint: 'if s'
},
{
  id: 'py_cond_10',
  topicId: 'py_cond',
  question: 'Empty list check.',
  mathSolution: 'Falsy list.',
  codeSolution: 'lst = []\nif lst:\n    print("Not empty")\nelse:\n    print("Empty")',
  hint: 'if lst'
},
{
  id: 'py_cond_11',
  topicId: 'py_cond',
  question: 'Grade system.',
  mathSolution: 'Range-based grading.',
  codeSolution: 'marks = 85\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelif marks >= 60:\n    print("C")\nelif marks >= 45:\n    print("D")\nelse:\n    print("F")',
  hint: 'descending order'
},
{
  id: 'py_cond_12',
  topicId: 'py_cond',
  question: 'Divisible by 3 and 5.',
  mathSolution: 'AND condition.',
  codeSolution: 'num = 15\nif num % 3 == 0 and num % 5 == 0:\n    print("Yes")',
  hint: 'and operator'
},
{
  id: 'py_cond_13',
  topicId: 'py_cond',
  question: 'Range 1-100.',
  mathSolution: 'Chained comparison.',
  codeSolution: 'num = 50\nif 1 <= num <= 100:\n    print("In range")',
  hint: 'chained comparison'
},
{
  id: 'py_cond_14',
  topicId: 'py_cond',
  question: 'Starts with letter.',
  mathSolution: 'Check first char.',
  codeSolution: 's = "Python"\nif s[0] == "P":\n    print("Yes")',
  hint: 'index 0'
},
{
  id: 'py_cond_15',
  topicId: 'py_cond',
  question: 'Case insensitive compare.',
  mathSolution: 'Lowercase conversion.',
  codeSolution: 's1 = "Hello"\ns2 = "hello"\nif s1.lower() == s2.lower():\n    print("Same")',
  hint: 'lower()'
},
{
  id: 'py_cond_16',
  topicId: 'py_cond',
  question: 'Perfect square.',
  mathSolution: 'sqrt check.',
  codeSolution: 'import math\nnum = 16\nroot = int(math.sqrt(num))\nif root * root == num:\n    print("Perfect square")',
  hint: 'integer sqrt'
},
{
  id: 'py_cond_17',
  topicId: 'py_cond',
  question: 'Century year.',
  mathSolution: 'Divisible by 100.',
  codeSolution: 'year = 1900\nif year % 100 == 0:\n    print("Century year")',
  hint: '%100'
},
{
  id: 'py_cond_18',
  topicId: 'py_cond',
  question: 'Triangle validity.',
  mathSolution: 'Triangle inequality.',
  codeSolution: 'a, b, c = 3, 4, 5\nif a+b>c and b+c>a and a+c>b:\n    print("Valid triangle")',
  hint: 'triangle rule'
},
{
  id: 'py_cond_19',
  topicId: 'py_cond',
  question: 'Prime check.',
  mathSolution: 'Check divisors.',
  codeSolution: 'n = 17\nif n > 1:\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            print("Not prime")\n            break\n    else:\n        print("Prime")\nelse:\n    print("Not prime")',
  hint: 'loop method'
},
{
  id: 'py_cond_20',
  topicId: 'py_cond',
  question: 'Digit check.',
  mathSolution: 'isdigit().',
  codeSolution: 'ch = "7"\nprint(ch.isdigit())',
  hint: 'isdigit'
},
{
  id: 'py_cond_21',
  topicId: 'py_cond',
  question: 'Upper/lower check.',
  mathSolution: 'isupper/islower.',
  codeSolution: 'ch = "A"\nif ch.isupper():\n    print("Upper")\nelif ch.islower():\n    print("Lower")',
  hint: 'string methods'
},
{
  id: 'py_cond_22',
  topicId: 'py_cond',
  question: 'Login system.',
  mathSolution: 'Check credentials.',
  codeSolution: 'u = "admin"\np = "1234"\nif u=="admin" and p=="1234":\n    print("Login successful")\nelse:\n    print("Login failed")',
  hint: 'and operator'
},
{
  id: 'py_cond_23',
  topicId: 'py_cond',
  question: 'Check if a number is a multiple of 7 or 11.',
  mathSolution: 'Use `or` operator.',
  codeSolution: 'num = 14\nif num % 7 == 0 or num % 11 == 0:\n    print("Multiple of 7 or 11")\nelse:\n    print("Not multiple")',
  hint: 'Use `%` with `or`.'
},
{
  id: 'py_cond_24',
  topicId: 'py_cond',
  question: 'Check if a string is palindrome using if.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 's = "madam"\nif s == s[::-1]:\n    print("Palindrome")\nelse:\n    print("Not palindrome")',
  hint: 'Use slicing `[::-1]` to reverse.'
},
{
  id: 'py_cond_25',
  topicId: 'py_cond',
  question: 'Check if a number is positive and even using nested if.',
  mathSolution: 'First check positive, then even.',
  codeSolution: 'num = 8\nif num > 0:\n    if num % 2 == 0:\n        print("Positive even")\n    else:\n        print("Positive but odd")\nelse:\n    print("Not positive")',
  hint: 'Nest conditions.'
},
{
  id: 'py_cond_26',
  topicId: 'py_cond',
  question: 'Check if a number is Armstrong number (3 digits).',
  mathSolution: 'Cube each digit and sum.',
  codeSolution: 'num = 153\nsum_of_cubes = sum(int(d)**3 for d in str(num))\nif sum_of_cubes == num:\n    print("Armstrong")\nelse:\n    print("Not Armstrong")',
  hint: 'Extract digits and cube them.'
},
{
  id: 'py_cond_27',
  topicId: 'py_cond',
  question: 'Check if a year is a millennium year.',
  mathSolution: 'Check divisible by 1000.',
  codeSolution: 'year = 2000\nif year % 1000 == 0:\n    print("Millennium year")\nelse:\n    print("Not millennium year")',
  hint: 'Use `% 1000 == 0`.'
},
{
  id: 'py_cond_28',
  topicId: 'py_cond',
  question: 'Check if a number is palindrome.',
  mathSolution: 'Compare with reverse.',
  codeSolution: 'num = 121\nif str(num) == str(num)[::-1]:\n    print("Palindrome")\nelse:\n    print("Not palindrome")',
  hint: 'Convert to string.'
},
{
  id: 'py_cond_29',
  topicId: 'py_cond',
  question: 'Check triangle type.',
  mathSolution: 'Compare sides.',
  codeSolution: 'a, b, c = 5, 5, 5\nif a == b == c:\n    print("Equilateral")\nelif a == b or b == c or a == c:\n    print("Isosceles")\nelse:\n    print("Scalene")',
  hint: 'Compare all sides.'
},
{
  id: 'py_cond_30',
  topicId: 'py_cond',
  question: 'Check positive and <=100.',
  mathSolution: 'Combine conditions.',
  codeSolution: 'num = 50\nif 0 < num <= 100:\n    print("Valid")\nelse:\n    print("Invalid")',
  hint: 'Use chained comparison.'
},
{
  id: 'py_cond_31',
  topicId: 'py_cond',
  question: 'Check alphabet.',
  mathSolution: 'Use isalpha().',
  codeSolution: 'ch = "Z"\nif ch.isalpha():\n    print("Alphabet")\nelse:\n    print("Not alphabet")',
  hint: 'Use isalpha().'
},
{
  id: 'py_cond_32',
  topicId: 'py_cond',
  question: 'Check range condition.',
  mathSolution: 'Use OR between ranges.',
  codeSolution: 'num = 15\nif (10 <= num <= 20) or (30 <= num <= 40):\n    print("Valid range")\nelse:\n    print("Invalid")',
  hint: 'Use OR.'
},
{
  id: 'py_cond_33',
  topicId: 'py_cond',
  question: 'Check only spaces.',
  mathSolution: 'Use isspace().',
  codeSolution: 's = "   "\nif s.isspace():\n    print("Only spaces")\nelse:\n    print("Other chars")',
  hint: 'Use isspace().'
},
{
  id: 'py_cond_34',
  topicId: 'py_cond',
  question: 'Perfect number check.',
  mathSolution: 'Sum divisors.',
  codeSolution: 'num = 6\nif sum(i for i in range(1, num) if num % i == 0) == num:\n    print("Perfect")\nelse:\n    print("Not perfect")',
  hint: 'Sum divisors.'
},
{
  id: 'py_cond_35',
  topicId: 'py_cond',
  question: 'Strong number check.',
  mathSolution: 'Sum factorial digits.',
  codeSolution: 'import math\nnum = 145\nif sum(math.factorial(int(d)) for d in str(num)) == num:\n    print("Strong number")\nelse:\n    print("Not strong")',
  hint: 'Use factorial.'
},
{
  id: 'py_cond_36',
  topicId: 'py_cond',
  question: 'Harshad number.',
  mathSolution: 'Divisible by digit sum.',
  codeSolution: 'num = 18\nd = sum(int(i) for i in str(num))\nif num % d == 0:\n    print("Harshad")\nelse:\n    print("Not Harshad")',
  hint: 'Sum digits.'
},
{
  id: 'py_cond_37',
  topicId: 'py_cond',
  question: 'Duck number.',
  mathSolution: 'Contains 0 but not starting with 0.',
  codeSolution: 'num = "102"\nif "0" in num and num[0] != "0":\n    print("Duck")\nelse:\n    print("Not duck")',
  hint: 'Check zero.'
},
{
  id: 'py_cond_38',
  topicId: 'py_cond',
  question: 'Spy number.',
  mathSolution: 'Sum = product.',
  codeSolution: 'import math\nnum = 123\nd = [int(i) for i in str(num)]\nproduct = 1\nfor x in d:\n    product *= x\nif sum(d) == product:\n    print("Spy")\nelse:\n    print("Not spy")',
  hint: 'Compute product manually.'
},
{
  id: 'py_cond_39',
  topicId: 'py_cond',
  question: 'Neon number.',
  mathSolution: 'Square digit sum.',
  codeSolution: 'num = 9\nsq = num**2\nif sum(int(i) for i in str(sq)) == num:\n    print("Neon")\nelse:\n    print("Not neon")',
  hint: 'Square then sum.'
},
{
  id: 'py_cond_40',
  topicId: 'py_cond',
  question: 'Buzz number.',
  mathSolution: 'Ends with 7 or divisible by 7.',
  codeSolution: 'num = 14\nif num % 7 == 0 or num % 10 == 7:\n    print("Buzz")\nelse:\n    print("Not buzz")',
  hint: 'Check 7 condition.'
},

//functions
{
  id: 'py_func_1',
  topicId: 'py_functions',
  question: 'Write a function that takes two numbers as arguments and returns their sum.',
  mathSolution: 'Define a function with parameters and return the result.',
  codeSolution: 'def add_numbers(a, b):\n    return a + b\n\nprint(add_numbers(2, 3))  # Output: 5',
  hint: 'Use the return statement to send back the result.'
},
{
  id: 'py_func_2',
  topicId: 'py_functions',
  question: 'Create a function that checks if a number is even or odd.',
  mathSolution: 'Use modulo operator to check divisibility by 2.',
  codeSolution: 'def is_even(num):\n    return num % 2 == 0\n\nprint(is_even(4))  # Output: True',
  hint: 'Return True if number % 2 == 0, otherwise False.'
},
{
  id: 'py_func_3',
  topicId: 'py_functions',
  question: 'Write a function with default parameters for greeting.',
  mathSolution: 'Assign default values to parameters that can be overridden.',
  codeSolution: 'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nprint(greet("Alice"))  # Output: Hello, Alice!',
  hint: 'Default parameters are used when arguments are not provided.'
},
{
  id: 'py_func_4',
  topicId: 'py_functions',
  question: 'Create a function that returns multiple values (min and max of a list).',
  mathSolution: 'Return a tuple containing multiple values.',
  codeSolution: 'def min_max(numbers):\n    return min(numbers), max(numbers)\n\nprint(min_max([1, 2, 3, 4]))  # Output: (1, 4)',
  hint: 'Multiple values are returned as a tuple by default.'
},
{
  id: 'py_func_5',
  topicId: 'py_functions',
  question: 'Write a function with variable number of arguments (*args).',
  mathSolution: 'Use *args to accept any number of positional arguments.',
  codeSolution: 'def sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3))  # Output: 6',
  hint: '*args collects all positional arguments into a tuple.'
},
{
  id: 'py_func_6',
  topicId: 'py_functions',
  question: 'Create a function with variable number of keyword arguments (**kwargs).',
  mathSolution: 'Use **kwargs to accept any number of keyword arguments.',
  codeSolution: 'def print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")\n\nprint_info(name="John", age=20)',
  hint: '**kwargs collects all keyword arguments into a dictionary.'
},
{
  id: 'py_func_7',
  topicId: 'py_functions',
  question: 'Write a recursive function to calculate factorial of a number.',
  mathSolution: 'Base case: n=0 returns 1; recursive case: n * factorial(n-1).',
  codeSolution: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))  # Output: 120',
  hint: 'Recursive functions call themselves with modified parameters.'
},
{
  id: 'py_func_8',
  topicId: 'py_functions',
  question: 'Create a lambda function to double a number.',
  mathSolution: 'Lambda functions are anonymous single-expression functions.',
  codeSolution: 'double = lambda x: x * 2\nprint(double(5))  # Output: 10',
  hint: 'Lambda functions are defined without def keyword.'
},
{
  id: 'py_func_9',
  topicId: 'py_functions',
  question: 'Use map() function with lambda to square all elements in a list.',
  mathSolution: 'map() applies a function to every item in an iterable.',
  codeSolution: 'numbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # Output: [1, 4, 9, 16]',
  hint: 'map() returns an iterator, convert to list to see results.'
},
{
  id: 'py_func_10',
  topicId: 'py_functions',
  question: 'Use filter() to get only even numbers from a list.',
  mathSolution: 'filter() keeps items where function returns True.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)  # Output: [2, 4, 6]',
  hint: 'filter() returns iterator, convert to list to see results.'
},

{
  id: 'py_func_11',
  topicId: 'py_functions',
  question: 'Use reduce() to find product of all numbers in a list.',
  mathSolution: 'reduce() cumulatively applies function to items.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 24',
  hint: 'reduce() is in functools module, not built-in.'
},
{
  id: 'py_func_12',
  topicId: 'py_functions',
  question: 'Write a function that returns another function (closure).',
  mathSolution: 'Inner function remembers variables from outer scope.',
  codeSolution: 'def multiplier(factor):\n    def multiply(x):\n        return x * factor\n    return multiply\n\ndouble = multiplier(2)\nprint(double(5))  # Output: 10',
  hint: 'Closures capture and remember outer variables.'
},
{
  id: 'py_func_13',
  topicId: 'py_functions',
  question: 'Create a decorator that prints function execution time.',
  mathSolution: 'Decorators wrap functions to add functionality.',
  codeSolution: 'import time\n\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"Time: {end-start:.4f}s")\n        return result\n    return wrapper\n\n@timer_decorator\ndef slow_function():\n    time.sleep(1)\n    return "Done"\n\nprint(slow_function())',
  hint: 'Decorators use @ syntax and modify function behavior.'
},
{
  id: 'py_func_14',
  topicId: 'py_functions',
  question: 'Write a decorator that caches function results (memoization).',
  mathSolution: 'Store results in cache to avoid recomputation.',
  codeSolution: 'def memoize(func):\n    cache = {}\n    def wrapper(*args):\n        if args in cache:\n            return cache[args]\n        cache[args] = func(*args)\n        return cache[args]\n    return wrapper\n\n@memoize\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(6))  # Output: 8',
  hint: 'Cache dictionary stores results for given arguments.'
},

{
  id: 'py_func_15',
  topicId: 'py_functions',
  question: 'Create a generator function that yields Fibonacci numbers.',
  mathSolution: 'Generators use yield to produce values one at a time.',
  codeSolution: 'def fibonacci_generator(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nprint(list(fibonacci_generator(5)))  # Output: [0, 1, 1, 2, 3]',
  hint: 'yield pauses function, saving state for next call.'
},

{
  id: 'py_func_16',
  topicId: 'py_functions',
  question: 'Write a function with type hints for parameters and return value.',
  mathSolution: 'Type hints improve code readability and enable static checking.',
  codeSolution: 'def greet(name: str, age: int) -> str:\n    return f"{name} is {age} years old"\n\nprint(greet("Alice", 25))  # Output: Alice is 25 years old',
  hint: 'Type hints don\'t enforce types but document them.'
},
{
  id: 'py_func_17',
  topicId: 'py_functions',
  question: 'Create a function that uses global variable with global keyword.',
  mathSolution: 'global keyword allows modifying variables in global scope.',
  codeSolution: 'counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n    return counter\n\nprint(increment())  # Output: 1\nprint(increment())  # Output: 2',
  hint: 'Avoid global variables when possible; they make code harder to debug.'
},
{
  id: 'py_func_18',
  topicId: 'py_functions',
  question: 'Write a function that demonstrates variable scope (local vs global).',
  mathSolution: 'Variables inside function are local unless declared global.',
  codeSolution: 'x = 10\n\ndef scope_demo():\n    x = 5\n    print(f"Local x: {x}")\n\nscope_demo()\nprint(f"Global x: {x}")',
  hint: 'Local variables don\'t affect global variables with same name.'
},
{
  id: 'py_func_19',
  topicId: 'py_functions',
  question: 'Create a function that validates input using docstring.',
  mathSolution: 'Docstrings document function purpose and usage.',
  codeSolution: 'def divide(a: float, b: float) -> float:\n    if b == 0:\n        raise ValueError("Denominator cannot be zero")\n    return a / b\n\nprint(divide(10, 2))  # Output: 5.0',
  hint: 'Docstrings are accessible via help(function) or function.__doc__.'
},
{
  id: 'py_func_20',
  topicId: 'py_functions',
  question: 'Write a function that uses nonlocal keyword in nested function.',
  mathSolution: 'nonlocal allows modifying variables in enclosing scope.',
  codeSolution: 'def outer():\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n        return count\n    return inner\n\ncounter = outer()\nprint(counter())  # Output: 1\nprint(counter())  # Output: 2',
  hint: 'nonlocal is for nested functions, global for module scope.'
},
{
  id: 'py_func_21',
  topicId: 'py_functions',
  question: 'Create a function that accepts both positional and keyword arguments.',
  mathSolution: 'Combine *args and **kwargs for flexibility.',
  codeSolution: 'def flexible_function(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\nflexible_function(1, 2, name="Alice")',
  hint: 'args is tuple, kwargs is dictionary.'
},
{
  id: 'py_func_22',
  topicId: 'py_functions',
  question: 'Write a function with keyword-only arguments.',
  mathSolution: 'Arguments after * are keyword-only.',
  codeSolution: 'def create_user(name, age, *, city="Unknown"):\n    return f"{name} from {city}"\n\nprint(create_user("John", 30, city="NYC"))',
  hint: 'Keyword-only arguments must be specified by name.'
},
{
  id: 'py_func_23',
  topicId: 'py_functions',
  question: 'Create a function with positional-only arguments.',
  mathSolution: 'Arguments before / are positional-only.',
  codeSolution: 'def power(x, y, /):\n    return x ** y\n\nprint(power(2, 3))  # Output: 8',
  hint: 'Positional-only arguments cannot be passed by keyword.'
},
{
  id: 'py_func_24',
  topicId: 'py_functions',
  question: 'Write a recursive function to calculate Fibonacci numbers.',
  mathSolution: 'fib(n)=fib(n-1)+fib(n-2).',
  codeSolution: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(6))  # Output: 8',
  hint: 'Be careful with recursion depth.'
},
{
  id: 'py_func_25',
  topicId: 'py_functions',
  question: 'Create a function that implements tail recursion concept.',
  mathSolution: 'Pass accumulator to avoid extra computation.',
  codeSolution: 'def factorial_tail(n, acc=1):\n    if n == 0:\n        return acc\n    return factorial_tail(n-1, acc*n)\n\nprint(factorial_tail(5))  # Output: 120',
  hint: 'Python does not optimize tail recursion.'
},
{
  id: 'py_func_26',
  topicId: 'py_functions',
  question: 'Write a function that uses functools.partial to fix arguments.',
  mathSolution: 'partial creates new function with some arguments fixed.',
  codeSolution: 'from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))\nprint(cube(5))',
  hint: 'partial is useful for creating specialized functions.'
},
{
  id: 'py_func_27',
  topicId: 'py_functions',
  question: 'Create a function that uses lru_cache for optimization.',
  mathSolution: 'lru_cache caches function results automatically.',
  codeSolution: 'from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
  hint: 'lru_cache caches results based on arguments.'
},
{
  id: 'py_func_28',
  topicId: 'py_functions',
  question: 'Write a function that implements currying.',
  mathSolution: 'Currying converts multi-argument functions into chained single-argument functions.',
  codeSolution: 'def curry(func):\n    def curried(*args):\n        if len(args) >= func.__code__.co_argcount:\n            return func(*args)\n        return lambda *more: curried(*(args + more))\n    return curried\n\n@curry\ndef add_three(a, b, c):\n    return a + b + c\n\nprint(add_three(1)(2)(3))',
  hint: 'Currying allows partial function application.'
},
{
  id: 'py_func_29',
  topicId: 'py_functions',
  question: 'Create a function that uses eval() safely.',
  mathSolution: 'Evaluate expressions with restricted environment.',
  codeSolution: 'def safe_eval(expression):\n    allowed = {"abs": abs, "pow": pow}\n    return eval(expression, {"__builtins__": {}}, allowed)',
  hint: 'Avoid eval with untrusted input.'
},
{
  id: 'py_func_30',
  topicId: 'py_functions',
  question: 'Write a function that uses exec() to execute dynamic code.',
  mathSolution: 'exec runs dynamically generated Python code.',
  codeSolution: 'def create_function():\n    namespace = {}\n    code = """\ndef greet():\n    return "Hello World"\n"""\n    exec(code, namespace)\n    return namespace["greet"]\n\nf = create_function()\nprint(f())',
  hint: 'exec should be used carefully.'
},
{
  id: 'py_func_31',
  topicId: 'py_functions',
  question: 'Create a function that acts as a context manager using contextlib.',
  mathSolution: 'contextlib provides utilities for working with context managers.',
  codeSolution: 'from contextlib import contextmanager\nfrom io import StringIO\n\n@contextmanager\ndef managed_file(initial_value=""):\n    f = StringIO(initial_value)\n    try:\n        yield f\n    finally:\n        f.close()\n\n# Usage\nwith managed_file() as f:\n    f.write("Hello World")\n    print(f.getvalue())',
  hint: 'contextmanager decorator turns generator into context manager.'
},

{
  id: 'py_func_32',
  topicId: 'py_functions',
  question: 'Write a function that uses property decorator for getter/setter.',
  mathSolution: 'property decorator creates managed attributes.',
  codeSolution: 'class Person:\n    def __init__(self, name):\n        self._name = name\n\n    @property\n    def name(self):\n        return self._name\n\n    @name.setter\n    def name(self, value):\n        if not isinstance(value, str):\n            raise TypeError("Name must be string")\n        self._name = value',
  hint: 'Property methods allow controlled attribute access.'
},
{
  id: 'py_func_33',
  topicId: 'py_functions',
  question: 'Create a function that uses staticmethod and classmethod.',
  mathSolution: 'staticmethod does not use self/cls; classmethod receives class.',
  codeSolution: 'class MathOperations:\n    def __init__(self, value):\n        self.value = int(value)\n\n    @staticmethod\n    def add(x, y):\n        return x + y\n\n    @classmethod\n    def create_from_string(cls, string):\n        return cls(string)\n\n# Usage\nprint(MathOperations.add(2, 3))\nobj = MathOperations.create_from_string("10")\nprint(obj.value)',
  hint: 'staticmethod = no self, classmethod = receives class.'
},

{
  id: 'py_func_34',
  topicId: 'py_functions',
  question: 'Write a function that uses functools.wraps to preserve metadata in decorators.',
  mathSolution: 'wraps preserves original function metadata.',
  codeSolution: 'from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        print("Before function")\n        result = func(*args, **kwargs)\n        print("After function")\n        return result\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    """Say hello docstring"""\n    print("Hello!")\n\nprint(say_hello.__name__)\nprint(say_hello.__doc__)',
  hint: 'wraps keeps function identity intact.'
},
{
  id: 'py_func_35',
  topicId: 'py_functions',
  question: 'Create a function that implements function overloading using singledispatch.',
  mathSolution: 'singledispatch selects function based on input type.',
  codeSolution: 'from functools import singledispatch\n\n@singledispatch\ndef process(data):\n    return f"Default: {data}"\n\n@process.register(int)\ndef _(data):\n    return data * 2\n\n@process.register(str)\ndef _(data):\n    return data.upper()\n\n@process.register(list)\ndef _(data):\n    return sum(data)\n\n# Usage\nprint(process(10))\nprint(process("hello"))\nprint(process([1, 2, 3]))\nprint(process(3.5))',
  hint: 'Function behavior changes by type.'
},
{
  id: 'py_func_36',
  topicId: 'py_functions',
  question: 'Write a function that uses inspect module to get function signature.',
  mathSolution: 'inspect reveals function structure.',
  codeSolution: 'import inspect\n\ndef example(a, b=2, *args, **kwargs):\n    pass\n\nsig = inspect.signature(example)\nprint(sig)',
  hint: 'inspect helps analyze functions at runtime.'
},
{
  id: 'py_func_37',
  topicId: 'py_functions',
  question: 'Create a function that validates arguments using function annotations.',
  mathSolution: 'Annotations define expected types.',
  codeSolution: 'def validate(func):\n    def wrapper(*args):\n        annotations = func.__annotations__\n        for name, value in zip(func.__code__.co_varnames, args):\n            if name in annotations and not isinstance(value, annotations[name]):\n                raise TypeError(f"{name} must be {annotations[name]}")\n        return func(*args)\n    return wrapper\n\n@validate\ndef greet(name: str, age: int):\n    return f"{name} is {age}"\n\nprint(greet("Alice", 25))',
  hint: 'Annotations help enforce type rules.'
},
{
  id: 'py_func_38',
  topicId: 'py_functions',
  question: 'Write a function that uses yield from to delegate to another generator.',
  mathSolution: 'yield from delegates iteration.',
  codeSolution: 'def sub():\n    yield 1\n    yield 2\n\ndef main():\n    yield "Start"\n    yield from sub()\n    yield "End"\n\nprint(list(main()))',
  hint: 'Simplifies nested generators.'
},
{
  id: 'py_func_39',
  topicId: 'py_functions',
  question: 'Create a function that implements coroutine with send() method.',
  mathSolution: 'Coroutines receive values dynamically.',
  codeSolution: 'def coroutine():\n    while True:\n        value = yield\n        print("Received:", value)\n\nc = coroutine()\nnext(c)\nc.send("Hello")\nc.send("World")',
  hint: 'send() passes values into generator.'
},
{
  id: 'py_func_40',
  topicId: 'py_functions',
  question: 'Write a function that uses yield to create an infinite sequence.',
  mathSolution: 'Generators can be infinite.',
  codeSolution: 'def infinite():\n    n = 0\n    while True:\n        yield n\n        n += 2\n\nit = infinite()\nprint(next(it))\nprint(next(it))\nprint(next(it))',
  hint: 'Use carefully to avoid infinite loops.'
},

);