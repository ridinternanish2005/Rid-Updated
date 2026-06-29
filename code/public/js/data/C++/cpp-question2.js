QuizData.questions.push(
  //loops ,array,input&Output ,conditional
{
  id: 'cpp_loops_1',
  topicId: 'cpp_loops',
  question: 'Use for loop to print numbers from 1 to 10.',
  mathSolution: 'For loop with initialization, condition, and increment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'For loop syntax: for(init; condition; increment) { }'
},
{
  id: 'cpp_loops_2',
  topicId: 'cpp_loops',
  question: 'Use for loop to print numbers from 10 down to 1.',
  mathSolution: 'Decrement loop counter instead of increment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 10; i >= 1; i--) {\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'Use i-- for descending loops.'
},
{
  id: 'cpp_loops_3',
  topicId: 'cpp_loops',
  question: 'Use while loop to calculate sum of first n natural numbers.',
  mathSolution: 'Initialize sum=0, loop i=1 to n, add to sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, sum = 0, i = 1;\n    cout << "Enter n: ";\n    cin >> n;\n    \n    while (i <= n) {\n        sum += i;\n        i++;\n    }\n    \n    cout << "Sum of first " << n << " numbers: " << sum << endl;\n    return 0;\n}',
  hint: 'While loop continues while condition is true.'
},
{
  id: 'cpp_loops_4',
  topicId: 'cpp_loops',
  question: 'Use do-while loop to ensure loop executes at least once.',
  mathSolution: 'do-while executes body then checks condition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    \n    do {\n        cout << "Enter a positive number: ";\n        cin >> num;\n        if (num <= 0) {\n            cout << "Invalid input! Try again." << endl;\n        }\n    } while (num <= 0);\n    \n    cout << "You entered: " << num << endl;\n    return 0;\n}',
  hint: 'do-while guarantees at least one iteration.'
},
{
  id: 'cpp_loops_5',
  topicId: 'cpp_loops',
  question: 'Print multiplication table of a number using for loop.',
  mathSolution: 'Loop from 1 to 10, multiply number by counter.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    for (int i = 1; i <= 10; i++) {\n        cout << num << " x " << setw(2) << i << " = " << num * i << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use setw for formatted output alignment.'
},
{
  "id": "cpp_loops_6",
  "topicId": "cpp_loops",
  "question": "Calculate factorial using for loop.",
  "mathSolution": "factorial = n * (n-1) * ... * 1",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    long long factorial = 1;\n    \n    cout << \"Enter a number: \";\n    cin >> n;\n    \n    if (n < 0) {\n        cout << \"Factorial of negative number doesn't exist\" << endl;\n        return 0;\n    }\n    \n    for (int i = 1; i <= n; i++) {\n        factorial *= i;\n    }\n    \n    cout << n << \"! = \" << factorial << endl;\n    \n    return 0;\n}",
  "hint": "Use long long for larger factorial values."
},
{
  id: 'cpp_loops_7',
  topicId: 'cpp_loops',
  question: 'Print Fibonacci series up to n terms.',
  mathSolution: 'Each term is sum of previous two: F(n)=F(n-1)+F(n-2).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, first = 0, second = 1, next;\n    \n    cout << "Enter number of terms: ";\n    cin >> n;\n    \n    cout << "Fibonacci series: ";\n    \n    for (int i = 1; i <= n; i++) {\n        if (i == 1) {\n            cout << first << " ";\n            continue;\n        }\n        if (i == 2) {\n            cout << second << " ";\n            continue;\n        }\n        next = first + second;\n        first = second;\n        second = next;\n        cout << next << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...'
},
{
  id: 'cpp_loops_8',
  topicId: 'cpp_loops',
  question: 'Check if a number is prime using for loop.',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    bool isPrime = true;\n    \n    cout << "Enter a number: ";\n    cin >> n;\n    \n    if (n <= 1) {\n        isPrime = false;\n    } else {\n        for (int i = 2; i <= sqrt(n); i++) {\n            if (n % i == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n    }\n    \n    if (isPrime) {\n        cout << n << " is prime" << endl;\n    } else {\n        cout << n << " is not prime" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Only need to check up to sqrt(n) for efficiency.'
},
{
  id: 'cpp_loops_9',
  topicId: 'cpp_loops',
  question: 'Print all prime numbers between 1 and n using nested loops.',
  mathSolution: 'Outer loop for numbers, inner loop for primality test.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter limit: ";\n    cin >> n;\n    \n    cout << "Prime numbers between 1 and " << n << ":\\n";\n    \n    for (int i = 2; i <= n; i++) {\n        bool isPrime = true;\n        for (int j = 2; j <= sqrt(i); j++) {\n            if (i % j == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n        if (isPrime) {\n            cout << i << " ";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Nested loops are used for multi-level iterations.'
},
{
  id: 'cpp_loops_10',
  topicId: 'cpp_loops',
  question: 'Reverse a number using while loop.',
  mathSolution: 'Extract digits using % and build reversed number.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, reversed = 0, remainder;\n    \n    cout << "Enter a number: ";\n    cin >> num;\n    \n    int original = num;\n    \n    while (num != 0) {\n        remainder = num % 10;\n        reversed = reversed * 10 + remainder;\n        num /= 10;\n    }\n    \n    cout << "Reversed number: " << reversed << endl;\n    \n    return 0;\n}',
  hint: 'Use % 10 to get last digit, / 10 to remove it.'
},
{
  id: 'cpp_loops_11',
  topicId: 'cpp_loops',
  question: 'Count digits in a number using while loop.',
  mathSolution: 'Divide by 10 until number becomes 0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, count = 0;\n    \n    cout << "Enter a number: ";\n    cin >> num;\n    \n    int temp = num;\n    \n    if (temp == 0) {\n        count = 1;\n    } else {\n        while (temp != 0) {\n            temp /= 10;\n            count++;\n        }\n    }\n    \n    cout << "Number of digits: " << count << endl;\n    \n    return 0;\n}',
  hint: 'Handle zero separately as it has 1 digit.'
},
{
  id: 'cpp_loops_12',
  topicId: 'cpp_loops',
  question: 'Calculate sum of digits using while loop.',
  mathSolution: 'Add last digit, then remove it.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, sum = 0;\n    \n    cout << "Enter a number: ";\n    cin >> num;\n    \n    int temp = abs(num);\n    \n    while (temp > 0) {\n        sum += temp % 10;\n        temp /= 10;\n    }\n    \n    cout << "Sum of digits: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use abs() to handle negative numbers.'
},
{
  id: 'cpp_loops_13',
  topicId: 'cpp_loops',
  question: 'Find GCD of two numbers using Euclidean algorithm (loop).',
  mathSolution: 'GCD(a,b) = GCD(b, a%b) until b=0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    \n    int num1 = a, num2 = b;\n    \n    while (num2 != 0) {\n        int temp = num2;\n        num2 = num1 % num2;\n        num1 = temp;\n    }\n    \n    cout << "GCD of " << a << " and " << b << " is: " << num1 << endl;\n    \n    return 0;\n}',
  hint: 'Euclidean algorithm is efficient for GCD calculation.'
},
{
  id: 'cpp_loops_14',
  topicId: 'cpp_loops',
  question: 'Find LCM of two numbers using loop.',
  mathSolution: 'LCM = (a * b) / GCD(a, b).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    \n    int num1 = a, num2 = b, gcd;\n    \n    while (num2 != 0) {\n        int temp = num2;\n        num2 = num1 % num2;\n        num1 = temp;\n    }\n    gcd = num1;\n    \n    int lcm = (a * b) / gcd;\n    \n    cout << "LCM of " << a << " and " << b << " is: " << lcm << endl;\n    \n    return 0;\n}',
  hint: 'LCM * GCD = a * b'
},
{
  id: 'cpp_loops_15',
  topicId: 'cpp_loops',
  question: 'Generate multiplication table using nested loops.',
  mathSolution: 'Outer loop for rows, inner loop for columns.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << "Multiplication Table (1-10):\\n\\n";\n    \n    // Print header\n    cout << "    ";\n    for (int i = 1; i <= 10; i++) {\n        cout << setw(4) << i;\n    }\n    cout << endl;\n    \n    for (int i = 1; i <= 10; i++) {\n        cout << setw(4) << i << " ";  // Row label\n        for (int j = 1; j <= 10; j++) {\n            cout << setw(4) << i * j;\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Nested loops create 2D patterns and tables.'
},
{
  id: 'cpp_loops_16',
  topicId: 'cpp_loops',
  question: 'Print right-angled triangle star pattern.',
  mathSolution: 'Row i has i stars.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Number of stars equals row number.'
},
{
  id: 'cpp_loops_17',
  topicId: 'cpp_loops',
  question: 'Print pyramid star pattern.',
  mathSolution: 'Spaces decrease, stars increase as row increases.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 1; i <= rows; i++) {\n        // Print spaces\n        for (int j = 1; j <= rows - i; j++) {\n            cout << " ";\n        }\n        // Print stars\n        for (int k = 1; k <= 2 * i - 1; k++) {\n            cout << "*";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Stars count: 2*i - 1, spaces: rows - i.'
},
{
  id: 'cpp_loops_18',
  topicId: 'cpp_loops',
  question: 'Print Floyd\'s triangle (sequential numbers).',
  mathSolution: 'Use counter that increments each print.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int rows, num = 1;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << setw(3) << num++;\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Floyd\'s triangle has consecutive natural numbers.'
},
{
  id: 'cpp_loops_19',
  topicId: 'cpp_loops',
  question: 'Print Pascal\'s triangle using nested loops.',
  mathSolution: 'Use combinations formula: C(n,k) = C(n,k-1) * (n-k+1)/k.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows;\n    cout << "Enter number of rows: ";\n    cin >> rows;\n    \n    for (int i = 0; i < rows; i++) {\n        // Print spaces\n        for (int j = 0; j < rows - i - 1; j++) {\n            cout << " ";\n        }\n        \n        int coeff = 1;\n        for (int j = 0; j <= i; j++) {\n            cout << coeff << " ";\n            coeff = coeff * (i - j) / (j + 1);\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Pascal\'s triangle: each number is sum of two above.'
},
{
  id: 'cpp_loops_20',
  topicId: 'cpp_loops',
  question: 'Find largest element in array using loop.',
  mathSolution: 'Initialize max with first element, compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {5, 12, 3, 25, 8, 19, 7};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int max = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    \n    cout << "Largest element: " << max << endl;\n    \n    return 0;\n}',
  hint: 'Initialize max with first array element.'
},
{
  id: 'cpp_loops_21',
  topicId: 'cpp_loops',
  question: 'Sort array in ascending order using bubble sort (loop).',
  mathSolution: 'Bubble up largest element to end in each pass.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Original array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    // Bubble sort\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    \n    cout << "Sorted array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Bubble sort repeatedly steps through list, swapping adjacent elements.'
},
{
  id: 'cpp_loops_22',
  topicId: 'cpp_loops',
  question: 'Implement binary search using loop.',
  mathSolution: 'Divide search interval in half repeatedly.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target;\n    \n    cout << "Enter target: ";\n    cin >> target;\n    \n    int left = 0, right = n - 1;\n    int position = -1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        \n        if (arr[mid] == target) {\n            position = mid;\n            break;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    \n    if (position != -1) {\n        cout << "Found at index: " << position << endl;\n    } else {\n        cout << "Not found" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Binary search requires sorted array.'
},
{
  id: 'cpp_loops_23',
  topicId: 'cpp_loops',
  question: 'Use break statement to exit loop early.',
  mathSolution: 'break terminates the loop immediately.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i == 5) {\n            cout << "Breaking at i = " << i << endl;\n            break;\n        }\n        cout << i << " ";\n    }\n    cout << "\\nLoop ended" << endl;\n    \n    return 0;\n}',
  hint: 'break is useful when condition is met early.'
},
{
  id: 'cpp_loops_24',
  topicId: 'cpp_loops',
  question: 'Use continue statement to skip iteration.',
  mathSolution: 'continue skips rest of current iteration.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) {\n            continue;  // Skip even numbers\n        }\n        cout << i << " ";\n    }\n    cout << "\\n(Only odd numbers printed)" << endl;\n    \n    return 0;\n}',
  hint: 'continue moves to next iteration.'
},
{
  id: 'cpp_loops_25',
  topicId: 'cpp_loops',
  question: 'Use infinite loop with break condition.',
  mathSolution: 'Loop untli condition met, then break.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    int sum = 0;\n    \n    cout << "Enter numbers to sum (0 to stop):\\n";\n    \n    while (true) {\n        cin >> num;\n        if (num == 0) break;\n        sum += num;\n    }\n    \n    cout << "Sum: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use while(true) with break for "loop until condition".'
},
{
  id: 'cpp_loops_26',
  topicId: 'cpp_loops',
  question: 'Sum of array elements using range-based for loop (C++11).',
  mathSolution: 'Range-based for simplifies array iteration.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    \n    for (int x : arr) {\n        sum += x;\n    }\n    \n    cout << "Sum: " << sum << endl;\n    \n    // Modifying elements\n    for (int &x : arr) {\n        x *= 2;\n    }\n    \n    cout << "Doubled: ";\n    for (int x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use & for reference to modify elements in range-based loop.'
},
{
  id: 'cpp_loops_27',
  topicId: 'cpp_loops',
  question: 'Print diamond pattern using nested loops.',
  mathSolution: 'Continue increasing then decreasing pattern.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter size: ";\n    cin >> n;\n    \n    // Upper half\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << " ";\n        }\n        for (int k = 1; k <= 2 * i - 1; k++) {\n            cout << "*";\n        }\n        cout << endl;\n    }\n    \n    // Lower half\n    for (int i = n - 1; i >= 1; i--) {\n        for (int j = 1; j <= n - i; j++) {\n            cout << " ";\n        }\n        for (int k = 1; k <= 2 * i - 1; k++) {\n            cout << "*";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Diamond pattern combines pyramid and inverted pyramid.'
},
{
  id: 'cpp_loops_28',
  topicId: 'cpp_loops',
  question: 'Find factors of a number using for loop.',
  mathSolution: 'Check divisibility from 1 to n.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    cout << "Factors of " << n << ": ";\n    \n    for (int i = 1; i <= n; i++) {\n        if (n % i == 0) {\n            cout << i << " ";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Factors are numbers that divide n evenly.'
},
{
  id: 'cpp_loops_29',
  topicId: 'cpp_loops',
  question: 'Check if number is perfect number using loop.',
  mathSolution: 'Sum of proper divisors equals the number.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, sum = 0;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    for (int i = 1; i <= n / 2; i++) {\n        if (n % i == 0) {\n            sum += i;\n        }\n    }\n    \n    if (sum == n && n > 0) {\n        cout << n << " is a perfect number" << endl;\n    } else {\n        cout << n << " is not a perfect number" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Perfect numbers: 6, 28, 496, 8128...'
},
{
  id: 'cpp_loops_30',
  topicId: 'cpp_loops',
  question: 'Find Armstrong numbers between 1 and n using loop.',
  mathSolution: 'Sum of digits raised to power of digit count equals number.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter limit: ";\n    cin >> n;\n    \n    cout << "Armstrong numbers between 1 and " << n << ":\\n";\n    \n    for (int i = 1; i <= n; i++) {\n        int num = i;\n        int digits = 0;\n        int temp = num;\n        \n        // Count digits\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        \n        temp = num;\n        int sum = 0;\n        while (temp != 0) {\n            int digit = temp % 10;\n            sum += pow(digit, digits);\n            temp /= 10;\n        }\n        \n        if (sum == num) {\n            cout << num << " ";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: '153 is Armstrong: 1³ + 5³ + 3³ = 153.'
},
{
  id: 'cpp_loops_31',
  topicId: 'cpp_loops',
  question: 'Convert decimal to binary using loop.',
  mathSolution: 'Store remainders in reverse order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    long long binary = 0, place = 1;\n    \n    cout << "Enter decimal number: ";\n    cin >> n;\n    \n    int temp = n;\n    \n    while (temp > 0) {\n        int rem = temp % 2;\n        binary += rem * place;\n        place *= 10;\n        temp /= 2;\n    }\n    \n    cout << n << " in binary = " << binary << endl;\n    \n    return 0;\n}',
  hint: 'Binary digits are remainders when dividing by 2.'
},
{
  id: 'cpp_loops_32',
  topicId: 'cpp_loops',
  question: 'Reverse a string using loop.',
  mathSolution: 'Swap characters from start and end.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    int n = str.length();\n    \n    for (int i = 0; i < n / 2; i++) {\n        char temp = str[i];\n        str[i] = str[n - 1 - i];\n        str[n - 1 - i] = temp;\n    }\n    \n    cout << "Reversed string: " << str << endl;\n    \n    return 0;\n}',
  hint: 'Swap characters from both ends moving inward.'
},
{
  id: 'cpp_loops_33',
  topicId: 'cpp_loops',
  question: 'Count frequency of each character in string using loop.',
  mathSolution: 'Use array of size 256 to store ASCII counts.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    int freq[256] = {0};\n    \n    for (char c : str) {\n        freq[c]++;\n    }\n    \n    cout << "Character frequencies:\\n";\n    for (int i = 0; i < 256; i++) {\n        if (freq[i] > 0 && isprint(i)) {\n            cout << (char)i << ": " << freq[i] << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Use ASCII values as array indices for frequency.'
},
{
  id: 'cpp_loops_34',
  topicId: 'cpp_loops',
  question: 'Remove duplicates from sorted array using loop.',
  mathSolution: 'Shift unique elements forward.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    int uniqueCount = 0;\n    \n    for (int i = 0; i < n; i++) {\n        if (i == 0 || arr[i] != arr[i - 1]) {\n            arr[uniqueCount++] = arr[i];\n        }\n    }\n    \n    cout << "Array after removing duplicates: ";\n    for (int i = 0; i < uniqueCount; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'For sorted arrays, compare with previous element.'
},
{
  id: 'cpp_loops_35',
  topicId: 'cpp_loops',
  question: 'Find second largest element using loop.',
  mathSolution: 'Track both largest and second largest.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 35, 1, 10, 34, 1};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    int first = INT_MIN, second = INT_MIN;\n    \n    for (int i = 0; i < n; i++) {\n        if (arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    \n    if (second == INT_MIN) {\n        cout << "No second largest element" << endl;\n    } else {\n        cout << "Second largest: " << second << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Track both max and second max during single pass.'
},
{
  id: 'cpp_loops_36',
  topicId: 'cpp_loops',
  question: 'Print all divisors of a number efficiently.',
  mathSolution: 'Iterate up to sqrt(n), pair divisors.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    cout << "Divisors of " << n << ": ";\n    \n    for (int i = 1; i <= sqrt(n); i++) {\n        if (n % i == 0) {\n            cout << i << " ";\n            if (i != n / i) {\n                cout << n / i << " ";\n            }\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Divisors come in pairs: i and n/i.'
},
{
  "id": "cpp_loops_37",
  "topicId": "cpp_loops",
  "question": "Find number of vowels and consonants using loop.",
  "mathSolution": "Count vowels separately, rest are consonants.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << \"Enter a string: \";\n    getline(cin, str);\n    \n    int vowels = 0, consonants = 0, digits = 0, spaces = 0, special = 0;\n    \n    for (char c : str) {\n        if (isalpha(c)) {\n            char lower = tolower(c);\n            if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {\n                vowels++;\n            } else {\n                consonants++;\n            }\n        } else if (isdigit(c)) {\n            digits++;\n        } else if (isspace(c)) {\n            spaces++;\n        } else {\n            special++;\n        }\n    }\n    \n    cout << \"Vowels: \" << vowels << endl;\n    cout << \"Consonants: \" << consonants << endl;\n    cout << \"Digits: \" << digits << endl;\n    cout << \"Spaces: \" << spaces << endl;\n    cout << \"Special characters: \" << special << endl;\n    \n    return 0;\n}",
  "hint": "Use <cctype> functions like isalpha, isdigit, isspace."
},
{
  id: 'cpp_loops_38',
  topicId: 'cpp_loops',
  question: 'Merge two sorted arrays using loop.',
  mathSolution: 'Compare elements and add smaller to result.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 3, 5, 7};\n    int arr2[] = {2, 4, 6, 8, 10};\n    int n1 = sizeof(arr1) / sizeof(arr1[0]);\n    int n2 = sizeof(arr2) / sizeof(arr2[0]);\n    vector<int> merged(n1 + n2);\n    \n    int i = 0, j = 0, k = 0;\n    \n    while (i < n1 && j < n2) {\n        if (arr1[i] <= arr2[j]) {\n            merged[k++] = arr1[i++];\n        } else {\n            merged[k++] = arr2[j++];\n        }\n    }\n    \n    while (i < n1) {\n        merged[k++] = arr1[i++];\n    }\n    \n    while (j < n2) {\n        merged[k++] = arr2[j++];\n    }\n    \n    cout << "Merged array: ";\n    for (int x : merged) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Merge is like zipping two sorted lists.'
},
{
  id: 'cpp_loops_39',
  topicId: 'cpp_loops',
  question: 'Check if array is palindrome using loop.',
  mathSolution: 'Compare elements from both ends.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 1};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    bool isPalindrome = true;\n    \n    for (int i = 0; i < n / 2; i++) {\n        if (arr[i] != arr[n - 1 - i]) {\n            isPalindrome = false;\n            break;\n        }\n    }\n    \n    if (isPalindrome) {\n        cout << "Array is palindrome" << endl;\n    } else {\n        cout << "Array is not palindrome" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Palindrome reads same forward and backward.'
},
{
  id: 'cpp_loops_40',
  topicId: 'cpp_loops',
  question: 'Rotate array left by k positions using loop.',
  mathSolution: 'Shift elements left and handle wrap-around.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int k;\n    \n    cout << "Enter rotation count: ";\n    cin >> k;\n    \n    k = k % n;  // Handle rotation > n\n    \n    // Rotate left by k\n    for (int i = 0; i < k; i++) {\n        int first = arr[0];\n        for (int j = 0; j < n - 1; j++) {\n            arr[j] = arr[j + 1];\n        }\n        arr[n - 1] = first;\n    }\n    \n    cout << "Rotated array: ";\n    for (int x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use modulo to handle k > n efficiently.'
},
//array
{
  id: 'cpp_arrays_1',
  topicId: 'cpp_arrays',
  question: 'Declare and initialize a one-dimensional integer array.',
  mathSolution: 'Array stores multiple elements of same type in contiguous memory.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    \n    for (int i = 0; i < 5; i++) {\n        cout << "arr[" << i << "] = " << arr[i] << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use curly braces to initialize array elements.'
},
{
  id: 'cpp_arrays_2',
  topicId: 'cpp_arrays',
  question: 'Access and modify array elements using index.',
  mathSolution: 'Array index starts at 0, last element at size-1.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    \n    cout << "First element: " << arr[0] << endl;\n    cout << "Third element: " << arr[2] << endl;\n    cout << "Last element: " << arr[4] << endl;\n    \n    arr[2] = 30;  // Modify third element\n    cout << "After modification, arr[2] = " << arr[2] << endl;\n    \n    return 0;\n}',
  hint: 'Valid index range: 0 to size-1; accessing out of bounds is undefined behavior.'
},
{
  id: 'cpp_arrays_3',
  topicId: 'cpp_arrays',
  question: 'Calculate sum of all elements in an array using loop.',
  mathSolution: 'Iterate through array and accumulate sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int sum = 0;\n    \n    for (int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    \n    cout << "Sum of array elements: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use sizeof(arr)/sizeof(arr[0]) to get array size.'
},
{
  id: 'cpp_arrays_4',
  topicId: 'cpp_arrays',
  question: 'Find largest element in array.',
  mathSolution: 'Initialize max with first element, compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34, 89, 56};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int max = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    \n    cout << "Largest element: " << max << endl;\n    \n    return 0;\n}',
  hint: 'Start max with first element; don\'t assume it\'s 0 (array may have negatives).'
},
{
  id: 'cpp_arrays_5',
  topicId: 'cpp_arrays',
  question: 'Find smallest element in array.',
  mathSolution: 'Initialize min with first element, compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34, 89, 56};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int min = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] < min) {\n            min = arr[i];\n        }\n    }\n    \n    cout << "Smallest element: " << min << endl;\n    \n    return 0;\n}',
  hint: 'min starts with arr[0] to handle all cases correctly.'
},
{
  id: 'cpp_arrays_6',
  topicId: 'cpp_arrays',
  question: 'Reverse an array in place using two-pointer technique.',
  mathSolution: 'Swap elements from start and end moving inward.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Original array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    for (int i = 0; i < size / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[size - 1 - i];\n        arr[size - 1 - i] = temp;\n    }\n    \n    cout << "Reversed array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Only need to iterate up to half of array length.'
},
{
  id: 'cpp_arrays_7',
  topicId: 'cpp_arrays',
  question: 'Copy one array to another using loop.',
  mathSolution: 'Iterate and copy each element to destination array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int source[] = {10, 20, 30, 40, 50};\n    int size = sizeof(source) / sizeof(source[0]);\n    int dest[size];\n    \n    for (int i = 0; i < size; i++) {\n        dest[i] = source[i];\n    }\n    \n    cout << "Source array: ";\n    for (int x : source) cout << x << " ";\n    cout << endl;\n    \n    cout << "Copied array: ";\n    for (int x : dest) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Use simple loop for copying; memcpy is faster but less type-safe.'
},
{
  id: 'cpp_arrays_8',
  topicId: 'cpp_arrays',
  question: 'Declare and initialize a 2D array (matrix).',
  mathSolution: '2D array is array of arrays, accessed with two indices.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][4] = {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12}\n    };\n    \n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 4; j++) {\n            cout << matrix[i][j] << " ";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: '2D array syntax: type name[rows][columns];'
},
{
  id: 'cpp_arrays_9',
  topicId: 'cpp_arrays',
  question: 'Calculate sum of all elements in 2D array.',
  mathSolution: 'Use nested loops to access each element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    int sum = 0;\n    \n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            sum += matrix[i][j];\n        }\n    }\n    \n    cout << "Sum of all elements: " << sum << endl;\n    \n    return 0;\n}',
  hint: 'Use nested loops for 2D array traversal.'
},
{
  id: 'cpp_arrays_10',
  topicId: 'cpp_arrays',
  question: 'Calculate sum of diagonal elements of a square matrix.',
  mathSolution: 'For square matrix, diagonal indices satisfy i == j.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    int primaryDiagonal = 0, secondaryDiagonal = 0;\n    \n    for (int i = 0; i < 3; i++) {\n        primaryDiagonal += matrix[i][i];\n        secondaryDiagonal += matrix[i][2 - i];\n    }\n    \n    cout << "Primary diagonal sum: " << primaryDiagonal << endl;\n    cout << "Secondary diagonal sum: " << secondaryDiagonal << endl;\n    \n    return 0;\n}',
  hint: 'Primary diagonal: i==j; Secondary diagonal: i+j == size-1.'
},
{
  id: 'cpp_arrays_11',
  topicId: 'cpp_arrays',
  question: 'Find smallest and second smallest element in array.',
  mathSolution: 'Track both min and second min during single pass.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 13, 1, 10, 34, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int first = INT_MAX, second = INT_MAX;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] < first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] < second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    \n    cout << "Smallest: " << first << endl;\n    cout << "Second smallest: " << second << endl;\n    \n    return 0;\n}',
  hint: 'Handle duplicates by checking arr[i] != first.'
},
{
  id: 'cpp_arrays_12',
  topicId: 'cpp_arrays',
  question: 'Find frequency of each element in array.',
  mathSolution: 'Use visited array to track counted elements.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 1, 4, 2, 5, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    vector<bool> visited(size, false);\n    \n    for (int i = 0; i < size; i++) {\n        if (visited[i]) continue;\n        \n        int count = 1;\n        for (int j = i + 1; j < size; j++) {\n            if (arr[i] == arr[j]) {\n                count++;\n                visited[j] = true;\n            }\n        }\n        cout << arr[i] << " appears " << count << " times" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use boolean visited array to avoid recounting.'
},
{
  id: 'cpp_arrays_13',
  topicId: 'cpp_arrays',
  question: 'Remove duplicates from sorted array.',
  mathSolution: 'Shift unique elements to front and track count.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 1, 2, 2, 3, 4, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int uniqueCount = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (i == 0 || arr[i] != arr[i - 1]) {\n            arr[uniqueCount++] = arr[i];\n        }\n    }\n    \n    cout << "Array after removing duplicates: ";\n    for (int i = 0; i < uniqueCount; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'For sorted arrays, duplicates are adjacent.'
},
{
  id: 'cpp_arrays_14',
  topicId: 'cpp_arrays',
  question: 'Rotate array to the left by k positions.',
  mathSolution: 'Use reversal algorithm or shift elements.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid reverse(int arr[], int start, int end) {\n    while (start < end) {\n        int temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++;\n        end--;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int k = 3;\n    \n    k = k % size;  // Handle k > size\n    \n    cout << "Original array: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    reverse(arr, 0, k - 1);\n    reverse(arr, k, size - 1);\n    reverse(arr, 0, size - 1);\n    \n    cout << "Rotated left by " << k << ": ";\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Three-reversal algorithm gives O(n) time, O(1) space.'
},
{
  id: 'cpp_arrays_15',
  topicId: 'cpp_arrays',
  question: 'Find missing number in array containing 1 to n.',
  mathSolution: 'Sum formula: expected sum - actual sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 4, 5, 6};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int n = size + 1;  // Since one number is missing\n    \n    int expectedSum = n * (n + 1) / 2;\n    int actualSum = 0;\n    \n    for (int i = 0; i < size; i++) {\n        actualSum += arr[i];\n    }\n    \n    int missing = expectedSum - actualSum;\n    cout << "Missing number: " << missing << endl;\n    \n    return 0;\n}',
  hint: 'Works for numbers from 1 to n with exactly one missing.'
},
{
  id: 'cpp_arrays_16',
  topicId: 'cpp_arrays',
  question: 'Find duplicate number in array (one duplicate).',
  mathSolution: 'Use XOR (a^a=0) or visited array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 3, 4, 2, 2};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    // Using XOR (for numbers 1 to n with one duplicate)\n    int xor1 = 0, xor2 = 0;\n    \n    for (int i = 0; i < size; i++) {\n        xor1 ^= arr[i];\n    }\n    \n    for (int i = 1; i <= size - 1; i++) {\n        xor2 ^= i;\n    }\n    \n    int duplicate = xor1 ^ xor2;\n    cout << \"Duplicate number: \" << duplicate << endl;\n    \n    return 0;\n}',
  hint: 'XOR of all numbers XOR XOR of 1..n gives duplicate.'
},
{
  id: 'cpp_arrays_17',
  topicId: 'cpp_arrays',
  question: 'Move all zeros to end of array preserving order of non-zero elements.',
  mathSolution: 'Track position for next non-zero element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {0, 1, 0, 3, 12, 0, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int nonZeroIndex = 0;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] != 0) {\n            arr[nonZeroIndex++] = arr[i];\n        }\n    }\n    \n    while (nonZeroIndex < size) {\n        arr[nonZeroIndex++] = 0;\n    }\n    \n    cout << \"After moving zeros: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Two-pointer approach writes non-zero elements to front.'
},
{
  id: 'cpp_arrays_18',
  topicId: 'cpp_arrays',
  question: 'Check if array is sorted in ascending order.',
  mathSolution: 'Check if each element is <= next element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    bool isSorted = true;\n    \n    for (int i = 0; i < size - 1; i++) {\n        if (arr[i] > arr[i + 1]) {\n            isSorted = false;\n            break;\n        }\n    }\n    \n    if (isSorted) {\n        cout << "Array is sorted in ascending order" << endl;\n    } else {\n        cout << "Array is NOT sorted" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Only need to check adjacent elements.'
},
{
  id: 'cpp_arrays_19',
  topicId: 'cpp_arrays',
  question: 'Find the second largest element in array.',
  mathSolution: 'Track largest and second largest in single pass.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 35, 1, 10, 34, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int first = INT_MIN, second = INT_MIN;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    \n    cout << "Largest: " << first << endl;\n    cout << "Second largest: " << second << endl;\n    \n    return 0;\n}',
  hint: 'Initialize with INT_MIN to handle negative numbers.'
},
{
  id: 'cpp_arrays_20',
  topicId: 'cpp_arrays',
  question: 'Find all pairs in array that sum to given target.',
  mathSolution: 'Use nested loops to check all pairs.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 7, 11, 15, 3, 6};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int target = 9;\n    \n    cout << \"Pairs that sum to \" << target << \":\\n\";\n    \n    for (int i = 0; i < size - 1; i++) {\n        for (int j = i + 1; j < size; j++) {\n            if (arr[i] + arr[j] == target) {\n                cout << \"(\" << arr[i] << \", \" << arr[j] << \")\" << endl;\n            }\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Brute force O(n²); can be optimized with hash map to O(n).'
},
{
  id: 'cpp_arrays_21',
  topicId: 'cpp_arrays',
  question: 'Find intersection of two arrays (common elements).',
  mathSolution: 'Compare elements from both arrays.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {3, 4, 5, 6, 7};\n    int size1 = sizeof(arr1) / sizeof(arr1[0]);\n    int size2 = sizeof(arr2) / sizeof(arr2[0]);\n    \n    vector<int> intersection;\n    \n    for (int i = 0; i < size1; i++) {\n        for (int j = 0; j < size2; j++) {\n            if (arr1[i] == arr2[j]) {\n                // Check if already in result\n                bool exists = false;\n                for (int k = 0; k < intersection.size(); k++) {\n                    if (intersection[k] == arr1[i]) {\n                        exists = true;\n                        break;\n                    }\n                }\n                if (!exists) {\n                    intersection.push_back(arr1[i]);\n                }\n                break;\n            }\n        }\n    }\n    \n    cout << \"Intersection: \";\n    for (int x : intersection) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'For sorted arrays, use two-pointer technique O(n).'
},
{
  id: 'cpp_arrays_22',
  topicId: 'cpp_arrays',
  question: 'Find union of two arrays (all unique elements from both).',
  mathSolution: 'Combine arrays and remove duplicates.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {3, 4, 5, 6, 7};\n    int size1 = sizeof(arr1) / sizeof(arr1[0]);\n    int size2 = sizeof(arr2) / sizeof(arr2[0]);\n    \n    vector<int> unionArr;\n    \n    // Add all from first array\n    for (int i = 0; i < size1; i++) {\n        unionArr.push_back(arr1[i]);\n    }\n    \n    // Add from second if not already present\n    for (int i = 0; i < size2; i++) {\n        bool found = false;\n        for (int j = 0; j < unionArr.size(); j++) {\n            if (unionArr[j] == arr2[i]) {\n                found = true;\n                break;\n            }\n        }\n        if (!found) {\n            unionArr.push_back(arr2[i]);\n        }\n    }\n    \n    cout << \"Union: \";\n    for (int x : unionArr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Union contains all unique elements from both arrays.'
},
{
  id: 'cpp_arrays_23',
  topicId: 'cpp_arrays',
  question: 'Find kth largest element in array (using selection algorithm).',
  mathSolution: 'Partial sorting or quick select.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int arr[] = {3, 2, 1, 5, 6, 4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int k = 2;\n    \n    // Sort in descending order\n    sort(arr, arr + size, greater<int>());\n    \n    cout << k << "th largest element: " << arr[k - 1] << endl;\n    \n    // Without full sort (using nth_element)\n    int arr2[] = {3, 2, 1, 5, 6, 4};\n    nth_element(arr2, arr2 + k - 1, arr2 + size, greater<int>());\n    cout << "Kth largest (nth_element): " << arr2[k - 1] << endl;\n    \n    return 0;\n}',
  hint: 'nth_element gives O(n) average time for kth element.'
},
{
  id: 'cpp_arrays_24',
  topicId: 'cpp_arrays',
  question: 'Find all leaders in array (element greater than all elements to its right).',
  mathSolution: 'Traverse from right, track current maximum.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {16, 17, 4, 3, 5, 2};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    vector<int> leaders;\n    int maxFromRight = arr[size - 1];\n    leaders.push_back(maxFromRight);\n    \n    for (int i = size - 2; i >= 0; i--) {\n        if (arr[i] >= maxFromRight) {\n            maxFromRight = arr[i];\n            leaders.push_back(maxFromRight);\n        }\n    }\n    \n    cout << \"Leaders: \";\n    for (int i = leaders.size() - 1; i >= 0; i--) {\n        cout << leaders[i] << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Rightmost element is always a leader.'
},
{
  id: 'cpp_arrays_25',
  topicId: 'cpp_arrays',
  question: 'Compute prefix sum array (running sum).',
  mathSolution: 'prefix[i] = prefix[i-1] + arr[i].',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int prefix[size];\n    \n    prefix[0] = arr[0];\n    for (int i = 1; i < size; i++) {\n        prefix[i] = prefix[i - 1] + arr[i];\n    }\n    \n    cout << "Original array: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    cout << \"Prefix sum array: \";\n    for (int x : prefix) cout << x << \" \";\n    cout << endl;\n    \n    // Range sum query: sum from l to r = prefix[r] - prefix[l-1]\n    int l = 1, r = 3;\n    int sum = prefix[r] - (l > 0 ? prefix[l - 1] : 0);\n    cout << \"Sum from index \" << l << \" to \" << r << \": \" << sum << endl;\n    \n    return 0;\n}',
  hint: 'Prefix sums enable O(1) range sum queries.'
},
{
  id: 'cpp_arrays_26',
  topicId: 'cpp_arrays',
  question: 'Find maximum difference between two elements (largest element - smallest).',
  mathSolution: 'Track minimum so far and max difference.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {2, 3, 10, 6, 4, 8, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int maxDiff = arr[1] - arr[0];\n    int minElement = arr[0];\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] - minElement > maxDiff) {\n            maxDiff = arr[i] - minElement;\n        }\n        if (arr[i] < minElement) {\n            minElement = arr[i];\n        }\n    }\n    \n    cout << \"Maximum difference: \" << maxDiff << endl;\n    \n    return 0;\n}',
  hint: 'Max difference requires larger element after smaller element.'
},
{
  id: 'cpp_arrays_27',
  topicId: 'cpp_arrays',
  question: 'Product of array except self (without division).',
  mathSolution: 'Use left product array and right product array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int result[size];\n    \n    // Left products\n    int left[size];\n    left[0] = 1;\n    for (int i = 1; i < size; i++) {\n        left[i] = left[i - 1] * arr[i - 1];\n    }\n    \n    // Right products\n    int right[size];\n    right[size - 1] = 1;\n    for (int i = size - 2; i >= 0; i--) {\n        right[i] = right[i + 1] * arr[i + 1];\n    }\n    \n    // Result = left * right\n    for (int i = 0; i < size; i++) {\n        result[i] = left[i] * right[i];\n    }\n    \n    cout << \"Product except self: \";\n    for (int x : result) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Space-optimized version uses single array for output.'
},
{
  id: 'cpp_arrays_28',
  topicId: 'cpp_arrays',
  question: 'Find subarray with given sum (positive numbers).',
  mathSolution: 'Use sliding window technique.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 4, 20, 3, 10, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int target = 33;\n    \n    int start = 0, currentSum = 0;\n    bool found = false;\n    \n    for (int end = 0; end < size; end++) {\n        currentSum += arr[end];\n        \n        while (currentSum > target && start < end) {\n            currentSum -= arr[start];\n            start++;\n        }\n        \n        if (currentSum == target) {\n            cout << \"Subarray found from index \" << start << \" to \" << end << endl;\n            found = true;\n            break;\n        }\n    }\n    \n    if (!found) {\n        cout << \"No subarray with given sum\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Sliding window works for arrays with positive numbers.'
},
{
  id: 'cpp_arrays_29',
  topicId: 'cpp_arrays',
  question: 'Find maximum sum of subarray of size k (sliding window).',
  mathSolution: 'Compute sum of first window, then slide.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int k = 4;\n    \n    if (k > size) {\n        cout << \"Invalid window size\" << endl;\n        return 0;\n    }\n    \n    int windowSum = 0;\n    for (int i = 0; i < k; i++) {\n        windowSum += arr[i];\n    }\n    \n    int maxSum = windowSum;\n    \n    for (int i = k; i < size; i++) {\n        windowSum = windowSum - arr[i - k] + arr[i];\n        if (windowSum > maxSum) {\n            maxSum = windowSum;\n        }\n    }\n    \n    cout << \"Maximum sum of subarray of size \" << k << \": \" << maxSum << endl;\n    \n    return 0;\n}',
  hint: 'Sliding window gives O(n) time instead of O(n*k).'
},
{
  id: 'cpp_arrays_30',
  topicId: 'cpp_arrays',
  question: 'Given an array, rearrange it so that arr[i] = i for valid indices, else -1.',
  mathSolution: 'Swap elements to correct positions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] >= 0 && arr[i] != i) {\n            // Swap to correct position\n            int temp = arr[arr[i]];\n            arr[arr[i]] = arr[i];\n            arr[i] = temp;\n        }\n    }\n    \n    // Fill remaining with -1\n    for (int i = 0; i < size; i++) {\n        if (arr[i] != i) {\n            arr[i] = -1;\n        }\n    }\n    \n    cout << \"Rearranged array: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Place elements at their correct index positions.'
},
{
  id: 'cpp_arrays_31',
  topicId: 'cpp_arrays',
  question: 'Find majority element (element appearing more than n/2 times).',
  mathSolution: 'Moore\'s voting algorithm.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {3, 3, 4, 2, 4, 4, 2, 4, 4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    // Find candidate\n    int candidate = arr[0];\n    int count = 1;\n    \n    for (int i = 1; i < size; i++) {\n        if (arr[i] == candidate) {\n            count++;\n        } else {\n            count--;\n            if (count == 0) {\n                candidate = arr[i];\n                count = 1;\n            }\n        }\n    }\n    \n    // Verify candidate\n    count = 0;\n    for (int i = 0; i < size; i++) {\n        if (arr[i] == candidate) count++;\n    }\n    \n    if (count > size / 2) {\n        cout << \"Majority element: \" << candidate << endl;\n    } else {\n        cout << \"No majority element\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Moore\'s voting algorithm runs in O(n) time, O(1) space.'
},
{
  id: 'cpp_arrays_32',
  topicId: 'cpp_arrays',
  question: 'Find the equilibrium index (where sum left = sum right).',
  mathSolution: 'Compute total sum, then iterate left sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {-7, 1, 5, 2, -4, 3, 0};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int totalSum = 0;\n    for (int i = 0; i < size; i++) {\n        totalSum += arr[i];\n    }\n    \n    int leftSum = 0;\n    bool found = false;\n    \n    for (int i = 0; i < size; i++) {\n        totalSum -= arr[i];\n        \n        if (leftSum == totalSum) {\n            cout << \"Equilibrium index: \" << i << endl;\n            found = true;\n        }\n        \n        leftSum += arr[i];\n    }\n    \n    if (!found) {\n        cout << \"No equilibrium index found\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Equilibrium index has left sum = right sum.'
},
{
  id: 'cpp_arrays_33',
  topicId: 'cpp_arrays',
  question: 'Segregate 0s and 1s in array.',
  mathSolution: 'Use two-pointer technique.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {0, 1, 0, 1, 0, 0, 1, 1, 1, 0};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int left = 0, right = size - 1;\n    \n    while (left < right) {\n        while (arr[left] == 0 && left < right) left++;\n        while (arr[right] == 1 && left < right) right--;\n        \n        if (left < right) {\n            arr[left] = 0;\n            arr[right] = 1;\n            left++;\n            right--;\n        }\n    }\n    \n    cout << \"Segregated array: \";\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Segregate 0s on left, 1s on right.'
},
{
  id: 'cpp_arrays_34',
  topicId: 'cpp_arrays',
  question: 'Find the triplet that sums to zero.',
  mathSolution: 'Sort array, then use two-pointer for each element.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int arr[] = {0, -1, 2, -3, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    sort(arr, arr + size);\n    \n    bool found = false;\n    \n    for (int i = 0; i < size - 2; i++) {\n        int left = i + 1;\n        int right = size - 1;\n        \n        while (left < right) {\n            int sum = arr[i] + arr[left] + arr[right];\n            \n            if (sum == 0) {\n                cout << \"Triplet: \" << arr[i] << \", \" << arr[left] << \", \" << arr[right] << endl;\n                found = true;\n                left++;\n                right--;\n            } else if (sum < 0) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n    }\n    \n    if (!found) {\n        cout << \"No triplet sums to zero\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Sorting enables O(n²) solution instead of O(n³).'
},
{
  id: 'cpp_arrays_35',
  topicId: 'cpp_arrays',
  question: 'Find the first repeating element in array.',
  mathSolution: 'Use nested loops or hash map.',
  codeSolution: '#include <iostream>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 5, 3, 4, 3, 5, 6};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    // Using hash set to track seen elements\n    unordered_set<int> seen;\n    int firstRepeating = -1;\n    \n    for (int i = size - 1; i >= 0; i--) {\n        if (seen.find(arr[i]) != seen.end()) {\n            firstRepeating = arr[i];\n        } else {\n            seen.insert(arr[i]);\n        }\n    }\n    \n    if (firstRepeating != -1) {\n        cout << \"First repeating element: \" << firstRepeating << endl;\n    } else {\n        cout << \"No repeating element found\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Traverse from right to find first element that repeats.'
},
{
  id: 'cpp_arrays_36',
  topicId: 'cpp_arrays',
  question: 'Transpose a matrix (convert rows to columns).',
  mathSolution: 'Swap arr[i][j] with arr[j][i] for i < j.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    cout << \"Original matrix:\\n\";\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // Transpose\n    for (int i = 0; i < 3; i++) {\n        for (int j = i + 1; j < 3; j++) {\n            int temp = matrix[i][j];\n            matrix[i][j] = matrix[j][i];\n            matrix[j][i] = temp;\n        }\n    }\n    \n    cout << \"\\nTransposed matrix:\\n\";\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            cout << matrix[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'For square matrix, swap elements above diagonal with below.'
},
{
  id: 'cpp_arrays_37',
  topicId: 'cpp_arrays',
  question: 'Multiply two matrices.',
  mathSolution: 'Result[i][j] = sum over k (A[i][k] * B[k][j]).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int A[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int B[3][2] = {{7, 8}, {9, 10}, {11, 12}};\n    int result[2][2] = {0};\n    \n    // Matrix multiplication\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            for (int k = 0; k < 3; k++) {\n                result[i][j] += A[i][k] * B[k][j];\n            }\n        }\n    }\n    \n    cout << \"Product matrix:\\n\";\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            cout << result[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Matrix multiplication: columns of first must equal rows of second.'
},
{
  id: 'cpp_arrays_38',
  topicId: 'cpp_arrays',
  question: 'Determine if two 2D arrays are equal.',
  mathSolution: 'Compare each element of both matrices.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nbool areEqual(int A[3][3], int B[3][3]) {\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            if (A[i][j] != B[i][j]) return false;\n        }\n    }\n    return true;\n}\n\nint main() {\n    int A[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    int B[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n    int C[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 0}};\n    \n    if (areEqual(A, B)) {\n        cout << \"A and B are equal\" << endl;\n    } else {\n        cout << \"A and B are not equal\" << endl;\n    }\n    \n    if (areEqual(A, C)) {\n        cout << \"A and C are equal\" << endl;\n    } else {\n        cout << \"A and C are not equal\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Matrices are equal if all corresponding elements are equal.'
},
{
  id: 'cpp_arrays_39',
  topicId: 'cpp_arrays',
  question: 'Create a jagged array (array of arrays with different sizes) using dynamic allocation.',
  mathSolution: 'Allocate array of pointers, then allocate each row.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows = 3;\n    int* jagged[3];\n    int sizes[3] = {2, 3, 4};\n    \n    // Allocate memory\n    for (int i = 0; i < rows; i++) {\n        jagged[i] = new int[sizes[i]];\n        for (int j = 0; j < sizes[i]; j++) {\n            jagged[i][j] = i * 10 + j;\n        }\n    }\n    \n    // Print jagged array\n    for (int i = 0; i < rows; i++) {\n        cout << \"Row \" << i << \" (size \" << sizes[i] << \"): \";\n        for (int j = 0; j < sizes[i]; j++) {\n            cout << jagged[i][j] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // Free memory\n    for (int i = 0; i < rows; i++) {\n        delete[] jagged[i];\n    }\n    \n    return 0;\n}',
  hint: 'Jagged arrays require dynamic memory allocation for each row.'
},
{
  id: 'cpp_arrays_40',
  topicId: 'cpp_arrays',
  question: 'Find the difference between maximum and minimum element in array.',
  mathSolution: 'Find max and min, then subtract.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    int arr[] = {12, 3, 45, 7, 89, 23, 1};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    \n    int maxVal = INT_MIN, minVal = INT_MAX;\n    \n    for (int i = 0; i < size; i++) {\n        if (arr[i] > maxVal) maxVal = arr[i];\n        if (arr[i] < minVal) minVal = arr[i];\n    }\n    \n    int difference = maxVal - minVal;\n    \n    cout << \"Maximum: \" << maxVal << endl;\n    cout << \"Minimum: \" << minVal << endl;\n    cout << \"Difference: \" << difference << endl;\n    \n    return 0;\n}',
  hint: 'Range = max - min.'
},
//Input&Output

{
  id: 'cpp_io_1',
  topicId: 'cpp_io',
  question: 'Write a program that takes a string as input from the user and prints "Hello, [name]!" where [name] is the input string.',
  mathSolution: 'Use cin to read string input, then cout to print the greeting.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    cin >> name;\n    cout << "Hello, " << name << "!" << endl;\n    return 0;\n}',
  hint: 'Use cin >> variable to read input, cout << to print output.'
},
{
  id: 'cpp_io_2',
  topicId: 'cpp_io',
  question: 'Write a program that takes an integer input from the user and prints "You entered: [number]".',
  mathSolution: 'Read integer using cin, then display using cout.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << "You entered: " << num << endl;\n    return 0;\n}',
  hint: 'Declare an int variable, use cin >> to read, cout << to output.'
},
{
  id: 'cpp_io_3',
  topicId: 'cpp_io',
  question: 'Write a program that takes three integers as input (space-separated) and prints their sum.',
  mathSolution: 'Chain cin operators to read three integers (cin >> a >> b >> c), then add them.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    cout << a + b + c << endl;\n    return 0;\n}',
  hint: 'Chain >> operators: cin >> a >> b >> c reads three values at once.'
},
{
  id: 'cpp_io_4',
  topicId: 'cpp_io',
  question: 'Write a program that takes two integers as input and prints them on separate lines using endl.',
  mathSolution: 'Use cin to read two integers, then cout with endl for newlines.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin >> x >> y;\n    cout << x << endl;\n    cout << y << endl;\n    return 0;\n}',
  hint: 'endl adds newline and flushes output buffer.'
},
{
  id: 'cpp_io_5',
  topicId: 'cpp_io',
  question: 'Write a program that takes two integers as input and prints them on the same line separated by a space.',
  mathSolution: 'Use cout with space between variables.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a << " " << b << endl;\n    return 0;\n}',
  hint: 'Use endl for newline at the end of output.'
},
{
  id: 'cpp_io_6',
  topicId: 'cpp_io',
  question: 'Write a program that takes a full name (with spaces) as input and prints "Welcome, [full name]!".',
  mathSolution: 'Use getline(cin, string) to read string with spaces.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string fullName;\n    getline(cin, fullName);\n    cout << "Welcome, " << fullName << "!" << endl;\n    return 0;\n}',
  hint: 'cin >> stops at space; getline() reads entire line including spaces.'
},
{
  id: 'cpp_io_7',
  topicId: 'cpp_io',
  question: 'Write a program that first reads an integer (age), then reads a string (name) with spaces, and prints "[name] is [age] years old".',
  mathSolution: 'Use cin.ignore() after reading integer to discard newline before getline().',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int age;\n    string name;\n    cin >> age;\n    cin.ignore();\n    getline(cin, name);\n    cout << name << " is " << age << " years old" << endl;\n    return 0;\n}',
  hint: 'cin leaves newline in buffer; use cin.ignore() before getline().'
},
{
  id: 'cpp_io_8',
  topicId: 'cpp_io',
  question: 'Write a program that reads a number, then ignores the next 100 characters or until newline, then reads a string and prints both.',
  mathSolution: 'Use cin.ignore(100, \'\\n\') to skip unwanted characters.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    int num;\n    string text;\n    cin >> num;\n    cin.ignore(100, \'\\n\');\n    getline(cin, text);\n    cout << num << " - " << text << endl;\n    return 0;\n}',
  hint: 'cin.ignore(n, ch) skips n chars or until delimiter character.'
},
{
  id: 'cpp_io_9',
  topicId: 'cpp_io',
  question: 'Write a program that reads a single character using cin.get() and prints its ASCII value.',
  mathSolution: 'cin.get() reads one character including whitespace; cast to int for ASCII.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    ch = cin.get();\n    cout << int(ch) << endl;\n    return 0;\n}',
  hint: 'cin.get() reads any character. Use int(ch) to get ASCII value.'
},
{
  id: 'cpp_io_10',
  topicId: 'cpp_io',
  question: 'Write a program that reads a line into a C-style character array (max 100 chars) using cin.getline() and prints it.',
  mathSolution: 'cin.getline(char_array, size) reads line into char array.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char buffer[100];\n    cin.getline(buffer, 100);\n    cout << buffer << endl;\n    return 0;\n}',
  hint: 'cin.getline() is for C-style strings; buffer must have enough space.'
},
{
  id: 'cpp_io_11',
  topicId: 'cpp_io',
  question: 'Write a program that reads a character and prints it 5 times in a row using cout.put().',
  mathSolution: 'Read char with cin, then use cout.put() in a loop.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cin >> ch;\n    for (int i = 0; i < 5; i++) {\n        cout.put(ch);\n    }\n    cout.put(\'\\n\');\n    return 0;\n}',
  hint: 'cout.put() outputs a single character to console.'
},
{
  "id": "cpp_io_12",
  "topicId": "cpp_io",
  "question": "Write a program that reads a string and prints only the first 5 characters using cout.write().",
  "mathSolution": "cout.write(const char*, size) writes fixed number of characters.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    getline(cin, str);\n    if (str.length() >= 5) {\n        cout.write(str.c_str(), 5);\n        cout << endl;\n    } else {\n        cout << str << endl;\n    }\n    return 0;\n}",
  "hint": "cout.write() outputs raw characters. Use str.c_str() to get C-string."
},
{
  id: 'cpp_io_13',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer. If input is invalid, display "Invalid input!", otherwise display the number.',
  mathSolution: 'Check cin.fail() after reading to detect invalid input.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    if (cin.fail()) {\n        cout << "Invalid input!" << endl;\n    } else {\n        cout << num << endl;\n    }\n    return 0;\n}',
  hint: 'cin.fail() returns true if input operation failed (e.g., letter instead of number).'
},
{
  id: 'cpp_io_14',
  topicId: 'cpp_io',
  question: 'Write a program that keeps asking for a positive number until user enters one, then displays the number.',
  mathSolution: 'Use loop with cin.clear() and cin.ignore() to recover from invalid input.',
  codeSolution: '#include <iostream>\n#include <limits>\nusing namespace std;\n\nint main() {\n    int num;\n    while (true) {\n        cin >> num;\n        if (cin.fail()) {\n            cin.clear();\n            cin.ignore(numeric_limits<streamsize>::max(), \'\\n\');\n        } else if (num > 0) {\n            cout << num << endl;\n            break;\n        }\n    }\n    return 0;\n}',
  hint: 'cin.clear() clears error flags; cin.ignore() discards bad input.'
},
{
  id: 'cpp_io_15',
  topicId: 'cpp_io',
  question: 'Write a program that reads integers until EOF (Ctrl+D/Ctrl+Z) and prints their sum.',
  mathSolution: 'Use while(cin >> variable) to read until EOF.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, sum = 0;\n    while (cin >> num) {\n        sum += num;\n    }\n    cout << sum << endl;\n    return 0;\n}',
  hint: 'cin >> variable returns false at end-of-file (Ctrl+D/Ctrl+Z).'
},
{
  id: 'cpp_io_16',
  topicId: 'cpp_io',
  question: 'Write a program that reads a boolean value (0 or 1) and prints it as "true" or "false" using boolalpha.',
  mathSolution: 'Use boolalpha manipulator to print true/false instead of 1/0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool flag;\n    cin >> flag;\n    cout << boolalpha << flag << endl;\n    return 0;\n}',
  hint: 'boolalpha makes boolean output readable as true/false.'
},
{
  id: 'cpp_io_17',
  topicId: 'cpp_io',
  question: 'Write a program that reads a hexadecimal number (like FF or 1A) and prints its decimal value.',
  mathSolution: 'Use hex manipulator with cin to read hexadecimal.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int hexNum;\n    cin >> hex >> hexNum;\n    cout << dec << hexNum << endl;\n    return 0;\n}',
  hint: 'cin >> hex reads hexadecimal numbers; dec converts back to decimal.'
},
{
  id: 'cpp_io_18',
  topicId: 'cpp_io',
  question: 'Write a program that reads a floating-point number and prints it with exactly 2 decimal places.',
  mathSolution: 'Use fixed and setprecision(2) for decimal precision.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double num;\n    cin >> num;\n    cout << fixed << setprecision(2) << num << endl;\n    return 0;\n}',
  hint: 'fixed makes setprecision set decimal places, not significant digits.'
},
{
  id: 'cpp_io_19',
  topicId: 'cpp_io',
  question: 'Write a program that reads a string and prints it right-aligned in a field of width 10 using setw.',
  mathSolution: 'Use setw(10) and right manipulator for right alignment.',
  codeSolution: '#include <iostream>\n#include <iomanip>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text;\n    cin >> text;\n    cout << right << setw(10) << text << endl;\n    return 0;\n}',
  hint: 'setw() sets field width; right aligns text within that width.'
},
{
  id: 'cpp_io_20',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer and prints its hexadecimal value in uppercase.',
  mathSolution: 'Use hex and uppercase manipulators for uppercase hex output.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin >> num;\n    cout << hex << uppercase << num << endl;\n    return 0;\n}',
  hint: 'hex changes base, uppercase makes hex letters uppercase.'
},
{
  id: 'cpp_io_21',
  topicId: 'cpp_io',
  question: 'Write a program that reads a double and prints it with showpoint to display decimal point even for whole numbers.',
  mathSolution: 'Use showpoint manipulator to force decimal point display.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double num;\n    cin >> num;\n    cout << showpoint << num << endl;\n    return 0;\n}',
  hint: 'showpoint ensures decimal point and trailing zeros are displayed.'
},
{
  id: 'cpp_io_22',
  topicId: 'cpp_io',
  question: 'Write a program that reads exactly 10 characters using cin.read() and prints how many bytes were read using cin.gcount().',
  mathSolution: 'cin.read(buffer, size) reads raw binary data; gcount() returns bytes read.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char buffer[100];\n    cin.read(buffer, 10);\n    cout << cin.gcount() << endl;\n    return 0;\n}',
  hint: 'cin.gcount() returns number of characters read by last unformatted input.'
},
{
  "id": "cpp_io_23",
  "topicId": "cpp_io",
  "question": "Write a program that asks the user to enter a sentence, then uses cout.write() to display the first 10 characters of that sentence. If the sentence has fewer than 10 characters, display the entire sentence.",
  "mathSolution": "Read a full line using cin.getline(), calculate the number of characters to write (min of 10 and string length), then use cout.write() with that length.",
  "codeSolution": "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    char sentence[100];\n    \n    cout << \"Enter a sentence: \";\n    cin.getline(sentence, 100);\n    \n    int len = strlen(sentence);\n    int charsToWrite = (len < 10) ? len : 10;\n    \n    cout << \"First \" << charsToWrite << \" characters: \";\n    cout.write(sentence, charsToWrite);\n    cout << endl;\n    \n    return 0;\n}",
  "hint": "Use cin.getline() to read spaces. strlen() from <cstring> gives string length. cout.write(char*, length) writes exact number of characters without needing null terminator."
},
{
  id: 'cpp_io_24',
  topicId: 'cpp_io',
  question: 'Write a program that reads input. If the first character is a digit, read and print the number; otherwise read and print the word.',
  mathSolution: 'Use cin.peek() to look at next character without extracting it.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char ch = cin.peek();\n    if (isdigit(ch)) {\n        int num;\n        cin >> num;\n        cout << num << endl;\n    } else {\n        string word;\n        cin >> word;\n        cout << word << endl;\n    }\n    return 0;\n}',
  hint: 'peek() lets you look at next character without consuming it. Use isdigit() to check if it is a number.'
},
{
  id: 'cpp_io_25',
  topicId: 'cpp_io',
  question: 'Write a program that reads a character, puts it back, then reads a string and prints it.',
  mathSolution: 'cin.putback(ch) puts character back into input buffer.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    char ch;\n    ch = cin.get();\n    cin.putback(ch);\n    string str;\n    cin >> str;\n    cout << str << endl;\n    return 0;\n}',
  hint: 'putback() allows unreading characters to re-parse input.'
},
{
  id: 'cpp_io_26',
  topicId: 'cpp_io',
  question: 'Write a program that reads a string and uses flush to immediately output each character with a 100ms delay.',
  mathSolution: 'Use flush to force output buffer write without newline.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <chrono>\n#include <thread>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    for (char c : text) {\n        cout << c << flush;\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'flush forces immediate output of buffered characters.'
},
{
  id: 'cpp_io_27',
  topicId: 'cpp_io',
  question: 'Write a program that uses ws manipulator to skip whitespace before reading a character and prints it.',
  mathSolution: 'ws skips leading whitespace when reading input.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cin >> ws;\n    ch = cin.get();\n    cout << ch << endl;\n    return 0;\n}',
  hint: 'ws skips whitespace characters (space, tab, newline).'
},
{
  id: 'cpp_io_28',
  topicId: 'cpp_io',
  question: 'Write a program that reads 3 prices (floating-point numbers), calculates total, and prints total with exactly 2 decimal places.',
  mathSolution: 'Use fixed and setprecision(2) for currency formatting.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double p1, p2, p3;\n    cin >> p1 >> p2 >> p3;\n    double total = p1 + p2 + p3;\n    cout << fixed << setprecision(2) << total << endl;\n    return 0;\n}',
  hint: 'Currency formatting typically uses 2 decimal places with fixed.'
},
{
  id: 'cpp_io_29',
  topicId: 'cpp_io',
  question: 'Write a program that reads name (string), age (int), and GPA (double) and prints them in a formatted table row (name left-aligned width 15, age width 10 right-aligned, GPA width 10 right-aligned with 2 decimals).',
  mathSolution: 'Use setw, left, right, setprecision, fixed together.',
  codeSolution: '#include <iostream>\n#include <iomanip>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    double gpa;\n    cin >> name >> age >> gpa;\n    cout << left << setw(15) << name;\n    cout << right << setw(10) << age;\n    cout << fixed << setprecision(2) << setw(10) << gpa << endl;\n    return 0;\n}',
  hint: 'Use setw() for column width, left/right for alignment, fixed and setprecision for decimals.'
},
{
  id: 'cpp_io_30',
  topicId: 'cpp_io',
  question: 'Write a program that reads multiple lines of input until EOF and prints them with line numbers.',
  mathSolution: 'while(getline(cin, line)) reads until EOF.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    int lineNum = 1;\n    while (getline(cin, line)) {\n        cout << lineNum++ << ": " << line << endl;\n    }\n    return 0;\n}',
  hint: 'getline() returns false on EOF (Ctrl+D/Ctrl+Z), perfect for reading until end.'
},
{
  id: 'cpp_io_31',
  topicId: 'cpp_io',
  question: 'Write a program that reads two integers and uses cerr to output error message if division by zero occurs, otherwise outputs the quotient.',
  mathSolution: 'cerr outputs error messages without buffering.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    if (b == 0) {\n        cerr << "Error: Division by zero!" << endl;\n    } else {\n        cout << a / b << endl;\n    }\n    return 0;\n}',
  hint: 'cerr is unbuffered and should be used for error messages.'
},
{
  id: 'cpp_io_32',
  topicId: 'cpp_io',
  question: 'Write a program that prompts the user to enter a number n, then uses clog to log "Processing step i" for i from 1 to n.',
  mathSolution: 'clog is buffered like cout but for logging messages.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        clog << "Processing step " << i << endl;\n    }\n    return 0;\n}',
  hint: 'clog uses buffering, making it efficient for many log messages. Use clog for logging messages that you don\'t need to appear immediately.'
},
{
  id: 'cpp_io_33',
  topicId: 'cpp_io',
  question: 'Write a program that reads an integer. If input is invalid, clear the error and sync the buffer, then read a character and print it.',
  mathSolution: 'cin.sync() discards unread characters in buffer.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    char ch;\n    cin >> num;\n    if (cin.fail()) {\n        cin.clear();\n        cin.sync();\n    }\n    cin >> ch;\n    cout << ch << endl;\n    return 0;\n}',
  hint: 'cin.sync() clears input buffer; use after clear() to discard bad input.'
},
{
  id: 'cpp_io_34',
  topicId: 'cpp_io',
  question: 'Write a program that unties cin from cout, reads an integer, then reties and prints it.',
  mathSolution: 'cin.tie() ensures cout is flushed before cin reads. Untying can affect prompt display.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cin.tie(nullptr);\n    cin >> num;\n    cin.tie(&cout);\n    cout << num << endl;\n    return 0;\n}',
  hint: 'tie() controls stream synchronization; nullptr disables automatic flush.'
},
{
  id: 'cpp_io_35',
  topicId: 'cpp_io',
  question: 'Write a program that reads a double and uses cout.precision() and cout.width() to format output with 3 digits precision and width 10 filled with *.',
  mathSolution: 'Member functions provide alternative to manipulators.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double num;\n    cin >> num;\n    cout.precision(3);\n    cout.width(10);\n    cout.fill(\'*\');\n    cout << num << endl;\n    return 0;\n}',
  hint: 'Member functions persist until changed, unlike setw().'
},
{
  id: 'cpp_io_36',
  topicId: 'cpp_io',
  question: 'Write a program that reads two hexadecimal numbers and prints their sum in decimal.',
  mathSolution: 'Use hex manipulator with cin to read hexadecimal numbers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> hex >> a >> b;\n    cout << dec << a + b << endl;\n    return 0;\n}',
  hint: 'Use hex with cin to parse hexadecimal input (e.g., FF, 1A).'
},
{
  id: 'cpp_io_37',
  topicId: 'cpp_io',
  question: 'Write a program that reads "true" or "false" as boolean input using boolalpha and prints the opposite value.',
  mathSolution: 'cin >> boolalpha reads "true"/"false" as boolean values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool flag;\n    cin >> boolalpha >> flag;\n    cout << boolalpha << !flag << endl;\n    return 0;\n}',
  hint: 'boolalpha allows reading "true"/"false" strings directly.'
},
{
  id: 'cpp_io_38',
  topicId: 'cpp_io',
  question: 'Write a program that reads a line using getline and then extracts individual words from that line using stringstream, printing each word on a new line.',
  mathSolution: 'Use stringstream to parse space-separated words from a line.',
  codeSolution: '#include <iostream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    string word;\n    while (ss >> word) {\n        cout << word << endl;\n    }\n    return 0;\n}',
  hint: 'stringstream allows string to be treated as an input stream.'
},
{
  id: 'cpp_io_39',
  topicId: 'cpp_io',
  question: 'Write a program that reads a CSV line (comma-separated values like: 10,20,30,40) and prints each value on a new line.',
  mathSolution: 'Use getline with delimiter to parse CSV.',
  codeSolution: '#include <iostream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string line;\n    getline(cin, line);\n    stringstream ss(line);\n    string value;\n    while (getline(ss, value, \',\')) {\n        cout << value << endl;\n    }\n    return 0;\n}',
  hint: 'getline with third parameter (delimiter) parses CSV files.'
},
{
  id: 'cpp_io_40',
  topicId: 'cpp_io',
  question: 'Write a program that reads a string and uses unitbuf to flush after every character output, printing each character with a 100ms delay.',
  mathSolution: 'unitbuf flushes after every output operation.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <chrono>\n#include <thread>\nusing namespace std;\n\nint main() {\n    string text;\n    getline(cin, text);\n    cout << unitbuf;\n    for (char c : text) {\n        cout << c;\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n    cout << nounitbuf << endl;\n    return 0;\n}',
  hint: 'unitbuf ensures output appears immediately after each write.'
},
//conditional Statement
{
  id: 'cpp_conditionals_1',
  topicId: 'cpp_conditionals',
  question: 'Use if statement to check if a number is positive.',
  mathSolution: 'if statement executes block when condition is true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 10;\n    if (num > 0) {\n        cout << "Number is positive" << endl;\n    }\n    return 0;\n}',
  hint: 'if (condition) { // code } executes only when condition is true.'
},
{
  id: 'cpp_conditionals_2',
  topicId: 'cpp_conditionals',
  question: 'Use if-else statement for two-way branching.',
  mathSolution: 'if-else executes one block for true, another for false.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = -5;\n    if (num >= 0) {\n        cout << "Number is non-negative" << endl;\n    } else {\n        cout << "Number is negative" << endl;\n    }\n    return 0;\n}',
  hint: 'if-else provides alternative execution path.'
},
{
  id: 'cpp_conditionals_3',
  topicId: 'cpp_conditionals',
  question: 'Use if-else if-else ladder for multiple conditions.',
  mathSolution: 'Chain else-if for mutually exclusive conditions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        cout << "Grade: A" << endl;\n    } else if (score >= 80) {\n        cout << "Grade: B" << endl;\n    } else if (score >= 70) {\n        cout << "Grade: C" << endl;\n    } else if (score >= 60) {\n        cout << "Grade: D" << endl;\n    } else {\n        cout << "Grade: F" << endl;\n    }\n    return 0;\n}',
  hint: 'Only first true condition executes; order matters.'
},
{
  id: 'cpp_conditionals_4',
  topicId: 'cpp_conditionals',
  question: 'Use nested if statements for multi-level conditions.',
  mathSolution: 'Place if statements inside other if statements.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    bool hasLicense = true;\n    \n    if (age >= 18) {\n        cout << "Age requirement met" << endl;\n        if (hasLicense) {\n            cout << "Can drive a car" << endl;\n        } else {\n            cout << "Need to get a license first" << endl;\n        }\n    } else {\n        cout << "Too young to drive" << endl;\n    }\n    return 0;\n}',
  hint: 'Nested if creates hierarchical decision making.'
},
{
  id: 'cpp_conditionals_5',
  topicId: 'cpp_conditionals',
  question: 'Use ternary operator for simple conditional assignment.',
  mathSolution: 'condition ? true_value : false_value',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    int max = (a > b) ? a : b;\n    \n    cout << "Maximum: " << max << endl;\n    \n    // Nested ternary\n    int x = 5;\n    string result = (x > 0) ? "positive" : (x < 0) ? "negative" : "zero";\n    cout << "x is " << result << endl;\n    \n    return 0;\n}',
  hint: 'Ternary operator is shorthand for simple if-else.'
},
{
  id: 'cpp_conditionals_6',
  topicId: 'cpp_conditionals',
  question: 'Use switch statement for multi-way branching.',
  mathSolution: 'switch compares integer/enum value against cases.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int day = 3;\n    \n    switch(day) {\n        case 1:\n            cout << "Monday" << endl;\n            break;\n        case 2:\n            cout << "Tuesday" << endl;\n            break;\n        case 3:\n            cout << "Wednesday" << endl;\n            break;\n        case 4:\n            cout << "Thursday" << endl;\n            break;\n        case 5:\n            cout << "Friday" << endl;\n            break;\n        case 6:\n            cout << "Saturday" << endl;\n            break;\n        case 7:\n            cout << "Sunday" << endl;\n            break;\n        default:\n            cout << "Invalid day" << endl;\n    }\n    return 0;\n}',
  hint: 'break prevents fall-through; default handles unmatched values.'
},
{
  id: 'cpp_conditionals_7',
  topicId: 'cpp_conditionals',
  question: 'Use switch with character cases.',
  mathSolution: 'switch works with char types as well.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade;\n    cout << "Enter grade (A/B/C/D/F): ";\n    cin >> grade;\n    \n    switch(grade) {\n        case \'A\':\n        case \'a\':\n            cout << "Excellent!" << endl;\n            break;\n        case \'B\':\n        case \'b\':\n            cout << "Good job!" << endl;\n            break;\n        case \'C\':\n        case \'c\':\n            cout << "Satisfactory" << endl;\n            break;\n        case \'D\':\n        case \'d\':\n            cout << "Need improvement" << endl;\n            break;\n        case \'F\':\n        case \'f\':\n            cout << "Failed" << endl;\n            break;\n        default:\n            cout << "Invalid grade" << endl;\n    }\n    return 0;\n}',
  hint: 'Multiple cases can share the same code block.'
},
{
  id: 'cpp_conditionals_8',
  topicId: 'cpp_conditionals',
  question: 'Use logical AND (&&) for multiple conditions.',
  mathSolution: '&& returns true only when both conditions are true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    bool hasID = true;\n    \n    if (age >= 21 && hasID) {\n        cout << "You can purchase alcohol" << endl;\n    } else {\n        cout << "Cannot purchase alcohol" << endl;\n    }\n    \n    int year = 2024;\n    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {\n        cout << year << " is a leap year" << endl;\n    }\n    \n    return 0;\n}',
  hint: '&& short-circuits: if first false, second not evaluated.'
},
{
  id: 'cpp_conditionals_9',
  topicId: 'cpp_conditionals',
  question: 'Use logical OR (||) for alternative conditions.',
  mathSolution: '|| returns true if at least one condition is true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cout << "Enter a character: ";\n    cin >> ch;\n    \n    if (ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n        ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        cout << ch << " is a vowel" << endl;\n    } else if ((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\')) {\n        cout << ch << " is a consonant" << endl;\n    } else {\n        cout << ch << " is not a letter" << endl;\n    }\n    \n    return 0;\n}',
  hint: '|| short-circuits: if first true, second not evaluated.'
},
{
  id: 'cpp_conditionals_10',
  topicId: 'cpp_conditionals',
  question: 'Use logical NOT (!) to negate condition.',
  mathSolution: '! reverses boolean value (true becomes false, false becomes true).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool isWeekend = false;\n    \n    if (!isWeekend) {\n        cout << "Go to work" << endl;\n    } else {\n        cout << "Relax" << endl;\n    }\n    \n    int x = 0;\n    if (!x) {\n        cout << "x is zero" << endl;\n    }\n    \n    bool loggedIn = false;\n    if (!loggedIn) {\n        cout << "Please log in" << endl;\n    }\n    \n    return 0;\n}',
  hint: '! can be used to check zero, null, or false conditions.'
},
{
  id: 'cpp_conditionals_11',
  topicId: 'cpp_conditionals',
  question: 'Check even or odd number using modulus operator.',
  mathSolution: 'num % 2 == 0 means even, odd otherwise.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num % 2 == 0) {\n        cout << num << " is even" << endl;\n    } else {\n        cout << num << " is odd" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Even numbers divide by 2 with remainder 0.'
},
{
  id: 'cpp_conditionals_12',
  topicId: 'cpp_conditionals',
  question: 'Check if a number is divisible by another using % operator.',
  mathSolution: 'a % b == 0 means a is divisible by b.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num, divisor;\n    cout << "Enter number and divisor: ";\n    cin >> num >> divisor;\n    \n    if (divisor == 0) {\n        cout << "Cannot divide by zero" << endl;\n    } else if (num % divisor == 0) {\n        cout << num << " is divisible by " << divisor << endl;\n    } else {\n        cout << num << " is NOT divisible by " << divisor << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Always check divisor not zero before using %.'
},
{
  id: 'cpp_conditionals_13',
  topicId: 'cpp_conditionals',
  question: 'Check if a year is leap year using nested conditions.',
  mathSolution: 'Leap year: divisible by 4, but not by 100 unless also divisible by 400.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int year;\n    cout << "Enter year: ";\n    cin >> year;\n    \n    if (year % 4 == 0) {\n        if (year % 100 == 0) {\n            if (year % 400 == 0) {\n                cout << year << " is a leap year" << endl;\n            } else {\n                cout << year << " is not a leap year" << endl;\n            }\n        } else {\n            cout << year << " is a leap year" << endl;\n        }\n    } else {\n        cout << year << " is not a leap year" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Leap year conditions: (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0).'
},
{
  id: 'cpp_conditionals_14',
  topicId: 'cpp_conditionals',
  question: 'Find largest of three numbers using if-else.',
  mathSolution: 'Compare numbers sequentially to find maximum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cout << "Enter three numbers: ";\n    cin >> a >> b >> c;\n    \n    int max;\n    if (a >= b && a >= c) {\n        max = a;\n    } else if (b >= a && b >= c) {\n        max = b;\n    } else {\n        max = c;\n    }\n    \n    cout << "Largest number: " << max << endl;\n    \n    return 0;\n}',
  hint: 'Compare each number with others to find maximum.'
},
{
  id: 'cpp_conditionals_15',
  topicId: 'cpp_conditionals',
  question: 'Check if a character is uppercase or lowercase.',
  mathSolution: 'Use ASCII range checks (A-Z: 65-90, a-z: 97-122).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cout << "Enter a character: ";\n    cin >> ch;\n    \n    if (ch >= \'A\' && ch <= \'Z\') {\n        cout << ch << " is uppercase" << endl;\n    } else if (ch >= \'a\' && ch <= \'z\') {\n        cout << ch << " is lowercase" << endl;\n    } else if (ch >= \'0\' && ch <= \'9\') {\n        cout << ch << " is a digit" << endl;\n    } else {\n        cout << ch << " is a special character" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Characters are compared using their ASCII values.'
},
{
  id: 'cpp_conditionals_16',
  topicId: 'cpp_conditionals',
  question: 'Check if three sides can form a valid triangle.',
  mathSolution: 'Triangle inequality: sum of any two sides > third side.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b, c;\n    cout << "Enter three sides: ";\n    cin >> a >> b >> c;\n    \n    if (a + b > c && b + c > a && a + c > b) {\n        cout << "Valid triangle" << endl;\n        \n        if (a == b && b == c) {\n            cout << "Equilateral triangle" << endl;\n        } else if (a == b || b == c || a == c) {\n            cout << "Isosceles triangle" << endl;\n        } else {\n            cout << "Scalene triangle" << endl;\n        }\n    } else {\n        cout << "Invalid triangle" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Triangle inequality must hold for all three combinations.'
},
{
  id: 'cpp_conditionals_17',
  topicId: 'cpp_conditionals',
  question: 'Use conditional operator for min/max calculation.',
  mathSolution: 'Ternary operator provides concise min/max.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20, z = 15;\n    \n    int max = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);\n    int min = (x < y) ? ((x < z) ? x : z) : ((y < z) ? y : z);\n    \n    cout << "Max: " << max << ", Min: " << min << endl;\n    \n    // Simple min/max using functions\n    int minVal = (x < y) ? x : y;\n    int maxVal = (x > y) ? x : y;\n    \n    return 0;\n}',
  hint: 'Nested ternary operators can replace multiple if-else statements.'
},
{
  id: 'cpp_conditionals_18',
  topicId: 'cpp_conditionals',
  question: 'Use switch with enum for better readability.',
  mathSolution: 'enum provides named constants for switch cases.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum TrafficLight { RED, YELLOW, GREEN };\n\nint main() {\n    TrafficLight light = YELLOW;\n    \n    switch(light) {\n        case RED:\n            cout << "Stop!" << endl;\n            break;\n        case YELLOW:\n            cout << "Prepare to stop" << endl;\n            break;\n        case GREEN:\n            cout << "Go!" << endl;\n            break;\n        default:\n            cout << "Invalid light" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Enum improves code readability and type safety.'
},
{
  id: 'cpp_conditionals_19',
  topicId: 'cpp_conditionals',
  question: 'Check if a number is within a range using compound conditions.',
  mathSolution: 'Use && to check both lower and upper bounds.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num >= 1 && num <= 100) {\n        cout << num << " is between 1 and 100" << endl;\n        \n        if (num >= 1 && num <= 10) {\n            cout << "Range: 1-10" << endl;\n        } else if (num >= 11 && num <= 20) {\n            cout << "Range: 11-20" << endl;\n        } else if (num >= 21 && num <= 30) {\n            cout << "Range: 21-30" << endl;\n        } else {\n            cout << "Range: 31-100" << endl;\n        }\n    } else {\n        cout << num << " is outside range 1-100" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use && to check both lower and upper bounds simultaneously.'
},
{
  id: 'cpp_conditionals_20',
  topicId: 'cpp_conditionals',
  question: 'Check if character is alphabet using conditions.',
  mathSolution: 'Check uppercase (A-Z) or lowercase (a-z) ranges.',
  codeSolution: '#include <iostream>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    char ch;\n    cout << "Enter a character: ";\n    cin >> ch;\n    \n    // Using manual conditions\n    if ((ch >= \'A\' && ch <= \'Z\') || (ch >= \'a\' && ch <= \'z\')) {\n        cout << ch << " is an alphabet" << endl;\n        \n        // Check vowel or consonant\n        char lower = tolower(ch);\n        if (lower == \'a\' || lower == \'e\' || lower == \'i\' || lower == \'o\' || lower == \'u\') {\n            cout << "It is a vowel" << endl;\n        } else {\n            cout << "It is a consonant" << endl;\n        }\n    } else if (ch >= \'0\' && ch <= \'9\') {\n        cout << ch << " is a digit" << endl;\n    } else {\n        cout << ch << " is a special character" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use cctype functions (isalpha, isdigit) for easier checks.'
},
{
  id: 'cpp_conditionals_21',
  topicId: 'cpp_conditionals',
  question: 'Use switch with fall-through intentionally.',
  mathSolution: 'Omitting break allows multiple cases to execute.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int month;\n    cout << "Enter month (1-12): ";\n    cin >> month;\n    \n    int days;\n    switch(month) {\n        case 2:\n            days = 28;\n            break;\n        case 4:\n        case 6:\n        case 9:\n        case 11:\n            days = 30;\n            break;\n        case 1:\n        case 3:\n        case 5:\n        case 7:\n        case 8:\n        case 10:\n        case 12:\n            days = 31;\n            break;\n        default:\n            days = -1;\n    }\n    \n    if (days != -1) {\n        cout << "Month " << month << " has " << days << " days" << endl;\n    } else {\n        cout << "Invalid month" << endl;\n    }\n    \n    // Fall-through example\n    int count = 0;\n    switch(month) {\n        case 1:\n        case 3:\n        case 5:\n        case 7:\n        case 8:\n        case 10:\n        case 12:\n            count++;\n            // Fall through\n        case 4:\n        case 6:\n        case 9:\n        case 11:\n            count++;\n            // Fall through\n        case 2:\n            count++;\n    }\n    \n    return 0;\n}',
  hint: 'Fall-through is intentional when break is omitted.'
},
{
  id: 'cpp_conditionals_22',
  topicId: 'cpp_conditionals',
  question: 'Check if a string is empty using condition.',
  mathSolution: 'String empty if length() == 0 or empty() returns true.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    // Check if string is empty\n    if (str.empty()) {\n        cout << "String is empty" << endl;\n    } else if (str.length() < 5) {\n        cout << "String is short (length: " << str.length() << ")" << endl;\n    } else if (str.length() < 10) {\n        cout << "String is medium (length: " << str.length() << ")" << endl;\n    } else {\n        cout << "String is long (length: " << str.length() << ")" << endl;\n    }\n    \n    // Check if string contains spaces\n    bool hasSpace = false;\n    for (char c : str) {\n        if (c == \' \') {\n            hasSpace = true;\n            break;\n        }\n    }\n    \n    if (hasSpace) {\n        cout << "String contains spaces" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use .empty() or .length() to check if string has content.'
},
{
  id: 'cpp_conditionals_23',
  topicId: 'cpp_conditionals',
  question: 'Check if number is prime using conditional statements.',
  mathSolution: 'Prime if no divisor between 2 and sqrt(n) divides it.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n    \n    if (n <= 1) {\n        cout << n << " is not prime" << endl;\n    } else if (n == 2) {\n        cout << n << " is prime" << endl;\n    } else if (n % 2 == 0) {\n        cout << n << " is not prime" << endl;\n    } else {\n        bool isPrime = true;\n        for (int i = 3; i <= sqrt(n); i += 2) {\n            if (n % i == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n        \n        if (isPrime) {\n            cout << n << " is prime" << endl;\n        } else {\n            cout << n << " is not prime" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Check divisibility only up to square root for efficiency.'
},
{
  id: 'cpp_conditionals_24',
  topicId: 'cpp_conditionals',
  question: 'Implement calculator using switch statement.',
  mathSolution: 'Switch on operator to perform arithmetic operations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    char op;\n    \n    cout << "Enter expression (e.g., 5 + 3): ";\n    cin >> a >> op >> b;\n    \n    switch(op) {\n        case \'+\':\n            cout << a << " + " << b << " = " << a + b << endl;\n            break;\n        case \'-\':\n            cout << a << " - " << b << " = " << a - b << endl;\n            break;\n        case \'*\':\n        case \'x\':\n        case \'X\':\n            cout << a << " * " << b << " = " << a * b << endl;\n            break;\n        case \'/\':\n            if (b != 0) {\n                cout << a << " / " << b << " = " << a / b << endl;\n            } else {\n                cout << "Cannot divide by zero!" << endl;\n            }\n            break;\n        case \'%\':\n            if (b != 0) {\n                cout << int(a) << " % " << int(b) << " = " << int(a) % int(b) << endl;\n            } else {\n                cout << "Cannot modulo by zero!" << endl;\n            }\n            break;\n        default:\n            cout << "Invalid operator" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use multiple case labels for same action (e.g., \'*\', \'x\', \'X\').'
},
{
  id: 'cpp_conditionals_25',
  topicId: 'cpp_conditionals',
  question: 'Use if-else to determine grade from percentage.',
  mathSolution: 'Map percentage ranges to letter grades.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double percentage;\n    cout << "Enter percentage: ";\n    cin >> percentage;\n    \n    char grade;\n    \n    if (percentage >= 90) {\n        grade = \'A\';\n    } else if (percentage >= 80) {\n        grade = \'B\';\n    } else if (percentage >= 70) {\n        grade = \'C\';\n    } else if (percentage >= 60) {\n        grade = \'D\';\n    } else if (percentage >= 50) {\n        grade = \'E\';\n    } else {\n        grade = \'F\';\n    }\n    \n    cout << "Grade: " << grade << endl;\n    \n    // Determine grade point\n    double gpa;\n    switch(grade) {\n        case \'A\': gpa = 4.0; break;\n        case \'B\': gpa = 3.0; break;\n        case \'C\': gpa = 2.0; break;\n        case \'D\': gpa = 1.0; break;\n        case \'E\': gpa = 0.5; break;\n        default: gpa = 0.0;\n    }\n    \n    cout << "GPA: " << gpa << endl;\n    \n    return 0;\n}',
  hint: 'Check highest percentage first for correct grade assignment.'
},
{
  id: 'cpp_conditionals_26',
  topicId: 'cpp_conditionals',
  question: 'Use conditional compilation with #if, #else, #endif.',
  mathSolution: 'Preprocessor directives conditionally include code.',
  codeSolution: '#include <iostream>\n#define DEBUG 1\n#define VERSION 2\n\nusing namespace std;\n\nint main() {\n    #if DEBUG\n        cout << "Debug mode enabled" << endl;\n        cout << "Running diagnostics..." << endl;\n    #else\n        cout << "Release mode" << endl;\n    #endif\n    \n    #if VERSION == 1\n        cout << "Version 1.0 - Basic features" << endl;\n    #elif VERSION == 2\n        cout << "Version 2.0 - Advanced features" << endl;\n    #else\n        cout << "Unknown version" << endl;\n    #endif\n    \n    #ifdef _WIN32\n        cout << "Windows platform" << endl;\n    #elif defined(__linux__)\n        cout << "Linux platform" << endl;\n    #elif defined(__APPLE__)\n        cout << "macOS platform" << endl;\n    #endif\n    \n    return 0;\n}',
  hint: 'Conditional compilation is resolved at compile time, not runtime.'
},
{
  id: 'cpp_conditionals_27',
  topicId: 'cpp_conditionals',
  question: 'Use static_assert for compile-time assertions.',
  mathSolution: 'static_assert checks conditions at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nT divide(T a, T b) {\n    static_assert(is_arithmetic<T>::value, \"Type must be arithmetic\");\n    if (b == 0) {\n        throw \"Division by zero\";\n    }\n    return a / b;\n}\n\nint main() {\n    // Compile-time checks\n    static_assert(sizeof(int) >= 4, \"int must be at least 4 bytes\");\n    static_assert(CHAR_BIT == 8, \"Char must be 8 bits\");\n    \n    constexpr int size = 10;\n    int arr[size];\n    static_assert(size > 0, \"Array size must be positive\");\n    \n    cout << "Compile-time checks passed" << endl;\n    \n    // Runtime checks\n    double result = divide(10.0, 2.0);\n    cout << "Result: " << result << endl;\n    \n    return 0;\n}',
  hint: 'static_assert provides early error detection at compile time.'
},
{
  id: 'cpp_conditionals_28',
  topicId: 'cpp_conditionals',
  question: 'Use if constexpr for compile-time conditionals (C++17).',
  mathSolution: 'if constexpr evaluates condition at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nauto process(T value) {\n    if constexpr (is_integral<T>::value) {\n        cout << "Integral type: " << value << endl;\n        return value * 2;\n    } else if constexpr (is_floating_point<T>::value) {\n        cout << "Floating point type: " << value << endl;\n        return value * 2.0;\n    } else {\n        cout << "Other type" << endl;\n        return value;\n    }\n}\n\ntemplate<typename T>\nstring typeName() {\n    if constexpr (is_same<T, int>::value) {\n        return "int";\n    } else if constexpr (is_same<T, double>::value) {\n        return "double";\n    } else if constexpr (is_same<T, string>::value) {\n        return "string";\n    } else {\n        return "unknown";\n    }\n}\n\nint main() {\n    cout << process(42) << endl;\n    cout << process(3.14) << endl;\n    cout << process("Hello") << endl;\n    \n    cout << "Type of int: " << typeName<int>() << endl;\n    cout << "Type of double: " << typeName<double>() << endl;\n    \n    return 0;\n}',
  hint: 'if constexpr discards non-matching branches at compile time.'
},
{
  id: 'cpp_conditionals_29',
  topicId: 'cpp_conditionals',
  question: 'Check for palindromic string using conditional statements.',
  mathSolution: 'Compare characters from both ends moving inward.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string str;\n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    // Clean string (remove spaces and convert to lowercase)\n    string cleaned;\n    for (char c : str) {\n        if (isalnum(c)) {\n            cleaned += tolower(c);\n        }\n    }\n    \n    bool isPalindrome = true;\n    int len = cleaned.length();\n    \n    for (int i = 0; i < len / 2; i++) {\n        if (cleaned[i] != cleaned[len - 1 - i]) {\n            isPalindrome = false;\n            break;\n        }\n    }\n    \n    if (isPalindrome) {\n        cout << "\"" << str << "\" is a palindrome" << endl;\n    } else {\n        cout << "\"" << str << "\" is NOT a palindrome" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Palindrome reads same forward and backward ignoring case and spaces.'
},
{
  id: 'cpp_conditionals_30',
  topicId: 'cpp_conditionals',
  question: 'Use nested switch for menu-driven program.',
  mathSolution: 'Outer switch for main menu, inner for sub-menu.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int mainChoice, subChoice;\n    \n    do {\n        cout << "\\n=== Main Menu ===" << endl;\n        cout << "1. File Operations" << endl;\n        cout << "2. Edit Operations" << endl;\n        cout << "3. View Operations" << endl;\n        cout << "4. Exit" << endl;\n        cout << "Enter choice: ";\n        cin >> mainChoice;\n        \n        switch(mainChoice) {\n            case 1:\n                cout << "\\n--- File Menu ---" << endl;\n                cout << "1. New" << endl;\n                cout << "2. Open" << endl;\n                cout << "3. Save" << endl;\n                cout << "4. Close" << endl;\n                cout << "Select option: ";\n                cin >> subChoice;\n                \n                switch(subChoice) {\n                    case 1: cout << "Creating new file..." << endl; break;\n                    case 2: cout << "Opening file..." << endl; break;\n                    case 3: cout << "Saving file..." << endl; break;\n                    case 4: cout << "Closing file..." << endl; break;\n                    default: cout << "Invalid sub-option" << endl;\n                }\n                break;\n                \n            case 2:\n                cout << "\\n--- Edit Menu ---" << endl;\n                cout << "1. Cut" << endl;\n                cout << "2. Copy" << endl;\n                cout << "3. Paste" << endl;\n                cout << "4. Undo" << endl;\n                cout << "Select option: ";\n                cin >> subChoice;\n                \n                switch(subChoice) {\n                    case 1: cout << "Cut operation" << endl; break;\n                    case 2: cout << "Copy operation" << endl; break;\n                    case 3: cout << "Paste operation" << endl; break;\n                    case 4: cout << "Undo operation" << endl; break;\n                    default: cout << "Invalid sub-option" << endl;\n                }\n                break;\n                \n            case 3:\n                cout << "Viewing data..." << endl;\n                break;\n                \n            case 4:\n                cout << "Exiting..." << endl;\n                break;\n                \n            default:\n                cout << "Invalid main option" << endl;\n        }\n    } while (mainChoice != 4);\n    \n    return 0;\n}',
  hint: 'Nested switch can create multi-level menu systems.'
},
{
  id: 'cpp_conditionals_31',
  topicId: 'cpp_conditionals',
  question: 'Check if point lies inside circle using conditions.',
  mathSolution: 'Point distance from center <= radius lies inside.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double cx, cy, radius;\n    double px, py;\n    \n    cout << "Enter circle center (x y): ";\n    cin >> cx >> cy;\n    cout << "Enter radius: ";\n    cin >> radius;\n    cout << "Enter point (x y): ";\n    cin >> px >> py;\n    \n    double distance = sqrt(pow(px - cx, 2) + pow(py - cy, 2));\n    \n    if (distance < radius) {\n        cout << "Point lies inside the circle" << endl;\n    } else if (distance == radius) {\n        cout << "Point lies on the circle" << endl;\n    } else {\n        cout << "Point lies outside the circle" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use distance formula sqrt((x2-x1)^2 + (y2-y1)^2).'
},
{
  id: 'cpp_conditionals_32',
  topicId: 'cpp_conditionals',
  question: 'Check if year is a century year using condition.',
  mathSolution: 'Century year ends with 00 (divisible by 100).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int year;\n    cout << "Enter year: \";\n    cin >> year;\n    \n    if (year % 100 == 0) {\n        cout << year << \" is a century year\" << endl;\n        \n        if (year % 400 == 0) {\n            cout << \"Also a leap century year\" << endl;\n        } else {\n            cout << \"Not a leap year\" << endl;\n        }\n    } else {\n        cout << year << \" is not a century year\" << endl;\n        \n        if (year % 4 == 0) {\n            cout << \"But it is a leap year\" << endl;\n        } else {\n            cout << \"Not a leap year\" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Century years are exactly divisible by 100.'
},
{
  id: 'cpp_conditionals_33',
  topicId: 'cpp_conditionals',
  question: 'Use multiple conditions to determine zodiac sign.',
  mathSolution: 'Check month and day ranges for zodiac signs.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int month, day;\n    cout << \"Enter birth month (1-12): \";\n    cin >> month;\n    cout << \"Enter birth day: \";\n    cin >> day;\n    \n    string zodiac;\n    \n    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {\n        zodiac = \"Aries\";\n    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {\n        zodiac = \"Taurus\";\n    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {\n        zodiac = \"Gemini\";\n    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {\n        zodiac = \"Cancer\";\n    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {\n        zodiac = \"Leo\";\n    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {\n        zodiac = \"Virgo\";\n    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {\n        zodiac = \"Libra\";\n    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {\n        zodiac = \"Scorpio\";\n    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {\n        zodiac = \"Sagittarius\";\n    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {\n        zodiac = \"Capricorn\";\n    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {\n        zodiac = \"Aquarius\";\n    } else {\n        zodiac = \"Pisces\";\n    }\n    \n    cout << \"Your zodiac sign is: \" << zodiac << endl;\n    \n    return 0;\n}',
  hint: 'Zodiac signs change around the 19th-23rd of each month.'
},
{
  id: 'cpp_conditionals_34',
  topicId: 'cpp_conditionals',
  question: 'Check if number is armstrong number using conditions.',
  mathSolution: 'Sum of cubes of digits equals number itself.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int num, original, remainder, sum = 0;\n    \n    cout << "Enter a number: \";\n    cin >> num;\n    \n    original = num;\n    int digits = 0;\n    int temp = num;\n    \n    // Count digits\n    while (temp != 0) {\n        digits++;\n        temp /= 10;\n    }\n    \n    temp = num;\n    while (temp != 0) {\n        remainder = temp % 10;\n        sum += pow(remainder, digits);\n        temp /= 10;\n    }\n    \n    if (sum == original) {\n        cout << original << \" is an Armstrong number\" << endl;\n    } else {\n        cout << original << \" is NOT an Armstrong number\" << endl;\n    }\n    \n    return 0;\n}',
  hint: '153 is Armstrong (1^3 + 5^3 + 3^3 = 153).'
},
{
  id: 'cpp_conditionals_35',
  topicId: 'cpp_conditionals',
  question: 'Check if number is perfect number using conditions.',
  mathSolution: 'Sum of proper divisors equals number.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num <= 0) {\n        cout << "Perfect numbers are positive" << endl;\n        return 0;\n    }\n    \n    int sum = 0;\n    for (int i = 1; i <= num / 2; i++) {\n        if (num % i == 0) {\n            sum += i;\n        }\n    }\n    \n    if (sum == num) {\n        cout << num << " is a perfect number" << endl;\n        cout << "Divisors: ";\n        for (int i = 1; i <= num / 2; i++) {\n            if (num % i == 0) {\n                cout << i << " ";\n            }\n        }\n        cout << endl;\n    } else {\n        cout << num << " is NOT a perfect number" << endl;\n    }\n    \n    return 0;\n}',
  hint: '6 is perfect (1+2+3=6); 28 is perfect (1+2+4+7+14=28).'
},
{
  id: 'cpp_conditionals_36',
  topicId: 'cpp_conditionals',
  question: 'Use conditional expressions in loops for filtering.',
  mathSolution: 'Combine if statements inside loops for data filtering.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {23, 45, 12, 67, 34, 89, 56, 78, 90, 15};\n    \n    cout << \"Even numbers: \";\n    for (int num : numbers) {\n        if (num % 2 == 0) {\n            cout << num << \" \";\n        }\n    }\n    cout << endl;\n    \n    cout << \"Numbers > 50: \";\n    for (int num : numbers) {\n        if (num > 50) {\n            cout << num << \" \";\n        }\n    }\n    cout << endl;\n    \n    cout << \"Numbers between 20 and 60: \";\n    for (int num : numbers) {\n        if (num >= 20 && num <= 60) {\n            cout << num << \" \";\n        }\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Loop conditions can filter, transform, or aggregate data.'
},
{
  id: 'cpp_conditionals_37',
  topicId: 'cpp_conditionals',
  question: 'Validate user input with do-while and conditions.',
  mathSolution: 'Loop continues until valid input is provided.',
  codeSolution: '#include <iostream>\n#include <limits>\nusing namespace std;\n\nint main() {\n    int age;\n    char gender;\n    double gpa;\n    \n    // Validate age input\n    do {\n        cout << \"Enter age (1-120): \";\n        cin >> age;\n        if (cin.fail() || age < 1 || age > 120) {\n            cin.clear();\n            cin.ignore(numeric_limits<streamsize>::max(), \'\\n\');\n            cout << \"Invalid age. Please try again.\" << endl;\n        }\n    } while (age < 1 || age > 120);\n    \n    // Validate gender\n    do {\n        cout << \"Enter gender (M/F): \";\n        cin >> gender;\n        gender = toupper(gender);\n        if (gender != \'M\' && gender != \'F\') {\n            cout << \"Invalid gender. Please enter M or F.\" << endl;\n        }\n    } while (gender != \'M\' && gender != \'F\');\n    \n    // Validate GPA\n    do {\n        cout << \"Enter GPA (0.0-4.0): \";\n        cin >> gpa;\n        if (cin.fail() || gpa < 0.0 || gpa > 4.0) {\n            cin.clear();\n            cin.ignore(numeric_limits<streamsize>::max(), \'\\n\');\n            cout << \"Invalid GPA. Please try again.\" << endl;\n        }\n    } while (gpa < 0.0 || gpa > 4.0);\n    \n    cout << \"\\nValidated input:\" << endl;\n    cout << \"Age: \" << age << endl;\n    cout << \"Gender: \" << gender << endl;\n    cout << \"GPA: \" << gpa << endl;\n    \n    return 0;\n}',
  hint: 'Always validate user input to prevent errors.'
},
{
  id: 'cpp_conditionals_38',
  topicId: 'cpp_conditionals',
  question: 'Use conditions to find roots of quadratic equation.',
  mathSolution: 'Discriminant determines nature of roots.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double a, b, c;\n    cout << "Enter coefficients a, b, c: \";\n    cin >> a >> b >> c;\n    \n    if (a == 0) {\n        cout << \"Not a quadratic equation (a = 0)\" << endl;\n        if (b != 0) {\n            double root = -c / b;\n            cout << \"Linear equation root: \" << root << endl;\n        }\n        return 0;\n    }\n    \n    double discriminant = b * b - 4 * a * c;\n    \n    if (discriminant > 0) {\n        double root1 = (-b + sqrt(discriminant)) / (2 * a);\n        double root2 = (-b - sqrt(discriminant)) / (2 * a);\n        cout << \"Two distinct real roots: \" << root1 << \" and \" << root2 << endl;\n    } else if (discriminant == 0) {\n        double root = -b / (2 * a);\n        cout << \"One real root (double root): \" << root << endl;\n    } else {\n        double realPart = -b / (2 * a);\n        double imaginaryPart = sqrt(-discriminant) / (2 * a);\n        cout << \"Complex roots: \" << realPart << \" + \" << imaginaryPart << \"i and \";\n        cout << realPart << \" - \" << imaginaryPart << \"i\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Discriminant = b² - 4ac determines root type.'
},
{
  id: 'cpp_conditionals_39',
  topicId: 'cpp_conditionals',
  question: 'Use condition to check if number is power of two.',
  mathSolution: 'Power of two has exactly one set bit: (n & (n-1)) == 0.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    unsigned int n;\n    cout << "Enter a number: \";\n    cin >> n;\n    \n    if (n == 0) {\n        cout << n << \" is not a power of two\" << endl;\n    } else if ((n & (n - 1)) == 0) {\n        cout << n << \" is a power of two\" << endl;\n        \n        // Calculate exponent\n        int exponent = 0;\n        unsigned int temp = n;\n        while (temp > 1) {\n            temp >>= 1;\n            exponent++;\n        }\n        cout << \"2^\" << exponent << \" = \" << n << endl;\n    } else {\n        cout << n << \" is not a power of two\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Power of two: 1, 2, 4, 8, 16, 32...'
},
{
  id: 'cpp_conditionals_40',
  topicId: 'cpp_conditionals',
  question: 'Use switch with enum class for type safety.',
  mathSolution: 'enum class provides scoped enumerations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum class Operation { ADD, SUBTRACT, MULTIPLY, DIVIDE };\n\nint main() {\n    double a, b;\n    int opChoice;\n    \n    cout << "Enter two numbers: \";\n    cin >> a >> b;\n    \n    cout << "1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\nChoose: \";\n    cin >> opChoice;\n    \n    Operation op;\n    switch(opChoice) {\n        case 1: op = Operation::ADD; break;\n        case 2: op = Operation::SUBTRACT; break;\n        case 3: op = Operation::MULTIPLY; break;\n        case 4: op = Operation::DIVIDE; break;\n        default:\n            cout << \"Invalid choice\" << endl;\n            return 1;\n    }\n    \n    double result;\n    switch(op) {\n        case Operation::ADD:\n            result = a + b;\n            cout << a << \" + \" << b << \" = \" << result << endl;\n            break;\n        case Operation::SUBTRACT:\n            result = a - b;\n            cout << a << \" - \" << b << \" = \" << result << endl;\n            break;\n        case Operation::MULTIPLY:\n            result = a * b;\n            cout << a << \" * \" << b << \" = \" << result << endl;\n            break;\n        case Operation::DIVIDE:\n            if (b != 0) {\n                result = a / b;\n                cout << a << \" / \" << b << \" = \" << result << endl;\n            } else {\n                cout << \"Cannot divide by zero\" << endl;\n            }\n            break;\n    }\n    \n    return 0;\n}',
  hint: 'enum class prevents implicit conversion to integers.'
},

);