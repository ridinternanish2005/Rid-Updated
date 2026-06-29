QuizData.questions.push(
  //Structure ,unions ,enum,typedef
  {
    id: 'c_structure_001',
    topicId: 'c_structure',
    question: 'Write the basic structure of a C program that includes the stdio.h header file and has a main function.',
    mathSolution: 'Basic C program structure with header and main function',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    return 0;\n}',
    hint: 'Every C program needs header files and a main function'
  },
  {
    id: 'c_structure_002',
    topicId: 'c_structure',
    question: 'Write a C program that prints "Hello, World!" using the printf function.',
    mathSolution: 'Program with printf statement inside main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
    hint: 'printf is used for output and is defined in stdio.h'
  },
  {
    id: 'c_structure_003',
    topicId: 'c_structure',
    question: 'Write a C program that includes comments explaining each part: header, main function, and return statement.',
    mathSolution: 'Program with documentation comments',
    codeSolution: '#include <stdio.h>  // Preprocessor directive: includes standard input/output library\n\nint main() {        // Main function: program execution starts here\n    // This is a comment - prints a message\n    printf("Learning C Structure");  // Statement: prints text\n    return 0;       // Return statement: indicates successful completion\n}',
    hint: 'Use // for single-line comments and /* */ for multi-line comments'
  },
 {
    id: 'c_structure_004',
    topicId: 'c_structure',
    question: 'Write a C program that uses two header files: stdio.h and string.h, and finds the length of a string.',
    mathSolution: 'Program with multiple header files using strlen()',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World";\n    int len = strlen(str);\n    printf("Length of string is: %d\\n", len);\n    return 0;\n}',
    hint: 'string.h contains strlen() function to find string length'
},
  {
    id: 'c_structure_005',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates variable declaration inside the main function.',
    mathSolution: 'Variable declaration and initialization in main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Variable declarations\n    int age = 25;\n    float salary = 55000.50;\n    char grade = \'A\';\n    \n    printf("Age: %d\\n", age);\n    printf("Salary: %.2f\\n", salary);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}',
    hint: 'Variables must be declared before they are used'
  },
  {
    id: 'c_structure_006',
    topicId: 'c_structure',
    question: 'Write a program that takes input from user using scanf and displays it using printf.',
    mathSolution: 'Program with input and output operations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int number;\n    \n    printf("Enter a number: ");\n    scanf("%d", &number);\n    \n    printf("You entered: %d", number);\n    \n    return 0;\n}',
    hint: 'scanf requires & before variable name for basic data types'
  },
  {
    id: 'c_structure_007',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of curly braces to define the body of main function.',
    mathSolution: 'Block structure with curly braces',
    codeSolution: '#include <stdio.h>\n\nint main()\n{  // Opening brace - start of block\n    printf("Curly braces define the block");\n    printf("All statements inside braces are part of main");\n    return 0;\n}  // Closing brace - end of block',
    hint: 'Curly braces {} define the scope and body of functions'
  },
  {
    id: 'c_structure_008',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the correct syntax of a C program with proper indentation.',
    mathSolution: 'Program with proper indentation and formatting',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num1 = 10;\n    int num2 = 20;\n    int sum = num1 + num2;\n    \n    if (sum > 0) {\n        printf("Sum is positive: %d\\n", sum);\n    }\n    \n    return 0;\n}',
    hint: 'Proper indentation makes code readable'
  },
  {
    id: 'c_structure_009',
    topicId: 'c_structure',
    question: 'Write a program that uses both preprocessor directives and comments at the top of the program.',
    mathSolution: 'Program with preprocessor directives and header comments',
    codeSolution: '/*\n * Program: Structure Demo\n * Author: Student\n * Description: Demonstrates preprocessor directives\n */\n\n#include <stdio.h>  // For input/output\n#define MAX 100      // Constant definition\n\nint main() {\n    printf("Maximum value: %d", MAX);\n    return 0;\n}',
    hint: 'Preprocessor directives start with # and are processed before compilation'
  },
  {
    id: 'c_structure_010',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates multiple statements in the main function.',
    mathSolution: 'Multiple sequential statements in main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 10;\n    int c;\n    \n    c = a + b;\n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    printf("Sum = %d\\n", c);\n    \n    c = a * b;\n    printf("Product = %d\\n", c);\n    \n    return 0;\n}',
    hint: 'Statements are executed sequentially in the order they appear'
  },
  {
    id: 'c_structure_011',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of escape sequences in printf statements.',
    mathSolution: 'Program with escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Line 1\\n");      // \\n for new line\n    printf("Line 2\\tTabbed\\n");  // \\t for tab\n    printf("Quote: \\"Hello\\"\\n"); // \\" for double quote\n    printf("Backslash: \\\\\\\\n");    // \\\\ for backslash\n    \n    return 0;\n}',
    hint: 'Escape sequences start with backslash (\\)'
  },
  {
    id: 'c_structure_012',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the return value of main function as 0 for success.',
    mathSolution: 'Program with return 0 statement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Program executed successfully\\n");\n    \n    return 0;  // Indicates successful completion to operating system\n}',
    hint: 'return 0 means program executed successfully, non-zero means error'
  },
  {
    id: 'c_structure_013',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of int main() with return 0.',
    mathSolution: 'Program with standard int main() function and return statement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Using int main function\\n");\n    return 0;\n}',
    hint: 'int main() is the standard entry point in C'
},
  {
    id: 'c_structure_014',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of empty main function with only return statement.',
    mathSolution: 'Minimal valid C program',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    return 0;\n}',
    hint: 'This is the smallest valid C program'
  },
  {
    id: 'c_structure_015',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of #define to create a constant and use it in main.',
    mathSolution: 'Program with #define preprocessor directive',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n#define MESSAGE "Area of Circle"\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    \n    printf("%s: %.2f", MESSAGE, area);\n    \n    return 0;\n}',
    hint: '#define creates macros that are replaced before compilation'
  },

  // ========== MULTIPLE FUNCTIONS (QUESTIONS 16-30) ==========
  {
    id: 'c_structure_016',
    topicId: 'c_structure',
    question: 'Write a program with two functions: main() and a user-defined function printMessage() that prints "Hello from function".',
    mathSolution: 'Program with multiple functions',
    codeSolution: '#include <stdio.h>\n\n// Function declaration (prototype)\nvoid printMessage();\n\nint main() {\n    printf("Calling function from main:\\n");\n    printMessage();  // Function call\n    return 0;\n}\n\n// Function definition\nvoid printMessage() {\n    printf("Hello from function\\n");\n}',
    hint: 'Functions must be declared before they are called'
  },
  {
    id: 'c_structure_017',
    topicId: 'c_structure',
    question: 'Write a program with a function that takes two integers as parameters and returns their sum.',
    mathSolution: 'Function with parameters and return value',
    codeSolution: '#include <stdio.h>\n\n// Function declaration\nint add(int a, int b);\n\nint main() {\n    int x = 15, y = 25;\n    int result = add(x, y);\n    \n    printf("%d + %d = %d\\n", x, y, result);\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}',
    hint: 'Parameters pass data to functions, return sends data back'
  },
  {
    id: 'c_structure_018',
    topicId: 'c_structure',
    question: 'Write a program with three functions: main(), getNumber(), and displayNumber(). Get input in getNumber() and display in displayNumber().',
    mathSolution: 'Program with multiple functions for input and output',
    codeSolution: '#include <stdio.h>\n\nint getNumber();\nvoid displayNumber(int num);\n\nint main() {\n    int num = getNumber();\n    displayNumber(num);\n    return 0;\n}\n\nint getNumber() {\n    int n;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    return n;\n}\n\nvoid displayNumber(int num) {\n    printf("You entered: %d\\n", num);\n}',
    hint: 'Functions can be organized for specific tasks'
  },
  {
    id: 'c_structure_019',
    topicId: 'c_structure',
    question: 'Write a program where main() calls function1(), function1() calls function2(), and function2() prints a message.',
    mathSolution: 'Nested function calls',
    codeSolution: '#include <stdio.h>\n\nvoid function1();\nvoid function2();\n\nint main() {\n    printf("Main function starts\\n");\n    function1();\n    printf("Main function ends\\n");\n    return 0;\n}\n\nvoid function1() {\n    printf("Function1 starts\\n");\n    function2();\n    printf("Function1 ends\\n");\n}\n\nvoid function2() {\n    printf("Inside Function2\\n");\n}',
    hint: 'Functions can call other functions in a chain'
  },
  {
    id: 'c_structure_020',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function prototype placed before main and function definition after main.',
    mathSolution: 'Function prototype vs definition placement',
    codeSolution: '#include <stdio.h>\n\n// Function prototypes (declarations)\nint multiply(int x, int y);\nvoid printResult(int value);\n\nint main() {\n    int a = 8, b = 7;\n    int product = multiply(a, b);\n    printResult(product);\n    return 0;\n}\n\n// Function definitions\nint multiply(int x, int y) {\n    return x * y;\n}\n\nvoid printResult(int value) {\n    printf("Result: %d\\n", value);\n}',
    hint: 'Prototypes tell compiler about functions before their definitions'
  },
  {
    id: 'c_structure_021',
    topicId: 'c_structure',
    question: 'Write a program with a function that returns nothing (void) and takes no parameters.',
    mathSolution: 'Void function with no parameters',
    codeSolution: '#include <stdio.h>\n\nvoid displayWelcome();\n\nint main() {\n    displayWelcome();\n    return 0;\n}\n\nvoid displayWelcome() {\n    printf("Welcome to C Programming!\\n");\n    printf("This function returns nothing.\\n");\n}',
    hint: 'void indicates no return value and/or no parameters'
  },
  {
    id: 'c_structure_022',
    topicId: 'c_structure',
    question: 'Write a program with a function that calculates square of a number and returns the result.',
    mathSolution: 'Function with single parameter and return value',
    codeSolution: '#include <stdio.h>\n\nfloat square(float num);\n\nint main() {\n    float number = 4.5;\n    float result = square(number);\n    \n    printf("Square of %.2f is %.2f\\n", number, result);\n    return 0;\n}\n\nfloat square(float num) {\n    return num * num;\n}',
    hint: 'Function can return any data type'
  },
  {
    id: 'c_structure_023',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates calling a function multiple times from main with different arguments.',
    mathSolution: 'Multiple function calls with different arguments',
    codeSolution: '#include <stdio.h>\n\nint max(int a, int b);\n\nint main() {\n    printf("Max of 10 and 20: %d\\n", max(10, 20));\n    printf("Max of 35 and 15: %d\\n", max(35, 15));\n    printf("Max of 40 and 40: %d\\n", max(40, 40));\n    \n    return 0;\n}\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}',
    hint: 'Functions can be called any number of times'
  },
  {
    id: 'c_structure_024',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates a function calling itself (recursion) to calculate factorial.',
    mathSolution: 'Recursive function structure',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n);\n\nint main() {\n    int num = 5;\n    int fact = factorial(num);\n    \n    printf("Factorial of %d = %d\\n", num, fact);\n    return 0;\n}\n\nint factorial(int n) {\n    if (n <= 1) {\n        return 1;  // Base case\n    }\n    return n * factorial(n - 1);  // Recursive call\n}',
    hint: 'Recursive functions call themselves with a base condition to stop'
  },
  {
    id: 'c_structure_025',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function overloading is not supported in C (show error comment).',
    mathSolution: 'C does not support function overloading',
    codeSolution: '#include <stdio.h>\n\n// C does not support function overloading\n// This will cause a compilation error if uncommented\n/*\nint add(int a, int b) {\n    return a + b;\n}\n\nfloat add(float a, float b) {  // Error: duplicate function name\n    return a + b;\n}\n*/\n\nint addInt(int a, int b) {\n    return a + b;\n}\n\nfloat addFloat(float a, float b) {\n    return a + b;\n}\n\nint main() {\n    printf("Int sum: %d\\n", addInt(5, 10));\n    printf("Float sum: %.2f\\n", addFloat(5.5, 3.7));\n    return 0;\n}',
    hint: 'In C, each function must have a unique name'
  },
  {
    id: 'c_structure_026',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates passing arrays to functions.',
    mathSolution: 'Array passing to functions',
    codeSolution: '#include <stdio.h>\n\nvoid printArray(int arr[], int size);\nint findSum(int arr[], int size);\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    printf("Array elements: ");\n    printArray(numbers, size);\n    \n    int sum = findSum(numbers, size);\n    printf("\\nSum of elements: %d\\n", sum);\n    \n    return 0;\n}\n\nvoid printArray(int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", arr[i]);\n    }\n}\n\nint findSum(int arr[], int size) {\n    int sum = 0;\n    for(int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}',
    hint: 'Arrays are passed by reference (address) to functions'
  },
  {
    id: 'c_structure_027',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates passing structures to functions.',
    mathSolution: 'Structure passing to functions',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n\nvoid displayStudent(struct Student s);\nvoid updateMarks(struct Student *s, float newMarks);\n\nint main() {\n    struct Student s1 = {101, "Alice", 85.5};\n    \n    printf("Before update:\\n");\n    displayStudent(s1);\n    \n    updateMarks(&s1, 95.5);\n    \n    printf("\\nAfter update:\\n");\n    displayStudent(s1);\n    \n    return 0;\n}\n\nvoid displayStudent(struct Student s) {\n    printf("Roll: %d, Name: %s, Marks: %.2f\\n", s.roll, s.name, s.marks);\n}\n\nvoid updateMarks(struct Student *s, float newMarks) {\n    s->marks = newMarks;\n}',
    hint: 'Structures can be passed by value or by reference using pointers'
  },
  {
    id: 'c_structure_028',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function returning a structure.',
    mathSolution: 'Function returning structure',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n\nstruct Student createStudent(int r, char n[], float m);\n\nint main() {\n    struct Student s1 = createStudent(102, "Bob", 78.5);\n    \n    printf("Roll: %d\\n", s1.roll);\n    printf("Name: %s\\n", s1.name);\n    printf("Marks: %.2f\\n", s1.marks);\n    \n    return 0;\n}\n\nstruct Student createStudent(int r, char n[], float m) {\n    struct Student s;\n    s.roll = r;\n    strcpy(s.name, n);\n    s.marks = m;\n    return s;\n}',
    hint: 'Functions can return structures'
  },
 {
    id: 'c_structure_029',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates macro and inline function concept in C.',
    mathSolution: 'Macro vs Inline function concept',
    codeSolution: '#include <stdio.h>\n\n// Macro (works like inline but text substitution)\n#define SQUARE(x) ((x) * (x))\n\n// Static inline function (better compatibility)\nstatic inline int cube(int x) {\n    return x * x * x;\n}\n\nint main() {\n    int num = 5;\n    \n    printf("Square of %d: %d (using macro)\\n", num, SQUARE(num));\n    printf("Cube of %d: %d (using inline function)\\n", num, cube(num));\n    \n    return 0;\n}',
    hint: 'Use static inline for better compatibility with C89/C99 compilers'
},
  {
    id: 'c_structure_030',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates nested functions (not standard C, GCC extension).',
    mathSolution: 'Nested functions (GCC extension)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Demonstrating nested function (GCC extension):\\n");\n    \n    // Nested function definition (GCC specific)\n    void innerFunction() {\n        printf("This is inner function\\n");\n    }\n    \n    innerFunction();\n    \n    return 0;\n}',
    hint: 'Nested functions are not standard C, but supported in GCC'
  },

  // ========== GLOBAL VARIABLES (QUESTIONS 31-40) ==========
  {
    id: 'c_structure_031',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global variable declared outside all functions.',
    mathSolution: 'Global variable declaration and usage',
    codeSolution: '#include <stdio.h>\n\n// Global variable\nint globalCount = 0;\n\nvoid increment();\nvoid display();\n\nint main() {\n    printf("Initial global count: %d\\n", globalCount);\n    \n    increment();\n    increment();\n    display();\n    \n    globalCount = 100;  // Can be modified directly\n    printf("Modified in main: %d\\n", globalCount);\n    \n    return 0;\n}\n\nvoid increment() {\n    globalCount++;  // Accessing global variable\n}\n\nvoid display() {\n    printf("Current global count: %d\\n", globalCount);\n}',
    hint: 'Global variables are accessible to all functions'
  },
  {
    id: 'c_structure_032',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates local variable with same name as global variable.',
    mathSolution: 'Local vs Global variable with same name',
    codeSolution: '#include <stdio.h>\n\nint value = 100;  // Global variable\n\nint main() {\n    int value = 200;  // Local variable - hides global\n    \n    printf("Local value: %d\\n", value);\n    \n    // Access global variable using extern\n    {\n        extern int value;\n        printf("Global value: %d\\n", value);\n    }\n    \n    return 0;\n}',
    hint: 'Local variable takes precedence over global with same name'
  },
  {
    id: 'c_structure_033',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static global variable limited to file scope.',
    mathSolution: 'Static global variable',
    codeSolution: '#include <stdio.h>\n\nstatic int fileScopeVar = 50;  // Static global - visible only in this file\n\nvoid function1() {\n    printf("In function1: %d\\n", fileScopeVar);\n}\n\nvoid function2() {\n    printf("In function2: %d\\n", fileScopeVar);\n}\n\nint main() {\n    function1();\n    function2();\n    \n    fileScopeVar = 200;\n    printf("After change in main: %d\\n", fileScopeVar);\n    \n    return 0;\n}',
    hint: 'static global variables have file scope only'
  },
  {
    id: 'c_structure_034',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates initialization of global and local variables.',
    mathSolution: 'Variable initialization differences',
    codeSolution: '#include <stdio.h>\n\nint globalInt;        // Automatically initialized to 0\nfloat globalFloat;    // Automatically initialized to 0.0\nchar globalChar;      // Automatically initialized to \'\\0\'\n\nint main() {\n    int localInt;      // Uninitialized - contains garbage\n    float localFloat;  // Uninitialized - contains garbage\n    char localChar;    // Uninitialized - contains garbage\n    \n    printf("Global int: %d\\n", globalInt);\n    printf("Global float: %f\\n", globalFloat);\n    printf("Global char: [%d]\\n", globalChar);\n    \n    printf("Local int: %d\\n", localInt);\n    printf("Local float: %f\\n", localFloat);\n    printf("Local char: [%d]\\n", localChar);\n    \n    return 0;\n}',
    hint: 'Global variables are automatically initialized to zero, locals are not'
  },
  {
    id: 'c_structure_035',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates multiple global variables across different data types.',
    mathSolution: 'Multiple global variables',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\n// Multiple global variables\nint studentCount = 0;\nfloat averageMarks = 0.0;\nchar schoolName[50] = "ABC School";\nconst int MAX_STUDENTS = 100;\n\nvoid addStudent();\nvoid displaySchoolInfo();\n\nint main() {\n    displaySchoolInfo();\n    \n    addStudent();\n    addStudent();\n    \n    printf("\\nAfter adding students:\\n");\n    printf("Student count: %d\\n", studentCount);\n    \n    return 0;\n}\n\nvoid addStudent() {\n    studentCount++;\n}\n\nvoid displaySchoolInfo() {\n    printf("School: %s\\n", schoolName);\n    printf("Max students: %d\\n", MAX_STUDENTS);\n    printf("Current students: %d\\n", studentCount);\n}',
    hint: 'Global variables can be of any data type'
  },
  {
    id: 'c_structure_036',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global variable modification in multiple functions.',
    mathSolution: 'Global variable modification across functions',
    codeSolution: '#include <stdio.h>\n\nint counter = 0;\n\nvoid incrementBy1() {\n    counter += 1;\n    printf("Incremented by 1: %d\\n", counter);\n}\n\nvoid incrementBy5() {\n    counter += 5;\n    printf("Incremented by 5: %d\\n", counter);\n}\n\nvoid decrementBy2() {\n    counter -= 2;\n    printf("Decremented by 2: %d\\n", counter);\n}\n\nvoid reset() {\n    counter = 0;\n    printf("Reset to: %d\\n", counter);\n}\n\nint main() {\n    incrementBy1();\n    incrementBy5();\n    incrementBy1();\n    decrementBy2();\n    reset();\n    \n    return 0;\n}',
    hint: 'All functions can modify global variables'
  },
  {
    id: 'c_structure_037',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global array declaration and usage.',
    mathSolution: 'Global array in program structure',
    codeSolution: '#include <stdio.h>\n\n// Global array\nint marks[5] = {85, 90, 78, 92, 88};\nint size = 5;\n\nvoid displayMarks();\nint findAverage();\nvoid updateMark(int index, int newMark);\n\nint main() {\n    printf("Original marks: ");\n    displayMarks();\n    \n    printf("Average: %d\\n", findAverage());\n    \n    updateMark(2, 95);\n    printf("\\nAfter update: ");\n    displayMarks();\n    \n    return 0;\n}\n\nvoid displayMarks() {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", marks[i]);\n    }\n    printf("\\n");\n}\n\nint findAverage() {\n    int sum = 0;\n    for(int i = 0; i < size; i++) {\n        sum += marks[i];\n    }\n    return sum / size;\n}\n\nvoid updateMark(int index, int newMark) {\n    if(index >= 0 && index < size) {\n        marks[index] = newMark;\n    }\n}',
    hint: 'Global arrays are accessible to all functions'
  },
  {
    id: 'c_structure_038',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global pointer variable.',
    mathSolution: 'Global pointer variable',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint *globalPtr;\nint value = 100;\n\nvoid allocateAndSet();\nvoid displayValue();\nvoid freeMemory();\n\nint main() {\n    printf("Value: %d\\n", value);\n    \n    globalPtr = &value;\n    printf("Through pointer: %d\\n", *globalPtr);\n    \n    allocateAndSet();\n    displayValue();\n    freeMemory();\n    \n    return 0;\n}\n\nvoid allocateAndSet() {\n    globalPtr = (int*)malloc(sizeof(int));\n    *globalPtr = 500;\n}\n\nvoid displayValue() {\n    if(globalPtr != NULL) {\n        printf("Allocated value: %d\\n", *globalPtr);\n    }\n}\n\nvoid freeMemory() {\n    free(globalPtr);\n    globalPtr = NULL;\n}',
    hint: 'Global pointers can be used across functions for dynamic memory'
  },
  {
    id: 'c_structure_039',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global structure variable.',
    mathSolution: 'Global structure variable',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Employee {\n    int id;\n    char name[50];\n    float salary;\n};\n\n// Global structure variable\nstruct Employee emp;\n\nvoid inputEmployee();\nvoid displayEmployee();\nvoid giveHike(float percentage);\n\nint main() {\n    inputEmployee();\n    printf("\\nOriginal details:\\n");\n    displayEmployee();\n    \n    giveHike(10);\n    printf("\\nAfter hike:\\n");\n    displayEmployee();\n    \n    return 0;\n}\n\nvoid inputEmployee() {\n    emp.id = 1001;\n    strcpy(emp.name, "John Doe");\n    emp.salary = 50000.0;\n}\n\nvoid displayEmployee() {\n    printf("ID: %d\\n", emp.id);\n    printf("Name: %s\\n", emp.name);\n    printf("Salary: %.2f\\n", emp.salary);\n}\n\nvoid giveHike(float percentage) {\n    emp.salary += emp.salary * percentage / 100;\n}',
    hint: 'Global structures can be accessed and modified by any function'
  },
  {
    id: 'c_structure_040',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global constant variable.',
    mathSolution: 'Global const variable',
    codeSolution: '#include <stdio.h>\n\n// Global constants\nconst float TAX_RATE = 0.18;\nconst int MAX_EMPLOYEES = 50;\nconst char COMPANY[] = "Tech Solutions";\n\nfloat calculateTax(float amount);\nvoid displayCompanyInfo();\n\nint main() {\n    displayCompanyInfo();\n    \n    float amount = 10000;\n    float tax = calculateTax(amount);\n    \n    printf("Amount: %.2f\\n", amount);\n    printf("Tax (%.0f%%): %.2f\\n", TAX_RATE * 100, tax);\n    printf("Total: %.2f\\n", amount + tax);\n    \n    return 0;\n}\n\nfloat calculateTax(float amount) {\n    return amount * TAX_RATE;\n}\n\nvoid displayCompanyInfo() {\n    printf("Company: %s\\n", COMPANY);\n    printf("Max Employees: %d\\n", MAX_EMPLOYEES);\n}',
    hint: 'Global constants cannot be modified'
  },
//unions
 {
    id: 'c_union_01',
    topicId: 'c_unions',
    question: 'Write a program to declare a union with int and float members and show the size.',
    mathSolution: 'All members share same memory location, size equals largest member',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    printf("Size of union: %zu bytes\\n", sizeof(d));\n    printf("Size of int: %zu, Size of float: %zu\\n", sizeof(int), sizeof(float));\n    return 0;\n}',
    hint: 'Union size equals largest member size'
  },
  {
    id: 'c_union_02',
    topicId: 'c_unions',
    question: 'Write a program to create union variable and access integer member.',
    mathSolution: 'Store integer in union and display',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printf("Integer value: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Use dot operator to access members'
  },
  {
    id: 'c_union_03',
    topicId: 'c_unions',
    question: 'Write a program to store and retrieve float value from union.',
    mathSolution: 'Store float and display',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    d.f = 3.14159f;\n    printf("Float value: %.5f\\n", d.f);\n    return 0;\n}',
    hint: 'Union can store different types at different times'
  },
  {
    id: 'c_union_04',
    topicId: 'c_unions',
    question: 'Write a program to show that union shares memory between members.',
    mathSolution: 'Store int, then float overwrites',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printf("Integer: %d\\n", d.i);\n    d.f = 3.14f;\n    printf("Float: %.2f\\n", d.f);\n    printf("Integer after float overwrite: %d (garbage)\\n", d.i);\n    return 0;\n}',
    hint: 'Writing one member affects the other'
  },
  {
    id: 'c_union_05',
    topicId: 'c_unions',
    question: 'Write a program to compare struct and union memory usage.',
    mathSolution: 'Struct uses sum of members, union uses max',
    codeSolution: '#include <stdio.h>\n\nstruct StructData {\n    int i;\n    float f;\n    char c;\n};\n\nunion UnionData {\n    int i;\n    float f;\n    char c;\n};\n\nint main() {\n    printf("Size of struct: %zu bytes\\n", sizeof(struct StructData));\n    printf("Size of union: %zu bytes\\n", sizeof(union UnionData));\n    return 0;\n}',
    hint: 'Union saves memory compared to struct'
  },
  {
    id: 'c_union_06',
    topicId: 'c_unions',
    question: 'Write a program to create typedef for union.',
    mathSolution: 'Use typedef for easier syntax',
    codeSolution: '#include <stdio.h>\n\ntypedef union {\n    int i;\n    float f;\n} Data;\n\nint main() {\n    Data d;\n    d.i = 100;\n    printf("Value: %d\\n", d.i);\n    return 0;\n}',
    hint: 'typedef creates alias for union'
  },
  {
    id: 'c_union_07',
    topicId: 'c_unions',
    question: 'Write a program to initialize union with first member.',
    mathSolution: 'Only first member can be initialized directly',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d = {42};\n    printf("Initialized integer: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Initialization sets first member'
  },
  {
    id: 'c_union_08',
    topicId: 'c_unions',
    question: 'Write a program to initialize union using designated initializer (C99).',
    mathSolution: 'Specify which member to initialize',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d = {.f = 3.14159f};\n    printf("Initialized float: %.5f\\n", d.f);\n    return 0;\n}',
    hint: 'Designated initializers specify member name'
  },
  {
    id: 'c_union_09',
    topicId: 'c_unions',
    question: 'Write a program to create union with array and structure members.',
    mathSolution: 'Union can contain complex types',
    codeSolution: '#include <stdio.h>\n\nunion Mixed {\n    int arr[4];\n    struct {\n        int a;\n        int b;\n        int c;\n        int d;\n    };\n};\n\nint main() {\n    union Mixed u;\n    u.arr[0] = 10;\n    u.arr[1] = 20;\n    u.arr[2] = 30;\n    u.arr[3] = 40;\n    printf("a=%d, b=%d, c=%d, d=%d\\n", u.a, u.b, u.c, u.d);\n    return 0;\n}',
    hint: 'Array and structure share same memory'
  },
  {
    id: 'c_union_10',
    topicId: 'c_unions',
    question: 'Write a program to embed union inside structure.',
    mathSolution: 'Structure containing union for variant data',
    codeSolution: '#include <stdio.h>\n\nstruct Variant {\n    int type;\n    union {\n        int i;\n        float f;\n        char c;\n    } data;\n};\n\nint main() {\n    struct Variant v;\n    v.type = 1;\n    v.data.i = 42;\n    printf("Type: %d, Value: %d\\n", v.type, v.data.i);\n    return 0;\n}',
    hint: 'Structure member dot then union dot'
  },

  // ========== TYPE PUNNING AND BYTE ACCESS (11-20) ==========
  {
    id: 'c_union_11',
    topicId: 'c_unions',
    question: 'Write a program to check system endianness using union.',
    mathSolution: 'Store int, check first byte',
    codeSolution: '#include <stdio.h>\n\nunion Endian {\n    int i;\n    char c[4];\n};\n\nint main() {\n    union Endian u;\n    u.i = 1;\n    if(u.c[0] == 1)\n        printf("Little Endian\\n");\n    else\n        printf("Big Endian\\n");\n    return 0;\n}',
    hint: 'First byte (LSB) tells endianness'
  },
  {
    id: 'c_union_12',
    topicId: 'c_unions',
    question: 'Write a program to split 32-bit integer into bytes using union.',
    mathSolution: 'Union with int and byte array',
    codeSolution: '#include <stdio.h>\n\nunion IntBytes {\n    unsigned int i;\n    unsigned char bytes[4];\n};\n\nint main() {\n    union IntBytes u;\n    u.i = 0x12345678;\n    printf("Integer: 0x%x\\n", u.i);\n    printf("Bytes: %02x %02x %02x %02x\\n", u.bytes[0], u.bytes[1], u.bytes[2], u.bytes[3]);\n    return 0;\n}',
    hint: 'Bytes appear in memory order'
  },
  {
    id: 'c_union_13',
    topicId: 'c_unions',
    question: 'Write a program to get IEEE representation of float using union.',
    mathSolution: 'Store float, read as int',
    codeSolution: '#include <stdio.h>\n\nunion FloatBits {\n    float f;\n    unsigned int i;\n};\n\nint main() {\n    union FloatBits u;\n    u.f = 3.14159f;\n    printf("Float: %f\\n", u.f);\n    printf("Hex representation: 0x%08x\\n", u.i);\n    return 0;\n}',
    hint: 'Same bits interpreted differently'
  },
  {
    id: 'c_union_14',
    topicId: 'c_unions',
    question: 'Write a program to store and retrieve string in union.',
    mathSolution: 'Union with character array',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nunion StringUnion {\n    char str[20];\n    int i;\n};\n\nint main() {\n    union StringUnion u;\n    strcpy(u.str, "Hello\");\n    printf("String: %s\\n\", u.str);\n    return 0;\n}',
    hint: 'Character array holds string'
  },
  {
    id: 'c_union_15',
    topicId: 'c_unions',
    question: 'Write a program to create union with pointer members.',
    mathSolution: 'Store different pointer types',
    codeSolution: '#include <stdio.h>\n\nunion Pointers {\n    int *ip;\n    float *fp;\n    char *cp;\n};\n\nint main() {\n    union Pointers p;\n    int x = 10;\n    p.ip = &x;\n    printf("Value via int pointer: %d\\n", *p.ip);\n    return 0;\n}',
    hint: 'Pointers stored in union share memory'
  },
  {
    id: 'c_union_16',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for RGB color manipulation.',
    mathSolution: 'Access as int or separate channels',
    codeSolution: '#include <stdio.h>\n\nunion Color {\n    unsigned int rgba;\n    struct {\n        unsigned char r;\n        unsigned char g;\n        unsigned char b;\n        unsigned char a;\n    } channels;\n};\n\nint main() {\n    union Color c;\n    c.channels.r = 255;\n    c.channels.g = 128;\n    c.channels.b = 64;\n    c.channels.a = 255;\n    printf("RGBA: #%02x%02x%02x%02x\\n", c.channels.r, c.channels.g, c.channels.b, c.channels.a);\n    return 0;\n}',
    hint: 'Union allows different views of same data'
  },
  {
    id: 'c_union_17',
    topicId: 'c_unions',
    question: 'Write a program to handle different sensor readings using union.',
    mathSolution: 'Variant union for different sensor types',
    codeSolution: '#include <stdio.h>\n\nstruct SensorReading {\n    int sensor_type;\n    union {\n        int int_value;\n        float float_value;\n    } data;\n};\n\nint main() {\n    struct SensorReading s1 = {1, .data.int_value = 42};\n    struct SensorReading s2 = {2, .data.float_value = 3.14f};\n    printf("Sensor1 (type %d): %d\\n", s1.sensor_type, s1.data.int_value);\n    printf("Sensor2 (type %d): %.2f\\n", s2.sensor_type, s2.data.float_value);\n    return 0;\n}',
    hint: 'Sensor type determines which union member to use'
  },
  {
    id: 'c_union_18',
    topicId: 'c_unions',
    question: 'Write a program to create array of unions.',
    mathSolution: 'Each array element is a union',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data arr[3];\n    arr[0].i = 10;\n    arr[1].f = 20.5f;\n    arr[2].i = 30;\n    printf("arr[0]: %d\\n", arr[0].i);\n    printf("arr[1]: %.1f\\n", arr[1].f);\n    printf("arr[2]: %d\\n", arr[2].i);\n    return 0;\n}',
    hint: 'Array of unions, each holds its own value'
  },
  {
    id: 'c_union_19',
    topicId: 'c_unions',
    question: 'Write a program to use pointer to union.',
    mathSolution: 'Pointer can access union members',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data d;\n    union Data *ptr = &d;\n    ptr->i = 100;\n    printf("Value via pointer: %d\\n", ptr->i);\n    return 0;\n}',
    hint: 'Arrow operator for pointer access'
  },
  {
    id: 'c_union_20',
    topicId: 'c_unions',
    question: 'Write a program to dynamically allocate union.',
    mathSolution: 'Use malloc to allocate union on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data *ptr = (union Data*)malloc(sizeof(union Data));\n    if(ptr != NULL) {\n        ptr->i = 42;\n        printf("Dynamically allocated union value: %d\\n", ptr->i);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'Always check malloc return value'
  },

  // ========== TAGGED UNIONS (21-30) ==========
  {
    id: 'c_union_21',
    topicId: 'c_unions',
    question: 'Write a program to create tagged union (discriminated union).',
    mathSolution: 'Enum tag tracks active union member',
    codeSolution: '#include <stdio.h>\n\nenum Type { INT_TYPE, FLOAT_TYPE };\n\nstruct TaggedUnion {\n    enum Type tag;\n    union {\n        int int_val;\n        float float_val;\n    } data;\n};\n\nint main() {\n    struct TaggedUnion v1 = {INT_TYPE, .data.int_val = 42};\n    struct TaggedUnion v2 = {FLOAT_TYPE, .data.float_val = 3.14f};\n    printf("v1: type=int, value=%d\\n", v1.data.int_val);\n    printf("v2: type=float, value=%.2f\\n", v2.data.float_val);\n    return 0;\n}',
    hint: 'Tag tells which union member is active'
  },
  {
    id: 'c_union_22',
    topicId: 'c_unions',
    question: 'Write a program to process tagged union safely.',
    mathSolution: 'Switch on tag before accessing',
    codeSolution: '#include <stdio.h>\n\nenum Type { INT_TYPE, FLOAT_TYPE };\n\nstruct TaggedUnion {\n    enum Type tag;\n    union {\n        int int_val;\n        float float_val;\n    } data;\n};\n\nvoid printValue(struct TaggedUnion v) {\n    switch(v.tag) {\n        case INT_TYPE:\n            printf("Integer: %d\\n", v.data.int_val);\n            break;\n        case FLOAT_TYPE:\n            printf("Float: %.2f\\n", v.data.float_val);\n            break;\n    }\n}\n\nint main() {\n    struct TaggedUnion v = {INT_TYPE, .data.int_val = 100};\n    printValue(v);\n    return 0;\n}',
    hint: 'Always check tag before using union member'
  },
  {
    id: 'c_union_23',
    topicId: 'c_unions',
    question: 'Write a program to create array of tagged unions.',
    mathSolution: 'Each array element has its own tag',
    codeSolution: '#include <stdio.h>\n\nenum Type { INT_TYPE, FLOAT_TYPE };\n\nstruct TaggedUnion {\n    enum Type tag;\n    union {\n        int int_val;\n        float float_val;\n    } data;\n};\n\nint main() {\n    struct TaggedUnion arr[3];\n    arr[0].tag = INT_TYPE;\n    arr[0].data.int_val = 10;\n    arr[1].tag = FLOAT_TYPE;\n    arr[1].data.float_val = 20.5f;\n    arr[2].tag = INT_TYPE;\n    arr[2].data.int_val = 30;\n    for(int i = 0; i < 3; i++) {\n        if(arr[i].tag == INT_TYPE)\n            printf("arr[%d]: int %d\\n\", i, arr[i].data.int_val);\n        else\n            printf(\"arr[%d]: float %.1f\\n\", i, arr[i].data.float_val);\n    }\n    return 0;\n}',
    hint: 'Each element can have different active member'
  },
  {
    id: 'c_union_24',
    topicId: 'c_unions',
    question: 'Write a program to create union with bit fields for flag manipulation.',
    mathSolution: 'Access individual bits via structure',
    codeSolution: '#include <stdio.h>\n\nunion Flags {\n    unsigned int value;\n    struct {\n        unsigned int flag1:1;\n        unsigned int flag2:1;\n        unsigned int flag3:1;\n        unsigned int flag4:1;\n    } bits;\n};\n\nint main() {\n    union Flags f;\n    f.value = 0;\n    f.bits.flag1 = 1;\n    f.bits.flag3 = 1;\n    printf("Value: %u (binary: ", f.value);\n    for(int i = 3; i >= 0; i--)\n        printf("%d\", (f.value >> i) & 1);\n    printf(")\\n\");\n    return 0;\n}',
    hint: 'Bit fields allow easy flag manipulation'
  },
  {
    id: 'c_union_25',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for IP address representation.',
    mathSolution: 'Access as 32-bit integer or 4 bytes',
    codeSolution: '#include <stdio.h>\n\nunion IPAddress {\n    unsigned int addr;\n    unsigned char octets[4];\n};\n\nint main() {\n    union IPAddress ip;\n    ip.octets[0] = 192;\n    ip.octets[1] = 168;\n    ip.octets[2] = 1;\n    ip.octets[3] = 1;\n    printf("IP Address: %d.%d.%d.%d\\n\", ip.octets[0], ip.octets[1], ip.octets[2], ip.octets[3]);\n    printf("As integer: %u\\n\", ip.addr);\n    return 0;\n}',
    hint: 'Different views of same 32-bit value'
  },
  {
    id: 'c_union_26',
    topicId: 'c_unions',
    question: 'Write a program to pass union to function by value.',
    mathSolution: 'Union copied to function',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nvoid printInt(union Data d) {\n    printf("Value: %d\\n", d.i);\n}\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printInt(d);\n    return 0;\n}',
    hint: 'Function receives copy of union'
  },
  {
    id: 'c_union_27',
    topicId: 'c_unions',
    question: 'Write a program to pass union to function by pointer.',
    mathSolution: 'Modify original union',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nvoid modify(union Data *ptr) {\n    ptr->i = 100;\n}\n\nint main() {\n    union Data d;\n    d.i = 42;\n    printf("Before: %d\\n", d.i);\n    modify(&d);\n    printf("After: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Pointer allows modifying original'
  },
  {
    id: 'c_union_28',
    topicId: 'c_unions',
    question: 'Write a program to return union from function.',
    mathSolution: 'Function returns union by value',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nunion Data createInt(int val) {\n    union Data d;\n    d.i = val;\n    return d;\n}\n\nint main() {\n    union Data d = createInt(42);\n    printf("Returned value: %d\\n", d.i);\n    return 0;\n}',
    hint: 'Return union just like other types'
  },
  {
    id: 'c_union_29',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate nested union.',
    mathSolution: 'Union inside another union',
    codeSolution: '#include <stdio.h>\n\nunion Outer {\n    int type;\n    union {\n        int i;\n        float f;\n    } inner;\n};\n\nint main() {\n    union Outer u;\n    u.inner.i = 42;\n    printf("Inner integer: %d\\n", u.inner.i);\n    return 0;\n}',
    hint: 'Nested unions have multiple levels'
  },
  {
    id: 'c_union_30',
    topicId: 'c_unions',
    question: 'Write a program to use union for mathematical vector representation.',
    mathSolution: 'Access as array or components',
    codeSolution: '#include <stdio.h>\n\nunion Vector {\n    float v[4];\n    struct {\n        float x, y, z, w;\n    };\n};\n\nint main() {\n    union Vector vec;\n    vec.x = 1.0f;\n    vec.y = 2.0f;\n    vec.z = 3.0f;\n    vec.w = 4.0f;\n    printf("Vector components: (%.1f, %.1f, %.1f, %.1f)\\n\", vec.x, vec.y, vec.z, vec.w);\n    printf("As array: [%.1f, %.1f, %.1f, %.1f]\\n\", vec.v[0], vec.v[1], vec.v[2], vec.v[3]);\n    return 0;\n}',
    hint: 'Same data, different access methods'
  },

  // ========== ADVANCED UNION APPLICATIONS (31-40) ==========
  {
    id: 'c_union_31',
    topicId: 'c_unions',
    question: 'Write a program to use union for packet header parsing.',
    mathSolution: 'Different protocol views',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\nunion PacketHeader {\n    uint32_t raw;\n    struct {\n        uint8_t version;\n        uint8_t type;\n        uint16_t length;\n    } fields;\n};\n\nint main() {\n    union PacketHeader ph;\n    ph.fields.version = 4;\n    ph.fields.type = 6;\n    ph.fields.length = 1500;\n    printf("Raw header: 0x%08x\\n\", ph.raw);\n    printf("Version: %d, Type: %d, Length: %d\\n\", ph.fields.version, ph.fields.type, ph.fields.length);\n    return 0;\n}',
    hint: 'Different interpretations of same data'
  },
  {
    id: 'c_union_32',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate const union.',
    mathSolution: 'Union cannot be modified',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    const union Data d = {42};\n    printf("Const union value: %d\\n", d.i);\n    // d.i = 100; // Error: can\'t modify const union\n    return 0;\n}',
    hint: 'const applies to entire union'
},
 
  {
    id: 'c_union_33',
    topicId: 'c_unions',
    question: 'Write a program to create union for error return values.',
    mathSolution: 'Return success or error info',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nunion Result {\n    int value;\n    struct {\n        int error_code;\n        char error_msg[50];\n    } error;\n};\n\nint main() {\n    union Result r;\n    r.error.error_code = 404;\n    strcpy(r.error.error_msg, "Not Found\");\n    printf(\"Error code: %d, Message: %s\\n\", r.error.error_code, r.error.error_msg);\n    return 0;\n}',
    hint: 'Union can represent either success value or error info'
  },
  {
    id: 'c_union_34',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union alignment and packing.',
    mathSolution: 'Size may include padding for alignment',
    codeSolution: '#include <stdio.h>\n\nunion Mixed {\n    char c;\n    int i;\n    double d;\n};\n\nint main() {\n    printf("Size of union: %zu bytes\\n\", sizeof(union Mixed));\n    printf(\"Alignment: at least %zu\\n\", __alignof__(union Mixed));\n    return 0;\n}',
    hint: 'Union uses largest alignment requirement'
  },
  {
    id: 'c_union_35',
    topicId: 'c_unions',
    question: 'Write a program to use union for JSON value representation.',
    mathSolution: 'Variant type for JSON values',
    codeSolution: '#include <stdio.h>\n\nenum JSONType { JSON_NULL, JSON_INT, JSON_FLOAT, JSON_BOOL, JSON_STRING };\n\nstruct JSONValue {\n    enum JSONType type;\n    union {\n        int int_val;\n        float float_val;\n        int bool_val;\n        char *str_val;\n    } data;\n};\n\nint main() {\n    struct JSONValue v = {JSON_INT, .data.int_val = 42};\n    printf("JSON value: \");\n    if(v.type == JSON_INT) printf(\"%d\", v.data.int_val);\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Union enables variant data types'
  },
  {
    id: 'c_union_36',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for double exponent extraction.',
    mathSolution: 'Access double bits via union',
    codeSolution: '#include <stdio.h>\n\nunion DoubleBits {\n    double d;\n    struct {\n        unsigned long long mantissa:52;\n        unsigned int exponent:11;\n        unsigned int sign:1;\n    } bits;\n};\n\nint main() {\n    union DoubleBits u;\n    u.d = 3.141592653589793;\n    printf("Double: %f\\n\", u.d);\n    printf(\"Sign: %u, Exponent: %u, Mantissa: %llx\\n\", u.bits.sign, u.bits.exponent, u.bits.mantissa);\n    return 0;\n}',
    hint: 'Extract IEEE 754 components'
  },
  {
    id: 'c_union_37',
    topicId: 'c_unions',
    question: 'Write a program to use union for fast inverse square root approximation.',
    mathSolution: 'Bit manipulation trick',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nfloat fastInvSqrt(float number) {\n    union { float f; int i; } u;\n    u.f = number;\n    u.i = 0x5f3759df - (u.i >> 1);\n    return u.f * (1.5f - 0.5f * number * u.f * u.f);\n}\n\nint main() {\n    float x = 4.0f;\n    printf("Fast inverse sqrt of %.1f: %.6f\\n\", x, fastInvSqrt(x));\n    printf(\"Actual 1/sqrt: %.6f\\n\", 1.0f/sqrt(x));\n    return 0;\n}',
    hint: 'Quake III fast inverse square root algorithm'
  },
  {
    id: 'c_union_38',
    topicId: 'c_unions',
    question: 'Write a program to use union for 3D coordinate transformation.',
    mathSolution: 'Same memory as array or components',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nunion Point3D {\n    float coords[3];\n    struct { float x, y, z; };\n};\n\nfloat magnitude(union Point3D p) {\n    return sqrt(p.x * p.x + p.y * p.y + p.z * p.z);\n}\n\nint main() {\n    union Point3D pt;\n    pt.coords[0] = 3.0f;\n    pt.coords[1] = 4.0f;\n    pt.coords[2] = 0.0f;\n    printf("Point: (%.1f, %.1f, %.1f)\\n\", pt.x, pt.y, pt.z);\n    printf(\"Magnitude: %.1f\\n\", magnitude(pt));\n    return 0;\n}',
    hint: 'Flexible access to coordinates'
  },
  {
    id: 'c_union_39',
    topicId: 'c_unions',
    question: 'Write a program to demonstrate union for configuration parameters.',
    mathSolution: 'Different config value types in one struct',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct ConfigParam {\n    char name[20];\n    enum { CONF_INT, CONF_FLOAT, CONF_STRING } type;\n    union {\n        int int_val;\n        float float_val;\n        char str_val[50];\n    } value;\n};\n\nint main() {\n    struct ConfigParam params[2];\n    strcpy(params[0].name, "max_users");\n    params[0].type = CONF_INT;\n    params[0].value.int_val = 100;\n    strcpy(params[1].name, "server_name");\n    params[1].type = CONF_STRING;\n    strcpy(params[1].value.str_val, "myserver\");\n    for(int i = 0; i < 2; i++) {\n        printf(\"%s = \", params[i].name);\n        if(params[i].type == CONF_INT)\n            printf(\"%d\\n\", params[i].value.int_val);\n        else if(params[i].type == CONF_STRING)\n            printf(\"%s\\n\", params[i].value.str_val);\n    }\n    return 0;\n}',
    hint: 'Configuration values can have different types'
  },
  {
    id: 'c_union_40',
    topicId: 'c_unions',
    question: 'Write a program to create array of pointers to unions.',
    mathSolution: 'Each pointer can point to different union',
    codeSolution: '#include <stdio.h>\n\nunion Data {\n    int i;\n    float f;\n};\n\nint main() {\n    union Data u1, u2, u3;\n    u1.i = 10;\n    u2.f = 20.5f;\n    u3.i = 30;\n    union Data *ptrs[] = {&u1, &u2, &u3};\n    printf("Values via pointer array: \");\n    printf(\"%d \", ptrs[0]->i);\n    printf(\"%.1f \", ptrs[1]->f);\n    printf(\"%d\\n\", ptrs[2]->i);\n    return 0;\n}',
    hint: 'Array stores addresses of unions'
  },
  //enum
   // ========== BASIC ENUM DECLARATION (1-10) ==========
  {
    id: 'c_enum_1',
    topicId: 'c_enum',
    question: 'Write a program to declare enum for days of week and print values.',
    mathSolution: 'Enum with 7 constants: Sunday to Saturday (0-6)',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };\n\nint main() {\n    printf("Sunday = %d\\n", Sunday);\n    printf("Monday = %d\\n", Monday);\n    printf("Tuesday = %d\\n", Tuesday);\n    printf("Wednesday = %d\\n", Wednesday);\n    printf("Thursday = %d\\n", Thursday);\n    printf("Friday = %d\\n", Friday);\n    printf("Saturday = %d\\n", Saturday);\n    return 0;\n}',
    hint: 'Use enum keyword followed by tag and members in braces'
  },
  {
    id: 'c_enum_2',
    topicId: 'c_enum',
    question: 'Write a program to declare enum variable and assign value.',
    mathSolution: 'Create enum variable and set to Wednesday',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };\n\nint main() {\n    enum Weekday today = Wednesday;\n    printf("Today = %d\\n", today);\n    return 0;\n}',
    hint: 'Use enum tag followed by variable name'
  },
  {
    id: 'c_enum_3',
    topicId: 'c_enum',
    question: 'Write a program to use enum in switch statement.',
    mathSolution: 'Switch based on day of week',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { Monday=1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };\n\nint main() {\n    enum Weekday day = Wednesday;\n    switch(day) {\n        case Monday: printf("Start of work week\\n"); break;\n        case Wednesday: printf("Mid week\\n"); break;\n        case Friday: printf("TGIF\\n"); break;\n        case Sunday: printf("Weekend\\n"); break;\n        default: printf("Another day\\n"); break;\n    }\n    return 0;\n}',
    hint: 'Cases use enum constants'
  },
  {
    id: 'c_enum_4',
    topicId: 'c_enum',
    question: 'Write a program to create enum with custom values.',
    mathSolution: 'Assign specific values to enum constants',
    codeSolution: '#include <stdio.h>\n\nenum HttpStatus { OK = 200, NotFound = 404, ServerError = 500 };\n\nint main() {\n    printf("OK = %d\\n", OK);\n    printf("Not Found = %d\\n", NotFound);\n    printf("Server Error = %d\\n", ServerError);\n    return 0;\n}',
    hint: 'Assign any integer values to constants'
  },
  {
    id: 'c_enum_5',
    topicId: 'c_enum',
    question: 'Write a program to use typedef with enum.',
    mathSolution: 'Create type alias for enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { Red, Green, Blue } Color;\n\nint main() {\n    Color c = Green;\n    printf("Green = %d\\n", c);\n    return 0;\n}',
    hint: 'Now can use Color as type without enum keyword'
  },
  {
    id: 'c_enum_6',
    topicId: 'c_enum',
    question: 'Write a program to use enum in function parameter.',
    mathSolution: 'Pass enum to function',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { LOW, MEDIUM, HIGH } Level;\n\nvoid printLevel(Level l) {\n    switch(l) {\n        case LOW: printf("Low\\n"); break;\n        case MEDIUM: printf("Medium\\n"); break;\n        case HIGH: printf("High\\n"); break;\n    }\n}\n\nint main() {\n    printLevel(MEDIUM);\n    return 0;\n}',
    hint: 'Enum as parameter type'
  },
  {
    id: 'c_enum_7',
    topicId: 'c_enum',
    question: 'Write a program to return enum from function.',
    mathSolution: 'Function returns enum value',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SMALL, MEDIUM, LARGE } Size;\n\nSize getSize(int value) {\n    if(value < 10) return SMALL;\n    if(value < 100) return MEDIUM;\n    return LARGE;\n}\n\nint main() {\n    Size s = getSize(50);\n    printf("Size = %d\\n", s);\n    return 0;\n}',
    hint: 'Return enum constant from function'
  },
  {
    id: 'c_enum_8',
    topicId: 'c_enum',
    question: 'Write a program to use enum as array indices.',
    mathSolution: 'Array indexed by enum',
    codeSolution: '#include <stdio.h>\n\nenum Month { JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC };\n\nint main() {\n    int days[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};\n    printf("January has %d days\\n", days[JAN]);\n    printf("March has %d days\\n", days[MAR]);\n    printf("October has %d days\\n", days[OCT]);\n    return 0;\n}',
    hint: 'Enum constants as indices (must be sequential)'
  },
  {
    id: 'c_enum_9',
    topicId: 'c_enum',
    question: 'Write a program to create anonymous enum for constants.',
    mathSolution: 'Enum without tag for constants',
    codeSolution: '#include <stdio.h>\n\nenum { MAX_USERS = 100, BUFFER_SIZE = 1024, TIMEOUT = 30 };\n\nint main() {\n    printf("Max Users = %d\\n", MAX_USERS);\n    printf("Buffer Size = %d\\n", BUFFER_SIZE);\n    printf("Timeout = %d seconds\\n", TIMEOUT);\n    return 0;\n}',
    hint: 'Alternative to #define for integer constants'
  },
  {
    id: 'c_enum_10',
    topicId: 'c_enum',
    question: 'Write a program to find size of enum.',
    mathSolution: 'Size of enum variable',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { A, B, C } MyEnum;\n\nint main() {\n    printf("Size of enum = %zu bytes\\n", sizeof(MyEnum));\n    return 0;\n}',
    hint: 'Enum size is typically 4 bytes (like int)'
  },

  // ========== ENUM WITH BIT FLAGS (11-20) ==========
  {
    id: 'c_enum_11',
    topicId: 'c_enum',
    question: 'Write a program to use enum for bit flags.',
    mathSolution: 'Powers of 2 for bit flags',
    codeSolution: '#include <stdio.h>\n\nenum Permissions { READ = 1, WRITE = 2, EXECUTE = 4 };\n\nint main() {\n    int perms = READ | WRITE;\n    if(perms & READ) printf("Read permission granted\\n");\n    if(perms & WRITE) printf("Write permission granted\\n");\n    if(perms & EXECUTE) printf("Execute permission granted\\n");\n    return 0;\n}',
    hint: 'Use powers of 2 for bit flags'
  },
  {
    id: 'c_enum_12',
    topicId: 'c_enum',
    question: 'Write a program to combine and test bit flags.',
    mathSolution: 'Combine flags with OR, test with AND',
    codeSolution: '#include <stdio.h>\n\nenum Options { OPT_A = 1, OPT_B = 2, OPT_C = 4, OPT_D = 8 };\n\nint main() {\n    int flags = OPT_A | OPT_C;\n    printf("Flags: A=%d, B=%d, C=%d, D=%d\\n",\n           (flags & OPT_A) ? 1 : 0,\n           (flags & OPT_B) ? 1 : 0,\n           (flags & OPT_C) ? 1 : 0,\n           (flags & OPT_D) ? 1 : 0);\n    return 0;\n}',
    hint: 'Bitwise AND to test, OR to combine'
  },
  {
    id: 'c_enum_13',
    topicId: 'c_enum',
    question: 'Write a program to add and remove bit flags.',
    mathSolution: 'Set and clear bits using OR and AND NOT',
    codeSolution: '#include <stdio.h>\n\nenum Flags { FLAG1 = 1, FLAG2 = 2, FLAG3 = 4, FLAG4 = 8 };\n\nint main() {\n    int flags = 0;\n    flags |= FLAG2;\n    flags |= FLAG4;\n    printf("After adding: %d\\n", flags);\n    flags &= ~FLAG2;\n    printf("After removing FLAG2: %d\\n\", flags);\n    return 0;\n}',
    hint: 'Use |= to add, &= ~ to remove'
  },
  {
    id: 'c_enum_14',
    topicId: 'c_enum',
    question: 'Write a program to create enum for error codes.',
    mathSolution: 'Error codes with specific values',
    codeSolution: '#include <stdio.h>\n\nenum ErrorCode { SUCCESS = 0, ERR_NULL = -1, ERR_MEM = -2, ERR_IO = -3 };\n\nint main() {\n    printf("SUCCESS = %d\\n", SUCCESS);\n    printf("ERR_NULL = %d\\n", ERR_NULL);\n    printf("ERR_MEM = %d\\n", ERR_MEM);\n    printf("ERR_IO = %d\\n", ERR_IO);\n    return 0;\n}',
    hint: 'Error codes can be negative'
  },
  {
    id: 'c_enum_15',
    topicId: 'c_enum',
    question: 'Write a program to use enum for state machine (traffic light).',
    mathSolution: 'Traffic light states',
    codeSolution: '#include <stdio.h>\n\nenum TrafficLight { RED, YELLOW, GREEN };\n\nint main() {\n    enum TrafficLight state = RED;\n    printf("Initial state: %d (RED)\\n\", state);\n    state = GREEN;\n    printf(\"After change: %d (GREEN)\\n\", state);\n    state = YELLOW;\n    printf(\"After change: %d (YELLOW)\\n\", state);\n    return 0;\n}',
    hint: 'States as enum constants'
  },
  {
    id: 'c_enum_16',
    topicId: 'c_enum',
    question: 'Write a program to loop through enum values.',
    mathSolution: 'Iterate from first to last enum constant',
    codeSolution: '#include <stdio.h>\n\nenum Color { Red, Green, Blue, Yellow, Purple };\n\nint main() {\n    for(enum Color c = Red; c <= Purple; c++) {\n        printf("Color value: %d\\n", c);\n    }\n    return 0;\n}',
    hint: 'Assumes sequential values from 0 to n-1'
  },
  {
    id: 'c_enum_17',
    topicId: 'c_enum',
    question: 'Write a program to map enum to string names.',
    mathSolution: 'Array of strings for enum names',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { MON, TUE, WED, THU, FRI, SAT, SUN } Weekday;\n\nint main() {\n    const char *names[] = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};\n    for(Weekday d = MON; d <= SUN; d++) {\n        printf("%d = %s\\n", d, names[d]);\n    }\n    return 0;\n}',
    hint: 'Lookup table for string names'
  },
  {
    id: 'c_enum_18',
    topicId: 'c_enum',
    question: 'Write a program to use enum in structure.',
    mathSolution: 'Struct with enum field',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { IDLE, RUNNING, STOPPED } State;\n\nstruct Process {\n    int pid;\n    State status;\n};\n\nint main() {\n    struct Process p = {1234, RUNNING};\n    printf("Process %d status = %d\\n\", p.pid, p.status);\n    return 0;\n}',
    hint: 'Struct member can be enum type'
  },
  {
    id: 'c_enum_19',
    topicId: 'c_enum',
    question: 'Write a program to create array of enums.',
    mathSolution: 'Array storing enum values',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SMALL, MEDIUM, LARGE } Size;\n\nint main() {\n    Size sizes[] = {SMALL, LARGE, MEDIUM, SMALL, LARGE};\n    for(int i = 0; i < 5; i++) {\n        printf("sizes[%d] = %d\\n\", i, sizes[i]);\n    }\n    return 0;\n}',
    hint: 'Array of enum type'
  },
  {
    id: 'c_enum_20',
    topicId: 'c_enum',
    question: 'Write a program to compare enum with integer.',
    mathSolution: 'Enum can be compared with int',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { ZERO, ONE, TWO } Number;\n\nint main() {\n    Number n = ONE;\n    if(n == 1) {\n        printf("Enum ONE equals integer 1\\n");\n    }\n    return 0;\n}',
    hint: 'Enums are integers internally'
  },

  // ========== ENUM FOR MENU SYSTEMS (21-30) ==========
  {
    id: 'c_enum_21',
    topicId: 'c_enum',
    question: 'Write a program to use enum for menu options.',
    mathSolution: 'Menu choices as enum',
    codeSolution: '#include <stdio.h>\n\nenum Menu { NEW, OPEN, SAVE, EXIT };\n\nint main() {\n    int choice = SAVE;\n    switch(choice) {\n        case NEW: printf("New file\\n"); break;\n        case OPEN: printf("Open file\\n"); break;\n        case SAVE: printf("Save file\\n"); break;\n        case EXIT: printf("Exit\\n"); break;\n        default: printf("Invalid choice\\n");\n    }\n    return 0;\n}',
    hint: 'Menu options as enum constants'
  },
  {
    id: 'c_enum_22',
    topicId: 'c_enum',
    question: 'Write a program to use enum for priority levels.',
    mathSolution: 'Priority constants',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { LOW, NORMAL, HIGH, URGENT } Priority;\n\nint main() {\n    Priority tasks[] = {HIGH, LOW, URGENT, NORMAL};\n    for(int i = 0; i < 4; i++) {\n        printf("Task %d priority = %d\\n\", i+1, tasks[i]);\n    }\n    return 0;\n}',
    hint: 'Different priority levels'
  },
  {
    id: 'c_enum_23',
    topicId: 'c_enum',
    question: 'Write a program to use enum for direction.',
    mathSolution: 'Cardinal directions',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { NORTH, SOUTH, EAST, WEST } Direction;\n\nint main() {\n    Direction d = EAST;\n    printf("Direction = %d\\n", d);\n    if(d == EAST) printf("Moving East\\n");\n    return 0;\n}',
    hint: 'Four cardinal directions'
  },
  {
    id: 'c_enum_24',
    topicId: 'c_enum',
    question: 'Write a program to use enum for log levels.',
    mathSolution: 'Logging severity levels',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { DEBUG, INFO, WARN, ERROR, FATAL } LogLevel;\n\nint main() {\n    LogLevel level = ERROR;\n    printf("Log level = %d\\n", level);\n    if(level >= ERROR) {\n        printf("This is an error message\\n");\n    }\n    return 0;\n}',
    hint: 'Log levels as enum constants'
  },
  {
    id: 'c_enum_25',
    topicId: 'c_enum',
    question: 'Write a program to use enum for boolean values.',
    mathSolution: 'Boolean as enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { FALSE, TRUE } Bool;\n\nint main() {\n    Bool isReady = TRUE;\n    if(isReady) {\n        printf("Ready!\\n");\n    }\n    return 0;\n}',
    hint: 'FALSE=0, TRUE=1 by default'
  },
  {
    id: 'c_enum_26',
    topicId: 'c_enum',
    question: 'Write a program to use enum for months.',
    mathSolution: 'Month names as enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { JAN=1, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC } Month;\n\nint main() {\n    Month m = MAR;\n    printf("March is month %d\\n\", m);\n    return 0;\n}',
    hint: 'Months with custom starting value'
  },
  {
    id: 'c_enum_27',
    topicId: 'c_enum',
    question: 'Write a program to use enum for file modes.',
    mathSolution: 'File open modes',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { READ, WRITE, READ_WRITE, APPEND } FileMode;\n\nint main() {\n    FileMode mode = READ_WRITE;\n    printf("File mode = %d\\n", mode);\n    return 0;\n}',
    hint: 'File access modes'
  },
  {
    id: 'c_enum_28',
    topicId: 'c_enum',
    question: 'Write a program to use enum for data types.',
    mathSolution: 'Data type identifiers',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { TYPE_INT, TYPE_FLOAT, TYPE_STRING, TYPE_BOOL } DataType;\n\nint main() {\n    DataType types[] = {TYPE_INT, TYPE_STRING, TYPE_FLOAT, TYPE_BOOL};\n    for(int i = 0; i < 4; i++) {\n        printf("Type %d = %d\\n\", i+1, types[i]);\n    }\n    return 0;\n}',
    hint: 'Type identifiers for variant data'
  },
  {
    id: 'c_enum_29',
    topicId: 'c_enum',
    question: 'Write a program to create enum with duplicate values.',
    mathSolution: 'Different names same value',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SUCCESS = 0, OK = 0, ERROR = -1, FAIL = -1 } Result;\n\nint main() {\n    printf("SUCCESS = %d, OK = %d\\n", SUCCESS, OK);\n    printf("ERROR = %d, FAIL = %d\\n", ERROR, FAIL);\n    return 0;\n}',
    hint: 'Enums can have duplicate values'
  },
  {
    id: 'c_enum_30',
    topicId: 'c_enum',
    question: 'Write a program to use enum pointer.',
    mathSolution: 'Pointer to enum variable',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { RED, GREEN, BLUE } Color;\n\nint main() {\n    Color c = GREEN;\n    Color *ptr = &c;\n    printf("Original: %d\\n", c);\n    *ptr = BLUE;\n    printf("After pointer: %d\\n", c);\n    return 0;\n}',
    hint: 'Pointers work with enums like with int'
  },

  // ========== ENUM IN DATA STRUCTURES (31-40) ==========
  {
    id: 'c_enum_31',
    topicId: 'c_enum',
    question: 'Write a program to use enum for task status.',
    mathSolution: 'Task status tracking',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { PENDING, IN_PROGRESS, COMPLETED, CANCELLED } TaskStatus;\n\nstruct Task {\n    int id;\n    TaskStatus status;\n};\n\nint main() {\n    struct Task t = {101, IN_PROGRESS};\n    printf("Task %d status = %d\\n\", t.id, t.status);\n    return 0;\n}',
    hint: 'Status as enum in struct'
  },
  {
    id: 'c_enum_32',
    topicId: 'c_enum',
    question: 'Write a program to use enum for player states in game.',
    mathSolution: 'Game character states',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { IDLE, WALKING, RUNNING, JUMPING, ATTACKING } PlayerState;\n\nint main() {\n    PlayerState state = IDLE;\n    printf("Initial state: %d (IDLE)\\n\", state);\n    state = RUNNING;\n    printf(\"After action: %d (RUNNING)\\n\", state);\n    return 0;\n}',
    hint: 'Player states as enum'
  },
  {
    id: 'c_enum_33',
    topicId: 'c_enum',
    question: 'Write a program to use enum for HTTP methods.',
    mathSolution: 'REST API methods',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { GET, POST, PUT, DELETE, PATCH } HttpMethod;\n\nint main() {\n    HttpMethod method = POST;\n    printf("HTTP Method = %d (POST)\\n\", method);\n    return 0;\n}',
    hint: 'HTTP verbs as enum'
  },
  {
    id: 'c_enum_34',
    topicId: 'c_enum',
    question: 'Write a program to use enum for sorting order.',
    mathSolution: 'Ascending or descending',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { ASCENDING, DESCENDING } SortOrder;\n\nint main() {\n    SortOrder order = DESCENDING;\n    if(order == ASCENDING)\n        printf("Sorting ascending\\n");\n    else\n        printf("Sorting descending\\n");\n    return 0;\n}',
    hint: 'Sort direction enum'
  },
  {
    id: 'c_enum_35',
    topicId: 'c_enum',
    question: 'Write a program to use enum for CPU states.',
    mathSolution: 'Processor states',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { HALTED, RUNNING, SLEEPING, INTERRUPT } CPUState;\n\nint main() {\n    CPUState state = RUNNING;\n    printf("CPU State = %d\\n", state);\n    return 0;\n}',
    hint: 'CPU state machine'
  },
  {
    id: 'c_enum_36',
    topicId: 'c_enum',
    question: 'Write a program to use enum for connection types.',
    mathSolution: 'Network connection types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { WIFI, ETHERNET, CELLULAR, BLUETOOTH } ConnectionType;\n\nint main() {\n    ConnectionType conn = WIFI;\n    printf("Connection = %d (WIFI)\\n\", conn);\n    return 0;\n}',
    hint: 'Different connection technologies'
  },
  {
    id: 'c_enum_37',
    topicId: 'c_enum',
    question: 'Write a program to use enum for encryption algorithms.',
    mathSolution: 'Cipher types',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { AES_128, AES_256, DES, RC4 } Cipher;\n\nint main() {\n    Cipher c = AES_256;\n    printf("Cipher = %d (AES-256)\\n\", c);\n    return 0;\n}',
    hint: 'Encryption algorithm enum'
  },
  {
    id: 'c_enum_38',
    topicId: 'c_enum',
    question: 'Write a program to use enum for file types.',
    mathSolution: 'File type identifiers',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { REGULAR, DIRECTORY, SYMLINK, SOCKET, PIPE } FileType;\n\nint main() {\n    FileType ft = DIRECTORY;\n    printf("File type = %d\\n", ft);\n    return 0;\n}',
    hint: 'Unix file types'
  },
  {
    id: 'c_enum_39',
    topicId: 'c_enum',
    question: 'Write a program to use enum for window states.',
    mathSolution: 'GUI window states',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { NORMAL, MINIMIZED, MAXIMIZED, FULLSCREEN } WindowState;\n\nint main() {\n    WindowState ws = MAXIMIZED;\n    printf("Window state = %d\\n\", ws);\n    return 0;\n}',
    hint: 'Window display states'
  },
  {
    id: 'c_enum_40',
    topicId: 'c_enum',
    question: 'Write a program to use enum for alignment options.',
    mathSolution: 'Text alignment',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { LEFT, CENTER, RIGHT, JUSTIFY } Alignment;\n\nint main() {\n    Alignment align = CENTER;\n    printf("Alignment = %d\\n", align);\n    return 0;\n}',
    hint: 'Text alignment constants'
  },
  //typedef
   {
    id: 'c_typedef_01',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for int as INTEGER and use it.',
    mathSolution: 'INTEGER becomes alias for int',
    codeSolution: '#include <stdio.h>\n\ntypedef int INTEGER;\n\nint main() {\n    INTEGER count = 42;\n    printf("Count = %d\\n", count);\n    return 0;\n}',
    hint: 'Now INTEGER can be used like int'
  },
  {
    id: 'c_typedef_02',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for unsigned char as BYTE.',
    mathSolution: 'BYTE represents 8-bit unsigned value',
    codeSolution: '#include <stdio.h>\n\ntypedef unsigned char BYTE;\n\nint main() {\n    BYTE data = 255;\n    printf("BYTE value = %u\\n", data);\n    return 0;\n}',
    hint: 'Common in systems programming'
  },
  {
    id: 'c_typedef_03',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for float as REAL.',
    mathSolution: 'REAL becomes floating-point type',
    codeSolution: '#include <stdio.h>\n\ntypedef float REAL;\n\nint main() {\n    REAL pi = 3.14159f;\n    printf("PI = %.5f\\n", pi);\n    return 0;\n}',
    hint: 'Useful for precision changes later'
  },
  {
    id: 'c_typedef_04',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for long long as int64.',
    mathSolution: 'Platform-independent 64-bit type',
    codeSolution: '#include <stdio.h>\n\ntypedef long long int64;\n\nint main() {\n    int64 big = 123456789012345LL;\n    printf("64-bit value = %lld\\n", big);\n    return 0;\n}',
    hint: 'Ensures 64 bits across platforms'
  },
  {
    id: 'c_typedef_05',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for pointer to int.',
    mathSolution: 'PINT is alias for int*',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\n\nint main() {\n    int x = 100;\n    PINT ptr = &x;\n    printf("Value = %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Pointer type alias'
  },
  {
    id: 'c_typedef_06',
    topicId: 'c_typedef',
    question: 'Write a program to declare multiple pointers using typedef.',
    mathSolution: 'Avoids * confusion with multiple declarations',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\n\nint main() {\n    int a = 10, b = 20;\n    PINT p1 = &a, p2 = &b;\n    printf("p1 = %d, p2 = %d\\n", *p1, *p2);\n    return 0;\n}',
    hint: 'Without typedef, int* p1, p2 makes p2 int'
  },
  {
    id: 'c_typedef_07',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for void pointer.',
    mathSolution: 'Can point to any type',
    codeSolution: '#include <stdio.h>\n\ntypedef void* PVOID;\n\nint main() {\n    int x = 42;\n    PVOID ptr = &x;\n    printf("Value = %d\\n", *(int*)ptr);\n    return 0;\n}',
    hint: 'Common in Windows API'
  },
  {
    id: 'c_typedef_08',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for array of 5 ints.',
    mathSolution: 'ARRAY5 becomes type int[5]',
    codeSolution: '#include <stdio.h>\n\ntypedef int ARRAY5[5];\n\nint main() {\n    ARRAY5 arr = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Now declare arrays easily'
  },
  {
    id: 'c_typedef_09',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for string (char array of size 50).',
    mathSolution: 'String type of fixed size',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\ntypedef char STRING[50];\n\nint main() {\n    STRING name = "John Doe";\n    printf("Name = %s\\n", name);\n    return 0;\n}',
    hint: 'STRING becomes fixed-size string'
  },
  {
    id: 'c_typedef_10',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for structure Student.',
    mathSolution: 'Alias for struct Student',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\ntypedef struct Student {\n    char name[50];\n    int age;\n} Student;\n\nint main() {\n    Student s1 = {"Alice", 20};\n    printf("Name: %s, Age: %d\\n", s1.name, s1.age);\n    return 0;\n}',
    hint: 'Now use Student without struct keyword'
  },

  // ========== TYPEDEF WITH STRUCTURES (11-20) ==========
  {
    id: 'c_typedef_11',
    topicId: 'c_typedef',
    question: 'Write a program with anonymous structure using typedef.',
    mathSolution: 'Structure without tag name',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    char name[50];\n    int age;\n} Student;\n\nint main() {\n    Student s = {"Bob\", 22};\n    printf(\"Name: %s, Age: %d\\n\", s.name, s.age);\n    return 0;\n}',
    hint: 'Tag name optional with typedef'
  },
  {
    id: 'c_typedef_12',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for pointer to structure.',
    mathSolution: 'PStudent is struct Student*',
    codeSolution: '#include <stdio.h>\n\ntypedef struct Student {\n    char name[50];\n    int age;\n} Student, *PStudent;\n\nint main() {\n    Student s = {"Charlie", 25};\n    PStudent ptr = &s;\n    printf("Name: %s, Age: %d\\n", ptr->name, ptr->age);\n    return 0;\n}',
    hint: 'Useful for linked lists'
  },
  {
    id: 'c_typedef_13',
    topicId: 'c_typedef',
    question: 'Write a program to create self-referential structure with typedef.',
    mathSolution: 'Linked list node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nint main() {\n    Node n1 = {10, NULL};\n    Node n2 = {20, &n1};\n    printf("n2.data = %d, n2.next->data = %d\\n", n2.data, n2.next->data);\n    return 0;\n}',
    hint: 'Need struct keyword for self-reference'
  },
  {
    id: 'c_typedef_14',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for union.',
    mathSolution: 'Alias for union Data',
    codeSolution: '#include <stdio.h>\n\ntypedef union {\n    int i;\n    float f;\n} Value;\n\nint main() {\n    Value v;\n    v.i = 42;\n    printf("Integer: %d\\n", v.i);\n    v.f = 3.14f;\n    printf("Float: %.2f\\n\", v.f);\n    return 0;\n}',
    hint: 'Now use Value without union keyword'
  },
  {
    id: 'c_typedef_15',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for enum.',
    mathSolution: 'Alias for enum Color',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { RED, GREEN, BLUE } Color;\n\nint main() {\n    Color c = GREEN;\n    printf("Color = %d\\n\", c);\n    return 0;\n}',
    hint: 'Now use Color as type'
  },
  {
    id: 'c_typedef_16',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for enum with custom values.',
    mathSolution: 'Assign custom values to enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SUCCESS = 0, ERROR = -1, TIMEOUT = 1 } Status;\n\nint main() {\n    Status s = SUCCESS;\n    printf("Status = %d\\n\", s);\n    return 0;\n}',
    hint: 'Status codes'
  },
  {
    id: 'c_typedef_17',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for function pointer.',
    mathSolution: 'Alias for function taking int, returning int',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*FuncPtr)(int);\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    FuncPtr f = square;\n    int result = f(5);\n    printf("Square = %d\\n\", result);\n    return 0;\n}',
    hint: 'Simplifies complex declarations'
  },
  {
    id: 'c_typedef_18',
    topicId: 'c_typedef',
    question: 'Write a program to create array of function pointers using typedef.',
    mathSolution: 'Array of functions with same signature',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*MathOp)(int, int);\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    MathOp ops[] = {add, sub, mul};\n    int a = 10, b = 5;\n    for(int i = 0; i < 3; i++) {\n        printf("Result %d = %d\\n\", i, ops[i](a, b));\n    }\n    return 0;\n}',
    hint: 'Useful for jump tables'
  },
  {
    id: 'c_typedef_19',
    topicId: 'c_typedef',
    question: 'Write a program to create fixed-size integer types using typedef.',
    mathSolution: 'Platform-independent sizes',
    codeSolution: '#include <stdio.h>\n\ntypedef signed char int8;\ntypedef unsigned char uint8;\ntypedef short int16;\ntypedef unsigned short uint16;\ntypedef int int32;\ntypedef unsigned int uint32;\n\nint main() {\n    printf("int8 size: %zu\\n\", sizeof(int8));\n    printf(\"int16 size: %zu\\n\", sizeof(int16));\n    printf(\"int32 size: %zu\\n\", sizeof(int32));\n    return 0;\n}',
    hint: 'Ensure size across platforms'
  },
  {
    id: 'c_typedef_20',
    topicId: 'c_typedef',
    question: 'Write a program to simplify complex pointer declaration using typedef.',
    mathSolution: 'Pointer to array of 5 ints',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*ArrayPtr)[5];\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    ArrayPtr p = &arr;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", (*p)[i]);\n    }\n    return 0;\n}',
    hint: 'Without typedef: int (*p)[10]'
  },

  // ========== TYPEDEF FOR POINTERS AND ARRAYS (21-30) ==========
  {
    id: 'c_typedef_21',
    topicId: 'c_typedef',
    question: 'Write a program to use typedef for const pointer.',
    mathSolution: 'Pointer that cannot be changed',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\ntypedef PINT const CPINT;\n\nint main() {\n    int x = 10, y = 20;\n    CPINT ptr = &x;\n    *ptr = 15;\n    printf("x = %d\\n\", x);\n    // ptr = &y; // Error - pointer is const\n    return 0;\n}',
    hint: 'const after * means pointer constant'
  },
  {
    id: 'c_typedef_22',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for pointer to constant.',
    mathSolution: 'Cannot modify pointed value',
    codeSolution: '#include <stdio.h>\n\ntypedef const int* PCINT;\n\nint main() {\n    int x = 10;\n    PCINT ptr = &x;\n    printf("Value = %d\\n\", *ptr);\n    // *ptr = 20; // Error - cannot modify const\n    return 0;\n}',
    hint: 'const before * means data constant'
  },
  {
    id: 'c_typedef_23',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for 2D array.',
    mathSolution: 'Matrix type alias',
    codeSolution: '#include <stdio.h>\n\ntypedef int MATRIX[3][3];\n\nint main() {\n    MATRIX mat = {{1,2,3},{4,5,6},{7,8,9}};\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n\");\n    }\n    return 0;\n}',
    hint: 'Useful for mathematical operations'
  },
  {
    id: 'c_typedef_24',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for callback function.',
    mathSolution: 'Common in event-driven programming',
    codeSolution: '#include <stdio.h>\n\ntypedef void (*EventHandler)(int);\n\nvoid onEvent(int eventId) {\n    printf("Event %d triggered\\n\", eventId);\n}\n\nint main() {\n    EventHandler handler = onEvent;\n    handler(100);\n    return 0;\n}',
    hint: 'Used in GUI libraries'
  },
  {
    id: 'c_typedef_25',
    topicId: 'c_typedef',
    question: 'Write a program to compare typedef and #define for pointers.',
    mathSolution: 'typedef handles multiple declarations correctly',
    codeSolution: '#include <stdio.h>\n\ntypedef int* PINT;\n#define INT_PTR int*\n\nint main() {\n    PINT p1, p2;\n    INT_PTR p3, p4;\n    int x = 10, y = 20;\n    p1 = &x; p2 = &y;\n    p3 = &x; // p4 is int, not pointer!\n    printf("p1=%d, p2=%d, p3=%d\\n\", *p1, *p2, *p3);\n    printf(\"sizeof(p1)=%zu, sizeof(p3)=%zu\\n\", sizeof(p1), sizeof(p3));\n    return 0;\n}',
    hint: 'typedef is better for pointers'
  },
  {
    id: 'c_typedef_26',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for complex number.',
    mathSolution: 'Structure for complex math',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    double real;\n    double imag;\n} Complex;\n\nint main() {\n    Complex c = {3.0, 4.0};\n    printf("Complex: %.1f + %.1fi\\n\", c.real, c.imag);\n    return 0;\n}',
    hint: 'Now use Complex as type'
  },
  {
    id: 'c_typedef_27',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for RGB color.',
    mathSolution: '24-bit color representation',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    unsigned char r, g, b;\n} RGB;\n\nint main() {\n    RGB red = {255, 0, 0};\n    printf("Red: (%d, %d, %d)\\n\", red.r, red.g, red.b);\n    return 0;\n}',
    hint: 'No alpha channel'
  },
  {
    id: 'c_typedef_28',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for linked list node.',
    mathSolution: 'Self-referential structure',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node* next;\n} Node;\n\nint main() {\n    Node* head = (Node*)malloc(sizeof(Node));\n    head->data = 10;\n    head->next = NULL;\n    printf("Node data = %d\\n\", head->data);\n    free(head);\n    return 0;\n}',
    hint: 'Common data structure'
  },
  {
    id: 'c_typedef_29',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for binary tree node.',
    mathSolution: 'Binary tree node type',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct TreeNode {\n    int data;\n    struct TreeNode *left, *right;\n} TreeNode;\n\nint main() {\n    TreeNode n1 = {10, NULL, NULL};\n    TreeNode n2 = {20, NULL, NULL};\n    TreeNode* root = (TreeNode*)malloc(sizeof(TreeNode));\n    root->data = 5;\n    root->left = &n1;\n    root->right = &n2;\n    printf("Root = %d, Left = %d, Right = %d\\n\", root->data, root->left->data, root->right->data);\n    free(root);\n    return 0;\n}',
    hint: 'Binary tree structure'
  },
  {
    id: 'c_typedef_30',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for file handle simulation.',
    mathSolution: 'Opaque file type',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    const char* filename;\n    int position;\n} FileHandle;\n\nint main() {\n    FileHandle fp = {"data.txt", 0};\n    printf("File: %s, Position: %d\\n\", fp.filename, fp.position);\n    return 0;\n}',
    hint: 'FILE is opaque type in stdio.h'
  },

  // ========== ADVANCED TYPEDEF APPLICATIONS (31-40) ==========
  {
    id: 'c_typedef_31',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for generic comparator.',
    mathSolution: 'Comparator for any type',
    codeSolution: '#include <stdio.h>\n\ntypedef int (*Comparator)(const void*, const void*);\n\nint compareInt(const void* a, const void* b) {\n    return *(int*)a - *(int*)b;\n}\n\nint main() {\n    int arr[] = {5, 2, 8, 1, 9};\n    Comparator cmp = compareInt;\n    if(cmp(&arr[0], &arr[1]) < 0)\n        printf("%d is less than %d\\n\", arr[0], arr[1]);\n    else\n        printf(\"%d is greater than %d\\n\", arr[0], arr[1]);\n    return 0;\n}',
    hint: 'Used in qsort'
  },
  {
    id: 'c_typedef_32',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for bit field structure.',
    mathSolution: 'Packed flags type',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    unsigned int flag1:1;\n    unsigned int flag2:1;\n    unsigned int flag3:1;\n    unsigned int flag4:1;\n} Flags;\n\nint main() {\n    Flags f = {1, 0, 1, 0};\n    printf("Flags: %d%d%d%d\\n\", f.flag1, f.flag2, f.flag3, f.flag4);\n    printf(\"Size: %zu bytes\\n\", sizeof(Flags));\n    return 0;\n}',
    hint: 'Efficient boolean storage'
  },
  {
    id: 'c_typedef_33',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for configuration structure.',
    mathSolution: 'Program settings',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int width;\n    int height;\n    int fullscreen;\n    char title[50];\n} Config;\n\nint main() {\n    Config cfg = {1024, 768, 0, "MyApp"};\n    printf("Config: %dx%d, Fullscreen=%d, Title=%s\\n\", cfg.width, cfg.height, cfg.fullscreen, cfg.title);\n    return 0;\n}',
    hint: 'Application configuration'
  },
  {
    id: 'c_typedef_34',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for error code.',
    mathSolution: 'Standard error type',
    codeSolution: '#include <stdio.h>\n\ntypedef int error_t;\n\nint main() {\n    error_t status = 0;\n    printf("Error code = %d\\n\", status);\n    return 0;\n}',
    hint: 'Return status from functions'
  },
  {
    id: 'c_typedef_35',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for distance.',
    mathSolution: 'Clear intent in code',
    codeSolution: '#include <stdio.h>\n\ntypedef double Distance;\n\nint main() {\n    Distance meters = 100.5;\n    Distance kilometers = 0.1005;\n    printf("Distance: %.2f meters, %.4f km\\n\", meters, kilometers);\n    return 0;\n}',
    hint: 'Meters, kilometers etc'
  },
  {
    id: 'c_typedef_36',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for percentage.',
    mathSolution: '0-100 range',
    codeSolution: '#include <stdio.h>\n\ntypedef float Percentage;\n\nint main() {\n    Percentage score = 85.5;\n    printf("Score = %.1f%%\\n\", score);\n    return 0;\n}',
    hint: 'Or int for integer percent'
  },
  {
    id: 'c_typedef_37',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for index/count.',
    mathSolution: 'Array indices and sizes',
    codeSolution: '#include <stdio.h>\n\ntypedef size_t index_t;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    for(index_t i = 0; i < 5; i++) {\n        printf("arr[%zu] = %d\\n\", i, arr[i]);\n    }\n    return 0;\n}',
    hint: 'Unsigned for non-negative'
  },
  {
    id: 'c_typedef_38',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for PID (process ID).',
    mathSolution: 'Process identifier type',
    codeSolution: '#include <stdio.h>\n\ntypedef int pid_t;\n\nint main() {\n    pid_t processId = 12345;\n    printf("Process ID = %d\\n\", processId);\n    return 0;\n}',
    hint: 'From unistd.h'
  },
  {
    id: 'c_typedef_39',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for temperature.',
    mathSolution: 'Temperature values',
    codeSolution: '#include <stdio.h>\n\ntypedef float Temperature;\n\nint main() {\n    Temperature celsius = 25.5;\n    Temperature fahrenheit = (celsius * 9/5) + 32;\n    printf("Celsius: %.1f, Fahrenheit: %.1f\\n\", celsius, fahrenheit);\n    return 0;\n}',
    hint: 'Celsius or Fahrenheit'
  },
  {
    id: 'c_typedef_40',
    topicId: 'c_typedef',
    question: 'Write a program to create typedef for IPv4 address.',
    mathSolution: '32-bit IP address',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\ntypedef uint32_t ipv4_addr_t;\n\nint main() {\n    ipv4_addr_t ip = 0xC0A80101; // 192.168.1.1\n    printf("IP Address: %d.%d.%d.%d\\n\",\n           (ip >> 24) & 0xFF,\n           (ip >> 16) & 0xFF,\n           (ip >> 8) & 0xFF,\n           ip & 0xFF);\n    return 0;\n}',
    hint: 'Or struct with octets'
  },
);