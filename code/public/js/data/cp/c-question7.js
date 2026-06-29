QuizData.questions.push(
  // pointer ,constants ,dsa-BASIC
  {
    id: 'c_ptrarr_1',
    topicId: 'c_pointer_array',
    question: 'Write a program to show that array name is pointer to first element.',
    mathSolution: 'arr equals &arr[0]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    if(arr == &arr[0])\n        printf("Array name points to first element\\n");\n    else\n        printf("Not equal\\n");\n    printf("Address of arr: %p\\n", (void*)arr);\n    printf("Address of &arr[0]: %p\\n", (void*)&arr[0]);\n    return 0;\n}',
    hint: 'Array name decays to pointer'
  },
  {
    id: 'c_ptrarr_2',
    topicId: 'c_pointer_array',
    question: 'Write a program to print array elements using pointer arithmetic.',
    mathSolution: '*(arr + i) gives arr[i]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    printf("Array elements: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", *(arr + i));\n    }\n    return 0;\n}',
    hint: 'Add offset to base address'
  },
  {
    id: 'c_ptrarr_3',
    topicId: 'c_pointer_array',
    question: 'Write a program to find address difference between consecutive array elements.',
    mathSolution: '&arr[1] - &arr[0] = 1 (in elements)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    long diff = &arr[1] - &arr[0];\n    printf("Difference between consecutive elements: %ld\\n", diff);\n    printf("Byte difference: %ld\\n", (long)((char*)&arr[1] - (char*)&arr[0]));\n    return 0;\n}',
    hint: 'Pointer difference gives element count'
},
  {
    id: 'c_ptrarr_4',
    topicId: 'c_pointer_array',
    question: 'Write a program to show sizeof(arr) vs sizeof(ptr) difference.',
    mathSolution: 'Array size vs pointer size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10];\n    int *ptr = arr;\n    printf("sizeof(arr): %zu bytes\\n", sizeof(arr));\n    printf("sizeof(ptr): %zu bytes\\n", sizeof(ptr));\n    return 0;\n}',
    hint: 'sizeof(arr) gives total bytes, sizeof(ptr) gives pointer size'
  },
  {
    id: 'c_ptrarr_5',
    topicId: 'c_pointer_array',
    question: 'Write a program to access array in reverse order using pointer.',
    mathSolution: 'Start from last element and decrement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    int *p = arr + n - 1;\n    printf("Array in reverse: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", *p--);\n    }\n    return 0;\n}',
    hint: 'Decrement pointer to go backward'
  },
  {
    id: 'c_ptrarr_6',
    topicId: 'c_pointer_array',
    question: 'Write a program to find middle element using pointer arithmetic.',
    mathSolution: 'arr + n/2 points to middle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5;\n    int *mid = arr + n/2;\n    printf("Middle element: %d\\n", *mid);\n    return 0;\n}',
    hint: 'Add offset to base'
  },
 {
    id: 'c_ptrarr_7',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if pointer is within array bounds.',
    mathSolution: 'Compare with arr and arr+n',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr + 3;\n    int n = 5;\n    if(p >= arr && p < arr + n) {\n        printf("Pointer is within array bounds\\n");\n        printf("Value: %d\\n", *p);\n    }\n    return 0;\n}',
    hint: 'Valid range is [arr, arr+n)'
},
  {
    id: 'c_ptrarr_8',
    topicId: 'c_pointer_array',
    question: 'Write a program to find number of elements between two pointers.',
    mathSolution: 'ptr2 - ptr1 gives element count',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *start = &arr[1];\n    int *end = &arr[4];\n    ptrdiff_t count = end - start;\n    printf("Number of elements: %td\\n", count);\n    return 0;\n}',
    hint: 'Both must point to same array'
  },
  {
    id: 'c_ptrarr_9',
    topicId: 'c_pointer_array',
    question: 'Write a program to compare pointers for relative position.',
    mathSolution: 'p < q means p points to earlier element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = &arr[1];\n    int *q = &arr[3];\n    if(p < q) {\n        printf("p points to earlier element\\n");\n    }\n    return 0;\n}',
    hint: 'Pointer comparison works in same array'
  },
  {
    id: 'c_ptrarr_10',
    topicId: 'c_pointer_array',
    question: 'Write a program to traverse array using pointer.',
    mathSolution: 'Increment pointer until end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr;\n    printf("Array elements: ");\n    for(ptr = arr; ptr < arr + 5; ptr++) {\n        printf("%d ", *ptr);\n    }\n    return 0;\n}',
    hint: 'Use pointer as loop variable'
  },

  // ========== ARRAY OF POINTERS (11-20) ==========
  {
    id: 'c_ptrarr_11',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of pointers to integers.',
    mathSolution: 'Each element can point to an int',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    int *ptrArr[3] = {&a, &b, &c};\n    for(int i = 0; i < 3; i++) {\n        printf("Value %d: %d\\n", i, *ptrArr[i]);\n    }\n    return 0;\n}',
    hint: '[] has higher precedence than *'
  },
  {
    id: 'c_ptrarr_12',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of strings using pointer array.',
    mathSolution: 'Array of char pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *fruits[] = {"Apple", "Banana", "Orange", "Mango", "Grape"};\n    for(int i = 0; i < 5; i++) {\n        printf("%s\\n", fruits[i]);\n    }\n    return 0;\n}',
    hint: 'Each points to string literal'
  },
  {
    id: 'c_ptrarr_13',
    topicId: 'c_pointer_array',
    question: 'Write a program to sort array of strings using pointer array.',
    mathSolution: 'Rearrange pointers, not strings',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *fruits[] = {"Banana", "Apple", "Grape", "Mango", "Cherry"};\n    int n = 5;\n    for(int i = 0; i < n-1; i++) {\n        for(int j = i+1; j < n; j++) {\n            if(strcmp(fruits[i], fruits[j]) > 0) {\n                char *temp = fruits[i];\n                fruits[i] = fruits[j];\n                fruits[j] = temp;\n            }\n        }\n    }\n    printf("Sorted strings: ");\n    for(int i = 0; i < n; i++) {\n        printf("%s ", fruits[i]);\n    }\n    return 0;\n}',
    hint: 'Swap pointers only'
  },
  {
    id: 'c_ptrarr_14',
    topicId: 'c_pointer_array',
    question: 'Write a program to find longest string in array using pointers.',
    mathSolution: 'Compare string lengths',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *words[] = {"Hello", "Beautiful", "World", "C", "Programming"};\n    int n = 5;\n    char *longest = words[0];\n    for(int i = 1; i < n; i++) {\n        if(strlen(words[i]) > strlen(longest)) {\n            longest = words[i];\n        }\n    }\n    printf("Longest string: %s\\n", longest);\n    return 0;\n}',
    hint: 'Keep pointer to longest'
  },
  {
    id: 'c_ptrarr_15',
    topicId: 'c_pointer_array',
    question: 'Write a program to concatenate all strings in array.',
    mathSolution: 'Join strings into one buffer',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *words[] = {"Hello", " ", "World", " from ", "C"};\n    char result[100] = "";\n    for(int i = 0; i < 5; i++) {\n        strcat(result, words[i]);\n    }\n    printf("Concatenated: %s\\n", result);\n    return 0;\n}',
    hint: 'Use strcat repeatedly'
  },
  {
    id: 'c_ptrarr_16',
    topicId: 'c_pointer_array',
    question: 'Write a program to declare pointer to array of 5 integers.',
    mathSolution: 'Points to entire array, not first element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    int (*ptr)[5] = &arr;\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", (*ptr)[i]);\n    }\n    return 0;\n}',
    hint: 'Parentheses needed: (*ptr)[5]'
  },
  {
    id: 'c_ptrarr_17',
    topicId: 'c_pointer_array',
    question: 'Write a program to find size of pointer to array vs array.',
    mathSolution: 'sizeof(*ptr) gives array size',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10];\n    int (*ptr)[10] = &arr;\n    printf("sizeof(ptr): %zu bytes\\n", sizeof(ptr));\n    printf("sizeof(*ptr): %zu bytes\\n", sizeof(*ptr));\n    return 0;\n}',
    hint: 'ptr size is pointer, *ptr is array'
  },
  {
    id: 'c_ptrarr_18',
    topicId: 'c_pointer_array',
    question: 'Write a program to create jagged array using pointer array.',
    mathSolution: 'Each row can have different size',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *jagged[3];\n    int size[3] = {2, 4, 3};\n    for(int i = 0; i < 3; i++) {\n        jagged[i] = (int*)malloc(size[i] * sizeof(int));\n        for(int j = 0; j < size[i]; j++) {\n            jagged[i][j] = i * 10 + j + 1;\n        }\n    }\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < size[i]; j++) {\n            printf("%d ", jagged[i][j]);\n        }\n        printf("\\n");\n        free(jagged[i]);\n    }\n    return 0;\n}',
    hint: 'Array of pointers, each to different size'
  },
  {
    id: 'c_ptrarr_19',
    topicId: 'c_pointer_array',
    question: 'Write a program to create dynamic 2D array using pointer to pointer.',
    mathSolution: 'Allocate rows, then each row',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int rows = 3, cols = 3;\n    int **mat = (int**)malloc(rows * sizeof(int*));\n    for(int i = 0; i < rows; i++) {\n        mat[i] = (int*)malloc(cols * sizeof(int));\n        for(int j = 0; j < cols; j++) {\n            mat[i][j] = i * cols + j + 1;\n        }\n    }\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n        free(mat[i]);\n    }\n    free(mat);\n    return 0;\n}',
    hint: 'Double pointer for dynamic 2D'
  },
  {
    id: 'c_ptrarr_20',
    topicId: 'c_pointer_array',
    question: 'Write a program to pass 2D array to function using pointer to array.',
    mathSolution: 'Pointer to array parameter',
    codeSolution: '#include <stdio.h>\n\nvoid printMatrix(int (*mat)[3], int rows) {\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n}\n\nint main() {\n    int matrix[2][3] = {{1,2,3},{4,5,6}};\n    printMatrix(matrix, 2);\n    return 0;\n}',
    hint: 'Column size must be known'
  },

  // ========== 2D ARRAYS AND POINTERS (21-30) ==========
  {
    id: 'c_ptrarr_21',
    topicId: 'c_pointer_array',
    question: 'Write a program to traverse 2D array using row pointer.',
    mathSolution: 'Increment row pointer to move to next row',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int (*rowPtr)[3] = mat;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", rowPtr[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Each increment skips one row'
  },
  {
    id: 'c_ptrarr_22',
    topicId: 'c_pointer_array',
    question: 'Write a program to access 2D array using flattened pointer.',
    mathSolution: 'ptr[i*cols + j] equals arr[i][j]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[2][3] = {{1,2,3},{4,5,6}};\n    int *ptr = &mat[0][0];\n    int rows = 2, cols = 3;\n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            printf("%d ", ptr[i * cols + j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Calculate linear index'
  },
  {
    id: 'c_ptrarr_23',
    topicId: 'c_pointer_array',
    question: 'Write a program to transpose matrix using pointer array.',
    mathSolution: 'Swap rows and columns',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int transpose[3][3];\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            transpose[j][i] = mat[i][j];\n        }\n    }\n    printf("Transpose:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", transpose[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap elements across diagonal'
  },
  {
    id: 'c_ptrarr_24',
    topicId: 'c_pointer_array',
    question: 'Write a program to multiply two matrices.',
    mathSolution: 'Result[i][j] = sum(A[i][k] * B[k][j])',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int A[2][2] = {{1,2},{3,4}};\n    int B[2][2] = {{5,6},{7,8}};\n    int C[2][2] = {0};\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            for(int k = 0; k < 2; k++) {\n                C[i][j] += A[i][k] * B[k][j];\n            }\n        }\n    }\n    printf("Product:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            printf("%d ", C[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Triple nested loops'
  },
  {
    id: 'c_ptrarr_25',
    topicId: 'c_pointer_array',
    question: 'Write a program to find sum of diagonal elements.',
    mathSolution: 'Elements where i == j',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    for(int i = 0; i < 3; i++) {\n        sum += mat[i][i];\n    }\n    printf("Sum of diagonal: %d\\n", sum);\n    return 0;\n}',
    hint: 'Diagonal elements have i == j'
  },
  {
    id: 'c_ptrarr_26',
    topicId: 'c_pointer_array',
    question: 'Write a program to create lookup table using array of pointers.',
    mathSolution: 'Pointers to constant strings',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const char *months[] = {"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"};\n    int month = 5;\n    printf("Month %d: %s\\n", month, months[month-1]);\n    return 0;\n}',
    hint: 'Index by month number'
  },
  {
    id: 'c_ptrarr_27',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of function pointers for calculator.',
    mathSolution: 'Multiple functions in array',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    int (*ops[])(int, int) = {add, sub, mul};\n    int a = 10, b = 5;\n    for(int i = 0; i < 3; i++) {\n        printf("Result %d: %d\\n", i, ops[i](a, b));\n    }\n    return 0;\n}',
    hint: 'Each element points to function'
  },
  {
    id: 'c_ptrarr_28',
    topicId: 'c_pointer_array',
    question: 'Write a program to pass array of pointers to function.',
    mathSolution: 'Function receives pointer array',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid printStrings(char *arr[], int n) {\n    for(int i = 0; i < n; i++) {\n        printf("%s\\n", arr[i]);\n    }\n}\n\nint main() {\n    char *colors[] = {"Red", "Green", "Blue"};\n    printStrings(colors, 3);\n    return 0;\n}',
    hint: 'Array of string pointers parameter'
  },
  {
    id: 'c_ptrarr_29',
    topicId: 'c_pointer_array',
    question: 'Write a program to store command line arguments simulation.',
    mathSolution: 'argv is array of char pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "Hello", "World", "C"};\n    int argc = 4;\n    for(int i = 0; i < argc; i++) {\n        printf("argv[%d] = %s\\n", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'argv[0] is program name'
  },
  {
    id: 'c_ptrarr_30',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of pointers to structures.',
    mathSolution: 'Each element points to struct',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Student {\n    char name[50];\n    int age;\n};\n\nint main() {\n    struct Student *students[3];\n    for(int i = 0; i < 3; i++) {\n        students[i] = (struct Student*)malloc(sizeof(struct Student));\n        sprintf(students[i]->name, "Student%d\", i+1);\n        students[i]->age = 20 + i;\n    }\n    for(int i = 0; i < 3; i++) {\n        printf("%s: %d years\\n", students[i]->name, students[i]->age);\n        free(students[i]);\n    }\n    return 0;\n}',
    hint: 'Array of struct pointers'
  },

  // ========== VOID POINTERS AND GENERIC ARRAYS (31-40) ==========
  {
    id: 'c_ptrarr_31',
    topicId: 'c_pointer_array',
    question: 'Write a program to create array of void pointers (generic).',
    mathSolution: 'Can point to any type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 42;\n    float f = 3.14;\n    char c = \'A\';\n    void *generic[3] = {&i, &f, &c};\n    printf("Integer: %d\\n", *(int*)generic[0]);\n    printf("Float: %.2f\\n", *(float*)generic[1]);\n    printf("Char: %c\\n", *(char*)generic[2]);\n    return 0;\n}',
    hint: 'Store any address type'
  },
  {
    id: 'c_ptrarr_32',
    topicId: 'c_pointer_array',
    question: 'Write a program to sort integers using pointer array (index sort).',
    mathSolution: 'Sort pointers, leave original',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {45, 12, 78, 23, 56};\n    int n = 5;\n    int *ptrs[5];\n    for(int i = 0; i < n; i++) ptrs[i] = &arr[i];\n    for(int i = 0; i < n-1; i++) {\n        for(int j = i+1; j < n; j++) {\n            if(*ptrs[i] > *ptrs[j]) {\n                int *temp = ptrs[i];\n                ptrs[i] = ptrs[j];\n                ptrs[j] = temp;\n            }\n        }\n    }\n    printf("Sorted order: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", *ptrs[i]);\n    }\n    return 0;\n}',
    hint: 'Indirect sorting'
  },
  {
    id: 'c_ptrarr_33',
    topicId: 'c_pointer_array',
    question: 'Write a program to implement ring buffer using array of pointers.',
    mathSolution: 'Circular buffer of data pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int data[8] = {10,20,30,40,50,60,70,80};\n    int *buffer[5];\n    int head = 0;\n    for(int i = 0; i < 5; i++) {\n        buffer[i] = &data[head];\n        head = (head + 1) % 8;\n    }\n    printf("Ring buffer elements: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", *buffer[i]);\n    }\n    return 0;\n}',
    hint: 'Store pointers to data'
  },
  {
    id: 'c_ptrarr_34',
    topicId: 'c_pointer_array',
    question: 'Write a program to find if array is sorted using pointers.',
    mathSolution: 'Compare consecutive elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5, sorted = 1;\n    for(int *p = arr; p < arr + n - 1; p++) {\n        if(*p > *(p + 1)) {\n            sorted = 0;\n            break;\n        }\n    }\n    if(sorted) printf("Array is sorted\\n");\n    else printf("Array is not sorted\\n");\n    return 0;\n}',
    hint: 'Check adjacent elements'
  },
  {
    id: 'c_ptrarr_35',
    topicId: 'c_pointer_array',
    question: 'Write a program to find second largest element using pointers.',
    mathSolution: 'Track largest and second largest',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 45, 12, 78, 34};\n    int n = 5;\n    int *largest = &arr[0];\n    int *second = &arr[0];\n    for(int *p = arr + 1; p < arr + n; p++) {\n        if(*p > *largest) {\n            second = largest;\n            largest = p;\n        } else if(*p > *second && *p != *largest) {\n            second = p;\n        }\n    }\n    printf("Second largest: %d\\n", *second);\n    return 0;\n}',
    hint: 'Keep track of both'
  },
  {
    id: 'c_ptrarr_36',
    topicId: 'c_pointer_array',
    question: 'Write a program to remove duplicates from sorted array using pointers.',
    mathSolution: 'Shift elements left when duplicate found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,1,2,2,3,4,4};\n    int n = 7;\n    int *write = arr;\n    for(int *read = arr + 1; read < arr + n; read++) {\n        if(*read != *write) {\n            write++;\n            *write = *read;\n        }\n    }\n    int newSize = write - arr + 1;\n    printf("Array without duplicates: ");\n    for(int i = 0; i < newSize; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Use two pointers'
  },
  {
    id: 'c_ptrarr_37',
    topicId: 'c_pointer_array',
    question: 'Write a program to implement linear search using pointer array.',
    mathSolution: 'Compare each element with key',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int key = 30;\n    int *found = NULL;\n    for(int *p = arr; p < arr + 5; p++) {\n        if(*p == key) {\n            found = p;\n            break;\n        }\n    }\n    if(found != NULL) {\n        printf("Found %d at index %td\\n", key, found - arr);\n    } else {\n        printf("Not found\\n");\n    }\n    return 0;\n}',
    hint: 'Use pointer to track position'
  },
  {
    id: 'c_ptrarr_38',
    topicId: 'c_pointer_array',
    question: 'Write a program to copy one array to another using pointers.',
    mathSolution: 'Copy element by element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int src[] = {10, 20, 30, 40, 50};\n    int dest[5];\n    int *s = src, *d = dest;\n    for(int i = 0; i < 5; i++) {\n        *d = *s;\n        s++;\n        d++;\n    }\n    printf("Copied array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", dest[i]);\n    }\n    return 0;\n}',
    hint: 'Use two pointers'
  },
  {
    id: 'c_ptrarr_39',
    topicId: 'c_pointer_array',
    question: 'Write a program to find maximum difference between two elements using pointers.',
    mathSolution: 'Track minimum so far and maximum difference',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2, 7, 9, 5, 1, 3, 5};\n    int n = 7;\n    int *min = arr;\n    int max_diff = arr[1] - arr[0];\n    for(int *p = arr + 1; p < arr + n; p++) {\n        if(*p - *min > max_diff) {\n            max_diff = *p - *min;\n        }\n        if(*p < *min) {\n            min = p;\n        }\n    }\n    printf("Maximum difference: %d\\n", max_diff);\n    return 0;\n}',
    hint: 'Track minimum so far'
  },
  {
    id: 'c_ptrarr_40',
    topicId: 'c_pointer_array',
    question: 'Write a program to move all zeros to end using pointers.',
    mathSolution: 'Shift non-zero elements forward',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {0, 1, 0, 3, 12};\n    int n = 5;\n    int *write = arr;\n    for(int *read = arr; read < arr + n; read++) {\n        if(*read != 0) {\n            *write = *read;\n            write++;\n        }\n    }\n    while(write < arr + n) {\n        *write = 0;\n        write++;\n    }\n    printf("Array after moving zeros: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Two-pointer technique'
  },

  // ========== MATRIX OPERATIONS (41-50) ==========
  {
    id: 'c_ptrarr_41',
    topicId: 'c_pointer_array',
    question: 'Write a program to find row with maximum sum using pointer.',
    mathSolution: 'Calculate sum for each row',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};\n    int max_sum = 0, max_row = 0;\n    for(int i = 0; i < 3; i++) {\n        int sum = 0;\n        for(int j = 0; j < 4; j++) {\n            sum += mat[i][j];\n        }\n        if(sum > max_sum) {\n            max_sum = sum;\n            max_row = i;\n        }\n    }\n    printf("Row %d has maximum sum = %d\\n", max_row, max_sum);\n    return 0;\n}',
    hint: 'Calculate per row sum'
  },
  {
    id: 'c_ptrarr_42',
    topicId: 'c_pointer_array',
    question: 'Write a program to find column with minimum sum using pointer.',
    mathSolution: 'Calculate sum for each column',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int min_sum = 0, min_col = 0;\n    for(int j = 0; j < 3; j++) {\n        int sum = 0;\n        for(int i = 0; i < 3; i++) {\n            sum += mat[i][j];\n        }\n        if(j == 0 || sum < min_sum) {\n            min_sum = sum;\n            min_col = j;\n        }\n    }\n    printf("Column %d has minimum sum = %d\\n", min_col, min_sum);\n    return 0;\n}',
    hint: 'Calculate per column sum'
  },
  {
    id: 'c_ptrarr_43',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if matrix is identity matrix.',
    mathSolution: 'Diagonal must be 1, others 0',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,0,0},{0,1,0},{0,0,1}};\n    int is_identity = 1;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            if(i == j && mat[i][j] != 1) is_identity = 0;\n            if(i != j && mat[i][j] != 0) is_identity = 0;\n        }\n    }\n    if(is_identity) printf("Matrix is identity matrix\\n");\n    else printf("Matrix is not identity matrix\\n");\n    return 0;\n}',
    hint: 'Check diagonal and off-diagonal'
  },
  {
    id: 'c_ptrarr_44',
    topicId: 'c_pointer_array',
    question: 'Write a program to find triangular sum (upper and lower).',
    mathSolution: 'Sum of upper and lower triangular separately',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int upper_sum = 0, lower_sum = 0;\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            if(j >= i) upper_sum += mat[i][j];\n            if(j <= i) lower_sum += mat[i][j];\n        }\n    }\n    printf("Upper triangular sum: %d\\n", upper_sum);\n    printf("Lower triangular sum: %d\\n", lower_sum);\n    return 0;\n}',
    hint: 'Include diagonal in both'
  },
  {
    id: 'c_ptrarr_45',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if matrix is symmetric.',
    mathSolution: 'Matrix should equal its transpose',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{2,4,5},{3,5,6}};\n    int symmetric = 1;\n    for(int i = 0; i < 3; i++) {\n        for(int j = i+1; j < 3; j++) {\n            if(mat[i][j] != mat[j][i]) {\n                symmetric = 0;\n                break;\n            }\n        }\n    }\n    if(symmetric) printf("Matrix is symmetric\\n");\n    else printf("Matrix is not symmetric\\n");\n    return 0;\n}',
    hint: 'Compare with transpose'
  },
  {
    id: 'c_ptrarr_46',
    topicId: 'c_pointer_array',
    question: 'Write a program to rotate matrix 90 degrees clockwise.',
    mathSolution: 'Transpose then reverse each row',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    // Transpose\n    for(int i = 0; i < 3; i++) {\n        for(int j = i+1; j < 3; j++) {\n            int temp = mat[i][j];\n            mat[i][j] = mat[j][i];\n            mat[j][i] = temp;\n        }\n    }\n    // Reverse each row\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3/2; j++) {\n            int temp = mat[i][j];\n            mat[i][j] = mat[i][2-j];\n            mat[i][2-j] = temp;\n        }\n    }\n    printf("Rotated matrix:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", mat[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Transpose then reverse rows'
  },
  {
    id: 'c_ptrarr_47',
    topicId: 'c_pointer_array',
    question: 'Write a program to find saddle point in matrix.',
    mathSolution: 'Element smallest in row and largest in column',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int saddle = 0;\n    for(int i = 0; i < 3; i++) {\n        int min_row = mat[i][0], col_index = 0;\n        for(int j = 1; j < 3; j++) {\n            if(mat[i][j] < min_row) {\n                min_row = mat[i][j];\n                col_index = j;\n            }\n        }\n        int max_col = mat[i][col_index];\n        for(int k = 0; k < 3; k++) {\n            if(mat[k][col_index] > max_col) {\n                max_col = mat[k][col_index];\n            }\n        }\n        if(min_row == max_col) {\n            printf("Saddle point: %d at (%d,%d)\\n", min_row, i, col_index);\n            saddle = 1;\n        }\n    }\n    if(!saddle) printf("No saddle point\\n");\n    return 0;\n}',
    hint: 'Find min in row, then max in column'
  },
  {
    id: 'c_ptrarr_48',
    topicId: 'c_pointer_array',
    question: 'Write a program to print matrix in spiral order.',
    mathSolution: 'Maintain boundaries and shrink',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int top = 0, bottom = 2, left = 0, right = 2;\n    printf("Spiral order: ");\n    while(top <= bottom && left <= right) {\n        for(int i = left; i <= right; i++) printf("%d ", mat[top][i]);\n        top++;\n        for(int i = top; i <= bottom; i++) printf("%d ", mat[i][right]);\n        right--;\n        if(top <= bottom) {\n            for(int i = right; i >= left; i--) printf("%d ", mat[bottom][i]);\n            bottom--;\n        }\n        if(left <= right) {\n            for(int i = bottom; i >= top; i--) printf("%d ", mat[i][left]);\n            left++;\n        }\n    }\n    return 0;\n}',
    hint: 'Maintain boundaries'
  },
  {
    id: 'c_ptrarr_49',
    topicId: 'c_pointer_array',
    question: 'Write a program to check if matrix is magic square.',
    mathSolution: 'All rows, columns, diagonals sum equal',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{2,7,6},{9,5,1},{4,3,8}};\n    int sum = 0, magic = 1;\n    for(int j = 0; j < 3; j++) sum += mat[0][j];\n    for(int i = 1; i < 3; i++) {\n        int row_sum = 0;\n        for(int j = 0; j < 3; j++) row_sum += mat[i][j];\n        if(row_sum != sum) magic = 0;\n    }\n    for(int j = 0; j < 3; j++) {\n        int col_sum = 0;\n        for(int i = 0; i < 3; i++) col_sum += mat[i][j];\n        if(col_sum != sum) magic = 0;\n    }\n    int diag1 = mat[0][0] + mat[1][1] + mat[2][2];\n    int diag2 = mat[0][2] + mat[1][1] + mat[2][0];\n    if(diag1 != sum || diag2 != sum) magic = 0;\n    if(magic) printf("Matrix is magic square\\n");\n    else printf("Matrix is not magic square\\n");\n    return 0;\n}',
    hint: 'Check all sums'
  },
  {
    id: 'c_ptrarr_50',
    topicId: 'c_pointer_array',
    question: 'Write a program to find frequency of each element using pointer array.',
    mathSolution: 'Count occurrences of each value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,2,3,3,3,4};\n    int n = 7;\n    int visited[7] = {0};\n    printf("Element frequencies:\\n");\n    for(int i = 0; i < n; i++) {\n        if(visited[i]) continue;\n        int count = 1;\n        for(int j = i+1; j < n; j++) {\n            if(arr[i] == arr[j]) {\n                count++;\n                visited[j] = 1;\n            }\n        }\n        printf("%d: %d times\\n", arr[i], count);\n    }\n    return 0;\n}',
    hint: 'Count and display frequencies'
  },
  //
   {
    id: 'c_constants_001',
    topicId: 'c_constants',
    question: 'Declare and print a constant integer variable named MAX_VALUE with value 100.',
    mathSolution: 'const integer declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const int MAX_VALUE = 100;\n    printf("MAX_VALUE = %d\\n", MAX_VALUE);\n    return 0;\n}',
    hint: 'Use const keyword before data type'
  },
  {
    id: 'c_constants_002',
    topicId: 'c_constants',
    question: 'Declare and print a constant float variable named PI with value 3.14159.',
    mathSolution: 'const float declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const float PI = 3.14159f;\n    printf("PI = %.5f\\n", PI);\n    return 0;\n}',
    hint: 'Add f suffix for float'
  },
  {
    id: 'c_constants_003',
    topicId: 'c_constants',
    question: 'Declare and print a constant double variable named GRAVITY with value 9.81.',
    mathSolution: 'const double declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const double GRAVITY = 9.81;\n    printf("GRAVITY = %.2f m/s²\\n", GRAVITY);\n    return 0;\n}',
    hint: 'Double is default for floating point'
  },
  {
    id: 'c_constants_004',
    topicId: 'c_constants',
    question: 'Declare and print a constant character variable named GRADE with value \'A\'.',
    mathSolution: 'const char declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const char GRADE = \'A\';\n    printf("GRADE = %c\\n", GRADE);\n    return 0;\n}',
    hint: 'Character constants use single quotes'
  },
  {
    id: 'c_constants_005',
    topicId: 'c_constants',
    question: 'Declare and print a constant string using const char* with value "Hello".',
    mathSolution: 'const string declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const char* MESSAGE = "Hello";\n    printf("MESSAGE = %s\\n", MESSAGE);\n    return 0;\n}',
    hint: 'String literals are const by convention'
  },
  {
    id: 'c_constants_006',
    topicId: 'c_constants',
    question: 'Declare a constant pointer to an integer and print the value.',
    mathSolution: 'const pointer declaration and usage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int* const ptr = &x;\n    printf("Value through const pointer: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'const after * means pointer is constant'
  },
  {
    id: 'c_constants_007',
    topicId: 'c_constants',
    question: 'Declare a pointer to a constant integer and print the value.',
    mathSolution: 'pointer to const data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    const int* ptr = &x;\n    printf("Value through pointer to const: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'const before * means data is constant'
  },
  {
    id: 'c_constants_008',
    topicId: 'c_constants',
    question: 'Declare a constant pointer to a constant integer and print the value.',
    mathSolution: 'const pointer to const data',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    const int* const ptr = &x;\n    printf("Value: %d\\n", *ptr);\n    return 0;\n}',
    hint: 'Both pointer and data are constant'
  },
  {
    id: 'c_constants_009',
    topicId: 'c_constants',
    question: 'Declare a constant array of integers and print its elements.',
    mathSolution: 'const array declaration and printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const int numbers[] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < 5; i++) {\n        printf("numbers[%d] = %d\\n", i, numbers[i]);\n    }\n    return 0;\n}',
    hint: 'Array elements cannot be modified'
  },
  {
    id: 'c_constants_010',
    topicId: 'c_constants',
    question: 'Write a function that uses const parameter to prevent array modification.',
    mathSolution: 'const function parameter',
    codeSolution: '#include <stdio.h>\n\nvoid printArray(const int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    printArray(nums, 5);\n    return 0;\n}',
    hint: 'Use const to protect read-only parameters'
  },

  // ========== #DEFINE CONSTANTS (11-20) ==========
  {
    id: 'c_constants_011',
    topicId: 'c_constants',
    question: 'Define a macro named MAX_STUDENTS with value 100 and print it.',
    mathSolution: '#define integer constant and printing',
    codeSolution: '#include <stdio.h>\n#define MAX_STUDENTS 100\n\nint main() {\n    printf("MAX_STUDENTS = %d\\n", MAX_STUDENTS);\n    return 0;\n}',
    hint: 'No equals sign or semicolon'
  },
  {
    id: 'c_constants_012',
    topicId: 'c_constants',
    question: 'Define a macro named PI with value 3.14159 and calculate area of circle.',
    mathSolution: '#define float constant usage',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    printf("Area of circle with radius %.1f = %.2f\\n", radius, area);\n    return 0;\n}',
    hint: 'Preprocessor does simple text replacement'
  },
  {
    id: 'c_constants_013',
    topicId: 'c_constants',
    question: 'Define a macro named GRADE with value \'A\' and print it.',
    mathSolution: '#define character constant',
    codeSolution: '#include <stdio.h>\n#define GRADE \'A\'\n\nint main() {\n    printf("GRADE = %c\\n", GRADE);\n    return 0;\n}',
    hint: 'Character constants use single quotes'
  },
  {
    id: 'c_constants_014',
    topicId: 'c_constants',
    question: 'Define a macro named GREETING with "Hello" and print it.',
    mathSolution: '#define string constant',
    codeSolution: '#include <stdio.h>\n#define GREETING "Hello"\n\nint main() {\n    printf("GREETING = %s\\n", GREETING);\n    return 0;\n}',
    hint: 'String constants use double quotes'
  },
  {
    id: 'c_constants_015',
    topicId: 'c_constants',
    question: 'Create a macro SQUARE that squares a number and demonstrate it.',
    mathSolution: '#define macro function',
    codeSolution: '#include <stdio.h>\n#define SQUARE(x) ((x) * (x))\n\nint main() {\n    int num = 5;\n    printf("Square of %d = %d\\n", num, SQUARE(num));\n    return 0;\n}',
    hint: 'Use parentheses to avoid precedence issues'
  },
  {
    id: 'c_constants_016',
    topicId: 'c_constants',
    question: 'Create a macro MAX that returns maximum of two values and test it.',
    mathSolution: '#define conditional macro',
    codeSolution: '#include <stdio.h>\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n\nint main() {\n    int x = 10, y = 20;\n    printf("Max of %d and %d = %d\\n", x, y, MAX(x, y));\n    return 0;\n}',
    hint: 'Use ternary operator for condition'
  },
  {
    id: 'c_constants_017',
    topicId: 'c_constants',
    question: 'Use #undef to undefine a macro and demonstrate.',
    mathSolution: '#undef directive',
    codeSolution: '#include <stdio.h>\n#define TEMP 100\n\nint main() {\n    printf("TEMP = %d\\n", TEMP);\n    #undef TEMP\n    #ifndef TEMP\n        printf("TEMP is undefined after #undef\\n");\n    #endif\n    return 0;\n}',
    hint: '#undef removes macro definition'
  },
  {
    id: 'c_constants_018',
    topicId: 'c_constants',
    question: 'Create a multi-line macro that prints two lines.',
    mathSolution: 'Multi-line #define',
    codeSolution: '#include <stdio.h>\n#define PRINT_BOX \\\n    printf("********\\n\"); \\\n    printf("*  Hello *\\n\"); \\\n    printf("********\\n\")\n\nint main() {\n    PRINT_BOX;\n    return 0;\n}',
    hint: 'Use backslash at end of each line except last'
  },
  {
    id: 'c_constants_019',
    topicId: 'c_constants',
    question: 'Define an array size using #define and create an array.',
    mathSolution: '#define for array size',
    codeSolution: '#include <stdio.h>\n#define ARRAY_SIZE 5\n\nint main() {\n    int numbers[ARRAY_SIZE] = {10, 20, 30, 40, 50};\n    for(int i = 0; i < ARRAY_SIZE; i++) {\n        printf("numbers[%d] = %d\\n", i, numbers[i]);\n    }\n    return 0;\n}',
    hint: 'Makes code more maintainable'
  },
  {
    id: 'c_constants_020',
    topicId: 'c_constants',
    question: 'Create a macro IS_EVEN that checks if number is even and test it.',
    mathSolution: '#define conditional',
    codeSolution: '#include <stdio.h>\n#define IS_EVEN(x) ((x) % 2 == 0)\n\nint main() {\n    int num = 10;\n    printf("%d is %s\\n", num, IS_EVEN(num) ? "even" : "odd");\n    return 0;\n}',
    hint: 'Use modulo operator'
  },

  // ========== ENUM CONSTANTS (21-30) ==========
  {
    id: 'c_constants_021',
    topicId: 'c_constants',
    question: 'Declare an enum for weekdays and print values.',
    mathSolution: 'enum declaration and printing',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    printf("MON = %d, TUE = %d, WED = %d\\n", MON, TUE, WED);\n    printf("THU = %d, FRI = %d, SAT = %d, SUN = %d\\n", THU, FRI, SAT, SUN);\n    return 0;\n}',
    hint: 'Values start at 0 by default'
  },
  {
    id: 'c_constants_022',
    topicId: 'c_constants',
    question: 'Declare an enum for colors with custom values and print them.',
    mathSolution: 'enum with custom values',
    codeSolution: '#include <stdio.h>\n\nenum Color { RED = 1, GREEN = 2, BLUE = 4 };\n\nint main() {\n    printf("RED = %d, GREEN = %d, BLUE = %d\\n", RED, GREEN, BLUE);\n    return 0;\n}',
    hint: 'Assign specific integer values'
  },
  {
    id: 'c_constants_023',
    topicId: 'c_constants',
    question: 'Declare an enum for boolean values and demonstrate usage.',
    mathSolution: 'enum for boolean',
    codeSolution: '#include <stdio.h>\n\nenum Boolean { FALSE, TRUE };\n\nint main() {\n    enum Boolean isReady = TRUE;\n    if(isReady == TRUE) {\n        printf("Ready!\\n");\n    }\n    return 0;\n}',
    hint: 'FALSE is 0, TRUE is 1 automatically'
  },
  {
    id: 'c_constants_024',
    topicId: 'c_constants',
    question: 'Use enum in a switch statement for menu options.',
    mathSolution: 'enum with switch',
    codeSolution: '#include <stdio.h>\n\nenum Menu { EXIT, ADD, DELETE };\n\nint main() {\n    enum Menu choice = ADD;\n    switch(choice) {\n        case ADD:\n            printf("Add selected\\n");\n            break;\n        case DELETE:\n            printf("Delete selected\\n");\n            break;\n        case EXIT:\n            printf("Exit selected\\n");\n            break;\n    }\n    return 0;\n}',
    hint: 'Enum makes cases readable'
  },
  {
    id: 'c_constants_025',
    topicId: 'c_constants',
    question: 'Create enum for bit flags and combine them.',
    mathSolution: 'enum for bit flags',
    codeSolution: '#include <stdio.h>\n\nenum Permissions {\n    READ = 1 << 0,\n    WRITE = 1 << 1,\n    EXEC = 1 << 2\n};\n\nint main() {\n    int perm = READ | WRITE;\n    printf("Permissions: READ | WRITE = %d\\n", perm);\n    return 0;\n}',
    hint: 'Use powers of 2 for bitwise operations'
  },
  {
    id: 'c_constants_026',
    topicId: 'c_constants',
    question: 'Use typedef with enum to create a type named Status.',
    mathSolution: 'typedef enum',
    codeSolution: '#include <stdio.h>\n\ntypedef enum { SUCCESS, FAILURE } Status;\n\nint main() {\n    Status result = SUCCESS;\n    printf("Status = %d (SUCCESS)\\n", result);\n    return 0;\n}',
    hint: 'Allows using Status without enum keyword'
  },
  {
    id: 'c_constants_027',
    topicId: 'c_constants',
    question: 'Create enum for error codes and print them.',
    mathSolution: 'enum for error codes',
    codeSolution: '#include <stdio.h>\n\nenum ErrorCode { SUCCESS = 0, NOT_FOUND = -1, ERROR = -2 };\n\nint main() {\n    printf("SUCCESS = %d, NOT_FOUND = %d, ERROR = %d\\n", SUCCESS, NOT_FOUND, ERROR);\n    return 0;\n}',
    hint: 'Error codes can be negative'
  },
  {
    id: 'c_constants_028',
    topicId: 'c_constants',
    question: 'Create enum for months with auto-increment from JAN=1.',
    mathSolution: 'enum with auto-increment',
    codeSolution: '#include <stdio.h>\n\nenum Month { JAN = 1, FEB, MAR, APR, MAY, JUN };\n\nint main() {\n    printf("JAN = %d, FEB = %d, MAR = %d\\n", JAN, FEB, MAR);\n    return 0;\n}',
    hint: 'FEB becomes 2, MAR becomes 3, etc.'
  },
  {
    id: 'c_constants_029',
    topicId: 'c_constants',
    question: 'Declare an enum variable and assign a value.',
    mathSolution: 'enum variable declaration',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    enum Weekday today = WED;\n    printf("Today = %d (Wednesday)\\n", today);\n    return 0;\n}',
    hint: 'Use enum type and constant'
  },
  {
    id: 'c_constants_030',
    topicId: 'c_constants',
    question: 'Create enum for state machine states and demonstrate.',
    mathSolution: 'enum for state machine',
    codeSolution: '#include <stdio.h>\n\nenum State { STATE_IDLE, STATE_RUNNING, STATE_STOPPED };\n\nint main() {\n    enum State current = STATE_RUNNING;\n    printf("Current state = %d (RUNNING)\\n", current);\n    return 0;\n}',
    hint: 'Use prefix to avoid name conflicts'
  },

  // ========== INTEGER & FLOATING POINT CONSTANTS (31-40) ==========
  {
    id: 'c_constants_031',
    topicId: 'c_constants',
    question: 'Write decimal, octal, and hexadecimal representations of number 42.',
    mathSolution: 'Different integer bases',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int decimal = 42;\n    printf("Decimal: %d\\n", decimal);\n    printf("Octal: %o\\n", decimal);\n    printf("Hexadecimal: %x\\n", decimal);\n    return 0;\n}',
    hint: 'Octal starts with 0, hex with 0x'
  },
  {
    id: 'c_constants_032',
    topicId: 'c_constants',
    question: 'Write integer constants with U, L, and LL suffixes.',
    mathSolution: 'Integer suffixes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int u = 100U;\n    long int l = 100L;\n    long long ll = 100LL;\n    printf("unsigned: %u, long: %ld, long long: %lld\\n", u, l, ll);\n    return 0;\n}',
    hint: 'U=unsigned, L=long, LL=long long'
  },
  {
    id: 'c_constants_033',
    topicId: 'c_constants',
    question: 'Write and print the maximum value for a 32-bit signed integer.',
    mathSolution: 'INT_MAX constant',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    printf("INT_MAX = %d\\n", INT_MAX);\n    return 0;\n}',
    hint: '2^31 - 1 = 2147483647'
  },
  {
    id: 'c_constants_034',
    topicId: 'c_constants',
    question: 'Write character constants for \'A\', newline, and tab and print them.',
    mathSolution: 'Character constants',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char a = \'A\';\n    char nl = \'\\n\';\n    char tab = \'\\t\';\n    printf("Character: %c%cTab before text\\n", a, tab);\n    return 0;\n}',
    hint: 'Escape sequences start with \\'
  },
  {
    id: 'c_constants_035',
    topicId: 'c_constants',
    question: 'Write floating point constants in different forms.',
    mathSolution: 'Float constant forms',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 3.14f;\n    double d = 3.14;\n    double exp = 3.14e0;\n    printf("float: %f, double: %f, exp: %f\\n", f, d, exp);\n    return 0;\n}',
    hint: 'f suffix for float, e for exponent'
  },
  {
    id: 'c_constants_036',
    topicId: 'c_constants',
    question: 'Write scientific notation for 12300 and 0.000123.',
    mathSolution: 'Scientific notation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double big = 1.23e4;\n    double small = 1.23e-4;\n    printf("1.23e4 = %f\\n", big);\n    printf("1.23e-4 = %f\\n", small);\n    return 0;\n}',
    hint: 'e4 = ×10^4, e-4 = ×10^-4'
  },
  {
    id: 'c_constants_037',
    topicId: 'c_constants',
    question: 'Write float, double, and long double constants for PI.',
    mathSolution: 'Float suffixes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float pi_f = 3.14159f;\n    double pi_d = 3.14159;\n    long double pi_ld = 3.14159L;\n    printf("float: %.5f\\n", pi_f);\n    printf("double: %.5lf\\n", pi_d);\n    return 0;\n}',
    hint: 'f for float, L for long double'
  },
  {
    id: 'c_constants_038',
    topicId: 'c_constants',
    question: 'Print a number in scientific notation using %e format.',
    mathSolution: 'Scientific notation printing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double num = 12345.6789;\n    printf("%%e: %e\\n", num);\n    printf("%%E: %E\\n", num);\n    printf("%%g: %g\\n", num);\n    return 0;\n}',
    hint: '%e for scientific, %g chooses shortest representation'
  },
  {
    id: 'c_constants_039',
    topicId: 'c_constants',
    question: 'Print formatted floating point numbers with specific decimal places.',
    mathSolution: 'Formatting float output',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159265359;\n    printf("Default: %f\\n", pi);\n    printf("2 decimals: %.2f\\n", pi);\n    printf("4 decimals: %.4f\\n", pi);\n    return 0;\n}',
    hint: 'Use %.nf where n is number of decimal places'
  },
  {
    id: 'c_constants_040',
    topicId: 'c_constants',
    question: 'Demonstrate infinity and NaN using floating point constants.',
    mathSolution: 'Infinity and NaN',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float inf = 1.0f / 0.0f;\n    float nan = 0.0f / 0.0f;\n    printf("Infinity: %f\\n", inf);\n    printf("NaN: %f\\n", nan);\n    return 0;\n}',
    hint: '1.0/0.0 gives infinity, 0.0/0.0 gives NaN'
  },

  // ========== STRING CONSTANTS & COMPARISONS (41-50) ==========
  {
    id: 'c_constants_041',
    topicId: 'c_constants',
    question: 'Create and print string constants using char array and char pointer.',
    mathSolution: 'String constants',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[] = "Hello";\n    char *str2 = "World";\n    printf("str1 = %s, str2 = %s\\n", str1, str2);\n    return 0;\n}',
    hint: 'Array is modifiable, pointer points to constant'
  },
  {
    id: 'c_constants_042',
    topicId: 'c_constants',
    question: 'Use string constant concatenation to create "Hello World".',
    mathSolution: 'String concatenation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *msg = "Hello " "World";\n    printf("%s\\n", msg);\n    return 0;\n}',
    hint: 'Adjacent strings are concatenated'
  },
  {
    id: 'c_constants_043',
    topicId: 'c_constants',
    question: 'Create string with escape sequences for newline, tab, and quote.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *str = "Line1\\nLine2\\tQuote: \\"Hello\\"";\n    printf("%s\\n", str);\n    return 0;\n}',
    hint: '\\n newline, \\t tab, \\" quote'
  },
{
    id: 'c_constants_044',
    topicId: 'c_constants',
    question: 'Compare #define and const by creating an array size constant.',
    mathSolution: '#define vs const for array size',
    codeSolution: '#include <stdio.h>\n#define SIZE 5\n\nint main() {\n    const int size = 5;\n    int arr[SIZE] = {10, 20, 30, 40, 50};\n    \n    printf("#define SIZE = %d\\n", SIZE);\n    printf("const int size = %d\\n\\n", size);\n    printf("Array created using #define:\\n");\n    \n    for(int i = 0; i < SIZE; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n    \n    printf("\\nKey differences:\\n");\n    printf("- #define: Preprocessor macro, no memory allocated\\n");\n    printf("- const: Read-only variable, memory allocated\\n\");\n    printf("- #define works for array sizes in all C standards\\n\");\n    printf(\"- const cannot be used for standard array sizes (needs VLA or malloc)\\n\");\n    \n    return 0;\n}',
    hint: '#define works for array sizes in all C standards, const requires VLA or malloc'
},
  {
    id: 'c_constants_045',
    topicId: 'c_constants',
    question: 'Replace magic number 3.14159 with a named constant PI.',
    mathSolution: 'Named constant vs magic number',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    printf("Area of circle = %.2f\\n", area);\n    return 0;\n}',
    hint: 'Named constants improve readability'
  },
  {
    id: 'c_constants_046',
    topicId: 'c_constants',
    question: 'Use const in function parameter to prevent modification.',
    mathSolution: 'Const correctness',
    codeSolution: '#include <stdio.h>\n\nvoid printValue(const int *ptr) {\n    printf("Value = %d\\n", *ptr);\n    // *ptr = 10; // Would cause error\n}\n\nint main() {\n    int num = 42;\n    printValue(&num);\n    return 0;\n}',
    hint: 'Const protects read-only parameters'
  },
  {
    id: 'c_constants_047',
    topicId: 'c_constants',
    question: 'Create a constant expression for array size using sizeof.',
    mathSolution: 'Constant expression',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[100];\n    int size = sizeof(arr) / sizeof(arr[0]);\n    printf("Array size = %d\\n", size);\n    return 0;\n}',
    hint: 'sizeof is compile-time constant'
  },
  {
    id: 'c_constants_048',
    topicId: 'c_constants',
    question: 'Use const for global configuration values.',
    mathSolution: 'Global constants',
    codeSolution: '#include <stdio.h>\n\nconst int MAX_USERS = 1000;\nconst char* APP_NAME = "MyApp";\n\nint main() {\n    printf("App: %s, Max Users: %d\\n", APP_NAME, MAX_USERS);\n    return 0;\n}',
    hint: 'Global constants are safer than macros for type checking'
  },
  {
    id: 'c_constants_049',
    topicId: 'c_constants',
    question: 'Create configuration constants for an application.',
    mathSolution: 'App configuration',
    codeSolution: '#include <stdio.h>\n#define APP_NAME "DataProcessor"\n#define APP_VERSION "1.0.0"\n#define MAX_USERS 1000\n\nint main() {\n    printf("%s v%s\\n", APP_NAME, APP_VERSION);\n    printf("Max Users: %d\\n", MAX_USERS);\n    return 0;\n}',
    hint: 'Centralized configuration'
  },
  {
    id: 'c_constants_050',
    topicId: 'c_constants',
    question: 'Create constants for mathematical formulas and use them.',
    mathSolution: 'Math formulas',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n#define CIRCLE_AREA(r) (PI * (r) * (r))\n#define CIRCLE_CIRCUMFERENCE(r) (2 * PI * (r))\n\nint main() {\n    float r = 5.0;\n    printf("Radius = %.1f\\n", r);\n    printf("Area = %.2f\\n", CIRCLE_AREA(r));\n    printf("Circumference = %.2f\\n", CIRCLE_CIRCUMFERENCE(r));\n    return 0;\n}',
    hint: 'Formulas as macros'
  },
  //dsa basic
   {
    id: 'c_dsa_1',
    topicId: 'c_dsa_basic',
    question: 'Write a program to insert an element at a given position in an array.',
    mathSolution: 'Insert element at index 2, shift elements right',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10] = {10, 20, 30, 40, 50};\n    int n = 5, pos = 2, val = 25;\n    \n    printf("Original array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = n; i > pos; i--)\n        arr[i] = arr[i-1];\n    arr[pos] = val;\n    n++;\n    \n    printf("\\nAfter insertion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements from end to pos'
  },
  {
    id: 'c_dsa_2',
    topicId: 'c_dsa_basic',
    question: 'Write a program to delete an element from a given position in an array.',
    mathSolution: 'Delete element at index 2, shift elements left',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5, pos = 2;\n    \n    printf("Original array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = pos; i < n-1; i++)\n        arr[i] = arr[i+1];\n    n--;\n    \n    printf("\\nAfter deletion: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Shift elements from pos+1 to left'
  },
  {
    id: 'c_dsa_3',
    topicId: 'c_dsa_basic',
    question: 'Write a program to search for an element in an array (linear search).',
    mathSolution: 'Search for 30 in array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int key = 30, found = -1;\n    \n    for(int i = 0; i < 5; i++) {\n        if(arr[i] == key) {\n            found = i;\n            break;\n        }\n    }\n    \n    if(found != -1)\n        printf("Element %d found at index %d\\n", key, found);\n    else\n        printf("Element not found\\n");\n    return 0;\n}',
    hint: 'Check each element sequentially'
  },
  {
    id: 'c_dsa_4',
    topicId: 'c_dsa_basic',
    question: 'Write a program to reverse an array.',
    mathSolution: 'Reverse order of elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n    \n    printf("\\nReversed: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap first with last, second with second-last'
  },
  {
    id: 'c_dsa_5',
    topicId: 'c_dsa_basic',
    question: 'Write a program to left rotate an array by one position.',
    mathSolution: 'Move first element to end',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5, first = arr[0];\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n-1; i++)\n        arr[i] = arr[i+1];\n    arr[n-1] = first;\n    \n    printf("\\nAfter left rotate: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Store first, shift left, put first at end'
  },
  {
    id: 'c_dsa_6',
    topicId: 'c_dsa_basic',
    question: 'Write a program to right rotate an array by one position.',
    mathSolution: 'Move last element to front',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int n = 5, last = arr[n-1];\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = n-1; i > 0; i--)\n        arr[i] = arr[i-1];\n    arr[0] = last;\n    \n    printf("\\nAfter right rotate: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Store last, shift right, put last at front'
  },
  {
    id: 'c_dsa_7',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the frequency of each element in an array.',
    mathSolution: 'Count occurrences of each element',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 2, 3, 3, 3, 4};\n    int n = 7;\n    int visited[7] = {0};\n    \n    for(int i = 0; i < n; i++) {\n        if(visited[i]) continue;\n        int count = 1;\n        for(int j = i+1; j < n; j++) {\n            if(arr[i] == arr[j]) {\n                count++;\n                visited[j] = 1;\n            }\n        }\n        printf("%d appears %d times\\n", arr[i], count);\n    }\n    return 0;\n}',
    hint: 'Mark visited elements to avoid counting twice'
  },
  {
    id: 'c_dsa_8',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the maximum subarray sum (Kadane\'s algorithm).',
    mathSolution: 'Maximum sum contiguous subarray',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    int n = 9;\n    int max_so_far = arr[0], max_ending_here = arr[0];\n    \n    for(int i = 1; i < n; i++) {\n        if(arr[i] > max_ending_here + arr[i])\n            max_ending_here = arr[i];\n        else\n            max_ending_here = max_ending_here + arr[i];\n        \n        if(max_ending_here > max_so_far)\n            max_so_far = max_ending_here;\n    }\n    printf("Maximum subarray sum = %d\\n", max_so_far);\n    return 0;\n}',
    hint: 'Decide whether to extend or start new subarray'
  },
  {
    id: 'c_dsa_9',
    topicId: 'c_dsa_basic',
    question: 'Write a program to remove duplicates from a sorted array.',
    mathSolution: 'Keep only unique elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 1, 2, 2, 3, 4, 4};\n    int n = 7, j = 0;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 1; i < n; i++) {\n        if(arr[i] != arr[j]) {\n            j++;\n            arr[j] = arr[i];\n        }\n    }\n    n = j + 1;\n    \n    printf("\\nAfter removal: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Use two pointers - one for unique, one for scanning'
  },
  {
    id: 'c_dsa_10',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the first duplicate element in an array.',
    mathSolution: 'Return first element that appears twice',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 4, 5, 1};\n    int n = 7;\n    int freq[100] = {0};\n    int duplicate = -1;\n    \n    for(int i = 0; i < n; i++) {\n        freq[arr[i]]++;\n        if(freq[arr[i]] == 2) {\n            duplicate = arr[i];\n            break;\n        }\n    }\n    \n    if(duplicate != -1)\n        printf("First duplicate: %d\\n", duplicate);\n    else\n        printf("No duplicate found\\n");\n    return 0;\n}',
    hint: 'Track counts, return when count becomes 2'
  },

  // ========== MATRIX OPERATIONS (11-15) ==========
  {
    id: 'c_dsa_11',
    topicId: 'c_dsa_basic',
    question: 'Write a program to add two matrices.',
    mathSolution: 'Element-wise addition',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n    \n    printf("Result of addition:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Add corresponding elements using nested loops'
  },
  {
    id: 'c_dsa_12',
    topicId: 'c_dsa_basic',
    question: 'Write a program to multiply two matrices.',
    mathSolution: 'Matrix multiplication',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2] = {0};\n    \n    for(int i = 0; i < 2; i++)\n        for(int j = 0; j < 2; j++)\n            for(int k = 0; k < 2; k++)\n                c[i][j] += a[i][k] * b[k][j];\n    \n    printf("Product:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 2; j++)\n            printf("%d ", c[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Triple nested loops: rows of a, cols of b, inner product'
  },
  {
    id: 'c_dsa_13',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find transpose of a matrix.',
    mathSolution: 'Rows become columns',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[2][3] = {{1,2,3},{4,5,6}};\n    int trans[3][2];\n    \n    printf("Original matrix:\\n");\n    for(int i = 0; i < 2; i++) {\n        for(int j = 0; j < 3; j++)\n            printf("%d ", mat[i][j]);\n        printf("\\n");\n    }\n    \n    for(int i = 0; i < 2; i++)\n        for(int j = 0; j < 3; j++)\n            trans[j][i] = mat[i][j];\n    \n    printf("Transpose:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 2; j++)\n            printf("%d ", trans[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Swap indices i and j'
  },
  {
    id: 'c_dsa_14',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find sum of diagonal elements of a square matrix.',
    mathSolution: 'Sum of elements where i == j',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int sum = 0;\n    \n    for(int i = 0; i < 3; i++)\n        sum += mat[i][i];\n    \n    printf("Sum of diagonal = %d\\n", sum);\n    return 0;\n}',
    hint: 'Diagonal elements have row index equal to column index'
  },
  {
    id: 'c_dsa_15',
    topicId: 'c_dsa_basic',
    question: 'Write a program to check if a matrix is symmetric.',
    mathSolution: 'Matrix equals its transpose',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int mat[3][3] = {{1,2,3},{2,4,5},{3,5,6}};\n    int symmetric = 1;\n    \n    for(int i = 0; i < 3; i++) {\n        for(int j = i+1; j < 3; j++) {\n            if(mat[i][j] != mat[j][i]) {\n                symmetric = 0;\n                break;\n            }\n        }\n    }\n    \n    if(symmetric)\n        printf("Matrix is symmetric\\n");\n    else\n        printf("Matrix is not symmetric\\n");\n    return 0;\n}',
    hint: 'Compare with transpose'
  },

  // ========== SORTING ALGORITHMS (16-20) ==========
  {
    id: 'c_dsa_16',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement bubble sort.',
    mathSolution: 'Sort array using bubble sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = 7, temp;\n    \n    printf("Original array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n-1; i++) {\n        for(int j = 0; j < n-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    \n    printf("\\nSorted array: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Compare adjacent and swap if needed'
  },
  {
    id: 'c_dsa_17',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement selection sort.',
    mathSolution: 'Sort array using selection sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = 5, min_idx, temp;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 0; i < n-1; i++) {\n        min_idx = i;\n        for(int j = i+1; j < n; j++) {\n            if(arr[j] < arr[min_idx])\n                min_idx = j;\n        }\n        temp = arr[i];\n        arr[i] = arr[min_idx];\n        arr[min_idx] = temp;\n    }\n    \n    printf("\\nSorted: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Find minimum and place at beginning'
  },
  {
    id: 'c_dsa_18',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement insertion sort.',
    mathSolution: 'Sort array using insertion sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {12, 11, 13, 5, 6};\n    int n = 5, key, j;\n    \n    printf("Original: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    \n    for(int i = 1; i < n; i++) {\n        key = arr[i];\n        j = i-1;\n        while(j >= 0 && arr[j] > key) {\n            arr[j+1] = arr[j];\n            j--;\n        }\n        arr[j+1] = key;\n    }\n    \n    printf("\\nSorted: ");\n    for(int i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Insert element in sorted portion'
  },
  {
    id: 'c_dsa_19',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement binary search on a sorted array.',
    mathSolution: 'Search for element using binary search',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int key = 30, low = 0, high = 4, mid;\n    int found = -1;\n    \n    while(low <= high) {\n        mid = (low + high) / 2;\n        if(arr[mid] == key) {\n            found = mid;\n            break;\n        }\n        if(arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    \n    if(found != -1)\n        printf("Element %d found at index %d\\n", key, found);\n    else\n        printf("Element not found\\n");\n    return 0;\n}',
    hint: 'Divide and conquer on sorted array'
  },
  {
    id: 'c_dsa_20',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find a pair with given sum in sorted array.',
    mathSolution: 'Use two-pointer technique',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int target = 70, left = 0, right = 4;\n    int found = 0;\n    \n    while(left < right) {\n        int sum = arr[left] + arr[right];\n        if(sum == target) {\n            found = 1;\n            printf("Pair found: %d + %d = %d\\n\", arr[left], arr[right], target);\n            break;\n        }\n        if(sum < target) left++;\n        else right--;\n    }\n    \n    if(!found) printf("No pair found\\n\");\n    return 0;\n}',
    hint: 'Move left and right pointers based on sum'
  },

  // ========== STACK OPERATIONS (21-25) ==========
  {
    id: 'c_dsa_21',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement stack using array with push and pop operations.',
    mathSolution: 'LIFO data structure',
    codeSolution: '#include <stdio.h>\n#define MAX 5\n\nint stack[MAX];\nint top = -1;\n\nvoid push(int val) {\n    if(top >= MAX-1) printf("Stack Overflow\\n");\n    else stack[++top] = val;\n}\n\nint pop() {\n    if(top < 0) { printf("Stack Underflow\\n"); return -1; }\n    return stack[top--];\n}\n\nint main() {\n    push(10); push(20); push(30);\n    printf("Popped: %d\\n\", pop());\n    printf(\"Popped: %d\\n\", pop());\n    return 0;\n}',
    hint: 'Push increments top, pop decrements top'
  },
  {
    id: 'c_dsa_22',
    topicId: 'c_dsa_basic',
    question: 'Write a program to check if parentheses are balanced using stack.',
    mathSolution: 'Verify matching brackets',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char expr[] = "{[()]}\";\n    char stack[100];\n    int top = -1;\n    int balanced = 1;\n    \n    for(int i = 0; expr[i]; i++) {\n        char c = expr[i];\n        if(c == \'(\' || c == \'{\' || c == \'[\')\n            stack[++top] = c;\n        else if(c == \')\') {\n            if(top < 0 || stack[top--] != \'(\') { balanced = 0; break; }\n        } else if(c == \'}\') {\n            if(top < 0 || stack[top--] != \'{\') { balanced = 0; break; }\n        } else if(c == \']\') {\n            if(top < 0 || stack[top--] != \'[\') { balanced = 0; break; }\n        }\n    }\n    \n    if(balanced && top == -1)\n        printf("Balanced\\n\");\n    else\n        printf(\"Not Balanced\\n\");\n    return 0;\n}',
    hint: 'Push opening brackets, pop and match closing'
  },
  {
    id: 'c_dsa_23',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement queue using array with enqueue and dequeue.',
    mathSolution: 'FIFO data structure',
    codeSolution: '#include <stdio.h>\n#define MAX 5\n\nint queue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int val) {\n    if(rear >= MAX-1) printf("Queue Full\\n\");\n    else {\n        if(front == -1) front = 0;\n        queue[++rear] = val;\n    }\n}\n\nint dequeue() {\n    if(front == -1 || front > rear) { printf("Queue Empty\\n\"); return -1; }\n    int val = queue[front++];\n    if(front > rear) front = rear = -1;\n    return val;\n}\n\nint main() {\n    enqueue(10); enqueue(20); enqueue(30);\n    printf(\"Dequeued: %d\\n\", dequeue());\n    printf(\"Dequeued: %d\\n\", dequeue());\n    return 0;\n}',
    hint: 'Add at rear, remove from front'
  },
  {
    id: 'c_dsa_24',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement circular queue using array.',
    mathSolution: 'Reuse empty spaces',
    codeSolution: '#include <stdio.h>\n#define MAX 5\n\nint cqueue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int val) {\n    if((rear+1) % MAX == front) printf("Queue Full\\n\");\n    else {\n        if(front == -1) front = 0;\n        rear = (rear + 1) % MAX;\n        cqueue[rear] = val;\n    }\n}\n\nint dequeue() {\n    if(front == -1) { printf(\"Queue Empty\\n\"); return -1; }\n    int val = cqueue[front];\n    if(front == rear) front = rear = -1;\n    else front = (front + 1) % MAX;\n    return val;\n}\n\nint main() {\n    enqueue(10); enqueue(20); enqueue(30); enqueue(40); enqueue(50);\n    printf(\"Dequeued: %d\\n\", dequeue());\n    enqueue(60);\n    printf(\"Dequeued: %d\\n\", dequeue());\n    return 0;\n}',
    hint: 'Use modulo for wrap-around'
  },
  {
    id: 'c_dsa_25',
    topicId: 'c_dsa_basic',
    question: 'Write a program to evaluate postfix expression using stack.',
    mathSolution: 'Evaluate expression like "23+5*"',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char expr[] = "23+5*\";\n    int stack[100], top = -1;\n    \n    for(int i = 0; expr[i]; i++) {\n        if(isdigit(expr[i]))\n            stack[++top] = expr[i] - \'0\';\n        else {\n            int b = stack[top--];\n            int a = stack[top--];\n            if(expr[i] == \'+\') stack[++top] = a + b;\n            else if(expr[i] == \'-\') stack[++top] = a - b;\n            else if(expr[i] == \'*\') stack[++top] = a * b;\n            else if(expr[i] == \'/\') stack[++top] = a / b;\n        }\n    }\n    printf("Result = %d\\n\", stack[top]);\n    return 0;\n}',
    hint: 'Push numbers, apply operators to top two'
  },

  // ========== RECURSION (26-30) ==========
  {
    id: 'c_dsa_26',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to calculate factorial of a number.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\n\nint main() {\n    int n = 5;\n    printf("%d! = %d\\n\", n, factorial(n));\n    return 0;\n}',
    hint: 'Base case: n=0 or 1 returns 1'
  },
  {
    id: 'c_dsa_27',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to find nth Fibonacci number.',
    mathSolution: 'Fibonacci(6) = 8',
    codeSolution: '#include <stdio.h>\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int n = 6;\n    printf("Fibonacci(%d) = %d\\n\", n, fib(n));\n    return 0;\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },
  {
    id: 'c_dsa_28',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to calculate power (x^n).',
    mathSolution: '2^5 = 32',
    codeSolution: '#include <stdio.h>\n\nint power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\n\nint main() {\n    int x = 2, n = 5;\n    printf("%d^%d = %d\\n\", x, n, power(x, n));\n    return 0;\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_dsa_29',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to find GCD of two numbers.',
    mathSolution: 'GCD(48, 18) = 6',
    codeSolution: '#include <stdio.h>\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    int a = 48, b = 18;\n    printf("GCD(%d, %d) = %d\\n\", a, b, gcd(a, b));\n    return 0;\n}',
    hint: 'Base case: b=0 returns a'
  },
  {
    id: 'c_dsa_30',
    topicId: 'c_dsa_basic',
    question: 'Write a recursive program to reverse a string.',
    mathSolution: 'Reverse "hello" to "olleh"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid reverse(char *str, int start, int end) {\n    if(start >= end) return;\n    char temp = str[start];\n    str[start] = str[end];\n    str[end] = temp;\n    reverse(str, start+1, end-1);\n}\n\nint main() {\n    char str[] = "hello\";\n    printf(\"Original: %s\\n\", str);\n    reverse(str, 0, strlen(str)-1);\n    printf(\"Reversed: %s\\n\", str);\n    return 0;\n}',
    hint: 'Swap first and last, recurse on middle'
  },

  // ========== LINKED LIST (31-35) ==========
  {
    id: 'c_dsa_31',
    topicId: 'c_dsa_basic',
    question: 'Write a program to create a linked list node and insert at beginning.',
    mathSolution: 'Add node as new head',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = 10;\n    newNode->next = head;\n    head = newNode;\n    \n    newNode = (struct Node*)malloc(sizeof(struct Node));\n    newNode->data = 20;\n    newNode->next = head;\n    head = newNode;\n    \n    printf("Linked list: \");\n    struct Node* curr = head;\n    while(curr) {\n        printf(\"%d \", curr->data);\n        curr = curr->next;\n    }\n    free(head->next);\n    free(head);\n    return 0;\n}',
    hint: 'New node points to old head'
  },
  {
    id: 'c_dsa_32',
    topicId: 'c_dsa_basic',
    question: 'Write a program to insert a node at the end of a linked list.',
    mathSolution: 'Add node after last node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 30; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    printf("Linked list: \");\n    struct Node* curr = head;\n    while(curr) {\n        printf(\"%d \", curr->data);\n        curr = curr->next;\n    }\n    \n    while(head) {\n        struct Node* temp = head;\n        head = head->next;\n        free(temp);\n    }\n    return 0;\n}',
    hint: 'Traverse to last node, then link'
  },
  {
    id: 'c_dsa_33',
    topicId: 'c_dsa_basic',
    question: 'Write a program to delete a node from the beginning of a linked list.',
    mathSolution: 'Remove first node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 30; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    printf("Before deletion: \");\n    struct Node* curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    struct Node* temp = head;\n    head = head->next;\n    free(temp);\n    \n    printf(\"\\nAfter deletion: \");\n    curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    while(head) { temp = head; head = head->next; free(temp); }\n    return 0;\n}',
    hint: 'Move head to next node, free old head'
  },
  {
    id: 'c_dsa_34',
    topicId: 'c_dsa_basic',
    question: 'Write a program to reverse a linked list.',
    mathSolution: 'Reverse links between nodes',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 40; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    printf("Original: \");\n    struct Node* curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    struct Node *prev = NULL, *current = head, *next = NULL;\n    while(current) {\n        next = current->next;\n        current->next = prev;\n        prev = current;\n        current = next;\n    }\n    head = prev;\n    \n    printf(\"\\nReversed: \");\n    curr = head;\n    while(curr) { printf(\"%d \", curr->data); curr = curr->next; }\n    \n    while(head) { struct Node* temp = head; head = head->next; free(temp); }\n    return 0;\n}',
    hint: 'Three pointers: prev, curr, next'
  },
  {
    id: 'c_dsa_35',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the middle node of a linked list.',
    mathSolution: 'Use slow and fast pointers',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    struct Node* head = NULL;\n    struct Node* tail = NULL;\n    \n    for(int val = 10; val <= 50; val += 10) {\n        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));\n        newNode->data = val;\n        newNode->next = NULL;\n        if(!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            tail = newNode;\n        }\n    }\n    \n    struct Node *slow = head, *fast = head;\n    while(fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    \n    printf("Middle node data: %d\\n\", slow->data);\n    \n    while(head) { struct Node* temp = head; head = head->next; free(temp); }\n    return 0;\n}',
    hint: 'Slow moves one, fast moves two'
  },

  // ========== TREE TRAVERSALS (36-40) ==========
  {
    id: 'c_dsa_36',
    topicId: 'c_dsa_basic',
    question: 'Write a program to create a binary tree and perform inorder traversal.',
    mathSolution: 'Left -> Root -> Right',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nvoid inorder(struct TreeNode* root) {\n    if(root) {\n        inorder(root->left);\n        printf("%d \", root->data);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n    \n    printf("Inorder traversal: \");\n    inorder(root);\n    return 0;\n}',
    hint: 'Recursively traverse left, then root, then right'
  },
  {
    id: 'c_dsa_37',
    topicId: 'c_dsa_basic',
    question: 'Write a program for preorder traversal of binary tree.',
    mathSolution: 'Root -> Left -> Right',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nvoid preorder(struct TreeNode* root) {\n    if(root) {\n        printf("%d \", root->data);\n        preorder(root->left);\n        preorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n    \n    printf("Preorder traversal: \");\n    preorder(root);\n    return 0;\n}',
    hint: 'Process root first, then children'
  },
  {
    id: 'c_dsa_38',
    topicId: 'c_dsa_basic',
    question: 'Write a program for postorder traversal of binary tree.',
    mathSolution: 'Left -> Right -> Root',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nvoid postorder(struct TreeNode* root) {\n    if(root) {\n        postorder(root->left);\n        postorder(root->right);\n        printf("%d \", root->data);\n    }\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->right = createNode(5);\n    \n    printf("Postorder traversal: \");\n    postorder(root);\n    return 0;\n}',
    hint: 'Process children first, then root'
  },
  {
    id: 'c_dsa_39',
    topicId: 'c_dsa_basic',
    question: 'Write a program to count the number of nodes in a binary tree.',
    mathSolution: 'Total number of nodes',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nint countNodes(struct TreeNode* root) {\n    if(!root) return 0;\n    return 1 + countNodes(root->left) + countNodes(root->right);\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    \n    printf("Number of nodes: %d\\n\", countNodes(root));\n    return 0;\n}',
    hint: 'Count root plus nodes in left and right subtrees'
  },
  {
    id: 'c_dsa_40',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the height of a binary tree.',
    mathSolution: 'Maximum depth',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nint height(struct TreeNode* root) {\n    if(!root) return 0;\n    int leftH = height(root->left);\n    int rightH = height(root->right);\n    return 1 + (leftH > rightH ? leftH : rightH);\n}\n\nint main() {\n    struct TreeNode* root = createNode(1);\n    root->left = createNode(2);\n    root->right = createNode(3);\n    root->left->left = createNode(4);\n    root->left->left->left = createNode(5);\n    \n    printf("Height of tree: %d\\n\", height(root));\n    return 0;\n}',
    hint: 'Height = 1 + max(left height, right height)'
  },

  // ========== BINARY SEARCH TREE (41-45) ==========
  {
    id: 'c_dsa_41',
    topicId: 'c_dsa_basic',
    question: 'Write a program to insert a node in Binary Search Tree.',
    mathSolution: 'Maintain BST property',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data)\n        root->left = insert(root->left, data);\n    else if(data > root->data)\n        root->right = insert(root->right, data);\n    return root;\n}\n\nvoid inorder(struct TreeNode* root) {\n    if(root) {\n        inorder(root->left);\n        printf("%d \", root->data);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++)\n        root = insert(root, values[i]);\n    \n    printf("Inorder of BST: \");\n    inorder(root);\n    return 0;\n}',
    hint: 'Recursively find correct position'
  },
  {
    id: 'c_dsa_42',
    topicId: 'c_dsa_basic',
    question: 'Write a program to search for a key in Binary Search Tree.',
    mathSolution: 'Find node with given key',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* search(struct TreeNode* root, int key) {\n    if(!root || root->data == key) return root;\n    if(key < root->data) return search(root->left, key);\n    return search(root->right, key);\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    int key = 60;\n    struct TreeNode* found = search(root, key);\n    if(found) printf("Found %d in BST\\n\", key);\n    else printf(\"%d not found\\n\", key);\n    return 0;\n}',
    hint: 'Compare and go left or right'
  },
  {
    id: 'c_dsa_43',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the minimum value node in BST.',
    mathSolution: 'Leftmost node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* findMin(struct TreeNode* root) {\n    struct TreeNode* curr = root;\n    while(curr && curr->left) curr = curr->left;\n    return curr;\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    struct TreeNode* min = findMin(root);\n    printf("Minimum value in BST: %d\\n\", min->data);\n    return 0;\n}',
    hint: 'Keep going left until NULL'
  },
  {
    id: 'c_dsa_44',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the maximum value node in BST.',
    mathSolution: 'Rightmost node',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* findMax(struct TreeNode* root) {\n    struct TreeNode* curr = root;\n    while(curr && curr->right) curr = curr->right;\n    return curr;\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    struct TreeNode* max = findMax(root);\n    printf("Maximum value in BST: %d\\n\", max->data);\n    return 0;\n}',
    hint: 'Keep going right until NULL'
  },
  {
    id: 'c_dsa_45',
    topicId: 'c_dsa_basic',
    question: 'Write a program to delete a node from Binary Search Tree.',
    mathSolution: 'Handle three cases (0, 1, or 2 children)',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createNode(int data) {\n    struct TreeNode* new = (struct TreeNode*)malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}\n\nstruct TreeNode* insert(struct TreeNode* root, int data) {\n    if(!root) return createNode(data);\n    if(data < root->data) root->left = insert(root->left, data);\n    else if(data > root->data) root->right = insert(root->right, data);\n    return root;\n}\n\nstruct TreeNode* findMin(struct TreeNode* root) {\n    while(root && root->left) root = root->left;\n    return root;\n}\n\nstruct TreeNode* deleteNode(struct TreeNode* root, int key) {\n    if(!root) return root;\n    if(key < root->data) root->left = deleteNode(root->left, key);\n    else if(key > root->data) root->right = deleteNode(root->right, key);\n    else {\n        if(!root->left) {\n            struct TreeNode* temp = root->right;\n            free(root);\n            return temp;\n        } else if(!root->right) {\n            struct TreeNode* temp = root->left;\n            free(root);\n            return temp;\n        }\n        struct TreeNode* temp = findMin(root->right);\n        root->data = temp->data;\n        root->right = deleteNode(root->right, temp->data);\n    }\n    return root;\n}\n\nvoid inorder(struct TreeNode* root) {\n    if(root) {\n        inorder(root->left);\n        printf("%d \", root->data);\n        inorder(root->right);\n    }\n}\n\nint main() {\n    struct TreeNode* root = NULL;\n    int values[] = {50, 30, 20, 40, 70, 60, 80};\n    for(int i = 0; i < 7; i++) root = insert(root, values[i]);\n    \n    printf("Before deletion: \");\n    inorder(root);\n    \n    root = deleteNode(root, 70);\n    \n    printf("\\nAfter deleting 70: \");\n    inorder(root);\n    return 0;\n}',
    hint: '0, 1, or 2 children cases'
  },

  // ========== GRAPH BASICS (46-50) ==========
  {
    id: 'c_dsa_46',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement graph using adjacency matrix.',
    mathSolution: '2D array for edges',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nint main() {\n    int graph[V][V] = {0};\n    \n    graph[0][1] = 1;\n    graph[0][2] = 1;\n    graph[1][2] = 1;\n    graph[2][0] = 1;\n    graph[2][3] = 1;\n    graph[3][3] = 1;\n    \n    printf("Adjacency Matrix:\\n");\n    for(int i = 0; i < V; i++) {\n        for(int j = 0; j < V; j++)\n            printf("%d ", graph[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Set graph[u][v] = 1 for edge'
  },
  {
    id: 'c_dsa_47',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement BFS traversal on graph.',
    mathSolution: 'Level order traversal',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nint main() {\n    int graph[V][V] = {{0,1,1,0},{1,0,1,0},{1,1,0,1},{0,0,1,0}};\n    int visited[V] = {0};\n    int queue[V], front = 0, rear = 0;\n    int start = 0;\n    \n    visited[start] = 1;\n    queue[rear++] = start;\n    \n    printf("BFS Traversal: ");\n    while(front < rear) {\n        int u = queue[front++];\n        printf("%d ", u);\n        for(int v = 0; v < V; v++) {\n            if(graph[u][v] && !visited[v]) {\n                visited[v] = 1;\n                queue[rear++] = v;\n            }\n        }\n    }\n    return 0;\n}',
    hint: 'Use queue, mark visited when enqueued'
  },
  {
    id: 'c_dsa_48',
    topicId: 'c_dsa_basic',
    question: 'Write a program to implement DFS traversal on graph.',
    mathSolution: 'Depth first traversal',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nvoid DFS(int graph[V][V], int u, int visited[]) {\n    visited[u] = 1;\n    printf("%d ", u);\n    for(int v = 0; v < V; v++) {\n        if(graph[u][v] && !visited[v])\n            DFS(graph, v, visited);\n    }\n}\n\nint main() {\n    int graph[V][V] = {{0,1,1,0},{1,0,1,0},{1,1,0,1},{0,0,1,0}};\n    int visited[V] = {0};\n    \n    printf("DFS Traversal: ");\n    DFS(graph, 0, visited);\n    return 0;\n}',
    hint: 'Recursively visit unvisited neighbors'
  },
  {
    id: 'c_dsa_49',
    topicId: 'c_dsa_basic',
    question: 'Write a program to detect cycle in a directed graph using DFS.',
    mathSolution: 'Check for back edges',
    codeSolution: '#include <stdio.h>\n#define V 4\n\nint hasCycleDFS(int graph[V][V], int u, int visited[], int recStack[]) {\n    visited[u] = 1;\n    recStack[u] = 1;\n    \n    for(int v = 0; v < V; v++) {\n        if(graph[u][v]) {\n            if(!visited[v]) {\n                if(hasCycleDFS(graph, v, visited, recStack))\n                    return 1;\n            } else if(recStack[v])\n                return 1;\n        }\n    }\n    recStack[u] = 0;\n    return 0;\n}\n\nint main() {\n    int graph[V][V] = {{0,1,0,0},{0,0,1,0},{1,0,0,1},{0,0,0,0}};\n    int visited[V] = {0};\n    int recStack[V] = {0};\n    \n    for(int i = 0; i < V; i++) {\n        if(!visited[i]) {\n            if(hasCycleDFS(graph, i, visited, recStack)) {\n                printf("Cycle detected\\n\");\n                return 0;\n            }\n        }\n    }\n    printf(\"No cycle detected\\n\");\n    return 0;\n}',
    hint: 'Track recursion stack to detect cycles'
  },
  {
    id: 'c_dsa_50',
    topicId: 'c_dsa_basic',
    question: 'Write a program to find the number of connected components in an undirected graph.',
    mathSolution: 'Count components using DFS',
    codeSolution: '#include <stdio.h>\n#define V 5\n\nvoid DFS(int graph[V][V], int u, int visited[]) {\n    visited[u] = 1;\n    for(int v = 0; v < V; v++) {\n        if(graph[u][v] && !visited[v])\n            DFS(graph, v, visited);\n    }\n}\n\nint main() {\n    int graph[V][V] = {{0,1,0,0,0},{1,0,0,0,0},{0,0,0,1,0},{0,0,1,0,0},{0,0,0,0,0}};\n    int visited[V] = {0};\n    int components = 0;\n    \n    for(int i = 0; i < V; i++) {\n        if(!visited[i]) {\n            components++;\n            DFS(graph, i, visited);\n        }\n    }\n    printf("Number of connected components: %d\\n\", components);\n    return 0;\n}',
    hint: 'Each DFS call finds one component'
  }

);