QuizData.questions.push(
  //introduction ,Variable ,datatype ,operator
{
  id: 'cpp_intro_1',
  topicId: 'cpp_intro',
  question: 'Write a simple C++ program that prints "Hello World" to console.',
  mathSolution: 'Use #include <iostream> and cout to output text.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World" << endl;\n    return 0;\n}',
  hint: 'main() function is the entry point of every C++ program.'
},
{
  id: 'cpp_intro_2',
  topicId: 'cpp_intro',
  question: 'Declare and initialize integer, float, and char variables in C++.',
  mathSolution: 'Use data types: int, float, char for variable declaration.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    float price = 99.99;\n    char grade = \'A\';\n    \n    cout << "Age: " << age << endl;\n    cout << "Price: " << price << endl;\n    cout << "Grade: " << grade << endl;\n    return 0;\n}',
  hint: 'C++ is statically typed - variables must have declared types.'
},
{
  id: 'cpp_intro_3',
  topicId: 'cpp_intro',
  question: 'Demonstrate the use of const keyword for constants.',
  mathSolution: 'const variables cannot be modified after initialization.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14159;\n    const int MAX_STUDENTS = 100;\n    \n    cout << "PI = " << PI << endl;\n    cout << "MAX_STUDENTS = " << MAX_STUDENTS << endl;\n    // PI = 3.14;  // Error: cannot modify const\n    return 0;\n}',
  hint: 'const variables must be initialized at declaration.'
},
{
  id: 'cpp_intro_4',
  topicId: 'cpp_intro',
  question: 'Take user input using cin and display it.',
  mathSolution: 'Use cin to read input and cout to display output.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    \n    cout << "Enter your name: ";\n    cin >> name;\n    cout << "Enter your age: ";\n    cin >> age;\n    \n    cout << "Hello " << name << ", you are " << age << " years old" << endl;\n    return 0;\n}',
  hint: 'Use >> operator with cin to read input from user.'
},
{
  id: 'cpp_intro_5',
  topicId: 'cpp_intro',
  question: 'Demonstrate arithmetic operators in C++.',
  mathSolution: 'Use +, -, *, /, % operators for calculations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3;\n    \n    cout << "Sum: " << a + b << endl;\n    cout << "Difference: " << a - b << endl;\n    cout << "Product: " << a * b << endl;\n    cout << "Quotient: " << a / b << endl;\n    cout << "Remainder: " << a % b << endl;\n    return 0;\n}',
  hint: '% operator works only with integers, returns remainder.'
},
{
  id: 'cpp_intro_6',
  topicId: 'cpp_intro',
  question: 'Demonstrate increment (++) and decrement (--) operators.',
  mathSolution: 'Prefix increments before use, postfix increments after use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    \n    cout << "Postfix increment: " << x++ << endl;  // prints 5, then x=6\n    cout << "After postfix: " << x << endl;\n    \n    int y = 5;\n    cout << "Prefix increment: " << ++y << endl;   // increments to 6, then prints\n    \n    int z = 5;\n    cout << "Prefix decrement: " << --z << endl;   // prints 4\n    return 0;\n}',
  hint: 'Prefix (++x) increments first, then uses value; postfix (x++) uses value first, then increments.'
},
{
  id: 'cpp_intro_7',
  topicId: 'cpp_intro',
  question: 'Use if-else statement to check if a number is positive or negative.',
  mathSolution: 'Use if-else with comparison operators.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n    \n    if (num > 0) {\n        cout << num << " is positive" << endl;\n    } else if (num < 0) {\n        cout << num << " is negative" << endl;\n    } else {\n        cout << "Number is zero" << endl;\n    }\n    return 0;\n}',
  hint: 'if-else allows conditional execution of code blocks.'
},
{
  id: 'cpp_intro_8',
  topicId: 'cpp_intro',
  question: 'Use switch statement for multiple condition checking.',
  mathSolution: 'switch is efficient for checking equality against multiple values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int day;\n    cout << "Enter day number (1-7): ";\n    cin >> day;\n    \n    switch(day) {\n        case 1: cout << "Monday" << endl; break;\n        case 2: cout << "Tuesday" << endl; break;\n        case 3: cout << "Wednesday" << endl; break;\n        case 4: cout << "Thursday" << endl; break;\n        case 5: cout << "Friday" << endl; break;\n        case 6: cout << "Saturday" << endl; break;\n        case 7: cout << "Sunday" << endl; break;\n        default: cout << "Invalid day" << endl;\n    }\n    return 0;\n}',
  hint: 'break prevents fall-through to next case; default handles unmatched values.'
},
{
  id: 'cpp_intro_9',
  topicId: 'cpp_intro',
  question: 'Use for loop to print numbers from 1 to 10.',
  mathSolution: 'For loop has initialization, condition, and increment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'For loop syntax: for(initialization; condition; increment/decrement)'
},
{
  id: 'cpp_intro_10',
  topicId: 'cpp_intro',
  question: 'Use while loop to calculate sum of numbers from 1 to n.',
  mathSolution: 'While loop continues while condition is true.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, sum = 0, i = 1;\n    cout << "Enter n: ";\n    cin >> n;\n    \n    while (i <= n) {\n        sum += i;\n        i++;\n    }\n    cout << "Sum from 1 to " << n << " = " << sum << endl;\n    return 0;\n}',
  hint: 'While loop checks condition before executing the body.'
},
{
  id: 'cpp_intro_11',
  topicId: 'cpp_intro',
  question: 'Use do-while loop to ensure loop executes at least once.',
  mathSolution: 'do-while executes body first, then checks condition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    \n    do {\n        cout << "Enter a positive number: ";\n        cin >> num;\n    } while (num <= 0);\n    \n    cout << "You entered: " << num << endl;\n    return 0;\n}',
  hint: 'do-while guarantees at least one iteration.'
},
{
  id: 'cpp_intro_12',
  topicId: 'cpp_intro',
  question: 'Create and access elements of an array in C++.',
  mathSolution: 'Array stores multiple elements of same type in contiguous memory.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    \n    for (int i = 0; i < 5; i++) {\n        cout << "numbers[" << i << "] = " << numbers[i] << endl;\n    }\n    return 0;\n}',
  hint: 'Access array elements using index (0-based indexing).'
},
{
  id: 'cpp_intro_13',
  topicId: 'cpp_intro',
  question: 'Find the largest element in an array.',
  mathSolution: 'Initialize max with first element and compare with others.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {5, 12, 3, 25, 8, 19};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int maxVal = arr[0];\n    \n    for (int i = 1; i < n; i++) {\n        if (arr[i] > maxVal) {\n            maxVal = arr[i];\n        }\n    }\n    cout << "Largest element: " << maxVal << endl;\n    return 0;\n}',
  hint: 'Use sizeof(arr)/sizeof(arr[0]) to get array length.'
},
{
  id: 'cpp_intro_14',
  topicId: 'cpp_intro',
  question: 'Create a function that adds two numbers and returns the result.',
  mathSolution: 'Function has return type, name, parameters, and body.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int x = 5, y = 3;\n    int result = add(x, y);\n    cout << "Sum: " << result << endl;\n    return 0;\n}',
  hint: 'Functions help organize code and avoid repetition.'
},
{
  id: 'cpp_intro_15',
  topicId: 'cpp_intro',
  question: 'Use function overloading to create multiple functions with same name.',
  mathSolution: 'Function overloading allows functions with same name but different parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) {\n    return a + b;\n}\n\ndouble add(double a, double b) {\n    return a + b;\n}\n\nint add(int a, int b, int c) {\n    return a + b + c;\n}\n\nint main() {\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << add(5, 3, 2) << endl;\n    return 0;\n}',
  hint: 'Function overloading is resolved at compile time based on arguments.'
},
{
  id: 'cpp_intro_16',
  topicId: 'cpp_intro',
  question: 'Create a function with default parameters.',
  mathSolution: 'Default parameter values are used when arguments are omitted.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid greet(string name = "Guest", string greeting = "Hello") {\n    cout << greeting << ", " << name << "!" << endl;\n}\n\nint main() {\n    greet();\n    greet("John");\n    greet("Alice", "Hi");\n    return 0;\n}',
  hint: 'Default parameters must be declared from rightmost to leftmost.'
},
{
  id: 'cpp_intro_17',
  topicId: 'cpp_intro',
  question: 'Use reference variables in C++.',
  mathSolution: 'References are aliases to existing variables, created with &.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int &ref = x;\n    \n    cout << "x = " << x << ", ref = " << ref << endl;\n    \n    ref = 20;\n    cout << "After changing ref: x = " << x << endl;\n    \n    return 0;\n}',
  hint: 'References must be initialized when declared and cannot be changed to refer to another variable.'
},
{
  id: 'cpp_intro_18',
  topicId: 'cpp_intro',
  question: 'Pass arguments to function by reference.',
  mathSolution: 'Pass by reference allows function to modify original variables.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    cout << "Before swap: x=" << x << ", y=" << y << endl;\n    swap(x, y);\n    cout << "After swap: x=" << x << ", y=" << y << endl;\n    return 0;\n}',
  hint: 'Pass by reference avoids copying large objects and allows modification.'
},
{
  id: 'cpp_intro_19',
  topicId: 'cpp_intro',
  question: 'Use inline function to reduce function call overhead.',
  mathSolution: 'inline suggests compiler to replace function call with code.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ninline int square(int x) {\n    return x * x;\n}\n\nint main() {\n    int n = 5;\n    cout << "Square of " << n << " = " << square(n) << endl;\n    return 0;\n}',
  hint: 'inline is a request; compiler may ignore for large functions.'
},
{
  id: 'cpp_intro_20',
  topicId: 'cpp_intro',
  question: 'Define and use namespace to avoid name conflicts.',
  mathSolution: 'Namespaces group identifiers and prevent naming collisions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nnamespace Math {\n    int add(int a, int b) { return a + b; }\n    const double PI = 3.14159;\n}\n\nnamespace Physics {\n    double add(double a, double b) { return a + b; }\n}\n\nint main() {\n    cout << "Math::add(5,3) = " << Math::add(5, 3) << endl;\n    cout << "Physics::add(5.5,3.2) = " << Physics::add(5.5, 3.2) << endl;\n    cout << "Math::PI = " << Math::PI << endl;\n    return 0;\n}',
  hint: 'Use :: scope resolution operator to access namespace members.'
},
{
  id: 'cpp_intro_21',
  topicId: 'cpp_intro',
  question: 'Create and use a simple structure (struct) in C++.',
  mathSolution: 'Structure groups multiple variables of different types.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int age;\n    float gpa;\n};\n\nint main() {\n    Student s1;\n    s1.name = "John Doe";\n    s1.age = 20;\n    s1.gpa = 3.8;\n    \n    Student s2 = {"Jane Smith", 22, 3.9};\n    \n    cout << "Student 1: " << s1.name << ", Age: " << s1.age << ", GPA: " << s1.gpa << endl;\n    cout << "Student 2: " << s2.name << ", Age: " << s2.age << ", GPA: " << s2.gpa << endl;\n    return 0;\n}',
  hint: 'Structures in C++ can also contain functions (unlike C).'
},
{
  id: 'cpp_intro_22',
  topicId: 'cpp_intro',
  question: 'Create and use enum (enumeration) in C++.',
  mathSolution: 'Enum defines a set of named integer constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum Color { RED, GREEN, BLUE };\nenum Day { MON = 1, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    Color myColor = GREEN;\n    Day today = WED;\n    \n    cout << "Color value: " << myColor << endl;\n    cout << "Day value: " << today << endl;\n    \n    if (myColor == GREEN) {\n        cout << "Color is Green" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'By default, enumerators start at 0 and increment by 1.'
},
{
  id: 'cpp_intro_23',
  topicId: 'cpp_intro',
  question: 'Use dynamic memory allocation with new and delete.',
  mathSolution: 'new allocates memory on heap, delete frees it.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int *p = new int;\n    *p = 42;\n    cout << "Value: " << *p << endl;\n    delete p;\n    \n    int *arr = new int[5];\n    for (int i = 0; i < 5; i++) arr[i] = i * 10;\n    for (int i = 0; i < 5; i++) cout << arr[i] << " ";\n    cout << endl;\n    delete[] arr;\n    \n    return 0;\n}',
  hint: 'Use delete for single variable, delete[] for array allocation.'
},
{
  id: 'cpp_intro_24',
  topicId: 'cpp_intro',
  question: 'Use pointer variables to store memory addresses.',
  mathSolution: 'Pointer holds address of another variable, declared with *.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int *ptr = &x;\n    \n    cout << "Value of x: " << x << endl;\n    cout << "Address of x: " << &x << endl;\n    cout << "Value of ptr: " << ptr << endl;\n    cout << "Value pointed by ptr: " << *ptr << endl;\n    \n    *ptr = 20;\n    cout << "New value of x: " << x << endl;\n    \n    return 0;\n}',
  hint: 'Use & to get address, * to dereference pointer and access value.'
},
{
  id: 'cpp_intro_25',
  topicId: 'cpp_intro',
  question: 'Use string class for string manipulation.',
  mathSolution: 'string class provides many methods for string operations.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Hello";\n    string str2 = "World";\n    \n    string str3 = str1 + " " + str2;\n    cout << "Concatenated: " << str3 << endl;\n    \n    cout << "Length: " << str3.length() << endl;\n    cout << "First character: " << str3[0] << endl;\n    cout << "Substring (0,5): " << str3.substr(0, 5) << endl;\n    \n    if (str1 == "Hello") cout << "Strings match" << endl;\n    \n    return 0;\n}',
  hint: 'Include <string> header and use std::string.'
},
{
  id: 'cpp_intro_26',
  topicId: 'cpp_intro',
  question: 'Use vector container from STL.',
  mathSolution: 'vector is dynamic array that grows automatically.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers;\n    \n    numbers.push_back(10);\n    numbers.push_back(20);\n    numbers.push_back(30);\n    \n    cout << "Size: " << numbers.size() << endl;\n    cout << "Elements: ";\n    for (int i = 0; i < numbers.size(); i++) {\n        cout << numbers[i] << " ";\n    }\n    cout << endl;\n    \n    numbers.pop_back();\n    cout << "After pop, size: " << numbers.size() << endl;\n    \n    return 0;\n}',
  hint: 'vector is part of STL; include <vector> header.'
},
{
  id: 'cpp_intro_27',
  topicId: 'cpp_intro',
  question: 'Use range-based for loop to iterate over container.',
  mathSolution: 'Range-based for loop simplifies iteration over arrays/containers.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    vector<string> names = {"Alice", "Bob", "Charlie"};\n    \n    cout << "Array elements: ";\n    for (int x : arr) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    cout << "Names: ";\n    for (const auto &name : names) {\n        cout << name << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Range-based for loop syntax: for(type var : container)'
},
{
  id: 'cpp_intro_28',
  topicId: 'cpp_intro',
  question: 'Use auto keyword for type deduction.',
  mathSolution: 'auto lets compiler deduce variable type automatically.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    auto x = 10;\n    auto y = 3.14;\n    auto name = "John";\n    \n    vector<int> numbers = {1, 2, 3};\n    auto it = numbers.begin();\n    \n    cout << "x = " << x << ", y = " << y << endl;\n    \n    for (auto num : numbers) {\n        cout << num << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'auto is especially useful for complex iterator types.'
},
{
  id: 'cpp_intro_29',
  topicId: 'cpp_intro',
  question: 'Write a simple class with constructor and member function.',
  mathSolution: 'Class defines blueprint with data members and member functions.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    Person(string n, int a) {\n        name = n;\n        age = a;\n    }\n    \n    void introduce() {\n        cout << "Hello, my name is " << name << " and I am " << age << " years old." << endl;\n    }\n    \n    void haveBirthday() {\n        age++;\n        cout << name << " is now " << age << " years old!" << endl;\n    }\n};\n\nint main() {\n    Person p1("John", 25);\n    p1.introduce();\n    p1.haveBirthday();\n    \n    return 0;\n}',
  hint: 'Member functions have access to private data members.'
},
{
  id: 'cpp_intro_30',
  topicId: 'cpp_intro',
  question: 'Use constructor initializer list for efficient initialization.',
  mathSolution: 'Initializer list initializes members before constructor body.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int id;\n    double gpa;\n    \npublic:\n    Student(string n, int i, double g) : name(n), id(i), gpa(g) {\n        cout << "Student created: " << name << endl;\n    }\n    \n    void display() {\n        cout << "ID: " << id << ", Name: " << name << ", GPA: " << gpa << endl;\n    }\n};\n\nint main() {\n    Student s1("Alice", 1001, 3.8);\n    s1.display();\n    return 0;\n}',
  hint: 'Initializer list is more efficient than assignment in constructor body.'
},
{
  id: 'cpp_intro_31',
  topicId: 'cpp_intro',
  question: 'Demonstrate inheritance between classes.',
  mathSolution: 'Derived class inherits members from base class.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal(string n) : name(n) {}\n    \n    void eat() {\n        cout << name << " is eating" << endl;\n    }\n    \n    void sleep() {\n        cout << name << " is sleeping" << endl;\n    }\n};\n\nclass Dog : public Animal {\nprivate:\n    string breed;\n    \npublic:\n    Dog(string n, string b) : Animal(n), breed(b) {}\n    \n    void bark() {\n        cout << name << " barks: Woof! Woof!" << endl;\n    }\n    \n    void wagTail() {\n        cout << name << " wags tail" << endl;\n    }\n};\n\nint main() {\n    Dog myDog("Rex", "German Shepherd");\n    myDog.eat();\n    myDog.sleep();\n    myDog.bark();\n    myDog.wagTail();\n    return 0;\n}',
  hint: 'Derived class inherits all public and protected members of base class.'
},
{
  id: 'cpp_intro_32',
  topicId: 'cpp_intro',
  question: 'Use function overriding in inheritance.',
  mathSolution: 'Override base class virtual function in derived class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() {\n        cout << "Base class area" << endl;\n        return 0;\n    }\n    \n    virtual void draw() {\n        cout << "Drawing shape" << endl;\n    }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n};\n\nint main() {\n    Circle circle(5);\n    cout << "Area: " << circle.area() << endl;\n    circle.draw();\n    return 0;\n}',
  hint: 'Use virtual keyword in base class and override in derived class.'
},
{
  id: 'cpp_intro_33',
  topicId: 'cpp_intro',
  question: 'Demonstrate polymorphism with virtual functions.',
  mathSolution: 'Base class pointer to derived class calls overridden function.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double area() override { return 3.14159 * radius * radius; }\n    void draw() override { cout << "Drawing Circle" << endl; }\n};\n\nclass Rectangle : public Shape {\n    double w, h;\npublic:\n    Rectangle(double width, double height) : w(width), h(height) {}\n    double area() override { return w * h; }\n    void draw() override { cout << "Drawing Rectangle" << endl; }\n};\n\nint main() {\n    vector<Shape*> shapes;\n    shapes.push_back(new Circle(5));\n    shapes.push_back(new Rectangle(4, 6));\n    \n    for (Shape* s : shapes) {\n        cout << "Area: " << s->area() << endl;\n        s->draw();\n    }\n    \n    for (Shape* s : shapes) delete s;\n    return 0;\n}',
  hint: 'Virtual functions enable runtime polymorphism.'
},
{
  id: 'cpp_intro_34',
  topicId: 'cpp_intro',
  question: 'Create and use constructor with member initializer list.',
  mathSolution: 'Initializer list initializes const and reference members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprivate:\n    const int x;\n    const int y;\n    int& refCount;\n    \npublic:\n    Point(int xVal, int yVal, int& count) : x(xVal), y(yVal), refCount(count) {\n        refCount++;\n    }\n    \n    void display() const {\n        cout << "Point(" << x << ", " << y << ")" << endl;\n    }\n};\n\nint main() {\n    int count = 0;\n    Point p1(10, 20, count);\n    Point p2(30, 40, count);\n    \n    p1.display();\n    p2.display();\n    cout << "Number of points: " << count << endl;\n    \n    return 0;\n}',
  hint: 'Member initializer list is required for const and reference members.'
},
{
  id: 'cpp_intro_35',
  topicId: 'cpp_intro',
  question: 'Demonstrate friend function accessing private members.',
  mathSolution: 'Friend function is not a member but can access private members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int width, height;\n    \npublic:\n    Box(int w, int h) : width(w), height(h) {}\n    \n    friend int getArea(Box b);\n    friend void displayBox(Box b);\n};\n\nint getArea(Box b) {\n    return b.width * b.height;\n}\n\nvoid displayBox(Box b) {\n    cout << "Box: " << b.width << " x " << b.height << endl;\n}\n\nint main() {\n    Box box(10, 20);\n    displayBox(box);\n    cout << "Area: " << getArea(box) << endl;\n    return 0;\n}',
  hint: 'Friend functions are not members but have access to private data.'
},
{
  id: 'cpp_intro_36',
  topicId: 'cpp_intro',
  question: 'Use static members and static functions in class.',
  mathSolution: 'Static members are shared across all instances of class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    static int count;\n    int id;\n    \npublic:\n    Counter() {\n        count++;\n        id = count;\n    }\n    \n    static int getCount() {\n        return count;\n    }\n    \n    void display() {\n        cout << "Object " << id << " created. Total objects: " << count << endl;\n    }\n};\n\nint Counter::count = 0;\n\nint main() {\n    Counter c1, c2, c3;\n    c1.display();\n    c2.display();\n    c3.display();\n    \n    cout << "Total objects (static function): " << Counter::getCount() << endl;\n    return 0;\n}',
  hint: 'Static data members must be defined outside the class.'
},
{
  id: 'cpp_intro_37',
  topicId: 'cpp_intro',
  question: 'Demonstrate operator overloading for custom class.',
  mathSolution: 'Define operators for user-defined types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4);\n    Complex c2(1, 2);\n    \n    Complex c3 = c1 + c2;\n    Complex c4 = c1 - c2;\n    \n    cout << "c1: "; c1.display();\n    cout << "c2: "; c2.display();\n    cout << "c1 + c2: "; c3.display();\n    cout << "c1 - c2: "; c4.display();\n    \n    return 0;\n}',
  hint: 'Overloaded operators provide intuitive syntax for custom types.'
},
{
  id: 'cpp_intro_38',
  topicId: 'cpp_intro',
  question: 'Use try-catch block for exception handling.',
  mathSolution: 'try block contains code that may throw, catch handles exceptions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw "Division by zero error";\n    }\n    return a / b;\n}\n\nint main() {\n    double x, y;\n    cout << "Enter two numbers: ";\n    cin >> x >> y;\n    \n    try {\n        double result = divide(x, y);\n        cout << "Result: " << result << endl;\n    } catch (const char* error) {\n        cout << "Error: " << error << endl;\n    }\n    \n    return 0;\n}',
  hint: 'C++ supports multiple catch blocks for different exception types.'
},
{
  id: 'cpp_intro_39',
  topicId: 'cpp_intro',
  question: 'Create and use file I/O to write and read data.',
  mathSolution: 'Use ifstream for reading, ofstream for writing files.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Writing to file\n    ofstream outFile("test.txt");\n    if (outFile.is_open()) {\n        outFile << "Hello World" << endl;\n        outFile << "Line 2" << endl;\n        outFile.close();\n        cout << "File written successfully" << endl;\n    }\n    \n    // Reading from file\n    ifstream inFile("test.txt");\n    string line;\n    if (inFile.is_open()) {\n        cout << "File contents:" << endl;\n        while (getline(inFile, line)) {\n            cout << line << endl;\n        }\n        inFile.close();\n    }\n    \n    return 0;\n}',
  hint: 'Include <fstream> header for file operations.'
},
{
  id: 'cpp_intro_40',
  topicId: 'cpp_intro',
  question: 'Use smart pointers (unique_ptr) for automatic memory management.',
  mathSolution: 'unique_ptr automatically deletes object when out of scope.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource() { cout << "Resource acquired" << endl; }\n    ~Resource() { cout << "Resource released" << endl; }\n    void work() { cout << "Working..." << endl; }\n};\n\nint main() {\n    {\n        unique_ptr<Resource> ptr(new Resource());\n        ptr->work();\n    }\n    \n    cout << "Out of scope" << endl;\n    \n    return 0;\n}',
  hint: 'Smart pointers prevent memory leaks by automatic cleanup.'
},
//variable
{
  id: 'cpp_variables_1',
  topicId: 'cpp_variables',
  question: 'Declare and initialize an integer variable in C++.',
  mathSolution: 'Use int keyword followed by variable name and assignment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    cout << "Age: " << age << endl;\n    return 0;\n}',
  hint: 'int stores whole numbers (positive or negative).'
},
{
  id: 'cpp_variables_2',
  topicId: 'cpp_variables',
  question: 'Declare and initialize a floating-point (float) variable.',
  mathSolution: 'Use float keyword for single-precision decimal numbers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    float price = 19.99f;\n    cout << "Price: $" << price << endl;\n    return 0;\n}',
  hint: 'Add f suffix to specify float literal, otherwise default is double.'
},
{
  id: 'cpp_variables_3',
  topicId: 'cpp_variables',
  question: 'Declare and initialize a double variable for higher precision.',
  mathSolution: 'Use double keyword for double-precision floating point.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    double pi = 3.14159265359;\n    double largeNumber = 1.23456789e10;\n    cout << "PI = " << pi << endl;\n    cout << "Large number = " << largeNumber << endl;\n    return 0;\n}',
  hint: 'double has more precision than float (about 15 decimal digits).'
},
{
  "id": "cpp_variables_4",
  "topicId": "cpp_variables",
  "question": "Declare and initialize a character variable.",
  "mathSolution": "Use char keyword with single quotes.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'A';\n    char symbol = '$';\n    char digit = '7';\n    \n    cout << \"Grade: \" << grade << endl;\n    cout << \"Symbol: \" << symbol << endl;\n    cout << \"Digit: \" << digit << endl;\n    \n    return 0;\n}",
  "hint": "char stores a single character in single quotes, not double quotes."
},
{
  id: 'cpp_variables_5',
  topicId: 'cpp_variables',
  question: 'Declare and initialize a boolean variable.',
  mathSolution: 'Use bool keyword with true or false values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool isActive = true;\n    bool isComplete = false;\n    \n    cout << "isActive: " << isActive << endl;   // Prints 1\n    cout << "isComplete: " << isComplete << endl; // Prints 0\n    cout << boolalpha;  // Format to print true/false\n    cout << "isActive: " << isActive << endl;   // Prints true\n    cout << "isComplete: " << isComplete << endl; // Prints false\n    return 0;\n}',
  hint: 'bool values print as 1/0 by default, use boolalpha for true/false.'
},
{
  id: 'cpp_variables_6',
  topicId: 'cpp_variables',
  question: 'Declare multiple variables of same type in one statement.',
  mathSolution: 'Separate variable names with commas after type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 10, c = 15;\n    double x = 1.1, y = 2.2, z = 3.3;\n    \n    cout << "a = " << a << ", b = " << b << ", c = " << c << endl;\n    cout << "x = " << x << ", y = " << y << ", z = " << z << endl;\n    return 0;\n}',
  hint: 'Multiple declarations can save space but may reduce readability.'
},
{
  id: 'cpp_variables_7',
  topicId: 'cpp_variables',
  question: 'Declare variables without initialization (default values).',
  mathSolution: 'Variables declared without initialization contain garbage values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint globalVar;  // Zero-initialized\n\nint main() {\n    int localVar;  // Contains garbage value\n    static int staticVar;  // Zero-initialized\n    \n    cout << "Global: " << globalVar << endl;\n    cout << "Static: " << staticVar << endl;\n    cout << "Local (garbage): " << localVar << endl;\n    return 0;\n}',
  hint: 'Always initialize local variables to avoid undefined behavior.'
},
{
  "id": "cpp_variables_8",
  "topicId": "cpp_variables",
  "question": "Use const keyword for immutable variables.",
  "mathSolution": "const variables cannot be modified after initialization.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14159;\n    const int MAX_USERS = 100;\n    const char NEWLINE = '\\n';\n    \n    cout << \"PI = \" << PI << NEWLINE;\n    cout << \"MAX_USERS = \" << MAX_USERS << NEWLINE;\n    // PI = 3.14;  // Error: cannot modify const variable\n    \n    return 0;\n}",
  "hint": "const variables must be initialized at declaration time."
},
{
  id: 'cpp_variables_9',
  topicId: 'cpp_variables',
  question: 'Use constexpr for compile-time constants.',
  mathSolution: 'constexpr evaluated at compile time, more efficient than const.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nconstexpr int square(int x) {\n    return x * x;\n}\n\nint main() {\n    constexpr int SIZE = 10;\n    constexpr int AREA = SIZE * SIZE;\n    constexpr int SQUARE_OF_5 = square(5);\n    \n    cout << "SIZE: " << SIZE << endl;\n    cout << "AREA: " << AREA << endl;\n    cout << "Square of 5: " << SQUARE_OF_5 << endl;\n    \n    int arr[SIZE];  // Valid because SIZE is compile-time constant\n    return 0;\n}',
  hint: 'constexpr guarantees compile-time evaluation when possible.'
},
{
  id: 'cpp_variables_10',
  topicId: 'cpp_variables',
  question: 'Declare unsigned integer variables (only positive values).',
  mathSolution: 'Use unsigned keyword to store only non-negative values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    unsigned int count = 100;\n    unsigned short smallNum = 65535;\n    unsigned long largeNum = 4294967295UL;\n    \n    cout << "Count: " << count << endl;\n    cout << "Small: " << smallNum << endl;\n    cout << "Large: " << largeNum << endl;\n    \n    // unsigned int age = -5;  // Wraps around to large positive number\n    // cout << "Age: " << age << endl;  // Prints large number (4294967291)\n    return 0;\n}',
  hint: 'Unsigned types cannot store negative values and have double the positive range.'
},
{
  id: 'cpp_variables_11',
  topicId: 'cpp_variables',
  question: 'Declare short and long integer variables.',
  mathSolution: 'Use short and long modifiers for different size integers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    short small = 32767;           // Usually 2 bytes\n    int normal = 2147483647;       // Usually 4 bytes\n    long large = 2147483647L;      // Usually 4 or 8 bytes\n    long long veryLarge = 9223372036854775807LL;  // Usually 8 bytes\n    \n    cout << "short size: " << sizeof(short) << " bytes" << endl;\n    cout << "int size: " << sizeof(int) << " bytes" << endl;\n    cout << "long size: " << sizeof(long) << " bytes" << endl;\n    cout << "long long size: " << sizeof(long long) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'Size of types depends on system architecture (use sizeof to check).'
},
{
  "id": "cpp_variables_12",
  "topicId": "cpp_variables",
  "question": "Use auto keyword for type deduction.",
  "mathSolution": "auto deduces variable type from initializer expression.",
  "codeSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    auto num = 42;           // int\n    auto pi = 3.14159;       // double\n    auto letter = 'A';       // char\n    auto name = \"John\";      // const char*\n    auto vec = vector<int>{1, 2, 3};  // vector<int>\n    \n    cout << \"num: \" << num << endl;\n    cout << \"pi: \" << pi << endl;\n    cout << \"letter: \" << letter << endl;\n    cout << \"name: \" << name << endl;\n    cout << \"vec size: \" << vec.size() << endl;\n    \n    return 0;\n}",
  "hint": "auto prevents type mismatches and simplifies complex type declarations."
},
{
  id: 'cpp_variables_13',
  topicId: 'cpp_variables',
  question: 'Declare and use string variables.',
  mathSolution: 'Include string header and use std::string type.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = "John Doe";\n    string city = "New York";\n    string greeting = "Hello, " + name + "!";\n    \n    cout << "Name: " << name << endl;\n    cout << "City: " << city << endl;\n    cout << "Greeting: " << greeting << endl;\n    cout << "Length: " << name.length() << endl;\n    \n    return 0;\n}',
  hint: '#include <string> is required for string type.'
},
{
  id: 'cpp_variables_14',
  topicId: 'cpp_variables',
  question: 'Use reference variable as alias to another variable.',
  mathSolution: 'Reference is declared with & and must be initialized.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int original = 100;\n    int &ref = original;  // ref is reference to original\n    \n    cout << "Original: " << original << endl;\n    cout << "Reference: " << ref << endl;\n    \n    ref = 200;  // Changes original through reference\n    cout << "After modifying ref: " << original << endl;\n    \n    return 0;\n}',
  hint: 'References must be initialized when declared and cannot be reassigned.'
},
{
  id: 'cpp_variables_15',
  topicId: 'cpp_variables',
  question: 'Use pointer variable to store memory address.',
  mathSolution: 'Pointer declared with *, stores address of another variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int value = 42;\n    int *ptr = &value;  // ptr points to value\n    \n    cout << "Value: " << value << endl;\n    cout << "Address of value: " << &value << endl;\n    cout << "Pointer value (address): " << ptr << endl;\n    cout << "Dereferenced pointer: " << *ptr << endl;\n    \n    *ptr = 100;  // Changes value through pointer\n    cout << "After dereference: " << value << endl;\n    \n    return 0;\n}',
  hint: 'Use & to get address, * to dereference and access value.'
},
{
  id: 'cpp_variables_16',
  topicId: 'cpp_variables',
  question: 'Use nullptr for null pointers (C++11).',
  mathSolution: 'nullptr is type-safe null pointer literal.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int *ptr1 = nullptr;  // Equivalent to NULL but type-safe\n    int *ptr2 = NULL;     // Old C-style (not type-safe)\n    \n    if (ptr1 == nullptr) {\n        cout << "ptr1 is null" << endl;\n    }\n    \n    // ptr1 = 42;  // Error: cannot assign int to pointer\n    ptr1 = new int(42);\n    \n    if (ptr1 != nullptr) {\n        cout << "ptr1 points to: " << *ptr1 << endl;\n    }\n    \n    delete ptr1;\n    ptr1 = nullptr;  // Good practice after delete\n    \n    return 0;\n}',
  hint: 'Always set pointers to nullptr after deleting to avoid dangling pointers.'
},
{
  id: 'cpp_variables_17',
  topicId: 'cpp_variables',
  question: 'Declare void pointer for generic addressing.',
  mathSolution: 'void* can point to any type but cannot be dereferenced directly.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 42;\n    double pi = 3.14159;\n    char letter = \'X\';\n    \n    void *ptr;\n    \n    ptr = &num;\n    cout << "Integer pointer: " << *(static_cast<int*>(ptr)) << endl;\n    \n    ptr = &pi;\n    cout << "Double pointer: " << *(static_cast<double*>(ptr)) << endl;\n    \n    ptr = &letter;\n    cout << "Char pointer: " << *(static_cast<char*>(ptr)) << endl;\n    \n    return 0;\n}',
  hint: 'void* must be cast to specific type before dereferencing.'
},
{
  id: 'cpp_variables_18',
  topicId: 'cpp_variables',
  question: 'Declare constant pointer and pointer to constant.',
  mathSolution: 'const affects pointer address or pointed value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20;\n    \n    // Pointer to constant (cannot change pointed value)\n    const int *ptr1 = &x;\n    // *ptr1 = 30;  // Error: cannot modify value through ptr1\n    ptr1 = &y;      // OK: can change pointer itself\n    \n    // Constant pointer (cannot change pointer address)\n    int *const ptr2 = &x;\n    *ptr2 = 30;     // OK: can modify value\n    // ptr2 = &y;   // Error: cannot change pointer\n    \n    // Constant pointer to constant\n    const int *const ptr3 = &x;\n    // *ptr3 = 30;  // Error: cannot modify value\n    // ptr3 = &y;   // Error: cannot modify pointer\n    \n    cout << "x: " << x << ", y: " << y << endl;\n    \n    return 0;\n}',
  hint: 'Read const declarations from right to left for correct interpretation.'
},
{
  id: 'cpp_variables_19',
  topicId: 'cpp_variables',
  question: 'Use size_t for array indexing and sizes.',
  mathSolution: 'size_t is unsigned integer type for sizes.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    size_t length = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Array length: " << length << endl;\n    \n    for (size_t i = 0; i < length; i++) {\n        cout << "arr[" << i << "] = " << arr[i] << endl;\n    }\n    \n    vector<int> vec = {1, 2, 3, 4, 5};\n    size_t vecSize = vec.size();\n    cout << "Vector size: " << vecSize << endl;\n    \n    return 0;\n}',
  hint: 'size_t is the type returned by sizeof and container size() methods.'
},
{
  id: 'cpp_variables_20',
  topicId: 'cpp_variables',
  question: 'Declare and use enumerations (enum).',
  mathSolution: 'enum defines set of named integer constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Traditional enum (unscoped)\nenum Color { RED, GREEN, BLUE };\n\n// Enum class (scoped, C++11)\nenum class Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    Color myColor = GREEN;\n    Weekday today = Weekday::WED;\n    \n    cout << "Color value: " << myColor << endl;  // Prints 1\n    \n    // cout << today;  // Error: enum class not implicitly convertible\n    cout << "Weekday: " << static_cast<int>(today) << endl;\n    \n    if (myColor == GREEN) {\n        cout << "Color is green" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Use enum class for type-safe enumerations (C++11).'
},
{
  id: 'cpp_variables_21',
  topicId: 'cpp_variables',
  question: 'Use decltype to get type of expression.',
  mathSolution: 'decltype deduces type without evaluating expression.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    double b = 3.14;\n    \n    decltype(a) c = a;           // c is int\n    decltype(b) d = b;           // d is double\n    decltype(a + b) result = a + b;  // result is double\n    \n    cout << "Type of c: " << typeid(c).name() << endl;\n    cout << "Type of d: " << typeid(d).name() << endl;\n    cout << "Type of result: " << typeid(result).name() << endl;\n    \n    // decltype with expressions\n    decltype( (a) ) refToA = a;  // reference to int\n    refToA = 20;\n    cout << "a after modification: " << a << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful for generic programming and templates.'
},
{
  id: 'cpp_variables_22',
  topicId: 'cpp_variables',
  question: 'Declare static variables with static storage duration.',
  mathSolution: 'static variables retain value between function calls.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid counter() {\n    static int count = 0;  // Initialized only once\n    count++;\n    cout << "Called " << count << " times" << endl;\n}\n\nint main() {\n    counter();  // Called 1 times\n    counter();  // Called 2 times\n    counter();  // Called 3 times\n    \n    return 0;\n}',
  hint: 'Static local variables are initialized only once and persist across calls.'
},
{
  id: 'cpp_variables_23',
  topicId: 'cpp_variables',
  question: 'Declare extern variables for sharing across files.',
  mathSolution: 'extern declares variable defined in another file.',
  codeSolution: '// file1.cpp\n// int globalCount = 100;  // Definition\n\n// file2.cpp\n// extern int globalCount;  // Declaration\n// \n// int main() {\n//     cout << "Global count: " << globalCount << endl;\n//     return 0;\n// }',
  hint: 'extern declares variable without defining it.'
},
{
  id: 'cpp_variables_24',
  topicId: 'cpp_variables',
  question: 'Use volatile keyword for variables that can change unexpectedly.',
  mathSolution: 'volatile prevents compiler optimizations on variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    volatile int sensorValue = 100;  // May change externally\n    \n    while (sensorValue == 100) {\n        // Compiler won\'t optimize this check away\n        cout << "Waiting for sensor change" << endl;\n        break;  // Prevent infinite loop in example\n    }\n    \n    // Without volatile, compiler might optimize repeated access\n    volatile int *hardwareReg = reinterpret_cast<volatile int*>(0x4000);\n    int value = *hardwareReg;  // Always read from memory\n    \n    return 0;\n}',
  hint: 'volatile is used for memory-mapped I/O, signal handlers, and multi-threading.'
},
{
  id: 'cpp_variables_25',
  topicId: 'cpp_variables',
  question: 'Use mutable keyword in class for modification in const functions.',
  mathSolution: 'mutable allows modification of member in const member functions.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\nprivate:\n    mutable int logCount = 0;  // Can be modified in const functions\n    string name;\n    \npublic:\n    Logger(const string& n) : name(n) {}\n    \n    void log(const string& message) const {\n        logCount++;  // Allowed because mutable\n        cout << "[" << name << "] " << message << endl;\n    }\n    \n    int getLogCount() const {\n        return logCount;\n    }\n};\n\nint main() {\n    const Logger logger("App");\n    logger.log("Starting");\n    logger.log("Processing");\n    logger.log("Finished");\n    \n    cout << "Log count: " << logger.getLogCount() << endl;\n    \n    return 0;\n}',
  hint: 'mutable is useful for caching, logging, and mutexes in const contexts.'
},
{
  id: 'cpp_variables_26',
  topicId: 'cpp_variables',
  question: 'Initialize variables using uniform initialization (curly braces).',
  mathSolution: 'Use {} for initialization to prevent narrowing conversions.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    int a{10};\n    double b{3.14};\n    char c{\'X\'};\n    string s{"Hello"};\n    int arr[]{1, 2, 3, 4, 5};\n    vector<int> v{1, 2, 3, 4, 5};\n    \n    cout << "a: " << a << endl;\n    cout << "b: " << b << endl;\n    cout << "c: " << c << endl;\n    cout << "s: " << s << endl;\n    \n    // int x{3.14};  // Error: narrowing conversion from double to int\n    int y = 3.14;     // OK, but truncates (bad practice)\n    \n    return 0;\n}',
  hint: 'Uniform initialization prevents narrowing conversions and works everywhere.'
},
{
  id: 'cpp_variables_27',
  topicId: 'cpp_variables',
  question: 'Use structured bindings for multiple variable assignment (C++17).',
  mathSolution: 'Structured bindings unpack tuples, pairs, and structs.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Pair\n    pair<int, string> p = {1, "John"};\n    auto [id, name] = p;\n    cout << "ID: " << id << ", Name: " << name << endl;\n    \n    // Tuple\n    tuple<int, double, string> t = {42, 3.14, "Hello"};\n    auto [num, pi, msg] = t;\n    cout << "Num: " << num << ", Pi: " << pi << ", Msg: " << msg << endl;\n    \n    // Array\n    int arr[] = {10, 20, 30};\n    auto [x, y, z] = arr;\n    cout << "x,y,z: " << x << ", " << y << ", " << z << endl;\n    \n    // Struct\n    struct Point { int x; int y; };\n    Point pt = {5, 10};\n    auto [px, py] = pt;\n    cout << "Point: (" << px << ", " << py << ")" << endl;\n    \n    // Map iteration\n    map<string, int> ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    for (const auto& [person, age] : ages) {\n        cout << person << " is " << age << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Structured bindings (C++17) make working with compound types easier.'
},
{
  id: 'cpp_variables_28',
  topicId: 'cpp_variables',
  question: 'Initialize variables with different numeric bases (hex, octal).',
  mathSolution: 'Use prefixes: 0x for hex, 0 for octal.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int decimal = 42;\n    int hex = 0x2A;      // 42 in hexadecimal\n    int octal = 052;      // 42 in octal\n    int binary = 0b101010; // 42 in binary (C++14)\n    \n    cout << "Decimal: " << decimal << endl;\n    cout << "Hexadecimal: " << hex << endl;\n    cout << "Octal: " << octal << endl;\n    cout << "Binary: " << binary << endl;\n    \n    // Formatting output\n    cout << showbase;\n    cout << "Decimal: " << dec << decimal << endl;\n    cout << "Hexadecimal: " << hex << decimal << endl;\n    cout << "Octal: " << oct << decimal << endl;\n    \n    return 0;\n}',
  hint: 'Use different bases for bit manipulation and hardware programming.'
},
{
  id: 'cpp_variables_29',
  topicId: 'cpp_variables',
  question: 'Use suffixes for numeric literals.',
  mathSolution: 'Suffixes specify type of numeric literal.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    auto num1 = 42;        // int\n    auto num2 = 42U;       // unsigned int\n    auto num3 = 42L;       // long\n    auto num4 = 42UL;      // unsigned long\n    auto num5 = 42LL;      // long long\n    auto num6 = 42ULL;     // unsigned long long\n    \n    auto pi1 = 3.14;       // double\n    auto pi2 = 3.14f;      // float\n    auto pi3 = 3.14l;      // long double\n    \n    auto big = 1\'000\'000;  // Digit separators (C++14)\n    auto hex = 0xFF\'FF\'FF;\n    auto bin = 0b1111\'0000;\n    \n    cout << "num1: " << num1 << endl;\n    cout << "big: " << big << endl;\n    cout << "hex: " << hex << endl;\n    \n    return 0;\n}',
  hint: 'Literal suffixes help avoid overflow and precision issues.'
},
{
  id: 'cpp_variables_30',
  topicId: 'cpp_variables',
  question: 'Use type aliases (typedef and using) for complex types.',
  mathSolution: 'Type aliases create alternative names for types.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\n// typedef (C++98)\ntypedef unsigned long ulong;\ntypedef vector<int> IntVector;\ntypedef void (*FunctionPtr)(int);\n\n// using (C++11, more flexible)\nusing ULong = unsigned long;\nusing IntVec = vector<int>;\nusing FuncPtr = void(*)(int);\n\n// Template alias\nusing StringVec = vector<string>;\n\ntemplate<typename T>\nusing Vec = vector<T>;\n\nint main() {\n    ulong x = 100;\n    IntVector numbers = {1, 2, 3, 4, 5};\n    StringVec names = {"Alice", "Bob", "Charlie"};\n    \n    Vec<double> doubles = {1.1, 2.2, 3.3};\n    \n    cout << "x: " << x << endl;\n    cout << "Numbers size: " << numbers.size() << endl;\n    cout << "Names: ";\n    for (const auto& name : names) {\n        cout << name << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'using is more readable than typedef, especially for function pointers.'
},
{
  id: 'cpp_variables_31',
  topicId: 'cpp_variables',
  question: 'Initialize variable with different constructors (direct vs copy).',
  mathSolution: 'Different initialization syntaxes: direct, copy, uniform.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass MyClass {\npublic:\n    int value;\n    MyClass(int v) : value(v) {}\n};\n\nint main() {\n    // Copy initialization\n    int a = 10;\n    string s1 = "Hello";\n    \n    // Direct initialization\n    int b(20);\n    string s2("World");\n    \n    // Uniform initialization (C++11)\n    int c{30};\n    string s3{"C++"};\n    int arr[]{1, 2, 3};\n    \n    // Different for classes\n    MyClass obj1 = MyClass(5);   // Copy initialization\n    MyClass obj2(5);              // Direct initialization\n    MyClass obj3{5};              // Uniform initialization\n    \n    cout << "a,b,c: " << a << ", " << b << ", " << c << endl;\n    cout << "s1,s2,s3: " << s1 << ", " << s2 << ", " << s3 << endl;\n    \n    return 0;\n}',
  hint: 'Uniform initialization {} is recommended for consistency and safety.'
},
{
  id: 'cpp_variables_32',
  topicId: 'cpp_variables',
  question: 'Initialize variables with zero using value initialization.',
  mathSolution: 'Use {} or () for zero-initialization.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a{};      // Zero-initialized: 0\n    double b{};   // Zero-initialized: 0.0\n    bool c{};     // Zero-initialized: false\n    char d{};     // Zero-initialized: \'\\0\'\n    int arr[5]{}; // All elements zero-initialized\n    \n    // With parentheses\n    int e();  // Warning: function declaration, not variable\n    int f = int();  // Value-initialized to 0\n    \n    cout << "a: " << a << endl;\n    cout << "b: " << b << endl;\n    cout << "c: " << c << endl;\n    cout << "d: " << (d ? "not null" : "null") << endl;\n    cout << "arr[0]: " << arr[0] << endl;\n    \n    return 0;\n}',
  hint: 'Value initialization {} sets primitive types to 0/false/nullptr.'
},
{
  id: 'cpp_variables_33',
  topicId: 'cpp_variables',
  question: 'Use thread_local for thread-local storage (C++11).',
  mathSolution: 'thread_local gives each thread its own copy of variable.',
  codeSolution: '#include <iostream>\n#include <thread>\nusing namespace std;\n\nthread_local int threadId = 0;\n\nvoid worker(int id) {\n    threadId = id;\n    cout << "Thread " << id << ", threadId = " << threadId << endl;\n    threadId++;\n    cout << "Thread " << id << ", after increment: " << threadId << endl;\n}\n\nint main() {\n    thread t1(worker, 1);\n    thread t2(worker, 2);\n    thread t3(worker, 3);\n    \n    t1.join();\n    t2.join();\n    t3.join();\n    \n    return 0;\n}',
  hint: 'thread_local variables have separate instances for each thread.'
},
{
  id: 'cpp_variables_34',
  topicId: 'cpp_variables',
  question: 'Understand integer overflow behavior.',
  mathSolution: 'Signed integer overflow is undefined behavior.',
  codeSolution: '#include <iostream>\n#include <climits>\nusing namespace std;\n\nint main() {\n    // Signed overflow - undefined behavior (avoid)\n    int maxInt = INT_MAX;\n    cout << "INT_MAX: " << maxInt << endl;\n    // maxInt++ would be UB\n    \n    // Unsigned overflow - wraps around (defined)\n    unsigned int maxUnsigned = UINT_MAX;\n    cout << "UINT_MAX: " << maxUnsigned << endl;\n    maxUnsigned++;\n    cout << "After increment: " << maxUnsigned << endl;  // Wraps to 0\n    \n    // Check before operation\n    int a = INT_MAX - 5;\n    int b = 10;\n    if (a > INT_MAX - b) {\n        cout << "Would overflow!" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Unsigned overflow wraps around; signed overflow is undefined behavior.'
},
{
  id: 'cpp_variables_35',
  topicId: 'cpp_variables',
  question: 'Understand floating-point precision issues.',
  mathSolution: 'Floating-point numbers cannot represent all decimals exactly.',
  codeSolution: '#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    cout << setprecision(20);\n    \n    double a = 0.1;\n    double b = 0.2;\n    double c = a + b;\n    \n    cout << "0.1 = " << a << endl;\n    cout << "0.2 = " << b << endl;\n    cout << "0.1 + 0.2 = " << c << endl;\n    \n    if (c == 0.3) {\n        cout << "Equal" << endl;\n    } else {\n        cout << "Not equal due to precision" << endl;\n    }\n    \n    // Comparison with tolerance\n    double epsilon = 1e-10;\n    if (abs(c - 0.3) < epsilon) {\n        cout << "Equal within tolerance" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Never compare floating-point numbers directly; use tolerance.'
},
{
  id: 'cpp_variables_36',
  topicId: 'cpp_variables',
  question: 'Use wchar_t for wide characters (Unicode).',
  mathSolution: 'wchar_t stores wide characters, useful for Unicode.',
  codeSolution: '#include <iostream>\n#include <locale>\nusing namespace std;\n\nint main() {\n    wchar_t wchar = L\'A\';\n    wchar_t unicode = L\'\\u03A9\';  // Greek Omega\n    const wchar_t* wstr = L"Hello World";\n    \n    wcout.imbue(locale(""));  // Enable Unicode output\n    \n    wcout << L"wchar_t character: " << wchar << endl;\n    wcout << L"Unicode char: " << unicode << endl;\n    wcout << L"Wide string: " << wstr << endl;\n    \n    // Size\n    cout << "Size of wchar_t: " << sizeof(wchar_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'wchar_t size is platform-dependent (2 bytes on Windows, 4 on Linux).'
},
{
  id: 'cpp_variables_37',
  topicId: 'cpp_variables',
  question: 'Use char16_t and char32_t for Unicode (C++11).',
  mathSolution: 'char16_t (UTF-16) and char32_t (UTF-32) for Unicode.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    char16_t u16 = u\'A\';\n    char32_t u32 = U\'\\u03A9\';  // Omega\n    \n    const char16_t* u16str = u"Hello UTF-16";\n    const char32_t* u32str = U"Hello UTF-32";\n    \n    cout << "Size of char16_t: " << sizeof(char16_t) << " bytes" << endl;\n    cout << "Size of char32_t: " << sizeof(char32_t) << " bytes" << endl;\n    \n    // Conversion to string (platform-dependent)\n    string utf8 = u8"UTF-8 string";\n    cout << "UTF-8: " << utf8 << endl;\n    \n    return 0;\n}',
  hint: 'Use fixed-width Unicode types for portable internationalization.'
},
{
  id: 'cpp_variables_38',
  topicId: 'cpp_variables',
  question: 'Create and use variable template (C++14).',
  mathSolution: 'Variable templates allow templated variables.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\ntemplate<typename T>\nconstexpr T pi = T(3.1415926535897932385);\n\ntemplate<typename T>\nT square(T x) {\n    return x * x;\n}\n\nint main() {\n    // Variable template instantiation\n    double piDouble = pi<double>;\n    float piFloat = pi<float>;\n    int piInt = pi<int>;  // Truncated\n    \n    cout.precision(15);\n    cout << "pi<double>: " << piDouble << endl;\n    cout << "pi<float>: " << piFloat << endl;\n    cout << "pi<int>: " << piInt << endl;\n    \n    // Using with expressions\n    auto area = pi<double> * square(5.0);\n    cout << "Area: " << area << endl;\n    \n    return 0;\n}',
  hint: 'Variable templates simplify generic programming with constants.'
},
{
  id: 'cpp_variables_39',
  topicId: 'cpp_variables',
  question: 'Use [[maybe_unused]] attribute to suppress warnings.',
  mathSolution: '[[maybe_unused]] indicates variable may be unused intentionally.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    [[maybe_unused]] int debugCode = 42;  // Suppresses warning\n    \n    // In debug builds, the variable is used\n    #ifdef DEBUG\n        cout << "Debug code: " << debugCode << endl;\n    #endif\n    \n    [[maybe_unused]] auto result = []() {\n        return 100;\n    };\n    \n    // Can be used in conditional compilation\n    #ifdef ENABLE_FEATURE\n        int featureEnabled = 1;\n        cout << "Feature enabled" << endl;\n    #endif\n    \n    return 0;\n}',
  hint: '[[maybe_unused]] silences compiler warnings about unused variables.'
},
{
  id: 'cpp_variables_40',
  topicId: 'cpp_variables',
  question: 'Declare variable with [[nodiscard]] attribute (C++17).',
  mathSolution: '[[nodiscard]] warns if return value is ignored.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n[[nodiscard]] int getValue() {\n    return 42;\n}\n\nclass Resource {\npublic:\n    [[nodiscard]] bool isAllocated() const {\n        return true;\n    }\n};\n\n// For enum (C++17)\nenum class [[nodiscard]] ErrorCode {\n    Success,\n    Failure\n};\n\nErrorCode doSomething() {\n    return ErrorCode::Success;\n}\n\nint main() {\n    int val = getValue();  // OK: value used\n    cout << "Value: " << val << endl;\n    \n    // getValue();  // Warning: ignoring return value\n    \n    Resource res;\n    bool allocated = res.isAllocated();  // OK\n    \n    // res.isAllocated();  // Warning: ignoring return value\n    \n    auto result = doSomething();  // OK\n    // doSomething();  // Warning: ignoring return value\n    \n    return 0;\n}',
  hint: '[[nodiscard]] prevents accidental loss of important return values.'
},
//datatype
{
  id: 'cpp_datatypes_1',
  topicId: 'cpp_datatypes',
  question: 'Declare and use int data type for whole numbers.',
  mathSolution: 'int stores integer values (positive, negative, or zero).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 25;\n    int temperature = -10;\n    int count = 1000;\n    \n    cout << "Age: " << age << endl;\n    cout << "Temperature: " << temperature << endl;\n    cout << "Count: " << count << endl;\n    return 0;\n}',
  hint: 'int typically uses 4 bytes (range: -2,147,483,648 to 2,147,483,647).'
},
{
  id: 'cpp_datatypes_2',
  topicId: 'cpp_datatypes',
  question: 'Use short int for smaller integer range.',
  mathSolution: 'short uses less memory but has smaller range.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    short smallNumber = 32767;\n    short negativeNumber = -32768;\n    \n    cout << "Small number: " << smallNumber << endl;\n    cout << "Negative number: " << negativeNumber << endl;\n    cout << "Size of short: " << sizeof(short) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'short is 2 bytes, range: -32,768 to 32,767.'
},
{
  id: 'cpp_datatypes_3',
  topicId: 'cpp_datatypes',
  question: 'Use long int for larger integer values.',
  mathSolution: 'long provides extended range for integers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    long population = 7800000000L;\n    long largeNumber = 2147483647L;\n    \n    cout << "World population: " << population << endl;\n    cout << "Large number: " << largeNumber << endl;\n    cout << "Size of long: " << sizeof(long) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'long is typically 4 or 8 bytes depending on system.'
},
{
  id: 'cpp_datatypes_4',
  topicId: 'cpp_datatypes',
  question: 'Use long long int for very large integers.',
  mathSolution: 'long long provides maximum integer range.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    long long bigNumber = 9223372036854775807LL;\n    long long distanceToGalaxy = 9460730472580800LL;\n    \n    cout << "Max long long: " << bigNumber << endl;\n    cout << "Distance in km: " << distanceToGalaxy << endl;\n    cout << "Size of long long: " << sizeof(long long) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'long long is 8 bytes, range: -9.2e18 to 9.2e18.'
},
{
  id: 'cpp_datatypes_5',
  topicId: 'cpp_datatypes',
  question: 'Use unsigned int for non-negative integers.',
  mathSolution: 'unsigned types store only zero or positive values.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    unsigned int positive = 4294967295U;\n    unsigned int count = 100;\n    \n    cout << "Maximum unsigned: " << positive << endl;\n    cout << "Count: " << count << endl;\n    cout << "Size of unsigned int: " << sizeof(unsigned int) << " bytes" << endl;\n    \n    // unsigned int negative = -5;  // Wraps around to large positive\n    return 0;\n}',
  hint: 'Unsigned types have double the positive range of signed types.'
},
{
  id: 'cpp_datatypes_6',
  topicId: 'cpp_datatypes',
  question: 'Use float for single-precision floating-point numbers.',
  mathSolution: 'float stores decimal numbers with 6-7 decimal digits precision.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    float price = 19.99f;\n    float pi = 3.14159f;\n    float scientific = 1.23e-4f;\n    \n    cout << fixed << setprecision(2);\n    cout << "Price: $" << price << endl;\n    cout << "PI: " << pi << endl;\n    cout << "Scientific: " << scientific << endl;\n    cout << "Size of float: " << sizeof(float) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'float has about 6-7 decimal digits of precision, uses 4 bytes.'
},
{
  id: 'cpp_datatypes_7',
  topicId: 'cpp_datatypes',
  question: 'Use double for double-precision floating-point numbers.',
  mathSolution: 'double provides about 15 decimal digits precision.',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double pi = 3.141592653589793;\n    double avogadro = 6.02214076e23;\n    double small = 1.23456789012345e-10;\n    \n    cout << setprecision(15);\n    cout << "PI: " << pi << endl;\n    cout << "Avogadro\'s number: " << avogadro << endl;\n    cout << "Small number: " << small << endl;\n    cout << "Size of double: " << sizeof(double) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'double has about 15-16 decimal digits precision, uses 8 bytes.'
},
{
  id: 'cpp_datatypes_8',
  topicId: 'cpp_datatypes',
  question: 'Use long double for extended precision floating-point.',
  mathSolution: 'long double provides highest precision (80 bits on some systems).',
  codeSolution: '#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    long double pi = 3.14159265358979323846L;\n    long double precise = 1.234567890123456789L;\n    \n    cout << setprecision(20);\n    cout << "Long double PI: " << pi << endl;\n    cout << "Precise value: " << precise << endl;\n    cout << "Size of long double: " << sizeof(long double) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'long double precision varies (80 bits on x86, 16 bytes).'
},
{
  id: 'cpp_datatypes_9',
  topicId: 'cpp_datatypes',
  question: 'Use char for single character storage.',
  mathSolution: 'char stores ASCII characters (1 byte).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char letter = \'A\';\n    char digit = \'9\';\n    char symbol = \'$\';\n    char newline = \'\\n\';\n    \n    cout << "Letter: " << letter << endl;\n    cout << "Digit: " << digit << endl;\n    cout << "Symbol: " << symbol << endl;\n    cout << "ASCII value of A: " << static_cast<int>(letter) << endl;\n    cout << "Size of char: " << sizeof(char) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'char is 1 byte, stores values from -128 to 127 or 0 to 255.'
},
{
  id: 'cpp_datatypes_10',
  topicId: 'cpp_datatypes',
  question: 'Use signed char and unsigned char variants.',
  mathSolution: 'signed char can store negative values, unsigned char only positive.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    signed char sChar = -100;\n    unsigned char uChar = 200;\n    \n    cout << "Signed char: " << static_cast<int>(sChar) << endl;\n    cout << "Unsigned char: " << static_cast<int>(uChar) << endl;\n    cout << "Size of signed char: " << sizeof(signed char) << " bytes" << endl;\n    cout << "Size of unsigned char: " << sizeof(unsigned char) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'unsigned char range: 0-255, signed char range: -128 to 127.'
},
{
  id: 'cpp_datatypes_11',
  topicId: 'cpp_datatypes',
  question: 'Use bool data type for boolean values.',
  mathSolution: 'bool stores true or false (1 byte).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool isReady = true;\n    bool isComplete = false;\n    \n    cout << "isReady: " << isReady << endl;        // prints 1\n    cout << "isComplete: " << isComplete << endl;  // prints 0\n    cout << boolalpha;  // Format flag for true/false\n    cout << "isReady: " << isReady << endl;        // prints true\n    cout << "isComplete: " << isComplete << endl;  // prints false\n    cout << "Size of bool: " << sizeof(bool) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'bool is 1 byte and can be true or false (1 or 0).'
},
{
  id: 'cpp_datatypes_12',
  topicId: 'cpp_datatypes',
  question: 'Use wchar_t for wide characters (Unicode).',
  mathSolution: 'wchar_t stores wide characters for international text.',
  codeSolution: '#include <iostream>\n#include <locale>\nusing namespace std;\n\nint main() {\n    wchar_t wc = L\'A\';\n    wchar_t unicode = L\'\\u03A9\';  // Greek Omega\n    const wchar_t* wstr = L"Hello World";\n    \n    wcout.imbue(locale(""));\n    wcout << L"Wide char: " << wc << endl;\n    wcout << L"Unicode char: " << unicode << endl;\n    wcout << L"Wide string: " << wstr << endl;\n    cout << "Size of wchar_t: " << sizeof(wchar_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'wchar_t size is platform-dependent (2 bytes on Windows, 4 on Linux).'
},
{
  id: 'cpp_datatypes_13',
  topicId: 'cpp_datatypes',
  question: 'Use char16_t and char32_t for fixed-width Unicode.',
  mathSolution: 'char16_t (UTF-16) and char32_t (UTF-32) for Unicode.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    char16_t u16char = u\'A\';\n    char32_t u32char = U\'\\u03A9\';\n    \n    const char16_t* u16str = u"UTF-16 string";\n    const char32_t* u32str = U"UTF-32 string";\n    \n    cout << "Size of char16_t: " << sizeof(char16_t) << " bytes" << endl;\n    cout << "Size of char32_t: " << sizeof(char32_t) << " bytes" << endl;\n    cout << "char16_t value: " << static_cast<int>(u16char) << endl;\n    cout << "char32_t value: " << static_cast<int>(u32char) << endl;\n    \n    return 0;\n}',
  hint: 'char16_t is 2 bytes (UTF-16), char32_t is 4 bytes (UTF-32).'
},
{
  id: 'cpp_datatypes_14',
  topicId: 'cpp_datatypes',
  question: 'Use size_t for sizes and indices (unsigned).',
  mathSolution: 'size_t is platform-independent unsigned integer for sizes.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    size_t arrSize = sizeof(arr) / sizeof(arr[0]);\n    \n    cout << "Array size: " << arrSize << endl;\n    \n    for (size_t i = 0; i < arrSize; i++) {\n        cout << "arr[" << i << "] = " << arr[i] << endl;\n    }\n    \n    vector<int> vec = {1, 2, 3, 4, 5};\n    size_t vecSize = vec.size();\n    cout << "Vector size: " << vecSize << endl;\n    cout << "Size of size_t: " << sizeof(size_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'size_t is unsigned and large enough to represent any object size.'
},
{
  id: 'cpp_datatypes_15',
  topicId: 'cpp_datatypes',
  question: 'Use ptrdiff_t for pointer difference.',
  mathSolution: 'ptrdiff_t stores signed difference between pointers.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int* start = &arr[0];\n    int* end = &arr[4];\n    \n    ptrdiff_t diff = end - start;\n    \n    cout << "Pointer difference: " << diff << endl;\n    cout << "Size of ptrdiff_t: " << sizeof(ptrdiff_t) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'ptrdiff_t can be negative (signed) unlike size_t.'
},
{
  id: 'cpp_datatypes_16',
  topicId: 'cpp_datatypes',
  question: 'Use nullptr_t for null pointer type.',
  mathSolution: 'nullptr_t is the type of nullptr literal.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nint main() {\n    nullptr_t null_ptr = nullptr;\n    int* ptr = nullptr;\n    \n    if (ptr == null_ptr) {\n        cout << "ptr is null" << endl;\n    }\n    \n    cout << "Size of nullptr_t: " << sizeof(nullptr_t) << " bytes" << endl;\n    \n    // Overload resolution with nullptr\n    void func(int*) { cout << "Pointer overload" << endl; }\n    void func(nullptr_t) { cout << "nullptr_t overload" << endl; }\n    \n    func(nullptr);  // Calls nullptr_t overload\n    \n    return 0;\n}',
  hint: 'nullptr_t is a distinct type, not an integer type.'
},
{
  id: 'cpp_datatypes_17',
  topicId: 'cpp_datatypes',
  question: 'Create and use typedef aliases for data types.',
  mathSolution: 'typedef creates alternative names for existing types.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntypedef unsigned long ulong;\ntypedef vector<int> IntVector;\ntypedef int (*FunctionPtr)(int, int);\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    ulong large = 1000000UL;\n    IntVector numbers = {1, 2, 3, 4, 5};\n    FunctionPtr ptr = &add;\n    \n    cout << "Large number: " << large << endl;\n    cout << "Vector size: " << numbers.size() << endl;\n    cout << "Function result: " << ptr(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'typedef improves code readability and portability.'
},
{
  id: 'cpp_datatypes_18',
  topicId: 'cpp_datatypes',
  question: 'Use using keyword for type aliases (modern C++).',
  mathSolution: 'using provides clearer syntax especially for templates.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <map>\nusing namespace std;\n\nusing ulong = unsigned long;\nusing IntVec = vector<int>;\nusing StringMap = map<string, int>;\n\ntemplate<typename T>\nusing Vec = vector<T>;\n\nint main() {\n    ulong count = 1000UL;\n    IntVec numbers = {1, 2, 3, 4, 5};\n    StringMap ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    Vec<double> doubles = {1.1, 2.2, 3.3};\n    \n    cout << "Count: " << count << endl;\n    cout << "Numbers size: " << numbers.size() << endl;\n    cout << "Ages size: " << ages.size() << endl;\n    cout << "Doubles size: " << doubles.size() << endl;\n    \n    return 0;\n}',
  hint: 'using is more readable than typedef, especially for function pointers.'
},
{
  id: 'cpp_datatypes_19',
  topicId: 'cpp_datatypes',
  question: 'Use enum for named integer constants.',
  mathSolution: 'enum defines a set of named integral constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum Color { RED, GREEN, BLUE };\nenum Status { IDLE = 0, ACTIVE = 1, STOPPED = 2 };\nenum Days { MON = 1, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    Color myColor = GREEN;\n    Status current = ACTIVE;\n    Days today = WED;\n    \n    cout << "Color value: " << myColor << endl;     // 1\n    cout << "Status value: " << current << endl;    // 1\n    cout << "Day value: " << today << endl;         // 3\n    \n    if (myColor == GREEN) {\n        cout << "Color is green" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'enum values start at 0 by default and increment by 1.'
},
{
  id: 'cpp_datatypes_20',
  topicId: 'cpp_datatypes',
  question: 'Use enum class (scoped enums) for type safety (C++11).',
  mathSolution: 'enum class provides strong type safety and scoping.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum class Color { RED, GREEN, BLUE };\nenum class TrafficLight { RED, YELLOW, GREEN };\nenum class Status : char { OK = \'O\', ERROR = \'E\', WAITING = \'W\' };\n\nint main() {\n    Color myColor = Color::GREEN;\n    TrafficLight light = TrafficLight::GREEN;\n    Status status = Status::OK;\n    \n    // Cannot compare different enum classes\n    // if (myColor == light)  // Error: different types\n    \n    if (myColor == Color::GREEN) {\n        cout << "Color is green" << endl;\n    }\n    \n    cout << "Status value: " << static_cast<char>(status) << endl;\n    \n    return 0;\n}',
  hint: 'enum class prevents naming conflicts and implicit conversions.'
},
{
  id: 'cpp_datatypes_21',
  topicId: 'cpp_datatypes',
  question: 'Create enumerations with explicit values.',
  mathSolution: 'Assign specific values to enum constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum HttpStatus {\n    OK = 200,\n    CREATED = 201,\n    ACCEPTED = 202,\n    BAD_REQUEST = 400,\n    UNAUTHORIZED = 401,\n    FORBIDDEN = 403,\n    NOT_FOUND = 404,\n    INTERNAL_ERROR = 500\n};\n\nenum BitFlags {\n    FLAG_READ = 1 << 0,    // 1\n    FLAG_WRITE = 1 << 1,   // 2\n    FLAG_EXECUTE = 1 << 2, // 4\n    FLAG_DELETE = 1 << 3    // 8\n};\n\nint main() {\n    HttpStatus error = NOT_FOUND;\n    int flags = FLAG_READ | FLAG_WRITE;\n    \n    cout << "Error code: " << error << endl;\n    cout << "Flags: " << flags << endl;\n    \n    if (flags & FLAG_READ) {\n        cout << "Read permission granted" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Enum values can be any integer constant expression.'
},
{
  id: 'cpp_datatypes_22',
  topicId: 'cpp_datatypes',
  question: 'Use std::string for string manipulation.',
  mathSolution: 'string is a dynamic string class from STL.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string str1 = "Hello";\n    string str2 = "World";\n    string str3 = str1 + " " + str2;\n    \n    cout << "str1: " << str1 << endl;\n    cout << "str2: " << str2 << endl;\n    cout << "Concatenated: " << str3 << endl;\n    cout << "Length: " << str3.length() << endl;\n    cout << "First char: " << str3[0] << endl;\n    cout << "Substring: " << str3.substr(0, 5) << endl;\n    \n    if (str1 == "Hello") {\n        cout << "Strings match" << endl;\n    }\n    \n    return 0;\n}',
  hint: '#include <string> is required for std::string type.'
},
{
  id: 'cpp_datatypes_23',
  topicId: 'cpp_datatypes',
  question: 'Use std::vector for dynamic arrays.',
  mathSolution: 'vector is a dynamic array that grows automatically.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> numbers;\n    \n    numbers.push_back(10);\n    numbers.push_back(20);\n    numbers.push_back(30);\n    \n    cout << "Size: " << numbers.size() << endl;\n    cout << "Capacity: " << numbers.capacity() << endl;\n    cout << "Elements: ";\n    for (int n : numbers) {\n        cout << n << " ";\n    }\n    cout << endl;\n    \n    numbers.pop_back();\n    cout << "After pop, size: " << numbers.size() << endl;\n    \n    return 0;\n}',
  hint: 'vector provides O(1) amortized push_back and random access.'
},
{
  id: 'cpp_datatypes_24',
  topicId: 'cpp_datatypes',
  question: 'Use std::array for fixed-size arrays.',
  mathSolution: 'array is a fixed-size container with STL interface.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\nint main() {\n    array<int, 5> numbers = {10, 20, 30, 40, 50};\n    \n    cout << "Size: " << numbers.size() << endl;\n    cout << "First element: " << numbers.front() << endl;\n    cout << "Last element: " << numbers.back() << endl;\n    \n    for (size_t i = 0; i < numbers.size(); i++) {\n        cout << numbers[i] << " ";\n    }\n    cout << endl;\n    \n    // bounds checking\n    try {\n        cout << numbers.at(10) << endl;\n    } catch (const out_of_range& e) {\n        cout << "Out of range: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'array has fixed size determined at compile time.'
},
{
  id: 'cpp_datatypes_25',
  topicId: 'cpp_datatypes',
  question: 'Use std::pair for storing two values.',
  mathSolution: 'pair holds two heterogeneous values.',
  codeSolution: '#include <iostream>\n#include <utility>\n#include <string>\nusing namespace std;\n\nint main() {\n    pair<int, string> p1(1, "Apple");\n    pair<int, string> p2 = {2, "Banana"};\n    auto p3 = make_pair(3, "Cherry");\n    \n    cout << "p1: " << p1.first << ", " << p1.second << endl;\n    cout << "p2: " << p2.first << ", " << p2.second << endl;\n    cout << "p3: " << p3.first << ", " << p3.second << endl;\n    \n    // Comparison\n    if (p1 < p2) {\n        cout << "p1 comes before p2" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'pair is useful for returning two values from a function.'
},
{
  id: 'cpp_datatypes_26',
  topicId: 'cpp_datatypes',
  question: 'Use std::tuple for storing multiple values.',
  mathSolution: 'tuple can hold any number of heterogeneous values.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <string>\nusing namespace std;\n\nint main() {\n    tuple<int, double, string, char> t1(42, 3.14, "Hello", \'X\');\n    auto t2 = make_tuple(100, 9.81, "Gravity", \'G\');\n    \n    cout << "Tuple size: " << tuple_size<decltype(t1)>::value << endl;\n    cout << "Element 0: " << get<0>(t1) << endl;\n    cout << "Element 1: " << get<1>(t1) << endl;\n    cout << "Element 2: " << get<2>(t1) << endl;\n    cout << "Element 3: " << get<3>(t1) << endl;\n    \n    // Unpack with structured binding (C++17)\n    auto [num, pi, msg, ch] = t2;\n    cout << "Unpacked: " << num << ", " << pi << ", " << msg << ", " << ch << endl;\n    \n    return 0;\n}',
  hint: 'tuple is a fixed-size collection of heterogeneous values.'
},
{
  id: 'cpp_datatypes_27',
  topicId: 'cpp_datatypes',
  question: 'Use std::optional for values that may not exist (C++17).',
  mathSolution: 'optional can hold a value or represent "no value".',
  codeSolution: '#include <iostream>\n#include <optional>\n#include <string>\nusing namespace std;\n\noptional<int> findUser(const string& name) {\n    if (name == "John") return 42;\n    if (name == "Alice") return 100;\n    return nullopt;\n}\n\nint main() {\n    auto user1 = findUser("John");\n    auto user2 = findUser("Unknown");\n    \n    if (user1.has_value()) {\n        cout << "User found: " << *user1 << endl;\n    }\n    \n    cout << "Value or default: " << user2.value_or(-1) << endl;\n    \n    // Optional with type conversion\n    optional<int> opt1 = 5;\n    optional<int> opt2 = nullopt;\n    \n    cout << "opt1: " << opt1.value_or(0) << endl;\n    cout << "opt2: " << opt2.value_or(999) << endl;\n    \n    return 0;\n}',
  hint: 'optional avoids sentinel values and expresses intent clearly.'
},
{
  id: 'cpp_datatypes_28',
  topicId: 'cpp_datatypes',
  question: 'Use std::variant for type-safe union (C++17).',
  mathSolution: 'variant holds one of several possible types.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\nint main() {\n    variant<int, double, string> data;\n    \n    data = 42;\n    cout << "Holds int: " << get<int>(data) << endl;\n    \n    data = 3.14159;\n    cout << "Holds double: " << get<double>(data) << endl;\n    \n    data = "Hello C++";\n    cout << "Holds string: " << get<string>(data) << endl;\n    \n    // Type checking\n    if (holds_alternative<string>(data)) {\n        cout << "Currently holds a string" << endl;\n    }\n    \n    // Visitor pattern\n    auto visitor = [](auto&& arg) {\n        cout << "Visitor: " << arg << endl;\n    };\n    visit(visitor, data);\n    \n    return 0;\n}',
  hint: 'variant is type-safe and prevents type-related bugs.'
},
{
  id: 'cpp_datatypes_29',
  topicId: 'cpp_datatypes',
  question: 'Use std::any for storing any type (C++17).',
  mathSolution: 'any can hold any copyable type.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\nusing namespace std;\n\nint main() {\n    any value;\n    \n    value = 42;\n    cout << "Integer: " << any_cast<int>(value) << endl;\n    \n    value = 3.14159;\n    cout << "Double: " << any_cast<double>(value) << endl;\n    \n    value = string("Hello");\n    cout << "String: " << any_cast<string>(value) << endl;\n    \n    // Type checking\n    if (value.type() == typeid(string)) {\n        cout << "Contains string type" << endl;\n    }\n    \n    // Safe access\n    if (auto ptr = any_cast<string>(&value)) {\n        cout << "Safe access: " << *ptr << endl;\n    }\n    \n    value.reset();\n    cout << "Has value: " << value.has_value() << endl;\n    \n    return 0;\n}',
  hint: 'any is a type-safe container for single values of any type.'
},
{
  id: 'cpp_datatypes_30',
  topicId: 'cpp_datatypes',
  question: 'Use std::byte for raw memory operations (C++17).',
  mathSolution: 'byte represents a byte of memory, not character.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nint main() {\n    byte b1{0x0F};  // Hexadecimal initialization\n    byte b2{0b00001111};  // Binary initialization\n    \n    byte b3 = b1 | b2;    // Bitwise OR\n    byte b4 = b1 & b2;    // Bitwise AND\n    byte b5 = b1 ^ b2;    // Bitwise XOR\n    \n    cout << "b1: " << hex << static_cast<int>(b1) << endl;\n    cout << "b2: " << static_cast<int>(b2) << endl;\n    cout << "b3 (OR): " << static_cast<int>(b3) << endl;\n    cout << "b4 (AND): " << static_cast<int>(b4) << endl;\n    \n    // Convert from int\n    byte fromInt = static_cast<byte>(0xAB);\n    int toInt = static_cast<int>(fromInt);\n    \n    return 0;\n}',
  hint: 'byte is preferred over char for raw byte manipulation.'
},
{
  id: 'cpp_datatypes_31',
  topicId: 'cpp_datatypes',
  question: 'Check data type sizes using sizeof operator.',
  mathSolution: 'sizeof returns size in bytes of type or variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "=== Fundamental Types ===" << endl;\n    cout << "sizeof(char): " << sizeof(char) << " bytes" << endl;\n    cout << "sizeof(short): " << sizeof(short) << " bytes" << endl;\n    cout << "sizeof(int): " << sizeof(int) << " bytes" << endl;\n    cout << "sizeof(long): " << sizeof(long) << " bytes" << endl;\n    cout << "sizeof(long long): " << sizeof(long long) << " bytes" << endl;\n    \n    cout << "\\n=== Floating Types ===" << endl;\n    cout << "sizeof(float): " << sizeof(float) << " bytes" << endl;\n    cout << "sizeof(double): " << sizeof(double) << " bytes" << endl;\n    cout << "sizeof(long double): " << sizeof(long double) << " bytes" << endl;\n    \n    cout << "\\n=== Other Types ===" << endl;\n    cout << "sizeof(bool): " << sizeof(bool) << " bytes" << endl;\n    cout << "sizeof(void*): " << sizeof(void*) << " bytes" << endl;\n    \n    return 0;\n}',
  hint: 'sizeof is an operator, not a function, evaluated at compile time.'
},
{
  id: 'cpp_datatypes_32',
  topicId: 'cpp_datatypes',
  question: 'Use typeid to get type information at runtime.',
  mathSolution: 'typeid returns type_info object describing type.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    int x = 42;\n    double y = 3.14;\n    string s = "Hello";\n    \n    cout << "Type of x: " << typeid(x).name() << endl;\n    cout << "Type of y: " << typeid(y).name() << endl;\n    cout << "Type of s: " << typeid(s).name() << endl;\n    \n    // Polymorphic types\n    Base* base = new Derived();\n    cout << "Dynamic type: " << typeid(*base).name() << endl;\n    \n    // Compare types\n    if (typeid(x) == typeid(int)) {\n        cout << "x is int" << endl;\n    }\n    \n    delete base;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI (Runtime Type Information) to be enabled.'
},
{
  id: 'cpp_datatypes_33',
  topicId: 'cpp_datatypes',
  question: 'Use decltype for type deduction at compile time.',
  mathSolution: 'decltype deduces the type of an expression.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nint main() {\n    int a = 10;\n    double b = 3.14;\n    \n    decltype(a) c = a;           // c is int\n    decltype(b) d = b;           // d is double\n    decltype(a + b) e = a + b;   // e is double (promotion)\n    \n    cout << "Type of c: " << typeid(c).name() << endl;\n    cout << "Type of d: " << typeid(d).name() << endl;\n    cout << "Type of e: " << typeid(e).name() << endl;\n    \n    // decltype with parentheses\n    decltype((a)) ref = a;  // reference to int\n    ref = 20;\n    cout << "a modified via reference: " << a << endl;\n    \n    // decltype with function\n    auto add = [](int x, int y) -> decltype(x + y) {\n        return x + y;\n    };\n    \n    cout << "Add result: " << add(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'decltype is useful in generic programming and trailing return types.'
},
{
  id: 'cpp_datatypes_34',
  topicId: 'cpp_datatypes',
  question: 'Check type compatibility with is_same type trait.',
  mathSolution: 'is_same checks if two types are identical at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nint main() {\n    cout << boolalpha;\n    \n    cout << "int and int: " << is_same<int, int>::value << endl;\n    cout << "int and long: " << is_same<int, long>::value << endl;\n    cout << "int and const int: " << is_same<int, const int>::value << endl;\n    \n    // With decltype\n    int x = 10;\n    cout << "x type and int: " << is_same<decltype(x), int>::value << endl;\n    \n    // Removing const\n    cout << "int and const int (with remove_const): "\n         << is_same<int, remove_const<const int>::type>::value << endl;\n    \n    // With auto\n    auto y = 20;\n    cout << "auto y is int: " << is_same<decltype(y), int>::value << endl;\n    \n    return 0;\n}',
  hint: 'Type traits enable compile-time type introspection and optimization.'
},
{
  id: 'cpp_datatypes_35',
  topicId: 'cpp_datatypes',
  question: 'Use std::nullptr_t for null pointer type.',
  mathSolution: 'nullptr_t is the type of the nullptr literal.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nvoid func(int) { cout << "int overload" << endl; }\nvoid func(char*) { cout << "char* overload" << endl; }\nvoid func(nullptr_t) { cout << "nullptr_t overload" << endl; }\n\nint main() {\n    int* ptr = nullptr;\n    nullptr_t null_val = nullptr;\n    \n    cout << "Size of nullptr_t: " << sizeof(nullptr_t) << " bytes" << endl;\n    \n    if (ptr == null_val) {\n        cout << "Pointer is null" << endl;\n    }\n    \n    // Function overload resolution\n    func(0);        // calls int overload\n    func(nullptr);  // calls nullptr_t overload\n    func(NULL);     // may call int overload (ambiguous in C++)\n    \n    return 0;\n}',
  hint: 'nullptr is type-safe and distinguishes null pointer from integer 0.'
},
{
  "id": "cpp_datatypes_36",
  "topicId": "cpp_datatypes",
  "question": "Use auto for automatic type deduction.",
  "mathSolution": "auto deduces type from initializer expression.",
  "codeSolution": "#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    auto i = 42;           // int\n    auto d = 3.14;         // double\n    auto c = 'A';          // char\n    auto s = \"Hello\";      // const char*\n    auto v = vector<int>{1, 2, 3};  // vector<int>\n    \n    // With const and references\n    const auto ci = i;\n    auto& ri = i;\n    auto&& rri = 42;  // forwarding reference\n    \n    // Range-based for loops\n    vector<string> names = {\"Alice\", \"Bob\", \"Charlie\"};\n    for (const auto& name : names) {\n        cout << name << endl;\n    }\n    \n    // Complex types\n    map<string, vector<int>> data;\n    data[\"key\"] = {1, 2, 3};\n    auto it = data.begin();  // iterator type\n    \n    return 0;\n}",
  "hint": "auto makes code more maintainable and reduces verbosity."
},
{
  "id": "cpp_datatypes_37",
  "topicId": "cpp_datatypes",
  "question": "Understand integer promotion and conversion rules.",
  "mathSolution": "Smaller integer types are promoted to int in expressions.",
  "codeSolution": "#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nint main() {\n    char c = 'A';\n    short s = 100;\n    int i = 1000;\n    unsigned int u = 2000;\n    long l = 3000L;\n    \n    // Integer promotion\n    auto result1 = c + s;    // char and short promoted to int\n    cout << \"c + s type: \" << typeid(result1).name() << endl;\n    \n    // Usual arithmetic conversions\n    auto result2 = i + u;    // int converted to unsigned\n    cout << \"i + u type: \" << typeid(result2).name() << endl;\n    \n    auto result3 = i + l;    // int converted to long\n    cout << \"i + l type: \" << typeid(result3).name() << endl;\n    \n    // Mixed signed/unsigned\n    int signedNum = -1;\n    unsigned int unsignedNum = 1;\n    auto result4 = signedNum + unsignedNum;\n    cout << \"Signed + unsigned: \" << result4 << endl;  // Large number\n    \n    return 0;\n}",
  "hint": "Understand implicit conversions to avoid unexpected results."
},
{
  id: 'cpp_datatypes_38',
  topicId: 'cpp_datatypes',
  question: 'Create and use fixed-width integer types (C++11).',
  mathSolution: 'Fixed-width types guarantee exact size across platforms.',
  codeSolution: '#include <iostream>\n#include <cstdint>\nusing namespace std;\n\nint main() {\n    int8_t i8 = -128;\n    uint8_t u8 = 255;\n    int16_t i16 = -32768;\n    uint16_t u16 = 65535;\n    int32_t i32 = -2147483648LL;\n    uint32_t u32 = 4294967295U;\n    int64_t i64 = -9223372036854775807LL - 1;\n    uint64_t u64 = 18446744073709551615ULL;\n    \n    cout << \"int8_t: \" << static_cast<int>(i8) << endl;\n    cout << \"uint8_t: \" << static_cast<int>(u8) << endl;\n    cout << \"int16_t: \" << i16 << endl;\n    cout << \"uint16_t: \" << u16 << endl;\n    cout << \"int32_t: \" << i32 << endl;\n    cout << \"uint32_t: \" << u32 << endl;\n    cout << \"int64_t: \" << i64 << endl;\n    cout << \"uint64_t: \" << u64 << endl;\n    \n    cout << \"Size of int32_t: \" << sizeof(int32_t) << \" bytes\" << endl;\n    \n    return 0;\n}',
  hint: 'Fixed-width types ensure consistent behavior across platforms.'
},
{
  id: 'cpp_datatypes_39',
  topicId: 'cpp_datatypes',
  question: 'Use std::initializer_list for uniform initialization.',
  mathSolution: 'initializer_list allows list initialization of containers.',
  codeSolution: '#include <iostream>\n#include <initializer_list>\n#include <vector>\nusing namespace std;\n\nclass MyClass {\npublic:\n    MyClass(initializer_list<int> list) {\n        cout << "Elements: \";\n        for (int val : list) {\n            cout << val << \" \";\n        }\n        cout << endl;\n    }\n};\n\nvoid printNumbers(initializer_list<int> nums) {\n    cout << \"Count: \" << nums.size() << endl;\n    for (int n : nums) {\n        cout << n << \" \";\n    }\n    cout << endl;\n}\n\nint main() {\n    MyClass obj{1, 2, 3, 4, 5};\n    \n    printNumbers({10, 20, 30});\n    \n    vector<int> vec = {1, 2, 3, 4, 5};\n    int arr[]{1, 2, 3, 4, 5};\n    \n    return 0;\n}',
  hint: 'initializer_list enables uniform initialization across types.'
},
{
  id: 'cpp_datatypes_40',
  topicId: 'cpp_datatypes',
  question: 'Understand lvalue and rvalue references.',
  mathSolution: '& is lvalue reference, && is rvalue reference (move semantics).',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid process(const string& s) {\n    cout << "Lvalue reference: \" << s << endl;\n}\n\nvoid process(string&& s) {\n    cout << \"Rvalue reference: \" << s << endl;\n}\n\nint main() {\n    string str = \"Hello\";\n    \n    process(str);           // Lvalue: calls lvalue overload\n    process(\"World\");       // Rvalue: calls rvalue overload\n    process(std::move(str)); // Rvalue: converts lvalue to rvalue\n    \n    // After move, str is in valid but unspecified state\n    cout << \"After move: \" << str << endl;\n    \n    return 0;\n}',
  hint: 'Rvalue references enable move semantics for efficiency.'
},
//operator
{
  id: 'cpp_operators_1',
  topicId: 'cpp_operators',
  question: 'Use arithmetic operators (+, -, *, /, %) for basic calculations.',
  mathSolution: 'Arithmetic operators perform mathematical operations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3;\n    \n    cout << "Addition: " << a + b << endl;       // 13\n    cout << "Subtraction: " << a - b << endl;    // 7\n    cout << "Multiplication: " << a * b << endl; // 30\n    cout << "Division: " << a / b << endl;       // 3 (integer division)\n    cout << "Modulus: " << a % b << endl;        // 1 (remainder)\n    \n    double x = 10.0, y = 3.0;\n    cout << "Double division: " << x / y << endl; // 3.33333\n    \n    return 0;\n}',
  hint: '% operator works only with integers; for float division, use /.'
},
{
  id: 'cpp_operators_2',
  topicId: 'cpp_operators',
  question: 'Use increment (++) and decrement (--) operators.',
  mathSolution: 'Prefix increments before use, postfix increments after use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    \n    // Postfix increment\n    cout << "Postfix x++: " << x++ << endl;  // Prints 5, then x=6\n    cout << "After postfix: " << x << endl;   // 6\n    \n    // Prefix increment\n    int y = 5;\n    cout << "Prefix ++y: " << ++y << endl;    // y=6, prints 6\n    \n    // Decrement\n    int z = 5;\n    cout << "Prefix --z: " << --z << endl;    // 4\n    cout << "Postfix z--: " << z-- << endl;    // Prints 4, then z=3\n    cout << "Final z: " << z << endl;          // 3\n    \n    return 0;\n}',
  hint: 'Prefix (++x) changes then uses; postfix (x++) uses then changes.'
},
{
  id: 'cpp_operators_3',
  topicId: 'cpp_operators',
  question: 'Use assignment operators (=, +=, -=, *=, /=, %=).',
  mathSolution: 'Compound assignment operators combine operation with assignment.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    \n    x += 5;   // x = x + 5\n    cout << "x += 5: " << x << endl;   // 15\n    \n    x -= 3;   // x = x - 3\n    cout << "x -= 3: " << x << endl;   // 12\n    \n    x *= 2;   // x = x * 2\n    cout << "x *= 2: " << x << endl;   // 24\n    \n    x /= 4;   // x = x / 4\n    cout << "x /= 4: " << x << endl;   // 6\n    \n    x %= 5;   // x = x % 5\n    cout << "x %= 5: " << x << endl;   // 1\n    \n    return 0;\n}',
  hint: 'Compound operators are more concise and can be more efficient.'
},
{
  id: 'cpp_operators_4',
  topicId: 'cpp_operators',
  question: 'Use relational operators (==, !=, <, >, <=, >=).',
  mathSolution: 'Relational operators compare values and return boolean.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    \n    cout << boolalpha;  // Print true/false instead of 1/0\n    \n    cout << "a == b: " << (a == b) << endl;  // false\n    cout << "a != b: " << (a != b) << endl;  // true\n    cout << "a < b: " << (a < b) << endl;    // true\n    cout << "a > b: " << (a > b) << endl;    // false\n    cout << "a <= b: " << (a <= b) << endl;  // true\n    cout << "a >= b: " << (a >= b) << endl;  // false\n    \n    return 0;\n}',
  hint: 'Relational operators return bool values (true/false).'
},
{
  id: 'cpp_operators_5',
  topicId: 'cpp_operators',
  question: 'Use logical operators (&&, ||, !).',
  mathSolution: 'Logical operators combine boolean expressions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    bool a = true, b = false;\n    \n    cout << boolalpha;\n    \n    cout << "a && b: " << (a && b) << endl;  // false (AND)\n    cout << "a || b: " << (a || b) << endl;  // true  (OR)\n    cout << "!a: " << (!a) << endl;          // false (NOT)\n    cout << "!b: " << (!b) << endl;          // true\n    \n    int x = 10, y = 20, z = 30;\n    bool result = (x < y) && (y < z);  // true && true = true\n    cout << "(x < y) && (y < z): " << result << endl;\n    \n    return 0;\n}',
  hint: '&& and || short-circuit: evaluation stops when result is determined.'
},
{
  id: 'cpp_operators_6',
  topicId: 'cpp_operators',
  question: 'Use bitwise operators (&, |, ^, ~, <<, >>).',
  mathSolution: 'Bitwise operators manipulate individual bits in integers.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\nint main() {\n    int a = 0b1010;  // 10 in decimal\n    int b = 0b1100;  // 12 in decimal\n    \n    cout << "a = " << bitset<4>(a) << " (\" << a << \")\" << endl;\n    cout << \"b = \" << bitset<4>(b) << \" (\" << b << \")\" << endl;\n    \n    cout << \"a & b (AND): \" << bitset<4>(a & b) << \" (\" << (a & b) << \")\" << endl;\n    cout << \"a | b (OR): \" << bitset<4>(a | b) << \" (\" << (a | b) << \")\" << endl;\n    cout << \"a ^ b (XOR): \" << bitset<4>(a ^ b) << \" (\" << (a ^ b) << \")\" << endl;\n    cout << \"~a (NOT): \" << bitset<4>(~a & 0xF) << \" (\" << (~a & 0xF) << \")\" << endl;\n    cout << \"a << 1 (left shift): \" << bitset<4>(a << 1) << \" (\" << (a << 1) << \")\" << endl;\n    cout << \"a >> 1 (right shift): \" << bitset<4>(a >> 1) << \" (\" << (a >> 1) << \")\" << endl;\n    \n    return 0;\n}',
  hint: 'Bitwise operators work on individual bits; use for flags and low-level programming.'
},
{
  id: 'cpp_operators_7',
  topicId: 'cpp_operators',
  question: 'Use ternary conditional operator (?:).',
  mathSolution: 'Ternary operator is a shorthand for if-else.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    \n    int max = (a > b) ? a : b;\n    cout << "Max: " << max << endl;  // 20\n    \n    int min = (a < b) ? a : b;\n    cout << "Min: " << min << endl;  // 10\n    \n    // Nested ternary\n    int x = 15;\n    string result = (x > 0) ? ((x > 10) ? \"Greater than 10\" : \"Between 1 and 10\") : \"Negative\";\n    cout << result << endl;  // Greater than 10\n    \n    return 0;\n}',
  hint: 'Ternary operator: condition ? true_value : false_value'
},
{
  id: 'cpp_operators_8',
  topicId: 'cpp_operators',
  question: 'Use sizeof operator to get size of types.',
  mathSolution: 'sizeof returns size in bytes of a type or variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Size of fundamental types (in bytes):" << endl;\n    cout << "char: " << sizeof(char) << endl;\n    cout << "short: " << sizeof(short) << endl;\n    cout << "int: " << sizeof(int) << endl;\n    cout << "long: " << sizeof(long) << endl;\n    cout << "long long: " << sizeof(long long) << endl;\n    cout << "float: " << sizeof(float) << endl;\n    cout << "double: " << sizeof(double) << endl;\n    cout << "bool: " << sizeof(bool) << endl;\n    \n    int arr[10];\n    cout << "\\nSize of array: " << sizeof(arr) << " bytes" << endl;\n    cout << "Number of elements: " << sizeof(arr) / sizeof(arr[0]) << endl;\n    \n    return 0;\n}',
  hint: 'sizeof is an operator, not a function; parentheses needed for types but optional for variables.'
},
{
  id: 'cpp_operators_9',
  topicId: 'cpp_operators',
  question: 'Use address-of (&) and dereference (*) operators.',
  mathSolution: '& gets memory address, * accesses value at address.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    int* ptr = &x;  // & gets address of x\n    \n    cout << "Value of x: \" << x << endl;\n    cout << \"Address of x: \" << &x << endl;\n    cout << \"Pointer ptr: \" << ptr << endl;\n    cout << \"Value at ptr: \" << *ptr << endl;  // * dereferences\n    \n    *ptr = 100;  // Change x through pointer\n    cout << \"After *ptr = 100, x: \" << x << endl;\n    \n    return 0;\n}',
  hint: '& gets address; * dereferences (accesses value at address).'
},
{
  id: 'cpp_operators_10',
  topicId: 'cpp_operators',
  question: 'Use member access operators (. and ->).',
  mathSolution: 'Dot accesses struct/class members; arrow for pointers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct Point {\n    int x, y;\n    void display() { cout << "(" << x << ", " << y << ")" << endl; }\n};\n\nint main() {\n    Point p1 = {10, 20};\n    p1.display();        // Dot operator\n    p1.x = 30;           // Dot operator for member\n    \n    Point* ptr = &p1;\n    ptr->display();      // Arrow operator\n    ptr->y = 40;         // Arrow operator for member\n    \n    cout << "After modification: ";\n    p1.display();        // (30, 40)\n    \n    return 0;\n}',
  hint: 'Use -> for pointers; use . for objects/references.'
},
{
  id: 'cpp_operators_11',
  topicId: 'cpp_operators',
  question: 'Use comma operator to evaluate multiple expressions.',
  mathSolution: 'Comma operator evaluates all expressions, returns last value.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    \n    // Comma in variable declaration (not operator)\n    a = 5, b = 10, c = 15;\n    \n    // Comma operator in expressions\n    int result = (a++, b++, a + b);\n    cout << \"a: \" << a << \", b: \" << b << \", result: \" << result << endl;\n    \n    // In for loops\n    for (int i = 0, j = 10; i < j; i++, j--) {\n        cout << \"i: \" << i << \", j: \" << j << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Comma operator has lowest precedence; use parentheses for clarity.'
},
{
  id: 'cpp_operators_12',
  topicId: 'cpp_operators',
  question: 'Use type casting operators (static_cast, dynamic_cast, const_cast, reinterpret_cast).',
  mathSolution: 'C++ provides four explicit casting operators for type conversion.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    // static_cast - compile-time conversion\n    double pi = 3.14159;\n    int intPi = static_cast<int>(pi);\n    cout << "static_cast: \" << intPi << endl;  // 3\n    \n    // const_cast - add/remove const\n    const int constValue = 100;\n    int* modifiable = const_cast<int*>(&constValue);\n    // *modifiable = 200;  // Undefined behavior if original is const\n    \n    // reinterpret_cast - low-level bit casting\n    long address = reinterpret_cast<long>(&pi);\n    cout << \"Address as long: \" << hex << address << endl;\n    \n    // dynamic_cast - runtime polymorphic conversion\n    Base* basePtr = new Derived();\n    Derived* derivedPtr = dynamic_cast<Derived*>(basePtr);\n    if (derivedPtr) {\n        cout << \"dynamic_cast successful\" << endl;\n    }\n    \n    delete basePtr;\n    return 0;\n}',
  hint: 'Prefer C++-style casts over C-style casts for type safety.'
},
{
  id: 'cpp_operators_13',
  topicId: 'cpp_operators',
  question: 'Use scope resolution operator (::).',
  mathSolution: ':: accesses global variables, namespace members, static members.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint value = 10;  // Global variable\n\nnamespace MyNamespace {\n    int value = 20;\n    void display() { cout << \"Inside namespace: \" << value << endl; }\n}\n\nclass MyClass {\npublic:\n    static int count;\n    static void show() { cout << \"Count: \" << count << endl; }\n};\n\nint MyClass::count = 5;\n\nint main() {\n    int value = 30;  // Local variable\n    \n    cout << \"Local: \" << value << endl;\n    cout << \"Global: \" << ::value << endl;\n    cout << \"Namespace: \" << MyNamespace::value << endl;\n    \n    MyNamespace::display();\n    \n    MyClass::show();\n    \n    return 0;\n}',
  hint: ':: resolves scope; useful for accessing global variables when shadowed.'
},
{
  id: 'cpp_operators_14',
  topicId: 'cpp_operators',
  question: 'Use new and delete operators for dynamic memory.',
  mathSolution: 'new allocates memory, delete frees memory.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Single variable\n    int* ptr = new int(42);\n    cout << \"Value: \" << *ptr << endl;\n    cout << \"Address: \" << ptr << endl;\n    delete ptr;\n    \n    // Array\n    int* arr = new int[5];\n    for (int i = 0; i < 5; i++) {\n        arr[i] = i * 10;\n    }\n    for (int i = 0; i < 5; i++) {\n        cout << arr[i] << \" \";\n    }\n    cout << endl;\n    delete[] arr;\n    \n    // new with placement (advanced)\n    char buffer[sizeof(int)];\n    int* placed = new(buffer) int(99);\n    cout << \"Placement new: \" << *placed << endl;\n    placed->~int();  // Manual destructor call\n    \n    return 0;\n}',
  hint: 'Use delete for single variable, delete[] for array allocated with new[].'
},
{
  id: 'cpp_operators_15',
  topicId: 'cpp_operators',
  question: 'Use operator precedence and associativity.',
  mathSolution: 'Operators have different precedence determining evaluation order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 2 + 3 * 4;    // Multiplication has higher precedence\n    cout << \"2 + 3 * 4 = \" << a << endl;  // 14, not 20\n    \n    int b = (2 + 3) * 4;  // Parentheses override precedence\n    cout << \"(2 + 3) * 4 = \" << b << endl;  // 20\n    \n    // Precedence table (highest to lowest):\n    // 1. () [] . ->\n    // 2. ++ -- + - ! ~ * & (type) sizeof\n    // 3. * / %\n    // 4. + -\n    // 5. << >>\n    // 6. < <= > >=\n    // 7. == !=\n    // 8. &\n    // 9. ^\n    // 10. |\n    // 11. &&\n    // 12. ||\n    // 13. ?:\n    // 14. = += -= etc.\n    // 15. ,\n    \n    bool c = 5 > 3 && 2 < 4;  // > and < have higher precedence than &&\n    cout << \"5 > 3 && 2 < 4 = \" << boolalpha << c << endl;  // true\n    \n    return 0;\n}',
  hint: 'Use parentheses to make complex expressions clear and avoid precedence bugs.'
},
{
  "id": "cpp_operators_16",
  "topicId": "cpp_operators",
  "question": "Use short-circuit evaluation in logical operators.",
  "mathSolution": "&& and || evaluate left side first; may skip right side.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nbool check1() {\n    cout << \"check1 called\" << endl;\n    return false;\n}\n\nbool check2() {\n    cout << \"check2 called\" << endl;\n    return true;\n}\n\nint main() {\n    cout << \"AND with false first: \";\n    if (check1() && check2()) {\n        cout << \"True\" << endl;\n    } else {\n        cout << \"False\" << endl;\n    }\n    // check2() never called because check1() returns false\n    \n    cout << \"\\nOR with true first: \";\n    if (check2() || check1()) {\n        cout << \"True\" << endl;\n    }\n    // check1() never called because check2() returns true\n    \n    // Short-circuit can be used for safe pointer access\n    int* ptr = nullptr;\n    if (ptr && *ptr == 10) {  // Safe: doesn't dereference null\n        cout << \"Value is 10\" << endl;\n    } else {\n        cout << \"\\nPointer is null, so dereference avoided\" << endl;\n    }\n    \n    return 0;\n}",
  "hint": "Short-circuit evaluation can prevent errors and improve performance."
},
{
  id: 'cpp_operators_17',
  topicId: 'cpp_operators',
  question: 'Use pointer arithmetic operators (+, -, ++, --).',
  mathSolution: 'Adding to pointer moves it by element size, not bytes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int* ptr = arr;  // Points to &arr[0]\n    \n    cout << \"*ptr = \" << *ptr << endl;  // 10\n    \n    ptr++;  // Move to next element\n    cout << \"After ptr++: *ptr = \" << *ptr << endl;  // 20\n    \n    ptr += 2;  // Move 2 elements forward\n    cout << \"After ptr += 2: *ptr = \" << *ptr << endl;  // 40\n    \n    ptr--;  // Move back one element\n    cout << \"After ptr--: *ptr = \" << *ptr << endl;  // 30\n    \n    // Pointer difference\n    int* start = arr;\n    int* end = arr + 5;\n    ptrdiff_t diff = end - start;\n    cout << \"Elements between: \" << diff << endl;  // 5\n    \n    return 0;\n}',
  hint: 'Adding n to pointer moves it by n * sizeof(type) bytes.'
},

{
  id: 'cpp_operators_18',
  topicId: 'cpp_operators',
  question: 'Use subscript operator [] for array access.',
  mathSolution: 'Subscript operator accesses elements by index (0-based).',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    \n    cout << "arr[0] = " << arr[0] << endl;  // 10\n    cout << "arr[2] = " << arr[2] << endl;  // 30\n    cout << "arr[4] = " << arr[4] << endl;  // 50\n    \n    // Modifying through subscript\n    arr[1] = 25;\n    cout << "After modification, arr[1] = " << arr[1] << endl;  // 25\n    \n    // Pointer and subscript equivalence\n    int* ptr = arr;\n    cout << "ptr[3] = " << ptr[3] << endl;  // 40\n    cout << "*(ptr + 3) = " << *(ptr + 3) << endl;  // 40\n    \n    return 0;\n}',
  hint: 'arr[i] is equivalent to *(arr + i) in C++.'
},
{
  id: 'cpp_operators_19',
  topicId: 'cpp_operators',
  question: 'Use function call operator ().',
  mathSolution: 'Function call operator invokes functions and functors.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nclass Multiplier {\n    int factor;\npublic:\n    Multiplier(int f) : factor(f) {}\n    int operator()(int x) { return x * factor; }\n};\n\nint main() {\n    // Function call\n    int result = add(5, 3);\n    cout << "add(5, 3) = " << result << endl;\n    \n    // Function pointer call\n    int (*funcPtr)(int, int) = &add;\n    cout << "funcPtr(5, 3) = " << funcPtr(5, 3) << endl;\n    \n    // Functor (function object)\n    Multiplier times2(2);\n    cout << "times2(5) = " << times2(5) << endl;  // 10\n    \n    return 0;\n}',
  hint: 'Function call operator () can be overloaded to create functors.'
},
{
  id: 'cpp_operators_20',
  topicId: 'cpp_operators',
  question: 'Use throw operator for exception handling.',
  mathSolution: 'throw operator signals an exception condition.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw \"Division by zero error\";\n    }\n    return a / b;\n}\n\nint main() {\n    double x = 10.0, y = 0.0;\n    \n    try {\n        double result = divide(x, y);\n        cout << "Result: " << result << endl;\n    } catch (const char* error) {\n        cout << "Caught: " << error << endl;\n    }\n    \n    // throw without argument rethrows current exception\n    try {\n        throw 42;\n    } catch (int e) {\n        cout << "Caught int: " << e << endl;\n        throw;  // Rethrows\n    }\n    \n    return 0;\n}',
  hint: 'throw transfers control to the nearest catch handler.'
},
{
  "id": "cpp_operators_21",
  "topicId": "cpp_operators",
  "question": "Use cast operators (C-style cast).",
  "mathSolution": "C-style cast performs type conversion (less safe).",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Converting between numeric types\n    double pi = 3.14159;\n    int intPi = (int)pi;\n    cout << \"intPi = \" << intPi << endl;  // 3\n    \n    int x = 65;\n    char ch = (char)x;\n    cout << \"ch = \" << ch << endl;  // 'A'\n    \n    // Pointer casting\n    void* voidPtr = &x;\n    int* intPtr = (int*)voidPtr;\n    cout << \"*intPtr = \" << *intPtr << endl;  // 65\n    \n    // Dangerous: reinterpret cast via C-style\n    float f = 3.14f;\n    int* notSafe = (int*)&f;\n    cout << \"Reinterpreted (unsafe): \" << *notSafe << endl;  // Garbage/undefined behavior\n    \n    return 0;\n}"
},
{
  id: 'cpp_operators_22',
  topicId: 'cpp_operators',
  question: 'Override new and delete operators for custom memory management.',
  mathSolution: 'Overload new/delete to control memory allocation.',
  codeSolution: '#include <iostream>\n#include <cstdlib>\nusing namespace std;\n\nclass MyClass {\npublic:\n    static void* operator new(size_t size) {\n        cout << "Custom new called. Size: " << size << endl;\n        void* ptr = malloc(size);\n        if (!ptr) throw bad_alloc();\n        return ptr;\n    }\n    \n    static void operator delete(void* ptr) {\n        cout << "Custom delete called" << endl;\n        free(ptr);\n    }\n    \n    MyClass() { cout << "Constructor called" << endl; }\n    ~MyClass() { cout << "Destructor called" << endl; }\n};\n\nint main() {\n    MyClass* obj = new MyClass();\n    delete obj;\n    \n    // Array version\n    void* operator new[](size_t size) {\n        cout << "Array new called\" << endl;\n        return malloc(size);\n    }\n    \n    void operator delete[](void* ptr) {\n        cout << \"Array delete called\" << endl;\n        free(ptr);\n    }\n    \n    MyClass* arr = new MyClass[3];\n    delete[] arr;\n    \n    return 0;\n}',
  hint: 'Custom new/delete can be used for pooling, tracking, or debugging.'
},
{
  id: 'cpp_operators_23',
  topicId: 'cpp_operators',
  question: 'Use operator overloading for user-defined types.',
  mathSolution: 'Operator overloading defines behavior for custom types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Complex {\n    double real, imag;\npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    bool operator==(const Complex& other) {\n        return real == other.real && imag == other.imag;\n    }\n    \n    void display() {\n        cout << real << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    \n    Complex c3 = c1 + c2;\n    Complex c4 = c1 - c2;\n    \n    cout << \"c1: \"; c1.display();\n    cout << \"c2: \"; c2.display();\n    cout << \"c1 + c2: \"; c3.display();\n    cout << \"c1 - c2: \"; c4.display();\n    \n    if (c1 == c2) {\n        cout << \"Equal\" << endl;\n    } else {\n        cout << \"Not equal\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Operator overloading makes custom types behave like built-in types.'
},
{
  id: 'cpp_operators_24',
  topicId: 'cpp_operators',
  question: 'Overload stream insertion and extraction operators (<< and >>).',
  mathSolution: 'Overload << and >> for custom output/input formatting.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\n    int x, y;\npublic:\n    Point(int a = 0, int b = 0) : x(a), y(b) {}\n    \n    friend ostream& operator<<(ostream& os, const Point& p) {\n        os << \"(\" << p.x << \", \" << p.y << \")\";\n        return os;\n    }\n    \n    friend istream& operator>>(istream& is, Point& p) {\n        cout << \"Enter x and y: \";\n        is >> p.x >> p.y;\n        return is;\n    }\n};\n\nint main() {\n    Point p1(10, 20);\n    Point p2;\n    \n    cout << \"p1 = \" << p1 << endl;\n    \n    cin >> p2;\n    cout << \"p2 = \" << p2 << endl;\n    \n    return 0;\n}',
  hint: 'Return reference to stream to allow chaining (cout << a << b).'
},
{
  id: 'cpp_operators_25',
  topicId: 'cpp_operators',
  question: 'Overload prefix and postfix increment/decrement operators.',
  mathSolution: 'Postfix operators take dummy int parameter to distinguish from prefix.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Counter {\n    int value;\npublic:\n    Counter(int v = 0) : value(v) {}\n    \n    // Prefix increment (++c)\n    Counter& operator++() {\n        ++value;\n        return *this;\n    }\n    \n    // Postfix increment (c++)\n    Counter operator++(int) {\n        Counter temp = *this;\n        ++value;\n        return temp;\n    }\n    \n    // Prefix decrement (--c)\n    Counter& operator--() {\n        --value;\n        return *this;\n    }\n    \n    // Postfix decrement (c--)\n    Counter operator--(int) {\n        Counter temp = *this;\n        --value;\n        return temp;\n    }\n    \n    void display() { cout << \"Value: \" << value << endl; }\n};\n\nint main() {\n    Counter c(5);\n    \n    cout << \"Prefix ++c: \";\n    ++c;\n    c.display();  // 6\n    \n    cout << \"Postfix c++: \";\n    c++;\n    c.display();  // 7\n    \n    cout << \"Prefix --c: \";\n    --c;\n    c.display();  // 6\n    \n    cout << \"Postfix c--: \";\n    c--;\n    c.display();  // 5\n    \n    return 0;\n}',
  hint: 'Prefix returns reference, postfix returns copy for efficiency.'
},
{
  id: 'cpp_operators_26',
  topicId: 'cpp_operators',
  question: 'Overload subscript operator [] for custom container.',
  mathSolution: 'Return reference to allow assignment to element.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass SafeArray {\n    int arr[10];\npublic:\n    SafeArray() {\n        for (int i = 0; i < 10; i++) arr[i] = 0;\n    }\n    \n    int& operator[](int index) {\n        if (index < 0 || index >= 10) {\n            cout << \"Index out of bounds!\" << endl;\n            return arr[0];  // return safe reference\n        }\n        return arr[index];\n    }\n    \n    const int& operator[](int index) const {\n        if (index < 0 || index >= 10) {\n            cout << \"Index out of bounds!\" << endl;\n            return arr[0];\n        }\n        return arr[index];\n    }\n};\n\nint main() {\n    SafeArray arr;\n    \n    arr[3] = 42;\n    arr[7] = 99;\n    \n    cout << \"arr[3] = \" << arr[3] << endl;  // 42\n    cout << \"arr[7] = \" << arr[7] << endl;  // 99\n    \n    arr[15] = 100;  // Out of bounds warning\n    \n    return 0;\n}',
  hint: 'Provide both const and non-const versions for proper const correctness.'
},
{
  id: 'cpp_operators_27',
  topicId: 'cpp_operators',
  question: 'Overload function call operator () for functors.',
  mathSolution: 'operator() allows objects to behave like functions.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass MultiplyBy {\n    int factor;\npublic:\n    MultiplyBy(int f) : factor(f) {}\n    \n    int operator()(int x) const {\n        return x * factor;\n    }\n};\n\nclass Accumulator {\n    int sum;\npublic:\n    Accumulator() : sum(0) {}\n    \n    void operator()(int x) {\n        sum += x;\n    }\n    \n    int getSum() const { return sum; }\n};\n\nint main() {\n    MultiplyBy times3(3);\n    cout << "times3(5) = \" << times3(5) << endl;  // 15\n    \n    vector<int> nums = {1, 2, 3, 4, 5};\n    \n    // Using functor with transform\n    vector<int> result(nums.size());\n    transform(nums.begin(), nums.end(), result.begin(), MultiplyBy(2));\n    \n    cout << \"Doubled: \";\n    for (int x : result) cout << x << \" \";\n    cout << endl;\n    \n    // Using functor with for_each\n    Accumulator acc;\n    for_each(nums.begin(), nums.end(), acc);\n    cout << \"Sum: \" << acc.getSum() << endl;\n    \n    return 0;\n}',
  hint: 'Functors can maintain state between calls unlike regular functions.'
},
{
  id: 'cpp_operators_28',
  topicId: 'cpp_operators',
  question: 'Overload dereference operator * and arrow operator -> for smart pointers.',
  mathSolution: 'Smart pointers overload * and -> for pointer-like behavior.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass SmartPointer {\n    T* ptr;\npublic:\n    SmartPointer(T* p = nullptr) : ptr(p) {}\n    \n    ~SmartPointer() { delete ptr; }\n    \n    T& operator*() {\n        return *ptr;\n    }\n    \n    T* operator->() {\n        return ptr;\n    }\n    \n    T* get() { return ptr; }\n};\n\nclass MyClass {\npublic:\n    void display() { cout << \"Hello from MyClass!\" << endl; }\n    int value = 42;\n};\n\nint main() {\n    SmartPointer<MyClass> sp(new MyClass());\n    \n    sp->display();  // Arrow operator\n    cout << \"Value: \" << (*sp).value << endl;  // Dereference operator\n    cout << \"Via ->: \" << sp->value << endl;\n    \n    return 0;\n}',
  hint: 'Overloaded -> must return pointer or object with overloaded ->.'
},
{
  id: 'cpp_operators_29',
  topicId: 'cpp_operators',
  question: 'Use operator precedence with parentheses for complex expressions.',
  mathSolution: 'Parentheses explicitly control evaluation order.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 3, c = 2, d = 4;\n    \n    // Without parentheses (operator precedence applies)\n    int result1 = a + b * c - d;\n    cout << \"a + b * c - d = \" << result1 << endl;\n    // 5 + (3*2) - 4 = 5 + 6 - 4 = 7\n    \n    // With parentheses\n    int result2 = (a + b) * (c - d);\n    cout << \"(a + b) * (c - d) = \" << result2 << endl;\n    // (5+3) * (2-4) = 8 * (-2) = -16\n    \n    int result3 = a + (b * (c - d));\n    cout << \"a + (b * (c - d)) = \" << result3 << endl;\n    // 5 + (3 * (2-4)) = 5 + (3 * -2) = 5 - 6 = -1\n    \n    // Complex boolean expression\n    bool condition = (a > b) && (c < d) || (b == c);\n    cout << boolalpha << \"Complex: \" << condition << endl;\n    \n    return 0;\n}',
  hint: 'Use parentheses to clarify intent, not just when necessary.'
},
{
  id: 'cpp_operators_30',
  topicId: 'cpp_operators',
  question: 'Use compound assignment operators with custom types.',
  mathSolution: 'Overload +=, -=, etc. for efficiency and convenience.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Vector3D {\n    int x, y, z;\npublic:\n    Vector3D(int a = 0, int b = 0, int c = 0) : x(a), y(b), z(c) {}\n    \n    Vector3D& operator+=(const Vector3D& other) {\n        x += other.x;\n        y += other.y;\n        z += other.z;\n        return *this;\n    }\n    \n    Vector3D& operator-=(const Vector3D& other) {\n        x -= other.x;\n        y -= other.y;\n        z -= other.z;\n        return *this;\n    }\n    \n    void display() const {\n        cout << \"(\" << x << \", \" << y << \", \" << z << \")\" << endl;\n    }\n};\n\nint main() {\n    Vector3D v1(1, 2, 3);\n    Vector3D v2(4, 5, 6);\n    \n    cout << \"v1: \"; v1.display();\n    cout << \"v2: \"; v2.display();\n    \n    v1 += v2;\n    cout << \"v1 += v2: \"; v1.display();\n    \n    v1 -= v2;\n    cout << \"v1 -= v2: \"; v1.display();\n    \n    return 0;\n}',
  hint: 'Compound assignment operators are more efficient than separate operation and assignment.'
},
{
  id: 'cpp_operators_31',
  topicId: 'cpp_operators',
  question: 'Use sizeof with expressions and types.',
  mathSolution: 'sizeof can be applied to types, expressions, and variables.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 42;\n    double arr[10];\n    \n    // sizeof with types\n    cout << "sizeof(int): \" << sizeof(int) << \" bytes\" << endl;\n    cout << \"sizeof(double): \" << sizeof(double) << \" bytes\" << endl;\n    \n    // sizeof with variables\n    cout << \"sizeof(x): \" << sizeof(x) << \" bytes\" << endl;\n    cout << \"sizeof(arr): \" << sizeof(arr) << \" bytes\" << endl;\n    \n    // sizeof with expressions (not evaluated)\n    int y = 10;\n    cout << \"sizeof(y + 5): \" << sizeof(y + 5) << \" bytes\" << endl;\n    cout << \"y is still: \" << y << \" (not evaluated)\" << endl;\n    \n    // sizeof with array elements\n    int array[20];\n    int elementCount = sizeof(array) / sizeof(array[0]);\n    cout << \"Array elements: \" << elementCount << endl;\n    \n    return 0;\n}',
  hint: 'sizeof expression is evaluated at compile time, not runtime.'
},
{
  id: 'cpp_operators_32',
  topicId: 'cpp_operators',
  question: 'Use typeid operator for runtime type information.',
  mathSolution: 'typeid returns type_info object describing type.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    int i = 42;\n    double d = 3.14;\n    string s = \"Hello\";\n    Base* basePtr = new Derived();\n    \n    cout << "Type of i: \" << typeid(i).name() << endl;\n    cout << \"Type of d: \" << typeid(d).name() << endl;\n    cout << \"Type of s: \" << typeid(s).name() << endl;\n    \n    // Polymorphic types (requires RTTI)\n    cout << \"Static type: \" << typeid(basePtr).name() << endl;\n    cout << \"Dynamic type: \" << typeid(*basePtr).name() << endl;\n    \n    // Comparing types\n    if (typeid(i) == typeid(int)) {\n        cout << \"i is int\" << endl;\n    }\n    \n    delete basePtr;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI (Runtime Type Information) enabled.'
},
{
  id: 'cpp_operators_33',
  topicId: 'cpp_operators',
  question: 'Use throw, try, catch for exception handling.',
  mathSolution: 'try block contains code that might throw; catch handles exceptions.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass MyException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return \"Custom exception occurred\";\n    }\n};\n\nint divide(int a, int b) {\n    if (b == 0) {\n        throw runtime_error(\"Division by zero!\");\n    }\n    return a / b;\n}\n\nint main() {\n    try {\n        int result = divide(10, 0);\n        cout << \"Result: \" << result << endl;\n    } catch (const runtime_error& e) {\n        cout << \"Caught: \" << e.what() << endl;\n    }\n    \n    try {\n        throw MyException();\n    } catch (const MyException& e) {\n        cout << \"Caught: \" << e.what() << endl;\n    }\n    \n    // Multiple catches\n    try {\n        throw 42;\n    } catch (const char* e) {\n        cout << \"String: \" << e << endl;\n    } catch (int e) {\n        cout << \"Integer: \" << e << endl;\n    } catch (...) {\n        cout << \"Unknown exception\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Always catch by reference to avoid slicing and for polymorphism.'
},
{
  "id": "cpp_operators_34",
  "topicId": "cpp_operators",
  "question": "Use noexcept operator for exception specification.",
  "mathSolution": "noexcept indicates function does not throw exceptions.",
  "codeSolution": "#include <iostream>\n#include <type_traits>\nusing namespace std;\n\nvoid mayThrow(bool b) {\n    if (b) throw 42;\n}\n\nvoid neverThrow() noexcept {\n    cout << \"Safe function\" << endl;\n}\n\ntemplate<typename T>\nvoid process(T x) noexcept(noexcept(T(x))) {\n    // Conditional noexcept\n    cout << \"Processing value\" << endl;\n}\n\nint main() {\n    cout << boolalpha;\n    \n    // noexcept operator checks if expression is noexcept\n    cout << \"mayThrow(false) is noexcept: \" << noexcept(mayThrow(false)) << endl;\n    cout << \"neverThrow() is noexcept: \" << noexcept(neverThrow()) << endl;\n    cout << \"int() is noexcept: \" << noexcept(int()) << endl;\n    \n    // Test conditional noexcept template\n    int value = 42;\n    process(value);\n    \n    // noexcept function cannot throw\n    try {\n        neverThrow();  // This function is noexcept, won't throw\n        cout << \"No exception thrown from neverThrow()\" << endl;\n    } catch (...) {\n        cout << \"Caught\" << endl;  // Won't execute\n    }\n    \n    // Example of noexcept in move operations\n    class MyClass {\n    public:\n        MyClass(MyClass&&) noexcept {}\n        MyClass(const MyClass&) {}\n    };\n    \n    cout << \"MyClass move constructor is noexcept: \" \n         << noexcept(MyClass(std::declval<MyClass>())) << endl;\n    \n    return 0;\n}"
},
{
  id: 'cpp_operators_35',
  topicId: 'cpp_operators',
  question: 'Use alignof operator for alignment requirements.',
  mathSolution: 'alignof returns alignment requirement in bytes.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nstruct SimpleStruct {\n    char c;\n    int i;\n};\n\nstruct AlignedStruct {\n    alignas(16) int i;\n    char c;\n};\n\nalignas(32) int alignedArray[10];\n\nint main() {\n    cout << \"alignof(char): \" << alignof(char) << endl;\n    cout << \"alignof(int): \" << alignof(int) << endl;\n    cout << \"alignof(double): \" << alignof(double) << endl;\n    cout << \"alignof(SimpleStruct): \" << alignof(SimpleStruct) << endl;\n    cout << \"alignof(AlignedStruct): \" << alignof(AlignedStruct) << endl;\n    \n    cout << \"alignof(alignedArray): \" << alignof(decltype(alignedArray)) << endl;\n    \n    // alignas specifier for variables\n    alignas(64) int cacheAlignedInt;\n    cout << \"alignof(cacheAlignedInt): \" << alignof(decltype(cacheAlignedInt)) << endl;\n    \n    return 0;\n}',
  hint: 'alignof helps with memory optimization and hardware-specific code.'
},
{
  id: 'cpp_operators_36',
  topicId: 'cpp_operators',
  question: 'Use new and delete with placement syntax.',
  mathSolution: 'Placement new constructs object in pre-allocated memory.',
  codeSolution: '#include <iostream>\n#include <new>\nusing namespace std;\n\nstruct Point {\n    int x, y;\n    Point(int a, int b) : x(a), y(b) {\n        cout << \"Point constructed at \" << this << endl;\n    }\n    ~Point() {\n        cout << \"Point destroyed\" << endl;\n    }\n};\n\nint main() {\n    // Allocate raw memory\n    char buffer[sizeof(Point)];\n    cout << \"Buffer address: \" << (void*)buffer << endl;\n    \n    // Placement new\n    Point* p = new(buffer) Point(10, 20);\n    \n    cout << \"Point at: \" << p << endl;\n    cout << \"x = \" << p->x << \", y = \" << p->y << endl;\n    \n    // Manual destructor call (required for placement new)\n    p->~Point();\n    \n    // Multiple objects in array buffer\n    alignas(Point) char bigBuffer[sizeof(Point) * 3];\n    Point* arr = reinterpret_cast<Point*>(bigBuffer);\n    \n    for (int i = 0; i < 3; i++) {\n        new(&arr[i]) Point(i * 10, i * 20);\n    }\n    \n    for (int i = 0; i < 3; i++) {\n        cout << \"arr[\" << i << \"]: (\" << arr[i].x << \", \" << arr[i].y << \")\" << endl;\n        arr[i].~Point();\n    }\n    \n    return 0;\n}',
  hint: 'Placement new is useful for memory pools and custom allocators.'
},
{
  "id": "cpp_operators_37",
  "topicId": "cpp_operators",
  "question": "Use dynamic_cast for safe downcasting with polymorphic types.",
  "mathSolution": "dynamic_cast returns null or throws bad_cast for invalid casts.",
  "codeSolution": "#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << \"Drawing shape\" << endl; }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << \"Drawing circle\" << endl; }\n    void radius() { cout << \"Circle radius method\" << endl; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << \"Drawing square\" << endl; }\n    void side() { cout << \"Square side method\" << endl; }\n};\n\nint main() {\n    Shape* shapePtr = new Circle();\n    shapePtr->draw();\n    \n    // Downcast with dynamic_cast\n    Circle* circlePtr = dynamic_cast<Circle*>(shapePtr);\n    if (circlePtr) {\n        cout << \"Successfully cast to Circle\" << endl;\n        circlePtr->radius();\n    }\n    \n    // Invalid cast returns nullptr\n    Square* squarePtr = dynamic_cast<Square*>(shapePtr);\n    if (squarePtr) {\n        cout << \"This won't print\" << endl;\n    } else {\n        cout << \"Invalid cast to Square (returns nullptr)\" << endl;\n    }\n    \n    // Reference version throws bad_cast on failure\n    try {\n        Circle& circleRef = dynamic_cast<Circle&>(*shapePtr);\n        circleRef.radius();\n        \n        Square& squareRef = dynamic_cast<Square&>(*shapePtr);  // Throws bad_cast\n        squareRef.side();  // This line won't execute\n    } catch (const bad_cast& e) {\n        cout << \"bad_cast caught: \" << e.what() << endl;\n    }\n    \n    delete shapePtr;\n    \n    return 0;\n}"
},
{
  id: 'cpp_operators_38',
  topicId: 'cpp_operators',
  question: 'Use reinterpret_cast for low-level bit casting.',
  mathSolution: 'reinterpret_cast performs unsafe type punning.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // Convert between unrelated pointer types\n    int intValue = 0x12345678;\n    int* intPtr = &intValue;\n    char* charPtr = reinterpret_cast<char*>(intPtr);\n    \n    cout << hex << \"int value: \" << intValue << endl;\n    cout << \"Bytes: \";\n    for (size_t i = 0; i < sizeof(int); i++) {\n        cout << static_cast<int>(charPtr[i]) << \" \";\n    }\n    cout << endl;\n    \n    // Convert pointer to integer (bit representation)\n    uintptr_t address = reinterpret_cast<uintptr_t>(intPtr);\n    cout << \"Address as uintptr_t: \" << hex << address << endl;\n    \n    // Convert back\n    int* recoveredPtr = reinterpret_cast<int*>(address);\n    cout << \"Recovered value: \" << *recoveredPtr << endl;\n    \n    // Type punning (dangerous - may break strict aliasing)\n    float f = 3.14159f;\n    int i = reinterpret_cast<int&>(f);\n    cout << \"Float: \" << f << \", as int: \" << hex << i << endl;\n    \n    return 0;\n}',
  hint: 'reinterpret_cast is implementation-defined and platform-specific; use sparingly.'
},
{
  id: 'cpp_operators_39',
  topicId: 'cpp_operators',
  question: 'Use const_cast to add or remove const qualifier.',
  mathSolution: 'const_cast modifies constness of a variable.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid printInt(int* ptr) {\n    cout << \"Value: \" << *ptr << endl;\n}\n\nvoid modifyInt(int* ptr) {\n    *ptr = 100;\n}\n\nint main() {\n    const int constValue = 50;\n    const int* constPtr = &constValue;\n    \n    // Remove const to call non-const function\n    int* modifiable = const_cast<int*>(constPtr);\n    \n    printInt(modifiable);  // OK: prints 50\n    // modifyInt(modifiable);  // Dangerous: modifying actually const memory\n    \n    // Practical use: calling legacy code\n    int actualMutable = 30;\n    const int* mutablePtr = &actualMutable;\n    modifyInt(const_cast<int*>(mutablePtr));\n    cout << \"Modified original: \" << actualMutable << endl;\n    \n    // Using const_cast to remove const from reference\n    const int& constRef = actualMutable;\n    int& mutableRef = const_cast<int&>(constRef);\n    mutableRef = 200;\n    cout << \"After const_cast reference: \" << actualMutable << endl;\n    \n    return 0;\n}',
  hint: 'Only use const_cast when you know the object isn\'t truly const.'
},
{
  id: 'cpp_operators_40',
  topicId: 'cpp_operators',
  question: 'Use static_cast for well-defined conversions.',
  mathSolution: 'static_cast performs safe, compile-time conversions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived : public Base {};\n\nint main() {\n    // Numeric conversions\n    double pi = 3.14159;\n    int intPi = static_cast<int>(pi);\n    cout << \"intPi: \" << intPi << endl;  // 3\n    \n    // Implicit conversions made explicit\n    float f = static_cast<float>(pi);\n    cout << \"float: \" << f << endl;\n    \n    // Upcast (Derived to Base) - safe\n    Derived derived;\n    Base* basePtr = static_cast<Base*>(&derived);\n    \n    // Downcast (Base to Derived) - requires caution\n    Base* baseObj = new Derived();\n    Derived* derivedPtr = static_cast<Derived*>(baseObj);\n    cout << \"Downcast successful\" << endl;\n    \n    // Conversion through void*\n    int value = 42;\n    void* voidPtr = static_cast<void*>(&value);\n    int* intPtr = static_cast<int*>(voidPtr);\n    cout << \"Through void*: \" << *intPtr << endl;\n    \n    delete baseObj;\n    \n    return 0;\n}',
  hint: 'static_cast is preferred over C-style cast for well-defined conversions.'
},
);