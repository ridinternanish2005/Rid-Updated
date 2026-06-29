QuizData.questions.push(
    //ListComprehensive ,RegularExpression ,Recursion ,Dsa
{
  id: 'py_listcomp_1',
  topicId: 'py_list_comprehension',
  question: 'Create a list of squares of numbers from 1 to 10 using list comprehension.',
  mathSolution: 'Use [x**2 for x in range(1, 11)] to generate squares.',
  codeSolution: 'squares = [x**2 for x in range(1, 11)]\nprint(squares)  # Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]',
  hint: 'List comprehension syntax: [expression for item in iterable]'
},
{
  id: 'py_listcomp_2',
  topicId: 'py_list_comprehension',
  question: 'Create a list of even numbers from 1 to 20 using list comprehension.',
  mathSolution: 'Add if condition to filter numbers divisible by 2.',
  codeSolution: 'evens = [x for x in range(1, 21) if x % 2 == 0]\nprint(evens)  # Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]',
  hint: 'Use if clause for filtering: [x for x in range if condition]'
},
{
  id: 'py_listcomp_3',
  topicId: 'py_list_comprehension',
  question: 'Convert all strings in a list to uppercase using list comprehension.',
  mathSolution: 'Apply upper() method to each string in the list.',
  codeSolution: 'fruits = ["apple", "banana", "cherry"]\nupper_fruits = [fruit.upper() for fruit in fruits]\nprint(upper_fruits)  # Output: ["APPLE", "BANANA", "CHERRY"]',
  hint: 'Expression can be any valid Python expression.'
},
{
  id: 'py_listcomp_4',
  topicId: 'py_list_comprehension',
  question: 'Create a list of lengths of each word in a sentence.',
  mathSolution: 'Split sentence and use len() function.',
  codeSolution: 'sentence = "The quick brown fox jumps"\nword_lengths = [len(word) for word in sentence.split()]\nprint(word_lengths)  # Output: [3, 5, 5, 3, 5]',
  hint: 'split() divides sentence into words.'
},
{
  id: 'py_listcomp_5',
  topicId: 'py_list_comprehension',
  question: 'Generate a list of tuples (number, square) for numbers 1-5.',
  mathSolution: 'Create tuple (x, x**2) for each x.',
  codeSolution: 'pairs = [(x, x**2) for x in range(1, 6)]\nprint(pairs)  # Output: [(1,1), (2,4), (3,9), (4,16), (5,25)]',
  hint: 'Expression can be a tuple literal.'
},
{
  id: 'py_listcomp_6',
  topicId: 'py_list_comprehension',
  question: 'Flatten a 2D list (matrix) into a 1D list.',
  mathSolution: 'Use nested loops in list comprehension.',
  codeSolution: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [num for row in matrix for num in row]\nprint(flattened)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]',
  hint: 'Order: outer loop first, then inner loop.'
},
{
  id: 'py_listcomp_7',
  topicId: 'py_list_comprehension',
  question: 'Get all vowels from a string using list comprehension.',
  mathSolution: 'Check if character is in vowel string.',
  codeSolution: 'text = "hello world"\nvowels = [char for char in text if char in "aeiou"]\nprint(vowels)  # Output: ["e", "o", "o"]',
  hint: 'Use membership operator "in" to check vowels.'
},
{
  id: 'py_listcomp_8',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers divisible by both 3 and 5 from 1 to 50.',
  mathSolution: 'Use and operator in condition.',
  codeSolution: 'divisible = [x for x in range(1, 51) if x % 3 == 0 and x % 5 == 0]\nprint(divisible)  # Output: [15, 30, 45]',
  hint: 'Combine conditions with logical operators.'
},
{
  id: 'py_listcomp_9',
  topicId: 'py_list_comprehension',
  question: 'Replace negative numbers with 0 in a list.',
  mathSolution: 'Use conditional expression (ternary operator).',
  codeSolution: 'numbers = [1, -2, 3, -4, 5, -6]\npositive_only = [x if x > 0 else 0 for x in numbers]\nprint(positive_only)  # Output: [1, 0, 3, 0, 5, 0]',
  hint: 'Ternary: value_if_true if condition else value_if_false'
},
{
  id: 'py_listcomp_10',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all possible pairs from two lists.',
  mathSolution: 'Use nested loops in list comprehension.',
  codeSolution: 'list1 = [1, 2, 3]\nlist2 = ["a", "b"]\npairs = [(x, y) for x in list1 for y in list2]\nprint(pairs)  # Output: [(1,"a"), (1,"b"), (2,"a"), (2,"b"), (3,"a"), (3,"b")]',
  hint: 'Cartesian product using nested comprehension.'
},
{
  id: 'py_listcomp_11',
  topicId: 'py_list_comprehension',
  question: 'Extract all numbers from a mixed list of strings and numbers.',
  mathSolution: 'Check type of each element using isinstance().',
  codeSolution: 'mixed = [1, "hello", 2, "world", 3, 4, "python"]\nnumbers = [x for x in mixed if isinstance(x, (int, float))]\nprint(numbers)  # Output: [1, 2, 3, 4]',
  hint: 'isinstance(x, (int, float)) checks if x is number.'
},
{
  id: 'py_listcomp_12',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the first letters of each word in a sentence.',
  mathSolution: 'Index into each word with [0].',
  codeSolution: 'sentence = "Python list comprehension is powerful"\nfirst_letters = [word[0] for word in sentence.split()]\nprint(first_letters)  # Output: ["P", "l", "c", "i", "p"]',
  hint: 'word[0] gets first character of each word.'
},
{
  id: 'py_listcomp_13',
  topicId: 'py_list_comprehension',
  question: 'Generate a list of factorials for numbers 1-5.',
  mathSolution: 'Use math.factorial or calculate manually.',
  codeSolution: 'import math\nfactorials = [math.factorial(x) for x in range(1, 6)]\nprint(factorials)  # Output: [1, 2, 6, 24, 120]',
  hint: 'math.factorial(n) returns n!'
},
{
  id: 'py_listcomp_14',
  topicId: 'py_list_comprehension',
  question: 'Create a list of strings where each string is repeated n times.',
  mathSolution: 'Use multiplication operator on strings.',
  codeSolution: 'words = ["hello", "world"]\nrepeated = [word * 3 for word in words]\nprint(repeated)  # Output: ["hellohellohello", "worldworldworld"]',
  hint: 'String * n repeats the string n times.'
},
{
  id: 'py_listcomp_15',
  topicId: 'py_list_comprehension',
  question: 'Get all prime numbers up to 50 using list comprehension with helper function.',
  mathSolution: 'Use is_prime function in condition.',
  codeSolution: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            return False\n    return True\n\nprimes = [x for x in range(2, 51) if is_prime(x)]\nprint(primes)  # Output: [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]',
  hint: 'Helper functions can be used in conditions.'
},
{
  id: 'py_listcomp_16',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the sum of corresponding elements from two lists.',
  mathSolution: 'Use zip to pair elements, then sum each pair.',
  codeSolution: 'a = [1, 2, 3]\nb = [4, 5, 6]\nsums = [x + y for x, y in zip(a, b)]\nprint(sums)  # Output: [5, 7, 9]',
  hint: 'zip() combines lists element-wise.'
},
{
  id: 'py_listcomp_17',
  topicId: 'py_list_comprehension',
  question: 'Extract all email addresses (strings containing @) from a list.',
  mathSolution: 'Use in operator to check for @ symbol.',
  codeSolution: 'contacts = ["john@email.com", "jane.doe", "bob@work.com", "charlie"]\nemails = [contact for contact in contacts if "@" in contact]\nprint(emails)  # Output: ["john@email.com", "bob@work.com"]',
  hint: '"@" in string checks if string contains @.'
},
{
  id: 'py_listcomp_18',
  topicId: 'py_list_comprehension',
  question: 'Create a list of (number, parity) tuples for numbers 1-5.',
  mathSolution: 'Use conditional expression to determine parity.',
  codeSolution: 'parity = [(x, "even" if x % 2 == 0 else "odd") for x in range(1, 6)]\nprint(parity)  # Output: [(1,"odd"), (2,"even"), (3,"odd"), (4,"even"), (5,"odd")]',
  hint: 'Expression can be a tuple with conditional.'
},
{
  id: 'py_listcomp_19',
  topicId: 'py_list_comprehension',
  question: 'Flatten a list of lists of different lengths.',
  mathSolution: 'Nested comprehension handles variable lengths.',
  codeSolution: 'nested = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]\nflat = [num for sublist in nested for num in sublist]\nprint(flat)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]',
  hint: 'Works for any nested list regardless of sublist lengths.'
},
{
  id: 'py_listcomp_20',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all factors of numbers from 1 to 10.',
  mathSolution: 'Find factors for each number using nested comprehension.',
  codeSolution: 'def get_factors(n):\n    return [i for i in range(1, n+1) if n % i == 0]\n\nfactors = [get_factors(x) for x in range(1, 11)]\nprint(factors)  # List of factors for 1-10',
  hint: 'Use list comprehension inside list comprehension.'
},
{
  id: 'py_listcomp_21',
  topicId: 'py_list_comprehension',
  question: 'Convert a list of Celsius temperatures to Fahrenheit.',
  mathSolution: 'Apply conversion formula F = C * 9/5 + 32.',
  codeSolution: 'celsius = [0, 10, 20, 30, 40]\nfahrenheit = [(c * 9/5) + 32 for c in celsius]\nprint(fahrenheit)  # Output: [32.0, 50.0, 68.0, 86.0, 104.0]',
  hint: 'Formula: (c * 9/5) + 32'
},
{
  id: 'py_listcomp_22',
  topicId: 'py_list_comprehension',
  question: 'Get all palindromic numbers between 10 and 200.',
  mathSolution: 'Convert to string and check reverse equality.',
  codeSolution: 'palindromes = [x for x in range(10, 201) if str(x) == str(x)[::-1]]\nprint(palindromes)  # Output: [11,22,33,44,55,66,77,88,99,101,111,121,131,141,151,161,171,181,191]',
  hint: 'str(x)[::-1] reverses the string.'
},
{
  id: 'py_listcomp_23',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the first 10 Fibonacci numbers.',
  mathSolution: 'Use Fibonacci sequence generation.',
  codeSolution: 'fib = [0, 1]\n[fib.append(fib[-1] + fib[-2]) for _ in range(8)]  # Not recommended - side effects\n# Better approach:\ndef fib_list(n):\n    result = [0, 1]\n    for i in range(2, n):\n        result.append(result[-1] + result[-2])\n    return result[:n]\n\nprint(fib_list(10))  # Output: [0,1,1,2,3,5,8,13,21,34]',
  hint: 'List comprehension with side effects is generally avoided.'
},
{
  id: 'py_listcomp_24',
  topicId: 'py_list_comprehension',
  question: 'Extract all words longer than 5 characters from a sentence.',
  mathSolution: 'Split sentence and filter by length.',
  codeSolution: 'sentence = "Python list comprehension is very useful for data processing"\nlong_words = [word for word in sentence.split() if len(word) > 5]\nprint(long_words)  # Output: ["Python", "comprehension", "useful", "processing"]',
  hint: 'len(word) > 5 checks word length.'
},
{
  id: 'py_listcomp_25',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the ASCII values of characters in a string.',
  mathSolution: 'Use ord() function to get ASCII value.',
  codeSolution: 'text = "hello"\nascii_values = [ord(char) for char in text]\nprint(ascii_values)  # Output: [104, 101, 108, 108, 111]',
  hint: 'ord() returns Unicode code point.'
},
{
  id: 'py_listcomp_26',
  topicId: 'py_list_comprehension',
  question: 'Remove all vowels from a string using list comprehension.',
  mathSolution: 'Keep characters that are not vowels.',
  codeSolution: 'text = "hello world"\nvowels = "aeiou"\nno_vowels = "".join([char for char in text if char.lower() not in vowels])\nprint(no_vowels)  # Output: "hll wrld"',
  hint: 'Use join() to convert list back to string.'
},
{
  id: 'py_listcomp_27',
  topicId: 'py_list_comprehension',
  question: 'Create a list of common elements between two lists.',
  mathSolution: 'Use condition to check membership in other list.',
  codeSolution: 'list1 = [1, 2, 3, 4, 5]\nlist2 = [3, 4, 5, 6, 7]\ncommon = [x for x in list1 if x in list2]\nprint(common)  # Output: [3, 4, 5]',
  hint: 'Set intersection is more efficient for large lists.'
},
{
  id: 'py_listcomp_28',
  topicId: 'py_list_comprehension',
  question: 'Generate a multiplication table (1-5) as a 2D list.',
  mathSolution: 'Nested comprehension for rows and columns.',
  codeSolution: 'table = [[i * j for j in range(1, 6)] for i in range(1, 6)]\nfor row in table:\n    print(row)  # Output: [1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15], [4,8,12,16,20], [5,10,15,20,25]',
  hint: 'Outer loop for rows, inner for columns.'
},
{
  id: 'py_listcomp_29',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers with their sign (positive/negative/zero).',
  mathSolution: 'Use nested conditionals to determine sign.',
  codeSolution: 'numbers = [-3, -1, 0, 2, 5, -8]\nsigns = ["positive" if x > 0 else "negative" if x < 0 else "zero" for x in numbers]\nprint(signs)  # Output: ["negative", "negative", "zero", "positive", "positive", "negative"]',
  hint: 'Chain ternary operators for multiple conditions.'
},
{
  id: 'py_listcomp_30',
  topicId: 'py_list_comprehension',
  question: 'Extract all keys from a list of dictionaries.',
  mathSolution: 'Get keys from first dictionary, assuming all have same keys.',
  codeSolution: 'dict_list = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]\nkeys = list(dict_list[0].keys()) if dict_list else []\nprint(keys)  # Output: ["name", "age"]',
  hint: 'For variable keys, use set union of all keys.'
},
{
  id: 'py_listcomp_31',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all possible subsets of a set (power set) using list comprehension.',
  mathSolution: 'Use binary representation to generate subsets.',
  codeSolution: 'items = ["a", "b", "c"]\npower_set = [[items[i] for i in range(len(items)) if mask & (1 << i)] for mask in range(1 << len(items))]\nprint(power_set)  # All subsets: [], ["a"], ["b"], ["a","b"], ["c"], ["a","c"], ["b","c"], ["a","b","c"]',
  hint: 'Each mask from 0 to 2^n-1 represents a subset.'
},
{
  id: 'py_listcomp_32',
  topicId: 'py_list_comprehension',
  question: 'Transpose a matrix (2D list) using list comprehension.',
  mathSolution: 'Use nested comprehension with row and column swapped.',
  codeSolution: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ntranspose = [[row[i] for row in matrix] for i in range(len(matrix[0]))]\nprint(transpose)  # Output: [[1,4,7], [2,5,8], [3,6,9]]',
  hint: 'transpose[i][j] = original[j][i]'
},
{
  id: 'py_listcomp_33',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all perfect squares up to 100.',
  mathSolution: 'Generate squares until they exceed 100.',
  codeSolution: 'squares = [x**2 for x in range(1, 11) if x**2 <= 100]\nprint(squares)  # Output: [1,4,9,16,25,36,49,64,81,100]',
  hint: 'Range up to 10 since 11² = 121 > 100.'
},
{
  id: 'py_listcomp_34',
  topicId: 'py_list_comprehension',
  question: 'Extract all numeric values from a string (digits only).',
  mathSolution: 'Check if character is digit using isdigit().',
  codeSolution: 'text = "abc123def456ghi789"\ndigits = [char for char in text if char.isdigit()]\nprint(digits)  # Output: ["1","2","3","4","5","6","7","8","9"]',
  hint: 'isdigit() returns True for digit characters.'
},
{
  id: 'py_listcomp_35',
  topicId: 'py_list_comprehension',
  question: 'Create a list of running totals (cumulative sum) of a list.',
  mathSolution: 'Use sum of slice or accumulate in comprehension (requires external variable).',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\ncumulative = [sum(numbers[:i+1]) for i in range(len(numbers))]\nprint(cumulative)  # Output: [1, 3, 6, 10, 15]',
  hint: 'sum(numbers[:i+1]) sums up to current index.'
},
{
  id: 'py_listcomp_36',
  topicId: 'py_list_comprehension',
  question: 'Generate all possible passwords from given character set of length n.',
  mathSolution: 'Use product from itertools in list comprehension.',
  codeSolution: 'import itertools\nchars = ["a", "b", "c"]\npasswords = ["".join(p) for p in itertools.product(chars, repeat=2)]\nprint(passwords)  # Output: ["aa","ab","ac","ba","bb","bc","ca","cb","cc"]',
  hint: 'itertools.product generates Cartesian product.'
},
{
  id: 'py_listcomp_37',
  topicId: 'py_list_comprehension',
  question: 'Extract all elements at even indices from a list.',
  mathSolution: 'Use enumerate to get index and element.',
  codeSolution: 'items = ["a", "b", "c", "d", "e", "f"]\neven_indices = [item for i, item in enumerate(items) if i % 2 == 0]\nprint(even_indices)  # Output: ["a", "c", "e"]',
  hint: 'enumerate() gives (index, value) pairs.'
},
{
  id: 'py_listcomp_38',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the differences between consecutive elements.',
  mathSolution: 'Zip list with itself offset by 1.',
  codeSolution: 'numbers = [10, 15, 12, 18, 20]\ndiffs = [numbers[i+1] - numbers[i] for i in range(len(numbers)-1)]\nprint(diffs)  # Output: [5, -3, 6, 2]',
  hint: 'Alternative: [y-x for x,y in zip(numbers, numbers[1:])]'
},
{
  id: 'py_listcomp_39',
  topicId: 'py_list_comprehension',
  question: 'Get all words that start with a vowel from a sentence.',
  mathSolution: 'Check first character against vowels.',
  codeSolution: 'sentence = "apple banana orange grape umbrella"\nvowel_start = [word for word in sentence.split() if word[0].lower() in "aeiou"]\nprint(vowel_start)  # Output: ["apple", "orange", "umbrella"]',
  hint: 'word[0] gets first character.'
},
{
  id: 'py_listcomp_40',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers with their squares only if square is even.',
  mathSolution: 'Add condition on the result of expression.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5, 6]\neven_squares = [(x, x**2) for x in numbers if (x**2) % 2 == 0]\nprint(even_squares)  # Output: [(2,4), (4,16), (6,36)]',
  hint: 'Condition can be on the expression result.'
},
//Regular
{
    Id: "py_regex_1",
    topicId: "py_regex",
    question: "Write a regex pattern to match a simple email address (username@domain.com).",
    mathSolution: "Email pattern: username@domain.extension",
    codeSolution: "import re\n\nemails = ['user@example.com', 'john.doe@company.co.uk', 'invalid@email', 'noatsign.com']\n\npattern = r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$'\n\nfor email in emails:\n    if re.match(pattern, email):\n        print(f'Valid: {email}')\n    else:\n        print(f'Invalid: {email}')",
    hint: "Use \\w for word characters, \\. for dot, + for one or more"
  },
  {
    Id: "py_regex_2",
    topicId: "py_regex",
    question: "Write a regex to validate a phone number in format (XXX) XXX-XXXX or XXX-XXX-XXXX.",
    mathSolution: "Phone pattern: optional area code in parentheses, then number",
    codeSolution: "import re\n\nphones = ['(123) 456-7890', '987-654-3210', '1234567890', '(123)456-7890']\n\npattern = r'^(\\(\\d{3}\\)|\\d{3})[- ]?\\d{3}[- ]?\\d{4}$'\n\nfor phone in phones:\n    if re.match(pattern, phone):\n        print(f'Valid: {phone}')\n    else:\n        print(f'Invalid: {phone}')",
    hint: "Use \\( for literal (, \\d for digit, {3} for exactly 3"
  },
  {
    Id: "py_regex_3",
    topicId: "py_regex",
    question: "Write a regex to extract all URLs from a text.",
    mathSolution: "URL pattern: protocol://domain/path?query#fragment",
    codeSolution: "import re\n\ntext = \"\"\"Visit https://www.example.com for more info.\nCheck out http://sub.domain.co.uk/page?q=python#section.\nAlso ftp://files.example.org and invalid URL: www.test.\"\"\"\n\npattern = r'https?://[\\w\\.-]+(?:/[\\w\\.-]*)*(?:\\?[\\w\\.-]+=[\\w\\.-]*(?:&[\\w\\.-]+=[\\w\\.-]*)*)?(?:#[\\w\\.-]*)?'\n\nurls = re.findall(pattern, text)\nprint('Found URLs:')\nfor url in urls:\n    print(f'  {url}')",
    hint: "Use ? for optional parts, * for zero or more, non-capturing groups (?:...)"
  },
  {
    Id: "py_regex_4",
    topicId: "py_regex",
    question: "Write a regex to validate a strong password (min 8 chars, at least one uppercase, one lowercase, one digit, one special char).",
    mathSolution: "Password must meet multiple criteria using lookaheads",
    codeSolution: "import re\n\npasswords = ['Pass123!', 'weak', 'StrongP@ss1', 'NoSpecial1', 'SHORT!1']\n\npattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'\n\nfor pwd in passwords:\n    if re.match(pattern, pwd):\n        print(f'Strong: {pwd}')\n    else:\n        print(f'Weak: {pwd}')",
    hint: "Use (?=.*[a-z]) for lookahead assertions"
  },
  {
    Id: "py_regex_5",
    topicId: "py_regex",
    question: "Write a regex to match dates in format YYYY-MM-DD, DD/MM/YYYY, and MM-DD-YYYY.",
    mathSolution: "Date pattern with different separators",
    codeSolution: "import re\n\ndates = ['2024-01-15', '15/01/2024', '01-15-2024', '2024/01/15', '15-01-2024']\n\npattern = r'^(\\d{4}[-/]\\d{2}[-/]\\d{2}|\\d{2}[-/]\\d{2}[-/]\\d{4})$'\n\nfor date in dates:\n    if re.match(pattern, date):\n        print(f'Valid date format: {date}')\n    else:\n        print(f'Invalid format: {date}')",
    hint: "Use | for alternation between different formats"
  },
  {
    Id: "py_regex_6",
    topicId: "py_regex",
    question: "Write a regex to extract all hashtags from a tweet.",
    mathSolution: "Hashtags start with # followed by letters/numbers/underscore",
    codeSolution: "import re\n\ntweet = \"Loving #Python and #Regex! Also #100DaysOfCode #python3 🐍\"\n\npattern = r'#\\w+'\n\nhashtags = re.findall(pattern, tweet)\nprint('Hashtags found:')\nfor tag in hashtags:\n    print(f'  {tag}')",
    hint: "Use # followed by \\w+ for word characters"
  },
  {
    Id: "py_regex_7",
    topicId: "py_regex",
    question: "Write a regex to validate an IP address (IPv4).",
    mathSolution: "IPv4: four numbers 0-255 separated by dots",
    codeSolution: "import re\n\nips = ['192.168.1.1', '256.100.50.25', '0.0.0.0', '1.2.3.4.5', 'abc.def.ghi.jkl']\n\npattern = r'^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'\n\nfor ip in ips:\n    if re.match(pattern, ip):\n        print(f'Valid IP: {ip}')\n    else:\n        print(f'Invalid IP: {ip}')",
    hint: "Use 25[0-5] for 250-255, 2[0-4][0-9] for 200-249, [01]?[0-9][0-9]? for 0-199"
  },
  {
    Id: "py_regex_8",
    topicId: "py_regex",
    question: "Write a regex to extract all numbers (integers and decimals) from a string.",
    mathSolution: "Numbers can have optional decimal point and sign",
    codeSolution: "import re\n\ntext = \"The price is $45.99, quantity: 10, total: -459.50, code: 007, temp: -5°C\"\n\npattern = r'-?\\d+\\.?\\d*'\n\nnumbers = re.findall(pattern, text)\nprint('Numbers found:')\nfor num in numbers:\n    print(f'  {num}')",
    hint: "Use -? for optional negative sign, \\d+ for digits, \\.? for optional dot"
  },
  {
    Id: "py_regex_9",
    topicId: "py_regex",
    question: "Write a regex to match HTML tags and extract their content.",
    mathSolution: "HTML tags: <tag>content</tag> or self-closing <tag/>",
    codeSolution: "import re\n\nhtml = '<div class=\"container\">Hello <b>World</b>!</div><img src=\"image.jpg\"/>'\n\n# Find all tags\npattern_tags = r'<[^>]+>'\ntags = re.findall(pattern_tags, html)\nprint('Tags found:')\nfor tag in tags:\n    print(f'  {tag}')\n\n# Extract content between tags\npattern_content = r'<([^>]+)>([^<]+)</\\1>'\nmatches = re.findall(pattern_content, html)\nprint('\\nTag-content pairs:')\nfor tag, content in matches:\n    print(f'  <{tag}>: {content}')",
    hint: "Use backreference \\1 to match closing tag"
  },
  {
    Id: "py_regex_10",
    topicId: "py_regex",
    question: "Write a regex to validate a credit card number (16 digits, may have spaces or hyphens).",
    mathSolution: "Credit card: 4 groups of 4 digits separated by space or hyphen",
    codeSolution: "import re\n\ncards = ['1234 5678 9012 3456', '1234-5678-9012-3456', '1234567890123456', '1234 5678 9012 345']\n\npattern = r'^(\\d{4}[ -]?){3}\\d{4}$'\n\nfor card in cards:\n    if re.match(pattern, card):\n        print(f'Valid: {card}')\n    else:\n        print(f'Invalid: {card}')",
    hint: "Use {3} for three groups of four digits with optional separator"
  },
  {
    Id: "py_regex_11",
    topicId: "py_regex",
    question: "Write a regex to extract all mentions (@username) from a text.",
    mathSolution: "Mentions start with @ followed by letters, numbers, underscores",
    codeSolution: "import re\n\ntext = \"Hey @john, check out @jane_doe's post! Also @user123 and @invalid-username.\"\n\npattern = r'@[\\w_]+'\n\nmentions = re.findall(pattern, text)\nprint('Mentions found:')\nfor mention in mentions:\n    print(f'  {mention}')",
    hint: "Use @ followed by word characters and underscore"
  },
  {
    Id: "py_regex_12",
    topicId: "py_regex",
    question: "Write a regex to validate a time in 12-hour format (HH:MM AM/PM).",
    mathSolution: "12-hour time: 1-12, then :MM, then AM or PM",
    codeSolution: "import re\n\ntimes = ['12:30 PM', '01:15 AM', '13:45 PM', '12:60 AM', '9:05 PM']\n\npattern = r'^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$'\n\nfor t in times:\n    if re.match(pattern, t):\n        print(f'Valid: {t}')\n    else:\n        print(f'Invalid: {t}')",
    hint: "Hours: 01-12, minutes: 00-59, AM/PM case sensitive"
  },
  {
    Id: "py_regex_13",
    topicId: "py_regex",
    question: "Write a regex to validate a time in 24-hour format (HH:MM).",
    mathSolution: "24-hour time: 00-23 hours, 00-59 minutes",
    codeSolution: "import re\n\ntimes = ['23:59', '00:00', '24:00', '12:30', '25:15', '09:60']\n\npattern = r'^([01][0-9]|2[0-3]):[0-5][0-9]$'\n\nfor t in times:\n    if re.match(pattern, t):\n        print(f'Valid: {t}')\n    else:\n        print(f'Invalid: {t}')",
    hint: "Hours: 00-23 using | for alternation"
  },
  {
    Id: "py_regex_14",
    topicId: "py_regex",
    question: "Write a regex to extract all sentences from a paragraph.",
    mathSolution: "Sentences end with ., !, or ? followed by space or end",
    codeSolution: "import re\n\nparagraph = \"Hello world! How are you today? I'm fine. This is a test...\"\n\npattern = r'[^.!?]+[.!?]'\n\nsentences = re.findall(pattern, paragraph)\nprint('Sentences:')\nfor i, sentence in enumerate(sentences, 1):\n    print(f'{i}. {sentence.strip()}')",
    hint: "Match anything not ending punctuation, then punctuation"
  },
  {
    Id: "py_regex_15",
    topicId: "py_regex",
    question: "Write a regex to validate a ZIP code (US: 5 digits or 5+4).",
    mathSolution: "ZIP: 5 digits, optionally hyphen and 4 more digits",
    codeSolution: "import re\n\nzips = ['12345', '12345-6789', '1234', '123456', '12345-678']\n\npattern = r'^\\d{5}(-\\d{4})?$'\n\nfor z in zips:\n    if re.match(pattern, z):\n        print(f'Valid ZIP: {z}')\n    else:\n        print(f'Invalid ZIP: {z}')",
    hint: "Use ? for optional -xxxx part"
  },
  {
    Id: "py_regex_16",
    topicId: "py_regex",
    question: "Write a regex to extract all words starting with a capital letter.",
    mathSolution: "Words beginning with uppercase letter",
    codeSolution: "import re\n\ntext = \"John went to Paris and London. He visited The Eiffel Tower.\"\n\npattern = r'\\b[A-Z][a-z]*\\b'\n\nwords = re.findall(pattern, text)\nprint('Capitalized words:')\nfor word in words:\n    print(f'  {word}')",
    hint: "Use \\b for word boundary, [A-Z] for first letter"
  },
  {
    Id: "py_regex_17",
    topicId: "py_regex",
    question: "Write a regex to validate a hexadecimal color code (#RGB or #RRGGBB).",
    mathSolution: "Hex color: # followed by 3 or 6 hex digits",
    codeSolution: "import re\n\ncolors = ['#FFF', '#123456', '#ABC', '#GHI', '123456', '#12345']\n\npattern = r'^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$'\n\nfor color in colors:\n    if re.match(pattern, color):\n        print(f'Valid: {color}')\n    else:\n        print(f'Invalid: {color}')",
    hint: "Hex digits: A-F, a-f, 0-9, use | for 3 or 6 digits"
  },
  {
    Id: "py_regex_18",
    topicId: "py_regex",
    question: "Write a regex to extract all domain names from email addresses.",
    mathSolution: "Domain is after @ and before last dot",
    codeSolution: "import re\n\nemails = ['user@example.com', 'admin@company.co.uk', 'test@sub.domain.org']\n\npattern = r'@([\\w\\.-]+)'\n\nfor email in emails:\n    match = re.search(pattern, email)\n    if match:\n        print(f'{email} -> domain: {match.group(1)}')",
    hint: "Capture group after @"
  },
  {
    Id: "py_regex_19",
    topicId: "py_regex",
    question: "Write a regex to validate a username (letters, numbers, underscore, 3-16 chars).",
    mathSolution: "Username: alphanumeric and underscore, 3-16 characters",
    codeSolution: "import re\n\nusernames = ['john_123', 'ab', 'user@name', 'this_is_a_very_long_username', 'valid123']\n\npattern = r'^[a-zA-Z0-9_]{3,16}$'\n\nfor name in usernames:\n    if re.match(pattern, name):\n        print(f'Valid: {name}')\n    else:\n        print(f'Invalid: {name}')",
    hint: "Use {3,16} for length constraint"
  },
  {
    Id: "py_regex_20",
    topicId: "py_regex",
    question: "Write a regex to extract all currency amounts ($10.50, $5, $100.00).",
    mathSolution: "Currency: $ followed by digits, optional decimal",
    codeSolution: "import re\n\ntext = \"Total: $45.99, tax: $3.50, discount: $10, price: $100.00, invalid: $45.9\"\n\npattern = r'\\$\\d+\\.\\d{2}|\\$\\d+'\n\namounts = re.findall(pattern, text)\nprint('Currency amounts:')\nfor amount in amounts:\n    print(f'  {amount}')",
    hint: "Match $ followed by digits, then optional . and 2 digits"
  },
  {
    Id: "py_regex_21",
    topicId: "py_regex",
    question: "Write a regex to validate a MAC address (XX:XX:XX:XX:XX:XX).",
    mathSolution: "MAC: 6 groups of 2 hex digits separated by colon or hyphen",
    codeSolution: "import re\n\nmacs = ['00:1A:2B:3C:4D:5E', '00-1A-2B-3C-4D-5E', '00:1A:2B:3C:4D', 'GG:HH:II:JJ:KK:LL']\n\npattern = r'^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$'\n\nfor mac in macs:\n    if re.match(pattern, mac):\n        print(f'Valid MAC: {mac}')\n    else:\n        print(f'Invalid MAC: {mac}')",
    hint: "Use {2} for two hex digits, {5} for five groups with separator"
  },
  {
    Id: "py_regex_22",
    topicId: "py_regex",
    question: "Write a regex to extract all programming language mentions from a text.",
    mathSolution: "Common language names like Python, Java, JavaScript, etc.",
    codeSolution: "import re\n\ntext = \"I love Python and JavaScript, but Java is also good. C++ is fast.\"\n\nlanguages = ['Python', 'Java', 'JavaScript', 'C\\+\\+', 'Ruby', 'PHP', 'Swift']\npattern = r'\\b(' + '|'.join(languages) + r')\\b'\n\nmatches = re.findall(pattern, text)\nprint('Languages found:')\nfor lang in matches:\n    print(f'  {lang}')",
    hint: "Use \\b for word boundaries, join with | for alternation"
  },
  {
    Id: "py_regex_23",
    topicId: "py_regex",
    question: "Write a regex to validate a social security number (XXX-XX-XXXX).",
    mathSolution: "SSN: 3 digits, hyphen, 2 digits, hyphen, 4 digits",
    codeSolution: "import re\n\nssns = ['123-45-6789', '123456789', '123-45-678', '000-00-0000', '123-45-67890']\n\npattern = r'^\\d{3}-\\d{2}-\\d{4}$'\n\nfor ssn in ssns:\n    if re.match(pattern, ssn):\n        print(f'Valid SSN: {ssn}')\n    else:\n        print(f'Invalid SSN: {ssn}')",
    hint: "Simple pattern: three digits, hyphen, two digits, hyphen, four digits"
  },
  {
    Id: "py_regex_24",
    topicId: "py_regex",
    question: "Write a regex to extract all quoted strings (single or double quotes).",
    mathSolution: "Strings inside quotes, handling escaped quotes",
    codeSolution: "import re\n\ntext = 'She said \"Hello\", and he replied \'Hi there!\'. \"Escaped \\\"quote\\\"\"'\n\npattern = r'\"([^\"\\\\]*(\\\\.[^\"\\\\]*)*)\"|\\'([^\\'\\\\]*(\\\\.[^\\'\\\\]*)*)\\''\n\nquotes = re.findall(pattern, text)\nprint('Quoted strings:')\nfor match in quotes:\n    # Clean up the tuple result\n    quote = match[0] or match[2]\n    if quote:\n        print(f'  {quote}')",
    hint: "Use backreferences to handle escaped quotes"
  },
  {
    Id: "py_regex_25",
    topicId: "py_regex",
    question: "Write a regex to validate a license plate (2 letters, 2 digits, 2 letters).",
    mathSolution: "Format: LLDDLL where L is letter, D is digit",
    codeSolution: "import re\n\nplates = ['AB12CD', 'XY99ZT', 'A123BC', 'AB1CDE', '12ABCD']\n\npattern = r'^[A-Z]{2}\\d{2}[A-Z]{2}$'\n\nfor plate in plates:\n    if re.match(pattern, plate):\n        print(f'Valid: {plate}')\n    else:\n        print(f'Invalid: {plate}')",
    hint: "Use [A-Z] for letters, \\d for digits"
  },
  {
    Id: "py_regex_26",
    topicId: "py_regex",
    question: "Write a regex to extract all words that contain repeated letters.",
    mathSolution: "Words with at least one character repeated consecutively",
    codeSolution: "import re\n\ntext = \"hello world bookkeeper apple tree butter\"\n\npattern = r'\\b\\w*(\\w)\\1\\w*\\b'\n\nwords = re.findall(pattern, text)\nprint('Words with repeated letters:')\n# Findall returns capturing groups, need to find whole words\nmatches = re.finditer(pattern, text)\nfor match in matches:\n    print(f'  {match.group()}')",
    hint: "Use backreference \\1 to match repeated character"
  },
  {
    Id: "py_regex_27",
    topicId: "py_regex",
    question: "Write a regex to validate a password with no consecutive repeated characters.",
    mathSolution: "Password with no same character appearing twice in a row",
    codeSolution: "import re\n\npasswords = ['abc123', 'aabc123', 'pass123', 'abcc123', 'no_repeats']\n\npattern = r'^(?!.*(.)\\1).*$'\n\nfor pwd in passwords:\n    if re.match(pattern, pwd):\n        print(f'Valid (no repeats): {pwd}')\n    else:\n        print(f'Invalid (has repeats): {pwd}')",
    hint: "Use negative lookahead (?!.*(.)\\1) to check for repeats"
  },
  {
    Id: "py_regex_28",
    topicId: "py_regex",
    question: "Write a regex to extract all file extensions from filenames.",
    mathSolution: "Extension after last dot in filename",
    codeSolution: "import re\n\nfiles = ['document.txt', 'image.jpg', 'script.py', 'archive.tar.gz', 'no_extension', '.hidden']\n\npattern = r'\\.([^.]+)$'\n\nfor file in files:\n    match = re.search(pattern, file)\n    if match:\n        print(f'{file} -> extension: {match.group(1)}')\n    else:\n        print(f'{file} -> no extension')",
    hint: "Use [^.]+ for characters that are not dots"
  },
  {
    Id: "py_regex_29",
    topicId: "py_regex",
    question: "Write a regex to validate a complex password with at least 3 of 4 character types.",
    mathSolution: "Password must meet at least 3 of: uppercase, lowercase, digit, special",
    codeSolution: "import re\n\npasswords = ['Pass123', 'password', 'PASSWORD123', 'Pass!', 'P@ssw0rd']\n\ndef validate_password(pwd):\n    checks = [\n        bool(re.search(r'[A-Z]', pwd)),\n        bool(re.search(r'[a-z]', pwd)),\n        bool(re.search(r'\\d', pwd)),\n        bool(re.search(r'[!@#$%^&*(),.?\":{}|<>]', pwd))\n    ]\n    return sum(checks) >= 3 and len(pwd) >= 8\n\nfor pwd in passwords:\n    if validate_password(pwd):\n        print(f'Valid: {pwd}')\n    else:\n        print(f'Invalid: {pwd}')",
    hint: "Count how many character types are present"
  },
  {
    Id: "py_regex_30",
    topicId: "py_regex",
    question: "Write a regex to extract all HTML attributes and their values.",
    mathSolution: "Attributes in form name=\"value\" or name='value'",
    codeSolution: "import re\n\nhtml = '<div class=\"container\" id=\"main\" data-type=\"test\">'\n\npattern = r'(\\w+)=[\"\\']([^\"\\']*)[\"\\']'\n\nattributes = re.findall(pattern, html)\nprint('HTML attributes:')\nfor name, value in attributes:\n    print(f'  {name} = \"{value}\"')",
    hint: "Capture attribute name and value in groups"
  },
  {
    Id: "py_regex_31",
    topicId: "py_regex",
    question: "Write a regex to validate a binary number (only 0s and 1s).",
    mathSolution: "Binary number: only digits 0 and 1",
    codeSolution: "import re\n\nbinaries = ['101010', '1111', '10201', '0101', '1234']\n\npattern = r'^[01]+$'\n\nfor b in binaries:\n    if re.match(pattern, b):\n        print(f'Valid binary: {b}')\n    else:\n        print(f'Invalid binary: {b}')",
    hint: "Use [01] character class"
  },
  {
    Id: "py_regex_32",
    topicId: "py_regex",
    question: "Write a regex to extract all words that are palindromes.",
    mathSolution: "Palindromes read the same forwards and backwards",
    codeSolution: "import re\n\ntext = \"madam racecar hello level world noon\"\n\npattern = r'\\b(\\w+)\\b'\n\ndef is_palindrome(word):\n    return word == word[::-1]\n\nwords = re.findall(pattern, text)\nprint('Palindromes found:')\nfor word in words:\n    if is_palindrome(word) and len(word) > 1:\n        print(f'  {word}')",
    hint: "Use word[::-1] to reverse string"
  },
  {
    Id: "py_regex_33",
    topicId: "py_regex",
    question: "Write a regex to validate a UUID (8-4-4-4-12 hex digits).",
    mathSolution: "UUID: 8 hex, hyphen, 4 hex, hyphen, 4 hex, hyphen, 4 hex, hyphen, 12 hex",
    codeSolution: "import re\n\nuuids = ['123e4567-e89b-12d3-a456-426614174000', 'invalid-uuid', '123e4567-e89b-12d3-a456-42661417400']\n\npattern = r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'\n\nfor uuid in uuids:\n    if re.match(pattern, uuid, re.I):\n        print(f'Valid UUID: {uuid}')\n    else:\n        print(f'Invalid UUID: {uuid}')",
    hint: "Use re.I flag for case-insensitive matching"
  },
  {
    Id: "py_regex_34",
    topicId: "py_regex",
    question: "Write a regex to extract all numbers in scientific notation (e.g., 1.23e-4).",
    mathSolution: "Scientific: mantissa, e/E, optional sign, exponent",
    codeSolution: "import re\n\ntext = \"Values: 1.23e-4, 5.67E+10, 2.998e8, 6.022e23, invalid e5\"\n\npattern = r'-?\\d+\\.?\\d*[eE][+-]?\\d+'\n\nnumbers = re.findall(pattern, text)\nprint('Scientific notation numbers:')\nfor num in numbers:\n    print(f'  {num}')",
    hint: "Match optional sign, digits, optional dot, digits, e/E, optional sign, digits"
  },
  {
    Id: "py_regex_35",
    topicId: "py_regex",
    question: "Write a regex to validate a complex number format (a+bj or a-bj).",
    mathSolution: "Complex: real part, sign, imaginary part with j",
    codeSolution: "import re\n\ncomplex_nums = ['3+4j', '5-2j', '-1.5+2.5j', '2j', '3+j', '4+5i']\n\npattern = r'^-?\\d+\\.?\\d*[+-]\\d+\\.?\\d*j$|^-?\\d+\\.?\\d*j$'\n\nfor num in complex_nums:\n    if re.match(pattern, num):\n        print(f'Valid complex: {num}')\n    else:\n        print(f'Invalid complex: {num}')",
    hint: "Handle both a+bj form and just bj form"
  },
  {
    Id: "py_regex_36",
    topicId: "py_regex",
    question: "Write a regex to extract all function calls from Python code.",
    mathSolution: "Function calls: name followed by parentheses",
    codeSolution: "import re\n\ncode = \"\"\"\ndef hello():\n    print('Hello')\n    result = calculate(10, 20)\n    process_data(data, verbose=True)\n\"\"\"\n\npattern = r'([a-zA-Z_][a-zA-Z0-9_]*)\\('\n\nfunctions = re.findall(pattern, code)\nprint('Function calls found:')\nfor func in set(functions):  # Use set to remove duplicates\n    if func not in ['def']:  # Filter out def keyword\n        print(f'  {func}()')",
    hint: "Match identifier followed by ("
  },
  {
    Id: "py_regex_37",
    topicId: "py_regex",
    question: "Write a regex to validate a time duration (HH:MM:SS).",
    mathSolution: "Duration: hours 00-99, minutes 00-59, seconds 00-59",
    codeSolution: "import re\n\ndurations = ['12:30:45', '99:59:59', '24:60:00', '00:00:00', '100:30:30']\n\npattern = r'^\\d{2}:[0-5][0-9]:[0-5][0-9]$'\n\nfor d in durations:\n    if re.match(pattern, d):\n        print(f'Valid duration: {d}')\n    else:\n        print(f'Invalid duration: {d}')",
    hint: "Hours can be any two digits, minutes and seconds limited to 00-59"
  },
  {
    Id: "py_regex_38",
    topicId: "py_regex",
    question: "Write a regex to extract all email addresses from a text, handling multiple formats.",
    mathSolution: "Comprehensive email pattern handling common formats",
    codeSolution: "import re\n\ntext = \"Contact us at info@example.com, support@company.co.uk, or john.doe@sub.domain.org. Invalid: @missing.com\"\n\npattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'\n\nemails = re.findall(pattern, text)\nprint('Email addresses found:')\nfor email in emails:\n    print(f'  {email}')",
    hint: "Use character classes for allowed characters in username and domain"
  },
  {
    Id: "py_regex_39",
    topicId: "py_regex",
    question: "Write a regex to validate a phone number with country code (+1 123-456-7890).",
    mathSolution: "International phone: optional +country code, then number",
    codeSolution: "import re\n\nphones = ['+1 123-456-7890', '+44 20 7946 0958', '123-456-7890', '+1 (123) 456-7890']\n\npattern = r'^\\+?\\d{1,3}[-.\\s]?\\(?\\d{1,4}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$'\n\nfor phone in phones:\n    if re.match(pattern, phone):\n        print(f'Valid: {phone}')\n    else:\n        print(f'Invalid: {phone}')",
    hint: "Use ? for optional parts, character class for separators"
  },
  {
    Id: "py_regex_40",
    topicId: "py_regex",
    question: "Write a regex to extract all HTML comments from a document.",
    mathSolution: "HTML comments: <!-- comment -->",
    codeSolution: "import re\n\nhtml = \"\"\"\n<!-- Main content -->\n<div>Hello</div>\n<!-- TODO: Fix this -->\n<!-- Multi-line\ncomment -->\n\"\"\"\n\npattern = r'<!--(.*?)-->'\n\ncomments = re.findall(pattern, html, re.DOTALL)\nprint('HTML comments found:')\nfor comment in comments:\n    print(f'  {comment.strip()}')",
    hint: "Use non-greedy .*? to match minimal, re.DOTALL for multiline"
  },
  //recursion
  {
  id: 'py_rec_1',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the factorial of a non-negative integer n.',
  mathSolution: 'factorial(n) = n * factorial(n-1) for n>0, with factorial(0)=1.',
  codeSolution: 'def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)',
  hint: 'Base case: n == 0. Recursive case: n * factorial(n-1).'
},
{
  id: 'py_rec_2',
  topicId: 'py_recursion',
  question: 'Write a recursive function to return the nth Fibonacci number (F(0)=0, F(1)=1).',
  mathSolution: 'F(n) = F(n-1) + F(n-2) for n>1, with F(0)=0, F(1)=1.',
  codeSolution: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
  hint: 'Base cases: n=0 and n=1. Recursive: sum of two previous.'
},
{
  id: 'py_rec_3',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the sum of the first n natural numbers.',
  mathSolution: 'sum(n) = n + sum(n-1) for n>0, with sum(0)=0.',
  codeSolution: 'def sum_natural(n):\n    if n == 0:\n        return 0\n    return n + sum_natural(n-1)',
  hint: 'Add n to the sum of numbers from 1 to n-1.'
},
{
  id: 'py_rec_4',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute x raised to the power n (x^n) for non-negative integer n.',
  mathSolution: 'power(x, n) = x * power(x, n-1) for n>0, with power(x,0)=1.',
  codeSolution: 'def power(x, n):\n    if n == 0:\n        return 1\n    return x * power(x, n-1)',
  hint: 'Base: n==0 returns 1. Recursive: multiply x by x^(n-1).'
},
{
  id: 'py_rec_5',
  topicId: 'py_recursion',
  question: 'Write a recursive function to reverse a string.',
  mathSolution: 'Reverse of s is reverse(s[1:]) + s[0].',
  codeSolution: 'def reverse_string(s):\n    if len(s) <= 1:\n        return s\n    return reverse_string(s[1:]) + s[0]',
  hint: 'Take the first character and append it after reversing the rest.'
},
{
  id: 'py_rec_6',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if a string is a palindrome.',
  mathSolution: 'A string is palindrome if first and last characters match and the middle substring is palindrome.',
  codeSolution: 'def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s[1:-1])',
  hint: 'Compare first and last; if equal, recurse on the substring excluding them.'
},
{
  id: 'py_rec_7',
  topicId: 'py_recursion',
  question: 'Write a recursive function to count the number of digits in a positive integer.',
  mathSolution: 'count_digits(n) = 1 + count_digits(n//10) for n>=10, base case n<10 returns 1.',
  codeSolution: 'def count_digits(n):\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)',
  hint: 'Remove last digit with integer division, count it.'
},
{
  id: 'py_rec_8',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the sum of digits of a positive integer.',
  mathSolution: 'sum_digits(n) = n%10 + sum_digits(n//10), base case n==0 returns 0.',
  codeSolution: 'def sum_digits(n):\n    if n == 0:\n        return 0\n    return n % 10 + sum_digits(n // 10)',
  hint: 'Add last digit to sum of remaining digits.'
},
{
  id: 'py_rec_9',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the greatest common divisor (GCD) of two numbers using Euclid\'s algorithm.',
  mathSolution: 'gcd(a,b) = gcd(b, a%b) for b!=0, base case gcd(a,0)=a.',
  codeSolution: 'def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)',
  hint: 'If b is zero, return a. Otherwise recurse with (b, a mod b).'
},
{
  id: 'py_rec_10',
  topicId: 'py_recursion',
  question: 'Write a recursive function to solve the Tower of Hanoi puzzle. Print the moves to move n disks from source to destination using auxiliary peg.',
  mathSolution: 'To move n disks from A to C using B: move n-1 from A to B, then move largest from A to C, then move n-1 from B to C.',
  codeSolution: 'def tower_of_hanoi(n, source, target, auxiliary):\n    if n == 1:\n        print(f"Move disk 1 from {source} to {target}")\n        return\n    tower_of_hanoi(n-1, source, auxiliary, target)\n    print(f"Move disk {n} from {source} to {target}")\n    tower_of_hanoi(n-1, auxiliary, target, source)',
  hint: 'Move n-1 disks to auxiliary, then move the largest, then move n-1 from auxiliary to target.'
},
{
  id: 'py_rec_11',
  topicId: 'py_recursion',
  question: 'Write a recursive function to perform binary search on a sorted list. Return index of target or -1 if not found.',
  mathSolution: 'Check middle element; if target equals middle, return index; if target < middle, search left half; else search right half.',
  codeSolution: 'def binary_search(arr, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] > target:\n        return binary_search(arr, target, low, mid-1)\n    else:\n        return binary_search(arr, target, mid+1, high)',
  hint: 'Base case: low > high means not found. Recurse on appropriate half.'
},
{
  id: 'py_rec_12',
  topicId: 'py_recursion',
  question: 'Write a recursive function that prints numbers from 1 to n.',
  mathSolution: 'Print 1, then recursively print from 2 to n.',
  codeSolution: 'def print_1_to_n(n):\n    if n <= 0:\n        return\n    print_1_to_n(n-1)\n    print(n)',
  hint: 'Recurse first (to print smaller numbers), then print current number.'
},
{
  id: 'py_rec_13',
  topicId: 'py_recursion',
  question: 'Write a recursive function that prints numbers from n down to 1.',
  mathSolution: 'Print n, then recursively print from n-1 down to 1.',
  codeSolution: 'def print_n_to_1(n):\n    if n <= 0:\n        return\n    print(n)\n    print_n_to_1(n-1)',
  hint: 'Print current, then recurse with n-1.'
},
{
  id: 'py_rec_14',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the product of all elements in a list.',
  mathSolution: 'product(arr) = arr[0] * product(arr[1:]) for non-empty list; base empty list returns 1.',
  codeSolution: 'def product_list(arr):\n    if not arr:\n        return 1\n    return arr[0] * product_list(arr[1:])',
  hint: 'Multiply first element by product of the rest.'
},
{
  id: 'py_rec_15',
  topicId: 'py_recursion',
  question: 'Write a recursive function to find the maximum element in a list.',
  mathSolution: 'max(arr) = max(arr[0], max(arr[1:])) for list length>1; base length 1 returns arr[0].',
  codeSolution: 'def max_list(arr):\n    if len(arr) == 1:\n        return arr[0]\n    sub_max = max_list(arr[1:])\n    return arr[0] if arr[0] > sub_max else sub_max',
  hint: 'Compare first element with maximum of the rest.'
},
{
  id: 'py_rec_16',
  topicId: 'py_recursion',
  question: 'Write a recursive linear search: return index of target in list, or -1 if not found.',
  mathSolution: 'If first element matches, return 0; else search the rest; if not found, return -1.',
  codeSolution: 'def linear_search(arr, target, index=0):\n    if index >= len(arr):\n        return -1\n    if arr[index] == target:\n        return index\n    return linear_search(arr, target, index+1)',
  hint: 'Check current index, if not match, recurse with index+1.'
},
{
  id: 'py_rec_17',
  topicId: 'py_recursion',
  question: 'Write a recursive binary search that returns True if target exists in sorted list, else False.',
  mathSolution: 'Same as index search, but returns boolean.',
  codeSolution: 'def binary_search_bool(arr, target, low, high):\n    if low > high:\n        return False\n    mid = (low + high)//2\n    if arr[mid] == target:\n        return True\n    elif arr[mid] > target:\n        return binary_search_bool(arr, target, low, mid-1)\n    else:\n        return binary_search_bool(arr, target, mid+1, high)',
  hint: 'Base case: low>high returns False.'
},
{
  id: 'py_rec_18',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate all subsets (the power set) of a given set represented as a list of unique elements.',
  mathSolution: 'For each element, include it in subsets of the rest, or exclude it.',
  codeSolution: 'def subsets(nums):\n    if not nums:\n        return [[]]\n    first = nums[0]\n    rest = nums[1:]\n    rest_subsets = subsets(rest)\n    return rest_subsets + [[first] + s for s in rest_subsets]',
  hint: 'Base: empty set has one subset (empty list). Recursive: subsets without first + subsets including first.'
},
{
  id: 'py_rec_19',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate all permutations of a string.',
  mathSolution: 'For each character, insert it into all permutations of the remaining characters.',
  codeSolution: 'def permutations(s):\n    if len(s) <= 1:\n        return [s]\n    perms = []\n    for i, char in enumerate(s):\n        for perm in permutations(s[:i] + s[i+1:]):\n            perms.append(char + perm)\n    return perms',
  hint: 'Pick a character, permute the rest, then prepend the character.'
},
{
  id: 'py_rec_20',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the number of ways to choose k elements from n (combination C(n, k)).',
  mathSolution: 'C(n,k) = C(n-1,k-1) + C(n-1,k) with base C(n,0)=C(n,n)=1.',
  codeSolution: 'def combination(n, k):\n    if k == 0 or k == n:\n        return 1\n    return combination(n-1, k-1) + combination(n-1, k)',
  hint: 'Pascal\'s triangle recurrence.'
},
{
  id: 'py_rec_21',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the length of a string without using len().',
  mathSolution: 'length(s) = 1 + length(s[1:]) if s non-empty, base empty string returns 0.',
  codeSolution: 'def str_length(s):\n    if s == "":\n        return 0\n    return 1 + str_length(s[1:])',
  hint: 'Add 1 for first character, recurse on the rest.'
},
{
  id: 'py_rec_22',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute x^n using fast exponentiation (divide and conquer).',
  mathSolution: 'power(x,n) = power(x,n//2)^2 if n even; x * power(x,n-1) if n odd; base n=0 returns 1.',
  codeSolution: 'def fast_power(x, n):\n    if n == 0:\n        return 1\n    if n % 2 == 0:\n        half = fast_power(x, n//2)\n        return half * half\n    else:\n        return x * fast_power(x, n-1)',
  hint: 'Use parity of n to reduce steps.'
},
{
  id: 'py_rec_23',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if a list is sorted in ascending order.',
  mathSolution: 'A list is sorted if first element <= second, and the rest (from index 1) is sorted.',
  codeSolution: 'def is_sorted(arr):\n    if len(arr) <= 1:\n        return True\n    return arr[0] <= arr[1] and is_sorted(arr[1:])',
  hint: 'Compare first two, then recurse on tail.'
},
{
  id: 'py_rec_24',
  topicId: 'py_recursion',
  question: 'Write a recursive function to implement merge sort on a list.',
  mathSolution: 'Split list into halves, sort each recursively, then merge the sorted halves.',
  codeSolution: 'def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr)//2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i+=1\n        else:\n            result.append(right[j]); j+=1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result',
  hint: 'Divide, conquer, then merge.'
},
{
  id: 'py_rec_25',
  topicId: 'py_recursion',
  question: 'Write a recursive function to implement quick sort on a list.',
  mathSolution: 'Choose pivot, partition elements into less than pivot and greater than pivot, recursively sort each part.',
  codeSolution: 'def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[0]\n    less = [x for x in arr[1:] if x <= pivot]\n    greater = [x for x in arr[1:] if x > pivot]\n    return quick_sort(less) + [pivot] + quick_sort(greater)',
  hint: 'Pick first element as pivot, recurse on less and greater.'
},
{
  id: 'py_rec_26',
  topicId: 'py_recursion',
  question: 'Given a binary tree node class (value, left, right), write a recursive function for inorder traversal that returns list of values.',
  mathSolution: 'Traverse left subtree, then root, then right subtree.',
  codeSolution: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef inorder(root):\n    if not root:\n        return []\n    return inorder(root.left) + [root.val] + inorder(root.right)',
  hint: 'Recursively collect left, then current, then right.'
},
{
  id: 'py_rec_27',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the maximum depth (height) of a binary tree.',
  mathSolution: 'depth = 1 + max(depth(left), depth(right)); base empty tree depth 0.',
  codeSolution: 'def max_depth(root):\n    if not root:\n        return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))',
  hint: 'Height = 1 + max of heights of children.'
},
{
  id: 'py_rec_28',
  topicId: 'py_recursion',
  question: 'Write a recursive function to mirror a binary tree (swap left and right children).',
  mathSolution: 'Mirror tree: swap left and right subtrees recursively.',
  codeSolution: 'def mirror_tree(root):\n    if not root:\n        return None\n    root.left, root.right = mirror_tree(root.right), mirror_tree(root.left)\n    return root',
  hint: 'Recursively mirror children, then swap.'
},
{
  id: 'py_rec_29',
  topicId: 'py_recursion',
  question: 'Write a recursive function to count the number of leaf nodes in a binary tree.',
  mathSolution: 'Leaf if both children are None, count = 1; else sum leaves of left and right.',
  codeSolution: 'def count_leaves(root):\n    if not root:\n        return 0\n    if not root.left and not root.right:\n        return 1\n    return count_leaves(root.left) + count_leaves(root.right)',
  hint: 'If node is leaf, return 1; else recurse on children.'
},
{
  id: 'py_rec_30',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if two binary trees are identical.',
  mathSolution: 'Trees identical if both None, or both non‑None with same root value and identical left and right subtrees.',
  codeSolution: 'def is_same_tree(p, q):\n    if not p and not q:\n        return True\n    if not p or not q:\n        return False\n    return (p.val == q.val and\n            is_same_tree(p.left, q.left) and\n            is_same_tree(p.right, q.right))',
  hint: 'Compare values and recursively check children.'
},
{
  id: 'py_rec_31',
  topicId: 'py_recursion',
  question: 'Write a recursive function to search for a value in a singly linked list (node class: val, next).',
  mathSolution: 'If current node is None, return False; if val matches, return True; else search next.',
  codeSolution: 'class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef search_linked_list(head, target):\n    if not head:\n        return False\n    if head.val == target:\n        return True\n    return search_linked_list(head.next, target)',
  hint: 'Base: empty list returns False; if current matches, True; else recurse on next.'
},
{
  id: 'py_rec_32',
  topicId: 'py_recursion',
  question: 'Write a recursive function to reverse a singly linked list. Return the new head.',
  mathSolution: 'Reverse the rest, then make the next of the reversed tail point to current, and current next become None.',
  codeSolution: 'def reverse_linked_list(head):\n    if not head or not head.next:\n        return head\n    new_head = reverse_linked_list(head.next)\n    head.next.next = head\n    head.next = None\n    return new_head',
  hint: 'Recursively reverse the tail, then adjust pointers.'
},
{
  id: 'py_rec_33',
  topicId: 'py_recursion',
  question: 'Write a recursive function to flatten a nested list (list containing lists or integers) into a single list.',
  mathSolution: 'If element is list, flatten it and extend; if integer, append it.',
  codeSolution: 'def flatten(nested):\n    result = []\n    for item in nested:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result',
  hint: 'Iterate through items; for a list, recurse and extend; otherwise append.'
},
{
  id: 'py_rec_34',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate the first n Fibonacci numbers as a list.',
  mathSolution: 'Fibonacci sequence defined recursively; return list up to n.',
  codeSolution: 'def fib_list(n):\n    if n <= 0:\n        return []\n    if n == 1:\n        return [0]\n    if n == 2:\n        return [0, 1]\n    prev = fib_list(n-1)\n    prev.append(prev[-1] + prev[-2])\n    return prev',
  hint: 'Build list recursively by adding last two elements.'
},
{
  id: 'py_rec_35',
  topicId: 'py_recursion',
  question: 'Write a recursive function to convert a decimal number to binary (as string).',
  mathSolution: 'binary(n) = binary(n//2) + str(n%2), base n<=1 returns str(n).',
  codeSolution: 'def decimal_to_binary(n):\n    if n <= 1:\n        return str(n)\n    return decimal_to_binary(n // 2) + str(n % 2)',
  hint: 'Recursively convert quotient, then append remainder.'
},
{
  id: 'py_rec_36',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the sum of natural numbers from a to b inclusive.',
  mathSolution: 'sum_range(a,b) = a + sum_range(a+1,b) if a <= b, else 0.',
  codeSolution: 'def sum_range(a, b):\n    if a > b:\n        return 0\n    return a + sum_range(a+1, b)',
  hint: 'Add a to sum of a+1..b.'
},
{
  id: 'py_rec_37',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute a to the power b using repeated multiplication (a^b).',
  mathSolution: 'a^b = a * a^(b-1) for b>0; a^0=1.',
  codeSolution: 'def power_repeated(a, b):\n    if b == 0:\n        return 1\n    return a * power_repeated(a, b-1)',
  hint: 'Multiply a by a^(b-1).'
},
{
  id: 'py_rec_38',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the number of ways to climb a staircase of n steps if you can take 1 or 2 steps at a time.',
  mathSolution: 'ways(n) = ways(n-1) + ways(n-2) for n>2; base ways(1)=1, ways(2)=2.',
  codeSolution: 'def climb_stairs(n):\n    if n == 1:\n        return 1\n    if n == 2:\n        return 2\n    return climb_stairs(n-1) + climb_stairs(n-2)',
  hint: 'Reaches step n from n-1 or n-2.'
},
{
  id: 'py_rec_39',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the number of paths from top-left to bottom-right in an m x n grid, moving only right or down.',
  mathSolution: 'paths(m,n) = paths(m-1,n) + paths(m,n-1) for m>1 and n>1; base paths(1,n)=1, paths(m,1)=1.',
  codeSolution: 'def grid_paths(m, n):\n    if m == 1 or n == 1:\n        return 1\n    return grid_paths(m-1, n) + grid_paths(m, n-1)',
  hint: 'From (m,n) you can go up or left; base when only one row or column.'
},
{
  id: 'py_rec_40',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if a string has balanced parentheses (only \'(\' and \')\').',
  mathSolution: 'Use a counter; at each step increment for \'(\' decrement for \')\'; if negative, unbalanced; at end zero means balanced.',
  codeSolution: 'def balanced_parentheses(s, count=0):\\n    if count < 0:\\n        return False\\n    if not s:\\n        return count == 0\\n    if s[0] == \'(\':\\n        return balanced_parentheses(s[1:], count+1)\\n    else:\\n        return balanced_parentheses(s[1:], count-1)',
  hint: 'Maintain a running count; if count ever negative, return False; at end check zero.'
},
//Dsa
{
    id: "py_dsa_1",
    topicId: "py_dsa",
    question:
      "Write a function to reverse a list [1, 2, 3, 4, 5] without using built-in reverse() method.",
    mathSolution:
      "Use two-pointer approach: swap first and last elements moving towards center.",
    codeSolution:
      "def reverse_list(arr):\n    left, right = 0, len(arr)-1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr\n\nprint(reverse_list([1, 2, 3, 4, 5]))  # [5, 4, 3, 2, 1]",
    hint: "Use two pointers: one at start, one at end",
  },
  {
    id: "py_dsa_2",
    topicId: "py_dsa",
    question:
      "Find the maximum element in a list [3, 7, 2, 9, 1, 8] without using max() function.",
    mathSolution:
      "Initialize max with first element, iterate and update if larger element found.",
    codeSolution:
      "def find_max(arr):\n    if not arr:\n        return None\n    max_val = arr[0]\n    for num in arr:\n        if num > max_val:\n            max_val = num\n    return max_val\n\nprint(find_max([3, 7, 2, 9, 1, 8]))  # 9",
    hint: "Start with first element, compare with each element",
  },
  {
    id: "py_dsa_3",
    topicId: "py_dsa",
    question: "Find the minimum element in a list and its index.",
    mathSolution: "Track both minimum value and its position while iterating.",
    codeSolution:
      "def find_min_with_index(arr):\n    if not arr:\n        return None, None\n    min_val = arr[0]\n    min_idx = 0\n    for i in range(1, len(arr)):\n        if arr[i] < min_val:\n            min_val = arr[i]\n            min_idx = i\n    return min_val, min_idx\n\nprint(find_min_with_index([3, 7, 2, 9, 1, 8]))  # (1, 4)",
    hint: "Maintain both min value and its index",
  },
  {
    id: "py_dsa_4",
    topicId: "py_dsa",
    question: "Check if a list is sorted in ascending order.",
    mathSolution:
      "Compare each element with next element, if any is greater return False.",
    codeSolution:
      "def is_sorted(arr):\n    for i in range(len(arr)-1):\n        if arr[i] > arr[i+1]:\n            return False\n    return True\n\nprint(is_sorted([1, 2, 3, 4, 5]))  # True\nprint(is_sorted([1, 3, 2, 4, 5]))  # False",
    hint: "Check if arr[i] > arr[i+1] for any i",
  },
  {
    id: "py_dsa_5",
    topicId: "py_dsa",
    question:
      "Count the frequency of each element in a list [1, 2, 2, 3, 3, 3, 4].",
    mathSolution: "Use dictionary to store element-count pairs.",
    codeSolution:
      "def count_frequency(arr):\n    freq = {}\n    for num in arr:\n        freq[num] = freq.get(num, 0) + 1\n    return freq\n\nprint(count_frequency([1, 2, 2, 3, 3, 3, 4]))  # {1:1, 2:2, 3:3, 4:1}",
    hint: "Use dictionary with `.get(key, default)`",
  },
  {
    id: "py_dsa_6",
    topicId: "py_dsa",
    question:
      "Remove duplicates from a list [1, 2, 2, 3, 4, 4, 4, 5] preserving order.",
    mathSolution: "Use set to track seen elements while maintaining order.",
    codeSolution:
      "def remove_duplicates_preserve_order(arr):\n    seen = set()\n    result = []\n    for item in arr:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result\n\nprint(remove_duplicates_preserve_order([1, 2, 2, 3, 4, 4, 4, 5]))  # [1, 2, 3, 4, 5]",
    hint: "Use a set to track seen elements",
  },
  {
    id: "py_dsa_7",
    topicId: "py_dsa",
    question:
      "Find the second largest element in a list [10, 5, 8, 20, 15, 20].",
    mathSolution: "Track largest and second largest while iterating.",
    codeSolution:
      'def second_largest(arr):\n    if len(arr) < 2:\n        return None\n    first = second = float("-inf")\n    for num in arr:\n        if num > first:\n            second = first\n            first = num\n        elif num > second and num != first:\n            second = num\n    return second if second != float("-inf") else None\n\nprint(second_largest([10, 5, 8, 20, 15, 20]))  # 15',
    hint: "Track both largest and second largest",
  },
  {
    id: "py_dsa_8",
    topicId: "py_dsa",
    question:
      "Move all zeros to the end of list [0, 1, 0, 3, 12, 0, 5] while maintaining order of non-zero elements.",
    mathSolution:
      "Use two-pointer: one for non-zero position, iterate and swap.",
    codeSolution:
      "def move_zeros_to_end(arr):\n    non_zero_idx = 0\n    for i in range(len(arr)):\n        if arr[i] != 0:\n            arr[non_zero_idx], arr[i] = arr[i], arr[non_zero_idx]\n            non_zero_idx += 1\n    return arr\n\nprint(move_zeros_to_end([0, 1, 0, 3, 12, 0, 5]))  # [1, 3, 12, 5, 0, 0, 0]",
    hint: "Swap elements when non-zero found",
  },
  {
    id: "py_dsa_9",
    topicId: "py_dsa",
    question:
      "Find the intersection of two lists [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7].",
    mathSolution: "Convert one list to set and check membership.",
    codeSolution:
      "def intersection(list1, list2):\n    set1 = set(list1)\n    return [item for item in list2 if item in set1]\n\nprint(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))  # [3, 4, 5]",
    hint: "Convert one list to set for O(1) lookup",
  },
  {
    id: "py_dsa_10",
    topicId: "py_dsa",
    question: "Find the union of two lists without duplicates.",
    mathSolution: "Convert both to sets and combine.",
    codeSolution:
      "def union(list1, list2):\n    return list(set(list1) | set(list2))\n\nprint(union([1, 2, 3, 4], [3, 4, 5, 6]))  # [1, 2, 3, 4, 5, 6]",
    hint: "Use set union operator `|`",
  },
  {
    id: "py_dsa_11",
    topicId: "py_dsa",
    question:
      "Implement binary search to find element 7 in sorted list [1, 3, 5, 7, 9, 11, 13].",
    mathSolution: "Repeatedly divide search interval in half.",
    codeSolution:
      "def binary_search(arr, target):\n    left, right = 0, len(arr)-1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nprint(binary_search([1, 3, 5, 7, 9, 11, 13], 7))  # 3",
    hint: "Find middle, compare, eliminate half",
  },
  {
    id: "py_dsa_12",
    topicId: "py_dsa",
    question:
      "Implement linear search to find element 10 in list [5, 8, 10, 15, 20].",
    mathSolution: "Iterate through list and compare each element.",
    codeSolution:
      "def linear_search(arr, target):\n    for i, num in enumerate(arr):\n        if num == target:\n            return i\n    return -1\n\nprint(linear_search([5, 8, 10, 15, 20], 10))  # 2",
    hint: "Use enumerate() to get index while iterating",
  },
  {
    id: "py_dsa_13",
    topicId: "py_dsa",
    question: "Implement bubble sort on list [64, 34, 25, 12, 22, 11, 90].",
    mathSolution: "Repeatedly swap adjacent elements if out of order.",
    codeSolution:
      "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n-1):\n        for j in range(n-1-i):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))  # [11, 12, 22, 25, 34, 64, 90]",
    hint: "Nested loops: outer for passes, inner for comparisons",
  },
  {
    id: "py_dsa_14",
    topicId: "py_dsa",
    question: "Implement selection sort on list [64, 25, 12, 22, 11].",
    mathSolution: "Find minimum and place at beginning repeatedly.",
    codeSolution:
      "def selection_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        min_idx = i\n        for j in range(i+1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr\n\nprint(selection_sort([64, 25, 12, 22, 11]))  # [11, 12, 22, 25, 64]",
    hint: "Find minimum in unsorted portion, swap with first unsorted",
  },
  {
    id: "py_dsa_15",
    topicId: "py_dsa",
    question: "Implement insertion sort on list [12, 11, 13, 5, 6].",
    mathSolution: "Build sorted array one element at a time.",
    codeSolution:
      "def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i-1\n        while j >= 0 and arr[j] > key:\n            arr[j+1] = arr[j]\n            j -= 1\n        arr[j+1] = key\n    return arr\n\nprint(insertion_sort([12, 11, 13, 5, 6]))  # [5, 6, 11, 12, 13]",
    hint: "Insert each element into correct position",
  },
  {
    id: "py_dsa_16",
    topicId: "py_dsa",
    question: "Find the sum of all elements in a list using recursion.",
    mathSolution: "Base case: empty list sum=0, recursive: first + sum(rest).",
    codeSolution:
      "def recursive_sum(arr):\n    if not arr:\n        return 0\n    return arr[0] + recursive_sum(arr[1:])\n\nprint(recursive_sum([1, 2, 3, 4, 5]))  # 15",
    hint: "Base case: empty list returns 0",
  },
  {
    id: "py_dsa_17",
    topicId: "py_dsa",
    question: "Calculate factorial of a number using recursion.",
    mathSolution: "Base case: 0! = 1, recursive: n! = n * (n-1)!",
    codeSolution:
      "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\nprint(factorial(5))  # 120",
    hint: "Return 1 for n=0 or n=1",
  },
  {
    id: "py_dsa_18",
    topicId: "py_dsa",
    question: "Find the nth Fibonacci number using recursion.",
    mathSolution: "Base cases: F(0)=0, F(1)=1, recursive: F(n)=F(n-1)+F(n-2).",
    codeSolution:
      "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(6))  # 8 (0,1,1,2,3,5,8)",
    hint: "Base cases: 0 and 1",
  },
  {
    id: "py_dsa_19",
    topicId: "py_dsa",
    question:
      "Implement a stack using list with push, pop, and peek operations.",
    mathSolution:
      "Use list append() for push, pop() for pop, indexing for peek.",
    codeSolution:
      "class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if not self.is_empty():\n            return self.items.pop()\n        return None\n    \n    def peek(self):\n        if not self.is_empty():\n            return self.items[-1]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\ns = Stack()\ns.push(1)\ns.push(2)\nprint(s.pop())  # 2\nprint(s.peek())  # 1",
    hint: "Use list methods: append(), pop(), indexing",
  },
  {
    id: "py_dsa_20",
    topicId: "py_dsa",
    question:
      "Implement a queue using list with enqueue and dequeue operations.",
    mathSolution: "Use append() for enqueue, pop(0) for dequeue.",
    codeSolution:
      "class Queue:\n    def __init__(self):\n        self.items = []\n    \n    def enqueue(self, item):\n        self.items.append(item)\n    \n    def dequeue(self):\n        if not self.is_empty():\n            return self.items.pop(0)\n        return None\n    \n    def front(self):\n        if not self.is_empty():\n            return self.items[0]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\nq = Queue()\nq.enqueue(1)\nq.enqueue(2)\nprint(q.dequeue())  # 1\nprint(q.front())  # 2",
    hint: "Use pop(0) for dequeue, but it's O(n)",
  },
  {
    id: "py_dsa_21",
    topicId: "py_dsa",
    question: 'Check if a string is palindrome using stack: "racecar".',
    mathSolution: "Push all chars to stack, pop and compare with original.",
    codeSolution:
      'def is_palindrome_stack(s):\n    stack = []\n    for char in s:\n        stack.append(char)\n    for char in s:\n        if char != stack.pop():\n            return False\n    return True\n\nprint(is_palindrome_stack("racecar"))  # True\nprint(is_palindrome_stack("hello"))  # False',
    hint: "Push all chars, pop and compare with original string",
  },
  {
    id: "py_dsa_22",
    topicId: "py_dsa",
    question:
      "Implement a simple Node class and LinkedList class with append method.",
    mathSolution: "Node has data and next pointer. LinkedList tracks head.",
    codeSolution:
      "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nclass LinkedList:\n    def __init__(self):\n        self.head = None\n    \n    def append(self, data):\n        new_node = Node(data)\n        if not self.head:\n            self.head = new_node\n            return\n        current = self.head\n        while current.next:\n            current = current.next\n        current.next = new_node\n    \n    def display(self):\n        result = []\n        current = self.head\n        while current:\n            result.append(current.data)\n            current = current.next\n        return result\n\nll = LinkedList()\nll.append(1)\nll.append(2)\nll.append(3)\nprint(ll.display())  # [1, 2, 3]",
    hint: "Node has data and next attribute",
  },
  {
    id: "py_dsa_23",
    topicId: "py_dsa",
    question: "Find the length of a linked list.",
    mathSolution: "Traverse list, count nodes until None.",
    codeSolution:
      "def length(head):\n    count = 0\n    current = head\n    while current:\n        count += 1\n        current = current.next\n    return count\n\n# Using previous LinkedList class\nll = LinkedList()\nll.append(1)\nll.append(2)\nll.append(3)\nprint(length(ll.head))  # 3",
    hint: "Traverse and count nodes",
  },
  {
    id: "py_dsa_24",
    topicId: "py_dsa",
    question: "Implement binary search recursively.",
    mathSolution: "Divide array, search left or right half recursively.",
    codeSolution:
      "def binary_search_recursive(arr, target, left, right):\n    if left > right:\n        return -1\n    mid = (left + right) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] < target:\n        return binary_search_recursive(arr, target, mid+1, right)\n    else:\n        return binary_search_recursive(arr, target, left, mid-1)\n\narr = [1, 3, 5, 7, 9, 11, 13]\nprint(binary_search_recursive(arr, 7, 0, len(arr)-1))  # 3",
    hint: "Base case: left > right, recursive: search half",
  },
  {
    id: "py_dsa_25",
    topicId: "py_dsa",
    question: 'Find the first non-repeating character in string "swiss".',
    mathSolution: "Count frequencies, find first with count=1.",
    codeSolution:
      'def first_non_repeating(s):\n    freq = {}\n    for char in s:\n        freq[char] = freq.get(char, 0) + 1\n    for char in s:\n        if freq[char] == 1:\n            return char\n    return None\n\nprint(first_non_repeating("swiss"))  # "w"',
    hint: "Count frequencies first, then find first with count 1",
  },
  {
    id: "py_dsa_26",
    topicId: "py_dsa",
    question: 'Check if two strings are anagrams: "listen" and "silent".',
    mathSolution: "Sort both strings and compare, or use character counts.",
    codeSolution:
      'def are_anagrams(s1, s2):\n    if len(s1) != len(s2):\n        return False\n    return sorted(s1) == sorted(s2)\n\nprint(are_anagrams("listen", "silent"))  # True\nprint(are_anagrams("hello", "world"))  # False',
    hint: "Sorted strings should be equal",
  },
  {
    id: "py_dsa_27",
    topicId: "py_dsa",
    question:
      "Find the majority element (appears > n/2 times) in list [3, 3, 4, 2, 3, 3, 3].",
    mathSolution: "Use Boyer-Moore majority vote algorithm.",
    codeSolution:
      "def majority_element(arr):\n    candidate = None\n    count = 0\n    for num in arr:\n        if count == 0:\n            candidate = num\n        count += (1 if num == candidate else -1)\n    return candidate\n\nprint(majority_element([3, 3, 4, 2, 3, 3, 3]))  # 3",
    hint: "Cancel pairs of different elements, remaining is candidate",
  },
  {
    id: "py_dsa_28",
    topicId: "py_dsa",
    question: "Rotate array [1, 2, 3, 4, 5, 6, 7] to the right by 3 steps.",
    mathSolution: "Reverse whole, reverse first k, reverse remaining.",
    codeSolution:
      "def rotate_right(arr, k):\n    n = len(arr)\n    k = k % n\n    if k == 0:\n        return arr\n    arr.reverse()\n    arr[:k] = reversed(arr[:k])\n    arr[k:] = reversed(arr[k:])\n    return arr\n\nprint(rotate_right([1, 2, 3, 4, 5, 6, 7], 3))  # [5, 6, 7, 1, 2, 3, 4]",
    hint: "Three-reversal technique: reverse whole, then parts",
  },
  {
    id: "py_dsa_29",
    topicId: "py_dsa",
    question:
      "Find the missing number in list [0, 1, 2, 3, 4, 6, 7, 8, 9] (numbers 0-9).",
    mathSolution: "Sum of 0 to n = n*(n+1)//2, subtract actual sum.",
    codeSolution:
      "def missing_number(arr):\n    n = len(arr)\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(arr)\n    return expected_sum - actual_sum\n\nprint(missing_number([0, 1, 2, 3, 4, 6, 7, 8, 9]))  # 5",
    hint: "Expected sum minus actual sum gives missing number",
  },
  {
    id: "py_dsa_30",
    topicId: "py_dsa",
    question:
      "Find all pairs in list that sum to target value 8: [2, 4, 3, 5, 6, -2, 9, 1].",
    mathSolution: "Use set to track seen numbers.",
    codeSolution:
      "def find_pairs_with_sum(arr, target):\n    seen = set()\n    pairs = []\n    for num in arr:\n        complement = target - num\n        if complement in seen:\n            pairs.append((complement, num))\n        seen.add(num)\n    return pairs\n\nprint(find_pairs_with_sum([2, 4, 3, 5, 6, -2, 9, 1], 8))  # [(2, 6), (4, 4), (3, 5), (9, -1)]",
    hint: "Check if complement already seen",
  },
  {
    id: "py_dsa_31",
    topicId: "py_dsa",
    question:
      "Find the longest consecutive subsequence in [100, 4, 200, 1, 3, 2].",
    mathSolution: "Use set for O(1) lookup, find sequence starts.",
    codeSolution:
      "def longest_consecutive(arr):\n    num_set = set(arr)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            length = 1\n            while num + length in num_set:\n                length += 1\n            longest = max(longest, length)\n    return longest\n\nprint(longest_consecutive([100, 4, 200, 1, 3, 2]))  # 4 (1,2,3,4)",
    hint: "Find sequence start (num-1 not in set)",
  },
  {
    id: "py_dsa_32",
    topicId: "py_dsa",
    question: "Implement merge sort on list [38, 27, 43, 3, 9, 82, 10].",
    mathSolution:
      "Divide array into halves, sort recursively, merge sorted halves.",
    codeSolution:
      "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))  # [3, 9, 10, 27, 38, 43, 82]",
    hint: "Divide and conquer: split, sort, merge",
  },
  {
    id: "py_dsa_33",
    topicId: "py_dsa",
    question: "Implement quick sort on list [10, 7, 8, 9, 1, 5].",
    mathSolution: "Choose pivot, partition, recursively sort sub-arrays.",
    codeSolution:
      "def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr)//2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quick_sort(left) + middle + quick_sort(right)\n\nprint(quick_sort([10, 7, 8, 9, 1, 5]))  # [1, 5, 7, 8, 9, 10]",
    hint: "Elements less than pivot, equal, greater than pivot",
  },
  {
    id: "py_dsa_34",
    topicId: "py_dsa",
    question:
      "Implement DFS (Depth First Search) traversal on a graph using adjacency list.",
    mathSolution:
      "Use recursion or stack to visit nodes deeply before backing up.",
    codeSolution:
      'def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(start)\n    print(start, end=" ")\n    for neighbor in graph[start]:\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    return visited\n\ngraph = {\n    0: [1, 2],\n    1: [2],\n    2: [0, 3],\n    3: [3]\n}\nprint("DFS: ", end="")\ndfs(graph, 0)  # 0 1 2 3',
    hint: "Track visited nodes, recurse on unvisited neighbors",
  },
  {
    id: "py_dsa_35",
    topicId: "py_dsa",
    question: "Implement BFS (Breadth First Search) traversal on a graph.",
    mathSolution: "Use queue, visit level by level.",
    codeSolution:
      'from collections import deque\n\ndef bfs(graph, start):\n    visited = set([start])\n    queue = deque([start])\n    while queue:\n        vertex = queue.popleft()\n        print(vertex, end=" ")\n        for neighbor in graph[vertex]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n\ngraph = {\n    0: [1, 2],\n    1: [2],\n    2: [0, 3],\n    3: [3]\n}\nprint("BFS: ", end="")\nbfs(graph, 0)  # 0 1 2 3',
    hint: "Use deque for queue, mark visited when enqueuing",
  },
  {
    id: "py_dsa_36",
    topicId: "py_dsa",
    question:
      "Detect cycle in a linked list using Floyd's cycle detection algorithm.",
    mathSolution: "Use slow and fast pointers, if they meet, cycle exists.",
    codeSolution:
      "def has_cycle(head):\n    if not head:\n        return False\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False\n\n# Creating list with cycle\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nnodes = [Node(i) for i in range(5)]\nfor i in range(4):\n    nodes[i].next = nodes[i+1]\nnodes[4].next = nodes[2]  # Create cycle\nprint(has_cycle(nodes[0]))  # True",
    hint: "Slow moves 1 step, fast moves 2 steps",
  },
  {
    id: "py_dsa_37",
    topicId: "py_dsa",
    question: "Find the middle of a linked list in one pass.",
    mathSolution:
      "Use slow and fast pointers, fast reaches end when slow is at middle.",
    codeSolution:
      "def find_middle(head):\n    slow = head\n    fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow.val if slow else None\n\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\nhead.next.next.next = Node(4)\nhead.next.next.next.next = Node(5)\nprint(find_middle(head))  # 3",
    hint: "Slow moves 1, fast moves 2 steps",
  },
  {
    id: "py_dsa_38",
    topicId: "py_dsa",
    question: "Implement a hash table with basic put and get operations.",
    mathSolution: "Use array of lists for chaining collision resolution.",
    codeSolution:
      'class HashTable:\n    def __init__(self, size=10):\n        self.size = size\n        self.table = [[] for _ in range(size)]\n    \n    def _hash(self, key):\n        return hash(key) % self.size\n    \n    def put(self, key, value):\n        index = self._hash(key)\n        for i, (k, v) in enumerate(self.table[index]):\n            if k == key:\n                self.table[index][i] = (key, value)\n                return\n        self.table[index].append((key, value))\n    \n    def get(self, key):\n        index = self._hash(key)\n        for k, v in self.table[index]:\n            if k == key:\n                return v\n        return None\n\nht = HashTable()\nht.put("name", "Alice")\nht.put("age", 25)\nprint(ht.get("name"))  # Alice\nprint(ht.get("age"))   # 25',
    hint: "Use modulo for hash function, chaining for collisions",
  },
  {
    id: "py_dsa_39",
    topicId: "py_dsa",
    question:
      "Find the maximum subarray sum (Kadane's algorithm) in [-2, 1, -3, 4, -1, 2, 1, -5, 4].",
    mathSolution:
      "Track current sum and max sum, reset if current becomes negative.",
    codeSolution:
      "def max_subarray_sum(arr):\n    max_current = max_global = arr[0]\n    for num in arr[1:]:\n        max_current = max(num, max_current + num)\n        max_global = max(max_global, max_current)\n    return max_global\n\nprint(max_subarray_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6 (4,-1,2,1)",
    hint: "Either start new subarray or extend existing",
  },
  {
    id: "py_dsa_40",
    topicId: "py_dsa",
    question: "Find the intersection point of two linked lists.",
    mathSolution: "Find lengths, advance longer list, then traverse together.",
    codeSolution:
      "def get_intersection(head1, head2):\n    len1 = get_length(head1)\n    len2 = get_length(head2)\n    while len1 > len2:\n        head1 = head1.next\n        len1 -= 1\n    while len2 > len1:\n        head2 = head2.next\n        len2 -= 1\n    while head1 and head2:\n        if head1 == head2:\n            return head1\n        head1 = head1.next\n        head2 = head2.next\n    return None\n\ndef get_length(head):\n    length = 0\n    while head:\n        length += 1\n        head = head.next\n    return length\n\n# Create intersecting lists\nclass Node:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\ncommon = Node(7)\ncommon.next = Node(8)\ncommon.next.next = Node(9)\n\nhead1 = Node(1)\nhead1.next = Node(2)\nhead1.next.next = common\n\nhead2 = Node(3)\nhead2.next = common\n\nintersection = get_intersection(head1, head2)\nprint(intersection.val if intersection else None)  # 7",
    hint: "Equalize lengths, then find common node",
  },

);