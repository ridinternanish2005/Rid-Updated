QuizData.questions.push(
  //inheritance ,polymorphism ,abstaction ,encapsulation
{
  "id": "cpp_inheritance_1",
  "topicId": "cpp_inheritance",
  "question": "Create a basic inheritance relationship between base and derived class.",
  "mathSolution": "Derived class inherits members from base class using : public Base.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Animal is eating\" << endl;\n    }\n    \n    void sleep() {\n        cout << \"Animal is sleeping\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Dog barks: Woof! Woof!\" << endl;\n    }\n};\n\nint main() {\n    Dog myDog;\n    myDog.eat();   // Inherited from Animal\n    myDog.sleep(); // Inherited from Animal\n    myDog.bark();  // Dog's own method\n    return 0;\n}",
  "hint": "Use colon and access specifier to inherit: class Derived : public Base"
},
{
  id: 'cpp_inheritance_2',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate protected members in inheritance.',
  mathSolution: 'Protected members are accessible in derived classes but not outside.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    int year;\n    \npublic:\n    Vehicle(string b, int y) : brand(b), year(y) {}\n};\n\nclass Car : public Vehicle {\nprivate:\n    string model;\n    \npublic:\n    Car(string b, string m, int y) : Vehicle(b, y), model(m) {}\n    \n    void display() {\n        // Accessing protected members from base class\n        cout << brand << " " << model << " (" << year << ")" << endl;\n    }\n};\n\nint main() {\n    Car myCar("Toyota", "Camry", 2022);\n    myCar.display();\n    // cout << myCar.brand; // Error: protected member\n    return 0;\n}',
  hint: 'protected members are accessible in derived classes but private outside class hierarchy.'
},
{
  id: 'cpp_inheritance_3',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate single inheritance with constructor chaining.',
  mathSolution: 'Base class constructor is called before derived class constructor.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() {\n        cout << "Base constructor called" << endl;\n    }\n    \n    Base(int x) {\n        cout << "Base parameterized constructor: " << x << endl;\n    }\n    \n    ~Base() {\n        cout << "Base destructor called" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() {\n        cout << "Derived constructor called" << endl;\n    }\n    \n    Derived(int y) : Base(y) {\n        cout << "Derived parameterized constructor: " << y << endl;\n    }\n    \n    ~Derived() {\n        cout << "Derived destructor called" << endl;\n    }\n};\n\nint main() {\n    cout << "Creating Derived object:\\n";\n    Derived d1;\n    \n    cout << "\\nCreating Derived object with parameter:\\n";\n    Derived d2(100);\n    \n    return 0;\n}',
  hint: 'Base class constructor executes before derived class constructor body.'
},
{
  id: 'cpp_inheritance_4',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate multi-level inheritance.',
  mathSolution: 'Class inherits from another derived class, forming a chain.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal(string n) : name(n) {\n        cout << "Animal constructor: " << name << endl;\n    }\n    \n    void eat() {\n        cout << name << " is eating" << endl;\n    }\n};\n\nclass Mammal : public Animal {\nprotected:\n    int legs;\n    \npublic:\n    Mammal(string n, int l) : Animal(n), legs(l) {\n        cout << "Mammal constructor: " << legs << " legs" << endl;\n    }\n    \n    void walk() {\n        cout << name << " is walking on " << legs << " legs" << endl;\n    }\n};\n\nclass Dog : public Mammal {\nprivate:\n    string breed;\n    \npublic:\n    Dog(string n, string b, int l) : Mammal(n, l), breed(b) {\n        cout << "Dog constructor: " << breed << endl;\n    }\n    \n    void bark() {\n        cout << name << " barks: Woof!" << endl;\n    }\n};\n\nint main() {\n    Dog myDog("Rex", "German Shepherd", 4);\n    myDog.eat();\n    myDog.walk();\n    myDog.bark();\n    \n    return 0;\n}',
  hint: 'Multi-level inheritance creates hierarchy: Animal -> Mammal -> Dog.'
},
{
  id: 'cpp_inheritance_5',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate multiple inheritance.',
  mathSolution: 'Class inherits from multiple base classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Flying {\npublic:\n    void fly() {\n        cout << "Flying in the sky" << endl;\n    }\n};\n\nclass Swimming {\npublic:\n    void swim() {\n        cout << "Swimming in water" << endl;\n    }\n};\n\nclass Walking {\npublic:\n    void walk() {\n        cout << "Walking on land" << endl;\n    }\n};\n\nclass Duck : public Flying, public Swimming, public Walking {\nprivate:\n    string name;\n    \npublic:\n    Duck(string n) : name(n) {}\n    \n    void quack() {\n        cout << name << " says: Quack! Quack!" << endl;\n    }\n};\n\nint main() {\n    Duck donald("Donald");\n    donald.fly();\n    donald.swim();\n    donald.walk();\n    donald.quack();\n    \n    return 0;\n}',
  hint: 'Multiple inheritance: class Derived : public Base1, public Base2'
},
{
  id: 'cpp_inheritance_6',
  topicId: 'cpp_inheritance',
  question: 'Resolve ambiguity in multiple inheritance using scope resolution.',
  mathSolution: 'Use class::member syntax to specify which base class member to use.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base1 {\npublic:\n    void display() {\n        cout << "Base1 display" << endl;\n    }\n};\n\nclass Base2 {\npublic:\n    void display() {\n        cout << "Base2 display" << endl;\n    }\n};\n\nclass Derived : public Base1, public Base2 {\npublic:\n    void show() {\n        Base1::display();  // Resolve ambiguity\n        Base2::display();\n    }\n    \n    void display() {\n        Base1::display();  // Override with resolution\n    }\n};\n\nint main() {\n    Derived d;\n    d.Base1::display();  // Explicit resolution\n    d.Base2::display();\n    d.show();\n    d.display();\n    \n    return 0;\n}',
  hint: 'Use scope resolution operator (::) to resolve naming conflicts in multiple inheritance.'
},
{
  id: 'cpp_inheritance_7',
  topicId: 'cpp_inheritance',
  question: 'Use virtual inheritance to solve diamond problem.',
  mathSolution: 'Virtual inheritance ensures only one copy of grandparent class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal() {\n        cout << "Animal constructor" << endl;\n    }\n    \n    void speak() {\n        cout << "Animal speaks" << endl;\n    }\n};\n\n// Virtual inheritance\nclass Mammal : virtual public Animal {\npublic:\n    Mammal() { cout << "Mammal constructor" << endl; }\n};\n\nclass Bird : virtual public Animal {\npublic:\n    Bird() { cout << "Bird constructor" << endl; }\n};\n\nclass Bat : public Mammal, public Bird {\npublic:\n    Bat() { cout << "Bat constructor" << endl; }\n    \n    void fly() {\n        cout << "Bat flying" << endl;\n    }\n};\n\nint main() {\n    Bat bat;\n    bat.speak();  // No ambiguity - single Animal instance\n    bat.fly();\n    \n    return 0;\n}',
  hint: 'Virtual inheritance solves diamond problem by sharing single base instance.'
},
{
  id: 'cpp_inheritance_8',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate public inheritance (is-a relationship).',
  mathSolution: 'Public inheritance models "is-a" relationship.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string color;\n    \npublic:\n    Shape(string c) : color(c) {}\n    \n    virtual double area() = 0;\n    virtual void draw() {\n        cout << "Drawing " << color << " shape" << endl;\n    }\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(string c, double r) : Shape(c), radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing " << color << " circle with radius " << radius << endl;\n    }\n};\n\nint main() {\n    Circle circle("red", 5.0);\n    \n    // Circle IS-A Shape\n    Shape* shapePtr = &circle;\n    \n    cout << "Area: " << shapePtr->area() << endl;\n    shapePtr->draw();\n    \n    return 0;\n}',
  hint: 'Public inheritance represents "is-a" relationship in object-oriented design.'
},
{
  id: 'cpp_inheritance_9',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate private inheritance (has-a relationship).',
  mathSolution: 'Private inheritance models "implemented-in-terms-of" relationship.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Stack : private vector<int> {\npublic:\n    void push(int value) {\n        push_back(value);\n    }\n    \n    void pop() {\n        if (!empty()) pop_back();\n    }\n    \n    int top() {\n        if (!empty()) return back();\n        return -1;\n    }\n    \n    bool empty() {\n        return vector<int>::empty();\n    }\n    \n    size_t size() {\n        return vector<int>::size();\n    }\n};\n\nint main() {\n    Stack s;\n    s.push(10);\n    s.push(20);\n    s.push(30);\n    \n    cout << "Top: " << s.top() << endl;\n    cout << "Size: " << s.size() << endl;\n    \n    s.pop();\n    cout << "After pop, top: " << s.top() << endl;\n    \n    // Stack s2 = s;  // Error: private inheritance hides copy operations\n    \n    return 0;\n}',
  hint: 'Private inheritance is used for "has-a" or "implemented-in-terms-of" relationships.'
},
{
  id: 'cpp_inheritance_10',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate protected inheritance.',
  mathSolution: 'Protected inheritance makes public/protected members protected in derived.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void publicFunc() { cout << "Public function" << endl; }\nprotected:\n    void protectedFunc() { cout << "Protected function" << endl; }\nprivate:\n    void privateFunc() { cout << "Private function" << endl; }\n};\n\nclass Derived : protected Base {\npublic:\n    void accessBase() {\n        publicFunc();    // OK: becomes protected\n        protectedFunc(); // OK: becomes protected\n        // privateFunc(); // Error: private in Base\n    }\n};\n\nclass Further : public Derived {\npublic:\n    void accessFurther() {\n        publicFunc();    // OK: protected in Derived, accessible here\n        protectedFunc(); // OK: protected in Derived\n    }\n};\n\nint main() {\n    Derived d;\n    // d.publicFunc();   // Error: publicFunc is protected in Derived\n    d.accessBase();      // OK: public member of Derived\n    \n    Further f;\n    f.accessFurther();    // OK\n    \n    return 0;\n}',
  hint: 'Protected inheritance is rarely used; prefer composition over protected inheritance.'
},
{
  id: 'cpp_inheritance_11',
  topicId: 'cpp_inheritance',
  question: 'Override virtual functions in derived class.',
  mathSolution: 'Use override keyword to explicitly override virtual function.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void display() {\n        cout << "Base display" << endl;\n    }\n    \n    virtual void print() {\n        cout << "Base print" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void display() override {\n        cout << "Derived display" << endl;\n    }\n    \n    void print() override final {\n        cout << "Derived print (final)" << endl;\n    }\n};\n\nclass Further : public Derived {\npublic:\n    void display() override {\n        cout << "Further display" << endl;\n    }\n    \n    // void print() override;  // Error: print is final in Derived\n};\n\nint main() {\n    Base* ptr = new Derived();\n    ptr->display();  // Calls Derived version\n    ptr->print();    // Calls Derived version\n    \n    delete ptr;\n    \n    return 0;\n}',
  hint: 'override keyword catches signature mismatches at compile time.'
},
{
  id: 'cpp_inheritance_12',
  topicId: 'cpp_inheritance',
  question: 'Use final specifier to prevent further inheritance.',
  mathSolution: 'final prevents class from being inherited or method from being overridden.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base final {\npublic:\n    void display() {\n        cout << "Base class cannot be inherited" << endl;\n    }\n};\n\n// class Derived : public Base { };  // Error: Base is final\n\nclass Shape {\npublic:\n    virtual void draw() final {\n        cout << "Drawing shape" << endl;\n    }\n    \n    virtual void move() {\n        cout << "Moving shape" << endl;\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    // void draw() override { }  // Error: draw is final\n    \n    void move() override {\n        cout << "Moving circle" << endl;\n    }\n};\n\nint main() {\n    Base b;\n    b.display();\n    \n    Circle c;\n    c.draw();  // Calls final method from Shape\n    c.move();\n    \n    return 0;\n}',
  hint: 'final specifier provides strong guarantees for class design.'
},
{
  id: 'cpp_inheritance_13',
  topicId: 'cpp_inheritance',
  question: 'Create abstract base class with pure virtual functions.',
  mathSolution: 'Pure virtual function (=0) makes class abstract, cannot instantiate.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;  // Pure virtual\n    virtual double perimeter() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    double perimeter() override {\n        return 2 * 3.14159 * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() override {\n        return width * height;\n    }\n    \n    double perimeter() override {\n        return 2 * (width + height);\n    }\n    \n    void draw() override {\n        cout << "Drawing rectangle " << width << "x" << height << endl;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    \n    Shape* shapes[] = {new Circle(5), new Rectangle(4, 6)};\n    \n    for (Shape* s : shapes) {\n        cout << "Area: " << s->area() << endl;\n        cout << "Perimeter: " << s->perimeter() << endl;\n        s->draw();\n        delete s;\n    }\n    \n    return 0;\n}',
  hint: 'Abstract classes define interfaces that derived classes must implement.'
},
{
  id: 'cpp_inheritance_14',
  topicId: 'cpp_inheritance',
  question: 'Call base class virtual function from derived class using scope resolution.',
  mathSolution: 'Base::function() calls base class version even if overridden.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void process() {\n        cout << "Base processing" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void process() override {\n        cout << "Derived starting" << endl;\n        Base::process();  // Call base version explicitly\n        cout << "Derived finishing" << endl;\n    }\n};\n\nclass Advanced : public Derived {\npublic:\n    void process() override {\n        cout << "Advanced begin" << endl;\n        Derived::process();  // Call immediate base\n        cout << "Advanced end" << endl;\n    }\n};\n\nint main() {\n    Advanced a;\n    a.process();\n    \n    return 0;\n}',
  hint: 'Use Base::function() to call base class version inside overridden function.'
},
{
  "id": "cpp_inheritance_15",
  "topicId": "cpp_inheritance",
  "question": "Demonstrate upcasting (derived to base).",
  "mathSolution": "Derived class pointer can be implicitly converted to base pointer.",
  "codeSolution": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() {\n        cout << \"Animal makes sound\" << endl;\n    }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override {\n        cout << \"Dog barks: Woof!\" << endl;\n    }\n    \n    void wagTail() {\n        cout << \"Dog wags tail\" << endl;\n    }\n};\n\nclass Cat : public Animal {\npublic:\n    void sound() override {\n        cout << \"Cat meows: Meow!\" << endl;\n    }\n};\n\nint main() {\n    // Upcasting - implicit conversion\n    Dog dog;\n    Animal* animalPtr = &dog;\n    animalPtr->sound();  // Calls Dog's sound (polymorphic)\n    \n    // Vector of base pointers\n    vector<Animal*> animals;\n    animals.push_back(new Dog());\n    animals.push_back(new Cat());\n    animals.push_back(new Dog());\n    \n    for (Animal* a : animals) {\n        a->sound();\n        delete a;\n    }\n    \n    return 0;\n}",
  "hint": "Upcasting is safe and always allowed in inheritance hierarchies."
},
{
  id: 'cpp_inheritance_16',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate downcasting using dynamic_cast.',
  mathSolution: 'dynamic_cast safely converts base pointer to derived pointer.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() { cout << "Animal sound" << endl; }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << "Woof!" << endl; }\n    void fetch() { cout << "Dog fetches ball" << endl; }\n};\n\nclass Cat : public Animal {\npublic:\n    void sound() override { cout << "Meow!" << endl; }\n    void climb() { cout << "Cat climbs tree" << endl; }\n};\n\nint main() {\n    Animal* animals[] = {new Dog(), new Cat(), new Dog()};\n    \n    for (Animal* a : animals) {\n        a->sound();\n        \n        // Downcast to Dog\n        if (Dog* dog = dynamic_cast<Dog*>(a)) {\n            dog->fetch();\n        }\n        \n        // Downcast to Cat\n        if (Cat* cat = dynamic_cast<Cat*>(a)) {\n            cat->climb();\n        }\n        \n        delete a;\n    }\n    \n    // Reference downcasting\n    Dog d;\n    Animal& animalRef = d;\n    \n    try {\n        Dog& dogRef = dynamic_cast<Dog&>(animalRef);\n        dogRef.fetch();\n    } catch (const bad_cast& e) {\n        cout << "Bad cast: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'dynamic_cast requires at least one virtual function in base class.'
},
{
  id: 'cpp_inheritance_17',
  topicId: 'cpp_inheritance',
  question: 'Use typeid to get runtime type information in inheritance.',
  mathSolution: 'typeid returns type_info for polymorphic objects at runtime.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void func() {}\n    virtual ~Base() {}\n};\n\nclass Derived1 : public Base {};\nclass Derived2 : public Base {};\n\nvoid process(Base* ptr) {\n    if (typeid(*ptr) == typeid(Derived1)) {\n        cout << "Processing Derived1" << endl;\n    } else if (typeid(*ptr) == typeid(Derived2)) {\n        cout << "Processing Derived2" << endl;\n    } else {\n        cout << "Processing Base" << endl;\n    }\n}\n\nint main() {\n    Base* b1 = new Base();\n    Base* d1 = new Derived1();\n    Base* d2 = new Derived2();\n    \n    process(b1);\n    process(d1);\n    process(d2);\n    \n    // Get type names\n    cout << "Type of d1: " << typeid(*d1).name() << endl;\n    cout << "Type of d2: " << typeid(*d2).name() << endl;\n    \n    delete b1;\n    delete d1;\n    delete d2;\n    \n    return 0;\n}',
  hint: 'typeid requires RTTI and works only on polymorphic types for dynamic info.'
},
{
  id: 'cpp_inheritance_18',
  topicId: 'cpp_inheritance',
  question: 'Create class hierarchies with virtual destructors.',
  mathSolution: 'Virtual destructors ensure proper cleanup of derived objects.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    virtual ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\nprivate:\n    int* data;\n    \npublic:\n    Derived() {\n        data = new int[100];\n        cout << "Derived constructor, allocated memory" << endl;\n    }\n    \n    ~Derived() {\n        delete[] data;\n        cout << "Derived destructor, freed memory" << endl;\n    }\n};\n\nclass WithoutVirtual {\npublic:\n    ~WithoutVirtual() { cout << "WithoutVirtual destructor" << endl; }\n};\n\nclass Leaky : public WithoutVirtual {\nprivate:\n    int* leak;\n    \npublic:\n    Leaky() { leak = new int[100]; cout << "Leaky constructor" << endl; }\n    ~Leaky() { delete[] leak; cout << "Leaky destructor" << endl; }\n};\n\nint main() {\n    cout << "With virtual destructor:" << endl;\n    Base* ptr = new Derived();\n    delete ptr;  // Calls both destructors\n    \n    cout << "\\nWithout virtual destructor:" << endl;\n    WithoutVirtual* leaky = new Leaky();\n    delete leaky;  // Only calls WithoutVirtual destructor - memory leak!\n    \n    return 0;\n}',
  hint: 'Always make destructor virtual in polymorphic base classes.'
},
{
  "id": "cpp_inheritance_19",
  "topicId": "cpp_inheritance",
  "question": "Use using declaration to change access level of inherited members.",
  "mathSolution": "using Base::member can change access in derived class.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void publicFunc() { cout << \"Public function\" << endl; }\nprotected:\n    void protectedFunc() { cout << \"Protected function\" << endl; }\nprivate:\n    void privateFunc() { cout << \"Private function\" << endl; }\n};\n\nclass Derived : private Base {\npublic:\n    // Make Base's public function public again\n    using Base::publicFunc;\n    \n    // Make Base's protected function public\n    using Base::protectedFunc;\n    \n    // Cannot access privateFunc to make it public\n    \n    void show() {\n        publicFunc();    // OK: made public\n        protectedFunc(); // OK: made public\n    }\n};\n\nint main() {\n    Derived d;\n    d.publicFunc();     // Accessible (using declaration)\n    d.protectedFunc();  // Accessible (using declaration)\n    // d.privateFunc(); // Error: still private\n    \n    return 0;\n}",
  "hint": "using declaration can change access level of inherited members."
},
{
  id: 'cpp_inheritance_20',
  topicId: 'cpp_inheritance',
  question: 'Hide base class function with derived class function (non-virtual).',
  mathSolution: 'Non-virtual functions are statically bound, hiding base version.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void display() {\n        cout << "Base display" << endl;\n    }\n    \n    void show() {\n        cout << "Base show" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    // Hiding base class display (not overriding - no virtual)\n    void display() {\n        cout << "Derived display" << endl;\n    }\n    \n    // Can still call base version using scope resolution\n    void callBaseDisplay() {\n        Base::display();\n    }\n};\n\nint main() {\n    Derived d;\n    d.display();          // Calls Derived version\n    d.Base::display();    // Calls Base version\n    d.callBaseDisplay();  // Calls Base version\n    d.show();             // Inherited as is (not hidden)\n    \n    Base* ptr = &d;\n    ptr->display();       // Calls Base version (static binding)\n    \n    return 0;\n}',
  hint: 'Non-virtual functions are resolved at compile time based on pointer type.'
},
{
  id: 'cpp_inheritance_21',
  topicId: 'cpp_inheritance',
  question: 'Use CRTP (Curiously Recurring Template Pattern) for static polymorphism.',
  mathSolution: 'Derived class inherits from template instantiated with itself.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Shape {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->drawImpl();\n    }\n    \n    double area() {\n        return static_cast<Derived*>(this)->areaImpl();\n    }\n};\n\nclass Circle : public Shape<Circle> {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    void drawImpl() {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n    \n    double areaImpl() {\n        return 3.14159 * radius * radius;\n    }\n};\n\nclass Rectangle : public Shape<Rectangle> {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    void drawImpl() {\n        cout << "Drawing rectangle " << width << "x" << height << endl;\n    }\n    \n    double areaImpl() {\n        return width * height;\n    }\n};\n\ntemplate<typename T>\nvoid render(Shape<T>& shape) {\n    shape.draw();\n    cout << "Area: " << shape.area() << endl;\n}\n\nint main() {\n    Circle c(5);\n    Rectangle r(4, 6);\n    \n    render(c);\n    render(r);\n    \n    return 0;\n}',
  hint: 'CRTP enables static polymorphism without virtual function overhead.'
},
{
  id: 'cpp_inheritance_22',
  topicId: 'cpp_inheritance',
  question: 'Use mixin classes for multiple inheritance of behavior.',
  mathSolution: 'Mixins add specific functionality to classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass Printable {\npublic:\n    void print() const {\n        static_cast<const T*>(this)->printImpl();\n    }\n};\n\ntemplate<typename T>\nclass Serializable {\npublic:\n    void serialize() const {\n        static_cast<const T*>(this)->serializeImpl();\n    }\n};\n\nclass Person : public Printable<Person>, public Serializable<Person> {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    Person(string n, int a) : name(n), age(a) {}\n    \n    void printImpl() const {\n        cout << "Person: " << name << ", " << age << endl;\n    }\n    \n    void serializeImpl() const {\n        cout << "Serializing: " << name << "," << age << endl;\n    }\n};\n\nclass LoggerMixin {\npublic:\n    void log(const string& msg) {\n        cout << "[LOG] " << msg << endl;\n    }\n};\n\nclass TimestampMixin {\npublic:\n    string getTimestamp() {\n        return "2024-01-01 12:00:00";\n    }\n};\n\nclass DataProcessor : public LoggerMixin, public TimestampMixin {\npublic:\n    void process() {\n        log("Processing started at " + getTimestamp());\n        // Processing logic\n        log("Processing completed");\n    }\n};\n\nint main() {\n    Person p("John", 30);\n    p.print();\n    p.serialize();\n    \n    DataProcessor dp;\n    dp.process();\n    \n    return 0;\n}',
  hint: 'Mixins provide reusable behavior that can be composed as needed.'
},
{
  id: 'cpp_inheritance_23',
  topicId: 'cpp_inheritance',
  question: 'Inherit from std::exception to create custom exception class.',
  mathSolution: 'Derive from std::exception and override what() method.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <string>\nusing namespace std;\n\nclass InvalidAgeException : public exception {\nprivate:\n    string message;\n    \npublic:\n    InvalidAgeException(int age) {\n        message = "Invalid age: " + to_string(age) + ". Age must be between 0 and 150.";\n    }\n    \n    const char* what() const noexcept override {\n        return message.c_str();\n    }\n};\n\nclass NegativeValueException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return "Value cannot be negative";\n    }\n};\n\nclass DivisionByZeroException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return "Division by zero is not allowed";\n    }\n};\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw DivisionByZeroException();\n    }\n    return a / b;\n}\n\nvoid setAge(int age) {\n    if (age < 0 || age > 150) {\n        throw InvalidAgeException(age);\n    }\n    cout << "Age set to " << age << endl;\n}\n\nint main() {\n    try {\n        setAge(200);\n    } catch (const InvalidAgeException& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    try {\n        divide(10, 0);\n    } catch (const DivisionByZeroException& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Deriving from std::exception allows exceptions to be caught polymorphically.'
},
{
  id: 'cpp_inheritance_24',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with smart pointers for automatic cleanup.',
  mathSolution: 'Smart pointers manage polymorphic objects safely.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Widget {\npublic:\n    virtual void render() = 0;\n    virtual ~Widget() {}\n};\n\nclass Button : public Widget {\npublic:\n    void render() override {\n        cout << "Rendering button" << endl;\n    }\n};\n\nclass TextBox : public Widget {\npublic:\n    void render() override {\n        cout << "Rendering text box" << endl;\n    }\n};\n\nclass Window {\nprivate:\n    vector<unique_ptr<Widget>> widgets;\n    \npublic:\n    void addWidget(unique_ptr<Widget> widget) {\n        widgets.push_back(move(widget));\n    }\n    \n    void renderAll() {\n        for (const auto& w : widgets) {\n            w->render();\n        }\n    }\n};\n\nint main() {\n    Window window;\n    window.addWidget(make_unique<Button>());\n    window.addWidget(make_unique<TextBox>());\n    window.addWidget(make_unique<Button>());\n    \n    window.renderAll();\n    \n    return 0;\n}',
  hint: 'Smart pointers with inheritance enable automatic memory management of polymorphic objects.'
},
{
  id: 'cpp_inheritance_25',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate slicing problem when passing derived by value.',
  mathSolution: 'Passing derived object by value to base parameter slices the object.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void identify() {\n        cout << "I am Base" << endl;\n    }\n};\n\nclass Derived : public Base {\nprivate:\n    int extraData[100];  // Extra data that will be sliced\n    \npublic:\n    void identify() override {\n        cout << "I am Derived" << endl;\n    }\n};\n\nvoid processByValue(Base b) {\n    b.identify();  // Calls Base::identify (sliced!)\n}\n\nvoid processByReference(Base& b) {\n    b.identify();  // Calls Derived::identify (polymorphic)\n}\n\nvoid processByPointer(Base* b) {\n    b->identify();  // Calls Derived::identify (polymorphic)\n}\n\nint main() {\n    Derived d;\n    \n    cout << "By value (slicing): ";\n    processByValue(d);    // Sliced - loses Derived part\n    \n    cout << "By reference: \";\n    processByReference(d); // No slicing\n    \n    cout << \"By pointer: \";\n    processByPointer(&d);  // No slicing\n    \n    // Array of base objects - also slices\n    Base bases[2];\n    bases[0] = d;  // Slicing occurs\n    bases[0].identify();  // Calls Base::identify\n    \n    return 0;\n}',
  hint: 'Avoid slicing by using pointers or references for polymorphic types.'
},
{
  id: 'cpp_inheritance_26',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with factory pattern for object creation.',
  mathSolution: 'Factory creates appropriate derived type based on parameters.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ConcreteProductA : public Product {\npublic:\n    void use() override {\n        cout << "Using Product A" << endl;\n    }\n};\n\nclass ConcreteProductB : public Product {\npublic:\n    void use() override {\n        cout << "Using Product B" << endl;\n    }\n};\n\nclass Factory {\npublic:\n    static unique_ptr<Product> create(const string& type) {\n        if (type == "A") {\n            return make_unique<ConcreteProductA>();\n        } else if (type == "B") {\n            return make_unique<ConcreteProductB>();\n        }\n        return nullptr;\n    }\n};\n\nint main() {\n    auto productA = Factory::create("A");\n    auto productB = Factory::create("B");\n    \n    productA->use();\n    productB->use();\n    \n    return 0;\n}',
  hint: 'Factory pattern centralizes object creation logic using inheritance.'
},
{
  id: 'cpp_inheritance_27',
  topicId: 'cpp_inheritance',
  question: 'Create template class with inheritance.',
  mathSolution: 'Template classes can be used as base or derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass Base {\nprotected:\n    T value;\n    \npublic:\n    Base(T v) : value(v) {}\n    \n    virtual void display() {\n        cout << "Base value: " << value << endl;\n    }\n};\n\ntemplate<typename T>\nclass Derived : public Base<T> {\nprivate:\n    T multiplier;\n    \npublic:\n    Derived(T v, T m) : Base<T>(v), multiplier(m) {}\n    \n    void display() override {\n        cout << "Derived value: " << this->value << ", multiplied: " << this->value * multiplier << endl;\n    }\n};\n\nclass IntDerived : public Base<int> {\npublic:\n    IntDerived(int v) : Base<int>(v) {}\n    \n    void display() override {\n        cout << "IntDerived: " << value << endl;\n    }\n};\n\nint main() {\n    Base<int>* b1 = new Derived<int>(10, 5);\n    Base<double>* b2 = new Derived<double>(3.14, 2);\n    Base<int>* b3 = new IntDerived(42);\n    \n    b1->display();\n    b2->display();\n    b3->display();\n    \n    delete b1;\n    delete b2;\n    delete b3;\n    \n    return 0;\n}',
  hint: 'Template inheritance allows creating generic class hierarchies.'
},
{
  id: 'cpp_inheritance_28',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with nested classes.',
  mathSolution: 'Nested classes can inherit from outer class or other nested classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Outer {\nprotected:\n    int outerData;\n    \npublic:\n    Outer(int d) : outerData(d) {}\n    \n    class InnerBase {\n    protected:\n        int innerData;\n        \n    public:\n        InnerBase(int d) : innerData(d) {}\n        virtual void show() {\n            cout << \"InnerBase: \" << innerData << endl;\n        }\n    };\n    \n    class InnerDerived : public InnerBase {\n    private:\n        int extra;\n        \n    public:\n        InnerDerived(int d, int e) : InnerBase(d), extra(e) {}\n        \n        void show() override {\n            cout << \"InnerDerived: \" << innerData << \", extra: \" << extra << endl;\n        }\n    };\n};\n\nclass DerivedOuter : public Outer {\npublic:\n    DerivedOuter(int d) : Outer(d) {}\n    \n    class DeepInner : public Outer::InnerBase {\n    public:\n        DeepInner(int d) : Outer::InnerBase(d) {}\n        \n        void show() override {\n            cout << \"DeepInner: \" << innerData << endl;\n        }\n    };\n};\n\nint main() {\n    Outer::InnerDerived inner1(10, 20);\n    DerivedOuter::DeepInner inner2(30);\n    \n    inner1.show();\n    inner2.show();\n    \n    return 0;\n}',
  hint: 'Nested classes can participate in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_29',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with constexpr constructors.',
  mathSolution: 'constexpr constructors enable compile-time object creation in inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Point {\nprotected:\n    int x, y;\n    \npublic:\n    constexpr Point(int a, int b) : x(a), y(b) {}\n    \n    constexpr int getX() const { return x; }\n    constexpr int getY() const { return y; }\n};\n\nclass ColorPoint : public Point {\nprivate:\n    int color;\n    \npublic:\n    constexpr ColorPoint(int a, int b, int c) : Point(a, b), color(c) {}\n    \n    constexpr int getColor() const { return color; }\n};\n\nint main() {\n    // Compile-time objects\n    constexpr Point p(10, 20);\n    constexpr ColorPoint cp(30, 40, 0xFF0000);\n    \n    // Compile-time array size\n    int arr[p.getX()];  // Valid if p.getX() is constexpr\n    \n    cout << \"Point: (\" << cp.getX() << \", \" << cp.getY() << \")\" << endl;\n    cout << \"Color: \" << hex << cp.getColor() << endl;\n    \n    return 0;\n}',
  hint: 'constexpr inheritance enables compile-time evaluation of derived objects.'
},
{
  id: 'cpp_inheritance_30',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with friend functions and classes.',
  mathSolution: 'Friend relationships are not inherited automatically.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int secret;\n    \nprotected:\n    int protectedData;\n    \npublic:\n    Base() : secret(100), protectedData(50) {}\n    \n    friend void showBase(Base& b);\n    friend class FriendOfBase;\n};\n\nvoid showBase(Base& b) {\n    cout << \"Friend function accessing Base secret: \" << b.secret << endl;\n}\n\nclass FriendOfBase {\npublic:\n    void access(Base& b) {\n        cout << \"Friend class accessing Base secret: \" << b.secret << endl;\n    }\n};\n\nclass Derived : public Base {\nprivate:\n    int derivedSecret;\n    \npublic:\n    Derived() : derivedSecret(200) {}\n};\n\nvoid showDerived(Derived& d) {\n    // cout << d.secret;  // Error: friend of Base, not of Derived\n    cout << \"Friend function can access derived? \";\n    // showBase(d);  // OK: upcasting to Base\n}\n\nint main() {\n    Base b;\n    Derived d;\n    \n    showBase(b);\n    showBase(d);  // Works due to upcasting\n    \n    FriendOfBase fob;\n    fob.access(b);\n    // fob.access(d);  // Error: d is Derived, not Base\n    \n    return 0;\n}',
  hint: 'Friendship is not inherited; derived classes do not automatically gain base\'s friends.'
},
{
  id: 'cpp_inheritance_31',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with operator overloading.',
  mathSolution: 'Operators can be inherited and overridden in derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Number {\nprotected:\n    int value;\n    \npublic:\n    Number(int v) : value(v) {}\n    \n    virtual Number operator+(const Number& other) const {\n        return Number(value + other.value);\n    }\n    \n    virtual void display() const {\n        cout << \"Number: \" << value << endl;\n    }\n};\n\nclass Complex : public Number {\nprivate:\n    int imag;\n    \npublic:\n    Complex(int r, int i) : Number(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) const {\n        return Complex(value + other.value, imag + other.imag);\n    }\n    \n    void display() const override {\n        cout << \"Complex: \" << value << \" + \" << imag << \"i\" << endl;\n    }\n};\n\nint main() {\n    Number n1(10), n2(20);\n    Number n3 = n1 + n2;\n    n3.display();\n    \n    Complex c1(5, 3), c2(2, 4);\n    Complex c3 = c1 + c2;\n    c3.display();\n    \n    return 0;\n}',
  hint: 'Operator overloading works with inheritance like regular member functions.'
},
{
  id: 'cpp_inheritance_32',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with static members.',
  mathSolution: 'Static members are shared across base and all derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    static int objectCount;\n    static int getCount() { return objectCount; }\n    \n    Base() { objectCount++; }\n    virtual ~Base() { objectCount--; }\n};\n\nint Base::objectCount = 0;\n\nclass Derived1 : public Base {\npublic:\n    Derived1() { cout << \"Derived1 created, total: \" << objectCount << endl; }\n    ~Derived1() { cout << \"Derived1 destroyed, total: \" << objectCount << endl; }\n};\n\nclass Derived2 : public Base {\npublic:\n    Derived2() { cout << \"Derived2 created, total: \" << objectCount << endl; }\n    ~Derived2() { cout << \"Derived2 destroyed, total: \" << objectCount << endl; }\n};\n\nint main() {\n    cout << \"Initial count: \" << Base::objectCount << endl;\n    \n    {\n        Derived1 d1;\n        Derived2 d2;\n        Derived1 d3;\n        \n        cout << \"Current count from Base: \" << Base::getCount() << endl;\n        cout << \"Current count from Derived: \" << Derived1::getCount() << endl;\n    }\n    \n    cout << \"Final count: \" << Base::objectCount << endl;\n    \n    return 0;\n}',
  hint: 'Static members are shared across entire inheritance hierarchy.'
},
{
  id: 'cpp_inheritance_33',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with const member functions.',
  mathSolution: 'const member functions can be overridden with const versions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void display() const {\n        cout << "Base const display" << endl;\n    }\n    \n    virtual void modify() {\n        cout << "Base modify" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void display() const override {\n        cout << "Derived const display" << endl;\n    }\n    \n    void modify() override {\n        cout << "Derived modify" << endl;\n    }\n};\n\nvoid process(const Base& obj) {\n    obj.display();  // Calls const version\n    // obj.modify();  // Error: cannot call non-const on const object\n}\n\nint main() {\n    Derived d;\n    const Base& ref = d;\n    \n    ref.display();  // Calls Derived::display (const version)\n    \n    process(d);\n    \n    return 0;\n}',
  hint: 'const-correctness is preserved in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_34',
  topicId: 'cpp_inheritance',
  question: 'Create polymorphic container with clone pattern (virtual copy constructor).',
  mathSolution: 'Implement virtual clone method for polymorphic copying.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() const = 0;\n    virtual void draw() const = 0;\n    virtual unique_ptr<Shape> clone() const = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() const override {\n        cout << "Circle (r=" << radius << ")" << endl;\n    }\n    \n    unique_ptr<Shape> clone() const override {\n        return make_unique<Circle>(*this);\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() const override {\n        return width * height;\n    }\n    \n    void draw() const override {\n        cout << "Rectangle (" << width << "x" << height << ")" << endl;\n    }\n    \n    unique_ptr<Shape> clone() const override {\n        return make_unique<Rectangle>(*this);\n    }\n};\n\nclass ShapeCollection {\nprivate:\n    vector<unique_ptr<Shape>> shapes;\n    \npublic:\n    void add(unique_ptr<Shape> shape) {\n        shapes.push_back(move(shape));\n    }\n    \n    ShapeCollection clone() const {\n        ShapeCollection newCollection;\n        for (const auto& shape : shapes) {\n            newCollection.add(shape->clone());\n        }\n        return newCollection;\n    }\n    \n    void drawAll() const {\n        for (const auto& shape : shapes) {\n            shape->draw();\n        }\n    }\n};\n\nint main() {\n    ShapeCollection collection;\n    collection.add(make_unique<Circle>(5));\n    collection.add(make_unique<Rectangle>(4, 6));\n    collection.add(make_unique<Circle>(3));\n    \n    ShapeCollection copy = collection.clone();\n    \n    cout << "Original:\\n\";\n    collection.drawAll();\n    \n    cout << "\\nCopy:\\n\";\n    copy.drawAll();\n    \n    return 0;\n}',
  hint: 'Virtual clone method provides deep copying for polymorphic objects.'
},
{
  id: 'cpp_inheritance_35',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with std::variant for discriminated unions.',
  mathSolution: 'std::variant can hold any type from a set, including derived classes.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <vector>\nusing namespace std;\n\nclass ShapeBase {\npublic:\n    virtual void draw() const = 0;\n    virtual ~ShapeBase() {}\n};\n\nclass Circle : public ShapeBase {\npublic:\n    void draw() const override { cout << "O\"; }\n};\n\nclass Square : public ShapeBase {\npublic:\n    void draw() const override { cout << \"[]\"; }\n};\n\nclass Triangle : public ShapeBase {\npublic:\n    void draw() const override { cout << \"/\\\\\\\"; }\n};\n\nint main() {\n    vector<variant<Circle, Square, Triangle>> shapes;\n    \n    shapes.push_back(Circle());\n    shapes.push_back(Square());\n    shapes.push_back(Triangle());\n    shapes.push_back(Circle());\n    \n    for (const auto& shape : shapes) {\n        visit([](const auto& s) { s.draw(); }, shape);\n        cout << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'std::variant provides type-safe union of inherited types.'
},
{
  id: 'cpp_inheritance_36',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with thread_local storage.',
  mathSolution: 'thread_local variables can be inherited and have separate instances per thread.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <vector>\nusing namespace std;\n\nclass Counter {\nprotected:\n    static thread_local int count;\n    \npublic:\n    void increment() { count++; }\n    int getCount() const { return count; }\n};\n\nthread_local int Counter::count = 0;\n\nclass DerivedCounter : public Counter {\npublic:\n    void decrement() { count--; }\n};\n\nvoid threadFunction(int id, int increments) {\n    DerivedCounter dc;\n    for (int i = 0; i < increments; i++) {\n        dc.increment();\n    }\n    cout << \"Thread \" << id << \" count: \" << dc.getCount() << endl;\n}\n\nint main() {\n    vector<thread> threads;\n    \n    for (int i = 0; i < 5; i++) {\n        threads.emplace_back(threadFunction, i, 1000);\n    }\n    \n    for (auto& t : threads) {\n        t.join();\n    }\n    \n    DerivedCounter mainCounter;\n    mainCounter.increment();\n    cout << \"Main thread count: \" << mainCounter.getCount() << endl;\n    \n    return 0;\n}',
  hint: 'thread_local storage is per-thread, even in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_37',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with alignas and alignment specifiers.',
  mathSolution: 'Alignment specifiers can be inherited and affect derived class layout.',
  codeSolution: '#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nstruct alignas(64) CacheAligned {\n    int data;\n    char padding;\n};\n\nstruct CacheAlignedDerived : public CacheAligned {\n    int moreData;\n};\n\nstruct Normal {\n    int data;\n    char padding;\n};\n\nint main() {\n    cout << "Alignment of CacheAligned: \" << alignof(CacheAligned) << endl;\n    cout << \"Size of CacheAligned: \" << sizeof(CacheAligned) << endl;\n    \n    cout << \"Alignment of CacheAlignedDerived: \" << alignof(CacheAlignedDerived) << endl;\n    cout << \"Size of CacheAlignedDerived: \" << sizeof(CacheAlignedDerived) << endl;\n    \n    cout << \"Alignment of Normal: \" << alignof(Normal) << endl;\n    cout << \"Size of Normal: \" << sizeof(Normal) << endl;\n    \n    return 0;\n}',
  hint: 'Alignment is inherited and can affect derived class memory layout.'
},
{
  id: 'cpp_inheritance_38',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with [[no_unique_address]] attribute (C++20).',
  mathSolution: '[[no_unique_address]] allows empty base optimization.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Empty {\n    // Empty class\n};\n\nclass EmptyBaseOptimized : private Empty {\n    int data;\n};\n\nclass NoEmptyBaseOptimization {\n    Empty e;\n    int data;\n};\n\nclass EmptyWithAttribute {\n    // Empty with attribute\n};\n\nclass Optimized : private EmptyWithAttribute {\n    [[no_unique_address]] EmptyWithAttribute e2;\n    int data;\n};\n\nint main() {\n    cout << "Size of Empty: \" << sizeof(Empty) << endl;\n    cout << \"Size with empty base optimization: \" << sizeof(EmptyBaseOptimized) << endl;\n    cout << \"Size without optimization: \" << sizeof(NoEmptyBaseOptimization) << endl;\n    \n    return 0;\n}',
  hint: 'Empty base optimization (EBO) reduces memory usage for classes with empty base classes.'
},
{
  id: 'cpp_inheritance_39',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with std::enable_shared_from_this.',
  mathSolution: 'Enable shared_from_this to get shared_ptr from this pointer in derived classes.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Widget : public enable_shared_from_this<Widget> {\npublic:\n    virtual void process() {\n        cout << "Processing widget" << endl;\n    }\n    \n    shared_ptr<Widget> getShared() {\n        return shared_from_this();\n    }\n};\n\nclass Button : public Widget {\npublic:\n    void process() override {\n        cout << "Processing button" << endl;\n    }\n    \n    void click() {\n        auto self = shared_from_this();\n        cout << "Button clicked, ref count: \" << self.use_count() << endl;\n    }\n};\n\nint main() {\n    auto button = make_shared<Button>();\n    button->click();\n    button->process();\n    \n    auto widget = button->getShared();\n    widget->process();\n    \n    return 0;\n}',
  hint: 'enable_shared_from_this works correctly with inheritance when base provides it.'
},
{
  id: 'cpp_inheritance_40',
  topicId: 'cpp_inheritance',
  question: 'Create polymorphic iterator using inheritance.',
  mathSolution: 'Inheritance can create type-erased iterators for heterogeneous containers.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass IteratorBase {\npublic:\n    virtual void next() = 0;\n    virtual bool done() const = 0;\n    virtual int current() const = 0;\n    virtual ~IteratorBase() {}\n};\n\ntemplate<typename T>\nclass VectorIterator : public IteratorBase {\nprivate:\n    const vector<T>& vec;\n    size_t index;\n    \npublic:\n    VectorIterator(const vector<T>& v) : vec(v), index(0) {}\n    \n    void next() override { index++; }\n    bool done() const override { return index >= vec.size(); }\n    int current() const override { return vec[index]; }\n};\n\nclass Container {\nprivate:\n    vector<int> data;\n    \npublic:\n    void add(int val) { data.push_back(val); }\n    \n    unique_ptr<IteratorBase> createIterator() const {\n        return make_unique<VectorIterator<int>>(data);\n    }\n};\n\nint main() {\n    Container c;\n    c.add(10);\n    c.add(20);\n    c.add(30);\n    c.add(40);\n    \n    auto it = c.createIterator();\n    while (!it->done()) {\n        cout << it->current() << " \";\n        it->next();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Polymorphic iterators enable generic iteration over different container types.'
},
{
  "id": "cpp_inheritance_41",
  "topicId": "cpp_inheritance",
  "question": "Use inheritance with virtual functions and default arguments.",
  "mathSolution": "Default arguments are statically bound, not dynamically with virtual functions.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show(int x = 10) {\n        cout << \"Base show: \" << x << endl;\n    }\n    virtual ~Base() {}\n};\n\nclass Derived : public Base {\npublic:\n    void show(int x = 20) override {\n        cout << \"Derived show: \" << x << endl;\n    }\n};\n\nint main() {\n    Base* b = new Derived();\n    b->show();  // Uses Base's default argument (10) but Derived's function body\n    \n    Derived* d = new Derived();\n    d->show();  // Uses Derived's default argument (20)\n    \n    Base* b2 = new Base();\n    b2->show();  // Uses Base's default argument (10)\n    \n    delete b;\n    delete d;\n    delete b2;\n    \n    return 0;\n}",
  "hint": "Default arguments are resolved at compile time based on static type, not dynamic type."
},
{
  id: 'cpp_inheritance_42',
  topicId: 'cpp_inheritance',
  question: 'Demonstrate inheritance with virtual function call in constructor/destructor.',
  mathSolution: 'Virtual functions in constructor/destructor call the current class version, not derived.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() {\n        cout << "Base constructor" << endl;\n        display();  // Calls Base::display, not Derived\n    }\n    \n    virtual void display() {\n        cout << "Base display" << endl;\n    }\n    \n    ~Base() {\n        cout << "Base destructor" << endl;\n        display();  // Calls Base::display\n    }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() {\n        cout << "Derived constructor" << endl;\n    }\n    \n    void display() override {\n        cout << "Derived display" << endl;\n    }\n    \n    ~Derived() {\n        cout << "Derived destructor" << endl;\n    }\n};\n\nint main() {\n    Derived d;\n    return 0;\n}',
  hint: 'Virtual functions do not work polymorphically in constructors and destructors.'
},
{
  id: 'cpp_inheritance_43',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with CRTP for static polymorphism in numeric types.',
  mathSolution: 'CRTP provides compile-time polymorphism for numeric operations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass VectorBase {\npublic:\n    Derived operator+(const Derived& other) const {\n        Derived result = static_cast<const Derived&>(*this);\n        const Derived& derived = static_cast<const Derived&>(*this);\n        for (size_t i = 0; i < derived.size(); i++) {\n            result[i] = derived[i] + other[i];\n        }\n        return result;\n    }\n    \n    Derived operator*(double scalar) const {\n        Derived result = static_cast<const Derived&>(*this);\n        const Derived& derived = static_cast<const Derived&>(*this);\n        for (size_t i = 0; i < derived.size(); i++) {\n            result[i] = derived[i] * scalar;\n        }\n        return result;\n    }\n};\n\nclass Vector3D : public VectorBase<Vector3D> {\nprivate:\n    double data[3];\n    \npublic:\n    Vector3D(double x = 0, double y = 0, double z = 0) {\n        data[0] = x; data[1] = y; data[2] = z;\n    }\n    \n    double& operator[](size_t i) { return data[i]; }\n    const double& operator[](size_t i) const { return data[i]; }\n    \n    size_t size() const { return 3; }\n    \n    void display() const {\n        cout << \"(\" << data[0] << \", \" << data[1] << \", \" << data[2] << \")\" << endl;\n    }\n};\n\nint main() {\n    Vector3D v1(1, 2, 3);\n    Vector3D v2(4, 5, 6);\n    \n    Vector3D v3 = v1 + v2;\n    Vector3D v4 = v1 * 2.5;\n    \n    v3.display();\n    v4.display();\n    \n    return 0;\n}',
  hint: 'CRTP in numeric types enables operator overloading without virtual overhead.'
},
{
  id: 'cpp_inheritance_44',
  topicId: 'cpp_inheritance',
  question: 'Create interface classes using multiple inheritance.',
  mathSolution: 'Abstract base classes define interfaces that derived classes implement.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Clickable {\npublic:\n    virtual void onClick() = 0;\n    virtual ~Clickable() {}\n};\n\nclass Hoverable {\npublic:\n    virtual void onHover() = 0;\n    virtual ~Hoverable() {}\n};\n\nclass Button : public Drawable, public Clickable, public Hoverable {\nprivate:\n    string text;\n    \npublic:\n    Button(string t) : text(t) {}\n    \n    void draw() override {\n        cout << \"Drawing Button: \" << text << endl;\n    }\n    \n    void onClick() override {\n        cout << \"Button clicked: \" << text << endl;\n    }\n    \n    void onHover() override {\n        cout << \"Button hovered: \" << text << endl;\n    }\n};\n\nvoid render(Drawable& d) { d.draw(); }\nvoid handleClick(Clickable& c) { c.onClick(); }\n\nint main() {\n    Button btn(\"Submit\");\n    \n    render(btn);\n    handleClick(btn);\n    btn.onHover();\n    \n    return 0;\n}',
  hint: 'Multiple interface inheritance is a common design pattern in C++.'
},
{
  id: 'cpp_inheritance_45',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with static_assert for compile-time constraints.',
  mathSolution: 'static_assert ensures derived classes meet requirements at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename Derived>\nclass ShapeBase {\npublic:\n    void draw() {\n        static_assert(is_same<decltype(static_cast<Derived*>(this)->drawImpl()), void>::value,\n                      "Derived class must implement drawImpl()");\n        static_cast<Derived*>(this)->drawImpl();\n    }\n    \n    double area() {\n        static_assert(is_convertible<decltype(static_cast<Derived*>(this)->areaImpl()), double>::value,\n                      "areaImpl() must return double");\n        return static_cast<Derived*>(this)->areaImpl();\n    }\n};\n\nclass Circle : public ShapeBase<Circle> {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    void drawImpl() {\n        cout << "Drawing circle" << endl;\n    }\n    \n    double areaImpl() {\n        return 3.14159 * radius * radius;\n    }\n};\n\nclass Rectangle : public ShapeBase<Rectangle> {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    void drawImpl() {\n        cout << "Drawing rectangle" << endl;\n    }\n    \n    double areaImpl() {\n        return width * height;\n    }\n};\n\nint main() {\n    Circle c(5);\n    Rectangle r(4, 6);\n    \n    c.draw();\n    cout << "Area: " << c.area() << endl;\n    \n    r.draw();\n    cout << "Area: " << r.area() << endl;\n    \n    return 0;\n}',
  hint: 'static_assert in base templates can enforce derived class contracts at compile time.'
},
{
  id: 'cpp_inheritance_46',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with [[nodiscard]] attribute.',
  mathSolution: '[[nodiscard]] can be inherited and applied to virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Resource {\npublic:\n    [[nodiscard]] virtual bool isAllocated() const {\n        return false;\n    }\n    \n    virtual ~Resource() {}\n};\n\nclass FileResource : public Resource {\npublic:\n    [[nodiscard]] bool isAllocated() const override {\n        return true;\n    }\n};\n\n[[nodiscard]] Resource* createResource() {\n    return new FileResource();\n}\n\nint main() {\n    FileResource fr;\n    \n    // fr.isAllocated();  // Warning: [[nodiscard]] ignored\n    bool allocated = fr.isAllocated();  // OK\n    cout << "Allocated: " << allocated << endl;\n    \n    // createResource();  // Warning: [[nodiscard]] ignored\n    Resource* res = createResource();  // OK\n    delete res;\n    \n    return 0;\n}',
  hint: '[[nodiscard]] attribute helps prevent ignoring important return values in inheritance.'
},
{
  id: 'cpp_inheritance_47',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with consteval and constinit specifiers (C++20).',
  mathSolution: 'consteval functions in base classes can be overridden with consteval.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass MathConstants {\npublic:\n    consteval virtual double getPi() const {\n        return 3.14159;\n    }\n    \n    consteval virtual double getE() const {\n        return 2.71828;\n    }\n};\n\nclass AdvancedMath : public MathConstants {\npublic:\n    consteval double getPi() const override {\n        return 3.141592653589793;\n    }\n    \n    consteval double getE() const override {\n        return 2.718281828459045;\n    }\n};\n\nint main() {\n    constexpr AdvancedMath math;\n    constexpr double pi = math.getPi();\n    constexpr double e = math.getE();\n    \n    cout << "Pi: \" << pi << endl;\n    cout << \"E: \" << e << endl;\n    \n    return 0;\n}',
  hint: 'consteval functions enforce compile-time evaluation in inheritance hierarchies.'
},
{
  id: 'cpp_inheritance_48',
  topicId: 'cpp_inheritance',
  question: 'Create polymorphic value type using std::any with inheritance.',
  mathSolution: 'std::any can store any type, including polymorphic objects.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\npublic:\n    void draw() const override { cout << "○\"; }\n};\n\nclass Square : public Drawable {\npublic:\n    void draw() const override { cout << \"□\"; }\n};\n\nclass Triangle : public Drawable {\npublic:\n    void draw() const override { cout << \"▲\"; }\n};\n\nint main() {\n    vector<any> shapes;\n    shapes.push_back(Circle());\n    shapes.push_back(Square());\n    shapes.push_back(Triangle());\n    shapes.push_back(Circle());\n    \n    for (const auto& shape : shapes) {\n        if (const auto* c = any_cast<Circle>(&shape)) {\n            c->draw();\n        } else if (const auto* s = any_cast<Square>(&shape)) {\n            s->draw();\n        } else if (const auto* t = any_cast<Triangle>(&shape)) {\n            t->draw();\n        }\n        cout << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'std::any with inheritance provides type-erased polymorphic containers.'
},
{
  id: 'cpp_inheritance_49',
  topicId: 'cpp_inheritance',
  question: 'Use inheritance with source_location (C++20) for logging.',
  mathSolution: 'source_location captures file, line, function names in inheritance.',
  codeSolution: '#include <iostream>\n#include <source_location>\nusing namespace std;\n\nclass Logger {\nprotected:\n    void log(const string& msg, \n             const source_location& location = source_location::current()) {\n        cout << location.file_name() << \":\" << location.line()\n             << \" \" << location.function_name() << endl;\n        cout << \"  \" << msg << endl;\n    }\n};\n\nclass DatabaseLogger : public Logger {\npublic:\n    void connect() {\n        log(\"Connecting to database\");\n        // Connection logic\n    }\n    \n    void query(const string& sql) {\n        log(\"Executing: \" + sql);\n        // Query logic\n    }\n};\n\nclass FileLogger : public Logger {\npublic:\n    void write(const string& data) {\n        log(\"Writing: \" + data);\n    }\n};\n\nint main() {\n    DatabaseLogger dbLogger;\n    dbLogger.connect();\n    dbLogger.query(\"SELECT * FROM users\");\n    \n    FileLogger fileLogger;\n    fileLogger.write(\"Important data\");\n    \n    return 0;\n}',
  hint: 'source_location provides accurate call information in logging frameworks.'
},
{
  id: 'cpp_inheritance_50',
  topicId: 'cpp_inheritance',
  question: 'Create comprehensive inheritance demonstration program.',
  mathSolution: 'Combine multiple inheritance concepts in a complete example.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\n#include <typeinfo>\nusing namespace std;\n\n// Base interface\nclass Shape {\nprotected:\n    string color;\n    \npublic:\n    Shape(const string& c) : color(c) {}\n    virtual ~Shape() {}\n    virtual double area() const = 0;\n    virtual double perimeter() const = 0;\n    virtual void draw() const = 0;\n    virtual void info() const {\n        cout << \"Color: \" << color << endl;\n    }\n    \n    string getColor() const { return color; }\n};\n\n// Derived class 1\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(const string& c, double r) : Shape(c), radius(r) {}\n    \n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    double perimeter() const override {\n        return 2 * 3.14159 * radius;\n    }\n    \n    void draw() const override {\n        cout << \"○\";\n    }\n    \n    void info() const override {\n        Shape::info();\n        cout << \"Radius: \" << radius << endl;\n    }\n};\n\n// Derived class 2\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(const string& c, double w, double h) : Shape(c), width(w), height(h) {}\n    \n    double area() const override {\n        return width * height;\n    }\n    \n    double perimeter() const override {\n        return 2 * (width + height);\n    }\n    \n    void draw() const override {\n        cout << \"□\";\n    }\n    \n    void info() const override {\n        Shape::info();\n        cout << \"Dimensions: \" << width << \"x\" << height << endl;\n    }\n};\n\n// Template container using inheritance\nclass ShapeContainer {\nprivate:\n    vector<unique_ptr<Shape>> shapes;\n    \npublic:\n    void add(unique_ptr<Shape> shape) {\n        shapes.push_back(move(shape));\n    }\n    \n    void drawAll() const {\n        for (const auto& s : shapes) {\n            s->draw();\n            cout << \" \";\n        }\n        cout << endl;\n    }\n    \n    double totalArea() const {\n        double total = 0;\n        for (const auto& s : shapes) {\n            total += s->area();\n        }\n        return total;\n    }\n    \n    void printInfo() const {\n        for (const auto& s : shapes) {\n            cout << typeid(*s).name() << \":\" << endl;\n            s->info();\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    cout << \"=== Comprehensive Inheritance Demo ===\\n\\n\";\n    \n    ShapeContainer container;\n    container.add(make_unique<Circle>(\"red\", 5));\n    container.add(make_unique<Rectangle>(\"blue\", 4, 6));\n    container.add(make_unique<Circle>(\"green\", 3));\n    container.add(make_unique<Rectangle>(\"yellow\", 2, 3));\n    \n    cout << \"Shapes: \";\n    container.drawAll();\n    \n    cout << \"\\nTotal area: \" << container.totalArea() << endl;\n    \n    cout << \"\\nDetails:\\n\";\n    container.printInfo();\n    \n    cout << \"\\n=== Concepts Demonstrated ===\" << endl;\n    cout << \"1. Base class with pure virtual functions (abstraction)\" << endl;\n    cout << \"2. Derived classes implementing virtual functions\" << endl;\n    cout << \"3. Protected members for inheritance\" << endl;\n    cout << \"4. Virtual destructor for proper cleanup\" << endl;\n    cout << \"5. Polymorphic containers using base pointers\" << endl;\n    cout << \"6. Runtime type information with typeid\" << endl;\n    cout << \"7. Smart pointers with inheritance\" << endl;\n    \n    return 0;\n}',
  hint: 'This comprehensive example demonstrates multiple inheritance concepts in one program.'
},
//polymorphism

 { id: 'cpp_polymorphism_1',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate compile-time polymorphism using function overloading.',
  mathSolution: 'Function overloading allows multiple functions with same name but different parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nvoid display(int x) {\n    cout << "Integer: " << x << endl;\n}\n\nvoid display(double x) {\n    cout << "Double: " << x << endl;\n}\n\nvoid display(string x) {\n    cout << "String: " << x << endl;\n}\n\nint main() {\n    display(10);\n    display(3.14);\n    display("Hello");\n    return 0;\n}',
  hint: 'Function overloading is resolved at compile time based on arguments.'
},
{
  id: 'cpp_polymorphism_2',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate compile-time polymorphism using operator overloading.',
  mathSolution: 'Operator overloading allows custom types to use operators.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real, imag;\n    \npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    Complex c3 = c1 + c2;\n    Complex c4 = c1 - c2;\n    \n    c3.display();\n    c4.display();\n    \n    return 0;\n}',
  hint: 'Operator overloading allows intuitive syntax for user-defined types.'
},
{
  id: 'cpp_polymorphism_3',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate compile-time polymorphism using templates.',
  mathSolution: 'Templates allow generic code that works with any data type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\ntemplate<typename T>\nclass Stack {\nprivate:\n    static const int MAX = 100;\n    T arr[MAX];\n    int top;\n    \npublic:\n    Stack() : top(-1) {}\n    void push(T val) { if (top < MAX - 1) arr[++top] = val; }\n    T pop() { if (top >= 0) return arr[top--]; return T(); }\n};\n\nint main() {\n    cout << max(5, 3) << endl;\n    cout << max(5.5, 3.2) << endl;\n    \n    Stack<int> intStack;\n    intStack.push(10);\n    \n    Stack<string> stringStack;\n    stringStack.push("Hello");\n    \n    return 0;\n}',
  hint: 'Templates provide polymorphism at compile time.'
},
{
  id: 'cpp_polymorphism_4',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate runtime polymorphism using virtual functions.',
  mathSolution: 'Virtual functions allow overriding and dynamic dispatch at runtime.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void speak() {\n        cout << "Animal speaks" << endl;\n    }\n    \n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override {\n        cout << "Dog barks: Woof!" << endl;\n    }\n};\n\nclass Cat : public Animal {\npublic:\n    void speak() override {\n        cout << "Cat meows: Meow!" << endl;\n    }\n};\n\nint main() {\n    Animal* animals[] = {new Dog(), new Cat(), new Dog()};\n    \n    for (Animal* a : animals) {\n        a->speak();\n        delete a;\n    }\n    \n    return 0;\n}',
  hint: 'Virtual functions enable polymorphic behavior in inheritance hierarchies.'
},
{
  id: 'cpp_polymorphism_5',
  topicId: 'cpp_polymorphism',
  question: 'Use override specifier to ensure correct overriding.',
  mathSolution: 'override keyword catches signature mismatches at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void func1() { cout << "Base func1" << endl; }\n    virtual void func2(int x) { cout << "Base func2: " << x << endl; }\n    virtual void func3() const { cout << "Base func3" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    void func1() override {\n        cout << "Derived func1" << endl;\n    }\n    \n    void func2(int x) override {\n        cout << "Derived func2: " << x * 2 << endl;\n    }\n    \n    // void func3() override { }  // Error: signature mismatch (missing const)\n    \n    void func3() const override {\n        cout << "Derived func3" << endl;\n    }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    ptr->func1();\n    ptr->func2(5);\n    ptr->func3();\n    delete ptr;\n    \n    return 0;\n}',
  hint: 'override helps catch errors when base class virtual function signatures change.'
},
{
  id: 'cpp_polymorphism_6',
  topicId: 'cpp_polymorphism',
  question: 'Use final specifier to prevent further overriding.',
  mathSolution: 'final prevents derived classes from overriding virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void process() {\n        cout << "Base process" << endl;\n    }\n    \n    virtual void finalize() final {\n        cout << "Base finalize - cannot be overridden" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void process() override {\n        cout << "Derived process" << endl;\n    }\n    \n    // void finalize() override { }  // Error: final function cannot be overridden\n};\n\nclass FinalClass final : public Derived {\npublic:\n    void process() override {\n        cout << "FinalClass process" << endl;\n    }\n};\n\n// class Further : public FinalClass { };  // Error: FinalClass is final\n\nint main() {\n    FinalClass obj;\n    obj.process();\n    obj.finalize();\n    \n    return 0;\n}',
  hint: 'final provides strong guarantees in class hierarchies.'
},
{
  id: 'cpp_polymorphism_7',
  topicId: 'cpp_polymorphism',
  question: 'Use virtual destructors for proper cleanup in polymorphism.',
  mathSolution: 'Virtual destructors ensure derived destructors are called when deleting base pointers.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    virtual ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\nprivate:\n    int* data;\n    \npublic:\n    Derived() {\n        data = new int[100];\n        cout << "Derived constructor, allocated memory" << endl;\n    }\n    \n    ~Derived() {\n        delete[] data;\n        cout << "Derived destructor, freed memory" << endl;\n    }\n};\n\nclass NonVirtual {\npublic:\n    ~NonVirtual() { cout << "NonVirtual destructor" << endl; }\n};\n\nclass Leaky : public NonVirtual {\nprivate:\n    int* leak;\n    \npublic:\n    Leaky() { leak = new int[100]; cout << "Leaky constructor" << endl; }\n    ~Leaky() { delete[] leak; cout << "Leaky destructor" << endl; }\n};\n\nint main() {\n    cout << "With virtual destructor:\\n";\n    Base* ptr = new Derived();\n    delete ptr;\n    \n    cout << "\\nWithout virtual destructor:\\n";\n    NonVirtual* leaky = new Leaky();\n    delete leaky;  // Memory leak!\n    \n    return 0;\n}',
  hint: 'Always make destructors virtual in polymorphic base classes.'
},
{
  id: 'cpp_polymorphism_8',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate pure virtual functions (abstract classes).',
  mathSolution: 'Pure virtual functions make classes abstract, cannot instantiate.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual double perimeter() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    double perimeter() override {\n        return 2 * 3.14159 * radius;\n    }\n    \n    void draw() override {\n        cout << "Drawing circle" << endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double area() override {\n        return width * height;\n    }\n    \n    double perimeter() override {\n        return 2 * (width + height);\n    }\n    \n    void draw() override {\n        cout << "Drawing rectangle" << endl;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    \n    Shape* shapes[] = {new Circle(5), new Rectangle(4, 6)};\n    \n    for (Shape* s : shapes) {\n        cout << "Area: " << s->area() << endl;\n        cout << "Perimeter: " << s->perimeter() << endl;\n        s->draw();\n        delete s;\n    }\n    \n    return 0;\n}',
  hint: 'Pure virtual functions define interfaces that derived classes must implement.'
},
{
  id: 'cpp_polymorphism_9',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate virtual function call in constructors and destructors.',
  mathSolution: 'Virtual functions in constructor/destructor call current class version, not derived.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() {\n        cout << "Base constructor" << endl;\n        display();  // Calls Base::display\n    }\n    \n    virtual void display() {\n        cout << "Base display" << endl;\n    }\n    \n    virtual ~Base() {\n        cout << "Base destructor" << endl;\n        display();  // Calls Base::display\n    }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() {\n        cout << "Derived constructor" << endl;\n    }\n    \n    void display() override {\n        cout << "Derived display" << endl;\n    }\n    \n    ~Derived() {\n        cout << "Derived destructor" << endl;\n    }\n};\n\nint main() {\n    Derived d;\n    return 0;\n}',
  hint: 'Virtual functions do not work polymorphically in constructors and destructors.'
},
{
  id: 'cpp_polymorphism_10',
  topicId: 'cpp_polymorphism',
  question: 'Use dynamic_cast for safe downcasting.',
  mathSolution: 'dynamic_cast safely converts base pointer to derived pointer.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() { cout << "Animal sound" << endl; }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << "Woof!" << endl; }\n    void fetch() { cout << "Dog fetches ball" << endl; }\n};\n\nclass Cat : public Animal {\npublic:\n    void sound() override { cout << "Meow!" << endl; }\n    void climb() { cout << "Cat climbs tree" << endl; }\n};\n\nint main() {\n    Animal* animals[] = {new Dog(), new Cat(), new Dog()};\n    \n    for (Animal* a : animals) {\n        a->sound();\n        \n        if (Dog* dog = dynamic_cast<Dog*>(a)) {\n            dog->fetch();\n        }\n        \n        if (Cat* cat = dynamic_cast<Cat*>(a)) {\n            cat->climb();\n        }\n        \n        delete a;\n    }\n    \n    // Reference downcasting\n    Dog d;\n    Animal& animalRef = d;\n    \n    try {\n        Dog& dogRef = dynamic_cast<Dog&>(animalRef);\n        dogRef.fetch();\n    } catch (const bad_cast& e) {\n        cout << "Bad cast: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'dynamic_cast requires at least one virtual function in base class.'
},
{
  "id": "cpp_polymorphism_11",
  "topicId": "cpp_polymorphism",
  "question": "Use typeid for runtime type identification.",
  "mathSolution": "typeid returns type_info for polymorphic objects at runtime.",
  "codeSolution": "#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void func() {}\n    virtual ~Base() {}\n};\n\nclass Derived1 : public Base {};\nclass Derived2 : public Base {};\n\nvoid printType(Base* ptr) {\n    cout << \"Type: \" << typeid(*ptr).name() << endl;\n    \n    if (typeid(*ptr) == typeid(Derived1)) {\n        cout << \"  It's a Derived1 object\" << endl;\n    } else if (typeid(*ptr) == typeid(Derived2)) {\n        cout << \"  It's a Derived2 object\" << endl;\n    } else {\n        cout << \"  It's a Base object\" << endl;\n    }\n}\n\nint main() {\n    Base* b1 = new Base();\n    Base* d1 = new Derived1();\n    Base* d2 = new Derived2();\n    \n    printType(b1);\n    printType(d1);\n    printType(d2);\n    \n    // Compare types\n    if (typeid(*d1) == typeid(*d2)) {\n        cout << \"Same type\" << endl;\n    } else {\n        cout << \"Different types\" << endl;\n    }\n    \n    delete b1;\n    delete d1;\n    delete d2;\n    \n    return 0;\n}",
  "hint": "typeid works with polymorphic types to get dynamic type information."
},
{
  "id": "cpp_polymorphism_12",
  "topicId": "cpp_polymorphism",
  "question": "Demonstrate virtual function with default arguments.",
  "mathSolution": "Default arguments are statically bound, not dynamically with virtual functions.",
  "codeSolution": "#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show(int x = 10) {\n        cout << \"Base show: \" << x << endl;\n    }\n    virtual ~Base() {}\n};\n\nclass Derived : public Base {\npublic:\n    void show(int x = 20) override {\n        cout << \"Derived show: \" << x << endl;\n    }\n};\n\nint main() {\n    Base* b = new Derived();\n    b->show();  // Uses Base's default argument (10) but Derived's function body\n    \n    Derived* d = new Derived();\n    d->show();  // Uses Derived's default argument (20)\n    \n    delete b;\n    delete d;\n    \n    return 0;\n}",
  "hint": "Default arguments are resolved at compile time based on static type, not dynamic type."
},
{
  id: 'cpp_polymorphism_13',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate virtual functions in multiple inheritance.',
  mathSolution: 'Virtual functions work correctly in multiple inheritance hierarchies.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Clickable {\npublic:\n    virtual void onClick() = 0;\n    virtual ~Clickable() {}\n};\n\nclass Button : public Drawable, public Clickable {\nprivate:\n    string label;\n    \npublic:\n    Button(string lbl) : label(lbl) {}\n    \n    void draw() override {\n        cout << "Drawing button: " << label << endl;\n    }\n    \n    void onClick() override {\n        cout << "Button clicked: " << label << endl;\n    }\n};\n\nint main() {\n    Drawable* d = new Button("OK");\n    Clickable* c = new Button("Cancel");\n    \n    d->draw();\n    c->onClick();\n    \n    delete d;\n    delete c;\n    \n    return 0;\n}',
  hint: 'Virtual functions work consistently across multiple inheritance hierarchies.'
},
{
  id: 'cpp_polymorphism_14',
  topicId: 'cpp_polymorphism',
  question: 'Use virtual inheritance to solve diamond problem.',
  mathSolution: 'Virtual inheritance ensures single instance of grandparent class.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Animal {\nprotected:\n    string name;\n    \npublic:\n    Animal() { cout << "Animal constructor" << endl; }\n    virtual void speak() { cout << "Animal speaks" << endl; }\n};\n\nclass Mammal : virtual public Animal {\npublic:\n    Mammal() { cout << "Mammal constructor" << endl; }\n};\n\nclass Bird : virtual public Animal {\npublic:\n    Bird() { cout << "Bird constructor" << endl; }\n};\n\nclass Bat : public Mammal, public Bird {\npublic:\n    Bat() { cout << "Bat constructor" << endl; }\n    \n    void speak() override {\n        cout << "Bat squeaks" << endl;\n    }\n};\n\nint main() {\n    Bat bat;\n    bat.speak();  // No ambiguity\n    \n    return 0;\n}',
  hint: 'Virtual inheritance solves diamond problem by sharing a single base instance.'
},
{
  id: 'cpp_polymorphism_15',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate CRTP (Curiously Recurring Template Pattern) for static polymorphism.',
  mathSolution: 'CRTP provides compile-time polymorphism without virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Shape {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->drawImpl();\n    }\n    \n    double area() {\n        return static_cast<Derived*>(this)->areaImpl();\n    }\n};\n\nclass Circle : public Shape<Circle> {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    \n    void drawImpl() {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n    \n    double areaImpl() {\n        return 3.14159 * radius * radius;\n    }\n};\n\nclass Rectangle : public Shape<Rectangle> {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    void drawImpl() {\n        cout << "Drawing rectangle " << width << "x" << height << endl;\n    }\n    \n    double areaImpl() {\n        return width * height;\n    }\n};\n\ntemplate<typename T>\nvoid render(Shape<T>& shape) {\n    shape.draw();\n    cout << "Area: " << shape.area() << endl;\n}\n\nint main() {\n    Circle c(5);\n    Rectangle r(4, 6);\n    \n    render(c);\n    render(r);\n    \n    return 0;\n}',
  hint: 'CRTP achieves compile-time polymorphism without virtual function overhead.'
},
{
  id: 'cpp_polymorphism_16',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphic lambda with auto parameters (C++14).',
  mathSolution: 'Lambda with auto parameters can work with polymorphic types.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\npublic:\n    void draw() const override { cout << "○"; }\n};\n\nclass Square : public Drawable {\npublic:\n    void draw() const override { cout << "□"; }\n};\n\nint main() {\n    vector<Drawable*> shapes = {new Circle(), new Square(), new Circle()};\n    \n    // Polymorphic lambda\n    auto drawAll = [](const vector<Drawable*>& items) {\n        for (auto item : items) {\n            item->draw();\n            cout << " ";\n        }\n        cout << endl;\n    };\n    \n    drawAll(shapes);\n    \n    // Lambda with auto parameter\n    auto process = [](auto&& arg) {\n        arg->draw();\n    };\n    \n    for (auto s : shapes) process(s);\n    cout << endl;\n    \n    for (auto s : shapes) delete s;\n    \n    return 0;\n}',
  hint: 'Lambda with auto parameters can work with polymorphic types like templates.'
},
{
  id: 'cpp_polymorphism_17',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphism with std::variant and std::visit.',
  mathSolution: 'std::variant and std::visit provide type-safe polymorphic behavior.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <vector>\nusing namespace std;\n\nstruct Circle {\n    double radius;\n    void draw() const { cout << "○"; }\n};\n\nstruct Square {\n    double side;\n    void draw() const { cout << "□"; }\n};\n\nstruct Triangle {\n    double base;\n    void draw() const { cout << "▲"; }\n};\n\nint main() {\n    vector<variant<Circle, Square, Triangle>> shapes;\n    shapes.push_back(Circle{5});\n    shapes.push_back(Square{4});\n    shapes.push_back(Triangle{3});\n    shapes.push_back(Circle{2});\n    \n    auto drawer = [](const auto& shape) { shape.draw(); };\n    \n    for (const auto& shape : shapes) {\n        visit(drawer, shape);\n        cout << " ";\n    }\n    cout << endl;\n    \n    // Area calculation\n    auto areaCalc = [](const auto& shape) -> double {\n        if constexpr (is_same_v<decay_t<decltype(shape)>, Circle>) {\n            return 3.14159 * shape.radius * shape.radius;\n        } else if constexpr (is_same_v<decay_t<decltype(shape)>, Square>) {\n            return shape.side * shape.side;\n        } else {\n            return 0.5 * shape.base * shape.base;\n        }\n    };\n    \n    for (const auto& shape : shapes) {\n        cout << "Area: " << visit(areaCalc, shape) << endl;\n    }\n    \n    return 0;\n}',
  hint: 'std::variant with std::visit provides compile-time polymorphic behavior.'
},
{
  id: 'cpp_polymorphism_18',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphism with std::any and type erasure.',
  mathSolution: 'std::any provides type-erased storage for any type.',
  codeSolution: '#include <iostream>\n#include <any>\n#include <vector>\n#include <string>\n#include <typeinfo>\nusing namespace std;\n\nclass DrawableConcept {\npublic:\n    virtual void draw() const = 0;\n    virtual ~DrawableConcept() {}\n};\n\ntemplate<typename T>\nclass DrawableModel : public DrawableConcept {\nprivate:\n    T object;\n    \npublic:\n    DrawableModel(const T& obj) : object(obj) {}\n    \n    void draw() const override {\n        object.draw();\n    }\n};\n\nclass Drawable {\nprivate:\n    unique_ptr<DrawableConcept> pimpl;\n    \npublic:\n    template<typename T>\n    Drawable(T obj) : pimpl(make_unique<DrawableModel<T>>(obj)) {}\n    \n    void draw() const { pimpl->draw(); }\n};\n\nstruct Circle {\n    void draw() const { cout << "○"; }\n};\n\nstruct Square {\n    void draw() const { cout << "□"; }\n};\n\nint main() {\n    vector<Drawable> shapes;\n    shapes.push_back(Circle{});\n    shapes.push_back(Square{});\n    shapes.push_back(Circle{});\n    \n    for (const auto& shape : shapes) {\n        shape.draw();\n        cout << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Type erasure patterns provide runtime polymorphism without inheritance.'
},
{
  id: 'cpp_polymorphism_19',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphism with function pointers and std::function.',
  mathSolution: 'std::function provides polymorphic callable objects.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <vector>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nstruct Multiplier {\n    int factor;\n    int operator()(int x) const { return x * factor; }\n};\n\nint main() {\n    vector<function<int(int, int)>> operations;\n    operations.push_back(add);\n    operations.push_back([](int a, int b) { return a - b; });\n    operations.push_back(multiplies<int>());\n    \n    int x = 10, y = 5;\n    for (const auto& op : operations) {\n        cout << op(x, y) << " ";\n    }\n    cout << endl;\n    \n    // Polymorphic transformation\n    vector<function<int(int)>> transformers;\n    transformers.push_back([](int x) { return x * 2; });\n    transformers.push_back([](int x) { return x * x; });\n    transformers.push_back([](int x) { return x + 10; });\n    \n    int value = 5;\n    for (const auto& t : transformers) {\n        cout << t(value) << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'std::function provides runtime polymorphism for callable objects.'
},
{
  id: 'cpp_polymorphism_20',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphism in exception handling.',
  mathSolution: 'Exceptions can be caught polymorphically using base class references.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <vector>\nusing namespace std;\n\nclass MyException : public exception {\npublic:\n    const char* what() const noexcept override {\n        return "My custom exception";\n    }\n};\n\nclass SpecificError : public MyException {\npublic:\n    const char* what() const noexcept override {\n        return "Specific error occurred";\n    }\n};\n\nvoid riskyFunction(int code) {\n    if (code == 1) {\n        throw runtime_error("Runtime error");\n    } else if (code == 2) {\n        throw logic_error("Logic error");\n    } else if (code == 3) {\n        throw MyException();\n    } else if (code == 4) {\n        throw SpecificError();\n    }\n}\n\nint main() {\n    vector<int> testCodes = {1, 2, 3, 4};\n    \n    for (int code : testCodes) {\n        try {\n            riskyFunction(code);\n        } catch (const SpecificError& e) {\n            cout << "SpecificError caught: " << e.what() << endl;\n        } catch (const MyException& e) {\n            cout << "MyException caught: " << e.what() << endl;\n        } catch (const logic_error& e) {\n            cout << "Logic error: " << e.what() << endl;\n        } catch (const runtime_error& e) {\n            cout << "Runtime error: " << e.what() << endl;\n        } catch (const exception& e) {\n            cout << "Generic exception: " << e.what() << endl;\n        }\n    }\n    \n    return 0;\n}',
  hint: 'Exception handlers can catch polymorphic exception types.'
},
{
  "id": "cpp_polymorphism_21",
  "topicId": "cpp_polymorphism",
  "question": "Use polymorphism with factory pattern.",
  "mathSolution": "Factory creates polymorphic objects based on input parameters.",
  "codeSolution": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ConcreteProductA : public Product {\npublic:\n    void use() override { cout << \"Using Product A\" << endl; }\n};\n\nclass ConcreteProductB : public Product {\npublic:\n    void use() override { cout << \"Using Product B\" << endl; }\n};\n\nclass Factory {\npublic:\n    static unique_ptr<Product> create(char type) {\n        switch(type) {\n            case 'A': return make_unique<ConcreteProductA>();\n            case 'B': return make_unique<ConcreteProductB>();\n            default: return nullptr;\n        }\n    }\n};\n\nint main() {\n    auto productA = Factory::create('A');\n    auto productB = Factory::create('B');\n    \n    if (productA) productA->use();\n    if (productB) productB->use();\n    \n    return 0;\n}",
  "hint": "Factory pattern uses polymorphism to create objects of derived types."
},
{
  id: 'cpp_polymorphism_22',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphic observer pattern (event handling).',
  mathSolution: 'Observers derived from abstract base class can be notified polymorphically.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Observer {\npublic:\n    virtual void update(const string& message) = 0;\n    virtual ~Observer() {}\n};\n\nclass Subject {\nprivate:\n    vector<Observer*> observers;\n    \npublic:\n    void attach(Observer* obs) { observers.push_back(obs); }\n    \n    void notify(const string& message) {\n        for (Observer* obs : observers) {\n            obs->update(message);\n        }\n    }\n};\n\nclass Logger : public Observer {\npublic:\n    void update(const string& message) override {\n        cout << "[LOG] " << message << endl;\n    }\n};\n\nclass UIUpdater : public Observer {\npublic:\n    void update(const string& message) override {\n        cout << "[UI] Refreshing with: " << message << endl;\n    }\n};\n\nclass EmailNotifier : public Observer {\npublic:\n    void update(const string& message) override {\n        cout << "[EMAIL] Sending: " << message << endl;\n    }\n};\n\nint main() {\n    Subject subject;\n    Logger logger;\n    UIUpdater ui;\n    EmailNotifier email;\n    \n    subject.attach(&logger);\n    subject.attach(&ui);\n    subject.attach(&email);\n    \n    subject.notify("Data has been updated!");\n    \n    return 0;\n}',
  hint: 'Observer pattern uses polymorphism to notify multiple observers.'
},
{
  id: 'cpp_polymorphism_23',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphic command pattern.',
  mathSolution: 'Commands derived from abstract base class can be executed polymorphically.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Command {\npublic:\n    virtual void execute() = 0;\n    virtual void undo() = 0;\n    virtual ~Command() {}\n};\n\nclass Light {\npublic:\n    void on() { cout << "Light is ON" << endl; }\n    void off() { cout << "Light is OFF" << endl; }\n};\n\nclass LightOnCommand : public Command {\nprivate:\n    Light* light;\n    \npublic:\n    LightOnCommand(Light* l) : light(l) {}\n    \n    void execute() override { light->on(); }\n    void undo() override { light->off(); }\n};\n\nclass LightOffCommand : public Command {\nprivate:\n    Light* light;\n    \npublic:\n    LightOffCommand(Light* l) : light(l) {}\n    \n    void execute() override { light->off(); }\n    void undo() override { light->on(); }\n};\n\nclass RemoteControl {\nprivate:\n    vector<unique_ptr<Command>> history;\n    \npublic:\n    void press(unique_ptr<Command> cmd) {\n        cmd->execute();\n        history.push_back(move(cmd));\n    }\n    \n    void undo() {\n        if (!history.empty()) {\n            history.back()->undo();\n            history.pop_back();\n        }\n    }\n};\n\nint main() {\n    Light livingRoom;\n    RemoteControl remote;\n    \n    remote.press(make_unique<LightOnCommand>(&livingRoom));\n    remote.press(make_unique<LightOffCommand>(&livingRoom));\n    remote.undo();\n    \n    return 0;\n}',
  hint: 'Command pattern uses polymorphism to encapsulate requests.'
},
{
  id: 'cpp_polymorphism_24',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphism with strategy pattern.',
  mathSolution: 'Strategy pattern encapsulates algorithms in polymorphic classes.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass PaymentStrategy {\npublic:\n    virtual void pay(double amount) = 0;\n    virtual ~PaymentStrategy() {}\n};\n\nclass CreditCardPayment : public PaymentStrategy {\nprivate:\n    string cardNumber;\n    \npublic:\n    CreditCardPayment(const string& card) : cardNumber(card) {}\n    \n    void pay(double amount) override {\n        cout << "Paid $" << amount << " using Credit Card " << cardNumber << endl;\n    }\n};\n\nclass PayPalPayment : public PaymentStrategy {\nprivate:\n    string email;\n    \npublic:\n    PayPalPayment(const string& email) : email(email) {}\n    \n    void pay(double amount) override {\n        cout << "Paid $" << amount << " using PayPal account " << email << endl;\n    }\n};\n\nclass CryptoPayment : public PaymentStrategy {\nprivate:\n    string walletAddress;\n    \npublic:\n    CryptoPayment(const string& wallet) : walletAddress(wallet) {}\n    \n    void pay(double amount) override {\n        cout << "Paid $" << amount << " using Crypto wallet " << walletAddress << endl;\n    }\n};\n\nclass ShoppingCart {\nprivate:\n    unique_ptr<PaymentStrategy> strategy;\n    double total;\n    \npublic:\n    ShoppingCart() : total(0) {}\n    \n    void addItem(double price) { total += price; }\n    \n    void setPaymentStrategy(unique_ptr<PaymentStrategy> s) {\n        strategy = move(s);\n    }\n    \n    void checkout() {\n        if (strategy) {\n            strategy->pay(total);\n        } else {\n            cout << "No payment method selected" << endl;\n        }\n    }\n};\n\nint main() {\n    ShoppingCart cart;\n    cart.addItem(100);\n    cart.addItem(50);\n    \n    cart.setPaymentStrategy(make_unique<CreditCardPayment>("1234-5678-9012-3456"));\n    cart.checkout();\n    \n    cart.setPaymentStrategy(make_unique<PayPalPayment>("user@example.com"));\n    cart.checkout();\n    \n    return 0;\n}',
  hint: 'Strategy pattern uses polymorphism to swap algorithms at runtime.'
},
{
  id: 'cpp_polymorphism_25',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphic state pattern.',
  mathSolution: 'State pattern uses polymorphism to change object behavior based on state.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass State {\npublic:\n    virtual void handle() = 0;\n    virtual ~State() {}\n};\n\nclass StateA : public State {\npublic:\n    void handle() override {\n        cout << "Handling in State A" << endl;\n    }\n};\n\nclass StateB : public State {\npublic:\n    void handle() override {\n        cout << "Handling in State B" << endl;\n    }\n};\n\nclass Context {\nprivate:\n    unique_ptr<State> state;\n    \npublic:\n    void setState(unique_ptr<State> s) {\n        state = move(s);\n    }\n    \n    void request() {\n        if (state) {\n            state->handle();\n        }\n    }\n};\n\nint main() {\n    Context context;\n    \n    context.setState(make_unique<StateA>());\n    context.request();\n    \n    context.setState(make_unique<StateB>());\n    context.request();\n    \n    return 0;\n}',
  hint: 'State pattern uses polymorphism to represent different states.'
},
{
  id: 'cpp_polymorphism_26',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphic iterator pattern.',
  mathSolution: 'Iterators can be polymorphic for different container types.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Iterator {\npublic:\n    virtual void next() = 0;\n    virtual bool done() const = 0;\n    virtual int current() const = 0;\n    virtual ~Iterator() {}\n};\n\ntemplate<typename T>\nclass VectorIterator : public Iterator {\nprivate:\n    const vector<T>& vec;\n    size_t index;\n    \npublic:\n    VectorIterator(const vector<T>& v) : vec(v), index(0) {}\n    \n    void next() override { index++; }\n    bool done() const override { return index >= vec.size(); }\n    int current() const override { return vec[index]; }\n};\n\nclass Container {\nprivate:\n    vector<int> data;\n    \npublic:\n    void add(int val) { data.push_back(val); }\n    \n    unique_ptr<Iterator> createIterator() const {\n        return make_unique<VectorIterator<int>>(data);\n    }\n};\n\nint main() {\n    Container c;\n    c.add(10);\n    c.add(20);\n    c.add(30);\n    \n    auto it = c.createIterator();\n    while (!it->done()) {\n        cout << it->current() << " ";\n        it->next();\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Polymorphic iterators enable iteration over various container types.'
},
{
  id: 'cpp_polymorphism_27',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphism with smart pointers.',
  mathSolution: 'Smart pointers work correctly with polymorphic types.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() const override { cout << "Circle "; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() const override { cout << "Square "; }\n};\n\nclass Triangle : public Shape {\npublic:\n    void draw() const override { cout << "Triangle "; }\n};\n\nint main() {\n    vector<unique_ptr<Shape>> shapes;\n    shapes.push_back(make_unique<Circle>());\n    shapes.push_back(make_unique<Square>());\n    shapes.push_back(make_unique<Triangle>());\n    shapes.push_back(make_unique<Circle>());\n    \n    for (const auto& shape : shapes) {\n        shape->draw();\n    }\n    cout << endl;\n    \n    // shared_ptr works too\n    vector<shared_ptr<Shape>> sharedShapes;\n    sharedShapes.push_back(make_shared<Circle>());\n    sharedShapes.push_back(make_shared<Square>());\n    \n    return 0;\n}',
  hint: 'Smart pointers manage polymorphic objects correctly with virtual destructors.'
},
{
  id: 'cpp_polymorphism_28',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphism with std::variant and std::monostate.',
  mathSolution: 'std::variant with std::visit provides compile-time polymorphism.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <vector>\nusing namespace std;\n\nstruct Circle {\n    double radius;\n    string toString() const { return "Circle(r=" + to_string(radius) + ")"; }\n};\n\nstruct Rectangle {\n    double width, height;\n    string toString() const { return "Rect(" + to_string(width) + "x" + to_string(height) + ")"; }\n};\n\nstruct Triangle {\n    double base, height;\n    string toString() const { return "Tri(b=" + to_string(base) + ",h=" + to_string(height) + ")"; }\n};\n\nusing Shape = variant<Circle, Rectangle, Triangle>;\n\nint main() {\n    vector<Shape> shapes;\n    shapes.push_back(Circle{5});\n    shapes.push_back(Rectangle{4, 6});\n    shapes.push_back(Triangle{3, 4});\n    shapes.push_back(Circle{2});\n    \n    auto toString = [](const auto& shape) { return shape.toString(); };\n    \n    for (const auto& shape : shapes) {\n        cout << visit(toString, shape) << endl;\n    }\n    \n    // Area calculation using constexpr if\n    auto area = [](const auto& shape) -> double {\n        using T = decay_t<decltype(shape)>;\n        if constexpr (is_same_v<T, Circle>) {\n            return 3.14159 * shape.radius * shape.radius;\n        } else if constexpr (is_same_v<T, Rectangle>) {\n            return shape.width * shape.height;\n        } else {\n            return 0.5 * shape.base * shape.height;\n        }\n    };\n    \n    cout << "\\nAreas:" << endl;\n    for (const auto& shape : shapes) {\n        cout << visit(area, shape) << endl;\n    }\n    \n    return 0;\n}',
  hint: 'std::variant provides compile-time polymorphic behavior without virtual functions.'
},
{
  id: 'cpp_polymorphism_29',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphic visitor pattern with std::variant.',
  mathSolution: 'Visitor pattern can be implemented using std::visit and overloaded lambdas.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <vector>\nusing namespace std;\n\nstruct Square {\n    double side;\n};\n\nstruct Circle {\n    double radius;\n};\n\nstruct Triangle {\n    double base, height;\n};\n\nusing Shape = variant<Square, Circle, Triangle>;\n\ntemplate<typename... Ts>\nstruct Overloaded : Ts... { using Ts::operator()...; };\n\ntemplate<typename... Ts>\nOverloaded(Ts...) -> Overloaded<Ts...>;\n\nint main() {\n    vector<Shape> shapes;\n    shapes.push_back(Square{5});\n    shapes.push_back(Circle{3});\n    shapes.push_back(Triangle{4, 3});\n    \n    auto areaVisitor = Overloaded{\n        [](const Square& s) { return s.side * s.side; },\n        [](const Circle& c) { return 3.14159 * c.radius * c.radius; },\n        [](const Triangle& t) { return 0.5 * t.base * t.height; }\n    };\n    \n    auto drawVisitor = Overloaded{\n        [](const Square&) { cout << "□"; },\n        [](const Circle&) { cout << "○"; },\n        [](const Triangle&) { cout << "▲"; }\n    };\n    \n    for (const auto& shape : shapes) {\n        visit(drawVisitor, shape);\n        cout << " => Area: " << visit(areaVisitor, shape) << endl;\n    }\n    \n    return 0;\n}',
  hint: 'std::visit with overloaded lambdas implements visitor pattern.'
},
{
  id: 'cpp_polymorphism_30',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphic chain of responsibility pattern.',
  mathSolution: 'Handlers form a chain to process requests polymorphically.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Handler {\nprotected:\n    unique_ptr<Handler> next;\n    \npublic:\n    void setNext(unique_ptr<Handler> h) { next = move(h); }\n    \n    virtual void handleRequest(int level) {\n        if (next) next->handleRequest(level);\n    }\n    \n    virtual ~Handler() {}\n};\n\nclass ConcreteHandler1 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 10) {\n            cout << \"Handler1 processed request level \" << level << endl;\n        } else {\n            Handler::handleRequest(level);\n        }\n    }\n};\n\nclass ConcreteHandler2 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 20) {\n            cout << \"Handler2 processed request level \" << level << endl;\n        } else {\n            Handler::handleRequest(level);\n        }\n    }\n};\n\nclass ConcreteHandler3 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 30) {\n            cout << \"Handler3 processed request level \" << level << endl;\n        } else {\n            cout << \"Request level \" << level << \" cannot be processed\" << endl;\n        }\n    }\n};\n\nint main() {\n    auto h1 = make_unique<ConcreteHandler1>();\n    auto h2 = make_unique<ConcreteHandler2>();\n    auto h3 = make_unique<ConcreteHandler3>();\n    \n    h1->setNext(move(h2));\n    h1->setNext(move(h3));\n    \n    h1->handleRequest(5);\n    h1->handleRequest(15);\n    h1->handleRequest(25);\n    h1->handleRequest(35);\n    \n    return 0;\n}',
  hint: 'Chain of responsibility uses polymorphism to delegate request handling.'
},
{
  id: 'cpp_polymorphism_31',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphism with std::function for callbacks.',
  mathSolution: 'std::function provides polymorphic callable objects.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Button {\nprivate:\n    vector<function<void()>> clickHandlers;\n    \npublic:\n    void addClickListener(function<void()> handler) {\n        clickHandlers.push_back(handler);\n    }\n    \n    void click() {\n        for (const auto& handler : clickHandlers) {\n            handler();\n        }\n    }\n};\n\nclass Logger {\npublic:\n    void log() { cout << \"Button clicked - logging event\" << endl; }\n    static void staticLog() { cout << \"Static log handler\" << endl; }\n};\n\nint main() {\n    Button btn;\n    \n    // Lambda\n    btn.addClickListener([]() { cout << \"Lambda handler 1\" << endl; });\n    \n    // Another lambda\n    btn.addClickListener([]() { cout << \"Lambda handler 2\" << endl; });\n    \n    // Member function with capture\n    Logger logger;\n    btn.addClickListener([&logger]() { logger.log(); });\n    \n    // Static function\n    btn.addClickListener(Logger::staticLog);\n    \n    // Function pointer\n    auto freeFunction = []() { cout << \"Free function handler\" << endl; };\n    btn.addClickListener(freeFunction);\n    \n    btn.click();\n    \n    return 0;\n}',
  hint: 'std::function stores any callable object polymorphically.'
},
{
  id: 'cpp_polymorphism_32',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphic decorator pattern.',
  mathSolution: 'Decorator pattern wraps objects to add behavior polymorphically.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Coffee {\npublic:\n    virtual double cost() const = 0;\n    virtual string description() const = 0;\n    virtual ~Coffee() {}\n};\n\nclass SimpleCoffee : public Coffee {\npublic:\n    double cost() const override { return 5.0; }\n    string description() const override { return \"Simple coffee\"; }\n};\n\nclass CoffeeDecorator : public Coffee {\nprotected:\n    unique_ptr<Coffee> coffee;\n    \npublic:\n    CoffeeDecorator(unique_ptr<Coffee> c) : coffee(move(c)) {}\n};\n\nclass MilkDecorator : public CoffeeDecorator {\npublic:\n    MilkDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    \n    double cost() const override { return coffee->cost() + 2.0; }\n    string description() const override { return coffee->description() + \", milk\"; }\n};\n\nclass SugarDecorator : public CoffeeDecorator {\npublic:\n    SugarDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    \n    double cost() const override { return coffee->cost() + 1.0; }\n    string description() const override { return coffee->description() + \", sugar\"; }\n};\n\nclass WhippedCreamDecorator : public CoffeeDecorator {\npublic:\n    WhippedCreamDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    \n    double cost() const override { return coffee->cost() + 3.0; }\n    string description() const override { return coffee->description() + \", whipped cream\"; }\n};\n\nint main() {\n    auto coffee = make_unique<SimpleCoffee>();\n    coffee = make_unique<MilkDecorator>(move(coffee));\n    coffee = make_unique<SugarDecorator>(move(coffee));\n    coffee = make_unique<WhippedCreamDecorator>(move(coffee));\n    \n    cout << \"Order: \" << coffee->description() << endl;\n    cout << \"Cost: $\" << coffee->cost() << endl;\n    \n    return 0;\n}',
  hint: 'Decorator pattern uses polymorphism to add responsibilities at runtime.'
},
{
  id: 'cpp_polymorphism_33',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphism with adapter pattern.',
  mathSolution: 'Adapter pattern converts interfaces using polymorphic wrappers.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass OldLogger {\npublic:\n    void logMessage(const string& msg) {\n        cout << "[OLD] " << msg << endl;\n    }\n};\n\nclass NewLogger {\npublic:\n    virtual void log(const string& level, const string& msg) = 0;\n    virtual ~NewLogger() {}\n};\n\nclass LoggerAdapter : public NewLogger {\nprivate:\n    unique_ptr<OldLogger> oldLogger;\n    \npublic:\n    LoggerAdapter() : oldLogger(make_unique<OldLogger>()) {}\n    \n    void log(const string& level, const string& msg) override {\n        string formatted = "[" + level + "] " + msg;\n        oldLogger->logMessage(formatted);\n    }\n};\n\nclass Application {\nprivate:\n    unique_ptr<NewLogger> logger;\n    \npublic:\n    Application(unique_ptr<NewLogger> l) : logger(move(l)) {}\n    \n    void run() {\n        logger->log("INFO", "Application started");\n        logger->log("DEBUG", "Processing data");\n        logger->log("ERROR", "Something went wrong");\n    }\n};\n\nint main() {\n    auto adapter = make_unique<LoggerAdapter>();\n    Application app(move(adapter));\n    app.run();\n    \n    return 0;\n}',
  hint: 'Adapter pattern uses polymorphism to bridge incompatible interfaces.'
},
{
  id: 'cpp_polymorphism_34',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphic proxy pattern.',
  mathSolution: 'Proxy pattern controls access to objects using polymorphic interface.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Image {\npublic:\n    virtual void display() = 0;\n    virtual ~Image() {}\n};\n\nclass RealImage : public Image {\nprivate:\n    string filename;\n    \n    void loadFromDisk() {\n        cout << \"Loading image: \" << filename << endl;\n    }\n    \npublic:\n    RealImage(const string& file) : filename(file) {\n        loadFromDisk();\n    }\n    \n    void display() override {\n        cout << \"Displaying image: \" << filename << endl;\n    }\n};\n\nclass ImageProxy : public Image {\nprivate:\n    string filename;\n    unique_ptr<RealImage> realImage;\n    \npublic:\n    ImageProxy(const string& file) : filename(file) {}\n    \n    void display() override {\n        if (!realImage) {\n            realImage = make_unique<RealImage>(filename);\n        }\n        realImage->display();\n    }\n};\n\nint main() {\n    ImageProxy proxy(\"photo.jpg\");\n    \n    cout << \"Proxy created, image not loaded yet\" << endl;\n    cout << \"First display request:\" << endl;\n    proxy.display();\n    \n    cout << \"\\nSecond display request:\" << endl;\n    proxy.display();\n    \n    return 0;\n}',
  hint: 'Proxy pattern uses polymorphism for lazy initialization and access control.'
},
{
  id: 'cpp_polymorphism_35',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphic composite pattern.',
  mathSolution: 'Composite pattern treats individual objects and compositions uniformly.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Graphic {\npublic:\n    virtual void draw() const = 0;\n    virtual ~Graphic() {}\n};\n\nclass Circle : public Graphic {\npublic:\n    void draw() const override { cout << \"O \"; }\n};\n\nclass Square : public Graphic {\npublic:\n    void draw() const override { cout << \"□ \"; }\n};\n\nclass CompositeGraphic : public Graphic {\nprivate:\n    vector<unique_ptr<Graphic>> children;\n    \npublic:\n    void add(unique_ptr<Graphic> graphic) {\n        children.push_back(move(graphic));\n    }\n    \n    void draw() const override {\n        for (const auto& child : children) {\n            child->draw();\n        }\n    }\n};\n\nint main() {\n    auto circle1 = make_unique<Circle>();\n    auto circle2 = make_unique<Circle>();\n    auto square1 = make_unique<Square>();\n    \n    auto composite1 = make_unique<CompositeGraphic>();\n    composite1->add(move(circle1));\n    composite1->add(move(square1));\n    \n    auto composite2 = make_unique<CompositeGraphic>();\n    composite2->add(move(circle2));\n    composite2->add(move(composite1));\n    \n    cout << \"Drawing composite2: \";\n    composite2->draw();\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Composite pattern uses polymorphism to create tree structures of objects.'
},
{
  "id": "cpp_polymorphism_36",
  "topicId": "cpp_polymorphism",
  "question": "Use polymorphic flyweight pattern.",
  "mathSolution": "Flyweight pattern shares common state among many objects.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <memory>\n#include <string>\nusing namespace std;\n\nclass Character {\npublic:\n    virtual void display(int x, int y) const = 0;\n    virtual ~Character() {}\n};\n\nclass ConcreteCharacter : public Character {\nprivate:\n    char symbol;\n    string font;\n    int size;\n    \npublic:\n    ConcreteCharacter(char c, const string& f, int s) \n        : symbol(c), font(f), size(s) {}\n    \n    void display(int x, int y) const override {\n        cout << \"Character '\" << symbol << \"' at (\" << x << \",\" << y \n             << \") font: \" << font << \", size: \" << size << endl;\n    }\n};\n\nclass CharacterFactory {\nprivate:\n    unordered_map<string, shared_ptr<Character>> characters;\n    \n    string getKey(char c, const string& font, int size) {\n        return string(1, c) + font + to_string(size);\n    }\n    \npublic:\n    shared_ptr<Character> getCharacter(char c, const string& font, int size) {\n        string key = getKey(c, font, size);\n        if (characters.find(key) == characters.end()) {\n            characters[key] = make_shared<ConcreteCharacter>(c, font, size);\n            cout << \"Creating new character: \" << key << endl;\n        }\n        return characters[key];\n    }\n    \n    size_t getCacheSize() const {\n        return characters.size();\n    }\n};\n\nint main() {\n    CharacterFactory factory;\n    \n    // Create document: \"Hello\"\n    auto h = factory.getCharacter('H', \"Arial\", 12);\n    auto e1 = factory.getCharacter('e', \"Arial\", 12);\n    auto l1 = factory.getCharacter('l', \"Arial\", 12);\n    auto l2 = factory.getCharacter('l', \"Arial\", 12);\n    auto o = factory.getCharacter('o', \"Arial\", 12);\n    \n    h->display(0, 0);\n    e1->display(10, 0);\n    l1->display(20, 0);\n    l2->display(30, 0);\n    o->display(40, 0);\n    \n    cout << \"\\nTotal unique characters cached: \" << factory.getCacheSize() << endl;\n    \n    return 0;\n}",
  "hint": "Flyweight pattern uses polymorphism to share immutable state."
},
{
  id: 'cpp_polymorphism_37',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphic bridge pattern.',
  mathSolution: 'Bridge pattern separates abstraction from implementation using polymorphism.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass DrawingAPI {\npublic:\n    virtual void drawCircle(double x, double y, double radius) = 0;\n    virtual ~DrawingAPI() {}\n};\n\nclass DrawingAPI1 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double radius) override {\n        cout << \"API1.circle at (\" << x << \",\" << y << \") radius \" << radius << endl;\n    }\n};\n\nclass DrawingAPI2 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double radius) override {\n        cout << \"API2.circle at (\" << x << \",\" << y << \") radius \" << radius << endl;\n    }\n};\n\nclass Shape {\nprotected:\n    unique_ptr<DrawingAPI> drawingAPI;\n    \npublic:\n    Shape(unique_ptr<DrawingAPI> api) : drawingAPI(move(api)) {}\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass CircleShape : public Shape {\nprivate:\n    double x, y, radius;\n    \npublic:\n    CircleShape(double cx, double cy, double r, unique_ptr<DrawingAPI> api)\n        : Shape(move(api)), x(cx), y(cy), radius(r) {}\n    \n    void draw() override {\n        drawingAPI->drawCircle(x, y, radius);\n    }\n};\n\nint main() {\n    CircleShape circle1(1, 2, 3, make_unique<DrawingAPI1>());\n    CircleShape circle2(4, 5, 6, make_unique<DrawingAPI2>());\n    \n    circle1.draw();\n    circle2.draw();\n    \n    return 0;\n}',
  hint: 'Bridge pattern decouples abstraction from implementation using polymorphism.'
},
{
  id: 'cpp_polymorphism_38',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphic mediator pattern.',
  mathSolution: 'Mediator pattern centralizes communication between objects.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Colleague;\n\nclass Mediator {\npublic:\n    virtual void notify(Colleague* sender, const string& event) = 0;\n    virtual ~Mediator() {}\n};\n\nclass Colleague {\nprotected:\n    Mediator* mediator;\n    \npublic:\n    Colleague(Mediator* m) : mediator(m) {}\n    virtual ~Colleague() {}\n};\n\nclass ConcreteMediator : public Mediator {\nprivate:\n    vector<Colleague*> colleagues;\n    \npublic:\n    void addColleague(Colleague* c) {\n        colleagues.push_back(c);\n    }\n    \n    void notify(Colleague* sender, const string& event) override {\n        for (Colleague* c : colleagues) {\n            if (c != sender) {\n                cout << \"Mediator forwarding to another colleague: \" << event << endl;\n            }\n        }\n    }\n};\n\nclass Component1 : public Colleague {\npublic:\n    Component1(Mediator* m) : Colleague(m) {}\n    \n    void doSomething() {\n        cout << \"Component1 does something\" << endl;\n        mediator->notify(this, \"Component1 event\");\n    }\n};\n\nclass Component2 : public Colleague {\npublic:\n    Component2(Mediator* m) : Colleague(m) {}\n    \n    void doSomethingElse() {\n        cout << \"Component2 does something else\" << endl;\n        mediator->notify(this, \"Component2 event\");\n    }\n};\n\nint main() {\n    ConcreteMediator mediator;\n    Component1 comp1(&mediator);\n    Component2 comp2(&mediator);\n    \n    mediator.addColleague(&comp1);\n    mediator.addColleague(&comp2);\n    \n    comp1.doSomething();\n    comp2.doSomethingElse();\n    \n    return 0;\n}',
  hint: 'Mediator pattern uses polymorphism to decouple interacting objects.'
},
{
  id: 'cpp_polymorphism_39',
  topicId: 'cpp_polymorphism',
  question: 'Demonstrate polymorphic memento pattern.',
  mathSolution: 'Memento pattern captures and restores object state.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Memento {\nprivate:\n    string state;\n    \npublic:\n    Memento(const string& s) : state(s) {}\n    string getState() const { return state; }\n};\n\nclass Originator {\nprivate:\n    string state;\n    \npublic:\n    void setState(const string& s) {\n        state = s;\n        cout << \"State set to: \" << state << endl;\n    }\n    \n    string getState() const { return state; }\n    \n    unique_ptr<Memento> createMemento() {\n        return make_unique<Memento>(state);\n    }\n    \n    void restoreMemento(unique_ptr<Memento> m) {\n        state = m->getState();\n        cout << \"State restored to: \" << state << endl;\n    }\n};\n\nclass Caretaker {\nprivate:\n    vector<unique_ptr<Memento>> mementos;\n    \npublic:\n    void addMemento(unique_ptr<Memento> m) {\n        mementos.push_back(move(m));\n    }\n    \n    unique_ptr<Memento> getMemento(int index) {\n        if (index >= 0 && index < mementos.size()) {\n            return move(mementos[index]);\n        }\n        return nullptr;\n    }\n};\n\nint main() {\n    Originator originator;\n    Caretaker caretaker;\n    \n    originator.setState(\"State 1\");\n    caretaker.addMemento(originator.createMemento());\n    \n    originator.setState(\"State 2\");\n    caretaker.addMemento(originator.createMemento());\n    \n    originator.setState(\"State 3\");\n    \n    originator.restoreMemento(caretaker.getMemento(0));\n    \n    return 0;\n}',
  hint: 'Memento pattern uses polymorphism to capture and restore object state.'
},
{
  id: 'cpp_polymorphism_40',
  topicId: 'cpp_polymorphism',
  question: 'Use polymorphic visitor pattern with double dispatch.',
  mathSolution: 'Visitor pattern enables adding new operations without modifying classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Circle;\nclass Rectangle;\nclass Triangle;\n\nclass Visitor {\npublic:\n    virtual void visit(Circle& c) = 0;\n    virtual void visit(Rectangle& r) = 0;\n    virtual void visit(Triangle& t) = 0;\n    virtual ~Visitor() {}\n};\n\nclass Shape {\npublic:\n    virtual void accept(Visitor& v) = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    double getRadius() const { return radius; }\n    void accept(Visitor& v) override { v.visit(*this); }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    double getWidth() const { return width; }\n    double getHeight() const { return height; }\n    void accept(Visitor& v) override { v.visit(*this); }\n};\n\nclass Triangle : public Shape {\nprivate:\n    double base, height;\n    \npublic:\n    Triangle(double b, double h) : base(b), height(h) {}\n    double getBase() const { return base; }\n    double getHeight() const { return height; }\n    void accept(Visitor& v) override { v.visit(*this); }\n};\n\nclass AreaVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override {\n        cout << \"Circle area: \" << 3.14159 * c.getRadius() * c.getRadius() << endl;\n    }\n    \n    void visit(Rectangle& r) override {\n        cout << \"Rectangle area: \" << r.getWidth() * r.getHeight() << endl;\n    }\n    \n    void visit(Triangle& t) override {\n        cout << \"Triangle area: \" << 0.5 * t.getBase() * t.getHeight() << endl;\n    }\n};\n\nclass DrawVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override { cout << \"Drawing Circle\" << endl; }\n    void visit(Rectangle& r) override { cout << \"Drawing Rectangle\" << endl; }\n    void visit(Triangle& t) override { cout << \"Drawing Triangle\" << endl; }\n};\n\nint main() {\n    Circle circle(5);\n    Rectangle rect(4, 6);\n    Triangle tri(3, 4);\n    \n    AreaVisitor areaCalc;\n    DrawVisitor drawer;\n    \n    Shape* shapes[] = {&circle, &rect, &tri};\n    \n    for (Shape* s : shapes) {\n        s->accept(areaCalc);\n        s->accept(drawer);\n    }\n    \n    return 0;\n}',
  hint: 'Visitor pattern uses double dispatch through polymorphism.'
},
//abstraction
{
  id: 'cpp_abstraction_1',
  topicId: 'cpp_abstraction',
  question: 'Use abstract base class with pure virtual functions to define interface.',
  mathSolution: 'Abstract classes define interface, derived classes implement details.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual double perimeter() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double area() override { return 3.14159 * radius * radius; }\n    double perimeter() override { return 2 * 3.14159 * radius; }\n    void draw() override { cout << "Drawing circle" << endl; }\n};\n\nint main() {\n    Shape* s = new Circle(5);\n    cout << "Area: " << s->area() << endl;\n    s->draw();\n    delete s;\n    return 0;\n}',
  hint: 'Abstraction hides implementation details, exposes only essential features.'
},
{
  id: 'cpp_abstraction_2',
  topicId: 'cpp_abstraction',
  question: 'Create interface using pure virtual functions only (no data members).',
  mathSolution: 'Interface class defines only virtual functions, no implementation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual void resize(double factor) = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    void draw() override { cout << "Circle radius: " << radius << endl; }\n    void resize(double factor) override { radius *= factor; }\n};\n\nint main() {\n    Drawable* d = new Circle(5);\n    d->draw();\n    d->resize(2);\n    d->draw();\n    delete d;\n    return 0;\n}',
  hint: 'Interfaces provide pure abstraction with no implementation.'
},
{
  id: 'cpp_abstraction_3',
  topicId: 'cpp_abstraction',
  question: 'Use private members to hide implementation details.',
  mathSolution: 'Private members encapsulate data, accessible only through public methods.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    string accountNumber;\n    double balance;\n    string pin;\n    \n    bool validatePin(const string& inputPin) {\n        return pin == inputPin;\n    }\n    \npublic:\n    BankAccount(string acc, double initial, string p) \n        : accountNumber(acc), balance(initial), pin(p) {}\n    \n    void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    \n    bool withdraw(double amount, string inputPin) {\n        if (validatePin(inputPin) && amount <= balance) {\n            balance -= amount;\n            return true;\n        }\n        return false;\n    }\n    \n    double getBalance(string inputPin) {\n        return validatePin(inputPin) ? balance : -1;\n    }\n};\n\nint main() {\n    BankAccount acc("12345", 1000, "1234");\n    acc.deposit(500);\n    if (acc.withdraw(200, "1234")) {\n        cout << "Withdrawal successful\\n";\n    }\n    cout << "Balance: " << acc.getBalance("1234") << endl;\n    return 0;\n}',
  hint: 'Private members hide implementation, public methods provide controlled access.'
},
{
  id: 'cpp_abstraction_4',
  topicId: 'cpp_abstraction',
  question: 'Use protected members for inheritance-based abstraction.',
  mathSolution: 'Protected members accessible to derived classes, hidden from outside.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nclass Vehicle {\nprotected:\n    string brand;\n    int speed;\n    \n    virtual void startEngine() = 0;\n    \npublic:\n    Vehicle(string b) : brand(b), speed(0) {}\n    \n    void accelerate(int amount) {\n        speed += amount;\n        cout << brand << " accelerating to " << speed << " km/h\\n";\n    }\n    \n    void brake(int amount) {\n        speed = max(0, speed - amount);\n        cout << brand << " slowed to " << speed << " km/h\\n";\n    }\n    \n    virtual void displayInfo() {\n        cout << brand << " at " << speed << " km/h" << endl;\n    }\n};\n\nclass Car : public Vehicle {\nprivate:\n    string model;\n    \nprotected:\n    void startEngine() override {\n        cout << brand << " " << model << " engine started\\n";\n    }\n    \npublic:\n    Car(string b, string m) : Vehicle(b), model(m) {}\n    \n    void drive() {\n        startEngine();\n        accelerate(10);\n    }\n};\n\nint main() {\n    Car myCar("Toyota", "Camry");\n    myCar.drive();\n    myCar.displayInfo();\n    return 0;\n}',
  hint: 'Protected abstraction allows controlled inheritance-based extension.'
},
{
  id: 'cpp_abstraction_5',
  topicId: 'cpp_abstraction',
  question: 'Use static member functions for class-level abstraction.',
  mathSolution: 'Static functions provide functionality without object instantiation.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass MathUtils {\nprivate:\n    static double toRadians(double degrees) {\n        return degrees * 3.14159 / 180.0;\n    }\n    \npublic:\n    static double sin(double degrees) {\n        return std::sin(toRadians(degrees));\n    }\n    \n    static double cos(double degrees) {\n        return std::cos(toRadians(degrees));\n    }\n    \n    static double tan(double degrees) {\n        return std::tan(toRadians(degrees));\n    }\n    \n    static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n};\n\nint main() {\n    cout << "sin(30°): " << MathUtils::sin(30) << endl;\n    cout << "cos(60°): " << MathUtils::cos(60) << endl;\n    cout << "5! = " << MathUtils::factorial(5) << endl;\n    return 0;\n}',
  hint: 'Static functions provide abstraction without requiring object state.'
},
{
  id: 'cpp_abstraction_6',
  topicId: 'cpp_abstraction',
  question: 'Use nested classes for implementation abstraction.',
  mathSolution: 'Nested classes hide helper classes within outer class scope.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass LinkedList {\nprivate:\n    class Node {\n    public:\n        int data;\n        Node* next;\n        Node(int val) : data(val), next(nullptr) {}\n    };\n    \n    Node* head;\n    \npublic:\n    LinkedList() : head(nullptr) {}\n    \n    void add(int val) {\n        Node* newNode = new Node(val);\n        newNode->next = head;\n        head = newNode;\n    }\n    \n    void display() {\n        Node* current = head;\n        while (current) {\n            cout << current->data << " ";\n            current = current->next;\n        }\n        cout << endl;\n    }\n    \n    ~LinkedList() {\n        while (head) {\n            Node* temp = head;\n            head = head->next;\n            delete temp;\n        }\n    }\n};\n\nint main() {\n    LinkedList list;\n    list.add(10);\n    list.add(20);\n    list.add(30);\n    list.display();\n    return 0;\n}',
  hint: 'Nested classes hide implementation complexity from users.'
},
{
  id: 'cpp_abstraction_7',
  topicId: 'cpp_abstraction',
  question: 'Use const member functions for read-only abstraction.',
  mathSolution: 'const methods promise not to modify object state.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\n    mutable int accessCount;\n    \npublic:\n    Person(string n, int a) : name(n), age(a), accessCount(0) {}\n    \n    string getName() const {\n        accessCount++;\n        return name;\n    }\n    \n    int getAge() const {\n        accessCount++;\n        return age;\n    }\n    \n    int getAccessCount() const {\n        return accessCount;\n    }\n    \n    void celebrateBirthday() {\n        age++;\n    }\n};\n\nint main() {\n    const Person john("John", 25);\n    cout << john.getName() << " is " << john.getAge() << endl;\n    // john.celebrateBirthday(); // Error: cannot call non-const on const object\n    cout << "Access count: " << john.getAccessCount() << endl;\n    return 0;\n}',
  hint: 'const methods provide read-only abstraction, guaranteeing no modification.'
},
{
  id: 'cpp_abstraction_8',
  topicId: 'cpp_abstraction',
  question: 'Use typedef/using for type abstraction.',
  mathSolution: 'Type aliases hide complex type details.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\n// Type abstraction\ntypedef unsigned long long uint64;\nusing StringVector = vector<string>;\nusing StringIntMap = map<string, int>;\nusing Callback = void(*)(int);\n\nclass DataStore {\nprivate:\n    using DataType = vector<pair<string, double>>;\n    DataType data;\n    \npublic:\n    using iterator = DataType::iterator;\n    using const_iterator = DataType::const_iterator;\n    \n    void add(const string& key, double value) {\n        data.push_back({key, value});\n    }\n    \n    iterator begin() { return data.begin(); }\n    iterator end() { return data.end(); }\n    const_iterator begin() const { return data.begin(); }\n    const_iterator end() const { return data.end(); }\n};\n\nint main() {\n    uint64 largeNumber = 123456789012345ULL;\n    StringVector names = {\"Alice\", \"Bob\", \"Charlie\"};\n    StringIntMap ages = {{\"Alice\", 25}, {\"Bob\", 30}};\n    \n    DataStore store;\n    store.add(\"x\", 10.5);\n    store.add(\"y\", 20.3);\n    \n    for (const auto& [key, val] : store) {\n        cout << key << ": " << val << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Type aliases simplify complex type declarations and improve readability.'
},
{
  id: 'cpp_abstraction_9',
  topicId: 'cpp_abstraction',
  question: 'Use enum class for type-safe constants abstraction.',
  mathSolution: 'enum class provides scoped, type-safe enumerations.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nenum class Status {\n    OK = 200,\n    CREATED = 201,\n    BAD_REQUEST = 400,\n    UNAUTHORIZED = 401,\n    NOT_FOUND = 404,\n    SERVER_ERROR = 500\n};\n\nenum class Color { RED, GREEN, BLUE };\nenum class TrafficLight { RED, YELLOW, GREEN };\n\nclass HttpResponse {\nprivate:\n    Status status;\n    string message;\n    \npublic:\n    HttpResponse(Status s, const string& msg) : status(s), message(msg) {}\n    \n    int getStatusCode() const {\n        return static_cast<int>(status);\n    }\n    \n    string getStatusText() const {\n        switch(status) {\n            case Status::OK: return \"OK\";\n            case Status::CREATED: return \"Created\";\n            case Status::BAD_REQUEST: return \"Bad Request\";\n            case Status::UNAUTHORIZED: return \"Unauthorized\";\n            default: return \"Unknown\";\n        }\n    }\n};\n\nint main() {\n    HttpResponse response(Status::OK, \"Success\");\n    cout << response.getStatusCode() << \": \" << response.getStatusText() << endl;\n    \n    // Status s = 200;  // Error: cannot convert int to enum class\n    // if (Color::RED == TrafficLight::RED)  // Error: different types\n    \n    return 0;\n}',
  hint: 'enum class provides type-safe abstraction with scoped constants.'
},
{
  id: 'cpp_abstraction_10',
  topicId: 'cpp_abstraction',
  question: 'Use function pointers for behavioral abstraction.',
  mathSolution: 'Function pointers abstract algorithm selection.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\nint max(int a, int b) { return (a > b) ? a : b; }\nint min(int a, int b) { return (a < b) ? a : b; }\n\nclass Calculator {\nprivate:\n    using Operation = int(*)(int, int);\n    Operation currentOp;\n    \npublic:\n    Calculator(Operation op) : currentOp(op) {}\n    \n    void setOperation(Operation op) { currentOp = op; }\n    \n    int compute(int a, int b) {\n        return currentOp(a, b);\n    }\n};\n\nint main() {\n    Calculator calc(add);\n    cout << "5 + 3 = \" << calc.compute(5, 3) << endl;\n    \n    calc.setOperation(multiply);\n    cout << \"5 * 3 = \" << calc.compute(5, 3) << endl;\n    \n    calc.setOperation(max);\n    cout << \"max(5,3) = \" << calc.compute(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'Function pointers allow abstraction of algorithms and callbacks.'
},
{
  id: 'cpp_abstraction_11',
  topicId: 'cpp_abstraction',
  question: 'Use std::function for polymorphic callable abstraction.',
  mathSolution: 'std::function stores any callable object.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <vector>\nusing namespace std;\n\nstruct Multiplier {\n    int factor;\n    int operator()(int x) const { return x * factor; }\n};\n\nclass EventProcessor {\nprivate:\n    vector<function<void(int)>> handlers;\n    \npublic:\n    void addHandler(function<void(int)> handler) {\n        handlers.push_back(handler);\n    }\n    \n    void process(int data) {\n        for (const auto& handler : handlers) {\n            handler(data);\n        }\n    }\n};\n\nint main() {\n    EventProcessor processor;\n    \n    // Lambda\n    processor.addHandler([](int x) { cout << \"Lambda: \" << x * 2 << endl; });\n    \n    // Function pointer\n    processor.addHandler([](int x) { cout << \"Function: \" << x + 10 << endl; });\n    \n    // Function object\n    processor.addHandler(Multiplier{3});\n    \n    // Capture lambda\n    int offset = 100;\n    processor.addHandler([offset](int x) { cout << \"Captured: \" << x + offset << endl; });\n    \n    processor.process(5);\n    \n    return 0;\n}',
  hint: 'std::function provides type-erased callable abstraction.'
},
{
  id: 'cpp_abstraction_12',
  topicId: 'cpp_abstraction',
  question: 'Use lambda expressions for inline functional abstraction.',
  mathSolution: 'Lambdas abstract small, local operations.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    // Lambda for filtering\n    auto isEven = [](int n) { return n % 2 == 0; };\n    \n    // Lambda for transformation\n    auto square = [](int n) { return n * n; };\n    \n    // Lambda for accumulation\n    auto sum = [](int a, int b) { return a + b; };\n    \n    vector<int> evens;\n    copy_if(numbers.begin(), numbers.end(), back_inserter(evens), isEven);\n    \n    vector<int> squares;\n    transform(evens.begin(), evens.end(), back_inserter(squares), square);\n    \n    int total = accumulate(squares.begin(), squares.end(), 0, sum);\n    \n    cout << "Sum of squares of evens: \" << total << endl;\n    \n    // Generic lambda\n    auto add = [](auto a, auto b) { return a + b; };\n    cout << \"add(5,3) = \" << add(5, 3) << endl;\n    cout << \"add(5.5,3.2) = \" << add(5.5, 3.2) << endl;\n    \n    return 0;\n}',
  hint: 'Lambdas provide lightweight functional abstraction.'
},
{
  id: 'cpp_abstraction_13',
  topicId: 'cpp_abstraction',
  question: 'Use RAII for resource management abstraction.',
  mathSolution: 'RAII ties resource lifetime to object lifetime.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <mutex>\nusing namespace std;\n\nclass FileHandle {\nprivate:\n    FILE* file;\n    string filename;\n    \npublic:\n    FileHandle(const string& name, const string& mode) : filename(name) {\n        file = fopen(name.c_str(), mode.c_str());\n        if (!file) throw runtime_error(\"Cannot open file\");\n        cout << \"File opened: \" << filename << endl;\n    }\n    \n    ~FileHandle() {\n        if (file) {\n            fclose(file);\n            cout << \"File closed: \" << filename << endl;\n        }\n    }\n    \n    void write(const string& data) {\n        if (file) fprintf(file, \"%s\\n\", data.c_str());\n    }\n    \n    FileHandle(const FileHandle&) = delete;\n    FileHandle& operator=(const FileHandle&) = delete;\n};\n\nclass MutexLock {\nprivate:\n    mutex& mtx;\n    \npublic:\n    explicit MutexLock(mutex& m) : mtx(m) {\n        mtx.lock();\n        cout << \"Mutex locked\" << endl;\n    }\n    \n    ~MutexLock() {\n        mtx.unlock();\n        cout << \"Mutex unlocked\" << endl;\n    }\n};\n\nint main() {\n    {\n        FileHandle file(\"test.txt\", \"w\");\n        file.write(\"Hello RAII\");\n    }\n    \n    mutex m;\n    {\n        MutexLock lock(m);\n        cout << \"Critical section\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'RAII abstracts resource management ensuring automatic cleanup.'
},
{
  id: 'cpp_abstraction_14',
  topicId: 'cpp_abstraction',
  question: 'Use smart pointers for memory management abstraction.',
  mathSolution: 'Smart pointers automate memory deallocation.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Widget {\nprivate:\n    int id;\npublic:\n    Widget(int i) : id(i) { cout << \"Widget \" << id << \" created\\n\"; }\n    ~Widget() { cout << \"Widget \" << id << \" destroyed\\n\"; }\n    void process() { cout << \"Processing widget \" << id << endl; }\n};\n\nclass Container {\nprivate:\n    vector<unique_ptr<Widget>> widgets;\n    \npublic:\n    void add(unique_ptr<Widget> w) {\n        widgets.push_back(move(w));\n    }\n    \n    void processAll() {\n        for (const auto& w : widgets) {\n            w->process();\n        }\n    }\n};\n\nint main() {\n    Container c;\n    c.add(make_unique<Widget>(1));\n    c.add(make_unique<Widget>(2));\n    c.add(make_unique<Widget>(3));\n    \n    c.processAll();\n    \n    auto shared = make_shared<Widget>(10);\n    auto shared2 = shared;\n    cout << \"Reference count: \" << shared.use_count() << endl;\n    \n    return 0;\n}',
  hint: 'Smart pointers abstract memory management, preventing leaks.'
},
{
  id: 'cpp_abstraction_15',
  topicId: 'cpp_abstraction',
  question: 'Use template specialization for type-specific abstraction.',
  mathSolution: 'Templates abstract algorithms from data types.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <cstring>\nusing namespace std;\n\ntemplate<typename T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Template specialization for const char*\ntemplate<>\nconst char* maximum<const char*>(const char* a, const char* b) {\n    return (strcmp(a, b) > 0) ? a : b;\n}\n\n// Class template specialization\ntemplate<typename T>\nclass Wrapper {\nprivate:\n    T value;\npublic:\n    Wrapper(T v) : value(v) {}\n    void display() { cout << \"Generic: \" << value << endl; }\n};\n\ntemplate<>\nclass Wrapper<string> {\nprivate:\n    string value;\npublic:\n    Wrapper(const string& v) : value(v) {}\n    void display() { cout << \"String specialization: \\\"\" << value << \"\\\"\" << endl; }\n};\n\nint main() {\n    cout << maximum(5, 3) << endl;\n    cout << maximum(5.5, 3.2) << endl;\n    cout << maximum(\"apple\", \"banana\") << endl;\n    \n    Wrapper<int> w1(42);\n    Wrapper<string> w2(\"Hello\");\n    w1.display();\n    w2.display();\n    \n    return 0;\n}',
  hint: 'Template specialization provides type-specific implementation abstraction.'
},
{
  id: 'cpp_abstraction_16',
  topicId: 'cpp_abstraction',
  question: 'Use variadic templates for flexible parameter abstraction.',
  mathSolution: 'Variadic templates accept variable number of arguments.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Base case\nvoid print() {}\n\n// Recursive variadic template\ntemplate<typename T, typename... Args>\nvoid print(T first, Args... args) {\n    cout << first << \" \";\n    print(args...);\n}\n\n// Sum function\ntemplate<typename T>\nT sum(T t) { return t; }\n\ntemplate<typename T, typename... Args>\nT sum(T first, Args... args) {\n    return first + sum(args...);\n}\n\n// Tuple-like data structure\ntemplate<typename... Types>\nclass Tuple {\n    // Implementation omitted for brevity\n};\n\nint main() {\n    print(1, 2, 3, 4, 5);\n    cout << endl;\n    print(\"Hello\", \"World\", 42, 3.14);\n    cout << endl;\n    \n    cout << \"Sum: \" << sum(1, 2, 3, 4, 5) << endl;\n    cout << \"Sum: \" << sum(1.1, 2.2, 3.3) << endl;\n    \n    return 0;\n}',
  hint: 'Variadic templates abstract over variable argument lists.'
},
{
  id: 'cpp_abstraction_17',
  topicId: 'cpp_abstraction',
  question: 'Use SFINAE for conditional abstraction.',
  mathSolution: 'SFINAE enables compile-time conditional function selection.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\n// For integral types\ntemplate<typename T>\ntypename enable_if<is_integral<T>::value, T>::type\ndoubleValue(T x) {\n    cout << \"Integral version: \";\n    return x * 2;\n}\n\n// For floating point types\ntemplate<typename T>\ntypename enable_if<is_floating_point<T>::value, T>::type\ndoubleValue(T x) {\n    cout << \"Floating point version: \";\n    return x * 2.0;\n}\n\n// For string type\ntemplate<typename T>\ntypename enable_if<is_same<T, string>::value, string>::type\ndoubleValue(T x) {\n    cout << \"String version: \";\n    return x + x;\n}\n\nclass IsEven {\npublic:\n    template<typename T>\n    auto operator()(T x) -> decltype(x % 2 == 0) {\n        return x % 2 == 0;\n    }\n};\n\nint main() {\n    cout << doubleValue(5) << endl;\n    cout << doubleValue(5.5) << endl;\n    cout << doubleValue(string(\"Hi\")) << endl;\n    \n    IsEven isEven;\n    cout << \"5 is even? \" << isEven(5) << endl;\n    cout << \"4 is even? \" << isEven(4) << endl;\n    \n    return 0;\n}',
  hint: 'SFINAE abstracts conditional compilation based on type traits.'
},
{
  id: 'cpp_abstraction_18',
  topicId: 'cpp_abstraction',
  question: 'Use concept (C++20) for constraint-based abstraction.',
  mathSolution: 'Concepts define requirements on template parameters.',
  codeSolution: '#include <iostream>\n#include <concepts>\nusing namespace std;\n\ntemplate<typename T>\nconcept Numeric = requires(T a, T b) {\n    { a + b } -> convertible_to<T>;\n    { a - b } -> convertible_to<T>;\n    { a * b } -> convertible_to<T>;\n    { a / b } -> convertible_to<T>;\n    { a > b } -> convertible_to<bool>;\n};\n\ntemplate<typename T>\nconcept Printable = requires(T t) {\n    { cout << t } -> convertible_to<ostream&>;\n};\n\ntemplate<Numeric T>\nT add(T a, T b) {\n    return a + b;\n}\n\ntemplate<Numeric T>\nT multiply(T a, T b) {\n    return a * b;\n}\n\ntemplate<Printable T>\nvoid print(const T& value) {\n    cout << value << endl;\n}\n\nint main() {\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << multiply(4, 2) << endl;\n    \n    print(42);\n    print(\"Hello\");\n    print(3.14);\n    \n    // add(\"a\", \"b\");  // Error: string does not satisfy Numeric concept\n    \n    return 0;\n}',
  hint: 'Concepts provide expressive constraints for template abstractions.'
},
{
  id: 'cpp_abstraction_19',
  topicId: 'cpp_abstraction',
  question: 'Use inline namespaces for versioning abstraction.',
  mathSolution: 'Inline namespaces hide versioning details from users.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nnamespace Library {\n    inline namespace v2 {\n        void function() {\n            cout << \"Library v2 function called\" << endl;\n        }\n        \n        class Widget {\n        public:\n            void process() { cout << \"Widget v2 process\" << endl; }\n        };\n    }\n    \n    namespace v1 {\n        void function() {\n            cout << \"Library v1 function called\" << endl;\n        }\n    }\n}\n\nint main() {\n    Library::function();  // Calls v2 version (inline)\n    Library::Widget w;\n    w.process();\n    \n    // Can still access v1 explicitly\n    Library::v1::function();\n    \n    return 0;\n}',
  hint: 'Inline namespaces abstract library versioning from users.'
},
{
  id: 'cpp_abstraction_20',
  topicId: 'cpp_abstraction',
  question: 'Use attribute specifiers for compiler abstraction.',
  mathSolution: 'Attributes provide implementation-defined behavior hints.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n[[nodiscard]] int getValue() {\n    return 42;\n}\n\n[[deprecated(\"Use newFunction() instead\")]]\nvoid oldFunction() {\n    cout << \"Old function\" << endl;\n}\n\nvoid newFunction() {\n    cout << \"New function\" << endl;\n}\n\n[[noreturn]] void fatalError() {\n    cout << \"Fatal error!\" << endl;\n    throw runtime_error(\"Fatal\");\n}\n\n[[maybe_unused]] int debugInfo = 100;\n\nint main() {\n    // getValue();  // Warning: nodiscard ignored\n    int val = getValue();  // OK\n    \n    oldFunction();  // Deprecated warning\n    newFunction();\n    \n    return 0;\n}',
  hint: 'Attributes abstract compiler-specific hints and warnings.'
},
{
  id: 'cpp_abstraction_21',
  topicId: 'cpp_abstraction',
  question: 'Use pimpl idiom for implementation hiding.',
  mathSolution: 'Pointer to Implementation hides class internals.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\n// Public interface (Widget.h)\nclass Widget {\npublic:\n    Widget();\n    ~Widget();\n    void process();\n    \nprivate:\n    struct Impl;\n    unique_ptr<Impl> pImpl;\n};\n\n// Implementation (Widget.cpp)\nstruct Widget::Impl {\n    int data;\n    string name;\n    \n    void doWork() {\n        cout << \"Working with \" << name << \": \" << data << endl;\n    }\n};\n\nWidget::Widget() : pImpl(make_unique<Impl>()) {\n    pImpl->data = 42;\n    pImpl->name = \"Widget\";\n}\n\nWidget::~Widget() = default;\n\nvoid Widget::process() {\n    pImpl->doWork();\n}\n\nint main() {\n    Widget w;\n    w.process();\n    \n    return 0;\n}',
  hint: 'Pimpl idiom hides implementation details from header files.'
},
{
  "id": "cpp_abstraction_22",
  "topicId": "cpp_abstraction",
  "question": "Use factory method pattern for object creation abstraction.",
  "mathSolution": "Factory abstracts object creation logic.",
  "codeSolution": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ConcreteProductA : public Product {\npublic:\n    void use() override { cout << \"Using Product A\" << endl; }\n};\n\nclass ConcreteProductB : public Product {\npublic:\n    void use() override { cout << \"Using Product B\" << endl; }\n};\n\nclass Factory {\npublic:\n    static unique_ptr<Product> create(char type) {\n        switch(type) {\n            case 'A': return make_unique<ConcreteProductA>();\n            case 'B': return make_unique<ConcreteProductB>();\n            default: return nullptr;\n        }\n    }\n};\n\nint main() {\n    auto product = Factory::create('A');\n    if (product) product->use();\n    \n    product = Factory::create('B');\n    if (product) product->use();\n    \n    return 0;\n}",
  "hint": "Factory method abstracts object creation from client code."
},
{
  id: 'cpp_abstraction_23',
  topicId: 'cpp_abstraction',
  question: 'Use builder pattern for complex object construction abstraction.',
  mathSolution: 'Builder abstracts step-by-step object construction.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Computer {\nprivate:\n    string cpu;\n    string ram;\n    string storage;\n    string gpu;\n    \npublic:\n    void setCPU(const string& c) { cpu = c; }\n    void setRAM(const string& r) { ram = r; }\n    void setStorage(const string& s) { storage = s; }\n    void setGPU(const string& g) { gpu = g; }\n    \n    void specs() const {\n        cout << \"CPU: \" << cpu << \", RAM: \" << ram \n             << \", Storage: \" << storage << \", GPU: \" << gpu << endl;\n    }\n};\n\nclass ComputerBuilder {\nprivate:\n    Computer computer;\n    \npublic:\n    ComputerBuilder& setCPU(const string& cpu) {\n        computer.setCPU(cpu);\n        return *this;\n    }\n    \n    ComputerBuilder& setRAM(const string& ram) {\n        computer.setRAM(ram);\n        return *this;\n    }\n    \n    ComputerBuilder& setStorage(const string& storage) {\n        computer.setStorage(storage);\n        return *this;\n    }\n    \n    ComputerBuilder& setGPU(const string& gpu) {\n        computer.setGPU(gpu);\n        return *this;\n    }\n    \n    Computer build() {\n        return computer;\n    }\n};\n\nint main() {\n    Computer gamingPC = ComputerBuilder()\n        .setCPU(\"Intel i9\")\n        .setRAM(\"32GB\")\n        .setStorage(\"1TB SSD\")\n        .setGPU(\"RTX 4080\")\n        .build();\n    \n    gamingPC.specs();\n    \n    return 0;\n}',
  hint: 'Builder pattern abstracts complex object construction.'
},
{
  id: 'cpp_abstraction_24',
  topicId: 'cpp_abstraction',
  question: 'Use facade pattern for subsystem abstraction.',
  mathSolution: 'Facade provides simplified interface to complex subsystem.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass CPU {\npublic:\n    void start() { cout << \"CPU starting...\" << endl; }\n    void execute() { cout << \"CPU executing\" << endl; }\n};\n\nclass Memory {\npublic:\n    void load() { cout << \"Loading memory...\" << endl; }\n};\n\nclass HardDrive {\npublic:\n    void read() { cout << \"Reading from hard drive...\" << endl; }\n};\n\nclass ComputerFacade {\nprivate:\n    CPU cpu;\n    Memory memory;\n    HardDrive hardDrive;\n    \npublic:\n    void startComputer() {\n        cout << \"Starting computer...\" << endl;\n        cpu.start();\n        memory.load();\n        hardDrive.read();\n        cpu.execute();\n        cout << \"Computer ready!\" << endl;\n    }\n};\n\nint main() {\n    ComputerFacade computer;\n    computer.startComputer();\n    \n    return 0;\n}',
  hint: 'Facade pattern abstracts complex system behind simple interface.'
},
{
  id: 'cpp_abstraction_25',
  topicId: 'cpp_abstraction',
  question: 'Use proxy pattern for access control abstraction.',
  mathSolution: 'Proxy controls access to real object.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Image {\npublic:\n    virtual void display() = 0;\n    virtual ~Image() {}\n};\n\nclass RealImage : public Image {\nprivate:\n    string filename;\n    \n    void loadFromDisk() {\n        cout << \"Loading: \" << filename << endl;\n    }\n    \npublic:\n    RealImage(const string& file) : filename(file) {\n        loadFromDisk();\n    }\n    \n    void display() override {\n        cout << \"Displaying: \" << filename << endl;\n    }\n};\n\nclass ImageProxy : public Image {\nprivate:\n    string filename;\n    unique_ptr<RealImage> realImage;\n    \npublic:\n    ImageProxy(const string& file) : filename(file) {}\n    \n    void display() override {\n        if (!realImage) {\n            realImage = make_unique<RealImage>(filename);\n        }\n        realImage->display();\n    }\n};\n\nint main() {\n    ImageProxy image(\"photo.jpg\");\n    cout << \"Proxy created, image not loaded yet\" << endl;\n    image.display();\n    image.display();  // Already loaded\n    \n    return 0;\n}',
  hint: 'Proxy pattern abstracts access control and lazy initialization.'
},
{
  id: 'cpp_abstraction_26',
  topicId: 'cpp_abstraction',
  question: 'Use decorator pattern for dynamic behavior abstraction.',
  mathSolution: 'Decorator adds behavior without modifying original object.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Coffee {\npublic:\n    virtual double cost() const = 0;\n    virtual string description() const = 0;\n    virtual ~Coffee() {}\n};\n\nclass SimpleCoffee : public Coffee {\npublic:\n    double cost() const override { return 5.0; }\n    string description() const override { return \"Simple coffee\"; }\n};\n\nclass CoffeeDecorator : public Coffee {\nprotected:\n    unique_ptr<Coffee> coffee;\n    \npublic:\n    CoffeeDecorator(unique_ptr<Coffee> c) : coffee(move(c)) {}\n};\n\nclass MilkDecorator : public CoffeeDecorator {\npublic:\n    MilkDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    double cost() const override { return coffee->cost() + 2.0; }\n    string description() const override { return coffee->description() + \", milk\"; }\n};\n\nclass SugarDecorator : public CoffeeDecorator {\npublic:\n    SugarDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    double cost() const override { return coffee->cost() + 1.0; }\n    string description() const override { return coffee->description() + \", sugar\"; }\n};\n\nint main() {\n    auto coffee = make_unique<SimpleCoffee>();\n    coffee = make_unique<MilkDecorator>(move(coffee));\n    coffee = make_unique<SugarDecorator>(move(coffee));\n    \n    cout << coffee->description() << \": $\" << coffee->cost() << endl;\n    \n    return 0;\n}',
  hint: 'Decorator pattern abstracts dynamic behavior addition.'
},
{
  id: 'cpp_abstraction_27',
  topicId: 'cpp_abstraction',
  question: 'Use strategy pattern for algorithm abstraction.',
  mathSolution: 'Strategy encapsulates interchangeable algorithms.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass SortStrategy {\npublic:\n    virtual void sort(vector<int>& data) = 0;\n    virtual ~SortStrategy() {}\n};\n\nclass BubbleSort : public SortStrategy {\npublic:\n    void sort(vector<int>& data) override {\n        cout << \"Using bubble sort\" << endl;\n        for (size_t i = 0; i < data.size(); i++) {\n            for (size_t j = 0; j < data.size() - i - 1; j++) {\n                if (data[j] > data[j + 1]) {\n                    swap(data[j], data[j + 1]);\n                }\n            }\n        }\n    }\n};\n\nclass QuickSort : public SortStrategy {\nprivate:\n    void quickSort(vector<int>& data, int left, int right) {\n        if (left >= right) return;\n        int pivot = data[right];\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (data[j] <= pivot) swap(data[i++], data[j]);\n        }\n        swap(data[i], data[right]);\n        quickSort(data, left, i - 1);\n        quickSort(data, i + 1, right);\n    }\n    \npublic:\n    void sort(vector<int>& data) override {\n        cout << \"Using quick sort\" << endl;\n        quickSort(data, 0, data.size() - 1);\n    }\n};\n\nclass DataProcessor {\nprivate:\n    unique_ptr<SortStrategy> strategy;\n    vector<int> data;\n    \npublic:\n    void setStrategy(unique_ptr<SortStrategy> s) {\n        strategy = move(s);\n    }\n    \n    void addData(int val) { data.push_back(val); }\n    \n    void process() {\n        if (strategy) {\n            strategy->sort(data);\n        }\n    }\n    \n    void display() {\n        for (int val : data) cout << val << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    DataProcessor processor;\n    processor.addData(5);\n    processor.addData(2);\n    processor.addData(8);\n    processor.addData(1);\n    processor.addData(9);\n    \n    processor.setStrategy(make_unique<BubbleSort>());\n    processor.process();\n    processor.display();\n    \n    return 0;\n}',
  hint: 'Strategy pattern abstracts interchangeable algorithms.'
},
{
  id: 'cpp_abstraction_28',
  topicId: 'cpp_abstraction',
  question: 'Use observer pattern for event notification abstraction.',
  mathSolution: 'Observer abstracts communication between objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Observer {\npublic:\n    virtual void update(const string& message) = 0;\n    virtual ~Observer() {}\n};\n\nclass Subject {\nprivate:\n    vector<Observer*> observers;\n    \npublic:\n    void attach(Observer* obs) {\n        observers.push_back(obs);\n    }\n    \n    void notify(const string& message) {\n        for (Observer* obs : observers) {\n            obs->update(message);\n        }\n    }\n};\n\nclass Logger : public Observer {\npublic:\n    void update(const string& message) override {\n        cout << \"[LOG] \" << message << endl;\n    }\n};\n\nclass EmailNotifier : public Observer {\npublic:\n    void update(const string& message) override {\n        cout << \"[EMAIL] Sending: \" << message << endl;\n    }\n};\n\nclass DataModel : public Subject {\nprivate:\n    string data;\n    \npublic:\n    void setData(const string& newData) {\n        data = newData;\n        notify(\"Data changed to: \" + data);\n    }\n};\n\nint main() {\n    DataModel model;\n    Logger logger;\n    EmailNotifier email;\n    \n    model.attach(&logger);\n    model.attach(&email);\n    \n    model.setData(\"Hello World\");\n    model.setData(\"New Value\");\n    \n    return 0;\n}',
  hint: 'Observer pattern abstracts event-driven communication.'
},
{
  id: 'cpp_abstraction_29',
  topicId: 'cpp_abstraction',
  question: 'Use command pattern for operation abstraction.',
  mathSolution: 'Command encapsulates requests as objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Command {\npublic:\n    virtual void execute() = 0;\n    virtual void undo() = 0;\n    virtual ~Command() {}\n};\n\nclass Light {\npublic:\n    void on() { cout << \"Light is ON\" << endl; }\n    void off() { cout << \"Light is OFF\" << endl; }\n};\n\nclass LightOnCommand : public Command {\nprivate:\n    Light& light;\n    \npublic:\n    LightOnCommand(Light& l) : light(l) {}\n    void execute() override { light.on(); }\n    void undo() override { light.off(); }\n};\n\nclass LightOffCommand : public Command {\nprivate:\n    Light& light;\n    \npublic:\n    LightOffCommand(Light& l) : light(l) {}\n    void execute() override { light.off(); }\n    void undo() override { light.on(); }\n};\n\nclass RemoteControl {\nprivate:\n    vector<unique_ptr<Command>> history;\n    \npublic:\n    void press(unique_ptr<Command> cmd) {\n        cmd->execute();\n        history.push_back(move(cmd));\n    }\n    \n    void undo() {\n        if (!history.empty()) {\n            history.back()->undo();\n            history.pop_back();\n        }\n    }\n};\n\nint main() {\n    Light livingRoom;\n    RemoteControl remote;\n    \n    remote.press(make_unique<LightOnCommand>(livingRoom));\n    remote.press(make_unique<LightOffCommand>(livingRoom));\n    remote.undo();\n    \n    return 0;\n}',
  hint: 'Command pattern abstracts operations as objects.'
},
{
  id: 'cpp_abstraction_30',
  topicId: 'cpp_abstraction',
  question: 'Use state pattern for state-based behavior abstraction.',
  mathSolution: 'State encapsulates behavior for different states.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass State {\npublic:\n    virtual void handle() = 0;\n    virtual ~State() {}\n};\n\nclass StateA : public State {\npublic:\n    void handle() override {\n        cout << \"Handling in State A\" << endl;\n    }\n};\n\nclass StateB : public State {\npublic:\n    void handle() override {\n        cout << \"Handling in State B\" << endl;\n    }\n};\n\nclass Context {\nprivate:\n    unique_ptr<State> state;\n    \npublic:\n    void setState(unique_ptr<State> s) {\n        state = move(s);\n    }\n    \n    void request() {\n        if (state) state->handle();\n    }\n};\n\nint main() {\n    Context context;\n    \n    context.setState(make_unique<StateA>());\n    context.request();\n    \n    context.setState(make_unique<StateB>());\n    context.request();\n    \n    return 0;\n}',
  hint: 'State pattern abstracts state-specific behavior.'
},
{
  id: 'cpp_abstraction_31',
  topicId: 'cpp_abstraction',
  question: 'Use visitor pattern for operation abstraction on object structures.',
  mathSolution: 'Visitor abstracts operations on composite objects.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Circle;\nclass Rectangle;\n\nclass Visitor {\npublic:\n    virtual void visit(Circle& c) = 0;\n    virtual void visit(Rectangle& r) = 0;\n    virtual ~Visitor() {}\n};\n\nclass Shape {\npublic:\n    virtual void accept(Visitor& v) = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(double r) : radius(r) {}\n    double getRadius() const { return radius; }\n    void accept(Visitor& v) override { v.visit(*this); }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    double getWidth() const { return width; }\n    double getHeight() const { return height; }\n    void accept(Visitor& v) override { v.visit(*this); }\n};\n\nclass AreaVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override {\n        cout << \"Circle area: \" << 3.14159 * c.getRadius() * c.getRadius() << endl;\n    }\n    void visit(Rectangle& r) override {\n        cout << \"Rectangle area: \" << r.getWidth() * r.getHeight() << endl;\n    }\n};\n\nclass DrawVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override { cout << \"Drawing Circle\" << endl; }\n    void visit(Rectangle& r) override { cout << \"Drawing Rectangle\" << endl; }\n};\n\nint main() {\n    Circle circle(5);\n    Rectangle rect(4, 6);\n    \n    AreaVisitor areaCalc;\n    DrawVisitor drawer;\n    \n    circle.accept(areaCalc);\n    circle.accept(drawer);\n    rect.accept(areaCalc);\n    rect.accept(drawer);\n    \n    return 0;\n}',
  hint: 'Visitor pattern abstracts operations on object structures.'
},
{
  id: 'cpp_abstraction_32',
  topicId: 'cpp_abstraction',
  question: 'Use iterator pattern for container traversal abstraction.',
  mathSolution: 'Iterator abstracts sequential access to containers.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T>\nclass Container {\nprivate:\n    vector<T> items;\n    \npublic:\n    void add(const T& item) { items.push_back(item); }\n    \n    class Iterator {\n    private:\n        typename vector<T>::iterator it;\n    public:\n        Iterator(typename vector<T>::iterator i) : it(i) {}\n        T& operator*() { return *it; }\n        Iterator& operator++() { ++it; return *this; }\n        bool operator!=(const Iterator& other) { return it != other.it; }\n    };\n    \n    Iterator begin() { return Iterator(items.begin()); }\n    Iterator end() { return Iterator(items.end()); }\n};\n\nint main() {\n    Container<int> numbers;\n    numbers.add(10);\n    numbers.add(20);\n    numbers.add(30);\n    \n    for (auto it = numbers.begin(); it != numbers.end(); ++it) {\n        cout << *it << \" \";\n    }\n    cout << endl;\n    \n    for (int n : numbers) {  // Works with range-based for\n        cout << n << \" \";\n    }\n    cout << endl;\n    \n    return 0;\n}',
  hint: 'Iterator pattern abstracts container traversal.'
},
{
  id: 'cpp_abstraction_33',
  topicId: 'cpp_abstraction',
  question: 'Use adapter pattern for interface compatibility abstraction.',
  mathSolution: 'Adapter converts one interface to another.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass OldSystem {\npublic:\n    void oldRequest() {\n        cout << \"Old system request\" << endl;\n    }\n};\n\nclass NewSystem {\npublic:\n    virtual void newRequest() = 0;\n    virtual ~NewSystem() {}\n};\n\nclass Adapter : public NewSystem {\nprivate:\n    unique_ptr<OldSystem> oldSystem;\n    \npublic:\n    Adapter() : oldSystem(make_unique<OldSystem>()) {}\n    \n    void newRequest() override {\n        oldSystem->oldRequest();\n    }\n};\n\nclass Client {\nprivate:\n    unique_ptr<NewSystem> system;\n    \npublic:\n    Client(unique_ptr<NewSystem> s) : system(move(s)) {}\n    \n    void execute() {\n        system->newRequest();\n    }\n};\n\nint main() {\n    Client client(make_unique<Adapter>());\n    client.execute();\n    \n    return 0;\n}',
  hint: 'Adapter pattern abstracts interface conversion.'
},
{
  id: 'cpp_abstraction_34',
  topicId: 'cpp_abstraction',
  question: 'Use bridge pattern for abstraction and implementation decoupling.',
  mathSolution: 'Bridge separates abstraction from implementation.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass DrawingAPI {\npublic:\n    virtual void drawCircle(double x, double y, double r) = 0;\n    virtual ~DrawingAPI() {}\n};\n\nclass DrawingAPI1 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double r) override {\n        cout << \"API1: circle at (\" << x << \",\" << y << \") r=\" << r << endl;\n    }\n};\n\nclass DrawingAPI2 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double r) override {\n        cout << \"API2: circle at (\" << x << \",\" << y << \") r=\" << r << endl;\n    }\n};\n\nclass Shape {\nprotected:\n    unique_ptr<DrawingAPI> drawingAPI;\n    \npublic:\n    Shape(unique_ptr<DrawingAPI> api) : drawingAPI(move(api)) {}\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass CircleShape : public Shape {\nprivate:\n    double x, y, radius;\n    \npublic:\n    CircleShape(double cx, double cy, double r, unique_ptr<DrawingAPI> api)\n        : Shape(move(api)), x(cx), y(cy), radius(r) {}\n    \n    void draw() override {\n        drawingAPI->drawCircle(x, y, radius);\n    }\n};\n\nint main() {\n    CircleShape circle1(5, 5, 10, make_unique<DrawingAPI1>());\n    CircleShape circle2(10, 10, 20, make_unique<DrawingAPI2>());\n    \n    circle1.draw();\n    circle2.draw();\n    \n    return 0;\n}',
  hint: 'Bridge pattern abstracts separation of interface from implementation.'
},
{
  "id": "cpp_abstraction_35",
  "topicId": "cpp_abstraction",
  "question": "Use flyweight pattern for shared state abstraction.",
  "mathSolution": "Flyweight shares common state among many objects.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <memory>\n#include <string>\nusing namespace std;\n\nclass Character {\nprivate:\n    char symbol;\n    string font;\n    int size;\n    \npublic:\n    Character(char s, const string& f, int sz) : symbol(s), font(f), size(sz) {}\n    \n    void display(int x, int y) const {\n        cout << \"Character '\" << symbol << \"' at (\" << x << \",\" << y \n             << \") font: \" << font << \", size: \" << size << endl;\n    }\n};\n\nclass CharacterFactory {\nprivate:\n    unordered_map<string, shared_ptr<Character>> characters;\n    \n    string getKey(char c, const string& font, int size) {\n        return string(1, c) + font + to_string(size);\n    }\n    \npublic:\n    shared_ptr<Character> getCharacter(char c, const string& font, int size) {\n        string key = getKey(c, font, size);\n        if (characters.find(key) == characters.end()) {\n            characters[key] = make_shared<Character>(c, font, size);\n            cout << \"Creating new character: \" << key << endl;\n        }\n        return characters[key];\n    }\n    \n    size_t getCacheSize() const {\n        return characters.size();\n    }\n};\n\nint main() {\n    CharacterFactory factory;\n    \n    auto c1 = factory.getCharacter('A', \"Arial\", 12);\n    auto c2 = factory.getCharacter('A', \"Arial\", 12);  // Shared (reused)\n    auto c3 = factory.getCharacter('B', \"Arial\", 12);  // New\n    \n    c1->display(0, 0);\n    c2->display(10, 0);\n    c3->display(20, 0);\n    \n    cout << \"\\nTotal unique characters cached: \" << factory.getCacheSize() << endl;\n    \n    return 0;\n}",
  "hint": "Flyweight pattern abstracts shared state among similar objects."
},
{
  id: 'cpp_abstraction_36',
  topicId: 'cpp_abstraction',
  question: 'Use mediator pattern for communication abstraction.',
  mathSolution: 'Mediator centralizes communication between objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Colleague;\n\nclass Mediator {\npublic:\n    virtual void notify(Colleague* sender, const string& event) = 0;\n    virtual ~Mediator() {}\n};\n\nclass Colleague {\nprotected:\n    Mediator* mediator;\n    \npublic:\n    Colleague(Mediator* m) : mediator(m) {}\n    virtual ~Colleague() {}\n};\n\nclass ConcreteMediator : public Mediator {\nprivate:\n    vector<Colleague*> colleagues;\n    \npublic:\n    void addColleague(Colleague* c) { colleagues.push_back(c); }\n    \n    void notify(Colleague* sender, const string& event) override {\n        for (Colleague* c : colleagues) {\n            if (c != sender) {\n                cout << \"Mediator forwarding: \" << event << endl;\n            }\n        }\n    }\n};\n\nclass Component1 : public Colleague {\npublic:\n    Component1(Mediator* m) : Colleague(m) {}\n    void doSomething() {\n        cout << \"Component1 does something\" << endl;\n        mediator->notify(this, \"Event from Component1\");\n    }\n};\n\nclass Component2 : public Colleague {\npublic:\n    Component2(Mediator* m) : Colleague(m) {}\n    void doSomethingElse() {\n        cout << \"Component2 does something else\" << endl;\n        mediator->notify(this, \"Event from Component2\");\n    }\n};\n\nint main() {\n    ConcreteMediator mediator;\n    Component1 comp1(&mediator);\n    Component2 comp2(&mediator);\n    \n    mediator.addColleague(&comp1);\n    mediator.addColleague(&comp2);\n    \n    comp1.doSomething();\n    comp2.doSomethingElse();\n    \n    return 0;\n}',
  hint: 'Mediator pattern abstracts communication between objects.'
},
{
  id: 'cpp_abstraction_37',
  topicId: 'cpp_abstraction',
  question: 'Use memento pattern for state preservation abstraction.',
  mathSolution: 'Memento captures and restores object state.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Memento {\nprivate:\n    string state;\n    \npublic:\n    Memento(const string& s) : state(s) {}\n    string getState() const { return state; }\n};\n\nclass Originator {\nprivate:\n    string state;\n    \npublic:\n    void setState(const string& s) {\n        state = s;\n        cout << \"State set to: \" << state << endl;\n    }\n    \n    string getState() const { return state; }\n    \n    unique_ptr<Memento> createMemento() {\n        return make_unique<Memento>(state);\n    }\n    \n    void restoreMemento(unique_ptr<Memento> m) {\n        state = m->getState();\n        cout << \"State restored to: \" << state << endl;\n    }\n};\n\nclass Caretaker {\nprivate:\n    vector<unique_ptr<Memento>> mementos;\n    \npublic:\n    void addMemento(unique_ptr<Memento> m) {\n        mementos.push_back(move(m));\n    }\n    \n    unique_ptr<Memento> getMemento(int index) {\n        if (index >= 0 && index < mementos.size()) {\n            return move(mementos[index]);\n        }\n        return nullptr;\n    }\n};\n\nint main() {\n    Originator originator;\n    Caretaker caretaker;\n    \n    originator.setState(\"State 1\");\n    caretaker.addMemento(originator.createMemento());\n    \n    originator.setState(\"State 2\");\n    caretaker.addMemento(originator.createMemento());\n    \n    originator.setState(\"State 3\");\n    \n    originator.restoreMemento(caretaker.getMemento(0));\n    \n    return 0;\n}',
  hint: 'Memento pattern abstracts state capture and restoration.'
},
{
  id: 'cpp_abstraction_38',
  topicId: 'cpp_abstraction',
  question: 'Use prototype pattern for object cloning abstraction.',
  mathSolution: 'Prototype abstracts object creation through cloning.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Prototype {\npublic:\n    virtual unique_ptr<Prototype> clone() const = 0;\n    virtual void display() const = 0;\n    virtual ~Prototype() {}\n};\n\nclass ConcretePrototype : public Prototype {\nprivate:\n    int id;\n    string name;\n    double value;\n    \npublic:\n    ConcretePrototype(int i, const string& n, double v) \n        : id(i), name(n), value(v) {}\n    \n    ConcretePrototype(const ConcretePrototype& other)\n        : id(other.id), name(other.name), value(other.value) {}\n    \n    unique_ptr<Prototype> clone() const override {\n        return make_unique<ConcretePrototype>(*this);\n    }\n    \n    void display() const override {\n        cout << "ID: \" << id << \", Name: \" << name << \", Value: \" << value << endl;\n    }\n};\n\nint main() {\n    ConcretePrototype original(1, \"Original\", 99.99);\n    auto clone = original.clone();\n    \n    original.display();\n    clone->display();\n    \n    return 0;\n}',
  hint: 'Prototype pattern abstracts object cloning.'
},
{
  id: 'cpp_abstraction_39',
  topicId: 'cpp_abstraction',
  question: 'Use chain of responsibility for request handling abstraction.',
  mathSolution: 'Chain passes request along handler chain.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Handler {\nprotected:\n    unique_ptr<Handler> next;\n    \npublic:\n    void setNext(unique_ptr<Handler> h) {\n        next = move(h);\n    }\n    \n    virtual void handleRequest(int level) {\n        if (next) next->handleRequest(level);\n    }\n    \n    virtual ~Handler() {}\n};\n\nclass ConcreteHandler1 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 10) {\n            cout << \"Handler1 processed request level \" << level << endl;\n        } else {\n            Handler::handleRequest(level);\n        }\n    }\n};\n\nclass ConcreteHandler2 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 20) {\n            cout << \"Handler2 processed request level \" << level << endl;\n        } else {\n            Handler::handleRequest(level);\n        }\n    }\n};\n\nclass ConcreteHandler3 : public Handler {\npublic:\n    void handleRequest(int level) override {\n        if (level <= 30) {\n            cout << \"Handler3 processed request level \" << level << endl;\n        } else {\n            cout << \"Request level \" << level << \" cannot be processed\" << endl;\n        }\n    }\n};\n\nint main() {\n    auto h1 = make_unique<ConcreteHandler1>();\n    auto h2 = make_unique<ConcreteHandler2>();\n    auto h3 = make_unique<ConcreteHandler3>();\n    \n    h1->setNext(move(h2));\n    h1->setNext(move(h3));\n    \n    h1->handleRequest(5);\n    h1->handleRequest(15);\n    h1->handleRequest(25);\n    h1->handleRequest(35);\n    \n    return 0;\n}',
  hint: 'Chain of Responsibility abstracts request handling delegation.'
},
{
  id: 'cpp_abstraction_40',
  topicId: 'cpp_abstraction',
  question: 'Use interceptor pattern for cross-cutting concerns abstraction.',
  mathSolution: 'Interceptors abstract pre/post processing.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <functional>\n#include <chrono>\nusing namespace std;\n\nclass Interceptor {\npublic:\n    virtual void before(const string& method) = 0;\n    virtual void after(const string& method) = 0;\n    virtual ~Interceptor() {}\n};\n\nclass LoggingInterceptor : public Interceptor {\npublic:\n    void before(const string& method) override {\n        cout << "[LOG] Before calling " << method << endl;\n    }\n    \n    void after(const string& method) override {\n        cout << "[LOG] After calling " << method << endl;\n    }\n};\n\nclass TimingInterceptor : public Interceptor {\nprivate:\n    chrono::time_point<chrono::high_resolution_clock> start;\n    \npublic:\n    void before(const string& method) override {\n        start = chrono::high_resolution_clock::now();\n        cout << "[TIME] Starting " << method << endl;\n    }\n    \n    void after(const string& method) override {\n        auto end = chrono::high_resolution_clock::now();\n        auto duration = chrono::duration_cast<chrono::microseconds>(end - start);\n        cout << "[TIME] " << method << " took " << duration.count() << " microseconds" << endl;\n    }\n};\n\nclass Service {\nprivate:\n    vector<Interceptor*> interceptors;\n    \npublic:\n    void addInterceptor(Interceptor* i) { interceptors.push_back(i); }\n    \n    void execute(const string& method) {\n        for (auto i : interceptors) i->before(method);\n        cout << "Executing: " << method << endl;\n        for (auto i : interceptors) i->after(method);\n    }\n};\n\nint main() {\n    Service service;\n    LoggingInterceptor logger;\n    TimingInterceptor timer;\n    \n    service.addInterceptor(&logger);\n    service.addInterceptor(&timer);\n    \n    service.execute("processData");\n    \n    return 0;\n}',
  hint: 'Interceptor pattern abstracts cross-cutting concerns.'
},
//encapsulation
{
  id: 'cpp_encapsulation_1',
  topicId: 'cpp_encapsulation',
  question: 'Create a class with private data members and public getter/setter methods.',
  mathSolution: 'Encapsulation hides internal data, provides controlled access.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    void setName(string n) { name = n; }\n    string getName() { return name; }\n    \n    void setAge(int a) {\n        if (a >= 0 && a <= 150) age = a;\n        else age = 0;\n    }\n    int getAge() { return age; }\n};\n\nint main() {\n    Person p;\n    p.setName("John");\n    p.setAge(25);\n    cout << p.getName() << " is " << p.getAge() << " years old" << endl;\n    return 0;\n}',
  hint: 'Private members are only accessible within the class, public methods provide controlled access.'
},
{
  id: 'cpp_encapsulation_2',
  topicId: 'cpp_encapsulation',
  question: 'Use constructor to initialize encapsulated data members.',
  mathSolution: 'Constructor initializes private members during object creation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:\n    int rollNo;\n    string name;\n    double marks;\n    \npublic:\n    Student(int r, string n, double m) : rollNo(r), name(n), marks(m) {}\n    \n    void display() {\n        cout << "Roll: " << rollNo << ", Name: " << name << ", Marks: " << marks << endl;\n    }\n};\n\nint main() {\n    Student s(101, "Alice", 95.5);\n    s.display();\n    return 0;\n}',
  hint: 'Constructor provides controlled initialization of encapsulated data.'
},
{
  id: 'cpp_encapsulation_3',
  topicId: 'cpp_encapsulation',
  question: 'Use private member functions for internal implementation details.',
  mathSolution: 'Private helper functions encapsulate internal logic.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass Calculator {\nprivate:\n    double validate(double value) {\n        return (value < 0) ? 0 : value;\n    }\n    \n    double internalCompute(double a, double b) {\n        return sqrt(a * a + b * b);\n    }\n    \npublic:\n    double compute(double x, double y) {\n        x = validate(x);\n        y = validate(y);\n        return internalCompute(x, y);\n    }\n};\n\nint main() {\n    Calculator calc;\n    cout << calc.compute(3, 4) << endl;\n    cout << calc.compute(-3, 4) << endl;\n    return 0;\n}',
  hint: 'Private functions hide internal implementation from class users.'
},
{
  id: 'cpp_encapsulation_4',
  topicId: 'cpp_encapsulation',
  question: 'Use read-only properties by providing only getter (no setter).',
  mathSolution: 'Getter without setter creates read-only encapsulated data.',
  codeSolution: '#include <iostream>\n#include <ctime>\nusing namespace std;\n\nclass ReadOnly {\nprivate:\n    int id;\n    string timestamp;\n    \npublic:\n    ReadOnly(int i) : id(i) {\n        time_t now = time(nullptr);\n        timestamp = ctime(&now);\n    }\n    \n    int getId() const { return id; }\n    string getTimestamp() const { return timestamp; }\n    // No setters provided\n};\n\nint main() {\n    ReadOnly obj(100);\n    cout << "ID: " << obj.getId() << endl;\n    cout << "Created: " << obj.getTimestamp();\n    // obj.setId(200); // Error: no setter available\n    return 0;\n}',
  hint: 'Encapsulation enables read-only properties by omitting setters.'
},
{
  id: 'cpp_encapsulation_5',
  topicId: 'cpp_encapsulation',
  question: 'Use write-only properties by providing only setter (no getter).',
  mathSolution: 'Setter without getter creates write-only encapsulated data.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass PasswordManager {\nprivate:\n    string password;\n    bool validated;\n    \npublic:\n    void setPassword(const string& pwd) {\n        if (pwd.length() >= 6) {\n            password = pwd;\n            validated = true;\n        } else {\n            validated = false;\n        }\n    }\n    \n    bool isValid() const { return validated; }\n    // No getter for password - write-only\n};\n\nint main() {\n    PasswordManager pm;\n    pm.setPassword("secret123");\n    cout << "Password " << (pm.isValid() ? "valid" : "invalid") << endl;\n    // cout << pm.getPassword(); // Error: no getter\n    return 0;\n}',
  hint: 'Write-only properties allow setting values without reading them.'
},
{
  id: 'cpp_encapsulation_6',
  topicId: 'cpp_encapsulation',
  question: 'Use validation in setters to maintain data integrity.',
  mathSolution: 'Setters validate input before modifying encapsulated data.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;\n    int pin;\n    int failedAttempts;\n    \npublic:\n    BankAccount(double initial, int p) : balance(initial), pin(p), failedAttempts(0) {}\n    \n    bool withdraw(double amount, int inputPin) {\n        if (inputPin != pin) {\n            failedAttempts++;\n            return false;\n        }\n        if (failedAttempts >= 3) return false;\n        if (amount <= 0 || amount > balance) return false;\n        \n        balance -= amount;\n        failedAttempts = 0;\n        return true;\n    }\n    \n    double getBalance() const { return balance; }\n};\n\nint main() {\n    BankAccount acc(1000, 1234);\n    if (acc.withdraw(500, 1234))\n        cout << "Withdrawal successful, balance: " << acc.getBalance() << endl;\n    else\n        cout << "Withdrawal failed" << endl;\n    return 0;\n}',
  hint: 'Setters encapsulate business rules and validation logic.'
},
{
  id: 'cpp_encapsulation_7',
  topicId: 'cpp_encapsulation',
  question: 'Use const member functions for read-only access.',
  mathSolution: 'const methods guarantee no modification of object state.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    double width, height;\n    \npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    \n    double getWidth() const { return width; }\n    double getHeight() const { return height; }\n    double area() const { return width * height; }\n    double perimeter() const { return 2 * (width + height); }\n    \n    void scale(double factor) {\n        width *= factor;\n        height *= factor;\n    }\n};\n\nint main() {\n    const Rectangle rect(10, 20);\n    cout << "Area: " << rect.area() << endl;\n    cout << "Perimeter: " << rect.perimeter() << endl;\n    // rect.scale(2); // Error: cannot call non-const on const object\n    return 0;\n}',
  hint: 'const member functions encapsulate read-only access behavior.'
},
{
  id: 'cpp_encapsulation_8',
  topicId: 'cpp_encapsulation',
  question: 'Use mutable members for cache in const functions.',
  mathSolution: 'mutable allows modification in const functions for caching.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass Circle {\nprivate:\n    double radius;\n    mutable double cachedArea;\n    mutable bool areaValid;\n    \npublic:\n    Circle(double r) : radius(r), cachedArea(0), areaValid(false) {}\n    \n    double area() const {\n        if (!areaValid) {\n            cachedArea = 3.14159 * radius * radius;\n            areaValid = true;\n        }\n        return cachedArea;\n    }\n    \n    void setRadius(double r) {\n        radius = r;\n        areaValid = false;  // Invalidate cache\n    }\n};\n\nint main() {\n    Circle c(5);\n    cout << "Area: " << c.area() << endl;\n    c.setRadius(10);\n    cout << "New area: " << c.area() << endl;\n    return 0;\n}',
  hint: 'mutable members allow caching in otherwise const-correct interfaces.'
},
{
  id: 'cpp_encapsulation_9',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate dynamic memory allocation with RAII.',
  mathSolution: 'Constructor allocates, destructor deallocates encapsulated resources.',
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char* data;\n    size_t length;\n    \npublic:\n    String(const char* str) {\n        length = strlen(str);\n        data = new char[length + 1];\n        strcpy(data, str);\n    }\n    \n    ~String() {\n        delete[] data;\n    }\n    \n    void display() const {\n        cout << data << endl;\n    }\n    \n    size_t size() const { return length; }\n    \n    // Prevent copying (encapsulate ownership)\n    String(const String&) = delete;\n    String& operator=(const String&) = delete;\n};\n\nint main() {\n    String str("Hello World");\n    str.display();\n    cout << "Length: " << str.size() << endl;\n    return 0;\n}',
  hint: 'RAII encapsulates resource management (allocation and deallocation).'
},
{
  id: 'cpp_encapsulation_10',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate a counter with static member for instance tracking.',
  mathSolution: 'Static member encapsulates class-level data shared across instances.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Widget {\nprivate:\n    static int instanceCount;\n    int id;\n    \npublic:\n    Widget() {\n        id = ++instanceCount;\n        cout << "Widget " << id << " created\\n";\n    }\n    \n    ~Widget() {\n        cout << "Widget " << id << " destroyed\\n";\n        instanceCount--;\n    }\n    \n    static int getInstanceCount() { return instanceCount; }\n    int getId() const { return id; }\n};\n\nint Widget::instanceCount = 0;\n\nint main() {\n    cout << "Initial count: " << Widget::getInstanceCount() << endl;\n    Widget w1, w2, w3;\n    cout << "Current count: " << Widget::getInstanceCount() << endl;\n    return 0;\n}',
  hint: 'Static members encapsulate data shared by all instances of a class.'
},
{
  id: 'cpp_encapsulation_11',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate data with access specifiers in inheritance.',
  mathSolution: 'Protected members are encapsulated for derived classes.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int privateData;\nprotected:\n    int protectedData;\npublic:\n    int publicData;\n    \n    Base() : privateData(1), protectedData(2), publicData(3) {}\n};\n\nclass Derived : public Base {\npublic:\n    void access() {\n        // cout << privateData; // Error: private in base\n        cout << "Protected: " << protectedData << endl;\n        cout << "Public: " << publicData << endl;\n    }\n};\n\nint main() {\n    Derived d;\n    d.access();\n    cout << "Public from outside: " << d.publicData << endl;\n    // cout << d.protectedData; // Error: protected\n    return 0;\n}',
  hint: 'Protected members encapsulate data for inheritance hierarchies.'
},
{
  id: 'cpp_encapsulation_12',
  topicId: 'cpp_encapsulation',
  question: 'Use friend function to access private members while maintaining encapsulation.',
  mathSolution: 'Friend functions provide controlled access without breaking encapsulation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int length, width, height;\n    \npublic:\n    Box(int l, int w, int h) : length(l), width(w), height(h) {}\n    \n    friend int volume(Box b);\n    friend class BoxCalculator;\n};\n\nint volume(Box b) {\n    return b.length * b.width * b.height;\n}\n\nclass BoxCalculator {\npublic:\n    int surfaceArea(Box b) {\n        return 2 * (b.length * b.width + b.width * b.height + b.height * b.length);\n    }\n};\n\nint main() {\n    Box box(10, 5, 3);\n    cout << "Volume: " << volume(box) << endl;\n    \n    BoxCalculator calc;\n    cout << "Surface area: " << calc.surfaceArea(box) << endl;\n    \n    return 0;\n}',
  hint: 'Friend functions/classes provide controlled access while preserving encapsulation.'
},
{
  id: 'cpp_encapsulation_13',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate data with property-like access using getters/setters.',
  mathSolution: 'Getters/setters provide controlled property access.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Employee {\nprivate:\n    string name;\n    double salary;\n    int id;\n    \npublic:\n    void setName(const string& n) { name = n; }\n    string getName() const { return name; }\n    \n    void setSalary(double s) {\n        if (s >= 0) salary = s;\n    }\n    double getSalary() const { return salary; }\n    \n    void setId(int i) { id = i; }\n    int getId() const { return id; }\n    \n    void giveRaise(double percent) {\n        if (percent > 0) salary *= (1 + percent / 100);\n    }\n};\n\nint main() {\n    Employee emp;\n    emp.setName("John");\n    emp.setSalary(50000);\n    emp.setId(1001);\n    \n    cout << emp.getName() << " (ID: " << emp.getId() << ") earns $" << emp.getSalary() << endl;\n    emp.giveRaise(10);\n    cout << "After raise: $" << emp.getSalary() << endl;\n    \n    return 0;\n}',
  hint: 'Property access methods encapsulate data with business logic.'
},
{
  id: 'cpp_encapsulation_14',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate collection data with iteration support.',
  mathSolution: 'Collection encapsulation provides safe iteration methods.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass IntCollection {\nprivate:\n    vector<int> data;\n    \npublic:\n    void add(int value) {\n        if (value > 0) data.push_back(value);\n    }\n    \n    void removeLast() {\n        if (!data.empty()) data.pop_back();\n    }\n    \n    int get(int index) const {\n        if (index >= 0 && index < data.size()) return data[index];\n        return -1;\n    }\n    \n    size_t size() const { return data.size(); }\n    \n    void forEach(void (*func)(int)) const {\n        for (int val : data) func(val);\n    }\n};\n\nvoid print(int x) { cout << x << \" \"; }\n\nint main() {\n    IntCollection collection;\n    collection.add(10);\n    collection.add(20);\n    collection.add(30);\n    \n    cout << \"Collection: \";\n    collection.forEach(print);\n    cout << endl;\n    \n    cout << \"Size: \" << collection.size() << endl;\n    cout << \"Element at index 1: \" << collection.get(1) << endl;\n    \n    return 0;\n}',
  hint: 'Encapsulated collections provide controlled access to internal data.'
},
{
  id: 'cpp_encapsulation_15',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate configuration data with default values.',
  mathSolution: 'Encapsulated configuration with sensible defaults.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <map>\nusing namespace std;\n\nclass Config {\nprivate:\n    map<string, string> settings;\n    \npublic:\n    Config() {\n        // Default settings\n        settings["theme"] = "light";\n        settings["language"] = "en";\n        settings["timeout"] = "30";\n    }\n    \n    void set(const string& key, const string& value) {\n        settings[key] = value;\n    }\n    \n    string get(const string& key) const {\n        auto it = settings.find(key);\n        if (it != settings.end()) return it->second;\n        return "";\n    }\n    \n    int getInt(const string& key) const {\n        return stoi(get(key));\n    }\n    \n    bool getBool(const string& key) const {\n        string val = get(key);\n        return (val == "true" || val == "1" || val == "yes");\n    }\n};\n\nint main() {\n    Config config;\n    cout << "Theme: " << config.get("theme") << endl;\n    cout << "Timeout: " << config.getInt("timeout") << " seconds" << endl;\n    \n    config.set("theme", "dark");\n    cout << "New theme: " << config.get("theme") << endl;\n    \n    return 0;\n}',
  hint: 'Encapsulation hides configuration storage and provides type conversion.'
},
{
  id: 'cpp_encapsulation_16',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate lazy initialization (computation on first access).',
  mathSolution: 'Encapsulated lazy evaluation improves performance.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass LazyCalculator {\nprivate:\n    double input;\n    mutable double cachedResult;\n    mutable bool computed;\n    \npublic:\n    LazyCalculator(double x) : input(x), cachedResult(0), computed(false) {}\n    \n    double getSin() const {\n        if (!computed) {\n            cachedResult = sin(input);\n            computed = true;\n        }\n        return cachedResult;\n    }\n    \n    void setInput(double x) {\n        input = x;\n        computed = false;  // Invalidate cache\n    }\n};\n\nint main() {\n    LazyCalculator calc(3.14159 / 2);\n    cout << "First call: \" << calc.getSin() << endl;\n    cout << \"Second call: \" << calc.getSin() << \" (cached)\" << endl;\n    \n    calc.setInput(0);\n    cout << \"New input, recomputed: \" << calc.getSin() << endl;\n    \n    return 0;\n}',
  hint: 'Lazy initialization encapsulates computation optimization.'
},
{
  id: 'cpp_encapsulation_17',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate error handling and logging within class.',
  mathSolution: 'Encapsulated error management hides complexity.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass SafeDivide {\nprivate:\n    vector<string> errorLog;\n    double lastResult;\n    bool lastSuccess;\n    \n    void logError(const string& error) {\n        errorLog.push_back(error);\n    }\n    \npublic:\n    bool divide(double a, double b) {\n        if (b == 0) {\n            logError(\"Division by zero: \" + to_string(a) + \"/\" + to_string(b));\n            lastSuccess = false;\n            return false;\n        }\n        \n        lastResult = a / b;\n        lastSuccess = true;\n        return true;\n    }\n    \n    double getResult() const {\n        if (!lastSuccess) {\n            throw runtime_error(\"Last operation failed\");\n        }\n        return lastResult;\n    }\n    \n    void printErrors() const {\n        for (const auto& err : errorLog) {\n            cout << \"Error: \" << err << endl;\n        }\n    }\n};\n\nint main() {\n    SafeDivide calc;\n    \n    if (calc.divide(10, 2)) {\n        cout << \"Result: \" << calc.getResult() << endl;\n    }\n    \n    if (!calc.divide(10, 0)) {\n        cout << \"Division failed\" << endl;\n    }\n    \n    calc.printErrors();\n    \n    return 0;\n}',
  hint: 'Encapsulation hides error handling and logging implementation.'
},
{
  id: 'cpp_encapsulation_18',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate thread-safe data access (mutex guard).',
  mathSolution: 'Encapsulated synchronization hides threading complexity.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <mutex>\n#include <vector>\nusing namespace std;\n\nclass ThreadSafeCounter {\nprivate:\n    mutable mutex mtx;\n    int count;\n    \npublic:\n    ThreadSafeCounter() : count(0) {}\n    \n    void increment() {\n        lock_guard<mutex> lock(mtx);\n        count++;\n    }\n    \n    void decrement() {\n        lock_guard<mutex> lock(mtx);\n        if (count > 0) count--;\n    }\n    \n    int get() const {\n        lock_guard<mutex> lock(mtx);\n        return count;\n    }\n};\n\nint main() {\n    ThreadSafeCounter counter;\n    \n    vector<thread> threads;\n    for (int i = 0; i < 100; i++) {\n        threads.emplace_back([&counter]() {\n            counter.increment();\n        });\n    }\n    \n    for (auto& t : threads) t.join();\n    \n    cout << \"Final count: \" << counter.get() << endl;\n    \n    return 0;\n}',
  hint: 'Encapsulation hides thread synchronization details.'
},
{
  id: 'cpp_encapsulation_19',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate complex initialization logic in constructor.',
  mathSolution: 'Constructor encapsulates object setup complexity.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nclass FileReader {\nprivate:\n    ifstream file;\n    string filename;\n    bool isOpen;\n    \n    void initialize(const string& name) {\n        filename = name;\n        file.open(name);\n        isOpen = file.is_open();\n        if (!isOpen) {\n            cerr << "Failed to open file: " << name << endl;\n        }\n    }\n    \npublic:\n    FileReader(const string& name) {\n        initialize(name);\n    }\n    \n    bool readLine(string& line) {\n        if (!isOpen) return false;\n        return getline(file, line);\n    }\n    \n    bool isValid() const { return isOpen; }\n    \n    ~FileReader() {\n        if (file.is_open()) file.close();\n    }\n};\n\nint main() {\n    FileReader reader("test.txt");\n    if (reader.isValid()) {\n        string line;\n        while (reader.readLine(line)) {\n            cout << line << endl;\n        }\n    }\n    return 0;\n}',
  hint: 'Constructor encapsulates complex object initialization.'
},
{
  id: 'cpp_encapsulation_20',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate type conversion logic in class.',
  mathSolution: 'Encapsulated conversion hides implementation details.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nclass Converter {\nprivate:\n    string convertIntToString(int x) {\n        return to_string(x);\n    }\n    \n    int convertStringToInt(const string& s) {\n        return stoi(s);\n    }\n    \n    double convertStringToDouble(const string& s) {\n        return stod(s);\n    }\n    \npublic:\n    template<typename T>\n    string toString(const T& value) {\n        ostringstream oss;\n        oss << value;\n        return oss.str();\n    }\n    \n    template<typename T>\n    T fromString(const string& str) {\n        T value;\n        istringstream iss(str);\n        iss >> value;\n        return value;\n    }\n};\n\nint main() {\n    Converter conv;\n    \n    string str = conv.toString(42);\n    cout << \"String: \" << str << endl;\n    \n    int num = conv.fromString<int>(\"123\");\n    double dbl = conv.fromString<double>(\"3.14159\");\n    \n    cout << \"Int: \" << num << \", Double: \" << dbl << endl;\n    \n    return 0;\n}',
  hint: 'Encapsulation hides conversion implementation details.'
},
{
  id: 'cpp_encapsulation_21',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate algorithm implementation details.',
  mathSolution: 'Encapsulated algorithm hides internal complexity.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nclass Sorter {\nprivate:\n    vector<int> data;\n    \n    void quickSort(int left, int right) {\n        if (left >= right) return;\n        int pivot = partition(left, right);\n        quickSort(left, pivot - 1);\n        quickSort(pivot + 1, right);\n    }\n    \n    int partition(int left, int right) {\n        int pivot = data[right];\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (data[j] <= pivot) {\n                swap(data[i], data[j]);\n                i++;\n            }\n        }\n        swap(data[i], data[right]);\n        return i;\n    }\n    \npublic:\n    void add(int value) { data.push_back(value); }\n    \n    void sort() {\n        if (!data.empty()) quickSort(0, data.size() - 1);\n    }\n    \n    void display() const {\n        for (int val : data) cout << val << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    Sorter sorter;\n    sorter.add(5);\n    sorter.add(2);\n    sorter.add(8);\n    sorter.add(1);\n    sorter.add(9);\n    \n    cout << "Before: \"; sorter.display();\n    sorter.sort();\n    cout << \"After: \"; sorter.display();\n    \n    return 0;\n}',
  hint: 'Encapsulation hides algorithm implementation details.'
},
{
  id: 'cpp_encapsulation_22',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate connection pool management.',
  mathSolution: 'Encapsulated connection pool hides resource management.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <memory>\nusing namespace std;\n\nclass Connection {\nprivate:\n    int id;\n    static int nextId;\n    \npublic:\n    Connection() : id(nextId++) {\n        cout << \"Connection \" << id << \" created\" << endl;\n    }\n    \n    ~Connection() {\n        cout << \"Connection \" << id << \" destroyed\" << endl;\n    }\n    \n    void execute(const string& query) {\n        cout << \"Connection \" << id << \" executing: \" << query << endl;\n    }\n};\n\nint Connection::nextId = 1;\n\nclass ConnectionPool {\nprivate:\n    queue<unique_ptr<Connection>> pool;\n    size_t maxSize;\n    \npublic:\n    ConnectionPool(size_t size) : maxSize(size) {\n        for (size_t i = 0; i < size; i++) {\n            pool.push(make_unique<Connection>());\n        }\n    }\n    \n    unique_ptr<Connection> acquire() {\n        if (pool.empty()) {\n            return make_unique<Connection>();\n        }\n        auto conn = move(pool.front());\n        pool.pop();\n        return conn;\n    }\n    \n    void release(unique_ptr<Connection> conn) {\n        if (pool.size() < maxSize) {\n            pool.push(move(conn));\n        }\n    }\n};\n\nint main() {\n    ConnectionPool pool(2);\n    \n    auto conn1 = pool.acquire();\n    conn1->execute(\"SELECT * FROM users\");\n    \n    auto conn2 = pool.acquire();\n    conn2->execute(\"SELECT * FROM products\");\n    \n    pool.release(move(conn1));\n    pool.release(move(conn2));\n    \n    return 0;\n}',
  hint: 'Encapsulation hides pool management complexity.'
},
{
  "id": "cpp_encapsulation_23",
  "topicId": "cpp_encapsulation",
  "question": "Encapsulate data compression/decompression.",
  "mathSolution": "Encapsulated compression hides algorithm details.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <vector>\n#include <cctype>\nusing namespace std;\n\nclass Compressor {\nprivate:\n    string compressRunLength(const string& data) {\n        string compressed;\n        int count = 1;\n        for (size_t i = 1; i <= data.length(); i++) {\n            if (i < data.length() && data[i] == data[i-1]) {\n                count++;\n            } else {\n                compressed += data[i-1];\n                if (count > 1) compressed += to_string(count);\n                count = 1;\n            }\n        }\n        return compressed;\n    }\n    \n    string decompressRunLength(const string& data) {\n        string decompressed;\n        for (size_t i = 0; i < data.length(); i++) {\n            char c = data[i];\n            if (i + 1 < data.length() && isdigit(data[i+1])) {\n                int count = data[i+1] - '0';\n                decompressed.append(count, c);\n                i++;\n            } else {\n                decompressed += c;\n            }\n        }\n        return decompressed;\n    }\n    \npublic:\n    string compress(const string& data) {\n        return compressRunLength(data);\n    }\n    \n    string decompress(const string& data) {\n        return decompressRunLength(data);\n    }\n};\n\nint main() {\n    Compressor comp;\n    string original = \"aaabbcccc\";\n    string compressed = comp.compress(original);\n    string decompressed = comp.decompress(compressed);\n    \n    cout << \"Original: \" << original << endl;\n    cout << \"Compressed: \" << compressed << endl;\n    cout << \"Decompressed: \" << decompressed << endl;\n    \n    return 0;\n}",
  "hint": "Encapsulation hides compression implementation details."
},
{
  id: 'cpp_encapsulation_24',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate logging with multiple output destinations.',
  mathSolution: 'Encapsulated logging hides output management.',
  codeSolution: '#include <iostream>\n#include <fstream>\n#include <vector>\n#include <ctime>\nusing namespace std;\n\nclass Logger {\nprivate:\n    vector<string> outputs;\n    bool consoleOutput;\n    ofstream file;\n    \n    string getTimestamp() {\n        time_t now = time(nullptr);\n        return ctime(&now);\n    }\n    \n    void writeToConsole(const string& msg) {\n        cout << msg << endl;\n    }\n    \n    void writeToFile(const string& msg) {\n        if (file.is_open()) {\n            file << msg << endl;\n        }\n    }\n    \npublic:\n    Logger(bool console = true, const string& filename = \"\") : consoleOutput(console) {\n        if (!filename.empty()) {\n            file.open(filename, ios::app);\n        }\n    }\n    \n    ~Logger() {\n        if (file.is_open()) file.close();\n    }\n    \n    void log(const string& message, const string& level = \"INFO\") {\n        string logMsg = getTimestamp() + \" [\" + level + \"] \" + message;\n        if (consoleOutput) writeToConsole(logMsg);\n        if (file.is_open()) writeToFile(logMsg);\n    }\n    \n    void info(const string& msg) { log(msg, \"INFO\"); }\n    void error(const string& msg) { log(msg, \"ERROR\"); }\n    void debug(const string& msg) { log(msg, \"DEBUG\"); }\n};\n\nint main() {\n    Logger logger(true, \"app.log\");\n    logger.info(\"Application started\");\n    logger.debug(\"Processing data\");\n    logger.error(\"An error occurred\");\n    \n    return 0;\n}',
  hint: 'Encapsulation hides logging output management.'
},
{
  id: 'cpp_encapsulation_25',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate caching mechanism with eviction policy.',
  mathSolution: 'Encapsulated cache hides storage and eviction logic.',
  codeSolution: '#include <iostream>\n#include <unordered_map>\n#include <list>\nusing namespace std;\n\nclass LRUCache {\nprivate:\n    int capacity;\n    list<pair<string, string>> cacheList;\n    unordered_map<string, list<pair<string, string>>::iterator> cacheMap;\n    \n    void moveToFront(const string& key) {\n        auto it = cacheMap[key];\n        cacheList.splice(cacheList.begin(), cacheList, it);\n    }\n    \n    void evict() {\n        if (cacheList.size() >= capacity) {\n            auto last = cacheList.back();\n            cacheMap.erase(last.first);\n            cacheList.pop_back();\n        }\n    }\n    \npublic:\n    LRUCache(int cap) : capacity(cap) {}\n    \n    void put(const string& key, const string& value) {\n        if (cacheMap.find(key) != cacheMap.end()) {\n            moveToFront(key);\n            cacheList.front().second = value;\n        } else {\n            evict();\n            cacheList.push_front({key, value});\n            cacheMap[key] = cacheList.begin();\n        }\n    }\n    \n    string get(const string& key) {\n        if (cacheMap.find(key) == cacheMap.end()) {\n            return \"\";\n        }\n        moveToFront(key);\n        return cacheList.front().second;\n    }\n    \n    void display() const {\n        for (const auto& item : cacheList) {\n            cout << item.first << \": \" << item.second << \" \";\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    LRUCache cache(3);\n    cache.put(\"a\", \"1\");\n    cache.put(\"b\", \"2\");\n    cache.put(\"c\", \"3\");\n    cache.display();\n    \n    cache.get(\"a\");\n    cache.display();\n    \n    cache.put(\"d\", \"4\");\n    cache.display();\n    \n    return 0;\n}',
  hint: 'Encapsulation hides cache implementation and eviction policy.'
},
{
  id: 'cpp_encapsulation_26',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate state machine transitions.',
  mathSolution: 'Encapsulated state machine hides transition logic.',
  codeSolution: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nclass TrafficLight {\nprivate:\n    enum State { RED, YELLOW, GREEN };\n    State currentState;\n    map<pair<State, string>, State> transitions;\n    \n    void setupTransitions() {\n        transitions[{RED, \"timer\"}] = GREEN;\n        transitions[{GREEN, \"timer\"}] = YELLOW;\n        transitions[{YELLOW, \"timer\"}] = RED;\n    }\n    \npublic:\n    TrafficLight() : currentState(RED) {\n        setupTransitions();\n    }\n    \n    void trigger(const string& event) {\n        auto key = make_pair(currentState, event);\n        if (transitions.find(key) != transitions.end()) {\n            currentState = transitions[key];\n        }\n    }\n    \n    string getState() const {\n        switch(currentState) {\n            case RED: return \"RED\";\n            case YELLOW: return \"YELLOW\";\n            case GREEN: return \"GREEN\";\n        }\n        return \"UNKNOWN\";\n    }\n};\n\nint main() {\n    TrafficLight light;\n    cout << light.getState() << endl;\n    \n    light.trigger(\"timer\");\n    cout << light.getState() << endl;\n    \n    light.trigger(\"timer\");\n    cout << light.getState() << endl;\n    \n    light.trigger(\"timer\");\n    cout << light.getState() << endl;\n    \n    return 0;\n}',
  hint: 'Encapsulation hides state machine implementation.'
},
{
  id: 'cpp_encapsulation_27',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate rate limiting logic.',
  mathSolution: 'Encapsulated rate limiter hides token bucket algorithm.',
  codeSolution: '#include <iostream>\n#include <chrono>\n#include <thread>\nusing namespace std;\n\nclass RateLimiter {\nprivate:\n    int tokens;\n    int maxTokens;\n    int refillRate;\n    chrono::steady_clock::time_point lastRefill;\n    \n    void refill() {\n        auto now = chrono::steady_clock::now();\n        auto elapsed = chrono::duration_cast<chrono::seconds>(now - lastRefill);\n        int newTokens = elapsed.count() * refillRate;\n        if (newTokens > 0) {\n            tokens = min(maxTokens, tokens + newTokens);\n            lastRefill = now;\n        }\n    }\n    \npublic:\n    RateLimiter(int max, int rate) : maxTokens(max), refillRate(rate) {\n        tokens = maxTokens;\n        lastRefill = chrono::steady_clock::now();\n    }\n    \n    bool allow() {\n        refill();\n        if (tokens > 0) {\n            tokens--;\n            return true;\n        }\n        return false;\n    }\n};\n\nint main() {\n    RateLimiter limiter(3, 1);  // 3 tokens per second\n    \n    for (int i = 0; i < 5; i++) {\n        if (limiter.allow()) {\n            cout << \"Request \" << i+1 << \" allowed\" << endl;\n        } else {\n            cout << \"Request \" << i+1 << \" denied\" << endl;\n        }\n        this_thread::sleep_for(chrono::milliseconds(300));\n    }\n    \n    return 0;\n}',
  hint: 'Encapsulation hides rate limiting algorithm details.'
},
{
  id: 'cpp_encapsulation_28',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate event queue with priority.',
  mathSolution: 'Encapsulated event queue hides priority management.',
  codeSolution: '#include <iostream>\n#include <queue>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstruct Event {\n    int priority;\n    string name;\n    \n    bool operator<(const Event& other) const {\n        return priority < other.priority;\n    }\n};\n\nclass EventQueue {\nprivate:\n    priority_queue<Event> events;\n    \npublic:\n    void addEvent(const string& name, int priority) {\n        events.push({priority, name});\n    }\n    \n    bool hasEvents() const {\n        return !events.empty();\n    }\n    \n    string processNext() {\n        if (events.empty()) return "";\n        Event e = events.top();\n        events.pop();\n        return e.name;\n    }\n    \n    int pendingCount() const {\n        return events.size();\n    }\n};\n\nint main() {\n    EventQueue queue;\n    queue.addEvent("Low priority", 1);\n    queue.addEvent("High priority", 10);\n    queue.addEvent("Medium priority", 5);\n    queue.addEvent("Critical", 20);\n    \n    while (queue.hasEvents()) {\n        cout << "Processing: " << queue.processNext() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Encapsulation hides event queue implementation.'
},
{
  id: 'cpp_encapsulation_29',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate mathematical vector operations.',
  mathSolution: 'Encapsulated vector hides mathematical operations.',
  codeSolution: '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass Vector2D {\nprivate:\n    double x, y;\n    \n    double magnitudeSquared() const {\n        return x * x + y * y;\n    }\n    \npublic:\n    Vector2D(double a = 0, double b = 0) : x(a), y(b) {}\n    \n    Vector2D add(const Vector2D& other) const {\n        return Vector2D(x + other.x, y + other.y);\n    }\n    \n    Vector2D subtract(const Vector2D& other) const {\n        return Vector2D(x - other.x, y - other.y);\n    }\n    \n    double dot(const Vector2D& other) const {\n        return x * other.x + y * other.y;\n    }\n    \n    double magnitude() const {\n        return sqrt(magnitudeSquared());\n    }\n    \n    Vector2D normalize() const {\n        double mag = magnitude();\n        if (mag > 0) return Vector2D(x / mag, y / mag);\n        return Vector2D();\n    }\n    \n    void display() const {\n        cout << \"(\" << x << \", \" << y << \")\" << endl;\n    }\n};\n\nint main() {\n    Vector2D v1(3, 4);\n    Vector2D v2(1, 2);\n    \n    cout << \"v1: \"; v1.display();\n    cout << \"v2: \"; v2.display();\n    cout << \"Sum: \"; v1.add(v2).display();\n    cout << \"Dot product: \" << v1.dot(v2) << endl;\n    cout << \"Magnitude of v1: \" << v1.magnitude() << endl;\n    cout << \"Normalized v1: \"; v1.normalize().display();\n    \n    return 0;\n}',
  hint: 'Encapsulation hides mathematical implementation details.'
},
{
  id: 'cpp_encapsulation_30',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate date and time operations.',
  mathSolution: 'Encapsulated date/time hides calendar calculations.',
  codeSolution: '#include <iostream>\n#include <ctime>\nusing namespace std;\n\nclass Date {\nprivate:\n    int year, month, day;\n    \n    bool isLeapYear(int y) const {\n        return (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);\n    }\n    \n    int daysInMonth(int m, int y) const {\n        switch(m) {\n            case 2: return isLeapYear(y) ? 29 : 28;\n            case 4: case 6: case 9: case 11: return 30;\n            default: return 31;\n        }\n    }\n    \npublic:\n    Date(int y, int m, int d) : year(y), month(m), day(d) {}\n    \n    void addDays(int days) {\n        day += days;\n        while (day > daysInMonth(month, year)) {\n            day -= daysInMonth(month, year);\n            month++;\n            if (month > 12) {\n                month = 1;\n                year++;\n            }\n        }\n    }\n    \n    void display() const {\n        cout << year << \"-\" << month << \"-\" << day << endl;\n    }\n};\n\nint main() {\n    Date today(2024, 1, 15);\n    cout << \"Today: \"; today.display();\n    \n    today.addDays(30);\n    cout << \"+30 days: \"; today.display();\n    \n    today.addDays(365);\n    cout << \"+365 days: \"; today.display();\n    \n    return 0;\n}',
  hint: 'Encapsulation hides date calculation complexity.'
},
{
  id: 'cpp_encapsulation_31',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate network request with retry logic.',
  mathSolution: 'Encapsulated request handler hides retry logic.',
  codeSolution: '#include <iostream>\n#include <chrono>\n#include <thread>\n#include <random>\n#include <string>\nusing namespace std;\n\nclass NetworkRequest {\nprivate:\n    string url;\n    int maxRetries;\n    int timeout;\n    \n    bool sendRequest() {\n        // Simulate network request\n        static random_device rd;\n        static mt19937 gen(rd());\n        uniform_int_distribution<> dis(1, 10);\n        return dis(gen) > 3;  // 70% success rate\n    }\n    \n    void wait(int seconds) {\n        this_thread::sleep_for(chrono::seconds(seconds));\n    }\n    \npublic:\n    NetworkRequest(const string& u, int retries = 3, int tm = 1) \n        : url(u), maxRetries(retries), timeout(tm) {}\n    \n    bool execute() {\n        for (int attempt = 1; attempt <= maxRetries; attempt++) {\n            cout << "Attempt " << attempt << " for " << url << endl;\n            if (sendRequest()) {\n                cout << "Request succeeded!" << endl;\n                return true;\n            }\n            if (attempt < maxRetries) {\n                cout << "Request failed, retrying..." << endl;\n                wait(timeout);\n            }\n        }\n        cout << "Request failed after " << maxRetries << " attempts" << endl;\n        return false;\n    }\n};\n\nint main() {\n    NetworkRequest req("https://api.example.com/data", 3, 1);\n    req.execute();\n    \n    return 0;\n}',
  hint: 'Encapsulation hides retry and timeout logic.'
},
{
  id: 'cpp_encapsulation_32',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate sensitive data with access control.',
  mathSolution: 'Encapsulated sensitive data with authorization checks.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\n\nclass SecureData {\nprivate:\n    unordered_map<string, string> data;\n    string masterPassword;\n    \n    bool authenticate(const string& password) const {\n        return password == masterPassword;\n    }\n    \n    string encrypt(const string& text) const {\n        // Simple XOR encoding (simulation)\n        string result = text;\n        for (char& c : result) c ^= 0x55;\n        return result;\n    }\n    \n    string decrypt(const string& text) const {\n        return encrypt(text);  // XOR is its own inverse\n    }\n    \npublic:\n    SecureData(const string& pwd) : masterPassword(pwd) {}\n    \n    bool set(const string& key, const string& value, const string& password) {\n        if (!authenticate(password)) return false;\n        data[key] = encrypt(value);\n        return true;\n    }\n    \n    string get(const string& key, const string& password) {\n        if (!authenticate(password)) return \"\";\n        if (data.find(key) == data.end()) return \"\";\n        return decrypt(data[key]);\n    }\n};\n\nint main() {\n    SecureData secure(\"secret123\");\n    \n    if (secure.set(\"password\", \"myPassword123\", \"secret123\")) {\n        cout << \"Data stored successfully\" << endl;\n    }\n    \n    string retrieved = secure.get(\"password\", \"secret123\");\n    cout << \"Retrieved: \" << retrieved << endl;\n    \n    // Wrong password\n    if (!secure.get(\"password\", \"wrong\")) {\n        cout << \"Access denied - wrong password\" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Encapsulation hides security and encryption details.'
},
{
  "id": "cpp_encapsulation_33",
  "topicId": "cpp_encapsulation",
  "question": "Encapsulate configuration validation logic.",
  "mathSolution": "Encapsulated validator hides validation rules.",
  "codeSolution": "#include <iostream>\n#include <vector>\n#include <string>\n#include <functional>\n#include <cctype>\nusing namespace std;\n\nclass ConfigValidator {\nprivate:\n    struct Rule {\n        string name;\n        function<bool(const string&)> check;\n        string errorMsg;\n    };\n    \n    vector<Rule> rules;\n    \n    void addDefaultRules() {\n        rules.push_back({\"not_empty\", [](const string& s) { return !s.empty(); }, \"Field cannot be empty\"});\n        rules.push_back({\"min_length_3\", [](const string& s) { return s.length() >= 3; }, \"Minimum length is 3\"});\n        rules.push_back({\"max_length_20\", [](const string& s) { return s.length() <= 20; }, \"Maximum length is 20\"});\n        rules.push_back({\"alphanumeric\", [](const string& s) { \n            for (char c : s) {\n                if (!isalnum(c)) return false;\n            }\n            return true;\n        }, \"Only alphanumeric characters allowed\"});\n    }\n    \npublic:\n    ConfigValidator() {\n        addDefaultRules();\n    }\n    \n    void addRule(const string& name, function<bool(const string&)> check, const string& error) {\n        rules.push_back({name, check, error});\n    }\n    \n    vector<string> validate(const string& value) const {\n        vector<string> errors;\n        for (const auto& rule : rules) {\n            if (!rule.check(value)) {\n                errors.push_back(rule.errorMsg);\n            }\n        }\n        return errors;\n    }\n    \n    bool isValid(const string& value) const {\n        return validate(value).empty();\n    }\n};\n\nint main() {\n    ConfigValidator validator;\n    \n    string test1 = \"validUser123\";\n    string test2 = \"\";\n    string test3 = \"invalid@user\";\n    string test4 = \"waytoolongusername\";\n    \n    cout << \"Testing '\" << test1 << \"': \" << (validator.isValid(test1) ? \"Valid\" : \"Invalid\") << endl;\n    cout << \"Testing '\" << test2 << \"': \" << (validator.isValid(test2) ? \"Valid\" : \"Invalid\") << endl;\n    cout << \"Testing '\" << test3 << \"': \" << (validator.isValid(test3) ? \"Valid\" : \"Invalid\") << endl;\n    cout << \"Testing '\" << test4 << \"': \" << (validator.isValid(test4) ? \"Valid\" : \"Invalid\") << endl;\n    \n    auto errors = validator.validate(test3);\n    if (!errors.empty()) {\n        cout << \"Errors for '\" << test3 << \"':\" << endl;\n        for (const auto& err : errors) {\n            cout << \"  - \" << err << endl;\n        }\n    }\n    \n    return 0;\n}",
  "hint": "Encapsulation hides validation rule management."
},
{
  id: 'cpp_encapsulation_34',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate pagination logic for data sets.',
  mathSolution: 'Encapsulated pagination hides page calculation.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Paginator {\nprivate:\n    int totalItems;\n    int itemsPerPage;\n    int currentPage;\n    \n    int calculateTotalPages() const {\n        return (totalItems + itemsPerPage - 1) / itemsPerPage;\n    }\n    \n    int getStartIndex() const {\n        return (currentPage - 1) * itemsPerPage;\n    }\n    \n    int getEndIndex() const {\n        return min(getStartIndex() + itemsPerPage, totalItems);\n    }\n    \npublic:\n    Paginator(int total, int perPage) : totalItems(total), itemsPerPage(perPage), currentPage(1) {}\n    \n    void setPage(int page) {\n        if (page >= 1 && page <= calculateTotalPages()) {\n            currentPage = page;\n        }\n    }\n    \n    void nextPage() {\n        if (currentPage < calculateTotalPages()) currentPage++;\n    }\n    \n    void previousPage() {\n        if (currentPage > 1) currentPage--;\n    }\n    \n    int getCurrentPage() const { return currentPage; }\n    int getTotalPages() const { return calculateTotalPages(); }\n    int getStartIndex() const { return getStartIndex(); }\n    int getEndIndex() const { return getEndIndex(); }\n    bool hasNext() const { return currentPage < calculateTotalPages(); }\n    bool hasPrevious() const { return currentPage > 1; }\n    \n    void displayInfo() const {\n        cout << \"Page \" << currentPage << \" of \" << calculateTotalPages()\n             << \" (Items \" << getStartIndex() + 1 << \"-\" << getEndIndex() << \")\" << endl;\n    }\n};\n\nint main() {\n    Paginator paginator(100, 10);\n    \n    paginator.displayInfo();\n    paginator.nextPage();\n    paginator.displayInfo();\n    paginator.nextPage();\n    paginator.displayInfo();\n    paginator.previousPage();\n    paginator.displayInfo();\n    \n    return 0;\n}',
  hint: 'Encapsulation hides pagination calculation complexity.'
},
{
  id: 'cpp_encapsulation_35',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate unit conversion logic.',
  mathSolution: 'Encapsulated converter hides conversion formulas.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <functional>\nusing namespace std;\n\nclass UnitConverter {\nprivate:\n    unordered_map<string, unordered_map<string, function<double(double)>>> conversions;\n    \n    void initConversions() {\n        // Length conversions\n        conversions[\"m\"][\"cm\"] = [](double x) { return x * 100; };\n        conversions[\"cm\"][\"m\"] = [](double x) { return x / 100; };\n        conversions[\"km\"][\"m\"] = [](double x) { return x * 1000; };\n        conversions[\"m\"][\"km\"] = [](double x) { return x / 1000; };\n        conversions[\"in\"][\"cm\"] = [](double x) { return x * 2.54; };\n        conversions[\"cm\"][\"in\"] = [](double x) { return x / 2.54; };\n        \n        // Temperature conversions\n        conversions[\"C\"][\"F\"] = [](double x) { return x * 9/5 + 32; };\n        conversions[\"F\"][\"C\"] = [](double x) { return (x - 32) * 5/9; };\n        conversions[\"C\"][\"K\"] = [](double x) { return x + 273.15; };\n        conversions[\"K\"][\"C\"] = [](double x) { return x - 273.15; };\n    }\n    \npublic:\n    UnitConverter() {\n        initConversions();\n    }\n    \n    double convert(double value, const string& from, const string& to) {\n        if (from == to) return value;\n        \n        if (conversions.find(from) != conversions.end() &&\n            conversions[from].find(to) != conversions[from].end()) {\n            return conversions[from][to](value);\n        }\n        \n        // Try through base unit\n        if (from == \"m\" && to == \"cm\") return value * 100;\n        if (from == \"cm\" && to == \"m\") return value / 100;\n        \n        return value;\n    }\n};\n\nint main() {\n    UnitConverter converter;\n    \n    cout << \"1 meter = \" << converter.convert(1, \"m\", \"cm\") << \" cm\" << endl;\n    cout << \"10 kilometers = \" << converter.convert(10, \"km\", \"m\") << \" meters\" << endl;\n    cout << \"5 inches = \" << converter.convert(5, \"in\", \"cm\") << \" cm\" << endl;\n    cout << \"100°C = \" << converter.convert(100, \"C\", \"F\") << \"°F\" << endl;\n    cout << \"32°F = \" << converter.convert(32, \"F\", \"C\") << \"°C\" << endl;\n    \n    return 0;\n}',
  hint: 'Encapsulation hides conversion formulas and routing logic.'
},
{
  id: 'cpp_encapsulation_36',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate token bucket algorithm for rate limiting.',
  mathSolution: 'Encapsulated token bucket hides algorithm details.',
  codeSolution: '#include <iostream>\n#include <chrono>\n#include <thread>\nusing namespace std;\n\nclass TokenBucket {\nprivate:\n    double tokens;\n    double capacity;\n    double refillRate;\n    chrono::steady_clock::time_point lastRefill;\n    \n    void refill() {\n        auto now = chrono::steady_clock::now();\n        auto elapsed = chrono::duration_cast<chrono::milliseconds>(now - lastRefill);\n        double newTokens = elapsed.count() / 1000.0 * refillRate;\n        if (newTokens > 0) {\n            tokens = min(capacity, tokens + newTokens);\n            lastRefill = now;\n        }\n    }\n    \npublic:\n    TokenBucket(double cap, double rate) \n        : tokens(cap), capacity(cap), refillRate(rate) {\n        lastRefill = chrono::steady_clock::now();\n    }\n    \n    bool consume(double amount = 1.0) {\n        refill();\n        if (tokens >= amount) {\n            tokens -= amount;\n            return true;\n        }\n        return false;\n    }\n    \n    double getTokens() const { return tokens; }\n};\n\nint main() {\n    TokenBucket bucket(5.0, 1.0);  // 5 tokens capacity, refill 1 per second\n    \n    for (int i = 0; i < 10; i++) {\n        if (bucket.consume()) {\n            cout << \"Request \" << i+1 << \" allowed (tokens left: \" << bucket.getTokens() << \")\" << endl;\n        } else {\n            cout << \"Request \" << i+1 << \" denied\" << endl;\n        }\n        this_thread::sleep_for(chrono::milliseconds(500));\n    }\n    \n    return 0;\n}',
  hint: 'Encapsulation hides token bucket algorithm implementation.'
},
{
  id: 'cpp_encapsulation_37',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate circular buffer for data streaming.',
  mathSolution: 'Encapsulated circular buffer hides indexing logic.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass CircularBuffer {\nprivate:\n    vector<int> buffer;\n    int head;\n    int tail;\n    int count;\n    \npublic:\n    CircularBuffer(int size) : buffer(size), head(0), tail(0), count(0) {}\n    \n    bool push(int value) {\n        if (isFull()) return false;\n        buffer[tail] = value;\n        tail = (tail + 1) % buffer.size();\n        count++;\n        return true;\n    }\n    \n    bool pop(int& value) {\n        if (isEmpty()) return false;\n        value = buffer[head];\n        head = (head + 1) % buffer.size();\n        count--;\n        return true;\n    }\n    \n    bool peek(int& value) const {\n        if (isEmpty()) return false;\n        value = buffer[head];\n        return true;\n    }\n    \n    bool isFull() const { return count == buffer.size(); }\n    bool isEmpty() const { return count == 0; }\n    int size() const { return count; }\n    int capacity() const { return buffer.size(); }\n};\n\nint main() {\n    CircularBuffer cb(5);\n    \n    for (int i = 1; i <= 7; i++) {\n        if (cb.push(i)) {\n            cout << \"Pushed: \" << i << \", size: \" << cb.size() << endl;\n        } else {\n            cout << \"Buffer full, cannot push \" << i << endl;\n        }\n    }\n    \n    int value;\n    while (cb.pop(value)) {\n        cout << \"Popped: \" << value << \", size: \" << cb.size() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Encapsulation hides circular buffer indexing complexity.'
},
{
  "id": "cpp_encapsulation_38",
  "topicId": "cpp_encapsulation",
  "question": "Encapsulate database query builder.",
  "mathSolution": "Encapsulated query builder hides SQL generation.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass QueryBuilder {\nprivate:\n    string table;\n    vector<string> selectFields;\n    vector<string> whereConditions;\n    vector<string> orderByFields;\n    int limitValue;\n    \n    string buildSelect() const {\n        if (selectFields.empty()) return \"* \";\n        string fields;\n        for (size_t i = 0; i < selectFields.size(); i++) {\n            fields += selectFields[i];\n            if (i < selectFields.size() - 1) fields += \", \";\n        }\n        return fields + \" \";\n    }\n    \n    string buildWhere() const {\n        if (whereConditions.empty()) return \"\";\n        string where = \"WHERE \";\n        for (size_t i = 0; i < whereConditions.size(); i++) {\n            where += whereConditions[i];\n            if (i < whereConditions.size() - 1) where += \" AND \";\n        }\n        return where + \" \";\n    }\n    \n    string buildOrderBy() const {\n        if (orderByFields.empty()) return \"\";\n        string order = \"ORDER BY \";\n        for (size_t i = 0; i < orderByFields.size(); i++) {\n            order += orderByFields[i];\n            if (i < orderByFields.size() - 1) order += \", \";\n        }\n        return order + \" \";\n    }\n    \n    string buildLimit() const {\n        if (limitValue <= 0) return \"\";\n        return \"LIMIT \" + to_string(limitValue) + \" \";\n    }\n    \npublic:\n    QueryBuilder(const string& tbl) : table(tbl), limitValue(0) {}\n    \n    QueryBuilder& select(const vector<string>& fields) {\n        selectFields = fields;\n        return *this;\n    }\n    \n    QueryBuilder& where(const string& condition) {\n        whereConditions.push_back(condition);\n        return *this;\n    }\n    \n    QueryBuilder& orderBy(const string& field) {\n        orderByFields.push_back(field);\n        return *this;\n    }\n    \n    QueryBuilder& limit(int n) {\n        limitValue = n;\n        return *this;\n    }\n    \n    string build() const {\n        string query = \"SELECT \" + buildSelect() + \"FROM \" + table + \" \";\n        query += buildWhere();\n        query += buildOrderBy();\n        query += buildLimit();\n        // Remove trailing space if present\n        if (!query.empty() && query.back() == ' ') {\n            query.pop_back();\n        }\n        return query;\n    }\n};\n\nint main() {\n    QueryBuilder qb(\"users\");\n    \n    string query = qb.select({\"name\", \"age\", \"email\"})\n                     .where(\"age > 18\")\n                     .where(\"status = 'active'\")\n                     .orderBy(\"name\")\n                     .limit(10)\n                     .build();\n    \n    cout << \"Generated SQL: \" << query << endl;\n    \n    return 0;\n}",
  "hint": "Encapsulation hides SQL generation complexity."
},
{
  id: 'cpp_encapsulation_39',
  topicId: 'cpp_encapsulation',
  question: 'Encapsulate timer functionality with callbacks.',
  mathSolution: 'Encapsulated timer hides threading and timing.',
  codeSolution: '#include <iostream>\n#include <chrono>\n#include <thread>\n#include <functional>\nusing namespace std;\n\nclass Timer {\nprivate:\n    function<void()> callback;\n    int interval;\n    bool running;\n    thread worker;\n    \n    void run() {\n        while (running) {\n            this_thread::sleep_for(chrono::milliseconds(interval));\n            if (running && callback) {\n                callback();\n            }\n        }\n    }\n    \npublic:\n    Timer(function<void()> cb, int ms) : callback(cb), interval(ms), running(false) {}\n    \n    ~Timer() {\n        stop();\n    }\n    \n    void start() {\n        if (!running) {\n            running = true;\n            worker = thread(&Timer::run, this);\n        }\n    }\n    \n    void stop() {\n        if (running) {\n            running = false;\n            if (worker.joinable()) {\n                worker.join();\n            }\n        }\n    }\n    \n    void setInterval(int ms) { interval = ms; }\n    void setCallback(function<void()> cb) { callback = cb; }\n};\n\nint main() {\n    int count = 0;\n    Timer timer([&count]() {\n        count++;\n        cout << \"Timer tick: \" << count << endl;\n    }, 1000);\n    \n    timer.start();\n    this_thread::sleep_for(chrono::seconds(5));\n    timer.stop();\n    \n    cout << \"Timer stopped after \" << count << \" ticks\" << endl;\n    \n    return 0;\n}',
  hint: 'Encapsulation hides timer thread management.'
},
{
  "id": "cpp_encapsulation_40",
  "topicId": "cpp_encapsulation",
  "question": "Encapsulate JSON parsing and generation.",
  "mathSolution": "Encapsulated JSON hides parsing complexity.",
  "codeSolution": "#include <iostream>\n#include <string>\n#include <unordered_map>\n#include <vector>\n#include <cctype>\nusing namespace std;\n\nclass JSONObject {\nprivate:\n    unordered_map<string, string> stringValues;\n    unordered_map<string, int> intValues;\n    unordered_map<string, double> doubleValues;\n    unordered_map<string, bool> boolValues;\n    \n    string escapeString(const string& s) const {\n        string escaped;\n        for (char c : s) {\n            if (c == '\"') escaped += \"\\\\\\\"\";\n            else if (c == '\\\\') escaped += \"\\\\\\\\\";\n            else escaped += c;\n        }\n        return escaped;\n    }\n    \npublic:\n    void set(const string& key, const string& value) { stringValues[key] = value; }\n    void set(const string& key, int value) { intValues[key] = value; }\n    void set(const string& key, double value) { doubleValues[key] = value; }\n    void set(const string& key, bool value) { boolValues[key] = value; }\n    \n    string getString(const string& key) const {\n        auto it = stringValues.find(key);\n        return it != stringValues.end() ? it->second : \"\";\n    }\n    \n    int getInt(const string& key) const {\n        auto it = intValues.find(key);\n        return it != intValues.end() ? it->second : 0;\n    }\n    \n    string toString() const {\n        string json = \"{\";\n        bool first = true;\n        \n        for (const auto& pair : stringValues) {\n            if (!first) json += \",\";\n            json += \"\\\"\" + escapeString(pair.first) + \"\\\":\\\"\" + escapeString(pair.second) + \"\\\"\";\n            first = false;\n        }\n        \n        for (const auto& pair : intValues) {\n            if (!first) json += \",\";\n            json += \"\\\"\" + escapeString(pair.first) + \"\\\":\" + to_string(pair.second);\n            first = false;\n        }\n        \n        for (const auto& pair : doubleValues) {\n            if (!first) json += \",\";\n            json += \"\\\"\" + escapeString(pair.first) + \"\\\":\" + to_string(pair.second);\n            first = false;\n        }\n        \n        for (const auto& pair : boolValues) {\n            if (!first) json += \",\";\n            json += \"\\\"\" + escapeString(pair.first) + \"\\\":\" + (pair.second ? \"true\" : \"false\");\n            first = false;\n        }\n        \n        json += \"}\";\n        return json;\n    }\n};\n\nint main() {\n    JSONObject obj;\n    obj.set(\"name\", \"John\");\n    obj.set(\"age\", 30);\n    obj.set(\"height\", 5.8);\n    obj.set(\"active\", true);\n    \n    cout << obj.toString() << endl;\n    \n    return 0;\n}",
  "hint": "Encapsulation hides JSON serialization details."
},
);