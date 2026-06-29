QuizData.questions.push(
  //loop ,array,input-output,conditional
  {
    id: 'c_loop_1',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 1 to 10 using for loop.',
    mathSolution: '1 2 3 4 5 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Initialize i=1, condition i<=10, increment i++'
  },
  {
    id: 'c_loop_2',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 10 to 1 in reverse order using for loop.',
    mathSolution: '10 9 8 7 6 5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=10; i>=1; i--) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use i-- for decrement'
  },
  {
    id: 'c_loop_3',
    topicId: 'c_loop',
    question: 'Write a program to print even numbers from 2 to 20 using for loop.',
    mathSolution: '2 4 6 8 10 12 14 16 18 20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=20; i+=2) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Start from 2 and increment by 2'
  },
  {
    id: 'c_loop_4',
    topicId: 'c_loop',
    question: 'Write a program to print odd numbers from 1 to 19 using for loop.',
    mathSolution: '1 3 5 7 9 11 13 15 17 19',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=19; i+=2) {\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Start with 1 and increment by 2'
  },
  {
    id: 'c_loop_5',
    topicId: 'c_loop',
    question: 'Write a program to print multiplication table of 5 using for loop.',
    mathSolution: '5x1=5, 5x2=10, ..., 5x10=50',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        printf("5 x %d = %d\\n", i, 5*i);\n    }\n    return 0;\n}',
    hint: 'Use 5*i formula in loop'
  },
  {
    id: 'c_loop_6',
    topicId: 'c_loop',
    question: 'Write a program to calculate sum of numbers from 1 to 100 using for loop.',
    mathSolution: 'Sum = 5050',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int sum = 0;\n    for(int i=1; i<=100; i++) {\n        sum += i;\n    }\n    printf("Sum = %d", sum);\n    return 0;\n}',
    hint: 'Add i to sum variable each iteration'
  },
  {
    id: 'c_loop_7',
    topicId: 'c_loop',
    question: 'Write a program to calculate factorial of 5 using for loop.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int fact = 1;\n    for(int i=1; i<=5; i++) {\n        fact *= i;\n    }\n    printf("Factorial of 5 = %d", fact);\n    return 0;\n}',
    hint: 'Multiply fact by i each iteration'
  },
  {
    id: 'c_loop_8',
    topicId: 'c_loop',
    question: 'Write a program to print Fibonacci series (first 10 terms) using for loop.',
    mathSolution: '0 1 1 2 3 5 8 13 21 34',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a=0, b=1, c;\n    printf("%d %d ", a, b);\n    for(int i=3; i<=10; i++) {\n        c = a + b;\n        printf("%d ", c);\n        a = b;\n        b = c;\n    }\n    return 0;\n}',
    hint: 'Each term is sum of previous two terms'
  },
  {
    id: 'c_loop_9',
    topicId: 'c_loop',
    question: 'Write a program to count digits of number 12345 using for loop.',
    mathSolution: 'Digits = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 12345, count = 0;\n    for(; n != 0; n /= 10) {\n        count++;\n    }\n    printf("Digits = %d", count);\n    return 0;\n}',
    hint: 'Divide by 10 repeatedly until zero'
  },
  {
    id: 'c_loop_10',
    topicId: 'c_loop',
    question: 'Write a program to print multiplication table from 1 to 5 using nested loops.',
    mathSolution: '1x1=1 to 5x10=50',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=10; j++) {\n            printf("%d x %d = %d\\t", i, j, i*j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Outer loop for table number, inner for multiplier'
  },

  // ========== WHILE LOOP (11-20) ==========
  {
    id: 'c_loop_11',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 1 to 10 using while loop.',
    mathSolution: '1 2 3 4 5 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=1;\n    while(i<=10) {\n        printf("%d ", i);\n        i++;\n    }\n    return 0;\n}',
    hint: 'Initialize i before loop, increment inside'
  },
  {
    id: 'c_loop_12',
    topicId: 'c_loop',
    question: 'Write a program to reverse number 12345 using while loop.',
    mathSolution: 'Reverse = 54321',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 12345, rev = 0;\n    while(n != 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    printf("Reverse = %d", rev);\n    return 0;\n}',
    hint: 'Multiply rev by 10 and add last digit'
  },
  {
    id: 'c_loop_13',
    topicId: 'c_loop',
    question: 'Write a program to check if 121 is palindrome using while loop.',
    mathSolution: '121 is palindrome',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 121, temp, rev = 0;\n    temp = n;\n    while(temp != 0) {\n        rev = rev * 10 + temp % 10;\n        temp /= 10;\n    }\n    if(rev == n)\n        printf("%d is palindrome", n);\n    else\n        printf("%d is not palindrome", n);\n    return 0;\n}',
    hint: 'Store original number in temp'
  },
  {
    id: 'c_loop_14',
    topicId: 'c_loop',
    question: 'Write a program to check if 153 is Armstrong number using while loop.',
    mathSolution: '153 is Armstrong number (1³+5³+3³=153)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 153, temp, sum = 0, digit;\n    temp = n;\n    while(temp != 0) {\n        digit = temp % 10;\n        sum += digit * digit * digit;\n        temp /= 10;\n    }\n    if(sum == n)\n        printf("%d is Armstrong number", n);\n    else\n        printf("%d is not Armstrong", n);\n    return 0;\n}',
    hint: 'Cube each digit and add'
  },
  {
    id: 'c_loop_15',
    topicId: 'c_loop',
    question: 'Write a program to check if 17 is prime using while loop.',
    mathSolution: '17 is prime',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 17, i = 2, flag = 1;\n    while(i <= n/2) {\n        if(n % i == 0) {\n            flag = 0;\n            break;\n        }\n        i++;\n    }\n    if(flag == 1 && n > 1)\n        printf("%d is prime", n);\n    else\n        printf("%d is not prime", n);\n    return 0;\n}',
    hint: 'Check divisibility from 2 to n/2'
  },

  // ========== DO-WHILE LOOP (16-20) ==========
  {
    id: 'c_loop_16',
    topicId: 'c_loop',
    question: 'Write a program to print numbers from 1 to 10 using do-while loop.',
    mathSolution: '1 2 3 4 5 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=1;\n    do {\n        printf("%d ", i);\n        i++;\n    } while(i<=10);\n    return 0;\n}',
    hint: 'Executes at least once before checking condition'
  },
  {
    id: 'c_loop_17',
    topicId: 'c_loop',
    question: 'Write a program to print even numbers between 2 and 20 using do-while loop.',
    mathSolution: '2 4 6 8 10 12 14 16 18 20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=2;\n    do {\n        printf("%d ", i);\n        i+=2;\n    } while(i<=20);\n    return 0;\n}',
    hint: 'Start from 2 and increment by 2'
  },
  {
    id: 'c_loop_18',
    topicId: 'c_loop',
    question: 'Write a program to calculate sum of digits of 12345 using do-while loop.',
    mathSolution: 'Sum of digits = 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 12345, sum = 0, digit;\n    do {\n        digit = n % 10;\n        sum += digit;\n        n /= 10;\n    } while(n > 0);\n    printf("Sum of digits = %d", sum);\n    return 0;\n}',
    hint: 'Extract digits using modulo operator'
  },
  {
    id: 'c_loop_19',
    topicId: 'c_loop',
    question: 'Write a program to display menu with options using do-while loop.',
    mathSolution: 'Menu with 3 options, exit on 3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int choice = 1;\n    do {\n        printf("\\n1. Say Hello\\n2. Say Hi\\n3. Exit\\n");\n        choice = 3;\n        switch(choice) {\n            case 1: printf("Hello\\n"); break;\n            case 2: printf("Hi\\n"); break;\n            case 3: printf("Goodbye\\n"); break;\n        }\n    } while(choice != 3);\n    return 0;\n}',
    hint: 'Loop continues until exit option selected'
  },
  {
    id: 'c_loop_20',
    topicId: 'c_loop',
    question: 'Write a program to keep asking for positive number using do-while loop.',
    mathSolution: 'Accepts 10 as positive number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -5;\n    do {\n        if(num <= 0) {\n            num = 10;\n        }\n    } while(num <= 0);\n    printf("You entered: %d", num);\n    return 0;\n}',
    hint: 'Loop continues while number is not positive'
  },

  // ========== PATTERN PRINTING (21-30) ==========
  {
    id: 'c_loop_21',
    topicId: 'c_loop',
    question: 'Write a program to print square pattern of stars (5x5).',
    mathSolution: '5 rows, 5 columns of stars',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5; j++) {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Outer loop for rows, inner for columns'
  },
  {
    id: 'c_loop_22',
    topicId: 'c_loop',
    question: 'Write a program to print right-angle triangle pattern (5 rows).',
    mathSolution: '*\\n**\\n***\\n****\\n*****',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Inner loop runs i times'
  },
  {
    id: 'c_loop_23',
    topicId: 'c_loop',
    question: 'Write a program to print inverted triangle pattern (5 rows).',
    mathSolution: '*****\\n****\\n***\\n**\\n*',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=5; i>=1; i--) {\n        for(int j=1; j<=i; j++) {\n            printf("*");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Decrease stars in each row'
  },
  {
    id: 'c_loop_24',
    topicId: 'c_loop',
    question: 'Write a program to print pyramid pattern (5 rows).',
    mathSolution: '    *\\n   ***\\n  *****\\n *******\\n*********',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5-i; j++) printf(" ");\n        for(int k=1; k<=2*i-1; k++) printf("*");\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print spaces then stars'
  },
  {
    id: 'c_loop_25',
    topicId: 'c_loop',
    question: 'Write a program to print number pattern: 1, 12, 123, 1234, 12345.',
    mathSolution: '1\\n12\\n123\\n1234\\n12345',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("%d", j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print j in inner loop'
  },
  {
    id: 'c_loop_26',
    topicId: 'c_loop',
    question: 'Write a program to print Floyd\'s triangle (5 rows).',
    mathSolution: '1\\n2 3\\n4 5 6\\n7 8 9 10\\n11 12 13 14 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 1;\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("%d ", num++);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use counter that increments each time'
  },
  {
    id: 'c_loop_27',
    topicId: 'c_loop',
    question: 'Write a program to print hollow square pattern (5x5).',
    mathSolution: '*****\\n*   *\\n*   *\\n*   *\\n*****',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5; j++) {\n            if(i==1 || i==5 || j==1 || j==5)\n                printf("*");\n            else\n                printf(" ");\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print stars only on borders'
  },
  {
    id: 'c_loop_28',
    topicId: 'c_loop',
    question: 'Write a program to print alphabet pattern: A, BB, CCC, DDDD, EEEEE.',
    mathSolution: 'A\\nBB\\nCCC\\nDDDD\\nEEEEE',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(char ch=\'A\'; ch<=\'E\'; ch++) {\n        for(int j=1; j<=ch-\'A\'+1; j++) {\n            printf("%c", ch);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print character based on its position'
  },
  {
    id: 'c_loop_29',
    topicId: 'c_loop',
    question: 'Write a program to print number pyramid: 1, 121, 12321, 1234321.',
    mathSolution: '   1\\n  121\\n 12321\\n1234321',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=4; i++) {\n        for(int j=1; j<=4-i; j++) printf(" ");\n        for(int j=1; j<=i; j++) printf("%d", j);\n        for(int j=i-1; j>=1; j--) printf("%d", j);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Print increasing then decreasing numbers'
  },
  {
    id: 'c_loop_30',
    topicId: 'c_loop',
    question: 'Write a program to print diamond pattern (4 rows).',
    mathSolution: '   *\\n  ***\\n *****\\n*******\\n *****\\n  ***\\n   *',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Upper half\n    for(int i=1; i<=4; i++) {\n        for(int j=1; j<=4-i; j++) printf(" ");\n        for(int k=1; k<=2*i-1; k++) printf("*");\n        printf("\\n");\n    }\n    // Lower half\n    for(int i=3; i>=1; i--) {\n        for(int j=1; j<=4-i; j++) printf(" ");\n        for(int k=1; k<=2*i-1; k++) printf("*");\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Create upper and lower halves separately'
  },

  // ========== ARRAY OPERATIONS (31-40) ==========
  {
    id: 'c_loop_31',
    topicId: 'c_loop',
    question: 'Write a program to calculate sum of array elements {1,2,3,4,5}.',
    mathSolution: 'Sum = 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int sum = 0;\n    for(int i=0; i<5; i++) {\n        sum += arr[i];\n    }\n    printf("Sum = %d", sum);\n    return 0;\n}',
    hint: 'Array index starts from 0'
  },
  {
    id: 'c_loop_32',
    topicId: 'c_loop',
    question: 'Write a program to find largest element in array {10,45,2,78,34}.',
    mathSolution: 'Maximum = 78',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int max = arr[0];\n    for(int i=1; i<5; i++) {\n        if(arr[i] > max) max = arr[i];\n    }\n    printf("Maximum = %d", max);\n    return 0;\n}',
    hint: 'Assume first element as max, then compare'
  },
  {
    id: 'c_loop_33',
    topicId: 'c_loop',
    question: 'Write a program to find smallest element in array {10,45,2,78,34}.',
    mathSolution: 'Minimum = 2',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int min = arr[0];\n    for(int i=1; i<5; i++) {\n        if(arr[i] < min) min = arr[i];\n    }\n    printf("Minimum = %d", min);\n    return 0;\n}',
    hint: 'Assume first element as min, then compare'
  },
  {
    id: 'c_loop_34',
    topicId: 'c_loop',
    question: 'Write a program to print array {1,2,3,4,5} in reverse order.',
    mathSolution: '5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    for(int i=4; i>=0; i--) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Start loop from last index'
  },
  {
    id: 'c_loop_35',
    topicId: 'c_loop',
    question: 'Write a program to count even and odd numbers in array {1,2,3,4,5,6}.',
    mathSolution: 'Even: 3, Odd: 3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5,6};\n    int even=0, odd=0;\n    for(int i=0; i<6; i++) {\n        if(arr[i]%2 == 0) even++;\n        else odd++;\n    }\n    printf("Even: %d, Odd: %d", even, odd);\n    return 0;\n}',
    hint: 'Use modulo operator to check even/odd'
  },
  {
    id: 'c_loop_36',
    topicId: 'c_loop',
    question: 'Write a program to search for element 45 in array {10,45,2,78,34}.',
    mathSolution: 'Found at index 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int search = 45, found = 0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] == search) {\n            printf("Found at index %d", i);\n            found = 1;\n            break;\n        }\n    }\n    if(!found) printf("Not found");\n    return 0;\n}',
    hint: 'Compare each element with search value'
  },
  {
    id: 'c_loop_37',
    topicId: 'c_loop',
    question: 'Write a program to bubble sort array {64,34,25,12,22,11,90}.',
    mathSolution: 'Sorted: 11,12,22,25,34,64,90',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64,34,25,12,22,11,90};\n    int n=7, temp;\n    for(int i=0; i<n-1; i++) {\n        for(int j=0; j<n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    printf("Sorted array: ");\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent elements and swap if needed'
  },
  {
    id: 'c_loop_38',
    topicId: 'c_loop',
    question: 'Write a program to add two matrices (2x2).',
    mathSolution: '[[1+5=6, 2+6=8], [3+7=10, 4+8=12]]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n        }\n    }\n    printf("Result:\\n");\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Add corresponding elements'
  },
  {
    id: 'c_loop_39',
    topicId: 'c_loop',
    question: 'Write a program to find transpose of matrix [[1,2],[3,4]].',
    mathSolution: '[[1,3],[2,4]]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int t[2][2];\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            t[j][i] = a[i][j];\n        }\n    }\n    printf("Transpose:\\n");\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            printf("%d ", t[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap rows and columns'
  },
  {
    id: 'c_loop_40',
    topicId: 'c_loop',
    question: 'Write a program to find length of string "Hello" without strlen.',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int length = 0;\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        length++;\n    }\n    printf("Length = %d", length);\n    return 0;\n}',
    hint: 'Count until null character \'\\0\''
  },
