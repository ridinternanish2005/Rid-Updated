QuizData.questions.push(
  //filehandling ,multithreding ,lamdaexpressin ,Dsa basic
{
  id: 'cpp_filehandling_1',
  topicId: 'cpp_filehandling',
  question: 'Write to a file using ofstream (output file stream).',
  mathSolution: 'ofstream creates/opens file for writing.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream outFile("test.txt");\n    if (outFile.is_open()) {\n        outFile << "Hello, World!" << endl;\n        outFile << "This is line 2" << endl;\n        outFile.close();\n        cout << "File written successfully" << endl;\n    } else {\n        cout << "Unable to open file" << endl;\n    }\n    return 0;\n}',
  hint: 'Use ofstream for writing to files, is_open() to check if file opened successfully.'
},
{
  id: 'cpp_filehandling_2',
  topicId: 'cpp_filehandling',
  question: 'Read from a file using ifstream (input file stream).',
  mathSolution: 'ifstream opens file for reading, getline reads line by line.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream inFile("test.txt");\n    if (!inFile) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string line;\n    while (getline(inFile, line)) {\n        cout << line << endl;\n    }\n    \n    inFile.close();\n    return 0;\n}',
  hint: 'ifstream is for reading from files, getline() reads entire lines.'
},
{
  id: 'cpp_filehandling_3',
  topicId: 'cpp_filehandling',
  question: 'Use fstream for both reading and writing (append mode).',
  mathSolution: 'fstream with ios::app opens file for appending.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    fstream file("test.txt", ios::app | ios::out);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    file << "Appending new line" << endl;\n    file << "Another appended line" << endl;\n    file.close();\n    \n    // Read back the file\n    ifstream inFile("test.txt");\n    string line;\n    while (getline(inFile, line)) {\n        cout << line << endl;\n    }\n    inFile.close();\n    \n    return 0;\n}',
  hint: 'Use ios::app to append to existing file, ios::trunc to overwrite.'
},
{
  id: 'cpp_filehandling_4',
  topicId: 'cpp_filehandling',
  question: 'Read and write binary files using read() and write().',
  mathSolution: 'write() writes binary data, read() reads binary data.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <cstring>\nusing namespace std;\n\nstruct Student {\n    int id;\n    char name[50];\n    double gpa;\n};\n\nint main() {\n    Student students[] = {\n        {1, "John Doe", 3.8},\n        {2, "Jane Smith", 3.9},\n        {3, "Bob Johnson", 3.5}\n    };\n    \n    // Write binary file\n    ofstream outFile("students.bin", ios::binary);\n    if (!outFile) {\n        cout << "Cannot create file" << endl;\n        return 1;\n    }\n    \n    outFile.write(reinterpret_cast<char*>(students), sizeof(students));\n    outFile.close();\n    \n    // Read binary file\n    ifstream inFile("students.bin", ios::binary);\n    if (!inFile) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    Student readStudents[3];\n    inFile.read(reinterpret_cast<char*>(readStudents), sizeof(readStudents));\n    inFile.close();\n    \n    for (int i = 0; i < 3; i++) {\n        cout << "ID: " << readStudents[i].id \n             << ", Name: " << readStudents[i].name \n             << ", GPA: " << readStudents[i].gpa << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use ios::binary mode for binary file operations, reinterpret_cast for type conversion.'
},
{
  "id": "cpp_filehandling_5",
  "topicId": "cpp_filehandling",
  "question": "Check if file exists before opening.",
  "mathSolution": "Use ifstream or access() to check file existence.",
  "codeSolution": "#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nbool fileExists(const string& filename) {\n    ifstream file(filename);\n    return file.good();\n}\n\nint main() {\n    string filename = \"test.txt\";\n    \n    if (fileExists(filename)) {\n        cout << \"File '\" << filename << \"' exists\" << endl;\n        ifstream inFile(filename);\n        string content;\n        while (getline(inFile, content)) {\n            cout << content << endl;\n        }\n        inFile.close();\n    } else {\n        cout << \"File '\" << filename << \"' does not exist\" << endl;\n        // Create the file\n        ofstream outFile(filename);\n        outFile << \"New file created\" << endl;\n        outFile.close();\n    }\n    \n    return 0;\n}",
  "hint": "file.good() returns true if file exists and can be opened."
},
{
  id: 'cpp_filehandling_6',
  topicId: 'cpp_filehandling',
  question: 'Get file size using seekg and tellg.',
  mathSolution: 'seekg moves to end, tellg returns position (file size).',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <cstring>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt", ios::binary | ios::ate);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    streamsize size = file.tellg();\n    cout << "File size: " << size << " bytes" << endl;\n    \n    file.seekg(0, ios::beg);\n    char* buffer = new char[size + 1];\n    file.read(buffer, size);\n    buffer[size] = \'\\0\';\n    \n    cout << "File content:\\n" << buffer << endl;\n    \n    delete[] buffer;\n    file.close();\n    \n    return 0;\n}',
  hint: 'ios::ate positions at end, tellg() returns current position (size).'
},
{
  id: 'cpp_filehandling_7',
  topicId: 'cpp_filehandling',
  question: 'Copy one file to another character by character.',
  mathSolution: 'Read character from source, write to destination.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string sourceFile = "source.txt";\n    string destFile = "destination.txt";\n    \n    ifstream source(sourceFile);\n    if (!source) {\n        cout << "Cannot open source file" << endl;\n        return 1;\n    }\n    \n    ofstream dest(destFile);\n    if (!dest) {\n        cout << "Cannot create destination file" << endl;\n        return 1;\n    }\n    \n    char ch;\n    while (source.get(ch)) {\n        dest.put(ch);\n    }\n    \n    source.close();\n    dest.close();\n    \n    cout << "File copied successfully" << endl;\n    \n    return 0;\n}',
  hint: 'source.get(ch) reads one character, dest.put(ch) writes one character.'
},
{
  id: 'cpp_filehandling_8',
  topicId: 'cpp_filehandling',
  question: 'Copy file using buffer for better performance.',
  mathSolution: 'Read/write chunks of data instead of one byte at a time.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    const size_t BUFFER_SIZE = 4096;\n    char buffer[BUFFER_SIZE];\n    \n    ifstream source("source.txt", ios::binary);\n    ofstream dest("destination.txt", ios::binary);\n    \n    if (!source || !dest) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    while (source.read(buffer, BUFFER_SIZE)) {\n        dest.write(buffer, source.gcount());\n    }\n    \n    // Write remaining bytes\n    dest.write(buffer, source.gcount());\n    \n    source.close();\n    dest.close();\n    \n    cout << "File copied with buffer" << endl;\n    \n    return 0;\n}',
  hint: 'Use buffer for faster file operations, gcount() returns bytes read.'
},
{
  id: 'cpp_filehandling_9',
  topicId: 'cpp_filehandling',
  question: 'Count lines in a file.',
  mathSolution: 'Use getline() in loop and count iterations.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    int lineCount = 0;\n    string line;\n    \n    while (getline(file, line)) {\n        lineCount++;\n    }\n    \n    file.close();\n    \n    cout << "Number of lines: " << lineCount << endl;\n    \n    return 0;\n}',
  hint: 'getline() returns false when EOF is reached, counting lines in process.'
},
{
  id: 'cpp_filehandling_10',
  topicId: 'cpp_filehandling',
  question: 'Count words in a file.',
  mathSolution: 'Read file and count spaces, punctuation, and newlines.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    int wordCount = 0;\n    string line;\n    \n    while (getline(file, line)) {\n        stringstream ss(line);\n        string word;\n        while (ss >> word) {\n            wordCount++;\n        }\n    }\n    \n    file.close();\n    \n    cout << "Number of words: " << wordCount << endl;\n    \n    return 0;\n}',
  hint: 'Use stringstream to parse words from each line.'
},
{
  id: 'cpp_filehandling_11',
  topicId: 'cpp_filehandling',
  question: 'Count characters in a file (including spaces).',
  mathSolution: 'Read file character by character and count.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    int charCount = 0;\n    char ch;\n    \n    while (file.get(ch)) {\n        charCount++;\n    }\n    \n    file.close();\n    \n    cout << "Number of characters: " << charCount << endl;\n    \n    return 0;\n}',
  hint: 'file.get(ch) reads each character including whitespace and newlines.'
},
{
  id: 'cpp_filehandling_12',
  topicId: 'cpp_filehandling',
  question: 'Search for a specific word in a file.',
  mathSolution: 'Read file line by line and use find() to locate word.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string filename, searchWord;\n    cout << "Enter filename: ";\n    cin >> filename;\n    cout << "Enter word to search: ";\n    cin >> searchWord;\n    \n    ifstream file(filename);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    bool found = false;\n    \n    while (getline(file, line)) {\n        lineNum++;\n        if (line.find(searchWord) != string::npos) {\n            cout << "Found at line " << lineNum << ": " << line << endl;\n            found = true;\n        }\n    }\n    \n    if (!found) {\n        cout << "Word not found" << endl;\n    }\n    \n    file.close();\n    \n    return 0;\n}',
  hint: 'string::find() returns npos if substring not found.'
},
{
  id: 'cpp_filehandling_13',
  topicId: 'cpp_filehandling',
  question: 'Replace text in a file.',
  mathSolution: 'Read entire file, replace content, write back.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string filename, search, replace;\n    cout << "Enter filename: ";\n    cin >> filename;\n    cout << "Enter text to replace: ";\n    cin >> search;\n    cout << "Enter replacement text: ";\n    cin >> replace;\n    \n    ifstream inFile(filename);\n    if (!inFile) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string content;\n    string line;\n    while (getline(inFile, line)) {\n        size_t pos = 0;\n        while ((pos = line.find(search, pos)) != string::npos) {\n            line.replace(pos, search.length(), replace);\n            pos += replace.length();\n        }\n        content += line + "\\n";\n    }\n    inFile.close();\n    \n    ofstream outFile(filename);\n    outFile << content;\n    outFile.close();\n    \n    cout << "Text replaced successfully" << endl;\n    \n    return 0;\n}',
  hint: 'Use string::replace() to replace text in memory before writing back.'
},
{
  id: 'cpp_filehandling_14',
  topicId: 'cpp_filehandling',
  question: 'Append to a file without overwriting existing content.',
  mathSolution: 'Open file in append mode using ios::app.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <ctime>\nusing namespace std;\n\nint main() {\n    ofstream file("log.txt", ios::app);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    time_t now = time(nullptr);\n    file << "New log entry at " << ctime(&now);\n    file << "Another log message" << endl;\n    file.close();\n    \n    cout << "Data appended successfully" << endl;\n    \n    return 0;\n}',
  hint: 'ios::app opens file in append mode, writes at end of file.'
},
{
  id: 'cpp_filehandling_15',
  topicId: 'cpp_filehandling',
  question: 'Read CSV file and parse data.',
  mathSolution: 'Split each line by comma to extract fields.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream file("data.csv");\n    if (!file) {\n        cout << "Cannot open CSV file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int rowNum = 0;\n    \n    while (getline(file, line)) {\n        stringstream ss(line);\n        string field;\n        vector<string> fields;\n        \n        while (getline(ss, field, \',\')) {\n            fields.push_back(field);\n        }\n        \n        cout << "Row " << ++rowNum << ": ";\n        for (const auto& f : fields) {\n            cout << f << " | ";\n        }\n        cout << endl;\n    }\n    \n    file.close();\n    \n    return 0;\n}',
  hint: 'Use getline with delimiter \',\' to parse CSV fields.'
},
{
  id: 'cpp_filehandling_16',
  topicId: 'cpp_filehandling',
  question: 'Write CSV file from data structures.',
  mathSolution: 'Write data with comma separators.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nstruct Person {\n    string name;\n    int age;\n    double salary;\n};\n\nint main() {\n    vector<Person> people = {\n        {"Alice", 25, 50000},\n        {"Bob", 30, 60000},\n        {"Charlie", 35, 70000}\n    };\n    \n    ofstream file("output.csv");\n    if (!file) {\n        cout << "Cannot create file" << endl;\n        return 1;\n    }\n    \n    // Write header\n    file << "Name,Age,Salary\\n";\n    \n    // Write data\n    for (const auto& p : people) {\n        file << p.name << "," << p.age << "," << p.salary << "\\n";\n    }\n    \n    file.close();\n    \n    cout << "CSV file written successfully" << endl;\n    \n    return 0;\n}',
  hint: 'CSV format uses commas to separate fields, newlines for rows.'
},
{
  id: 'cpp_filehandling_17',
  topicId: 'cpp_filehandling',
  question: 'Read and write JSON-like data using custom format.',
  mathSolution: 'Write key-value pairs, parse using delimiters.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, string> data;\n    data["name"] = "John Doe";\n    data["age"] = "30";\n    data["city"] = "New York";\n    data["occupation"] = "Engineer";\n    \n    // Write custom format file\n    ofstream outFile("data.cfg");\n    for (const auto& pair : data) {\n        outFile << pair.first << "=" << pair.second << "\\n";\n    }\n    outFile.close();\n    \n    // Read custom format file\n    ifstream inFile("data.cfg");\n    map<string, string> readData;\n    string line;\n    \n    while (getline(inFile, line)) {\n        size_t pos = line.find(\'=\');\n        if (pos != string::npos) {\n            string key = line.substr(0, pos);\n            string value = line.substr(pos + 1);\n            readData[key] = value;\n        }\n    }\n    inFile.close();\n    \n    // Display read data\n    for (const auto& pair : readData) {\n        cout << pair.first << ": " << pair.second << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Custom format like key=value is easy to parse and human-readable.'
},
{
  id: 'cpp_filehandling_18',
  topicId: 'cpp_filehandling',
  question: 'Use temporary files for intermediate data.',
  mathSolution: 'Create temporary file, write data, read later.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <cstdlib>\n#include <cstdio>\nusing namespace std;\n\nint main() {\n    // Create temporary file\n    char tempFileName[] = "tempXXXXXX";\n    int fd = mkstemp(tempFileName);\n    \n    if (fd == -1) {\n        cout << "Cannot create temp file" << endl;\n        return 1;\n    }\n    \n    ofstream tempFile(tempFileName);\n    tempFile << "Temporary data line 1\\n";\n    tempFile << "Temporary data line 2\\n";\n    tempFile.close();\n    \n    cout << "Temporary file created: " << tempFileName << endl;\n    \n    // Read and process temporary file\n    ifstream inFile(tempFileName);\n    string line;\n    while (getline(inFile, line)) {\n        cout << "Processing: " << line << endl;\n    }\n    inFile.close();\n    \n    // Delete temporary file\n    remove(tempFileName);\n    cout << "Temporary file deleted" << endl;\n    \n    return 0;\n}',
  hint: 'mkstemp() creates unique temporary file name, remove() deletes file.'
},
{
  id: 'cpp_filehandling_19',
  topicId: 'cpp_filehandling',
  question: 'Handle large files using seekg and read chunks.',
  mathSolution: 'Read file in chunks to avoid memory issues.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    const size_t CHUNK_SIZE = 1024;\n    char buffer[CHUNK_SIZE];\n    \n    ifstream file("largefile.txt", ios::binary);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    // Get file size\n    file.seekg(0, ios::end);\n    streamsize fileSize = file.tellg();\n    file.seekg(0, ios::beg);\n    \n    cout << "File size: " << fileSize << " bytes" << endl;\n    cout << "Processing in chunks of " << CHUNK_SIZE << " bytes" << endl;\n    \n    streamsize totalRead = 0;\n    while (file.read(buffer, CHUNK_SIZE)) {\n        totalRead += CHUNK_SIZE;\n        cout << "Read chunk: " << totalRead << "/" << fileSize << " bytes\\r";\n        // Process buffer here\n    }\n    \n    // Process remaining bytes\n    totalRead += file.gcount();\n    cout << "\\nTotal bytes read: " << totalRead << endl;\n    \n    file.close();\n    \n    return 0;\n}',
  hint: 'Processing large files in chunks prevents memory overflow.'
},
{
  id: 'cpp_filehandling_20',
  topicId: 'cpp_filehandling',
  question: 'Read file backwards (last line first).',
  mathSolution: 'Read entire file into vector, then iterate backwards.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream file("test.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    vector<string> lines;\n    string line;\n    \n    while (getline(file, line)) {\n        lines.push_back(line);\n    }\n    file.close();\n    \n    cout << "File content in reverse order:\\n";\n    for (int i = lines.size() - 1; i >= 0; i--) {\n        cout << lines[i] << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Store lines in vector, then reverse iteration for backward reading.'
},
{
  id: 'cpp_filehandling_21',
  topicId: 'cpp_filehandling',
  question: 'Read file and remove blank lines.',
  mathSolution: 'Skip lines that are empty or contain only whitespace.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isBlankLine(const string& line) {\n    for (char c : line) {\n        if (!isspace(c)) return false;\n    }\n    return true;\n}\n\nint main() {\n    ifstream inFile("input.txt");\n    ofstream outFile("output.txt");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    int removedCount = 0;\n    \n    while (getline(inFile, line)) {\n        lineNum++;\n        if (isBlankLine(line)) {\n            removedCount++;\n            cout << "Removed blank line " << lineNum << endl;\n        } else {\n            outFile << line << endl;\n        }\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "Removed " << removedCount << " blank lines" << endl;\n    \n    return 0;\n}',
  hint: 'Check if line contains only whitespace characters to identify blank lines.'
},
{
  id: 'cpp_filehandling_22',
  topicId: 'cpp_filehandling',
  question: 'Add line numbers to file.',
  mathSolution: 'Prepend each line with its line number.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    ifstream inFile("input.txt");\n    ofstream outFile("numbered.txt");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    \n    while (getline(inFile, line)) {\n        outFile << setw(4) << ++lineNum << ": " << line << endl;\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "Line numbers added successfully" << endl;\n    \n    return 0;\n}',
  hint: 'Use setw() to align line numbers for better readability.'
},
{
  id: 'cpp_filehandling_23',
  topicId: 'cpp_filehandling',
  question: 'Sort lines in a file alphabetically.',
  mathSolution: 'Read lines into vector, sort, write back.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    ifstream inFile("input.txt");\n    if (!inFile) {\n        cout << "Cannot open input file" << endl;\n        return 1;\n    }\n    \n    vector<string> lines;\n    string line;\n    \n    while (getline(inFile, line)) {\n        lines.push_back(line);\n    }\n    inFile.close();\n    \n    sort(lines.begin(), lines.end());\n    \n    ofstream outFile("sorted.txt");\n    if (!outFile) {\n        cout << "Cannot create output file" << endl;\n        return 1;\n    }\n    \n    for (const auto& l : lines) {\n        outFile << l << endl;\n    }\n    outFile.close();\n    \n    cout << "Lines sorted alphabetically" << endl;\n    \n    return 0;\n}',
  hint: 'Use vector to store lines, sort() for alphabetical ordering.'
},
{
  id: 'cpp_filehandling_24',
  topicId: 'cpp_filehandling',
  question: 'Remove duplicates from file.',
  mathSolution: 'Use set to store unique lines.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <set>\nusing namespace std;\n\nint main() {\n    ifstream inFile("input.txt");\n    if (!inFile) {\n        cout << "Cannot open input file" << endl;\n        return 1;\n    }\n    \n    set<string> uniqueLines;\n    string line;\n    \n    while (getline(inFile, line)) {\n        uniqueLines.insert(line);\n    }\n    inFile.close();\n    \n    ofstream outFile("unique.txt");\n    if (!outFile) {\n        cout << "Cannot create output file" << endl;\n        return 1;\n    }\n    \n    for (const auto& l : uniqueLines) {\n        outFile << l << endl;\n    }\n    outFile.close();\n    \n    cout << "Duplicates removed, unique lines: " << uniqueLines.size() << endl;\n    \n    return 0;\n}',
  hint: 'std::set automatically stores unique elements in sorted order.'
},
{
  id: 'cpp_filehandling_25',
  topicId: 'cpp_filehandling',
  question: 'Split large file into multiple smaller files.',
  mathSolution: 'Read file and write chunks to separate files.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    const size_t LINES_PER_FILE = 100;\n    \n    ifstream inFile("large.txt");\n    if (!inFile) {\n        cout << "Cannot open large file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int fileCount = 0;\n    int lineCount = 0;\n    ofstream outFile;\n    \n    while (getline(inFile, line)) {\n        if (lineCount == 0) {\n            if (outFile.is_open()) outFile.close();\n            string filename = "part_" + to_string(++fileCount) + ".txt";\n            outFile.open(filename);\n            if (!outFile) {\n                cout << "Cannot create file: " << filename << endl;\n                return 1;\n            }\n        }\n        \n        outFile << line << endl;\n        lineCount++;\n        \n        if (lineCount >= LINES_PER_FILE) {\n            lineCount = 0;\n        }\n    }\n    \n    if (outFile.is_open()) outFile.close();\n    inFile.close();\n    \n    cout << "Split into " << fileCount << " files" << endl;\n    \n    return 0;\n}',
  hint: 'Split large files into smaller chunks for easier processing.'
},
{
  id: 'cpp_filehandling_26',
  topicId: 'cpp_filehandling',
  question: 'Merge multiple files into one.',
  mathSolution: 'Read each file and append to output file.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<string> inputFiles = {"file1.txt", "file2.txt", "file3.txt"};\n    ofstream outFile("merged.txt");\n    \n    if (!outFile) {\n        cout << "Cannot create merged file" << endl;\n        return 1;\n    }\n    \n    for (const auto& filename : inputFiles) {\n        ifstream inFile(filename);\n        if (!inFile) {\n            cout << "Warning: Cannot open " << filename << endl;\n            continue;\n        }\n        \n        string line;\n        outFile << "--- " << filename << " ---\\n";\n        while (getline(inFile, line)) {\n            outFile << line << endl;\n        }\n        outFile << endl;\n        inFile.close();\n    }\n    \n    outFile.close();\n    \n    cout << "Files merged successfully" << endl;\n    \n    return 0;\n}',
  hint: 'Add separators between files for clarity in merged output.'
},
{
  id: 'cpp_filehandling_27',
  topicId: 'cpp_filehandling',
  question: 'Compress file using simple run-length encoding.',
  mathSolution: 'Count consecutive identical characters, store count and char.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nvoid compress(const string& inputFile, const string& outputFile) {\n    ifstream inFile(inputFile);\n    ofstream outFile(outputFile, ios::binary);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    char ch, prev = 0;\n    int count = 0;\n    \n    while (inFile.get(ch)) {\n        if (ch == prev) {\n            count++;\n        } else {\n            if (count > 0) {\n                outFile << count << prev;\n            }\n            prev = ch;\n            count = 1;\n        }\n    }\n    \n    if (count > 0) {\n        outFile << count << prev;\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "File compressed" << endl;\n}\n\nint main() {\n    compress("input.txt", "compressed.rle");\n    return 0;\n}',
  hint: 'RLE is simple but effective for repetitive data.'
},
{
  id: 'cpp_filehandling_28',
  topicId: 'cpp_filehandling',
  question: 'Decompress run-length encoded file.',
  mathSolution: 'Read count and character, expand by count.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nvoid decompress(const string& inputFile, const string& outputFile) {\n    ifstream inFile(inputFile, ios::binary);\n    ofstream outFile(outputFile);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    int count;\n    char ch;\n    \n    while (inFile >> count >> ch) {\n        for (int i = 0; i < count; i++) {\n            outFile << ch;\n        }\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "File decompressed" << endl;\n}\n\nint main() {\n    decompress("compressed.rle", "decompressed.txt");\n    return 0;\n}',
  hint: 'RLE decompression expands count-char pairs to original data.'
},
{
  id: 'cpp_filehandling_29',
  topicId: 'cpp_filehandling',
  question: 'Encrypt file using simple XOR cipher.',
  mathSolution: 'XOR each byte with key for encryption/decryption.',
  codeSolution: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nvoid xorFile(const string& inputFile, const string& outputFile, char key) {\n    ifstream inFile(inputFile, ios::binary);\n    ofstream outFile(outputFile, ios::binary);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    char ch;\n    while (inFile.get(ch)) {\n        ch ^= key;\n        outFile.put(ch);\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "File processed with XOR cipher" << endl;\n}\n\nint main() {\n    char key = \'K\';\n    \n    // Encrypt\n    xorFile("plain.txt", "encrypted.dat", key);\n    \n    // Decrypt (same operation)\n    xorFile("encrypted.dat", "decrypted.txt", key);\n    \n    return 0;\n}',
  hint: 'XOR encryption is symmetric: applying twice restores original.'
},
{
  id: 'cpp_filehandling_30',
  topicId: 'cpp_filehandling',
  question: 'Calculate checksum of file for integrity verification.',
  mathSolution: 'Sum all bytes or use XOR for simple checksum.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nunsigned long computeChecksum(const string& filename) {\n    ifstream file(filename, ios::binary);\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 0;\n    }\n    \n    unsigned long checksum = 0;\n    char ch;\n    \n    while (file.get(ch)) {\n        checksum += static_cast<unsigned char>(ch);\n    }\n    \n    file.close();\n    return checksum;\n}\n\nint main() {\n    string filename = "test.txt";\n    unsigned long checksum = computeChecksum(filename);\n    \n    cout << "Checksum of \'" << filename << "\': " << checksum << endl;\n    \n    return 0;\n}',
  hint: 'Checksum helps verify data integrity after transfer.'
},
{
  id: 'cpp_filehandling_31',
  topicId: 'cpp_filehandling',
  question: 'Compare two files for equality.',
  mathSolution: 'Read both files byte by byte and compare.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nbool compareFiles(const string& file1, const string& file2) {\n    ifstream f1(file1, ios::binary);\n    ifstream f2(file2, ios::binary);\n    \n    if (!f1 || !f2) {\n        cout << "Cannot open files" << endl;\n        return false;\n    }\n    \n    char ch1, ch2;\n    while (f1.get(ch1) && f2.get(ch2)) {\n        if (ch1 != ch2) return false;\n    }\n    \n    // Both should be at EOF if files are equal\n    return f1.eof() && f2.eof();\n}\n\nint main() {\n    string file1 = "original.txt";\n    string file2 = "copy.txt";\n    \n    if (compareFiles(file1, file2)) {\n        cout << "Files are identical" << endl;\n    } else {\n        cout << "Files are different" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Compare byte by byte for accurate file comparison.'
},
{
  id: 'cpp_filehandling_32',
  topicId: 'cpp_filehandling',
  question: 'Find and replace text in large file without loading entirely.',
  mathSolution: 'Process file in chunks, write to temporary file.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <cstdio>\nusing namespace std;\n\nvoid findReplace(const string& filename, const string& search, const string& replace) {\n    ifstream inFile(filename);\n    ofstream outFile(filename + ".tmp");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    string line;\n    while (getline(inFile, line)) {\n        size_t pos = 0;\n        while ((pos = line.find(search, pos)) != string::npos) {\n            line.replace(pos, search.length(), replace);\n            pos += replace.length();\n        }\n        outFile << line << endl;\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    remove(filename.c_str());\n    rename((filename + ".tmp").c_str(), filename.c_str());\n    \n    cout << "Find and replace completed" << endl;\n}\n\nint main() {\n    findReplace("document.txt", "old", "new");\n    return 0;\n}',
  hint: 'Use temporary file to avoid data loss during replacement.'
},
{
  id: 'cpp_filehandling_33',
  topicId: 'cpp_filehandling',
  question: 'Extract specific columns from CSV file.',
  mathSolution: 'Parse CSV and extract desired column indices.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream inFile("data.csv");\n    ofstream outFile("extracted.csv");\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    vector<int> columnsToExtract = {0, 2, 3}; // Extract columns 1,3,4\n    string line;\n    \n    while (getline(inFile, line)) {\n        stringstream ss(line);\n        string field;\n        vector<string> fields;\n        \n        while (getline(ss, field, \',\')) {\n            fields.push_back(field);\n        }\n        \n        for (size_t i = 0; i < columnsToExtract.size(); i++) {\n            int col = columnsToExtract[i];\n            if (col < (int)fields.size()) {\n                outFile << fields[col];\n                if (i < columnsToExtract.size() - 1) outFile << \',\';\n            }\n        }\n        outFile << "\\n";\n    }\n    \n    inFile.close();\n    outFile.close();\n    \n    cout << "Columns extracted successfully" << endl;\n    \n    return 0;\n}',
  hint: 'CSV extraction selects specific columns while preserving row structure.'
},
{
  id: 'cpp_filehandling_34',
  topicId: 'cpp_filehandling',
  question: 'Implement simple database with file storage.',
  mathSolution: 'Store records in binary file with header for indexing.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <cstring>\nusing namespace std;\n\nstruct Record {\n    int id;\n    char name[50];\n    double value;\n};\n\nclass SimpleDB {\nprivate:\n    string filename;\n    \npublic:\n    SimpleDB(const string& f) : filename(f) {}\n    \n    void addRecord(const Record& record) {\n        ofstream file(filename, ios::binary | ios::app);\n        if (!file) {\n            cout << "Cannot open database" << endl;\n            return;\n        }\n        file.write(reinterpret_cast<const char*>(&record), sizeof(Record));\n        file.close();\n    }\n    \n    vector<Record> getAllRecords() {\n        vector<Record> records;\n        ifstream file(filename, ios::binary);\n        if (!file) return records;\n        \n        Record record;\n        while (file.read(reinterpret_cast<char*>(&record), sizeof(Record))) {\n            records.push_back(record);\n        }\n        file.close();\n        return records;\n    }\n    \n    Record* findRecord(int id) {\n        ifstream file(filename, ios::binary);\n        if (!file) return nullptr;\n        \n        Record record;\n        while (file.read(reinterpret_cast<char*>(&record), sizeof(Record))) {\n            if (record.id == id) {\n                file.close();\n                return new Record(record);\n            }\n        }\n        file.close();\n        return nullptr;\n    }\n};\n\nint main() {\n    SimpleDB db("data.db");\n    \n    // Add records\n    Record r1 = {1, "Item1", 10.5};\n    Record r2 = {2, "Item2", 20.3};\n    Record r3 = {3, "Item3", 30.7};\n    db.addRecord(r1);\n    db.addRecord(r2);\n    db.addRecord(r3);\n    \n    // Find record\n    Record* found = db.findRecord(2);\n    if (found) {\n        cout << "Found: ID=" << found->id << ", Name=" << found->name \n             << ", Value=" << found->value << endl;\n        delete found;\n    }\n    \n    // List all records\n    auto records = db.getAllRecords();\n    cout << "All records:" << endl;\n    for (const auto& r : records) {\n        cout << r.id << ": " << r.name << " = " << r.value << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Binary file storage is efficient for structured data.'
},
{
  id: 'cpp_filehandling_35',
  topicId: 'cpp_filehandling',
  question: 'Implement file versioning system.',
  mathSolution: 'Create numbered backups when file is modified.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <filesystem>\nusing namespace std;\nnamespace fs = filesystem;\n\nvoid backupFile(const string& filename) {\n    int version = 1;\n    string backupName;\n    \n    do {\n        backupName = filename + ".v" + to_string(version);\n        version++;\n    } while (fs::exists(backupName));\n    \n    fs::copy(filename, backupName);\n    cout << "Backup created: " << backupName << endl;\n}\n\nint main() {\n    string filename = "document.txt";\n    \n    // Simulate file modifications\n    backupFile(filename);\n    \n    ofstream file(filename, ios::app);\n    file << "New content added\\n";\n    file.close();\n    \n    backupFile(filename);\n    \n    return 0;\n}',
  hint: 'File versioning preserves history for rollback.'
},
{
  id: 'cpp_filehandling_36',
  topicId: 'cpp_filehandling',
  question: 'Monitor file for changes (last modification time).',
  mathSolution: 'Check file modification time periodically.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <chrono>\n#include <thread>\n#include <filesystem>\n#include <ctime>\nusing namespace std;\nnamespace fs = filesystem;\n\nauto getLastModified(const string& filename) {\n    return fs::last_write_time(filename);\n}\n\nint main() {\n    string filename = "monitor.txt";\n    \n    // Create file if not exists\n    ofstream(filename).close();\n    \n    auto lastMod = getLastModified(filename);\n    cout << "Monitoring file: " << filename << endl;\n    \n    while (true) {\n        this_thread::sleep_for(chrono::seconds(1));\n        \n        auto currentMod = getLastModified(filename);\n        if (currentMod != lastMod) {\n            time_t t = fs::file_time_type::clock::to_time_t(currentMod);\n            cout << "File changed at: " << ctime(&t);\n            ifstream file(filename);\n            string content;\n            while (getline(file, content)) {\n                cout << "New content: " << content << endl;\n            }\n            file.close();\n            lastMod = currentMod;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'File monitoring detects changes for automatic processing.'
},
{
  id: 'cpp_filehandling_37',
  topicId: 'cpp_filehandling',
  question: 'Parse log file and extract errors.',
  mathSolution: 'Search for lines containing error keywords.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream logFile("application.log");\n    ofstream errorFile("errors.log");\n    \n    if (!logFile || !errorFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    vector<string> errorKeywords = {"ERROR", "FATAL", "EXCEPTION", "CRITICAL"};\n    string line;\n    int errorCount = 0;\n    \n    while (getline(logFile, line)) {\n        bool isError = false;\n        for (const auto& keyword : errorKeywords) {\n            if (line.find(keyword) != string::npos) {\n                isError = true;\n                break;\n            }\n        }\n        \n        if (isError) {\n            errorFile << line << endl;\n            errorCount++;\n        }\n    }\n    \n    logFile.close();\n    errorFile.close();\n    \n    cout << "Found " << errorCount << " error lines" << endl;\n    \n    return 0;\n}',
  hint: 'Log parsing helps in debugging and monitoring applications.'
},
{
  id: 'cpp_filehandling_38',
  topicId: 'cpp_filehandling',
  question: 'Generate HTML report from data file.',
  mathSolution: 'Read data and format as HTML table.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    ifstream dataFile("data.csv");\n    ofstream htmlFile("report.html");\n    \n    if (!dataFile || !htmlFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    htmlFile << "<html>\\n<head><title>Data Report</title></head>\\n<body>\\n";\n    htmlFile << "<h1>Data Report</h1>\\n<table border=\'1\'>\\n";\n    \n    string line;\n    int rowNum = 0;\n    \n    while (getline(dataFile, line)) {\n        htmlFile << "<tr>\\n";\n        stringstream ss(line);\n        string field;\n        \n        while (getline(ss, field, \',\')) {\n            if (rowNum == 0) {\n                htmlFile << "<th>" << field << "</th>\\n";\n            } else {\n                htmlFile << "<td>" << field << "</td>\\n";\n            }\n        }\n        htmlFile << "</tr>\\n";\n        rowNum++;\n    }\n    \n    htmlFile << "</table>\\n</body>\\n</html>";\n    \n    dataFile.close();\n    htmlFile.close();\n    \n    cout << "HTML report generated" << endl;\n    \n    return 0;\n}',
  hint: 'HTML generation creates human-readable reports from data.'
},
{
  id: 'cpp_filehandling_39',
  topicId: 'cpp_filehandling',
  question: 'Read configuration file with key-value pairs.',
  mathSolution: 'Parse lines with format key=value.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, string> config;\n    \n    ifstream configFile("config.ini");\n    if (!configFile) {\n        cout << "Creating default config file" << endl;\n        ofstream outFile("config.ini");\n        outFile << "host=localhost\\n";\n        outFile << "port=8080\\n";\n        outFile << "debug=true\\n";\n        outFile.close();\n        configFile.open("config.ini");\n    }\n    \n    string line;\n    while (getline(configFile, line)) {\n        size_t pos = line.find(\'=\');\n        if (pos != string::npos) {\n            string key = line.substr(0, pos);\n            string value = line.substr(pos + 1);\n            config[key] = value;\n        }\n    }\n    configFile.close();\n    \n    // Display configuration\n    cout << "Configuration:" << endl;\n    for (const auto& pair : config) {\n        cout << pair.first << " = " << pair.second << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Configuration files allow easy application parameter adjustment.'
},
{
  id: 'cpp_filehandling_40',
  topicId: 'cpp_filehandling',
  question: 'Implement file locking for concurrent access.',
  mathSolution: 'Use flock or lockf for advisory file locking.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <thread>\n#include <mutex>\n#include <chrono>\n#include <string>\nusing namespace std;\n\nclass FileLocker {\nprivate:\n    mutex mtx;\n    \npublic:\n    void writeData(const string& filename, const string& data) {\n        lock_guard<mutex> lock(mtx);\n        ofstream file(filename, ios::app);\n        if (!file) {\n            cout << "Cannot open file" << endl;\n            return;\n        }\n        file << data << endl;\n        file.close();\n        this_thread::sleep_for(chrono::milliseconds(100));\n    }\n};\n\nvoid writer(FileLocker& locker, int id) {\n    for (int i = 0; i < 5; i++) {\n        locker.writeData("shared.txt", "Thread " + to_string(id) + ": message " + to_string(i));\n    }\n}\n\nint main() {\n    FileLocker locker;\n    \n    thread t1(writer, ref(locker), 1);\n    thread t2(writer, ref(locker), 2);\n    thread t3(writer, ref(locker), 3);\n    \n    t1.join();\n    t2.join();\n    t3.join();\n    \n    cout << "All threads completed" << endl;\n    \n    return 0;\n}',
  hint: 'File locking prevents data corruption in concurrent writes.'
},
{
  id: 'cpp_filehandling_41',
  topicId: 'cpp_filehandling',
  question: 'Implement simple text indexer for fast search.',
  mathSolution: 'Build map of words to line numbers.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <map>\n#include <set>\n#include <sstream>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\n\nint main() {\n    map<string, set<int>> wordIndex;\n    \n    ifstream file("document.txt");\n    if (!file) {\n        cout << "Cannot open file" << endl;\n        return 1;\n    }\n    \n    string line;\n    int lineNum = 0;\n    \n    while (getline(file, line)) {\n        lineNum++;\n        stringstream ss(line);\n        string word;\n        \n        while (ss >> word) {\n            // Remove punctuation\n            word.erase(remove_if(word.begin(), word.end(), ::ispunct), word.end());\n            transform(word.begin(), word.end(), word.begin(), ::tolower);\n            wordIndex[word].insert(lineNum);\n        }\n    }\n    file.close();\n    \n    // Search\n    string searchWord;\n    cout << "Enter word to search: ";\n    cin >> searchWord;\n    transform(searchWord.begin(), searchWord.end(), searchWord.begin(), ::tolower);\n    \n    if (wordIndex.find(searchWord) != wordIndex.end()) {\n        cout << "Found at lines: ";\n        for (int line : wordIndex[searchWord]) {\n            cout << line << " ";\n        }\n        cout << endl;\n    } else {\n        cout << "Word not found" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Indexer speeds up text search by pre-processing word locations.'
},
{
  id: 'cpp_filehandling_42',
  topicId: 'cpp_filehandling',
  question: 'Implement simple archive (tar-like) file format.',
  mathSolution: 'Store multiple files with headers in single archive.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <cstring>\nusing namespace std;\n\nstruct FileHeader {\n    char name[100];\n    size_t size;\n};\n\nvoid createArchive(const string& archiveName, const vector<string>& files) {\n    ofstream archive(archiveName, ios::binary);\n    \n    for (const auto& filename : files) {\n        ifstream inFile(filename, ios::binary);\n        if (!inFile) {\n            cout << "Cannot open " << filename << endl;\n            continue;\n        }\n        \n        // Get file size\n        inFile.seekg(0, ios::end);\n        size_t size = inFile.tellg();\n        inFile.seekg(0, ios::beg);\n        \n        // Write header\n        FileHeader header;\n        strncpy(header.name, filename.c_str(), 99);\n        header.name[99] = \'\\0\';\n        header.size = size;\n        archive.write(reinterpret_cast<char*>(&header), sizeof(header));\n        \n        // Write file content\n        char* buffer = new char[size];\n        inFile.read(buffer, size);\n        archive.write(buffer, size);\n        delete[] buffer;\n        inFile.close();\n        cout << "Added: " << filename << " (" << size << " bytes)" << endl;\n    }\n    archive.close();\n}\n\nvoid extractArchive(const string& archiveName) {\n    ifstream archive(archiveName, ios::binary);\n    \n    FileHeader header;\n    while (archive.read(reinterpret_cast<char*>(&header), sizeof(header))) {\n        char* buffer = new char[header.size];\n        archive.read(buffer, header.size);\n        \n        ofstream outFile(header.name, ios::binary);\n        outFile.write(buffer, header.size);\n        outFile.close();\n        delete[] buffer;\n        cout << "Extracted: " << header.name << endl;\n    }\n    archive.close();\n}\n\nint main() {\n    vector<string> files = {"file1.txt", "file2.txt", "file3.txt"};\n    createArchive("data.arc", files);\n    extractArchive("data.arc");\n    \n    return 0;\n}',
  hint: 'Archiving combines multiple files into one for easier distribution.'
},
{
  "id": "cpp_filehandling_43",
  "topicId": "cpp_filehandling",
  "question": "Read file in reverse order (efficient for large files).",
  "mathSolution": "Use seekg to read from end backwards.",
  "codeSolution": "#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid readFileReverse(const string& filename) {\n    ifstream file(filename, ios::binary);\n    if (!file) {\n        cout << \"Cannot open file: \" << filename << endl;\n        return;\n    }\n    \n    file.seekg(0, ios::end);\n    streampos fileSize = file.tellg();\n    \n    if (fileSize <= 0) {\n        cout << \"File is empty\" << endl;\n        file.close();\n        return;\n    }\n    \n    vector<char> buffer;\n    buffer.reserve(1024);\n    \n    for (streampos pos = fileSize - 1; pos >= 0; pos--) {\n        file.seekg(pos);\n        char ch;\n        file.get(ch);\n        buffer.push_back(ch);\n        \n        if (ch == '\\n' || pos == 0) {\n            reverse(buffer.begin(), buffer.end());\n            cout.write(buffer.data(), buffer.size());\n            buffer.clear();\n        }\n    }\n    file.close();\n}\n\nint main() {\n    ofstream sample(\"test.txt\");\n    if (sample) {\n        sample << \"Line 1: Hello World\\n\";\n        sample << \"Line 2: This is a test\\n\";\n        sample << \"Line 3: Reverse order\\n\";\n        sample << \"Line 4: File reading\\n\";\n        sample << \"Line 5: The end\\n\";\n        sample.close();\n        cout << \"Sample file created: test.txt\\n\\n\";\n    }\n    \n    cout << \"=== Reading file in reverse order ===\\n\";\n    readFileReverse(\"test.txt\");\n    \n    return 0;\n}",
  "hint": "Reverse reading is memory-efficient for large files."
},
{
  id: 'cpp_filehandling_44',
  topicId: 'cpp_filehandling',
  question: 'Implement simple file encryption with password.',
  mathSolution: 'Use password-derived key for XOR encryption.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nstring generateKey(const string& password, size_t size) {\n    string key;\n    while (key.size() < size) {\n        key += password;\n    }\n    key.resize(size);\n    return key;\n}\n\nvoid encryptDecrypt(const string& inputFile, const string& outputFile, const string& password) {\n    ifstream inFile(inputFile, ios::binary);\n    ofstream outFile(outputFile, ios::binary);\n    \n    if (!inFile || !outFile) {\n        cout << "Cannot open files" << endl;\n        return;\n    }\n    \n    inFile.seekg(0, ios::end);\n    size_t size = inFile.tellg();\n    inFile.seekg(0, ios::beg);\n    \n    string key = generateKey(password, size);\n    \n    char* buffer = new char[size];\n    inFile.read(buffer, size);\n    \n    for (size_t i = 0; i < size; i++) {\n        buffer[i] ^= key[i];\n    }\n    \n    outFile.write(buffer, size);\n    \n    delete[] buffer;\n    inFile.close();\n    outFile.close();\n    \n    cout << "Operation completed" << endl;\n}\n\nint main() {\n    string password;\n    cout << "Enter password: ";\n    getline(cin, password);\n    \n    encryptDecrypt("plain.txt", "encrypted.enc", password);\n    encryptDecrypt("encrypted.enc", "decrypted.txt", password);\n    \n    return 0;\n}',
  hint: 'Password-based encryption provides basic file security.'
},
{
  id: 'cpp_filehandling_45',
  topicId: 'cpp_filehandling',
  question: 'Implement file shredder (secure deletion).',
  mathSolution: 'Overwrite file multiple times before deletion.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <random>\n#include <cstdio>\nusing namespace std;\n\nvoid shredFile(const string& filename, int passes = 3) {\n    // Get file size\n    ifstream inFile(filename, ios::binary);\n    if (!inFile) {\n        cout << "File not found" << endl;\n        return;\n    }\n    \n    inFile.seekg(0, ios::end);\n    streamsize size = inFile.tellg();\n    inFile.close();\n    \n    random_device rd;\n    mt19937 gen(rd());\n    uniform_int_distribution<> dis(0, 255);\n    \n    for (int pass = 0; pass < passes; pass++) {\n        ofstream outFile(filename, ios::binary);\n        if (!outFile) {\n            cout << "Cannot open file for writing" << endl;\n            return;\n        }\n        \n        for (streamsize i = 0; i < size; i++) {\n            char byte = static_cast<char>(dis(gen));\n            outFile.put(byte);\n        }\n        outFile.close();\n        cout << "Pass " << pass + 1 << " completed" << endl;\n    }\n    \n    // Delete the file\n    if (remove(filename.c_str()) == 0) {\n        cout << "File securely deleted" << endl;\n    } else {\n        cout << "Failed to delete file" << endl;\n    }\n}\n\nint main() {\n    string filename;\n    cout << "Enter file to shred: ";\n    cin >> filename;\n    \n    shredFile(filename, 5);\n    \n    return 0;\n}',
  hint: 'Overwriting prevents data recovery from deleted files.'
},
{
  id: 'cpp_filehandling_46',
  topicId: 'cpp_filehandling',
  question: 'Implement simple diff tool to compare files.',
  mathSolution: 'Use longest common subsequence algorithm.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvector<string> readLines(const string& filename) {\n    vector<string> lines;\n    ifstream file(filename);\n    string line;\n    while (getline(file, line)) {\n        lines.push_back(line);\n    }\n    return lines;\n}\n\nvoid printDiff(const vector<string>& file1, const vector<string>& file2) {\n    size_t i = 0, j = 0;\n    \n    while (i < file1.size() && j < file2.size()) {\n        if (file1[i] == file2[j]) {\n            cout << "  " << file1[i] << endl;\n            i++; j++;\n        } else {\n            if (i + 1 < file1.size() && file1[i + 1] == file2[j]) {\n                cout << "- " << file1[i] << endl;\n                i++;\n            } else if (j + 1 < file2.size() && file1[i] == file2[j + 1]) {\n                cout << "+ " << file2[j] << endl;\n                j++;\n            } else {\n                cout << "- " << file1[i] << endl;\n                cout << "+ " << file2[j] << endl;\n                i++; j++;\n            }\n        }\n    }\n    \n    while (i < file1.size()) {\n        cout << "- " << file1[i++] << endl;\n    }\n    \n    while (j < file2.size()) {\n        cout << "+ " << file2[j++] << endl;\n    }\n}\n\nint main() {\n    vector<string> file1 = readLines("old.txt");\n    vector<string> file2 = readLines("new.txt");\n    \n    cout << "Differences:" << endl;\n    printDiff(file1, file2);\n    \n    return 0;\n}',
  hint: 'Diff shows changes between files: - removed, + added.'
},
{
  id: 'cpp_filehandling_47',
  topicId: 'cpp_filehandling',
  question: 'Implement file watcher that triggers action on change.',
  mathSolution: 'Monitor file modification time and execute callback.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <thread>\n#include <chrono>\n#include <functional>\n#include <filesystem>\n#include <string>\n#include <ctime>\nusing namespace std;\nnamespace fs = filesystem;\n\nclass FileWatcher {\nprivate:\n    string filename;\n    fs::file_time_type lastWriteTime;\n    function<void()> callback;\n    bool running;\n    \npublic:\n    FileWatcher(const string& file, function<void()> cb) \n        : filename(file), callback(cb), running(true) {\n        if (fs::exists(filename)) {\n            lastWriteTime = fs::last_write_time(filename);\n        }\n    }\n    \n    void start() {\n        while (running) {\n            this_thread::sleep_for(chrono::seconds(1));\n            if (fs::exists(filename)) {\n                auto currentTime = fs::last_write_time(filename);\n                if (currentTime != lastWriteTime) {\n                    lastWriteTime = currentTime;\n                    callback();\n                }\n            }\n        }\n    }\n    \n    void stop() { running = false; }\n};\n\nint main() {\n    FileWatcher watcher("data.txt", []() {\n        time_t now = time(nullptr);\n        cout << "File changed at " << ctime(&now);\n        ifstream file("data.txt");\n        string content;\n        if (getline(file, content)) {\n            cout << "New content: " << content << endl;\n        }\n        file.close();\n    });\n    \n    cout << "Watching file for changes..." << endl;\n    \n    // Run for 10 seconds then exit (for demo)\n    thread watcherThread([&watcher]() { watcher.start(); });\n    this_thread::sleep_for(chrono::seconds(10));\n    watcher.stop();\n    watcherThread.join();\n    \n    return 0;\n}',
  hint: 'File watcher enables reactive programming on file changes.'
},
{
  id: 'cpp_filehandling_48',
  topicId: 'cpp_filehandling',
  question: 'Implement CSV to JSON converter.',
  mathSolution: 'Parse CSV and output JSON format.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nint main() {\n    // Create sample CSV file for demonstration\n    ofstream sampleCSV("data.csv");\n    if (sampleCSV) {\n        sampleCSV << "name,age,city\\n";\n        sampleCSV << "John Doe,30,New York\\n";\n        sampleCSV << "Jane Smith,25,Los Angeles\\n";\n        sampleCSV << "Bob Johnson,35,Chicago\\n";\n        sampleCSV.close();\n        cout << "Sample CSV file created: data.csv\\n\\n";\n    }\n    \n    ifstream csvFile("data.csv");\n    ofstream jsonFile("data.json");\n    \n    if (!csvFile || !jsonFile) {\n        cout << "Cannot open files" << endl;\n        return 1;\n    }\n    \n    vector<string> headers;\n    string line;\n    \n    // Read headers\n    getline(csvFile, line);\n    stringstream ss(line);\n    string field;\n    while (getline(ss, field, \',\')) {\n        headers.push_back(field);\n    }\n    \n    jsonFile << "[\\n";\n    int rowCount = 0;\n    \n    while (getline(csvFile, line)) {\n        stringstream ss2(line);\n        vector<string> values;\n        \n        while (getline(ss2, field, \',\')) {\n            values.push_back(field);\n        }\n        \n        if (rowCount > 0) jsonFile << ",\\n";\n        jsonFile << "  {\\n";\n        for (size_t i = 0; i < headers.size(); i++) {\n            jsonFile << "    \\"" << headers[i] << "\\": \\"";\n            string val = (i < values.size()) ? values[i] : "";\n            // Escape double quotes in values\n            for (char c : val) {\n                if (c == \'"\') jsonFile << "\\\\\\"";\n                else jsonFile << c;\n            }\n            jsonFile << "\\"";\n            if (i < headers.size() - 1) jsonFile << ",";\n            jsonFile << "\\n";\n        }\n        jsonFile << "  }";\n        rowCount++;\n    }\n    \n    jsonFile << "\\n]\\n";\n    \n    csvFile.close();\n    jsonFile.close();\n    \n    cout << "CSV to JSON conversion complete: data.json" << endl;\n    \n    // Display the generated JSON\n    ifstream jsonOutput("data.json");\n    if (jsonOutput) {\n        cout << "\\nGenerated JSON content:\\n";\n        string jsonLine;\n        while (getline(jsonOutput, jsonLine)) {\n            cout << jsonLine << endl;\n        }\n        jsonOutput.close();\n    }\n    \n    return 0;\n}',
  hint: 'JSON format is widely used for web APIs and data exchange.'
},
{
  id: 'cpp_filehandling_49',
  topicId: 'cpp_filehandling',
  question: 'Implement binary file to hex dump converter.',
  mathSolution: 'Read bytes and display hexadecimal representation.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <iomanip>\n#include <cctype>\n#include <string>\nusing namespace std;\n\nvoid hexDump(const string& filename) {\n    ifstream file(filename, ios::binary);\n    if (!file) {\n        cout << "Cannot open file: " << filename << endl;\n        return;\n    }\n    \n    const int BYTES_PER_LINE = 16;\n    unsigned char buffer[BYTES_PER_LINE];\n    int offset = 0;\n    \n    cout << hex << uppercase;\n    \n    while (file.read(reinterpret_cast<char*>(buffer), BYTES_PER_LINE) || file.gcount() > 0) {\n        int bytesRead = static_cast<int>(file.gcount());\n        \n        cout << setw(8) << setfill(\'0\') << offset << ": ";\n        \n        // Print hex\n        for (int i = 0; i < BYTES_PER_LINE; i++) {\n            if (i < bytesRead) {\n                cout << setw(2) << setfill(\'0\') << static_cast<int>(buffer[i]) << " ";\n            } else {\n                cout << "   ";\n            }\n            if (i == 7) cout << " ";\n        }\n        \n        cout << " |";\n        \n        // Print ASCII\n        for (int i = 0; i < bytesRead; i++) {\n            char c = static_cast<char>(buffer[i]);\n            cout << (isprint(static_cast<unsigned char>(c)) ? c : \'.\');\n        }\n        \n        cout << "|" << endl;\n        offset += BYTES_PER_LINE;\n    }\n    \n    file.close();\n}\n\nint main() {\n    // Create a sample binary file for demonstration\n    ofstream sample("binary.dat", ios::binary);\n    if (sample) {\n        const char* testData = "Hello World!\\x00\\x01\\x02\\x03\\xFFBinary Data";\n        sample.write(testData, 32);\n        sample.close();\n        cout << "Sample binary file created: binary.dat\\n\\n";\n    }\n    \n    hexDump("binary.dat");\n    return 0;\n}',
  hint: 'Hex dump helps analyze binary file contents.'
},
{
  id: 'cpp_filehandling_50',
  topicId: 'cpp_filehandling',
  question: 'Create comprehensive file handling demonstration program.',
  mathSolution: 'Combine multiple file operations in one example.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <filesystem>\nusing namespace std;\nnamespace fs = filesystem;\n\nclass FileManager {\nprivate:\n    string currentDir;\n    \npublic:\n    FileManager() : currentDir(fs::current_path().string()) {}\n    \n    void createFile(const string& name) {\n        ofstream file(name);\n        if (file) {\n            cout << "File created: " << name << endl;\n            file.close();\n        } else {\n            cout << "Failed to create file" << endl;\n        }\n    }\n    \n    void writeFile(const string& name, const string& content) {\n        ofstream file(name, ios::app);\n        if (file) {\n            file << content << endl;\n            cout << "Data written to " << name << endl;\n            file.close();\n        }\n    }\n    \n    void readFile(const string& name) {\n        ifstream file(name);\n        if (file) {\n            string line;\n            cout << "Content of " << name << ":\\n";\n            while (getline(file, line)) {\n                cout << line << endl;\n            }\n            file.close();\n        } else {\n            cout << "Cannot read file" << endl;\n        }\n    }\n    \n    void copyFile(const string& src, const string& dest) {\n        ifstream source(src, ios::binary);\n        ofstream destination(dest, ios::binary);\n        \n        if (source && destination) {\n            destination << source.rdbuf();\n            cout << "File copied: " << src << " -> " << dest << endl;\n        } else {\n            cout << "Copy failed" << endl;\n        }\n    }\n    \n    void moveFile(const string& src, const string& dest) {\n        fs::rename(src, dest);\n        cout << "File moved: " << src << " -> " << dest << endl;\n    }\n    \n    void deleteFile(const string& name) {\n        if (fs::remove(name)) {\n            cout << "File deleted: " << name << endl;\n        } else {\n            cout << "Cannot delete file" << endl;\n        }\n    }\n    \n    void listDirectory() {\n        cout << "Directory listing of \\"" << currentDir << "\\":\\n";\n        for (const auto& entry : fs::directory_iterator(currentDir)) {\n            cout << "  " << entry.path().filename().string()\n                 << (fs::is_directory(entry) ? "/" : "") << endl;\n        }\n    }\n    \n    void fileInfo(const string& name) {\n        if (fs::exists(name)) {\n            auto size = fs::file_size(name);\n            cout << "File: " << name << endl;\n            cout << "  Size: " << size << " bytes" << endl;\n            cout << "  Exists: Yes" << endl;\n        } else {\n            cout << "File not found: " << name << endl;\n        }\n    }\n};\n\nint main() {\n    cout << "=== File Handling Demonstration ===\\n\\n";\n    \n    FileManager fm;\n    \n    // Create and write files\n    fm.createFile("test1.txt");\n    fm.writeFile("test1.txt", "Hello, this is line 1");\n    fm.writeFile("test1.txt", "This is line 2");\n    fm.writeFile("test1.txt", "This is line 3");\n    \n    fm.createFile("test2.txt");\n    fm.writeFile("test2.txt", "Content for second file");\n    \n    // Read files\n    fm.readFile("test1.txt");\n    cout << endl;\n    \n    // File information\n    fm.fileInfo("test1.txt");\n    cout << endl;\n    \n    // Copy file\n    fm.copyFile("test1.txt", "test1_copy.txt");\n    cout << endl;\n    \n    // List directory\n    fm.listDirectory();\n    cout << endl;\n    \n    // Move file\n    fm.moveFile("test2.txt", "moved.txt");\n    fm.readFile("moved.txt");\n    cout << endl;\n    \n    // Delete files\n    fm.deleteFile("test1.txt");\n    fm.deleteFile("test1_copy.txt");\n    fm.deleteFile("moved.txt");\n    \n    cout << "\\n=== File Operations Completed ===\\n";\n    \n    return 0;\n}',
  hint: 'This demo covers file creation, writing, reading, copying, moving, deletion, and directory listing.'
},
//dsa
{
  id: 'cpp_dsa_1',
  topicId: 'cpp_dsa',
  question: 'Implement a stack using array with push, pop, and peek operations.',
  mathSolution: 'Stack follows LIFO (Last In First Out) principle.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Stack {\nprivate:\n    int* arr;\n    int top;\n    int capacity;\n    \npublic:\n    Stack(int size) {\n        arr = new int[size];\n        capacity = size;\n        top = -1;\n    }\n    \n    void push(int x) {\n        if (top == capacity - 1) {\n            cout << "Stack Overflow\\n";\n            return;\n        }\n        arr[++top] = x;\n    }\n    \n    int pop() {\n        if (top == -1) {\n            cout << "Stack Underflow\\n";\n            return -1;\n        }\n        return arr[top--];\n    }\n    \n    int peek() {\n        if (top == -1) return -1;\n        return arr[top];\n    }\n    \n    bool isEmpty() { return top == -1; }\n    \n    ~Stack() { delete[] arr; }\n};\n\nint main() {\n    Stack s(5);\n    s.push(10);\n    s.push(20);\n    s.push(30);\n    cout << s.pop() << endl;\n    cout << s.peek() << endl;\n    return 0;\n}',
  hint: 'Stack uses single pointer (top) to track elements.'
},
{
  id: 'cpp_dsa_2',
  topicId: 'cpp_dsa',
  question: 'Implement a queue using array with enqueue and dequeue operations.',
  mathSolution: 'Queue follows FIFO (First In First Out) principle.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Queue {\nprivate:\n    int* arr;\n    int front, rear, capacity;\n    \npublic:\n    Queue(int size) {\n        arr = new int[size];\n        capacity = size;\n        front = 0;\n        rear = -1;\n    }\n    \n    void enqueue(int x) {\n        if (rear == capacity - 1) {\n            cout << "Queue Overflow\\n";\n            return;\n        }\n        arr[++rear] = x;\n    }\n    \n    int dequeue() {\n        if (front > rear) {\n            cout << "Queue Underflow\\n";\n            return -1;\n        }\n        return arr[front++];\n    }\n    \n    int peek() {\n        if (front > rear) return -1;\n        return arr[front];\n    }\n    \n    bool isEmpty() { return front > rear; }\n    \n    ~Queue() { delete[] arr; }\n};\n\nint main() {\n    Queue q(5);\n    q.enqueue(10);\n    q.enqueue(20);\n    q.enqueue(30);\n    cout << q.dequeue() << endl;\n    cout << q.peek() << endl;\n    return 0;\n}',
  hint: 'Queue uses two pointers (front and rear) for operations.'
},
{
  id: 'cpp_dsa_3',
  topicId: 'cpp_dsa',
  question: 'Implement a singly linked list node and basic operations.',
  mathSolution: 'Linked list consists of nodes with data and next pointer.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* next;\n    Node(int val) : data(val), next(nullptr) {}\n};\n\nclass LinkedList {\nprivate:\n    Node* head;\n    \npublic:\n    LinkedList() : head(nullptr) {}\n    \n    void insertAtBeginning(int val) {\n        Node* newNode = new Node(val);\n        newNode->next = head;\n        head = newNode;\n    }\n    \n    void insertAtEnd(int val) {\n        Node* newNode = new Node(val);\n        if (!head) {\n            head = newNode;\n            return;\n        }\n        Node* temp = head;\n        while (temp->next) temp = temp->next;\n        temp->next = newNode;\n    }\n    \n    void deleteNode(int val) {\n        if (!head) return;\n        if (head->data == val) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n            return;\n        }\n        Node* temp = head;\n        while (temp->next && temp->next->data != val) {\n            temp = temp->next;\n        }\n        if (temp->next) {\n            Node* toDelete = temp->next;\n            temp->next = temp->next->next;\n            delete toDelete;\n        }\n    }\n    \n    void display() {\n        Node* temp = head;\n        while (temp) {\n            cout << temp->data << " -> ";\n            temp = temp->next;\n        }\n        cout << "NULL\\n";\n    }\n    \n    ~LinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    LinkedList list;\n    list.insertAtBeginning(10);\n    list.insertAtEnd(20);\n    list.insertAtBeginning(5);\n    list.display();\n    list.deleteNode(10);\n    list.display();\n    return 0;\n}',
  hint: 'Singly linked list has O(1) insertion at head, O(n) at tail.'
},
{
  id: 'cpp_dsa_4',
  topicId: 'cpp_dsa',
  question: 'Implement binary search on sorted array.',
  mathSolution: 'Divide and conquer: compare with middle element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint binarySearch(int arr[], int left, int right, int target) {\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {1, 3, 5, 7, 9, 11, 13};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target = 7;\n    int result = binarySearch(arr, 0, n - 1, target);\n    if (result != -1)\n        cout << "Found at index: " << result << endl;\n    else\n        cout << "Not found" << endl;\n    return 0;\n}',
  hint: 'Binary search requires sorted array, O(log n) time.'
},
{
  id: 'cpp_dsa_5',
  topicId: 'cpp_dsa',
  question: 'Implement bubble sort algorithm.',
  mathSolution: 'Repeatedly swap adjacent elements if in wrong order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n                swapped = true;\n            }\n        }\n        if (!swapped) break;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    bubbleSort(arr, n);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Bubble sort O(n²) time, O(1) space; stable sort.'
},
{
  id: 'cpp_dsa_6',
  topicId: 'cpp_dsa',
  question: 'Implement selection sort algorithm.',
  mathSolution: 'Select minimum element and place at beginning.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) minIdx = j;\n        }\n        if (minIdx != i) swap(arr[i], arr[minIdx]);\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    selectionSort(arr, n);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Selection sort O(n²) time, O(1) space; not stable.'
},
{
  id: 'cpp_dsa_7',
  topicId: 'cpp_dsa',
  question: 'Implement insertion sort algorithm.',
  mathSolution: 'Build sorted array by inserting elements in correct position.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid insertionSort(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    insertionSort(arr, n);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Insertion sort O(n²) worst, O(n) best; good for small arrays.'
},
{
  id: 'cpp_dsa_8',
  topicId: 'cpp_dsa',
  question: 'Implement merge sort algorithm.',
  mathSolution: 'Divide array, sort recursively, merge results.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid merge(int arr[], int left, int mid, int right) {\n    int n1 = mid - left + 1;\n    int n2 = right - mid;\n    int* L = new int[n1];\n    int* R = new int[n2];\n    \n    for (int i = 0; i < n1; i++) L[i] = arr[left + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];\n    \n    int i = 0, j = 0, k = left;\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n    \n    delete[] L;\n    delete[] R;\n}\n\nvoid mergeSort(int arr[], int left, int right) {\n    if (left < right) {\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n}\n\nint main() {\n    int arr[] = {38, 27, 43, 3, 9, 82, 10};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    mergeSort(arr, 0, n - 1);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Merge sort O(n log n) time, O(n) space; stable sort.'
},
{
  id: 'cpp_dsa_9',
  topicId: 'cpp_dsa',
  question: 'Implement quick sort algorithm.',
  mathSolution: 'Choose pivot, partition, recursively sort partitions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for (int j = low; j < high; j++) {\n        if (arr[j] <= pivot) {\n            i++;\n            swap(arr[i], arr[j]);\n        }\n    }\n    swap(arr[i + 1], arr[high]);\n    return i + 1;\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nint main() {\n    int arr[] = {10, 7, 8, 9, 1, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    quickSort(arr, 0, n - 1);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Quick sort average O(n log n), worst O(n²), in-place.'
},
{
  id: 'cpp_dsa_10',
  topicId: 'cpp_dsa',
  question: 'Implement linear search algorithm.',
  mathSolution: 'Check each element sequentially until found.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint linearSearch(int arr[], int n, int target) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {5, 3, 8, 4, 2};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int target = 8;\n    int result = linearSearch(arr, n, target);\n    if (result != -1)\n        cout << "Found at index: " << result << endl;\n    else\n        cout << "Not found" << endl;\n    return 0;\n}',
  hint: 'Linear search O(n) time; works on unsorted arrays.'
},
{
  id: 'cpp_dsa_11',
  topicId: 'cpp_dsa',
  question: 'Implement two sum problem using hash map.',
  mathSolution: 'Use hash map to store complements for O(n) solution.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <vector>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> map;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (map.find(complement) != map.end()) {\n            return {map[complement], i};\n        }\n        map[nums[i]] = i;\n    }\n    return {};\n}\n\nint main() {\n    vector<int> nums = {2, 7, 11, 15};\n    int target = 9;\n    vector<int> result = twoSum(nums, target);\n    cout << result[0] << ", " << result[1] << endl;\n    return 0;\n}',
  hint: 'Hash map provides O(n) solution instead of O(n²) brute force.'
},
{
  id: 'cpp_dsa_12',
  topicId: 'cpp_dsa',
  question: 'Implement Kadane\'s algorithm for maximum subarray sum.',
  mathSolution: 'Keep running sum, reset if negative, track maximum.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint maxSubarraySum(int arr[], int n) {\n    int maxSoFar = INT_MIN;\n    int maxEndingHere = 0;\n    \n    for (int i = 0; i < n; i++) {\n        maxEndingHere = max(arr[i], maxEndingHere + arr[i]);\n        maxSoFar = max(maxSoFar, maxEndingHere);\n    }\n    return maxSoFar;\n}\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int maxSum = maxSubarraySum(arr, n);\n    cout << "Maximum subarray sum: " << maxSum << endl;\n    return 0;\n}',
  hint: 'Kadane\'s algorithm runs in O(n) time.'
},
{
  id: 'cpp_dsa_13',
  topicId: 'cpp_dsa',
  question: 'Check if string is palindrome using two pointers.',
  mathSolution: 'Compare characters from both ends moving inward.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nbool isPalindrome(string s) {\n    int left = 0, right = s.length() - 1;\n    while (left < right) {\n        while (left < right && !isalnum(s[left])) left++;\n        while (left < right && !isalnum(s[right])) right--;\n        if (tolower(s[left]) != tolower(s[right])) return false;\n        left++;\n        right--;\n    }\n    return true;\n}\n\nint main() {\n    string test = "A man, a plan, a canal: Panama";\n    cout << (isPalindrome(test) ? "Palindrome" : "Not palindrome") << endl;\n    return 0;\n}',
  hint: 'Two-pointer technique O(n) time, O(1) space.'
},
{
  "id": "cpp_dsa_14",
  "topicId": "cpp_dsa",
  "question": "Find first non-repeating character in string.",
  "mathSolution": "Use hash map to count frequencies, then find first with count 1.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nchar firstNonRepeating(const string& s) {\n    unordered_map<char, int> freq;\n    for (char c : s) freq[c]++;\n    for (char c : s) {\n        if (freq[c] == 1) return c;\n    }\n    return '\\0';\n}\n\nint main() {\n    string s = \"swiss\";\n    char result = firstNonRepeating(s);\n    if (result != '\\0')\n        cout << \"First non-repeating: \" << result << endl;\n    else\n        cout << \"None found\" << endl;\n    return 0;\n}",
  "hint": "Two passes O(n) time, O(1) space (for ASCII)."
},
{
  id: 'cpp_dsa_15',
  topicId: 'cpp_dsa',
  question: 'Implement binary tree node and inorder traversal.',
  mathSolution: 'Traverse left, visit node, traverse right.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\n\nvoid inorder(TreeNode* root) {\n    if (!root) return;\n    inorder(root->left);\n    cout << root->val << " ";\n    inorder(root->right);\n}\n\nint main() {\n    TreeNode* root = new TreeNode(2);\n    root->left = new TreeNode(1);\n    root->right = new TreeNode(3);\n    inorder(root);\n    cout << endl;\n    return 0;\n}',
  hint: 'Inorder traversal on BST gives sorted order.'
},
{
  id: 'cpp_dsa_16',
  topicId: 'cpp_dsa',
  question: 'Implement binary search tree insertion.',
  mathSolution: 'Insert at correct position: left if smaller, right if larger.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* left;\n    Node* right;\n    Node(int val) : data(val), left(nullptr), right(nullptr) {}\n};\n\nNode* insert(Node* root, int val) {\n    if (!root) return new Node(val);\n    if (val < root->data) root->left = insert(root->left, val);\n    else if (val > root->data) root->right = insert(root->right, val);\n    return root;\n}\n\nvoid inorder(Node* root) {\n    if (!root) return;\n    inorder(root->left);\n    cout << root->data << " ";\n    inorder(root->right);\n}\n\nint main() {\n    Node* root = nullptr;\n    root = insert(root, 5);\n    insert(root, 3);\n    insert(root, 7);\n    insert(root, 2);\n    insert(root, 4);\n    inorder(root);\n    cout << endl;\n    return 0;\n}',
  hint: 'BST property: left < root < right.'
},
{
  id: 'cpp_dsa_17',
  topicId: 'cpp_dsa',
  question: 'Implement binary search tree search operation.',
  mathSolution: 'Recursively search left or right based on value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* left;\n    Node* right;\n    Node(int val) : data(val), left(nullptr), right(nullptr) {}\n};\n\nbool search(Node* root, int target) {\n    if (!root) return false;\n    if (root->data == target) return true;\n    if (target < root->data) return search(root->left, target);\n    return search(root->right, target);\n}\n\nint main() {\n    Node* root = new Node(5);\n    root->left = new Node(3);\n    root->right = new Node(7);\n    \n    cout << search(root, 3) << endl;\n    cout << search(root, 9) << endl;\n    return 0;\n}',
  hint: 'BST search average O(log n), worst O(n).'
},
{
  id: 'cpp_dsa_18',
  topicId: 'cpp_dsa',
  question: 'Implement depth-first search (DFS) on graph.',
  mathSolution: 'Visit node, then recursively visit all unvisited neighbors.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <stack>\nusing namespace std;\n\nvoid dfs(vector<vector<int>>& graph, int start) {\n    vector<bool> visited(graph.size(), false);\n    stack<int> st;\n    st.push(start);\n    \n    while (!st.empty()) {\n        int node = st.top();\n        st.pop();\n        if (!visited[node]) {\n            visited[node] = true;\n            cout << node << " ";\n            for (int neighbor : graph[node]) {\n                if (!visited[neighbor]) st.push(neighbor);\n            }\n        }\n    }\n}\n\nint main() {\n    vector<vector<int>> graph = {\n        {1, 2},    // 0\n        {0, 3},    // 1\n        {0, 3},    // 2\n        {1, 2}     // 3\n    };\n    dfs(graph, 0);\n    cout << endl;\n    return 0;\n}',
  hint: 'DFS uses stack (explicit or recursion).'
},
{
  id: 'cpp_dsa_19',
  topicId: 'cpp_dsa',
  question: 'Implement breadth-first search (BFS) on graph.',
  mathSolution: 'Use queue to visit nodes level by level.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvoid bfs(vector<vector<int>>& graph, int start) {\n    vector<bool> visited(graph.size(), false);\n    queue<int> q;\n    q.push(start);\n    visited[start] = true;\n    \n    while (!q.empty()) {\n        int node = q.front();\n        q.pop();\n        cout << node << " ";\n        for (int neighbor : graph[node]) {\n            if (!visited[neighbor]) {\n                visited[neighbor] = true;\n                q.push(neighbor);\n            }\n        }\n    }\n}\n\nint main() {\n    vector<vector<int>> graph = {\n        {1, 2},\n        {0, 3},\n        {0, 3},\n        {1, 2}\n    };\n    bfs(graph, 0);\n    cout << endl;\n    return 0;\n}',
  hint: 'BFS uses queue, finds shortest path in unweighted graph.'
},
{
  id: 'cpp_dsa_20',
  topicId: 'cpp_dsa',
  question: 'Find missing number in array from 1 to n.',
  mathSolution: 'Sum formula: expected sum minus actual sum.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint missingNumber(int arr[], int n) {\n    int expectedSum = n * (n + 1) / 2;\n    int actualSum = 0;\n    for (int i = 0; i < n - 1; i++) {\n        actualSum += arr[i];\n    }\n    return expectedSum - actualSum;\n}\n\nint main() {\n    int arr[] = {1, 2, 4, 5, 6};\n    int n = 6;\n    cout << "Missing: " << missingNumber(arr, n) << endl;\n    return 0;\n}',
  hint: 'O(n) time, O(1) space using sum formula.'
},
{
  id: 'cpp_dsa_21',
  topicId: 'cpp_dsa',
  question: 'Find duplicate number in array (one duplicate).',
  mathSolution: 'Use Floyd\'s cycle detection (tortoise and hare).',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint findDuplicate(vector<int>& nums) {\n    int slow = nums[0];\n    int fast = nums[0];\n    do {\n        slow = nums[slow];\n        fast = nums[nums[fast]];\n    } while (slow != fast);\n    \n    slow = nums[0];\n    while (slow != fast) {\n        slow = nums[slow];\n        fast = nums[fast];\n    }\n    return slow;\n}\n\nint main() {\n    vector<int> nums = {1, 3, 4, 2, 2};\n    cout << "Duplicate: " << findDuplicate(nums) << endl;\n    return 0;\n}',
  hint: 'Floyd\'s algorithm uses O(1) extra space.'
},
{
  id: 'cpp_dsa_22',
  topicId: 'cpp_dsa',
  question: 'Rotate array by k positions to the right.',
  mathSolution: 'Reverse entire array, then reverse first k, then reverse rest.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\nvoid rotate(int arr[], int n, int k) {\n    k %= n;\n    reverse(arr, arr + n);\n    reverse(arr, arr + k);\n    reverse(arr + k, arr + n);\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5, 6, 7};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int k = 3;\n    rotate(arr, n, k);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Three-reversal approach uses O(1) extra space.'
},
{
  id: 'cpp_dsa_23',
  topicId: 'cpp_dsa',
  question: 'Implement min-heap (priority queue) using array.',
  mathSolution: 'Heap property: parent <= children; bubble up/down on insert/delete.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass MinHeap {\nprivate:\n    vector<int> heap;\n    \n    void heapifyUp(int idx) {\n        while (idx > 0) {\n            int parent = (idx - 1) / 2;\n            if (heap[parent] <= heap[idx]) break;\n            swap(heap[parent], heap[idx]);\n            idx = parent;\n        }\n    }\n    \n    void heapifyDown(int idx) {\n        int size = heap.size();\n        while (true) {\n            int left = 2 * idx + 1;\n            int right = 2 * idx + 2;\n            int smallest = idx;\n            if (left < size && heap[left] < heap[smallest]) smallest = left;\n            if (right < size && heap[right] < heap[smallest]) smallest = right;\n            if (smallest == idx) break;\n            swap(heap[idx], heap[smallest]);\n            idx = smallest;\n        }\n    }\n    \npublic:\n    void push(int val) {\n        heap.push_back(val);\n        heapifyUp(heap.size() - 1);\n    }\n    \n    int pop() {\n        if (heap.empty()) return -1;\n        int root = heap[0];\n        heap[0] = heap.back();\n        heap.pop_back();\n        if (!heap.empty()) heapifyDown(0);\n        return root;\n    }\n    \n    int top() { return heap.empty() ? -1 : heap[0]; }\n    bool empty() { return heap.empty(); }\n};\n\nint main() {\n    MinHeap h;\n    h.push(5);\n    h.push(3);\n    h.push(8);\n    h.push(1);\n    cout << h.pop() << endl;\n    cout << h.pop() << endl;\n    return 0;\n}',
  hint: 'Heap operations: push and pop O(log n).'
},
{
  id: 'cpp_dsa_24',
  topicId: 'cpp_dsa',
  question: 'Find the kth largest element in array (quick select).',
  mathSolution: 'Quick select partitions and recurses on one side.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint quickSelect(vector<int>& nums, int left, int right, int k) {\n    int pivot = nums[right];\n    int i = left;\n    for (int j = left; j < right; j++) {\n        if (nums[j] <= pivot) {\n            swap(nums[i], nums[j]);\n            i++;\n        }\n    }\n    swap(nums[i], nums[right]);\n    \n    if (i == k) return nums[i];\n    else if (i < k) return quickSelect(nums, i + 1, right, k);\n    else return quickSelect(nums, left, i - 1, k);\n}\n\nint findKthLargest(vector<int>& nums, int k) {\n    int n = nums.size();\n    return quickSelect(nums, 0, n - 1, n - k);\n}\n\nint main() {\n    vector<int> nums = {3, 2, 1, 5, 6, 4};\n    int k = 2;\n    cout << findKthLargest(nums, k) << endl;\n    return 0;\n}',
  hint: 'Quick select averages O(n) time, worst O(n²).'
},
{
  "id": "cpp_dsa_25",
  "topicId": "cpp_dsa",
  "question": "Implement valid parentheses checker using stack.",
  "mathSolution": "Push opening brackets, pop when closing matches top.",
  "codeSolution": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isValid(const string& s) {\n    stack<char> st;\n    for (char c : s) {\n        if (c == '(' || c == '{' || c == '[') {\n            st.push(c);\n        } else {\n            if (st.empty()) return false;\n            if ((c == ')' && st.top() != '(') ||\n                (c == '}' && st.top() != '{') ||\n                (c == ']' && st.top() != '[')) {\n                return false;\n            }\n            st.pop();\n        }\n    }\n    return st.empty();\n}\n\nint main() {\n    cout << boolalpha;\n    cout << \"()[]{} : \" << isValid(\"()[]{}\") << endl;\n    cout << \"([)] : \" << isValid(\"([)]\") << endl;\n    cout << \"{[]} : \" << isValid(\"{[]}\") << endl;\n    return 0;\n}",
  "hint": "Stack ensures correct order of closing brackets."
},
{
  id: 'cpp_dsa_26',
  topicId: 'cpp_dsa',
  question: 'Implement queue using two stacks.',
  mathSolution: 'One stack for enqueue, one for dequeue; move when dequeue stack empty.',
  codeSolution: '#include <iostream>\n#include <stack>\nusing namespace std;\n\nclass MyQueue {\nprivate:\n    stack<int> s1, s2;\n    \npublic:\n    void push(int x) { s1.push(x); }\n    \n    int pop() {\n        if (s2.empty()) {\n            while (!s1.empty()) {\n                s2.push(s1.top());\n                s1.pop();\n            }\n        }\n        int val = s2.top();\n        s2.pop();\n        return val;\n    }\n    \n    int peek() {\n        if (s2.empty()) {\n            while (!s1.empty()) {\n                s2.push(s1.top());\n                s1.pop();\n            }\n        }\n        return s2.top();\n    }\n    \n    bool empty() { return s1.empty() && s2.empty(); }\n};\n\nint main() {\n    MyQueue q;\n    q.push(1);\n    q.push(2);\n    cout << q.peek() << endl;\n    cout << q.pop() << endl;\n    cout << q.empty() << endl;\n    return 0;\n}',
  hint: 'Amortized O(1) for each operation.'
},
{
  id: 'cpp_dsa_27',
  topicId: 'cpp_dsa',
  question: 'Generate all fibonacci numbers up to n (DP approach).',
  mathSolution: 'Use array to store previous two or two variables.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint fibonacci(int n) {\n    if (n <= 1) return n;\n    int prev2 = 0, prev1 = 1;\n    for (int i = 2; i <= n; i++) {\n        int curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n\nint main() {\n    cout << "F(10) = " << fibonacci(10) << endl;\n    return 0;\n}',
  hint: 'DP avoids exponential recursion; O(n) time, O(1) space.'
},
{
  id: 'cpp_dsa_28',
  topicId: 'cpp_dsa',
  question: 'Implement longest common prefix among strings.',
  mathSolution: 'Compare characters of first string with all others until mismatch.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstring longestCommonPrefix(vector<string>& strs) {\n    if (strs.empty()) return "";\n    string prefix = strs[0];\n    for (int i = 1; i < strs.size(); i++) {\n        while (strs[i].find(prefix) != 0) {\n            prefix = prefix.substr(0, prefix.length() - 1);\n            if (prefix.empty()) return "";\n        }\n    }\n    return prefix;\n}\n\nint main() {\n    vector<string> strs = {"flower", "flow", "flight"};\n    cout << longestCommonPrefix(strs) << endl;\n    return 0;\n}',
  hint: 'Reduce prefix length until all strings start with it.'
},
{
  "id": "cpp_dsa_29",
  "topicId": "cpp_dsa",
  "question": "Implement anagram check using character count.",
  "mathSolution": "Count characters in both strings and compare.",
  "codeSolution": "#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isAnagram(const string& s, const string& t) {\n    if (s.length() != t.length()) return false;\n    int count[26] = {0};\n    for (char c : s) count[c - 'a']++;\n    for (char c : t) count[c - 'a']--;\n    for (int i = 0; i < 26; i++) {\n        if (count[i] != 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << boolalpha;\n    cout << \"listen & silent: \" << isAnagram(\"listen\", \"silent\") << endl;\n    cout << \"hello & world: \" << isAnagram(\"hello\", \"world\") << endl;\n    cout << \"anagram & nagaram: \" << isAnagram(\"anagram\", \"nagaram\") << endl;\n    return 0;\n}",
  "hint": "O(n) time, O(1) space (limited character set)."
},
{
  id: 'cpp_dsa_30',
  topicId: 'cpp_dsa',
  question: 'Implement sliding window maximum (max in each window of size k).',
  mathSolution: 'Use deque to maintain indices of potential maximums.',
  codeSolution: '#include <iostream>\n#include <deque>\n#include <vector>\nusing namespace std;\n\nvector<int> maxSlidingWindow(vector<int>& nums, int k) {\n    vector<int> result;\n    deque<int> dq;\n    for (int i = 0; i < nums.size(); i++) {\n        while (!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();\n        dq.push_back(i);\n        if (dq.front() == i - k) dq.pop_front();\n        if (i >= k - 1) result.push_back(nums[dq.front()]);\n    }\n    return result;\n}\n\nint main() {\n    vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};\n    int k = 3;\n    vector<int> result = maxSlidingWindow(nums, k);\n    for (int x : result) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Deque maintains indices in decreasing order of values.'
},
{
  id: 'cpp_dsa_31',
  topicId: 'cpp_dsa',
  question: 'Implement longest palindromic substring (expand around center).',
  mathSolution: 'Expand from each center (odd and even length).',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring longestPalindrome(string s) {\n    if (s.empty()) return "";\n    int start = 0, maxLen = 1;\n    \n    auto expand = [&](int left, int right) {\n        while (left >= 0 && right < s.length() && s[left] == s[right]) {\n            left--;\n            right++;\n        }\n        int len = right - left - 1;\n        if (len > maxLen) {\n            maxLen = len;\n            start = left + 1;\n        }\n    };\n    \n    for (int i = 0; i < s.length(); i++) {\n        expand(i, i);\n        expand(i, i + 1);\n    }\n    return s.substr(start, maxLen);\n}\n\nint main() {\n    cout << longestPalindrome("babad") << endl;\n    return 0;\n}',
  hint: 'O(n²) time, O(1) space expand around center.'
},
{
  id: 'cpp_dsa_32',
  topicId: 'cpp_dsa',
  question: 'Implement climbing stairs problem (DP).',
  mathSolution: 'Ways to reach step n = ways(n-1) + ways(n-2).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint climbStairs(int n) {\n    if (n <= 2) return n;\n    int prev1 = 1, prev2 = 2;\n    for (int i = 3; i <= n; i++) {\n        int curr = prev1 + prev2;\n        prev1 = prev2;\n        prev2 = curr;\n    }\n    return prev2;\n}\n\nint main() {\n    cout << climbStairs(3) << endl;\n    cout << climbStairs(4) << endl;\n    return 0;\n}',
  hint: 'Fibonacci-style DP with O(1) space.'
},
{
  id: 'cpp_dsa_33',
  topicId: 'cpp_dsa',
  question: 'Implement house robber problem (max sum without adjacent).',
  mathSolution: 'DP: max of rob current + rob(n-2) or rob(n-1).',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint rob(vector<int>& nums) {\n    if (nums.empty()) return 0;\n    if (nums.size() == 1) return nums[0];\n    int prev2 = nums[0];\n    int prev1 = max(nums[0], nums[1]);\n    for (int i = 2; i < nums.size(); i++) {\n        int curr = max(prev1, prev2 + nums[i]);\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n\nint main() {\n    vector<int> nums = {1, 2, 3, 1};\n    cout << rob(nums) << endl;\n    return 0;\n}',
  hint: 'DP with O(1) space: either take current or skip.'
},
{
  id: 'cpp_dsa_34',
  topicId: 'cpp_dsa',
  question: 'Implement coin change problem (minimum coins needed).',
  mathSolution: 'DP array where dp[i] = min coins to make amount i.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nint coinChange(vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, INT_MAX);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (coin <= i && dp[i - coin] != INT_MAX) {\n                dp[i] = min(dp[i], dp[i - coin] + 1);\n            }\n        }\n    }\n    return dp[amount] == INT_MAX ? -1 : dp[amount];\n}\n\nint main() {\n    vector<int> coins = {1, 2, 5};\n    int amount = 11;\n    cout << coinChange(coins, amount) << endl;\n    return 0;\n}',
  hint: 'Unbounded knapsack DP: O(amount * coins) time.'
},
{
  id: 'cpp_dsa_35',
  topicId: 'cpp_dsa',
  question: 'Implement longest increasing subsequence length.',
  mathSolution: 'DP: LIS ending at i = 1 + max(LIS ending at previous smaller).',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint lengthOfLIS(vector<int>& nums) {\n    vector<int> dp(nums.size(), 1);\n    for (int i = 1; i < nums.size(); i++) {\n        for (int j = 0; j < i; j++) {\n            if (nums[j] < nums[i]) {\n                dp[i] = max(dp[i], dp[j] + 1);\n            }\n        }\n    }\n    return *max_element(dp.begin(), dp.end());\n}\n\nint main() {\n    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};\n    cout << lengthOfLIS(nums) << endl;\n    return 0;\n}',
  hint: 'O(n²) DP; O(n log n) with patience sorting.'
},
{
  id: 'cpp_dsa_36',
  topicId: 'cpp_dsa',
  question: 'Implement edit distance (Levenshtein distance).',
  mathSolution: 'DP: dp[i][j] = min(insert, delete, replace).',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint minDistance(string word1, string word2) {\n    int m = word1.length(), n = word2.length();\n    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    \n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1[i - 1] == word2[j - 1]) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else {\n                dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});\n            }\n        }\n    }\n    return dp[m][n];\n}\n\nint main() {\n    cout << minDistance("horse", "ros") << endl;\n    return 0;\n}',
  hint: 'DP: replace, insert, delete operations.'
},
{
  id: 'cpp_dsa_37',
  topicId: 'cpp_dsa',
  question: 'Implement topological sort for DAG (Kahn\'s algorithm).',
  mathSolution: 'Count in-degrees, queue nodes with 0 in-degree.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<int> topologicalSort(int n, vector<vector<int>>& edges) {\n    vector<vector<int>> adj(n);\n    vector<int> inDegree(n, 0);\n    for (auto& edge : edges) {\n        adj[edge[0]].push_back(edge[1]);\n        inDegree[edge[1]]++;\n    }\n    \n    queue<int> q;\n    for (int i = 0; i < n; i++) {\n        if (inDegree[i] == 0) q.push(i);\n    }\n    \n    vector<int> result;\n    while (!q.empty()) {\n        int u = q.front();\n        q.pop();\n        result.push_back(u);\n        for (int v : adj[u]) {\n            inDegree[v]--;\n            if (inDegree[v] == 0) q.push(v);\n        }\n    }\n    return result.size() == n ? result : vector<int>();\n}\n\nint main() {\n    vector<vector<int>> edges = {{5,2}, {5,0}, {4,0}, {4,1}, {2,3}, {3,1}};\n    vector<int> order = topologicalSort(6, edges);\n    for (int x : order) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Kahn\'s algorithm uses BFS with in-degree counting.'
},
{
  id: 'cpp_dsa_38',
  topicId: 'cpp_dsa',
  question: 'Implement Dijkstra\'s shortest path algorithm.',
  mathSolution: 'Use priority queue, relax edges, track shortest distances.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\n#include <climits>\nusing namespace std;\n\nvector<int> dijkstra(vector<vector<pair<int, int>>>& graph, int start) {\n    int n = graph.size();\n    vector<int> dist(n, INT_MAX);\n    dist[start] = 0;\n    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;\n    pq.push({0, start});\n    \n    while (!pq.empty()) {\n        int d = pq.top().first;\n        int u = pq.top().second;\n        pq.pop();\n        if (d > dist[u]) continue;\n        for (auto& edge : graph[u]) {\n            int v = edge.first;\n            int w = edge.second;\n            if (dist[u] + w < dist[v]) {\n                dist[v] = dist[u] + w;\n                pq.push({dist[v], v});\n            }\n        }\n    }\n    return dist;\n}\n\nint main() {\n    vector<vector<pair<int, int>>> graph(5);\n    graph[0] = {{1, 4}, {2, 2}};\n    graph[1] = {{0, 4}, {2, 1}, {3, 5}};\n    graph[2] = {{0, 2}, {1, 1}, {3, 8}, {4, 10}};\n    graph[3] = {{1, 5}, {2, 8}, {4, 2}};\n    graph[4] = {{2, 10}, {3, 2}};\n    \n    vector<int> dist = dijkstra(graph, 0);\n    for (int i = 0; i < dist.size(); i++) {\n        cout << "0 -> " << i << ": " << dist[i] << endl;\n    }\n    return 0;\n}',
  hint: 'Dijkstra uses priority queue; O((V+E) log V) time.'
},
{
  id: 'cpp_dsa_39',
  topicId: 'cpp_dsa',
  question: 'Implement Floyd-Warshall algorithm (all-pairs shortest paths).',
  mathSolution: 'DP: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nvoid floydWarshall(vector<vector<int>>& graph) {\n    int n = graph.size();\n    vector<vector<int>> dist = graph;\n    \n    for (int k = 0; k < n; k++) {\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX &&\n                    dist[i][k] + dist[k][j] < dist[i][j]) {\n                    dist[i][j] = dist[i][k] + dist[k][j];\n                }\n            }\n        }\n    }\n    \n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            if (dist[i][j] == INT_MAX) cout << \"INF \";\n            else cout << dist[i][j] << \" \";\n        }\n        cout << endl;\n    }\n}\n\nint main() {\n    vector<vector<int>> graph = {\n        {0, 3, INT_MAX, 5},\n        {2, 0, INT_MAX, 4},\n        {INT_MAX, 1, 0, INT_MAX},\n        {INT_MAX, INT_MAX, 2, 0}\n    };\n    floydWarshall(graph);\n    return 0;\n}',
  hint: 'Floyd-Warshall O(V³) time, works with negative edges (no cycles).'
},
{
  id: 'cpp_dsa_40',
  topicId: 'cpp_dsa',
  question: 'Implement union-find (disjoint set) data structure.',
  mathSolution: 'Each element has parent; union by rank, find with path compression.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass UnionFind {\nprivate:\n    vector<int> parent, rank;\n    \npublic:\n    UnionFind(int n) {\n        parent.resize(n);\n        rank.resize(n, 0);\n        for (int i = 0; i < n; i++) parent[i] = i;\n    }\n    \n    int find(int x) {\n        if (parent[x] != x) parent[x] = find(parent[x]);\n        return parent[x];\n    }\n    \n    bool unite(int x, int y) {\n        int rootX = find(x);\n        int rootY = find(y);\n        if (rootX == rootY) return false;\n        if (rank[rootX] < rank[rootY]) parent[rootX] = rootY;\n        else if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;\n        else {\n            parent[rootY] = rootX;\n            rank[rootX]++;\n        }\n        return true;\n    }\n    \n    bool connected(int x, int y) { return find(x) == find(y); }\n};\n\nint main() {\n    UnionFind uf(5);\n    uf.unite(0, 1);\n    uf.unite(1, 2);\n    cout << uf.connected(0, 2) << endl;\n    cout << uf.connected(0, 3) << endl;\n    return 0;\n}',
  hint: 'Union-Find: nearly O(1) amortized time with path compression.'
},
{
  id: 'cpp_dsa_41',
  topicId: 'cpp_dsa',
  question: 'Implement segment tree for range sum queries and point updates.',
  mathSolution: 'Binary tree stores sums; query and update in O(log n).',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass SegmentTree {\nprivate:\n    vector<int> tree;\n    int n;\n    \n    void build(vector<int>& arr, int node, int start, int end) {\n        if (start == end) tree[node] = arr[start];\n        else {\n            int mid = (start + end) / 2;\n            build(arr, 2 * node + 1, start, mid);\n            build(arr, 2 * node + 2, mid + 1, end);\n            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];\n        }\n    }\n    \n    void update(int node, int start, int end, int idx, int val) {\n        if (start == end) tree[node] = val;\n        else {\n            int mid = (start + end) / 2;\n            if (idx <= mid) update(2 * node + 1, start, mid, idx, val);\n            else update(2 * node + 2, mid + 1, end, idx, val);\n            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];\n        }\n    }\n    \n    int query(int node, int start, int end, int l, int r) {\n        if (r < start || l > end) return 0;\n        if (l <= start && end <= r) return tree[node];\n        int mid = (start + end) / 2;\n        return query(2 * node + 1, start, mid, l, r) +\n               query(2 * node + 2, mid + 1, end, l, r);\n    }\n    \npublic:\n    SegmentTree(vector<int>& arr) {\n        n = arr.size();\n        tree.resize(4 * n);\n        build(arr, 0, 0, n - 1);\n    }\n    \n    void update(int idx, int val) { update(0, 0, n - 1, idx, val); }\n    int query(int l, int r) { return query(0, 0, n - 1, l, r); }\n};\n\nint main() {\n    vector<int> arr = {1, 3, 5, 7, 9, 11};\n    SegmentTree st(arr);\n    cout << st.query(1, 3) << endl;\n    st.update(2, 10);\n    cout << st.query(1, 3) << endl;\n    return 0;\n}',
  hint: 'Segment tree supports range queries and point updates in O(log n).'
},
{
  id: 'cpp_dsa_42',
  topicId: 'cpp_dsa',
  question: 'Implement trie (prefix tree) for word storage and search.',
  mathSolution: 'Each node has children map and boolean for end of word.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nclass TrieNode {\npublic:\n    unordered_map<char, TrieNode*> children;\n    bool isEnd;\n    TrieNode() : isEnd(false) {}\n};\n\nclass Trie {\nprivate:\n    TrieNode* root;\n    \npublic:\n    Trie() { root = new TrieNode(); }\n    \n    void insert(string word) {\n        TrieNode* node = root;\n        for (char c : word) {\n            if (node->children.find(c) == node->children.end()) {\n                node->children[c] = new TrieNode();\n            }\n            node = node->children[c];\n        }\n        node->isEnd = true;\n    }\n    \n    bool search(string word) {\n        TrieNode* node = root;\n        for (char c : word) {\n            if (node->children.find(c) == node->children.end()) return false;\n            node = node->children[c];\n        }\n        return node->isEnd;\n    }\n    \n    bool startsWith(string prefix) {\n        TrieNode* node = root;\n        for (char c : prefix) {\n            if (node->children.find(c) == node->children.end()) return false;\n            node = node->children[c];\n        }\n        return true;\n    }\n};\n\nint main() {\n    Trie trie;\n    trie.insert("apple");\n    cout << trie.search("apple") << endl;\n    cout << trie.search("app") << endl;\n    cout << trie.startsWith("app") << endl;\n    return 0;\n}',
  hint: 'Trie operations O(L) where L is string length.'
},
{
  id: 'cpp_dsa_43',
  topicId: 'cpp_dsa',
  question: 'Detect cycle in linked list (Floyd\'s cycle detection).',
  mathSolution: 'Use slow and fast pointers; if they meet, cycle exists.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nbool hasCycle(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}\n\nint main() {\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    head->next->next->next = head->next;\n    cout << hasCycle(head) << endl;\n    return 0;\n}',
  hint: 'Floyd\'s algorithm uses O(1) extra space.'
},
{
  id: 'cpp_dsa_44',
  topicId: 'cpp_dsa',
  question: 'Reverse a linked list (iterative and recursive).',
  mathSolution: 'Iterative: use prev, current, next pointers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nListNode* reverseIterative(ListNode* head) {\n    ListNode* prev = nullptr;\n    ListNode* curr = head;\n    while (curr) {\n        ListNode* next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}\n\nListNode* reverseRecursive(ListNode* head) {\n    if (!head || !head->next) return head;\n    ListNode* newHead = reverseRecursive(head->next);\n    head->next->next = head;\n    head->next = nullptr;\n    return newHead;\n}\n\nint main() {\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    head->next->next->next = new ListNode(4);\n    \n    head = reverseIterative(head);\n    ListNode* temp = head;\n    while (temp) {\n        cout << temp->val << " ";\n        temp = temp->next;\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'Iterative uses O(1) space, recursive uses O(n) stack space.'
},
{
  id: 'cpp_dsa_45',
  topicId: 'cpp_dsa',
  question: 'Find the middle of linked list (slow-fast pointer).',
  mathSolution: 'Slow moves one step, fast moves two steps.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nListNode* findMiddle(ListNode* head) {\n    ListNode* slow = head;\n    ListNode* fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}\n\nint main() {\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    head->next->next->next = new ListNode(4);\n    head->next->next->next->next = new ListNode(5);\n    \n    ListNode* mid = findMiddle(head);\n    cout << mid->val << endl;\n    return 0;\n}',
  hint: 'Slow-fast pointer finds middle in one pass.'
},
{
  id: 'cpp_dsa_46',
  topicId: 'cpp_dsa',
  question: 'Implement circular queue using array.',
  mathSolution: 'Use modulo to wrap around indices.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass CircularQueue {\nprivate:\n    int* arr;\n    int front, rear, capacity;\n    \npublic:\n    CircularQueue(int size) {\n        capacity = size;\n        arr = new int[capacity];\n        front = -1;\n        rear = -1;\n    }\n    \n    bool enqueue(int x) {\n        if ((front == 0 && rear == capacity - 1) || (rear == (front - 1) % capacity)) {\n            return false;\n        }\n        if (front == -1) front = rear = 0;\n        else if (rear == capacity - 1 && front != 0) rear = 0;\n        else rear++;\n        arr[rear] = x;\n        return true;\n    }\n    \n    int dequeue() {\n        if (front == -1) return -1;\n        int data = arr[front];\n        if (front == rear) front = rear = -1;\n        else if (front == capacity - 1) front = 0;\n        else front++;\n        return data;\n    }\n    \n    int peek() {\n        if (front == -1) return -1;\n        return arr[front];\n    }\n    \n    bool isEmpty() { return front == -1; }\n    bool isFull() { return (front == 0 && rear == capacity - 1) || (rear == (front - 1) % capacity); }\n    \n    ~CircularQueue() { delete[] arr; }\n};\n\nint main() {\n    CircularQueue q(5);\n    q.enqueue(10);\n    q.enqueue(20);\n    q.enqueue(30);\n    cout << q.dequeue() << endl;\n    cout << q.peek() << endl;\n    return 0;\n}',
  hint: 'Circular queue reuses space efficiently.'
},
{
  id: 'cpp_dsa_47',
  topicId: 'cpp_dsa',
  question: 'Implement doubly linked list with forward/backward traversal.',
  mathSolution: 'Each node has prev and next pointers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* prev;\n    Node* next;\n    Node(int val) : data(val), prev(nullptr), next(nullptr) {}\n};\n\nclass DoublyLinkedList {\nprivate:\n    Node* head;\n    Node* tail;\n    \npublic:\n    DoublyLinkedList() : head(nullptr), tail(nullptr) {}\n    \n    void pushBack(int val) {\n        Node* newNode = new Node(val);\n        if (!head) head = tail = newNode;\n        else {\n            tail->next = newNode;\n            newNode->prev = tail;\n            tail = newNode;\n        }\n    }\n    \n    void pushFront(int val) {\n        Node* newNode = new Node(val);\n        if (!head) head = tail = newNode;\n        else {\n            newNode->next = head;\n            head->prev = newNode;\n            head = newNode;\n        }\n    }\n    \n    void printForward() {\n        Node* temp = head;\n        while (temp) {\n            cout << temp->data << \" <-> \";\n            temp = temp->next;\n        }\n        cout << "NULL\\n";\n    }\n    \n    void printBackward() {\n        Node* temp = tail;\n        while (temp) {\n            cout << temp->data << \" <-> \";\n            temp = temp->prev;\n        }\n        cout << "NULL\\n";\n    }\n    \n    ~DoublyLinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    DoublyLinkedList dll;\n    dll.pushBack(10);\n    dll.pushBack(20);\n    dll.pushFront(5);\n    dll.printForward();\n    dll.printBackward();\n    return 0;\n}',
  hint: 'Doubly linked list allows bidirectional traversal.'
},
{
  id: 'cpp_dsa_48',
  topicId: 'cpp_dsa',
  question: 'Implement hash table with separate chaining.',
  mathSolution: 'Use array of lists for collision handling.',
  codeSolution: '#include <iostream>\n#include <list>\n#include <vector>\nusing namespace std;\n\nclass HashTable {\nprivate:\n    vector<list<pair<int, string>>> table;\n    int size;\n    \n    int hash(int key) { return key % size; }\n    \npublic:\n    HashTable(int s) : size(s) { table.resize(size); }\n    \n    void insert(int key, string value) {\n        int index = hash(key);\n        for (auto& p : table[index]) {\n            if (p.first == key) {\n                p.second = value;\n                return;\n            }\n        }\n        table[index].push_back({key, value});\n    }\n    \n    string get(int key) {\n        int index = hash(key);\n        for (auto& p : table[index]) {\n            if (p.first == key) return p.second;\n        }\n        return \"\";\n    }\n    \n    void remove(int key) {\n        int index = hash(key);\n        table[index].remove_if([key](const pair<int, string>& p) {\n            return p.first == key;\n        });\n    }\n};\n\nint main() {\n    HashTable ht(10);\n    ht.insert(1, \"Apple\");\n    ht.insert(2, \"Banana\");\n    ht.insert(11, \"Cherry\");\n    cout << ht.get(1) << endl;\n    cout << ht.get(11) << endl;\n    ht.remove(2);\n    return 0;\n}',
  hint: 'Separate chaining handles collisions with linked lists.'
},
{
  id: 'cpp_dsa_49',
  topicId: 'cpp_dsa',
  question: 'Implement counting sort for small integer range.',
  mathSolution: 'Count frequencies, then reconstruct sorted array.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nvoid countingSort(vector<int>& arr) {\n    if (arr.empty()) return;\n    int maxVal = *max_element(arr.begin(), arr.end());\n    vector<int> count(maxVal + 1, 0);\n    for (int x : arr) count[x]++;\n    int index = 0;\n    for (int i = 0; i <= maxVal; i++) {\n        while (count[i]-- > 0) arr[index++] = i;\n    }\n}\n\nint main() {\n    vector<int> arr = {4, 2, 2, 8, 3, 3, 1};\n    countingSort(arr);\n    for (int x : arr) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Counting sort O(n + k) time, O(k) space; good for small range.'
},
{
  id: 'cpp_dsa_50',
  topicId: 'cpp_dsa',
  question: 'Comprehensive DSA demonstration combining multiple data structures.',
  mathSolution: 'Showcase stack, queue, linked list, sorting, searching.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <queue>\n#include <stack>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <functional>\nusing namespace std;\n\nint main() {\n    cout << "=== DSA Basics Demonstration ===" << endl << endl;\n    \n    // 1. Stack\n    cout << "1. Stack (LIFO):" << endl;\n    stack<int> st;\n    st.push(10); st.push(20); st.push(30);\n    while (!st.empty()) {\n        cout << st.top() << " ";\n        st.pop();\n    }\n    cout << endl << endl;\n    \n    // 2. Queue (FIFO)\n    cout << "2. Queue (FIFO):" << endl;\n    queue<int> q;\n    q.push(10); q.push(20); q.push(30);\n    while (!q.empty()) {\n        cout << q.front() << " ";\n        q.pop();\n    }\n    cout << endl << endl;\n    \n    // 3. Sorting\n    cout << "3. Sorting:" << endl;\n    vector<int> arr = {5, 2, 8, 1, 9, 3};\n    sort(arr.begin(), arr.end());\n    cout << "Sorted: ";\n    for (int x : arr) cout << x << " ";\n    cout << endl << endl;\n    \n    // 4. Binary Search\n    cout << "4. Binary Search:" << endl;\n    int target = 5;\n    bool found = binary_search(arr.begin(), arr.end(), target);\n    cout << target << " found: " << boolalpha << found << endl << endl;\n    \n    // 5. Binary Tree (simple)\n    cout << "5. Binary Tree Inorder:" << endl;\n    struct TreeNode { int val; TreeNode* left; TreeNode* right; TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} };\n    TreeNode* root = new TreeNode(2);\n    root->left = new TreeNode(1);\n    root->right = new TreeNode(3);\n    \n    function<void(TreeNode*)> inorder = [&](TreeNode* node) {\n        if (!node) return;\n        inorder(node->left);\n        cout << node->val << " ";\n        inorder(node->right);\n    };\n    inorder(root);\n    cout << endl << endl;\n    \n    // 6. Priority Queue\n    cout << "6. Priority Queue (Max-Heap):" << endl;\n    priority_queue<int> pq;\n    pq.push(5); pq.push(1); pq.push(9); pq.push(3);\n    while (!pq.empty()) {\n        cout << pq.top() << " ";\n        pq.pop();\n    }\n    cout << endl << endl;\n    \n    // 7. Linked List (simple)\n    cout << "7. Linked List:" << endl;\n    struct ListNode { int val; ListNode* next; ListNode(int x) : val(x), next(nullptr) {} };\n    ListNode* head = new ListNode(1);\n    head->next = new ListNode(2);\n    head->next->next = new ListNode(3);\n    ListNode* temp = head;\n    while (temp) {\n        cout << temp->val << " -> ";\n        temp = temp->next;\n    }\n    cout << "NULL" << endl << endl;\n    \n    // 8. Set\n    cout << "8. Set (Unique Sorted Elements):" << endl;\n    set<int> s = {5, 2, 8, 2, 1, 9, 3};\n    for (int x : s) cout << x << " ";\n    cout << endl << endl;\n    \n    // 9. Map\n    cout << "9. Map (Key-Value Pairs):" << endl;\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}, {\"Charlie\", 35}};\n    for (auto& [name, age] : ages) {\n        cout << name << ": " << age << endl;\n    }\n    \n    cout << endl << "=== All DSA concepts demonstrated ===" << endl;\n    \n    delete root->left;\n    delete root->right;\n    delete root;\n    delete head->next->next;\n    delete head->next;\n    delete head;\n    \n    return 0;\n}',
  hint: 'This comprehensive demo covers stacks, queues, sorting, searching, trees, linked lists, sets, and maps.'
},
//lamdaexpression
{
  id: 'cpp_lambdas_1',
  topicId: 'cpp_lambdas',
  question: 'Create a basic lambda that prints "Hello" and call it.',
  mathSolution: 'Lambda is anonymous function defined with [](){}.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto greet = []() { cout << "Hello" << endl; };\n    greet();\n    return 0;\n}',
  hint: 'Lambda syntax: [capture](params) { body }'
},
{
  id: 'cpp_lambdas_2',
  topicId: 'cpp_lambdas',
  question: 'Create a lambda that takes parameters and returns value.',
  mathSolution: 'Lambda can accept parameters like regular functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto add = [](int a, int b) { return a + b; };\n    cout << add(5, 3) << endl;\n    return 0;\n}',
  hint: 'Lambda parameters are specified in parentheses ().'
},
{
  id: 'cpp_lambdas_3',
  topicId: 'cpp_lambdas',
  question: 'Capture local variables by value in lambda.',
  mathSolution: 'Capture list [=] captures all by value, [x] captures specific.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int multiplier = 10;\n    auto times = [multiplier](int x) { return x * multiplier; };\n    cout << times(5) << endl;\n    return 0;\n}',
  hint: 'Capture by value copies the variable into lambda.'
},
{
  id: 'cpp_lambdas_4',
  topicId: 'cpp_lambdas',
  question: 'Capture local variables by reference in lambda.',
  mathSolution: 'Capture by reference [&] allows modifying original.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int counter = 0;\n    auto increment = [&counter]() { counter++; };\n    increment();\n    increment();\n    cout << counter << endl;\n    return 0;\n}',
  hint: 'Capture by reference [&var] can modify original variable.'
},
{
  id: 'cpp_lambdas_5',
  topicId: 'cpp_lambdas',
  question: 'Capture all local variables by value using [=].',
  mathSolution: '[=] captures all used variables by copy.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    auto sum = [=]() { return a + b + c; };\n    cout << sum() << endl;\n    return 0;\n}',
  hint: '[=] captures all used variables by value.'
},
{
  id: 'cpp_lambdas_6',
  topicId: 'cpp_lambdas',
  question: 'Capture all local variables by reference using [&].',
  mathSolution: '[&] captures all used variables by reference.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    auto incrementAll = [&]() { a++; b++; c++; };\n    incrementAll();\n    cout << a << ", " << b << ", " << c << endl;\n    return 0;\n}',
  hint: '[&] captures all used variables by reference.'
},
{
  id: 'cpp_lambdas_7',
  topicId: 'cpp_lambdas',
  question: 'Use mixed capture: some by value, some by reference.',
  mathSolution: 'Capture list can specify multiple capture modes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20;\n    auto lambda = [x, &y]() {\n        // x is captured by value (read-only), y by reference\n        // x++; // Error: cannot modify by-value capture\n        y++;\n        return x + y;\n    };\n    cout << lambda() << endl;\n    cout << "y = " << y << endl;\n    return 0;\n}',
  hint: 'Mix capture: [x, &y] captures x by value, y by reference.'
},
{
  id: 'cpp_lambdas_8',
  topicId: 'cpp_lambdas',
  question: 'Use default capture with exceptions.',
  mathSolution: 'Default capture [=, &x] captures all by value except x by reference.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20, z = 30;\n    auto lambda = [=, &x]() {\n        // x captured by reference, y and z by value\n        x++;\n        // y++; // Error: y captured by value\n        return x + y + z;\n    };\n    cout << lambda() << endl;\n    cout << "x = " << x << endl;\n    return 0;\n}',
  hint: '[=, &x] captures all by value except x by reference.'
},
{
  id: 'cpp_lambdas_9',
  topicId: 'cpp_lambdas',
  question: 'Make lambda mutable to modify captured values.',
  mathSolution: 'mutable allows modification of by-value captures.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0;\n    auto counter = [count]() mutable {\n        count++;\n        return count;\n    };\n    cout << counter() << endl;\n    cout << counter() << endl;\n    cout << "Original count: " << count << endl;\n    return 0;\n}',
  hint: 'mutable allows modification of by-value captures (copies).'
},
{
  id: 'cpp_lambdas_10',
  topicId: 'cpp_lambdas',
  question: 'Specify return type explicitly using trailing return type.',
  mathSolution: '-> return_type specifies lambda return type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto divide = [](double a, double b) -> double {\n        if (b == 0) return 0;\n        return a / b;\n    };\n    cout << divide(10, 3) << endl;\n    cout << divide(10, 0) << endl;\n    return 0;\n}',
  hint: '-> type specifies return type explicitly.'
},
{
  id: 'cpp_lambdas_11',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with STL sort algorithm.',
  mathSolution: 'Lambda as comparator for custom sorting.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {5, 2, 8, 1, 9, 3};\n    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'Lambda can be passed as comparator to sort.'
},
{
  id: 'cpp_lambdas_12',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with find_if algorithm.',
  mathSolution: 'Lambda predicate for conditional search.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 5; });\n    if (it != v.end()) {\n        cout << "First element > 5: " << *it << endl;\n    }\n    return 0;\n}',
  hint: 'Lambda predicates are useful with find_if, count_if, etc.'
},
{
  id: 'cpp_lambdas_13',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with for_each algorithm.',
  mathSolution: 'Lambda applied to each element.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    for_each(v.begin(), v.end(), [](int& x) { x *= 2; });\n    \n    for (int x : v) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'for_each with lambda modifies each element.'
},
{
  id: 'cpp_lambdas_14',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with transform algorithm.',
  mathSolution: 'Lambda transforms elements to new values.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    vector<int> squares(v.size());\n    transform(v.begin(), v.end(), squares.begin(), [](int x) { return x * x; });\n    \n    for (int x : squares) cout << x << " ";\n    cout << endl;\n    return 0;\n}',
  hint: 'transform with lambda creates transformed range.'
},
{
  id: 'cpp_lambdas_15',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with accumulate for custom accumulation.',
  mathSolution: 'Lambda provides custom binary operation for accumulate.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    int product = accumulate(v.begin(), v.end(), 1, \n        [](int acc, int x) { return acc * x; });\n    cout << "Product: " << product << endl;\n    return 0;\n}',
  hint: 'Lambda can replace standard operations in accumulate.'
},
{
  id: 'cpp_lambdas_16',
  topicId: 'cpp_lambdas',
  question: 'Capture this pointer in lambda (within class).',
  mathSolution: '[this] captures current object members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int value = 0;\npublic:\n    auto getIncrementor() {\n        return [this]() { return ++value; };\n    }\n    int getValue() const { return value; }\n};\n\nint main() {\n    Counter c;\n    auto inc = c.getIncrementor();\n    cout << inc() << endl;\n    cout << inc() << endl;\n    cout << c.getValue() << endl;\n    return 0;\n}',
  hint: '[this] captures current object members by reference.'
},
{
  id: 'cpp_lambdas_17',
  topicId: 'cpp_lambdas',
  question: 'Use generic lambda with auto parameters (C++14).',
  mathSolution: 'auto parameters make lambda generic (template-like).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto add = [](auto a, auto b) { return a + b; };\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << add(string("Hello"), " World") << endl;\n    return 0;\n}',
  hint: 'Generic lambda: [](auto x, auto y) { return x + y; }'
},
{
  id: 'cpp_lambdas_18',
  topicId: 'cpp_lambdas',
  question: 'Capture by move using init capture (C++14).',
  mathSolution: 'Init capture allows moving variables into lambda.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <utility>\nusing namespace std;\n\nint main() {\n    auto ptr = make_unique<int>(42);\n    auto lambda = [capture = move(ptr)]() {\n        return *capture;\n    };\n    cout << lambda() << endl;\n    // ptr is now empty\n    return 0;\n}',
  hint: 'Init capture: [capture = move(var)] captures by move.'
},
{
  id: 'cpp_lambdas_19',
  topicId: 'cpp_lambdas',
  question: 'Store lambda in std::function for type erasure.',
  mathSolution: 'std::function can hold any callable with matching signature.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint main() {\n    function<int(int, int)> operation;\n    \n    operation = [](int a, int b) { return a + b; };\n    cout << operation(5, 3) << endl;\n    \n    operation = [](int a, int b) { return a * b; };\n    cout << operation(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'std::function stores any callable with specified signature.'
},
{
  id: 'cpp_lambdas_20',
  topicId: 'cpp_lambdas',
  question: 'Return lambda from function (lambda factory).',
  mathSolution: 'Function can return lambda for later use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nauto createMultiplier(int factor) {\n    return [factor](int x) { return x * factor; };\n}\n\nint main() {\n    auto times2 = createMultiplier(2);\n    auto times5 = createMultiplier(5);\n    \n    cout << times2(10) << endl;\n    cout << times5(10) << endl;\n    \n    return 0;\n}',
  hint: 'Return lambda for functional programming patterns.'
},
{
  id: 'cpp_lambdas_21',
  topicId: 'cpp_lambdas',
  question: 'Create immediately invoked lambda expression (IILE).',
  mathSolution: 'Lambda can be defined and called immediately.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int result = []() {\n        int a = 10, b = 20;\n        return a + b;\n    }();\n    \n    cout << result << endl;\n    \n    // With parameters\n    int sum = [](int x, int y) { return x + y; }(5, 3);\n    cout << sum << endl;\n    \n    return 0;\n}',
  hint: 'Immediately invoked lambda: []() { ... }()'
},
{
  id: 'cpp_lambdas_22',
  topicId: 'cpp_lambdas',
  question: 'Use lambda for initialization in constexpr contexts.',
  mathSolution: 'Lambda can be constexpr since C++17.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    constexpr auto square = [](int x) constexpr { return x * x; };\n    constexpr int result = square(5);\n    \n    cout << result << endl;\n    \n    // Array size from constexpr lambda\n    constexpr auto size = []() constexpr { return 10; }();\n    int arr[size];\n    \n    return 0;\n}',
  hint: 'constexpr lambda can be evaluated at compile time.'
},
{
  id: 'cpp_lambdas_23',
  topicId: 'cpp_lambdas',
  question: 'Capture structured bindings in lambda (C++20).',
  mathSolution: 'Structured bindings can be captured in lambda.',
  codeSolution: '#include <iostream>\n#include <map>\nusing namespace std;\n\nint main() {\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    \n    for (const auto& [name, age] : ages) {\n        auto lambda = [name, age]() {\n            cout << name << ": " << age << endl;\n        };\n        lambda();\n    }\n    \n    return 0;\n}',
  hint: 'Structured binding captures copy the values into lambda.'
},
{
  "id": "cpp_lambdas_24",
  "topicId": "cpp_lambdas",
  "question": "Use lambda with pack expansion (variadic lambda).",
  "mathSolution": "Generic lambda with parameter pack.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\ntemplate<typename... Args>\nauto makePrinter(Args... args) {\n    return [args...]() {\n        ((cout << args << \" \"), ...);\n        cout << endl;\n    };\n}\n\nint main() {\n    auto print = makePrinter(1, 2.5, \"Hello\", 'A');\n    print();\n    \n    return 0;\n}",
  "hint": "Lambda can capture parameter packs for variadic templates."
},
{
  id: 'cpp_lambdas_25',
  topicId: 'cpp_lambdas',
  question: 'Create recursive lambda using std::function.',
  mathSolution: 'Recursive lambda needs std::function to refer to itself.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint main() {\n    function<int(int)> factorial = [&](int n) -> int {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    };\n    \n    cout << factorial(5) << endl;\n    \n    return 0;\n}',
  hint: 'Recursive lambda requires capture by reference and std::function.'
},
{
  id: 'cpp_lambdas_26',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with priority_queue custom comparator.',
  mathSolution: 'Lambda defines ordering for priority_queue.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nint main() {\n    auto cmp = [](int left, int right) { return left > right; };\n    priority_queue<int, vector<int>, decltype(cmp)> pq(cmp);\n    \n    pq.push(5);\n    pq.push(1);\n    pq.push(9);\n    pq.push(3);\n    \n    while (!pq.empty()) {\n        cout << pq.top() << " ";\n        pq.pop();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Lambda as comparator for priority_queue requires decltype.'
},
{
  id: 'cpp_lambdas_27',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with set custom comparator.',
  mathSolution: 'Lambda defines ordering for set elements.',
  codeSolution: '#include <iostream>\n#include <set>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto cmp = [](const string& a, const string& b) {\n        return a.length() < b.length();\n    };\n    set<string, decltype(cmp)> words(cmp);\n    \n    words.insert("apple");\n    words.insert("banana");\n    words.insert("kiwi");\n    words.insert("strawberry");\n    \n    for (const auto& w : words) {\n        cout << w << " (" << w.length() << ")" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambda comparator for set requires decltype.'
},
{
  id: 'cpp_lambdas_28',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with map custom key comparison.',
  mathSolution: 'Lambda defines key ordering in map.',
  codeSolution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto cmp = [](const string& a, const string& b) {\n        return a.length() < b.length();\n    };\n    map<string, int, decltype(cmp)> lengthMap(cmp);\n    \n    lengthMap["apple"] = 1;\n    lengthMap["banana"] = 2;\n    lengthMap["kiwi"] = 3;\n    lengthMap["strawberry"] = 4;\n    \n    for (const auto& [key, val] : lengthMap) {\n        cout << key << " -> " << val << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambda comparator for map requires decltype.'
},
{
  id: 'cpp_lambdas_29',
  topicId: 'cpp_lambdas',
  question: 'Capture by reference with lifetime management.',
  mathSolution: 'Ensure captured references outlive lambda.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nfunction<int()> createCounter() {\n    int count = 0;\n    return [&]() { return ++count; }; // DANGEROUS: count outlives\n}\n\nfunction<int()> createCounterSafe() {\n    auto count = make_shared<int>(0);\n    return [count]() { return ++(*count); };\n}\n\nint main() {\n    auto counter = createCounterSafe();\n    cout << counter() << endl;\n    cout << counter() << endl;\n    \n    return 0;\n}',
  hint: 'Capturing references to local variables is dangerous; use shared_ptr.'
},
{
  id: 'cpp_lambdas_30',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::thread for parallel execution.',
  mathSolution: 'Lambda as thread function.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nint main() {\n    int counter = 0;\n    thread t([&counter]() {\n        for (int i = 0; i < 1000; i++) {\n            counter++;\n        }\n    });\n    \n    t.join();\n    cout << "Counter: " << counter << endl;\n    \n    return 0;\n}',
  hint: 'Lambda capture by reference for thread synchronization.'
},
{
  id: 'cpp_lambdas_31',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::async for asynchronous execution.',
  mathSolution: 'Lambda as async task.',
  codeSolution: '#include <iostream>\n#include <future>\nusing namespace std;\n\nint main() {\n    auto future = async([]() {\n        this_thread::sleep_for(chrono::seconds(1));\n        return 42;\n    });\n    \n    cout << "Waiting...\\n";\n    int result = future.get();\n    cout << "Result: " << result << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with async for concurrent execution.'
},
{
  id: 'cpp_lambdas_32',
  topicId: 'cpp_lambdas',
  question: 'Use lambda as default argument (C++14).',
  mathSolution: 'Lambda can be default function parameter.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid process(int x, auto pred = [](int n) { return n > 0; }) {\n    if (pred(x)) {\n        cout << x << " is valid" << endl;\n    }\n}\n\nint main() {\n    process(5);\n    process(-3);\n    process(10, [](int n) { return n % 2 == 0; });\n    \n    return 0;\n}',
  hint: 'Lambda as default argument provides flexible behavior.'
},
{
  id: 'cpp_lambdas_33',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::optional for conditional execution.',
  mathSolution: 'Lambda processes optional value if present.',
  codeSolution: '#include <iostream>\n#include <optional>\nusing namespace std;\n\nint main() {\n    optional<int> value = 42;\n    \n    auto process = [](int x) { cout << "Value: " << x << endl; };\n    \n    if (value) {\n        process(*value);\n    }\n    \n    // Using with value_or\n    int result = value.value_or(0);\n    cout << "Result: " << result << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with optional for safe value processing.'
},
{
  id: 'cpp_lambdas_34',
  topicId: 'cpp_lambdas',
  question: 'Create lambda that returns lambda (currying).',
  mathSolution: 'Lambda returning lambda implements currying.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto add = [](int a) {\n        return [a](int b) { return a + b; };\n    };\n    \n    auto add5 = add(5);\n    cout << add5(3) << endl;\n    cout << add(10)(20) << endl;\n    \n    return 0;\n}',
  hint: 'Currying: lambda returning lambda for partial application.'
},
{
  id: 'cpp_lambdas_35',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with SFINAE and decltype.',
  mathSolution: 'Lambda with decltype for type detection.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nauto process(T value) {\n    auto lambda = [](auto x) -> decltype(x) {\n        if constexpr (is_integral_v<decltype(x)>) {\n            return x * 2;\n        } else {\n            return x;\n        }\n    };\n    return lambda(value);\n}\n\nint main() {\n    cout << process(5) << endl;\n    cout << process(3.14) << endl;\n    \n    return 0;\n}',
  hint: 'Lambda with decltype for compile-time type detection.'
},
{
  id: 'cpp_lambdas_36',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::function for callback registration.',
  mathSolution: 'Lambda as callback in event system.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <functional>\nusing namespace std;\n\nclass Button {\nprivate:\n    vector<function<void()>> clickHandlers;\npublic:\n    void onClick(function<void()> handler) {\n        clickHandlers.push_back(handler);\n    }\n    void click() {\n        for (auto& h : clickHandlers) h();\n    }\n};\n\nint main() {\n    Button btn;\n    btn.onClick([]() { cout << "Handler 1\\n"; });\n    btn.onClick([]() { cout << "Handler 2\\n"; });\n    btn.onClick([]() { cout << "Handler 3\\n"; });\n    \n    btn.click();\n    \n    return 0;\n}',
  hint: 'Lambda callbacks enable event-driven programming.'
},
{
  id: 'cpp_lambdas_37',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::variant and std::visit.',
  mathSolution: 'Lambda visitor for variant types.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\nint main() {\n    variant<int, double, string> data;\n    \n    auto visitor = [](auto&& arg) {\n        cout << "Value: " << arg << endl;\n    };\n    \n    data = 42;\n    visit(visitor, data);\n    \n    data = 3.14;\n    visit(visitor, data);\n    \n    data = "Hello";\n    visit(visitor, data);\n    \n    return 0;\n}',
  hint: 'Lambda visitor with variant enables type-safe handling.'
},
{
  id: 'cpp_lambdas_38',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::any for type-erased processing.',
  mathSolution: 'Lambda processes any type stored in std::any.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\nusing namespace std;\n\nint main() {\n    any value;\n    \n    auto process = [](const any& v) {\n        if (v.type() == typeid(int)) {\n            cout << "Int: " << any_cast<int>(v) << endl;\n        } else if (v.type() == typeid(double)) {\n            cout << "Double: " << any_cast<double>(v) << endl;\n        } else if (v.type() == typeid(string)) {\n            cout << "String: " << any_cast<string>(v) << endl;\n        }\n    };\n    \n    value = 42;\n    process(value);\n    \n    value = 3.14;\n    process(value);\n    \n    value = string("Hello");\n    process(value);\n    \n    return 0;\n}',
  hint: 'Lambda with any for type-erased processing.'
},
{
  id: 'cpp_lambdas_39',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with std::bind for partial application.',
  mathSolution: 'Lambda vs std::bind for argument binding.',
  codeSolution: '#include <iostream>\n#include <functional>\nusing namespace std;\n\nint multiply(int a, int b) { return a * b; }\n\nint main() {\n    // Using std::bind (old style)\n    auto times2_bind = bind(multiply, 2, placeholders::_1);\n    \n    // Using lambda (modern style)\n    auto times2_lambda = [](int x) { return multiply(2, x); };\n    \n    cout << times2_bind(5) << endl;\n    cout << times2_lambda(5) << endl;\n    \n    return 0;\n}',
  hint: 'Lambdas are preferred over std::bind in modern C++.'
},
{
  id: 'cpp_lambdas_40',
  topicId: 'cpp_lambdas',
  question: 'Use lambda with RAII for scoped resource management.',
  mathSolution: 'Lambda with RAII for automatic cleanup.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource() { cout << "Resource acquired\\n"; }\n    ~Resource() { cout << "Resource released\\n"; }\n    void use() { cout << "Using resource\\n"; }\n};\n\nint main() {\n    auto cleanup = [](Resource* r) { delete r; };\n    unique_ptr<Resource, decltype(cleanup)> ptr(new Resource(), cleanup);\n    \n    ptr->use();\n    \n    return 0;\n}',
  hint: 'Lambda as custom deleter for smart pointers.'
},
);