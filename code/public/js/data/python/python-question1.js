QuizData.questions.push(
    //intoduction  ,Variable  ,Data type
{
  id: 'py_int_1',
  topicId: 'py_int',
  question: 'What function is used to print output to the console in Python?',
  mathSolution: 'Use print() function to display output.',
  codeSolution: '# Print a message\nprint("Hello, World!")\n\n# Print multiple items\nprint("Python", "is", "awesome")',
  hint: 'print() function is the most commonly used output function.'
},
{
  id: 'py_int_2',
  topicId: 'py_int',
  question: 'How do you get user input in Python?',
  mathSolution: 'Use input() function to read user input as string.',
  codeSolution: '# Get user input\nname = input("Enter your name: ")\nprint(f"Hello, {name}")\n\n# Convert to integer\nage = int(input("Enter your age: "))',
  hint: 'input() always returns a string; use int() or float() to convert.'
},
{
  id: 'py_int_3',
  topicId: 'py_int',
  question: 'What are the different ways to write comments in Python?',
  mathSolution: 'Use # for comments. Triple quotes are used for docstrings, not true comments.',
  codeSolution: '# This is a single-line comment\n\n# This is another comment\nx = 10  # Inline comment\n\n\"\"\"\nThis is a docstring (not a real comment)\nUsed for documentation\n\"\"\"\n\ny = 20',
  hint: 'Python does not have true multi-line comments; triple quotes are mainly used for docstrings.'
},
{
  id: 'py_int_4',
  topicId: 'py_int',
  question: 'How do you declare and initialize a variable in Python?',
  mathSolution: 'Variables are created when you assign a value using = operator.',
  codeSolution: '# Variable declaration and initialization\nname = "Alice"        # String\nage = 25             # Integer\nheight = 5.7         # Float\nis_student = True    # Boolean\n\nprint(name, age, height, is_student)',
  hint: 'Python is dynamically typed - no type declaration needed.'
},
{
  id: 'py_int_5',
  topicId: 'py_int',
  question: 'What are the basic data types in Python?',
  mathSolution: 'Common types: int, float, str, bool, list, tuple, dict, set.',
  codeSolution: '# Numeric types\nage = 25              # int\nprice = 19.99         # float\n\n# Text type\nname = "Python"       # str\n\n# Boolean type\nis_valid = True       # bool\n\n# Set type\nunique_numbers = {1, 2, 3}  # set\n\n# Check types\nprint(type(age))      # <class \'int\'>\nprint(type(name))     # <class \'str\'>',
  hint: 'Use type() function to check the data type of a variable.'
},
{
  id: 'py_int_6',
  topicId: 'py_int',
  question: 'How do you check the data type of a variable?',
  mathSolution: 'Use the type() function.',
  codeSolution: 'x = 10\nprint(type(x))        # <class \'int\'>\n\ny = "Hello"\nprint(type(y))        # <class \'str\'>\n\nz = 3.14\nprint(type(z))        # <class \'float\'>\n\nif type(x) == int:\n    print("x is an integer")',
  hint: 'type() returns a type object that can be compared with type names.'
},
{
  id: 'py_int_7',
  topicId: 'py_int',
  question: 'How do you convert one data type to another in Python?',
  mathSolution: 'Use int(), float(), str(), bool() for type conversion.',
  codeSolution: '# String to integer\nnum_str = "123"\nnum_int = int(num_str)\n\n# Integer to string\nage = 25\nage_str = str(age)\n\n# Integer to float\nx = 10\ny = float(x)\n\n# Float to integer (truncates)\npi = 3.14\npi_int = int(pi)      # 3\n\nprint(num_int, age_str, y, pi_int)',
  hint: 'Type conversion is also called type casting.'
},
{
  id: 'py_int_8',
  topicId: 'py_int',
  question: 'What is string concatenation in Python?',
  mathSolution: 'Use + operator to join strings together.',
  codeSolution: '# String concatenation with +\nfirst = "Hello"\nsecond = "World"\nresult = first + " " + second\nprint(result)  # Hello World\n\n# Using join() method for multiple strings\nwords = ["Python", "is", "fun"]\nsentence = " ".join(words)\nprint(sentence)  # Python is fun',
  hint: 'You cannot concatenate string with non-string types directly.'
},
{
  id: 'py_int_9',
  topicId: 'py_int',
  question: 'How do you get the length of a string?',
  mathSolution: 'Use the len() function.',
  codeSolution: '# String length\nmessage = "Hello Python"\nlength = len(message)\nprint(f"Length: {length}")  # Length: 12\n\n# Empty string\nempty = ""\nprint(len(empty))  # 0\n\n# String with spaces\nspaces = "  "  \nprint(len(spaces))  # 2',
  hint: 'len() works with strings, lists, tuples, dictionaries, and sets.'
},
{
  id: 'py_int_10',
  topicId: 'py_int',
  question: 'How do you access characters in a string by index?',
  mathSolution: 'Use square brackets [] with index (0-based).',
  codeSolution: 'text = "Python"\n\n# Access by index\nprint(text[0])    # P\nprint(text[1])    # y\nprint(text[-1])   # n (negative index starts from end)\n\n# Slicing\nprint(text[0:3])  # Pyt (indices 0,1,2)\nprint(text[:3])   # Pyt\nprint(text[3:])   # hon',
  hint: 'Negative indices count from the end, -1 is the last character.'
},
{
  id: 'py_int_11',
  topicId: 'py_int',
  question: 'What are Python operators for arithmetic operations?',
  mathSolution: 'Operators: +, -, *, /, //, %, **',
  codeSolution: 'a = 10\nb = 3\n\nprint(a + b)   # 13 (addition)\nprint(a - b)   # 7  (subtraction)\nprint(a * b)   # 30 (multiplication)\nprint(a / b)   # 3.333... (division - always float)\nprint(a // b)  # 3  (floor division)\nprint(a % b)   # 1  (modulus - remainder)\nprint(a ** b)  # 1000 (exponentiation)',
  hint: '// performs floor division (rounds down), / always returns float.'
},
{
  id: 'py_int_12',
  topicId: 'py_int',
  question: 'How do you use comparison operators in Python?',
  mathSolution: 'Use ==, !=, <, >, <=, >= for comparisons.',
  codeSolution: 'a = 10\nb = 20\n\nprint(a == b)   # False (equal to)\nprint(a != b)   # True  (not equal to)\nprint(a < b)    # True  (less than)\nprint(a > b)    # False (greater than)\nprint(a <= b)   # True  (less than or equal)\nprint(a >= b)   # False (greater than or equal)\n\n# String comparison\nprint("apple" < "banana")  # True (lexicographical)',
  hint: 'Comparison operators return boolean values (True/False).'
},
{
  id: 'py_int_13',
  topicId: 'py_int',
  question: 'What are logical operators in Python?',
  mathSolution: 'Use and, or, not for logical operations.',
  codeSolution: 'x = True\ny = False\n\nprint(x and y)   # False (both must be True)\nprint(x or y)    # True  (at least one is True)\nprint(not x)     # False (negation)\n\n# Practical example\nage = 25\nhas_license = True\n\nif age >= 18 and has_license:\n    print("Can drive")\n\nif not has_license:\n    print("No license!")',
  hint: 'In Python, we use and/or/not instead of &&, ||, ! (from other languages).'
},
{
  id: 'py_int_14',
  topicId: 'py_int',
  question: 'How do you create a list in Python?',
  mathSolution: 'Use square brackets [] with comma-separated values.',
  codeSolution: '# Creating lists\nnumbers = [1, 2, 3, 4, 5]\nfruits = ["apple", "banana", "orange"]\nmixed = [1, "hello", 3.14, True]\nempty = []\n\n# List with range\nvalues = list(range(5))  # [0, 1, 2, 3, 4]\n\nprint(fruits[0])  # apple\nprint(len(numbers))  # 5',
  hint: 'Lists are ordered, mutable, and can contain different data types.'
},
{
  id: 'py_int_15',
  topicId: 'py_int',
  question: 'How do you add elements to a list?',
  mathSolution: 'Use append(), insert(), or extend() methods.',
  codeSolution: 'colors = ["red", "blue"]\n\n# Append - adds to end\ncolors.append("green")\nprint(colors)  # ["red", "blue", "green"]\n\n# Insert - adds at specific index\ncolors.insert(1, "yellow")\nprint(colors)  # ["red", "yellow", "blue", "green"]\n\n# Extend - adds multiple elements\ncolors.extend(["purple", "orange"])\nprint(colors)  # ["red", "yellow", "blue", "green", "purple", "orange"]',
  hint: 'append() adds one item, extend() adds multiple, insert() adds at position.'
},
{
  id: 'py_int_16',
  topicId: 'py_int',
  question: 'How do you remove elements from a list?',
  mathSolution: 'Use remove(), pop(), or del keyword.',
  codeSolution: 'fruits = ["apple", "banana", "cherry", "date", "elderberry"]\n\n# Remove by value (first occurrence)\nfruits.remove("banana")\nprint(fruits)\n\n# Pop by index (returns removed value)\nlast = fruits.pop()  # Removes last element\nprint(f"Removed: {last}")\n\n# Pop at specific index\ncherry = fruits.pop(1)\n\n# Delete by index or slice\ndel fruits[0]\n\n# Clear entire list\nfruits.clear()',
  hint: 'pop() returns the removed element, remove() returns None.'
},
{
  id: 'py_int_17',
  topicId: 'py_int',
  question: 'How do you create a tuple in Python?',
  mathSolution: 'Use parentheses () with comma-separated values.',
  codeSolution: '# Creating tuples\ncoordinates = (10, 20)\ncolors = ("red", "green", "blue")\nsingle = (5,)  # Tuple with one element\nempty = ()\n\n# Packing and unpacking\npoint = 10, 20  # Tuple packing\nx, y = point    # Tuple unpacking\n\nprint(coordinates[0])  # 10\n# coordinates[0] = 30  # Error! Tuples are immutable',
  hint: 'Tuples are immutable (cannot be changed after creation).'
},
{
  id: 'py_int_18',
  topicId: 'py_int',
  question: 'What is the difference between list and tuple?',
  mathSolution: 'Lists are mutable [], tuples are immutable ().',
  codeSolution: '# List - mutable\nmy_list = [1, 2, 3]\nmy_list[0] = 10  # Works fine\nmy_list.append(4)\n\n# Tuple - immutable\nmy_tuple = (1, 2, 3)\n# my_tuple[0] = 10  # TypeError!\n\n# Use cases\n# Lists: when data changes (e.g., shopping cart)\n# Tuples: when data is constant (e.g., days of week, coordinates)\n\n# Performance: tuples are slightly faster than lists',
  hint: 'Use lists for dynamic data, tuples for fixed/constant data.'
},
{
  id: 'py_int_19',
  topicId: 'py_int',
  question: 'How do you create a dictionary in Python?',
  mathSolution: 'Use curly braces {} with key:value pairs.',
  codeSolution: '# Creating dictionaries\nperson = {\n    "name": "John",\n    "age": 30,\n    "city": "New York"\n}\n\n# Empty dictionary\nempty = {}\n\n# Using dict() constructor\nstudent = dict(name="Alice", grade="A")\n\n# Access values\nprint(person["name"])     # John\nprint(person.get("age"))  # 30 (safer, returns None if key missing)',
  hint: 'Dictionaries store key-value pairs; keys must be immutable.'
},
{
  id: 'py_int_20',
  topicId: 'py_int',
  question: 'How do you add or update dictionary entries?',
  mathSolution: 'Assign value to a key using [] or update() method.',
  codeSolution: '# Creating a dictionary\nperson = {"name": "John", "age": 25}\n\n# Adding new key-value pair\nperson["city"] = "London"\nprint(person)  # {"name": "John", "age": 25, "city": "London"}\n\n# Updating existing value\nperson["age"] = 26\nprint(person)  # {"name": "John", "age": 26, "city": "London"}\n\n# Using update() method\nperson.update({"job": "Engineer", "salary": 50000})\nprint(person)',
  hint: 'If the key exists, value is updated; if not, new entry is added.'
},
{
  id: 'py_int_21',
  topicId: 'py_int',
  question: 'How do you create a set in Python?',
  mathSolution: 'Use curly braces {} or set() function (values are unique).',
  codeSolution: '# Creating sets\nfruits = {"apple", "banana", "cherry"}\nnumbers = {1, 2, 3, 2, 1}  # Duplicates removed -> {1, 2, 3}\n\n# Empty set (note: {} is empty dict, not set)\nempty_set = set()\n\n# From list to set (removes duplicates)\nmy_list = [1, 2, 2, 3, 3, 3]\nunique_set = set(my_list)  # {1, 2, 3}\n\n# Set operations\nprint(fruits.union({"orange"}))      # Union\nprint(fruits.intersection({"apple"})) # Intersection',
  hint: 'Sets are unordered, unindexed, and cannot have duplicate values.'
},
{
  id: 'py_int_22',
  topicId: 'py_int',
  question: 'How do you create a for loop in Python?',
  mathSolution: 'Use for keyword to iterate over sequences.',
  codeSolution: '# Loop through list\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)\n\n# Loop through range\nfor i in range(5):  # 0 to 4\n    print(i)\n\n# Loop with index\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")\n\n# Loop through dictionary\nperson = {"name": "John", "age": 30}\nfor key, value in person.items():\n    print(f"{key}: {value}")',
  hint: 'range(start, stop, step) gives sequences of numbers.'
},
{
  id: 'py_int_23',
  topicId: 'py_int',
  question: 'How do you create a while loop in Python?',
  mathSolution: 'Use while keyword with a condition that eventually becomes False.',
  codeSolution: '# Basic while loop\ncount = 1\nwhile count <= 5:\n    print(count)\n    count += 1  # Increment to avoid infinite loop\n\n# While with break\nnum = 0\nwhile True:  # Infinite loop\n    print(num)\n    num += 1\n    if num == 5:\n        break  # Exit loop\n\n# While with continue\nnum = 0\nwhile num < 5:\n    num += 1\n    if num == 3:\n        continue  # Skip 3\n    print(num)  # 1,2,4,5',
  hint: 'Always ensure the condition can become False to avoid infinite loops.'
},
{
  id: 'py_int_24',
  topicId: 'py_int',
  question: 'How do you define a function in Python?',
  mathSolution: 'Use def keyword followed by function name and parameters.',
  codeSolution: '# Basic function\ndef greet():\n    print("Hello!")\n\n# Function with parameters\ndef greet_person(name):\n    print(f"Hello, {name}!")\n\n# Function with return value\ndef add(a, b):\n    return a + b\n\n# Call functions\ngreet()\ngreet_person("Alice")\nresult = add(5, 3)\nprint(result)  # 8\n\n# Function with default parameter\ndef greet_with_default(name="World"):\n    print(f"Hello, {name}!")',
  hint: 'Functions help organize code and avoid repetition.'
},
{
  id: 'py_int_25',
  topicId: 'py_int',
  question: 'How do you use if, elif, and else in Python?',
  mathSolution: 'Use conditional statements to control program flow.',
  codeSolution: 'score = 85\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"Grade: {grade}")  # Grade: B\n\n# Nested if\nage = 25\nhas_permit = True\n\nif age >= 18:\n    if has_permit:\n        print("Can drive")\n    else:\n        print("Need permit")\nelse:\n    print("Too young")',
  hint: 'elif is short for "else if", use indentation to show code blocks.'
},
{
  id: 'py_int_26',
  topicId: 'py_int',
  question: 'What is list comprehension in Python?',
  mathSolution: 'Concise way to create lists using [expression for item in iterable].',
  codeSolution: '# Traditional way\nsquares = []\nfor x in range(10):\n    squares.append(x**2)\n\n# List comprehension\nsquares = [x**2 for x in range(10)]\nprint(squares)  # [0,1,4,9,16,25,36,49,64,81]\n\n# With condition\neven_squares = [x**2 for x in range(10) if x % 2 == 0]\nprint(even_squares)  # [0,4,16,36,64]\n\n# With else\nresults = ["even" if x % 2 == 0 else "odd" for x in range(5)]',
  hint: 'List comprehension is faster and more readable than traditional loops.'
},
{
  id: 'py_int_27',
  topicId: 'py_int',
  question: 'How do you handle exceptions in Python?',
  mathSolution: 'Use try, except, else, finally blocks.',
  codeSolution: '# Basic exception handling\ntry:\n    num = int(input("Enter a number: "))\n    result = 10 / num\n    print(f"Result: {result}")\n\nexcept ValueError:\n    print("That\'s not a valid number!")\n\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")\n\nexcept Exception as e:\n    print(f"Unknown error: {e}")\n\nelse:\n    print("No error occurred!")  # Runs if no exception\n\nfinally:\n    print("This always runs")  # Cleanup code',
  hint: 'Always catch specific exceptions before generic Exception.'
},
{
  id: 'py_int_28',
  topicId: 'py_int',
  question: 'How do you import modules in Python?',
  mathSolution: 'Use import statement to use external modules.',
  codeSolution: '# Different ways to import\nimport math                # Import entire module\nfrom math import sqrt      # Import specific function\nfrom datetime import datetime as dt  # Import with alias\n\n# Usage\nprint(math.pi)  # 3.14159\nprint(sqrt(16))  # 4.0\nprint(dt.now())  # Current datetime\n\n# Import multiple\nfrom random import randint, choice\n\nprint(randint(1, 10))  # Random number\nprint(choice([1,2,3])) # Random choice',
  hint: 'Python has many built-in modules like math, random, datetime, os, sys.'
},
{
  id: 'py_int_29',
  topicId: 'py_int',
  question: 'How do you read a file in Python?',
  mathSolution: 'Use open() function with "r" mode.',
  codeSolution: '# Method 1: Using with (recommended)\nwith open("sample.txt", "r") as file:\n    content = file.read()\n    print(content)\n\n# Method 2: Read line by line\nwith open("sample.txt", "r") as file:\n    for line in file:\n        print(line.strip())  # strip() removes newline\n\n# Method 3: Read all lines into list\nwith open("sample.txt", "r") as file:\n    lines = file.readlines()\n    for line in lines:\n        print(line)',
  hint: 'with statement automatically closes the file when done.'
},
{
  id: 'py_int_30',
  topicId: 'py_int',
  question: 'How do you write to a file in Python?',
  mathSolution: 'Use open() with "w" (write), "a" (append), or "x" (create).',
  codeSolution: '# Write to file (overwrites existing)\nwith open("output.txt", "w") as file:\n    file.write("Hello World!\\n")\n    file.write("Second line")\n\n# Append to file\nwith open("output.txt", "a") as file:\n    file.write("\\nAppended line")\n\n# Write multiple lines\nlines = ["Line 1", "Line 2", "Line 3"]\nwith open("output.txt", "w") as file:\n    file.write("\\n".join(lines))\n\n# Using print with file parameter\nwith open("output.txt", "w") as file:\n    print("Hello", "World", file=file)',
  hint: 'Use "w" mode carefully as it overwrites existing content.'
},
{
  id: 'py_int_31',
  topicId: 'py_int',
  question: 'What is string formatting in Python?',
  mathSolution: 'Use f-strings, format(), or % operator.',
  codeSolution: 'name = "Alice"\nage = 25\nscore = 85.5\n\n# f-strings (Python 3.6+, recommended)\nmessage1 = f"My name is {name} and I am {age} years old"\n\n# format() method\nmessage2 = "My name is {} and I am {} years old".format(name, age)\nmessage3 = "My name is {n} and I am {a} years old".format(n=name, a=age)\n\n# % formatting (old style)\nmessage4 = "My name is %s and I am %d years old" % (name, age)\n\n# Formatting numbers\nprint(f"Score: {score:.2f}")  # Score: 85.50\nprint(f"Percentage: {score/100:.1%}")  # Percentage: 85.5%',
  hint: 'f-strings are the most readable and performant way to format strings.'
},
{
  id: 'py_int_32',
  topicId: 'py_int',
  question: 'How do you create a lambda function in Python?',
  mathSolution: 'Use lambda keyword to create small anonymous functions.',
  codeSolution: '# Regular function\ndef square(x):\n    return x ** 2\n\n# Lambda function\nsquare_lambda = lambda x: x ** 2\n\nprint(square(5))        # 25\nprint(square_lambda(5)) # 25\n\n# Used with built-in functions\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nfiltered = list(filter(lambda x: x > 2, numbers))\n\n# Sorting with custom key\nstudents = [("Alice", 25), ("Bob", 20), ("Charlie", 30)]\nstudents.sort(key=lambda x: x[1])  # Sort by age',
  hint: 'Lambda functions are useful for short, single-expression functions.'
},
{
  id: 'py_int_33',
  topicId: 'py_int',
  question: 'How do you find the length of a string, list, tuple, or dictionary?',
  mathSolution: 'Use len() function for any sequence or collection.',
  codeSolution: '# String\ntext = "Hello"\nprint(len(text))  # 5\n\n# List\nfruits = ["apple", "banana", "cherry"]\nprint(len(fruits))  # 3\n\n# Tuple\ncoordinates = (10, 20, 30)\nprint(len(coordinates))  # 3\n\n# Dictionary\nperson = {"name": "John", "age": 30, "city": "NYC"}\nprint(len(person))  # 3\n\n# Empty\nempty = []\nprint(len(empty))  # 0',
  hint: 'len() counts number of items (characters in string, elements in list/tuple, keys in dictionary).'
},
{
  id: 'py_int_34',
  topicId: 'py_int',
  question: 'How do you check if an item exists in a list or dictionary?',
  mathSolution: 'Use "in" operator for membership testing.',
  codeSolution: '# List membership\nfruits = ["apple", "banana", "cherry"]\nprint("banana" in fruits)   # True\nprint("grape" in fruits)    # False\n\n# Dictionary membership\nperson = {"name": "John", "age": 30}\nprint("name" in person)     # True (checks keys)\nprint("John" in person.values())  # True (checks values)\n\n# String membership\ntext = "Hello World"\nprint("World" in text)      # True\n\n# Tuple membership\nnumbers = (1, 2, 3, 4, 5)\nprint(3 in numbers)         # True',
  hint: 'Use "not in" to check if item does NOT exist.'
},
{
  id: 'py_int_35',
  topicId: 'py_int',
  question: 'What are Python\'s common built-in functions?',
  mathSolution: 'Python provides many built-in functions like print(), len(), type(), etc.',
  codeSolution: '# Type conversion\nint("123")           # 123\nstr(456)            # "456"\nfloat("3.14")       # 3.14\nbool(0)             # False\n\n# Mathematical\nabs(-5)             # 5\nround(3.14159, 2)   # 3.14\npow(2, 3)           # 8\nsum([1, 2, 3])      # 6\nmin(5, 2, 8)        # 2\nmax(5, 2, 8)        # 8\n\n# Sequence\nlist(range(5))      # [0, 1, 2, 3, 4]\nlen([1, 2, 3])      # 3\nsorted([3, 1, 2])   # [1, 2, 3]\n\n# Input/Output\nprint("Hello")      # Print to console\ninput("Enter: ")    # Read from console',
  hint: 'Built-in functions are always available without importing.'
},
{
  id: 'py_int_36',
  topicId: 'py_int',
  question: 'How do you copy a list (shallow vs deep copy)?',
  mathSolution: 'Use copy() method, list() constructor, or copy module.',
  codeSolution: '# Shallow copy methods\noriginal = [1, 2, [3, 4]]\n\n# Method 1: copy() method\ncopy1 = original.copy()\n\n# Method 2: list() constructor\ncopy2 = list(original)\n\n# Method 3: slicing\ncopy3 = original[:]\n\n# Modify shallow copy\ncopy1[2][0] = 99  # Changes original too!\n\n# Deep copy (independent copy)\nimport copy\ndeep_copy = copy.deepcopy(original)\ndeep_copy[2][0] = 99  # Original unchanged\n\nprint(original)  # [1, 2, [99, 4]] - affected by shallow copy',
  hint: 'Use deepcopy() when you have nested mutable objects you want to copy independently.'
},
{
  id: 'py_int_37',
  topicId: 'py_int',
  question: 'How do you split and join strings in Python?',
  mathSolution: 'Use split() to break string, join() to combine list elements.',
  codeSolution: '# Split string into list\nsentence = "Hello World Python"\nwords = sentence.split()  # ["Hello", "World", "Python"]\n\n# Split with custom delimiter\ndata = "apple,banana,cherry"\nfruits = data.split(",")  # ["apple", "banana", "cherry"]\n\n# Split with max splits\ntext = "a,b,c,d,e"\nparts = text.split(",", 2)  # ["a", "b", "c,d,e"]\n\n# Join list into string\nwords = ["Python", "is", "awesome"]\nsentence = " ".join(words)  # "Python is awesome"\n\n# Join with different separator\nfruits = ["apple", "banana"]\nresult = " and ".join(fruits)  # "apple and banana"',
  hint: 'split() returns list, join() returns string - they are opposites.'
},
{
  id: 'py_int_38',
  topicId: 'py_int',
  question: 'How do you get the current date and time in Python?',
  mathSolution: 'Use datetime module\'s datetime.now() method.',
  codeSolution: 'from datetime import datetime, date, time\n\n# Current date and time\nnow = datetime.now()\nprint(now)  # 2024-01-15 14:30:45.123456\n\n# Get components\nprint(now.year)   # 2024\nprint(now.month)  # 1\nprint(now.day)    # 15\nprint(now.hour)   # 14\n\n# Current date only\ntoday = date.today()\nprint(today)  # 2024-01-15\n\n# Format datetime\nprint(now.strftime("%Y-%m-%d %H:%M:%S"))  # 2024-01-15 14:30:45\nprint(now.strftime("%B %d, %Y"))          # January 15, 2024\n\n# Create specific datetime\nbirthday = datetime(1990, 5, 20, 10, 30)',
  hint: 'Use strftime() to format dates and strptime() to parse string dates.'
},
{
  id: 'py_int_39',
  topicId: 'py_int',
  question: 'How do you generate random numbers in Python?',
  mathSolution: 'Use random module for various random number generation.',
  codeSolution: 'import random\n\n# Random integer in range\nnum = random.randint(1, 10)  # 1 to 10 inclusive\n\n# Random float between 0 and 1\nfloat_num = random.random()  # 0.0 to 1.0\n\n# Random float with range\nfloat_range = random.uniform(1.5, 5.5)\n\n# Random choice from sequence\ncolors = ["red", "green", "blue", "yellow"]\nchoice = random.choice(colors)\n\n# Multiple choices\nchoices = random.choices(colors, k=3)  # With replacement\n\n# Unique choices\nsample = random.sample(colors, k=2)  # Without replacement\n\n# Shuffle list\nrandom.shuffle(colors)  # Modifies original list',
  hint: 'Import random first - it\'s not automatically available.'
},
{
  id: 'py_int_40',
  topicId: 'py_int',
  question: 'How do you use enumerate() in Python?',
  mathSolution: 'enumerate() adds a counter to an iterable.',
  codeSolution: '# Basic usage\nfruits = ["apple", "banana", "cherry"]\n\nfor index, fruit in enumerate(fruits):\n    print(f"{index}: {fruit}")\n# Output:\n# 0: apple\n# 1: banana\n# 2: cherry\n\n# Start from different index\nfor index, fruit in enumerate(fruits, start=1):\n    print(f"{index}: {fruit}")\n\n# Converting to list\nenum_list = list(enumerate(fruits))\nprint(enum_list)  # [(0, "apple"), (1, "banana"), (2, "cherry")]\n\n# With strings\nfor i, char in enumerate("abc"):\n    print(f"Index {i}: {char}")',
  hint: 'enumerate() is very useful when you need both index and value in loops.'
},
//variable
{
    id: 'py_var_1',
    topicId: 'py_var',
    question: 'What will be the output of `print(2 ** 3)`?',
    mathSolution: '2 raised to power 3 = 8',
    codeSolution: 'print(2 ** 3)  # 8',
    hint: '`**` is the exponentiation operator.'
  },
  {
    id: 'py_var_2',
    topicId: 'py_var',
    question: 'How do you swap two variables in Python?',
    mathSolution: 'Use tuple unpacking: a, b = b, a',
    codeSolution: 'a = 5; b = 10\na, b = b, a\nprint(a, b)  # 10 5',
    hint: 'Python evaluates the right-hand side first, then unpacks.'
  },
  {
    id: 'py_var_3',
    topicId: 'py_var',
    question: 'What is the data type of the variable `x` after `x = 3.14`?',
    mathSolution: 'float',
    codeSolution: 'x = 3.14\nprint(type(x))  # <class \'float\'>',
    hint: 'Any number with a decimal point is a float.'
  },
  {
    id: 'py_var_4',
    topicId: 'py_var',
    question: 'How do you convert the string "123" to an integer?',
    mathSolution: 'Use int(): int("123")',
    codeSolution: 's = "123"\nnum = int(s)\nprint(num)  # 123',
    hint: 'The `int()` function converts strings to integers if they contain digits.'
  },
  {
    id: 'py_var_5',
    topicId: 'py_var',
    question: 'What will be the output of `print(type(True))`?',
    mathSolution: '<class \'bool\'>',
    codeSolution: 'print(type(True))  # <class \'bool\'>',
    hint: 'True and False are booleans.'
  },
  {
    id: 'py_var_6',
    topicId: 'py_var',
    question: 'Which of the following variable names is invalid: `_myvar`, `2var`, `my_var`, `var2`?',
    mathSolution: '2var is invalid because it starts with a digit.',
    codeSolution: '# Valid: _myvar, my_var, var2\n# Invalid: 2var (syntax error)',
    hint: 'Variable names cannot start with a digit.'
  },
  {
    id: 'py_var_7',
    topicId: 'py_var',
    question: 'How do you assign the same value `10` to three variables `a`, `b`, `c` in one line?',
    mathSolution: 'Use chained assignment: a = b = c = 10',
    codeSolution: 'a = b = c = 10\nprint(a, b, c)  # 10 10 10',
    hint: 'All variables point to the same integer object.'
  },
  {
    id: 'py_var_8',
    topicId: 'py_var',
    question: 'What is the output of `x = 5; y = 2; print(x / y)`?',
    mathSolution: '2.5 (float division)',
    codeSolution: 'x = 5; y = 2; print(x / y)  # 2.5',
    hint: '`/` always returns a float in Python 3.'
  },
  {
    id: 'py_var_9',
    topicId: 'py_var',
    question: 'What is the result of `x = 5 // 2`?',
    mathSolution: '2 (integer division)',
    codeSolution: 'x = 5 // 2\nprint(x)  # 2',
    hint: '`//` performs floor division (integer division).'
  },
  {
    id: 'py_var_10',
    topicId: 'py_var',
    question: 'How do you check the memory address of a variable?',
    mathSolution: 'Use id() function',
    codeSolution: 'x = 10\nprint(id(x))  # e.g., 140736524987872',
    hint: '`id()` returns the unique identifier (memory address) of an object.'
  },
  {
    id: 'py_var_11',
    topicId: 'py_var',
    question: 'What will be the output of `x = 10; y = x; x = 20; print(y)`?',
    mathSolution: '10 (integers are immutable, y still refers to original 10)',
    codeSolution: 'x = 10\ny = x\nx = 20\nprint(y)  # 10',
    hint: 'Integers are immutable; reassigning x creates a new object.'
  },
  {
    id: 'py_var_12',
    topicId: 'py_var',
    question: 'What is the difference between `==` and `is`?',
    mathSolution: '== checks value equality, is checks identity (same object)',
    codeSolution: 'a = [1,2]; b = [1,2]\nprint(a == b)  # True\nprint(a is b)  # False',
    hint: '`==` compares content, `is` compares memory location.'
  },
  {
    id: 'py_var_13',
    topicId: 'py_var',
    question: 'How do you delete a variable?',
    mathSolution: 'Use del statement',
    codeSolution: 'x = 5\ndel x\n# print(x) would raise NameError',
    hint: '`del` removes the reference to an object.'
  },
  {
    id: 'py_var_14',
    topicId: 'py_var',
    question: 'What is the output of `x = None; print(x is None)`?',
    mathSolution: 'True',
    codeSolution: 'x = None\nprint(x is None)  # True',
    hint: '`None` is a singleton, so `is` works for comparison.'
  },
  {
    id: 'py_var_15',
    topicId: 'py_var',
    question: 'How do you create a constant variable in Python?',
    mathSolution: 'There is no built-in constant, but by convention use uppercase names.',
    codeSolution: 'PI = 3.14159  # Convention: treat as constant',
    hint: 'Uppercase names indicate a constant by convention.'
  },
  {
    id: 'py_var_16',
    topicId: 'py_var',
    question: 'What will be the output of `x = "5"; y = 2; print(x * y)`?',
    mathSolution: '"55" (string repetition)',
    codeSolution: 'x = "5"; y = 2; print(x * y)  # 55',
    hint: 'Multiplying a string repeats it.'
  },
  {
    id: 'py_var_17',
    topicId: 'py_var',
    question: 'How do you get the type of a variable?',
    mathSolution: 'Use type() function',
    codeSolution: 'var = 3.14\nprint(type(var))  # <class \'float\'>',
    hint: '`type()` returns the type of the object.'
  },
  {
    id: 'py_var_18',
    topicId: 'py_var',
    question: 'What is the output of `print(0.1 + 0.2 == 0.3)`?',
    mathSolution: 'False (due to floating point precision; 0.1 + 0.2 = 0.30000000000000004)',
    codeSolution: 'print(0.1 + 0.2 == 0.3)  # False',
    hint: 'Floating point arithmetic can have small precision errors.'
  },
  {
    id: 'py_var_19',
    topicId: 'py_var',
    question: 'How do you assign values to multiple variables from a list?',
    mathSolution: 'Use unpacking: a, b, c = [1, 2, 3]',
    codeSolution: 'lst = [1, 2, 3]\na, b, c = lst\nprint(a, b, c)  # 1 2 3',
    hint: 'The number of variables must match the list length.'
  },
  {
  id: 'py_var_20',
  topicId: 'py_var',
  question: 'How can you store and reuse the result of a previous calculation in a Python script?',
  mathSolution: 'Assign the result of an expression to a variable and reuse it later.',
  codeSolution: 'result = 5 + 3\nprint(result) #8\nprint(result * 2)#16',
  hint: 'Use variables to store intermediate results in scripts instead of `_`.'
},
  {
    id: 'py_var_21',
    topicId: 'py_var',
    question: 'How do you convert a float to an integer?',
    mathSolution: 'Use int() which truncates toward zero.',
    codeSolution: 'f = 3.9\ni = int(f)\nprint(i)  # 3',
    hint: '`int()` truncates decimal part, does not round.'
  },
  {
    id: 'py_var_22',
    topicId: 'py_var',
    question: 'What is the output of `x = 10; x += 5; print(x)`?',
    mathSolution: '15 (augmented assignment)',
    codeSolution: 'x = 10\nx += 5\nprint(x)  # 15',
    hint: '`+=` is shorthand for `x = x + 5`.'
  },
  {
    id: 'py_var_23',
    topicId: 'py_var',
    question: 'What will `bool(0)`, `bool(42)`, `bool("")`, `bool("Hello")` return?',
    mathSolution: 'False, True, False, True',
    codeSolution: 'print(bool(0), bool(42), bool(""), bool("Hello"))  # False True False True',
    hint: 'Zero, empty strings, None, empty collections are False.'
  },
  {
    id: 'py_var_24',
    topicId: 'py_var',
    question: 'How do you create a complex number?',
    mathSolution: 'Use j suffix: z = 3 + 4j',
    codeSolution: 'z = 3 + 4j\nprint(type(z))  # <class \'complex\'>',
    hint: 'The imaginary part uses `j` (not `i`).'
  },
  {
    id: 'py_var_25',
    topicId: 'py_var',
    question: 'What is the output of `x = 10; y = 20; x, y = y, x`?',
    mathSolution: 'Swaps values: x=20, y=10',
    codeSolution: 'x = 10; y = 20\nx, y = y, x\nprint(x, y)  # 20 10',
    hint: 'Tuple unpacking works even for swapping.'
  },
  {
    id: 'py_var_26',
    topicId: 'py_var',
    question: 'Can variable names start with an underscore?',
    mathSolution: 'Yes, e.g., _private, but it has special meaning in some contexts.',
    codeSolution: '_temp = 5  # valid',
    hint: 'Underscores are allowed, often used for "private" attributes.'
  },
  {
    id: 'py_var_27',
    topicId: 'py_var',
    question: 'What is the output of `print(10 / 3)` in Python 3?',
    mathSolution: '3.3333333333333335 (float division)',
    codeSolution: 'print(10 / 3)  # 3.3333333333333335',
    hint: '`/` always returns a float.'
  },
{
  id: 'py_var_28',
  topicId: 'py_var',
  question: 'How do you check if a variable is defined?',
  mathSolution: 'Check variable existence using try/except or by searching in locals() or globals() dictionaries.',
  codeSolution: 'try:\n    my_var\n    print("defined")\nexcept NameError:\n    print("not defined")\n\n# OR\nif "my_var" in locals() or "my_var" in globals():\n    print("defined")\nelse:\n    print("not defined")',
  hint: '`locals()` and `globals()` return dictionaries of current variable scopes.'
},
  {
    id: 'py_var_29',
    topicId: 'py_var',
    question: 'What is the result of `x = 5; y = 5; print(x is y)`?',
    mathSolution: 'True (small integers are cached)',
    codeSolution: 'x = 5; y = 5\nprint(x is y)  # True',
    hint: 'Python caches small integers (-5 to 256).'
  },
  {
    id: 'py_var_30',
    topicId: 'py_var',
    question: 'How do you create a variable that holds a function?',
    mathSolution: 'Assign function name without parentheses.',
    codeSolution: 'def greet():\n    return "Hello"\nmy_func = greet\nprint(my_func())  # Hello',
    hint: 'Functions are first-class objects and can be assigned.'
  },
  {
    id: 'py_var_31',
    topicId: 'py_var',
    question: 'What is the difference between global and local variables?',
    mathSolution: 'Global declared outside functions, local inside functions.',
    codeSolution: 'x = 10  # global\ndef func():\n    y = 5  # local\n    print(x, y)',
    hint: 'Local variables exist only inside the function.'
  },
  {
    id: 'py_var_32',
    topicId: 'py_var',
    question: 'How do you modify a global variable inside a function?',
    mathSolution: 'Use global keyword.',
    codeSolution: 'x = 10\ndef change():\n    global x\n    x = 20\nchange()\nprint(x)  # 20',
    hint: 'Without `global`, you would create a new local variable.'
  },
  {
    id: 'py_var_33',
    topicId: 'py_var',
    question: 'What will `a, *b, c = [1,2,3,4,5]` do?',
    mathSolution: 'a=1, b=[2,3,4], c=5 (extended unpacking)',
    codeSolution: 'a, *b, c = [1,2,3,4,5]\nprint(a, b, c)  # 1 [2, 3, 4] 5',
    hint: '`*b` collects the middle elements into a list.'
  },
  {
    id: 'py_var_34',
    topicId: 'py_var',
    question: 'What is the output of `x = "Hello"; x[0] = "h"`?',
    mathSolution: 'Error: strings are immutable',
    codeSolution: '# x[0] = "h" raises TypeError',
    hint: 'Strings cannot be modified in place.'
  },
  {
    id: 'py_var_35',
    topicId: 'py_var',
    question: 'How do you convert a number to a string?',
    mathSolution: 'Use str()',
    codeSolution: 'num = 123\ns = str(num)\nprint(s)  # "123"',
    hint: '`str()` converts to string representation.'
  },
  {
    id: 'py_var_36',
    topicId: 'py_var',
    question: 'What is the output of `print(10 ** 0.5)`?',
    mathSolution: '3.1622776601683795 (square root)',
    codeSolution: 'print(10 ** 0.5)  # 3.1622776601683795',
    hint: 'Raising to the power of 0.5 gives the square root.'
  },
  {
    id: 'py_var_37',
    topicId: 'py_var',
    question: 'How do you write a multi-line variable assignment?',
    mathSolution: 'Use backslash or parentheses.',
    codeSolution: 'total = (1 + 2 + 3 +\n         4 + 5)',
    hint: 'Parentheses allow line continuation.'
  },
  {
    id: 'py_var_38',
    topicId: 'py_var',
    question: 'What will `x = 3; y = 4; z = x ** 2 + y ** 2` compute?',
    mathSolution: '25 (3^2 + 4^2)',
    codeSolution: 'x = 3; y = 4; z = x**2 + y**2\nprint(z)  # 25',
    hint: 'It calculates the sum of squares (Pythagorean theorem).'
  },
  {
    id: 'py_var_39',
    topicId: 'py_var',
    question: 'What is the type of `x` after `x = 3 + 4j`?',
    mathSolution: 'complex',
    codeSolution: 'x = 3 + 4j\nprint(type(x))  # <class \'complex\'>',
    hint: 'Numbers with `j` are complex type.'
  },
 
  //DataType
  {
    id: "py_dty_1",
    topicId: "py_dty",
    question: "Create an integer variable and print its type.",
    mathSolution: "Integer stores whole numbers",
    codeSolution: "x = 10\nprint(type(x))  # <class 'int'>",
    hint: "Use type() function"
},
{
    id: "py_dty_2",
    topicId: "py_dty",
    question: "Create a float variable and print its type.",
    mathSolution: "Float stores decimal numbers",
    codeSolution: "x = 10.5\nprint(type(x))  # <class 'float'>",
    hint: "Use decimal point"
},
{
    id: "py_dty_3",
    topicId: "py_dty",
    question: "Create a string variable and print its type.",
    mathSolution: "String stores text",
    codeSolution: "x = 'Hello'\nprint(type(x))  # <class 'str'>",
    hint: "Use quotes"
},
{
    id: "py_dty_4",
    topicId: "py_dty",
    question: "Create a boolean variable and print its type.",
    mathSolution: "Boolean stores True/False",
    codeSolution: "x = True\nprint(type(x))  # <class 'bool'>",
    hint: "Use True or False"
},
{
    id: "py_dty_5",
    topicId: "py_dty",
    question: "Convert integer 50 to float and print result.",
    mathSolution: "Use float() function",
    codeSolution: "num = 50\nresult = float(num)\nprint(result)  # 50.0\nprint(type(result))",
    hint: "float() converts to decimal"
},
{
    id: "py_dty_6",
    topicId: "py_dty",
    question: "Convert string '100' to integer and print.",
    mathSolution: "Use int() function",
    codeSolution: "s = '100'\nnum = int(s)\nprint(num)  # 100\nprint(type(num))",
    hint: "int() converts to whole number"
},
{
    id: "py_dty_7",
    topicId: "py_dty",
    question: "Convert float 7.8 to integer and print.",
    mathSolution: "int() truncates decimal part",
    codeSolution: "x = 7.8\nresult = int(x)\nprint(result)  # 7",
    hint: "int() removes decimal"
},
{
    id: "py_dty_8",
    topicId: "py_dty",
    question: "Convert integer 65 to string and print.",
    mathSolution: "Use str() function",
    codeSolution: "num = 65\nresult = str(num)\nprint(result)  # '65'\nprint(type(result))",
    hint: "str() converts to text"
},
{
    id: "py_dty_9",
    topicId: "py_dty",
    question: "Check if variable is integer using isinstance().",
    mathSolution: "isinstance() checks type",
    codeSolution: "x = 10\nresult = isinstance(x, int)\nprint(result)  # True",
    hint: "isinstance(obj, type)"
},
{
    id: "py_dty_10",
    topicId: "py_dty",
    question: "Create a list with integers and print it.",
    mathSolution: "List stores multiple items",
    codeSolution: "numbers = [1, 2, 3, 4, 5]\nprint(numbers)\nprint(type(numbers))",
    hint: "Use square brackets"
},
{
    id: "py_dty_11",
    topicId: "py_dty",
    question: "Create a tuple with three strings and print.",
    mathSolution: "Tuple is immutable sequence",
    codeSolution: "colors = ('red', 'green', 'blue')\nprint(colors)\nprint(type(colors))",
    hint: "Use parentheses"
},
{
    id: "py_dty_12",
    topicId: "py_dty",
    question: "Create a dictionary with name and age.",
    mathSolution: "Dictionary stores key-value pairs",
    codeSolution: "person = {'name': 'Alice', 'age': 25}\nprint(person)\nprint(type(person))",
    hint: "Use curly braces with colons"
},
{
    id: "py_dty_13",
    topicId: "py_dty",
    question: "Create a set of numbers 1,2,3,3 and print (duplicate removed).",
    mathSolution: "Set stores unique values",
    codeSolution: "numbers = {1, 2, 3, 3}\nprint(numbers)  # {1, 2, 3}",
    hint: "Sets remove duplicates"
},
{
    id: "py_dty_14",
    topicId: "py_dty",
    question: "Create a None variable and print its type.",
    mathSolution: "None represents no value",
    codeSolution: "x = None\nprint(type(x))  # <class 'NoneType'>",
    hint: "None is singleton"
},
{
    id: "py_dty_15",
    topicId: "py_dty",
    question: "Create a complex number 3+4j and print its real and imaginary parts.",
    mathSolution: "Complex has real and imaginary parts",
    codeSolution: "c = 3 + 4j\nprint(f'Real: {c.real}, Imaginary: {c.imag}')",
    hint: "Use .real and .imag"
},
{
    id: "py_dty_16",
    topicId: "py_dty",
    question: "Convert list [1,2,2,3,3,4] to set to remove duplicates.",
    mathSolution: "set() removes duplicates",
    codeSolution: "my_list = [1, 2, 2, 3, 3, 4]\nmy_set = set(my_list)\nprint(my_set)  # {1, 2, 3, 4}",
    hint: "set(list) removes duplicates"
},
{
    id: "py_dty_17",
    topicId: "py_dty",
    question: "Convert set {1,2,3} back to list.",
    mathSolution: "list() converts set to list",
    codeSolution: "my_set = {1, 2, 3}\nmy_list = list(my_set)\nprint(my_list)  # [1, 2, 3]",
    hint: "list(set) converts"
},
{
    id: "py_dty_18",
    topicId: "py_dty",
    question: "Create a range from 0 to 4 and convert to list.",
    mathSolution: "range generates sequence",
    codeSolution: "r = range(5)\nmy_list = list(r)\nprint(my_list)  # [0, 1, 2, 3, 4]",
    hint: "range(stop) gives 0 to stop-1"
},
{
    id: "py_dty_19",
    topicId: "py_dty",
    question: "Check if 'hello' is string type.",
    mathSolution: "isinstance() for type checking",
    codeSolution: "x = 'hello'\nresult = isinstance(x, str)\nprint(result)  # True",
    hint: "isinstance(x, str)"
},
{
    id: "py_dty_20",
    topicId: "py_dty",
    question: "Create a bytes object from string 'Python'.",
    mathSolution: "encode() converts string to bytes",
    codeSolution: "s = 'Python'\nb = s.encode()\nprint(b)  # b'Python'\nprint(type(b))",
    hint: "Use .encode()"
},
{
    id: "py_dty_21",
    topicId: "py_dty",
    question: "Convert bytes b'Hello' back to string.",
    mathSolution: "decode() converts bytes to string",
    codeSolution: "b = b'Hello'\ns = b.decode()\nprint(s)  # Hello\nprint(type(s))",
    hint: "Use .decode()"
},
{
    id: "py_dty_22",
    topicId: "py_dty",
    question: "Create an empty list and add three numbers.",
    mathSolution: "append() adds elements",
    codeSolution: "my_list = []\nmy_list.append(10)\nmy_list.append(20)\nmy_list.append(30)\nprint(my_list)  # [10, 20, 30]",
    hint: "Use append()"
},
{
    id: "py_dty_23",
    topicId: "py_dty",
    question: "Access second element from list [10,20,30,40].",
    mathSolution: "Indexing starts at 0",
    codeSolution: "my_list = [10, 20, 30, 40]\nprint(my_list[1])  # 20",
    hint: "Index 0 is first element"
},
{
    id: "py_dty_24",
    topicId: "py_dty",
    question: "Get value for key 'age' from dictionary {'name':'Bob','age':30}.",
    mathSolution: "Use square brackets with key",
    codeSolution: "person = {'name': 'Bob', 'age': 30}\nprint(person['age'])  # 30",
    hint: "dict[key] returns value"
},
{
    id: "py_dty_25",
    topicId: "py_dty",
    question: "Add new key 'city' to dictionary {'name':'Alice'}.",
    mathSolution: "Assign value to new key",
    codeSolution: "person = {'name': 'Alice'}\nperson['city'] = 'New York'\nprint(person)  # {'name': 'Alice', 'city': 'New York'}",
    hint: "dict[new_key] = value"
},
{
    id: "py_dty_26",
    topicId: "py_dty",
    question: "Check if 5 is present in set {1,2,3,4,5}.",
    mathSolution: "Use 'in' operator",
    codeSolution: "my_set = {1, 2, 3, 4, 5}\nprint(5 in my_set)  # True\nprint(10 in my_set)  # False",
    hint: "Use 'in' operator"
},
{
    id: "py_dty_27",
    topicId: "py_dty",
    question: "Get length of list [1,2,3,4,5].",
    mathSolution: "len() returns number of elements",
    codeSolution: "my_list = [1, 2, 3, 4, 5]\nprint(len(my_list))  # 5",
    hint: "Use len() function"
},
{
    id: "py_dty_28",
    topicId: "py_dty",
    question: "Convert integer 255 to binary string.",
    mathSolution: "bin() converts to binary",
    codeSolution: "num = 255\nprint(bin(num))  # 0b11111111",
    hint: "Use bin()"
},
{
    id: "py_dty_29",
    topicId: "py_dty",
    question: "Convert integer 255 to hexadecimal string.",
    mathSolution: "hex() converts to hexadecimal",
    codeSolution: "num = 255\nprint(hex(num))  # 0xff",
    hint: "Use hex()"
},
{
    id: "py_dty_30",
    topicId: "py_dty",
    question: "Check if variable is None.",
    mathSolution: "Use 'is' operator for None",
    codeSolution: "x = None\nprint(x is None)  # True\n\ny = 10\nprint(y is None)  # False",
    hint: "Use 'is None'"
},
{
    id: "py_dty_31",
    topicId: "py_dty",
    question: "Create a frozenset from list [1,2,2,3].",
    mathSolution: "frozenset creates immutable set",
    codeSolution: "my_list = [1, 2, 2, 3]\nfs = frozenset(my_list)\nprint(fs)  # frozenset({1, 2, 3})",
    hint: "frozenset() makes immutable set"
},
{
    id: "py_dty_32",
    topicId: "py_dty",
    question: "Print all keys from dictionary {'a':1,'b':2,'c':3}.",
    mathSolution: "keys() method returns keys",
    codeSolution: "d = {'a': 1, 'b': 2, 'c': 3}\nprint(list(d.keys()))  # ['a', 'b', 'c']",
    hint: "Use .keys()"
},
{
    id: "py_dty_33",
    topicId: "py_dty",
    question: "Print all values from dictionary {'x':10,'y':20}.",
    mathSolution: "values() method returns values",
    codeSolution: "d = {'x': 10, 'y': 20}\nprint(list(d.values()))  # [10, 20]",
    hint: "Use .values()"
},
{
    id: "py_dty_34",
    topicId: "py_dty",
    question: "Merge two lists [1,2] and [3,4] using + operator.",
    mathSolution: "+ concatenates lists",
    codeSolution: "list1 = [1, 2]\nlist2 = [3, 4]\nresult = list1 + list2\nprint(result)  # [1, 2, 3, 4]",
    hint: "Use + to concatenate"
},
{
    id: "py_dty_35",
    topicId: "py_dty",
    question: "Repeat list [1,2] three times using * operator.",
    mathSolution: "* repeats list",
    codeSolution: "my_list = [1, 2]\nresult = my_list * 3\nprint(result)  # [1, 2, 1, 2, 1, 2]",
    hint: "Use * for repetition"
},
{
    id: "py_dty_36",
    topicId: "py_dty",
    question: "Check if 'apple' is in tuple ('apple','banana','orange').",
    mathSolution: "Use 'in' operator",
    codeSolution: "fruits = ('apple', 'banana', 'orange')\nprint('apple' in fruits)  # True\nprint('grape' in fruits)  # False",
    hint: "Use 'in' to check membership"
},
{
    id: "py_dty_37",
    topicId: "py_dty",
    question: "Get last element of list [10,20,30,40] using negative index.",
    mathSolution: "Index -1 gives last element",
    codeSolution: "my_list = [10, 20, 30, 40]\nprint(my_list[-1])  # 40\nprint(my_list[-2])  # 30",
    hint: "Use -1 for last element"
},
{
    id: "py_dty_38",
    topicId: "py_dty",
    question: "Get slice of list [1,2,3,4,5] from index 1 to 3.",
    mathSolution: "list[start:end] extracts slice",
    codeSolution: "my_list = [1, 2, 3, 4, 5]\nresult = my_list[1:4]\nprint(result)  # [2, 3, 4]",
    hint: "slice end index is exclusive"
},
{
    id: "py_dty_39",
    topicId: "py_dty",
    question: "Remove duplicate from string 'hello' using set.",
    mathSolution: "set() removes duplicate characters",
    codeSolution: "s = 'hello'\nunique = set(s)\nprint(unique)  # {'h', 'e', 'l', 'o'}",
    hint: "Convert string to set"
},
{
    id: "py_dty_40",
    topicId: "py_dty",
    question: "Check data type of variable without printing type name.",
    mathSolution: "Use __name__ attribute",
    codeSolution: "x = 42\ny = 'text'\nz = [1, 2]\n\nprint(type(x).__name__)  # int\nprint(type(y).__name__)  # str\nprint(type(z).__name__)  # list",
    hint: "type(x).__name__ gives type as string"
},
)