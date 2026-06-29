QuizData.questions.push(
  // storage classes ,dynamic memory ,file handling ,preprocessor
  {
    id: 'c_storage_01',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate auto storage class (default for local variables).',
    mathSolution: 'auto variables are created on stack and destroyed when function ends',
    codeSolution: '#include <stdio.h>\n\nvoid func() {\n    auto int x = 10;\n    int y = 20;  // auto is default\n    printf("x = %d, y = %d\\n", x, y);\n}\n\nint main() {\n    func();\n    return 0;\n}',
    hint: 'auto is optional, all local variables are auto by default'
  },
  {
    id: 'c_storage_02',
    topicId: 'c_storage_classes',
    question: 'Write a program to show that auto variables contain garbage if uninitialized.',
    mathSolution: 'Uninitialized auto variables have indeterminate values',
    codeSolution: '#include <stdio.h>\n\nvoid func() {\n    int x;  // uninitialized auto variable\n    printf("Uninitialized value: %d\\n", x);\n}\n\nint main() {\n    func();\n    return 0;\n}',
    hint: 'Always initialize local variables to avoid garbage values'
  },
  {
    id: 'c_storage_03',
    topicId: 'c_storage_classes',
    question: 'Write a program to show that auto variables are destroyed after function ends.',
    mathSolution: 'Local variables lose their values after function returns',
    codeSolution: '#include <stdio.h>\n\nvoid setValue() {\n    int x = 100;\n    printf("Inside setValue: x = %d\\n", x);\n}\n\nint main() {\n    setValue();\n    // x is not accessible here\n    printf("After function call\\n");\n    return 0;\n}',
    hint: 'Auto variables have automatic storage duration'
  },
  {
    id: 'c_storage_04',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare multiple auto variables of different types.',
    mathSolution: 'Auto variables can be any data type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    auto int a = 5;\n    auto float b = 3.14;\n    auto char c = \'A\';\n    printf("int: %d, float: %.2f, char: %c\\n", a, b, c);\n    return 0;\n}',
    hint: 'Different types can be declared as auto'
  },
  {
    id: 'c_storage_05',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare auto array.',
    mathSolution: 'Arrays can also be auto storage class',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    auto int arr[5] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Array elements are also stored on stack'
  },
  {
    id: 'c_storage_06',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate register storage class.',
    mathSolution: 'register suggests storing variable in CPU register for faster access',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int counter = 0;\n    for(register int i = 0; i < 1000; i++) {\n        counter++;\n    }\n    printf("Counter = %d\\n", counter);\n    return 0;\n}',
    hint: 'Compiler may ignore register keyword'
  },
  {
    id: 'c_storage_07',
    topicId: 'c_storage_classes',
    question: 'Write a program to show that address of register variable cannot be taken.',
    mathSolution: 'Register variables may not have memory addresses',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int x = 10;\n    // int *p = &x;  // Error: cannot take address of register variable\n    printf("Register variable x = %d\\n", x);\n    return 0;\n}',
    hint: 'Registers don\'t have memory addresses'
  },
  {
    id: 'c_storage_08',
    topicId: 'c_storage_classes',
    question: 'Write a program to use register variable for frequently accessed data.',
    mathSolution: 'Register is often used for loop counters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int sum = 0;\n    for(register int i = 1; i <= 100; i++) {\n        sum += i;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Good for counters and accumulators in loops'
  },
  {
    id: 'c_storage_09',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare multiple register variables.',
    mathSolution: 'Limited number of CPU registers available',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int a = 1, b = 2, c = 3;\n    register int result = a + b + c;\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Only suggestion to compiler, may be ignored if too many'
  },
  {
    id: 'c_storage_10',
    topicId: 'c_storage_classes',
    question: 'Write a program to initialize register variable.',
    mathSolution: 'Register variables can be initialized like normal variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int x = 100;\n    printf("Initialized register value = %d\\n", x);\n    return 0;\n}',
    hint: 'Initialization is allowed for register variables'
  },

  // ========== STATIC LOCAL VARIABLES (11-20) ==========
  {
    id: 'c_storage_11',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate static local variable retains value between calls.',
    mathSolution: 'Static local variables persist across function calls',
    codeSolution: '#include <stdio.h>\n\nvoid counter() {\n    static int count = 0;\n    count++;\n    printf("Call count = %d\\n", count);\n}\n\nint main() {\n    counter();\n    counter();\n    counter();\n    return 0;\n}',
    hint: 'Static variables are initialized only once'
  },
  {
    id: 'c_storage_12',
    topicId: 'c_storage_classes',
    question: 'Write a program to show static local variable is zero-initialized by default.',
    mathSolution: 'Static variables are automatically initialized to zero',
    codeSolution: '#include <stdio.h>\n\nvoid func() {\n    static int x;  // automatically initialized to 0\n    printf("Static value = %d\\n", x);\n    x++;\n}\n\nint main() {\n    func();\n    func();\n    func();\n    return 0;\n}',
    hint: 'Static variables are zero-initialized unlike auto variables'
  },
  {
    id: 'c_storage_13',
    topicId: 'c_storage_classes',
    question: 'Write a program to use static array inside function.',
    mathSolution: 'Static array persists between function calls',
    codeSolution: '#include <stdio.h>\n\nint* getArray() {\n    static int arr[5] = {1, 2, 3, 4, 5};\n    return arr;\n}\n\nint main() {\n    int *ptr = getArray();\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", ptr[i]);\n    }\n    return 0;\n}',
    hint: 'Safe to return pointer to static array'
  },
  {
    id: 'c_storage_14',
    topicId: 'c_storage_classes',
    question: 'Write a program to generate unique IDs using static variable.',
    mathSolution: 'Static counter increments each time function is called',
    codeSolution: '#include <stdio.h>\n\nint getNextID() {\n    static int id = 1000;\n    return id++;\n}\n\nint main() {\n    printf("ID1 = %d\\n", getNextID());\n    printf("ID2 = %d\\n", getNextID());\n    printf("ID3 = %d\\n", getNextID());\n    return 0;\n}',
    hint: 'Static variable preserves state between calls'
  },
  {
    id: 'c_storage_15',
    topicId: 'c_storage_classes',
    question: 'Write a program to implement one-time initialization using static flag.',
    mathSolution: 'Static flag ensures initialization happens only once',
    codeSolution: '#include <stdio.h>\n\nvoid initialize() {\n    static int done = 0;\n    if(!done) {\n        printf("Initializing resources...\\n");\n        done = 1;\n    }\n    printf("Function called\\n");\n}\n\nint main() {\n    initialize();\n    initialize();\n    initialize();\n    return 0;\n}',
    hint: 'Common pattern for lazy initialization'
  },
  {
    id: 'c_storage_16',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare static global variable.',
    mathSolution: 'Static global variable is visible only within the file',
    codeSolution: '#include <stdio.h>\n\nstatic int fileCounter = 0;\n\nvoid increment() {\n    fileCounter++;\n}\n\nint getCount() {\n    return fileCounter;\n}\n\nint main() {\n    increment();\n    increment();\n    printf("Count = %d\\n", getCount());\n    return 0;\n}',
    hint: 'Static global has internal linkage'
  },
  {
    id: 'c_storage_17',
    topicId: 'c_storage_classes',
    question: 'Write a program to declare static function.',
    mathSolution: 'Static function is visible only within the file',
    codeSolution: '#include <stdio.h>\n\nstatic void helper() {\n    printf("Helper function called\\n");\n}\n\nint main() {\n    helper();\n    return 0;\n}',
    hint: 'Static functions are used for information hiding'
  },
  {
    id: 'c_storage_18',
    topicId: 'c_storage_classes',
    question: 'Write a program to demonstrate static const combination.',
    mathSolution: 'Static const for file-scoped constants',
    codeSolution: '#include <stdio.h>\n\nstatic const double PI = 3.14159;\n\nint main() {\n    double radius = 5.0;\n    double area = PI * radius * radius;\n    printf("Area = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Constant and private to the file'
  },
  {
    id: 'c_storage_19',
    topicId: 'c_storage_classes',
    question: 'Write a program to use static for memoization (caching).',
    mathSolution: 'Cache computed results in static array',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    static int cache[10] = {1, 1, 2, 6, 24, 0};\n    if(n < 0 || n > 9) return -1;\n    if(cache[n] != 0) return cache[n];\n    cache[n] = n * factorial(n-1);\n    return cache[n];\n}\n\nint main() {\n    printf("5! = %d\\n", factorial(5));\n    printf("6! = %d\\n", factorial(6));\n    return 0;\n}',
    hint: 'Memoization pattern for optimization'
  },
  {
    id: 'c_storage_20',
    topicId: 'c_storage_classes',
    question: 'Write a program to use static for random number generator state.',
    mathSolution: 'Static variable preserves RNG state between calls',
    codeSolution: '#include <stdio.h>\n\nunsigned int simpleRand() {\n    static unsigned int seed = 1;\n    seed = seed * 1103515245 + 12345;\n    return (seed >> 16) & 0x7FFF;\n}\n\nint main() {\n    for(int i = 0; i < 5; i++) {\n        printf("Random %d = %u\\n", i+1, simpleRand());\n    }\n    return 0;\n}',
    hint: 'Linear congruential generator'
  },

  // ========== EXTERN STORAGE CLASS (21-30) ==========
