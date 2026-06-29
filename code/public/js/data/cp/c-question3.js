QuizData.questions.push(
 //function ,string ,pointers,recursion
  {
    id: 'c_func_001',
    topicId: 'c_functions',
    question: 'Write a program with a function to add two integers and display result.',
    mathSolution: 'Add 10 and 20 = 30',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(10, 20);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Function returns int, takes two int parameters'
  },
  {
    id: 'c_func_002',
    topicId: 'c_functions',
    question: 'Write a program with a void function that prints "Hello World".',
    mathSolution: 'Print greeting message',
    codeSolution: '#include <stdio.h>\n\nvoid greet(void) {\n    printf("Hello World\\n");\n}\n\nint main() {\n    greet();\n    return 0;\n}',
    hint: 'void return type means no return value'
  },
  {
    id: 'c_func_003',
    topicId: 'c_functions',
    question: 'Write a program with a function to find maximum of two numbers.',
    mathSolution: 'Max of 15 and 25 is 25',
    codeSolution: '#include <stdio.h>\n\nint max(int x, int y) {\n    return (x > y) ? x : y;\n}\n\nint main() {\n    int result = max(15, 25);\n    printf("Maximum = %d\\n", result);\n    return 0;\n}',
    hint: 'Use conditional operator or if-else'
  },
  {
    id: 'c_func_004',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate area of circle given radius 5.',
    mathSolution: 'Area = π × 5² = 78.54',
    codeSolution: '#include <stdio.h>\n\nfloat areaCircle(float r) {\n    return 3.14159 * r * r;\n}\n\nint main() {\n    float area = areaCircle(5);\n    printf("Area = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Use float parameters and return type'
  },
  {
    id: 'c_func_005',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if character \'a\' is vowel.',
    mathSolution: '\'a\' is a vowel',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint isVowel(char c) {\n    c = tolower(c);\n    return (c==\'a\'||c==\'e\'||c==\'i\'||c==\'o\'||c==\'u\');\n}\n\nint main() {\n    char ch = \'a\';\n    if(isVowel(ch))\n        printf("%c is a vowel\\n", ch);\n    else\n        printf("%c is a consonant\\n", ch);\n    return 0;\n}',
    hint: 'Check against set of vowels'
  },
  {
    id: 'c_func_006',
    topicId: 'c_functions',
    question: 'Write a program with a function to convert 25°C to Fahrenheit.',
    mathSolution: '25°C = 77°F',
    codeSolution: '#include <stdio.h>\n\nfloat celsiusToFahrenheit(float c) {\n    return (c * 9/5) + 32;\n}\n\nint main() {\n    float f = celsiusToFahrenheit(25);\n    printf("25°C = %.2f°F\\n", f);\n    return 0;\n}',
    hint: 'Apply conversion formula F = (C × 9/5) + 32'
  },
  {
    id: 'c_func_007',
    topicId: 'c_functions',
    question: 'Write a program with a function to find sum of array elements.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint arraySum(int arr[], int size) {\n    int sum = 0;\n    for(int i = 0; i < size; i++)\n        sum += arr[i];\n    return sum;\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int sum = arraySum(arr, 5);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Pass array and its size'
  },
  {
    id: 'c_func_008',
    topicId: 'c_functions',
    question: 'Write a program with a function to find average of array elements.',
    mathSolution: 'Average of [10,20,30,40,50] = 30',
    codeSolution: '#include <stdio.h>\n\nfloat arrayAvg(int arr[], int n) {\n    int sum = 0;\n    for(int i = 0; i < n; i++)\n        sum += arr[i];\n    return (float)sum / n;\n}\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    float avg = arrayAvg(arr, 5);\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Cast sum to float for division'
  },
  {
    id: 'c_func_009',
    topicId: 'c_functions',
    question: 'Write a program with a recursive function to calculate factorial of 5.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int result = factorial(5);\n    printf("5! = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 or 1 returns 1'
  },
  {
    id: 'c_func_010',
    topicId: 'c_functions',
    question: 'Write a program with a recursive function to find 6th Fibonacci number.',
    mathSolution: 'Fib(6) = 8 (0,1,1,2,3,5,8)',
    codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int result = fib(6);\n    printf("Fibonacci(6) = %d\\n", result);\n    return 0;\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },

  // ========== RECURSIVE FUNCTIONS (11-20) ==========
  {
    id: 'c_func_011',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to calculate power 2^5.',
    mathSolution: '2^5 = 32',
    codeSolution: '#include <stdio.h>\n\nint power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int result = power(2, 5);\n    printf("2^5 = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_func_012',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find sum of digits of 123.',
    mathSolution: '1+2+3 = 6',
    codeSolution: '#include <stdio.h>\n\nint sumDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumDigits(n / 10);\n}\n\nint main() {\n    int result = sumDigits(123);\n    printf("Sum of digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Add last digit to sum of remaining'
  },
  {
    id: 'c_func_013',
    topicId: 'c_functions',
    question: 'Write a program with a function to find length of string "Hello".',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint stringLength(char str[]) {\n    int len = 0;\n    while(str[len] != \'\\0\')\n        len++;\n    return len;\n}\n\nint main() {\n    char str[] = "Hello";\n    int len = stringLength(str);\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Loop until null terminator'
  },
  {
    id: 'c_func_014',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 17 is prime.',
    mathSolution: '17 is prime',
    codeSolution: '#include <stdio.h>\n\nint isPrime(int n) {\n    if(n < 2) return 0;\n    for(int i = 2; i <= n/2; i++)\n        if(n % i == 0) return 0;\n    return 1;\n}\n\nint main() {\n    int n = 17;\n    if(isPrime(n))\n        printf("%d is prime\\n", n);\n    else\n        printf("%d is not prime\\n", n);\n    return 0;\n}',
    hint: 'Check divisibility up to n/2'
  },
  {
    id: 'c_func_015',
    topicId: 'c_functions',
    question: 'Write a program with a function to find GCD of 48 and 18.',
    mathSolution: 'GCD = 6',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    int result = gcd(48, 18);\n    printf("GCD = %d\\n", result);\n    return 0;\n}',
    hint: 'Euclidean algorithm: gcd(a,b) = gcd(b, a%b)'
  },
  {
    id: 'c_func_016',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 121 is palindrome.',
    mathSolution: '121 is palindrome',
    codeSolution: '#include <stdio.h>\n\nint isPalindrome(int n) {\n    int rev = 0, orig = n;\n    while(n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return rev == orig;\n}\n\nint main() {\n    int n = 121;\n    if(isPalindrome(n))\n        printf("%d is palindrome\\n", n);\n    else\n        printf("%d is not palindrome\\n", n);\n    return 0;\n}',
    hint: 'Reverse number and compare with original'
  },
  {
    id: 'c_func_017',
    topicId: 'c_functions',
    question: 'Write a program with a function to swap two numbers using pointers.',
    mathSolution: 'Swap a=10, b=20 to a=20, b=10',
    codeSolution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int a = 10, b = 20;\n    printf("Before: a=%d, b=%d\\n", a, b);\n    swap(&a, &b);\n    printf("After: a=%d, b=%d\\n", a, b);\n    return 0;\n}',
    hint: 'Use pointers to modify original values'
  },
  {
    id: 'c_func_018',
    topicId: 'c_functions',
    question: 'Write a program with a function to increment a number using pointer.',
    mathSolution: 'Increment 5 to 6',
    codeSolution: '#include <stdio.h>\n\nvoid increment(int *p) {\n    (*p)++;\n}\n\nint main() {\n    int x = 5;\n    printf("Before: %d\\n", x);\n    increment(&x);\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Dereference pointer to modify value'
  },
  {
    id: 'c_func_019',
    topicId: 'c_functions',
    question: 'Write a program with a function that counts how many times it was called.',
    mathSolution: 'First call returns 1, second returns 2',
    codeSolution: '#include <stdio.h>\n\nint countCalls(void) {\n    static int count = 0;\n    return ++count;\n}\n\nint main() {\n    printf("Call 1: %d\\n", countCalls());\n    printf("Call 2: %d\\n", countCalls());\n    printf("Call 3: %d\\n", countCalls());\n    return 0;\n}',
    hint: 'Static retains value between calls'
  },
  {
    id: 'c_func_020',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 2024 is leap year.',
    mathSolution: '2024 is leap year',
    codeSolution: '#include <stdio.h>\n\nint isLeap(int year) {\n    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n}\n\nint main() {\n    int year = 2024;\n    if(isLeap(year))\n        printf("%d is a leap year\\n", year);\n    else\n        printf("%d is not a leap year\\n", year);\n    return 0;\n}',
    hint: 'Leap year rules: divisible by 4, not by 100 unless by 400'
  },

  // ========== ARRAY AND STRING FUNCTIONS (21-30) ==========
  {
    id: 'c_func_021',
    topicId: 'c_functions',
    question: 'Write a program with a function to reverse an array.',
    mathSolution: 'Reverse [1,2,3,4,5] to [5,4,3,2,1]',
    codeSolution: '#include <stdio.h>\n\nvoid reverseArray(int arr[], int n) {\n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    reverseArray(arr, 5);\n    printf("Reversed array: ");\n    for(int i = 0; i < 5; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap elements from ends'
  },
  {
    id: 'c_func_022',
    topicId: 'c_functions',
    question: 'Write a program with a function to copy string "Hello".',
    mathSolution: 'Copy "Hello" to destination',
    codeSolution: '#include <stdio.h>\n\nvoid stringCopy(char dest[], char src[]) {\n    int i = 0;\n    while(src[i] != \'\\0\') {\n        dest[i] = src[i];\n        i++;\n    }\n    dest[i] = \'\\0\';\n}\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    stringCopy(dest, src);\n    printf("Copied string: %s\\n", dest);\n    return 0;\n}',
    hint: 'Copy until null terminator'
  },
  {
    id: 'c_func_023',
    topicId: 'c_functions',
    question: 'Write a program with a function to concatenate "Hello " and "World".',
    mathSolution: 'Result: "Hello World"',
    codeSolution: '#include <stdio.h>\n\nvoid stringConcat(char dest[], char src[]) {\n    int i = 0, j = 0;\n    while(dest[i] != \'\\0\') i++;\n    while(src[j] != \'\\0\') dest[i++] = src[j++];\n    dest[i] = \'\\0\';\n}\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    stringConcat(str1, str2);\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Find end of first string, then copy second'
  },
  {
    id: 'c_func_024',
    topicId: 'c_functions',
    question: 'Write a program with a function to reverse string "Hello".',
    mathSolution: 'Reverse: "olleH"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid reverseString(char str[]) {\n    int n = strlen(str);\n    for(int i = 0; i < n/2; i++) {\n        char temp = str[i];\n        str[i] = str[n-1-i];\n        str[n-1-i] = temp;\n    }\n}\n\nint main() {\n    char str[] = "Hello";\n    reverseString(str);\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap characters from ends'
  },
  {
    id: 'c_func_025',
    topicId: 'c_functions',
    question: 'Write a program with a function to count vowels in "Hello World".',
    mathSolution: 'Vowels = 3 (e,o,o)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint countVowels(char str[]) {\n    int count = 0;\n    for(int i = 0; str[i] != \'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(ch==\'a\'||ch==\'e\'||ch==\'i\'||ch==\'o\'||ch==\'u\')\n            count++;\n    }\n    return count;\n}\n\nint main() {\n    char str[] = "Hello World";\n    int vowels = countVowels(str);\n    printf("Vowels = %d\\n", vowels);\n    return 0;\n}',
    hint: 'Check each character if it is a vowel'
  },
  {
    id: 'c_func_026',
    topicId: 'c_functions',
    question: 'Write a program with a function to convert "hello" to uppercase.',
    mathSolution: 'HELLO',
    codeSolution: '#include <stdio.h>\n\nvoid toUpper(char str[]) {\n    for(int i = 0; str[i] != \'\\0\'; i++) {\n        if(str[i] >= \'a\' && str[i] <= \'z\')\n            str[i] = str[i] - 32;\n    }\n}\n\nint main() {\n    char str[] = "hello";\n    toUpper(str);\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Subtract 32 from lowercase ASCII to get uppercase'
  },
  {
    id: 'c_func_027',
    topicId: 'c_functions',
    question: 'Write a program with a function to find maximum element in array.',
    mathSolution: 'Max of [23,45,12,67,34] = 67',
    codeSolution: '#include <stdio.h>\n\nint findMax(int arr[], int n) {\n    int max = arr[0];\n    for(int i = 1; i < n; i++)\n        if(arr[i] > max) max = arr[i];\n    return max;\n}\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int max = findMax(arr, 5);\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Compare each element with current max'
  },
  {
    id: 'c_func_028',
    topicId: 'c_functions',
    question: 'Write a program with a function to find minimum element in array.',
    mathSolution: 'Min of [23,45,12,67,34] = 12',
    codeSolution: '#include <stdio.h>\n\nint findMin(int arr[], int n) {\n    int min = arr[0];\n    for(int i = 1; i < n; i++)\n        if(arr[i] < min) min = arr[i];\n    return min;\n}\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int min = findMin(arr, 5);\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Compare each element with current min'
  },
  {
    id: 'c_func_029',
    topicId: 'c_functions',
    question: 'Write a program with a function for binary search in sorted array.',
    mathSolution: 'Search 23 in [10,23,45,70,90] found at index 1',
    codeSolution: '#include <stdio.h>\n\nint binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n-1;\n    while(low <= high) {\n        int mid = (low + high) / 2;\n        if(arr[mid] == key) return mid;\n        if(arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {10,23,45,70,90};\n    int index = binarySearch(arr, 5, 23);\n    if(index != -1)\n        printf("Found at index %d\\n", index);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'Divide and conquer approach'
  },
  {
    id: 'c_func_030',
    topicId: 'c_functions',
    question: 'Write a program with a function for bubble sort.',
    mathSolution: 'Sort [64,34,25,12,22,11,90]',
    codeSolution: '#include <stdio.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for(int i = 0; i < n-1; i++)\n        for(int j = 0; j < n-1-i; j++)\n            if(arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n}\n\nint main() {\n    int arr[] = {64,34,25,12,22,11,90};\n    bubbleSort(arr, 7);\n    printf("Sorted array: ");\n    for(int i = 0; i < 7; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent and swap if out of order'
  },

  // ========== BIT AND MATH FUNCTIONS (31-40) ==========
  {
    id: 'c_func_031',
    topicId: 'c_functions',
    question: 'Write a program with a function to count set bits in 13 (binary 1101).',
    mathSolution: '13 has 3 set bits',
    codeSolution: '#include <stdio.h>\n\nint countSetBits(int n) {\n    int count = 0;\n    while(n) {\n        count += n & 1;\n        n >>= 1;\n    }\n    return count;\n}\n\nint main() {\n    int result = countSetBits(13);\n    printf("Set bits = %d\\n", result);\n    return 0;\n}',
    hint: 'Check LSB and shift right'
  },
  {
    id: 'c_func_032',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if 16 is power of 2.',
    mathSolution: '16 is power of 2',
    codeSolution: '#include <stdio.h>\n\nint isPowerOfTwo(int n) {\n    return n && !(n & (n-1));\n}\n\nint main() {\n    int n = 16;\n    if(isPowerOfTwo(n))\n        printf("%d is power of 2\\n", n);\n    else\n        printf("%d is not power of 2\\n", n);\n    return 0;\n}',
    hint: 'Power of 2 has exactly one set bit'
  },
  {
    id: 'c_func_033',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate LCM of 12 and 18.',
    mathSolution: 'LCM = 36',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint lcm(int a, int b) {\n    return (a * b) / gcd(a, b);\n}\n\nint main() {\n    int result = lcm(12, 18);\n    printf("LCM = %d\\n", result);\n    return 0;\n}',
    hint: 'LCM(a,b) = (a*b)/GCD(a,b)'
  },
  {
    id: 'c_func_034',
    topicId: 'c_functions',
    question: 'Write a program with a function to count digits in 12345.',
    mathSolution: 'Digits = 5',
    codeSolution: '#include <stdio.h>\n\nint countDigits(int n) {\n    int count = 0;\n    while(n != 0) {\n        count++;\n        n /= 10;\n    }\n    return count;\n}\n\nint main() {\n    int result = countDigits(12345);\n    printf("Digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Divide by 10 until zero'
  },
  {
    id: 'c_func_035',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate cube of a number.',
    mathSolution: 'Cube of 5 = 125',
    codeSolution: '#include <stdio.h>\n\nint cube(int x) {\n    return x * x * x;\n}\n\nint main() {\n    int result = cube(5);\n    printf("5³ = %d\\n", result);\n    return 0;\n}',
    hint: 'Multiply number by itself three times'
  },
  {
    id: 'c_func_036',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate simple interest.',
    mathSolution: 'P=1000, R=5, T=2 years = 100 interest',
    codeSolution: '#include <stdio.h>\n\nfloat simpleInterest(float p, float r, float t) {\n    return (p * r * t) / 100;\n}\n\nint main() {\n    float si = simpleInterest(1000, 5, 2);\n    printf("Simple Interest = %.2f\\n", si);\n    return 0;\n}',
    hint: 'Formula: SI = (P × R × T)/100'
  },
  {
    id: 'c_func_037',
    topicId: 'c_functions',
    question: 'Write a program with a function to find sum of first 10 natural numbers.',
    mathSolution: 'Sum = 55',
    codeSolution: '#include <stdio.h>\n\nint sumNatural(int n) {\n    return n * (n + 1) / 2;\n}\n\nint main() {\n    int sum = sumNatural(10);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Formula: n(n+1)/2'
  },
  {
    id: 'c_func_038',
    topicId: 'c_functions',
    question: 'Write a program with a function to check if number is even.',
    mathSolution: '10 is even',
    codeSolution: '#include <stdio.h>\n\nint isEven(int n) {\n    return n % 2 == 0;\n}\n\nint main() {\n    int n = 10;\n    if(isEven(n))\n        printf("%d is even\\n", n);\n    else\n        printf("%d is odd\\n", n);\n    return 0;\n}',
    hint: 'Use modulo operator'
  },
  {
    id: 'c_func_039',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate perimeter of rectangle.',
    mathSolution: 'Length=10, Width=5, Perimeter=30',
    codeSolution: '#include <stdio.h>\n\nint perimeter(int l, int w) {\n    return 2 * (l + w);\n}\n\nint main() {\n    int peri = perimeter(10, 5);\n    printf("Perimeter = %d\\n", peri);\n    return 0;\n}',
    hint: 'Perimeter = 2 × (length + width)'
  },
  {
    id: 'c_func_040',
    topicId: 'c_functions',
    question: 'Write a program with a function to calculate volume of cube.',
    mathSolution: 'Side=4, Volume=64',
    codeSolution: '#include <stdio.h>\n\nint volumeCube(int side) {\n    return side * side * side;\n}\n\nint main() {\n    int vol = volumeCube(4);\n    printf("Volume = %d\\n", vol);\n    return 0;\n}',
    hint: 'Volume = side³'
  },

  // ========== ADVANCED RECURSIVE FUNCTIONS (41-50) ==========
  {
    id: 'c_func_041',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find sum of array.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint arraySumRecur(int arr[], int n) {\n    if(n <= 0) return 0;\n    return arr[n-1] + arraySumRecur(arr, n-1);\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int sum = arraySumRecur(arr, 5);\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Add last element to sum of rest'
  },
  {
    id: 'c_func_042',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find nth term of Fibonacci.',
    mathSolution: '7th Fibonacci = 13 (0,1,1,2,3,5,8,13)',
    codeSolution: '#include <stdio.h>\n\nint fibRecur(int n) {\n    if(n <= 1) return n;\n    return fibRecur(n-1) + fibRecur(n-2);\n}\n\nint main() {\n    int result = fibRecur(7);\n    printf("Fibonacci(7) = %d\\n", result);\n    return 0;\n}',
    hint: 'Recursive with base cases'
  },
  {
    id: 'c_func_043',
    topicId: 'c_functions',
    question: 'Write a program with recursive function to find product of digits of 234.',
    mathSolution: '2×3×4 = 24',
    codeSolution: '#include <stdio.h>\n\nint productDigits(int n) {\n    if(n == 0) return 1;\n    return (n % 10) * productDigits(n / 10);\n}\n\nint main() {\n    int result = productDigits(234);\n    printf("Product of digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Multiply last digit with product of rest'
  },
  {
    id: 'c_func_044',
    topicId: 'c_functions',
    question: 'Write a program with function to return multiple values using pointers.',
    mathSolution: 'Find quotient and remainder of 17/5',
    codeSolution: '#include <stdio.h>\n\nvoid divide(int a, int b, int *q, int *r) {\n    *q = a / b;\n    *r = a % b;\n}\n\nint main() {\n    int q, r;\n    divide(17, 5, &q, &r);\n    printf("Quotient = %d, Remainder = %d\\n", q, r);\n    return 0;\n}',
    hint: 'Use pointers for multiple outputs'
  },
  {
    id: 'c_func_045',
    topicId: 'c_functions',
    question: 'Write a program with function to find second largest in array.',
    mathSolution: 'Second largest in [10,45,2,78,34] = 45',
    codeSolution: '#include <stdio.h>\n\nint secondLargest(int arr[], int n) {\n    int first = arr[0], second = arr[0];\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > first) {\n            second = first;\n            first = arr[i];\n        }\n        else if(arr[i] > second && arr[i] != first)\n            second = arr[i];\n    }\n    return second;\n}\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int result = secondLargest(arr, 5);\n    printf("Second largest = %d\\n", result);\n    return 0;\n}',
    hint: 'Keep track of both largest and second largest'
  },
  {
    id: 'c_func_046',
    topicId: 'c_functions',
    question: 'Write a program with function to remove duplicates from sorted array.',
    mathSolution: '[1,1,2,2,3,4,4] -> [1,2,3,4]',
    codeSolution: '#include <stdio.h>\n\nint removeDuplicates(int arr[], int n) {\n    if(n == 0) return 0;\n    int j = 0;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] != arr[j]) {\n            j++;\n            arr[j] = arr[i];\n        }\n    }\n    return j + 1;\n}\n\nint main() {\n    int arr[] = {1,1,2,2,3,4,4};\n    int newSize = removeDuplicates(arr, 7);\n    printf("Array after removing duplicates: ");\n    for(int i = 0; i < newSize; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Use two pointers technique'
  },
  {
    id: 'c_func_047',
    topicId: 'c_functions',
    question: 'Write a program with function to check if string "madam" is palindrome.',
    mathSolution: '"madam" is palindrome',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint isStrPalindrome(char str[]) {\n    int n = strlen(str);\n    for(int i = 0; i < n/2; i++)\n        if(str[i] != str[n-1-i])\n            return 0;\n    return 1;\n}\n\nint main() {\n    char str[] = "madam";\n    if(isStrPalindrome(str))\n        printf("%s is palindrome\\n", str);\n    else\n        printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare characters from start and end'
  },
  {
    id: 'c_func_048',
    topicId: 'c_functions',
    question: 'Write a program with function to convert binary "1010" to decimal.',
    mathSolution: '1010 binary = 10 decimal',
    codeSolution: '#include <stdio.h>\n\nint binToDec(char bin[]) {\n    int val = 0;\n    for(int i = 0; bin[i] != \'\\0\'; i++)\n        val = val * 2 + (bin[i] - \'0\');\n    return val;\n}\n\nint main() {\n    char bin[] = "1010";\n    int dec = binToDec(bin);\n    printf("Binary %s = Decimal %d\\n", bin, dec);\n    return 0;\n}',
    hint: 'Process each digit: val = val×2 + digit'
  },
  {
    id: 'c_func_049',
    topicId: 'c_functions',
    question: 'Write a program with function to find median of sorted array.',
    mathSolution: 'Median of [1,2,3,4,5] = 3',
    codeSolution: '#include <stdio.h>\n\nfloat median(int arr[], int n) {\n    if(n % 2 == 1)\n        return arr[n/2];\n    else\n        return (arr[n/2 - 1] + arr[n/2]) / 2.0;\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    float med = median(arr, 5);\n    printf("Median = %.1f\\n", med);\n    return 0;\n}',
    hint: 'Middle element for odd, average of two middles for even'
  },
  {
    id: 'c_func_050',
    topicId: 'c_functions',
    question: 'Write a program with function to find all factors of 12.',
    mathSolution: 'Factors of 12: 1,2,3,4,6,12',
    codeSolution: '#include <stdio.h>\n\nvoid printFactors(int n) {\n    for(int i = 1; i <= n; i++)\n        if(n % i == 0)\n            printf("%d ", i);\n    printf("\\n");\n}\n\nint main() {\n    printf("Factors of 12: ");\n    printFactors(12);\n    return 0;\n}',
    hint: 'Check numbers that divide n completely'
  },
  //string
  
   {
    id: 'c_str_01',
    topicId: 'c_strings',
    question: 'Write a program to declare and print a string "Hello".',
    mathSolution: 'Array needs 6 characters (5 letters + null terminator)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: 'Don\'t forget space for null character \\0'
  },
  {
    id: 'c_str_02',
    topicId: 'c_strings',
    question: 'Write a program to print string "World" using pointer.',
    mathSolution: 'Pointer points to string literal',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "World";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: 'String literals are arrays of characters'
  },
  {
    id: 'c_str_03',
    topicId: 'c_strings',
    question: 'Write a program to find length of "Hello" using strlen.',
    mathSolution: 'Length is 5 (excludes null terminator)',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    int len = strlen("Hello");\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'strlen returns number of characters before \\0'
  },
  {
    id: 'c_str_04',
    topicId: 'c_strings',
    question: 'Write a program to manually calculate length of "Hello".',
    mathSolution: 'Iterate until null terminator found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = 0;\n    while(str[len] != \'\\0\') {\n        len++;\n    }\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Stop when character is \\0'
  },
  {
    id: 'c_str_05',
    topicId: 'c_strings',
    question: 'Write a program to copy string "Hello" to another using strcpy.',
    mathSolution: 'Copies including null terminator',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    strcpy(dest, src);\n    printf("Copied: %s\\n", dest);\n    return 0;\n}',
    hint: 'Ensure destination has enough space'
  },
  {
    id: 'c_str_06',
    topicId: 'c_strings',
    question: 'Write a program to manually copy string "Hello".',
    mathSolution: 'Copy character by character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    int i = 0;\n    while((dest[i] = src[i]) != \'\\0\') {\n        i++;\n    }\n    printf("Copied: %s\\n", dest);\n    return 0;\n}',
    hint: 'Copy character by character until null'
  },
  {
    id: 'c_str_07',
    topicId: 'c_strings',
    question: 'Write a program to concatenate "Hello " and "World" using strcat.',
    mathSolution: 'Appends second string to first',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    strcat(str1, str2);\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Destination must have enough space'
  },
  {
    id: 'c_str_08',
    topicId: 'c_strings',
    question: 'Write a program to manually concatenate "Hello " and "World".',
    mathSolution: 'Find end of first, then copy second',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    int i = 0, j = 0;\n    while(str1[i] != \'\\0\') i++;\n    while((str1[i++] = str2[j++]) != \'\\0\');\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'First find null of dest, then copy src'
  },
  {
    id: 'c_str_09',
    topicId: 'c_strings',
    question: 'Write a program to compare "Hello" and "Hello" using strcmp.',
    mathSolution: 'Returns 0 if equal',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[] = "Hello";\n    char str2[] = "Hello";\n    if(strcmp(str1, str2) == 0)\n        printf("Strings are equal\\n");\n    else\n        printf("Strings are not equal\\n");\n    return 0;\n}',
    hint: 'strcmp returns 0 for equality'
  },
  {
    id: 'c_str_10',
    topicId: 'c_strings',
    question: 'Write a program to manually compare "Hello" and "Hello".',
    mathSolution: 'Compare character by character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[] = "Hello";\n    char str2[] = "Hello";\n    int i = 0, equal = 1;\n    while(str1[i] != \'\\0\' || str2[i] != \'\\0\') {\n        if(str1[i] != str2[i]) {\n            equal = 0;\n            break;\n        }\n        i++;\n    }\n    if(equal) printf("Strings are equal\\n");\n    else printf("Strings are not equal\\n");\n    return 0;\n}',
    hint: 'Compare char by char until mismatch'
  },

  // ========== STRING SEARCHING AND CONVERSION (11-20) ==========
  {
    id: 'c_str_11',
    topicId: 'c_strings',
    question: 'Write a program to find first occurrence of \'l\' in "Hello".',
    mathSolution: 'Search linearly for character',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    char *pos = strchr(str, \'l\');\n    if(pos != NULL)\n        printf("First \'l\' at index %ld\\n", pos - str);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'strchr returns pointer to first match'
  },
  {
    id: 'c_str_12',
    topicId: 'c_strings',
    question: 'Write a program to find last occurrence of \'l\' in "Hello".',
    mathSolution: 'Search from end backwards',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    char *pos = strrchr(str, \'l\');\n    if(pos != NULL)\n        printf("Last \'l\' at index %ld\\n", pos - str);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'strrchr finds last occurrence'
  },
  {
    id: 'c_str_13',
    topicId: 'c_strings',
    question: 'Write a program to find substring "World" in "Hello World".',
    mathSolution: 'Search for substring pattern',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World";\n    char *pos = strstr(str, "World");\n    if(pos != NULL)\n        printf("Found at index %ld\\n", pos - str);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'strstr returns pointer to start of match'
  },
  {
    id: 'c_str_14',
    topicId: 'c_strings',
    question: 'Write a program to convert "hello" to uppercase.',
    mathSolution: 'Loop through and convert each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello";\n    for(int i = 0; str[i]; i++) {\n        str[i] = toupper(str[i]);\n    }\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Use toupper() function from ctype.h'
  },
  {
    id: 'c_str_15',
    topicId: 'c_strings',
    question: 'Write a program to convert "HELLO" to lowercase.',
    mathSolution: 'Loop through and convert each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "HELLO";\n    for(int i = 0; str[i]; i++) {\n        str[i] = tolower(str[i]);\n    }\n    printf("Lowercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Use tolower() function from ctype.h'
  },
  {
    id: 'c_str_16',
    topicId: 'c_strings',
    question: 'Write a program to reverse string "Hello".',
    mathSolution: 'Swap first with last, move inward',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = strlen(str);\n    for(int i = 0, j = len-1; i < j; i++, j--) {\n        char temp = str[i];\n        str[i] = str[j];\n        str[j] = temp;\n    }\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap characters from ends'
  },
  {
    id: 'c_str_17',
    topicId: 'c_strings',
    question: 'Write a program to count vowels in "Hello World".',
    mathSolution: 'Count vowels using vowel check',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    int count = 0;\n    for(int i = 0; str[i]; i++) {\n        char ch = tolower(str[i]);\n        if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\')\n            count++;\n    }\n    printf("Vowels = %d\\n", count);\n    return 0;\n}',
    hint: 'Check each character for vowels'
  },
  {
    id: 'c_str_18',
    topicId: 'c_strings',
    question: 'Write a program to count consonants in "Hello World".',
    mathSolution: 'Count alphabets that are not vowels',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    int count = 0;\n    for(int i = 0; str[i]; i++) {\n        char ch = tolower(str[i]);\n        if(isalpha(ch)) {\n            if(!(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\'))\n                count++;\n        }\n    }\n    printf("Consonants = %d\\n", count);\n    return 0;\n}',
    hint: 'Alphabets that are not vowels'
  },
  {
    id: 'c_str_19',
    topicId: 'c_strings',
    question: 'Write a program to check if "madam" is palindrome.',
    mathSolution: 'Compare first with last, etc',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "madam";\n    int len = strlen(str);\n    int is_palindrome = 1;\n    for(int i = 0, j = len-1; i < j; i++, j--) {\n        if(str[i] != str[j]) {\n            is_palindrome = 0;\n            break;\n        }\n    }\n    if(is_palindrome) printf("%s is palindrome\\n", str);\n    else printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare characters from both ends'
  },
  {
    id: 'c_str_20',
    topicId: 'c_strings',
    question: 'Write a program to split "Hello World from C" into words using strtok.',
    mathSolution: 'Tokenize based on spaces',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World from C";\n    char *token = strtok(str, " ");\n    while(token != NULL) {\n        printf("%s\\n", token);\n        token = strtok(NULL, " ");\n    }\n    return 0;\n}',
    hint: 'First call with string, subsequent with NULL'
  },

  // ========== STRING VALIDATION (21-30) ==========
  {
    id: 'c_str_21',
    topicId: 'c_strings',
    question: 'Write a program to check if string "Hello123" contains only alphabets.',
    mathSolution: 'Use isalpha for each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello123";\n    int only_alpha = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!isalpha(str[i])) {\n            only_alpha = 0;\n            break;\n        }\n    }\n    if(only_alpha) printf("Only alphabets\\n");\n    else printf("Contains non-alphabets\\n");\n    return 0;\n}',
    hint: 'isalpha returns non-zero for letters'
  },
  {
    id: 'c_str_22',
    topicId: 'c_strings',
    question: 'Write a program to check if string "12345" contains only digits.',
    mathSolution: 'Use isdigit for each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "12345";\n    int only_digits = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!isdigit(str[i])) {\n            only_digits = 0;\n            break;\n        }\n    }\n    if(only_digits) printf("Only digits\\n");\n    else printf("Contains non-digits\\n");\n    return 0;\n}',
    hint: 'isdigit returns non-zero for 0-9'
  },
  {
    id: 'c_str_23',
    topicId: 'c_strings',
    question: 'Write a program to check if string "HELLO" contains only uppercase letters.',
    mathSolution: 'Check using isupper for each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "HELLO";\n    int all_upper = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!isupper(str[i])) {\n            all_upper = 0;\n            break;\n        }\n    }\n    if(all_upper) printf("All uppercase\\n");\n    else printf("Not all uppercase\\n");\n    return 0;\n}',
    hint: 'isupper returns non-zero for uppercase'
  },
  {
    id: 'c_str_24',
    topicId: 'c_strings',
    question: 'Write a program to check if string "hello" contains only lowercase letters.',
    mathSolution: 'Check using islower for each char',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello";\n    int all_lower = 1;\n    for(int i = 0; str[i]; i++) {\n        if(!islower(str[i])) {\n            all_lower = 0;\n            break;\n        }\n    }\n    if(all_lower) printf("All lowercase\\n");\n    else printf("Not all lowercase\\n");\n    return 0;\n}',
    hint: 'islower returns non-zero for lowercase'
  },
  {
    id: 'c_str_25',
    topicId: 'c_strings',
    question: 'Write a program to replace all spaces with underscores in "Hello World".',
    mathSolution: 'Replace character if space found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    for(int i = 0; str[i]; i++) {\n        if(str[i] == \' \') {\n            str[i] = \'_\';\n        }\n    }\n    printf("Modified: %s\\n", str);\n    return 0;\n}',
    hint: 'Replace space with underscore'
  },
  {
    id: 'c_str_26',
    topicId: 'c_strings',
    question: 'Write a program to remove all spaces from "Hello World".',
    mathSolution: 'Shift characters left when space found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int j = 0;\n    for(int i = 0; str[i]; i++) {\n        if(str[i] != \' \') {\n            str[j++] = str[i];\n        }\n    }\n    str[j] = \'\\0\';\n    printf("Without spaces: %s\\n", str);\n    return 0;\n}',
    hint: 'Use two indices - read and write'
  },
  {
    id: 'c_str_27',
    topicId: 'c_strings',
    question: 'Write a program to count words in "Hello World from C".',
    mathSolution: 'Count transitions from space to non-space',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World from C";\n    int count = 0, in_word = 0;\n    for(int i = 0; str[i]; i++) {\n        if(!isspace(str[i])) {\n            if(!in_word) {\n                count++;\n                in_word = 1;\n            }\n        } else {\n            in_word = 0;\n        }\n    }\n    printf("Word count = %d\\n", count);\n    return 0;\n}',
    hint: 'Count when entering a word'
  },
  {
    id: 'c_str_28',
    topicId: 'c_strings',
    question: 'Write a program to convert string "123" to integer using atoi.',
    mathSolution: 'Convert numeric string to integer',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char str[] = "123";\n    int num = atoi(str);\n    printf("Integer: %d\\n", num);\n    return 0;\n}',
    hint: 'atoi returns 0 if conversion fails'
  },
  {
    id: 'c_str_29',
    topicId: 'c_strings',
    question: 'Write a program to convert integer 456 to string using sprintf.',
    mathSolution: 'Format integer into string',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 456;\n    char str[20];\n    sprintf(str, "%d", num);\n    printf("String: %s\\n", str);\n    return 0;\n}',
    hint: 'Ensure buffer is large enough'
  },
  {
    id: 'c_str_30',
    topicId: 'c_strings',
    question: 'Write a program to convert float 3.14159 to string with 2 decimal places.',
    mathSolution: 'Use sprintf with format specifier',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float pi = 3.14159;\n    char str[20];\n    sprintf(str, "%.2f", pi);\n    printf("String: %s\\n", str);\n    return 0;\n}',
    hint: '%.2f shows 2 decimal places'
  },

  // ========== STRING ADVANCED OPERATIONS (31-40) ==========
  {
    id: 'c_str_31',
    topicId: 'c_strings',
    question: 'Write a program to check if string "Hello" starts with "He".',
    mathSolution: 'Compare first n characters',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    if(strncmp(str, "He", 2) == 0)\n        printf("Starts with \\"He\\"\\n");\n    else\n        printf("Does not start with \\"He\\"\\n");\n    return 0;\n}',
    hint: 'strncmp compares first n characters'
  },
  {
    id: 'c_str_32',
    topicId: 'c_strings',
    question: 'Write a program to check if string "Hello World" ends with "World".',
    mathSolution: 'Compare from end backwards',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello World";\n    int len = strlen(str);\n    if(len >= 5 && strcmp(str + len - 5, "World") == 0)\n        printf("Ends with \\"World\\"\\n");\n    else\n        printf("Does not end with \\"World\\"\\n");\n    return 0;\n}',
    hint: 'Move pointer to possible start of suffix'
  },
  {
    id: 'c_str_33',
    topicId: 'c_strings',
    question: 'Write a program to create array of strings and print them.',
    mathSolution: 'Array of pointers to strings',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *colors[] = {"Red", "Green", "Blue"};\n    for(int i = 0; i < 3; i++) {\n        printf("%s\\n", colors[i]);\n    }\n    return 0;\n}',
    hint: 'Strings may be in read-only memory'
  },
  {
    id: 'c_str_34',
    topicId: 'c_strings',
    question: 'Write a program to find longest string in array {"Apple","Banana","Cherry"}.',
    mathSolution: 'Iterate and track maximum length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *fruits[] = {"Apple", "Banana", "Cherry"};\n    int max_len = strlen(fruits[0]);\n    int max_index = 0;\n    for(int i = 1; i < 3; i++) {\n        int len = strlen(fruits[i]);\n        if(len > max_len) {\n            max_len = len;\n            max_index = i;\n        }\n    }\n    printf("Longest: %s (length %d)\\n", fruits[max_index], max_len);\n    return 0;\n}',
    hint: 'Track both maximum length and index'
  },
 {
    id: 'c_str_35',
    topicId: 'c_strings',
    question: 'Write a program to find most frequent character in "Hello World".',
    mathSolution: 'Count all characters, find max',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int freq[256] = {0};\n    int i, max = 0;\n    char result;\n    \n    for(i = 0; str[i]; i++) {\n        freq[str[i]]++;\n    }\n    \n    for(i = 0; i < 256; i++) {\n        if(freq[i] > max) {\n            max = freq[i];\n            result = i;\n        }\n    }\n    \n    printf("Character \'%c\' appears %d times (most frequent)\\n", result, max);\n    return 0;\n}',
    hint: 'Use character as array index'
},
  {
    id: 'c_str_36',
    topicId: 'c_strings',
    question: 'Write a program to check if "listen" and "silent" are anagrams.',
    mathSolution: 'Count characters and compare',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[] = "listen";\n    char str2[] = "silent";\n    int count[256] = {0};\n    int anagram = 1;\n    for(int i = 0; str1[i]; i++) count[(unsigned char)str1[i]]++;\n    for(int i = 0; str2[i]; i++) count[(unsigned char)str2[i]]--;\n    for(int i = 0; i < 256; i++) {\n        if(count[i] != 0) {\n            anagram = 0;\n            break;\n        }\n    }\n    if(anagram) printf("Anagrams\\n");\n    else printf("Not anagrams\\n");\n    return 0;\n}',
    hint: 'Count characters, then subtract'
  },
  {
    id: 'c_str_37',
    topicId: 'c_strings',
    question: 'Write a program to toggle case of "Hello World".',
    mathSolution: 'Uppercase to lowercase and vice versa',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    for(int i = 0; str[i]; i++) {\n        if(isupper(str[i]))\n            str[i] = tolower(str[i]);\n        else if(islower(str[i]))\n            str[i] = toupper(str[i]);\n    }\n    printf("Toggled: %s\\n", str);\n    return 0;\n}',
    hint: 'Check case before converting'
  },
  {
    id: 'c_str_38',
    topicId: 'c_strings',
    question: 'Write a program to compress consecutive spaces in "Hello   World" to single space.',
    mathSolution: 'Skip multiple spaces while copying',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello   World";\n    char result[100];\n    int j = 0;\n    for(int i = 0; str[i]; i++) {\n        if(!isspace(str[i]) || (j > 0 && !isspace(result[j-1]))) {\n            result[j++] = str[i];\n        }\n    }\n    result[j] = \'\\0\';\n    printf("Compressed: %s\\n", result);\n    return 0;\n}',
    hint: 'Keep track of last character written'
  },
  {
    id: 'c_str_39',
    topicId: 'c_strings',
    question: 'Write a program to extract first word from "Hello World".',
    mathSolution: 'Copy until space encountered',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    char word[50];\n    int i = 0;\n    while(str[i] != \' \' && str[i] != \'\\0\') {\n        word[i] = str[i];\n        i++;\n    }\n    word[i] = \'\\0\';\n    printf("First word: %s\\n", word);\n    return 0;\n}',
    hint: 'Copy until space or end of string'
  },
  {
    id: 'c_str_40',
    topicId: 'c_strings',
    question: 'Write a program to remove trailing newline from string "Hello\\n".',
    mathSolution: 'Find newline and replace with null',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello\\n";\n    str[strcspn(str, "\\n")] = \'\\0\';\n    printf("After removing newline: %s\\n", str);\n    return 0;\n}',
    hint: 'strcspn finds first occurrence of character'
  },
//pointer
{
    id: 'c_ptr_1',
    topicId: 'c_pointers',
    question: 'Write a program to declare an integer pointer and store address of a variable.',
    mathSolution: 'Pointer stores address of variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    printf("Value of x: %d\\n", x);\n    printf("Address of x: %p\\n", (void*)ptr);\n    return 0;\n}',
    hint: 'Use & to get address, * to declare pointer'
  },
  {
    id: 'c_ptr_2',
    topicId: 'c_pointers',
    question: 'Write a program to print value using pointer dereferencing.',
    mathSolution: 'Dereference pointer to get value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 25;\n    int *ptr = &x;\n    printf("Value using pointer: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Use * operator to dereference'
  },
  {
    id: 'c_ptr_3',
    topicId: 'c_pointers',
    question: 'Write a program to change value of variable using pointer.',
    mathSolution: 'Modify value through pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    printf("Before: %d\\n", x);\n    *ptr = 20;\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Assign to dereferenced pointer'
  },
  {
    id: 'c_ptr_4',
    topicId: 'c_pointers',
    question: 'Write a program to print address stored in pointer.',
    mathSolution: 'Display pointer value (address)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *ptr = &x;\n    printf("Pointer address: %p\\n", (void*)ptr);\n    return 0;\n}',
    hint: 'Use %p format specifier'
  },
  {
    id: 'c_ptr_5',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate pointer arithmetic (increment).',
    mathSolution: 'ptr++ moves to next integer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    printf("First element: %d\\n", *ptr);\n    ptr++;\n    printf("Second element: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Pointer arithmetic depends on type size'
  },
  {
    id: 'c_ptr_6',
    topicId: 'c_pointers',
    question: 'Write a program to access array elements using pointer.',
    mathSolution: '*(arr+i) equals arr[i]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5, 10, 15, 20, 25};\n    int *ptr = arr;\n    for(int i = 0; i < 5; i++) {\n        printf("arr[%d] = %d\\n", i, *(ptr + i));\n    }\n    return 0;\n}',
    hint: 'Add offset to base address'
  },
  {
    id: 'c_ptr_7',
    topicId: 'c_pointers',
    question: 'Write a program to traverse array using pointer.',
    mathSolution: 'Increment pointer until end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr;\n    printf("Array elements: ");\n    for(ptr = arr; ptr < arr + 5; ptr++) {\n        printf("%d ", *ptr);\n    }\n    return 0;\n}',
    hint: 'Use pointer as loop variable'
  },
  {
    id: 'c_ptr_8',
    topicId: 'c_pointers',
    question: 'Write a program to find sum of array using pointer.',
    mathSolution: 'Add all elements via pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    int *ptr;\n    for(ptr = arr; ptr < arr + 5; ptr++) {\n        sum += *ptr;\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Accumulate values through pointer'
  },
  {
    id: 'c_ptr_9',
    topicId: 'c_pointers',
    question: 'Write a program to find largest element using pointer.',
    mathSolution: 'Compare elements using pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int max = *arr;\n    int *ptr;\n    for(ptr = arr + 1; ptr < arr + 5; ptr++) {\n        if(*ptr > max) max = *ptr;\n    }\n    printf("Largest = %d\\n", max);\n    return 0;\n}',
    hint: 'Assume first as max, then compare'
  },
  {
    id: 'c_ptr_10',
    topicId: 'c_pointers',
    question: 'Write a program to copy array using pointers.',
    mathSolution: 'Copy elements using pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int src[] = {1, 2, 3, 4, 5};\n    int dest[5];\n    int *s = src, *d = dest;\n    for(int i = 0; i < 5; i++) {\n        *d++ = *s++;\n    }\n    printf("Copied array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", dest[i]);\n    }\n    return 0;\n}',
    hint: 'Use two pointers - source and destination'
  },

  // ========== POINTERS AND STRINGS (11-20) ==========
  {
    id: 'c_ptr_11',
    topicId: 'c_pointers',
    question: 'Write a program to declare pointer to string and print it.',
    mathSolution: 'Pointer to string literal',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Hello World";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: 'String literal is array of chars'
  },
  {
    id: 'c_ptr_12',
    topicId: 'c_pointers',
    question: 'Write a program to print string character by character using pointer.',
    mathSolution: 'Traverse char by char until null',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Hello";\n    char *ptr = str;\n    while(*ptr != \'\\0\') {\n        printf("%c ", *ptr);\n        ptr++;\n    }\n    return 0;\n}',
    hint: 'Stop at null terminator'
  },
  {
    id: 'c_ptr_13',
    topicId: 'c_pointers',
    question: 'Write a program to find string length using pointer.',
    mathSolution: 'Count chars until null',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Hello";\n    char *ptr = str;\n    int len = 0;\n    while(*ptr != \'\\0\') {\n        len++;\n        ptr++;\n    }\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Increment pointer and count'
  },
  {
    id: 'c_ptr_14',
    topicId: 'c_pointers',
    question: 'Write a program to copy string using pointers.',
    mathSolution: 'Copy char by char until null',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    char *s = src;\n    char *d = dest;\n    while(*s != \'\\0\') {\n        *d = *s;\n        s++;\n        d++;\n    }\n    *d = \'\\0\';\n    printf("Copied: %s\\n", dest);\n    return 0;\n}',
    hint: 'Dereference and assign, then increment'
  },
  {
    id: 'c_ptr_15',
    topicId: 'c_pointers',
    question: 'Write a program to reverse string using pointers.',
    mathSolution: 'Swap characters from ends',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = strlen(str);\n    char *start = str;\n    char *end = str + len - 1;\n    while(start < end) {\n        char temp = *start;\n        *start = *end;\n        *end = temp;\n        start++;\n        end--;\n    }\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Two pointers moving inward'
  },
  {
    id: 'c_ptr_16',
    topicId: 'c_pointers',
    question: 'Write a program to convert string to uppercase using pointers.',
    mathSolution: 'Use pointer to modify string',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "hello";\n    char *ptr = str;\n    while(*ptr) {\n        *ptr = toupper(*ptr);\n        ptr++;\n    }\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Dereference pointer to modify characters'
  },
  {
    id: 'c_ptr_17',
    topicId: 'c_pointers',
    question: 'Write a program to count vowels in string using pointers.',
    mathSolution: 'Check each character for vowels',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    char *ptr = str;\n    int count = 0;\n    while(*ptr) {\n        char ch = tolower(*ptr);\n        if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\')\n            count++;\n        ptr++;\n    }\n    printf("Vowels = %d\\n", count);\n    return 0;\n}',
    hint: 'Use pointer to traverse string'
  },
  {
    id: 'c_ptr_18',
    topicId: 'c_pointers',
    question: 'Write a program to check if string is palindrome using pointers.',
    mathSolution: 'Compare from both ends',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "madam";\n    int len = strlen(str);\n    char *start = str;\n    char *end = str + len - 1;\n    int is_palindrome = 1;\n    while(start < end) {\n        if(*start != *end) {\n            is_palindrome = 0;\n            break;\n        }\n        start++;\n        end--;\n    }\n    if(is_palindrome) printf("%s is palindrome\\n", str);\n    else printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare characters from both ends'
  },
  {
    id: 'c_ptr_19',
    topicId: 'c_pointers',
    question: 'Write a program to concatenate strings using pointers.',
    mathSolution: 'Find end of first, then copy second',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    char *ptr = str1;\n    char *src = str2;\n    while(*ptr) ptr++;\n    while((*ptr++ = *src++));\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Move pointer to end of first string'
  },
  {
    id: 'c_ptr_20',
    topicId: 'c_pointers',
    question: 'Write a program to compare strings using pointers.',
    mathSolution: 'Compare character by character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[] = "Hello";\n    char str2[] = "Hello";\n    char *s1 = str1;\n    char *s2 = str2;\n    int equal = 1;\n    while(*s1 || *s2) {\n        if(*s1 != *s2) {\n            equal = 0;\n            break;\n        }\n        s1++;\n        s2++;\n    }\n    if(equal) printf("Strings are equal\\n");\n    else printf("Strings are not equal\\n");\n    return 0;\n}',
    hint: 'Compare character by character using pointers'
  },

  // ========== POINTER TO POINTER (21-30) ==========
  {
    id: 'c_ptr_21',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate double pointer (pointer to pointer).',
    mathSolution: 'Double pointer stores address of another pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    int **pptr = &ptr;\n    printf("Value of x: %d\\n", x);\n    printf("Using ptr: %d\\n", *ptr);\n    printf("Using pptr: %d\\n", **pptr);\n    return 0;\n}',
    hint: 'Use two asterisks for double pointer'
  },
  {
    id: 'c_ptr_22',
    topicId: 'c_pointers',
    question: 'Write a program to modify value using double pointer.',
    mathSolution: 'Change value through double pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    int **pptr = &ptr;\n    printf("Before: %d\\n", x);\n    **pptr = 50;\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Dereference twice to access value'
  },
  {
    id: 'c_ptr_23',
    topicId: 'c_pointers',
    question: 'Write a program to swap two numbers using pointers.',
    mathSolution: 'Exchange values via pointers',
    codeSolution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    printf("Before: x=%d, y=%d\\n", x, y);\n    swap(&x, &y);\n    printf("After: x=%d, y=%d\\n", x, y);\n    return 0;\n}',
    hint: 'Pass addresses to function'
  },
  {
    id: 'c_ptr_24',
    topicId: 'c_pointers',
    question: 'Write a program to increment variable using pointer in function.',
    mathSolution: 'Modify original variable',
    codeSolution: '#include <stdio.h>\n\nvoid increment(int *p) {\n    (*p)++;\n}\n\nint main() {\n    int x = 5;\n    printf("Before: %d\\n", x);\n    increment(&x);\n    printf("After: %d\\n", x);\n    return 0;\n}',
    hint: 'Function receives address'
  },
  {
    id: 'c_ptr_25',
    topicId: 'c_pointers',
    question: 'Write a program to return pointer from function.',
    mathSolution: 'Function returns address',
    codeSolution: '#include <stdio.h>\n\nint* findMax(int *arr, int n) {\n    int *max = arr;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > *max) max = &arr[i];\n    }\n    return max;\n}\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int *maxPtr = findMax(arr, 5);\n    printf("Maximum value: %d\\n", *maxPtr);\n    return 0;\n}',
    hint: 'Return address of element'
  },
  {
    id: 'c_ptr_26',
    topicId: 'c_pointers',
    question: 'Write a program to create array of pointers to integers.',
    mathSolution: 'Array storing addresses',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    int *ptrs[] = {&a, &b, &c};\n    for(int i = 0; i < 3; i++) {\n        printf("Value %d: %d\\n", i, *ptrs[i]);\n    }\n    return 0;\n}',
    hint: 'Each element holds address'
  },
  {
    id: 'c_ptr_27',
    topicId: 'c_pointers',
    question: 'Write a program to create array of strings using pointer array.',
    mathSolution: 'Array of char pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *fruits[] = {"Apple", "Banana", "Orange"};\n    for(int i = 0; i < 3; i++) {\n        printf("%s\\n", fruits[i]);\n    }\n    return 0;\n}',
    hint: 'Each points to string literal'
  },
  {
    id: 'c_ptr_28',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate NULL pointer.',
    mathSolution: 'Pointer that points to nothing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int *ptr = NULL;\n    if(ptr == NULL) {\n        printf("Pointer is NULL\\n");\n    }\n    return 0;\n}',
    hint: 'NULL pointer points to nothing'
  },
  {
    id: 'c_ptr_29',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate void pointer.',
    mathSolution: 'Generic pointer that can hold any address',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    float y = 3.14;\n    void *ptr;\n    ptr = &x;\n    printf("Integer value: %d\\n", *(int*)ptr);\n    ptr = &y;\n    printf("Float value: %.2f\\n", *(float*)ptr);\n    return 0;\n}',
    hint: 'Cast before dereferencing'
  },
  {
    id: 'c_ptr_30',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate const pointer.',
    mathSolution: 'Pointer cannot change where it points',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10, y = 20;\n    int *const ptr = &x;\n    *ptr = 15;\n    printf("x = %d\\n", x);\n    // ptr = &y; // ERROR - pointer is constant\n    return 0;\n}',
    hint: 'int* const means pointer is constant'
  },

  // ========== DYNAMIC MEMORY ALLOCATION (31-40) ==========
  {
    id: 'c_ptr_31',
    topicId: 'c_pointers',
    question: 'Write a program to allocate memory for one integer using malloc.',
    mathSolution: 'Dynamic memory allocation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    if(ptr != NULL) {\n        *ptr = 42;\n        printf("Value: %d\\n", *ptr);\n        free(ptr);\n    }\n    return 0;\n}',
    hint: 'malloc returns void*, cast to needed type'
  },
  {
    id: 'c_ptr_32',
    topicId: 'c_pointers',
    question: 'Write a program to dynamically allocate array using malloc.',
    mathSolution: 'Array on heap',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)malloc(n * sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < n; i++) {\n            arr[i] = (i + 1) * 10;\n        }\n        for(int i = 0; i < n; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'Multiply by number of elements'
  },
  {
    id: 'c_ptr_33',
    topicId: 'c_pointers',
    question: 'Write a program to allocate and initialize to zero using calloc.',
    mathSolution: 'Zero-initialized memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr = (int*)calloc(n, sizeof(int));\n    if(arr != NULL) {\n        for(int i = 0; i < n; i++) {\n            printf("%d ", arr[i]);\n        }\n        free(arr);\n    }\n    return 0;\n}',
    hint: 'calloc takes count and size'
  },
  {
    id: 'c_ptr_34',
    topicId: 'c_pointers',
    question: 'Write a program to resize memory using realloc.',
    mathSolution: 'Change size of memory block',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = (int*)malloc(3 * sizeof(int));\n    arr[0] = 10; arr[1] = 20; arr[2] = 30;\n    arr = (int*)realloc(arr, 5 * sizeof(int));\n    arr[3] = 40; arr[4] = 50;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    free(arr);\n    return 0;\n}',
    hint: 'May move to new location'
  },
  {
    id: 'c_ptr_35',
    topicId: 'c_pointers',
    question: 'Write a program to free dynamically allocated memory.',
    mathSolution: 'Prevent memory leak',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 100;\n    printf("Value: %d\\n", *ptr);\n    free(ptr);\n    printf("Memory freed\\n");\n    return 0;\n}',
    hint: 'Always free what you malloc'
  },
  {
    id: 'c_ptr_36',
    topicId: 'c_pointers',
    question: 'Write a program to demonstrate dangling pointer.',
    mathSolution: 'Pointer to freed memory',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *ptr = (int*)malloc(sizeof(int));\n    *ptr = 42;\n    free(ptr);\n    ptr = NULL;\n    printf("Pointer set to NULL after free\\n");\n    return 0;\n}',
    hint: 'Set to NULL after free'
  },
  {
    id: 'c_ptr_37',
    topicId: 'c_pointers',
    question: 'Write a program to create 2D array using pointer to pointer.',
    mathSolution: 'Dynamic matrix allocation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(cols * sizeof(int));\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            mat[i][j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n        free(mat[i]);\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'First allocate rows, then each row'
  },
  {
    id: 'c_ptr_38',
    topicId: 'c_pointers',
    question: 'Write a program to calculate sum using pointer to function.',
    mathSolution: 'Function pointer callback',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int (*funcPtr)(int, int) = add;\n    int result = funcPtr(10, 20);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Function name decays to pointer'
  },
  {
    id: 'c_ptr_39',
    topicId: 'c_pointers',
    question: 'Write a program to create array of function pointers.',
    mathSolution: 'Multiple functions in array',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    int (*ops[])(int, int) = {add, sub, mul};\n    int a = 10, b = 5;\n    printf("Add: %d\\n", ops[0](a, b));\n    printf("Sub: %d\\n", ops[1](a, b));\n    printf("Mul: %d\\n", ops[2](a, b));\n    return 0;\n}',
    hint: 'Array of function pointers'
  },
  {
    id: 'c_ptr_40',
    topicId: 'c_pointers',
    question: 'Write a program to pass function pointer as parameter.',
    mathSolution: 'Callback function',
    codeSolution: '#include <stdio.h>\n\nvoid process(int *arr, int n, int (*func)(int)) {\n    for(int i = 0; i < n; i++) {\n        arr[i] = func(arr[i]);\n    }\n}\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    process(arr, 5, square);\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Function pointer as parameter'
  },
  //recursion
  {
    id: 'c_rec_1',
    topicId: 'c_recursion',
    question: 'Write a recursive program to calculate factorial of 5.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint fact(int n) {\n    if(n <= 1) return 1;\n    return n * fact(n-1);\n}\n\nint main() {\n    int result = fact(5);\n    printf("5! = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 or 1 returns 1'
  },
  {
    id: 'c_rec_2',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find 6th Fibonacci number.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8 → 6th term is 8',
    codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int result = fib(6);\n    printf("Fibonacci(6) = %d\\n", result);\n    return 0;\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },
  {
    id: 'c_rec_3',
    topicId: 'c_recursion',
    question: 'Write a recursive program to calculate sum of first 10 natural numbers.',
    mathSolution: 'Sum = 55',
    codeSolution: '#include <stdio.h>\n\nint sumN(int n) {\n    if(n == 0) return 0;\n    return n + sumN(n-1);\n}\n\nint main() {\n    int result = sumN(10);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Add n to sum of n-1 numbers'
  },
  {
    id: 'c_rec_4',
    topicId: 'c_recursion',
    question: 'Write a recursive program to calculate power 2^5.',
    mathSolution: '2^5 = 32',
    codeSolution: '#include <stdio.h>\n\nint power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int result = power(2, 5);\n    printf("2^5 = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_rec_5',
    topicId: 'c_recursion',
    question: 'Write a recursive program to sum digits of 12345.',
    mathSolution: '1+2+3+4+5 = 15',
    codeSolution: '#include <stdio.h>\n\nint sumDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumDigits(n / 10);\n}\n\nint main() {\n    int result = sumDigits(12345);\n    printf("Sum of digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Add last digit to sum of remaining'
  },
  {
    id: 'c_rec_6',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count digits in 12345.',
    mathSolution: 'Digits = 5',
    codeSolution: '#include <stdio.h>\n\nint countDigits(int n) {\n    if(n == 0) return 0;\n    return 1 + countDigits(n / 10);\n}\n\nint main() {\n    int result = countDigits(12345);\n    printf("Digits = %d\\n", result);\n    return 0;\n}',
    hint: 'Count one digit and recurse on rest'
  },
  {
    id: 'c_rec_7',
    topicId: 'c_recursion',
    question: 'Write a recursive program to reverse number 12345.',
    mathSolution: 'Reverse = 54321',
    codeSolution: '#include <stdio.h>\n\nint reverseNum(int n, int rev) {\n    if(n == 0) return rev;\n    return reverseNum(n / 10, rev * 10 + n % 10);\n}\n\nint main() {\n    int result = reverseNum(12345, 0);\n    printf("Reverse = %d\\n", result);\n    return 0;\n}',
    hint: 'Build reversed number in parameter'
  },
  {
    id: 'c_rec_8',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find GCD of 48 and 18.',
    mathSolution: 'GCD = 6',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    int result = gcd(48, 18);\n    printf("GCD = %d\\n", result);\n    return 0;\n}',
    hint: 'Base case when b=0'
  },
  {
    id: 'c_rec_9',
    topicId: 'c_recursion',
    question: 'Write a recursive program to check if 17 is prime.',
    mathSolution: '17 is prime',
    codeSolution: '#include <stdio.h>\n\nint isPrime(int n, int i) {\n    if(n < 2) return 0;\n    if(i == 1) return 1;\n    if(n % i == 0) return 0;\n    return isPrime(n, i-1);\n}\n\nint main() {\n    int result = isPrime(17, 16);\n    if(result) printf("17 is prime\\n");\n    else printf("17 is not prime\\n");\n    return 0;\n}',
    hint: 'Check divisibility from n/2 down to 2'
  },
  {
    id: 'c_rec_10',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find product of first 5 numbers.',
    mathSolution: '5×4×3×2×1 = 120',
    codeSolution: '#include <stdio.h>\n\nint product(int n) {\n    if(n <= 1) return 1;\n    return n * product(n-1);\n}\n\nint main() {\n    int result = product(5);\n    printf("Product = %d\\n", result);\n    return 0;\n}',
    hint: 'Same as factorial'
  },

  // ========== ARRAY RECURSION (11-20) ==========
  {
    id: 'c_rec_11',
    topicId: 'c_recursion',
    question: 'Write a recursive program to sum array [1,2,3,4,5].',
    mathSolution: 'Sum = 15',
    codeSolution: '#include <stdio.h>\n\nint sumArray(int arr[], int n) {\n    if(n <= 0) return 0;\n    return arr[n-1] + sumArray(arr, n-1);\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int result = sumArray(arr, 5);\n    printf("Sum = %d\\n", result);\n    return 0;\n}',
    hint: 'Add last element to sum of rest'
  },
  {
    id: 'c_rec_12',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find maximum in [3,7,2,9,5].',
    mathSolution: 'Maximum = 9',
    codeSolution: '#include <stdio.h>\n\nint maxArray(int arr[], int n) {\n    if(n == 1) return arr[0];\n    int max = maxArray(arr, n-1);\n    return (arr[n-1] > max) ? arr[n-1] : max;\n}\n\nint main() {\n    int arr[] = {3,7,2,9,5};\n    int result = maxArray(arr, 5);\n    printf("Maximum = %d\\n", result);\n    return 0;\n}',
    hint: 'Compare last element with max of rest'
  },
  {
    id: 'c_rec_13',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find minimum in [3,7,2,9,5].',
    mathSolution: 'Minimum = 2',
    codeSolution: '#include <stdio.h>\n\nint minArray(int arr[], int n) {\n    if(n == 1) return arr[0];\n    int min = minArray(arr, n-1);\n    return (arr[n-1] < min) ? arr[n-1] : min;\n}\n\nint main() {\n    int arr[] = {3,7,2,9,5};\n    int result = minArray(arr, 5);\n    printf("Minimum = %d\\n", result);\n    return 0;\n}',
    hint: 'Compare last element with min of rest'
  },
  {
    id: 'c_rec_14',
    topicId: 'c_recursion',
    question: 'Write a recursive program to reverse array [1,2,3,4,5].',
    mathSolution: 'Reversed: 5,4,3,2,1',
    codeSolution: '#include <stdio.h>\n\nvoid reverseArray(int arr[], int start, int end) {\n    if(start >= end) return;\n    int temp = arr[start];\n    arr[start] = arr[end];\n    arr[end] = temp;\n    reverseArray(arr, start+1, end-1);\n}\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    reverseArray(arr, 0, 4);\n    printf("Reversed array: ");\n    for(int i = 0; i < 5; i++)\n        printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap ends and recurse inward'
  },
  {
    id: 'c_rec_15',
    topicId: 'c_recursion',
    question: 'Write a recursive program to check if array is sorted.',
    mathSolution: '[1,3,5,7,9] is sorted',
    codeSolution: '#include <stdio.h>\n\nint isSorted(int arr[], int n) {\n    if(n <= 1) return 1;\n    if(arr[n-1] < arr[n-2]) return 0;\n    return isSorted(arr, n-1);\n}\n\nint main() {\n    int arr[] = {1,3,5,7,9};\n    if(isSorted(arr, 5))\n        printf("Array is sorted\\n");\n    else\n        printf("Array is not sorted\\n");\n    return 0;\n}',
    hint: 'Check adjacent elements'
  },
  {
    id: 'c_rec_16',
    topicId: 'c_recursion',
    question: 'Write a recursive program for linear search in [2,4,7,9,3].',
    mathSolution: 'Find 7 at index 2',
    codeSolution: '#include <stdio.h>\n\nint linearSearch(int arr[], int n, int key) {\n    if(n < 0) return -1;\n    if(arr[n-1] == key) return n-1;\n    return linearSearch(arr, n-1, key);\n}\n\nint main() {\n    int arr[] = {2,4,7,9,3};\n    int index = linearSearch(arr, 5, 7);\n    if(index != -1)\n        printf("Found at index %d\\n", index);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'Search from end backwards'
  },
  {
    id: 'c_rec_17',
    topicId: 'c_recursion',
    question: 'Write a recursive binary search in [1,3,5,8,10,12].',
    mathSolution: 'Find 8 at index 3',
    codeSolution: '#include <stdio.h>\n\nint binarySearch(int arr[], int low, int high, int key) {\n    if(low > high) return -1;\n    int mid = (low + high) / 2;\n    if(arr[mid] == key) return mid;\n    if(arr[mid] > key) return binarySearch(arr, low, mid-1, key);\n    return binarySearch(arr, mid+1, high, key);\n}\n\nint main() {\n    int arr[] = {1,3,5,8,10,12};\n    int index = binarySearch(arr, 0, 5, 8);\n    if(index != -1)\n        printf("Found at index %d\\n", index);\n    else\n        printf("Not found\\n");\n    return 0;\n}',
    hint: 'Divide array and search appropriate half'
  },
  {
    id: 'c_rec_18',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count occurrences of 2 in [2,3,2,5,2,7].',
    mathSolution: 'Count = 3',
    codeSolution: '#include <stdio.h>\n\nint countOccur(int arr[], int n, int key) {\n    if(n <= 0) return 0;\n    return (arr[n-1] == key ? 1 : 0) + countOccur(arr, n-1, key);\n}\n\nint main() {\n    int arr[] = {2,3,2,5,2,7};\n    int count = countOccur(arr, 6, 2);\n    printf("Count = %d\\n", count);\n    return 0;\n}',
    hint: 'Add 1 if found, then recurse'
  },
  {
    id: 'c_rec_19',
    topicId: 'c_recursion',
    question: 'Write a recursive program to find string length of "hello".',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint strLen(char *s) {\n    if(*s == \'\\0\') return 0;\n    return 1 + strLen(s + 1);\n}\n\nint main() {\n    char str[] = "hello";\n    int len = strLen(str);\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Count characters until null'
  },
  {
    id: 'c_rec_20',
    topicId: 'c_recursion',
    question: 'Write a recursive program to reverse string "hello".',
    mathSolution: 'Reversed: "olleh"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid reverseStr(char *s, int start, int end) {\n    if(start >= end) return;\n    char temp = s[start];\n    s[start] = s[end];\n    s[end] = temp;\n    reverseStr(s, start+1, end-1);\n}\n\nint main() {\n    char str[] = "hello";\n    reverseStr(str, 0, 4);\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap ends and recurse'
  },

  // ========== STRING RECURSION (21-30) ==========
  {
    id: 'c_rec_21',
    topicId: 'c_recursion',
    question: 'Write a recursive program to check if "madam" is palindrome.',
    mathSolution: '"madam" is palindrome',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint isPalindromeStr(char *s, int start, int end) {\n    if(start >= end) return 1;\n    if(s[start] != s[end]) return 0;\n    return isPalindromeStr(s, start+1, end-1);\n}\n\nint main() {\n    char str[] = "madam";\n    if(isPalindromeStr(str, 0, 4))\n        printf("%s is palindrome\\n", str);\n    else\n        printf("%s is not palindrome\\n", str);\n    return 0;\n}',
    hint: 'Compare ends and recurse'
  },
  {
    id: 'c_rec_22',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count vowels in "hello".',
    mathSolution: 'Vowels = 2 (e,o)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint countVowels(char *s) {\n    if(*s == \'\\0\') return 0;\n    char c = tolower(*s);\n    int isVowel = (c==\'a\'||c==\'e\'||c==\'i\'||c==\'o\'||c==\'u\');\n    return isVowel + countVowels(s + 1);\n}\n\nint main() {\n    char str[] = "hello";\n    int count = countVowels(str);\n    printf("Vowels = %d\\n", count);\n    return 0;\n}',
    hint: 'Check first char, recurse on rest'
  },
  {
    id: 'c_rec_23',
    topicId: 'c_recursion',
    question: 'Write a recursive program to convert "hello" to uppercase.',
    mathSolution: '"HELLO"',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nvoid toUpper(char *s) {\n    if(*s == \'\\0\') return;\n    *s = toupper(*s);\n    toUpper(s + 1);\n}\n\nint main() {\n    char str[] = "hello";\n    toUpper(str);\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Process one character at a time'
  },
  {
    id: 'c_rec_24',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print numbers from 1 to 5.',
    mathSolution: '1 2 3 4 5',
    codeSolution: '#include <stdio.h>\n\nvoid print1toN(int n) {\n    if(n == 0) return;\n    print1toN(n-1);\n    printf("%d ", n);\n}\n\nint main() {\n    print1toN(5);\n    return 0;\n}',
    hint: 'Recurse first, then print'
  },
  {
    id: 'c_rec_25',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print numbers from 5 to 1.',
    mathSolution: '5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nvoid printNto1(int n) {\n    if(n == 0) return;\n    printf("%d ", n);\n    printNto1(n-1);\n}\n\nint main() {\n    printNto1(5);\n    return 0;\n}',
    hint: 'Print first, then recurse'
  },
  {
    id: 'c_rec_26',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print triangle of stars (3 rows).',
    mathSolution: '*\\n**\\n***',
    codeSolution: '#include <stdio.h>\n\nvoid triangle(int n) {\n    if(n == 0) return;\n    triangle(n-1);\n    for(int i = 0; i < n; i++) printf("*");\n    printf("\\n");\n}\n\nint main() {\n    triangle(3);\n    return 0;\n}',
    hint: 'Recurse then print row'
  },
  {
    id: 'c_rec_27',
    topicId: 'c_recursion',
    question: 'Write a recursive program to print inverted triangle (3 rows).',
    mathSolution: '***\\n**\\n*',
    codeSolution: '#include <stdio.h>\n\nvoid invTriangle(int n) {\n    if(n == 0) return;\n    for(int i = 0; i < n; i++) printf("*");\n    printf("\\n");\n    invTriangle(n-1);\n}\n\nint main() {\n    invTriangle(3);\n    return 0;\n}',
    hint: 'Print row then recurse'
  },
  {
    id: 'c_rec_28',
    topicId: 'c_recursion',
    question: 'Write a recursive program to convert decimal 13 to binary.',
    mathSolution: '13 = 1101',
    codeSolution: '#include <stdio.h>\n\nvoid decToBin(int n) {\n    if(n == 0) return;\n    decToBin(n / 2);\n    printf("%d", n % 2);\n}\n\nint main() {\n    printf("Binary of 13: ");\n    decToBin(13);\n    return 0;\n}',
    hint: 'Recurse on quotient, print remainder'
  },
  {
    id: 'c_rec_29',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Tower of Hanoi with 3 disks.',
    mathSolution: 'Move 3 disks from A to C using B',
    codeSolution: '#include <stdio.h>\n\nvoid hanoi(int n, char from, char to, char aux) {\n    if(n == 1) {\n        printf("Move disk 1 from %c to %c\\n", from, to);\n        return;\n    }\n    hanoi(n-1, from, aux, to);\n    printf("Move disk %d from %c to %c\\n\", n, from, to);\n    hanoi(n-1, aux, to, from);\n}\n\nint main() {\n    hanoi(3, \'A\', \'C\', \'B\');\n    return 0;\n}',
    hint: 'Move n-1 to aux, then nth, then n-1 to dest'
  },
  {
    id: 'c_rec_30',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count set bits in 13 (1101).',
    mathSolution: '13 has 3 set bits',
    codeSolution: '#include <stdio.h>\n\nint countBits(int n) {\n    if(n == 0) return 0;\n    return (n & 1) + countBits(n >> 1);\n}\n\nint main() {\n    int result = countBits(13);\n    printf("Set bits = %d\\n", result);\n    return 0;\n}',
    hint: 'Check LSB and shift right'
  },

  // ========== DYNAMIC PROGRAMMING RECURSION (31-40) ==========
  {
    id: 'c_rec_31',
    topicId: 'c_recursion',
    question: 'Write a recursive program for combinations C(5,2).',
    mathSolution: 'C(5,2) = 10',
    codeSolution: '#include <stdio.h>\n\nint comb(int n, int r) {\n    if(r == 0 || r == n) return 1;\n    return comb(n-1, r-1) + comb(n-1, r);\n}\n\nint main() {\n    int result = comb(5, 2);\n    printf("C(5,2) = %d\\n", result);\n    return 0;\n}',
    hint: 'Pascal\'s triangle identity'
  },
  {
    id: 'c_rec_32',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Josephus problem (n=7, k=3).',
    mathSolution: 'Survivor at position 4',
    codeSolution: '#include <stdio.h>\n\nint josephus(int n, int k) {\n    if(n == 1) return 1;\n    return (josephus(n-1, k) + k - 1) % n + 1;\n}\n\nint main() {\n    int result = josephus(7, 3);\n    printf("Survivor: %d\\n", result);\n    return 0;\n}',
    hint: 'Recursive elimination formula'
  },
  {
    id: 'c_rec_33',
    topicId: 'c_recursion',
    question: 'Write a recursive program for staircase problem (n=5).',
    mathSolution: 'Ways to climb 5 steps (1 or 2 steps) = 8',
    codeSolution: '#include <stdio.h>\n\nint climbWays(int n) {\n    if(n <= 2) return n;\n    return climbWays(n-1) + climbWays(n-2);\n}\n\nint main() {\n    int result = climbWays(5);\n    printf("Ways to climb = %d\\n\", result);\n    return 0;\n}',
    hint: 'Ways(n) = Ways(n-1) + Ways(n-2)'
  },
  {
    id: 'c_rec_34',
    topicId: 'c_recursion',
    question: 'Write a recursive program to count paths in 3x3 grid.',
    mathSolution: 'Paths from (0,0) to (2,2) = 6',
    codeSolution: '#include <stdio.h>\n\nint countPaths(int m, int n) {\n    if(m == 1 || n == 1) return 1;\n    return countPaths(m-1, n) + countPaths(m, n-1);\n}\n\nint main() {\n    int result = countPaths(3, 3);\n    printf("Total paths = %d\\n", result);\n    return 0;\n}',
    hint: 'Move right or down'
  },
  {
    id: 'c_rec_35',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Catalan number C(4).',
    mathSolution: 'Catalan(4) = 14',
    codeSolution: '#include <stdio.h>\n\nint catalan(int n) {\n    if(n <= 1) return 1;\n    int res = 0;\n    for(int i = 0; i < n; i++)\n        res += catalan(i) * catalan(n-1-i);\n    return res;\n}\n\nint main() {\n    int result = catalan(4);\n    printf("Catalan(4) = %d\\n", result);\n    return 0;\n}',
    hint: 'Sum of products of catalan pairs'
  },
  {
    id: 'c_rec_36',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Ackermann function A(1,2).',
    mathSolution: 'A(1,2) = 4',
    codeSolution: '#include <stdio.h>\n\nint ackermann(int m, int n) {\n    if(m == 0) return n + 1;\n    if(n == 0) return ackermann(m-1, 1);\n    return ackermann(m-1, ackermann(m, n-1));\n}\n\nint main() {\n    int result = ackermann(1, 2);\n    printf("A(1,2) = %d\\n", result);\n    return 0;\n}',
    hint: 'Well-known recursive function'
  },
  {
    id: 'c_rec_37',
    topicId: 'c_recursion',
    question: 'Write a recursive program for McCarthy 91 function with n=95.',
    mathSolution: 'M(95) = 91',
    codeSolution: '#include <stdio.h>\n\nint mcCarthy(int n) {\n    if(n > 100) return n - 10;\n    return mcCarthy(mcCarthy(n + 11));\n}\n\nint main() {\n    int result = mcCarthy(95);\n    printf("M(95) = %d\\n", result);\n    return 0;\n}',
    hint: 'Famous recursive function'
  },
  {
    id: 'c_rec_38',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Collatz conjecture steps from 6.',
    mathSolution: '6→3→10→5→16→8→4→2→1 = 8 steps',
    codeSolution: '#include <stdio.h>\n\nint collatz(int n) {\n    if(n == 1) return 0;\n    if(n % 2 == 0) return 1 + collatz(n / 2);\n    return 1 + collatz(3 * n + 1);\n}\n\nint main() {\n    int result = collatz(6);\n    printf("Steps = %d\\n", result);\n    return 0;\n}',
    hint: 'Count steps to reach 1'
  },
  {
    id: 'c_rec_39',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Bell numbers B(4).',
    mathSolution: 'B(4) = 15',
    codeSolution: '#include <stdio.h>\n\nint comb(int n, int r) {\n    if(r == 0 || r == n) return 1;\n    return comb(n-1, r-1) + comb(n-1, r);\n}\n\nint bell(int n) {\n    if(n <= 1) return 1;\n    int sum = 0;\n    for(int k = 0; k < n; k++)\n        sum += comb(n-1, k) * bell(k);\n    return sum;\n}\n\nint main() {\n    int result = bell(4);\n    printf("Bell(4) = %d\\n", result);\n    return 0;\n}',
    hint: 'B(n) = sum(C(n-1,k) * B(k))'
  },
  {
    id: 'c_rec_40',
    topicId: 'c_recursion',
    question: 'Write a recursive program for Stirling numbers S(5,2).',
    mathSolution: 'S(5,2) = 15',
    codeSolution: '#include <stdio.h>\n\nint stirling(int n, int k) {\n    if(n == 0 && k == 0) return 1;\n    if(n == 0 || k == 0) return 0;\n    return k * stirling(n-1, k) + stirling(n-1, k-1);\n}\n\nint main() {\n    int result = stirling(5, 2);\n    printf("S(5,2) = %d\\n", result);\n    return 0;\n}',
    hint: 'Place nth element in existing set or new set'
  },

);