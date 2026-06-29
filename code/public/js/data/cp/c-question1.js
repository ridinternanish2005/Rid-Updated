QuizData.questions.push(
  // Intro, VARIABLE ,datatype,operator
   {
            id: 'c_intro_1',
            topicId: 'c_intro',
            question: 'What is C programming language?',
            mathSolution: 'C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972.',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("C is a middle-level language");\n    return 0;\n}',
            hint: 'Developed at Bell Labs in 1972'
        },
        {
            id: 'c_intro_2',
            topicId: 'c_intro',
            question: 'Who developed C language?',
            mathSolution: 'Dennis Ritchie developed C language in 1972 at Bell Labs.',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Dennis Ritchie");\n    return 0;\n}',
            hint: 'American computer scientist at Bell Labs'
        },
        {
            id: 'c_intro_3',
            topicId: 'c_intro',
            question: 'What are key features of C?',
            mathSolution: 'Simple, Portable, Fast, Pointers, Structured Language',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Features: Simple, Portable, Fast, Pointers");\n    return 0;\n}',
            hint: 'List important features'
        },
        {
            id: 'c_intro_4',
            topicId: 'c_intro',
            question: 'Why is C called middle-level language?',
            mathSolution: 'C combines high-level and low-level language features.',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("C has high-level functions and low-level pointers");\n    return 0;\n}',
            hint: 'Both high and low level features'
        },
        {
            id: 'c_intro_5',
            topicId: 'c_intro',
            question: 'What are advantages of C?',
            mathSolution: 'Fast, Portable, Modular, Rich Library',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Advantages: Fast, Portable, Modular, Rich Library");\n    return 0;\n}',
            hint: 'Mention at least 4 advantages'
        },
        {
            id: 'c_intro_6',
            topicId: 'c_intro',
            question: 'What are applications of C?',
            mathSolution: 'OS, Embedded Systems, Compilers, Databases',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Applications: OS, Embedded, Compilers, Databases");\n    return 0;\n}',
            hint: 'Where performance matters'
        },
        {
            id: 'c_intro_7',
            topicId: 'c_intro',
            question: 'Is C case-sensitive? Give example.',
            mathSolution: 'Yes, C is case-sensitive. "count" and "Count" are different.',
            codeSolution: '#include <stdio.h>\nint main() {\n    int count=10, Count=20;\n    printf("count=%d Count=%d", count, Count);\n    return 0;\n}',
            hint: 'Uppercase and lowercase are different'
        },
        {
            id: 'c_intro_8',
            topicId: 'c_intro',
            question: 'What is a compiler? Name some C compilers.',
            mathSolution: 'Compiler converts C code to machine code. GCC, Clang, Turbo C',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Compilers: GCC, Clang, Turbo C, MSVC");\n    return 0;\n}',
            hint: 'GCC is most popular'
        },
        {
            id: 'c_intro_9',
            topicId: 'c_intro',
            question: 'What is an IDE? Name some for C.',
            mathSolution: 'IDE is Integrated Development Environment. Code::Blocks, VS Code, Dev-C++',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("IDEs: Code::Blocks, VS Code, Dev-C++, CLion");\n    return 0;\n}',
            hint: 'Editor + Compiler + Debugger'
        },
        {
            id: 'c_intro_10',
            topicId: 'c_intro',
            question: 'What is extension of C source file?',
            mathSolution: 'Source: .c, Executable: .exe or .out',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Source: .c, Executable: .exe or .out");\n    return 0;\n}',
            hint: 'C files end with .c'
        },
        {
            id: 'c_intro_11',
            topicId: 'c_intro',
            question: 'What is use of #include <stdio.h>?',
            mathSolution: 'Includes standard I/O library for printf, scanf',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("#include <stdio.h> provides printf and scanf");\n    return 0;\n}',
            hint: 'For input/output functions'
        },
        {
            id: 'c_intro_12',
            topicId: 'c_intro',
            question: 'What is main() function?',
            mathSolution: 'main() is entry point where program execution begins',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("main() is program entry point");\n    return 0;\n}',
            hint: 'Program starts here'
        },
        {
            id: 'c_intro_13',
            topicId: 'c_intro',
            question: 'What does return 0 mean?',
            mathSolution: 'return 0 indicates successful execution to OS',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("return 0 means success");\n    return 0;\n}',
            hint: 'Tells OS program ran fine'
        },
        {
            id: 'c_intro_14',
            topicId: 'c_intro',
            question: 'What are tokens in C?',
            mathSolution: 'Smallest units: Keywords, Identifiers, Constants, Strings, Operators, Symbols',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Tokens: Keywords, Identifiers, Constants, Operators");\n    return 0;\n}',
            hint: '6 types of tokens'
        },
        {
            id: 'c_intro_15',
            topicId: 'c_intro',
            question: 'What are keywords? Give examples.',
            mathSolution: 'Reserved words: int, char, if, else, for, while',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Keywords: int, char, if, else, for, while, return");\n    return 0;\n}',
            hint: 'Cannot use as variable names'
        },
        {
            id: 'c_intro_16',
            topicId: 'c_intro',
            question: 'What are identifiers? Rules for naming?',
            mathSolution: 'Names for variables/functions. Letters, digits, underscore; no digit start',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Valid: age, _salary, num1. Invalid: 123abc");\n    return 0;\n}',
            hint: 'Only letters, digits, underscore'
        },
        {
            id: 'c_intro_17',
            topicId: 'c_intro',
            question: 'What is whitespace in C?',
            mathSolution: 'Spaces, tabs, newlines - improves readability',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Whitespace: spaces, tabs, newlines");\n    return 0;\n}',
            hint: 'Ignored by compiler'
        },
        {
            id: 'c_intro_18',
            topicId: 'c_intro',
            question: 'What are comments? Write syntax.',
            mathSolution: '// for single line, /* */ for multi-line',
            codeSolution: '#include <stdio.h>\nint main() {\n    // Single line comment\n    printf("Comments: // and /* */");\n    return 0;\n}',
            hint: 'Make code readable'
        },
        {
            id: 'c_intro_19',
            topicId: 'c_intro',
            question: 'What is purpose of semicolon?',
            mathSolution: 'Semicolon terminates statements in C',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Semicolon ends every statement");\n    return 0;\n}',
            hint: 'Every statement ends with ;'
        },
        {
            id: 'c_intro_20',
            topicId: 'c_intro',
            question: 'What are header files? Examples?',
            mathSolution: 'Contain function declarations. stdio.h, math.h, string.h',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Headers: stdio.h, math.h, string.h, stdlib.h");\n    return 0;\n}',
            hint: 'Provide reusable functions'
        },
        {
            id: 'c_intro_21',
            topicId: 'c_intro',
            question: 'Difference between #include and #define?',
            mathSolution: '#include inserts files, #define creates macros',
            codeSolution: '#include <stdio.h>\n#define MSG "Macro"\nint main() {\n    printf("#include inserts, #define creates macros");\n    return 0;\n}',
            hint: 'Both are preprocessor directives'
        },
        {
            id: 'c_intro_22',
            topicId: 'c_intro',
            question: 'What are escape sequences? Examples?',
            mathSolution: '\\n newline, \\t tab, \\\\ backslash',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Escape: \\n newline, \\t tab, \\\\ backslash");\n    return 0;\n}',
            hint: 'Start with backslash'
        },
        {
            id: 'c_intro_23',
            topicId: 'c_intro',
            question: 'Difference between compilation and execution?',
            mathSolution: 'Compilation converts to machine code, execution runs it',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Compilation: code to machine code, Execution: runs it");\n    return 0;\n}',
            hint: 'Compile once, execute many times'
        },
        {
            id: 'c_intro_24',
            topicId: 'c_intro',
            question: 'Difference between syntax and semantics?',
            mathSolution: 'Syntax is grammar, semantics is meaning',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Syntax: rules, Semantics: meaning");\n    return 0;\n}',
            hint: 'Syntax = how, Semantics = what'
        },
        {
            id: 'c_intro_25',
            topicId: 'c_intro',
            question: 'What is ASCII? Why important?',
            mathSolution: 'ASCII maps characters to numbers (0-127)',
            codeSolution: '#include <stdio.h>\nint main() {\n    char ch = 65;\n    printf("ASCII: A = %c = %d", ch, ch);\n    return 0;\n}',
            hint: 'Characters stored as numbers'
        },
        {
            id: 'c_intro_26',
            topicId: 'c_intro',
            question: 'Why is C portable?',
            mathSolution: 'Same code runs on different platforms with compilers',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("C is portable - compilers exist for all platforms");\n    return 0;\n}',
            hint: 'Write once, compile anywhere'
        },
        {
            id: 'c_intro_27',
            topicId: 'c_intro',
            question: 'What are basic data types?',
            mathSolution: 'int, char, float, double, void',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Data types: int, char, float, double, void");\n    return 0;\n}',
            hint: '5 basic data types'
        },
        {
            id: 'c_intro_28',
            topicId: 'c_intro',
            question: 'What are format specifiers?',
            mathSolution: '%d int, %f float, %c char, %s string',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("%%d=int, %%f=float, %%c=char, %%s=string");\n    return 0;\n}',
            hint: 'Used in printf and scanf'
        },
        {
            id: 'c_intro_29',
            topicId: 'c_intro',
            question: 'Difference between declaration and definition?',
            mathSolution: 'Declaration tells compiler, definition allocates memory',
            codeSolution: '#include <stdio.h>\nextern int x;\nint x=10;\nint main() {\n    printf("Declaration: tells, Definition: allocates");\n    return 0;\n}',
            hint: 'Definition = declaration + memory'
        },
        {
            id: 'c_intro_30',
            topicId: 'c_intro',
            question: 'Difference between = and ==?',
            mathSolution: '= assignment, == comparison',
            codeSolution: '#include <stdio.h>\nint main() {\n    int a=5,b=5;\n    if(a==b) printf("= assigns, == compares");\n    return 0;\n}',
            hint: 'Common mistake in conditions'
        },
        {
            id: 'c_intro_31',
            topicId: 'c_intro',
            question: 'Steps to write and execute C program?',
            mathSolution: 'Edit → Save → Compile → Link → Execute',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Steps: Edit, Save, Compile, Link, Execute");\n    return 0;\n}',
            hint: '5 main steps'
        },
        {
            id: 'c_intro_32',
            topicId: 'c_intro',
            question: 'What is linker? What does it do?',
            mathSolution: 'Combines object files and libraries into executable',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Linker combines object files into executable");\n    return 0;\n}',
            hint: 'Runs after compiler'
        },
        {
            id: 'c_intro_33',
            topicId: 'c_intro',
            question: 'Types of errors in C?',
            mathSolution: 'Syntax, Semantic, Runtime, Logical, Linker',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Errors: Syntax, Semantic, Runtime, Logical, Linker");\n    return 0;\n}',
            hint: 'Different stages'
        },
        {
            id: 'c_intro_34',
            topicId: 'c_intro',
            question: 'Difference between runtime and compile-time error?',
            mathSolution: 'Compile-time caught by compiler, runtime occurs during execution',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Compile-time: caught by compiler, Runtime: during execution");\n    return 0;\n}',
            hint: 'Compiler catches first'
        },
        {
            id: 'c_intro_35',
            topicId: 'c_intro',
            question: 'Write Hello World program.',
            mathSolution: 'Use printf to display message',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
            hint: 'First program in C'
        },
        {
            id: 'c_intro_36',
            topicId: 'c_intro',
            question: 'What is preprocessor?',
            mathSolution: 'Processes #include, #define before compilation',
            codeSolution: '#include <stdio.h>\n#define MSG "Preprocessor"\nint main() {\n    printf("%s handles #include and #define", MSG);\n    return 0;\n}',
            hint: 'Runs before compiler'
        },
        {
            id: 'c_intro_37',
            topicId: 'c_intro',
            question: 'Difference between void main() and int main()?',
            mathSolution: 'int main() is standard, void main() is non-standard',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("int main() is standard, void main() is not");\n    return 0;\n}',
            hint: 'Standard C uses int main()'
        },
        {
            id: 'c_intro_38',
            topicId: 'c_intro',
            question: 'What are preprocessor directives? Examples?',
            mathSolution: '#include, #define, #ifdef, #endif',
            codeSolution: '#include <stdio.h>\n#define MAX 100\nint main() {\n    printf("Directives: #include, #define, #ifdef");\n    return 0;\n}',
            hint: 'Start with # symbol'
        },
        {
            id: 'c_intro_39',
            topicId: 'c_intro',
            question: 'Difference between printf and scanf?',
            mathSolution: 'printf outputs, scanf inputs',
            codeSolution: '#include <stdio.h>\nint main() {\n    printf("printf outputs, scanf inputs");\n    return 0;\n}',
            hint: 'Output vs Input'
        },
        {
            id: 'c_intro_40',
            topicId: 'c_intro',
            question: 'Write program to add two numbers.',
            mathSolution: 'Use int variables and + operator',
            codeSolution: '#include <stdio.h>\nint main() {\n    int a=5, b=10, sum;\n    sum = a + b;\n    printf("Sum = %d", sum);\n    return 0;\n}',
            hint: 'Use + operator'
        },
        //variable
  {
    id: 'c_var_001',
    topicId: 'c_variables',
    question: 'Write a program to declare an integer variable and print its value.',
    mathSolution: 'Integer variable declaration and initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 10;\n    printf("Value of num: %d", num);\n    return 0;\n}',
    hint: 'Use int keyword to declare integer variables'
  },
  {
    id: 'c_var_002',
    topicId: 'c_variables',
    question: 'Write a program to declare a float variable and print its value.',
    mathSolution: 'Float variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float price = 99.99;\n    printf("Price: %.2f", price);\n    return 0;\n}',
    hint: 'Use float for decimal numbers, %.2f prints 2 decimal places'
  },
  {
    id: 'c_var_003',
    topicId: 'c_variables',
    question: 'Write a program to declare a character variable and print it.',
    mathSolution: 'Character variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char grade = \'A\';\n    printf("Grade: %c", grade);\n    return 0;\n}',
    hint: 'Character variables use single quotes and %c format specifier'
  },
  {
    id: 'c_var_004',
    topicId: 'c_variables',
    question: 'Write a program to declare a double variable and print it.',
    mathSolution: 'Double variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159265359;\n    printf("Value of pi: %.10lf", pi);\n    return 0;\n}',
    hint: 'double has more precision than float, use %lf format specifier'
  },
  {
    id: 'c_var_005',
    topicId: 'c_variables',
    question: 'Write a program to declare multiple variables of different types in one line.',
    mathSolution: 'Multiple variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    float x = 1.5, y = 2.5;\n    char ch1 = \'X\', ch2 = \'Y\';\n    \n    printf("Integers: %d, %d, %d\\n", a, b, c);\n    printf("Floats: %.1f, %.1f\\n", x, y);\n    printf("Chars: %c, %c\\n", ch1, ch2);\n    \n    return 0;\n}',
    hint: 'You can declare multiple variables of same type separated by commas'
  },
  {
    id: 'c_var_006',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable initialization at declaration vs later.',
    mathSolution: 'Variable initialization timing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;        // Initialized at declaration\n    int b;            // Declared but not initialized\n    b = 10;           // Initialized later\n    \n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    \n    return 0;\n}',
    hint: 'Variables can be initialized at declaration or later in the code'
  },
  {
    id: 'c_var_007',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate uninitialized variable (shows garbage value).',
    mathSolution: 'Uninitialized variables contain garbage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x;  // Uninitialized - contains garbage value\n    float y;  // Uninitialized - contains garbage\n    char z;  // Uninitialized - contains garbage\n    \n    printf("x (uninitialized): %d\\n", x);\n    printf("y (uninitialized): %f\\n", y);\n    printf("z (uninitialized): %c\\n", z);\n    \n    return 0;\n}',
    hint: 'Local variables contain garbage values if not initialized'
  },
  {
    id: 'c_var_008',
    topicId: 'c_variables',
    question: 'Write a program to find the size of different variable types using sizeof operator.',
    mathSolution: 'Size of variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a;\n    float b;\n    double c;\n    char d;\n    \n    printf("Size of int: %lu bytes\\n", sizeof(a));\n    printf("Size of float: %lu bytes\\n", sizeof(b));\n    printf("Size of double: %lu bytes\\n", sizeof(c));\n    printf("Size of char: %lu byte\\n", sizeof(d));\n    \n    return 0;\n}',
    hint: 'sizeof operator returns size in bytes'
  },
  {
    id: 'c_var_009',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable naming conventions (valid and invalid).',
    mathSolution: 'Variable naming rules',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Valid variable names\n    int age = 25;\n    int _salary = 50000;\n    int num1 = 10;\n    int student_age = 20;\n    \n    // Invalid names (commented out - would cause errors)\n    // int 1num = 10;     // Cannot start with digit\n    // int my-name = 5;    // Hyphen not allowed\n    // int float = 3.14;   // Keywords not allowed\n    // int my name = 10;    // Spaces not allowed\n    \n    printf("age: %d\\n", age);\n    printf("_salary: %d\\n", _salary);\n    printf("num1: %d\\n", num1);\n    printf("student_age: %d\\n", student_age);\n    \n    return 0;\n}',
    hint: 'Variable names can have letters, digits, underscore; cannot start with digit'
  },
  {
    id: 'c_var_010',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate case sensitivity in variable names.',
    mathSolution: 'C is case sensitive',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    int Age = 30;\n    int AGE = 40;\n    int aGe = 50;\n    \n    printf("age = %d\\n", age);\n    printf("Age = %d\\n", Age);\n    printf("AGE = %d\\n", AGE);\n    printf("aGe = %d\\n", aGe);\n    \n    return 0;\n}',
    hint: 'age, Age, AGE are all different variables in C'
  },

  // ========== INTEGER VARIABLES (QUESTIONS 11-20) ==========
  {
    id: 'c_var_011',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate different integer types: int, short, long.',
    mathSolution: 'Integer type modifiers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    short int si = 32000;\n    int i = 100000;\n    long int li = 5000000;\n    long long int lli = 9000000000;\n    \n    printf("short int: %d\\n", si);\n    printf("int: %d\\n", i);\n    printf("long int: %ld\\n", li);\n    printf("long long int: %lld\\n", lli);\n    \n    printf("\\nSizes:\\n");\n    printf("short: %lu bytes\\n", sizeof(si));\n    printf("int: %lu bytes\\n", sizeof(i));\n    printf("long: %lu bytes\\n", sizeof(li));\n    printf("long long: %lu bytes\\n", sizeof(lli));\n    \n    return 0;\n}',
    hint: 'Use %ld for long, %lld for long long'
  },
  {
    id: 'c_var_012',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate unsigned integer variables.',
    mathSolution: 'Unsigned integers (only positive)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int positive = 4294967295;\n    unsigned short small = 65535;\n    \n    printf("unsigned int max: %u\\n", positive);\n    printf("unsigned short max: %hu\\n", small);\n    \n    // This would give warning or error\n    // unsigned int neg = -10;  // Cannot store negative\n    \n    return 0;\n}',
    hint: 'unsigned variables store only non-negative values, use %u format specifier'
  },
  {
    id: 'c_var_013',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer overflow.',
    mathSolution: 'Integer overflow concept',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int max = INT_MAX;\n    printf("Maximum int: %d\\n", max);\n    \n    max = max + 1;  // Overflow\n    printf("After adding 1: %d (overflow)\\n", max);\n    \n    unsigned int umax = UINT_MAX;\n    printf("\\nUnsigned max: %u\\n", umax);\n    umax = umax + 1;\n    printf("After adding 1: %u (wraps to 0)\\n", umax);\n    \n    return 0;\n}',
    hint: 'Integers wrap around when they exceed their maximum value'
  },
  {
    id: 'c_var_014',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate different ways to initialize integers.',
    mathSolution: 'Integer initialization methods',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;        // Decimal\n    int b = 0b1010;    // Binary (C23) - may not work in older compilers\n    int c = 012;        // Octal\n    int d = 0xA;        // Hexadecimal\n    int e;              // Uninitialized\n    e = 10;             // Assignment later\n    \n    printf("Decimal 10: %d\\n", a);\n    printf("Binary 1010: %d\\n", b);\n    printf("Octal 12: %d\\n", c);\n    printf("Hex A: %d\\n", d);\n    printf("Assigned later: %d\\n", e);\n    \n    return 0;\n}',
    hint: 'Integers can be initialized in decimal, octal (prefix 0), or hex (prefix 0x)'
  },
  {
    id: 'c_var_015',
    topicId: 'c_variables',
    question: 'Write a program to swap two integer variables using a temporary variable.',
    mathSolution: 'Swapping with temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    int temp;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    temp = a;\n    a = b;\n    b = temp;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Use a temporary variable to hold one value during swap'
  },
  {
    id: 'c_var_016',
    topicId: 'c_variables',
    question: 'Write a program to swap two integer variables without using a temporary variable.',
    mathSolution: 'Swapping without temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a + b;\n    b = a - b;\n    a = a - b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Use addition and subtraction to swap without temp variable'
  },
  {
    id: 'c_var_017',
    topicId: 'c_variables',
    question: 'Write a program to swap two integers using XOR operator.',
    mathSolution: 'Swapping using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'XOR (^) can be used to swap values without overflow risk'
  },
  {
    id: 'c_var_018',
    topicId: 'c_variables',
    question: 'Write a program to find the maximum and minimum of two integers.',
    mathSolution: 'Max and min of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40;\n    int max, min;\n    \n    if(a > b) {\n        max = a;\n        min = b;\n    } else {\n        max = b;\n        min = a;\n    }\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Maximum = %d\\n", max);\n    printf("Minimum = %d\\n", min);\n    \n    return 0;\n}',
    hint: 'Use if-else or ternary operator to find max/min'
  },
  {
    id: 'c_var_019',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer variable scope inside blocks.',
    mathSolution: 'Variable scope',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;  // Outer scope\n    printf("Outer x = %d\\n", x);\n    \n    {\n        int y = 20;  // Inner scope\n        printf("Inner y = %d\\n", y);\n        printf("Inner can access outer x = %d\\n", x);\n        \n        x = 30;  // Modifying outer variable\n    }\n    \n    // printf("y = %d", y);  // Error: y not accessible here\n    printf("Outer x after modification = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Variables declared in inner blocks are not accessible outside'
  },
  {
    id: 'c_var_020',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer variable shadowing.',
    mathSolution: 'Variable shadowing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("Outer x = %d\\n", x);\n    \n    {\n        int x = 20;  // Shadows outer x\n        printf("Inner x (shadows outer) = %d\\n", x);\n        \n        {\n            int x = 30;  // Shadows both\n            printf("Innermost x = %d\\n", x);\n        }\n        \n        printf("Back to inner x = %d\\n", x);\n    }\n    \n    printf("Back to outer x = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Inner variables can have same name and hide outer variables'
  },

  // ========== FLOAT AND DOUBLE VARIABLES (QUESTIONS 21-30) ==========
  {
    id: 'c_var_021',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate float and double precision differences.',
    mathSolution: 'Precision of float vs double',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 1.0 / 3.0;\n    double d = 1.0 / 3.0;\n    \n    printf("float (6 decimal): %.6f\\n", f);\n    printf("float (12 decimal): %.12f\\n", f);\n    printf("double (6 decimal): %.6lf\\n", d);\n    printf("double (12 decimal): %.12lf\\n", d);\n    printf("double (15 decimal): %.15lf\\n", d);\n    \n    return 0;\n}',
    hint: 'double has more precision than float'
  },
  {
    id: 'c_var_022',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate scientific notation for float variables.',
    mathSolution: 'Scientific notation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float avogadro = 6.022e23;      // 6.022 × 10^23\n    float planck = 6.626e-34;       // 6.626 × 10^-34\n    double speed = 3.0e8;           // 3.0 × 10^8\n    \n    printf("Avogadro number: %e\\n", avogadro);\n    printf("Planck constant: %e\\n", planck);\n    printf("Speed of light: %.2e m/s\\n", speed);\n    \n    return 0;\n}',
    hint: 'Use e or E for scientific notation, %e format specifier'
  },
  {
    id: 'c_var_023',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate floating point precision issues.',
    mathSolution: 'Floating point precision problems',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a = 0.1;\n    float b = 0.2;\n    float sum = a + b;\n    \n    printf("0.1 + 0.2 = %.20f\\n", sum);\n    printf("Expected: 0.3\\n");\n    \n    if(sum == 0.3) {\n        printf("Equal\\n");\n    } else {\n        printf("Not equal due to precision issues\\n");\n    }\n    \n    float tolerance = 0.000001;\n    if(fabs(sum - 0.3) < tolerance) {\n        printf("Approximately equal within tolerance\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Never compare floats directly with ==, use tolerance'
  },
{
    id: 'c_var_024',
    topicId: 'c_variables',
    question: 'Write a program to convert Celsius to Fahrenheit using float variables.',
    mathSolution: 'Temperature conversion using formula F = (C × 9/5) + 32',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float celsius = 25.0;\n    float fahrenheit;\n    \n    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;\n    \n    printf("%.2f°C = %.2f°F\\n", celsius, fahrenheit);\n    \n    return 0;\n}',
    hint: 'Formula: F = (C × 9/5) + 32'
},
{
    id: 'c_var_025',
    topicId: 'c_variables',
    question: 'Write a program to calculate area of circle using float variables.',
    mathSolution: 'Area of circle using formula A = πr²',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float radius = 7.5;\n    float area;\n    const float PI = 3.14159;\n    \n    area = PI * radius * radius;\n    \n    printf("Radius = %.2f\\n", radius);\n    printf("Area = %.2f square units\\n", area);\n    \n    return 0;\n}',
    hint: 'Area = πr²'
},

  {
    id: 'c_var_026',
    topicId: 'c_variables',
    question: 'Write a program to calculate simple interest using float variables.',
    mathSolution: 'Simple Interest = (P × R × T)/100',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float principal, rate, time, interest;\n    \n    printf("Enter principal amount: ");\n    scanf("%f", &principal);\n    printf("Enter rate of interest: ");\n    scanf("%f", &rate);\n    printf("Enter time period (years): ");\n    scanf("%f", &time);\n    \n    interest = (principal * rate * time) / 100;\n    \n    printf("\\nPrincipal: %.2f\\n", principal);\n    printf("Rate: %.2f%%\\n", rate);\n    printf("Time: %.2f years\\n", time);\n    printf("Simple Interest: %.2f\\n", interest);\n    printf("Total Amount: %.2f\\n", principal + interest);\n    \n    return 0;\n}',
    hint: 'Simple interest formula: (P × R × T)/100'
  },
  {
    id: 'c_var_027',
    topicId: 'c_variables',
    question: 'Write a program to calculate compound interest using double variables.',
    mathSolution: 'A = P(1 + r/n)^(nt)',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double principal, rate, time, amount, interest;\n    int n;\n    \n    printf("Enter principal amount: ");\n    scanf("%lf", &principal);\n    printf("Enter annual rate (as decimal, e.g., 0.05 for 5%%): ");\n    scanf("%lf", &rate);\n    printf("Enter time (years): ");\n    scanf("%lf", &time);\n    printf("Enter number of times compounded per year: ");\n    scanf("%d", &n);\n    \n    amount = principal * pow(1 + rate/n, n * time);\n    interest = amount - principal;\n    \n    printf("\\nPrincipal: %.2lf\\n", principal);\n    printf("Rate: %.2lf%%\\n", rate * 100);\n    printf("Time: %.2lf years\\n", time);\n    printf("Compounded %d times per year\\n", n);\n    printf("Compound Interest: %.2lf\\n", interest);\n    printf("Total Amount: %.2lf\\n", amount);\n    \n    return 0;\n}',
    hint: 'Use pow() function from math.h for exponentiation'
  },
  {
    id: 'c_var_028',
    topicId: 'c_variables',
    question: 'Write a program to find the roots of a quadratic equation using double variables.',
    mathSolution: 'ax² + bx + c = 0, roots = [-b ± √(b² - 4ac)] / 2a',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, discriminant, root1, root2, realPart, imagPart;\n    \n    printf("Enter coefficients a, b, c: ");\n    scanf("%lf %lf %lf", &a, &b, &c);\n    \n    discriminant = b * b - 4 * a * c;\n    \n    if(discriminant > 0) {\n        root1 = (-b + sqrt(discriminant)) / (2 * a);\n        root2 = (-b - sqrt(discriminant)) / (2 * a);\n        printf("Roots are real and different: %.2lf and %.2lf\\n", root1, root2);\n    } else if(discriminant == 0) {\n        root1 = root2 = -b / (2 * a);\n        printf("Roots are real and equal: %.2lf and %.2lf\\n", root1, root2);\n    } else {\n        realPart = -b / (2 * a);\n        imagPart = sqrt(-discriminant) / (2 * a);\n        printf("Roots are complex: %.2lf + %.2lfi and %.2lf - %.2lfi\\n", realPart, imagPart, realPart, imagPart);\n    }\n    \n    return 0;\n}',
    hint: 'Use discriminant to determine nature of roots'
  },
  {
    id: 'c_var_029',
    topicId: 'c_variables',
    question: 'Write a program to calculate the distance between two points using double variables.',
    mathSolution: 'Distance = √[(x₂-x₁)² + (y₂-y₁)²]',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double x1, y1, x2, y2, distance;\n    \n    printf("Enter coordinates of first point (x1 y1): ");\n    scanf("%lf %lf", &x1, &y1);\n    printf("Enter coordinates of second point (x2 y2): ");\n    scanf("%lf %lf", &x2, &y2);\n    \n    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));\n    \n    printf("\\nFirst point: (%.2lf, %.2lf)\\n", x1, y1);\n    printf("Second point: (%.2lf, %.2lf)\\n", x2, y2);\n    printf("Distance between points: %.2lf\\n", distance);\n    \n    return 0;\n}',
    hint: 'Use sqrt() and pow() from math.h'
  },
  {
    id: 'c_var_030',
    topicId: 'c_variables',
    question: 'Write a program to calculate the area of a triangle using Herons formula with double variables.',
    mathSolution: 'Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, s, area;\n    \n    printf("Enter three sides of triangle: ");\n    scanf("%lf %lf %lf", &a, &b, &c);\n    \n    if(a + b > c && a + c > b && b + c > a) {\n        s = (a + b + c) / 2;\n        area = sqrt(s * (s - a) * (s - b) * (s - c));\n        \n        printf("\\nTriangle sides: %.2lf, %.2lf, %.2lf\\n", a, b, c);\n        printf("Semi-perimeter: %.2lf\\n", s);\n        printf("Area of triangle: %.2lf square units\\n", area);\n    } else {\n        printf("Invalid triangle! Sides do not satisfy triangle inequality.\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Check triangle inequality before calculating area'
  },

  // ========== CHARACTER VARIABLES (QUESTIONS 31-40) ==========
  {
    id: 'c_var_031',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate character variables and their ASCII values.',
    mathSolution: 'Characters and ASCII',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch1 = \'A\';\n    char ch2 = \'a\';\n    char ch3 = \'0\';\n    char ch4 = \'$\';\n    \n    printf("Character: %c, ASCII: %d\\n", ch1, ch1);\n    printf("Character: %c, ASCII: %d\\n", ch2, ch2);\n    printf("Character: %c, ASCII: %d\\n", ch3, ch3);\n    printf("Character: %c, ASCII: %d\\n", ch4, ch4);\n    \n    return 0;\n}',
    hint: 'Characters are stored as integers (ASCII values)'
  },
  {
    id: 'c_var_032',
    topicId: 'c_variables',
    question: 'Write a program to convert uppercase to lowercase using character variables.',
    mathSolution: 'Case conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char upper = \'M\';\n    char lower;\n    \n    lower = upper + 32;\n    \n    printf("Uppercase: %c\\n", upper);\n    printf("Lowercase: %c\\n", lower);\n    \n    char ch = \'z\';\n    printf("\\n\'%c\' in uppercase: %c\\n", ch, ch - 32);\n    \n    return 0;\n}',
    hint: 'ASCII difference between uppercase and lowercase is 32'
  },
  {
    id: 'c_var_033',
    topicId: 'c_variables',
    question: 'Write a program to check if a character is vowel or consonant.',
    mathSolution: 'Vowel/consonant check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n       ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        printf("%c is a vowel\\n", ch);\n    } else {\n        printf("%c is a consonant\\n", ch);\n    }\n    \n    return 0;\n}',
    hint: 'Check for both uppercase and lowercase vowels'
  },
  {
    id: 'c_var_034',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate escape sequences in character variables.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char newline = \'\\n\';\n    char tab = \'\\t\';\n    char backslash = \'\\\\\';\n    char singlequote = \'\\\'\';\n    char doublequote = \'\"\';\n    \n    printf("Newline character: First line%cSecond line\\n", newline);\n    printf("Tab character: Before%cAfter\\n", tab);\n    printf("Backslash: %c\\n", backslash);\n    printf("Single quote: %c\\n", singlequote);\n    printf("Double quote: %c\\n", doublequote);\n    \n    return 0;\n}',
    hint: 'Escape sequences start with backslash'
  },
  {
    id: 'c_var_035',
    topicId: 'c_variables',
    question: 'Write a program to read a character and print its next character.',
    mathSolution: 'Character arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    printf("You entered: %c\\n", ch);\n    printf("Next character: %c\\n", ch + 1);\n    printf("ASCII of next: %d\\n", ch + 1);\n    \n    return 0;\n}',
    hint: 'Characters can be used in arithmetic operations'
  },
  {
    id: 'c_var_036',
    topicId: 'c_variables',
    question: 'Write a program to print all ASCII characters from 32 to 126.',
    mathSolution: 'ASCII table printable characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i;\n    \n    printf("ASCII Table (32 to 126):\\n");\n    printf("----------------------\\n");\n    \n    for(i = 32; i <= 126; i++) {\n        printf("ASCII %3d: %c", i, i);\n        if((i - 31) % 5 == 0) printf("\\n");\n        else printf("\\t");\n    }\n    \n    return 0;\n}',
    hint: 'Characters are stored as integers, can be used in loops'
  },
  {
    id: 'c_var_037',
    topicId: 'c_variables',
    question: 'Write a program to count vowels and consonants in a string using character variables.',
    mathSolution: 'Count vowels and consonants',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[100];\n    int vowels = 0, consonants = 0, i;\n    \n    printf("Enter a string: ");\n    fgets(str, sizeof(str), stdin);\n    \n    for(i = 0; str[i] != \'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(isalpha(ch)) {\n            if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\') {\n                vowels++;\n            } else {\n                consonants++;\n            }\n        }\n    }\n    \n    printf("String: %s", str);\n    printf("Vowels: %d\\n", vowels);\n    printf("Consonants: %d\\n", consonants);\n    \n    return 0;\n}',
    hint: 'Use tolower() from ctype.h to handle both cases'
  },
  {
    id: 'c_var_038',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate digit character to integer conversion.',
    mathSolution: 'char digit to int conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char digit1 = \'5\';\n    char digit2 = \'9\';\n    \n    int num1 = digit1 - \'0\';\n    int num2 = digit2 - \'0\';\n    \n    printf("Character digit: %c -> Integer: %d\\n", digit1, num1);\n    printf("Character digit: %c -> Integer: %d\\n", digit2, num2);\n    \n    int sum = num1 + num2;\n    printf("Sum of digits: %d + %d = %d\\n", num1, num2, sum);\n    \n    return 0;\n}',
    hint: 'Subtract \'0\' from digit character to get integer value'
  },
  {
    id: 'c_var_039',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate character classification using ctype.h functions.',
    mathSolution: 'Character classification',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char test_chars[] = {\'A\', \'a\', \'5\', \'$\', \' \', \'\\n\', \'Z\', \'z\', \'0\', \'\\t\'};\n    int n = sizeof(test_chars) / sizeof(test_chars[0]);\n    \n    printf("Character Classification\\n\\n");\n    printf("Char  isdigit isalpha isalnum islower isupper isspace ispunct\\n");\n    printf("----  ------- ------- ------- ------- ------- ------- -------\\n");\n    \n    for(int i = 0; i < n; i++) {\n        char c = test_chars[i];\n        printf("  %c   %7d %7d %7d %7d %7d %7d %7d\\n",\n               c,\n               isdigit(c) ? 1 : 0,\n               isalpha(c) ? 1 : 0,\n               isalnum(c) ? 1 : 0,\n               islower(c) ? 1 : 0,\n               isupper(c) ? 1 : 0,\n               isspace(c) ? 1 : 0,\n               ispunct(c) ? 1 : 0);\n    }\n    \n    return 0;\n}',
    hint: 'ctype.h functions test character properties'
  },
  {
    id: 'c_var_040',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate octal and hexadecimal escape sequences in characters.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char octal_A = \'\\101\';\n    char octal_B = \'\\102\';\n    char hex_A = \'\\x41\';\n    char hex_Z = \'\\x5A\';\n    char hex_a = \'\\x61\';\n    \n    printf("Octal \\\\101: %c\\n", octal_A);\n    printf("Octal \\\\102: %c\\n", octal_B);\n    printf("Hex \\\\x41: %c\\n", hex_A);\n    printf("Hex \\\\x5A: %c\\n", hex_Z);\n    printf("Hex \\\\x61: %c\\n", hex_a);\n    \n    return 0;\n}',
    hint: 'Use \\ooo for octal and \\xhh for hexadecimal escape sequences'
  },
  //datatype
   {
    id: 'c_datatypes_001',
    topicId: 'c_datatypes',
    question: 'Declare variables of basic data types: int, float, double, and char.',
    mathSolution: 'Basic data type declarations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int integerVar = 10;\n    float floatVar = 3.14;\n    double doubleVar = 3.14159;\n    char charVar = \'A\';\n    \n    printf("int: %d\\n", integerVar);\n    printf("float: %.2f\\n", floatVar);\n    printf("double: %.5lf\\n", doubleVar);\n    printf("char: %c\\n", charVar);\n    \n    return 0;\n}',
    hint: 'Use format: data_type variable_name;'
  },
  {
    id: 'c_datatypes_002',
    topicId: 'c_datatypes',
    question: 'Initialize an int variable "age" with value 25, float "price" with 99.99, and char "grade" with "A".',
    mathSolution: 'Variable initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float price = 99.99f;\n    char grade = \'A\';\n    \n    printf("Age: %d\\n", age);\n    printf("Price: %.2f\\n", price);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}',
    hint: 'Use = for initialization, f suffix for float'
  },
  {
    id: 'c_datatypes_003',
    topicId: 'c_datatypes',
    question: 'Find the size of int, float, double, and char using sizeof operator.',
    mathSolution: 'Using sizeof operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Size of int: %zu bytes\\n", sizeof(int));\n    printf("Size of float: %zu bytes\\n", sizeof(float));\n    printf("Size of double: %zu bytes\\n", sizeof(double));\n    printf("Size of char: %zu byte\\n", sizeof(char));\n    \n    return 0;\n}',
    hint: 'sizeof returns size in bytes, use %zu format specifier'
  },
  {
    id: 'c_datatypes_004',
    topicId: 'c_datatypes',
    question: 'Print the minimum and maximum values of int type using limits.h.',
    mathSolution: 'Integer ranges from limits.h',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    printf("INT_MIN: %d\\n", INT_MIN);\n    printf("INT_MAX: %d\\n", INT_MAX);\n    \n    return 0;\n}',
    hint: 'limits.h contains constants for integer type ranges'
  },
  {
    id: 'c_datatypes_005',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference between float and double precision by dividing 1 by 3.',
    mathSolution: 'Float vs Double precision',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 1.0f / 3.0f;\n    double d = 1.0 / 3.0;\n    printf("float: %.15f\\n", f);\n    printf("double: %.15lf\\n", d);\n    \n    return 0;\n}',
    hint: 'double shows more decimal digits of precision'
  },
  {
    id: 'c_datatypes_006',
    topicId: 'c_datatypes',
    question: 'Use correct format specifiers to print an int, float, double, and char.',
    mathSolution: 'Format specifiers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 42;\n    float f = 3.14f;\n    double d = 2.718;\n    char c = \'X\';\n    printf("int: %%d = %d\\n", i);\n    printf("float: %%f = %f\\n", f);\n    printf("double: %%lf = %lf\\n", d);\n    printf("char: %%c = %c\\n", c);\n    \n    return 0;\n}',
    hint: '%d for int, %f for float, %lf for double, %c for char'
  },
  {
    id: 'c_datatypes_007',
    topicId: 'c_datatypes',
    question: 'Declare a signed int and an unsigned int, assign negative and positive values.',
    mathSolution: 'Signed vs Unsigned',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    signed int si = -100;\n    unsigned int ui = 100;\n    printf("signed: %d\\n", si);\n    printf("unsigned: %u\\n", ui);\n    \n    return 0;\n}',
    hint: 'unsigned stores only non-negative values, use %u format specifier'
  },
  {
    id: 'c_datatypes_008',
    topicId: 'c_datatypes',
    question: 'Declare short, long, and long long int variables with appropriate suffixes.',
    mathSolution: 'Integer type modifiers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    short int s = 1000;\n    long int l = 100000L;\n    long long int ll = 10000000000LL;\n    printf("short: %d\\n", s);\n    printf("long: %ld\\n", l);\n    printf("long long: %lld\\n", ll);\n    \n    return 0;\n}',
    hint: 'Use L suffix for long, LL for long long'
  },
  {
    id: 'c_datatypes_009',
    topicId: 'c_datatypes',
    question: 'Create a void pointer and use it to point to an integer variable.',
    mathSolution: 'Void pointer usage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    void *ptr = &num;\n    printf("Value: %d\\n", *(int*)ptr);\n    \n    return 0;\n}',
    hint: 'void* is generic, must cast before dereferencing'
  },
  {
    id: 'c_datatypes_010',
    topicId: 'c_datatypes',
    question: 'Declare and use a boolean variable using stdbool.h.',
    mathSolution: 'Boolean type in C',
    codeSolution: '#include <stdio.h>\n#include <stdbool.h>\n\nint main() {\n    bool isReady = true;\n    if(isReady) {\n        printf("Ready!\\n");\n    }\n    \n    return 0;\n}',
    hint: 'bool, true, false are defined in stdbool.h'
  },

  // ========== INTEGER DATA TYPES (QUESTIONS 11-20) ==========
  {
    id: 'c_datatypes_011',
    topicId: 'c_datatypes',
    question: 'Demonstrate integer overflow by adding 1 to INT_MAX.',
    mathSolution: 'Integer overflow',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int max = INT_MAX;\n    printf("MAX: %d\\n", max);\n    max = max + 1;\n    printf("MAX + 1: %d (overflow)\\n", max);\n    \n    return 0;\n}',
    hint: 'Integers wrap around when exceeding maximum value'
  },
  {
    id: 'c_datatypes_012',
    topicId: 'c_datatypes',
    question: 'Write the decimal number 42 in octal, hexadecimal, and binary representations.',
    mathSolution: 'Integer representations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int decimal = 42;\n    printf("Decimal: %d\\n", decimal);\n    printf("Octal: %o\\n", decimal);\n    printf("Hex: %x\\n", decimal);\n    \n    return 0;\n}',
    hint: 'Octal prefix: 0, Hex prefix: 0x'
  },
  {
    id: 'c_datatypes_013',
    topicId: 'c_datatypes',
    question: 'Add a char and an int, show that char is promoted to int.',
    mathSolution: 'Integer promotion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'A\';  // ASCII 65\n    int num = 10;\n    int result = ch + num;\n    printf("\'A\'(%d) + %d = %d\\n", ch, num, result);\n    \n    return 0;\n}',
    hint: 'char is promoted to int in arithmetic operations'
  },
  {
    id: 'c_datatypes_014',
    topicId: 'c_datatypes',
    question: 'Use integer suffixes to specify long, unsigned, and long long constants.',
    mathSolution: 'Integer suffixes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    long l = 42L;\n    unsigned u = 42U;\n    long long ll = 42LL;\n    unsigned long ul = 42UL;\n    printf("long: %ld\\n", l);\n    printf("unsigned: %u\\n", u);\n    printf("long long: %lld\\n", ll);\n    printf("unsigned long: %lu\\n", ul);\n    \n    return 0;\n}',
    hint: 'L = long, U = unsigned, LL = long long, can be combined'
  },
  {
    id: 'c_datatypes_015',
    topicId: 'c_datatypes',
    question: 'Compare the sizes of int and long on your system using sizeof.',
    mathSolution: 'Int vs Long size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("int size: %zu bytes\\n", sizeof(int));\n    printf("long size: %zu bytes\\n", sizeof(long));\n    if(sizeof(int) == sizeof(long))\n        printf("Same size\\n");\n    else\n        printf("Different sizes\\n");\n    \n    return 0;\n}',
    hint: 'Sizes vary by system, long is at least as large as int'
  },
  {
    id: 'c_datatypes_016',
    topicId: 'c_datatypes',
    question: 'Use size_t for array indexing and print its size.',
    mathSolution: 'size_t data type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    for(size_t i = 0; i < 5; i++) {\n        printf("arr[%zu] = %d\\n", i, arr[i]);\n    }\n    printf("size_t size: %zu bytes\\n", sizeof(size_t));\n    \n    return 0;\n}',
    hint: 'size_t is unsigned, use %zu format specifier'
  },
  {
    id: 'c_datatypes_017',
    topicId: 'c_datatypes',
    question: 'Calculate the difference between two pointers using ptrdiff_t.',
    mathSolution: 'ptrdiff_t for pointer difference',
    codeSolution: '#include <stdio.h>\n#include <stddef.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int *p1 = &arr[0];\n    int *p2 = &arr[4];\n    ptrdiff_t diff = p2 - p1;\n    printf("Difference: %td elements\\n", diff);\n    \n    return 0;\n}',
    hint: 'ptrdiff_t is signed, use %td format specifier'
  },
  {
    id: 'c_datatypes_018',
    topicId: 'c_datatypes',
    question: 'Declare variables of fixed-width integer types: int8_t, uint16_t, int32_t.',
    mathSolution: 'Fixed-width integer types',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\nint main() {\n    int8_t i8 = 127;\n    uint16_t u16 = 65535;\n    int32_t i32 = 2147483647;\n    printf("int8_t: %d\\n", i8);\n    printf("uint16_t: %u\\n", u16);\n    printf("int32_t: %d\\n", i32);\n    \n    return 0;\n}',
    hint: 'stdint.h provides types with exact bit widths'
  },
  {
    id: 'c_datatypes_019',
    topicId: 'c_datatypes',
    question: 'Use int_least16_t and int_fast32_t types and print their sizes.',
    mathSolution: 'Least and fast integer types',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n\nint main() {\n    int_least16_t least = 100;\n    int_fast32_t fast = 1000;\n    printf("int_least16_t size: %zu bytes\\n", sizeof(least));\n    printf("int_fast32_t size: %zu bytes\\n", sizeof(fast));\n    \n    return 0;\n}',
    hint: 'least = minimum size, fast = fastest type with minimum bits'
  },
  {
    id: 'c_datatypes_020',
    topicId: 'c_datatypes',
    question: 'Print the maximum values of intmax_t and uintmax_t.',
    mathSolution: 'Maximum-width integer types',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n#include <inttypes.h>\n\nint main() {\n    intmax_t imax = INTMAX_MAX;\n    uintmax_t umax = UINTMAX_MAX;\n    printf("intmax_t max: %jd\\n", imax);\n    printf("uintmax_t max: %ju\\n", umax);\n    \n    return 0;\n}',
    hint: 'intmax_t is largest signed, uintmax_t largest unsigned'
  },

  // ========== FLOATING POINT DATA TYPES (QUESTIONS 21-30) ==========
  {
    id: 'c_datatypes_021',
    topicId: 'c_datatypes',
    question: 'Declare float, double, and long double variables with appropriate suffixes.',
    mathSolution: 'Floating point declarations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 3.14f;\n    double d = 3.14159;\n    long double ld = 3.1415926535L;\n    printf("float: %.2f\\n", f);\n    printf("double: %.5lf\\n", d);\n    printf("long double: %.10Lf\\n", ld);\n    \n    return 0;\n}',
    hint: 'f suffix for float, L for long double, no suffix for double'
  },
  {
    id: 'c_datatypes_022',
    topicId: 'c_datatypes',
    question: 'Print a number in scientific notation using %e format specifier.',
    mathSolution: 'Scientific notation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double num = 12345.6789;\n    printf("%%e: %e\\n", num);\n    printf("%%E: %E\\n", num);\n    printf("%%g: %g\\n", num);\n    \n    return 0;\n}',
    hint: '%e for scientific, %g chooses shortest representation'
  },
  {
    id: 'c_datatypes_023',
    topicId: 'c_datatypes',
    question: 'Demonstrate floating point precision issues by comparing 0.1 + 0.2 with 0.3.',
    mathSolution: 'Floating point precision',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float sum = 0.1f + 0.2f;\n    if(sum == 0.3f)\n        printf("Equal\\n");\n    else\n        printf("Not equal: %.20f\\n", sum);\n    \n    return 0;\n}',
    hint: 'Never compare floats directly with == due to precision issues'
  },
  {
    id: 'c_datatypes_024',
    topicId: 'c_datatypes',
    question: 'Use an epsilon value to correctly compare two floating point numbers.',
    mathSolution: 'Float comparison with epsilon',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float a = 0.1f + 0.2f;\n    float b = 0.3f;\n    float epsilon = 0.000001f;\n    float diff = a - b;\n    \n    if(diff < 0) diff = -diff;\n    \n    if(diff < epsilon)\n        printf("Approximately equal\\n");\n    else\n        printf("Not equal\\n");\n    \n    return 0;\n}',
    hint: 'Compare absolute difference with a small epsilon value'
  },
  {
    id: 'c_datatypes_025',
    topicId: 'c_datatypes',
    question: 'Generate infinity and NaN by dividing by zero and zero by zero.',
    mathSolution: 'Infinity and NaN',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float infinity = 1.0f / 0.0f;\n    float notANumber = 0.0f / 0.0f;\n    \n    printf("Infinity: %f\\n", infinity);\n    printf("NaN: %f\\n", notANumber);\n    \n    return 0;\n}',
    hint: '1.0/0.0 gives infinity, 0.0/0.0 gives NaN'
  },
  {
    id: 'c_datatypes_026',
    topicId: 'c_datatypes',
    question: 'Print the minimum and maximum values for float using float.h.',
    mathSolution: 'Float ranges',
    codeSolution: '#include <stdio.h>\n#include <float.h>\n\nint main() {\n    printf("FLT_MIN: %e\\n", FLT_MIN);\n    printf("FLT_MAX: %e\\n", FLT_MAX);\n    printf("FLT_DIG: %d digits precision\\n", FLT_DIG);\n    \n    return 0;\n}',
    hint: 'float.h contains floating point limits'
  },
  {
    id: 'c_datatypes_027',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference in precision between float and double.',
    mathSolution: 'Float vs Double precision comparison',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 1.0f / 3.0f;\n    double d = 1.0 / 3.0;\n    printf("float:  %.15f\\n", f);\n    printf("double: %.15lf\\n", d);\n    printf("float size: %zu, double size: %zu\\n", sizeof(f), sizeof(d));\n    \n    return 0;\n}',
    hint: 'double has more precision and larger size'
  },
  {
    id: 'c_datatypes_028',
    topicId: 'c_datatypes',
    question: 'Format floating point numbers with specific decimal places.',
    mathSolution: 'Formatting float output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159265359;\n    printf("Default: %f\\n", pi);\n    printf("2 decimals: %.2f\\n", pi);\n    printf("4 decimals: %.4f\\n", pi);\n    printf("10 decimals: %.10f\\n", pi);\n    \n    return 0;\n}',
    hint: 'Use %.nf where n is number of decimal places'
  },
  {
    id: 'c_datatypes_029',
    topicId: 'c_datatypes',
    question: 'Convert a double to int and observe the loss of fractional part.',
    mathSolution: 'Double to int conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159;\n    int intPi = (int)pi;\n    printf("double: %f\\n", pi);\n    printf("int: %d (fraction lost)\\n", intPi);\n    \n    return 0;\n}',
    hint: 'Casting to int truncates the fractional part'
  },
  {
    id: 'c_datatypes_030',
    topicId: 'c_datatypes',
    question: 'Use long double for high precision calculations.',
    mathSolution: 'Long double precision',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    long double pi = 3.14159265358979323846L;\n    printf("long double: %.20Lf\\n", pi);\n    printf("Size: %zu bytes\\n", sizeof(pi));\n    \n    return 0;\n}',
    hint: 'Use %Lf format specifier for long double'
  },

  // ========== CHARACTER DATA TYPES (QUESTIONS 31-40) ==========
  {
    id: 'c_datatypes_031',
    topicId: 'c_datatypes',
    question: 'Declare a char variable and print its value as character and as integer.',
    mathSolution: 'Char as character and ASCII',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'A\';\n    printf("Character: %c\\n", ch);\n    printf("ASCII value: %d\\n", ch);\n    \n    return 0;\n}',
    hint: 'char is stored as integer (ASCII value)'
  },
  {
    id: 'c_datatypes_032',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference between signed char and unsigned char.',
    mathSolution: 'Signed vs Unsigned char',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    signed char sc = -100;\n    unsigned char uc = 200;\n    printf("signed: %d\\n", sc);\n    printf("unsigned: %u\\n", uc);\n    \n    return 0;\n}',
    hint: 'signed char range: -128 to 127, unsigned: 0 to 255'
  },
  {
    id: 'c_datatypes_033',
    topicId: 'c_datatypes',
    question: 'Use escape sequences to print special characters.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Newline: First\\nSecond\\n");\n    printf("Tab: Before\\tAfter\\n");\n    printf("Backslash: \\\\ \\n");\n    printf("Quote: \\"Hello\\"\\n");\n    \n    return 0;\n}',
    hint: 'Common escapes: \\n, \\t, \\\\, \\", \\\''
  },
  {
    id: 'c_datatypes_034',
    topicId: 'c_datatypes',
    question: 'Print characters using their ASCII values in a loop.',
    mathSolution: 'ASCII values to characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i = 65; i <= 70; i++) {\n        printf("ASCII %d: %c\\n", i, i);\n    }\n    \n    return 0;\n}',
    hint: 'ASCII 65-70 are A, B, C, D, E, F'
  },
  {
    id: 'c_datatypes_035',
    topicId: 'c_datatypes',
    question: 'Use octal and hexadecimal escape sequences in character constants.',
    mathSolution: 'Octal and hex escapes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char octal = \'\\101\';  // Octal 101 = \'A\'\n    char hex = \'\\x42\';     // Hex 42 = \'B\'\n    printf("Octal: %c, Hex: %c\\n", octal, hex);\n    \n    return 0;\n}',
    hint: '\\ooo for octal, \\xhh for hexadecimal'
  },
  {
    id: 'c_datatypes_036',
    topicId: 'c_datatypes',
    question: 'Declare and initialize a wide character using wchar_t.',
    mathSolution: 'Wide characters',
    codeSolution: '#include <stdio.h>\n#include <wchar.h>\n#include <locale.h>\n\nint main() {\n    setlocale(LC_ALL, "");\n    wchar_t wch = L\'A\';\n    wprintf(L"Wide char: %lc\\n", wch);\n    \n    return 0;\n}',
    hint: 'Use L prefix, %lc for printing, need setlocale()'
  },
  {
    id: 'c_datatypes_037',
    topicId: 'c_datatypes',
    question: 'Convert a character to uppercase using arithmetic.',
    mathSolution: 'Char arithmetic for case conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char lower = \'a\';\n    char upper = lower - 32;  // \'a\' - 32 = \'A\'\n    printf("%c -> %c\\n", lower, upper);\n    \n    return 0;\n}',
    hint: 'ASCII: \'a\'=97, \'A\'=65, difference is 32'
  },
  {
    id: 'c_datatypes_038',
    topicId: 'c_datatypes',
    question: 'Check if a character is digit, letter, or special character.',
    mathSolution: 'Character classification',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'7\';\n    if(ch >= \'0\' && ch <= \'9\')\n        printf("Digit\\n");\n    else if((ch >= \'A\' && ch <= \'Z\') || (ch >= \'a\' && ch <= \'z\'))\n        printf("Letter\\n");\n    else\n        printf("Special\\n");\n    \n    return 0;\n}',
    hint: 'Use ASCII ranges for classification'
  },
  {
    id: 'c_datatypes_039',
    topicId: 'c_datatypes',
    question: 'Demonstrate char16_t and char32_t types from uchar.h.',
    mathSolution: 'UTF-16 and UTF-32 characters',
    codeSolution: '#include <stdio.h>\n#include <uchar.h>\n\nint main() {\n    char16_t c16 = u\'A\';\n    char32_t c32 = U\'B\';\n    printf("char16_t size: %zu\\n", sizeof(c16));\n    printf("char32_t size: %zu\\n", sizeof(c32));\n    \n    return 0;\n}',
    hint: 'Use u prefix for UTF-16, U for UTF-32'
  },
  {
    id: 'c_datatypes_040',
    topicId: 'c_datatypes',
    question: 'Create a string (character array) and print it.',
    mathSolution: 'String as char array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    char name[20] = "John";\n    printf("%s\\n", str);\n    printf("%s\\n", name);\n    \n    return 0;\n}',
    hint: 'Strings are null-terminated character arrays'
  },
  //operator
   {
    id: 'c_operators_001',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate arithmetic operators: +, -, *, /, %.',
    mathSolution: 'Basic arithmetic operations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 15, b = 4;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Addition (a + b) = %d\\n", a + b);\n    printf("Subtraction (a - b) = %d\\n", a - b);\n    printf("Multiplication (a * b) = %d\\n", a * b);\n    printf("Division (a / b) = %d (integer division)\\n", a / b);\n    printf("Modulus (a %% b) = %d (remainder)\\n", a % b);\n    \n    return 0;\n}',
    hint: 'Arithmetic operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulus/remainder)'
  },
  {
    id: 'c_operators_002',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate integer division vs float division.',
    mathSolution: 'Integer vs float division',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n    float x = 10.0f, y = 3.0f;\n    \n    printf("Integer division: %d / %d = %d\\n", a, b, a / b);\n    printf("Float division: %.1f / %.1f = %.2f\\n", x, y, x / y);\n    \n    // Mixed type division\n    printf("Mixed division (int/float): %d / %.1f = %.2f\\n", a, y, a / y);\n    printf("Mixed division (float/int): %.1f / %d = %.2f\\n", x, b, x / b);\n    \n    return 0;\n}',
    hint: 'Integer division truncates toward zero; float division gives decimal results'
  },
  {
    id: 'c_operators_003',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate modulus operator with positive and negative numbers.',
    mathSolution: 'Modulus with negative numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("10 %% 3 = %d\\n", 10 % 3);\n    printf("10 %% -3 = %d\\n", 10 % -3);\n    printf("-10 %% 3 = %d\\n", -10 % 3);\n    printf("-10 %% -3 = %d\\n", -10 % -3);\n    \n    printf("\\nNote: Modulus result has same sign as dividend\\n");\n    \n    return 0;\n}',
    hint: 'In C, modulus result has the same sign as the dividend (left operand)'
  },
  {
    id: 'c_operators_004',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate operator precedence in arithmetic expressions.',
    mathSolution: 'Operator precedence',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    printf("a + b * c = %d (multiplication first)\\n", a + b * c);\n    printf("(a + b) * c = %d (parentheses change order)\\n", (a + b) * c);\n    printf("a * b / c = %d (left to right for same precedence)\\n", a * b / c);\n    printf("a / b * c = %d (left to right)\\n", a / b * c);\n    \n    return 0;\n}',
    hint: 'Operator precedence: * / % have higher precedence than + -. Use parentheses for clarity'
  },
  {
    id: 'c_operators_005',
    topicId: 'c_operators',
    question: 'Write a program to calculate area and perimeter of rectangle using arithmetic operators.',
    mathSolution: 'Rectangle area and perimeter',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float length, width, area, perimeter;\n    \n    printf("Enter length of rectangle: ");\n    scanf("%f", &length);\n    printf("Enter width of rectangle: ");\n    scanf("%f", &width);\n    \n    area = length * width;\n    perimeter = 2 * (length + width);\n    \n    printf("\\nLength = %.2f, Width = %.2f\\n", length, width);\n    printf("Area = %.2f square units\\n", area);\n    printf("Perimeter = %.2f units\\n", perimeter);\n    \n    return 0;\n}',
    hint: 'Area = length × width, Perimeter = 2 × (length + width)'
  },
  {
    id: 'c_operators_006',
    topicId: 'c_operators',
    question: 'Write a program to calculate simple interest using arithmetic operators.',
    mathSolution: 'Simple interest calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float principal, rate, time, interest, amount;\n    \n    printf("Enter principal amount: ");\n    scanf("%f", &principal);\n    printf("Enter rate of interest (%%): ");\n    scanf("%f", &rate);\n    printf("Enter time (years): ");\n    scanf("%f", &time);\n    \n    interest = (principal * rate * time) / 100;\n    amount = principal + interest;\n    \n    printf("\\nPrincipal = %.2f\\n", principal);\n    printf("Rate = %.2f%%\\n", rate);\n    printf("Time = %.2f years\\n", time);\n    printf("Simple Interest = %.2f\\n", interest);\n    printf("Total Amount = %.2f\\n", amount);\n    \n    return 0;\n}',
    hint: 'Simple Interest = (P × R × T) / 100'
  },
  {
    id: 'c_operators_007',
    topicId: 'c_operators',
    question: 'Write a program to swap two numbers using arithmetic operators without third variable.',
    mathSolution: 'Swap using arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a + b;  // a becomes 30\n    b = a - b;  // b becomes 10\n    a = a - b;  // a becomes 20\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Swap using addition and subtraction: a = a + b; b = a - b; a = a - b;'
  },
  {
    id: 'c_operators_008',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is even or odd using modulus operator.',
    mathSolution: 'Even/odd check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'A number is even if num % 2 == 0, odd if num % 2 == 1'
  },
  {
    id: 'c_operators_009',
    topicId: 'c_operators',
    question: 'Write a program to find the last digit of a number using modulus operator.',
    mathSolution: 'Last digit extraction',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, lastDigit;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    lastDigit = num % 10;\n    \n    printf("Number: %d\\n", num);\n    printf("Last digit: %d\\n", lastDigit);\n    \n    // For negative numbers\n    printf("\\nFor negative numbers:\\n");\n    printf("-123 %% 10 = %d\\n", -123 % 10);\n    \n    return 0;\n}',
    hint: 'num % 10 gives the last digit of a number'
  },
  {
    id: 'c_operators_010',
    topicId: 'c_operators',
    question: 'Write a program to extract digits from a number using division and modulus.',
    mathSolution: 'Extract digits',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 12345;\n    int d1, d2, d3, d4, d5;\n    \n    d5 = num % 10;        // last digit\n    num = num / 10;        // remove last digit\n    d4 = num % 10;\n    num = num / 10;\n    d3 = num % 10;\n    num = num / 10;\n    d2 = num % 10;\n    num = num / 10;\n    d1 = num % 10;\n    \n    printf("Original number: 12345\\n");\n    printf("Digits: %d %d %d %d %d\\n", d1, d2, d3, d4, d5);\n    \n    return 0;\n}',
    hint: 'Use num % 10 to get last digit, num / 10 to remove last digit'
  },

  // ============ LEVEL 2: RELATIONAL OPERATORS (11-15) ============
  {
    id: 'c_operators_011',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate relational operators: <, >, <=, >=, ==, !=.',
    mathSolution: 'Relational operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("a < b  = %d\\n", a < b);\n    printf("a > b  = %d\\n", a > b);\n    printf("a <= b = %d\\n", a <= b);\n    printf("a >= b = %d\\n", a >= b);\n    printf("a == b = %d\\n", a == b);\n    printf("a != b = %d\\n", a != b);\n    \n    return 0;\n}',
    hint: 'Relational operators return 1 (true) or 0 (false)'
  },
  {
    id: 'c_operators_012',
    topicId: 'c_operators',
    question: 'Write a program to find the largest of two numbers using relational operators.',
    mathSolution: 'Largest of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    \n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    \n    if(a > b) {\n        printf("%d is larger than %d\\n", a, b);\n    } else if(b > a) {\n        printf("%d is larger than %d\\n", b, a);\n    } else {\n        printf("Both numbers are equal\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Use > and < operators to compare numbers'
  },
  {
    id: 'c_operators_013',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is positive, negative, or zero using relational operators.',
    mathSolution: 'Positive/negative check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else if(num < 0) {\n        printf("%d is negative\\n", num);\n    } else {\n        printf("Number is zero\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Check num > 0 for positive, num < 0 for negative'
  },
  {
    id: 'c_operators_014',
    topicId: 'c_operators',
    question: 'Write a program to check if a person is eligible to vote using relational operators.',
    mathSolution: 'Voting eligibility',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age;\n    const int VOTING_AGE = 18;\n    \n    printf("Enter your age: ");\n    scanf("%d", &age);\n    \n    if(age >= VOTING_AGE) {\n        printf("You are eligible to vote\\n");\n        printf("Age %d is >= %d\\n", age, VOTING_AGE);\n    } else {\n        printf("You are not eligible to vote\\n");\n        printf("You need %d more years\\n", VOTING_AGE - age);\n    }\n    \n    return 0;\n}',
    hint: 'Voting eligibility: age >= 18'
  },
  {
    id: 'c_operators_015',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate common mistake: using = instead of ==.',
    mathSolution: 'Assignment vs equality',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    \n    // Common mistake: using = instead of ==\n    if(a = 10) {  // Assignment, not comparison!\n        printf("This always executes because a = 10 is true\\n");\n        printf("Value of a is now %d\\n", a);\n    }\n    \n    // Correct way\n    a = 5;\n    if(a == 10) {\n        printf("This won\'t execute\\n");\n    } else {\n        printf("Correct: a == 10 is false\\n");\n    }\n    \n    return 0;\n}',
    hint: '= is assignment, == is equality comparison. Never use = in conditions'
  },

  // ============ LEVEL 3: LOGICAL OPERATORS (16-20) ============
  {
    id: 'c_operators_016',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate logical operators: && (AND), || (OR), ! (NOT).',
    mathSolution: 'Logical operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 5;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    \n    // AND operator\n    printf("(a > c) && (b > a) = %d\\n", (a > c) && (b > a));\n    printf("(a > b) && (b > c) = %d\\n", (a > b) && (b > c));\n    \n    // OR operator\n    printf("(a > b) || (b > c) = %d\\n", (a > b) || (b > c));\n    printf("(a > b) || (a < c) = %d\\n", (a > b) || (a < c));\n    \n    // NOT operator\n    printf("!(a > b) = %d\\n", !(a > b));\n    printf("!(a < b) = %d\\n", !(a < b));\n    \n    return 0;\n}',
    hint: '&& returns true if both true, || returns true if at least one true, ! reverses the result'
  },
  {
    id: 'c_operators_017',
    topicId: 'c_operators',
    question: 'Write a program to check if a year is leap year using logical operators.',
    mathSolution: 'Leap year check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year;\n    \n    printf("Enter a year: ");\n    scanf("%d", &year);\n    \n    // Leap year: divisible by 4 AND (not divisible by 100 OR divisible by 400)\n    if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {\n        printf("%d is a leap year\\n", year);\n    } else {\n        printf("%d is not a leap year\\n", year);\n    }\n    \n    return 0;\n}',
    hint: 'Leap year: divisible by 4 AND (not divisible by 100 OR divisible by 400)'
  },
  {
    id: 'c_operators_018',
    topicId: 'c_operators',
    question: 'Write a program to check if a character is vowel using logical operators.',
    mathSolution: 'Vowel check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    // Check for both uppercase and lowercase vowels\n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n       ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        printf("%c is a vowel\\n", ch);\n    } else {\n        printf("%c is a consonant\\n", ch);\n    }\n    \n    return 0;\n}',
    hint: 'Use logical OR (||) to check multiple conditions'
  },
  {
    id: 'c_operators_019',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate short-circuit evaluation in logical operators.',
    mathSolution: 'Short-circuit evaluation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 0, b = 10;\n    \n    // In &&, if first is false, second is not evaluated\n    if(a != 0 && (b / a) > 5) {\n        printf("This won\'t execute\\n");\n    } else {\n        printf("Short-circuit: division by zero avoided\\n");\n    }\n    \n    // In ||, if first is true, second is not evaluated\n    a = 5;\n    if(a > 0 || (b / 0)) {\n        printf("Short-circuit: second expression not evaluated\\n");\n    }\n    \n    return 0;\n}',
    hint: 'In &&, if left is false, right is not evaluated. In ||, if left is true, right is not evaluated'
  },
  {
    id: 'c_operators_020',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is in a specific range using logical operators.',
    mathSolution: 'Range check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    int lower = 10, upper = 50;\n    \n    printf("Enter a number between %d and %d: ", lower, upper);\n    scanf("%d", &num);\n    \n    if(num >= lower && num <= upper) {\n        printf("%d is within the range [%d, %d]\\n", num, lower, upper);\n    } else {\n        printf("%d is outside the range\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'Use && to check if a number is within range: num >= lower && num <= upper'
  },

  // ============ LEVEL 4: ASSIGNMENT OPERATORS (21-25) ============
  {
    id: 'c_operators_021',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate assignment operators: =, +=, -=, *=, /=, %=.',
    mathSolution: 'Assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    \n    printf("Initial a = %d\\n", a);\n    \n    a += 5;  // a = a + 5\n    printf("After a += 5: %d\\n", a);\n    \n    a -= 3;  // a = a - 3\n    printf("After a -= 3: %d\\n", a);\n    \n    a *= 2;  // a = a * 2\n    printf("After a *= 2: %d\\n", a);\n    \n    a /= 4;  // a = a / 4\n    printf("After a /= 4: %d\\n", a);\n    \n    a %= 3;  // a = a % 3\n    printf("After a %%= 3: %d\\n", a);\n    \n    return 0;\n}',
    hint: 'Assignment operators combine arithmetic with assignment: +=, -=, *=, /=, %='
  },
  {
    id: 'c_operators_022',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise assignment operators: &=, |=, ^=, <<=, >>=.',
    mathSolution: 'Bitwise assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    \n    printf("Initial a = %u (binary: 1100)\\n", a);\n    \n    a &= 10;  // a = a & 10 (1100 & 1010 = 1000 = 8)\n    printf("After a &= 10: %u (binary: 1000)\\n", a);\n    \n    a |= 5;   // a = a | 5 (1000 | 0101 = 1101 = 13)\n    printf("After a |= 5: %u (binary: 1101)\\n", a);\n    \n    a ^= 6;   // a = a ^ 6 (1101 ^ 0110 = 1011 = 11)\n    printf("After a ^= 6: %u (binary: 1011)\\n", a);\n    \n    a <<= 2;  // a = a << 2 (1011 << 2 = 101100 = 44)\n    printf("After a <<= 2: %u\\n", a);\n    \n    a >>= 1;  // a = a >> 1 (101100 >> 1 = 10110 = 22)\n    printf("After a >>= 1: %u\\n", a);\n    \n    return 0;\n}',
    hint: 'Bitwise assignment operators: &= (AND), |= (OR), ^= (XOR), <<= (left shift), >>= (right shift)'
  },
 {
    id: 'c_operators_023',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate chained assignment.',
    mathSolution: 'Chained assignment (right to left)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    int x, y;\n    \n    a = b = c = 10;  // Chained assignment (right to left)\n    \n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    printf("c = %d\\n", c);\n    \n    // Assignment in expression\n    x = (y = 5) + 3;\n    printf("\\nx = (y = 5) + 3 => x = %d, y = %d\\n", x, y);\n    \n    return 0;\n}',
    hint: 'Assignment operators associate right-to-left: a = b = c = 10 means c = 10, b = c, a = b'
},
  {
    id: 'c_operators_024',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate compound assignment for calculations.',
    mathSolution: 'Compound assignment in loops',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int sum = 0, product = 1;\n    int numbers[] = {2, 3, 4, 5};\n    \n    printf("Numbers: ");\n    for(int i = 0; i < 4; i++) {\n        printf("%d ", numbers[i]);\n        sum += numbers[i];      // sum = sum + numbers[i]\n        product *= numbers[i];   // product = product * numbers[i]\n    }\n    \n    printf("\\nSum = %d\\n", sum);\n    printf("Product = %d\\n", product);\n    \n    return 0;\n}',
    hint: 'Compound assignment operators are commonly used in loops for accumulation'
  },
  {
    id: 'c_operators_025',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate difference between assignment and equality.',
    mathSolution: 'Assignment vs equality',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 10;\n    \n    // Assignment (=) assigns a value\n    printf("Assignment: a = b sets a to %d\\n", a = b);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    // Reset values\n    a = 5, b = 10;\n    \n    // Equality (==) compares values\n    printf("\\nEquality: a == b is %d\\n", a == b);\n    printf("a = %d, b = %d unchanged\\n", a, b);\n    \n    return 0;\n}',
    hint: '= assigns a value, == compares values. Never confuse them!'
  },

  // ============ LEVEL 5: INCREMENT/DECREMENT OPERATORS (26-30) ============
  {
    id: 'c_operators_026',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate prefix and postfix increment operators.',
    mathSolution: 'Prefix vs postfix increment',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    int x, y;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    x = ++a;  // Prefix increment: first increment, then use\n    y = b++;  // Postfix increment: first use, then increment\n    \n    printf("After ++a: a = %d, x = %d\\n", a, x);\n    printf("After b++: b = %d, y = %d\\n", b, y);\n    \n    // Demonstrate in expression\n    a = 5, b = 5;\n    printf("\\nWith a = %d, b = %d:\\n", a, b);\n    printf("++a + b++ = %d\\n", ++a + b++);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: '++a increments then returns value, a++ returns value then increments'
  },
  {
    id: 'c_operators_027',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate prefix and postfix decrement operators.',
    mathSolution: 'Prefix vs postfix decrement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    int x, y;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    x = --a;  // Prefix decrement: first decrement, then use\n    y = b--;  // Postfix decrement: first use, then decrement\n    \n    printf("After --a: a = %d, x = %d\\n", a, x);\n    printf("After b--: b = %d, y = %d\\n", b, y);\n    \n    // Demonstrate in expression\n    a = 5, b = 5;\n    printf("\\nWith a = %d, b = %d:\\n", a, b);\n    printf("--a + b-- = %d\\n", --a + b--);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: '--a decrements then returns value, a-- returns value then decrements'
  },
  {
    id: 'c_operators_028',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate increment operators in loops.',
    mathSolution: 'Increment in loops',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Using i++ in for loop:\\n");\n    for(int i = 1; i <= 5; i++) {\n        printf("%d ", i);\n    }\n    \n    printf("\\n\\nUsing ++i in for loop:\\n");\n    for(int i = 1; i <= 5; ++i) {\n        printf("%d ", i);\n    }\n    \n    printf("\\n\\nUsing i-- in while loop:\\n");\n    int i = 5;\n    while(i > 0) {\n        printf("%d ", i--);\n    }\n    \n    printf("\\n\\nUsing --i in while loop:\\n");\n    i = 5;\n    while(i > 0) {\n        printf("%d ", --i);\n    }\n    \n    return 0;\n}',
    hint: 'In for loops, i++ and ++i behave the same when used alone'
  },
  {
    id: 'c_operators_029',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate multiple increment/decrement in one expression.',
    mathSolution: 'Multiple increments',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    int result = ++a + a++ + --b + b--;\n    \n    printf("++a + a++ + --b + b-- = %d\\n", result);\n    printf("Final: a = %d, b = %d\\n", a, b);\n    \n    printf("\\nNote: Behavior can be compiler-dependent!\\n");\n    \n    return 0;\n}',
    hint: 'Avoid multiple increments in one expression - behavior may be undefined or compiler-dependent'
  },
  {
    id: 'c_operators_030',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate increment/decrement with pointers.',
    mathSolution: 'Increment with pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    \n    printf("Array: 10, 20, 30, 40, 50\\n");\n    printf("Initial *ptr = %d\\n", *ptr);\n    \n    printf("\\nPointer arithmetic:\\n");\n    printf("*ptr++ = %d (first %d, then ptr moves)\\n", *ptr++, *ptr);\n    printf("*ptr = %d\\n", *ptr);\n    \n    printf("\\n*++ptr = %d (first ptr moves, then dereference)\\n", *++ptr);\n    printf("*ptr = %d\\n", *ptr);\n    \n    return 0;\n}',
    hint: '*ptr++ dereferences then increments pointer, *++ptr increments pointer then dereferences'
  },

  // ============ LEVEL 6: BITWISE OPERATORS (31-40) ============
  {
    id: 'c_operators_031',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise AND (&) operator.',
    mathSolution: 'Bitwise AND',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a & b = %u (binary: 1000 = 8)\\n", a & b);\n    \n    // Common use: checking if a bit is set\n    unsigned int flag = 8;  // 1000 binary\n    if(a & flag) {\n        printf("\\nBit 3 is set in a\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Bitwise AND (&) sets each bit to 1 if both bits are 1'
  },
  {
    id: 'c_operators_032',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise OR (|) operator.',
    mathSolution: 'Bitwise OR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a | b = %u (binary: 1110 = 14)\\n", a | b);\n    \n    // Common use: setting bits\n    unsigned int flags = 0;\n    flags = flags | 4;  // set bit 2\n    printf("\\nflags after setting bit 2: %u\\n", flags);\n    \n    return 0;\n}',
    hint: 'Bitwise OR (|) sets each bit to 1 if at least one bit is 1'
  },
  {
    id: 'c_operators_033',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise XOR (^) operator.',
    mathSolution: 'Bitwise XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a ^ b = %u (binary: 0110 = 6)\\n", a ^ b);\n    \n    // XOR properties\n    unsigned int c = 7;\n    printf("\\nXOR properties:\\n");\n    printf("c ^ c = %u\\n", c ^ c);  // Always 0\n    printf("c ^ 0 = %u\\n", c ^ 0);  // Always c\n    \n    return 0;\n}',
    hint: 'Bitwise XOR (^) sets each bit to 1 if bits are different'
  },
  {
    id: 'c_operators_034',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise NOT (~) operator.',
    mathSolution: 'Bitwise NOT (ones complement)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 00000000 00000000 00000000 00001100\n    \n    printf("a = %u\\n", a);\n    printf("~a = %u (all bits flipped)\\n", ~a);\n    \n    // For smaller types\n    unsigned char b = 12;  // 00001100\n    printf("\\nunsigned char b = %u\\n", b);\n    printf("~b = %u (as int: %d)\\n", ~b, ~b);\n    \n    return 0;\n}',
    hint: 'Bitwise NOT (~) flips all bits (ones complement)'
  },
  {
    id: 'c_operators_035',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate left shift (<<) operator.',
    mathSolution: 'Left shift',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 5;  // 0101 in binary\n    \n    printf("a = %u (binary: 0101)\\n", a);\n    printf("a << 1 = %u (binary: 1010 = %d, multiply by 2)\\n", a << 1, a << 1);\n    printf("a << 2 = %u (binary: 10100 = %d, multiply by 4)\\n", a << 2, a << 2);\n    printf("a << 3 = %u (binary: 101000 = %d, multiply by 8)\\n", a << 3, a << 3);\n    \n    return 0;\n}',
    hint: 'Left shift (<<) shifts bits left, equivalent to multiplying by 2^n'
  },
  {
    id: 'c_operators_036',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate right shift (>>) operator.',
    mathSolution: 'Right shift',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 40;  // 101000 in binary\n    \n    printf("a = %u (binary: 101000)\\n", a);\n    printf("a >> 1 = %u (binary: 10100 = %d, divide by 2)\\n", a >> 1, a >> 1);\n    printf("a >> 2 = %u (binary: 1010 = %d, divide by 4)\\n", a >> 2, a >> 2);\n    printf("a >> 3 = %u (binary: 101 = %d, divide by 8)\\n", a >> 3, a >> 3);\n    \n    // Right shift on signed numbers\n    signed int b = -40;\n    printf("\\nSigned right shift: -40 >> 2 = %d\\n", b >> 2);\n    \n    return 0;\n}',
    hint: 'Right shift (>>) shifts bits right, equivalent to dividing by 2^n (implementation-defined for signed)'
  },
  {
    id: 'c_operators_037',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is power of 2 using bitwise operators.',
    mathSolution: 'Power of 2 check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    // Power of 2 if num > 0 and (num & (num-1)) == 0\n    if(num > 0 && (num & (num - 1)) == 0) {\n        printf("%d is a power of 2\\n", num);\n    } else {\n        printf("%d is not a power of 2\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'A number is power of 2 if it has exactly one bit set: (num & (num-1)) == 0'
  },
  {
    id: 'c_operators_038',
    topicId: 'c_operators',
    question: 'Write a program to count number of set bits using bitwise operators.',
    mathSolution: 'Count set bits',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int num, count = 0;\n    \n    printf("Enter a number: ");\n    scanf("%u", &num);\n    \n    unsigned int original = num;\n    while(num) {\n        count += num & 1;  // Check if LSB is set\n        num >>= 1;         // Right shift\n    }\n    \n    printf("Number of set bits in %u = %d\\n", original, count);\n    \n    return 0;\n}',
    hint: 'Use num & 1 to check LSB, then shift right until number becomes 0'
  },
  {
    id: 'c_operators_039',
    topicId: 'c_operators',
    question: 'Write a program to swap two numbers using XOR operator.',
    mathSolution: 'Swap using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'XOR swap: a = a ^ b; b = a ^ b; a = a ^ b; Works without temporary variable'
  },
  {
    id: 'c_operators_040',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bit masking using bitwise operators.',
    mathSolution: 'Bit masking',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int flags = 0b11011010;  // Example flag register\n    unsigned int mask;\n    \n    printf("Original flags: 0x%X (binary: 11011010)\\n", flags);\n    \n    // Check if bit 3 is set (using mask)\n    mask = 0b00001000;  // Bit 3 mask\n    if(flags & mask) {\n        printf("Bit 3 is set\\n");\n    }\n    \n    // Set bit 2\n    mask = 0b00000100;\n    flags = flags | mask;\n    printf("After setting bit 2: 0x%X\\n", flags);\n    \n    // Clear bit 5\n    mask = 0b00100000;\n    flags = flags & ~mask;\n    printf("After clearing bit 5: 0x%X\\n", flags);\n    \n    // Toggle bit 4\n    mask = 0b00010000;\n    flags = flags ^ mask;\n    printf("After toggling bit 4: 0x%X\\n", flags);\n    \n    return 0;\n}',
    hint: 'Bit masking: & (check/clear), | (set), ^ (toggle), ~ (invert mask for clearing)'
  },
);