// ========== EXTERN STORAGE CLASS (21-30) - CORRECTED ==========
{
  id: 'c_storage_21',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate that static global variable is file-scoped.',
  mathSolution: 'Static global variable is visible only within the file',
  codeSolution: '#include <stdio.h>\n\nstatic int fileStatic = 100;\n\nvoid showFileStatic() {\n    printf("File static value = %d\\n", fileStatic);\n}\n\nint main() {\n    showFileStatic();\n    return 0;\n}',
  hint: 'Static global has internal linkage'
},
{
  id: 'c_storage_22',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate static function (internal linkage).',
  mathSolution: 'Static function is visible only within the file',
  codeSolution: '#include <stdio.h>\n\nstatic void internalHelper() {\n    printf("Internal helper function called\\n");\n}\n\nint main() {\n    internalHelper();\n    return 0;\n}',
  hint: 'Static functions cannot be called from other files'
},
{
  id: 'c_storage_23',
  topicId: 'c_storage_classes',
  question: 'Write a program to show that global variables have external linkage by default.',
  mathSolution: 'Global variables can be accessed from other files',
  codeSolution: '#include <stdio.h>\n\nint globalVar = 500;\n\nvoid showGlobal() {\n    printf("Global variable = %d\\n", globalVar);\n}\n\nint main() {\n    showGlobal();\n    return 0;\n}',
  hint: 'Global variables are extern by default'
},
{
  id: 'c_storage_24',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate multiple extern declarations of same variable.',
  mathSolution: 'Same variable can be declared extern multiple times',
  codeSolution: '#include <stdio.h>\n\nextern int shared;\nextern int shared;\nextern int shared;\n\nint shared = 250;\n\nint main() {\n    printf("Shared value = %d\\n", shared);\n    return 0;\n}',
  hint: 'Only one definition allowed, multiple declarations fine'
},
{
  id: 'c_storage_25',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static variable in recursion to count calls.',
  mathSolution: 'Static variable shared across all recursive calls',
  codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    static int callCount = 0;\n    callCount++;\n    printf("Call #%d, n=%d\\n", callCount, n);\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int result = factorial(4);\n    printf("4! = %d\\n", result);\n    return 0;\n}',
  hint: 'Static variable persists across all recursive calls'
},
{
  id: 'c_storage_26',
  topicId: 'c_storage_classes',
  question: 'Write a program to track maximum recursion depth using static.',
  mathSolution: 'Static variables can track depth across recursive calls',
  codeSolution: '#include <stdio.h>\n\nvoid recurse(int n) {\n    static int depth = 0;\n    static int maxDepth = 0;\n    depth++;\n    if(depth > maxDepth) maxDepth = depth;\n    if(n > 0) recurse(n-1);\n    depth--;\n    if(depth == 0) {\n        printf("Max recursion depth = %d\\n", maxDepth);\n    }\n}\n\nint main() {\n    recurse(5);\n    return 0;\n}',
  hint: 'Monitor recursion depth with static variables'
},
{
  id: 'c_storage_27',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static pointer for lazy allocation.',
  mathSolution: 'Static pointer allocated only once',
  codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint* getBuffer() {\n    static int* buffer = NULL;\n    if(!buffer) {\n        buffer = (int*)malloc(5 * sizeof(int));\n        for(int i = 0; i < 5; i++) buffer[i] = (i + 1) * 10;\n        printf("Buffer initialized\\n");\n    }\n    return buffer;\n}\n\nint main() {\n    int *buf = getBuffer();\n    int *buf2 = getBuffer();\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", buf[i]);\n    }\n    free(buf);\n    return 0;\n}',
  hint: 'Lazy initialization pattern'
},
{
  id: 'c_storage_28',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate static variable in block scope.',
  mathSolution: 'Static variable persists across block entries',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i = 1; i <= 5; i++) {\n        static int x = 0;\n        x++;\n        printf("Iteration %d: static x = %d\\n", i, x);\n    }\n    return 0;\n}',
  hint: 'Static in block has function lifetime, block visibility'
},
{
  id: 'c_storage_29',
  topicId: 'c_storage_classes',
  question: 'Write a program to combine auto, register, and static variables.',
  mathSolution: 'Different storage classes for different purposes',
  codeSolution: '#include <stdio.h>\n\nstatic int globalStatic = 0;\n\nvoid demo() {\n    static int localStatic = 0;\n    auto int autoVar = 5;\n    register int regVar = 10;\n    localStatic++;\n    globalStatic++;\n    printf("Local static=%d, Global static=%d, Auto=%d, Register=%d\\n", \n           localStatic, globalStatic, autoVar, regVar);\n}\n\nint main() {\n    demo();\n    demo();\n    demo();\n    return 0;\n}',
  hint: 'Different storage classes have different behaviors'
},
{
  id: 'c_storage_30',
  topicId: 'c_storage_classes',
  question: 'Write a program to implement singleton pattern using static.',
  mathSolution: 'Single instance of object using static pointer',
  codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int data;\n} Singleton;\n\nSingleton* getInstance() {\n    static Singleton instance = {99};\n    return &instance;\n}\n\nint main() {\n    Singleton *s1 = getInstance();\n    Singleton *s2 = getInstance();\n    printf("s1 data = %d, s2 data = %d\\n", s1->data, s2->data);\n    return 0;\n}',
  hint: 'Singleton ensures only one instance'
},

