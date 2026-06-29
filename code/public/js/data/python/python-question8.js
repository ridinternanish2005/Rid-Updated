QuizData.questions.push(
    //input&Output ,Operator .Date& time
{
  id: 'py_io_1',
  topicId: 'py_input_output',
  question: 'Write a program that takes user\'s name as input and prints a greeting message.',
  mathSolution: 'Use input() to get user input and print() with formatted string to display output.',
  codeSolution: 'name = input("Enter your name: ")\nprint(f"Hello, {name}! Welcome to Python programming.")',
  hint: 'Use f-strings (prefix with f) to insert variables inside strings.'
},
{
  id: 'py_io_2',
  topicId: 'py_input_output',
  question: 'Take two numbers as input from user and print their sum.',
  mathSolution: 'Convert input strings to integers using int() before addition.',
  codeSolution: 'num1 = int(input("Enter first number: "))\nnum2 = int(input("Enter second number: "))\nsum_result = num1 + num2\nprint(f"The sum of {num1} and {num2} is {sum_result}")',
  hint: 'Remember to convert input strings to numbers before arithmetic.'
},
{
  id: 'py_io_3',
  topicId: 'py_input_output',
  question: 'Read a float number from user and print its square root.',
  mathSolution: 'Use math.sqrt() after converting input to float.',
  codeSolution: 'import math\n\nnum = float(input("Enter a number: "))\nif num >= 0:\n    sqrt_num = math.sqrt(num)\n    print(f"Square root of {num} is {sqrt_num:.2f}")\nelse:\n    print("Cannot calculate square root of negative number")',
  hint: 'math.sqrt() requires non-negative numbers.'
},
{
  id: 'py_io_4',
  topicId: 'py_input_output',
  question: 'Take multiple inputs in a single line separated by spaces and print their sum.',
  mathSolution: 'Use split() to separate inputs and map() to convert to integers.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\ntotal = sum(numbers)\nprint(f"Sum of {numbers} is {total}")',
  hint: 'split() without arguments splits on whitespace.'
},
{
  id: 'py_io_5',
  topicId: 'py_input_output',
  question: 'Read a sentence and count the number of words in it.',
  mathSolution: 'Split the sentence and count the resulting list length.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nword_count = len(words)\nprint(f"Number of words: {word_count}")',
  hint: 'split() without arguments splits on whitespace and handles multiple spaces.'
},
{
  id: 'py_io_6',
  topicId: 'py_input_output',
  question: 'Take a list of integers as input and print them in reverse order.',
  mathSolution: 'Use slicing [::-1] to reverse the list.',
  codeSolution: 'numbers = input("Enter numbers separated by commas: ").split(",")\nnumbers = [int(x.strip()) for x in numbers]\nreversed_numbers = numbers[::-1]\nprint(f"Original: {numbers}")\nprint(f"Reversed: {reversed_numbers}")',
  hint: 'strip() removes extra whitespace after splitting.'
},
{
  id: 'py_io_7',
  topicId: 'py_input_output',
  question: 'Read a multiline input until user enters an empty line.',
  mathSolution: 'Use a loop to collect lines until empty input.',
  codeSolution: 'print("Enter multiple lines (empty line to stop):")\nlines = []\nwhile True:\n    line = input()\n    if line == "":\n        break\n    lines.append(line)\n\nprint("\\nYou entered:")\nfor i, line in enumerate(lines, 1):\n    print(f"{i}: {line}")',
  hint: 'Check for empty string to break the input loop.'
},
{
 
  id: 'py_io_8',
  topicId: 'py_input_output',
  question: 'Take a character as input and print its ASCII value.',
  mathSolution: 'Use ord() function to convert a single character into its ASCII (Unicode code point) value.',
  codeSolution: 'char = input("Enter a character: ")\n\nif len(char) == 1:\n    ascii_value = ord(char)\n    print(f"ASCII value of {char} is {ascii_value}")\nelse:\n    print("Error: Please enter only one character")',
  hint: 'ord() returns the Unicode (ASCII for basic characters) value of a character.'
},
{
  id: 'py_io_9',
  topicId: 'py_input_output',
  question: 'Read an integer and print its binary, octal, and hexadecimal representations.',
  mathSolution: 'Use bin(), oct(), and hex() built-in functions.',
  codeSolution: 'num = int(input("Enter an integer: "))\nprint(f"Decimal: {num}")\nprint(f"Binary: {bin(num)}")\nprint(f"Octal: {oct(num)}")\nprint(f"Hexadecimal: {hex(num)}")',
  hint: 'These functions return strings with prefixes 0b, 0o, 0x.'
},
{
  id: 'py_io_10',
  topicId: 'py_input_output',
  question: 'Read a string and print it in uppercase, lowercase, and title case.',
  mathSolution: 'Use string methods upper(), lower(), and title().',
  codeSolution: 'text = input("Enter a string: ")\nprint(f"Uppercase: {text.upper()}")\nprint(f"Lowercase: {text.lower()}")\nprint(f"Title case: {text.title()}")',
  hint: 'title() capitalizes first letter of each word.'
},
{
  id: 'py_io_11',
  topicId: 'py_input_output',
  question: 'Take a number and print its multiplication table up to 10.',
  mathSolution: 'Use a for loop to generate and print the table.',
  codeSolution: 'num = int(input("Enter a number: "))\nprint(f"Multiplication table of {num}:")\nfor i in range(1, 11):\n    print(f"{num} x {i} = {num * i}")',
  hint: 'Use f-strings for clean formatted output.'
},
{
  id: 'py_io_12',
  topicId: 'py_input_output',
  question: 'Read a string and count vowels and consonants in it.',
  mathSolution: 'Iterate through characters and check if they are vowels.',
  codeSolution: 'text = input("Enter a string: ").lower()\nvowels = "aeiou"\nvowel_count = 0\nconsonant_count = 0\n\nfor char in text:\n    if char.isalpha():\n        if char in vowels:\n            vowel_count += 1\n        else:\n            consonant_count += 1\n\nprint(f"Vowels: {vowel_count}")\nprint(f"Consonants: {consonant_count}")',
  hint: 'Use isalpha() to check if character is a letter.'
},
{
  id: 'py_io_13',
  topicId: 'py_input_output',
  question: 'Take three numbers as input and find the largest among them.',
  mathSolution: 'Use max() function or nested if-else comparisons.',
  codeSolution: 'a = float(input("Enter first number: "))\nb = float(input("Enter second number: "))\nc = float(input("Enter third number: "))\n\nlargest = max(a, b, c)\nprint(f"The largest number is {largest}")',
  hint: 'max() can take multiple arguments or a list.'
},
{
  id: 'py_io_14',
  topicId: 'py_input_output',
  question: 'Read a string and check if it is a palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'text = input("Enter a string: ")\n# Remove spaces and convert to lowercase for accurate check\ncleaned = text.replace(" ", "").lower()\nif cleaned == cleaned[::-1]:\n    print(f"{text} is a palindrome")\nelse:\n    print(f"{text} is not a palindrome")',
  hint: 'Use slicing [::-1] to reverse a string.'
},
{
  id: 'py_io_15',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and print only the even numbers.',
  mathSolution: 'Use list comprehension with modulo operator for filtering.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nevens = [x for x in numbers if x % 2 == 0]\nprint(f"Even numbers: {evens}")',
  hint: 'x % 2 == 0 checks if number is even.'
},
{
  id: 'py_io_16',
  topicId: 'py_input_output',
  question: 'Read a string and print it in a pattern (right-aligned in width 50).',
  mathSolution: 'Use string formatting with width specifier.',
  codeSolution: 'text = input("Enter a string: ")\nwidth = 50\nprint(f"Right-aligned in {width} characters:")\nprint(f"{text:>{width}}")',
  hint: '>{width} right-aligns string in given width.'
},
{
  id: 'py_io_17',
  topicId: 'py_input_output',
  question: 'Take a date in DD/MM/YYYY format and print it in YYYY-MM-DD format.',
  mathSolution: 'Split the string and rearrange components.',
  codeSolution: 'date_str = input("Enter date (DD/MM/YYYY): ")\nday, month, year = date_str.split("/")\nformatted = f"{year}-{month.zfill(2)}-{day.zfill(2)}"\nprint(f"Formatted date: {formatted}")',
  hint: 'zfill() adds leading zeros to ensure two digits.'
},
{
  id: 'py_io_18',
  topicId: 'py_input_output',
  question: 'Read a sentence and print each word on a new line.',
  mathSolution: 'Split the sentence and iterate through words.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nprint("Words in the sentence:")\nfor word in words:\n    print(word)',
  hint: 'split() without arguments splits on whitespace.'
},
{
  id: 'py_io_19',
  topicId: 'py_input_output',
  question: 'Take two numbers and perform all arithmetic operations on them.',
  mathSolution: 'Perform addition, subtraction, multiplication, division, etc.',
  codeSolution: 'a = float(input("Enter first number: "))\nb = float(input("Enter second number: "))\n\nprint(f"{a} + {b} = {a + b}")\nprint(f"{a} - {b} = {a - b}")\nprint(f"{a} * {b} = {a * b}")\nif b != 0:\n    print(f"{a} / {b} = {a / b}")\n    print(f"{a} // {b} = {a // b}")\n    print(f"{a} % {b} = {a % b}")\nelse:\n    print("Division by zero is undefined")',
  hint: 'Check for division by zero before performing division.'
},
{
  id: 'py_io_20',
  topicId: 'py_input_output',
  question: 'Read a string and count the frequency of each character.',
  mathSolution: 'Use a dictionary to store character counts.',
  codeSolution: 'text = input("Enter a string: ")\nfreq = {}\nfor char in text:\n    if char in freq:\n        freq[char] += 1\n    else:\n        freq[char] = 1\n\nprint("Character frequencies:")\nfor char, count in freq.items():\n    print(f"\'{char}\': {count}")',
  hint: 'Collections.Counter can also be used for this purpose.'
},
{
  id: 'py_io_21',
  topicId: 'py_input_output',
  question: 'Read a list of numbers and calculate their average.',
  mathSolution: 'Sum all numbers and divide by count.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [float(x) for x in numbers]\naverage = sum(numbers) / len(numbers)\nprint(f"Numbers: {numbers}")\nprint(f"Average: {average:.2f}")',
  hint: 'Use float() to handle decimal numbers.'
},
{
  id: 'py_io_22',
  topicId: 'py_input_output',
  question: 'Take a string and print it without vowels.',
  mathSolution: 'Filter out vowels using list comprehension.',
  codeSolution: 'text = input("Enter a string: ")\nvowels = "aeiouAEIOU"\nwithout_vowels = "".join([char for char in text if char not in vowels])\nprint(f"String without vowels: {without_vowels}")',
  hint: 'Use in operator to check membership in vowels string.'
},
{
  id: 'py_io_23',
  topicId: 'py_input_output',
  question: 'Read a number and check if it is prime.',
  mathSolution: 'Check divisibility from 2 to square root of the number.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num <= 1:\n    print(f"{num} is not prime")\nelse:\n    is_prime = True\n    for i in range(2, int(num**0.5) + 1):\n        if num % i == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(f"{num} is prime")\n    else:\n        print(f"{num} is not prime")',
  hint: 'Only need to check divisors up to square root.'
},
{
  id: 'py_io_24',
  topicId: 'py_input_output',
  question: 'Take a string and print its reverse without using slicing.',
  mathSolution: 'Iterate through string backwards using loop.',
  codeSolution: 'text = input("Enter a string: ")\nreversed_text = ""\nfor char in text:\n    reversed_text = char + reversed_text\nprint(f"Reversed: {reversed_text}")',
  hint: 'Build reversed string by prepending each character.'
},
{
  id: 'py_io_25',
  topicId: 'py_input_output',
  question: 'Read a sentence and find the longest word.',
  mathSolution: 'Split into words and compare lengths.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nif words:\n    longest = max(words, key=len)\n    print(f"Longest word: {longest}")\n    print(f"Length: {len(longest)}")\nelse:\n    print("No words found")',
  hint: 'max() with key=len finds the longest string.'
},
{
  id: 'py_io_26',
  topicId: 'py_input_output',
  question: 'Take two strings and check if they are anagrams.',
  mathSolution: 'Sort both strings and compare.',
  codeSolution: 'str1 = input("Enter first string: ").replace(" ", "").lower()\nstr2 = input("Enter second string: ").replace(" ", "").lower()\n\nif sorted(str1) == sorted(str2):\n    print("The strings are anagrams")\nelse:\n    print("The strings are not anagrams")',
  hint: 'Remove spaces and convert to lowercase for accurate comparison.'
},
{
  id: 'py_io_27',
  topicId: 'py_input_output',
  question: 'Read a number and print its factorial.',
  mathSolution: 'Use iterative multiplication or recursion.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num < 0:\n    print("Factorial is not defined for negative numbers")\nelse:\n    factorial = 1\n    for i in range(1, num + 1):\n        factorial *= i\n    print(f"{num}! = {factorial}")',
  hint: '0! = 1 by definition.'
},
{
  id: 'py_io_28',
  topicId: 'py_input_output',
  question: 'Take a string and remove duplicate characters.',
  mathSolution: 'Use a set to track seen characters and a list to maintain order of first occurrences.',
  codeSolution: 'text = input("Enter a string: ")\n\nif not text:\n    print("Error: Empty string")\nelse:\n    seen = set()\n    result = []\n\n    for char in text:\n        if char not in seen:\n            seen.add(char)\n            result.append(char)\n\n    print("String with duplicates removed:", "".join(result))',
  hint: 'Use a set to track already seen characters while preserving order using a list.'
},
{
  id: 'py_io_29',
  topicId: 'py_input_output',
  question: 'Read a list of numbers and find the second largest number.',
  mathSolution: 'Sort the list and get second element from end, or find manually.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nif len(numbers) < 2:\n    print("Need at least 2 numbers")\nelse:\n    unique_nums = sorted(set(numbers))\n    if len(unique_nums) >= 2:\n        second_largest = unique_nums[-2]\n        print(f"Second largest: {second_largest}")\n    else:\n        print("All numbers are equal")',
  hint: 'Use set() to handle duplicates.'
},
{
  id: 'py_io_30',
  topicId: 'py_input_output',
  question: 'Take a string and convert it to pig latin (move first letter to end and add "ay").',
  mathSolution: 'Split into words and transform each word.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\npig_latin_words = []\n\nfor word in words:\n    if word:\n        pig_word = word[1:] + word[0] + "ay"\n        pig_latin_words.append(pig_word)\n\npig_latin = " ".join(pig_latin_words)\nprint(f"Pig Latin: {pig_latin}")',
  hint: 'word[0] is first character, word[1:] is rest of word.'
},
{
  id: 'py_io_31',
  topicId: 'py_input_output',
  question: 'Read a string and print it in a zigzag pattern (alternating uppercase/lowercase).',
  mathSolution: 'Use enumerate to track index and toggle case.',
  codeSolution: 'text = input("Enter a string: ")\nresult = []\nfor i, char in enumerate(text):\n    if i % 2 == 0:\n        result.append(char.upper())\n    else:\n        result.append(char.lower())\nprint("Zigzag pattern:", "".join(result))',
  hint: 'Even indices become uppercase, odd become lowercase.'
},
{
  id: 'py_io_32',
  topicId: 'py_input_output',
  question: 'Take a number and print its digits in reverse order.',
  mathSolution: 'Convert to string and reverse, or use modulo arithmetic.',
  codeSolution: 'num = input("Enter a number: ")\nreversed_digits = num[::-1]\nprint(f"Digits reversed: {reversed_digits}")',
  hint: 'Treat number as string for easy reversal.'
},
{
  id: 'py_io_33',
  topicId: 'py_input_output',
  question: 'Read a list of names and sort them alphabetically.',
  mathSolution: 'Use sorted() function to sort the list.',
  codeSolution: 'names_input = input("Enter names separated by commas: ")\nnames = [name.strip() for name in names_input.split(",")]\nsorted_names = sorted(names)\nprint("Sorted names:")\nfor name in sorted_names:\n    print(f"  {name}")',
  hint: 'strip() removes extra whitespace around names.'
},
{
  id: 'py_io_34',
  topicId: 'py_input_output',
  question: 'Take a string and count the number of digits, letters, and special characters.',
  mathSolution: 'Use isdigit(), isalpha() to categorize characters.',
  codeSolution: 'text = input("Enter a string: ")\ndigits = letters = special = 0\n\nfor char in text:\n    if char.isdigit():\n        digits += 1\n    elif char.isalpha():\n        letters += 1\n    else:\n        special += 1\n\nprint(f"Digits: {digits}")\nprint(f"Letters: {letters}")\nprint(f"Special characters: {special}")',
  hint: 'Characters that are neither digit nor letter are special.'
},
{
  id: 'py_io_35',
  topicId: 'py_input_output',
  question: 'Read a sentence and capitalize the first letter of each word.',
  mathSolution: 'Use title() method or manual capitalization.',
  codeSolution: 'sentence = input("Enter a sentence: ")\ncapitalized = sentence.title()\nprint(f"Capitalized: {capitalized}")',
  hint: 'title() capitalizes first letter of each word.'
},
{
  id: 'py_io_36',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and remove duplicates while preserving order.',
  mathSolution: 'Use a set to track seen numbers and list for result.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nseen = set()\nunique = []\nfor num in numbers:\n    if num not in seen:\n        seen.add(num)\n        unique.append(num)\nprint(f"Original: {numbers}")\nprint(f"Unique: {unique}")',
  hint: 'Set provides O(1) lookup for duplicates.'
},
{
  id: 'py_io_37',
  topicId: 'py_input_output',
  question: 'Read a string and check if it contains only digits.',
  mathSolution: 'Use isdigit() method to check all characters.',
  codeSolution: 'text = input("Enter a string: ")\nif text.isdigit():\n    print("The string contains only digits")\nelse:\n    print("The string contains non-digit characters")',
  hint: 'isdigit() returns True if all characters are digits.'
},
{
  id: 'py_io_38',
  topicId: 'py_input_output',
  question: 'Take a string and print it centered in a width of 50 with * padding.',
  mathSolution: 'Use center() method with fill character.',
  codeSolution: 'text = input("Enter a string: ")\ncentered = text.center(50, "*")\nprint(centered)',
  hint: 'center(width, fillchar) centers string with given fill character.'
},
{
  id: 'py_io_39',
  topicId: 'py_input_output',
  question: 'Read a number and print all its factors.',
  mathSolution: 'Check all numbers from 1 to n that divide n evenly.',
  codeSolution: 'num = int(input("Enter a number: "))\nfactors = []\nfor i in range(1, num + 1):\n    if num % i == 0:\n        factors.append(i)\nprint(f"Factors of {num}: {factors}")',
  hint: 'A factor divides the number without remainder.'
},
{
  id: 'py_io_40',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and find the median.',
  mathSolution: 'Sort the list and find middle element(s).',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [float(x) for x in numbers]\nsorted_nums = sorted(numbers)\nn = len(sorted_nums)\nif n % 2 == 1:\n    median = sorted_nums[n // 2]\nelse:\n    median = (sorted_nums[n // 2 - 1] + sorted_nums[n // 2]) / 2\nprint(f"Median: {median}")',
  hint: 'For even count, median is average of two middle numbers.'
},
{
  id: 'py_io_41',
  topicId: 'py_input_output',
  question: 'Read a string and print the most frequent character.',
  mathSolution: 'Count frequencies and find maximum.',
  codeSolution: 'text = input("Enter a string: ")\nfreq = {}\nfor char in text:\n    freq[char] = freq.get(char, 0) + 1\n\nmax_char = max(freq, key=freq.get)\nmax_count = freq[max_char]\nprint(f"Most frequent character: {max_char} (appears {max_count} times)")',
  hint: 'max() with key=freq.get finds key with maximum value.'
},
{
  id: 'py_io_42',
  topicId: 'py_input_output',
  question: 'Take a number and print its binary representation without using bin().',
  mathSolution: 'Repeatedly divide by 2 and collect remainders.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num == 0:\n    binary = "0"\nelse:\n    binary = ""\n    n = num\n    while n > 0:\n        binary = str(n % 2) + binary\n        n = n // 2\nprint(f"Binary of {num} is {binary}")',
  hint: 'Collect remainders from last to first.'
},
{
  id: 'py_io_43',
  topicId: 'py_input_output',
  question: 'Read a string and check if it is a valid email address (simple check).',
  mathSolution: 'Check for @ and . after @ with basic conditions.',
  codeSolution: 'email = input("Enter an email address: ")\nif "@" in email and "." in email.split("@")[-1]:\n    print(f"{email} appears to be valid")\nelse:\n    print(f"{email} is not a valid email")',
  hint: 'Basic validation: must contain @ and a dot after @.'
},
{
  id: 'py_io_44',
  topicId: 'py_input_output',
  question: 'Take a list of numbers and print the cumulative sum.',
  mathSolution: 'Keep running total and print each step.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\ncumulative = []\ntotal = 0\nfor num in numbers:\n    total += num\n    cumulative.append(total)\nprint(f"Original: {numbers}")\nprint(f"Cumulative sum: {cumulative}")',
  hint: 'Each element in cumulative sum is sum of all previous elements.'
},
{
  id: 'py_io_45',
  topicId: 'py_input_output',
  question: 'Read a sentence and replace all spaces with underscores.',
  mathSolution: 'Use replace() method to substitute characters.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nmodified = sentence.replace(" ", "_")\nprint(f"Modified: {modified}")',
  hint: 'replace(old, new) replaces all occurrences.'
},
{
  id: 'py_io_46',
  topicId: 'py_input_output',
  question: 'Take a string and print it in reverse word order.',
  mathSolution: 'Split into words, reverse the list, and join.',
  codeSolution: 'sentence = input("Enter a sentence: ")\nwords = sentence.split()\nreversed_words = words[::-1]\nreversed_sentence = " ".join(reversed_words)\nprint(f"Reversed words: {reversed_sentence}")',
  hint: 'This reverses word order, not characters within words.'
},
{
  id: 'py_io_47',
  topicId: 'py_input_output',
  question: 'Read a number and check if it is a perfect number (sum of factors equals number).',
  mathSolution: 'Find all proper factors and sum them.',
  codeSolution: 'num = int(input("Enter a number: "))\nif num <= 1:\n    print(f"{num} is not a perfect number")\nelse:\n    factors = []\n    for i in range(1, num):\n        if num % i == 0:\n            factors.append(i)\n    if sum(factors) == num:\n        print(f"{num} is a perfect number (factors: {factors})")\n    else:\n        print(f"{num} is not a perfect number")',
  hint: 'Perfect numbers like 6 = 1+2+3, 28 = 1+2+4+7+14.'
},
{
  id: 'py_io_48',
  topicId: 'py_input_output',
  question: 'Take a string and print it in a diamond pattern.',
  mathSolution: 'Print increasing then decreasing number of characters.',
  codeSolution: 'text = input("Enter a string: ")\nn = len(text)\nprint("Diamond pattern:")\nfor i in range(1, n+1):\n    print(text[:i].center(n*2))\nfor i in range(n-1, 0, -1):\n    print(text[:i].center(n*2))',
  hint: 'center() with width 2n creates symmetric pattern.'
},
{
  id: 'py_io_49',
  topicId: 'py_input_output',
  question: 'Read a list of numbers and find the mode (most frequent value).',
  mathSolution: 'Count frequencies and find maximum count.',
  codeSolution: 'numbers = input("Enter numbers separated by spaces: ").split()\nnumbers = [int(x) for x in numbers]\nfreq = {}\nfor num in numbers:\n    freq[num] = freq.get(num, 0) + 1\n\nmax_count = max(freq.values())\nmodes = [num for num, count in freq.items() if count == max_count]\n\nif len(modes) == 1:\n    print(f"Mode: {modes[0]} (appears {max_count} times)")\nelse:\n    print(f"Modes: {modes} (each appears {max_count} times)")',
  hint: 'There can be multiple modes if frequencies tie.'
},
{
  id: 'py_io_50',
  topicId: 'py_input_output',
  question: 'Take a string and implement a simple Caesar cipher (shift each letter by 3).',
  mathSolution: 'Shift each letter by fixed amount, wrap around alphabet.',
  codeSolution: 'text = input("Enter a string: ")\nshift = 3\nresult = []\n\nfor char in text:\n    if char.isalpha():\n        ascii_offset = 65 if char.isupper() else 97\n        shifted = (ord(char) - ascii_offset + shift) % 26 + ascii_offset\n        result.append(chr(shifted))\n    else:\n        result.append(char)\n\nencrypted = "".join(result)\nprint(f"Original: {text}")\nprint(f"Encrypted (shift {shift}): {encrypted}")',
  hint: 'Use modulo 26 to wrap around alphabet.'
},
//Date&Time
 {
    id: "py_datetime_1",
    topicId: "py_datetime",
    question: "Import the datetime module and print the current date and time.",
    mathSolution: "Use datetime.datetime.now() to get current date and time.",
    codeSolution: "import datetime\nnow = datetime.datetime.now()\nprint(now)",
    hint: "Use `datetime.datetime.now()`",
  },
  {
    id: "py_datetime_2",
    topicId: "py_datetime",
    question:
      "Import only the date class from datetime module and get today's date.",
    mathSolution: "Use date.today() to get current date.",
    codeSolution:
      "from datetime import date\ntoday = date.today()\nprint(today)",
    hint: "Use `from datetime import date`",
  },
  {
    id: "py_datetime_3",
    topicId: "py_datetime",
    question: "Create a date object for 25th December 2024.",
    mathSolution: "Use date(year, month, day) constructor.",
    codeSolution:
      "from datetime import date\nchristmas = date(2024, 12, 25)\nprint(christmas)  # 2024-12-25",
    hint: "Use `date(year, month, day)`",
  },
  {
    id: "py_datetime_4",
    topicId: "py_datetime",
    question: "Create a datetime object for 15th August 2024 at 10:30 AM.",
    mathSolution: "Use datetime(year, month, day, hour, minute, second).",
    codeSolution:
      "from datetime import datetime\nindependence = datetime(2024, 8, 15, 10, 30, 0)\nprint(independence)",
    hint: "Use `datetime(year, month, day, hour, minute, second)`",
  },
  {
    id: "py_datetime_5",
    topicId: "py_datetime",
    question:
      "Get the year, month, and day from today's date as separate variables.",
    mathSolution: "Use .year, .month, .day attributes of date object.",
    codeSolution:
      'from datetime import date\ntoday = date.today()\nyear = today.year\nmonth = today.month\nday = today.day\nprint(f"Year: {year}, Month: {month}, Day: {day}")',
    hint: "Access using `.year`, `.month`, `.day`",
  },
  {
    id: "py_datetime_6",
    topicId: "py_datetime",
    question:
      "Get the hour, minute, second, and microsecond from current time.",
    mathSolution: "Use .hour, .minute, .second, .microsecond attributes.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nprint(f"Hour: {now.hour}, Minute: {now.minute}, Second: {now.second}, Microsecond: {now.microsecond}")',
    hint: "Access time components with `.hour`, `.minute`, `.second`",
  },
  {
    id: "py_datetime_7",
    topicId: "py_datetime",
    question: "Create a time object for 2:30:45 PM (14:30:45).",
    mathSolution: "Use time(hour, minute, second) constructor.",
    codeSolution:
      "from datetime import time\nmy_time = time(14, 30, 45)\nprint(my_time)  # 14:30:45",
    hint: "Use `time(hour, minute, second)`",
  },
  {
    id: "py_datetime_8",
    topicId: "py_datetime",
    question:
      "Get the current date and time and print it in YYYY-MM-DD HH:MM:SS format.",
    mathSolution:
      "datetime.now() returns datetime object with this format by default.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nprint(now.strftime("%Y-%m-%d %H:%M:%S"))',
    hint: "Use `strftime()` with format codes",
  },
  {
    id: "py_datetime_9",
    topicId: "py_datetime",
    question: 'Format date as "DD/MM/YYYY" using strftime().',
    mathSolution: "Use %d for day, %m for month, %Y for year.",
    codeSolution:
      'from datetime import date\ntoday = date.today()\nformatted = today.strftime("%d/%m/%Y")\nprint(formatted)',
    hint: 'Use `"%d/%m/%Y"` format string',
  },
  {
    id: "py_datetime_10",
    topicId: "py_datetime",
    question:
      'Format datetime as "Month Name DD, YYYY" (e.g., "January 15, 2024").',
    mathSolution: "Use %B for full month name, %d for day, %Y for year.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nformatted = now.strftime("%B %d, %Y")\nprint(formatted)',
    hint: 'Use `"%B %d, %Y"`',
  },
  {
    id: "py_datetime_11",
    topicId: "py_datetime",
    question: 'Format time as "HH:MM AM/PM" (12-hour format).',
    mathSolution: "Use %I for 12-hour hour, %M for minute, %p for AM/PM.",
    codeSolution:
      'from datetime import datetime\nnow = datetime.now()\nformatted = now.strftime("%I:%M %p")\nprint(formatted)',
    hint: 'Use `"%I:%M %p"`',
  },
  {
    id: "py_datetime_12",
    topicId: "py_datetime",
    question:
      'Parse the string "2024-03-15" into a date object using strptime().',
    mathSolution: "Use strptime(string, format) with %Y-%m-%d format.",
    codeSolution:
      'from datetime import datetime\ndate_str = "2024-03-15"\nparsed_date = datetime.strptime(date_str, "%Y-%m-%d")\nprint(parsed_date)',
    hint: "Use `datetime.strptime(string, format)`",
  },
  {
    id: "py_datetime_13",
    topicId: "py_datetime",
    question: 'Parse "15/03/2024 14:30:00" into datetime object.',
    mathSolution: 'Use format "%d/%m/%Y %H:%M:%S".',
    codeSolution:
      'from datetime import datetime\ndate_str = "15/03/2024 14:30:00"\nparsed = datetime.strptime(date_str, "%d/%m/%Y %H:%M:%S")\nprint(parsed)',
    hint: 'Use `"%d/%m/%Y %H:%M:%S"`',
  },
  {
    id: "py_datetime_14",
    topicId: "py_datetime",
    question: 'Parse "March 15, 2024" into a date object.',
    mathSolution: "Use %B for full month name, %d for day, %Y for year.",
    codeSolution:
      'from datetime import datetime\ndate_str = "March 15, 2024"\nparsed = datetime.strptime(date_str, "%B %d, %Y")\nprint(parsed)',
    hint: 'Use `"%B %d, %Y"` format',
  },
  {
    id: "py_datetime_15",
    topicId: "py_datetime",
    question:
      "Calculate the number of days between two dates: 2024-12-25 and 2024-01-01.",
    mathSolution: "Subtract two date objects to get timedelta, then use .days.",
    codeSolution:
      "from datetime import date\ndate1 = date(2024, 12, 25)\ndate2 = date(2024, 1, 1)\ndifference = date1 - date2\nprint(difference.days)  # 359",
    hint: "Subtract dates and use `.days`",
  },
  {
    id: "py_datetime_16",
    topicId: "py_datetime",
    question: "Add 30 days to today's date and print the new date.",
    mathSolution: "Use timedelta(days=30) and add to today.",
    codeSolution:
      "from datetime import date, timedelta\ntoday = date.today()\nfuture_date = today + timedelta(days=30)\nprint(future_date)",
    hint: "Use `timedelta(days=N)`",
  },
  {
    id: "py_datetime_17",
    topicId: "py_datetime",
    question: "Subtract 7 days from current date.",
    mathSolution: "Use timedelta with negative days or subtract.",
    codeSolution:
      "from datetime import date, timedelta\ntoday = date.today()\npast_date = today - timedelta(days=7)\nprint(past_date)",
    hint: "Use `timedelta(days=7)` with subtraction",
  },
  {
    id: "py_datetime_18",
    topicId: "py_datetime",
    question: "Add 2 hours and 30 minutes to current time.",
    mathSolution: "Use timedelta(hours=2, minutes=30).",
    codeSolution:
      "from datetime import datetime, timedelta\nnow = datetime.now()\nfuture = now + timedelta(hours=2, minutes=30)\nprint(future)",
    hint: "Use `timedelta(hours=H, minutes=M)`",
  },
  {
    id: "py_datetime_19",
    topicId: "py_datetime",
    question:
      'Find the day of the week for your birthday this year (e.g., "Monday").',
    mathSolution: 'Use strftime("%A") for full weekday name.',
    codeSolution:
      'from datetime import date\nbirthday = date(2024, 5, 15)\nweekday = birthday.strftime("%A")\nprint(weekday)',
    hint: 'Use `strftime("%A")`',
  },
  {
    id: "py_datetime_20",
    topicId: "py_datetime",
    question: "Check if year 2024 is a leap year using calendar module.",
    mathSolution: "Use calendar.isleap(year) function.",
    codeSolution:
      "import calendar\nprint(calendar.isleap(2024))  # True\nprint(calendar.isleap(2023))  # False",
    hint: "Use `calendar.isleap(year)`",
  },
  {
    id: "py_datetime_21",
    topicId: "py_datetime",
    question: "Get the number of days in February 2024 using calendar module.",
    mathSolution:
      "Use calendar.monthrange(year, month) returns (start_weekday, num_days).",
    codeSolution:
      "import calendar\n_, num_days = calendar.monthrange(2024, 2)\nprint(num_days)  # 29",
    hint: "Use `calendar.monthrange(year, month)[1]`",
  },
  {
    id: "py_datetime_22",
    topicId: "py_datetime",
    question:
      "Get the current timestamp (seconds since epoch) using time module.",
    mathSolution: "Use time.time() function.",
    codeSolution: "import time\ntimestamp = time.time()\nprint(timestamp)",
    hint: "Use `time.time()`",
  },
  {
    id: "py_datetime_23",
    topicId: "py_datetime",
    question: "Convert timestamp 1700000000 to datetime object.",
    mathSolution: "Use datetime.fromtimestamp(timestamp).",
    codeSolution:
      "from datetime import datetime\ntimestamp = 1700000000\ndt = datetime.fromtimestamp(timestamp)\nprint(dt)",
    hint: "Use `datetime.fromtimestamp(timestamp)`",
  },
  {
    id: "py_datetime_24",
    topicId: "py_datetime",
    question: "Convert datetime object to timestamp.",
    mathSolution: "Use datetime.timestamp() method.",
    codeSolution:
      "from datetime import datetime\nnow = datetime.now()\ntimestamp = now.timestamp()\nprint(timestamp)",
    hint: "Use `.timestamp()` method",
  },
  {
    id: "py_datetime_25",
    topicId: "py_datetime",
    question: "Display the current date in ISO format (YYYY-MM-DD).",
    mathSolution: "Use date.today().isoformat().",
    codeSolution: "from datetime import date\nprint(date.today().isoformat())",
    hint: "Use `.isoformat()` method",
  },
  {
    id: "py_datetime_26",
    topicId: "py_datetime",
    question: "Compare two dates: check if date1 is before date2.",
    mathSolution: "Use comparison operators (<, >, ==) with date objects.",
    codeSolution:
      "from datetime import date\ndate1 = date(2024, 6, 1)\ndate2 = date(2024, 12, 25)\nprint(date1 < date2)  # True",
    hint: "Dates support direct comparison operators",
  },
  {
    id: "py_datetime_27",
    topicId: "py_datetime",
    question: "Find the difference between two datetimes in seconds.",
    mathSolution: "Subtract datetimes, use total_seconds() on timedelta.",
    codeSolution:
      "from datetime import datetime\ndt1 = datetime(2024, 1, 1, 0, 0, 0)\ndt2 = datetime(2024, 1, 2, 0, 0, 0)\ndiff_seconds = (dt2 - dt1).total_seconds()\nprint(diff_seconds)  # 86400.0",
    hint: "Use `.total_seconds()` method",
  },
  {
    id: "py_datetime_28",
    topicId: "py_datetime",
    question: "Get the current UTC time (timezone-aware).",
    mathSolution: "Use datetime.now(timezone.utc) with timezone module.",
    codeSolution:
      "from datetime import datetime, timezone\nutc_now = datetime.now(timezone.utc)\nprint(utc_now)",
    hint: "Use `datetime.now(timezone.utc)`",
  },
  {
    id: "py_datetime_29",
    topicId: "py_datetime",
    question: "Create a timezone-aware datetime for Eastern Time (US).",
    mathSolution: 'Use zoneinfo.ZoneInfo("America/New_York") (Python 3.9+).',
    codeSolution:
      'from datetime import datetime\nfrom zoneinfo import ZoneInfo\nny_time = datetime.now(ZoneInfo("America/New_York"))\nprint(ny_time)',
    hint: 'Use `ZoneInfo("timezone_name")`',
  },
  {
    id: "py_datetime_30",
    topicId: "py_datetime",
    question: "Convert local time to UTC time.",
    mathSolution: "Make aware then use .astimezone(timezone.utc).",
    codeSolution:
      'from datetime import datetime, timezone\nfrom zoneinfo import ZoneInfo\nlocal = datetime.now(ZoneInfo("Asia/Kolkata"))\nutc = local.astimezone(timezone.utc)\nprint(f"Local: {local}")\nprint(f"UTC: {utc}")',
    hint: "Use `.astimezone(timezone.utc)`",
  },
  {
    id: "py_datetime_31",
    topicId: "py_datetime",
    question: "Find the next Monday from today's date.",
    mathSolution: "Calculate days to add based on weekday (Monday=0).",
    codeSolution:
      "from datetime import date, timedelta\ntoday = date.today()\ndays_ahead = 0 - today.weekday()\nif days_ahead <= 0:\n    days_ahead += 7\nnext_monday = today + timedelta(days=days_ahead)\nprint(next_monday)",
    hint: "Use `.weekday()` (Monday=0) to calculate offset",
  },
  {
    id: "py_datetime_32",
    topicId: "py_datetime",
    question: "Get the first and last day of current month.",
    mathSolution:
      "First day is date.today().replace(day=1). Last day uses monthrange.",
    codeSolution:
      'from datetime import date\nimport calendar\ntoday = date.today()\nfirst_day = today.replace(day=1)\n_, last_day_num = calendar.monthrange(today.year, today.month)\nlast_day = today.replace(day=last_day_num)\nprint(f"First: {first_day}, Last: {last_day}")',
    hint: "Use `.replace(day=1)` and `calendar.monthrange()`",
  },
  {
    id: "py_datetime_33",
    topicId: "py_datetime",
    question: "Calculate age in years from birthdate (1990-05-15).",
    mathSolution:
      "Subtract birth year from current year, adjust if birthday not occurred.",
    codeSolution:
      "from datetime import date\nbirth = date(1990, 5, 15)\ntoday = date.today()\nage = today.year - birth.year\nif (today.month, today.day) < (birth.month, birth.day):\n    age -= 1\nprint(age)",
    hint: "Adjust age if birthday hasn't occurred this year",
  },
  {
    id: "py_datetime_34",
    topicId: "py_datetime",
    question: "Get all dates between two given dates (inclusive).",
    mathSolution: "Use loop with timedelta to iterate dates.",
    codeSolution:
      "from datetime import date, timedelta\nstart = date(2024, 1, 1)\nend = date(2024, 1, 10)\ndates = []\ncurrent = start\nwhile current <= end:\n    dates.append(current)\n    current += timedelta(days=1)\nprint(dates)",
    hint: "Use while loop and `timedelta(days=1)`",
  },
  {
    id: "py_datetime_35",
    topicId: "py_datetime",
    question: "Check if a given date is a weekend (Saturday or Sunday).",
    mathSolution: "Use weekday() where Saturday=5, Sunday=6.",
    codeSolution:
      "from datetime import date\ndef is_weekend(d):\n    return d.weekday() >= 5\n\ndate1 = date(2024, 3, 16)  # Saturday\nprint(is_weekend(date1))  # True",
    hint: "`weekday()` returns 5 for Sat, 6 for Sun",
  },
  {
    id: "py_datetime_36",
    topicId: "py_datetime",
    question: 'Sleep for 3 seconds using time module and print "Done".',
    mathSolution: "Use time.sleep(seconds).",
    codeSolution:
      'import time\nprint("Waiting...")\ntime.sleep(3)\nprint("Done")',
    hint: "Use `time.sleep(seconds)`",
  },
  {
    id: "py_datetime_37",
    topicId: "py_datetime",
    question:
      "Measure the execution time of a function that sleeps for 1 second.",
    mathSolution: "Use time.time() before and after function.",
    codeSolution:
      'import time\nstart = time.time()\ntime.sleep(1)\nend = time.time()\nprint(f"Execution time: {end - start:.2f} seconds")',
    hint: "Record timestamps before and after",
  },
  {
    id: "py_datetime_38",
    topicId: "py_datetime",
    question: 'Parse ISO format string "2024-03-15T14:30:00" to datetime.',
    mathSolution: "Use datetime.fromisoformat() (Python 3.7+).",
    codeSolution:
      'from datetime import datetime\niso_str = "2024-03-15T14:30:00"\ndt = datetime.fromisoformat(iso_str)\nprint(dt)',
    hint: "Use `datetime.fromisoformat(string)`",
  },
  {
    id: "py_datetime_39",
    topicId: "py_datetime",
    question: "Get the current time in milliseconds since epoch.",
    mathSolution: "Multiply timestamp by 1000.",
    codeSolution:
      "import time\nmilliseconds = int(time.time() * 1000)\nprint(milliseconds)",
    hint: "`time.time()` returns seconds, multiply by 1000",
  },
  {
    id: "py_datetime_40",
    topicId: "py_datetime",
    question: "Find the day of the year (1-366) for today's date.",
    mathSolution: "Use datetime.timetuple().tm_yday.",
    codeSolution:
      "from datetime import date\ntoday = date.today()\nday_of_year = today.timetuple().tm_yday\nprint(day_of_year)",
    hint: "Use `.timetuple().tm_yday`",
  },
  //Operator
  {
  id: 'py_ops_1',
  topicId: 'py_operators',
  question: 'Write a function `add(a, b)` that returns the sum of two numbers using the `+` operator.',
  mathSolution: 'The + operator performs arithmetic addition.',
  codeSolution: 'def add(a, b):\n    return a + b\n\nprint(add(5, 3))  # 8',
  hint: 'Simply use `a + b`.'
},
{
  id: 'py_ops_2',
  topicId: 'py_operators',
  question: 'Write a function `remainder(a, b)` that returns the remainder when a is divided by b using the `%` operator.',
  mathSolution: 'The % operator returns the remainder of division.',
  codeSolution: 'def remainder(a, b):\n    return a % b\n\nprint(remainder(10, 3))  # 1',
  hint: 'Use `a % b`.'
},
{
  id: 'py_ops_3',
  topicId: 'py_operators',
  question: 'Write a function `is_even(n)` that returns True if n is even, using the `%` operator.',
  mathSolution: 'If n % 2 == 0, the number is even.',
  codeSolution: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))  # True\nprint(is_even(5))  # False',
  hint: 'Check remainder when divided by 2.'
},
{
  id: 'py_ops_4',
  topicId: 'py_operators',
  question: 'Swap two variables `a` and `b` without using a temporary variable. Use tuple unpacking (which involves assignment).',
  mathSolution: 'Tuple assignment swaps values.',
  codeSolution: 'a, b = 5, 10\na, b = b, a\nprint(a, b)  # 10 5',
  hint: 'Use `a, b = b, a`.'
},
{
  id: 'py_ops_5',
  topicId: 'py_operators',
  question: 'Write a function `floor_divide(a, b)` that returns the integer division result using the `//` operator.',
  mathSolution: '// performs floor division (quotient without remainder).',
  codeSolution: 'def floor_divide(a, b):\n    return a // b\n\nprint(floor_divide(10, 3))  # 3',
  hint: 'Use `a // b`.'
},
{
  id: 'py_ops_6',
  topicId: 'py_operators',
  question: 'Write a function `power(base, exp)` that returns base raised to exp using the `**` operator.',
  mathSolution: '** is the exponentiation operator.',
  codeSolution: 'def power(base, exp):\n    return base ** exp\n\nprint(power(2, 3))  # 8',
  hint: 'Use `base ** exp`.'
},
{
  id: 'py_ops_7',
  topicId: 'py_operators',
  question: 'Compare two strings lexicographically using comparison operators. Write a function `is_less(s1, s2)` that returns True if s1 < s2.',
  mathSolution: 'Strings are compared lexicographically using ASCII values.',
  codeSolution: 'def is_less(s1, s2):\n    return s1 < s2\n\nprint(is_less("apple", "banana"))  # True\nprint(is_less("zebra", "ant"))  # False',
  hint: 'Use `<` directly.'
},
{
  id: 'py_ops_8',
  topicId: 'py_operators',
  question: 'Write a function `in_range(x, low, high)` that returns True if x is between low and high (inclusive) using logical `and`.',
  mathSolution: 'Combine comparisons with `and`.',
  codeSolution: 'def in_range(x, low, high):\n    return low <= x <= high\n\nprint(in_range(5, 1, 10))  # True\nprint(in_range(15, 1, 10))  # False',
  hint: 'Python allows chaining: `low <= x <= high`.'
},
{
  id: 'py_ops_9',
  topicId: 'py_operators',
  question: 'Write a function `toggle(flag)` that toggles a boolean value using the `not` operator.',
  mathSolution: '`not` inverts a boolean.',
  codeSolution: 'def toggle(flag):\n    return not flag\n\nprint(toggle(True))  # False\nprint(toggle(False))  # True',
  hint: 'Return `not flag`.'
},
{
  id: 'py_ops_10',
  topicId: 'py_operators',
  question: 'Use bitwise AND (`&`) to check if a number is odd. Write a function `is_odd_bitwise(n)`.',
  mathSolution: 'n & 1 returns 1 if last bit is set (odd).',
  codeSolution: 'def is_odd_bitwise(n):\n    return (n & 1) == 1\n\nprint(is_odd_bitwise(7))  # True\nprint(is_odd_bitwise(8))  # False',
  hint: 'Check the least significant bit.'
},
{
  id: 'py_ops_11',
  topicId: 'py_operators',
  question: 'Use left shift (`<<`) to multiply a number by 8. Write a function `multiply_by_8(n)`.',
  mathSolution: 'Left shift by 3 bits multiplies by 2³ = 8.',
  codeSolution: 'def multiply_by_8(n):\n    return n << 3\n\nprint(multiply_by_8(5))  # 40 (5 * 8)',
  hint: '`n << 3` is equivalent to n * 8.'
},
{
  id: 'py_ops_12',
  topicId: 'py_operators',
  question: 'Write a function `in_list(item, lst)` that returns True if item is in the list using the `in` operator.',
  mathSolution: '`in` tests membership.',
  codeSolution: 'def in_list(item, lst):\n    return item in lst\n\nprint(in_list(3, [1, 2, 3, 4]))  # True\nprint(in_list(5, [1, 2, 3, 4]))  # False',
  hint: 'Use `item in lst`.'
},
{
  id: 'py_ops_13',
  topicId: 'py_operators',
  question: 'Write a function `is_same_object(a, b)` that returns True if a and b are the same object using the `is` operator.',
  mathSolution: '`is` checks identity (same memory address).',
  codeSolution: 'def is_same_object(a, b):\n    return a is b\n\nx = [1, 2]\ny = x\nz = [1, 2]\nprint(is_same_object(x, y))  # True\nprint(is_same_object(x, z))  # False',
  hint: 'Use `a is b`.'
},
{
  id: 'py_ops_14',
  topicId: 'py_operators',
  question: 'Demonstrate short-circuit evaluation of `and`. Write a function `safe_divide(a, b)` that returns a/b if b != 0, else None, using `and` to avoid division by zero.',
  mathSolution: '`b and a/b` works because if b is 0 (falsy), it returns 0; otherwise it returns a/b.',
  codeSolution: 'def safe_divide(a, b):\n    return a / b if b != 0 else None\n\nprint(safe_divide(10, 2))  # 5.0\nprint(safe_divide(10, 0))  # None',
  hint: 'Use conditional expression: return a/b only when b is not zero.'
},
{
  id: 'py_ops_15',
  topicId: 'py_operators',
  question: 'Write a function `max_of_two(a, b)` that returns the larger of two numbers using the ternary operator (conditional expression).',
  mathSolution: 'Use `a if a > b else b`.',
  codeSolution: 'def max_of_two(a, b):\n    return a if a > b else b\n\nprint(max_of_two(10, 20))  # 20\nprint(max_of_two(30, 15))  # 30',
  hint: 'Ternary: `x if condition else y`.'
},
{
  id: 'py_ops_16',
  topicId: 'py_operators',
  question: 'Use the walrus operator `:=` to read lines from a file until empty. Write code that reads and prints lines using a while loop.',
  mathSolution: 'The assignment expression allows assignment in the loop condition.',
  codeSolution: '# with open("file.txt") as f:\n#     while (line := f.readline()):\n#         print(line, end="")\nprint("Walrus operator example: while (line := f.readline()):")',
  hint: '`while (line := f.readline()):`'
},
{
  id: 'py_ops_17',
  topicId: 'py_operators',
  question: 'Given the expression `2 + 3 * 4`, what is the result and why? Write code to compute it.',
  mathSolution: 'Multiplication has higher precedence, so 3*4=12, then +2 = 14.',
  codeSolution: 'result = 2 + 3 * 4\nprint(result)  # 14\nprint("Because * has higher precedence than +")',
  hint: 'Operator precedence: `*` before `+`.'
},
{
  id: 'py_ops_18',
  topicId: 'py_operators',
  question: 'Use the `+=` assignment operator to accumulate a sum. Write a function `sum_list(lst)` that returns the sum of all elements.',
  mathSolution: '`+=` adds and assigns.',
  codeSolution: 'def sum_list(lst):\n    total = 0\n    for x in lst:\n        total += x\n    return total\n\nprint(sum_list([1, 2, 3, 4, 5]))  # 15',
  hint: '`total += x` is equivalent to `total = total + x`.'
},
{
  id: 'py_ops_19',
  topicId: 'py_operators',
  question: 'Use bitwise OR (`|`) to set a flag. Write a function `set_flag(flags, mask)` that returns flags with the bits in mask set to 1.',
  mathSolution: '`flags | mask` sets bits where mask has 1.',
  codeSolution: 'def set_flag(flags, mask):\n    return flags | mask\n\nprint(set_flag(0b0000, 0b0101))  # 5 (0b0101)',
  hint: 'Use `flags | mask`.'
},
{
  id: 'py_ops_20',
  topicId: 'py_operators',
  question: 'Swap two integers using XOR bitwise operator without a temporary variable.',
  mathSolution: 'XOR swap: a ^= b; b ^= a; a ^= b.',
  codeSolution: 'a = 5\nb = 10\na = a ^ b\nb = a ^ b\na = a ^ b\nprint(a, b)  # 10 5',
  hint: 'Perform three XOR operations.'
},
{
  id: 'py_ops_21',
  topicId: 'py_operators',
  question: 'Write a function `is_power_of_two(n)` that returns True if n is a power of two, using bitwise `&`.',
  mathSolution: 'A power of two has exactly one bit set; n & (n-1) == 0 for n>0.',
  codeSolution: 'def is_power_of_two(n):\n    return n > 0 and (n & (n-1)) == 0\n\nprint(is_power_of_two(8))  # True\nprint(is_power_of_two(10))  # False',
  hint: 'Check `n & (n-1) == 0`.'
},
{
  id: 'py_ops_22',
  topicId: 'py_operators',
  question: 'Write a simple calculator function `calculate(a, b, op)` that uses operators `+`, `-`, `*`, `/` based on op string.',
  mathSolution: 'Use if‑elif or a dictionary mapping operators to functions.',
  codeSolution: 'def calculate(a, b, op):\n    if op == "+": return a + b\n    if op == "-": return a - b\n    if op == "*": return a * b\n    if op == "/": return a / b\n    return None\n\nprint(calculate(10, 5, "+"))  # 15\nprint(calculate(10, 5, "*"))  # 50',
  hint: 'Chain conditionals or use a dict.'
},
{
  id: 'py_ops_23',
  topicId: 'py_operators',
  question: 'Use modulo `%` to extract the last digit of an integer. Write a function `last_digit(n)` that returns the units digit.',
  mathSolution: 'n % 10 gives the last digit in base 10.',
  codeSolution: 'def last_digit(n):\n    return abs(n) % 10\n\nprint(last_digit(123))  # 3\nprint(last_digit(-456))  # 6',
  hint: 'Take absolute value to handle negatives.'
},
{
  id: 'py_ops_24',
  topicId: 'py_operators',
  question: 'Use floor division `//` to remove the last digit of an integer. Write a function `remove_last_digit(n)` that returns n without its last digit.',
  mathSolution: 'n // 10 discards the last digit.',
  codeSolution: 'def remove_last_digit(n):\n    return n // 10\n\nprint(remove_last_digit(123))  # 12\nprint(remove_last_digit(4567))  # 456',
  hint: 'Use `// 10`.'
},
{
  id: 'py_ops_25',
  topicId: 'py_operators',
  question: 'Convert seconds to hours, minutes, and seconds using `//` and `%`. Write a function `convert_seconds(sec)` that returns a tuple (hours, minutes, seconds).',
  mathSolution: 'hours = sec // 3600, remainder = sec % 3600, minutes = remainder // 60, seconds = remainder % 60.',
  codeSolution: 'def convert_seconds(sec):\n    hours = sec // 3600\n    remainder = sec % 3600\n    minutes = remainder // 60\n    seconds = remainder % 60\n    return (hours, minutes, seconds)\n\nprint(convert_seconds(3665))  # (1, 1, 5)',
  hint: 'Use floor division and modulo.'
},
{
  id: 'py_ops_26',
  topicId: 'py_operators',
  question: 'Write a function `is_leap_year(year)` that returns True if year is a leap year using logical operators.',
  mathSolution: 'Leap year if divisible by 4 but not by 100, unless divisible by 400.',
  codeSolution: 'def is_leap_year(year):\n    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)\n\nprint(is_leap_year(2024))  # True\nprint(is_leap_year(1900))  # False\nprint(is_leap_year(2000))  # True',
  hint: 'Combine conditions with `and`/`or`.'
},
{
  id: 'py_ops_27',
  topicId: 'py_operators',
  question: 'Check if a substring exists in a string using `in`. Write a function `contains_substring(s, sub)` that returns True if sub is in s.',
  mathSolution: '`sub in s` tests membership.',
  codeSolution: 'def contains_substring(s, sub):\n    return sub in s\n\nprint(contains_substring("Hello World", "World"))  # True\nprint(contains_substring("Hello World", "Python"))  # False',
  hint: 'Use `sub in s`.'
},
{
  id: 'py_ops_28',
  topicId: 'py_operators',
  question: 'Check if a variable is `None` using the `is` operator. Write a function `is_none(x)` that returns True if x is None.',
  mathSolution: '`is` compares identity; `None` is a singleton.',
  codeSolution: 'def is_none(x):\n    return x is None\n\nprint(is_none(None))  # True\nprint(is_none(0))  # False\nprint(is_none(""))  # False',
  hint: 'Use `x is None`.'
},
{
  id: 'py_ops_29',
  topicId: 'py_operators',
  question: 'Use `not` to check if a list is empty. Write a function `is_empty(lst)` that returns True if list has no elements.',
  mathSolution: 'Empty list is falsy; `not lst` returns True.',
  codeSolution: 'def is_empty(lst):\n    return not lst\n\nprint(is_empty([]))  # True\nprint(is_empty([1, 2, 3]))  # False',
  hint: '`not lst` works because empty list is False.'
},
{
  id: 'py_ops_30',
  topicId: 'py_operators',
  question: 'Use `and` and `or` to provide a default value. Write a function `get_first_non_none(lst)` that returns the first non‑None element, or None if all are None.',
  mathSolution: 'Use a loop, or with `or` short‑circuit: `a or b or c` returns first truthy.',
  codeSolution: 'def get_first_non_none(lst):\n    for x in lst:\n        if x is not None:\n            return x\n    return None\n\nprint(get_first_non_none([None, None, 5, None]))  # 5\nprint(get_first_non_none([None, None, None]))  # None',
  hint: 'Iterate and check.'
},
{
  id: 'py_ops_31',
  topicId: 'py_operators',
  question: 'Use bitwise XOR (`^`) to find the element that appears odd number of times in a list (all others appear even). Write a function `find_odd_occurrence(lst)`.',
  mathSolution: 'XOR of all elements cancels out pairs, leaving the odd one.',
  codeSolution: 'def find_odd_occurrence(lst):\n    result = 0\n    for num in lst:\n        result ^= num\n    return result\n\nprint(find_odd_occurrence([1, 2, 3, 2, 1, 3, 5]))  # 5',
  hint: 'XOR is commutative and associative; x^x=0.'
},
{
  id: 'py_ops_32',
  topicId: 'py_operators',
  question: 'Use the bitwise NOT `~` to get the negative of a number in two’s complement (i.e., `~x + 1` = -x). Write a function `negate(x)` that returns -x using ~.',
  mathSolution: 'In two’s complement, `-x = ~x + 1`.',
  codeSolution: 'def negate(x):\n    return ~x + 1\n\nprint(negate(5))  # -5\nprint(negate(-5))  # 5',
  hint: '`~x + 1` equals -x.'
},
{
  id: 'py_ops_33',
  topicId: 'py_operators',
  question: 'Use assignment operators `-=`, `*=`, `/=` to modify a variable. Write a function `apply_operations(x)` that subtracts 2, multiplies by 3, and divides by 4, returning the result.',
  mathSolution: 'Chain assignment operations.',
  codeSolution: 'def apply_operations(x):\n    x -= 2\n    x *= 3\n    x /= 4\n    return x\n\nprint(apply_operations(10))  # (10-2)=8, 8*3=24, 24/4=6.0',
  hint: 'Use `x -= 2`, etc.'
},
{
  id: 'py_ops_34',
  topicId: 'py_operators',
  question: 'Use the `in` operator to check if a key exists in a dictionary. Write a function `key_exists(d, key)` that returns True if key is in d.',
  mathSolution: '`key in d` tests dictionary membership.',
  codeSolution: 'def key_exists(d, key):\n    return key in d\n\nprint(key_exists({"a": 1, "b": 2}, "a"))  # True\nprint(key_exists({"a": 1, "b": 2}, "c"))  # False',
  hint: 'Use `key in d`.'
},
{
  id: 'py_ops_35',
  topicId: 'py_operators',
  question: 'Use the `is not` operator to check if a variable is not None. Write a function `is_not_none(x)`.',
  mathSolution: '`x is not None` returns True if x is not None.',
  codeSolution: 'def is_not_none(x):\n    return x is not None\n\nprint(is_not_none(10))  # True\nprint(is_not_none(None))  # False',
  hint: 'Use `x is not None`.'
},
{
  id: 'py_ops_36',
  topicId: 'py_operators',
  question: 'Demonstrate operator precedence with parentheses. Write an expression that computes `(2+3)*4` without using parentheses, then with parentheses, and explain the difference.',
  mathSolution: 'Without parentheses: `2+3*4` = 14 (because * first). With parentheses: `(2+3)*4` = 20.',
  codeSolution: 'without_paren = 2 + 3 * 4\nwith_paren = (2 + 3) * 4\nprint(without_paren, with_paren)  # 14 20\nprint("Without parentheses: multiplication first")\nprint("With parentheses: addition first")',
  hint: 'Parentheses override default precedence.'
},
{
  id: 'py_ops_37',
  topicId: 'py_operators',
  question: 'Use floor division `//` and modulo `%` to compute the quotient and remainder. Write a function `quotient_remainder(a, b)` that returns both.',
  mathSolution: 'quotient = a // b, remainder = a % b.',
  codeSolution: 'def quotient_remainder(a, b):\n    return a // b, a % b\n\nq, r = quotient_remainder(17, 5)\nprint(f"Quotient: {q}, Remainder: {r}")  # Quotient: 3, Remainder: 2',
  hint: 'Return a tuple.'
},
{
  id: 'py_ops_38',
  topicId: 'py_operators',
  question: 'Use the `**` operator to compute compound interest. Write a function `compound_interest(principal, rate, years)` that returns final amount (A = P*(1+r)^t).',
  mathSolution: 'A = principal * (1 + rate) ** years.',
  codeSolution: 'def compound_interest(principal, rate, years):\n    return principal * (1 + rate) ** years\n\nprint(compound_interest(1000, 0.05, 3))  # 1157.625',
  hint: 'Use `**` for exponent.'
},
{
  id: 'py_ops_39',
  topicId: 'py_operators',
  question: 'Check if a number is divisible by another using `%`. Write a function `is_divisible(a, b)` that returns True if a is divisible by b.',
  mathSolution: 'a % b == 0 means divisible.',
  codeSolution: 'def is_divisible(a, b):\n    return a % b == 0\n\nprint(is_divisible(10, 2))  # True\nprint(is_divisible(10, 3))  # False',
  hint: 'Check remainder zero.'
},
{
  id: 'py_ops_40',
  topicId: 'py_operators',
  question: 'Use the `<<` and `>>` operators to pack two 4‑bit numbers into one byte. Write functions `pack(a, b)` (both 0‑15) and `unpack(byte)`.',
  mathSolution: 'pack: byte = (a << 4) | b; unpack: a = byte >> 4, b = byte & 0x0F.',
  codeSolution: 'def pack(a, b):\n    return (a << 4) | b\n\ndef unpack(byte):\n    return (byte >> 4, byte & 0x0F)\n\nb = pack(12, 5)\nprint(b)  # 197 (0b11000101)\na, b_val = unpack(b)\nprint(f"a={a}, b={b_val}")  # a=12, b=5',
  hint: 'Shift and mask.'
},
{
  id: 'py_ops_41',
  topicId: 'py_operators',
  question: 'Use modulo `%` for circular indexing. Write a function `circular_access(lst, i)` that returns lst[i % len(lst)] to handle negative or large indices.',
  mathSolution: 'Index modulo length wraps around.',
  codeSolution: 'def circular_access(lst, i):\n    return lst[i % len(lst)]\n\nlst = ["a", "b", "c", "d"]\nprint(circular_access(lst, 5))  # "b" (index 1)\nprint(circular_access(lst, -1))  # "d" (index 3)',
  hint: 'Use `i % len(lst)` as index.'
},
{
  id: 'py_ops_42',
  topicId: 'py_operators',
  question: 'Use floor division `//` for pagination. Write a function `page_number(item_index, items_per_page)` that returns which page the item falls on (0‑based page).',
  mathSolution: 'page = item_index // items_per_page.',
  codeSolution: 'def page_number(item_index, items_per_page):\n    return item_index // items_per_page\n\nprint(page_number(15, 10))  # 1 (second page, 0-based)\nprint(page_number(25, 10))  # 2 (third page)',
  hint: 'Integer division gives page number.'
},
{
  id: 'py_ops_43',
  topicId: 'py_operators',
  question: 'Use the ternary operator to return the absolute value of a number. Write a function `abs_value(x)`.',
  mathSolution: '`x if x >= 0 else -x`.',
  codeSolution: 'def abs_value(x):\n    return x if x >= 0 else -x\n\nprint(abs_value(5))  # 5\nprint(abs_value(-7))  # 7',
  hint: 'Conditional expression.'
},
{
  id: 'py_ops_44',
  topicId: 'py_operators',
  question: 'Use the `not in` operator to check if an item is not in a list. Write a function `not_in_list(item, lst)`.',
  mathSolution: '`item not in lst` returns True if absent.',
  codeSolution: 'def not_in_list(item, lst):\n    return item not in lst\n\nprint(not_in_list(5, [1, 2, 3]))  # True\nprint(not_in_list(2, [1, 2, 3]))  # False',
  hint: 'Use `not in`.'
},
);