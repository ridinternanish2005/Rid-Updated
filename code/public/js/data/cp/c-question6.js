QuizData.questions.push(
  // command-line ,goto ,break-continue
  {
    id: 'c_command_line_1',
    topicId: 'c_command_line',
    question: 'Write a program to print the program name from command line arguments.',
    mathSolution: 'argv[0] contains the program name',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./myprogram", "hello", "world"};\n    printf("Program name: %s\\n", args[0]);\n    return 0;\n}',
    hint: 'argv[0] always exists'
  },
  {
    id: 'c_command_line_2',
    topicId: 'c_command_line',
    question: 'Write a program to print all command line arguments.',
    mathSolution: 'Loop through argv array and print each argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "cherry"};\n    int count = 4;\n    for(int i = 0; i < count; i++) {\n        printf("Argument %d: %s\\n", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'argc is number of arguments'
  },
  {
    id: 'c_command_line_3',
    topicId: 'c_command_line',
    question: 'Write a program to count number of arguments (excluding program name).',
    mathSolution: 'argc - 1 gives argument count',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "arg1", "arg2", "arg3"};\n    int count = 4;\n    printf("Number of arguments: %d\\n", count - 1);\n    return 0;\n}',
    hint: 'Subtract program name'
  },
  {
    id: 'c_command_line_4',
    topicId: 'c_command_line',
    question: 'Write a program to check if no additional arguments are provided.',
    mathSolution: 'argc == 1 means no extra arguments',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program"};\n    int count = 1;\n    if(count == 1) {\n        printf("No additional arguments\\n");\n    } else {\n        printf("Has %d additional arguments\\n", count - 1);\n    }\n    return 0;\n}',
    hint: 'Program name counts as arg'
  },
  {
    id: 'c_command_line_5',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate argc and argv usage.',
    mathSolution: 'Print argc count and first argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "second"};\n    int count = 3;\n    printf("argc = %d\\n", count);\n    if(count > 1) {\n        printf("First argument: %s\\n", args[1]);\n    }\n    return 0;\n}',
    hint: 'argv[1] is first argument'
  },
  {
    id: 'c_command_line_6',
    topicId: 'c_command_line',
    question: 'Write a program to print the last argument if exists.',
    mathSolution: 'argv[argc-1] is last argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "middle", "last"};\n    int count = 4;\n    if(count > 1) {\n        printf("Last argument: %s\\n", args[count-1]);\n    } else {\n        printf("No arguments\\n");\n    }\n    return 0;\n}',
    hint: 'Indices from 0 to argc-1'
  },
  {
    id: 'c_command_line_7',
    topicId: 'c_command_line',
    question: 'Write a program that demonstrates command line arguments length.',
    mathSolution: 'Print each argument and its length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "hello", "world"};\n    int count = 3;\n    for(int i = 0; i < count; i++) {\n        printf("Arg %d: %s (length %lu)\\n", i, args[i], strlen(args[i]));\n    }\n    return 0;\n}',
    hint: 'Use strlen to get length'
  },
  {
    id: 'c_command_line_8',
    topicId: 'c_command_line',
    question: 'Write a program to convert first argument to integer using atoi.',
    mathSolution: 'Use atoi() for conversion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "42"};\n    int count = 2;\n    if(count > 1) {\n        int num = atoi(args[1]);\n        printf("Converted integer: %d\\n", num);\n    } else {\n        printf("No argument provided\\n");\n    }\n    return 0;\n}',
    hint: 'atoi returns 0 if conversion fails'
  },
  {
    id: 'c_command_line_9',
    topicId: 'c_command_line',
    question: 'Write a program to convert first argument to float using atof.',
    mathSolution: 'Use atof() for conversion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "3.14159"};\n    int count = 2;\n    if(count > 1) {\n        float num = atof(args[1]);\n        printf("Converted float: %.2f\\n", num);\n    } else {\n        printf("No argument provided\\n");\n    }\n    return 0;\n}',
    hint: 'atof returns 0.0 on error'
  },
  {
    id: 'c_command_line_10',
    topicId: 'c_command_line',
    question: 'Write a program to check for help option and display usage.',
    mathSolution: 'Compare argument with "-h" or "--help"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "--help"};\n    int count = 2;\n    if(count > 1 && (strcmp(args[1], "-h") == 0 || strcmp(args[1], "--help") == 0)) {\n        printf("Usage: program [options]\\n");\n        printf("  -h, --help  Show this help\\n");\n    } else {\n        printf("Run with -h for help\\n");\n    }\n    return 0;\n}',
    hint: 'Common convention for help'
  },

  // ========== NUMERIC ARGUMENT PROCESSING (11-20) ==========
  {
    id: 'c_command_line_11',
    topicId: 'c_command_line',
    question: 'Write a program to sum all numeric command line arguments.',
    mathSolution: 'Convert and accumulate using atoi',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "10", "20", "30", "40"};\n    int count = 5;\n    int sum = 0;\n    for(int i = 1; i < count; i++) {\n        sum += atoi(args[i]);\n    }\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Initialize sum to 0'
  },
  {
    id: 'c_command_line_12',
    topicId: 'c_command_line',
    question: 'Write a program to calculate average of numeric arguments.',
    mathSolution: 'Sum divided by count',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "10", "20", "30", "40", "50"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    double sum = 0;\n    for(int i = 1; i < count; i++) {\n        sum += atof(args[i]);\n    }\n    printf("Average = %.2f\\n", sum / (count - 1));\n    return 0;\n}',
    hint: 'Use atof for floating point'
  },
  {
    id: 'c_command_line_13',
    topicId: 'c_command_line',
    question: 'Write a program to find maximum of numeric arguments.',
    mathSolution: 'Track largest value',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "45", "12", "78", "34", "56"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    double max = atof(args[1]);\n    for(int i = 2; i < count; i++) {\n        double val = atof(args[i]);\n        if(val > max) max = val;\n    }\n    printf("Maximum = %.2f\\n", max);\n    return 0;\n}',
    hint: 'Initialize max with first argument'
  },
  {
    id: 'c_command_line_14',
    topicId: 'c_command_line',
    question: 'Write a program to find minimum of numeric arguments.',
    mathSolution: 'Track smallest value',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "45", "12", "78", "34", "56"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    double min = atof(args[1]);\n    for(int i = 2; i < count; i++) {\n        double val = atof(args[i]);\n        if(val < min) min = val;\n    }\n    printf("Minimum = %.2f\\n", min);\n    return 0;\n}',
    hint: 'Initialize min with first argument'
  },
  {
    id: 'c_command_line_15',
    topicId: 'c_command_line',
    question: 'Write a program to check if first argument is even or odd.',
    mathSolution: 'Use modulo operator',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "17"};\n    int count = 2;\n    if(count < 2) {\n        printf("No argument provided\\n");\n        return 0;\n    }\n    int num = atoi(args[1]);\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    return 0;\n}',
    hint: 'Even numbers divisible by 2'
  },
  {
    id: 'c_command_line_16',
    topicId: 'c_command_line',
    question: 'Write a program to check if argument is within range 1-100.',
    mathSolution: 'Compare with boundaries',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "75"};\n    int count = 2;\n    if(count < 2) {\n        printf("No argument provided\\n");\n        return 0;\n    }\n    int num = atoi(args[1]);\n    if(num >= 1 && num <= 100) {\n        printf("%d is in range 1-100\\n", num);\n    } else {\n        printf("%d is out of range 1-100\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND operator'
  },
  {
    id: 'c_command_line_17',
    topicId: 'c_command_line',
    question: 'Write a program to find product of numeric arguments.',
    mathSolution: 'Multiply all values',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "2", "3", "4", "5"};\n    int count = 5;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    long product = 1;\n    for(int i = 1; i < count; i++) {\n        product *= atol(args[i]);\n    }\n    printf("Product = %ld\\n", product);\n    return 0;\n}',
    hint: 'Initialize product to 1'
  },
  {
    id: 'c_command_line_18',
    topicId: 'c_command_line',
    question: 'Write a program to sort numeric arguments in ascending order.',
    mathSolution: 'Collect numbers, sort, print',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint compare(const void *a, const void *b) {\n    return *(int*)a - *(int*)b;\n}\n\nint main() {\n    char *args[] = {"./program", "64", "25", "12", "22", "11"};\n    int count = 6;\n    if(count < 2) {\n        printf("No numbers provided\\n");\n        return 0;\n    }\n    int n = count - 1;\n    int nums[n];\n    for(int i = 0; i < n; i++) {\n        nums[i] = atoi(args[i+1]);\n    }\n    qsort(nums, n, sizeof(int), compare);\n    printf("Sorted: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", nums[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Use qsort for sorting'
  },
  {
    id: 'c_command_line_19',
    topicId: 'c_command_line',
    question: 'Write a program to reverse the order of arguments displayed.',
    mathSolution: 'Print arguments from last to first',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "second", "third", "fourth"};\n    int count = 5;\n    printf("Arguments in reverse: ");\n    for(int i = count - 1; i >= 1; i--) {\n        printf("%s ", args[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Start from last index'
  },
  {
    id: 'c_command_line_20',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate argument index and value.',
    mathSolution: 'Display each argument with its index',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "cherry"};\n    int count = 4;\n    for(int i = 0; i < count; i++) {\n        printf("Index %d: %s\\n", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'Loop through all arguments'
  },

  // ========== STRING ARGUMENT PROCESSING (21-30) ==========
  {
    id: 'c_command_line_21',
    topicId: 'c_command_line',
    question: 'Write a program to concatenate all arguments into one string.',
    mathSolution: 'Join args with spaces',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "Hello", "World", "from", "C"};\n    int count = 5;\n    char result[256] = "";\n    for(int i = 1; i < count; i++) {\n        strcat(result, args[i]);\n        if(i < count - 1) strcat(result, " ");\n    }\n    printf("Concatenated: %s\\n", result);\n    return 0;\n}',
    hint: 'Watch buffer size'
  },
  {
    id: 'c_command_line_22',
    topicId: 'c_command_line',
    question: 'Write a program to find longest argument string.',
    mathSolution: 'Track argument with maximum length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "grapefruit", "kiwi"};\n    int count = 5;\n    if(count < 2) {\n        printf("No arguments\\n");\n        return 0;\n    }\n    int max_len = strlen(args[1]);\n    char *longest = args[1];\n    for(int i = 2; i < count; i++) {\n        int len = strlen(args[i]);\n        if(len > max_len) {\n            max_len = len;\n            longest = args[i];\n        }\n    }\n    printf("Longest: %s (length %d)\\n\", longest, max_len);\n    return 0;\n}',
    hint: 'Use strlen for length'
  },
  {
    id: 'c_command_line_23',
    topicId: 'c_command_line',
    question: 'Write a program to find shortest argument string.',
    mathSolution: 'Track argument with minimum length',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "kiwi", "grapefruit"};\n    int count = 5;\n    if(count < 2) {\n        printf("No arguments\\n");\n        return 0;\n    }\n    int min_len = strlen(args[1]);\n    char *shortest = args[1];\n    for(int i = 2; i < count; i++) {\n        int len = strlen(args[i]);\n        if(len < min_len) {\n            min_len = len;\n            shortest = args[i];\n        }\n    }\n    printf("Shortest: %s (length %d)\\n\", shortest, min_len);\n    return 0;\n}',
    hint: 'Initialize with first argument'
  },
 {
    id: 'c_command_line_24',
    topicId: 'c_command_line',
    question: 'Write a program to count arguments starting with a specific letter.',
    mathSolution: 'Check first character of each argument',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *words[] = {"apple", "banana", "apricot", "grape", "avocado"};\n    char letter = \'a\';\n    int count = 0;\n    for(int i = 0; i < 5; i++) {\n        if(words[i][0] == letter) count++;\n    }\n    printf("Words starting with \'%c\': %d\\n", letter, count);\n    return 0;\n}',
    hint: 'Check first character of each word'
},
  {
    id: 'c_command_line_25',
    topicId: 'c_command_line',
    question: 'Write a program to remove duplicates from arguments.',
    mathSolution: 'Print only unique arguments',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "apple", "banana", "apple", "grape", "banana"};\n    int count = 6;\n    printf("Unique arguments: ");\n    for(int i = 1; i < count; i++) {\n        int seen = 0;\n        for(int j = 1; j < i; j++) {\n            if(strcmp(args[i], args[j]) == 0) {\n                seen = 1;\n                break;\n            }\n        }\n        if(!seen) {\n            printf("%s ", args[i]);\n        }\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Compare with previous arguments'
  },
  {
    id: 'c_command_line_26',
    topicId: 'c_command_line',
    question: 'Write a program to print arguments that are numeric (only digits).',
    mathSolution: 'Check if all characters are digits',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char *args[] = {"./program", "123", "abc", "456", "hello", "789"};\n    int count = 6;\n    printf("Numeric arguments: ");\n    for(int i = 1; i < count; i++) {\n        int is_num = 1;\n        for(int j = 0; args[i][j]; j++) {\n            if(!isdigit(args[i][j])) {\n                is_num = 0;\n                break;\n            }\n        }\n        if(is_num) printf("%s ", args[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
    hint: 'Use isdigit() for each character'
  },
  {
    id: 'c_command_line_27',
    topicId: 'c_command_line',
    question: 'Write a program to filter arguments containing a specific pattern.',
    mathSolution: 'Print arguments containing substring',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "abc", "hello", "abcd", "world", "bcd"};\n    int count = 6;\n    char *pattern = "bc";\n    printf("Pattern: %s\\n\", pattern);\n    printf(\"Matching: \");\n    for(int i = 1; i < count; i++) {\n        if(strstr(args[i], pattern) != NULL) {\n            printf(\"%s \", args[i]);\n        }\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Use strstr() to find substring'
  },
  {
    id: 'c_command_line_28',
    topicId: 'c_command_line',
    question: 'Write a program to check if a filename ends with ".txt".',
    mathSolution: 'Compare last 4 characters',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "document.txt", "image.jpg", "data.txt", "report.pdf"};\n    int count = 5;\n    for(int i = 1; i < count; i++) {\n        int len = strlen(args[i]);\n        if(len >= 4 && strcmp(args[i] + len - 4, ".txt") == 0) {\n            printf("%s is a text file\\n\", args[i]);\n        }\n    }\n    return 0;\n}',
    hint: 'Compare end of string'
  },
  {
    id: 'c_command_line_29',
    topicId: 'c_command_line',
    question: 'Write a program to convert arguments to uppercase.',
    mathSolution: 'Use toupper() on each character',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char *args[] = {"./program", "hello", "world", "test"};\n    int count = 4;\n    printf("Uppercase arguments: \");\n    for(int i = 1; i < count; i++) {\n        for(int j = 0; args[i][j]; j++) {\n            putchar(toupper(args[i][j]));\n        }\n        printf(\" \");\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Loop through each character'
  },
  {
    id: 'c_command_line_30',
    topicId: 'c_command_line',
    question: 'Write a program to sort arguments alphabetically.',
    mathSolution: 'Use qsort with strcmp',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nint compare(const void *a, const void *b) {\n    return strcmp(*(const char**)a, *(const char**)b);\n}\n\nint main() {\n    char *args[] = {"./program", "banana", "apple", "cherry", "date"};\n    int count = 5;\n    qsort(args + 1, count - 1, sizeof(char*), compare);\n    printf("Sorted arguments: \");\n    for(int i = 1; i < count; i++) {\n        printf("%s \", args[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Sort pointers to strings'
  },

  // ========== FLAG AND OPTION PARSING (31-40) ==========
  {
    id: 'c_command_line_31',
    topicId: 'c_command_line',
    question: 'Write a program to detect verbose flag in arguments.',
    mathSolution: 'Search for -v or --verbose flag',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "-v", "input.txt"};\n    int count = 3;\n    int verbose = 0;\n    for(int i = 1; i < count; i++) {\n        if(strcmp(args[i], "-v") == 0 || strcmp(args[i], "--verbose") == 0) {\n            verbose = 1;\n        }\n    }\n    if(verbose) {\n        printf("Verbose mode ON\\n\");\n    } else {\n        printf(\"Verbose mode OFF\\n\");\n    }\n    return 0;\n}',
    hint: 'Check each argument for flag'
  },
 {
    id: 'c_command_line_32',
    topicId: 'c_command_line',
    question: 'Write a program to parse key=value arguments.',
    mathSolution: 'Split on = character',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "name=John";\n    char *delim = strchr(str, \'=\');\n    if(delim) {\n        *delim = \'\\0\';\n        printf("Key: %s\\n", str);\n        printf("Value: %s\\n", delim + 1);\n    }\n    return 0;\n}',
    hint: 'Format: key=value'
},
  {
    id: 'c_command_line_33',
    topicId: 'c_command_line',
    question: 'Write a program to handle combined short options (-abc).',
    mathSolution: 'Parse each character after hyphen',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "-abc"};\n    int count = 2;\n    int a_flag = 0, b_flag = 0, c_flag = 0;\n    for(int i = 1; i < count; i++) {\n        if(args[i][0] == \'-\' && args[i][1] != \'-\') {\n            for(int j = 1; args[i][j]; j++) {\n                if(args[i][j] == \'a\') a_flag = 1;\n                if(args[i][j] == \'b\') b_flag = 1;\n                if(args[i][j] == \'c\') c_flag = 1;\n            }\n        }\n    }\n    printf("Flags -a: %d, -b: %d, -c: %d\\n\", a_flag, b_flag, c_flag);\n    return 0;\n}',
    hint: 'Loop through each character after hyphen'
  },
  {
    id: 'c_command_line_34',
    topicId: 'c_command_line',
    question: 'Write a program to set debug level with -d option.',
    mathSolution: 'Parse -d value from arguments',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "-d", "3"};\n    int count = 3;\n    int debug = 0;\n    for(int i = 1; i < count - 1; i++) {\n        if(strcmp(args[i], "-d") == 0) {\n            debug = atoi(args[i+1]);\n        }\n    }\n    printf("Debug level: %d\\n\", debug);\n    return 0;\n}',
    hint: 'Level increases verbosity'
  },
{
    id: 'c_command_line_35',
    topicId: 'c_command_line',
    question: 'Write a program to parse --long-option=value format.',
    mathSolution: 'Split on = character for long options',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char option[] = "--output=result.txt";\n    char *delim = strchr(option, \'=\');\n    if(delim) {\n        *delim = \'\\0\';\n        printf("Option: %s\\n", option);\n        printf("Value: %s\\n", delim + 1);\n    }\n    return 0;\n}',
    hint: 'Format: --option=value'
},
  {
    id: 'c_command_line_36',
    topicId: 'c_command_line',
    question: 'Write a program to check for --help and show usage.',
    mathSolution: 'Display help message if --help present',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "--help"};\n    int count = 2;\n    for(int i = 1; i < count; i++) {\n        if(strcmp(args[i], \"--help") == 0) {\n            printf("Usage: program [options]\\n\");\n            printf(\"Options:\\n\");\n            printf(\"  --help    Show this help\\n\");\n            printf(\"  --version Show version\\n\");\n            return 0;\n        }\n        if(strcmp(args[i], \"--version") == 0) {\n            printf(\"Version 1.0\\n\");\n            return 0;\n        }\n    }\n    printf(\"Run with --help for usage\\n\");\n    return 0;\n}',
    hint: 'Check for help flag first'
  },
  {
    id: 'c_command_line_37',
    topicId: 'c_command_line',
    question: 'Write a program to process hostname and port from command line.',
    mathSolution: 'First argument host, second port',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "localhost", "8080"};\n    int count = 3;\n    if(count != 3) {\n        printf("Usage: %s <host> <port>\\n\", args[0]);\n        return 0;\n    }\n    char *host = args[1];\n    int port = atoi(args[2]);\n    printf("Connect to %s on port %d\\n\", host, port);\n    return 0;\n}',
    hint: 'Port must be number'
  },
  {
    id: 'c_command_line_38',
    topicId: 'c_command_line',
    question: 'Write a program to handle optional port with default value.',
    mathSolution: 'Use default if no port specified',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char host[] = "localhost";\n    int port = 8080;\n    printf("Connecting to %s on port %d\\n", host, port);\n    return 0;\n}',
    hint: 'Default port if not specified'
},
 {
    id: 'c_command_line_39',
    topicId: 'c_command_line',
    question: 'Write a program to validate argument count and show usage message.',
    mathSolution: 'Check argc and display proper usage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "input.txt", "output.txt"};\n    int count = 3;\n    if(count != 3) {\n        printf("Error: Need 2 arguments\\n");\n        printf("Usage: program <input> <output>\\n");\n        return 1;\n    }\n    printf("Input: %s, Output: %s\\n", args[1], args[2]);\n    return 0;\n}',
    hint: 'Return non-zero on error'
},
  {
    id: 'c_command_line_40',
    topicId: 'c_command_line',
    question: 'Write a program to display program usage and version.',
    mathSolution: 'Show help and version information',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Program: Command Line Demo\\n\");\n    printf(\"Version: 1.0\\n\");\n    printf(\"Usage: program [options] [arguments]\\n\");\n    printf(\"Options:\\n\");\n    printf(\"  -h, --help    Show this help\\n\");\n    printf(\"  -v, --verbose  Enable verbose output\\n\");\n    return 0;\n}',
    hint: 'Display version information'
  },

  // ========== SIMULATION AND DEMONSTRATION (41-50) ==========
  {
    id: 'c_command_line_41',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate basic command line argument parsing.',
    mathSolution: 'Print all arguments with their indices',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "arg1", "arg2", "arg3"};\n    int count = 4;\n    printf("Demonstration of command line arguments:\\n\");\n    printf(\"Total arguments: %d\\n\", count);\n    for(int i = 0; i < count; i++) {\n        printf(\"Argument %d: %s\\n\", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'argc counts program name'
  },
  {
    id: 'c_command_line_42',
    topicId: 'c_command_line',
    question: 'Write a program to show different ways to access command line arguments.',
    mathSolution: 'Demonstrate argv indexing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"./program", "first", "second", "third"};\n    int count = 4;\n    printf("Program: %s\\n\", args[0]);\n    if(count > 1) printf(\"First arg: %s\\n\", args[1]);\n    if(count > 2) printf(\"Second arg: %s\\n\", args[2]);\n    if(count > 3) printf(\"Third arg: %s\\n\", args[3]);\n    return 0;\n}',
    hint: 'argv[0] is program name'
  },
  {
    id: 'c_command_line_43',
    topicId: 'c_command_line',
    question: 'Write a program to simulate command line argument count.',
    mathSolution: 'Create simulated arguments array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *simulated_args[] = {"program", "arg1", "arg2", "arg3"};\n    int sim_argc = 4;\n    printf("Simulated argc = %d\\n\", sim_argc);\n    for(int i = 0; i < sim_argc; i++) {\n        printf(\"argv[%d] = %s\\n\", i, simulated_args[i]);\n    }\n    return 0;\n}',
    hint: 'Simulate when no real args'
  },
  {
    id: 'c_command_line_44',
    topicId: 'c_command_line',
    question: 'Write a program to count number of characters in all arguments.',
    mathSolution: 'Sum of lengths of all arguments',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"./program", "hello", "world", "test"};\n    int count = 4;\n    int total = 0;\n    for(int i = 1; i < count; i++) {\n        total += strlen(args[i]);\n    }\n    printf("Total characters in arguments: %d\\n\", total);\n    return 0;\n}',
    hint: 'Use strlen for each argument'
  },
  {
    id: 'c_command_line_45',
    topicId: 'c_command_line',
    question: 'Write a program to create a simple command line argument processor.',
    mathSolution: 'Parse and process arguments',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"program", "-o", "output.txt", "input.txt"};\n    int count = 4;\n    char *input = NULL, *output = NULL;\n    for(int i = 1; i < count; i++) {\n        if(strcmp(args[i], "-o") == 0 && i+1 < count) {\n            output = args[++i];\n        } else {\n            input = args[i];\n        }\n    }\n    printf("Input file: %s\\n\", input ? input : \"none\");\n    printf(\"Output file: %s\\n\", output ? output : \"none\");\n    return 0;\n}',
    hint: 'Process flags and arguments'
  },
  {
    id: 'c_command_line_46',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate command line argument preservation.',
    mathSolution: 'Store arguments in array for later use',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *args[] = {"prog", "-f", "file.txt", "-v"};\n    int count = 4;\n    char *stored[10];\n    for(int i = 0; i < count; i++) {\n        stored[i] = args[i];\n    }\n    printf("Stored arguments: \");\n    for(int i = 0; i < count; i++) {\n        printf("%s \", stored[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}',
    hint: 'Store for later processing'
  },
  {
    id: 'c_command_line_47',
    topicId: 'c_command_line',
    question: 'Write a program to convert first argument to long integer.',
    mathSolution: 'Use atol for conversion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    char *args[] = {"./program", "123456789"};\n    int count = 2;\n    if(count > 1) {\n        long num = atol(args[1]);\n        printf("Long integer: %ld\\n\", num);\n    } else {\n        printf("No argument provided\\n\");\n    }\n    return 0;\n}',
    hint: 'atol converts string to long'
  },
  {
    id: 'c_command_line_48',
    topicId: 'c_command_line',
    question: 'Write a program to demonstrate argument validation.',
    mathSolution: 'Check if argument is valid number',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char *arg = "12345";\n    int valid = 1;\n    for(int i = 0; arg[i]; i++) {\n        if(!isdigit(arg[i])) {\n            valid = 0;\n            break;\n        }\n    }\n    if(valid) {\n        printf("Valid number: %s\\n\", arg);\n    } else {\n        printf(\"Invalid number: %s\\n\", arg);\n    }\n    return 0;\n}',
    hint: 'Validate before conversion'
  },
  {
    id: 'c_command_line_49',
    topicId: 'c_command_line',
    question: 'Write a program to display formatted command line arguments.',
    mathSolution: 'Format arguments with labels',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char *args[] = {"program", "--input=data.txt", "--verbose"};\n    int count = 3;\n    printf("Command line arguments:\\n\");\n    printf("  argv[0]: %s (program name)\\n\", args[0]);\n    for(int i = 1; i < count; i++) {\n        printf(\"  argv[%d]: %s\\n\", i, args[i]);\n    }\n    return 0;\n}',
    hint: 'Format output nicely'
  },
  {
    id: 'c_command_line_50',
    topicId: 'c_command_line',
    question: 'Write a program to simulate complete command line argument handling.',
    mathSolution: 'Process all arguments with flags',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *argv[] = {"prog", "-v", "--name=test", "file.txt"};\n    int argc = 4;\n    int verbose = 0;\n    char *name = NULL;\n    char *file = NULL;\n    for(int i = 1; i < argc; i++) {\n        if(strcmp(argv[i], "-v") == 0) {\n            verbose = 1;\n        } else if(strncmp(argv[i], "--name=", 7) == 0) {\n            name = argv[i] + 7;\n        } else {\n            file = argv[i];\n        }\n    }\n    printf("Verbose: %d\\n\", verbose);\n    printf(\"Name: %s\\n\", name ? name : \"default\");\n    printf(\"File: %s\\n\", file ? file : \"none\");\n    return 0;\n}',
    hint: 'Complete argument processing'
  },
  //goto
  {
    id: 'c_goto_001',
    topicId: 'c_goto',
    question: 'Write a program using goto to print numbers 1 to 5 without using any loop.',
    mathSolution: 'Print sequence: 1 2 3 4 5 using jumps',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i <= 5) {\n        printf("%d ", i);\n        i++;\n        goto start;\n    }\n    return 0;\n}',
    hint: 'Create a loop using goto and a label'
  },
  {
    id: 'c_goto_002',
    topicId: 'c_goto',
    question: 'Write a program using goto to print numbers 1 to 10 but skip printing number 5.',
    mathSolution: 'Print: 1 2 3 4 6 7 8 9 10 (skip 5)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i > 10) goto end;\n    if(i == 5) {\n        i++;\n        goto start;\n    }\n    printf("%d ", i);\n    i++;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Use goto to skip the iteration when i equals 5'
  },
  {
    id: 'c_goto_003',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate factorial of 5.',
    mathSolution: '5! = 120',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 5, fact = 1, i = 1;\n    loop:\n    if(i > n) goto end;\n    fact *= i;\n    i++;\n    goto loop;\n    end:\n    printf("Factorial of %d = %d\\n", n, fact);\n    return 0;\n}',
    hint: 'Multiply fact by i repeatedly until i reaches n'
  },
  {
    id: 'c_goto_004',
    topicId: 'c_goto',
    question: 'Write a program using goto to print the sum of first 10 natural numbers.',
    mathSolution: 'Sum = 1+2+...+10 = 55',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, sum = 0;\n    start:\n    if(i > 10) goto end;\n    sum += i;\n    i++;\n    goto start;\n    end:\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Accumulate sum in a loop using goto'
  },
  {
    id: 'c_goto_005',
    topicId: 'c_goto',
    question: 'Write a program using goto to print even numbers from 2 to 10.',
    mathSolution: 'Even numbers: 2 4 6 8 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 2;\n    start:\n    if(i > 10) goto end;\n    printf("%d ", i);\n    i += 2;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Increment by 2 instead of 1 to get even numbers'
  },
  {
    id: 'c_goto_006',
    topicId: 'c_goto',
    question: 'Write a program using goto to print odd numbers from 1 to 9.',
    mathSolution: 'Odd numbers: 1 3 5 7 9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i > 9) goto end;\n    printf("%d ", i);\n    i += 2;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Start at 1 and increment by 2'
  },
  {
    id: 'c_goto_007',
    topicId: 'c_goto',
    question: 'Write a program using goto to countdown from 10 to 1.',
    mathSolution: 'Countdown: 10 9 8 7 6 5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 10;\n    start:\n    if(i < 1) goto end;\n    printf("%d ", i);\n    i--;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Decrement instead of increment'
  },
  {
    id: 'c_goto_008',
    topicId: 'c_goto',
    question: 'Write a program using goto to print the multiplication table of 5.',
    mathSolution: '5×1=5, 5×2=10, ..., 5×10=50',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    start:\n    if(i > 10) goto end;\n    printf("5 x %d = %d\\n", i, 5 * i);\n    i++;\n    goto start;\n    end:\n    return 0;\n}',
    hint: 'Multiply 5 with loop counter'
  },
  {
    id: 'c_goto_009',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate sum of digits of 123.',
    mathSolution: '1+2+3 = 6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 123, sum = 0;\n    start:\n    if(num == 0) goto end;\n    sum += num % 10;\n    num /= 10;\n    goto start;\n    end:\n    printf("Sum of digits = %d\\n", sum);\n    return 0;\n}',
    hint: 'Extract digits using modulo 10 and divide by 10'
  },
  {
    id: 'c_goto_010',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse number 123.',
    mathSolution: 'Reverse of 123 is 321',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 123, rev = 0;\n    start:\n    if(num == 0) goto end;\n    rev = rev * 10 + (num % 10);\n    num /= 10;\n    goto start;\n    end:\n    printf("Reverse = %d\\n", rev);\n    return 0;\n}',
    hint: 'Build reversed number digit by digit'
  },

  // ========== ERROR HANDLING WITH GOTO (11-20) ==========
  {
    id: 'c_goto_011',
    topicId: 'c_goto',
    question: 'Write a program using goto to validate age (must be 18-100).',
    mathSolution: 'Check if age 25 is valid',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    if(age < 18) goto too_young;\n    if(age > 100) goto too_old;\n    printf("Age %d is valid\\n", age);\n    goto end;\n    too_young:\n    printf("Age %d is too young\\n", age);\n    goto end;\n    too_old:\n    printf("Age %d is too old\\n", age);\n    end:\n    return 0;\n}',
    hint: 'Jump to different error labels based on condition'
  },
  {
    id: 'c_goto_012',
    topicId: 'c_goto',
    question: 'Write a program with validation for username and password using goto.',
    mathSolution: 'Check if credentials match',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char username[] = "admin";\n    char password[] = "secret";\n    if(strcmp(username, "admin") != 0) goto user_error;\n    if(strcmp(password, "secret") != 0) goto pass_error;\n    printf("Login successful\\n");\n    goto end;\n    user_error:\n    printf("Invalid username\\n");\n    goto end;\n    pass_error:\n    printf("Invalid password\\n");\n    end:\n    return 0;\n}',
    hint: 'Different labels for different error conditions'
  },
  {
    id: 'c_goto_013',
    topicId: 'c_goto',
    question: 'Write a program that validates multiple fields using goto for error handling.',
    mathSolution: 'Validate name, age, and email',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char name[] = "John\";\n    int age = 25;\n    char email[] = "john@example.com";\n    if(strlen(name) < 2) goto name_error;\n    if(age < 18 || age > 100) goto age_error;\n    if(strchr(email, \'@\') == NULL) goto email_error;\n    printf("All fields valid\\n");\n    goto end;\n    name_error:\n    printf("Name too short\\n\");\n    goto end;\n    age_error:\n    printf("Invalid age\\n\");\n    goto end;\n    email_error:\n    printf("Invalid email\\n\");\n    end:\n    return 0;\n}',
    hint: 'Each validation failure jumps to specific error handler'
  },
  {
    id: 'c_goto_014',
    topicId: 'c_goto',
    question: 'Write a program that uses goto for retry on invalid input.',
    mathSolution: 'Keep asking until valid input 5 is entered',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 10;\n    input:\n    if(num == 5) goto valid;\n    num = 5;\n    goto input;\n    valid:\n    printf("Valid input: %d\\n", num);\n    return 0;\n}',
    hint: 'Jump back to input label when validation fails'
  },
  {
    id: 'c_goto_015',
    topicId: 'c_goto',
    question: 'Write a program using goto for division by zero error handling.',
    mathSolution: 'Check denominator before division',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 0, result;\n    if(b == 0) goto error;\n    result = a / b;\n    printf("Result = %d\\n", result);\n    goto end;\n    error:\n    printf("Error: Division by zero\\n");\n    end:\n    return 0;\n}',
    hint: 'Jump to error label if denominator is zero'
  },
  {
    id: 'c_goto_016',
    topicId: 'c_goto',
    question: 'Write a program using goto to check array bounds before access.',
    mathSolution: 'Access array at index 5 (valid) or 10 (invalid)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int index = 3;\n    if(index < 0) goto underflow;\n    if(index >= 5) goto overflow;\n    printf("Value at index %d: %d\\n", index, arr[index]);\n    goto end;\n    underflow:\n    printf("Index underflow\\n");\n    goto end;\n    overflow:\n    printf("Index overflow\\n");\n    end:\n    return 0;\n}',
    hint: 'Check bounds before accessing array'
  },
  {
    id: 'c_goto_017',
    topicId: 'c_goto',
    question: 'Write a program using goto for null pointer error handling.',
    mathSolution: 'Check if pointer is NULL before dereferencing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int *ptr = NULL;\n    int value = 42;\n    if(ptr == NULL) goto null_error;\n    value = *ptr;\n    printf("Value = %d\\n", value);\n    goto end;\n    null_error:\n    printf("Error: Null pointer dereference\\n");\n    end:\n    return 0;\n}',
    hint: 'Check for NULL before using pointer'
  },
  {
    id: 'c_goto_018',
    topicId: 'c_goto',
    question: 'Write a program using goto to check if a number is within range.',
    mathSolution: 'Check if 75 is between 0 and 100',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int score = 75;\n    if(score < 0) goto below;\n    if(score > 100) goto above;\n    printf("Score %d is valid\\n", score);\n    goto end;\n    below:\n    printf("Score below range\\n");\n    goto end;\n    above:\n    printf("Score above range\\n");\n    end:\n    return 0;\n}',
    hint: 'Check both lower and upper bounds'
  },
  {
    id: 'c_goto_019',
    topicId: 'c_goto',
    question: 'Write a program using goto for error handling in PIN verification.',
    mathSolution: 'Check if PIN 1234 is correct',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int pin = 1234;\n    int entered = 1111;\n    if(entered != pin) goto wrong_pin;\n    printf("PIN accepted\\n");\n    goto end;\n    wrong_pin:\n    printf("Wrong PIN\\n");\n    end:\n    return 0;\n}',
    hint: 'Jump to error label if PIN doesn\'t match'
  },
  {
    id: 'c_goto_020',
    topicId: 'c_goto',
    question: 'Write a program using goto for file open error simulation.',
    mathSolution: 'Simulate file open check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int file_opened = 0;\n    file_opened = 1;\n    if(!file_opened) goto file_error;\n    printf("File opened successfully\\n");\n    goto end;\n    file_error:\n    printf("Error: Cannot open file\\n");\n    end:\n    return 0;\n}',
    hint: 'Check file pointer and jump on error'
  },

  // ========== GOTO WITH ARRAYS (21-30) ==========
  {
    id: 'c_goto_021',
    topicId: 'c_goto',
    question: 'Write a program using goto to find maximum element in array.',
    mathSolution: 'Max of [23,45,12,67,34] = 67',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int n = 5, max = arr[0], i = 1;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] > max) max = arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Compare each element with current max'
  },
  {
    id: 'c_goto_022',
    topicId: 'c_goto',
    question: 'Write a program using goto to find minimum element in array.',
    mathSolution: 'Min of [23,45,12,67,34] = 12',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int n = 5, min = arr[0], i = 1;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] < min) min = arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Compare each element with current min'
  },
  {
    id: 'c_goto_023',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate sum of array elements.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5, sum = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    sum += arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Accumulate each element into sum'
  },
  {
    id: 'c_goto_024',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate average of array elements.',
    mathSolution: 'Average of [10,20,30,40,50] = 30',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int n = 5, sum = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    sum += arr[i];\n    i++;\n    goto loop;\n    end:\n    printf("Average = %.2f\\n", (float)sum / n);\n    return 0;\n}',
    hint: 'Calculate sum first, then divide by count'
  },
  {
    id: 'c_goto_025',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse an array.',
    mathSolution: 'Reverse [1,2,3,4,5] → [5,4,3,2,1]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5, i = 0, temp;\n    loop:\n    if(i >= n/2) goto print;\n    temp = arr[i];\n    arr[i] = arr[n-1-i];\n    arr[n-1-i] = temp;\n    i++;\n    goto loop;\n    print:\n    printf("Reversed array: ");\n    for(i = 0; i < n; i++) printf("%d ", arr[i]);\n    return 0;\n}',
    hint: 'Swap first with last, second with second-last'
  },
  {
    id: 'c_goto_026',
    topicId: 'c_goto',
    question: 'Write a program using goto to count even and odd numbers in array.',
    mathSolution: 'Evens and odds in [1,2,3,4,5,6]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5,6};\n    int n = 6, even = 0, odd = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] % 2 == 0) even++;\n    else odd++;\n    i++;\n    goto loop;\n    end:\n    printf("Even: %d, Odd: %d\\n", even, odd);\n    return 0;\n}',
    hint: 'Use modulo operator to check parity'
  },
  {
    id: 'c_goto_027',
    topicId: 'c_goto',
    question: 'Write a program using goto for linear search in array.',
    mathSolution: 'Search for 30 in [10,20,30,40,50]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int n = 5, key = 30, i = 0;\n    loop:\n    if(i >= n) goto not_found;\n    if(arr[i] == key) goto found;\n    i++;\n    goto loop;\n    found:\n    printf("%d found at index %d\\n", key, i);\n    goto end;\n    not_found:\n    printf("%d not found\\n", key);\n    end:\n    return 0;\n}',
    hint: 'Compare each element with key until found'
  },
  {
    id: 'c_goto_028',
    topicId: 'c_goto',
    question: 'Write a program using goto to count occurrences of an element in array.',
    mathSolution: 'Count how many times 20 appears in [10,20,30,20,40]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,20,40};\n    int n = 5, key = 20, count = 0, i = 0;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] == key) count++;\n    i++;\n    goto loop;\n    end:\n    printf("%d appears %d times\\n", key, count);\n    return 0;\n}',
    hint: 'Increment counter when element matches'
  },
  {
    id: 'c_goto_029',
    topicId: 'c_goto',
    question: 'Write a program using goto to copy one array to another.',
    mathSolution: 'Copy source to destination array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int source[] = {10,20,30,40,50};\n    int dest[5];\n    int n = 5, i = 0;\n    loop:\n    if(i >= n) goto print;\n    dest[i] = source[i];\n    i++;\n    goto loop;\n    print:\n    printf("Destination array: ");\n    for(i = 0; i < n; i++) printf("%d ", dest[i]);\n    return 0;\n}',
    hint: 'Assign each element from source to destination'
  },
  {
    id: 'c_goto_030',
    topicId: 'c_goto',
    question: 'Write a program using goto to find second largest element in array.',
    mathSolution: 'Second largest in [10,45,2,78,34] = 45',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,45,2,78,34};\n    int n = 5, largest = arr[0], second = arr[0], i = 1;\n    loop:\n    if(i >= n) goto end;\n    if(arr[i] > largest) {\n        second = largest;\n        largest = arr[i];\n    } else if(arr[i] > second && arr[i] != largest) {\n        second = arr[i];\n    }\n    i++;\n    goto loop;\n    end:\n    printf("Second largest = %d\\n", second);\n    return 0;\n}',
    hint: 'Keep track of both largest and second largest'
  },

  // ========== STRING OPERATIONS WITH GOTO (31-40) ==========
  {
    id: 'c_goto_031',
    topicId: 'c_goto',
    question: 'Write a program using goto to find length of string "Hello".',
    mathSolution: 'Length = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = 0;\n    loop:\n    if(str[len] == \'\\0\') goto end;\n    len++;\n    goto loop;\n    end:\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Count characters until null terminator'
  },
  {
    id: 'c_goto_032',
    topicId: 'c_goto',
    question: 'Write a program using goto to copy string "Hello".',
    mathSolution: 'Copy "Hello" to destination',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    int i = 0;\n    loop:\n    dest[i] = src[i];\n    if(src[i] == \'\\0\') goto print;\n    i++;\n    goto loop;\n    print:\n    printf("Copied string: %s\\n", dest);\n    return 0;\n}',
    hint: 'Copy characters including null terminator'
  },
  {
    id: 'c_goto_033',
    topicId: 'c_goto',
    question: 'Write a program using goto to concatenate "Hello " and "World".',
    mathSolution: 'Result: "Hello World"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    int i = 0, j = 0;\n    find_end:\n    if(str1[i] == \'\\0\') goto copy;\n    i++;\n    goto find_end;\n    copy:\n    str1[i] = str2[j];\n    if(str2[j] == \'\\0\') goto print;\n    i++;\n    j++;\n    goto copy;\n    print:\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Find end of first string, then copy second'
  },
  {
    id: 'c_goto_034',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse string "Hello".',
    mathSolution: 'Reverse: "olleH"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int i = 0, j = 0;\n    char temp;\n    find_len:\n    if(str[j] == \'\\0\') goto reverse;\n    j++;\n    goto find_len;\n    reverse:\n    j--;\n    rev_loop:\n    if(i >= j) goto print;\n    temp = str[i];\n    str[i] = str[j];\n    str[j] = temp;\n    i++;\n    j--;\n    goto rev_loop;\n    print:\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap characters from both ends'
  },
  {
    id: 'c_goto_035',
    topicId: 'c_goto',
    question: 'Write a program using goto to check if "madam" is palindrome.',
    mathSolution: 'madam is palindrome',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "madam";\n    int i = 0, j = 0;\n    find_len:\n    if(str[j] == \'\\0\') goto check;\n    j++;\n    goto find_len;\n    check:\n    j--;\n    check_loop:\n    if(i >= j) goto palindrome;\n    if(str[i] != str[j]) goto not_palindrome;\n    i++;\n    j--;\n    goto check_loop;\n    palindrome:\n    printf("%s is palindrome\\n\", str);\n    goto end;\n    not_palindrome:\n    printf("%s is not palindrome\\n\", str);\n    end:\n    return 0;\n}',
    hint: 'Compare characters from start and end'
  },
  {
    id: 'c_goto_036',
    topicId: 'c_goto',
    question: 'Write a program using goto to count vowels in "Hello World".',
    mathSolution: 'Vowels = 3 (e,o,o)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int i = 0, vowels = 0;\n    loop:\n    if(str[i] == \'\\0\') goto end;\n    if(str[i] == \'a\'||str[i]==\'e\'||str[i]==\'i\'||str[i]==\'o\'||str[i]==\'u\'||\n       str[i] == \'A\'||str[i]==\'E\'||str[i]==\'I\'||str[i]==\'O\'||str[i]==\'U\') {\n        vowels++;\n    }\n    i++;\n    goto loop;\n    end:\n    printf("Vowels = %d\\n", vowels);\n    return 0;\n}',
    hint: 'Check each character if it is a vowel'
  },
  {
    id: 'c_goto_037',
    topicId: 'c_goto',
    question: 'Write a program using goto to convert "hello" to uppercase.',
    mathSolution: 'HELLO',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "hello";\n    int i = 0;\n    loop:\n    if(str[i] == \'\\0\') goto print;\n    if(str[i] >= \'a\' && str[i] <= \'z\') {\n        str[i] = str[i] - 32;\n    }\n    i++;\n    goto loop;\n    print:\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Subtract 32 from lowercase ASCII to get uppercase'
  },
  {
    id: 'c_goto_038',
    topicId: 'c_goto',
    question: 'Write a program using goto to convert "HELLO" to lowercase.',
    mathSolution: 'hello',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "HELLO";\n    int i = 0;\n    loop:\n    if(str[i] == \'\\0\') goto print;\n    if(str[i] >= \'A\' && str[i] <= \'Z\') {\n        str[i] = str[i] + 32;\n    }\n    i++;\n    goto loop;\n    print:\n    printf("Lowercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Add 32 to uppercase ASCII to get lowercase'
  },
  {
    id: 'c_goto_039',
    topicId: 'c_goto',
    question: 'Write a program using goto to remove spaces from "Hello World".',
    mathSolution: 'HelloWorld',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int i = 0, j = 0;\n    loop:\n    if(str[i] == \'\\0\') goto end;\n    if(str[i] != \' \') {\n        str[j] = str[i];\n        j++;\n    }\n    i++;\n    goto loop;\n    end:\n    str[j] = \'\\0\';\n    printf("Without spaces: %s\\n", str);\n    return 0;\n}',
    hint: 'Use two indices - one for reading, one for writing'
  },
  {
    id: 'c_goto_040',
    topicId: 'c_goto',
    question: 'Write a program using goto to count words in "Hello World from C".',
    mathSolution: 'Word count = 4',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World from C";\n    int i = 0, words = 0, in_word = 0;\n    loop:\n    if(str[i] == \'\\0\') goto end;\n    if(str[i] != \' \') {\n        if(!in_word) {\n            words++;\n            in_word = 1;\n        }\n    } else {\n        in_word = 0;\n    }\n    i++;\n    goto loop;\n    end:\n    printf("Word count = %d\\n", words);\n    return 0;\n}',
    hint: 'Count transitions from space to non-space'
  },
//breck-continue
 {
    id: 'c_break_continue_1',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 but break when i equals 5.',
    mathSolution: 'Prints: 1 2 3 4',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        if(i == 5) {\n            break;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use break statement to exit loop when condition is met'
  },
  {
    id: 'c_break_continue_2',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 using while loop but break when i becomes 7.',
    mathSolution: 'Prints: 1 2 3 4 5 6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i=1;\n    while(i<=10) {\n        if(i == 7) {\n            break;\n        }\n        printf("%d ", i);\n        i++;\n    }\n    return 0;\n}',
    hint: 'Break exits the loop immediately'
  },
  {
    id: 'c_break_continue_3',
    topicId: 'c_break_continue',
    question: 'Write a program to find first number divisible by 7 between 1 and 50, then break.',
    mathSolution: 'First number divisible by 7 is 7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=50; i++) {\n        if(i % 7 == 0) {\n            printf("First number divisible by 7: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check condition using modulo operator'
  },
  {
    id: 'c_break_continue_4',
    topicId: 'c_break_continue',
    question: 'Write a program to find first prime number greater than 100 and break.',
    mathSolution: 'First prime after 100 is 101',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=101; ; i++) {\n        int flag=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                flag=0;\n                break;\n            }\n        }\n        if(flag) {\n            printf("First prime after 100: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Use nested loops to check primality'
  },
  {
    id: 'c_break_continue_5',
    topicId: 'c_break_continue',
    question: 'Write a program to find first occurrence of number 30 in array and break.',
    mathSolution: 'Array [10,20,30,40,50] → found at index 2',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int search = 30;\n    int found = -1;\n    for(int i=0; i<5; i++) {\n        if(arr[i] == search) {\n            found = i;\n            break;\n        }\n    }\n    if(found != -1) printf("Found at index %d", found);\n    else printf("Not found");\n    return 0;\n}',
    hint: 'Break loop once element is found'
  },
  {
    id: 'c_break_continue_6',
    topicId: 'c_break_continue',
    question: 'Write a program to find first negative number in array and break.',
    mathSolution: 'Array [5,8,-3,10,2] first negative is -3 at index 2',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5,8,-3,10,2};\n    for(int i=0; i<5; i++) {\n        if(arr[i] < 0) {\n            printf("First negative: %d at index %d", arr[i], i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check for negative values and break when found'
  },
  {
    id: 'c_break_continue_7',
    topicId: 'c_break_continue',
    question: 'Write a program to find first perfect square greater than 50 and break.',
    mathSolution: 'First perfect square > 50 is 64 (8^2)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; ; i++) {\n        int square = i*i;\n        if(square > 50) {\n            printf("First perfect square > 50: %d", square);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Calculate squares until condition is met'
  },
  {
    id: 'c_break_continue_8',
    topicId: 'c_break_continue',
    question: 'Write a program to find first number divisible by both 3 and 5, then break.',
    mathSolution: 'First number divisible by both 3 and 5 is 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; ; i++) {\n        if(i%3==0 && i%5==0) {\n            printf("First number divisible by 3 and 5: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check both conditions using && operator'
  },
  {
    id: 'c_break_continue_9',
    topicId: 'c_break_continue',
    question: 'Write a program to find first Fibonacci number greater than 1000 and break.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 → 1597',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a=0, b=1, c;\n    while(1) {\n        c = a+b;\n        if(c > 1000) {\n            printf("First Fibonacci > 1000: %d", c);\n            break;\n        }\n        a = b;\n        b = c;\n    }\n    return 0;\n}',
    hint: 'Generate Fibonacci numbers until condition met'
  },
  {
    id: 'c_break_continue_10',
    topicId: 'c_break_continue',
    question: 'Write a program to find first Armstrong number between 100 and 500 and break.',
    mathSolution: 'Armstrong numbers: 153, 370, 371, 407 → first is 153',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=100; i<=500; i++) {\n        int num=i, sum=0, temp=i;\n        while(temp>0) {\n            int digit = temp%10;\n            sum += digit*digit*digit;\n            temp /= 10;\n        }\n        if(sum == i) {\n            printf("First Armstrong number: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Check Armstrong condition for 3-digit numbers'
  },

  // ========== BASIC CONTINUE (11-20) ==========
  {
    id: 'c_break_continue_11',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 but skip printing 5 using continue.',
    mathSolution: 'Prints: 1 2 3 4 6 7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        if(i == 5) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Continue skips the rest of the loop body'
  },
  {
    id: 'c_break_continue_12',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 10 but skip even numbers using continue.',
    mathSolution: 'Prints: 1 3 5 7 9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=10; i++) {\n        if(i%2 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use modulo operator to check even numbers'
  },
  {
    id: 'c_break_continue_13',
    topicId: 'c_break_continue',
    question: 'Write a program to print numbers from 1 to 20 but skip numbers divisible by 3.',
    mathSolution: 'Prints: 1 2 4 5 7 8 10 11 13 14 16 17 19 20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=20; i++) {\n        if(i%3 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Use modulo operator to check divisibility'
  },
  {
    id: 'c_break_continue_14',
    topicId: 'c_break_continue',
    question: 'Write a program to print all alphabets except vowels using continue.',
    mathSolution: 'Prints: B C D F G H J K L M N P Q R S T V W X Y Z',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    for(char ch=\'A\'; ch<=\'Z\'; ch++) {\n        char lower = tolower(ch);\n        if(lower==\'a\'||lower==\'e\'||lower==\'i\'||lower==\'o\'||lower==\'u\') {\n            continue;\n        }\n        printf("%c ", ch);\n    }\n    return 0;\n}',
    hint: 'Skip vowels using continue'
  },
  {
    id: 'c_break_continue_15',
    topicId: 'c_break_continue',
    question: 'Write a program to calculate sum of positive numbers only (skip negatives).',
    mathSolution: 'Numbers: 5, -2, 3, -1, 4 → sum = 5+3+4 = 12',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {5,-2,3,-1,4};\n    int sum=0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] < 0) {\n            continue;\n        }\n        sum += arr[i];\n    }\n    printf("Sum = %d", sum);\n    return 0;\n}',
    hint: 'Skip negative numbers using continue'
  },
  {
    id: 'c_break_continue_16',
    topicId: 'c_break_continue',
    question: 'Write a program to print all numbers except those ending with 5 from 1 to 50.',
    mathSolution: 'Skip 5,15,25,35,45',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=50; i++) {\n        if(i%10 == 5) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Check last digit using modulo 10'
  },
  {
    id: 'c_break_continue_17',
    topicId: 'c_break_continue',
    question: 'Write a program to print characters of a string skipping digits.',
    mathSolution: 'String "a1b2c3" prints: a b c',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "a1b2c3";\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        if(str[i] >= \'0\' && str[i] <= \'9\') {\n            continue;\n        }\n        printf("%c ", str[i]);\n    }\n    return 0;\n}',
    hint: 'Skip characters that are digits'
  },
  {
    id: 'c_break_continue_18',
    topicId: 'c_break_continue',
    question: 'Write a program to print all even numbers but skip multiples of 10 from 1 to 50.',
    mathSolution: 'Skip 10,20,30,40,50 → prints 2,4,6,8,12,14,16,18,22,24,26,28,32,34,36,38,42,44,46,48',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=50; i+=2) {\n        if(i%10 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Skip if number is divisible by 10'
  },
  {
    id: 'c_break_continue_19',
    topicId: 'c_break_continue',
    question: 'Write a program to calculate average of positive numbers (skip negatives and zeros).',
    mathSolution: 'Numbers: 10,0,-5,20,0,30 → positive: 10,20,30 avg=20',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,0,-5,20,0,30};\n    int sum=0, count=0;\n    for(int i=0; i<6; i++) {\n        if(arr[i] <= 0) {\n            continue;\n        }\n        sum += arr[i];\n        count++;\n    }\n    printf("Average = %.2f", (float)sum/count);\n    return 0;\n}',
    hint: 'Skip non-positive numbers using continue'
  },
  {
    id: 'c_break_continue_20',
    topicId: 'c_break_continue',
    question: 'Write a program to print all prime numbers between 1 and 50, skipping non-primes.',
    mathSolution: 'Primes: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=50; i++) {\n        int is_prime=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            continue;\n        }\n        printf("%d ", i);\n    }\n    return 0;\n}',
    hint: 'Continue skips non-prime numbers'
  },

  // ========== BREAK IN NESTED LOOPS (21-30) ==========
  {
    id: 'c_break_continue_21',
    topicId: 'c_break_continue',
    question: 'Write a program using nested loops to find first pair that sums to 10 and break both loops.',
    mathSolution: 'Array [1,3,5,7,9] first pair summing to 10: 1 and 9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,3,5,7,9};\n    int target=10, found=0;\n    for(int i=0; i<5; i++) {\n        for(int j=i+1; j<5; j++) {\n            if(arr[i] + arr[j] == target) {\n                printf("Pair: %d and %d", arr[i], arr[j]);\n                found=1;\n                break;\n            }\n        }\n        if(found) break;\n    }\n    return 0;\n}',
    hint: 'Use flag to break outer loop'
  },
  {
    id: 'c_break_continue_22',
    topicId: 'c_break_continue',
    question: 'Search a 2D matrix for a target value and break both loops when found.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6],[7,8,9]] search 5 → found at [1][1]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int target=5, found=0;\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            if(matrix[i][j] == target) {\n                printf("Found at [%d][%d]", i, j);\n                found=1;\n                break;\n            }\n        }\n        if(found) break;\n    }\n    return 0;\n}',
    hint: 'Use flag to break outer loop'
  },
  {
    id: 'c_break_continue_23',
    topicId: 'c_break_continue',
    question: 'Find first prime number in a 2D array and break all loops.',
    mathSolution: 'Matrix [[4,6,8],[9,10,11],[12,14,15]] first prime is 11 at [1][2]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{4,6,8},{9,10,11},{12,14,15}};\n    int found=0, prime_val, prime_i, prime_j;\n    for(int i=0; i<3 && !found; i++) {\n        for(int j=0; j<3; j++) {\n            int num=matrix[i][j], is_prime=1;\n            if(num<2) is_prime=0;\n            for(int k=2; k<=num/2; k++) {\n                if(num%k==0) {\n                    is_prime=0;\n                    break;\n                }\n            }\n            if(is_prime) {\n                prime_val=num; prime_i=i; prime_j=j;\n                found=1;\n                break;\n            }\n        }\n    }\n    if(found) printf("Prime found: %d at [%d][%d]", prime_val, prime_i, prime_j);\n    return 0;\n}',
    hint: 'Use condition in outer loop to break'
  },
  {
    id: 'c_break_continue_24',
    topicId: 'c_break_continue',
    question: 'Find common element between two arrays using nested loops, break when found.',
    mathSolution: 'Array1 [2,5,7,9], Array2 [3,6,7,8] first common: 7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr1[] = {2,5,7,9};\n    int arr2[] = {3,6,7,8};\n    int found=0;\n    for(int i=0; i<4; i++) {\n        for(int j=0; j<4; j++) {\n            if(arr1[i] == arr2[j]) {\n                printf("Common element: %d", arr1[i]);\n                found=1;\n                break;\n            }\n        }\n        if(found) break;\n    }\n    return 0;\n}',
    hint: 'Break both loops when common element found'
  },
  {
    id: 'c_break_continue_25',
    topicId: 'c_break_continue',
    question: 'Find first row in matrix with all positive numbers and break.',
    mathSolution: 'Matrix [[-1,2,3],[4,5,6],[-7,8,9]] first all-positive row: row1 [4,5,6]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{-1,2,3},{4,5,6},{-7,8,9}};\n    int found_row = -1;\n    for(int i=0; i<3; i++) {\n        int all_positive = 1;\n        for(int j=0; j<3; j++) {\n            if(matrix[i][j] < 0) {\n                all_positive = 0;\n                break;\n            }\n        }\n        if(all_positive) {\n            found_row = i;\n            break;\n        }\n    }\n    if(found_row != -1) printf("First all-positive row: %d", found_row);\n    return 0;\n}',
    hint: 'Break inner loop on negative, break outer on all-positive'
  },
  {
    id: 'c_break_continue_26',
    topicId: 'c_break_continue',
    question: 'Find first column with sum greater than 50 and break.',
    mathSolution: 'Matrix [[10,20,30],[40,5,15],[5,10,20]] col0 sum=55 → break',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{10,20,30},{40,5,15},{5,10,20}};\n    for(int j=0; j<3; j++) {\n        int sum=0;\n        for(int i=0; i<3; i++) {\n            sum += matrix[i][j];\n        }\n        if(sum > 50) {\n            printf("Column %d sum = %d", j, sum);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Calculate column sums, break when condition met'
  },
  {
    id: 'c_break_continue_27',
    topicId: 'c_break_continue',
    question: 'Find first number that is power of 2 in a 2D array and break.',
    mathSolution: 'Matrix [[3,6,9],[8,12,16],[5,10,20]] first power of 2: 8',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{3,6,9},{8,12,16},{5,10,20}};\n    int found=0, power_val;\n    for(int i=0; i<3 && !found; i++) {\n        for(int j=0; j<3; j++) {\n            int num = matrix[i][j];\n            int is_power = (num && !(num & (num-1)));\n            if(is_power) {\n                power_val = num;\n                found=1;\n                break;\n            }\n        }\n    }\n    printf("First power of 2: %d", power_val);\n    return 0;\n}',
    hint: 'Use bitwise operation to check power of 2'
  },
  {
    id: 'c_break_continue_28',
    topicId: 'c_break_continue',
    question: 'Find first element that is greater than sum of all previous elements and break.',
    mathSolution: 'Array [2,3,8,4,18] → 18 > 2+3+8+4=17',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2,3,8,4,18};\n    int sum=0, found=0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] > sum) {\n            printf("Element %d at index %d > sum %d", arr[i], i, sum);\n            found=1;\n            break;\n        }\n        sum += arr[i];\n    }\n    if(!found) printf("No such element");\n    return 0;\n}',
    hint: 'Compare current element with running sum'
  },
  {
    id: 'c_break_continue_29',
    topicId: 'c_break_continue',
    question: 'Find first row that contains a palindrome number and break.',
    mathSolution: 'Matrix [[123,456],[121,789],[555,222]] first palindrome row: row1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][2] = {{123,456},{121,789},{555,222}};\n    int found_row = -1;\n    for(int i=0; i<3; i++) {\n        int has_palindrome = 0;\n        for(int j=0; j<2; j++) {\n            int num = matrix[i][j], rev=0, temp=num;\n            while(temp>0) {\n                rev = rev*10 + temp%10;\n                temp/=10;\n            }\n            if(rev == num) {\n                has_palindrome = 1;\n                break;\n            }\n        }\n        if(has_palindrome) {\n            found_row = i;\n            break;\n        }\n    }\n    printf("First row with palindrome: %d", found_row);\n    return 0;\n}',
    hint: 'Check each number for palindrome property'
  },
  {
    id: 'c_break_continue_30',
    topicId: 'c_break_continue',
    question: 'Find first number that appears in both 2D matrix and 1D array, break all loops.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6]], target [7,8,5,9] → found 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {{1,2,3},{4,5,6}};\n    int target[] = {7,8,5,9};\n    int found=0, found_val;\n    for(int i=0; i<2 && !found; i++) {\n        for(int j=0; j<3; j++) {\n            for(int k=0; k<4; k++) {\n                if(matrix[i][j] == target[k]) {\n                    found_val = matrix[i][j];\n                    found=1;\n                    break;\n                }\n            }\n            if(found) break;\n        }\n    }\n    if(found) printf("Found common value: %d", found_val);\n    return 0;\n}',
    hint: 'Use multiple flags to break all loops'
  },

  // ========== CONTINUE IN NESTED LOOPS (31-40) ==========
  {
    id: 'c_break_continue_31',
    topicId: 'c_break_continue',
    question: 'Use continue in nested loops to skip even numbers in inner loop.',
    mathSolution: 'Print all pairs (i,j) where j is odd from 1-3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=3; i++) {\n        for(int j=1; j<=3; j++) {\n            if(j%2 == 0) {\n                continue;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Continue only affects inner loop'
  },
  {
    id: 'c_break_continue_32',
    topicId: 'c_break_continue',
    question: 'Print multiplication table but skip diagonal elements where i == j using continue.',
    mathSolution: 'Skip elements where row equals column',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=1; j<=5; j++) {\n            if(i == j) {\n                continue;\n            }\n            printf("%d×%d=%-4d", i, j, i*j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Continue skips diagonal elements'
  },
  {
    id: 'c_break_continue_33',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) where i+j is not divisible by 3 using continue.',
    mathSolution: 'Skip pairs where i+j is divisible by 3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=4; i++) {\n        for(int j=1; j<=4; j++) {\n            if((i+j) % 3 == 0) {\n                continue;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Check condition and continue if true'
  },
  {
    id: 'c_break_continue_34',
    topicId: 'c_break_continue',
    question: 'Print all combinations of two dice rolls that sum to more than 7, skipping those ≤7.',
    mathSolution: 'Dice rolls (1-6) with sum > 7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=6; i++) {\n        for(int j=1; j<=6; j++) {\n            if(i+j <= 7) {\n                continue;\n            }\n            printf("(%d,%d)=%d ", i, j, i+j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Use continue to skip small sums'
  },
  {
    id: 'c_break_continue_35',
    topicId: 'c_break_continue',
    question: 'Print matrix elements but skip elements in even rows using continue.',
    mathSolution: 'Matrix 3x3: print only rows 1 and 3 (0-indexed: rows 0,2)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    for(int i=0; i<3; i++) {\n        if(i%2 != 0) {\n            continue;\n        }\n        for(int j=0; j<3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Skip entire rows using continue'
  },
  {
    id: 'c_break_continue_36',
    topicId: 'c_break_continue',
    question: 'Print all prime numbers from a 2D matrix, skipping non-primes.',
    mathSolution: 'Matrix [[4,7,9],[2,8,11],[13,15,17]] → primes: 7,2,11,13,17',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{4,7,9},{2,8,11},{13,15,17}};\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            int num = matrix[i][j], is_prime=1;\n            if(num < 2) { continue; }\n            for(int k=2; k<=num/2; k++) {\n                if(num%k == 0) {\n                    is_prime=0;\n                    break;\n                }\n            }\n            if(!is_prime) {\n                continue;\n            }\n            printf("%d ", num);\n        }\n    }\n    return 0;\n}',
    hint: 'Use continue to skip non-prime numbers'
  },
  {
    id: 'c_break_continue_37',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) where i and j are from 1-6 and i != j, skipping when i==j.',
    mathSolution: 'All dice roll pairs except doubles',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=6; i++) {\n        for(int j=1; j<=6; j++) {\n            if(i == j) {\n                continue;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',
    hint: 'Skip when both dice show same number'
  },
  {
    id: 'c_break_continue_38',
    topicId: 'c_break_continue',
    question: 'Print all numbers from 1-100 that are divisible by 4 or 6, skipping those divisible by both.',
    mathSolution: 'Divisible by 4 or 6 but not by both (so skip 12,24,36,48,60,72,84,96)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=100; i++) {\n        if(i%4==0 && i%6==0) {\n            continue;\n        }\n        if(i%4==0 || i%6==0) {\n            printf("%d ", i);\n        }\n    }\n    return 0;\n}',
    hint: 'Skip numbers divisible by both 4 and 6'
  },
  {
    id: 'c_break_continue_39',
    topicId: 'c_break_continue',
    question: 'Print all leap years from 2000-2100, skipping centuries not divisible by 400.',
    mathSolution: 'Leap years: 2000,2004,2008,...2096, skip 2100',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int year=2000; year<=2100; year++) {\n        if(year%100==0 && year%400!=0) {\n            continue;\n        }\n        if(year%4==0) {\n            printf("%d ", year);\n        }\n    }\n    return 0;\n}',
    hint: 'Skip century years not divisible by 400'
  },
  {
    id: 'c_break_continue_40',
    topicId: 'c_break_continue',
    question: 'Print all combinations of three numbers from 1-5 that form a triangle, skipping invalid combinations.',
    mathSolution: 'Triangle inequality: a+b>c, b+c>a, a+c>b',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=1; i<=5; i++) {\n        for(int j=i; j<=5; j++) {\n            for(int k=j; k<=5; k++) {\n                if(i+j<=k || j+k<=i || i+k<=j) {\n                    continue;\n                }\n                printf("(%d,%d,%d) ", i, j, k);\n            }\n        }\n    }\n    return 0;\n}',
    hint: 'Skip combinations that don\'t satisfy triangle inequality'
  },

  // ========== BREAK AND CONTINUE TOGETHER (41-50) ==========
  {
    id: 'c_break_continue_41',
    topicId: 'c_break_continue',
    question: 'Find first 5 prime numbers using continue and break appropriately.',
    mathSolution: 'First 5 primes: 2,3,5,7,11',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int count=0;\n    for(int i=2; count<5; i++) {\n        int is_prime=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            continue;\n        }\n        printf("%d ", i);\n        count++;\n    }\n    return 0;\n}',
    hint: 'Continue skips non-primes, outer loop breaks when count reaches 5'
  },
  {
    id: 'c_break_continue_42',
    topicId: 'c_break_continue',
    question: 'Process array elements but skip negatives and stop if sum exceeds 100.',
    mathSolution: 'Array [50,30,-10,40,20] → sums 50,80 then stops at 40 (120>100)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {50,30,-10,40,20};\n    int sum=0;\n    for(int i=0; i<5; i++) {\n        if(arr[i] < 0) {\n            continue;\n        }\n        sum += arr[i];\n        if(sum > 100) {\n            printf("Sum exceeded 100 at index %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Use continue to skip negatives, break when sum > 100'
  },
  {
    id: 'c_break_continue_43',
    topicId: 'c_break_continue',
    question: 'Find first number that is both prime and palindrome between 1-200, using break and continue.',
    mathSolution: 'First prime palindrome: 2,3,5,7,11 → 11 is first',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=2; i<=200; i++) {\n        int is_prime=1;\n        for(int j=2; j<=i/2; j++) {\n            if(i%j == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            continue;\n        }\n        int num=i, rev=0, temp=i;\n        while(temp>0) {\n            rev = rev*10 + temp%10;\n            temp/=10;\n        }\n        if(rev == i) {\n            printf("First prime palindrome: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Continue if not prime, break when found prime palindrome'
  },
  {
    id: 'c_break_continue_44',
    topicId: 'c_break_continue',
    question: 'Process string, skip spaces, break if vowel encountered.',
    mathSolution: 'String "Hello World" processes: H l l (stops at e)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello World";\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(ch == \' \') {\n            continue;\n        }\n        if(ch==\'a\'||ch==\'e\'||ch==\'i\'||ch==\'o\'||ch==\'u\') {\n            printf("\\nVowel %c encountered, stopping", str[i]);\n            break;\n        }\n        printf("%c", str[i]);\n    }\n    return 0;\n}',
    hint: 'Skip spaces with continue, break on vowels'
  },
  {
    id: 'c_break_continue_45',
    topicId: 'c_break_continue',
    question: 'Generate Fibonacci series, skip numbers divisible by 3, stop when number exceeds 100.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144 → skip 3,21,144, stop at 144',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a=0, b=1, c;\n    printf("%d %d ", a, b);\n    while(1) {\n        c = a+b;\n        if(c > 100) {\n            printf("\\nExceeded 100, stopping");\n            break;\n        }\n        if(c%3 == 0) {\n            a = b;\n            b = c;\n            continue;\n        }\n        printf("%d ", c);\n        a = b;\n        b = c;\n    }\n    return 0;\n}',
    hint: 'Continue skips multiples of 3, break when >100'
  },
  {
    id: 'c_break_continue_46',
    topicId: 'c_break_continue',
    question: 'Find first 10 numbers divisible by 7 but not by 3, using continue and break.',
    mathSolution: 'Numbers: 7,14,28,35,49,56,70,77,91,98',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int count=0;\n    for(int i=7; count<10; i+=7) {\n        if(i%3 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n        count++;\n    }\n    return 0;\n}',
    hint: 'Continue skips multiples of 3, break when count reaches 10'
  },
  {
    id: 'c_break_continue_47',
    topicId: 'c_break_continue',
    question: 'Find first number that is divisible by sum of its digits, skip numbers with zero digit.',
    mathSolution: 'Numbers: 10 has zero digit skip, 11 not divisible, 12 divisible → 12',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    for(int i=10; ; i++) {\n        int num=i, sum=0, has_zero=0;\n        while(num>0) {\n            int digit = num%10;\n            if(digit == 0) {\n                has_zero=1;\n                break;\n            }\n            sum += digit;\n            num/=10;\n        }\n        if(has_zero) {\n            continue;\n        }\n        if(i % sum == 0) {\n            printf("First number: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Continue if number has zero digit, break when condition met'
  },
  {
    id: 'c_break_continue_48',
    topicId: 'c_break_continue',
    question: 'Find first 10 numbers divisible by 7 but not by 3, using continue and break.',
    mathSolution: 'Numbers: 7,14,28,35,49,56,70,77,91,98',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int count=0;\n    for(int i=7; count<10; i+=7) {\n        if(i%3 == 0) {\n            continue;\n        }\n        printf("%d ", i);\n        count++;\n    }\n    return 0;\n}',
    hint: 'Continue skips multiples of 3, break when count reaches 10'
  },
  {
    id: 'c_break_continue_49',
    topicId: 'c_break_continue',
    question: 'Count characters in string excluding spaces, stop if punctuation found.',
    mathSolution: 'String "Hello, World" → counts H e l l o (stops at comma)',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[] = "Hello, World";\n    int count=0;\n    for(int i=0; str[i]!=\'\\0\'; i++) {\n        if(str[i] == \' \') {\n            continue;\n        }\n        if(ispunct(str[i])) {\n            printf("\\nPunctuation found, stopping");\n            break;\n        }\n        count++;\n    }\n    printf("\\nCharacters count: %d", count);\n    return 0;\n}',
    hint: 'Continue skips spaces, break on punctuation'
  },
  {
    id: 'c_break_continue_50',
    topicId: 'c_break_continue',
    question: 'Find first number that is perfect square and also divisible by 7, using break and continue.',
    mathSolution: 'Numbers: 49 is 7² and divisible by 7',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    for(int i=1; ; i++) {\n        int root = sqrt(i);\n        if(root*root != i) {\n            continue;\n        }\n        if(i % 7 == 0) {\n            printf("First perfect square divisible by 7: %d", i);\n            break;\n        }\n    }\n    return 0;\n}',
    hint: 'Continue if not perfect square, break when divisible by 7'
  }
);