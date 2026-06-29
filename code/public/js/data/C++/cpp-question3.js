QuizData.questions.push(
  //string ,function ,oops,constructor
{
  id: 'cpp_strings_1',
  topicId: 'cpp_strings',
  question: 'Declare and initialize a string using std::string.',
  mathSolution: 'string is a class that manages character sequences.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Hello World";\n    string str2("C++ Strings");\n    string str3 = str1;\n    \n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    cout << "str3: " << str3 << endl;\n    \n    return 0;\n}',
  hint: '#include <string> is required for std::string class.'
},
{
  id: 'cpp_strings_2',
  topicId: 'cpp_strings',
  question: 'Get string length using length() or size() method.',
  mathSolution: 'length() and size() return number of characters in string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello C++ Programming";\n    \n    cout << "String: " << str << endl;\n    cout << "Length (length()): " << str.length() << endl;\n    cout << "Size (size()): " << str.size() << endl;\n    cout << "Empty? " << (str.empty() ? "Yes" : "No") << endl;\n    \n    string emptyStr;\n    cout << "Empty string length: " << emptyStr.length() << endl;\n    \n    return 0;\n}',
  hint: 'length() and size() are synonyms; both return the same value.'
},
{
  "id": "cpp_strings_3",
  "topicId": "cpp_strings",
  "question": "Access and modify characters in string using [] operator.",
  "mathSolution": "Characters can be accessed by index (0-based).",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    string str = \"Hello\";\n    \n    cout << \"Original: \" << str << endl;\n    cout << \"First character: \" << str[0] << endl;\n    cout << \"Last character: \" << str[str.length() - 1] << endl;\n    \n    str[0] = 'J';\n    str[4] = 'y';\n    cout << \"Modified: \" << str << endl;  // Jelly\n    \n    // Using at() method (bounds checking)\n    try {\n        cout << str.at(10) << endl;\n    } catch (const out_of_range& e) {\n        cout << \"Out of range: \" << e.what() << endl;\n    }\n    \n    return 0;\n}",
  "hint": "[] operator is faster but does not check bounds; at() checks bounds and throws exception."
},
{
  "id": "cpp_strings_4",
  "topicId": "cpp_strings",
  "question": "Concatenate strings using + operator.",
  "mathSolution": "'+' operator joins two strings, '+=' appends.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string firstName = \"John\";\n    string lastName = \"Doe\";\n    string fullName = firstName + \" \" + lastName;\n    \n    cout << \"Full name: \" << fullName << endl;\n    \n    string greeting = \"Hello\";\n    greeting += \" \";\n    greeting += firstName;\n    greeting += \"!\";\n    \n    cout << \"Greeting: \" << greeting << endl;\n    \n    // Appending characters\n    string text = \"ABC\";\n    text += 'D';\n    text += 'E';\n    cout << \"Appended: \" << text << endl;\n    \n    return 0;\n}",
  "hint": "+ operator creates new string; += modifies existing string."
},
{
  "id": "cpp_strings_5",
  "topicId": "cpp_strings",
  "question": "Use append() method to add content to string.",
  "mathSolution": "append() adds characters, strings, or substrings.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = \"Hello\";\n    \n    // Append string\n    str.append(\" World\");\n    cout << str << endl;\n    \n    // Append part of string\n    string text = \" Programming is fun\";\n    str.append(text, 1, 12);  // Append \"Programming\" (start from index 1, length 12)\n    cout << str << endl;\n    \n    // Append characters (repeating)\n    str.append(3, '!');\n    cout << str << endl;\n    \n    // Append using iterators\n    string extra = \" Welcome\";\n    str.append(extra.begin(), extra.end());\n    cout << str << endl;\n    \n    return 0;\n}",
  "hint": "append() has multiple overloads for different use cases."
},
{
  id: 'cpp_strings_6',
  topicId: 'cpp_strings',
  question: 'Extract substring using substr() method.',
  mathSolution: 'substr(pos, count) returns substring starting at pos with count characters.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World Programming";\n    \n    string part1 = str.substr(0, 5);     // "Hello"\n    string part2 = str.substr(6, 5);     // "World"\n    string part3 = str.substr(12);       // "Programming" (from pos to end)\n    \n    cout << "Original: " << str << endl;\n    cout << "Substring 0-5: " << part1 << endl;\n    cout << "Substring 6-11: " << part2 << endl;\n    cout << "Substring from 12: " << part3 << endl;\n    \n    // Last word\n    size_t lastSpace = str.find_last_of(\' \');\n    string lastWord = str.substr(lastSpace + 1);\n    cout << "Last word: " << lastWord << endl;\n    \n    return 0;\n}',
  hint: 'If count is omitted, substr goes till end of string.'
},
{
  id: 'cpp_strings_7',
  topicId: 'cpp_strings',
  question: 'Find substring position using find() method.',
  mathSolution: 'find() returns index of first occurrence, string::npos if not found.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World, Welcome to C++ World";\n    \n    // Find first occurrence\n    size_t pos = str.find("World");\n    if (pos != string::npos) {\n        cout << "\'World\' found at position: " << pos << endl;\n    }\n    \n    // Find from specific position\n    pos = str.find("World", pos + 1);\n    if (pos != string::npos) {\n        cout << "Second \'World\' found at: " << pos << endl;\n    }\n    \n    // Find character\n    pos = str.find(\'W\');\n    cout << "First \'W\' found at: " << pos << endl;\n    \n    // Find not found case\n    if (str.find("Python") == string::npos) {\n        cout << "\'Python\' not found\\n";\n    }\n    \n    return 0;\n}',
  hint: 'Always compare result with string::npos to check if found.'
},
{
  id: 'cpp_strings_8',
  topicId: 'cpp_strings',
  question: 'Use rfind() to find from the end of string.',
  mathSolution: 'rfind() searches backward for last occurrence.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World, Welcome to World of C++";\n    \n    // Find last occurrence\n    size_t pos = str.rfind("World");\n    cout << "Last \'World\' at: " << pos << endl;\n    \n    // Find last occurrence of character\n    pos = str.rfind(\'o\');\n    cout << "Last \'o\' at: " << pos << endl;\n    \n    // Find from specific position (search backward)\n    pos = str.rfind("World", 20);\n    cout << "\'World\' searching backward from 20: " << pos << endl;\n    \n    // Find last occurrence of any character\n    pos = str.find_last_of("aeiou");\n    cout << "Last vowel at: " << pos << endl;\n    \n    return 0;\n}',
  hint: 'rfind searches from the end towards the beginning.'
},
{
  id: 'cpp_strings_9',
  topicId: 'cpp_strings',
  question: 'Find first/last occurrence of any character using find_first_of() and find_last_of().',
  mathSolution: 'find_first_of finds first occurrence of any character in set.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello 123 World 456!";\n    \n    // Find first digit\n    size_t pos = str.find_first_of("0123456789");\n    if (pos != string::npos) {\n        cout << "First digit at: " << pos << " is \'" << str[pos] << "\'\\n";\n    }\n    \n    // Find first vowel\n    pos = str.find_first_of("aeiouAEIOU");\n    cout << "First vowel at: " << pos << " is \'" << str[pos] << "\'\\n";\n    \n    // Find first punctuation\n    pos = str.find_first_of("!@#$%^&*()");\n    cout << "First punctuation at: " << pos << " is \'" << str[pos] << "\'\\n";\n    \n    // Find last vowel (using find_last_of)\n    pos = str.find_last_of("aeiouAEIOU");\n    cout << "Last vowel at: " << pos << " is \'" << str[pos] << "\'\\n";\n    \n    return 0;\n}',
  hint: 'find_first_of finds any character from the set, not the entire substring.'
},
{
  id: 'cpp_strings_10',
  topicId: 'cpp_strings',
  question: 'Find first/last character NOT in set using find_first_not_of() and find_last_not_of().',
  mathSolution: 'find_first_not_of finds first character not in given set.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "   Hello World   ";\n    \n    // Find first non-space\n    size_t pos = str.find_first_not_of(\' \');\n    cout << "First non-space at: " << pos << " (\'" << str[pos] << "\')\\n";\n    \n    // Find last non-space\n    pos = str.find_last_not_of(\' \');\n    cout << "Last non-space at: " << pos << " (\'" << str[pos] << "\')\\n";\n    \n    string digits = "123abc456";\n    // Find first non-digit\n    pos = digits.find_first_not_of("0123456789");\n    cout << "First non-digit at: " << pos << " (\'" << digits[pos] << "\')\\n";\n    \n    string vowels = "bcdfg";\n    // Find first vowel (non-consonant)\n    pos = vowels.find_first_not_of("bcdfghjklmnpqrstvwxyz");\n    if (pos != string::npos) {\n        cout << "First vowel at: " << pos << " (\'" << vowels[pos] << "\')\\n";\n    }\n    \n    return 0;\n}',
  hint: 'These methods are useful for trimming whitespace.'
},
{
  id: 'cpp_strings_11',
  topicId: 'cpp_strings',
  question: 'Insert characters into string using insert() method.',
  mathSolution: 'insert() adds content at specified position.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World";\n    \n    // Insert string\n    str.insert(5, " Beautiful");\n    cout << "After insert: " << str << endl;\n    \n    // Insert character\n    str.insert(0, 3, \'*\');\n    cout << "After insert chars: " << str << endl;\n    \n    // Insert using iterator\n    str.insert(str.begin() + 4, \'#\');\n    cout << "After iterator insert: " << str << endl;\n    \n    // Insert substring\n    string sub = "C++ "; \n    str.insert(6, sub, 0, 3);\n    cout << "After substring insert: " << str << endl;\n    \n    return 0;\n}',
  hint: 'insert() modifies the original string.'
},
{
  id: 'cpp_strings_12',
  topicId: 'cpp_strings',
  question: 'Replace part of string using replace() method.',
  mathSolution: 'replace() substitutes characters with new content.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello World Programming";\n    \n    // Replace "World" with "C++"\n    str.replace(6, 5, "C++");\n    cout << str << endl;  // "Hello C++ Programming"\n    \n    // Replace with substring\n    string replacement = "Amazing C++";\n    str.replace(6, 3, replacement, 8, 3);  // Replace "C++" with "C++" from replacement\n    cout << str << endl;\n    \n    // Replace with characters\n    str.replace(6, 3, 3, \'!\');\n    cout << str << endl;\n    \n    // Replace using iterators\n    str.replace(str.begin(), str.begin() + 5, "Hi");\n    cout << str << endl;\n    \n    return 0;\n}',
  hint: 'replace() has multiple overloads for different content types.'
},
{
  id: 'cpp_strings_13',
  topicId: 'cpp_strings',
  question: 'Erase characters from string using erase() method.',
  mathSolution: 'erase() removes characters from string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str = "Hello Beautiful World";\n    \n    // Erase from position 6, length 10\n    str.erase(6, 10);\n    cout << "After erase: " << str << endl;  // "Hello World"\n    \n    // Erase single character by position\n    str.erase(5, 1);  // Remove space\n    cout << "After removing space: " << str << endl;  // "HelloWorld"\n    \n    // Erase single character using iterator\n    str.erase(str.begin());\n    cout << "After erasing first char: " << str << endl;\n    \n    // Erase range using iterators\n    str.erase(str.begin(), str.begin() + 3);\n    cout << "After erasing range: " << str << endl;\n    \n    // Clear entire string\n    str.clear();\n    cout << "After clear, empty? " << (str.empty() ? "Yes" : "No") << endl;\n    \n    return 0;\n}',
  hint: 'erase() modifies the original string in place.'
},
{
  id: 'cpp_strings_14',
  topicId: 'cpp_strings',
  question: 'Compare strings using compare() method.',
  mathSolution: 'compare() returns 0 if equal, negative if less, positive if greater.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Apple";\n    string str2 = "Banana";\n    string str3 = "Apple";\n    \n    int result = str1.compare(str2);\n    if (result < 0) {\n        cout << str1 << " comes before " << str2 << endl;\n    } else if (result > 0) {\n        cout << str1 << " comes after " << str2 << endl;\n    } else {\n        cout << str1 << " equals " << str2 << endl;\n    }\n    \n    cout << "Apple compared to Apple: " << str1.compare(str3) << endl;\n    \n    // Compare substrings\n    string text = "Hello World";\n    int cmp = text.compare(0, 5, "Hello");\n    cout << "First 5 chars compare to \'Hello\': " << cmp << endl;\n    \n    // Comparison operators (easier to use)\n    if (str1 == str3) {\n        cout << str1 << " equals " << str3 << " using == operator" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Operator== and != are easier for equality checks; compare() for ordering.'
},
{
  id: 'cpp_strings_15',
  topicId: 'cpp_strings',
  question: 'Convert string to uppercase/lowercase.',
  mathSolution: 'Use transform() with toupper/tolower or loop through string.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    string str = "Hello C++ World";\n    \n    // Convert to uppercase\n    string upper = str;\n    for (char &c : upper) {\n        c = toupper(c);\n    }\n    cout << "Uppercase: " << upper << endl;\n    \n    // Convert to lowercase using transform\n    string lower = str;\n    transform(lower.begin(), lower.end(), lower.begin(), ::tolower);\n    cout << "Lowercase: " << lower << endl;\n    \n    // Alternative using transform\n    string result = str;\n    transform(result.begin(), result.end(), result.begin(), [](unsigned char c) {\n        return toupper(c);\n    });\n    cout << "Using lambda: " << result << endl;\n    \n    return 0;\n}',
  hint: 'Include <algorithm> and <cctype> headers for transform and toupper/tolower.'
},
{
  id: 'cpp_strings_16',
  topicId: 'cpp_strings',
  question: 'Reverse a string using reverse() algorithm.',
  mathSolution: 'reverse() from <algorithm> reverses the string in place.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string str = "Hello World";\n    \n    cout << "Original: " << str << endl;\n    \n    reverse(str.begin(), str.end());\n    cout << "Reversed: " << str << endl;\n    \n    // Check palindrome\n    string palindrome = "racecar";\n    string temp = palindrome;\n    reverse(temp.begin(), temp.end());\n    \n    if (palindrome == temp) {\n        cout << palindrome << " is a palindrome" << endl;\n    }\n    \n    // Reverse part of string\n    string text = "ABCDEFG";\n    reverse(text.begin() + 2, text.end() - 1);\n    cout << "Partial reverse: " << text << endl;\n    \n    return 0;\n}',
  hint: 'reverse() requires #include <algorithm>.'
},
{
  id: 'cpp_strings_17',
  topicId: 'cpp_strings',
  question: 'Convert string to C-style string using c_str().',
  mathSolution: 'c_str() returns const char* for C-string compatibility.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    string str = "Hello C++";\n    \n    // Get C-style string\n    const char* cstr = str.c_str();\n    cout << "C-string: " << cstr << endl;\n    cout << "Length: " << strlen(cstr) << endl;\n    \n    // Using data() (C++11)\n    const char* data = str.data();\n    cout << "Data: " << data << endl;\n    \n    // Copy to character array\n    char buffer[20];\n    str.copy(buffer, 5, 0);\n    buffer[5] = \'\\0\';\n    cout << "Copied: " << buffer << endl;\n    \n    // When using C functions\n    // printf("Using printf: %s\\n", str.c_str());\n    \n    return 0;\n}',
  hint: 'c_str() is useful for functions expecting const char* (like printf).'
},
{
  id: 'cpp_strings_18',
  topicId: 'cpp_strings',
  question: 'Check if string is empty using empty() method.',
  mathSolution: 'empty() returns true if length() == 0.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "";\n    string str2 = "Hello";\n    \n    if (str1.empty()) {\n        cout << "str1 is empty" << endl;\n    }\n    \n    if (!str2.empty()) {\n        cout << "str2 is not empty, length: " << str2.length() << endl;\n    }\n    \n    // Using size() comparison\n    if (str1.size() == 0) {\n        cout << "str1 size is zero" << endl;\n    }\n    \n    // Clearing string makes it empty\n    string text = "Something";\n    cout << "Before clear, empty? " << (text.empty() ? "Yes" : "No") << endl;\n    text.clear();\n    cout << "After clear, empty? " << (text.empty() ? "Yes" : "No") << endl;\n    \n    return 0;\n}',
  hint: 'Always check empty() before accessing characters to avoid undefined behavior.'
},
{
  id: 'cpp_strings_19',
  topicId: 'cpp_strings',
  question: 'Reserve and resize string capacity.',
  mathSolution: 'reserve() pre-allocates memory; resize() changes string size.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str;\n    \n    cout << "Initial capacity: " << str.capacity() << endl;\n    \n    str.reserve(100);\n    cout << "After reserving 100: " << str.capacity() << endl;\n    \n    str = "Hello";\n    cout << "String: " << str << ", size: " << str.size() << ", capacity: " << str.capacity() << endl;\n    \n    // Resize to smaller\n    str.resize(3);\n    cout << "After resize to 3: " << str << endl;\n    \n    // Resize to larger (fills with character)\n    str.resize(10, \'*\');\n    cout << "After resize to 10: " << str << endl;\n    \n    // Shrink to fit\n    str.shrink_to_fit();\n    cout << "After shrink_to_fit, capacity: " << str.capacity() << endl;\n    \n    return 0;\n}',
  hint: 'reserve() reduces reallocation; shrink_to_fit() reduces memory usage.'
},
{
  id: 'cpp_strings_20',
  topicId: 'cpp_strings',
  question: 'Swap two strings using swap() method.',
  mathSolution: 'swap() exchanges content of two strings efficiently.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "First";\n    string str2 = "Second";\n    \n    cout << "Before swap:\\n";\n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    \n    str1.swap(str2);\n    \n    cout << "\\nAfter swap:\\n";\n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    \n    // Using standard swap algorithm\n    string a = "Alpha";\n    string b = "Beta";\n    swap(a, b);\n    cout << "\\nAfter std::swap: a=" << a << ", b=" << b << endl;\n    \n    return 0;\n}',
  hint: 'swap() is efficient as it only exchanges pointers, not characters.'
},
{
  id: 'cpp_strings_21',
  topicId: 'cpp_strings',
  question: 'Convert between string and number (stoi, to_string).',
  mathSolution: 'stoi() converts string to int; to_string() converts number to string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // String to number conversions\n    string numStr = "12345";\n    int num = stoi(numStr);\n    long lnum = stol("1234567890");\n    long long llnum = stoll("123456789012345");\n    double dnum = stod("3.14159");\n    float fnum = stof("2.71828");\n    \n    cout << "stoi: " << num << endl;\n    cout << "stol: " << lnum << endl;\n    cout << "stod: " << dnum << endl;\n    \n    // Number to string conversions\n    string intStr = to_string(42);\n    string doubleStr = to_string(3.14159);\n    \n    cout << "to_string(42): \"" << intStr << "\"" << endl;\n    cout << "to_string(3.14159): \"" << doubleStr << "\"" << endl;\n    \n    // Handling invalid conversions\n    try {\n        int invalid = stoi("abc123");\n    } catch (const invalid_argument& e) {\n        cout << "Invalid conversion: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'stoi throws invalid_argument for non-numeric strings.'
},
{
  id: 'cpp_strings_22',
  topicId: 'cpp_strings',
  question: 'Trim whitespace from beginning and end of string.',
  mathSolution: 'Use find_first_not_of and find_last_not_of to find trim positions.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring trim(const string& str) {\n    size_t first = str.find_first_not_of(" \\t\\n\\r");\n    if (first == string::npos) return "";\n    size_t last = str.find_last_not_of(" \\t\\n\\r");\n    return str.substr(first, last - first + 1);\n}\n\nstring ltrim(const string& str) {\n    size_t first = str.find_first_not_of(" \\t\\n\\r");\n    if (first == string::npos) return "";\n    return str.substr(first);\n}\n\nstring rtrim(const string& str) {\n    size_t last = str.find_last_not_of(" \\t\\n\\r");\n    if (last == string::npos) return "";\n    return str.substr(0, last + 1);\n}\n\nint main() {\n    string str = "   Hello World   ";\n    \n    cout << "Original: \'" << str << "\'" << endl;\n    cout << "After ltrim: \'" << ltrim(str) << "\'" << endl;\n    cout << "After rtrim: \'" << rtrim(str) << "\'" << endl;\n    cout << "After trim: \'" << trim(str) << "\'" << endl;\n    \n    return 0;\n}',
  hint: 'Trim functions are important for processing user input.'
},
{
  id: 'cpp_strings_23',
  topicId: 'cpp_strings',
  question: 'Split string by delimiter.',
  mathSolution: 'Use find() and substr() to extract substrings.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvector<string> split(const string& str, char delimiter) {\n    vector<string> tokens;\n    size_t start = 0;\n    size_t end = str.find(delimiter);\n    \n    while (end != string::npos) {\n        tokens.push_back(str.substr(start, end - start));\n        start = end + 1;\n        end = str.find(delimiter, start);\n    }\n    tokens.push_back(str.substr(start));\n    \n    return tokens;\n}\n\nint main() {\n    string str = "apple,banana,orange,grape";\n    \n    vector<string> fruits = split(str, \',\');\n    \n    cout << "Splitting \'" << str << "\':\\n";\n    for (const auto& fruit : fruits) {\n        cout << "  " << fruit << endl;\n    }\n    \n    // CSV parsing\n    string csv = "John,Doe,30,Engineer";\n    vector<string> fields = split(csv, \',\');\n    \n    cout << "\\nCSV fields:\\n";\n    for (const auto& field : fields) {\n        cout << "  " << field << endl;\n    }\n    \n    return 0;\n}',
  hint: 'split() returns vector of substrings separated by delimiter.'
},
{
  id: 'cpp_strings_24',
  topicId: 'cpp_strings',
  question: 'Count occurrences of character in string.',
  mathSolution: 'Iterate through string and count matches.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint countChar(const string& str, char ch) {\n    int count = 0;\n    for (char c : str) {\n        if (c == ch) count++;\n    }\n    return count;\n}\n\nint main() {\n    string text = "Hello World Programming";\n    \n    cout << "Text: " << text << endl;\n    cout << "Count of \'o\': " << countChar(text, \'o\') << endl;\n    cout << "Count of \'l\': " << countChar(text, \'l\') << endl;\n    cout << "Count of \' \' (space): " << countChar(text, \' \') << endl;\n    \n    // Using algorithm\n    int count = count(text.begin(), text.end(), \'o\');\n    cout << "Using count algorithm: " << count << endl;\n    \n    return 0;\n}',
  hint: 'Use std::count from <algorithm> for concise counting.'
},
{
  id: 'cpp_strings_25',
  topicId: 'cpp_strings',
  question: 'Check if string starts with given prefix.',
  mathSolution: 'Use compare() or substr() and compare.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool startsWith(const string& str, const string& prefix) {\n    if (prefix.length() > str.length()) return false;\n    return str.compare(0, prefix.length(), prefix) == 0;\n}\n\nbool endsWith(const string& str, const string& suffix) {\n    if (suffix.length() > str.length()) return false;\n    return str.compare(str.length() - suffix.length(), suffix.length(), suffix) == 0;\n}\n\nint main() {\n    string filename = "document.pdf";\n    \n    if (startsWith(filename, "doc")) {\n        cout << filename << " starts with \'doc\'" << endl;\n    }\n    \n    if (endsWith(filename, ".pdf")) {\n        cout << filename << " is a PDF file" << endl;\n    }\n    \n    string url = "https://example.com";\n    if (startsWith(url, "https://")) {\n        cout << "Secure connection" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'C++20 introduces starts_with() and ends_with() methods.'
},
{
  id: 'cpp_strings_26',
  topicId: 'cpp_strings',
  question: 'Replace all occurrences of substring in string.',
  mathSolution: 'Use find() in loop to replace all occurrences.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring replaceAll(string str, const string& from, const string& to) {\n    size_t pos = 0;\n    while ((pos = str.find(from, pos)) != string::npos) {\n        str.replace(pos, from.length(), to);\n        pos += to.length();\n    }\n    return str;\n}\n\nint main() {\n    string text = "The quick brown fox jumps over the lazy dog. The fox is fast.";\n    \n    cout << "Original: " << text << endl;\n    \n    string modified = replaceAll(text, "fox", "cat");\n    cout << "After replace: " << modified << endl;\n    \n    string code = "var x = 10; var y = 20; var z = x + y;";\n    string modern = replaceAll(code, "var", "let");\n    cout << "Code replace: " << modern << endl;\n    \n    return 0;\n}',
  hint: 'Be careful with overlapping replacements; adjust position accordingly.'
},
{
  id: 'cpp_strings_27',
  topicId: 'cpp_strings',
  question: 'Check if string is palindrome.',
  mathSolution: 'Compare original string with its reverse.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nbool isPalindrome(const string& str) {\n    int left = 0, right = str.length() - 1;\n    while (left < right) {\n        if (tolower(str[left]) != tolower(str[right])) {\n            return false;\n        }\n        left++;\n        right--;\n    }\n    return true;\n}\n\nbool isPalindromeIgnoreNonAlpha(const string& str) {\n    int left = 0, right = str.length() - 1;\n    while (left < right) {\n        while (left < right && !isalnum(str[left])) left++;\n        while (left < right && !isalnum(str[right])) right--;\n        if (tolower(str[left]) != tolower(str[right])) return false;\n        left++;\n        right--;\n    }\n    return true;\n}\n\nint main() {\n    string words[] = {"racecar", "hello", "A man, a plan, a canal: Panama", "Was it a car or a cat I saw?"};\n    \n    for (const auto& word : words) {\n        cout << "\\"" << word << "\\" ";\n        if (isPalindromeIgnoreNonAlpha(word)) {\n            cout << "is a palindrome" << endl;\n        } else {\n            cout << "is NOT a palindrome" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Handle case-insensitivity and ignore non-alphanumeric characters.'
},
{
  id: 'cpp_strings_28',
  topicId: 'cpp_strings',
  question: 'Count words in a string.',
  mathSolution: 'Count transitions from space to non-space.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint countWords(const string& str) {\n    if (str.empty()) return 0;\n    \n    int count = 0;\n    bool inWord = false;\n    \n    for (char c : str) {\n        if (isspace(c)) {\n            inWord = false;\n        } else {\n            if (!inWord) {\n                count++;\n                inWord = true;\n            }\n        }\n    }\n    return count;\n}\n\nint main() {\n    string sentences[] = {\n        "Hello World",\n        "  This   is   a   test  ",\n        "OneWord",\n        "",\n        "C++ programming is fun!"\n    };\n    \n    for (const auto& sentence : sentences) {\n        cout << "\\"" << sentence << "\\" has " << countWords(sentence) << " words" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Count transitions from whitespace to non-whitespace.'
},
{
  id: 'cpp_strings_29',
  topicId: 'cpp_strings',
  question: 'Find longest word in a string.',
  mathSolution: 'Split string and track maximum length word.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nstring longestWord(const string& str) {\n    stringstream ss(str);\n    string word, longest;\n    \n    while (ss >> word) {\n        if (word.length() > longest.length()) {\n            longest = word;\n        }\n    }\n    return longest;\n}\n\nint main() {\n    string text = "The quick brown fox jumps over the lazy dog";\n    \n    string longest = longestWord(text);\n    cout << "Text: " << text << endl;\n    cout << "Longest word: \'" << longest << "\' (length: " << longest.length() << ")" << endl;\n    \n    string sentence = "C++ programming is an amazing skill";\n    cout << "\\nLongest in \'" << sentence << "\': \'" << longestWord(sentence) << "\'" << endl;\n    \n    return 0;\n}',
  hint: 'Use stringstream to easily split string by spaces.'
},
{
  id: 'cpp_strings_30',
  topicId: 'cpp_strings',
  question: 'Remove duplicate characters from string.',
  mathSolution: 'Use boolean array to track seen characters.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_set>\nusing namespace std;\n\nstring removeDuplicates(const string& str) {\n    bool seen[256] = {false};\n    string result;\n    \n    for (char c : str) {\n        if (!seen[c]) {\n            seen[c] = true;\n            result += c;\n        }\n    }\n    return result;\n}\n\nint main() {\n    string test = "hello world programming";\n    \n    cout << "Original: " << test << endl;\n    cout << "Without duplicates: " << removeDuplicates(test) << endl;\n    \n    string test2 = "abracadabra";\n    cout << "\\nOriginal: " << test2 << endl;\n    cout << "Without duplicates: " << removeDuplicates(test2) << endl;\n    \n    return 0;\n}',
  hint: 'Use boolean array of size 256 for ASCII characters.'
},
{
  id: 'cpp_strings_31',
  topicId: 'cpp_strings',
  question: 'Check if two strings are anagrams.',
  mathSolution: 'Sort both strings or use frequency array.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool areAnagrams(string str1, string str2) {\n    if (str1.length() != str2.length()) return false;\n    \n    int freq[256] = {0};\n    \n    for (char c : str1) freq[c]++;\n    for (char c : str2) freq[c]--;\n    \n    for (int i = 0; i < 256; i++) {\n        if (freq[i] != 0) return false;\n    }\n    return true;\n}\n\nbool areAnagramsSort(string str1, string str2) {\n    if (str1.length() != str2.length()) return false;\n    sort(str1.begin(), str1.end());\n    sort(str2.begin(), str2.end());\n    return str1 == str2;\n}\n\nint main() {\n    string pairs[][2] = {{"listen", "silent"}, {"hello", "world"}, {"anagram", "nagaram"}};\n    \n    for (auto& pair : pairs) {\n        cout << pair[0] << " and " << pair[1];\n        if (areAnagrams(pair[0], pair[1])) {\n            cout << " are anagrams" << endl;\n        } else {\n            cout << " are NOT anagrams" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Anagrams have same characters with same frequencies.'
},
{
  id: 'cpp_strings_32',
  topicId: 'cpp_strings',
  question: 'Find first non-repeating character in string.',
  mathSolution: 'Use frequency array, then find first with count 1.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nchar firstNonRepeating(const string& str) {\n    int freq[256] = {0};\n    \n    for (char c : str) freq[c]++;\n    \n    for (char c : str) {\n        if (freq[c] == 1) return c;\n    }\n    return \'\\0\';\n}\n\nint main() {\n    string tests[] = {"swiss", "hello", "aabbcc", "racecar"};\n    \n    for (const auto& test : tests) {\n        char result = firstNonRepeating(test);\n        cout << "String: \\"" << test << "\\"\\n";\n        if (result != \'\\0\') {\n            cout << "First non-repeating character: \'" << result << "\'\\n";\n        } else {\n            cout << "No non-repeating character found\\n";\n        }\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'First pass counts, second pass finds first with count 1.'
},
{
  id: 'cpp_strings_33',
  topicId: 'cpp_strings',
  question: 'Find the most frequent character in string.',
  mathSolution: 'Use frequency array and track maximum.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <climits>\nusing namespace std;\n\npair<char, int> mostFrequent(const string& str) {\n    int freq[256] = {0};\n    \n    for (char c : str) {\n        freq[c]++;\n    }\n    \n    char maxChar = \'\\0\';\n    int maxCount = 0;\n    \n    for (int i = 0; i < 256; i++) {\n        if (freq[i] > maxCount) {\n            maxCount = freq[i];\n            maxChar = static_cast<char>(i);\n        }\n    }\n    \n    return {maxChar, maxCount};\n}\n\nint main() {\n    string text = "Hello World Programming";\n    \n    auto [character, count] = mostFrequent(text);\n    \n    cout << "String: \\"" << text << "\\"\\n";\n    cout << "Most frequent character: \'" << character << "\' (" << count << " times)\\n";\n    \n    string test2 = "abracadabra";\n    auto [ch, cnt] = mostFrequent(test2);\n    cout << "\\nString: \\"" << test2 << "\\"\\n";\n    cout << "Most frequent: \'" << ch << "\' (" << cnt << " times)\\n";\n    \n    return 0;\n}',
  hint: 'Track both character and its count during frequency analysis.'
},
{
  id: 'cpp_strings_34',
  topicId: 'cpp_strings',
  question: 'Convert string to title case (capitalize first letter of each word).',
  mathSolution: 'Capitalize first character of each word.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nstring toTitleCase(string str) {\n    bool newWord = true;\n    \n    for (char &c : str) {\n        if (isspace(c)) {\n            newWord = true;\n        } else if (newWord) {\n            c = toupper(c);\n            newWord = false;\n        } else {\n            c = tolower(c);\n        }\n    }\n    return str;\n}\n\nint main() {\n    string sentences[] = {\n        "hello world",\n        "c++ PROGRAMMING is FUN",\n        "the quick brown fox",\n        "JAVASCRIPT and C++"\n    };\n    \n    for (const auto& sentence : sentences) {\n        cout << "Original: " << sentence << endl;\n        cout << "Title case: " << toTitleCase(sentence) << endl << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Track word boundaries using isspace() to detect new words.'
},
{
  id: 'cpp_strings_35',
  topicId: 'cpp_strings',
  question: 'Toggle case of each character (upper to lower and vice versa).',
  mathSolution: 'Use isupper/islower to determine and toggle.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nstring toggleCase(string str) {\n    for (char &c : str) {\n        if (isupper(c)) {\n            c = tolower(c);\n        } else if (islower(c)) {\n            c = toupper(c);\n        }\n    }\n    return str;\n}\n\nint main() {\n    string text = "Hello World! C++ Programming IS Fun.";\n    \n    cout << "Original: " << text << endl;\n    cout << "Toggled: " << toggleCase(text) << endl;\n    \n    string test2 = "AbCdEfG";\n    cout << "\\nOriginal: " << test2 << endl;\n    cout << "Toggled: " << toggleCase(test2) << endl;\n    \n    return 0;\n}',
  hint: 'Use isupper/islower to check case, then convert accordingly.'
},
{
  id: 'cpp_strings_36',
  topicId: 'cpp_strings',
  question: 'Check if string contains only digits.',
  mathSolution: 'Use isdigit() on each character.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isDigitsOnly(const string& str) {\n    if (str.empty()) return false;\n    for (char c : str) {\n        if (!isdigit(c)) return false;\n    }\n    return true;\n}\n\nbool isAlphaOnly(const string& str) {\n    if (str.empty()) return false;\n    for (char c : str) {\n        if (!isalpha(c)) return false;\n    }\n    return true;\n}\n\nbool isAlnumOnly(const string& str) {\n    if (str.empty()) return false;\n    for (char c : str) {\n        if (!isalnum(c)) return false;\n    }\n    return true;\n}\n\nint main() {\n    string tests[] = {"12345", "12a45", "Hello", "Hello123", "", "   "};\n    \n    for (const auto& test : tests) {\n        cout << "\\"" << test << "\\": ";\n        cout << "digits only? " << (isDigitsOnly(test) ? "Yes" : "No");\n        cout << ", alpha only? " << (isAlphaOnly(test) ? "Yes" : "No");\n        cout << ", alnum only? " << (isAlnumOnly(test) ? "Yes" : "No");\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'cctype functions help validate character types.'
},
{
  id: 'cpp_strings_37',
  topicId: 'cpp_strings',
  question: 'Count vowels and consonants in string.',
  mathSolution: 'Check each character against vowel set.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isVowel(char c) {\n    c = tolower(c);\n    return (c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\');\n}\n\nvoid countVowelsConsonants(const string& str, int& vowels, int& consonants) {\n    vowels = 0;\n    consonants = 0;\n    \n    for (char c : str) {\n        if (isalpha(c)) {\n            if (isVowel(c)) {\n                vowels++;\n            } else {\n                consonants++;\n            }\n        }\n    }\n}\n\nint main() {\n    string text = "Hello World! C++ Programming is Awesome.";\n    \n    int vowels, consonants;\n    countVowelsConsonants(text, vowels, consonants);\n    \n    cout << "Text: " << text << endl;\n    cout << "Vowels: " << vowels << endl;\n    cout << "Consonants: " << consonants << endl;\n    cout << "Total letters: " << vowels + consonants << endl;\n    \n    return 0;\n}',
  hint: 'Only count alphabetic characters, ignore punctuation and spaces.'
},
{
  id: 'cpp_strings_38',
  topicId: 'cpp_strings',
  question: 'Find all occurrences of substring and their positions.',
  mathSolution: 'Use find() in loop to collect positions.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvector<size_t> findAllOccurrences(const string& str, const string& sub) {\n    vector<size_t> positions;\n    size_t pos = 0;\n    \n    while ((pos = str.find(sub, pos)) != string::npos) {\n        positions.push_back(pos);\n        pos += sub.length();\n    }\n    return positions;\n}\n\nint main() {\n    string text = "the cat in the hat sat on the mat";\n    string search = "the";\n    \n    vector<size_t> positions = findAllOccurrences(text, search);\n    \n    cout << "Text: \\"" << text << "\\"\\n";\n    cout << "Searching for: \\"" << search << "\\"\\n";\n    cout << "Found at positions: ";\n    for (size_t pos : positions) {\n        cout << pos << " ";\n    }\n    cout << "\\nTotal occurrences: " << positions.size() << endl;\n    \n    // Show context for each occurrence\n    cout << "\\nContext around matches:\\n";\n    for (size_t pos : positions) {\n        size_t start = (pos > 10) ? pos - 10 : 0;\n        size_t len = min(30, text.length() - start);\n        cout << "  ..." << text.substr(start, len) << "..." << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Store results in vector for further processing.'
},
{
  id: 'cpp_strings_39',
  topicId: 'cpp_strings',
  question: 'Implement string compression using run-length encoding.',
  mathSolution: 'Count consecutive identical characters.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring compressString(const string& str) {\n    if (str.empty()) return "";\n    \n    string compressed;\n    int count = 1;\n    \n    for (size_t i = 1; i <= str.length(); i++) {\n        if (i < str.length() && str[i] == str[i - 1]) {\n            count++;\n        } else {\n            compressed += str[i - 1];\n            if (count > 1) {\n                compressed += to_string(count);\n            }\n            count = 1;\n        }\n    }\n    \n    return compressed;\n}\n\nint main() {\n    string tests[] = {"aaabbcccc", "abcd", "aabbbcccaaa", "wwwwaaadexxxxxx"};\n    \n    for (const auto& test : tests) {\n        string compressed = compressString(test);\n        cout << "Original: " << test << endl;\n        cout << "Compressed: " << compressed << endl;\n        cout << "Compression ratio: " << (double)compressed.length() / test.length() << endl;\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Run-length encoding is useful for repetitive data.'
},
{
  id: 'cpp_strings_40',
  topicId: 'cpp_strings',
  question: 'Decompress run-length encoded string.',
  mathSolution: 'Read character and following number count.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\n// Forward declaration of compressString (if needed, but typically defined elsewhere)\n// string compressString(const string& str);\n\nstring decompressString(const string& compressed) {\n    string decompressed;\n    \n    for (size_t i = 0; i < compressed.length(); i++) {\n        char c = compressed[i];\n        \n        if (i + 1 < compressed.length() && isdigit(compressed[i + 1])) {\n            int count = compressed[i + 1] - \'0\';\n            decompressed.append(count, c);\n            i++;  // Skip the digit\n        } else {\n            decompressed += c;\n        }\n    }\n    return decompressed;\n}\n\n// Example compressString for completeness\nstring compressStringExample(const string& str) {\n    if (str.empty()) return "";\n    string compressed;\n    int count = 1;\n    for (size_t i = 1; i <= str.length(); i++) {\n        if (i < str.length() && str[i] == str[i - 1]) count++;\n        else {\n            compressed += str[i - 1];\n            if (count > 1) compressed += to_string(count);\n            count = 1;\n        }\n    }\n    return compressed;\n}\n\nint main() {\n    string tests[] = {"a3b2c4", "a1b1c1d1", "w4a3d1e1x6", "abc3"};\n    \n    for (const auto& compressed : tests) {\n        string decompressed = decompressString(compressed);\n        cout << "Compressed: " << compressed << endl;\n        cout << "Decompressed: " << decompressed << endl;\n        \n        // Re-compress to verify\n        string recompressed = compressStringExample(decompressed);\n        cout << "Re-compressed: " << recompressed << endl;\n        cout << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Assume count is single digit for simplicity; multi-digit requires parsing.'
},
{
  id: 'cpp_strings_41',
  topicId: 'cpp_strings',
  question: 'Find the longest common prefix among strings.',
  mathSolution: 'Compare characters across strings until mismatch.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nstring longestCommonPrefix(const vector<string>& strs) {\n    if (strs.empty()) return "";\n    \n    for (size_t i = 0; i < strs[0].length(); i++) {\n        char current = strs[0][i];\n        for (size_t j = 1; j < strs.size(); j++) {\n            if (i >= strs[j].length() || strs[j][i] != current) {\n                return strs[0].substr(0, i);\n            }\n        }\n    }\n    return strs[0];\n}\n\nint main() {\n    vector<vector<string>> testCases = {\n        {"flower", "flow", "flight"},\n        {"dog", "racecar", "car"},\n        {"apple", "apricot", "april"},\n        {"prefix", "pre", "premier"}\n    };\n    \n    for (const auto& strs : testCases) {\n        cout << "Strings: ";\n        for (const auto& s : strs) cout << s << " ";\n        cout << endl;\n        cout << "Longest common prefix: " << longestCommonPrefix(strs) << endl << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Compare each character position across all strings.'
},
{
  id: 'cpp_strings_42',
  topicId: 'cpp_strings',
  question: 'Find the longest palindromic substring.',
  mathSolution: 'Expand around center for odd and even length palindromes.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring longestPalindrome(const string& s) {\n    if (s.empty()) return "";\n    \n    int start = 0, maxLen = 1;\n    \n    auto expandAroundCenter = [&](int left, int right) {\n        while (left >= 0 && right < s.length() && s[left] == s[right]) {\n            left--;\n            right++;\n        }\n        int len = right - left - 1;\n        if (len > maxLen) {\n            maxLen = len;\n            start = left + 1;\n        }\n    };\n    \n    for (int i = 0; i < s.length(); i++) {\n        expandAroundCenter(i, i);     // Odd length\n        expandAroundCenter(i, i + 1); // Even length\n    }\n    \n    return s.substr(start, maxLen);\n}\n\nint main() {\n    string tests[] = {"babad", "cbbd", "a", "ac", "racecar", "abcdef"};\n    \n    for (const auto& test : tests) {\n        string palindrome = longestPalindrome(test);\n        cout << "String: \\"" << test << "\\"\\n";\n        cout << "Longest palindrome: \\"" << palindrome << "\\" (length: " << palindrome.length() << ")\\n\\n";\n    }\n    \n    return 0;\n}',
  hint: 'Expand from each character and between characters for even length.'
},
{
  id: 'cpp_strings_43',
  topicId: 'cpp_strings',
  question: 'Check if string is a valid parentheses sequence.',
  mathSolution: 'Use stack to track opening brackets.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nbool isValidParentheses(const string& s) {\n    stack<char> st;\n    \n    for (char c : s) {\n        if (c == \'(\' || c == \'{\' || c == \'[\') {\n            st.push(c);\n        } else {\n            if (st.empty()) return false;\n            \n            char top = st.top();\n            if ((c == \')\' && top != \'(\') ||\n                (c == \'}\' && top != \'{\') ||\n                (c == \']\' && top != \'[\')) {\n                return false;\n            }\n            st.pop();\n        }\n    }\n    \n    return st.empty();\n}\n\nint main() {\n    string tests[] = {"()", "()[]{}", "(]", "([)]", "{[]}", "((()))", "((()"};\n    \n    for (const auto& test : tests) {\n        cout << "\"" << test << "\": ";\n        if (isValidParentheses(test)) {\n            cout << "Valid" << endl;\n        } else {\n            cout << "Invalid" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Stack ensures proper nesting of parentheses.'
},
{
  id: 'cpp_strings_44',
  topicId: 'cpp_strings',
  question: 'Implement string rotation check (if one string is rotation of another).',
  mathSolution: 'Check if string is substring of concatenated string.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool areRotations(const string& str1, const string& str2) {\n    if (str1.length() != str2.length()) return false;\n    if (str1.empty()) return true;\n    \n    string concatenated = str1 + str1;\n    return concatenated.find(str2) != string::npos;\n}\n\nint main() {\n    pair<string, string> tests[] = {\n        {"abcd", "cdab"},\n        {"abcde", "cdeab"},\n        {"hello", "llohe"},\n        {"hello", "world"},\n        {"abca", "caab"},\n        {"", ""}\n    };\n    \n    for (const auto& [str1, str2] : tests) {\n        cout << str1 << " and " << str2 << " are ";\n        if (areRotations(str1, str2)) {\n            cout << "rotations" << endl;\n        } else {\n            cout << "NOT rotations" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'A rotation of s is a substring of s+s.'
},
{
  id: 'cpp_strings_45',
  topicId: 'cpp_strings',
  question: 'Remove all spaces from string.',
  mathSolution: 'Use erase-remove idiom or loop to copy non-space chars.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nstring removeSpaces(string str) {\n    str.erase(remove(str.begin(), str.end(), \' \'), str.end());\n    return str;\n}\n\nstring removeAllWhitespace(string str) {\n    str.erase(remove_if(str.begin(), str.end(), ::isspace), str.end());\n    return str;\n}\n\nint main() {\n    string text = "  Hello   World  C++  Programming  ";\n    \n    cout << "Original: \\"" << text << "\\"" << endl;\n    cout << "After removing spaces: \\"" << removeSpaces(text) << "\\"" << endl;\n    \n    string text2 = " Hello\\tWorld\\nC++\\rProgramming ";\n    cout << "\\nOriginal: \\"" << text2 << "\\"" << endl;\n    cout << "After removing all whitespace: \\"" << removeAllWhitespace(text2) << "\\"" << endl;\n    \n    return 0;\n}',
  hint: 'Use erase-remove idiom for efficient in-place removal.'
},
{
  id: 'cpp_strings_46',
  topicId: 'cpp_strings',
  question: 'Check if string contains only unique characters.',
  mathSolution: 'Use set or boolean array to track seen characters.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_set>\nusing namespace std;\n\nbool hasAllUniqueChars(const string& str) {\n    if (str.length() > 256) return false;\n    \n    bool seen[256] = {false};\n    \n    for (char c : str) {\n        if (seen[c]) return false;\n        seen[c] = true;\n    }\n    return true;\n}\n\nint main() {\n    string tests[] = {"abcde", "hello", "world", "abcdefghijklmnopqrstuvwxyz", "AaBbCc"};\n    \n    for (const auto& test : tests) {\n        cout << "\\"" << test << "\\" ";\n        if (hasAllUniqueChars(test)) {\n            cout << "has all unique characters" << endl;\n        } else {\n            cout << "has duplicate characters" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'ASCII has 256 characters; longer strings must have duplicates.'
},
{
  id: 'cpp_strings_47',
  topicId: 'cpp_strings',
  question: 'Find the longest substring without repeating characters.',
  mathSolution: 'Use sliding window with hash map to track character positions.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <algorithm>\nusing namespace std;\n\nint lengthOfLongestSubstring(const string& s) {\n    unordered_map<char, int> lastIndex;\n    int maxLen = 0;\n    int start = 0;\n    \n    for (int end = 0; end < s.length(); end++) {\n        char c = s[end];\n        if (lastIndex.find(c) != lastIndex.end() && lastIndex[c] >= start) {\n            start = lastIndex[c] + 1;\n        }\n        lastIndex[c] = end;\n        maxLen = max(maxLen, end - start + 1);\n    }\n    return maxLen;\n}\n\nint main() {\n    string tests[] = {"abcabcbb", "bbbbb", "pwwkew", "", "abcdefgh", "dvdf"};\n    \n    for (const auto& test : tests) {\n        int len = lengthOfLongestSubstring(test);\n        cout << "Input: \\"" << test << "\\" => " << len << "\\n";\n    }\n    \n    return 0;\n}',
  hint: 'Sliding window expands and shrinks to maintain unique characters.'
},
{
  id: 'cpp_strings_48',
  topicId: 'cpp_strings',
  question: 'Convert string to integer (atoi implementation).',
  mathSolution: 'Handle leading spaces, sign, overflow, and non-digit characters.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <climits>\n#include <cctype>\nusing namespace std;\n\nint myAtoi(const string& str) {\n    int i = 0;\n    int n = str.length();\n    \n    // Skip leading whitespace\n    while (i < n && isspace(str[i])) i++;\n    \n    // Check sign\n    int sign = 1;\n    if (i < n && (str[i] == \'+\' || str[i] == \'-\')) {\n        if (str[i] == \'-\') sign = -1;\n        i++;\n    }\n    \n    // Convert digits\n    long long result = 0;\n    while (i < n && isdigit(str[i])) {\n        result = result * 10 + (str[i] - \'0\');\n        \n        // Check overflow\n        if (result * sign > INT_MAX) return INT_MAX;\n        if (result * sign < INT_MIN) return INT_MIN;\n        \n        i++;\n    }\n    \n    return result * sign;\n}\n\nint main() {\n    string tests[] = {"42", "   -42", "4193 with words", "words and 987", "-91283472332", "+123", "", "    "};\n    \n    for (const auto& test : tests) {\n        int result = myAtoi(test);\n        cout << "\\"" << test << "\\" => " << result << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Handle overflow using long long and check against INT_MAX/INT_MIN.'
},
{
  id: 'cpp_strings_49',
  topicId: 'cpp_strings',
  question: 'Implement wildcard pattern matching with \'*\' and \'?\'.',
  mathSolution: 'Use two-pointer technique or dynamic programming.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isMatch(const string& str, const string& pattern) {\n    int s = 0, p = 0;\n    int starIndex = -1, matchIndex = 0;\n    \n    while (s < str.length()) {\n        if (p < pattern.length() && (pattern[p] == \'?\' || pattern[p] == str[s])) {\n            s++;\n            p++;\n        } else if (p < pattern.length() && pattern[p] == \'*\') {\n            starIndex = p;\n            matchIndex = s;\n            p++;\n        } else if (starIndex != -1) {\n            p = starIndex + 1;\n            matchIndex++;\n            s = matchIndex;\n        } else {\n            return false;\n        }\n    }\n    \n    while (p < pattern.length() && pattern[p] == \'*\') p++;\n    return p == pattern.length();\n}\n\nint main() {\n    pair<string, string> tests[] = {\n        {"aa", "a"}, {"aa", "*"}, {"cb", "?a"}, {"adceb", "*a*b"},\n        {"acdcb", "a*c?b"}, {"mississippi", "m*?si*"}\n    };\n    \n    for (const auto& [str, pattern] : tests) {\n        cout << "String: \\"" << str << "\\", Pattern: \\"" << pattern << "\\" => ";\n        if (isMatch(str, pattern)) {\n            cout << "Match" << endl;\n        } else {\n            cout << "No match" << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: '* matches zero or more characters; ? matches exactly one character.'
},
{
  id: 'cpp_strings_50',
  topicId: 'cpp_strings',
  question: 'Complete string manipulation program combining multiple operations.',
  mathSolution: 'Demonstrate various string operations in a single program.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\n#include <cctype>\n#include <sstream>\nusing namespace std;\n\nint main() {\n    cout << "=== String Manipulation Toolkit ===\\n\\n";\n    \n    string text;\n    cout << "Enter a string: ";\n    getline(cin, text);\n    \n    // 1. Basic info\n    cout << "\\n--- Basic Information ---\\n";\n    cout << "Original: \"" << text << "\"\\n";\n    cout << "Length: " << text.length() << " characters\\n";\n    cout << "Empty? " << (text.empty() ? "Yes" : "No") << "\\n";\n    \n    // 2. Case conversion\n    string upper = text;\n    string lower = text;\n    transform(upper.begin(), upper.end(), upper.begin(), ::toupper);\n    transform(lower.begin(), lower.end(), lower.begin(), ::tolower);\n    cout << "\\n--- Case Conversion ---\\n";\n    cout << "Uppercase: " << upper << "\\n";\n    cout << "Lowercase: " << lower << "\\n";\n    \n    // 3. Reverse\n    string reversed = text;\n    reverse(reversed.begin(), reversed.end());\n    cout << "\\n--- Reverse ---\\n";\n    cout << "Reversed: " << reversed << "\\n";\n    \n    // 4. Character counts\n    int letters = 0, digits = 0, spaces = 0, punctuation = 0;\n    for (char c : text) {\n        if (isalpha(c)) letters++;\n        else if (isdigit(c)) digits++;\n        else if (isspace(c)) spaces++;\n        else punctuation++;\n    }\n    cout << "\\n--- Character Counts ---\\n";\n    cout << "Letters: " << letters << "\\n";\n    cout << "Digits: " << digits << "\\n";\n    cout << "Spaces: " << spaces << "\\n";\n    cout << "Punctuation/Special: " << punctuation << "\\n";\n    \n    // 5. Word count\n    int words = 0;\n    bool inWord = false;\n    for (char c : text) {\n        if (isspace(c)) inWord = false;\n        else if (!inWord) { words++; inWord = true; }\n    }\n    cout << "\\n--- Statistics ---\\n";\n    cout << "Words: " << words << "\\n";\n    \n    // 6. Remove duplicates\n    bool seen[256] = {false};\n    string unique;\n    for (char c : text) {\n        if (!seen[c]) {\n            seen[c] = true;\n            unique += c;\n        }\n    }\n    cout << "Unique characters: \"" << unique << "\"\\n";\n    \n    // 7. Palindrome check\n    string clean;\n    for (char c : text) {\n        if (isalnum(c)) clean += tolower(c);\n    }\n    string revClean = clean;\n    reverse(revClean.begin(), revClean.end());\n    cout << "Is palindrome? " << (clean == revClean ? "Yes" : "No") << "\\n";\n    \n    // 8. Substring search\n    string search;\n    cout << "\\n--- Search ---\\n";\n    cout << "Enter substring to search: ";\n    getline(cin, search);\n    \n    size_t pos = text.find(search);\n    if (pos != string::npos) {\n        cout << "Found at position " << pos << "\\n";\n        \n        // Find all occurrences\n        vector<size_t> positions;\n        size_t current = 0;\n        while ((current = text.find(search, current)) != string::npos) {\n            positions.push_back(current);\n            current += search.length();\n        }\n        if (positions.size() > 1) {\n            cout << "Found " << positions.size() << " occurrences at: ";\n            for (size_t p : positions) cout << p << " ";\n            cout << "\\n";\n        }\n    } else {\n        cout << "Not found\\n";\n    }\n    \n    // 9. Replacement\n    string from, to;\n    cout << "\\n--- Replace ---\\n";\n    cout << "Replace what? ";\n    getline(cin, from);\n    cout << "Replace with? ";\n    getline(cin, to);\n    \n    string replaced = text;\n    size_t start = 0;\n    while ((start = replaced.find(from, start)) != string::npos) {\n        replaced.replace(start, from.length(), to);\n        start += to.length();\n    }\n    cout << "Result: " << replaced << "\\n";\n    \n    // 10. Split by delimiter\n    char delim;\n    cout << "\\n--- Split ---\\n";\n    cout << "Enter delimiter character: ";\n    cin >> delim;\n    cin.ignore(); // Ignore newline after reading delimiter\n    \n    vector<string> tokens;\n    stringstream ss(text);\n    string token;\n    while (getline(ss, token, delim)) {\n        tokens.push_back(token);\n    }\n    cout << "Split into " << tokens.size() << " parts:\\n";\n    for (size_t i = 0; i < tokens.size(); i++) {\n        cout << "  " << i << ": \"" << tokens[i] << "\"\\n";\n    }\n    \n    cout << "\\n=== End of Demonstration ===\\n";\n    \n    return 0;\n}',
  hint: 'This comprehensive example shows many string operations in one program.'
},
//function
{
  id: 'cpp_functions_1',
  topicId: 'cpp_functions',
  question: 'Write a function that adds two integers and returns the result.',
  mathSolution: 'Function with parameters and return value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    cout << "Sum: " << result << endl;\n    return 0;\n}',
  hint: 'Function syntax: return_type name(parameters) { body }'
},
{
  id: 'cpp_functions_2',
  topicId: 'cpp_functions',
  question: 'Write a void function that prints a greeting without returning a value.',
  mathSolution: 'void functions perform actions but return nothing.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid greet(string name) {\n    cout << "Hello, " << name << "!" << endl;\n}\n\nint main() {\n    greet("John");\n    greet("Alice");\n    return 0;\n}',
  hint: 'void functions do not have a return statement (or have return; without value).'
},
{
  id: 'cpp_functions_3',
  topicId: 'cpp_functions',
  question: 'Create a function with default parameters.',
  mathSolution: 'Default values are used when arguments are omitted.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid display(string name, int age = 18, string city = "Unknown") {\n    cout << "Name: " << name << ", Age: " << age << ", City: " << city << endl;\n}\n\nint main() {\n    display("John", 25, "NYC");\n    display("Alice", 30);\n    display("Bob");\n    return 0;\n}',
  hint: 'Default parameters must be declared from rightmost to leftmost.'
},
{
  id: 'cpp_functions_4',
  topicId: 'cpp_functions',
  question: 'Implement function overloading for different data types.',
  mathSolution: 'Multiple functions with same name but different parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}\n\ndouble max(double a, double b) {\n    return (a > b) ? a : b;\n}\n\nint max(int a, int b, int c) {\n    return max(max(a, b), c);\n}\n\nint main() {\n    cout << max(5, 3) << endl;\n    cout << max(5.5, 3.2) << endl;\n    cout << max(5, 8, 2) << endl;\n    return 0;\n}',
  hint: 'Function overloading is resolved at compile time based on arguments.'
},
{
  id: 'cpp_functions_5',
  topicId: 'cpp_functions',
  question: 'Pass arguments by value (copy) to function.',
  mathSolution: 'By value copies the argument; original unchanged.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid increment(int x) {\n    x++;\n    cout << "Inside function: " << x << endl;\n}\n\nint main() {\n    int num = 10;\n    cout << "Before: " << num << endl;\n    increment(num);\n    cout << "After: " << num << endl;  // Still 10\n    return 0;\n}',
  hint: 'Pass by value creates a copy, so original variable is not modified.'
},
{
  id: 'cpp_functions_6',
  topicId: 'cpp_functions',
  question: 'Pass arguments by reference to modify original.',
  mathSolution: 'By reference accesses the original variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid increment(int &x) {\n    x++;\n    cout << "Inside function: " << x << endl;\n}\n\nint main() {\n    int num = 10;\n    cout << "Before: " << num << endl;\n    increment(num);\n    cout << "After: " << num << endl;  // Now 11\n    return 0;\n}',
  hint: 'Use & to pass by reference; changes affect original variable.'
},
{
  id: 'cpp_functions_7',
  topicId: 'cpp_functions',
  question: 'Pass pointer to modify original variable.',
  mathSolution: 'Pointer allows indirect access to variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid increment(int *x) {\n    (*x)++;\n    cout << "Inside function: " << *x << endl;\n}\n\nint main() {\n    int num = 10;\n    cout << "Before: " << num << endl;\n    increment(&num);\n    cout << "After: " << num << endl;  // Now 11\n    return 0;\n}',
  hint: 'Pass address using &, receive with *, and dereference to modify.'
},
{
  id: 'cpp_functions_8',
  topicId: 'cpp_functions',
  question: 'Write a recursive function to calculate factorial.',
  mathSolution: 'Function calls itself with modified parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    cout << "5! = " << factorial(5) << endl;\n    cout << "10! = " << factorial(10) << endl;\n    return 0;\n}',
  hint: 'Recursive functions must have a base case to stop recursion.'
},
{
  id: 'cpp_functions_9',
  topicId: 'cpp_functions',
  question: 'Write a recursive function for Fibonacci series.',
  mathSolution: 'Fibonacci: F(n) = F(n-1) + F(n-2).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    cout << "Fibonacci(0): " << fibonacci(0) << endl;\n    cout << "Fibonacci(5): " << fibonacci(5) << endl;\n    cout << "Fibonacci(10): " << fibonacci(10) << endl;\n    return 0;\n}',
  hint: 'Recursive Fibonacci has exponential time complexity; use memoization for optimization.'
},
{
  id: 'cpp_functions_10',
  topicId: 'cpp_functions',
  question: 'Use inline function to reduce function call overhead.',
  mathSolution: 'inline suggests compiler to replace call with code.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ninline int square(int x) {\n    return x * x;\n}\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << "Square of " << i << " is " << square(i) << endl;\n    }\n    return 0;\n}',
  hint: 'inline is a request; compiler may ignore for large functions.'
},
{
  id: 'cpp_functions_11',
  topicId: 'cpp_functions',
  question: 'Return multiple values using reference parameters.',
  mathSolution: 'Use references to return additional values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid getMinMax(int arr[], int size, int &min, int &max) {\n    min = arr[0];\n    max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < min) min = arr[i];\n        if (arr[i] > max) max = arr[i];\n    }\n}\n\nint main() {\n    int numbers[] = {5, 2, 8, 1, 9, 3, 7};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    int minVal, maxVal;\n    \n    getMinMax(numbers, size, minVal, maxVal);\n    cout << "Min: " << minVal << ", Max: " << maxVal << endl;\n    \n    return 0;\n}',
  hint: 'Reference parameters allow functions to "return" multiple values.'
},
{
  id: 'cpp_functions_12',
  topicId: 'cpp_functions',
  question: 'Return multiple values using struct.',
  mathSolution: 'Return a struct containing all required values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct MinMax {\n    int min;\n    int max;\n};\n\nMinMax getMinMax(int arr[], int size) {\n    MinMax result;\n    result.min = arr[0];\n    result.max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < result.min) result.min = arr[i];\n        if (arr[i] > result.max) result.max = arr[i];\n    }\n    return result;\n}\n\nint main() {\n    int numbers[] = {5, 2, 8, 1, 9, 3, 7};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    MinMax result = getMinMax(numbers, size);\n    cout << "Min: " << result.min << ", Max: " << result.max << endl;\n    \n    return 0;\n}',
  hint: 'Structs provide a clean way to return multiple values.'
},
{
  id: 'cpp_functions_13',
  topicId: 'cpp_functions',
  question: 'Use function overloading for different number of parameters.',
  mathSolution: 'Same function name with different parameter counts.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint area(int side) {\n    return side * side;\n}\n\nint area(int length, int width) {\n    return length * width;\n}\n\ndouble area(double radius) {\n    return 3.14159 * radius * radius;\n}\n\nint main() {\n    cout << "Square area (5): " << area(5) << endl;\n    cout << "Rectangle area (4,6): " << area(4, 6) << endl;\n    cout << "Circle area (3.0): " << area(3.0) << endl;\n    return 0;\n}',
  hint: 'Overloading by number of parameters is valid.'
},
{
  id: 'cpp_functions_14',
  topicId: 'cpp_functions',
  question: 'Pass array to function by pointer.',
  mathSolution: 'Arrays decay to pointers when passed to functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid printArray(int *arr, int size) {\n    for (int i = 0; i < size; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n}\n\nvoid doubleArray(int arr[], int size) {\n    for (int i = 0; i < size; i++) {\n        arr[i] *= 2;\n    }\n}\n\nint main() {\n    int numbers[] = {1, 2, 3, 4, 5};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    cout << "Original: ";\n    printArray(numbers, size);\n    \n    doubleArray(numbers, size);\n    \n    cout << "Doubled: ";\n    printArray(numbers, size);\n    \n    return 0;\n}',
  hint: 'Array parameter can be written as int* arr or int arr[].'
},
{
  id: 'cpp_functions_15',
  topicId: 'cpp_functions',
  question: 'Pass 2D array to function with column size specified.',
  mathSolution: 'Second dimension must be specified for 2D arrays.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nconst int COLS = 3;\n\nvoid printMatrix(int matrix[][COLS], int rows) {\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < COLS; j++) {\n            cout << matrix[i][j] << " ";\n        }\n        cout << endl;\n    }\n}\n\nvoid transpose(int matrix[][COLS], int rows, int result[][rows]) {\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < COLS; j++) {\n            result[j][i] = matrix[i][j];\n        }\n    }\n}\n\nint main() {\n    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};\n    int transposed[3][2];\n    \n    cout << "Original matrix:\\n";\n    printMatrix(matrix, 2);\n    \n    transpose(matrix, 2, transposed);\n    \n    cout << "Transposed matrix:\\n";\n    printMatrix(transposed, 3);\n    \n    return 0;\n}',
  hint: 'For 2D arrays, all dimensions except the first must be known at compile time.'
},
{
  id: 'cpp_functions_16',
  topicId: 'cpp_functions',
  question: 'Use const parameters for read-only access.',
  mathSolution: 'const prevents modification of parameter.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid display(const string &str) {\n    // str += "!";  // Error: cannot modify const reference\n    cout << str << endl;\n}\n\nint getArea(const int &width, const int &height) {\n    return width * height;\n}\n\nint main() {\n    string message = "Hello World";\n    display(message);\n    \n    cout << "Area: " << getArea(5, 10) << endl;\n    \n    return 0;\n}',
  hint: 'const parameters document that input won\'t be modified.'
},
{
  "id": "cpp_functions_17",
  "topicId": "cpp_functions",
  "question": "Create function template for generic programming.",
  "mathSolution": "Templates work with any data type.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\ntemplate <typename T>\nvoid swap(T &a, T &b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    cout << max(5, 3) << endl;\n    cout << max(5.5, 3.2) << endl;\n    cout << max('A', 'Z') << endl;\n    \n    int x = 10, y = 20;\n    swap(x, y);\n    cout << \"x=\" << x << \", y=\" << y << endl;\n    \n    return 0;\n}",
  "hint": "Template functions are defined with template<typename T> before function."
},
{
  id: 'cpp_functions_18',
  topicId: 'cpp_functions',
  question: 'Use function template with multiple type parameters.',
  mathSolution: 'Specify multiple template parameters for different types.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate <typename T, typename U>\nauto add(T a, U b) -> decltype(a + b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(5, 3) << endl;           // int\n    cout << add(5, 3.14) << endl;        // double\n    cout << add(5.5, 3) << endl;         // double\n    cout << add(5.5, 3.14f) << endl;      // double\n    \n    // Using different types\n    cout << add(string("Hello "), "World") << endl;\n    \n    return 0;\n}',
  hint: 'Use auto as return type with trailing decltype for generic arithmetic.'
},
{
  id: 'cpp_functions_19',
  topicId: 'cpp_functions',
  question: 'Create function with initializer_list parameter.',
  mathSolution: 'initializer_list allows variable number of arguments of same type.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\nusing namespace std;\n\nint sum(initializer_list<int> numbers) {\n    int total = 0;\n    for (int n : numbers) {\n        total += n;\n    }\n    return total;\n}\n\nint main() {\n    cout << sum({1, 2, 3, 4, 5}) << endl;\n    cout << sum({10, 20, 30}) << endl;\n    cout << sum({1, 2}) << endl;\n    cout << sum({}) << endl;\n    \n    return 0;\n}',
  hint: 'initializer_list provides a way to accept variable arguments like {...}.'
},
{
  id: 'cpp_functions_20',
  topicId: 'cpp_functions',
  question: 'Use lambda expression as function argument.',
  mathSolution: 'Lambda can be passed directly to algorithms or functions.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    // Lambda to check even numbers\n    auto isEven = [](int n) { return n % 2 == 0; };\n    \n    int evenCount = count_if(numbers.begin(), numbers.end(), isEven);\n    cout << "Even numbers: " << evenCount << endl;\n    \n    // Lambda to square numbers\n    transform(numbers.begin(), numbers.end(), numbers.begin(), \n              [](int n) { return n * n; });\n    \n    cout << "Squared numbers: ";\n    for (int n : numbers) cout << n << " ";\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda syntax: [capture](parameters) -> return_type { body }'
},
{
  id: 'cpp_functions_21',
  topicId: 'cpp_functions',
  question: 'Create lambda with capture by value and reference.',
  mathSolution: 'Capture list defines how outside variables are accessed.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int multiplier = 10;\n    int offset = 5;\n    \n    // Capture by value (copies)\n    auto byValue = [multiplier](int x) { return x * multiplier; };\n    \n    // Capture by reference (can modify)\n    auto byReference = [&offset](int x) { offset += x; return offset; };\n    \n    // Capture all by value\n    auto allByValue = [=](int x) { return x * multiplier + offset; };\n    \n    // Capture all by reference\n    auto allByRef = [&](int x) { multiplier = x; return multiplier; };\n    \n    cout << "By value: " << byValue(5) << endl;\n    cout << "By reference: " << byReference(5) << endl;\n    cout << "Offset now: " << offset << endl;\n    \n    return 0;\n}',
  hint: '[=] captures all by value, [&] captures all by reference.'
},
{
  id: 'cpp_functions_22',
  topicId: 'cpp_functions',
  question: 'Use constexpr function for compile-time computation.',
  mathSolution: 'constexpr functions can be evaluated at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nconstexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nconstexpr int square(int x) {\n    return x * x;\n}\n\nint main() {\n    // Compile-time computation\n    constexpr int fact5 = factorial(5);\n    constexpr int sq10 = square(10);\n    constexpr int arrSize = square(5);\n    int arr[arrSize];  // Valid because arrSize is compile-time constant\n    \n    cout << "5! = " << fact5 << endl;\n    cout << "10^2 = " << sq10 << endl;\n    \n    // Can also be called at runtime\n    int n = 6;\n    cout << "6! = " << factorial(n) << endl;\n    \n    return 0;\n}',
  hint: 'constexpr functions can be used where compile-time constants are required.'
},
{
  id: 'cpp_functions_23',
  topicId: 'cpp_functions',
  question: 'Use function returning pointer to local variable (dangerous - demonstrate).',
  mathSolution: 'Never return pointer to local variable (undefined behavior).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// DANGEROUS: Returns pointer to local variable\nint* badFunction() {\n    int local = 42;\n    return &local;  // local will be destroyed after function returns\n}\n\n// CORRECT: Use static or allocate on heap\nint* correctFunction() {\n    static int staticVar = 42;  // Static variable persists\n    return &staticVar;\n}\n\nint main() {\n    int* ptr = correctFunction();\n    cout << "Value: " << *ptr << endl;\n    \n    // This is undefined behavior\n    // int* bad = badFunction();\n    // cout << *bad << endl;\n    \n    return 0;\n}',
  hint: 'Never return pointers to local variables; they are destroyed when function exits.'
},
{
  id: 'cpp_functions_24',
  topicId: 'cpp_functions',
  question: 'Use function returning reference to local variable (dangerous).',
  mathSolution: 'Returning reference to local variable causes dangling reference.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// DANGEROUS: Returns reference to local variable\nint& badFunction() {\n    int local = 42;\n    return local;  // local will be destroyed\n}\n\n// CORRECT: Return reference to static or global\nint& correctFunction() {\n    static int staticVar = 42;\n    return staticVar;\n}\n\nint main() {\n    int& ref = correctFunction();\n    cout << "Value: " << ref << endl;\n    ref = 100;\n    cout << "Modified: " << correctFunction() << endl;\n    \n    // This is undefined behavior\n    // int& bad = badFunction();\n    \n    return 0;\n}',
  hint: 'Only return references to variables that outlive the function (static, global, parameters).'
},
{
  id: 'cpp_functions_25',
  topicId: 'cpp_functions',
  question: 'Use std::function to store callable objects.',
  mathSolution: 'std::function can hold functions, lambdas, function objects.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    // Store regular function\n    function<int(int, int)> func1 = add;\n    cout << "add(5,3) = " << func1(5, 3) << endl;\n    \n    // Store lambda\n    function<int(int, int)> func2 = [](int a, int b) { return a * b; };\n    cout << "multiply(5,3) = " << func2(5, 3) << endl;\n    \n    // Store member function\n    struct Calculator {\n        int divide(int a, int b) { return a / b; }\n    } calc;\n    function<int(Calculator&, int, int)> func3 = &Calculator::divide;\n    cout << "divide(10,2) = " << func3(calc, 10, 2) << endl;\n    \n    return 0;\n}',
  hint: '#include <functional> for std::function.'
},
{
  id: 'cpp_functions_26',
  topicId: 'cpp_functions',
  question: 'Use function pointer to call function dynamically.',
  mathSolution: 'Function pointers store address of functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\n\nint main() {\n    // Function pointer declaration\n    int (*operation)(int, int);\n    \n    operation = add;\n    cout << "add(5,3) = " << operation(5, 3) << endl;\n    \n    operation = subtract;\n    cout << "subtract(5,3) = " << operation(5, 3) << endl;\n    \n    operation = multiply;\n    cout << "multiply(5,3) = " << operation(5, 3) << endl;\n    \n    // Array of function pointers\n    int (*operations[])(int, int) = {add, subtract, multiply};\n    \n    for (int i = 0; i < 3; i++) {\n        cout << "Result " << i << ": " << operations[i](10, 5) << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Function pointer syntax: return_type (*name)(parameter_types)'
},
{
  id: 'cpp_functions_27',
  topicId: 'cpp_functions',
  question: 'Create variadic function using initializer_list.',
  mathSolution: 'initializer_list accepts variable number of arguments.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\nusing namespace std;\n\ntemplate<typename T>\nT sum(initializer_list<T> numbers) {\n    T total = 0;\n    for (const T& num : numbers) {\n        total += num;\n    }\n    return total;\n}\n\ntemplate<typename T>\nT average(initializer_list<T> numbers) {\n    if (numbers.size() == 0) return 0;\n    T total = sum(numbers);\n    return total / numbers.size();\n}\n\nint main() {\n    cout << "Sum: " << sum({1, 2, 3, 4, 5}) << endl;\n    cout << "Average: " << average({10, 20, 30, 40, 50}) << endl;\n    cout << "Sum (double): " << sum({1.1, 2.2, 3.3}) << endl;\n    \n    return 0;\n}',
  hint: 'initializer_list provides a typed way to accept variable arguments.'
},
{
  id: 'cpp_functions_28',
  topicId: 'cpp_functions',
  question: 'Use default arguments with reference parameters.',
  mathSolution: 'Default arguments can be used with references.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid configure(int& value, int increment = 1) {\n    value += increment;\n}\n\nvoid logMessage(const string& message, const string& prefix = "[INFO]") {\n    cout << prefix << " " << message << endl;\n}\n\nint main() {\n    int counter = 0;\n    configure(counter);\n    cout << "Counter: " << counter << endl;\n    configure(counter, 5);\n    cout << "Counter: " << counter << endl;\n    \n    logMessage("Application started");\n    logMessage("Error occurred", "[ERROR]");\n    logMessage("Process completed", "[SUCCESS]");\n    \n    return 0;\n}',
  hint: 'Default arguments work with references; reference must be to modifiable lvalue.'
},
{
  "id": "cpp_functions_29",
  "topicId": "cpp_functions",
  "question": "Create function with noexcept specification.",
  "mathSolution": "noexcept indicates function does not throw exceptions.",
  "codeSolution": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid noThrow() noexcept {\n    cout << \"This function guarantees no exceptions\" << endl;\n}\n\nvoid mayThrow() {\n    throw runtime_error(\"Exception from mayThrow\");\n}\n\nint main() {\n    cout << boolalpha;\n    cout << \"noThrow() is noexcept: \" << noexcept(noThrow()) << endl;\n    cout << \"mayThrow() is noexcept: \" << noexcept(mayThrow()) << endl;\n    \n    try {\n        // noThrow();  // Safe, won't throw\n        mayThrow();\n    } catch (const exception& e) {\n        cout << \"Caught: \" << e.what() << endl;\n    }\n    \n    return 0;\n}",
  "hint": "noexcept enables compiler optimizations and indicates exception safety."
},
{
  id: 'cpp_functions_30',
  topicId: 'cpp_functions',
  question: 'Use trailing return type syntax (C++11).',
  mathSolution: 'auto function(parameters) -> return_type syntax.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Traditional\nint add1(int a, int b) {\n    return a + b;\n}\n\n// Trailing return type\nauto add2(int a, int b) -> int {\n    return a + b;\n}\n\n// Useful with templates\ntemplate<typename T, typename U>\nauto multiply(T a, U b) -> decltype(a * b) {\n    return a * b;\n}\n\nint main() {\n    cout << "add1: " << add1(5, 3) << endl;\n    cout << "add2: " << add2(5, 3) << endl;\n    cout << "multiply(5, 3.14): " << multiply(5, 3.14) << endl;\n    \n    return 0;\n}',
  hint: 'Trailing return type is useful when return type depends on parameters.'
},
{
  id: 'cpp_functions_31',
  topicId: 'cpp_functions',
  question: 'Use decltype to deduce return type.',
  mathSolution: 'decltype(expression) yields type of expression.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\n// Using decltype for return type\nauto getFunction() -> decltype(&add) {\n    return &add;\n}\n\nint main() {\n    auto func = getFunction();\n    cout << "Result: " << func(10, 20) << endl;\n    \n    int x = 10;\n    double y = 3.14;\n    \n    // decltype with expression\n    decltype(x + y) result = x + y;\n    cout << "Type of result: " << typeid(result).name() << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful for generic programming where type depends on parameters.'
},
{
  id: 'cpp_functions_32',
  topicId: 'cpp_functions',
  question: 'Create function that returns array using std::array.',
  mathSolution: 'Return std::array instead of C-style array.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\narray<int, 5> createArray() {\n    array<int, 5> arr = {1, 2, 3, 4, 5};\n    return arr;\n}\n\nint main() {\n    array<int, 5> numbers = createArray();\n    \n    cout << "Array elements: ";\n    for (int n : numbers) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Return std::array instead of C-style arrays for safety and convenience.'
},
{
  id: 'cpp_functions_33',
  topicId: 'cpp_functions',
  question: 'Use function overloading with const parameters.',
  mathSolution: 'const can be used to overload functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid print(int &value) {\n    cout << "Non-const reference: " << value << endl;\n}\n\nvoid print(const int &value) {\n    cout << "Const reference: " << value << endl;\n}\n\nvoid process(int *ptr) {\n    cout << "Non-const pointer" << endl;\n}\n\nvoid process(const int *ptr) {\n    cout << "Pointer to const" << endl;\n}\n\nint main() {\n    int x = 42;\n    const int y = 100;\n    \n    print(x);  // Calls non-const version\n    print(y);  // Calls const version\n    \n    process(&x);\n    process(&y);\n    \n    return 0;\n}',
  hint: 'Overloading on const is valid for references and pointers.'
},
{
  id: 'cpp_functions_34',
  topicId: 'cpp_functions',
  question: 'Use static variables inside function to preserve state.',
  mathSolution: 'static local variable retains value between calls.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint counter() {\n    static int count = 0;\n    count++;\n    return count;\n}\n\nvoid trackCalls() {\n    static int callCount = 0;\n    callCount++;\n    cout << "Function called " << callCount << " times" << endl;\n}\n\ndouble runningAverage(double value) {\n    static double sum = 0;\n    static int count = 0;\n    sum += value;\n    count++;\n    return sum / count;\n}\n\nint main() {\n    for (int i = 0; i < 5; i++) {\n        cout << "Call " << i+1 << ": counter() = " << counter() << endl;\n    }\n    \n    trackCalls();\n    trackCalls();\n    trackCalls();\n    \n    cout << runningAverage(10) << endl;\n    cout << runningAverage(20) << endl;\n    cout << runningAverage(30) << endl;\n    \n    return 0;\n}',
  hint: 'static variables in functions are initialized only once and persist across calls.'
},
{
  id: 'cpp_functions_35',
  topicId: 'cpp_functions',
  question: 'Create function that returns a lambda.',
  mathSolution: 'Functions can return lambda expressions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nauto createMultiplier(int factor) {\n    return [factor](int x) { return x * factor; };\n}\n\nauto createCounter() {\n    int count = 0;\n    return [=]() mutable { return ++count; };\n}\n\nauto createAdder(int a) {\n    return [a](int b) { return a + b; };\n}\n\nint main() {\n    auto times2 = createMultiplier(2);\n    auto times5 = createMultiplier(5);\n    \n    cout << "Times 2 (5): " << times2(5) << endl;\n    cout << "Times 5 (5): " << times5(5) << endl;\n    \n    auto counter = createCounter();\n    cout << counter() << endl;\n    cout << counter() << endl;\n    cout << counter() << endl;\n    \n    auto add5 = createAdder(5);\n    cout << "Add 5 to 10: " << add5(10) << endl;\n    \n    return 0;\n}',
  hint: 'Returning lambdas allows creation of custom function objects.'
},
{
  "id": "cpp_functions_36",
  "topicId": "cpp_functions",
  "question": "Write function that validates user input with reference parameter.",
  "mathSolution": "Use references to return validation status and value.",
  "codeSolution": "#include <iostream>\n#include <limits>\n#include <string>\nusing namespace std;\n\nbool getInt(const string& prompt, int& value) {\n    cout << prompt;\n    cin >> value;\n    \n    if (cin.fail()) {\n        cin.clear();\n        cin.ignore(numeric_limits<streamsize>::max(), '\\n');\n        return false;\n    }\n    cin.ignore(numeric_limits<streamsize>::max(), '\\n');\n    return true;\n}\n\nbool getIntWithinRange(const string& prompt, int& value, int minVal, int maxVal) {\n    if (!getInt(prompt, value)) {\n        return false;\n    }\n    if (value < minVal || value > maxVal) {\n        return false;\n    }\n    return true;\n}\n\nint main() {\n    int age = 0;\n    int score = 0;\n    \n    cout << \"=== Age Input ===\" << endl;\n    if (getIntWithinRange(\"Enter age (1-150): \", age, 1, 150)) {\n        cout << \"Valid age: \" << age << endl;\n    } else {\n        cout << \"Invalid age input\" << endl;\n    }\n    \n    cout << \"\\n=== Score Input ===\" << endl;\n    if (getIntWithinRange(\"Enter score (0-100): \", score, 0, 100)) {\n        cout << \"Valid score: \" << score << endl;\n    } else {\n        cout << \"Invalid score input\" << endl;\n    }\n    \n    return 0;\n}",
  "hint": "Use boolean return with reference parameters for functions that can fail."
},
{
  id: 'cpp_functions_37',
  topicId: 'cpp_functions',
  question: 'Create function that swaps any two variables (template).',
  mathSolution: 'Template function works with any data type.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nvoid mySwap(T& a, T& b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    cout << "Before swap: x=" << x << ", y=" << y << endl;\n    mySwap(x, y);\n    cout << "After swap: x=" << x << ", y=" << y << endl;\n    \n    double a = 1.5, b = 2.5;\n    cout << "\\nBefore swap: a=" << a << ", b=" << b << endl;\n    mySwap(a, b);\n    cout << "After swap: a=" << a << ", b=" << b << endl;\n    \n    string s1 = "Hello", s2 = "World";\n    cout << "\\nBefore swap: s1=\\"" << s1 << "\\", s2=\\"" << s2 << "\\"" << endl;\n    mySwap(s1, s2);\n    cout << "After swap: s1=\\"" << s1 << "\\", s2=\\"" << s2 << "\\"" << endl;\n    \n    return 0;\n}',
  hint: 'Template functions work for any type that supports assignment and copy construction.'
},
{
  id: 'cpp_functions_38',
  topicId: 'cpp_functions',
  question: 'Create function to compute power using recursion and binary exponentiation.',
  mathSolution: 'Efficient exponentiation for integer powers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nlong long powerRecursive(int base, int exponent) {\n    if (exponent == 0) return 1;\n    if (exponent == 1) return base;\n    \n    long long half = powerRecursive(base, exponent / 2);\n    if (exponent % 2 == 0) {\n        return half * half;\n    } else {\n        return half * half * base;\n    }\n}\n\nint main() {\n    cout << "2^10 = " << powerRecursive(2, 10) << endl;\n    cout << "3^8 = " << powerRecursive(3, 8) << endl;\n    cout << "5^5 = " << powerRecursive(5, 5) << endl;\n    \n    return 0;\n}',
  hint: 'Recursive binary exponentiation uses O(log n) time instead of O(n).'
},
{
  id: 'cpp_functions_39',
  topicId: 'cpp_functions',
  question: 'Use array reference parameter for fixed-size arrays.',
  mathSolution: 'Pass array by reference to preserve size information.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<size_t N>\nvoid printArray(const int (&arr)[N]) {\n    cout << "Array size: " << N << ", elements: ";\n    for (size_t i = 0; i < N; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n}\n\ntemplate<size_t N>\nvoid reverseArray(int (&arr)[N]) {\n    for (size_t i = 0; i < N / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[N - 1 - i];\n        arr[N - 1 - i] = temp;\n    }\n}\n\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {10, 20, 30, 40};\n    \n    printArray(arr1);\n    reverseArray(arr1);\n    printArray(arr1);\n    \n    printArray(arr2);\n    reverseArray(arr2);\n    printArray(arr2);\n    \n    return 0;\n}',
  hint: 'Template parameter for array size preserves size information when passing arrays by reference.'
},
{
  id: 'cpp_functions_40',
  topicId: 'cpp_functions',
  question: 'Create function with constexpr if (C++17) for compile-time branching.',
  mathSolution: 'if constexpr eliminates dead branches at compile time.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nvoid printInfo(const T& value) {\n    if constexpr (is_integral<T>::value) {\n        cout << "Integral type: " << value << endl;\n    } else if constexpr (is_floating_point<T>::value) {\n        cout << "Floating point type: " << value << endl;\n    } else if constexpr (is_same<T, string>::value) {\n        cout << "String: \\"" << value << "\\"" << endl;\n    } else {\n        cout << "Other type" << endl;\n    }\n}\n\ntemplate<typename T>\nauto process(T value) {\n    if constexpr (is_integral<T>::value) {\n        return value * 2;\n    } else {\n        return value + value;\n    }\n}\n\nint main() {\n    printInfo(42);\n    printInfo(3.14);\n    printInfo(string("Hello"));\n    printInfo(true);\n    \n    cout << "process(5): " << process(5) << endl;\n    cout << "process(3.14): " << process(3.14) << endl;\n    \n    return 0;\n}',
  hint: 'if constexpr discards branches that are not taken at compile time.'
},
//oops
{
  id: 'cpp_oop_1',
  topicId: 'cpp_oop',
  question: 'Create a simple class with public members and access them.',
  mathSolution: 'Class defines blueprint; objects are instances.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\npublic:\n    string name;\n    int age;\n};\n\nint main() {\n    Person p1;\n    p1.name = "John";\n    p1.age = 25;\n    \n    cout << "Name: " << p1.name << ", Age: " << p1.age << endl;\n    return 0;\n}',
  hint: 'Use . operator to access members of an object.'
},
{
  id: 'cpp_oop_2',
  topicId: 'cpp_oop',
  question: 'Create a class with private members and public getter/setter methods.',
  mathSolution: 'Encapsulation hides data, provides controlled access.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\n    string accountNumber;\n    \npublic:\n    void setBalance(double b) { balance = b; }\n    double getBalance() { return balance; }\n    \n    void setAccountNumber(string acc) { accountNumber = acc; }\n    string getAccountNumber() { return accountNumber; }\n    \n    void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    \n    void withdraw(double amount) {\n        if (amount > 0 && amount <= balance) balance -= amount;\n    }\n};\n\nint main() {\n    BankAccount acc;\n    acc.setBalance(1000);\n    acc.setAccountNumber("12345");\n    \n    acc.deposit(500);\n    cout << "Balance: " << acc.getBalance() << endl;\n    \n    return 0;\n}',
  hint: 'Private members are accessible only within the class.'
},
{
  id: 'cpp_oop_3',
  topicId: 'cpp_oop',
  question: 'Create a class with constructor and destructor.',
  mathSolution: 'Constructor initializes objects; destructor cleans up.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int rollNo;\n    \npublic:\n    // Constructor\n    Student(string n, int r) {\n        name = n;\n        rollNo = r;\n        cout << "Student created: " << name << endl;\n    }\n    \n    // Destructor\n    ~Student() {\n        cout << "Student destroyed: " << name << endl;\n    }\n    \n    void display() {\n        cout << "Name: " << name << ", Roll No: " << rollNo << endl;\n    }\n};\n\nint main() {\n    Student s1("John", 101);\n    Student s2("Alice", 102);\n    \n    s1.display();\n    s2.display();\n    \n    return 0;\n}',
  hint: 'Destructor is called automatically when object goes out of scope.'
},
{
  id: 'cpp_oop_4',
  topicId: 'cpp_oop',
  question: 'Use constructor initializer list for efficient initialization.',
  mathSolution: 'Initializer list initializes members before constructor body.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    const int id;\n    static int count;\n    \npublic:\n    // Constructor with initializer list\n    Point(int a, int b) : x(a), y(b), id(++count) {\n        cout << "Point " << id << " created at (" << x << "," << y << ")" << endl;\n    }\n    \n    void display() {\n        cout << "Point(" << x << "," << y << ")" << endl;\n    }\n};\n\nint Point::count = 0;\n\nint main() {\n    Point p1(10, 20);\n    Point p2(30, 40);\n    \n    return 0;\n}',
  hint: 'Use initializer list for const members, references, and efficiency.'
},
{
  id: 'cpp_oop_5',
  topicId: 'cpp_oop',
  question: 'Demonstrate inheritance with base and derived classes.',
  mathSolution: 'Derived class inherits members from base class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal(string n) : name(n) {}\n    \n    void eat() {\n        cout << name << " is eating" << endl;\n    }\n    \n    void sleep() {\n        cout << name << " is sleeping" << endl;\n    }\n};\n\nclass Dog : public Animal {\nprivate:\n    string breed;\n    \npublic:\n    Dog(string n, string b) : Animal(n), breed(b) {}\n    \n    void bark() {\n        cout << name << " barks: Woof! Woof!" << endl;\n    }\n    \n    void wagTail() {\n        cout << name << " wags tail" << endl;\n    }\n};\n\nint main() {\n    Dog myDog("Rex", "German Shepherd");\n    myDog.eat();\n    myDog.sleep();\n    myDog.bark();\n    myDog.wagTail();\n    \n    return 0;\n}',
  hint: 'Use : public BaseClass to inherit from base class.'
},
{
  id: 'cpp_oop_6',
  topicId: 'cpp_oop',
  question: 'Demonstrate multi-level inheritance.',
  mathSolution: 'Derived class inherits from another derived class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    \npublic:\n    Vehicle(string b) : brand(b) {}\n    \n    void honk() {\n        cout << brand << " vehicle honks!" << endl;\n    }\n};\n\nclass Car : public Vehicle {\nprotected:\n    string model;\n    \npublic:\n    Car(string b, string m) : Vehicle(b), model(m) {}\n    \n    void drive() {\n        cout << brand << " " << model << " is driving" << endl;\n    }\n};\n\nclass SportsCar : public Car {\nprivate:\n    int topSpeed;\n    \npublic:\n    SportsCar(string b, string m, int speed) : Car(b, m), topSpeed(speed) {}\n    \n    void race() {\n        cout << brand << " " << model << " racing at " << topSpeed << " km/h" << endl;\n    }\n};\n\nint main() {\n    SportsCar ferrari("Ferrari", "F8 Tributo", 340);\n    ferrari.honk();\n    ferrari.drive();\n    ferrari.race();\n    \n    return 0;\n}',
  hint: 'Multi-level inheritance creates hierarchy: Animal -> Mammal -> Dog.'
},
{
  id: 'cpp_oop_7',
  topicId: 'cpp_oop',
  question: 'Demonstrate multiple inheritance.',
  mathSolution: 'Class inherits from multiple base classes.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Flying {\npublic:\n    void fly() {\n        cout << "Flying in the sky!" << endl;\n    }\n};\n\nclass Swimming {\npublic:\n    void swim() {\n        cout << "Swimming in water!" << endl;\n    }\n};\n\nclass Duck : public Flying, public Swimming {\nprivate:\n    string name;\n    \npublic:\n    Duck(string n) : name(n) {}\n    \n    void quack() {\n        cout << name << " says: Quack! Quack!" << endl;\n    }\n};\n\nint main() {\n    Duck donald("Donald");\n    donald.fly();\n    donald.swim();\n    donald.quack();\n    \n    return 0;\n}',
  hint: 'Multiple inheritance: class Derived : public Base1, public Base2'
},
{
  id: 'cpp_oop_8',
  topicId: 'cpp_oop',
  question: 'Use virtual functions for runtime polymorphism.',
  mathSolution: 'Virtual functions allow overriding in derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() {\n        cout << "Base class area" << endl;\n        return 0;\n    }\n    \n    virtual void draw() {\n        cout << "Drawing shape" << endl;\n    }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() override {\n        return width * height;\n    }\n    \n    void draw() override {\n        cout << "Drawing rectangle " << width << "x" << height << endl;\n    }\n};\n\nint main() {\n    Shape* shapes[2];\n    shapes[0] = new Circle(5);\n    shapes[1] = new Rectangle(4, 6);\n    \n    for (int i = 0; i < 2; i++) {\n        cout << "Area: " << shapes[i]->area() << endl;\n        shapes[i]->draw();\n    }\n    \n    delete shapes[0];\n    delete shapes[1];\n    \n    return 0;\n}',
  hint: 'virtual keyword enables dynamic dispatch at runtime.'
},
{
  id: 'cpp_oop_9',
  topicId: 'cpp_oop',
  question: 'Use pure virtual functions to create abstract classes.',
  mathSolution: 'Abstract classes cannot be instantiated.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;  // Pure virtual function\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle" << endl;\n    }\n};\n\nclass Square : public Shape {\nprivate:\n    double side;\n    \npublic:\n    Square(double s) : side(s) {}\n    \n    double area() override {\n        return side * side;\n    }\n    \n    void draw() override {\n        cout << "Drawing square" << endl;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    \n    Shape* shapes[] = {new Circle(5), new Square(4)};\n    \n    for (Shape* s : shapes) {\n        cout << "Area: " << s->area() << endl;\n        s->draw();\n        delete s;\n    }\n    \n    return 0;\n}',
  hint: 'Pure virtual functions: virtual return_type func() = 0;'
},
{
  id: 'cpp_oop_10',
  topicId: 'cpp_oop',
  question: 'Use static members to share data across all instances.',
  mathSolution: 'Static members belong to class, not instances.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    static int count;\n    int id;\n    \npublic:\n    Counter() {\n        count++;\n        id = count;\n    }\n    \n    static int getCount() {\n        return count;\n    }\n    \n    void display() {\n        cout << "Object " << id << " created. Total: " << count << endl;\n    }\n};\n\nint Counter::count = 0;\n\nint main() {\n    Counter c1, c2, c3;\n    \n    c1.display();\n    c2.display();\n    c3.display();\n    \n    cout << "Total objects: " << Counter::getCount() << endl;\n    \n    return 0;\n}',
  hint: 'Static members are initialized outside the class definition.'
},
{
  id: 'cpp_oop_11',
  topicId: 'cpp_oop',
  question: 'Use const member functions (read-only methods).',
  mathSolution: 'const methods cannot modify object state.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() const {\n        // width = 10;  // Error: cannot modify in const function\n        return width * height;\n    }\n    \n    double perimeter() const {\n        return 2 * (width + height);\n    }\n    \n    void scale(double factor) {\n        width *= factor;\n        height *= factor;\n    }\n    \n    void display() const {\n        cout << "Rectangle: " << width << "x" << height << endl;\n    }\n};\n\nint main() {\n    const Rectangle rect(10, 20);\n    \n    cout << "Area: " << rect.area() << endl;\n    cout << "Perimeter: " << rect.perimeter() << endl;\n    rect.display();\n    \n    // rect.scale(2);  // Error: cannot call non-const on const object\n    \n    return 0;\n}',
  hint: 'const member functions can be called on const objects.'
},
{
  id: 'cpp_oop_12',
  topicId: 'cpp_oop',
  question: 'Use friend function to access private members.',
  mathSolution: 'Friend functions are not members but can access private data.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int length, width, height;\n    \npublic:\n    Box(int l, int w, int h) : length(l), width(w), height(h) {}\n    \n    // Friend function declaration\n    friend int calculateVolume(Box b);\n    friend void displayBox(Box b);\n};\n\n// Friend function definition\nint calculateVolume(Box b) {\n    return b.length * b.width * b.height;  // Accessing private members\n}\n\nvoid displayBox(Box b) {\n    cout << "Box: " << b.length << "x" << b.width << "x" << b.height << endl;\n}\n\nint main() {\n    Box box(10, 5, 3);\n    \n    displayBox(box);\n    cout << "Volume: " << calculateVolume(box) << endl;\n    \n    return 0;\n}',
  hint: 'Friend functions are declared inside class with friend keyword.'
},
{
  "id": "cpp_oop_13",
  "topicId": "cpp_oop",
  "question": "Use friend class to allow another class access to private members.",
  "mathSolution": "Friend class can access private members of another class.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Engine {\nprivate:\n    int horsepower;\n    string type;\n    \npublic:\n    Engine(int hp, string t) : horsepower(hp), type(t) {}\n    \n    friend class Car;  // Car can access Engine's private members\n};\n\nclass Car {\nprivate:\n    string model;\n    Engine engine;\n    \npublic:\n    Car(string m, int hp, string t) : model(m), engine(hp, t) {}\n    \n    void display() {\n        cout << \"Car: \" << model << endl;\n        cout << \"Engine: \" << engine.type << \" (\" << engine.horsepower << \" HP)\" << endl;\n    }\n};\n\nint main() {\n    Car myCar(\"Tesla Model S\", 670, \"Electric\");\n    myCar.display();\n    \n    return 0;\n}",
  "hint": "friend class grants full access to private members."
},
{
  id: 'cpp_oop_14',
  topicId: 'cpp_oop',
  question: 'Use this pointer to refer to current object.',
  mathSolution: 'this pointer points to current object instance.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Employee {\nprivate:\n    string name;\n    double salary;\n    \npublic:\n    Employee(string name, double salary) {\n        this->name = name;      // Using this to resolve name conflict\n        this->salary = salary;\n    }\n    \n    Employee& setSalary(double salary) {\n        this->salary = salary;\n        return *this;           // Return reference for chaining\n    }\n    \n    Employee& setBonus(double bonus) {\n        this->salary += bonus;\n        return *this;\n    }\n    \n    void display() {\n        cout << "Employee: " << this->name << ", Salary: $" << this->salary << endl;\n    }\n};\n\nint main() {\n    Employee emp("John", 50000);\n    \n    emp.setSalary(55000).setBonus(5000);  // Method chaining\n    emp.display();\n    \n    return 0;\n}',
  hint: 'this pointer is available in non-static member functions.'
},
{
  id: 'cpp_oop_15',
  topicId: 'cpp_oop',
  question: 'Implement operator overloading for custom class.',
  mathSolution: 'Overload operators to work with user-defined types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    // Operator overloading\n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    Complex operator*(const Complex& other) {\n        return Complex(real * other.real - imag * other.imag,\n                       real * other.imag + imag * other.real);\n    }\n    \n    bool operator==(const Complex& other) {\n        return real == other.real && imag == other.imag;\n    }\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    \n    Complex c3 = c1 + c2;\n    Complex c4 = c1 - c2;\n    Complex c5 = c1 * c2;\n    \n    cout << "c1: "; c1.display();\n    cout << "c2: "; c2.display();\n    cout << "c1 + c2: "; c3.display();\n    cout << "c1 - c2: "; c4.display();\n    cout << "c1 * c2: "; c5.display();\n    \n    return 0;\n}',
  hint: 'Operator overloading makes user-defined types behave like built-in types.'
},
{
  id: 'cpp_oop_16',
  topicId: 'cpp_oop',
  question: 'Overload stream insertion (<<) and extraction (>>) operators.',
  mathSolution: 'Implement as friend functions for custom I/O.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    Point(int a = 0, int b = 0) : x(a), y(b) {}\n    \n    friend ostream& operator<<(ostream& os, const Point& p) {\n        os << "(" << p.x << ", " << p.y << ")";\n        return os;\n    }\n    \n    friend istream& operator>>(istream& is, Point& p) {\n        cout << "Enter x and y: ";\n        is >> p.x >> p.y;\n        return is;\n    }\n};\n\nint main() {\n    Point p1(10, 20);\n    Point p2;\n    \n    cout << "p1 = " << p1 << endl;\n    \n    cin >> p2;\n    cout << "p2 = " << p2 << endl;\n    \n    return 0;\n}',
  hint: 'Return reference to stream to enable chaining.'
},
{
  id: 'cpp_oop_17',
  topicId: 'cpp_oop',
  question: 'Overload prefix and postfix increment operators.',
  mathSolution: 'Postfix takes dummy int parameter to distinguish.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int value;\n    \npublic:\n    Counter(int v = 0) : value(v) {}\n    \n    // Prefix increment (++c)\n    Counter& operator++() {\n        ++value;\n        return *this;\n    }\n    \n    // Postfix increment (c++)\n    Counter operator++(int) {\n        Counter temp = *this;\n        ++value;\n        return temp;\n    }\n    \n    // Prefix decrement (--c)\n    Counter& operator--() {\n        --value;\n        return *this;\n    }\n    \n    // Postfix decrement (c--)\n    Counter operator--(int) {\n        Counter temp = *this;\n        --value;\n        return temp;\n    }\n    \n    friend ostream& operator<<(ostream& os, const Counter& c) {\n        os << c.value;\n        return os;\n    }\n};\n\nint main() {\n    Counter c(5);\n    \n    cout << "Initial: " << c << endl;\n    cout << "Prefix ++c: " << ++c << endl;\n    cout << "Postfix c++: " << c++ << endl;\n    cout << "After postfix: " << c << endl;\n    \n    return 0;\n}',
  hint: 'Postfix returns a copy, prefix returns reference for efficiency.'
},
{
  id: 'cpp_oop_18',
  topicId: 'cpp_oop',
  question: 'Overload subscript operator [] for custom container.',
  mathSolution: 'Return reference to allow assignment to elements.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass SafeArray {\nprivate:\n    int arr[10];\n    \npublic:\n    SafeArray() {\n        for (int i = 0; i < 10; i++) arr[i] = 0;\n    }\n    \n    int& operator[](int index) {\n        if (index < 0 || index >= 10) {\n            cout << "Index out of bounds!" << endl;\n            return arr[0];\n        }\n        return arr[index];\n    }\n    \n    const int& operator[](int index) const {\n        if (index < 0 || index >= 10) {\n            cout << "Index out of bounds!" << endl;\n            return arr[0];\n        }\n        return arr[index];\n    }\n};\n\nint main() {\n    SafeArray arr;\n    \n    arr[3] = 42;\n    arr[7] = 99;\n    \n    cout << "arr[3] = " << arr[3] << endl;\n    cout << "arr[7] = " << arr[7] << endl;\n    \n    return 0;\n}',
  hint: 'Provide const version for const objects.'
},
{
  id: 'cpp_oop_19',
  topicId: 'cpp_oop',
  question: 'Create a copy constructor for deep copying.',
  mathSolution: 'Copy constructor creates copy of existing object.',
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char* str;\n    int length;\n    \npublic:\n    // Constructor\n    String(const char* s) {\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n    }\n    \n    // Copy constructor (deep copy)\n    String(const String& other) {\n        length = other.length;\n        str = new char[length + 1];\n        strcpy(str, other.str);\n        cout << "Copy constructor called" << endl;\n    }\n    \n    // Destructor\n    ~String() {\n        delete[] str;\n    }\n    \n    void display() {\n        cout << str << endl;\n    }\n    \n    void modify(const char* s) {\n        delete[] str;\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n    }\n};\n\nint main() {\n    String s1("Hello");\n    String s2 = s1;  // Copy constructor called\n    \n    cout << "s1: "; s1.display();\n    cout << "s2: "; s2.display();\n    \n    s1.modify("World");\n    \n    cout << "After modifying s1:\\n";\n    cout << "s1: "; s1.display();\n    cout << "s2: "; s2.display();  // Unchanged (deep copy)\n    \n    return 0;\n}',
  hint: 'Copy constructor is called when object is passed by value or initialized from another object.'
},
{
  id: 'cpp_oop_20',
  topicId: 'cpp_oop',
  question: 'Implement move constructor and move assignment operator (C++11).',
  mathSolution: 'Move semantics transfer ownership of resources.',
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass Buffer {\nprivate:\n    char* data;\n    int size;\n    \npublic:\n    // Constructor\n    Buffer(int s) : size(s) {\n        data = new char[size];\n        cout << "Buffer of size " << size << " created" << endl;\n    }\n    \n    // Destructor\n    ~Buffer() {\n        delete[] data;\n        cout << "Buffer destroyed" << endl;\n    }\n    \n    // Copy constructor\n    Buffer(const Buffer& other) : size(other.size) {\n        data = new char[size];\n        memcpy(data, other.data, size);\n        cout << "Copy constructor" << endl;\n    }\n    \n    // Move constructor\n    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n        cout << "Move constructor" << endl;\n    }\n    \n    // Move assignment operator\n    Buffer& operator=(Buffer&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            size = other.size;\n            other.data = nullptr;\n            other.size = 0;\n            cout << "Move assignment" << endl;\n        }\n        return *this;\n    }\n};\n\nint main() {\n    Buffer b1(100);\n    Buffer b2 = move(b1);  // Move constructor\n    Buffer b3(50);\n    b3 = move(b2);         // Move assignment\n    \n    return 0;\n}',
  hint: 'Move semantics improve performance by transferring resources instead of copying.'
},
{
  id: 'cpp_oop_21',
  topicId: 'cpp_oop',
  question: 'Create a class with static factory method.',
  mathSolution: 'Static method creates and returns class instances.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Color {\nprivate:\n    int r, g, b;\n    \n    // Private constructor\n    Color(int red, int green, int blue) : r(red), g(green), b(blue) {}\n    \npublic:\n    // Factory methods\n    static Color red() {\n        return Color(255, 0, 0);\n    }\n    \n    static Color green() {\n        return Color(0, 255, 0);\n    }\n    \n    static Color blue() {\n        return Color(0, 0, 255);\n    }\n    \n    static Color white() {\n        return Color(255, 255, 255);\n    }\n    \n    static Color black() {\n        return Color(0, 0, 0);\n    }\n    \n    static Color custom(int red, int green, int blue) {\n        return Color(red, green, blue);\n    }\n    \n    void display() {\n        cout << "RGB(" << r << ", " << g << ", " << b << ")" << endl;\n    }\n};\n\nint main() {\n    Color c1 = Color::red();\n    Color c2 = Color::green();\n    Color c3 = Color::custom(100, 150, 200);\n    \n    c1.display();\n    c2.display();\n    c3.display();\n    \n    return 0;\n}',
  hint: 'Factory pattern centralizes object creation logic.'
},
{
  id: 'cpp_oop_22',
  topicId: 'cpp_oop',
  question: 'Create a singleton class pattern.',
  mathSolution: 'Ensures only one instance of class exists.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass DatabaseConnection {\nprivate:\n    static DatabaseConnection* instance;\n    bool connected;\n    \n    // Private constructor\n    DatabaseConnection() : connected(false) {\n        cout << "DatabaseConnection created" << endl;\n    }\n    \npublic:\n    // Delete copy constructor and assignment\n    DatabaseConnection(const DatabaseConnection&) = delete;\n    DatabaseConnection& operator=(const DatabaseConnection&) = delete;\n    \n    static DatabaseConnection* getInstance() {\n        if (instance == nullptr) {\n            instance = new DatabaseConnection();\n        }\n        return instance;\n    }\n    \n    void connect() {\n        if (!connected) {\n            connected = true;\n            cout << "Connected to database" << endl;\n        }\n    }\n    \n    void disconnect() {\n        if (connected) {\n            connected = false;\n            cout << "Disconnected from database" << endl;\n        }\n    }\n    \n    void query(const string& sql) {\n        if (connected) {\n            cout << "Executing: " << sql << endl;\n        } else {\n            cout << "Not connected!" << endl;\n        }\n    }\n};\n\nDatabaseConnection* DatabaseConnection::instance = nullptr;\n\nint main() {\n    DatabaseConnection* db1 = DatabaseConnection::getInstance();\n    DatabaseConnection* db2 = DatabaseConnection::getInstance();\n    \n    cout << "Same instance? " << (db1 == db2 ? "Yes" : "No") << endl;\n    \n    db1->connect();\n    db1->query("SELECT * FROM users");\n    \n    return 0;\n}',
  hint: 'Singleton ensures only one instance exists globally.'
},
{
  id: 'cpp_oop_23',
  topicId: 'cpp_oop',
  question: 'Create a class with nested class (inner class).',
  mathSolution: 'Class defined inside another class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass LinkedList {\nprivate:\n    class Node {\n    public:\n        int data;\n        Node* next;\n        Node(int val) : data(val), next(nullptr) {}\n    };\n    \n    Node* head;\n    \npublic:\n    LinkedList() : head(nullptr) {}\n    \n    void insert(int val) {\n        Node* newNode = new Node(val);\n        newNode->next = head;\n        head = newNode;\n    }\n    \n    // Iterator class\n    class Iterator {\n    private:\n        Node* current;\n    public:\n        Iterator(Node* node) : current(node) {}\n        \n        int operator*() { return current->data; }\n        \n        Iterator& operator++() {\n            current = current->next;\n            return *this;\n        }\n        \n        bool operator!=(const Iterator& other) {\n            return current != other.current;\n        }\n    };\n    \n    Iterator begin() { return Iterator(head); }\n    Iterator end() { return Iterator(nullptr); }\n    \n    ~LinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    LinkedList list;\n    list.insert(10);\n    list.insert(20);\n    list.insert(30);\n    \n    for (int val : list) {\n        cout << val << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Nested classes are used for helper classes closely tied to outer class.'
},
{
  id: 'cpp_oop_24',
  topicId: 'cpp_oop',
  question: 'Use virtual destructor for proper cleanup of derived objects.',
  mathSolution: 'Virtual destructor ensures derived destructor is called.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    virtual ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\nprivate:\n    int* data;\n    \npublic:\n    Derived() {\n        data = new int[100];\n        cout << "Derived constructor, allocated memory" << endl;\n    }\n    \n    ~Derived() {\n        delete[] data;\n        cout << "Derived destructor, freed memory" << endl;\n    }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    delete ptr;  // Calls Derived destructor then Base destructor\n    \n    return 0;\n}',
  hint: 'Always make destructor virtual in polymorphic base classes.'
},
{
  "id": "cpp_oop_25",
  "topicId": "cpp_oop",
  "question": "Create RAII (Resource Acquisition Is Initialization) class.",
  "mathSolution": "Resource management using constructor/destructor.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <cstdio>\nusing namespace std;\n\nclass FileHandler {\nprivate:\n    FILE* file;\n    string filename;\n    \npublic:\n    FileHandler(const string& name, const string& mode) : filename(name) {\n        const char* m = mode.c_str();\n        file = fopen(name.c_str(), m);\n        if (file) {\n            cout << \"File '\" << filename << \"' opened successfully\" << endl;\n        } else {\n            cout << \"Failed to open file\" << endl;\n        }\n    }\n    \n    ~FileHandler() {\n        if (file) {\n            fclose(file);\n            cout << \"File '\" << filename << \"' closed\" << endl;\n        }\n    }\n    \n    void write(const string& text) {\n        if (file) {\n            fprintf(file, \"%s\\n\", text.c_str());\n        }\n    }\n    \n    // Prevent copying\n    FileHandler(const FileHandler&) = delete;\n    FileHandler& operator=(const FileHandler&) = delete;\n    \n    // Allow moving\n    FileHandler(FileHandler&& other) noexcept : file(other.file), filename(other.filename) {\n        other.file = nullptr;\n    }\n};\n\nint main() {\n    {\n        FileHandler fh(\"test.txt\", \"w\");\n        fh.write(\"Hello RAII!\");\n        // File automatically closed when fh goes out of scope\n    }\n    cout << \"File already closed\" << endl;\n    \n    return 0;\n}",
  "hint": "RAII ensures resources are properly released when objects go out of scope."
},
{
  "id": "cpp_oop_26",
  "topicId": "cpp_oop",
  "question": "Use dynamic_cast for safe downcasting.",
  "mathSolution": "dynamic_cast returns null or throws bad_cast for invalid casts.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << \"Drawing shape\" << endl; }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << \"Drawing circle\" << endl; }\n    void radius() { cout << \"Circle radius method\" << endl; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << \"Drawing square\" << endl; }\n    void side() { cout << \"Square side method\" << endl; }\n};\n\nint main() {\n    Shape* shapePtr = new Circle();\n    \n    // Downcast with dynamic_cast\n    Circle* circlePtr = dynamic_cast<Circle*>(shapePtr);\n    if (circlePtr) {\n        cout << \"Successfully cast to Circle\" << endl;\n        circlePtr->radius();\n    }\n    \n    // Invalid cast returns nullptr\n    Square* squarePtr = dynamic_cast<Square*>(shapePtr);\n    if (squarePtr) {\n        cout << \"This won't print\" << endl;\n    } else {\n        cout << \"Invalid cast to Square\" << endl;\n    }\n    \n    delete shapePtr;\n    \n    return 0;\n}",
  "hint": "dynamic_cast requires at least one virtual function in base class."
},
{
  id: 'cpp_oop_27',
  topicId: 'cpp_oop',
  question: 'Use typeid to get runtime type information.',
  mathSolution: 'typeid returns type_info object for polymorphic types.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived1 : public Base {};\nclass Derived2 : public Base {};\n\nint main() {\n    Base* b1 = new Derived1();\n    Base* b2 = new Derived2();\n    \n    cout << "Type of b1: " << typeid(*b1).name() << endl;\n    cout << "Type of b2: " << typeid(*b2).name() << endl;\n    \n    if (typeid(*b1) == typeid(Derived1)) {\n        cout << "b1 points to Derived1" << endl;\n    }\n    \n    if (typeid(*b2) == typeid(Derived2)) {\n        cout << "b2 points to Derived2" << endl;\n    }\n    \n    delete b1;\n    delete b2;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI to be enabled.'
},
{
  id: 'cpp_oop_28',
  topicId: 'cpp_oop',
  question: 'Create template class for generic data structures.',
  mathSolution: 'Template classes work with any data type.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nclass Stack {\nprivate:\n    static const int MAX = 100;\n    T arr[MAX];\n    int top;\n    \npublic:\n    Stack() : top(-1) {}\n    \n    void push(T value) {\n        if (top < MAX - 1) {\n            arr[++top] = value;\n        }\n    }\n    \n    T pop() {\n        if (top >= 0) {\n            return arr[top--];\n        }\n        return T();\n    }\n    \n    T peek() {\n        if (top >= 0) return arr[top];\n        return T();\n    }\n    \n    bool isEmpty() { return top == -1; }\n    int size() { return top + 1; }\n};\n\nint main() {\n    Stack<int> intStack;\n    intStack.push(10);\n    intStack.push(20);\n    intStack.push(30);\n    \n    cout << "Int stack pop: " << intStack.pop() << endl;\n    \n    Stack<string> stringStack;\n    stringStack.push("Hello");\n    stringStack.push("World");\n    \n    cout << "String stack pop: " << stringStack.pop() << endl;\n    \n    return 0;\n}',
  hint: 'Template classes are defined with template<typename T> before class.'
},
{
  id: 'cpp_oop_29',
  topicId: 'cpp_oop',
  question: 'Create class with constexpr constructor (C++11).',
  mathSolution: 'constexpr constructor creates compile-time constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    constexpr Point(int a, int b) : x(a), y(b) {}\n    \n    constexpr int getX() const { return x; }\n    constexpr int getY() const { return y; }\n    \n    constexpr Point operator+(const Point& other) const {\n        return Point(x + other.x, y + other.y);\n    }\n};\n\nint main() {\n    constexpr Point p1(10, 20);\n    constexpr Point p2(5, 5);\n    constexpr Point p3 = p1 + p2;\n    \n    cout << "p3: (" << p3.getX() << ", " << p3.getY() << ")" << endl;\n    \n    // Compile-time array size\n    int arr[p3.getX()];\n    cout << "Array size: " << sizeof(arr) / sizeof(arr[0]) << endl;\n    \n    return 0;\n}',
  hint: 'constexpr objects and functions are evaluated at compile time.'
},
{
  id: 'cpp_oop_30',
  topicId: 'cpp_oop',
  question: 'Use final specifier to prevent inheritance.',
  mathSolution: 'final keyword prevents further overriding or inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void display() {\n        cout << "Base display" << endl;\n    }\n};\n\nclass Derived final : public Base {\npublic:\n    void display() override {\n        cout << "Derived display" << endl;\n    }\n};\n\n// class Further : public Derived { };  // Error: Derived is final\n\nclass Shape final {\n    // This class cannot be inherited\n};\n\nclass AnotherBase {\npublic:\n    virtual void process() final {\n        cout << "Final method cannot be overridden" << endl;\n    }\n    \n    virtual void calculate() {\n        cout << "Can be overridden" << endl;\n    }\n};\n\nclass AnotherDerived : public AnotherBase {\npublic:\n    // void process() override { }  // Error: process is final\n    void calculate() override {\n        cout << "Overridden calculate" << endl;\n    }\n};\n\nint main() {\n    Derived d;\n    d.display();\n    \n    AnotherDerived ad;\n    ad.process();\n    ad.calculate();\n    \n    return 0;\n}',
  hint: 'final prevents inheritance of class or overriding of virtual function.'
},
{
  id: 'cpp_oop_31',
  topicId: 'cpp_oop',
  question: 'Use override specifier for virtual functions.',
  mathSolution: 'override ensures function is overriding a virtual from base.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void func1() { cout << "Base func1" << endl; }\n    virtual void func2(int x) { cout << "Base func2: " << x << endl; }\n    virtual void func3() { cout << "Base func3" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    void func1() override {\n        cout << "Derived func1" << endl;\n    }\n    \n    void func2(int x) override {\n        cout << "Derived func2: " << x * 2 << endl;\n    }\n    \n    // void func3(int x) override { }  // Error: no matching virtual func\n    \n    // Compiler will catch signature mismatches\n};\n\nint main() {\n    Derived d;\n    d.func1();\n    d.func2(5);\n    \n    return 0;\n}',
  hint: 'override helps catch errors when base class virtual function signature changes.'
},
{
  id: 'cpp_oop_32',
  topicId: 'cpp_oop',
  question: 'Create class with explicit constructor to prevent implicit conversion.',
  mathSolution: 'explicit prevents automatic type conversions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Integer {\nprivate:\n    int value;\n    \npublic:\n    explicit Integer(int v) : value(v) {\n        cout << "Integer created with value: " << v << endl;\n    }\n    \n    int getValue() const { return value; }\n};\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    explicit Complex(double r) : real(r), imag(0) {}\n    Complex(double r, double i) : real(r), imag(i) {}\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    // Integer i1 = 10;  // Error: implicit conversion not allowed\n    Integer i1(10);      // OK: explicit constructor\n    Integer i2 = Integer(20);  // OK: explicit\n    \n    // Complex c1 = 3.14;  // Error: explicit constructor\n    Complex c1(3.14);      // OK: explicit\n    Complex c2(3.14, 2.5); // OK: not explicit\n    \n    cout << "Integer value: " << i1.getValue() << endl;\n    c1.display();\n    c2.display();\n    \n    return 0;\n}',
  hint: 'explicit prevents unwanted implicit conversions that can lead to bugs.'
},
{
  id: 'cpp_oop_33',
  topicId: 'cpp_oop',
  question: 'Use default and delete keywords for special member functions.',
  mathSolution: 'default generates default implementation; delete removes function.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass DefaultExample {\npublic:\n    DefaultExample() = default;  // Use compiler-generated default constructor\n    ~DefaultExample() = default; // Use compiler-generated destructor\n    \n    // Copy operations\n    DefaultExample(const DefaultExample&) = default;\n    DefaultExample& operator=(const DefaultExample&) = default;\n    \n    // Move operations (C++11)\n    DefaultExample(DefaultExample&&) = default;\n    DefaultExample& operator=(DefaultExample&&) = default;\n};\n\nclass NonCopyable {\npublic:\n    NonCopyable() = default;\n    ~NonCopyable() = default;\n    \n    // Delete copy operations\n    NonCopyable(const NonCopyable&) = delete;\n    NonCopyable& operator=(const NonCopyable&) = delete;\n    \n    // Allow move (optional)\n    NonCopyable(NonCopyable&&) = default;\n    NonCopyable& operator=(NonCopyable&&) = default;\n};\n\nint main() {\n    DefaultExample ex1;\n    DefaultExample ex2 = ex1;  // Copy allowed\n    \n    NonCopyable nc1;\n    // NonCopyable nc2 = nc1;  // Error: copy constructor is deleted\n    \n    cout << "Default and delete usage demonstrated" << endl;\n    \n    return 0;\n}',
  hint: '=default requests compiler-generated version; =delete disables the function.'
},
{
  id: 'cpp_oop_34',
  topicId: 'cpp_oop',
  question: 'Create polymorphic container using base class pointers.',
  mathSolution: 'Base pointers can point to derived objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Employee {\nprotected:\n    string name;\n    double salary;\n    \npublic:\n    Employee(string n, double s) : name(n), salary(s) {}\n    virtual double calculateBonus() { return salary * 0.05; }\n    virtual void display() {\n        cout << name << ": $" << salary << ", Bonus: $" << calculateBonus() << endl;\n    }\n    virtual ~Employee() {}\n};\n\nclass Manager : public Employee {\nprivate:\n    int teamSize;\n    \npublic:\n    Manager(string n, double s, int ts) : Employee(n, s), teamSize(ts) {}\n    \n    double calculateBonus() override {\n        return salary * 0.10 + teamSize * 500;\n    }\n    \n    void display() override {\n        cout << "Manager " << name << ": $" << salary << ", Bonus: $" << calculateBonus() << endl;\n    }\n};\n\nclass Developer : public Employee {\nprivate:\n    string language;\n    \npublic:\n    Developer(string n, double s, string lang) : Employee(n, s), language(lang) {}\n    \n    double calculateBonus() override {\n        return salary * 0.08;\n    }\n};\n\nint main() {\n    vector<Employee*> employees;\n    employees.push_back(new Employee("Alice", 50000));\n    employees.push_back(new Manager("Bob", 80000, 5));\n    employees.push_back(new Developer("Charlie", 60000, "C++"));\n    \n    for (Employee* e : employees) {\n        e->display();\n        delete e;\n    }\n    \n    return 0;\n}',
  hint: 'Base class pointers enable polymorphic behavior for derived objects.'
},
{
  id: 'cpp_oop_35',
  topicId: 'cpp_oop',
  question: 'Create class with private static member function.',
  mathSolution: 'Static member functions can be private for internal use.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\nprivate:\n    static int instanceCount;\n    \n    Logger() {\n        instanceCount++;\n    }\n    \n    static void logMessage(const string& msg) {\n        cout << "[LOG] " << msg << endl;\n    }\n    \npublic:\n    static Logger* getInstance() {\n        logMessage("Creating logger instance");\n        return new Logger();\n    }\n    \n    static int getInstanceCount() {\n        return instanceCount;\n    }\n    \n    void info(const string& msg) {\n        cout << "[INFO] " << msg << endl;\n    }\n};\n\nint Logger::instanceCount = 0;\n\nint main() {\n    Logger* logger1 = Logger::getInstance();\n    Logger* logger2 = Logger::getInstance();\n    \n    cout << "Instances created: " << Logger::getInstanceCount() << endl;\n    \n    logger1->info("Application started");\n    \n    delete logger1;\n    delete logger2;\n    \n    return 0;\n}',
  hint: 'Private static functions are useful for internal implementation details.'
},
{
  "id": "cpp_oop_36",
  "topicId": "cpp_oop",
  "question": "Use pointer to member function for callback.",
  "mathSolution": "Store and call member functions via pointers.",
  "codeSolution": "#include <iostream>\n#include <vector>\n#include <string>\n#include <utility>\nusing namespace std;\n\nclass Button {\nprivate:\n    string label;\n    \npublic:\n    Button(string lbl) : label(lbl) {}\n    \n    void onClick() {\n        cout << \"Button '\" << label << \"' clicked\" << endl;\n    }\n    \n    void onHover() {\n        cout << \"Button '\" << label << \"' hovered\" << endl;\n    }\n};\n\nclass EventHandler {\nprivate:\n    vector<pair<Button*, void(Button::*)()>> handlers;\n    \npublic:\n    void addHandler(Button* btn, void(Button::*handler)()) {\n        handlers.push_back({btn, handler});\n    }\n    \n    void triggerAll() {\n        for (auto& handlerPair : handlers) {\n            Button* btn = handlerPair.first;\n            void(Button::*func)() = handlerPair.second;\n            (btn->*func)();\n        }\n    }\n};\n\nint main() {\n    Button btn1(\"OK\");\n    Button btn2(\"Cancel\");\n    \n    EventHandler handler;\n    handler.addHandler(&btn1, &Button::onClick);\n    handler.addHandler(&btn2, &Button::onHover);\n    \n    handler.triggerAll();\n    \n    return 0;\n}",
  "hint": "Pointer to member function syntax: (object->*funcPtr)()"
},
{
  id: 'cpp_oop_37',
  topicId: 'cpp_oop',
  question: 'Create class with mutable member variable.',
  mathSolution: 'mutable allows modification in const member functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Cache {\nprivate:\n    int data;\n    mutable int accessCount;  // Can be modified in const functions\n    \npublic:\n    Cache(int d) : data(d), accessCount(0) {}\n    \n    int getData() const {\n        accessCount++;  // Allowed because mutable\n        return data;\n    }\n    \n    int getAccessCount() const {\n        return accessCount;\n    }\n    \n    void setData(int d) {\n        data = d;\n    }\n};\n\nint main() {\n    const Cache cache(42);\n    \n    cout << "Data: " << cache.getData() << endl;\n    cout << "Data: " << cache.getData() << endl;\n    cout << "Data: " << cache.getData() << endl;\n    \n    cout << "Access count: " << cache.getAccessCount() << endl;\n    \n    return 0;\n}',
  hint: 'mutable is useful for caching, logging, and mutex locks in const functions.'
},
{
  id: 'cpp_oop_38',
  topicId: 'cpp_oop',
  question: 'Create class with reference member and member initializer list.',
  mathSolution: 'Reference members must be initialized in initializer list.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\npublic:\n    void log(const string& msg) {\n        cout << "[LOG] " << msg << endl;\n    }\n};\n\nclass Service {\nprivate:\n    Logger& logger;  // Reference member\n    string name;\n    const int id;    // const member\n    \npublic:\n    // Reference and const must be initialized in initializer list\n    Service(string n, int i, Logger& log) : name(n), id(i), logger(log) {\n        // Cannot assign reference or const in constructor body\n    }\n    \n    void process() {\n        logger.log("Processing " + name + " (ID: " + to_string(id) + ")");\n    }\n};\n\nint main() {\n    Logger logger;\n    Service svc("Database", 1001, logger);\n    svc.process();\n    \n    return 0;\n}',
  hint: 'Reference and const members must be initialized in initializer list, not in body.'
},
{
  id: 'cpp_oop_39',
  topicId: 'cpp_oop',
  question: 'Implement class with private inheritance (has-a relationship).',
  mathSolution: 'Private inheritance is implementation inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Engine {\npublic:\n    void start() { cout << "Engine started" << endl; }\n    void stop() { cout << "Engine stopped" << endl; }\n};\n\nclass Car : private Engine {  // Private inheritance\npublic:\n    void drive() {\n        start();    // Can access public methods of Engine\n        cout << "Car is driving" << endl;\n        stop();\n    }\n};\n\nclass SportsCar : public Car {\npublic:\n    void race() {\n        // Cannot access Engine methods here (private inheritance)\n        cout << "Racing!" << endl;\n    }\n};\n\nint main() {\n    Car myCar;\n    myCar.drive();\n    \n    // myCar.start();  // Error: start is private due to private inheritance\n    \n    return 0;\n}',
  hint: 'Private inheritance is recommended only for strict has-a relationships.'
},
{
  id: 'cpp_oop_40',
  topicId: 'cpp_oop',
  question: 'Create class with protected inheritance.',
  mathSolution: 'Protected inheritance makes public/protected members protected in derived.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void publicFunc() { cout << "Public function" << endl; }\nprotected:\n    void protectedFunc() { cout << "Protected function" << endl; }\nprivate:\n    void privateFunc() { cout << "Private function" << endl; }\n};\n\nclass Derived : protected Base {\npublic:\n    void accessBase() {\n        publicFunc();    // OK: becomes protected in Derived\n        protectedFunc(); // OK: becomes protected in Derived\n        // privateFunc(); // Error: private in Base\n    }\n};\n\nclass Further : public Derived {\npublic:\n    void accessBaseFurther() {\n        publicFunc();    // OK: protected in Derived, accessible here\n        protectedFunc(); // OK: protected in Derived, accessible here\n    }\n};\n\nint main() {\n    Derived d;\n    // d.publicFunc();   // Error: publicFunc is protected in Derived\n    d.accessBase();      // OK: public member of Derived\n    \n    return 0;\n}',
  hint: 'Protected inheritance is rarely used; prefer composition over protected inheritance.'
},
//constructor
{
  id: 'cpp_constructors_1',
  topicId: 'cpp_constructors',
  question: 'Create a class with a default constructor (no parameters).',
  mathSolution: 'Default constructor initializes object with default values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    // Default constructor\n    Student() {\n        name = "Unknown";\n        age = 0;\n        cout << "Default constructor called" << endl;\n    }\n    \n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    Student s1;  // Default constructor called\n    s1.display();\n    return 0;\n}',
  hint: 'Default constructor has no parameters and is called when object is created without arguments.'
},
{
  id: 'cpp_constructors_2',
  topicId: 'cpp_constructors',
  question: 'Create a class with a parameterized constructor.',
  mathSolution: 'Parameterized constructor allows initialization with specific values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double length, width;\n    \npublic:\n    // Parameterized constructor\n    Rectangle(double l, double w) {\n        length = l;\n        width = w;\n        cout << "Rectangle created: " << length << "x" << width << endl;\n    }\n    \n    double area() {\n        return length * width;\n    }\n};\n\nint main() {\n    Rectangle rect1(5.0, 3.0);\n    Rectangle rect2(10.0, 4.0);\n    \n    cout << "Area: " << rect1.area() << endl;\n    cout << "Area: " << rect2.area() << endl;\n    \n    return 0;\n}',
  hint: 'Parameterized constructors accept arguments to initialize object with custom values.'
},
{
  id: 'cpp_constructors_3',
  topicId: 'cpp_constructors',
  question: 'Use constructor initializer list instead of assignment in body.',
  mathSolution: 'Initializer list initializes members before constructor body executes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    const int x;  // const member must use initializer list\n    const int y;\n    int& ref;     // reference must use initializer list\n    \npublic:\n    // Initializer list (more efficient)\n    Point(int a, int b, int& r) : x(a), y(b), ref(r) {\n        cout << "Point created at (" << x << "," << y << ")" << endl;\n    }\n    \n    void display() {\n        cout << "Point(" << x << "," << y << "), ref = " << ref << endl;\n    }\n};\n\nint main() {\n    int value = 100;\n    Point p(10, 20, value);\n    p.display();\n    \n    return 0;\n}',
  hint: 'Use initializer list for const members, references, and for efficiency.'
},
{
  id: 'cpp_constructors_4',
  topicId: 'cpp_constructors',
  question: 'Create a class with multiple constructors (constructor overloading).',
  mathSolution: 'Multiple constructors with different parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int length, width, height;\n    \npublic:\n    // Default constructor\n    Box() : length(1), width(1), height(1) {\n        cout << "Default box created" << endl;\n    }\n    \n    // Constructor with one parameter (cube)\n    Box(int side) : length(side), width(side), height(side) {\n        cout << "Cube box created: " << side << endl;\n    }\n    \n    // Constructor with three parameters\n    Box(int l, int w, int h) : length(l), width(w), height(h) {\n        cout << "Box created: " << l << "x" << w << "x" << h << endl;\n    }\n    \n    int volume() {\n        return length * width * height;\n    }\n};\n\nint main() {\n    Box b1;\n    Box b2(5);\n    Box b3(4, 3, 2);\n    \n    cout << "Volume b2: " << b2.volume() << endl;\n    \n    return 0;\n}',
  hint: 'Constructor overloading provides multiple ways to create objects.'
},
{
  id: 'cpp_constructors_5',
  topicId: 'cpp_constructors',
  question: 'Use default parameters in constructor.',
  mathSolution: 'Default parameters reduce number of constructors needed.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Timer {\nprivate:\n    int hours, minutes, seconds;\n    \npublic:\n    // Constructor with default parameters\n    Timer(int h = 0, int m = 0, int s = 0) : hours(h), minutes(m), seconds(s) {\n        cout << "Timer created: " << hours << "h " << minutes << "m " << seconds << "s" << endl;\n    }\n    \n    int totalSeconds() {\n        return hours * 3600 + minutes * 60 + seconds;\n    }\n};\n\nint main() {\n    Timer t1;                 // 0,0,0\n    Timer t2(2);              // 2,0,0\n    Timer t3(1, 30);          // 1,30,0\n    Timer t4(0, 10, 15);      // 0,10,15\n    \n    cout << "t2 total seconds: " << t2.totalSeconds() << endl;\n    \n    return 0;\n}',
  hint: 'Default parameters must be placed from rightmost to leftmost.'
},
{
  id: 'cpp_constructors_6',
  topicId: 'cpp_constructors',
  question: 'Create a copy constructor for deep copying.',
  mathSolution: 'Copy constructor creates a new object as copy of existing object.',
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char* str;\n    int length;\n    \npublic:\n    // Constructor\n    String(const char* s) {\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n        cout << "String created: " << str << endl;\n    }\n    \n    // Copy constructor (deep copy)\n    String(const String& other) {\n        length = other.length;\n        str = new char[length + 1];\n        strcpy(str, other.str);\n        cout << "Copy constructor called: " << str << endl;\n    }\n    \n    // Destructor\n    ~String() {\n        delete[] str;\n        cout << "String destroyed" << endl;\n    }\n    \n    void display() {\n        cout << str << endl;\n    }\n    \n    void modify(const char* s) {\n        delete[] str;\n        length = strlen(s);\n        str = new char[length + 1];\n        strcpy(str, s);\n    }\n};\n\nint main() {\n    String s1("Hello");\n    String s2 = s1;  // Copy constructor called\n    \n    s1.display();\n    s2.display();\n    \n    s1.modify("World");\n    \n    cout << "After modifying s1:\\n";\n    s1.display();\n    s2.display();  // Unchanged - deep copy\n    \n    return 0;\n}',
  hint: 'Copy constructor is called when object is passed by value or initialized from another object.'
},
{
  id: 'cpp_constructors_7',
  topicId: 'cpp_constructors',
  question: 'Prevent copying by deleting copy constructor.',
  mathSolution: 'Delete copy constructor to make class non-copyable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass UniqueResource {\nprivate:\n    int* data;\n    \npublic:\n    UniqueResource(int size) {\n        data = new int[size];\n        cout << "Resource allocated" << endl;\n    }\n    \n    ~UniqueResource() {\n        delete[] data;\n        cout << "Resource freed" << endl;\n    }\n    \n    // Delete copy constructor and copy assignment\n    UniqueResource(const UniqueResource&) = delete;\n    UniqueResource& operator=(const UniqueResource&) = delete;\n    \n    // Move constructor\n    UniqueResource(UniqueResource&& other) noexcept : data(other.data) {\n        other.data = nullptr;\n        cout << "Resource moved" << endl;\n    }\n    \n    void use() {\n        cout << "Using resource" << endl;\n    }\n};\n\nint main() {\n    UniqueResource res1(100);\n    UniqueResource res2 = move(res1);  // Move, not copy\n    \n    // UniqueResource res3 = res1;  // Error: copy constructor is deleted\n    \n    res2.use();\n    \n    return 0;\n}',
  hint: 'Delete copy constructor to enforce move-only or singleton semantics.'
},
{
  id: 'cpp_constructors_8',
  topicId: 'cpp_constructors',
  question: 'Create a move constructor for efficient transfer of resources.',
  mathSolution: 'Move constructor transfers ownership of resources.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Buffer {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    // Constructor\n    Buffer(size_t s) : size(s) {\n        data = new int[size];\n        cout << "Buffer of size " << size << " allocated" << endl;\n    }\n    \n    // Destructor\n    ~Buffer() {\n        delete[] data;\n        cout << "Buffer destroyed" << endl;\n    }\n    \n    // Copy constructor (deep copy)\n    Buffer(const Buffer& other) : size(other.size) {\n        data = new int[size];\n        copy(other.data, other.data + size, data);\n        cout << "Copy constructor (deep copy)" << endl;\n    }\n    \n    // Move constructor\n    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n        cout << "Move constructor (transfer ownership)" << endl;\n    }\n    \n    void fill(int value) {\n        for (size_t i = 0; i < size; i++) data[i] = value;\n    }\n    \n    void display() {\n        cout << "Buffer[" << size << "]: ";\n        for (size_t i = 0; i < min(size, (size_t)5); i++) {\n            cout << data[i] << " ";\n        }\n        if (size > 5) cout << "...";\n        cout << endl;\n    }\n};\n\nint main() {\n    Buffer b1(1000);\n    b1.fill(42);\n    \n    Buffer b2 = move(b1);  // Move constructor\n    \n    b2.display();\n    // b1 is now in valid but unspecified state\n    \n    return 0;\n}',
  hint: 'Move constructor is called when object is initialized with std::move().'
},
{
  id: 'cpp_constructors_9',
  topicId: 'cpp_constructors',
  question: 'Use delegating constructor to call another constructor.',
  mathSolution: 'One constructor can call another constructor in same class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Employee {\nprivate:\n    string name;\n    int id;\n    double salary;\n    string department;\n    \npublic:\n    // Primary constructor\n    Employee(string n, int i, double s, string d) \n        : name(n), id(i), salary(s), department(d) {\n        cout << \"Full constructor called\" << endl;\n    }\n    \n    // Delegating constructor (name only)\n    Employee(string n) : Employee(n, 0, 0.0, \"Unknown\") {\n        cout << \"Name-only constructor delegating\" << endl;\n    }\n    \n    // Delegating constructor (name and id)\n    Employee(string n, int i) : Employee(n, i, 0.0, \"Unknown\") {\n        cout << \"Name and ID constructor delegating\" << endl;\n    }\n    \n    // Delegating constructor (name, id, salary)\n    Employee(string n, int i, double s) : Employee(n, i, s, \"General\") {\n        cout << \"Salary constructor delegating\" << endl;\n    }\n    \n    void display() {\n        cout << name << \" (ID: \" << id << \") - $\" << salary << \", \" << department << endl;\n    }\n};\n\nint main() {\n    Employee e1(\"John\");\n    Employee e2(\"Alice\", 101);\n    Employee e3(\"Bob\", 102, 50000);\n    Employee e4(\"Charlie\", 103, 60000, \"IT\");\n    \n    cout << \"\\n--- Employee Details ---\" << endl;\n    e1.display();\n    e2.display();\n    e3.display();\n    e4.display();\n    \n    return 0;\n}',
  hint: 'Delegating constructors reduce code duplication and improve maintainability.'
},
{
  id: 'cpp_constructors_10',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that throws an exception on invalid input.',
  mathSolution: 'Constructors can throw exceptions to indicate failure.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    string accountNumber;\n    double balance;\n    \npublic:\n    BankAccount(string accNum, double initialBalance) \n        : accountNumber(accNum), balance(initialBalance) {\n        if (accNum.empty()) {\n            throw invalid_argument(\"Account number cannot be empty\");\n        }\n        if (initialBalance < 0) {\n            throw invalid_argument(\"Initial balance cannot be negative\");\n        }\n        cout << \"Account \" << accountNumber << \" created with $\" << balance << endl;\n    }\n    \n    void deposit(double amount) {\n        if (amount <= 0) throw invalid_argument(\"Deposit amount must be positive\");\n        balance += amount;\n    }\n    \n    void withdraw(double amount) {\n        if (amount <= 0) throw invalid_argument(\"Withdrawal amount must be positive\");\n        if (amount > balance) throw runtime_error(\"Insufficient funds\");\n        balance -= amount;\n    }\n    \n    double getBalance() const { return balance; }\n};\n\nint main() {\n    try {\n        BankAccount acc1(\"12345\", 1000);\n        BankAccount acc2(\"\", 500);  // Will throw\n    } catch (const invalid_argument& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    \n    try {\n        BankAccount acc3(\"67890\", -100);  // Will throw\n    } catch (const invalid_argument& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Throwing exceptions in constructor prevents creation of invalid objects.'
},
{
  id: 'cpp_constructors_11',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes const members using initializer list.',
  mathSolution: 'const members must be initialized in initializer list.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Config {\nprivate:\n    const string VERSION;\n    const int MAX_USERS;\n    const double PI;\n    \npublic:\n    // Const members must use initializer list\n    Config(string version, int maxUsers, double pi) \n        : VERSION(version), MAX_USERS(maxUsers), PI(pi) {\n        cout << \"Configuration created\" << endl;\n    }\n    \n    void display() const {\n        cout << \"Version: \" << VERSION << endl;\n        cout << \"Max Users: \" << MAX_USERS << endl;\n        cout << \"PI: \" << PI << endl;\n    }\n};\n\nint main() {\n    Config config(\"1.0\", 1000, 3.14159);\n    config.display();\n    \n    return 0;\n}',
  hint: 'const members can only be assigned in initializer list, not in constructor body.'
},
{
  id: 'cpp_constructors_12',
  topicId: 'cpp_constructors',
  question: 'Initialize reference members using initializer list.',
  mathSolution: 'References must be initialized in initializer list.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Logger {\npublic:\n    void log(const string& msg) {\n        cout << \"[LOG] \" << msg << endl;\n    }\n};\n\nclass DataProcessor {\nprivate:\n    Logger& logger;  // Reference member\n    string name;\n    \npublic:\n    // Reference must be initialized in initializer list\n    DataProcessor(string n, Logger& log) : name(n), logger(log) {\n        cout << \"DataProcessor created: \" << name << endl;\n    }\n    \n    void process() {\n        logger.log(\"Processing data for \" + name);\n        // Processing logic...\n        logger.log(\"Processing complete for \" + name);\n    }\n};\n\nint main() {\n    Logger logger;\n    DataProcessor processor(\"Database\", logger);\n    processor.process();\n    \n    return 0;\n}',
  hint: 'Reference members must be initialized in initializer list, cannot be assigned in body.'
},
{
  id: 'cpp_constructors_13',
  topicId: 'cpp_constructors',
  question: 'Initialize base class constructor in derived class.',
  mathSolution: 'Derived class constructor calls base class constructor via initializer list.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    int year;\n    \npublic:\n    Vehicle(string b, int y) : brand(b), year(y) {\n        cout << \"Vehicle constructor called\" << endl;\n    }\n    \n    void display() {\n        cout << brand << \" \" << year << endl;\n    }\n};\n\nclass Car : public Vehicle {\nprivate:\n    string model;\n    \npublic:\n    Car(string b, string m, int y) : Vehicle(b, y), model(m) {\n        cout << \"Car constructor called\" << endl;\n    }\n    \n    void displayCar() {\n        cout << brand << \" \" << model << \" \" << year << endl;\n    }\n};\n\nclass SportsCar : public Car {\nprivate:\n    int topSpeed;\n    \npublic:\n    SportsCar(string b, string m, int y, int speed) : Car(b, m, y), topSpeed(speed) {\n        cout << \"SportsCar constructor called\" << endl;\n    }\n    \n    void displaySports() {\n        cout << brand << \" \" << model << \", \" << year << \", \" << topSpeed << \" km/h\" << endl;\n    }\n};\n\nint main() {\n    SportsCar ferrari(\"Ferrari\", \"F8\", 2023, 340);\n    ferrari.displaySports();\n    \n    return 0;\n}',
  hint: 'Base class constructor is called before derived class constructor body.'
},
{
  id: 'cpp_constructors_14',
  topicId: 'cpp_constructors',
  question: 'Create a constructor with explicit keyword to prevent implicit conversion.',
  mathSolution: 'explicit prevents compiler from using constructor for implicit conversions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Integer {\nprivate:\n    int value;\n    \npublic:\n    // Explicit constructor prevents implicit conversion\n    explicit Integer(int v) : value(v) {\n        cout << \"Integer created with value: \" << v << endl;\n    }\n    \n    int getValue() const { return value; }\n};\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    // Non-explicit constructor (implicit conversion allowed)\n    Complex(double r) : real(r), imag(0) {}\n    \n    Complex(double r, double i) : real(r), imag(i) {}\n    \n    void display() {\n        cout << real << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    // Integer i1 = 10;  // Error: implicit conversion not allowed\n    Integer i2(10);      // OK: explicit call\n    Integer i3 = Integer(20);  // OK: explicit construction\n    \n    Complex c1 = 5.5;     // OK: implicit conversion (constructor not explicit)\n    Complex c2(3.0, 4.0);\n    \n    cout << \"Integer value: \" << i2.getValue() << endl;\n    c1.display();\n    c2.display();\n    \n    return 0;\n}',
  hint: 'Use explicit to prevent unexpected implicit conversions that can cause bugs.'
},
{
  id: 'cpp_constructors_15',
  topicId: 'cpp_constructors',
  question: 'Create a class with static member initialization.',
  mathSolution: 'Static members are initialized outside the class definition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    static int totalObjects;\n    int id;\n    \npublic:\n    Counter() {\n        totalObjects++;\n        id = totalObjects;\n        cout << \"Object \" << id << \" created. Total: \" << totalObjects << endl;\n    }\n    \n    ~Counter() {\n        cout << \"Object \" << id << \" destroyed. Remaining: \" << --totalObjects << endl;\n    }\n    \n    static int getTotalObjects() {\n        return totalObjects;\n    }\n};\n\n// Static member initialization outside class\nint Counter::totalObjects = 0;\n\nint main() {\n    cout << \"Initial total: \" << Counter::getTotalObjects() << endl;\n    \n    Counter c1;\n    Counter c2;\n    {\n        Counter c3;\n        cout << \"Inside block, total: \" << Counter::getTotalObjects() << endl;\n    }\n    \n    cout << \"After block, total: \" << Counter::getTotalObjects() << endl;\n    \n    return 0;\n}',
  hint: 'Static members are shared across all instances and initialized outside class.'
},
{
  id: 'cpp_constructors_16',
  topicId: 'cpp_constructors',
  question: 'Use inline static member initialization (C++17).',
  mathSolution: 'Inline static members can be initialized inside class definition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Configuration {\npublic:\n    inline static string appName = "MyApplication";\n    inline static int version = 1;\n    inline static const double PI = 3.14159;\n    inline static const string author = "John Doe";\n    \n    static void showConfig() {\n        cout << appName << " v" << version << " by " << author << endl;\n    }\n};\n\nclass Counter {\nprivate:\n    inline static int count = 0;\n    int id;\n    \npublic:\n    Counter() : id(++count) {}\n    \n    static int getCount() { return count; }\n    int getId() const { return id; }\n};\n\nint main() {\n    Configuration::appName = "NewApp";\n    Configuration::showConfig();\n    \n    Counter c1, c2, c3;\n    cout << "Created " << Counter::getCount() << " objects" << endl;\n    \n    return 0;\n}',
  hint: 'C++17 allows inline static member initialization inside the class.'
},
{
  id: 'cpp_constructors_17',
  topicId: 'cpp_constructors',
  question: 'Create a constexpr constructor for compile-time objects.',
  mathSolution: 'constexpr constructor allows object creation at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    constexpr Point(int a, int b) : x(a), y(b) {}\n    \n    constexpr int getX() const { return x; }\n    constexpr int getY() const { return y; }\n    \n    constexpr Point operator+(const Point& other) const {\n        return Point(x + other.x, y + other.y);\n    }\n    \n    void display() const {\n        cout << \"(\" << x << \", \" << y << \")\" << endl;\n    }\n};\n\nint main() {\n    // Compile-time construction\n    constexpr Point p1(10, 20);\n    constexpr Point p2(5, 5);\n    constexpr Point p3 = p1 + p2;\n    \n    // Compile-time array size\n    int arr[p3.getX()];  // Valid if p3.getX() is constexpr\n    \n    cout << \"p3: \";\n    p3.display();\n    cout << \"Array size: \" << sizeof(arr)/sizeof(arr[0]) << endl;\n    \n    // Runtime construction also works\n    int a = 30, b = 40;\n    Point p4(a, b);\n    p4.display();\n    \n    return 0;\n}',
  hint: 'constexpr constructors enable compile-time object creation and compile-time computations.'
},
{
  id: 'cpp_constructors_18',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using uniform initialization {}.',
  mathSolution: 'Uniform initialization braces {} can be used to call constructors.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\n    double gpa;\n    \npublic:\n    Student(string n, int a, double g) : name(n), age(a), gpa(g) {\n        cout << \"Student created: \" << name << endl;\n    }\n    \n    void display() {\n        cout << name << \", \" << age << \", GPA: \" << gpa << endl;\n    }\n};\n\nclass Point {\nprivate:\n    int x, y;\n    \npublic:\n    Point(int a, int b) : x(a), y(b) {}\n    \n    void display() {\n        cout << \"Point(\" << x << \", \" << y << \")\" << endl;\n    }\n};\n\nint main() {\n    // Different initialization syntaxes\n    Student s1{\"Alice\", 20, 3.8};      // Uniform initialization\n    Student s2 = {\"Bob\", 22, 3.5};     // Copy list initialization\n    Student s3(\"Charlie\", 21, 3.9);    // Direct initialization\n    \n    vector<int> v{1, 2, 3, 4, 5};      // Initializer list\n    Point p{10, 20};\n    \n    s1.display();\n    s2.display();\n    s3.display();\n    p.display();\n    \n    return 0;\n}',
  hint: 'Uniform initialization {} works for arrays, containers, and custom classes.'
},
{
  id: 'cpp_constructors_19',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that takes initializer_list parameter.',
  mathSolution: 'initializer_list allows variable number of arguments.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\nusing namespace std;\n\nclass IntArray {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    // Constructor with initializer_list\n    IntArray(initializer_list<int> list) : size(list.size()) {\n        data = new int[size];\n        size_t i = 0;\n        for (int val : list) {\n            data[i++] = val;\n        }\n        cout << \"Array created with \" << size << \" elements\" << endl;\n    }\n    \n    ~IntArray() {\n        delete[] data;\n    }\n    \n    void display() {\n        cout << \"[\";\n        for (size_t i = 0; i < size; i++) {\n            cout << data[i];\n            if (i < size - 1) cout << \", \";\n        }\n        cout << \"]\" << endl;\n    }\n    \n    size_t getSize() const { return size; }\n};\n\nclass Matrix {\nprivate:\n    vector<vector<int>> data;\n    \npublic:\n    Matrix(initializer_list<initializer_list<int>> list) {\n        for (auto row : list) {\n            data.push_back(row);\n        }\n    }\n    \n    void display() {\n        for (auto& row : data) {\n            for (int val : row) {\n                cout << val << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    IntArray arr = {1, 2, 3, 4, 5};\n    arr.display();\n    \n    IntArray arr2{10, 20, 30};\n    arr2.display();\n    \n    Matrix mat = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    mat.display();\n    \n    return 0;\n}',
  hint: 'initializer_list constructors enable brace-initialization like arrays.'
},
{
  id: 'cpp_constructors_20',
  topicId: 'cpp_constructors',
  question: 'Create base and derived class constructors with different parameters.',
  mathSolution: 'Derived class constructor passes parameters to base constructor.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Employee {\nprotected:\n    string name;\n    int id;\n    \npublic:\n    Employee(string n, int i) : name(n), id(i) {\n        cout << \"Employee constructor: \" << name << \" (ID: \" << id << \")\" << endl;\n    }\n    \n    void display() {\n        cout << name << \" - ID: \" << id << endl;\n    }\n};\n\nclass Manager : public Employee {\nprivate:\n    int teamSize;\n    \npublic:\n    Manager(string n, int i, int ts) : Employee(n, i), teamSize(ts) {\n        cout << \"Manager constructor: team size \" << teamSize << endl;\n    }\n    \n    void display() {\n        cout << name << \" (Manager) - ID: \" << id << \", Team: \" << teamSize << endl;\n    }\n};\n\nclass Director : public Manager {\nprivate:\n    int budget;\n    \npublic:\n    Director(string n, int i, int ts, int b) : Manager(n, i, ts), budget(b) {\n        cout << \"Director constructor: budget $\" << budget << endl;\n    }\n    \n    void display() {\n        cout << name << \" (Director) - ID: \" << id \n             << \", Team: \" << teamSize << \", Budget: $\" << budget << endl;\n    }\n};\n\nint main() {\n    Director dir(\"Alice\", 1001, 10, 500000);\n    cout << \"\\n--- Details ---\" << endl;\n    dir.display();\n    \n    return 0;\n}',
  hint: 'Base class constructor is called before derived class members are initialized.'
},
{
  id: 'cpp_constructors_21',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that initializes array members.',
  mathSolution: 'Array members can be initialized in initializer list or loop.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass ScoreBoard {\nprivate:\n    int scores[5];\n    \npublic:\n    // Initialize array in constructor body\n    ScoreBoard() {\n        for (int i = 0; i < 5; i++) {\n            scores[i] = 0;\n        }\n        cout << \"ScoreBoard initialized with zeros\" << endl;\n    }\n    \n    // Initialize array with values\n    ScoreBoard(int s1, int s2, int s3, int s4, int s5) {\n        scores[0] = s1;\n        scores[1] = s2;\n        scores[2] = s3;\n        scores[3] = s4;\n        scores[4] = s5;\n        cout << \"ScoreBoard initialized with custom values\" << endl;\n    }\n    \n    void display() {\n        for (int i = 0; i < 5; i++) {\n            cout << scores[i] << \" \";\n        }\n        cout << endl;\n    }\n};\n\nclass Matrix {\nprivate:\n    int data[3][3];\n    \npublic:\n    // Initialize 2D array with values\n    Matrix(int arr[3][3]) {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                data[i][j] = arr[i][j];\n            }\n        }\n    }\n    \n    void display() {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                cout << data[i][j] << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    ScoreBoard sb1;\n    ScoreBoard sb2(10, 20, 30, 40, 50);\n    \n    sb1.display();\n    sb2.display();\n    \n    int arr[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\n    Matrix mat(arr);\n    mat.display();\n    \n    return 0;\n}',
  hint: 'Array members can be initialized using loops or initializer lists in C++11.'
},
{
  id: 'cpp_constructors_22',
  topicId: 'cpp_constructors',
  question: 'Create a class with multiple constructors including copy and move.',
  mathSolution: 'Provide different constructors for different use cases.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Document {\nprivate:\n    string title;\n    string* content;\n    size_t length;\n    \npublic:\n    // Default constructor\n    Document() : title(\"Untitled\"), content(nullptr), length(0) {\n        cout << \"Default constructor\" << endl;\n    }\n    \n    // Parameterized constructor\n    Document(const string& t, const string& c) : title(t) {\n        length = c.length();\n        content = new char[length + 1];\n        strcpy(content, c.c_str());\n        cout << \"Parameterized constructor: \" << title << endl;\n    }\n    \n    // Copy constructor\n    Document(const Document& other) : title(other.title) {\n        length = other.length;\n        content = new char[length + 1];\n        strcpy(content, other.content);\n        cout << \"Copy constructor: \" << title << endl;\n    }\n    \n    // Move constructor\n    Document(Document&& other) noexcept \n        : title(move(other.title)), content(other.content), length(other.length) {\n        other.content = nullptr;\n        other.length = 0;\n        cout << \"Move constructor: \" << title << endl;\n    }\n    \n    // Destructor\n    ~Document() {\n        delete[] content;\n        cout << \"Destructor: \" << title << endl;\n    }\n    \n    void display() {\n        cout << \"Title: \" << title << endl;\n        if (content) cout << \"Content: \" << content << endl;\n    }\n};\n\nint main() {\n    Document doc1(\"Report\", \"Annual report content\");\n    Document doc2 = doc1;  // Copy\n    Document doc3 = move(doc1);  // Move\n    \n    doc2.display();\n    doc3.display();\n    \n    return 0;\n}',
  hint: 'Provide multiple constructors for different object creation scenarios.'
},
{
  id: 'cpp_constructors_23',
  topicId: 'cpp_constructors',
  question: 'Use = default for compiler-generated constructors.',
  mathSolution: 'default keyword requests compiler-generated default implementation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass SimpleClass {\npublic:\n    // Request compiler-generated default constructor\n    SimpleClass() = default;\n    \n    // Request compiler-generated copy constructor\n    SimpleClass(const SimpleClass&) = default;\n    \n    // Request compiler-generated copy assignment\n    SimpleClass& operator=(const SimpleClass&) = default;\n    \n    // Request compiler-generated destructor\n    ~SimpleClass() = default;\n    \n    int value = 42;\n    string name = \"Default\";\n};\n\nclass ExplicitClass {\npublic:\n    ExplicitClass(int v) : value(v) {}\n    \n    // Default constructor still available with = default\n    ExplicitClass() = default;\n    \n    // Copy constructor explicitly defaulted\n    ExplicitClass(const ExplicitClass&) = default;\n    \n    int value = 0;\n};\n\nint main() {\n    SimpleClass s1;\n    SimpleClass s2 = s1;\n    \n    cout << s1.value << \", \" << s1.name << endl;\n    \n    ExplicitClass e1(100);\n    ExplicitClass e2;  // Default constructor\n    ExplicitClass e3 = e1;\n    \n    cout << e1.value << \", \" << e2.value << \", \" << e3.value << endl;\n    \n    return 0;\n}',
  hint: '= default is clearer than empty braces and preserves triviality.'
},
{
  id: 'cpp_constructors_24',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes vector member.',
  mathSolution: 'Initialize vector with specific values in constructor.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass DataSet {\nprivate:\n    vector<int> data;\n    string name;\n    \npublic:\n    // Default constructor\n    DataSet() : name(\"Empty\") {\n        cout << \"Empty dataset created\" << endl;\n    }\n    \n    // Constructor with initializer list\n    DataSet(initializer_list<int> list) : data(list), name(\"Initialized\") {\n        cout << \"Dataset with \" << data.size() << \" elements created\" << endl;\n    }\n    \n    // Constructor with size and default value\n    DataSet(size_t size, int defaultValue) : data(size, defaultValue), name(\"Filled\") {\n        cout << \"Dataset with \" << size << \" elements filled with \" << defaultValue << endl;\n    }\n    \n    // Constructor from another vector\n    DataSet(const vector<int>& vec, const string& n) : data(vec), name(n) {\n        cout << \"Dataset copied from vector: \" << name << endl;\n    }\n    \n    void display() {\n        cout << name << \": [\";\n        for (size_t i = 0; i < data.size() && i < 10; i++) {\n            cout << data[i];\n            if (i < data.size() - 1 && i < 9) cout << \", \";\n        }\n        if (data.size() > 10) cout << \", ...\";\n        cout << \"] (\" << data.size() << \" elements)\" << endl;\n    }\n};\n\nint main() {\n    DataSet d1;\n    DataSet d2 = {1, 2, 3, 4, 5};\n    DataSet d3(10, 0);\n    \n    vector<int> vec = {100, 200, 300};\n    DataSet d4(vec, \"Custom\");\n    \n    d1.display();\n    d2.display();\n    d3.display();\n    d4.display();\n    \n    return 0;\n}',
  hint: 'Vector constructors can be leveraged in class constructors.'
},
{
  id: 'cpp_constructors_25',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that uses a builder pattern for complex initialization.',
  mathSolution: 'Builder pattern separates construction from representation.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass DatabaseConfig {\nprivate:\n    string host;\n    int port;\n    string username;\n    string password;\n    string database;\n    bool useSSL;\n    int timeout;\n    \n    // Private constructor (only Builder can create)\n    DatabaseConfig() : host(\"localhost\"), port(3306), useSSL(false), timeout(30) {}\n    \npublic:\n    // Builder class\n    class Builder {\n    private:\n        DatabaseConfig config;\n        \n    public:\n        Builder& setHost(const string& h) { config.host = h; return *this; }\n        Builder& setPort(int p) { config.port = p; return *this; }\n        Builder& setUsername(const string& u) { config.username = u; return *this; }\n        Builder& setPassword(const string& p) { config.password = p; return *this; }\n        Builder& setDatabase(const string& db) { config.database = db; return *this; }\n        Builder& setSSL(bool ssl) { config.useSSL = ssl; return *this; }\n        Builder& setTimeout(int t) { config.timeout = t; return *this; }\n        \n        DatabaseConfig build() { return config; }\n    };\n    \n    void display() {\n        cout << \"Database Configuration:\" << endl;\n        cout << \"  Host: \" << host << \":\" << port << endl;\n        cout << \"  Username: \" << username << endl;\n        cout << \"  Database: \" << database << endl;\n        cout << \"  SSL: \" << (useSSL ? \"Enabled\" : \"Disabled\") << endl;\n        cout << \"  Timeout: \" << timeout << \"s\" << endl;\n    }\n};\n\nint main() {\n    DatabaseConfig config = DatabaseConfig::Builder()\n        .setHost(\"db.example.com\")\n        .setPort(5432)\n        .setUsername(\"admin\")\n        .setPassword(\"secret\")\n        .setDatabase(\"production\")\n        .setSSL(true)\n        .setTimeout(60)\n        .build();\n    \n    config.display();\n    \n    return 0;\n}',
  hint: 'Builder pattern is useful for objects with many optional parameters.'
},
{
  id: 'cpp_constructors_26',
  topicId: 'cpp_constructors',
  question: 'Create a class where constructor initializes dynamically allocated 2D array.',
  mathSolution: 'Dynamic allocation of multi-dimensional arrays in constructor.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Matrix2D {\nprivate:\n    int** data;\n    int rows, cols;\n    \npublic:\n    // Constructor allocates 2D array\n    Matrix2D(int r, int c) : rows(r), cols(c) {\n        data = new int*[rows];\n        for (int i = 0; i < rows; i++) {\n            data[i] = new int[cols];\n            for (int j = 0; j < cols; j++) {\n                data[i][j] = 0;\n            }\n        }\n        cout << \"Matrix \" << rows << \"x\" << cols << \" created\" << endl;\n    }\n    \n    // Constructor with initialization value\n    Matrix2D(int r, int c, int initVal) : rows(r), cols(c) {\n        data = new int*[rows];\n        for (int i = 0; i < rows; i++) {\n            data[i] = new int[cols];\n            for (int j = 0; j < cols; j++) {\n                data[i][j] = initVal;\n            }\n        }\n        cout << \"Matrix \" << rows << \"x\" << cols << \" filled with \" << initVal << endl;\n    }\n    \n    // Copy constructor (deep copy)\n    Matrix2D(const Matrix2D& other) : rows(other.rows), cols(other.cols) {\n        data = new int*[rows];\n        for (int i = 0; i < rows; i++) {\n            data[i] = new int[cols];\n            for (int j = 0; j < cols; j++) {\n                data[i][j] = other.data[i][j];\n            }\n        }\n        cout << \"Matrix copy constructor\" << endl;\n    }\n    \n    // Destructor\n    ~Matrix2D() {\n        for (int i = 0; i < rows; i++) {\n            delete[] data[i];\n        }\n        delete[] data;\n        cout << \"Matrix destroyed\" << endl;\n    }\n    \n    void setValue(int i, int j, int val) {\n        if (i >= 0 && i < rows && j >= 0 && j < cols) {\n            data[i][j] = val;\n        }\n    }\n    \n    void display() {\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                cout << data[i][j] << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    Matrix2D mat1(3, 4);\n    Matrix2D mat2(3, 4, 5);\n    Matrix2D mat3 = mat2;  // Copy constructor\n    \n    mat1.setValue(0, 0, 10);\n    mat1.setValue(1, 2, 20);\n    \n    cout << \"mat1:\" << endl;\n    mat1.display();\n    cout << \"mat2:\" << endl;\n    mat2.display();\n    \n    return 0;\n}',
  hint: 'Remember to implement proper destructor and copy constructor for dynamic resources.'
},
{
  "id": "cpp_constructors_27",
  "topicId": "cpp_constructors",
  "question": "Create a constructor that initializes a thread member.",
  "mathSolution": "Thread can be started in constructor using lambda or callable.",
  "codeSolution": "#include <iostream>\n#include <thread>\n#include <chrono>\n#include <string>\nusing namespace std;\n\nclass AsyncProcessor {\nprivate:\n    thread worker;\n    bool running;\n    \npublic:\n    AsyncProcessor() : running(true) {\n        worker = thread([this]() {\n            int count = 0;\n            while (running && count < 5) {\n                cout << \"Processing... \" << count++ << endl;\n                this_thread::sleep_for(chrono::seconds(1));\n            }\n            cout << \"Worker thread finished\" << endl;\n        });\n        cout << \"AsyncProcessor constructor: thread started\" << endl;\n    }\n    \n    ~AsyncProcessor() {\n        running = false;\n        if (worker.joinable()) {\n            worker.join();\n        }\n        cout << \"AsyncProcessor destructor: thread joined\" << endl;\n    }\n};\n\nclass Timer {\nprivate:\n    thread timerThread;\n    \npublic:\n    Timer(int seconds, const string& message) {\n        timerThread = thread([seconds, message]() {\n            this_thread::sleep_for(chrono::seconds(seconds));\n            cout << \"Timer: \" << message << endl;\n        });\n        cout << \"Timer started for \" << seconds << \" seconds\" << endl;\n    }\n    \n    ~Timer() {\n        if (timerThread.joinable()) {\n            timerThread.join();\n        }\n    }\n};\n\nint main() {\n    {\n        AsyncProcessor processor;\n        this_thread::sleep_for(chrono::seconds(6));\n    }\n    \n    {\n        Timer timer(2, \"Time's up!\");\n        this_thread::sleep_for(chrono::seconds(3));\n    }\n    \n    return 0;\n}",
  "hint": "Be careful with thread lifecycle in constructors and destructors."
},
{
  "id": "cpp_constructors_28",
  "topicId": "cpp_constructors",
  "question": "Create a constructor that opens a file for reading/writing.",
  "mathSolution": "File streams can be opened in constructor.",
  "codeSolution": "#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nclass FileHandler {\nprivate:\n    fstream file;\n    string filename;\n    bool isOpen;\n    \npublic:\n    // Constructor opens file\n    FileHandler(const string& name, ios::openmode mode) \n        : filename(name), isOpen(false) {\n        file.open(name, mode);\n        if (file.is_open()) {\n            isOpen = true;\n            cout << \"File '\" << name << \"' opened successfully\" << endl;\n        } else {\n            cout << \"Failed to open file '\" << name << \"'\" << endl;\n        }\n    }\n    \n    // Constructor for reading entire file\n    FileHandler(const string& name) : FileHandler(name, ios::in) {}\n    \n    // Destructor closes file\n    ~FileHandler() {\n        if (file.is_open()) {\n            file.close();\n            cout << \"File '\" << filename << \"' closed\" << endl;\n        }\n    }\n    \n    bool isGood() const { return isOpen && file.good(); }\n    \n    void write(const string& data) {\n        if (isGood()) {\n            file << data << endl;\n        }\n    }\n    \n    string readLine() {\n        string line;\n        if (isGood() && getline(file, line)) {\n            return line;\n        }\n        return \"\";\n    }\n};\n\nint main() {\n    {\n        FileHandler writer(\"test.txt\", ios::out);\n        if (writer.isGood()) {\n            writer.write(\"Hello, World!\");\n            writer.write(\"Second line\");\n        }\n    }\n    \n    {\n        FileHandler reader(\"test.txt\", ios::in);\n        if (reader.isGood()) {\n            string line;\n            while ((line = reader.readLine()) != \"\") {\n                cout << \"Read: \" << line << endl;\n            }\n        }\n    }\n    \n    return 0;\n}",
  "hint": "Constructors are ideal for acquiring resources (RAII)."
},
{
  "id": "cpp_constructors_29",
  "topicId": "cpp_constructors",
  "question": "Create a constructor that initializes member objects using member initializer list ordering.",
  "mathSolution": "Member initialization order follows declaration order, not initializer list order.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Member1 {\npublic:\n    Member1() { cout << \"Member1 default\" << endl; }\n    Member1(int x) { cout << \"Member1(\" << x << \")\" << endl; }\n};\n\nclass Member2 {\npublic:\n    Member2() { cout << \"Member2 default\" << endl; }\n    Member2(int y) { cout << \"Member2(\" << y << \")\" << endl; }\n};\n\nclass Container {\nprivate:\n    Member1 m1;  // Declared first\n    Member2 m2;  // Declared second\n    int value;\n    \npublic:\n    // Initializer list order doesn't matter - members initialized in declaration order\n    Container(int x, int y) : m2(y), m1(x), value(x + y) {\n        cout << \"Container constructor\" << endl;\n    }\n    \n    // Order: m1 then m2, regardless of initializer list\n    Container() : m2(10), m1(20) {\n        cout << \"Container default\" << endl;\n    }\n};\n\nint main() {\n    cout << \"Creating container with parameters:\" << endl;\n    Container c1(5, 15);\n    \n    cout << \"\\nCreating default container:\" << endl;\n    Container c2;\n    \n    return 0;\n}",
  "hint": "Member variables are initialized in the order they are declared, not the order in initializer list."
},
{
  id: 'cpp_constructors_30',
  topicId: 'cpp_constructors',
  question: 'Create a class with constructor that prevents narrowing conversions.',
  mathSolution: 'Use braces {} to prevent narrowing in constructors.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Integer {\nprivate:\n    int value;\n    \npublic:\n    // Constructor with brace initialization prevents narrowing\n    Integer(int v) : value(v) {}\n    \n    void display() { cout << value << endl; }\n};\n\nclass StrictNumber {\nprivate:\n    int value;\n    \npublic:\n    // Using braces in constructor prevents narrowing\n    StrictNumber(int v) : value{v} {}\n    \n    void display() { cout << value << endl; }\n};\n\nint main() {\n    // Narrowing allowed with parentheses\n    Integer i1(3.14);  // Double to int narrowing - allowed, value becomes 3\n    \n    // Narrowing prevented with braces (compile error in C++11)\n    // StrictNumber s1(3.14);  // Error: narrowing conversion\n    StrictNumber s2(42);  // OK\n    \n    cout << \"Integer with narrowing: \";\n    i1.display();\n    \n    cout << \"StrictNumber: \";\n    s2.display();\n    \n    return 0;\n}',
  hint: 'Using {} initialization prevents narrowing conversions and improves type safety.'
},
{
  id: 'cpp_constructors_31',
  topicId: 'cpp_constructors',
  question: 'Create a constructor with try-catch block (function try block).',
  mathSolution: 'Function try block catches exceptions in initializer list.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    Resource(size_t s) : size(s) {\n        if (s == 0) throw invalid_argument(\"Size cannot be zero\");\n        data = new int[size];\n        cout << \"Resource allocated: size \" << size << endl;\n    }\n    \n    ~Resource() {\n        delete[] data;\n        cout << \"Resource freed\" << endl;\n    }\n};\n\nclass SafeContainer {\nprivate:\n    Resource res1;\n    Resource res2;\n    \npublic:\n    // Function try block catches exceptions from member initializers\n    SafeContainer(int s1, int s2) \n        try : res1(s1), res2(s2) {\n        cout << \"SafeContainer created\" << endl;\n    } catch (const exception& e) {\n        cout << \"Caught in constructor: \" << e.what() << endl;\n        // Re-throw or handle\n        throw;\n    }\n    \n    ~SafeContainer() {\n        cout << \"SafeContainer destroyed\" << endl;\n    }\n};\n\nint main() {\n    try {\n        SafeContainer sc1(10, 20);  // OK\n    } catch (const exception& e) {\n        cout << \"Main caught: \" << e.what() << endl;\n    }\n    \n    try {\n        SafeContainer sc2(0, 10);  // Will throw in res1 constructor\n    } catch (const exception& e) {\n        cout << \"Main caught error: \" << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Function try blocks allow catching exceptions from member initializer lists.'
},
{
  id: 'cpp_constructors_32',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes a mutex (C++11 threading).',
  mathSolution: 'Mutex can be initialized in constructor for thread safety.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <vector>\nusing namespace std;\n\nclass ThreadSafeCounter {\nprivate:\n    mutable mutex mtx;\n    int count;\n    \npublic:\n    ThreadSafeCounter() : count(0) {\n        cout << \"Counter initialized\" << endl;\n    }\n    \n    void increment() {\n        lock_guard<mutex> lock(mtx);\n        count++;\n    }\n    \n    int get() const {\n        lock_guard<mutex> lock(mtx);\n        return count;\n    }\n};\n\nclass DataBuffer {\nprivate:\n    mutex mtx;\n    vector<int> buffer;\n    \npublic:\n    DataBuffer() {\n        cout << \"DataBuffer created\" << endl;\n    }\n    \n    void add(int value) {\n        lock_guard<mutex> lock(mtx);\n        buffer.push_back(value);\n    }\n    \n    vector<int> getAll() {\n        lock_guard<mutex> lock(mtx);\n        return buffer;\n    }\n};\n\nint main() {\n    ThreadSafeCounter counter;\n    \n    vector<thread> threads;\n    for (int i = 0; i < 100; i++) {\n        threads.emplace_back([&counter]() {\n            counter.increment();\n        });\n    }\n    \n    for (auto& t : threads) {\n        t.join();\n    }\n    \n    cout << \"Final count: \" << counter.get() << endl;\n    \n    return 0;\n}',
  hint: 'Initialize mutex in constructor for thread-safe classes.'
},
{
  id: 'cpp_constructors_33',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that takes variadic template arguments.',
  mathSolution: 'Variadic templates allow variable number of arguments of any type.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <string>\nusing namespace std;\n\ntemplate<typename... Args>\nclass DataBag {\nprivate:\n    tuple<Args...> data;\n    \npublic:\n    DataBag(Args... args) : data(args...) {\n        cout << \"DataBag created with \" << sizeof...(Args) << \" arguments\" << endl;\n    }\n    \n    void display() {\n        displayTuple(data);\n    }\n    \nprivate:\n    template<size_t I = 0, typename... T>\n    typename enable_if<I == sizeof...(T)>::type displayTuple(const tuple<T...>&) {}\n    \n    template<size_t I = 0, typename... T>\n    typename enable_if<I < sizeof...(T)>::type displayTuple(const tuple<T...>& t) {\n        cout << get<I>(t);\n        if (I + 1 < sizeof...(T)) cout << \", \";\n        displayTuple<I + 1>(t);\n    }\n};\n\ntemplate<typename... Args>\nvoid log(Args... args) {\n    DataBag<Args...> bag(args...);\n    cout << \"Logging: \";\n    bag.display();\n    cout << endl;\n}\n\nint main() {\n    DataBag<int, double, string> bag1(10, 3.14, \"Hello\");\n    bag1.display();\n    cout << endl;\n    \n    DataBag<int, int, int> bag2(1, 2, 3);\n    bag2.display();\n    cout << endl;\n    \n    log(42, \"Answer\", true);\n    \n    return 0;\n}',
  hint: 'Variadic constructors enable flexible argument lists similar to make_tuple.'
},
{
  id: 'cpp_constructors_34',
  topicId: 'cpp_constructors',
  question: 'Create a class that uses constructor to allocate memory with custom alignment.',
  mathSolution: 'aligned_alloc or alignas can be used for memory alignment.',
  codeSolution: '#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nclass AlignedBuffer {\nprivate:\n    void* ptr;\n    size_t size;\n    size_t alignment;\n    \npublic:\n    AlignedBuffer(size_t sz, size_t align) : size(sz), alignment(align) {\n        ptr = aligned_alloc(align, sz);\n        if (!ptr) {\n            throw bad_alloc();\n        }\n        cout << \"Aligned buffer of \" << sz << \" bytes allocated with alignment \" << align << endl;\n    }\n    \n    ~AlignedBuffer() {\n        free(ptr);\n        cout << \"Aligned buffer freed\" << endl;\n    }\n    \n    void* get() { return ptr; }\n    \n    bool isAligned() {\n        return reinterpret_cast<uintptr_t>(ptr) % alignment == 0;\n    }\n};\n\nstruct alignas(64) CacheLine {\n    int data[16];\n};\n\nint main() {\n    AlignedBuffer buf(1024, 64);\n    \n    if (buf.isAligned()) {\n        cout << \"Buffer is correctly aligned to 64 bytes\" << endl;\n    }\n    \n    CacheLine cache;\n    cout << \"CacheLine alignment: \" << alignof(CacheLine) << \" bytes\" << endl;\n    \n    return 0;\n}',
  hint: 'aligned_alloc is C++17; use posix_memalign or _aligned_malloc for earlier versions.'
},
{
  id: 'cpp_constructors_35',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using structured bindings (C++17).',
  mathSolution: 'Structured bindings can decompose return values in constructors.',
  codeSolution: '#include <iostream>\n#include <tuple>\nusing namespace std;\n\nclass Point3D {\nprivate:\n    double x, y, z;\n    \npublic:\n    Point3D(double a, double b, double c) : x(a), y(b), z(c) {}\n    \n    void display() { cout << \"(\" << x << \", \" << y << \", \" << z << \")\" << endl; }\n};\n\nclass DataPoint {\nprivate:\n    int id;\n    string name;\n    double value;\n    \npublic:\n    // Constructor using tuple\n    DataPoint(const tuple<int, string, double>& data) \n        : id(get<0>(data)), name(get<1>(data)), value(get<2>(data)) {}\n    \n    // Constructor using structured bindings (C++17)\n    DataPoint(auto&& data) {\n        auto [i, n, v] = data;\n        id = i;\n        name = n;\n        value = v;\n    }\n    \n    void display() {\n        cout << id << \": \" << name << \" = \" << value << endl;\n    }\n};\n\nint main() {\n    auto point = make_tuple(10, 20, 30);\n    auto data = make_tuple(1, \"Temperature\", 98.6);\n    \n    // Using structured bindings\n    auto [x, y, z] = point;\n    Point3D p(x, y, z);\n    p.display();\n    \n    DataPoint dp(data);\n    dp.display();\n    \n    return 0;\n}',
  hint: 'Structured bindings make tuple unpacking cleaner in C++17.'
},
{
  id: 'cpp_constructors_36',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that uses SFINAE to enable/disable based on type traits.',
  mathSolution: 'SFINAE allows constructor to be conditionally enabled.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nclass NumericContainer {\nprivate:\n    int value;\n    \npublic:\n    // Only enable for integral types\n    template<typename T>\n    NumericContainer(T val, typename enable_if<is_integral<T>::value>::type* = nullptr) \n        : value(static_cast<int>(val)) {\n        cout << \"Integral constructor called\" << endl;\n    }\n    \n    // Only enable for floating point types\n    template<typename T>\n    NumericContainer(T val, typename enable_if<is_floating_point<T>::value>::type* = nullptr)\n        : value(static_cast<int>(val)) {\n        cout << \"Floating point constructor called\" << endl;\n    }\n    \n    void display() { cout << \"Value: \" << value << endl; }\n};\n\nclass SmartConstructor {\nprivate:\n    string data;\n    \npublic:\n    // Enable for types that have .c_str() method\n    template<typename T>\n    SmartConstructor(const T& obj, \n                     typename enable_if<is_same<decltype(obj.c_str()), const char*>::value>::type* = nullptr) \n        : data(obj.c_str()) {\n        cout << \"String-like constructor\" << endl;\n    }\n    \n    void display() { cout << \"Data: \" << data << endl; }\n};\n\nint main() {\n    NumericContainer nc1(42);           // Integral\n    NumericContainer nc2(3.14);         // Floating point\n    // NumericContainer nc3(\"hello\");   // Error: no matching constructor\n    \n    nc1.display();\n    nc2.display();\n    \n    string s = \"Hello World\";\n    SmartConstructor sc(s);\n    sc.display();\n    \n    return 0;\n}',
  hint: 'SFINAE (Substitution Failure Is Not An Error) enables compile-time selection of functions.'
},
{
  id: 'cpp_constructors_37',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using integer sequence (C++14).',
  mathSolution: 'Integer sequence allows compile-time indexing for initialization.',
  codeSolution: '#include <iostream>\n#include <utility>\n#include <array>\nusing namespace std;\n\ntemplate<typename T, size_t N>\nclass FixedArray {\nprivate:\n    T arr[N];\n    \n    template<size_t... Is>\n    FixedArray(const T& val, index_sequence<Is...>) : arr{((void)Is, val)...} {}\n    \npublic:\n    FixedArray(const T& val) : FixedArray(val, make_index_sequence<N>()) {}\n    \n    void display() {\n        for (size_t i = 0; i < N; i++) {\n            cout << arr[i] << \" \";\n        }\n        cout << endl;\n    }\n};\n\nclass SequenceInitializer {\nprivate:\n    array<int, 5> data;\n    \n    template<size_t... Is>\n    SequenceInitializer(index_sequence<Is...>) : data{{Is * Is...}} {}\n    \npublic:\n    SequenceInitializer() : SequenceInitializer(make_index_sequence<5>()) {}\n    \n    void display() {\n        for (auto val : data) cout << val << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    FixedArray<int, 5> arr1(10);\n    arr1.display();  // 10 10 10 10 10\n    \n    FixedArray<string, 3> arr2(\"Hello\");\n    arr2.display();\n    \n    SequenceInitializer seq;\n    seq.display();  // 0 1 4 9 16\n    \n    return 0;\n}',
  hint: 'Integer sequences enable compile-time generation of values for initialization.'
},
{
  id: 'cpp_constructors_38',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that initializes using lambda in initializer list.',
  mathSolution: 'Lambda can be called directly in initializer list for complex initialization.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass ProcessedData {\nprivate:\n    vector<int> data;\n    double average;\n    int maxVal;\n    int minVal;\n    \npublic:\n    ProcessedData(vector<int> raw) \n        : data([&raw]() {\n            auto v = raw;\n            sort(v.begin(), v.end());\n            return v;\n        }()),\n          average([this]() {\n              int sum = 0;\n              for (int x : data) sum += x;\n              return static_cast<double>(sum) / data.size();\n          }()),\n          maxVal(data.empty() ? 0 : data.back()),\n          minVal(data.empty() ? 0 : data.front()) {\n        cout << \"ProcessedData created\" << endl;\n    }\n    \n    void display() {\n        cout << \"Sorted data: \";\n        for (int x : data) cout << x << \" \";\n        cout << \"\\nAverage: \" << average << \", Min: \" << minVal << \", Max: \" << maxVal << endl;\n    }\n};\n\nclass Config {\nprivate:\n    string value;\n    \npublic:\n    Config(const string& envVar) \n        : value([&envVar]() {\n            const char* env = getenv(envVar.c_str());\n            return env ? string(env) : string(\"default\");\n        }()) {}\n    \n    void display() { cout << \"Config value: \" << value << endl; }\n};\n\nint main() {\n    ProcessedData pd({5, 2, 8, 1, 9, 3});\n    pd.display();\n    \n    return 0;\n}',
  hint: 'Lambda in initializer list can compute values before member initialization.'
},
{
  id: 'cpp_constructors_39',
  topicId: 'cpp_constructors',
  question: 'Create a constructor that uses magic static for singleton pattern (C++11).',
  mathSolution: 'Static local variables are initialized in a thread-safe manner.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Singleton {\nprivate:\n    Singleton() { cout << \"Singleton instance created\" << endl; }\n    ~Singleton() { cout << \"Singleton destroyed\" << endl; }\n    \npublic:\n    Singleton(const Singleton&) = delete;\n    Singleton& operator=(const Singleton&) = delete;\n    \n    static Singleton& getInstance() {\n        static Singleton instance;  // Magic static - thread-safe in C++11\n        return instance;\n    }\n    \n    void doSomething() { cout << \"Singleton doing work\" << endl; }\n};\n\nclass ConfigManager {\nprivate:\n    ConfigManager() { cout << \"ConfigManager created\" << endl; }\n    \npublic:\n    static ConfigManager& getInstance() {\n        static ConfigManager instance;\n        return instance;\n    }\n    \n    void load() { cout << \"Config loaded\" << endl; }\n};\n\nint main() {\n    Singleton::getInstance().doSomething();\n    Singleton::getInstance().doSomething();\n    \n    ConfigManager::getInstance().load();\n    \n    // Singleton s;  // Error: private constructor\n    \n    return 0;\n}',
  hint: 'Magic statics (C++11) provide thread-safe lazy initialization.'
},
{
  id: 'cpp_constructors_40',
  topicId: 'cpp_constructors',
  question: 'Create a constructor with [[likely]] and [[unlikely]] attributes (C++20).',
  mathSolution: 'Attributes give hints to compiler for branch prediction.',
  codeSolution: '#include <iostream>\n#include <random>\nusing namespace std;\n\nclass Validator {\nprivate:\n    bool isValid;\n    \npublic:\n    Validator(int value) : isValid(false) {\n        if (value > 0 && value < 100) [[likely]] {\n            isValid = true;\n            cout << \"Valid input\" << endl;\n        } else [[unlikely]] {\n            isValid = false;\n            cout << \"Invalid input (out of range)\" << endl;\n        }\n    }\n    \n    bool isGood() const { return isValid; }\n};\n\nclass Processor {\npublic:\n    Processor(int code) {\n        if (code == 0) [[unlikely]] {\n            cout << \"Error code - special handling\" << endl;\n        } else [[likely]] {\n            cout << \"Normal processing for code \" << code << endl;\n        }\n    }\n};\n\nint main() {\n    Validator v1(50);   // Likely path\n    Validator v2(200);  // Unlikely path\n    \n    Processor p1(0);    // Unlikely path\n    Processor p2(42);   // Likely path\n    \n    return 0;\n}',
  hint: '[[likely]] and [[unlikely]] are optimization hints, not guarantees.'
},
);