//array
 {
    id: 'c_arrays_1',
    topicId: 'c_arrays',
    question: 'Write a program to declare an integer array of size 5 and print its elements.',
    mathSolution: 'Array declaration and initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", numbers[i]);\n    }\n    return 0;\n}',
    hint: 'Use format: data_type array_name[size];'
  },
  {
    id: 'c_arrays_2',
    topicId: 'c_arrays',
    question: 'Write a program to initialize array with values 1 to 5 and print them.',
    mathSolution: 'Array initialization with values',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Use curly braces {} to list initial values'
  },
  {
    id: 'c_arrays_3',
    topicId: 'c_arrays',
    question: 'Write a program to access and print the third element of array {10,20,30,40,50}.',
    mathSolution: 'Array indexing (0-based)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    printf("Third element: %d\\n", arr[2]);\n    return 0;\n}',
    hint: 'Array indices start at 0'
  },
  {
    id: 'c_arrays_4',
    topicId: 'c_arrays',
    question: 'Write a program to change the first element of array to 100 and print.',
    mathSolution: 'Array element assignment',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    arr[0] = 100;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Use array name with index on left side of assignment'
  },
  {
    id: 'c_arrays_5',
    topicId: 'c_arrays',
    question: 'Write a program to find the length of array {2,4,6,8,10}.',
    mathSolution: 'Calculate array length using sizeof',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    int length = sizeof(arr) / sizeof(arr[0]);\n    printf("Array length = %d\\n", length);\n    return 0;\n}',
    hint: 'Total size divided by element size'
  },
  {
    id: 'c_arrays_6',
    topicId: 'c_arrays',
    question: 'Write a program to print all elements of array {1,2,3,4,5} using for loop.',
    mathSolution: 'Iterate through array using loop',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Loop from 0 to size-1'
  },
  {
    id: 'c_arrays_7',
    topicId: 'c_arrays',
    question: 'Write a program to initialize a character array with "John" and print it.',
    mathSolution: 'String initialization in C',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char name[] = "John";\n    printf("Name: %s\\n", name);\n    return 0;\n}',
    hint: 'Strings are character arrays with null terminator'
  },
  {
    id: 'c_arrays_8',
    topicId: 'c_arrays',
    question: 'Write a program to declare a 2D integer array with 2 rows and 3 columns and initialize with values.',
    mathSolution: '2D array declaration and initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3}, {4,5,6}};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Format: type name[rows][columns]'
  },
  {
    id: 'c_arrays_9',
    topicId: 'c_arrays',
    question: 'Write a program to initialize a 2x3 integer array with all zeros.',
    mathSolution: 'Initialize 2D array to zero',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[2][3] = {0};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use {0} to initialize all elements to zero'
  },
  {
    id: 'c_arrays_10',
    topicId: 'c_arrays',
    question: 'Write a program to access element at row 1, column 2 of 2D array and print it.',
    mathSolution: '2D array indexing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3}, {4,5,6}};\n    printf("Element at [1][2] = %d\\n", matrix[1][2]);\n    return 0;\n}',
    hint: 'Both row and column indices start at 0'
  },

  // ========== ARRAY OPERATIONS (11-20) ==========
  {
    id: 'c_arrays_11',
    topicId: 'c_arrays',
    question: 'Write a program to find sum of all elements in array {1,2,3,4,5}.',
    mathSolution: 'Calculate array sum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int sum = 0;\n    for(int i = 0; i < 5; i++) {\n        sum += arr[i];\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Initialize sum to 0, add each element'
  },
  {
    id: 'c_arrays_12',
    topicId: 'c_arrays',
    question: 'Write a program to find largest element in array {23,45,12,67,34}.',
    mathSolution: 'Find maximum in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int max = arr[0];\n    for(int i = 1; i < 5; i++) {\n        if(arr[i] > max) max = arr[i];\n    }\n    printf("Largest = %d\\n", max);\n    return 0;\n}',
    hint: 'Assume first element is max, then compare'
  },
  {
    id: 'c_arrays_13',
    topicId: 'c_arrays',
    question: 'Write a program to find smallest element in array {23,45,12,67,34}.',
    mathSolution: 'Find minimum in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int min = arr[0];\n    for(int i = 1; i < 5; i++) {\n        if(arr[i] < min) min = arr[i];\n    }\n    printf("Smallest = %d\\n", min);\n    return 0;\n}',
    hint: 'Assume first element is min, then compare'
  },
  {
    id: 'c_arrays_14',
    topicId: 'c_arrays',
    question: 'Write a program to reverse array {1,2,3,4,5} in-place.',
    mathSolution: 'Reverse array elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int temp;\n    for(int i = 0; i < 5/2; i++) {\n        temp = arr[i];\n        arr[i] = arr[4-i];\n        arr[4-i] = temp;\n    }\n    printf("Reversed array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Swap first with last, second with second-last'
  },
  {
    id: 'c_arrays_15',
    topicId: 'c_arrays',
    question: 'Write a program to copy array "source" to "destination".',
    mathSolution: 'Copy array elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int source[] = {10,20,30,40,50};\n    int destination[5];\n    for(int i = 0; i < 5; i++) {\n        destination[i] = source[i];\n    }\n    printf("Copied array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", destination[i]);\n    }\n    return 0;\n}',
    hint: 'Loop through each element and assign'
  },
  {
    id: 'c_arrays_16',
    topicId: 'c_arrays',
    question: 'Write a program to count elements greater than 10 in array {5,15,8,20,3,12}.',
    mathSolution: 'Count elements satisfying condition',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5, 15, 8, 20, 3, 12};\n    int count = 0;\n    for(int i = 0; i < 6; i++) {\n        if(arr[i] > 10) count++;\n    }\n    printf("Elements greater than 10: %d\\n", count);\n    return 0;\n}',
    hint: 'Increment count when condition is true'
  },
  {
    id: 'c_arrays_17',
    topicId: 'c_arrays',
    question: 'Write a program to declare array without specifying size using initializer.',
    mathSolution: 'Compiler determines size from initializer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    printf("Size = %d\\n", size);\n    return 0;\n}',
    hint: 'Empty brackets [] lets compiler count elements'
  },
  {
    id: 'c_arrays_18',
    topicId: 'c_arrays',
    question: 'Write a program to calculate average of array {10,20,30,40,50}.',
    mathSolution: 'Calculate average of array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    for(int i = 0; i < 5; i++) {\n        sum += arr[i];\n    }\n    float avg = (float)sum / 5;\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Cast sum to float for decimal result'
  },
  {
    id: 'c_arrays_19',
    topicId: 'c_arrays',
    question: 'Write a program to count even and odd numbers in array {1,2,3,4,5,6}.',
    mathSolution: 'Count even and odd',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6};\n    int even = 0, odd = 0;\n    for(int i = 0; i < 6; i++) {\n        if(arr[i] % 2 == 0) even++;\n        else odd++;\n    }\n    printf("Even: %d, Odd: %d\\n", even, odd);\n    return 0;\n}',
    hint: 'Use modulo operator to check even/odd'
  },
  {
    id: 'c_arrays_20',
    topicId: 'c_arrays',
    question: 'Write a program to separate even and odd numbers from array into two arrays.',
    mathSolution: 'Separate even and odd',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5,6,7,8};\n    int even[10], odd[10];\n    int e=0, o=0;\n    for(int i = 0; i < 8; i++) {\n        if(arr[i] % 2 == 0)\n            even[e++] = arr[i];\n        else\n            odd[o++] = arr[i];\n    }\n    printf("Even: ");\n    for(int i = 0; i < e; i++) printf("%d ", even[i]);\n    printf("\\nOdd: ");\n    for(int i = 0; i < o; i++) printf("%d ", odd[i]);\n    return 0;\n}',
    hint: 'Check arr[i] % 2 to determine even/odd'
  },

  // ========== 2D ARRAY OPERATIONS (21-30) ==========
  {
    id: 'c_arrays_21',
    topicId: 'c_arrays',
    question: 'Write a program to print 2D matrix {{1,2,3},{4,5,6}} in matrix format.',
    mathSolution: 'Print 2D array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3}, {4,5,6}};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use nested loops, print newline after each row'
  },
  {
    id: 'c_arrays_22',
    topicId: 'c_arrays',
    question: 'Write a program to find sum of all elements in 3x3 matrix {{1,2,3},{4,5,6},{7,8,9}}.',
    mathSolution: 'Sum of 2D array elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            sum += matrix[i][j];\n        }\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Nested loops to access each element'
  },
  {
    id: 'c_arrays_23',
    topicId: 'c_arrays',
    question: 'Write a program to find transpose of 2x3 matrix {{1,2,3},{4,5,6}}.',
    mathSolution: 'Matrix transpose',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3},{4,5,6}};\n    int transpose[3][2];\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++) {\n            transpose[j][i] = matrix[i][j];\n        }\n    }\n    printf("Transpose:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("%d ", transpose[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap rows and columns: result[j][i] = original[i][j]'
  },
  {
    id: 'c_arrays_24',
    topicId: 'c_arrays',
    question: 'Write a program to add two 2x2 matrices {{1,2},{3,4}} and {{5,6},{7,8}}.',
    mathSolution: 'Matrix addition',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n        }\n    }\n    printf("Result:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Add corresponding elements'
  },
  {
    id: 'c_arrays_25',
    topicId: 'c_arrays',
    question: 'Write a program to find diagonal sum of 3x3 matrix {{1,2,3},{4,5,6},{7,8,9}}.',
    mathSolution: 'Diagonal sum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    for(int i = 0; i < 3; i++) {\n        sum += matrix[i][i];\n    }\n    printf("Main diagonal sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Diagonal elements have i == j'
  },
  {
    id: 'c_arrays_26',
    topicId: 'c_arrays',
    question: 'Write a program to check if two arrays are equal.',
    mathSolution: 'Compare arrays',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr1[] = {1,2,3,4,5};\n    int arr2[] = {1,2,3,4,5};\n    int equal = 1;\n    for(int i = 0; i < 5; i++) {\n        if(arr1[i] != arr2[i]) {\n            equal = 0;\n            break;\n        }\n    }\n    if(equal) printf("Arrays are equal\\n");\n    else printf("Arrays are not equal\\n");\n    return 0;\n}',
    hint: 'Assume equal, set flag to 0 if mismatch found'
  },
  {
    id: 'c_arrays_27',
    topicId: 'c_arrays',
    question: 'Write a program to merge two sorted arrays {1,3,5} and {2,4,6}.',
    mathSolution: 'Merge sorted arrays',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[] = {1,3,5};\n    int b[] = {2,4,6};\n    int c[6];\n    int i=0, j=0, k=0;\n    while(i < 3 && j < 3) {\n        if(a[i] < b[j])\n            c[k++] = a[i++];\n        else\n            c[k++] = b[j++];\n    }\n    while(i < 3) c[k++] = a[i++];\n    while(j < 3) c[k++] = b[j++];\n    printf("Merged array: ");\n    for(i = 0; i < 6; i++) printf("%d ", c[i]);\n    return 0;\n}',
    hint: 'Compare and pick smaller element each time'
  },
  {
    id: 'c_arrays_28',
    topicId: 'c_arrays',
    question: 'Write a program to remove duplicates from sorted array {1,1,2,2,3,4,4}.',
    mathSolution: 'Remove duplicates in-place',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,1,2,2,3,4,4};\n    int j = 0;\n    for(int i = 0; i < 6; i++) {\n        if(arr[i] != arr[i+1])\n            arr[j++] = arr[i];\n    }\n    arr[j++] = arr[6];\n    printf("After removing duplicates: ");\n    for(int i = 0; i < j; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Keep track of unique elements position'
  },
  {
    id: 'c_arrays_29',
    topicId: 'c_arrays',
    question: 'Write a program to left rotate array {1,2,3,4,5} by one position.',
    mathSolution: 'Rotate array left',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int first = arr[0];\n    for(int i = 0; i < 4; i++) {\n        arr[i] = arr[i+1];\n    }\n    arr[4] = first;\n    printf("After left rotate: ");\n    for(int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Save first element, shift left, place first at end'
  },
  {
    id: 'c_arrays_30',
    topicId: 'c_arrays',
    question: 'Write a program to find second largest element in array {10,45,2,78,34}.',
    mathSolution: 'Find second maximum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int largest = arr[0], second = arr[0];\n    for(int i = 1; i < 5; i++) {\n        if(arr[i] > largest) {\n            second = largest;\n            largest = arr[i];\n        } else if(arr[i] > second && arr[i] != largest) {\n            second = arr[i];\n        }\n    }\n    printf("Second largest = %d\\n", second);\n    return 0;\n}',
    hint: 'Track both largest and second largest'
  },

  // ========== SEARCHING AND SORTING (31-40) ==========
  {
    id: 'c_arrays_31',
    topicId: 'c_arrays',
    question: 'Write a program to implement linear search for 30 in array {10,20,30,40,50}.',
    mathSolution: 'Linear search algorithm',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int key = 30, found = -1;\n    for(int i = 0; i < 5; i++) {\n        if(arr[i] == key) {\n            found = i;\n            break;\n        }\n    }\n    if(found != -1) printf("Found at index %d\\n", found);\n    else printf("Not found\\n");\n    return 0;\n}',
    hint: 'Return index if found, -1 otherwise'
  },
  {
    id: 'c_arrays_32',
    topicId: 'c_arrays',
    question: 'Write a program to implement bubble sort on array {64,34,25,12,22,11,90}.',
    mathSolution: 'Bubble sort implementation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64,34,25,12,22,11,90};\n    int n = 7, temp;\n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    printf("Sorted array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent elements and swap if needed'
  },
  {
    id: 'c_arrays_33',
    topicId: 'c_arrays',
    question: 'Write a program to implement binary search on sorted array {10,23,45,70,90}.',
    mathSolution: 'Binary search algorithm',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,23,45,70,90};\n    int key = 45, left = 0, right = 4, mid;\n    while(left <= right) {\n        mid = left + (right - left)/2;\n        if(arr[mid] == key) break;\n        if(arr[mid] < key) left = mid + 1;\n        else right = mid - 1;\n    }\n    if(arr[mid] == key) printf("Found at index %d\\n", mid);\n    else printf("Not found\\n");\n    return 0;\n}',
    hint: 'Divide and conquer, requires sorted array'
  },
  {
    id: 'c_arrays_34',
    topicId: 'c_arrays',
    question: 'Write a program to insert element 25 at position 2 in array {10,20,30,40}.',
    mathSolution: 'Array insertion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10] = {10,20,30,40};\n    int n = 4, pos = 2, value = 25;\n    for(int i = n; i > pos; i--) {\n        arr[i] = arr[i-1];\n    }\n    arr[pos] = value;\n    n++;\n    printf("After insertion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements right from the end'
  },
  {
    id: 'c_arrays_35',
    topicId: 'c_arrays',
    question: 'Write a program to delete element at position 2 from array {10,20,30,40}.',
    mathSolution: 'Array deletion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40};\n    int n = 4, pos = 2;\n    for(int i = pos; i < n-1; i++) {\n        arr[i] = arr[i+1];\n    }\n    n--;\n    printf("After deletion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements left from position'
  },
  {
    id: 'c_arrays_36',
    topicId: 'c_arrays',
    question: 'Write a program to find missing number in array {1,2,3,5,6} (1-6).',
    mathSolution: 'Find missing number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,5,6};\n    int n = 6;\n    int total = n*(n+1)/2;\n    int sum = 0;\n    for(int i = 0; i < 5; i++) sum += arr[i];\n    printf("Missing number = %d\\n", total - sum);\n    return 0;\n}',
    hint: 'Use sum formula: n(n+1)/2'
  },
  {
    id: 'c_arrays_37',
    topicId: 'c_arrays',
    question: 'Write a program to find first repeating element in array {1,2,3,2,4,5}.',
    mathSolution: 'First repeating element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,2,4,5};\n    int freq[100] = {0};\n    for(int i = 0; i < 6; i++) {\n        freq[arr[i]]++;\n        if(freq[arr[i]] > 1) {\n            printf("First repeating: %d\\n", arr[i]);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Track frequency and check for >1'
  },
  {
    id: 'c_arrays_38',
    topicId: 'c_arrays',
    question: 'Write a program to find maximum product of two integers in array {10,20,30,5,25}.',
    mathSolution: 'Maximum product pair',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,5,25};\n    int max1 = arr[0], max2 = arr[1];\n    for(int i = 2; i < 5; i++) {\n        if(arr[i] > max1) {\n            max2 = max1;\n            max1 = arr[i];\n        } else if(arr[i] > max2) {\n            max2 = arr[i];\n        }\n    }\n    printf("Maximum product = %d\\n\", max1 * max2);\n    return 0;\n}',
    hint: 'Find two largest numbers'
  },
  {
    id: 'c_arrays_39',
    topicId: 'c_arrays',
    question: 'Write a program to move all zeros to end in array {0,1,0,3,12}.',
    mathSolution: 'Move zeros to end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {0,1,0,3,12};\n    int n = 5, nonZero = 0;\n    for(int i = 0; i < n; i++) {\n        if(arr[i] != 0)\n            arr[nonZero++] = arr[i];\n    }\n    while(nonZero < n)\n        arr[nonZero++] = 0;\n    printf("After moving zeros: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift non-zero elements forward'
  },
  {
    id: 'c_arrays_40',
    topicId: 'c_arrays',
    question: 'Write a program to find leaders in array {16,17,4,3,5,2}.',
    mathSolution: 'Leaders in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {16,17,4,3,5,2};\n    int n = 6, max_from_right = arr[n-1];\n    printf("Leaders: %d ", max_from_right);\n    for(int i = n-2; i >= 0; i--) {\n        if(arr[i] > max_from_right) {\n            max_from_right = arr[i];\n            printf("%d ", arr[i]);\n        }\n    }\n    return 0;\n}',
    hint: 'Traverse from right, keep track of maximum'
  },
  //input-output
   {
    id: 'c_io_1',
    topicId: 'c_input_output',
    question: 'Write a program to print "Hello, World!" using printf.',
    mathSolution: 'Basic output using printf',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    hint: 'Use printf("text");'
  },
  {
    id: 'c_io_2',
    topicId: 'c_input_output',
    question: 'Write a program to print your name using printf.',
    mathSolution: 'String output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("John Doe\\n");\n    return 0;\n}',
    hint: 'Place your name inside quotes'
  },
  {
    id: 'c_io_3',
    topicId: 'c_input_output',
    question: 'Write a program to print numbers 1 to 5 on same line with spaces.',
    mathSolution: 'Print multiple numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("1 2 3 4 5\\n");\n    return 0;\n}',
    hint: 'Use spaces between numbers'
  },
  {
    id: 'c_io_4',
    topicId: 'c_input_output',
    question: 'Write a program to print pattern:\n*\n**\n***',
    mathSolution: 'Print pattern using escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("*\\n**\\n***\\n");\n    return 0;\n}',
    hint: 'Use \\n for new line'
  },
  {
    id: 'c_io_5',
    topicId: 'c_input_output',
    question: 'Write a program to print integer 100 and float 3.14 using format specifiers.',
    mathSolution: 'Format specifiers %d and %f',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Integer: %d\\n", 100);\n    printf("Float: %.2f\\n", 3.14);\n    return 0;\n}',
    hint: 'Use %d for integers, %f for floats'
  },

  // ========== SINGLE INPUT USING scanf (6-15) ==========
  {
    id: 'c_io_6',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input from user and print it.',
    mathSolution: 'Read and print integer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("You entered: %d\\n", num);\n    return 0;\n}',
    hint: 'Use scanf("%d", &variable);'
  },
  {
    id: 'c_io_7',
    topicId: 'c_input_output',
    question: 'Write a program to take one float input and print it with 2 decimal places.',
    mathSolution: 'Read and print float',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float num;\n    printf("Enter a decimal number: ");\n    scanf("%f", &num);\n    printf("You entered: %.2f\\n", num);\n    return 0;\n}',
    hint: 'Use %f for float, %.2f for 2 decimal places'
  },
  {
    id: 'c_io_8',
    topicId: 'c_input_output',
    question: 'Write a program to take one character input and print its ASCII value.',
    mathSolution: 'Character and ASCII',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    printf("ASCII value of %c is %d\\n", ch, ch);\n    return 0;\n}',
    hint: 'Use %c for char, %d prints ASCII value'
  },
  {
    id: 'c_io_9',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its square.',
    mathSolution: 'Calculate square',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("Square of %d is %d\\n", num, num * num);\n    return 0;\n}',
    hint: 'Square = num * num'
  },
  {
    id: 'c_io_10',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and check if it is even or odd.',
    mathSolution: 'Even-odd check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num % 2 == 0)\n        printf("%d is even\\n", num);\n    else\n        printf("%d is odd\\n", num);\n    return 0;\n}',
    hint: 'Use modulo operator %'
  },
  {
    id: 'c_io_11',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its multiplication table up to 10.',
    mathSolution: 'Multiplication table',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    for(int i = 1; i <= 10; i++) {\n        printf("%d x %d = %d\\n", num, i, num * i);\n    }\n    return 0;\n}',
    hint: 'Use loop from 1 to 10'
  },
  {
    id: 'c_io_12',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print whether it is positive, negative, or zero.',
    mathSolution: 'Sign check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num > 0)\n        printf("Positive\\n");\n    else if(num < 0)\n        printf("Negative\\n");\n    else\n        printf("Zero\\n");\n    return 0;\n}',
    hint: 'Use if-else if-else ladder'
  },
  {
    id: 'c_io_13',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its factorial.',
    mathSolution: 'Calculate factorial with validation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, fact = 1;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num < 0) {\n        printf("Invalid input\\n");\n        return 0;\n    }\n    for(int i = 1; i <= num; i++) {\n        fact *= i;\n    }\n    printf("Factorial of %d is %d\\n", num, fact);\n    return 0;\n}',
    hint: 'Factorial is not defined for negative numbers'
  },
  {
    id: 'c_io_14',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print sum of digits.',
    mathSolution: 'Sum of digits (handle negative)',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int num, sum = 0, digit;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    int temp = abs(num);\n    while(temp > 0) {\n        digit = temp % 10;\n        sum += digit;\n        temp /= 10;\n    }\n    printf("Sum of digits of %d is %d\\n", num, sum);\n    return 0;\n}',
    hint: 'Use abs() for negative numbers'
  },
  {
    id: 'c_io_15',
    topicId: 'c_input_output',
    question: 'Write a program to take one integer input and print its reverse.',
    mathSolution: 'Reverse number (handle negative)',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int num, reverse = 0, digit;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    int temp = abs(num);\n    while(temp > 0) {\n        digit = temp % 10;\n        reverse = reverse * 10 + digit;\n        temp /= 10;\n    }\n    if(num < 0) reverse = -reverse;\n    printf("Reverse of %d is %d\\n", num, reverse);\n    return 0;\n}',
    hint: 'Handle negative numbers using abs()'
  },

  // ========== TWO INPUTS (16-35) - MULTIPLE PROMPTS ==========
  {
    id: 'c_io_16',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers as input and print their sum.',
    mathSolution: 'Sum of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Sum = %d\\n", a + b);\n    return 0;\n}',
    hint: 'Use separate prompts for each input'
  },
  {
    id: 'c_io_17',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers as input and print their product.',
    mathSolution: 'Product of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Product = %d\\n", a * b);\n    return 0;\n}',
    hint: 'Multiply a and b'
  },
  {
    id: 'c_io_18',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print the larger one.',
    mathSolution: 'Find maximum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a > b)\n        printf("Larger = %d\\n", a);\n    else\n        printf("Larger = %d\\n", b);\n    return 0;\n}',
    hint: 'Compare using if-else'
  },
  {
    id: 'c_io_19',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and swap them.',
    mathSolution: 'Swap two numbers using temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, temp;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Before swap: a=%d, b=%d\\n", a, b);\n    temp = a;\n    a = b;\n    b = temp;\n    printf("After swap: a=%d, b=%d\\n", a, b);\n    return 0;\n}',
    hint: 'Use third variable temp'
  },
  {
    id: 'c_io_20',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print their average as float.',
    mathSolution: 'Average with type casting',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    float avg = (float)(a + b) / 2;\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Cast sum to float before division'
  },
  {
    id: 'c_io_21',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print their division result as float.',
    mathSolution: 'Division with zero check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter dividend: ");\n    scanf("%d", &a);\n    printf("Enter divisor: ");\n    scanf("%d", &b);\n    if(b == 0) {\n        printf("Division by zero error\\n");\n        return 0;\n    }\n    float result = (float)a / b;\n    printf("%d / %d = %.2f\\n", a, b, result);\n    return 0;\n}',
    hint: 'Check if divisor is zero'
  },
  {
    id: 'c_io_22',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print their remainder (modulus).',
    mathSolution: 'Modulus operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Remainder = %d\\n", a % b);\n    return 0;\n}',
    hint: 'Use % operator'
  },
  {
    id: 'c_io_23',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and check if first is divisible by second.',
    mathSolution: 'Divisibility check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a % b == 0)\n        printf("%d is divisible by %d\\n", a, b);\n    else\n        printf("%d is not divisible by %d\\n", a, b);\n    return 0;\n}',
    hint: 'Check if remainder is zero'
  },
  {
    id: 'c_io_24',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print all numbers between them.',
    mathSolution: 'Print range correctly',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a > b) {\n        int temp = a;\n        a = b;\n        b = temp;\n    }\n    printf("Numbers between %d and %d: ", a, b);\n    for(int i = a + 1; i < b; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Swap if a > b'
  },
  {
    id: 'c_io_25',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and calculate power (first^second).',
    mathSolution: 'Power calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int base, exp, result = 1;\n    printf("Enter base: ");\n    scanf("%d", &base);\n    printf("Enter exponent: ");\n    scanf("%d", &exp);\n    for(int i = 1; i <= exp; i++) {\n        result *= base;\n    }\n    printf("%d^%d = %d\\n", base, exp, result);\n    return 0;\n}',
    hint: 'Multiply base exponent times'
  },
  {
    id: 'c_io_26',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and calculate GCD (HCF).',
    mathSolution: 'Euclidean algorithm with abs',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int x = abs(a), y = abs(b);\n    while(y != 0) {\n        int temp = y;\n        y = x % y;\n        x = temp;\n    }\n    printf("GCD of %d and %d is %d\\n", a, b, x);\n    return 0;\n}',
    hint: 'Use abs() for safety'
  },
  {
    id: 'c_io_27',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and calculate LCM.',
    mathSolution: 'LCM using GCD safely',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int x = abs(a), y = abs(b);\n    while(y != 0) {\n        int temp = y;\n        y = x % y;\n        x = temp;\n    }\n    int lcm = abs(a * b) / x;\n    printf("LCM of %d and %d is %d\\n", a, b, lcm);\n    return 0;\n}',
    hint: 'Use abs() and GCD'
  },
  {
    id: 'c_io_28',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and check if they are equal.',
    mathSolution: 'Equality check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    if(a == b)\n        printf("Numbers are equal\\n");\n    else\n        printf("Numbers are not equal\\n");\n    return 0;\n}',
    hint: 'Use == operator'
  },
  {
    id: 'c_io_29',
    topicId: 'c_input_output',
    question: 'Write a program to take name (string) and age (int) as input and print them.',
    mathSolution: 'String input with spaces',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char name[50];\n    int age;\n    printf("Enter name: ");\n    fgets(name, sizeof(name), stdin);\n    printf("Enter age: ");\n    scanf("%d", &age);\n    printf("Name: %sAge: %d\\n", name, age);\n    return 0;\n}',
    hint: 'Use fgets() for full name input'
  },
  {
    id: 'c_io_30',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print if their sum is even or odd.',
    mathSolution: 'Even-odd of sum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int sum = a + b;\n    if(sum % 2 == 0)\n        printf("Sum is even\\n");\n    else\n        printf("Sum is odd\\n");\n    return 0;\n}',
    hint: 'Calculate sum then check modulo'
  },
  {
    id: 'c_io_31',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and find the distance between them (absolute difference).',
    mathSolution: 'Absolute difference',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int diff = abs(a - b);\n    printf("Distance between %d and %d is %d\\n", a, b, diff);\n    return 0;\n}',
    hint: 'Use abs() function from stdlib.h'
  },
  {
    id: 'c_io_32',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and print the smaller one.',
    mathSolution: 'Find minimum',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int min = (a < b) ? a : b;\n    printf("Smaller = %d\\n", min);\n    return 0;\n}',
    hint: 'Use ternary operator ? :'
  },
  {
    id: 'c_io_33',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and count numbers divisible by 3 in that range.',
    mathSolution: 'Count divisible numbers in range',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, count = 0;\n    printf("Enter start number: ");\n    scanf("%d", &a);\n    printf("Enter end number: ");\n    scanf("%d", &b);\n    for(int i = a; i <= b; i++) {\n        if(i % 3 == 0) count++;\n    }\n    printf("Numbers divisible by 3 between %d and %d: %d\\n", a, b, count);\n    return 0;\n}',
    hint: 'Loop from a to b and check divisibility'
  },
  {
    id: 'c_io_34',
    topicId: 'c_input_output',
    question: 'Write a program to take two integers and check if they are co-prime (GCD=1).',
    mathSolution: 'Co-prime with abs',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int a, b;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    int x = abs(a), y = abs(b);\n    while(y != 0) {\n        int temp = y;\n        y = x % y;\n        x = temp;\n    }\n    if(x == 1)\n        printf("%d and %d are co-prime\\n", a, b);\n    else\n        printf("%d and %d are not co-prime\\n", a, b);\n    return 0;\n}',
    hint: 'Check GCD == 1'
  },
  {
  id: 'c_io_35',
  topicId: 'c_input_output',
  question: 'Write a program to take side of a square as input and calculate its area and perimeter.',
  mathSolution: 'Area = side × side, Perimeter = 4 × side',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    float side, area, perimeter;\n    printf("Enter side of square: ");\n    scanf("%f", &side);\n    area = side * side;\n    perimeter = 4 * side;\n    printf("Area of square = %.2f\\n", area);\n    printf("Perimeter of square = %.2f\\n", perimeter);\n    return 0;\n}',
  hint: 'Area = side², Perimeter = 4 × side'
},

  // ========== THREE OR MORE INPUTS (36-45) ==========
  {
    id: 'c_io_36',
    topicId: 'c_input_output',
    question: 'Write a program to take three integers and print their sum and average.',
    mathSolution: 'Sum and average of three numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Enter third number: ");\n    scanf("%d", &c);\n    int sum = a + b + c;\n    float avg = sum / 3.0;\n    printf("Sum = %d\\n", sum);\n    printf("Average = %.2f\\n", avg);\n    return 0;\n}',
    hint: 'Sum all three, divide by 3 for average'
  },
  {
    id: 'c_io_37',
    topicId: 'c_input_output',
    question: 'Write a program to take three integers and find the largest among them.',
    mathSolution: 'Maximum of three numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c, max;\n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    printf("Enter third number: ");\n    scanf("%d", &c);\n    max = a;\n    if(b > max) max = b;\n    if(c > max) max = c;\n    printf("Largest number = %d\\n", max);\n    return 0;\n}',
    hint: 'Compare sequentially'
  },
  {
    id: 'c_io_38',
    topicId: 'c_input_output',
    question: 'Write a program to take three sides of triangle and check if it forms a valid triangle.',
    mathSolution: 'Triangle validity check (sum of two sides > third side)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    printf("Enter first side: ");\n    scanf("%d", &a);\n    printf("Enter second side: ");\n    scanf("%d", &b);\n    printf("Enter third side: ");\n    scanf("%d", &c);\n    if((a + b > c) && (a + c > b) && (b + c > a))\n        printf("Valid triangle\\n");\n    else\n        printf("Invalid triangle\\n");\n    return 0;\n}',
    hint: 'Sum of any two sides must be greater than third'
  },
  {
  id: 'c_io_39',
  topicId: 'c_input_output',
  question: 'Write a program to take length and breadth of a rectangle as input and calculate its area and perimeter.',
  mathSolution: 'Area = length × breadth, Perimeter = 2 × (length + breadth)',
  codeSolution: '#include <stdio.h>\n\nint main() {\n    float l, b, area, perimeter;\n    printf("Enter length: ");\n    scanf("%f", &l);\n    printf("Enter breadth: ");\n    scanf("%f", &b);\n    area = l * b;\n    perimeter = 2 * (l + b);\n    printf("Area of rectangle = %.2f\\n", area);\n    printf("Perimeter of rectangle = %.2f\\n", perimeter);\n    return 0;\n}',
  hint: 'Area = l × b, Perimeter = 2 × (l + b)'
},
  {
    id: 'c_io_40',
    topicId: 'c_input_output',
    question: 'Write a program to take marks of 5 subjects and calculate percentage.',
    mathSolution: 'Percentage calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks[5], sum = 0;\n    for(int i = 0; i < 5; i++) {\n        printf("Enter marks for subject %d: ", i+1);\n        scanf("%d", &marks[i]);\n        sum += marks[i];\n    }\n    float percentage = sum / 5.0;\n    printf("Total = %d\\n", sum);\n    printf("Percentage = %.2f%%\\n", percentage);\n    return 0;\n}',
    hint: 'Loop through 5 subjects for input'
  },
  //conditional
   {
    id: 'c_conditional_001',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive using if statement.',
    mathSolution: 'Positive number check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 15;\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use if statement to execute code when condition is true'
  },
  {
    id: 'c_conditional_002',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is even using if statement.',
    mathSolution: 'Even number check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 8;\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use modulus operator % to check divisibility by 2'
  },
  {
    id: 'c_conditional_003',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is uppercase using if statement.',
    mathSolution: 'Uppercase check with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'G\';\n    if(ch >= \'A\' && ch <= \'Z\') {\n        printf("%c is uppercase\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is between A and Z'
  },
  {
    id: 'c_conditional_004',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is multiple of 5 using if statement.',
    mathSolution: 'Multiple of 5 check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 25;\n    if(num % 5 == 0) {\n        printf("%d is a multiple of 5\\n", num);\n    }\n    return 0;\n}',
    hint: 'Check num % 5 == 0'
  },
  {
    id: 'c_conditional_005',
    topicId: 'c_conditional',
    question: 'Write a program to check if a year is a century year using if statement.',
    mathSolution: 'Century year check with fixed year',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year = 1900;\n    if(year % 100 == 0) {\n        printf("%d is a century year\\n", year);\n    }\n    return 0;\n}',
    hint: 'Century years are divisible by 100'
  },
  {
    id: 'c_conditional_006',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is between 10 and 20 using if statement.',
    mathSolution: 'Range check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 15;\n    if(num >= 10 && num <= 20) {\n        printf("%d is between 10 and 20\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND (&&) to check both conditions'
  },
  {
    id: 'c_conditional_007',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is vowel using if statement.',
    mathSolution: 'Vowel check with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'e\';\n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\') {\n        printf("%c is a vowel\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Use logical OR (||) to check multiple conditions'
  },
  {
    id: 'c_conditional_008',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is divisible by both 3 and 4 using if statement.',
    mathSolution: 'Divisible by 3 and 4 with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 12;\n    if(num % 3 == 0 && num % 4 == 0) {\n        printf("%d is divisible by both 3 and 4\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND to combine conditions'
  },
  {
    id: 'c_conditional_009',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is even or odd using if-else.',
    mathSolution: 'Even or odd with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 7;\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use if-else for two-way decisions'
  },
  {
    id: 'c_conditional_010',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive or negative using if-else.',
    mathSolution: 'Positive or negative with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -5;\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else {\n        printf("%d is negative\\n", num);\n    }\n    return 0;\n}',
    hint: 'Compare with zero for positive/negative'
  },

  // ========== IF-ELSE STATEMENT (11-20) ==========
  {
    id: 'c_conditional_011',
    topicId: 'c_conditional',
    question: 'Write a program to find the larger of two numbers using if-else.',
    mathSolution: 'Maximum of two with fixed values',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40;\n    if(a > b) {\n        printf("%d is larger\\n", a);\n    } else {\n        printf("%d is larger\\n", b);\n    }\n    return 0;\n}',
    hint: 'Compare a and b using > operator'
  },
  {
    id: 'c_conditional_012',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is alphabet or not using if-else.',
    mathSolution: 'Alphabet or not with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'9\';\n    if((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\')) {\n        printf("%c is an alphabet\\n", ch);\n    } else {\n        printf("%c is not an alphabet\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is in lowercase or uppercase range'
  },
  {
    id: 'c_conditional_013',
    topicId: 'c_conditional',
    question: 'Write a program to check leap year using if-else.',
    mathSolution: 'Leap year check with fixed year',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year = 2024;\n    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n        printf("%d is a leap year\\n", year);\n    } else {\n        printf("%d is not a leap year\\n", year);\n    }\n    return 0;\n}',
    hint: 'Leap year: divisible by 4 but not by 100, or divisible by 400'
  },
  {
    id: 'c_conditional_014',
    topicId: 'c_conditional',
    question: 'Write a program to check voting eligibility using if-else.',
    mathSolution: 'Voting eligibility with fixed age',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    if(age >= 18) {\n        printf("You are eligible to vote\\n");\n    } else {\n        printf("You are not eligible to vote\\n");\n        printf("Wait for %d more years\\n", 18 - age);\n    }\n    return 0;\n}',
    hint: 'Check if age is 18 or above'
  },
  {
    id: 'c_conditional_015',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is divisible by 7 or not using if-else.',
    mathSolution: 'Divisible by 7 with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 49;\n    if(num % 7 == 0) {\n        printf("%d is divisible by 7\\n", num);\n    } else {\n        printf("%d is not divisible by 7\\n", num);\n    }\n    return 0;\n}',
    hint: 'Check num % 7 == 0'
  },
  {
    id: 'c_conditional_016',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is a single digit number using if-else.',
    mathSolution: 'Single digit check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 5;\n    if(num >= -9 && num <= 9) {\n        printf("%d is a single digit number\\n", num);\n    } else {\n        printf("%d is not a single digit number\\n", num);\n    }\n    return 0;\n}',
    hint: 'Single digit numbers are between -9 and 9'
  },
  {
    id: 'c_conditional_017',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is digit or not using if-else.',
    mathSolution: 'Digit or not with fixed character',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'5\';\n    if(ch >= \'0\' && ch <= \'9\') {\n        printf("%c is a digit\\n", ch);\n    } else {\n        printf("%c is not a digit\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is between 0 and 9'
  },
  {
    id: 'c_conditional_018',
    topicId: 'c_conditional',
    question: 'Write a program to find absolute value of a number using if-else.',
    mathSolution: 'Absolute value with fixed number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -10, abs;\n    if(num < 0) {\n        abs = -num;\n    } else {\n        abs = num;\n    }\n    printf("Absolute value of %d is %d\\n", num, abs);\n    return 0;\n}',
    hint: 'If negative, make positive; otherwise keep as is'
  },
  {
    id: 'c_conditional_019',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive, negative, or zero using if-else if.',
    mathSolution: 'Positive, negative, or zero',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 0;\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else if(num < 0) {\n        printf("%d is negative\\n", num);\n    } else {\n        printf("Number is zero\\n");\n    }\n    return 0;\n}',
    hint: 'Use if-else if-else for multiple conditions'
  },
  {
    id: 'c_conditional_020',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using if-else.',
    mathSolution: 'Maximum of three with fixed values',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 45, b = 78, c = 32;\n    if(a >= b && a >= c) {\n        printf("%d is largest\\n", a);\n    } else if(b >= a && b >= c) {\n        printf("%d is largest\\n", b);\n    } else {\n        printf("%d is largest\\n", c);\n    }\n    return 0;\n}',
    hint: 'Compare each number with the others'
  },

  // ========== NESTED IF-ELSE (21-30) ==========
  {
    id: 'c_conditional_021',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using nested if-else.',
    mathSolution: 'Maximum using nested if',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 45, b = 78, c = 32;\n    if(a > b) {\n        if(a > c) {\n            printf("%d is largest\\n", a);\n        } else {\n            printf("%d is largest\\n", c);\n        }\n    } else {\n        if(b > c) {\n            printf("%d is largest\\n", b);\n        } else {\n            printf("%d is largest\\n", c);\n        }\n    }\n    return 0;\n}',
    hint: 'Compare a and b, then compare winner with c'
  },
  {
    id: 'c_conditional_022',
    topicId: 'c_conditional',
    question: 'Write a program to determine grade based on marks using nested if-else.',
    mathSolution: 'Grade determination with fixed marks',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks = 85;\n    if(marks >= 0 && marks <= 100) {\n        if(marks >= 90) {\n            printf("Grade A\\n");\n        } else if(marks >= 80) {\n            printf("Grade B\\n");\n        } else if(marks >= 70) {\n            printf("Grade C\\n");\n        } else if(marks >= 60) {\n            printf("Grade D\\n");\n        } else {\n            printf("Grade F\\n");\n        }\n    } else {\n        printf("Invalid marks\\n");\n    }\n    return 0;\n}',
    hint: 'First check validity, then assign grade'
  },
  {
    id: 'c_conditional_023',
    topicId: 'c_conditional',
    question: 'Write a program to determine the type of triangle based on sides using nested if-else.',
    mathSolution: 'Triangle type with fixed sides',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5, c = 5;\n    if(a + b > c && a + c > b && b + c > a) {\n        if(a == b && b == c) {\n            printf("Equilateral triangle\\n");\n        } else if(a == b || b == c || a == c) {\n            printf("Isosceles triangle\\n");\n        } else {\n            printf("Scalene triangle\\n");\n        }\n    } else {\n        printf("Not a valid triangle\\n");\n    }\n    return 0;\n}',
    hint: 'Check triangle inequality first, then classify by sides'
  },
  {
    id: 'c_conditional_024',
    topicId: 'c_conditional',
    question: 'Write a program to determine the quadrant of a point using nested if-else.',
    mathSolution: 'Quadrant of point with fixed coordinates',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 5, y = -3;\n    if(x == 0 && y == 0) {\n        printf("Origin\\n");\n    } else if(x == 0) {\n        printf("On Y-axis\\n");\n    } else if(y == 0) {\n        printf("On X-axis\\n");\n    } else {\n        if(x > 0 && y > 0) printf("Quadrant I\\n");\n        else if(x < 0 && y > 0) printf("Quadrant II\\n");\n        else if(x < 0 && y < 0) printf("Quadrant III\\n");\n        else printf("Quadrant IV\\n");\n    }\n    return 0;\n}',
    hint: 'Check axes first, then quadrants based on signs'
  },
  {
    id: 'c_conditional_025',
    topicId: 'c_conditional',
    question: 'Write a program to determine the type of angle using nested if-else.',
    mathSolution: 'Angle type with fixed angle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int angle = 120;\n    if(angle > 0 && angle < 360) {\n        if(angle < 90) printf("Acute angle\\n");\n        else if(angle == 90) printf("Right angle\\n");\n        else if(angle < 180) printf("Obtuse angle\\n");\n        else if(angle == 180) printf("Straight angle\\n");\n        else printf("Reflex angle\\n");\n    } else {\n        printf("Invalid angle\\n");\n    }\n    return 0;\n}',
    hint: 'Classify based on measure: acute(<90), right(90), obtuse(<180), straight(180), reflex(>180)'
  },
  {
    id: 'c_conditional_026',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is prime using if-else.',
    mathSolution: 'Prime number check with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 17, i, isPrime = 1;\n    if(num <= 1) {\n        isPrime = 0;\n    } else {\n        for(i = 2; i <= num/2; i++) {\n            if(num % i == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n    }\n    if(isPrime) printf("%d is prime\\n", num);\n    else printf("%d is not prime\\n", num);\n    return 0;\n}',
    hint: 'Check divisibility from 2 to num/2'
  },
  {
    id: 'c_conditional_027',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is palindrome using if-else.',
    mathSolution: 'Palindrome number with fixed value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 121, reversed = 0, remainder, original;\n    original = num;\n    while(num > 0) {\n        remainder = num % 10;\n        reversed = reversed * 10 + remainder;\n        num /= 10;\n    }\n    if(original == reversed)\n        printf("%d is a palindrome\\n", original);\n    else\n        printf("%d is not a palindrome\\n", original);\n    return 0;\n}',
    hint: 'Reverse the number and compare with original'
  },
  {
    id: 'c_conditional_028',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest digit in a number.',
    mathSolution: 'Largest digit with fixed number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 3948, largest = 0, digit;\n    int temp = num;\n    while(temp > 0) {\n        digit = temp % 10;\n        if(digit > largest) {\n            largest = digit;\n        }\n        temp /= 10;\n    }\n    printf("Largest digit in %d is %d\\n", num, largest);\n    return 0;\n}',
    hint: 'Extract digits and keep track of maximum'
  },
  {
    id: 'c_conditional_029',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is Armstrong number.',
    mathSolution: 'Armstrong number with fixed value',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int num = 153, sum = 0, temp, remainder, n = 0;\n    temp = num;\n    while(temp != 0) {\n        temp /= 10;\n        n++;\n    }\n    temp = num;\n    while(temp != 0) {\n        remainder = temp % 10;\n        sum += pow(remainder, n);\n        temp /= 10;\n    }\n    if(sum == num)\n        printf("%d is an Armstrong number\\n", num);\n    else\n        printf("%d is not an Armstrong number\\n", num);\n    return 0;\n}',
    hint: 'Sum of digits raised to power of number of digits equals the number'
  },
  {
    id: 'c_conditional_030',
    topicId: 'c_conditional',
    question: 'Write a program to find factorial of a number using if-else.',
    mathSolution: 'Factorial with fixed number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 5, fact = 1;\n    for(int i = 1; i <= num; i++) {\n        fact *= i;\n    }\n    printf("Factorial of %d = %d\\n", num, fact);\n    return 0;\n}',
    hint: 'Multiply numbers from 1 to n'
  },

  // ========== CONDITIONAL OPERATOR (TERNARY) (31-40) ==========
  {
    id: 'c_conditional_031',
    topicId: 'c_conditional',
    question: 'Write a program to find larger of two numbers using conditional operator.',
    mathSolution: 'Maximum with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40, max;\n    max = (a > b) ? a : b;\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Ternary: condition ? value_if_true : value_if_false'
  },
  {
    id: 'c_conditional_032',
    topicId: 'c_conditional',
    question: 'Write a program to check even or odd using conditional operator.',
    mathSolution: 'Even/odd with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 7;\n    printf("%d is %s\\n", num, (num % 2 == 0) ? "even" : "odd");\n    return 0;\n}',
    hint: 'Use ternary directly in printf'
  },
  {
    id: 'c_conditional_033',
    topicId: 'c_conditional',
    question: 'Write a program to find absolute value using conditional operator.',
    mathSolution: 'Absolute value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -15, abs;\n    abs = (num < 0) ? -num : num;\n    printf("Absolute value = %d\\n", abs);\n    return 0;\n}',
    hint: 'abs = (num < 0) ? -num : num'
  },
  {
    id: 'c_conditional_034',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using nested conditional operator.',
    mathSolution: 'Maximum of three',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 45, b = 78, c = 32, max;\n    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Nested ternary operators can find maximum of three'
  },
  {
    id: 'c_conditional_035',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive, negative, or zero using conditional operator.',
    mathSolution: 'Sign with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = -7;\n    printf("%d is %s\\n", num,\n           (num > 0) ? "positive" :\n           (num < 0) ? "negative" : "zero");\n    return 0;\n}',
    hint: 'Nested ternaries handle multiple conditions'
  },
  {
    id: 'c_conditional_036',
    topicId: 'c_conditional',
    question: 'Write a program to find the minimum of two numbers using conditional operator.',
    mathSolution: 'Minimum of two',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40, min;\n    min = (a < b) ? a : b;\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Use (<) instead of (>) for minimum'
  },
  {
    id: 'c_conditional_037',
    topicId: 'c_conditional',
    question: 'Write a program to check if a year is leap year using conditional operator.',
    mathSolution: 'Leap year with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year = 2024;\n    printf("%d is %s\\n", year,\n           ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? "a leap year" : "not a leap year");\n    return 0;\n}',
    hint: 'Leap year condition with ternary'
  },
  {
    id: 'c_conditional_038',
    topicId: 'c_conditional',
    question: 'Write a program to find the smaller of two numbers using conditional operator.',
    mathSolution: 'Smaller of two',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 35, b = 22;\n    printf("%d is smaller\\n", (a < b) ? a : b);\n    return 0;\n}',
    hint: 'Directly print the result of conditional operator'
  },
  {
    id: 'c_conditional_039',
    topicId: 'c_conditional',
    question: 'Write a program to check voting eligibility using conditional operator.',
    mathSolution: 'Voting eligibility with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    printf("You are %s\\n", (age >= 18) ? "eligible to vote" : "not eligible to vote");\n    return 0;\n}',
    hint: 'Use ternary for conditional strings'
  },
  {
    id: 'c_conditional_040',
    topicId: 'c_conditional',
    question: 'Write a program to find the square root or square based on condition using conditional operator.',
    mathSolution: 'Square or square root',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int choice = 1, num = 9;\n    printf("Result: %f\\n", (choice == 1) ? sqrt(num) : (double)(num * num));\n    return 0;\n}',
    hint: 'Use conditional to choose between operations'
  },
 
);