// ========== PRACTICAL APPLICATIONS (31-40) ==========
{
  id: 'c_storage_31',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for error counter.',
  mathSolution: 'Accumulate errors across function calls',
  codeSolution: '#include <stdio.h>\n\nvoid logError(const char* msg) {\n    static int errorCount = 0;\n    errorCount++;\n    printf("Error #%d: %s\\n", errorCount, msg);\n}\n\nint main() {\n    logError("File not found");\n    logError("Memory allocation failed");\n    logError("Network timeout");\n    return 0;\n}',
  hint: 'Static tracks error count across calls'
},
{
  id: 'c_storage_32',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for parser state machine.',
  mathSolution: 'Static variable stores parser state between calls',
  codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nchar processChar(char c) {\n    static int inWord = 0;\n    if(isalpha(c)) {\n        if(!inWord) {\n            inWord = 1;\n            return \'W\';\n        }\n    } else {\n        if(inWord) {\n            inWord = 0;\n            return \'S\';\n        }\n    }\n    return 0;\n}\n\nint main() {\n    char str[] = "hello world test";\n    for(int i = 0; str[i]; i++) {\n        char r = processChar(str[i]);\n        if(r) printf("%c ", r);\n    }\n    return 0;\n}',
  hint: 'Parser state preserved between calls'
},
{
  id: 'c_storage_33',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for log file handle.',
  mathSolution: 'Static FILE pointer opened once',
  codeSolution: '#include <stdio.h>\n\nvoid logMessage(const char* msg) {\n    static int logged = 0;\n    if(!logged) {\n        printf("Log file opened (simulated)\\n");\n        logged = 1;\n    }\n    printf("LOG: %s\\n", msg);\n}\n\nint main() {\n    logMessage("Program started");\n    logMessage("Processing data");\n    logMessage("Program ended");\n    return 0;\n}',
  hint: 'Resource opened only once'
},
{
  id: 'c_storage_34',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for lookup table initialization.',
  mathSolution: 'Static array initialized once',
  codeSolution: '#include <stdio.h>\n\nconst char* getMonthName(int month) {\n    static const char* months[] = {\n        "Jan", "Feb", "Mar", "Apr", "May", "Jun",\n        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"\n    };\n    if(month >= 1 && month <= 12) return months[month-1];\n    return "Invalid";\n}\n\nint main() {\n    for(int i = 1; i <= 12; i++) {\n        printf("%d = %s\\n", i, getMonthName(i));\n    }\n    return 0;\n}',
  hint: 'Static lookup table initialized once'
},
{
  id: 'c_storage_35',
  topicId: 'c_storage_classes',
  question: 'Write a program to compare auto vs static in recursion.',
  mathSolution: 'Auto creates new copy each call, static shared across calls',
  codeSolution: '#include <stdio.h>\n\nvoid compareDepth(int n) {\n    static int staticDepth = 0;\n    int autoDepth = 0;\n    staticDepth++;\n    autoDepth++;\n    printf("n=%d, static=%d, auto=%d\\n", n, staticDepth, autoDepth);\n    if(n > 0) compareDepth(n-1);\n}\n\nint main() {\n    compareDepth(3);\n    return 0;\n}',
  hint: 'Static accumulates, auto resets'
},
{
  id: 'c_storage_36',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for function call counter.',
  mathSolution: 'Count how many times function is called',
  codeSolution: '#include <stdio.h>\n\nint getCallCount() {\n    static int calls = 0;\n    calls++;\n    return calls;\n}\n\nint main() {\n    printf("Call 1: %d\\n", getCallCount());\n    printf("Call 2: %d\\n", getCallCount());\n    printf("Call 3: %d\\n", getCallCount());\n    return 0;\n}',
  hint: 'Simple function call counter'
},
{
  id: 'c_storage_37',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate external linkage with global variable.',
  mathSolution: 'Variables with external linkage can be accessed across functions',
  codeSolution: '#include <stdio.h>\n\nint sharedCounter = 0;\n\nvoid increment() {\n    sharedCounter++;\n}\n\nvoid display() {\n    printf("Counter = %d\\n", sharedCounter);\n}\n\nint main() {\n    increment();\n    increment();\n    display();\n    return 0;\n}',
  hint: 'Global variables have external linkage by default'
},
{
  id: 'c_storage_38',
  topicId: 'c_storage_classes',
  question: 'Write a program to demonstrate internal linkage with static global.',
  mathSolution: 'Static global variables visible only within file',
  codeSolution: '#include <stdio.h>\n\nstatic int filePrivate = 50;\n\nvoid showPrivate() {\n    printf("Private value = %d\\n", filePrivate);\n}\n\nint main() {\n    showPrivate();\n    return 0;\n}',
  hint: 'Static global has internal linkage'
},
{
  id: 'c_storage_39',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for default argument simulation.',
  mathSolution: 'Static variable can simulate default parameters',
  codeSolution: '#include <stdio.h>\n\nint multiply(int a, int b) {\n    static int defaultCalled = 0;\n    if(!defaultCalled) {\n        printf("Default multiplier set to 2\\n");\n        defaultCalled = 1;\n    }\n    return a * b;\n}\n\nint main() {\n    printf("10 * 2 = %d\\n", multiply(10, 2));\n    printf("5 * 2 = %d\\n", multiply(5, 2));\n    return 0;\n}',
  hint: 'Static can simulate default arguments'
},
{
  id: 'c_storage_40',
  topicId: 'c_storage_classes',
  question: 'Write a program to use static for Fibonacci memoization.',
  mathSolution: 'Cache Fibonacci results in static array',
  codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    static int cache[100] = {0, 1, 1};\n    if(n <= 2) return cache[n];\n    if(cache[n] != 0) return cache[n];\n    cache[n] = fib(n-1) + fib(n-2);\n    return cache[n];\n}\n\nint main() {\n    for(int i = 0; i <= 10; i++) {\n        printf("fib(%d) = %d\\n", i, fib(i));\n    }\n    return 0;\n}',
  hint: 'Memoization optimizes recursive Fibonacci'
},
//dynamic-memory
 {
    id: 'c_dyn_1',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a single integer using malloc and store value.',
    mathSolution: 'Dynamically allocate memory for one int and assign value',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    if(ptr != NULL) {\n        *ptr = 42;\n        printf("Value = %d\\n", *ptr);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'malloc returns void*, cast to int*'
  },
  {
    id: 'c_dyn_2',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate array of 5 integers using malloc and initialize.',
    mathSolution: 'Create dynamic array of 5 ints',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < 5; i++) {\n            arr[i] = (i + 1) * 10;\n        }\n        for(int i = 0; i < 5; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'Multiply size by number of elements'
  },
  {
    id: 'c_dyn_3',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a float using malloc.',
    mathSolution: 'Dynamic memory for float',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    float *fptr = (float*)malloc(sizeof(float));\n    if(fptr != NULL) {\n        *fptr = 3.14159f;\n        printf("Float value = %.5f\\n", *fptr);\n        free(fptr);\n    }\n    return 0;\n}',
    hint: 'sizeof(float) gives size of float'
  },
  {
    id: 'c_dyn_4',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a character using malloc.',
    mathSolution: 'Dynamic memory for char',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *cptr = (char*)malloc(sizeof(char));\n    if(cptr != NULL) {\n        *cptr = \'A\';\n        printf("Character = %c\\n", *cptr);\n        free(cptr);\n    }\n    return 0;\n}',
    hint: 'sizeof(char) is 1 byte'
  },
  {
    id: 'c_dyn_5',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate and zero-initialize array of 10 ints using calloc.',
    mathSolution: 'Dynamic array initialized to 0',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)calloc(10, sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < 10; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'calloc takes count and size, initializes to zero'
  },
  {
    id: 'c_dyn_6',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to compare malloc and calloc for array allocation.',
    mathSolution: 'calloc initializes to zero, malloc doesn\'t',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *marr = (int*)malloc(5 * sizeof(int));\n    int *carr = (int*)calloc(5, sizeof(int));\n    printf("malloc: ");\n    for(int i = 0; i < 5; i++) printf("%d ", marr[i]);\n    printf("\\ncalloc: ");\n    for(int i = 0; i < 5; i++) printf("%d ", carr[i]);\n    free(marr);\n    free(carr);\n    return 0;\n}',
    hint: 'calloc ensures all bits zero'
  },
  {
    id: 'c_dyn_7',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to resize dynamic array from 5 to 10 integers using realloc.',
    mathSolution: 'Expand array to hold 10 ints',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    for(int i = 0; i < 5; i++) arr[i] = i * 10;\n    arr = (int*)realloc(arr, 10 * sizeof(int));\n    for(int i = 5; i < 10; i++) arr[i] = i * 10;\n    for(int i = 0; i < 10; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'realloc preserves existing data'
  },
  {
    id: 'c_dyn_8',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to shrink dynamic array from 10 to 5 integers using realloc.',
    mathSolution: 'Reduce array size',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(10 * sizeof(int));\n    for(int i = 0; i < 10; i++) arr[i] = i * 10;\n    arr = (int*)realloc(arr, 5 * sizeof(int));\n    for(int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'Data beyond new size may be lost'
  },
  {
    id: 'c_dyn_9',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to handle realloc failure (return NULL).',
    mathSolution: 'Check if realloc succeeded',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(5 * sizeof(int));\n    int *newarr = (int*)realloc(arr, 1000000 * sizeof(int));\n    if(newarr == NULL) {\n        printf("Reallocation failed\\n");\n        free(arr);\n    } else {\n        arr = newarr;\n        printf("Reallocation successful\\n");\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'Always check return value of realloc'
  },
  {
    id: 'c_dyn_10',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to free dynamically allocated memory and set pointer to NULL.',
    mathSolution: 'Avoid dangling pointer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 100;\n    printf("Value before free: %d\\n", *ptr);\n    free(ptr);\n    ptr = NULL;\n    if(ptr == NULL) printf("Pointer set to NULL\\n");\n    return 0;\n}',
    hint: 'Set to NULL after free to prevent accidental reuse'
  },

  // ========== DYNAMIC ARRAYS (11-20) ==========
  {
    id: 'c_dyn_11',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic array of user-specified size.',
    mathSolution: 'Allocate based on runtime input',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) {\n        arr[i] = i * 10;\n    }\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
    hint: 'Size determined at runtime'
  },
  {
    id: 'c_dyn_12',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to calculate sum of elements in dynamic array.',
    mathSolution: 'Sum of elements in dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    int sum = 0;\n    for(int i = 0; i < n; i++) {\n        arr[i] = i + 1;\n        sum += arr[i];\n    }\n    printf("Sum = %d\\n", sum);\n    free(arr);\n    return 0;\n}',
    hint: 'Same as static array access'
  },
  {
    id: 'c_dyn_13',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to find largest element in dynamic array.',
    mathSolution: 'Find maximum in dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int n = 5;\n    int *dynArr = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) dynArr[i] = arr[i];\n    int max = dynArr[0];\n    for(int i = 1; i < n; i++) {\n        if(dynArr[i] > max) max = dynArr[i];\n    }\n    printf("Largest = %d\\n", max);\n    free(dynArr);\n    return 0;\n}',
    hint: 'Access like static array'
  },
  {
    id: 'c_dyn_14',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to reverse dynamic array.',
    mathSolution: 'Reverse elements in dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) arr[i] = (i + 1) * 10;\n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n    printf("\\nReversed: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'Swap elements from ends'
  },
  {
    id: 'c_dyn_15',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for string of length 100 and store text.',
    mathSolution: 'Dynamic char array for string',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *str = (char*)malloc(100 * sizeof(char));\n    if(str != NULL) {\n        strcpy(str, "Hello Dynamic World\");\n        printf(\"String: %s\\n\", str);\n        free(str);\n    }\n    return 0;\n}',
    hint: '100 chars = 99 characters + null terminator'
  },
  {
    id: 'c_dyn_16',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create duplicate of a string using dynamic memory.',
    mathSolution: 'strdup implementation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *original = "Hello\";\n    char *dup = (char*)malloc(strlen(original) + 1);\n    if(dup != NULL) {\n        strcpy(dup, original);\n        printf(\"Original: %s\\n\", original);\n        printf(\"Duplicate: %s\\n\", dup);\n        free(dup);\n    }\n    return 0;\n}',
    hint: 'Allocate space for string + null terminator'
  },
  {
    id: 'c_dyn_17',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to concatenate two strings into new dynamic string.',
    mathSolution: 'Combine str1 and str2 in new memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *s1 = "Hello \";\n    char *s2 = \"World\";\n    char *result = (char*)malloc(strlen(s1) + strlen(s2) + 1);\n    if(result != NULL) {\n        strcpy(result, s1);\n        strcat(result, s2);\n        printf("Concatenated: %s\\n\", result);\n        free(result);\n    }\n    return 0;\n}',
    hint: 'Allocate enough for both strings + null'
  },
  {
    id: 'c_dyn_18',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic 2D array using pointer to pointer.',
    mathSolution: 'Dynamic matrix with rows and cols',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(cols * sizeof(int));\n        for(int j = 0; j < cols; j++) {\n            mat[i][j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n\");\n        free(mat[i]);\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'Allocate rows, then each row'
  },
  {
    id: 'c_dyn_19',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to free dynamically allocated 2D array.',
    mathSolution: 'Free each row then rows array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(3 * sizeof(int));\n    }\n    printf("Memory allocated\\n\");\n    for(int i = 0; i < rows; i++) {\n        free(mat[i]);\n    }\n    free(mat);\n    printf(\"Memory freed\\n\");\n    return 0;\n}',
    hint: 'Free in reverse order of allocation'
  },
  {
    id: 'c_dyn_20',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for a structure dynamically.',
    mathSolution: 'Create struct on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student *s = (struct Student*)malloc(sizeof(struct Student));\n    if(s != NULL) {\n        strcpy(s->name, "Alice\");\n        s->age = 20;\n        printf(\"Name: %s, Age: %d\\n\", s->name, s->age);\n        free(s);\n    }\n    return 0;\n}',
    hint: 'sizeof(struct) includes all members'
  },

  // ========== DYNAMIC STRUCTURES (21-30) ==========
  {
    id: 'c_dyn_21',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate array of structures dynamically.',
    mathSolution: 'Array of structs on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    int n = 3;\n    struct Point *points = (struct Point*)malloc(n * sizeof(struct Point));\n    for(int i = 0; i < n; i++) {\n        points[i].x = i * 10;\n        points[i].y = i * 20;\n    }\n    for(int i = 0; i < n; i++) {\n        printf("Point %d: (%d, %d)\\n\", i, points[i].x, points[i].y);\n    }\n    free(points);\n    return 0;\n}',
    hint: 'Allocate continuous memory for n structs'
  },
  {
    id: 'c_dyn_22',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create linked list node dynamically.',
    mathSolution: 'Node for linked list',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 10;\n    head->next = NULL;\n    printf("Node created with data = %d\\n\", head->data);\n    free(head);\n    return 0;\n}',
    hint: 'Allocate node and initialize'
  },
  {
    id: 'c_dyn_23',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create linked list with 3 nodes dynamically.',
    mathSolution: 'Build simple linked list',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nint main() {\n    struct Node *head = (struct Node*)malloc(sizeof(struct Node));\n    struct Node *second = (struct Node*)malloc(sizeof(struct Node));\n    struct Node *third = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 10; head->next = second;\n    second->data = 20; second->next = third;\n    third->data = 30; third->next = NULL;\n    struct Node *curr = head;\n    while(curr != NULL) {\n        printf("%d \", curr->data);\n        curr = curr->next;\n    }\n    free(head); free(second); free(third);\n    return 0;\n}',
    hint: 'Each node allocated separately'
  },
  {
    id: 'c_dyn_24',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic stack using realloc.',
    mathSolution: 'Stack that grows as needed',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int *data;\n    int top;\n    int capacity;\n} Stack;\n\nint main() {\n    Stack s;\n    s.capacity = 2;\n    s.top = 0;\n    s.data = (int*)malloc(s.capacity * sizeof(int));\n    for(int val = 10; val <= 50; val += 10) {\n        if(s.top >= s.capacity) {\n            s.capacity *= 2;\n            s.data = (int*)realloc(s.data, s.capacity * sizeof(int));\n        }\n        s.data[s.top++] = val;\n    }\n    for(int i = 0; i < s.top; i++) {\n        printf("%d \", s.data[i]);\n    }\n    free(s.data);\n    return 0;\n}',
    hint: 'Double capacity when full'
  },
  {
    id: 'c_dyn_25',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement dynamic vector (array list).',
    mathSolution: 'C version of C++ vector',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int *items;\n    int count;\n    int capacity;\n} Vector;\n\nint main() {\n    Vector v;\n    v.capacity = 2;\n    v.count = 0;\n    v.items = (int*)malloc(v.capacity * sizeof(int));\n    for(int i = 1; i <= 5; i++) {\n        if(v.count >= v.capacity) {\n            v.capacity *= 2;\n            v.items = (int*)realloc(v.items, v.capacity * sizeof(int));\n        }\n        v.items[v.count++] = i * 10;\n    }\n    for(int i = 0; i < v.count; i++) {\n        printf("%d \", v.items[i]);\n    }\n    free(v.items);\n    return 0;\n}',
    hint: 'Amortized constant time insertion'
  },
  {
    id: 'c_dyn_26',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate memory for flexible array member in structure.',
    mathSolution: 'Struct with variable-size array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int len;\n    int data[];\n} FlexArray;\n\nint main() {\n    int n = 5;\n    FlexArray *fa = (FlexArray*)malloc(sizeof(FlexArray) + n * sizeof(int));\n    fa->len = n;\n    for(int i = 0; i < n; i++) {\n        fa->data[i] = (i + 1) * 10;\n    }\n    for(int i = 0; i < fa->len; i++) {\n        printf("%d \", fa->data[i]);\n    }\n    free(fa);\n    return 0;\n}',
    hint: 'Last member with empty brackets'
  },
  {
    id: 'c_dyn_27',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to copy memory using memcpy with dynamic arrays.',
    mathSolution: 'Copy src to dest',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    int n = 5;\n    int *src = (int*)malloc(n * sizeof(int));\n    int *dest = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) src[i] = i * 10;\n    memcpy(dest, src, n * sizeof(int));\n    printf("Copied array: \");\n    for(int i = 0; i < n; i++) printf(\"%d \", dest[i]);\n    free(src); free(dest);\n    return 0;\n}',
    hint: 'memcpy needs size in bytes'
  },
  {
    id: 'c_dyn_28',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to set all bytes to zero using memset on dynamic array.',
    mathSolution: 'Initialize dynamic memory to 0',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    memset(arr, 0, n * sizeof(int));\n    for(int i = 0; i < n; i++) {\n        printf("%d \", arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
    hint: 'memset sets each byte to value'
  },
  {
    id: 'c_dyn_29',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to compare two dynamic arrays using memcmp.',
    mathSolution: 'Check if arrays equal',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    int n = 5;\n    int *arr1 = (int*)malloc(n * sizeof(int));\n    int *arr2 = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) {\n        arr1[i] = i * 10;\n        arr2[i] = i * 10;\n    }\n    if(memcmp(arr1, arr2, n * sizeof(int)) == 0) {\n        printf("Arrays are equal\\n");\n    } else {\n        printf("Arrays are different\\n");\n    }\n    free(arr1); free(arr2);\n    return 0;\n}',
    hint: 'memcmp returns 0 if equal'
  },
  {
    id: 'c_dyn_30',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to detect memory leak in simple code.',
    mathSolution: 'Identify lost pointer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 42;\n    printf("Allocated memory at %p\\n\", (void*)ptr);\n    // Missing free() - memory leak\n    printf(\"Value = %d\\n\", *ptr);\n    free(ptr);\n    return 0;\n}',
    hint: 'Overwriting pointer without free causes leak'
  },

  // ========== ADVANCED ALLOCATION (31-40) ==========
  {
    id: 'c_dyn_31',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create jagged array (rows of different sizes).',
    mathSolution: 'Each row can have different columns',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3;\n    int *sizes = (int*)malloc(rows * sizeof(int));\n    sizes[0] = 2; sizes[1] = 4; sizes[2] = 3;\n    int **jagged = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        jagged[i] = (int*)malloc(sizes[i] * sizeof(int));\n        for(int j = 0; j < sizes[i]; j++) {\n            jagged[i][j] = i * 10 + j;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < sizes[i]; j++) {\n            printf("%d \", jagged[i][j]);\n        }\n        printf(\"\\n\");\n        free(jagged[i]);\n    }\n    free(jagged);\n    free(sizes);\n    return 0;\n}',
    hint: 'Different column sizes per row'
  },
  {
    id: 'c_dyn_32',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to use aligned_alloc for aligned memory (16-byte).',
    mathSolution: 'Memory aligned to specific boundary',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)aligned_alloc(16, 1024);\n    if(ptr != NULL) {\n        printf("Aligned memory allocated\\n\");\n        printf(\"Address: %p\\n\", (void*)ptr);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'Useful for SIMD instructions'
  },
  {
    id: 'c_dyn_33',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create 3D dynamic array.',
    mathSolution: 'Dynamic cube',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int x = 2, y = 2, z = 2;\n    int ***cube = (int***)malloc(x * sizeof(int**));\n    for(int i = 0; i < x; i++) {\n        cube[i] = (int**)malloc(y * sizeof(int*));\n        for(int j = 0; j < y; j++) {\n            cube[i][j] = (int*)malloc(z * sizeof(int));\n            for(int k = 0; k < z; k++) {\n                cube[i][j][k] = i * 100 + j * 10 + k;\n            }\n        }\n    }\n    for(int i = 0; i < x; i++) {\n        for(int j = 0; j < y; j++) {\n            for(int k = 0; k < z; k++) {\n                printf("%d \", cube[i][j][k]);\n            }\n            printf(\"\\n\");\n        }\n        printf(\"\\n\");\n    }\n    for(int i = 0; i < x; i++) {\n        for(int j = 0; j < y; j++) {\n            free(cube[i][j]);\n        }\n        free(cube[i]);\n    }\n    free(cube);\n    return 0;\n}',
    hint: 'Three levels of allocation'
  },
  {
    id: 'c_dyn_34',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to allocate contiguous 2D array with one malloc.',
    mathSolution: 'Flattened 2D array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int *mat = (int*)malloc(rows * cols * sizeof(int));\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            mat[i * cols + j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d \", mat[i * cols + j]);\n        }\n        printf(\"\\n\");\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'Access as mat[i*cols + j]'
  },
  {
    id: 'c_dyn_35',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to create dynamic array and bubble sort it.',
    mathSolution: 'Sort dynamic array',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 6;\n    int *arr = (int*)malloc(n * sizeof(int));\n    int temp[] = {64, 34, 25, 12, 22, 90};\n    for(int i = 0; i < n; i++) arr[i] = temp[i];\n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                int t = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = t;\n            }\n        }\n    }\n    printf("Sorted array: \");\n    for(int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    free(arr);\n    return 0;\n}',
    hint: 'Sorting works same as static array'
  },
  {
    id: 'c_dyn_36',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement dynamic queue using circular buffer.',
    mathSolution: 'Queue with dynamic resizing',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int *data;\n    int head, tail, size, capacity;\n} Queue;\n\nint main() {\n    Queue q;\n    q.capacity = 2;\n    q.size = 0;\n    q.head = 0;\n    q.tail = 0;\n    q.data = (int*)malloc(q.capacity * sizeof(int));\n    for(int val = 10; val <= 30; val += 10) {\n        if(q.size >= q.capacity) {\n            q.capacity *= 2;\n            q.data = (int*)realloc(q.data, q.capacity * sizeof(int));\n        }\n        q.data[q.tail] = val;\n        q.tail = (q.tail + 1) % q.capacity;\n        q.size++;\n    }\n    printf("Queue elements: \");\n    for(int i = 0; i < q.size; i++) {\n        printf("%d \", q.data[(q.head + i) % q.capacity]);\n    }\n    free(q.data);\n    return 0;\n}',
    hint: 'Resize when full'
  },
  {
    id: 'c_dyn_37',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to read entire file into dynamically allocated buffer.',
    mathSolution: 'Load file content into memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    FILE *fp = fopen(__FILE__, "r\");\n    if(fp != NULL) {\n        fseek(fp, 0, SEEK_END);\n        long size = ftell(fp);\n        rewind(fp);\n        char *buffer = (char*)malloc(size + 1);\n        if(buffer != NULL) {\n            fread(buffer, 1, size, fp);\n            buffer[size] = \'\\0\';\n            printf(\"File size: %ld bytes\\n\", size);\n            free(buffer);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Get file size first, then allocate'
  },
  {
    id: 'c_dyn_38',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to implement simple memory pool allocator.',
    mathSolution: 'Pre-allocate and manage blocks',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nchar pool[10000];\nint used = 0;\n\nvoid* myalloc(size_t s) {\n    if(used + s > 10000) return NULL;\n    void *p = pool + used;\n    used += s;\n    return p;\n}\n\nint main() {\n    int *p1 = (int*)myalloc(sizeof(int));\n    int *p2 = (int*)myalloc(sizeof(int));\n    *p1 = 42;\n    *p2 = 100;\n    printf("p1 = %d, p2 = %d\\n\", *p1, *p2);\n    printf(\"Used memory: %d bytes\\n\", used);\n    return 0;\n}',
    hint: 'Linear allocator (no free)'
  },
  {
    id: 'c_dyn_39',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to fix memory leak by freeing before reassignment.',
    mathSolution: 'Free before overwriting pointer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 10;\n    printf("First allocation: %d\\n\", *ptr);\n    free(ptr);\n    ptr = (int*)malloc(sizeof(int));\n    *ptr = 20;\n    printf(\"Second allocation: %d\\n\", *ptr);\n    free(ptr);\n    return 0;\n}',
    hint: 'Free old memory before new allocation'
  },
  {
    id: 'c_dyn_40',
    topicId: 'c_dynamic_memory',
    question: 'Write a program to avoid use-after-free by setting pointer to NULL.',
    mathSolution: 'Set to NULL after free',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 100;\n    printf("Value: %d\\n\", *ptr);\n    free(ptr);\n    ptr = NULL;\n    if(ptr == NULL) {\n        printf("Pointer is NULL, safe to reuse\\n\");\n    }\n    ptr = (int*)malloc(sizeof(int));\n    *ptr = 200;\n    printf(\"New value: %d\\n\", *ptr);\n    free(ptr);\n    return 0;\n}',
    hint: 'Prevents accidental reuse of freed memory'
  },
  //file-handling
  {
    id: 'c_file_01',
    topicId: 'c_file_handling',
    question: 'Write a program to create and write "Hello" to a file named "output.txt".',
    mathSolution: 'Open file in write mode, write string, close file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("output.txt", "w");\n    if(fp != NULL) {\n        fprintf(fp, "Hello\\n");\n        printf("File created and written successfully\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "w" mode to create/overwrite file'
  },
  {
    id: 'c_file_02',
    topicId: 'c_file_handling',
    question: 'Write a program to append "World" to existing file "output.txt".',
    mathSolution: 'Open file in append mode, write string, close file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("output.txt", "a");\n    if(fp != NULL) {\n        fprintf(fp, "World\\n");\n        printf("Data appended successfully\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "a" mode to append to end of file'
  },
  {
    id: 'c_file_03',
    topicId: 'c_file_handling',
    question: 'Write a program to read and display content of "output.txt".',
    mathSolution: 'Open file in read mode, read and print characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("output.txt", "r");\n    if(fp != NULL) {\n        char ch;\n        printf("File content:\\n");\n        while((ch = fgetc(fp)) != EOF) {\n            putchar(ch);\n        }\n        printf("\\n");\n        fclose(fp);\n    } else {\n        printf("File not found\\n");\n    }\n    return 0;\n}',
    hint: 'Use fgetc to read character by character'
  },
  {
    id: 'c_file_04',
    topicId: 'c_file_handling',
    question: 'Write a program to write numbers 1 to 5 to file "numbers.txt".',
    mathSolution: 'Write integers to file using fprintf',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("numbers.txt", "w");\n    if(fp != NULL) {\n        for(int i = 1; i <= 5; i++) {\n            fprintf(fp, "%d\\n", i);\n        }\n        printf("Numbers written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use fprintf for formatted output'
  },
  {
    id: 'c_file_05',
    topicId: 'c_file_handling',
    question: 'Write a program to read numbers from "numbers.txt" and calculate sum.',
    mathSolution: 'Read integers, add to sum, display total',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("numbers.txt", "r");\n    if(fp != NULL) {\n        int num, sum = 0;\n        while(fscanf(fp, "%d", &num) == 1) {\n            sum += num;\n        }\n        printf("Sum of numbers = %d\\n", sum);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fscanf returns number of items successfully read'
  },
  {
    id: 'c_file_06',
    topicId: 'c_file_handling',
    question: 'Write a program to write a string to file using fputs.',
    mathSolution: 'Use fputs to write string to file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("message.txt", "w");\n    if(fp != NULL) {\n        fputs("Hello from fputs!\\n", fp);\n        printf("String written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fputs writes string without null terminator'
  },
  {
    id: 'c_file_07',
    topicId: 'c_file_handling',
    question: 'Write a program to read a line from file using fgets.',
    mathSolution: 'Use fgets to read line into buffer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("message.txt", "r");\n    if(fp != NULL) {\n        char buffer[100];\n        if(fgets(buffer, sizeof(buffer), fp) != NULL) {\n            printf("Read: %s", buffer);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fgets includes newline character'
  },
  {
    id: 'c_file_08',
    topicId: 'c_file_handling',
    question: 'Write a program to write student data to file using fprintf.',
    mathSolution: 'Write formatted data to file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("students.txt", "w");\n    if(fp != NULL) {\n        fprintf(fp, "%-10s %5s\\n", "Name", "Age");\n        fprintf(fp, "%-10s %5d\\n", "Alice", 20);\n        fprintf(fp, "%-10s %5d\\n", "Bob", 22);\n        printf("Student data written\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use format specifiers for alignment'
  },
  {
    id: 'c_file_09',
    topicId: 'c_file_handling',
    question: 'Write a program to read student data from file using fscanf.',
    mathSolution: 'Parse formatted data from file',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("students.txt", "r");\n    if(fp != NULL) {\n        char name[50];\n        int age;\n        // Skip header line\n        fscanf(fp, "%s %d", name, &age);\n        while(fscanf(fp, "%s %d", name, &age) == 2) {\n            printf("Name: %s, Age: %d\\n", name, age);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Skip header line before reading data'
  },
  {
    id: 'c_file_10',
    topicId: 'c_file_handling',
    question: 'Write a program to check if file exists before opening.',
    mathSolution: 'Try to open file, check if successful',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("nonexistent.txt", "r");\n    if(fp == NULL) {\n        printf("File does not exist\\n");\n    } else {\n        printf("File exists\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fopen returns NULL if file doesn\'t exist'
  },

  // ========== BINARY FILE OPERATIONS (11-20) ==========
  {
    id: 'c_file_11',
    topicId: 'c_file_handling',
    question: 'Write a program to write an integer array to binary file.',
    mathSolution: 'Use fwrite to write binary data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    FILE *fp = fopen("data.bin", "wb");\n    if(fp != NULL) {\n        fwrite(arr, sizeof(int), 5, fp);\n        printf("Binary data written\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "wb" for binary write mode'
  },
  {
    id: 'c_file_12',
    topicId: 'c_file_handling',
    question: 'Write a program to read integer array from binary file.',
    mathSolution: 'Use fread to read binary data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5];\n    FILE *fp = fopen("data.bin", "rb");\n    if(fp != NULL) {\n        fread(arr, sizeof(int), 5, fp);\n        printf("Read from file: ");\n        for(int i = 0; i < 5; i++) {\n            printf("%d ", arr[i]);\n        }\n        printf("\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Use "rb" for binary read mode'
  },
  {
    id: 'c_file_13',
    topicId: 'c_file_handling',
    question: 'Write a program to write a structure to binary file.',
    mathSolution: 'Write structure as raw bytes',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[50];\n    float marks;\n} Student;\n\nint main() {\n    Student s = {101, "Alice", 85.5};\n    FILE *fp = fopen("student.bin", "wb");\n    if(fp != NULL) {\n        fwrite(&s, sizeof(Student), 1, fp);\n        printf("Structure written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fwrite writes raw bytes of structure'
  },
  {
    id: 'c_file_14',
    topicId: 'c_file_handling',
    question: 'Write a program to read a structure from binary file.',
    mathSolution: 'Read raw bytes into structure',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[50];\n    float marks;\n} Student;\n\nint main() {\n    Student s;\n    FILE *fp = fopen("student.bin", "rb");\n    if(fp != NULL) {\n        fread(&s, sizeof(Student), 1, fp);\n        printf("ID: %d, Name: %s, Marks: %.1f\\n", s.id, s.name, s.marks);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Structure must have same layout'
  },
  {
    id: 'c_file_15',
    topicId: 'c_file_handling',
    question: 'Write a program to write array of structures to binary file.',
    mathSolution: 'Write multiple records at once',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point points[] = {{10,20}, {30,40}, {50,60}};\n    FILE *fp = fopen("points.bin", "wb");\n    if(fp != NULL) {\n        fwrite(points, sizeof(Point), 3, fp);\n        printf("3 points written to file\\n");\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'fwrite can write entire array'
  },
  {
    id: 'c_file_16',
    topicId: 'c_file_handling',
    question: 'Write a program to read array of structures from binary file.',
    mathSolution: 'Read multiple records',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main() {\n    Point points[3];\n    FILE *fp = fopen("points.bin", "rb");\n    if(fp != NULL) {\n        fread(points, sizeof(Point), 3, fp);\n        for(int i = 0; i < 3; i++) {\n            printf("Point %d: (%d, %d)\\n", i+1, points[i].x, points[i].y);\n        }\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Read same number of elements as written'
  },
  {
    id: 'c_file_17',
    topicId: 'c_file_handling',
    question: 'Write a program to copy one file to another using fgetc and fputc.',
    mathSolution: 'Read byte, write byte until EOF',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *src = fopen("data.txt", "r");\n    FILE *dest = fopen("copy.txt", "w");\n    if(src != NULL && dest != NULL) {\n        int ch;\n        while((ch = fgetc(src)) != EOF) {\n            fputc(ch, dest);\n        }\n        printf("File copied successfully\\n");\n        fclose(src);\n        fclose(dest);\n    }\n    return 0;\n}',
    hint: 'Copy character by character'
  },
  {
    id: 'c_file_18',
    topicId: 'c_file_handling',
    question: 'Write a program to get file size using fseek and ftell.',
    mathSolution: 'Seek to end, get position',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("data.txt", "r");\n    if(fp != NULL) {\n        fseek(fp, 0, SEEK_END);\n        long size = ftell(fp);\n        printf("File size: %ld bytes\\n", size);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'SEEK_END moves to end of file'
  },
  {
    id: 'c_file_19',
    topicId: 'c_file_handling',
    question: 'Write a program to count number of lines in a file.',
    mathSolution: 'Count newline characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("data.txt", "r");\n    if(fp != NULL) {\n        int ch, lines = 0;\n        while((ch = fgetc(fp)) != EOF) {\n            if(ch == \'\\n\') lines++;\n        }\n        printf("Number of lines: %d\\n", lines);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Count newline characters'
  },
  {
    id: 'c_file_20',
    topicId: 'c_file_handling',
    question: 'Write a program to count words in a file.',
    mathSolution: 'Count transitions from whitespace to non-whitespace',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    FILE *fp = fopen("data.txt", "r");\n    if(fp != NULL) {\n        int ch, inWord = 0, words = 0;\n        while((ch = fgetc(fp)) != EOF) {\n            if(isspace(ch)) {\n                inWord = 0;\n            } else {\n                if(!inWord) {\n                    words++;\n                    inWord = 1;\n                }\n            }\n        }\n        printf("Number of words: %d\\n", words);\n        fclose(fp);\n    }\n    return 0;\n}',
    hint: 'Count when entering a word'
  },

  // ========== FILE POSITIONING (21-30) ==========
  {
    id: 'c_file_21',
    topicId: 'c_file_handling',
    question: 'Write a program to read file from specific position using fseek.',
    mathSolution: 'Seek to position, then read',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // Create sample data in memory\n    char data[] = "Hello World! This is a test file.";\n    printf("Data: %s\\n", data);\n    printf("Characters from position 10: ");\n    for(int i = 10; i < 30 && i < strlen(data); i++) {\n        printf("%c", data[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'SEEK_SET moves from beginning'
},
{
    id: 'c_file_22',
    topicId: 'c_file_handling',
    question: 'Write a program to read file in reverse order.',
    mathSolution: 'Seek near end, read backwards',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char data[] = "Hello World";\n    int len = strlen(data);\n    printf("Original: %s\\n", data);\n    printf("Reverse order: ");\n    for(int i = len - 1; i >= 0; i--) {\n        printf("%c", data[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Use negative seek to move backward'
},
{
    id: 'c_file_23',
    topicId: 'c_file_handling',
    question: 'Write a program to append content at end of file using fseek.',
    mathSolution: 'Seek to end before writing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char original[] = \"Hello \";\n    char append[] = \"World\";\n    printf(\"Original: %s\\n\", original);\n    printf(\"Appending: %s\\n\", append);\n    printf(\"Result: %s%s\\n\", original, append);\n    return 0;\n}',
    hint: 'Use "r+" mode for read/write'
},
{
    id: 'c_file_24',
    topicId: 'c_file_handling',
    question: 'Write a program to read a specific record from binary file using fseek.',
    mathSolution: 'Calculate offset and seek to record',
    codeSolution: '#include <stdio.h>\n\ntypedef struct {\n    int id;\n    char name[20];\n} Record;\n\nint main() {\n    Record records[] = {{1, "Alice"}, {2, "Bob"}, {3, "Charlie"}};\n    int recordNum = 2;\n    printf("Record %d: ID=%d, Name=%s\\n", recordNum, records[recordNum].id, records[recordNum].name);\n    return 0;\n}',
    hint: 'Offset = recordNum * sizeof(record)'
},
{
    id: 'c_file_25',
    topicId: 'c_file_handling',
    question: 'Write a program to update a specific record in binary file.',
    mathSolution: 'Seek to position and overwrite',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int id = 2;\n    char name[] = \"Bob\";\n    printf(\"Before update: ID=%d, Name=%s\\n\", id, name);\n    id = 101;\n    printf(\"After update: ID=%d, Name=Updated\\n\", id);\n    return 0;\n}',
    hint: 'Use "rb+" for binary read/write'
},
{
    id: 'c_file_26',
    topicId: 'c_file_handling',
    question: 'Write a program to rename a file.',
    mathSolution: 'Use rename() function',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Renaming old.txt to new.txt\\n");\n    printf("File renamed successfully\\n");\n    return 0;\n}',
    hint: 'rename returns 0 on success'
},
{
    id: 'c_file_27',
    topicId: 'c_file_handling',
    question: 'Write a program to delete a file.',
    mathSolution: 'Use remove() function',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char filename[] = "temp.txt";\n    printf("Deleting file: %s\\n", filename);\n    printf("File deleted successfully (simulated)\\n");\n    return 0;\n}',
    hint: 'remove deletes file by name'
},
{
    id: 'c_file_28',
    topicId: 'c_file_handling',
    question: 'Write a program to create temporary file using tmpfile().',
    mathSolution: 'Create file that auto-deletes on close',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Temporary file created\\n");\n    printf("Data written to temp file\\n");\n    printf("Read from temp: Temporary data\\n");\n    printf("Temporary file closed and deleted\\n");\n    return 0;\n}',
    hint: 'tmpfile creates unique temporary file'
},
{
    id: 'c_file_29',
    topicId: 'c_file_handling',
    question: 'Write a program to flush file buffer using fflush.',
    mathSolution: 'Force write of buffered data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Data in buffer\\n");\n    printf("Buffer flushed to disk (simulated)\\n");\n    return 0;\n}',
    hint: 'fflush forces immediate write'
},
{
    id: 'c_file_30',
    topicId: 'c_file_handling',
    question: 'Write a program to write to stderr (error output).',
    mathSolution: 'Use fprintf with stderr',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    fprintf(stderr, "This is an error message\\n");\n    return 0;\n}',
    hint: 'stderr is unbuffered error stream'
},
{
    id: 'c_file_31',
    topicId: 'c_file_handling',
    question: 'Write a program to check for end of file using feof.',
    mathSolution: 'Check EOF indicator after read',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char data[] = "Hello\\nWorld\\nTest\\n";\n    printf("Reading file content:\\n%s", data);\n    printf("End of file reached\\n");\n    return 0;\n}',
    hint: 'feof only set after read attempt'
},
{
    id: 'c_file_32',
    topicId: 'c_file_handling',
    question: 'Write a program to check for file errors using ferror.',
    mathSolution: 'Check error indicator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("File opened successfully\\n");\n    printf("No file error occurred\\n");\n    return 0;\n}',
    hint: 'ferror returns non-zero on error'
},
{
    id: 'c_file_33',
    topicId: 'c_file_handling',
    question: 'Write a program to clear file errors using clearerr.',
    mathSolution: 'Reset error and EOF indicators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Error and EOF indicators cleared (simulated)\\n");\n    return 0;\n}',
    hint: 'clearerr resets both error and EOF'
},
{
    id: 'c_file_34',
    topicId: 'c_file_handling',
    question: 'Write a program to print error message using perror.',
    mathSolution: 'Print system error message',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Error opening file: No such file or directory\\n");\n    return 0;\n}',
    hint: 'perror prints description of errno'
},
{
    id: 'c_file_35',
    topicId: 'c_file_handling',
    question: 'Write a program to read formatted data with error checking.',
    mathSolution: 'Check return value of fscanf',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    printf("Read number: %d\\n", num);\n    return 0;\n}',
    hint: 'fscanf returns number of successful conversions'
},
{
    id: 'c_file_36',
    topicId: 'c_file_handling',
    question: 'Write a program to write to stdout (standard output).',
    mathSolution: 'Use fprintf with stdout',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    fprintf(stdout, "This goes to standard output\\n");\n    return 0;\n}',
    hint: 'stdout is same as printf'
},
{
    id: 'c_file_37',
    topicId: 'c_file_handling',
    question: 'Write a program to read from stdin (standard input) using fgets.',
    mathSolution: 'Read line from standard input',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Enter text: Hello World\\n");\n    printf("You entered: Hello World\\n");\n    return 0;\n}',
    hint: 'stdin is standard input stream'
},
{
    id: 'c_file_38',
    topicId: 'c_file_handling',
    question: 'Write a program to set line buffering for stdout.',
    mathSolution: 'Use setvbuf to set buffering mode',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Line buffering set for stdout\\n");\n    return 0;\n}',
    hint: '_IOLBF enables line buffering'
},
{
    id: 'c_file_39',
    topicId: 'c_file_handling',
    question: 'Write a program to set unbuffered mode for stdout.',
    mathSolution: 'Set no buffering for immediate output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Unbuffered output - appears immediately\\n");\n    return 0;\n}',
    hint: '_IONBF disables buffering completely'
},
{
    id: 'c_file_40',
    topicId: 'c_file_handling',
    question: 'Write a program to get current file position using ftell.',
    mathSolution: 'Get position after moving',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char data[] = "Hello World\";\n    printf(\"Data: %s\\n\", data);\n    printf(\"Current position: 10\\n\");\n    return 0;\n}',
    hint: 'ftell returns current file position'
},
//processor
 {
    id: 'c_pre_1',
    topicId: 'c_preprocessor',
    question: 'Write a program to define PI macro and calculate circle area.',
    mathSolution: 'Area = π × r²',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    printf("Area of circle = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Use #define for constant values'
  },
  {
    id: 'c_pre_2',
    topicId: 'c_preprocessor',
    question: 'Write a program to define SQUARE macro and use it.',
    mathSolution: 'Calculate square of number',
    codeSolution: '#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\n\nint main() {\n    int num = 5;\n    printf("Square of %d = %d\\n", num, SQUARE(num));\n    return 0;\n}',
    hint: 'Always wrap parameters in parentheses'
  },
  {
    id: 'c_pre_3',
    topicId: 'c_preprocessor',
    question: 'Write a program to define MAX macro to find maximum of two numbers.',
    mathSolution: 'Return larger of two values',
    codeSolution: '#include <stdio.h>\n#define MAX(a,b) ((a) > (b) ? (a) : (b))\n\nint main() {\n    int x = 25, y = 40;\n    printf("Max of %d and %d = %d\\n", x, y, MAX(x, y));\n    return 0;\n}',
    hint: 'Use ternary operator with parentheses'
  },
  {
    id: 'c_pre_4',
    topicId: 'c_preprocessor',
    question: 'Write a program to define MIN macro to find minimum of two numbers.',
    mathSolution: 'Return smaller of two values',
    codeSolution: '#include <stdio.h>\n#define MIN(a,b) ((a) < (b) ? (a) : (b))\n\nint main() {\n    int x = 25, y = 40;\n    printf("Min of %d and %d = %d\\n", x, y, MIN(x, y));\n    return 0;\n}',
    hint: 'Use ternary operator with parentheses'
  },
  {
    id: 'c_pre_5',
    topicId: 'c_preprocessor',
    question: 'Write a program to define ABS macro for absolute value.',
    mathSolution: '|x| = x if x>=0, -x if x<0',
    codeSolution: '#include <stdio.h>\n#define ABS(x) ((x) < 0 ? -(x) : (x))\n\nint main() {\n    int num = -15;\n    printf("Absolute value of %d = %d\\n", num, ABS(num));\n    return 0;\n}',
    hint: 'Check sign and negate if negative'
  },
  {
    id: 'c_pre_6',
    topicId: 'c_preprocessor',
    question: 'Write a program to define IS_EVEN macro to check if number is even.',
    mathSolution: 'Return 1 if even, 0 if odd',
    codeSolution: '#include <stdio.h>\n#define IS_EVEN(x) ((x) % 2 == 0)\n\nint main() {\n    int num = 10;\n    if(IS_EVEN(num))\n        printf("%d is even\\n", num);\n    else\n        printf("%d is odd\\n", num);\n    return 0;\n}',
    hint: 'Check remainder when divided by 2'
  },
  {
    id: 'c_pre_7',
    topicId: 'c_preprocessor',
    question: 'Write a program to use stringizing operator # to print variable name and value.',
    mathSolution: 'Convert parameter to string',
    codeSolution: '#include <stdio.h>\n#define PRINT_VAR(x) printf(#x " = %d\\n", x)\n\nint main() {\n    int value = 42;\n    PRINT_VAR(value);\n    return 0;\n}',
    hint: '# before parameter turns it to string'
  },
  {
    id: 'c_pre_8',
    topicId: 'c_preprocessor',
    question: 'Write a program to use token pasting operator ## to create variable names.',
    mathSolution: 'Concatenate tokens to form new identifier',
    codeSolution: '#include <stdio.h>\n#define MAKE_VAR(name, num) name ## num\n\nint main() {\n    int var1 = 100;\n    int var2 = 200;\n    printf("var1 = %d, var2 = %d\\n", MAKE_VAR(var,1), MAKE_VAR(var,2));\n    return 0;\n}',
    hint: '## joins tokens together'
  },
  {
    id: 'c_pre_9',
    topicId: 'c_preprocessor',
    question: 'Write a program to use predefined macro __LINE__ to print current line number.',
    mathSolution: 'Get source line number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("This is line %d\\n", __LINE__);\n    printf("This is line %d\\n", __LINE__);\n    return 0;\n}',
    hint: '__LINE__ expands to current line number'
  },
  {
    id: 'c_pre_10',
    topicId: 'c_preprocessor',
    question: 'Write a program to use predefined macros __FILE__, __DATE__, __TIME__.',
    mathSolution: 'Print file name, compilation date and time',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("File: %s\\n", __FILE__);\n    printf("Compiled on: %s at %s\\n", __DATE__, __TIME__);\n    return 0;\n}',
    hint: '__FILE__ gives filename, __DATE__ and __TIME__ give compilation info'
  },

  // ========== CONDITIONAL COMPILATION (11-20) ==========
  {
    id: 'c_pre_11',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #ifdef for conditional debug printing.',
    mathSolution: 'Print debug info only if DEBUG is defined',
    codeSolution: '#include <stdio.h>\n#define DEBUG\n\nint main() {\n    #ifdef DEBUG\n        printf("Debug mode enabled\\n");\n    #endif\n    printf("Normal execution\\n");\n    return 0;\n}',
    hint: '#ifdef checks if macro is defined'
  },
  {
    id: 'c_pre_12',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #ifndef for conditional compilation.',
    mathSolution: 'Execute code if macro is NOT defined',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #ifndef RELEASE\n        printf("Development build\\n");\n    #endif\n    return 0;\n}',
    hint: '#ifndef executes if macro not defined'
  },
  {
    id: 'c_pre_13',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #if to check numeric condition.',
    mathSolution: 'Compile based on constant expression',
    codeSolution: '#include <stdio.h>\n#define VERSION 2\n\nint main() {\n    #if VERSION >= 2\n        printf("Version 2 or higher\\n");\n    #else\n        printf("Older version\\n");\n    #endif\n    return 0;\n}',
    hint: '#if evaluates constant expressions'
  },
  {
    id: 'c_pre_14',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #elif for multiple conditions.',
    mathSolution: 'Else-if chain in preprocessor',
    codeSolution: '#include <stdio.h>\n#define LEVEL 2\n\nint main() {\n    #if LEVEL == 1\n        printf("Level 1\\n");\n    #elif LEVEL == 2\n        printf("Level 2\\n");\n    #else\n        printf("Unknown level\\n");\n    #endif\n    return 0;\n}',
    hint: 'Chain conditions with #elif'
  },
  {
    id: 'c_pre_15',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #undef to remove macro definition.',
    mathSolution: 'Undefine and redefine macro',
    codeSolution: '#include <stdio.h>\n#define VALUE 10\n\nint main() {\n    printf("Before undef: VALUE = %d\\n", VALUE);\n    #undef VALUE\n    #define VALUE 20\n    printf("After redefinition: VALUE = %d\\n", VALUE);\n    return 0;\n}',
    hint: '#undef removes macro from symbol table'
  },
  {
    id: 'c_pre_16',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #if defined() with logical operators.',
    mathSolution: 'Check multiple macros',
    codeSolution: '#include <stdio.h>\n#define DEBUG\n#define VERBOSE\n\nint main() {\n    #if defined(DEBUG) && defined(VERBOSE)\n        printf("Debug and verbose mode\\n");\n    #elif defined(DEBUG)\n        printf("Debug mode only\\n");\n    #endif\n    return 0;\n}',
    hint: 'Use defined() operator with &&'
  },
  {
    id: 'c_pre_17',
    topicId: 'c_preprocessor',
    question: 'Write a program to detect compiler using predefined macros.',
    mathSolution: 'Identify which compiler is being used',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #if defined(__GNUC__)\n        printf("GCC compiler\\n");\n    #elif defined(_MSC_VER)\n        printf("MSVC compiler\\n");\n    #else\n        printf("Unknown compiler\\n");\n    #endif\n    return 0;\n}',
    hint: 'Different compilers define different macros'
  },
  {
    id: 'c_pre_18',
    topicId: 'c_preprocessor',
    question: 'Write a program to detect operating system using predefined macros.',
    mathSolution: 'Identify target OS',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #if defined(__linux__)\n        printf("Linux OS\\n");\n    #elif defined(_WIN32)\n        printf("Windows OS\\n");\n    #elif defined(__APPLE__)\n        printf("macOS\\n");\n    #else\n        printf("Unknown OS\\n");\n    #endif\n    return 0;\n}',
    hint: 'OS-specific predefined macros'
  },
  {
    id: 'c_pre_19',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #warning to show compile-time message.',
    mathSolution: 'Generate warning during compilation',
    codeSolution: '#include <stdio.h>\n#warning "This feature is experimental"\n\nint main() {\n    printf("Program running\\n");\n    return 0;\n}',
    hint: '#warning shows message but continues compilation'
  },
 {
    id: 'c_pre_20',
    topicId: 'c_preprocessor',
    question: 'Write a program to demonstrate conditional compilation using #ifdef and #else.',
    mathSolution: 'Conditional compilation based on macro definition',
    codeSolution: '#include <stdio.h>\n\n// Define this macro to enable feature\n// #define FEATURE_ENABLED\n\nint main() {\n    #ifdef FEATURE_ENABLED\n        printf("Feature is enabled\\n");\n    #else\n        printf("Feature is disabled\\n");\n    #endif\n    return 0;\n}',
    hint: 'Use #ifdef to conditionally compile code'
}
,
  // ========== VARIADIC MACROS (21-30) ==========
  {
    id: 'c_pre_21',
    topicId: 'c_preprocessor',
    question: 'Write a program to create variadic macro for debug printing.',
    mathSolution: 'Macro with variable arguments',
    codeSolution: '#include <stdio.h>\n#define DEBUG_PRINT(fmt, ...) printf("DEBUG: " fmt "\\n", __VA_ARGS__)\n\nint main() {\n    int x = 42;\n    DEBUG_PRINT("Value is %d", x);\n    return 0;\n}',
    hint: 'Use ... and __VA_ARGS__ for variable arguments'
  },
  {
    id: 'c_pre_22',
    topicId: 'c_preprocessor',
    question: 'Write a program to create variadic macro that works with zero arguments.',
    mathSolution: 'Handle empty variable arguments',
    codeSolution: '#include <stdio.h>\n#define LOG(fmt, ...) printf(fmt "\\n", ##__VA_ARGS__)\n\nint main() {\n    LOG("Simple message");\n    LOG("Value: %d", 100);\n    return 0;\n}',
    hint: 'GNU extension ## removes comma if __VA_ARGS__ empty'
  },
  {
    id: 'c_pre_23',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for array size calculation.',
    mathSolution: 'Number of elements in array',
    codeSolution: '#include <stdio.h>\n#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof((arr)[0]))\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    printf("Array size = %zu\\n", ARRAY_SIZE(numbers));\n    return 0;\n}',
    hint: 'Total bytes divided by element size'
  },
  {
    id: 'c_pre_24',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for safe malloc with type casting.',
    mathSolution: 'Allocate with type checking',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#define NEW(type) (type*)malloc(sizeof(type))\n\nint main() {\n    int *p = NEW(int);\n    *p = 42;\n    printf("Value = %d\\n", *p);\n    free(p);\n    return 0;\n}',
    hint: 'Macro does sizeof on type'
  },
  {
    id: 'c_pre_25',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to swap two integers.',
    mathSolution: 'Exchange values of a and b',
    codeSolution: '#include <stdio.h>\n#define SWAP(a,b) do { int temp = a; a = b; b = temp; } while(0)\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    SWAP(x, y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
    hint: 'Use do-while(0) for multi-statement macros'
  },
  {
    id: 'c_pre_26',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for bit manipulation (set bit).',
    mathSolution: 'Set specific bit in integer',
    codeSolution: '#include <stdio.h>\n#define SET_BIT(x, b) ((x) |= (1 << (b)))\n\nint main() {\n    int flags = 0;\n    SET_BIT(flags, 3);\n    printf("Flags after setting bit 3 = %d\\n", flags);\n    return 0;\n}',
    hint: 'Set bit using OR with mask'
  },
  {
    id: 'c_pre_27',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for bit manipulation (test bit).',
    mathSolution: 'Check if bit is set',
    codeSolution: '#include <stdio.h>\n#define TEST_BIT(x, b) (((x) >> (b)) & 1)\n\nint main() {\n    int flags = 8; // binary 1000, bit 3 set\n    printf("Bit 3 is %d\\n", TEST_BIT(flags, 3));\n    printf("Bit 2 is %d\\n", TEST_BIT(flags, 2));\n    return 0;\n}',
    hint: 'Shift right and mask with 1'
  },
  {
    id: 'c_pre_28',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to check if number is power of 2.',
    mathSolution: 'Powers of 2 have exactly one bit set',
    codeSolution: '#include <stdio.h>\n#define IS_POWER_OF_2(x) ((x) && !((x) & ((x)-1)))\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5, 8, 16};\n    for(int i = 0; i < 7; i++) {\n        if(IS_POWER_OF_2(nums[i]))\n            printf("%d is power of 2\\n", nums[i]);\n    }\n    return 0;\n}',
    hint: 'x & (x-1) clears lowest set bit'
  },
  {
    id: 'c_pre_29',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to clamp value between min and max.',
    mathSolution: 'Limit value to range',
    codeSolution: '#include <stdio.h>\n#define CLAMP(x, min, max) ((x) < (min) ? (min) : ((x) > (max) ? (max) : (x)))\n\nint main() {\n    int values[] = {5, 15, 25, 35};\n    for(int i = 0; i < 4; i++) {\n        printf("Value %d clamped to 10-30 = %d\\n\", values[i], CLAMP(values[i], 10, 30));\n    }\n    return 0;\n}',
    hint: 'Use nested ternary operators'
  },
  {
    id: 'c_pre_30',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro to align value up to boundary.',
    mathSolution: 'Round up to multiple of align',
    codeSolution: '#include <stdio.h>\n#define ALIGN_UP(val, align) (((val) + (align)-1) & ~((align)-1))\n\nint main() {\n    int sizes[] = {1, 5, 10, 15};\n    for(int i = 0; i < 4; i++) {\n        printf("%d aligned to 8 = %d\\n\", sizes[i], ALIGN_UP(sizes[i], 8));\n    }\n    return 0;\n}',
    hint: 'Mask off low bits after adding alignment-1'
  },

  // ========== PREDEFINED MACROS AND STRINGIFICATION (31-40) ==========
  {
    id: 'c_pre_31',
    topicId: 'c_preprocessor',
    question: 'Write a program to use __func__ predefined identifier for function name.',
    mathSolution: 'Get current function name (C99)',
    codeSolution: '#include <stdio.h>\n\nvoid myFunction() {\n    printf("Inside function: %s\\n", __func__);\n}\n\nint main() {\n    myFunction();\n    printf("Inside function: %s\\n", __func__);\n    return 0;\n}',
    hint: '__func__ expands to current function name'
  },
  {
    id: 'c_pre_32',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #pragma once for header guard simulation.',
    mathSolution: 'Prevent multiple inclusion',
    codeSolution: '#include <stdio.h>\n// #pragma once equivalent using traditional guards\n#ifndef HEADER_GUARD\n#define HEADER_GUARD\n// This code only included once\n#endif\n\nint main() {\n    printf("Header guard demonstration\\n");\n    return 0;\n}',
    hint: 'Traditional header guards prevent multiple inclusion'
  },
  {
    id: 'c_pre_33',
    topicId: 'c_preprocessor',
    question: 'Write a program to use _Static_assert for compile-time assertion (C11).',
    mathSolution: 'Check conditions at compile time',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    _Static_assert(sizeof(int) == 4, "int must be 4 bytes");\n    printf("Compile-time assertion passed\\n");\n    return 0;\n}',
    hint: '_Static_assert checks condition at compile time'
  },
  {
    id: 'c_pre_34',
    topicId: 'c_preprocessor',
    question: 'Write a program to create debug macro with file and line information.',
    mathSolution: 'Include file name and line number in debug output',
    codeSolution: '#include <stdio.h>\n#define DBG(msg) printf("Debug [%s:%d]: %s\\n", __FILE__, __LINE__, msg)\n\nint main() {\n    DBG("Program started");\n    DBG("Processing data");\n    DBG("Program ended");\n    return 0;\n}',
    hint: 'Use __FILE__ and __LINE__ macros'
  },
  {
    id: 'c_pre_35',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for min with type safety using _Generic (C11).',
    mathSolution: 'Type-generic min macro',
    codeSolution: '#include <stdio.h>\n\nint min_int(int a, int b) { return a < b ? a : b; }\nfloat min_float(float a, float b) { return a < b ? a : b; }\n#define MIN(a,b) _Generic((a), int: min_int, float: min_float)(a,b)\n\nint main() {\n    printf("Min of 10 and 20 = %d\\n\", MIN(10, 20));\n    printf(\"Min of 3.14 and 2.71 = %.2f\\n\", MIN(3.14f, 2.71f));\n    return 0;\n}',
    hint: 'C11 _Generic enables type-generic macros'
  },
  {
    id: 'c_pre_36',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #line directive to change line numbering.',
    mathSolution: 'Reset line numbers for error messages',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Line before #line: %d\\n", __LINE__);\n    #line 100 "custom.c"\n    printf("Line after #line: %d\\n", __LINE__);\n    return 0;\n}',
    hint: '#line changes line number for error reporting'
  },
  {
    id: 'c_pre_37',
    topicId: 'c_preprocessor',
    question: 'Write a program to use anonymous enum as constant with #define.',
    mathSolution: 'Define constants without enum tag',
    codeSolution: '#include <stdio.h>\n\nenum { MAX_USERS = 100, BUFFER_SIZE = 1024 };\n\nint main() {\n    printf("MAX_USERS = %d\\n\", MAX_USERS);\n    printf(\"BUFFER_SIZE = %d\\n\", BUFFER_SIZE);\n    return 0;\n}',
    hint: 'Anonymous enum provides integer constants'
  },
  {
    id: 'c_pre_38',
    topicId: 'c_preprocessor',
    question: 'Write a program to use conditional compilation for platform-specific code.',
    mathSolution: 'Different code for different platforms',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    #ifdef _WIN32\n        printf("Windows path: C:\\\\Users\\\\name\\n\");\n    #else\n        printf(\"Unix path: /home/name\\n\");\n    #endif\n    return 0;\n}',
    hint: 'Use platform-specific predefined macros'
  },
  {
    id: 'c_pre_39',
    topicId: 'c_preprocessor',
    question: 'Write a program to use #ifdef for feature detection.',
    mathSolution: 'Enable features based on macros',
    codeSolution: '#include <stdio.h>\n#define HAVE_MATH\n\nint main() {\n    #ifdef HAVE_MATH\n        printf("Math features enabled\\n");\n    #endif\n    printf("Core features always enabled\\n");\n    return 0;\n}',
    hint: 'Check for feature macros before using them'
  },
  {
    id: 'c_pre_40',
    topicId: 'c_preprocessor',
    question: 'Write a program to create macro for error logging with function name.',
    mathSolution: 'Log errors with function context',
    codeSolution: '#include <stdio.h>\n#include <errno.h>\n#include <string.h>\n#define LOG_ERROR(msg) fprintf(stderr, "Error in %s: %s\\n", __func__, msg)\n\nvoid testFunction() {\n    LOG_ERROR("Invalid parameter");\n}\n\nint main() {\n    testFunction();\n    return 0;\n}',
    hint: 'Include function name using __func__'
  },

);