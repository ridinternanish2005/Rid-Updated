QuizData.questions.push(
  //interface ,exceptionhandling , ,template
{
  id: 'cpp_interfaces_1',
  topicId: 'cpp_interfaces',
  question: 'Create a simple interface using abstract base class with pure virtual functions.',
  mathSolution: 'Interface defines contract with pure virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\npublic:\n    void draw() override { cout << "Drawing circle" << endl; }\n};\n\nclass Square : public Drawable {\npublic:\n    void draw() override { cout << "Drawing square" << endl; }\n};\n\nint main() {\n    Drawable* shapes[] = {new Circle(), new Square()};\n    for (auto s : shapes) s->draw();\n    for (auto s : shapes) delete s;\n    return 0;\n}',
  hint: 'Interface classes have only pure virtual functions and no data members.'
},
{
  id: 'cpp_interfaces_2',
  topicId: 'cpp_interfaces',
  question: 'Create interface with multiple pure virtual functions.',
  mathSolution: 'Interface can define multiple methods that implementing classes must provide.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual double perimeter() = 0;\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    double area() override { return width * height; }\n    double perimeter() override { return 2 * (width + height); }\n    void draw() override { cout << "Drawing rectangle" << endl; }\n};\n\nint main() {\n    Rectangle rect(5, 3);\n    cout << "Area: " << rect.area() << ", Perimeter: " << rect.perimeter() << endl;\n    rect.draw();\n    return 0;\n}',
  hint: 'All pure virtual functions must be implemented by concrete classes.'
},
{
  id: 'cpp_interfaces_3',
  topicId: 'cpp_interfaces',
  question: 'Implement multiple inheritance from multiple interfaces.',
  mathSolution: 'A class can implement multiple interface contracts.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Resizable {\npublic:\n    virtual void resize(double factor) = 0;\n    virtual ~Resizable() {}\n};\n\nclass Button : public Drawable, public Resizable {\nprivate:\n    string label;\n    double size;\npublic:\n    Button(string lbl) : label(lbl), size(1.0) {}\n    void draw() override { cout << "Drawing button: " << label << endl; }\n    void resize(double factor) override { size *= factor; cout << "Button resized by " << factor << endl; }\n};\n\nint main() {\n    Button btn("Click Me");\n    btn.draw();\n    btn.resize(1.5);\n    return 0;\n}',
  hint: 'Multiple interface inheritance allows combining contracts from different sources.'
},
{
  id: 'cpp_interfaces_4',
  topicId: 'cpp_interfaces',
  question: 'Use interface as function parameter for polymorphism.',
  mathSolution: 'Interface references allow polymorphic function parameters.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Printable {\npublic:\n    virtual void print() = 0;\n    virtual ~Printable() {}\n};\n\nclass Document : public Printable {\nprivate:\n    string content;\npublic:\n    Document(string c) : content(c) {}\n    void print() override { cout << "Document: " << content << endl; }\n};\n\nclass Photo : public Printable {\nprivate:\n    string caption;\npublic:\n    Photo(string c) : caption(c) {}\n    void print() override { cout << "Photo: " << caption << endl; }\n};\n\nvoid printItem(Printable& item) {\n    item.print();\n}\n\nint main() {\n    Document doc("Report\");\n    Photo photo(\"Vacation\");\n    printItem(doc);\n    printItem(photo);\n    return 0;\n}',
  hint: 'Interface references enable polymorphic function parameters.'
},
{
  id: 'cpp_interfaces_5',
  topicId: 'cpp_interfaces',
  question: 'Use interface pointer for polymorphic containers.',
  mathSolution: 'Containers of interface pointers hold different implementations.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void speak() = 0;\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override { cout << "Woof!" << endl; }\n};\n\nclass Cat : public Animal {\npublic:\n    void speak() override { cout << "Meow!" << endl; }\n};\n\nclass Cow : public Animal {\npublic:\n    void speak() override { cout << "Moo!" << endl; }\n};\n\nint main() {\n    vector<Animal*> animals;\n    animals.push_back(new Dog());\n    animals.push_back(new Cat());\n    animals.push_back(new Cow());\n    \n    for (auto a : animals) a->speak();\n    for (auto a : animals) delete a;\n    return 0;\n}',
  hint: 'Interface pointers enable polymorphic containers.'
},
{
  id: 'cpp_interfaces_6',
  topicId: 'cpp_interfaces',
  question: 'Create interface with default methods using virtual destructor.',
  mathSolution: 'Interfaces should always have virtual destructor for proper cleanup.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Resource {\npublic:\n    virtual void open() = 0;\n    virtual void close() = 0;\n    virtual ~Resource() { cout << "Resource destroyed" << endl; }\n};\n\nclass FileResource : public Resource {\npublic:\n    void open() override { cout << "File opened" << endl; }\n    void close() override { cout << "File closed" << endl; }\n    ~FileResource() { cout << "FileResource destroyed" << endl; }\n};\n\nint main() {\n    Resource* res = new FileResource();\n    res->open();\n    res->close();\n    delete res;  // Calls both destructors correctly\n    return 0;\n}',
  hint: 'Always include virtual destructor in interface classes.'
},
{
  id: 'cpp_interfaces_7',
  topicId: 'cpp_interfaces',
  question: 'Create interface with pure virtual function returning reference.',
  mathSolution: 'Interface methods can return references to other interfaces.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& msg) = 0;\n    virtual ~Logger() {}\n};\n\nclass Service {\npublic:\n    virtual Logger& getLogger() = 0;\n    virtual void process() = 0;\n    virtual ~Service() {}\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& msg) override { cout << "[LOG] " << msg << endl; }\n};\n\nclass DataService : public Service {\nprivate:\n    ConsoleLogger logger;\npublic:\n    Logger& getLogger() override { return logger; }\n    void process() override {\n        getLogger().log("Processing data");\n        cout << "Data processed" << endl;\n    }\n};\n\nint main() {\n    DataService service;\n    service.process();\n    return 0;\n}',
  hint: 'Interface methods can return references to other interfaces.'
},
{
  id: 'cpp_interfaces_8',
  topicId: 'cpp_interfaces',
  question: 'Use interface with smart pointers for automatic memory management.',
  mathSolution: 'Smart pointers with interfaces enable RAII for polymorphic objects.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <vector>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << "○ \"; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << \"□ \"; }\n};\n\nint main() {\n    vector<unique_ptr<Shape>> shapes;\n    shapes.push_back(make_unique<Circle>());\n    shapes.push_back(make_unique<Square>());\n    shapes.push_back(make_unique<Circle>());\n    \n    for (const auto& s : shapes) s->draw();\n    cout << endl;\n    return 0;\n}',
  hint: 'Smart pointers manage interface object lifetimes automatically.'
},
{
  "id": "cpp_interfaces_9",
  "topicId": "cpp_interfaces",
  "question": "Create interface factory pattern.",
  "mathSolution": "Factory creates objects implementing specific interface.",
  "codeSolution": "#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ProductA : public Product {\npublic:\n    void use() override { cout << \"Using Product A\" << endl; }\n};\n\nclass ProductB : public Product {\npublic:\n    void use() override { cout << \"Using Product B\" << endl; }\n};\n\nclass Factory {\npublic:\n    static unique_ptr<Product> create(char type) {\n        if (type == 'A') return make_unique<ProductA>();\n        if (type == 'B') return make_unique<ProductB>();\n        return nullptr;\n    }\n};\n\nint main() {\n    auto product = Factory::create('A');\n    if (product) product->use();\n    product = Factory::create('B');\n    if (product) product->use();\n    return 0;\n}",
  "hint": "Factory pattern returns objects implementing the interface."
},
{
  id: 'cpp_interfaces_10',
  topicId: 'cpp_interfaces',
  question: 'Use interface segregation principle (multiple small interfaces).',
  mathSolution: 'Split large interfaces into smaller, focused interfaces.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Flyable {\npublic:\n    virtual void fly() = 0;\n    virtual ~Flyable() {}\n};\n\nclass Swimmable {\npublic:\n    virtual void swim() = 0;\n    virtual ~Swimmable() {}\n};\n\nclass Walkable {\npublic:\n    virtual void walk() = 0;\n    virtual ~Walkable() {}\n};\n\nclass Duck : public Flyable, public Swimmable, public Walkable {\npublic:\n    void fly() override { cout << "Duck flying\" << endl; }\n    void swim() override { cout << \"Duck swimming\" << endl; }\n    void walk() override { cout << \"Duck walking\" << endl; }\n};\n\nclass Penguin : public Swimmable, public Walkable {\npublic:\n    void swim() override { cout << \"Penguin swimming\" << endl; }\n    void walk() override { cout << \"Penguin walking\" << endl; }\n};\n\nint main() {\n    Duck d;\n    Penguin p;\n    d.fly(); d.swim(); d.walk();\n    p.swim(); p.walk();\n    return 0;\n}',
  hint: 'Interface segregation principle: many client-specific interfaces are better.'
},
{
  id: 'cpp_interfaces_11',
  topicId: 'cpp_interfaces',
  question: 'Create interface with const methods.',
  mathSolution: 'Interface methods can be const for read-only operations.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Readable {\npublic:\n    virtual string read() const = 0;\n    virtual ~Readable() {}\n};\n\nclass FileReader : public Readable {\nprivate:\n    string content;\npublic:\n    FileReader(const string& c) : content(c) {}\n    string read() const override { return content; }\n};\n\nvoid printContent(const Readable& r) {\n    cout << r.read() << endl;\n}\n\nint main() {\n    FileReader reader(\"Hello World\");\n    printContent(reader);\n    return 0;\n}',
  hint: 'Const interface methods guarantee read-only access.'
},
{
  id: 'cpp_interfaces_12',
  topicId: 'cpp_interfaces',
  question: 'Use interface as callback mechanism.',
  mathSolution: 'Interface callbacks enable event-driven programming.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass EventListener {\npublic:\n    virtual void onEvent(const string& event) = 0;\n    virtual ~EventListener() {}\n};\n\nclass Button {\nprivate:\n    vector<EventListener*> listeners;\n    string label;\npublic:\n    Button(string lbl) : label(lbl) {}\n    void addListener(EventListener* l) { listeners.push_back(l); }\n    void click() {\n        cout << "Button clicked: \" << label << endl;\n        for (auto l : listeners) l->onEvent(\"click:\" + label);\n    }\n};\n\nclass Logger : public EventListener {\npublic:\n    void onEvent(const string& event) override {\n        cout << \"[LOG] Event: \" << event << endl;\n    }\n};\n\nint main() {\n    Button btn(\"Submit\");\n    Logger logger;\n    btn.addListener(&logger);\n    btn.click();\n    return 0;\n}',
  hint: 'Interfaces are natural for implementing callback mechanisms.'
},
{
  id: 'cpp_interfaces_13',
  topicId: 'cpp_interfaces',
  question: 'Create interface with template method pattern.',
  mathSolution: 'Interface defines algorithm skeleton, implementations provide details.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass DataProcessor {\npublic:\n    virtual void loadData() = 0;\n    virtual void processData() = 0;\n    virtual void saveData() = 0;\n    virtual ~DataProcessor() {}\n    \n    void process() {  // Template method\n        loadData();\n        processData();\n        saveData();\n    }\n};\n\nclass CSVProcessor : public DataProcessor {\npublic:\n    void loadData() override { cout << \"Loading CSV file\" << endl; }\n    void processData() override { cout << \"Processing CSV data\" << endl; }\n    void saveData() override { cout << \"Saving CSV results\" << endl; }\n};\n\nint main() {\n    CSVProcessor processor;\n    processor.process();\n    return 0;\n}',
  hint: 'Template method pattern uses interface to define algorithm structure.'
},
{
  id: 'cpp_interfaces_14',
  topicId: 'cpp_interfaces',
  question: 'Create interface with private inheritance for implementation hiding.',
  mathSolution: 'Private inheritance hides interface implementation details.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Printable {\npublic:\n    virtual void print() = 0;\n    virtual ~Printable() {}\n};\n\nclass Document {\nprivate:\n    string content;\npublic:\n    Document(const string& c) : content(c) {}\n    void display() { cout << content << endl; }\n};\n\nclass Report : private Document, public Printable {\npublic:\n    Report(const string& c) : Document(c) {}\n    void print() override { display(); }\n};\n\nint main() {\n    Report r(\"Annual Report\");\n    Printable* p = &r;\n    p->print();\n    // r.display(); // Error: display is private due to private inheritance\n    return 0;\n}',
  hint: 'Private inheritance can hide implementation while exposing interface.'
},
{
  id: 'cpp_interfaces_15',
  topicId: 'cpp_interfaces',
  question: 'Use dynamic_cast to query interface implementation.',
  mathSolution: 'dynamic_cast checks if object implements specific interface.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Resizable {\npublic:\n    virtual void resize(double factor) = 0;\n    virtual ~Resizable() {}\n};\n\nclass Shape : public Drawable, public Resizable {\nprivate:\n    double size;\npublic:\n    Shape() : size(1.0) {}\n    void draw() override { cout << \"Drawing shape\" << endl; }\n    void resize(double factor) override { size *= factor; cout << \"Resized by \" << factor << endl; }\n};\n\nint main() {\n    Drawable* d = new Shape();\n    d->draw();\n    \n    Resizable* r = dynamic_cast<Resizable*>(d);\n    if (r) r->resize(2.0);\n    \n    delete d;\n    return 0;\n}',
  hint: 'dynamic_cast queries whether an object implements an interface.'
},
{
  id: 'cpp_interfaces_16',
  topicId: 'cpp_interfaces',
  question: 'Create interface with static factory method.',
  mathSolution: 'Interface can provide static factory methods for creation.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& msg) = 0;\n    virtual ~Logger() {}\n    \n    static unique_ptr<Logger> createConsoleLogger();\n    static unique_ptr<Logger> createFileLogger(const string& filename);\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& msg) override { cout << \"[CONSOLE] \" << msg << endl; }\n};\n\nclass FileLogger : public Logger {\nprivate:\n    string filename;\npublic:\n    FileLogger(const string& f) : filename(f) {}\n    void log(const string& msg) override { cout << \"[FILE:\" << filename << \"] \" << msg << endl; }\n};\n\nunique_ptr<Logger> Logger::createConsoleLogger() {\n    return make_unique<ConsoleLogger>();\n}\n\nunique_ptr<Logger> Logger::createFileLogger(const string& filename) {\n    return make_unique<FileLogger>(filename);\n}\n\nint main() {\n    auto console = Logger::createConsoleLogger();\n    auto file = Logger::createFileLogger(\"app.log\");\n    console->log(\"Hello\");\n    file->log(\"World\");\n    return 0;\n}',
  hint: 'Interfaces can provide static factory methods for object creation.'
},
{
  id: 'cpp_interfaces_17',
  topicId: 'cpp_interfaces',
  question: 'Use interface for dependency injection.',
  mathSolution: 'Interfaces enable loose coupling through dependency injection.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Database {\npublic:\n    virtual void query(const string& sql) = 0;\n    virtual ~Database() {}\n};\n\nclass MySQLDatabase : public Database {\npublic:\n    void query(const string& sql) override { cout << \"MySQL: \" << sql << endl; }\n};\n\nclass PostgreSQLDatabase : public Database {\npublic:\n    void query(const string& sql) override { cout << \"PostgreSQL: \" << sql << endl; }\n};\n\nclass UserService {\nprivate:\n    unique_ptr<Database> db;\npublic:\n    UserService(unique_ptr<Database> database) : db(move(database)) {}\n    void getUsers() { db->query(\"SELECT * FROM users\"); }\n};\n\nint main() {\n    UserService service(make_unique<MySQLDatabase>());\n    service.getUsers();\n    \n    UserService service2(make_unique<PostgreSQLDatabase>());\n    service2.getUsers();\n    return 0;\n}',
  hint: 'Interfaces enable dependency injection and loose coupling.'
},
{
  id: 'cpp_interfaces_18',
  topicId: 'cpp_interfaces',
  question: 'Create interface with noexcept specification.',
  mathSolution: 'Interface methods can specify exception guarantees.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    virtual int add(int a, int b) noexcept = 0;\n    virtual int divide(int a, int b) = 0;\n    virtual ~Calculator() {}\n};\n\nclass SimpleCalculator : public Calculator {\npublic:\n    int add(int a, int b) noexcept override { return a + b; }\n    int divide(int a, int b) override {\n        if (b == 0) throw runtime_error(\"Division by zero\");\n        return a / b;\n    }\n};\n\nint main() {\n    SimpleCalculator calc;\n    cout << calc.add(5, 3) << endl;\n    try {\n        cout << calc.divide(10, 0) << endl;\n    } catch (const exception& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'noexcept in interfaces documents exception safety guarantees.'
},
{
  id: 'cpp_interfaces_19',
  topicId: 'cpp_interfaces',
  question: 'Implement interface using CRTP for static polymorphism.',
  mathSolution: 'CRTP provides compile-time interface implementation.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Drawable {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->drawImpl();\n    }\n};\n\nclass Circle : public Drawable<Circle> {\npublic:\n    void drawImpl() { cout << "Drawing circle" << endl; }\n};\n\nclass Square : public Drawable<Square> {\npublic:\n    void drawImpl() { cout << "Drawing square" << endl; }\n};\n\ntemplate<typename T>\nvoid render(Drawable<T>& shape) {\n    shape.draw();\n}\n\nint main() {\n    Circle c;\n    Square s;\n    render(c);\n    render(s);\n    return 0;\n}',
  hint: 'CRTP enables static polymorphism without virtual functions.'
},
{
  id: 'cpp_interfaces_20',
  topicId: 'cpp_interfaces',
  question: 'Use interface with std::variant for type-safe unions.',
  mathSolution: 'std::variant with visitor pattern implements compile-time interface.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <vector>\nusing namespace std;\n\nstruct Circle {\n    void draw() const { cout << \"○ \"; }\n};\n\nstruct Square {\n    void draw() const { cout << \"□ \"; }\n};\n\nstruct Triangle {\n    void draw() const { cout << \"▲ \"; }\n};\n\nusing Shape = variant<Circle, Square, Triangle>;\n\nint main() {\n    vector<Shape> shapes;\n    shapes.push_back(Circle{});\n    shapes.push_back(Square{});\n    shapes.push_back(Triangle{});\n    shapes.push_back(Circle{});\n    \n    auto drawVisitor = [](const auto& shape) { shape.draw(); };\n    \n    for (const auto& shape : shapes) {\n        visit(drawVisitor, shape);\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'std::variant provides compile-time interface through visitors.'
},
{
  id: 'cpp_interfaces_21',
  topicId: 'cpp_interfaces',
  question: 'Create interface with type erasure for non-intrusive design.',
  mathSolution: 'Type erasure hides concrete types behind uniform interface.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Drawable {\nprivate:\n    struct Concept {\n        virtual void draw() = 0;\n        virtual ~Concept() {}\n    };\n    \n    template<typename T>\n    struct Model : Concept {\n        T object;\n        Model(const T& obj) : object(obj) {}\n        void draw() override { object.draw(); }\n    };\n    \n    unique_ptr<Concept> pimpl;\n    \npublic:\n    template<typename T>\n    Drawable(const T& obj) : pimpl(make_unique<Model<T>>(obj)) {}\n    \n    void draw() { pimpl->draw(); }\n};\n\nstruct Circle {\n    void draw() const { cout << \"Circle\"; }\n};\n\nstruct Square {\n    void draw() const { cout << \"Square\"; }\n};\n\nint main() {\n    Drawable d1(Circle{});\n    Drawable d2(Square{});\n    \n    d1.draw(); cout << endl;\n    d2.draw(); cout << endl;\n    \n    return 0;\n}',
  hint: 'Type erasure creates interface without inheritance requirements.'
},
{
  id: 'cpp_interfaces_22',
  topicId: 'cpp_interfaces',
  question: 'Use interface with std::function for polymorphic callbacks.',
  mathSolution: 'std::function wraps any callable satisfying interface contract.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <vector>\nusing namespace std;\n\nclass Button {\nprivate:\n    vector<function<void()>> clickHandlers;\n    string label;\n    \npublic:\n    Button(const string& lbl) : label(lbl) {}\n    void addClickHandler(function<void()> handler) { clickHandlers.push_back(handler); }\n    void click() {\n        cout << "Button " << label << " clicked" << endl;\n        for (auto& h : clickHandlers) h();\n    }\n};\n\nint main() {\n    Button btn("Submit");\n    \n    btn.addClickHandler([]() { cout << "  - Logging click" << endl; });\n    btn.addClickHandler([]() { cout << "  - Sending event" << endl; });\n    btn.addClickHandler([]() { cout << "  - Updating UI" << endl; });\n    \n    btn.click();\n    return 0;\n}',
  hint: 'std::function provides callable interface for any function object.'
},
{
  id: 'cpp_interfaces_23',
  topicId: 'cpp_interfaces',
  question: 'Create interface with concept (C++20) for compile-time checking.',
  mathSolution: 'Concepts define compile-time interface requirements.',
  codeSolution: '#include <iostream>\n#include <concepts>\nusing namespace std;\n\ntemplate<typename T>\nconcept Drawable = requires(T t) {\n    { t.draw() } -> convertible_to<void>;\n};\n\ntemplate<typename T>\nconcept Resizable = requires(T t, double factor) {\n    { t.resize(factor) } -> convertible_to<void>;\n};\n\nstruct Circle {\n    void draw() { cout << \"Circle\"; }\n};\n\nstruct Square {\n    void draw() { cout << \"Square\"; }\n    void resize(double f) { cout << \" resize(\" << f << \")\"; }\n};\n\ntemplate<Drawable T>\nvoid render(const T& shape) {\n    shape.draw();\n}\n\ntemplate<Drawable T>\nvoid process(T& shape) {\n    shape.draw();\n    if constexpr (Resizable<T>) {\n        shape.resize(1.5);\n    }\n    cout << endl;\n}\n\nint main() {\n    Circle c;\n    Square s;\n    render(c); cout << endl;\n    process(s);\n    return 0;\n}',
  hint: 'Concepts provide compile-time interface constraints (C++20).'
},
{
  id: 'cpp_interfaces_24',
  topicId: 'cpp_interfaces',
  question: 'Create interface with virtual inheritance to avoid diamond problem.',
  mathSolution: 'Virtual inheritance ensures single interface instance in multiple inheritance.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Colored {\npublic:\n    virtual string getColor() = 0;\n    virtual ~Colored() {}\n};\n\nclass ColoredDrawable : public virtual Drawable, public virtual Colored {\n    // Combines both interfaces\n};\n\nclass Circle : public ColoredDrawable {\nprivate:\n    string color;\npublic:\n    Circle(const string& c) : color(c) {}\n    void draw() override { cout << \"Drawing circle\" << endl; }\n    string getColor() override { return color; }\n};\n\nint main() {\n    Circle c(\"red\");\n    Drawable* d = &c;\n    Colored* col = &c;\n    d->draw();\n    cout << \"Color: \" << col->getColor() << endl;\n    return 0;\n}',
  hint: 'Virtual inheritance prevents duplicate interface base classes.'
},
{
  id: 'cpp_interfaces_25',
  topicId: 'cpp_interfaces',
  question: 'Use interface with placement new for custom memory management.',
  mathSolution: 'Placement new can construct interface objects in pre-allocated memory.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Widget {\npublic:\n    virtual void process() = 0;\n    virtual ~Widget() {}\n};\n\nclass ConcreteWidget : public Widget {\npublic:\n    void process() override { cout << \"Processing widget\" << endl; }\n};\n\nint main() {\n    alignas(ConcreteWidget) char buffer[sizeof(ConcreteWidget)];\n    \n    Widget* widget = new(buffer) ConcreteWidget();\n    widget->process();\n    widget->~Widget();  // Manual destructor call\n    \n    // Using unique_ptr with custom deleter for placement new\n    auto deleter = [](Widget* w) { w->~Widget(); };\n    unique_ptr<Widget, decltype(deleter)> widget2(new(buffer) ConcreteWidget(), deleter);\n    widget2->process();\n    \n    return 0;\n}',
  hint: 'Interfaces can be used with placement new for custom allocation.'
},
{
  id: 'cpp_interfaces_26',
  topicId: 'cpp_interfaces',
  question: 'Create interface with friend function for operator overloading.',
  mathSolution: 'Interfaces can declare friend operators for custom types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Printable {\npublic:\n    virtual void print(ostream& os) const = 0;\n    virtual ~Printable() {}\n    \n    friend ostream& operator<<(ostream& os, const Printable& p) {\n        p.print(os);\n        return os;\n    }\n};\n\nclass Point : public Printable {\nprivate:\n    int x, y;\npublic:\n    Point(int a, int b) : x(a), y(b) {}\n    void print(ostream& os) const override { os << \"(\" << x << \",\" << y << \")\"; }\n};\n\nint main() {\n    Point p(10, 20);\n    cout << \"Point: \" << p << endl;\n    return 0;\n}',
  hint: 'Interfaces can declare friend operators for consistent I/O.'
},
{
  id: 'cpp_interfaces_27',
  topicId: 'cpp_interfaces',
  question: 'Use interface for logging abstraction.',
  mathSolution: 'Logging interface enables multiple logging implementations.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <ctime>\nusing namespace std;\n\nclass Logger {\npublic:\n    virtual void log(const string& level, const string& msg) = 0;\n    virtual ~Logger() {}\n};\n\nclass ConsoleLogger : public Logger {\npublic:\n    void log(const string& level, const string& msg) override {\n        cout << "[" << level << "] " << msg << endl;\n    }\n};\n\nclass TimestampLogger : public Logger {\nprivate:\n    unique_ptr<Logger> logger;\npublic:\n    TimestampLogger(unique_ptr<Logger> log) : logger(move(log)) {}\n    void log(const string& level, const string& msg) override {\n        time_t now = time(nullptr);\n        string timestamp = ctime(&now);\n        timestamp.pop_back();\n        logger->log(level, timestamp + ": " + msg);\n    }\n};\n\nint main() {\n    auto logger = make_unique<TimestampLogger>(make_unique<ConsoleLogger>());\n    logger->log("INFO", "Application started");\n    return 0;\n}',
  hint: 'Logger abstraction allows decorator pattern with interfaces.'
},
{
  "id": "cpp_interfaces_28",
  "topicId": "cpp_interfaces",
  "question": "Create interface for serialization.",
  "mathSolution": "Serialization interface allows polymorphic serialization.",
  "codeSolution": "#include <iostream>\n#include <sstream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Serializable {\npublic:\n    virtual void serialize(ostream& os) const = 0;\n    virtual void deserialize(istream& is) = 0;\n    virtual ~Serializable() {}\n};\n\nclass Person : public Serializable {\nprivate:\n    string name;\n    int age;\npublic:\n    Person() : name(\"\"), age(0) {}\n    Person(const string& n, int a) : name(n), age(a) {}\n    \n    void serialize(ostream& os) const override { \n        os << name << \",\" << age; \n    }\n    \n    void deserialize(istream& is) override {\n        string line;\n        getline(is, line);\n        size_t commaPos = line.find(',');\n        if (commaPos != string::npos) {\n            name = line.substr(0, commaPos);\n            age = stoi(line.substr(commaPos + 1));\n        }\n    }\n    \n    void display() const { \n        cout << name << \" (\" << age << \")\" << endl; \n    }\n};\n\nint main() {\n    Person p1(\"John\", 30);\n    stringstream ss;\n    p1.serialize(ss);\n    \n    cout << \"Serialized data: \" << ss.str() << endl;\n    \n    Person p2;\n    p2.deserialize(ss);\n    cout << \"Deserialized: \";\n    p2.display();\n    \n    return 0;\n}",
  "hint": "Serialization interface provides uniform serialization mechanism."
},
{
  id: 'cpp_interfaces_29',
  topicId: 'cpp_interfaces',
  question: 'Create interface for iterator pattern.',
  mathSolution: 'Iterator interface enables uniform container traversal.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Iterator {\npublic:\n    virtual void next() = 0;\n    virtual bool done() const = 0;\n    virtual int current() const = 0;\n    virtual ~Iterator() {}\n};\n\nclass VectorIterator : public Iterator {\nprivate:\n    const vector<int>& data;\n    size_t index;\npublic:\n    VectorIterator(const vector<int>& v) : data(v), index(0) {}\n    void next() override { if (index < data.size()) index++; }\n    bool done() const override { return index >= data.size(); }\n    int current() const override { return data[index]; }\n};\n\nint main() {\n    vector<int> numbers = {10, 20, 30, 40};\n    VectorIterator it(numbers);\n    while (!it.done()) {\n        cout << it.current() << \" \";\n        it.next();\n    }\n    cout << endl;\n    return 0;\n}',
  hint: 'Iterator interface provides uniform traversal for different containers.'
},
{
  id: 'cpp_interfaces_30',
  topicId: 'cpp_interfaces',
  question: 'Use interface for command pattern.',
  mathSolution: 'Command interface encapsulates operations as objects.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\nclass Command {\npublic:\n    virtual void execute() = 0;\n    virtual void undo() = 0;\n    virtual ~Command() {}\n};\n\nclass Light {\npublic:\n    void on() { cout << \"Light ON\" << endl; }\n    void off() { cout << \"Light OFF\" << endl; }\n};\n\nclass LightOnCommand : public Command {\nprivate:\n    Light& light;\npublic:\n    LightOnCommand(Light& l) : light(l) {}\n    void execute() override { light.on(); }\n    void undo() override { light.off(); }\n};\n\nclass LightOffCommand : public Command {\nprivate:\n    Light& light;\npublic:\n    LightOffCommand(Light& l) : light(l) {}\n    void execute() override { light.off(); }\n    void undo() override { light.on(); }\n};\n\nint main() {\n    Light livingRoom;\n    vector<unique_ptr<Command>> commands;\n    commands.push_back(make_unique<LightOnCommand>(livingRoom));\n    commands.push_back(make_unique<LightOffCommand>(livingRoom));\n    for (auto& cmd : commands) cmd->execute();\n    commands.back()->undo();\n    return 0;\n}',
  hint: 'Command interface encapsulates requests as objects.'
},
{
  id: 'cpp_interfaces_31',
  topicId: 'cpp_interfaces',
  question: 'Create interface for state pattern.',
  mathSolution: 'State interface encapsulates state-specific behavior.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass State {\npublic:\n    virtual void handle() = 0;\n    virtual ~State() {}\n};\n\nclass Context {\nprivate:\n    unique_ptr<State> state;\npublic:\n    void setState(unique_ptr<State> s) { state = move(s); }\n    void request() { if (state) state->handle(); }\n};\n\nclass ConcreteStateA : public State {\npublic:\n    void handle() override { cout << \"Handling State A\" << endl; }\n};\n\nclass ConcreteStateB : public State {\npublic:\n    void handle() override { cout << \"Handling State B\" << endl; }\n};\n\nint main() {\n    Context context;\n    context.setState(make_unique<ConcreteStateA>());\n    context.request();\n    context.setState(make_unique<ConcreteStateB>());\n    context.request();\n    return 0;\n}',
  hint: 'State interface encapsulates varying behavior per state.'
},
{
  id: 'cpp_interfaces_32',
  topicId: 'cpp_interfaces',
  question: 'Use interface for strategy pattern.',
  mathSolution: 'Strategy interface encapsulates interchangeable algorithms.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass SortingStrategy {\npublic:\n    virtual void sort(vector<int>& data) = 0;\n    virtual ~SortingStrategy() {}\n};\n\nclass BubbleSort : public SortingStrategy {\npublic:\n    void sort(vector<int>& data) override {\n        cout << \"Using bubble sort\" << endl;\n        for (size_t i = 0; i < data.size(); i++) {\n            for (size_t j = 0; j < data.size() - i - 1; j++) {\n                if (data[j] > data[j + 1]) swap(data[j], data[j + 1]);\n            }\n        }\n    }\n};\n\nclass QuickSort : public SortingStrategy {\npublic:\n    void sort(vector<int>& data) override { cout << \"Using quick sort\" << endl; }\n};\n\nclass DataProcessor {\nprivate:\n    unique_ptr<SortingStrategy> strategy;\n    vector<int> data;\npublic:\n    void setStrategy(unique_ptr<SortingStrategy> s) { strategy = move(s); }\n    void add(int val) { data.push_back(val); }\n    void process() { if (strategy) strategy->sort(data); }\n};\n\nint main() {\n    DataProcessor dp;\n    dp.add(5); dp.add(2); dp.add(8); dp.add(1);\n    dp.setStrategy(make_unique<BubbleSort>());\n    dp.process();\n    return 0;\n}',
  hint: 'Strategy interface allows interchangeable algorithms at runtime.'
},
{
  id: 'cpp_interfaces_33',
  topicId: 'cpp_interfaces',
  question: 'Create interface for observer pattern.',
  mathSolution: 'Observer interface defines update contract.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nclass Observer {\npublic:\n    virtual void update(const string& message) = 0;\n    virtual ~Observer() {}\n};\n\nclass Subject {\nprivate:\n    vector<Observer*> observers;\npublic:\n    void attach(Observer* obs) { observers.push_back(obs); }\n    void notify(const string& msg) { for (auto o : observers) o->update(msg); }\n};\n\nclass ConcreteObserver : public Observer {\nprivate:\n    string name;\npublic:\n    ConcreteObserver(const string& n) : name(n) {}\n    void update(const string& message) override {\n        cout << name << \" received: \" << message << endl;\n    }\n};\n\nint main() {\n    Subject subject;\n    ConcreteObserver o1(\"Observer1\"), o2(\"Observer2\");\n    subject.attach(&o1);\n    subject.attach(&o2);\n    subject.notify(\"Hello Observers!\");\n    return 0;\n}',
  hint: 'Observer interface enables event-driven architecture.'
},
{
  id: 'cpp_interfaces_34',
  topicId: 'cpp_interfaces',
  question: 'Use interface for visitor pattern double dispatch.',
  mathSolution: 'Visitor interface enables operations on object structures.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Circle;\nclass Rectangle;\n\nclass Visitor {\npublic:\n    virtual void visit(Circle& c) = 0;\n    virtual void visit(Rectangle& r) = 0;\n    virtual ~Visitor() {}\n};\n\nclass Shape {\npublic:\n    virtual void accept(Visitor& v) = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void accept(Visitor& v) override { v.visit(*this); }\n    void draw() { cout << \"Circle\"; }\n};\n\nclass Rectangle : public Shape {\npublic:\n    void accept(Visitor& v) override { v.visit(*this); }\n    void draw() { cout << \"Rectangle\"; }\n};\n\nclass DrawVisitor : public Visitor {\npublic:\n    void visit(Circle& c) override { c.draw(); }\n    void visit(Rectangle& r) override { r.draw(); }\n};\n\nint main() {\n    Circle c;\n    Rectangle r;\n    DrawVisitor drawer;\n    c.accept(drawer); cout << endl;\n    r.accept(drawer); cout << endl;\n    return 0;\n}',
  hint: 'Visitor interface enables double dispatch for operations.'
},
{
  id: 'cpp_interfaces_35',
  topicId: 'cpp_interfaces',
  question: 'Create interface for adapter pattern.',
  mathSolution: 'Adapter interface bridges incompatible interfaces.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass OldSystem {\npublic:\n    void oldRequest() { cout << \"Old system request\" << endl; }\n};\n\nclass NewSystem {\npublic:\n    virtual void newRequest() = 0;\n    virtual ~NewSystem() {}\n};\n\nclass Adapter : public NewSystem {\nprivate:\n    unique_ptr<OldSystem> oldSystem;\npublic:\n    Adapter() : oldSystem(make_unique<OldSystem>()) {}\n    void newRequest() override { oldSystem->oldRequest(); }\n};\n\nint main() {\n    unique_ptr<NewSystem> system = make_unique<Adapter>();\n    system->newRequest();\n    return 0;\n}',
  hint: 'Adapter interface allows incompatible systems to work together.'
},
{
  id: 'cpp_interfaces_36',
  topicId: 'cpp_interfaces',
  question: 'Use interface for bridge pattern.',
  mathSolution: 'Bridge interface separates abstraction from implementation.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass DrawingAPI {\npublic:\n    virtual void drawCircle(double x, double y, double r) = 0;\n    virtual ~DrawingAPI() {}\n};\n\nclass DrawingAPI1 : public DrawingAPI {\npublic:\n    void drawCircle(double x, double y, double r) override {\n        cout << \"API1: circle at (\" << x << \",\" << y << \") r=\" << r << endl;\n    }\n};\n\nclass Shape {\nprotected:\n    unique_ptr<DrawingAPI> drawingAPI;\npublic:\n    Shape(unique_ptr<DrawingAPI> api) : drawingAPI(move(api)) {}\n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass CircleShape : public Shape {\nprivate:\n    double x, y, radius;\npublic:\n    CircleShape(double cx, double cy, double r, unique_ptr<DrawingAPI> api)\n        : Shape(move(api)), x(cx), y(cy), radius(r) {}\n    void draw() override { drawingAPI->drawCircle(x, y, radius); }\n};\n\nint main() {\n    CircleShape circle(5, 5, 10, make_unique<DrawingAPI1>());\n    circle.draw();\n    return 0;\n}',
  hint: 'Bridge interface decouples abstraction from implementation.'
},
{
  id: 'cpp_interfaces_37',
  topicId: 'cpp_interfaces',
  question: 'Create interface for proxy pattern.',
  mathSolution: 'Proxy interface controls access to real object.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Image {\npublic:\n    virtual void display() = 0;\n    virtual ~Image() {}\n};\n\nclass RealImage : public Image {\nprivate:\n    string filename;\n    void load() { cout << "Loading " << filename << endl; }\npublic:\n    RealImage(const string& f) : filename(f) { load(); }\n    void display() override { cout << "Displaying " << filename << endl; }\n};\n\nclass ImageProxy : public Image {\nprivate:\n    string filename;\n    unique_ptr<RealImage> realImage;\npublic:\n    ImageProxy(const string& f) : filename(f) {}\n    void display() override {\n        if (!realImage) realImage = make_unique<RealImage>(filename);\n        realImage->display();\n    }\n};\n\nint main() {\n    ImageProxy proxy("photo.jpg");\n    cout << "Proxy created, image not loaded" << endl;\n    proxy.display();\n    proxy.display();\n    return 0;\n}',
  hint: 'Proxy interface controls access to real objects.'
},
{
  id: 'cpp_interfaces_38',
  topicId: 'cpp_interfaces',
  question: 'Use interface for decorator pattern.',
  mathSolution: 'Decorator interface wraps and enhances existing objects.',
  codeSolution: '#include <iostream>\n#include <memory>\nusing namespace std;\n\nclass Coffee {\npublic:\n    virtual double cost() = 0;\n    virtual string description() = 0;\n    virtual ~Coffee() {}\n};\n\nclass SimpleCoffee : public Coffee {\npublic:\n    double cost() override { return 5.0; }\n    string description() override { return \"Simple coffee\"; }\n};\n\nclass CoffeeDecorator : public Coffee {\nprotected:\n    unique_ptr<Coffee> coffee;\npublic:\n    CoffeeDecorator(unique_ptr<Coffee> c) : coffee(move(c)) {}\n};\n\nclass MilkDecorator : public CoffeeDecorator {\npublic:\n    MilkDecorator(unique_ptr<Coffee> c) : CoffeeDecorator(move(c)) {}\n    double cost() override { return coffee->cost() + 2.0; }\n    string description() override { return coffee->description() + \", milk\"; }\n};\n\nint main() {\n    auto coffee = make_unique<SimpleCoffee>();\n    coffee = make_unique<MilkDecorator>(move(coffee));\n    cout << coffee->description() << \": $\" << coffee->cost() << endl;\n    return 0;\n}',
  hint: 'Decorator interface adds behavior dynamically.'
},
{
  id: 'cpp_interfaces_39',
  topicId: 'cpp_interfaces',
  question: 'Create interface for facade pattern.',
  mathSolution: 'Facade interface simplifies complex subsystem.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass CPU {\npublic:\n    void start() { cout << \"CPU started\" << endl; }\n    void execute() { cout << \"CPU executing\" << endl; }\n};\n\nclass Memory {\npublic:\n    void load() { cout << \"Memory loaded\" << endl; }\n};\n\nclass HardDrive {\npublic:\n    void read() { cout << \"Hard drive reading\" << endl; }\n};\n\nclass ComputerFacade {\nprivate:\n    CPU cpu;\n    Memory memory;\n    HardDrive hd;\npublic:\n    void start() {\n        cpu.start();\n        memory.load();\n        hd.read();\n        cpu.execute();\n        cout << \"Computer ready\" << endl;\n    }\n};\n\nint main() {\n    ComputerFacade computer;\n    computer.start();\n    return 0;\n}',
  hint: 'Facade interface simplifies subsystem interaction.'
},
{
  "id": "cpp_interfaces_40",
  "topicId": "cpp_interfaces",
  "question": "Use interface for flyweight pattern.",
  "mathSolution": "Flyweight interface shares common state among objects.",
  "codeSolution": "#include <iostream>\n#include <unordered_map>\n#include <memory>\n#include <string>\nusing namespace std;\n\nclass Character {\npublic:\n    virtual void display(int x, int y) = 0;\n    virtual ~Character() {}\n};\n\nclass ConcreteCharacter : public Character {\nprivate:\n    char symbol;\n    string font;\npublic:\n    ConcreteCharacter(char s, const string& f) : symbol(s), font(f) {}\n    void display(int x, int y) override {\n        cout << \"Character '\" << symbol << \"' at (\" << x << \",\" << y \n             << \") font: \" << font << endl;\n    }\n};\n\nclass CharacterFactory {\nprivate:\n    unordered_map<string, shared_ptr<Character>> cache;\npublic:\n    shared_ptr<Character> getCharacter(char c, const string& font) {\n        string key = string(1, c) + font;\n        if (cache.find(key) == cache.end()) {\n            cache[key] = make_shared<ConcreteCharacter>(c, font);\n            cout << \"Creating new character: \" << key << endl;\n        }\n        return cache[key];\n    }\n    \n    size_t getCacheSize() const {\n        return cache.size();\n    }\n};\n\nint main() {\n    CharacterFactory factory;\n    auto a1 = factory.getCharacter('A', \"Arial\");\n    auto a2 = factory.getCharacter('A', \"Arial\");\n    auto b1 = factory.getCharacter('B', \"Arial\");\n    \n    a1->display(0, 0);\n    a2->display(10, 0);\n    b1->display(20, 0);\n    \n    cout << \"\\nUnique characters cached: \" << factory.getCacheSize() << endl;\n    cout << \"(Only 2 unique characters created for 3 uses)\" << endl;\n    \n    return 0;\n}",
  "hint": "Flyweight interface enables efficient sharing of objects."
},
{
  id: 'cpp_exceptions_1',
  topicId: 'cpp_exceptions',
  question: 'Use basic try-catch block to handle division by zero.',
  mathSolution: 'try block contains risky code; catch handles exceptions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ndouble divide(double a, double b) {\n    if (b == 0) {\n        throw "Division by zero!";\n    }\n    return a / b;\n}\n\nint main() {\n    double x = 10, y = 0;\n    try {\n        double result = divide(x, y);\n        cout << "Result: " << result << endl;\n    } catch (const char* error) {\n        cout << "Error: " << error << endl;\n    }\n    return 0;\n}',
  hint: 'Use try-catch to handle runtime errors gracefully.'
},
{
  id: 'cpp_exceptions_2',
  topicId: 'cpp_exceptions',
  question: 'Catch multiple exception types with different catch blocks.',
  mathSolution: 'Use multiple catch blocks for different exception types.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid testFunction(int value) {\n    if (value == 1) throw runtime_error("Runtime error");\n    if (value == 2) throw logic_error("Logic error");\n    if (value == 3) throw "String exception";\n    if (value == 4) throw 42;\n}\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        try {\n            testFunction(i);\n            cout << "No exception for " << i << endl;\n        } catch (const runtime_error& e) {\n            cout << "Runtime error caught: " << e.what() << endl;\n        } catch (const logic_error& e) {\n            cout << "Logic error caught: " << e.what() << endl;\n        } catch (const char* e) {\n            cout << "String exception: " << e << endl;\n        } catch (int e) {\n            cout << "Integer exception: " << e << endl;\n        } catch (...) {\n            cout << "Unknown exception caught" << endl;\n        }\n    }\n    return 0;\n}',
  hint: 'Multiple catch blocks handle different exception types.'
},
{
  id: 'cpp_exceptions_3',
  topicId: 'cpp_exceptions',
  question: 'Use try-catch-finally equivalent (using RAII).',
  mathSolution: 'Use destructor for cleanup as C++ doesn\'t have finally.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource() { cout << "Resource acquired" << endl; }\n    ~Resource() { cout << "Resource released" << endl; }\n    void use() { cout << "Using resource" << endl; }\n};\n\nint main() {\n    try {\n        Resource res;\n        res.use();\n        throw runtime_error("Something went wrong");\n        cout << "This won\'t execute" << endl;\n    } catch (const exception& e) {\n        cout << "Exception caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'RAII ensures cleanup even when exceptions occur.'
},
{
  id: 'cpp_exceptions_4',
  topicId: 'cpp_exceptions',
  question: 'Create custom exception class derived from std::exception.',
  mathSolution: 'Inherit from std::exception and override what().',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <string>\nusing namespace std;\n\nclass InvalidAgeException : public exception {\nprivate:\n    string message;\npublic:\n    InvalidAgeException(int age) {\n        message = "Invalid age: " + to_string(age) + ". Age must be between 0 and 150.";\n    }\n    const char* what() const noexcept override {\n        return message.c_str();\n    }\n};\n\nvoid setAge(int age) {\n    if (age < 0 || age > 150) {\n        throw InvalidAgeException(age);\n    }\n    cout << "Age set to " << age << endl;\n}\n\nint main() {\n    try {\n        setAge(200);\n    } catch (const InvalidAgeException& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Custom exceptions provide meaningful error information.'
},
{
  id: 'cpp_exceptions_5',
  topicId: 'cpp_exceptions',
  question: 'Rethrow exception after partial handling.',
  mathSolution: 'Use throw without argument to rethrow caught exception.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid innerFunction() {\n    throw runtime_error("Error in inner function");\n}\n\nvoid middleFunction() {\n    try {\n        innerFunction();\n    } catch (const runtime_error& e) {\n        cout << "Middle: Logging error: " << e.what() << endl;\n        throw;  // Rethrow\n    }\n}\n\nint main() {\n    try {\n        middleFunction();\n    } catch (const runtime_error& e) {\n        cout << "Main: Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Rethrow (throw;) preserves original exception type.'
},
{
  id: 'cpp_exceptions_6',
  topicId: 'cpp_exceptions',
  question: 'Use noexcept specifier for functions that don\'t throw.',
  mathSolution: 'noexcept indicates function won\'t throw exceptions.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid safeFunction() noexcept {\n    cout << "This function never throws" << endl;\n}\n\nvoid mayThrow(bool condition) {\n    if (condition) throw runtime_error("Error!");\n}\n\nint main() {\n    cout << boolalpha;\n    cout << "safeFunction is noexcept: " << noexcept(safeFunction()) << endl;\n    cout << "mayThrow(false) is noexcept: " << noexcept(mayThrow(false)) << endl;\n    \n    safeFunction();\n    \n    try {\n        mayThrow(true);\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'noexcept enables compiler optimizations and indicates exception safety.'
},
{
  id: 'cpp_exceptions_7',
  topicId: 'cpp_exceptions',
  question: 'Create exception hierarchy with multiple levels.',
  mathSolution: 'Derive custom exceptions from base exception classes.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <string>\nusing namespace std;\n\nclass DatabaseException : public exception {\nprotected:\n    string message;\npublic:\n    DatabaseException(const string& msg) : message(msg) {}\n    const char* what() const noexcept override { return message.c_str(); }\n};\n\nclass ConnectionException : public DatabaseException {\npublic:\n    ConnectionException(const string& db) : \n        DatabaseException("Failed to connect to database: " + db) {}\n};\n\nclass QueryException : public DatabaseException {\npublic:\n    QueryException(const string& sql) : \n        DatabaseException("Query failed: " + sql) {}\n};\n\nclass TimeoutException : public DatabaseException {\npublic:\n    TimeoutException(int seconds) : \n        DatabaseException("Query timeout after " + to_string(seconds) + " seconds") {}\n};\n\nint main() {\n    try {\n        throw ConnectionException("users.db");\n    } catch (const TimeoutException& e) {\n        cout << "Timeout: " << e.what() << endl;\n    } catch (const QueryException& e) {\n        cout << "Query: " << e.what() << endl;\n    } catch (const ConnectionException& e) {\n        cout << "Connection: " << e.what() << endl;\n    } catch (const DatabaseException& e) {\n        cout << "Database: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Exception hierarchy allows handling at different granularity levels.'
},
{
  id: 'cpp_exceptions_8',
  topicId: 'cpp_exceptions',
  question: 'Use function try block for constructor exception handling.',
  mathSolution: 'Function try block catches exceptions in initializer list.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource(int value) {\n        if (value < 0) throw runtime_error("Invalid resource value");\n        cout << "Resource created with value " << value << endl;\n    }\n};\n\nclass Container {\nprivate:\n    Resource res1;\n    Resource res2;\npublic:\n    Container(int v1, int v2) \n        try : res1(v1), res2(v2) {\n        cout << "Container created" << endl;\n    } catch (const exception& e) {\n        cout << "Container constructor caught: " << e.what() << endl;\n        throw;  // rethrow\n    }\n};\n\nint main() {\n    try {\n        Container c(10, -5);\n    } catch (const exception& e) {\n        cout << "Main caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Function try block catches exceptions from member initializers.'
},
{
  id: 'cpp_exceptions_9',
  topicId: 'cpp_exceptions',
  question: 'Use standard exception classes (runtime_error, logic_error).',
  mathSolution: 'Use STL exception classes for common error types.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <cmath>\n#include <string>\nusing namespace std;\n\ndouble safeSqrt(double x) {\n    if (x < 0) {\n        throw domain_error("Cannot take square root of negative number");\n    }\n    return sqrt(x);\n}\n\nint stringToInt(const string& str) {\n    try {\n        return stoi(str);\n    } catch (const invalid_argument& e) {\n        throw logic_error("Invalid number format: " + str);\n    } catch (const out_of_range& e) {\n        throw range_error("Number out of range: " + str);\n    }\n}\n\nint main() {\n    try {\n        cout << safeSqrt(-5) << endl;\n    } catch (const domain_error& e) {\n        cout << "Domain error: " << e.what() << endl;\n    }\n    \n    try {\n        stringToInt("abc");\n    } catch (const logic_error& e) {\n        cout << "Logic error: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Standard exceptions provide common error categories.'
},
{
  id: 'cpp_exceptions_10',
  topicId: 'cpp_exceptions',
  question: 'Use nested try-catch blocks for different exception levels.',
  mathSolution: 'Nested try blocks handle exceptions at different levels.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid level3() {\n    throw runtime_error("Error at level 3");\n}\n\nvoid level2() {\n    try {\n        level3();\n    } catch (const logic_error& e) {\n        cout << "Level2 caught logic_error" << endl;\n    }\n    cout << "Level2 continues" << endl;\n}\n\nvoid level1() {\n    try {\n        level2();\n    } catch (const runtime_error& e) {\n        cout << "Level1 caught runtime_error: " << e.what() << endl;\n        throw;  // rethrow to main\n    }\n}\n\nint main() {\n    try {\n        level1();\n    } catch (const exception& e) {\n        cout << "Main caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Nested try blocks allow different handling strategies.'
},
{
  id: 'cpp_exceptions_11',
  topicId: 'cpp_exceptions',
  question: 'Use exception specification with throw() (deprecated but works).',
  mathSolution: 'throw() indicates function throws no exceptions (deprecated).',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nvoid oldStyle() throw() {\n    cout << "This function promises not to throw (deprecated)" << endl;\n    // throw runtime_error("Will cause unexpected");\n}\n\nvoid modernStyle() noexcept {\n    cout << "Modern noexcept function" << endl;\n}\n\nint main() {\n    oldStyle();\n    modernStyle();\n    \n    cout << "Function called successfully" << endl;\n    return 0;\n}',
  hint: 'Use noexcept instead of throw() in modern C++.'
},
{
  id: 'cpp_exceptions_12',
  topicId: 'cpp_exceptions',
  question: 'Catch all exceptions using ellipsis (...).',
  mathSolution: 'Catch-all handler catches any exception type.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nvoid throwAnything(int type) {\n    switch(type) {\n        case 1: throw 42;\n        case 2: throw string("String error");\n        case 3: throw runtime_error("Runtime error");\n        case 4: throw "C-string error";\n    }\n}\n\nint main() {\n    for (int i = 1; i <= 4; i++) {\n        try {\n            throwAnything(i);\n        } catch (const exception& e) {\n            cout << "Standard exception: " << e.what() << endl;\n        } catch (...) {\n            cout << "Unknown exception caught for type " << i << endl;\n        }\n    }\n    return 0;\n}',
  hint: 'Catch-all (...) handles any exception type as last resort.'
},
{
  id: 'cpp_exceptions_13',
  topicId: 'cpp_exceptions',
  question: 'Use exception in constructor to prevent invalid object creation.',
  mathSolution: 'Throw exception when object cannot be properly initialized.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass PositiveNumber {\nprivate:\n    int value;\npublic:\n    PositiveNumber(int v) : value(v) {\n        if (v <= 0) {\n            throw invalid_argument("Number must be positive");\n        }\n        cout << "PositiveNumber created with value " << v << endl;\n    }\n    \n    int getValue() const { return value; }\n};\n\nint main() {\n    try {\n        PositiveNumber p1(10);\n        cout << "p1 value: " << p1.getValue() << endl;\n        \n        PositiveNumber p2(-5);\n        cout << "This won\'t execute" << endl;\n    } catch (const invalid_argument& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Throw from constructor to prevent invalid object creation.'
},
{
  id: 'cpp_exceptions_14',
  topicId: 'cpp_exceptions',
  question: 'Use exception in destructor (caution: avoid throwing).',
  mathSolution: 'Destructors should not throw to avoid termination.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass FileHandler {\nprivate:\n    bool isOpen;\npublic:\n    FileHandler() : isOpen(true) {\n        cout << "File opened" << endl;\n    }\n    \n    ~FileHandler() {\n        try {\n            // Close file - don\'t throw\n            isOpen = false;\n            cout << "File closed" << endl;\n        } catch (...) {\n            // Swallow exceptions in destructor\n            cerr << "Error during cleanup" << endl;\n        }\n    }\n};\n\nint main() {\n    try {\n        FileHandler fh;\n        throw runtime_error("Something went wrong");\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Destructors should not throw exceptions to avoid std::terminate.'
},
{
  id: 'cpp_exceptions_15',
  topicId: 'cpp_exceptions',
  question: 'Use exception with resource management (RAII).',
  mathSolution: 'RAII ensures resources are freed even on exceptions.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nclass DatabaseConnection {\nprivate:\n    string dbName;\npublic:\n    DatabaseConnection(const string& name) : dbName(name) {\n        cout << "Connected to " << dbName << endl;\n    }\n    ~DatabaseConnection() {\n        cout << "Disconnected from " << dbName << endl;\n    }\n    void query(const string& sql) {\n        if (sql.empty()) throw runtime_error("Empty query");\n        cout << "Executing: " << sql << endl;\n    }\n};\n\nint main() {\n    try {\n        DatabaseConnection db("mydb");\n        db.query("SELECT * FROM users");\n        db.query("");  // Will throw\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'RAII guarantees resource cleanup regardless of exceptions.'
},
{
  id: 'cpp_exceptions_16',
  topicId: 'cpp_exceptions',
  question: 'Use exception in smart pointer custom deleter.',
  mathSolution: 'Custom deleters can handle exceptions during cleanup.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <cstdio>\nusing namespace std;\n\nstruct FileCloser {\n    void operator()(FILE* file) const {\n        if (file) {\n            cout << "Closing file" << endl;\n            fclose(file);\n        }\n    }\n};\n\nint main() {\n    try {\n        unique_ptr<FILE, FileCloser> file(fopen("test.txt", "w"));\n        if (!file) {\n            throw runtime_error("Failed to open file");\n        }\n        fprintf(file.get(), "Hello\\n");\n        // File automatically closed even if exception thrown\n        throw runtime_error("Error after file write");\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Smart pointers with custom deleters provide exception-safe cleanup.'
},
{
  id: 'cpp_exceptions_17',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::optional for error handling.',
  mathSolution: 'std::optional avoids exceptions for expected failures.',
  codeSolution: '#include <iostream>\n#include <optional>\n#include <string>\n#include <stdexcept>\nusing namespace std;\n\noptional<int> parseInt(const string& str) {\n    try {\n        return stoi(str);\n    } catch (...) {\n        return nullopt;\n    }\n}\n\ndouble divide(double a, double b) {\n    if (b == 0) throw runtime_error("Division by zero");\n    return a / b;\n}\n\nint main() {\n    auto result = parseInt("123abc");\n    if (result.has_value()) {\n        cout << "Parsed: " << result.value() << endl;\n    } else {\n        cout << "Invalid number" << endl;\n    }\n    \n    try {\n        cout << divide(10, 0) << endl;\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Use optional for expected failures, exceptions for unexpected errors.'
},
{
  id: 'cpp_exceptions_18',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::expected (C++23-like simulation).',
  mathSolution: 'Expected pattern returns either value or error.',
  codeSolution: '#include <iostream>\n#include <variant>\n#include <string>\nusing namespace std;\n\ntemplate<typename T, typename E>\nclass Expected {\nprivate:\n    variant<T, E> data;\npublic:\n    Expected(const T& value) : data(value) {}\n    Expected(const E& error) : data(error) {}\n    \n    bool has_value() const { return holds_alternative<T>(data); }\n    T value() const { return get<T>(data); }\n    E error() const { return get<E>(data); }\n};\n\nExpected<int, string> divide(int a, int b) {\n    if (b == 0) return Expected<int, string>("Division by zero");\n    return Expected<int, string>(a / b);\n}\n\nint main() {\n    auto result = divide(10, 2);\n    if (result.has_value()) {\n        cout << "Result: " << result.value() << endl;\n    } else {\n        cout << "Error: " << result.error() << endl;\n    }\n    \n    auto errorResult = divide(10, 0);\n    if (!errorResult.has_value()) {\n        cout << "Expected error: " << errorResult.error() << endl;\n    }\n    return 0;\n}',
  hint: 'Expected pattern makes error handling explicit.'
},
{
  id: 'cpp_exceptions_19',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::current_exception for deferred handling.',
  mathSolution: 'Capture current exception for later processing.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <stdexcept>\nusing namespace std;\n\nexception_ptr capturedException;\n\nvoid riskyFunction() {\n    try {\n        throw runtime_error("Critical error occurred");\n    } catch (...) {\n        capturedException = current_exception();\n        cout << "Exception captured" << endl;\n    }\n}\n\nvoid processLater() {\n    if (capturedException) {\n        try {\n            rethrow_exception(capturedException);\n        } catch (const exception& e) {\n            cout << "Processed later: " << e.what() << endl;\n        }\n    }\n}\n\nint main() {\n    riskyFunction();\n    cout << "Doing other work" << endl;\n    processLater();\n    return 0;\n}',
  hint: 'current_exception captures exception for deferred handling.'
},
{
  id: 'cpp_exceptions_20',
  topicId: 'cpp_exceptions',
  question: 'Use exception with nested exceptions (std::nested_exception).',
  mathSolution: 'Nested exceptions preserve original error context.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nvoid level3() {\n    throw runtime_error("Original error at level 3");\n}\n\nvoid level2() {\n    try {\n        level3();\n    } catch (...) {\n        throw_with_nested(runtime_error("Error at level 2"));\n    }\n}\n\nvoid level1() {\n    try {\n        level2();\n    } catch (...) {\n        throw_with_nested(runtime_error("Error at level 1"));\n    }\n}\n\nvoid printNested(const exception& e, int level = 0) {\n    cout << string(level * 2, \' \') << e.what() << endl;\n    try {\n        rethrow_if_nested(e);\n    } catch (const exception& nested) {\n        printNested(nested, level + 1);\n    }\n}\n\nint main() {\n    try {\n        level1();\n    } catch (const exception& e) {\n        cout << "Exception chain:" << endl;\n        printNested(e);\n    }\n    return 0;\n}',
  hint: 'nested_exception preserves full exception chain.'
},
{
  id: 'cpp_exceptions_21',
  topicId: 'cpp_exceptions',
  question: 'Use exception in multithreaded environment.',
  mathSolution: 'Exceptions must be caught within each thread.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <stdexcept>\n#include <future>\nusing namespace std;\n\nvoid threadFunction() {\n    try {\n        throw runtime_error("Error in thread");\n    } catch (const exception& e) {\n        cout << "Thread caught: " << e.what() << endl;\n    }\n}\n\nint asyncFunction() {\n    throw runtime_error("Async error");\n    return 42;\n}\n\nint main() {\n    // Thread exception handling\n    thread t(threadFunction);\n    t.join();\n    \n    // Async with future\n    future<int> result = async(launch::async, asyncFunction);\n    try {\n        int value = result.get();\n        cout << "Value: " << value << endl;\n    } catch (const exception& e) {\n        cout << "Async caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Exceptions don\'t propagate between threads automatically.'
},
{
  id: 'cpp_exceptions_22',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::terminate handler.',
  mathSolution: 'Set custom terminate handler for uncaught exceptions.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <cstdlib>\n#include <stdexcept>\nusing namespace std;\n\nvoid myTerminate() {\n    cout << "Custom terminate handler called" << endl;\n    cout << "Uncaught exception occurred" << endl;\n    exit(1);\n}\n\nclass ThrowInDestructor {\npublic:\n    ~ThrowInDestructor() {\n        throw runtime_error("Exception in destructor");  // Causes terminate\n    }\n};\n\nint main() {\n    set_terminate(myTerminate);\n    \n    try {\n        ThrowInDestructor obj;\n        throw runtime_error("Main exception");\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    cout << "This won\'t execute if terminate called" << endl;\n    return 0;\n}',
  hint: 'set_terminate customizes behavior for uncaught exceptions.'
},
{
  id: 'cpp_exceptions_23',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::uncaught_exceptions for exception safety.',
  mathSolution: 'Detect if exception is currently being handled.',
  codeSolution: '#include <iostream>\n#include <exception>\n#include <stdexcept>\nusing namespace std;\n\nclass ExceptionAware {\npublic:\n    ~ExceptionAware() {\n        if (uncaught_exceptions() > 0) {\n            cout << "Destructor called during stack unwinding" << endl;\n        } else {\n            cout << "Normal destruction" << endl;\n        }\n    }\n};\n\nint main() {\n    cout << "Normal scope:" << endl;\n    {\n        ExceptionAware ea;\n    }\n    \n    cout << "\\nDuring exception:" << endl;\n    try {\n        ExceptionAware ea;\n        throw runtime_error("Error");\n    } catch (...) {\n        cout << "Exception caught" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'uncaught_exceptions() detects if stack is unwinding due to exception.'
},
{
  id: 'cpp_exceptions_24',
  topicId: 'cpp_exceptions',
  question: 'Use exception in template functions.',
  mathSolution: 'Templates can throw exceptions with type-independent handling.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T>\nT divide(T a, T b) {\n    if (b == 0) {\n        throw runtime_error("Division by zero in template function");\n    }\n    return a / b;\n}\n\ntemplate<typename T>\nT safeGet(const vector<T>& vec, size_t index) {\n    if (index >= vec.size()) {\n        throw out_of_range("Index out of range");\n    }\n    return vec[index];\n}\n\nint main() {\n    try {\n        cout << divide(10, 2) << endl;\n        cout << divide(10.5, 2.5) << endl;\n        cout << divide(10, 0) << endl;\n    } catch (const exception& e) {\n        cout << "Caught in template: " << e.what() << endl;\n    }\n    \n    vector<int> vec = {1, 2, 3};\n    try {\n        cout << safeGet(vec, 5) << endl;\n    } catch (const out_of_range& e) {\n        cout << "Out of range: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Template functions can throw exceptions like regular functions.'
},
{
  id: 'cpp_exceptions_25',
  topicId: 'cpp_exceptions',
  question: 'Use exception in lambda expressions.',
  mathSolution: 'Lambdas can throw and handle exceptions.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    auto safeDivide = [](int a, int b) -> int {\n        if (b == 0) throw runtime_error("Division by zero");\n        return a / b;\n    };\n    \n    auto tryOperation = [](function<int()> op) {\n        try {\n            return op();\n        } catch (const exception& e) {\n            cout << "Operation failed: " << e.what() << endl;\n            return -1;\n        }\n    };\n    \n    int result1 = tryOperation([&]() { return safeDivide(10, 2); });\n    int result2 = tryOperation([&]() { return safeDivide(10, 0); });\n    \n    cout << "Result1: " << result1 << endl;\n    cout << "Result2: " << result2 << endl;\n    \n    return 0;\n}',
  hint: 'Lambdas can throw exceptions; handle them in calling context.'
},
{
  id: 'cpp_exceptions_26',
  topicId: 'cpp_exceptions',
  question: 'Use exception with move semantics.',
  mathSolution: 'Move operations should be noexcept for performance.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <stdexcept>\nusing namespace std;\n\nclass Widget {\nprivate:\n    int* data;\n    size_t size;\npublic:\n    Widget(size_t s) : size(s), data(new int[s]) {}\n    \n    // Move constructor - should be noexcept\n    Widget(Widget&& other) noexcept \n        : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n    }\n    \n    // Copy constructor may throw\n    Widget(const Widget& other) : size(other.size), data(new int[other.size]) {\n        cout << "Copying widget (may throw)" << endl;\n        if (size > 1000000) throw bad_alloc();\n    }\n    \n    ~Widget() { delete[] data; }\n};\n\nint main() {\n    vector<Widget> widgets;\n    widgets.reserve(10);\n    \n    try {\n        Widget w1(100);\n        widgets.push_back(move(w1));  // Uses move (noexcept)\n        \n        Widget w2(2000000);\n        widgets.push_back(w2);  // May throw during copy\n    } catch (const exception& e) {\n        cout << "Exception: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Mark move operations noexcept for better performance.'
},
{
  id: 'cpp_exceptions_27',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::exception_ptr for thread communication.',
  mathSolution: 'exception_ptr transfers exceptions between threads.',
  codeSolution: '#include <iostream>\n#include <thread>\n#include <future>\n#include <stdexcept>\nusing namespace std;\n\nexception_ptr globalException;\n\nvoid workerThread() {\n    try {\n        throw runtime_error("Error in worker thread");\n    } catch (...) {\n        globalException = current_exception();\n    }\n}\n\nint main() {\n    thread t(workerThread);\n    t.join();\n    \n    if (globalException) {\n        try {\n            rethrow_exception(globalException);\n        } catch (const exception& e) {\n            cout << "Exception from thread: " << e.what() << endl;\n        }\n    }\n    \n    // Using packaged_task for automatic exception propagation\n    packaged_task<int()> task([]() {\n        throw runtime_error("Error in packaged_task");\n        return 42;\n    });\n    \n    future<int> result = task.get_future();\n    thread t2(move(task));\n    \n    try {\n        int value = result.get();\n    } catch (const exception& e) {\n        cout << "Packaged_task exception: " << e.what() << endl;\n    }\n    \n    t2.join();\n    return 0;\n}',
  hint: 'exception_ptr allows exception propagation between threads.'
},
{
  id: 'cpp_exceptions_28',
  topicId: 'cpp_exceptions',
  question: 'Use exception in constexpr functions (C++20).',
  mathSolution: 'constexpr functions can throw, but not in constant evaluation.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nconstexpr int safeDivide(int a, int b) {\n    if (b == 0) {\n        throw runtime_error("Division by zero");\n    }\n    return a / b;\n}\n\nint main() {\n    // Compile-time evaluation (must not throw)\n    constexpr int result1 = safeDivide(10, 2);\n    cout << "Compile-time result: " << result1 << endl;\n    \n    // Runtime evaluation (can throw)\n    int x = 10, y = 0;\n    try {\n        int result2 = safeDivide(x, y);\n        cout << "Runtime result: " << result2 << endl;\n    } catch (const exception& e) {\n        cout << "Runtime caught: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'constexpr functions can throw, but not during constant evaluation.'
},
{
  "id": "cpp_exceptions_29",
  "topicId": "cpp_exceptions",
  "question": "Use exception with custom error codes conversion.",
  "mathSolution": "Convert error codes to exceptions for uniform handling.",
  "codeSolution": "#include <iostream>\n#include <system_error>\n#include <cerrno>\n#include <cstring>\n#include <stdexcept>\nusing namespace std;\n\nclass FileError : public runtime_error {\npublic:\n    FileError(const string& filename, int errCode)\n        : runtime_error(\"Failed to open '\" + filename + \"': \" + strerror(errCode)) {}\n};\n\nvoid openFile(const string& filename) {\n    FILE* file = fopen(filename.c_str(), \"r\");\n    if (!file) {\n        throw FileError(filename, errno);\n    }\n    fclose(file);\n    cout << \"File opened successfully\" << endl;\n}\n\nint main() {\n    try {\n        openFile(\"nonexistent.txt\");\n    } catch (const FileError& e) {\n        cout << \"File error: \" << e.what() << endl;\n    }\n    \n    // Converting system_error\n    try {\n        throw system_error(make_error_code(errc::permission_denied));\n    } catch (const system_error& e) {\n        cout << \"System error: \" << e.what() << \", code: \" << e.code() << endl;\n    }\n    \n    return 0;\n}",
  "hint": "Convert legacy error codes to exceptions for consistent error handling."
},
{
  "id": "cpp_exceptions_30",
  "topicId": "cpp_exceptions",
  "question": "Use exception with RAII for transaction rollback.",
  "mathSolution": "RAII ensures transaction rollback on exception.",
  "codeSolution": "#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass Transaction {\nprivate:\n    bool committed;\npublic:\n    Transaction() : committed(false) {\n        cout << \"Transaction started\" << endl;\n    }\n    \n    void commit() {\n        committed = true;\n        cout << \"Transaction committed\" << endl;\n    }\n    \n    void rollback() {\n        cout << \"Transaction rolled back\" << endl;\n    }\n    \n    ~Transaction() {\n        if (!committed) {\n            rollback();\n        }\n    }\n};\n\nvoid updateDatabase() {\n    Transaction tx;\n    // Perform database operations\n    cout << \"Updating database...\" << endl;\n    \n    // Simulate error\n    throw runtime_error(\"Database constraint violation\");\n    \n    tx.commit();  // Won't be reached if exception thrown\n}\n\nint main() {\n    try {\n        updateDatabase();\n    } catch (const exception& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n    return 0;\n}",
  "hint": "RAII ensures transaction rollback when exceptions occur."
},
{
  id: 'cpp_exceptions_31',
  topicId: 'cpp_exceptions',
  question: 'Use exception with resource acquisition is initialization (RAII).',
  mathSolution: 'Constructor acquires resource, destructor releases on exception.',
  codeSolution: '#include <iostream>\n#include <stdexcept>\nusing namespace std;\n\nclass ScopedLock {\nprivate:\n    bool& locked;\npublic:\n    ScopedLock(bool& l) : locked(l) {\n        if (locked) throw runtime_error("Already locked");\n        locked = true;\n        cout << "Lock acquired" << endl;\n    }\n    ~ScopedLock() {\n        if (locked) {\n            locked = false;\n            cout << "Lock released" << endl;\n        }\n    }\n};\n\nint main() {\n    bool lockFlag = false;\n    \n    try {\n        ScopedLock lock1(lockFlag);\n        // Critical section\n        cout << "In critical section" << endl;\n        throw runtime_error("Error in critical section");\n        ScopedLock lock2(lockFlag);  // Won\'t execute\n    } catch (const exception& e) {\n        cout << "Exception: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'RAII provides exception-safe resource management.'
},
{
  id: 'cpp_exceptions_32',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::lock_guard for mutex safety.',
  mathSolution: 'lock_guard automatically unlocks mutex on exception.',
  codeSolution: '#include <iostream>\n#include <mutex>\n#include <thread>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nmutex mtx;\n\nvoid criticalSection(int id) {\n    lock_guard<mutex> lock(mtx);\n    cout << "Thread " << id << " entered critical section" << endl;\n    \n    if (id == 2) {\n        throw runtime_error("Error in thread " + to_string(id));\n    }\n    \n    cout << "Thread " << id << " leaving" << endl;\n}\n\nint main() {\n    thread t1([]() { \n        try { criticalSection(1); } \n        catch (const exception& e) { cout << "Caught: " << e.what() << endl; }\n    });\n    \n    thread t2([]() { \n        try { criticalSection(2); } \n        catch (const exception& e) { cout << "Caught: " << e.what() << endl; }\n    });\n    \n    t1.join();\n    t2.join();\n    \n    return 0;\n}',
  hint: 'lock_guard ensures mutex is released even if exception occurs.'
},
{
  id: 'cpp_exceptions_33',
  topicId: 'cpp_exceptions',
  question: 'Use exception in copy constructor for deep copy failures.',
  mathSolution: 'Copy constructor can throw when resource allocation fails.',
  codeSolution: '#include <iostream>\n#include <cstring>\n#include <stdexcept>\nusing namespace std;\n\nclass String {\nprivate:\n    char* data;\n    size_t len;\npublic:\n    String(const char* str) {\n        len = strlen(str);\n        data = new char[len + 1];\n        strcpy(data, str);\n    }\n    \n    String(const String& other) : len(other.len) {\n        cout << "Copy constructor called" << endl;\n        if (len > 1000000) {\n            throw bad_alloc();\n        }\n        data = new char[len + 1];\n        strcpy(data, other.data);\n    }\n    \n    ~String() { delete[] data; }\n    \n    void display() const { cout << data << endl; }\n};\n\nint main() {\n    String s1("Hello");\n    \n    try {\n        String s2 = s1;  // OK\n        s2.display();\n        \n        String s3("This is a very long string that will cause allocation failure");\n        String s4 = s3;  // May throw if len > threshold\n    } catch (const bad_alloc& e) {\n        cout << "Memory allocation failed: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Copy constructors may throw when allocating resources.'
},
{
  id: 'cpp_exceptions_34',
  topicId: 'cpp_exceptions',
  question: 'Use exception in assignment operator with copy-and-swap.',
  mathSolution: 'Copy-and-swap provides strong exception guarantee.',
  codeSolution: '#include <iostream>\n#include <algorithm>\n#include <stdexcept>\nusing namespace std;\n\nclass Array {\nprivate:\n    int* data;\n    size_t size;\n    \n    void swap(Array& other) noexcept {\n        std::swap(data, other.data);\n        std::swap(size, other.size);\n    }\n    \npublic:\n    Array(size_t n) : size(n), data(new int[n]) {\n        cout << "Array of size " << n << " created" << endl;\n    }\n    \n    Array(const Array& other) : size(other.size), data(new int[other.size]) {\n        cout << "Copy constructor" << endl;\n        if (size > 1000000) throw bad_alloc();\n        copy(other.data, other.data + size, data);\n    }\n    \n    Array& operator=(Array other) {\n        cout << "Assignment operator (copy-and-swap)" << endl;\n        swap(other);\n        return *this;\n    }\n    \n    ~Array() { delete[] data; }\n};\n\nint main() {\n    try {\n        Array a1(100);\n        Array a2(1000);\n        a2 = a1;  // Strong exception guarantee\n        \n        Array a3(2000000);\n        a1 = a3;  // May throw during copy\n    } catch (const exception& e) {\n        cout << "Exception: " << e.what() << endl;\n    }\n    return 0;\n}',
  hint: 'Copy-and-swap idiom provides strong exception guarantee.'
},
{
  id: 'cpp_exceptions_35',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::vector::at() for bounds checking.',
  mathSolution: 'at() throws out_of_range exception for invalid index.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    vector<int> numbers = {10, 20, 30, 40, 50};\n    \n    cout << "Accessing valid indices:" << endl;\n    for (int i = 0; i < 5; i++) {\n        cout << numbers.at(i) << " ";\n    }\n    cout << endl;\n    \n    cout << "\\nAttempting out-of-bounds access:" << endl;\n    try {\n        cout << numbers.at(10) << endl;\n    } catch (const out_of_range& e) {\n        cout << "Caught out_of_range: " << e.what() << endl;\n    }\n    \n    // Using [] operator doesn\'t throw\n    cout << "\\nUsing [] operator: " << numbers[10] << " (undefined behavior)" << endl;\n    \n    return 0;\n}',
  hint: 'vector::at() provides bounds checking with exception safety.'
},
{
  id: 'cpp_exceptions_36',
  topicId: 'cpp_exceptions',
  question: 'Use exception with dynamic_cast for reference types.',
  mathSolution: 'dynamic_cast for references throws bad_cast on failure.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base { virtual void f() {} };\nclass Derived1 : public Base {};\nclass Derived2 : public Base {};\n\nint main() {\n    Derived1 d1;\n    Base& baseRef = d1;\n    \n    try {\n        Derived1& d1Ref = dynamic_cast<Derived1&>(baseRef);\n        cout << "Cast to Derived1 successful" << endl;\n        \n        Derived2& d2Ref = dynamic_cast<Derived2&>(baseRef);\n        cout << "Cast to Derived2 successful" << endl;\n    } catch (const bad_cast& e) {\n        cout << "bad_cast caught: " << e.what() << endl;\n    }\n    \n    // Pointer version returns nullptr\n    Derived2* d2Ptr = dynamic_cast<Derived2*>(&baseRef);\n    if (!d2Ptr) {\n        cout << "Pointer cast returned nullptr" << endl;\n    }\n    \n    return 0;\n}',
  hint: 'dynamic_cast throws bad_cast for references, returns nullptr for pointers.'
},
{
  id: 'cpp_exceptions_37',
  topicId: 'cpp_exceptions',
  question: 'Use exception with type_info comparison.',
  mathSolution: 'type_info comparison can be used for type checking.',
  codeSolution: '#include <iostream>\n#include <typeinfo>\n#include <stdexcept>\nusing namespace std;\n\nclass Animal { virtual void speak() {} };\nclass Dog : public Animal {};\nclass Cat : public Animal {};\n\nvoid processAnimal(Animal& animal) {\n    if (typeid(animal) == typeid(Dog)) {\n        cout << "Processing Dog" << endl;\n    } else if (typeid(animal) == typeid(Cat)) {\n        cout << "Processing Cat" << endl;\n    } else {\n        throw runtime_error("Unknown animal type");\n    }\n}\n\nint main() {\n    Dog dog;\n    Cat cat;\n    \n    processAnimal(dog);\n    processAnimal(cat);\n    \n    // Animal animal;  // Uncomment would throw\n    \n    return 0;\n}',
  hint: 'typeid comparison enables runtime type checking.'
},
{
  id: 'cpp_exceptions_38',
  topicId: 'cpp_exceptions',
  question: 'Use exception in lambda with capture by reference.',
  mathSolution: 'Lambdas can capture variables and throw exceptions.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <stdexcept>\nusing namespace std;\n\nint main() {\n    int divisor = 0;\n    \n    auto divide = [&](int a) -> int {\n        if (divisor == 0) {\n            throw runtime_error("Division by zero in lambda");\n        }\n        return a / divisor;\n    };\n    \n    try {\n        cout << divide(10) << endl;\n    } catch (const exception& e) {\n        cout << "Lambda exception: " << e.what() << endl;\n    }\n    \n    divisor = 2;\n    try {\n        cout << divide(10) << endl;\n    } catch (const exception& e) {\n        cout << "Lambda exception: " << e.what() << endl;\n    }\n    \n    return 0;\n}',
  hint: 'Lambdas can throw exceptions when captured values cause errors.'
},
{
  id: 'cpp_exceptions_39',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::unique_ptr and custom deleter.',
  mathSolution: 'Custom deleter in unique_ptr can handle exceptions.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\n#include <cstdlib>\nusing namespace std;\n\nstruct DatabaseDeleter {\n    void operator()(void* db) const {\n        cout << "Closing database connection" << endl;\n        // Simulate cleanup\n        free(db);\n    }\n};\n\nint main() {\n    unique_ptr<void, DatabaseDeleter> db(malloc(1024), DatabaseDeleter());\n    \n    try {\n        cout << "Using database" << endl;\n        throw runtime_error("Query execution failed");\n    } catch (const exception& e) {\n        cout << "Error: " << e.what() << endl;\n    }\n    \n    // DatabaseDeleter called automatically\n    return 0;\n}',
  hint: 'Custom deleters in smart pointers work even when exceptions are thrown.'
},
{
  id: 'cpp_exceptions_40',
  topicId: 'cpp_exceptions',
  question: 'Use exception with std::shared_ptr and weak_ptr.',
  mathSolution: 'shared_ptr handles exceptions during construction.',
  codeSolution: '#include <iostream>\n#include <memory>\n#include <stdexcept>\nusing namespace std;\n\nclass Resource {\npublic:\n    Resource(int id) {\n        cout << "Resource " << id << " created" << endl;\n        if (id == 3) throw runtime_error("Cannot create resource 3");\n    }\n    ~Resource() { cout << "Resource destroyed" << endl; }\n};\n\nint main() {\n    shared_ptr<Resource> r1, r2, r3;\n    \n    try {\n        r1 = make_shared<Resource>(1);\n        r2 = make_shared<Resource>(2);\n        r3 = make_shared<Resource>(3);  // Throws\n    } catch (const exception& e) {\n        cout << "Caught: " << e.what() << endl;\n    }\n    \n    // r1 and r2 will be destroyed automatically\n    cout << "Exiting main" << endl;\n    return 0;\n}',
  hint: 'make_shared provides exception safety for resource allocation.'
},
//template
{
  id: 'cpp_templates_1',
  topicId: 'cpp_templates',
  question: 'Create a simple function template that returns the maximum of two values.',
  mathSolution: 'Template allows function to work with any data type.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nT max(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << max(5, 3) << endl;           // int\n    cout << max(5.5, 3.2) << endl;       // double\n    cout << max(\'A\', \'Z\') << endl;       // char\n    cout << max(string("apple"), string("banana")) << endl; // string\n    return 0;\n}',
  hint: 'Function template syntax: template<typename T> T func(T a, T b)'
},
{
  id: 'cpp_templates_2',
  topicId: 'cpp_templates',
  question: 'Create a function template with multiple type parameters.',
  mathSolution: 'Multiple template parameters allow different types for different arguments.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T, typename U>\nauto add(T a, U b) -> decltype(a + b) {\n    return a + b;\n}\n\nint main() {\n    cout << add(5, 3) << endl;           // int + int = int\n    cout << add(5, 3.14) << endl;        // int + double = double\n    cout << add(5.5, 3) << endl;         // double + int = double\n    cout << add(string("Hello"), " World") << endl;  // string concatenation\n    return 0;\n}',
  hint: 'Multiple template parameters: template<typename T, typename U>'
},
{
  id: 'cpp_templates_3',
  topicId: 'cpp_templates',
  question: 'Create a class template for a generic Box that can hold any type.',
  mathSolution: 'Class templates allow creating type-independent classes.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nclass Box {\nprivate:\n    T content;\npublic:\n    Box(const T& c) : content(c) {}\n    void set(const T& c) { content = c; }\n    T get() const { return content; }\n    void display() const { cout << "Box contains: " << content << endl; }\n};\n\nint main() {\n    Box<int> intBox(42);\n    Box<double> doubleBox(3.14);\n    Box<string> stringBox("Hello");\n    \n    intBox.display();\n    doubleBox.display();\n    stringBox.display();\n    \n    return 0;\n}',
  hint: 'Class template: template<typename T> class ClassName { ... }'
},
{
  id: 'cpp_templates_4',
  topicId: 'cpp_templates',
  question: 'Create a function template with non-type template parameter (array size).',
  mathSolution: 'Non-type template parameters accept compile-time constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T, size_t N>\nT arraySum(const T (&arr)[N]) {\n    T sum = 0;\n    for (size_t i = 0; i < N; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n\nint main() {\n    int intArr[] = {1, 2, 3, 4, 5};\n    double doubleArr[] = {1.1, 2.2, 3.3};\n    \n    cout << arraySum(intArr) << endl;      // 15\n    cout << arraySum(doubleArr) << endl;   // 6.6\n    \n    return 0;\n}',
  hint: 'Non-type template parameter: template<typename T, size_t N>'
},
{
  id: 'cpp_templates_5',
  topicId: 'cpp_templates',
  question: 'Use template specialization for specific data types.',
  mathSolution: 'Template specialization provides custom implementation for specific types.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nclass Printer {\npublic:\n    void print(const T& value) {\n        cout << "Generic: " << value << endl;\n    }\n};\n\n// Specialization for bool\ntemplate<>\nclass Printer<bool> {\npublic:\n    void print(const bool& value) {\n        cout << "Boolean: " << (value ? "true" : "false") << endl;\n    }\n};\n\n// Specialization for string\ntemplate<>\nclass Printer<string> {\npublic:\n    void print(const string& value) {\n        cout << "String: \\\"" << value << "\\\"\" << endl;\n    }\n};\n\nint main() {\n    Printer<int> p1;\n    Printer<double> p2;\n    Printer<bool> p3;\n    Printer<string> p4;\n    \n    p1.print(42);\n    p2.print(3.14);\n    p3.print(true);\n    p4.print(\"Hello\");\n    \n    return 0;\n}',
  hint: 'Full specialization: template<> class ClassName<SpecificType> { ... }'
},
{
  id: 'cpp_templates_6',
  topicId: 'cpp_templates',
  question: 'Create a variadic template function to sum any number of arguments.',
  mathSolution: 'Variadic templates accept variable number of arguments.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Base case\nint sum() { return 0; }\n\n// Recursive variadic template\ntemplate<typename T, typename... Args>\nT sum(T first, Args... args) {\n    return first + sum(args...);\n}\n\ntemplate<typename T, typename... Args>\nvoid printAll(T first, Args... args) {\n    cout << first;\n    ((cout << \", \" << args), ...);  // Fold expression (C++17)\n    cout << endl;\n}\n\nint main() {\n    cout << sum(1, 2, 3, 4, 5) << endl;      // 15\n    cout << sum(1.1, 2.2, 3.3) << endl;      // 6.6\n    \n    printAll(1, 2.5, \"Hello\", \'A\');\n    \n    return 0;\n}',
  hint: 'Variadic template: template<typename... Args>'
},
{
  id: 'cpp_templates_7',
  topicId: 'cpp_templates',
  question: 'Use fold expressions to simplify variadic templates (C++17).',
  mathSolution: 'Fold expressions reduce parameter packs with binary operators.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename... Args>\nauto sum(Args... args) {\n    return (args + ...);  // Unary right fold\n}\n\ntemplate<typename... Args>\nauto product(Args... args) {\n    return (args * ...);\n}\n\ntemplate<typename... Args>\nvoid printAll(Args... args) {\n    (cout << ... << args) << endl;  // Left fold with comma\n}\n\ntemplate<typename... Args>\nbool allTrue(Args... args) {\n    return (args && ...);\n}\n\nint main() {\n    cout << sum(1, 2, 3, 4) << endl;        // 10\n    cout << product(2, 3, 4) << endl;       // 24\n    printAll(\"Hello\", \" \", \"World\", \"!\");\n    cout << allTrue(true, true, false) << endl;  // false\n    \n    return 0;\n}',
  hint: 'Fold expressions: (args + ...) expands to (arg1 + (arg2 + (arg3 + ...)))'
},
{
  id: 'cpp_templates_8',
  topicId: 'cpp_templates',
  question: 'Create a template with default template parameters.',
  mathSolution: 'Default template parameters provide default types.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T = int, size_t Size = 10>\nclass FixedArray {\nprivate:\n    T arr[Size];\npublic:\n    void fill(const T& value) {\n        for (size_t i = 0; i < Size; i++) arr[i] = value;\n    }\n    void display() {\n        for (size_t i = 0; i < Size; i++) cout << arr[i] << \" \";\n        cout << endl;\n    }\n};\n\ntemplate<typename T = double>\nT multiply(T a, T b) {\n    return a * b;\n}\n\nint main() {\n    FixedArray<> intArray;        // Uses default int, 10\n    FixedArray<double, 5> doubleArray;\n    \n    intArray.fill(5);\n    doubleArray.fill(3.14);\n    \n    intArray.display();\n    doubleArray.display();\n    \n    cout << multiply(5, 3) << endl;       // Uses int\n    cout << multiply(5.5, 2.0) << endl;   // Uses double\n    \n    return 0;\n}',
  hint: 'Default template parameters: template<typename T = int, size_t N = 10>'
},
{
  id: 'cpp_templates_9',
  topicId: 'cpp_templates',
  question: 'Use SFINAE (Substitution Failure Is Not An Error) to enable/disable functions.',
  mathSolution: 'SFINAE selects appropriate function overloads at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\n// For integral types\ntemplate<typename T>\ntypename enable_if<is_integral<T>::value, T>::type\ndoubleValue(T x) {\n    cout << "Integral version: \";\n    return x * 2;\n}\n\n// For floating point types\ntemplate<typename T>\ntypename enable_if<is_floating_point<T>::value, T>::type\ndoubleValue(T x) {\n    cout << \"Floating point version: \";\n    return x * 2.0;\n}\n\n// For string type\ntemplate<typename T>\ntypename enable_if<is_same<T, string>::value, string>::type\ndoubleValue(T x) {\n    cout << \"String version: \";\n    return x + x;\n}\n\nint main() {\n    cout << doubleValue(5) << endl;        // Integral\n    cout << doubleValue(5.5) << endl;      // Floating point\n    cout << doubleValue(string(\"Hi\")) << endl;  // String\n    \n    return 0;\n}',
  hint: 'SFINAE uses enable_if to conditionally include functions.'
},
{
  id: 'cpp_templates_10',
  topicId: 'cpp_templates',
  question: 'Use type traits to check properties of types at compile time.',
  mathSolution: 'Type traits provide compile-time type information.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nvoid checkType() {\n    cout << "is_integral: " << is_integral<T>::value << endl;\n    cout << "is_floating_point: " << is_floating_point<T>::value << endl;\n    cout << "is_pointer: " << is_pointer<T>::value << endl;\n    cout << "is_const: " << is_const<T>::value << endl;\n    cout << "is_reference: " << is_reference<T>::value << endl;\n}\n\nint main() {\n    cout << boolalpha;\n    \n    cout << "int:" << endl;\n    checkType<int>();\n    \n    cout << "\\ndouble:" << endl;\n    checkType<double>();\n    \n    cout << "\\nint*:" << endl;\n    checkType<int*>();\n    \n    cout << "\\nconst int&:" << endl;\n    checkType<const int&>();\n    \n    // Using type traits in algorithms\n    cout << "\\nIs integral: " << is_integral_v<int> << endl;  // C++17\n    \n    return 0;\n}',
  hint: 'Type traits in <type_traits> provide compile-time type introspection.'
},
{
  id: 'cpp_templates_11',
  topicId: 'cpp_templates',
  question: 'Create a template alias for complex types.',
  mathSolution: 'Template aliases simplify complex template type names.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\n// Template alias\ntemplate<typename T>\nusing Vector = vector<T>;\n\ntemplate<typename K, typename V>\nusing Map = map<K, V>;\n\ntemplate<typename T>\nusing SharedPtr = shared_ptr<T>;\n\n// Alias for function pointer\ntemplate<typename R, typename... Args>\nusing FunctionPtr = R(*)(Args...);\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    Vector<int> v = {1, 2, 3, 4, 5};\n    Map<string, int> m = {{\"Alice\", 25}, {\"Bob\", 30}};\n    \n    cout << \"Vector: \";\n    for (int x : v) cout << x << \" \";\n    cout << endl;\n    \n    cout << \"Map: \";\n    for (const auto& [key, val] : m) {\n        cout << key << \":\" << val << \" \";\n    }\n    cout << endl;\n    \n    FunctionPtr<int, int, int> func = add;\n    cout << \"Function result: \" << func(5, 3) << endl;\n    \n    return 0;\n}',
  hint: 'Template alias: template<typename T> using Alias = OriginalType<T>;'
},
{
  id: 'cpp_templates_12',
  topicId: 'cpp_templates',
  question: 'Create a variadic class template for tuple-like structure.',
  mathSolution: 'Variadic class templates can store heterogeneous types.',
  codeSolution: '#include <iostream>\n#include <tuple>\nusing namespace std;\n\n// Base case\ntemplate<typename... Types>\nclass MyTuple {};\n\n// Recursive case\ntemplate<typename First, typename... Rest>\nclass MyTuple<First, Rest...> : public MyTuple<Rest...> {\nprivate:\n    First value;\npublic:\n    MyTuple(First f, Rest... r) : MyTuple<Rest...>(r...), value(f) {}\n    \n    First getValue() const { return value; }\n};\n\n// Helper to get element\n template<size_t Index, typename First, typename... Rest>\nstruct GetHelper {\n    static auto get(const MyTuple<First, Rest...>& tuple) {\n        return GetHelper<Index - 1, Rest...>::get(tuple);\n    }\n};\n\ntemplate<typename First, typename... Rest>\nstruct GetHelper<0, First, Rest...> {\n    static First get(const MyTuple<First, Rest...>& tuple) {\n        return tuple.getValue();\n    }\n};\n\ntemplate<size_t Index, typename... Types>\nauto get(const MyTuple<Types...>& tuple) {\n    return GetHelper<Index, Types...>::get(tuple);\n}\n\nint main() {\n    MyTuple<int, double, string> t(42, 3.14, \"Hello\");\n    \n    cout << get<0>(t) << endl;  // 42\n    cout << get<1>(t) << endl;  // 3.14\n    cout << get<2>(t) << endl;  // Hello\n    \n    return 0;\n}',
  hint: 'Variadic class templates enable tuple-like constructs.'
},
{
  id: 'cpp_templates_13',
  topicId: 'cpp_templates',
  question: 'Use CRTP (Curiously Recurring Template Pattern) for static polymorphism.',
  mathSolution: 'CRTP enables compile-time polymorphism without virtual functions.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename Derived>\nclass Shape {\npublic:\n    void draw() {\n        static_cast<Derived*>(this)->drawImpl();\n    }\n    \n    double area() {\n        return static_cast<Derived*>(this)->areaImpl();\n    }\n};\n\nclass Circle : public Shape<Circle> {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    void drawImpl() { cout << \"Drawing circle with radius \" << radius << endl; }\n    double areaImpl() { return 3.14159 * radius * radius; }\n};\n\nclass Rectangle : public Shape<Rectangle> {\nprivate:\n    double width, height;\npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    void drawImpl() { cout << \"Drawing rectangle \" << width << \"x\" << height << endl; }\n    double areaImpl() { return width * height; }\n};\n\ntemplate<typename T>\nvoid process(Shape<T>& shape) {\n    shape.draw();\n    cout << \"Area: \" << shape.area() << endl;\n}\n\nint main() {\n    Circle c(5);\n    Rectangle r(4, 6);\n    \n    process(c);\n    process(r);\n    \n    return 0;\n}',
  hint: 'CRTP: class Derived : public Base<Derived>'
},
{
  id: 'cpp_templates_14',
  topicId: 'cpp_templates',
  question: 'Create a template with parameter pack expansion.',
  mathSolution: 'Parameter packs can be expanded in multiple contexts.',
  codeSolution: '#include <iostream>\n#include <tuple>\n#include <utility>\nusing namespace std;\n\n// Expanding into function arguments\ntemplate<typename... Args>\nvoid printArgs(Args... args) {\n    (cout << ... << args) << endl;\n}\n\n// Expanding into initializer list\ntemplate<typename... Args>\nauto makeVector(Args... args) {\n    return vector<int>{args...};\n}\n\n// Expanding into tuple\ntemplate<typename... Args>\nauto makeTuple(Args... args) {\n    return make_tuple(args...);\n}\n\n// Expanding into template arguments\ntemplate<typename... Types>\nstruct TypeList {};\n\ntemplate<typename... Types>\nvoid processTypes() {\n    TypeList<Types...> list;\n    cout << \"Type list size: \" << sizeof...(Types) << endl;\n}\n\nint main() {\n    printArgs(1, 2, 3, 4, 5);\n    \n    auto vec = makeVector(10, 20, 30, 40);\n    cout << \"Vector size: \" << vec.size() << endl;\n    \n    auto tup = makeTuple(42, 3.14, \"Hello\");\n    cout << get<0>(tup) << \", \" << get<1>(tup) << \", \" << get<2>(tup) << endl;\n    \n    processTypes<int, double, string>();\n    \n    return 0;\n}',
  hint: 'Parameter packs expand with ... in various contexts.'
},
{
  id: 'cpp_templates_15',
  topicId: 'cpp_templates',
  question: 'Use template template parameters for higher-order templates.',
  mathSolution: 'Template template parameters accept templates as arguments.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\ntemplate<typename T, template<typename> class Container>\nclass MyContainer {\nprivate:\n    Container<T> data;\npublic:\n    void add(const T& value) { data.push_back(value); }\n    void display() {\n        for (const auto& item : data) {\n            cout << item << \" \";\n        }\n        cout << endl;\n    }\n};\n\n// C++11 style with template template parameter\ntemplate<typename T, template<typename, typename...> class Container, typename... Args>\nclass AdvancedContainer {\nprivate:\n    Container<T, Args...> data;\npublic:\n    void add(const T& value) { data.push_back(value); }\n    size_t size() const { return data.size(); }\n};\n\nint main() {\n    MyContainer<int, vector> vc;\n    vc.add(10);\n    vc.add(20);\n    vc.display();\n    \n    AdvancedContainer<int, vector> avc;\n    avc.add(1);\n    avc.add(2);\n    cout << \"Size: \" << avc.size() << endl;\n    \n    return 0;\n}',
  hint: 'Template template parameter: template<typename> class Container'
},
{
  id: 'cpp_templates_16',
  topicId: 'cpp_templates',
  question: 'Create a template with explicit specialization for arrays.',
  mathSolution: 'Template specialization provides optimized implementation for arrays.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Primary template for any type\ntemplate<typename T>\nvoid printSize(const T& value) {\n    cout << \"Size: \" << sizeof(value) << \" bytes\" << endl;\n}\n\n// Partial specialization for arrays\ntemplate<typename T, size_t N>\nvoid printSize(const T (&arr)[N]) {\n    cout << \"Array has \" << N << \" elements, total size: \" << sizeof(arr) << \" bytes\" << endl;\n}\n\n// Full specialization for char arrays\ntemplate<size_t N>\nvoid printSize(const char (&arr)[N]) {\n    cout << \"String length: \" << N - 1 << \", \\\"\" << arr << \"\\\"\" << endl;\n}\n\nint main() {\n    int x = 42;\n    double d = 3.14;\n    int arr[] = {1, 2, 3, 4, 5};\n    char str[] = \"Hello\";\n    \n    printSize(x);\n    printSize(d);\n    printSize(arr);\n    printSize(str);\n    \n    return 0;\n}',
  hint: 'Partial specialization: template<typename T, size_t N> for arrays'
},
{
  id: 'cpp_templates_17',
  topicId: 'cpp_templates',
  question: 'Use static_assert with templates for compile-time constraints.',
  mathSolution: 'static_assert validates template parameters at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nclass NumericContainer {\n    static_assert(is_arithmetic<T>::value, \"T must be arithmetic type\");\nprivate:\n    T value;\npublic:\n    NumericContainer(T v) : value(v) {}\n    T get() const { return value; }\n};\n\ntemplate<typename T>\nT safeDivide(T a, T b) {\n    static_assert(is_arithmetic<T>::value, \" divide requires arithmetic types\");\n    if (b == 0) throw runtime_error(\"Division by zero\");\n    return a / b;\n}\n\ntemplate<size_t N>\nclass FixedBuffer {\n    static_assert(N > 0 && N <= 1024, \"Buffer size must be between 1 and 1024\");\n    char buffer[N];\npublic:\n    size_t size() const { return N; }\n};\n\nint main() {\n    NumericContainer<int> n1(42);    // OK\n    // NumericContainer<string> n2(\"Hello\");  // Error\n    \n    cout << safeDivide(10, 2) << endl;\n    \n    FixedBuffer<100> buf1;   // OK\n    // FixedBuffer<2000> buf2;  // Error\n    \n    return 0;\n}',
  hint: 'static_assert catches template parameter errors at compile time.'
},
{
  id: 'cpp_templates_18',
  topicId: 'cpp_templates',
  question: 'Create a function template with perfect forwarding.',
  mathSolution: 'Perfect forwarding preserves value category of arguments.',
  codeSolution: '#include <iostream>\n#include <utility>\nusing namespace std;\n\nvoid process(int& x) { cout << "Lvalue reference: " << x << endl; }\nvoid process(int&& x) { cout << "Rvalue reference: " << x << endl; }\nvoid process(const int& x) { cout << "Const lvalue: " << x << endl; }\n\ntemplate<typename T>\nvoid wrapper(T&& arg) {\n    process(forward<T>(arg));\n}\n\nclass Widget {\npublic:\n    Widget() { cout << "Widget created" << endl; }\n    Widget(const Widget&) { cout << "Widget copied" << endl; }\n    Widget(Widget&&) { cout << "Widget moved" << endl; }\n};\n\ntemplate<typename T>\nvoid createWidget(T&& arg) {\n    Widget w(forward<T>(arg));\n}\n\nint main() {\n    int a = 10;\n    const int b = 20;\n    \n    wrapper(a);      // Lvalue\n    wrapper(30);     // Rvalue\n    wrapper(b);      // Const lvalue\n    \n    Widget w1;\n    createWidget(w1);           // Copy\n    createWidget(Widget());     // Move\n    \n    return 0;\n}',
  hint: 'Perfect forwarding: template<typename T> void func(T&& arg) { other(forward<T>(arg)); }'
},
{
  id: 'cpp_templates_19',
  topicId: 'cpp_templates',
  question: 'Use decltype with templates for return type deduction.',
  mathSolution: 'decltype deduces exact type of expression for return type.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <list>\n#include <string>\nusing namespace std;\n\ntemplate<typename Container>\nauto front(Container& c) -> decltype(c.front()) {\n    return c.front();\n}\n\ntemplate<typename T, typename U>\nauto add(T a, U b) -> decltype(a + b) {\n    return a + b;\n}\n\ntemplate<typename Func, typename... Args>\nauto call(Func f, Args... args) -> decltype(f(args...)) {\n    return f(args...);\n}\n\nint square(int x) { return x * x; }\ndouble cube(double x) { return x * x * x; }\n\nint main() {\n    vector<int> v = {1, 2, 3};\n    list<double> l = {1.1, 2.2, 3.3};\n    \n    cout << front(v) << endl;  // int\n    cout << front(l) << endl;  // double\n    \n    cout << add(5, 3.14) << endl;      // double\n    cout << add(string(\"Hello\"), \" World\") << endl;  // string\n    \n    cout << call(square, 5) << endl;\n    cout << call(cube, 3.0) << endl;\n    \n    return 0;\n}',
  hint: 'decltype deduces expression type without evaluation.'
},
{
  id: 'cpp_templates_20',
  topicId: 'cpp_templates',
  question: 'Create a template with dependent types using typename keyword.',
  mathSolution: 'typename disambiguates dependent types in templates.',
  codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate<typename Container>\nvoid printContainer(const Container& c) {\n    typename Container::const_iterator it;\n    for (it = c.begin(); it != c.end(); ++it) {\n        cout << *it << \" \";\n    }\n    cout << endl;\n}\n\ntemplate<typename T>\nclass Wrapper {\npublic:\n    using value_type = T;\n    using reference = T&;\n    using const_reference = const T&;\n};\n\ntemplate<typename T>\nvoid processWrapper(const Wrapper<T>& w) {\n    typename Wrapper<T>::value_type val;\n    cout << \"Processing wrapper...\" << endl;\n}\n\ntemplate<typename T>\nclass Container {\npublic:\n    using iterator = T*;\n    using const_iterator = const T*;\n    \n    iterator begin() { return data; }\n    iterator end() { return data + size; }\n    \nprivate:\n    T data[10];\n    size_t size = 10;\n};\n\nint main() {\n    vector<int> v = {1, 2, 3, 4, 5};\n    printContainer(v);\n    \n    Wrapper<int> w;\n    processWrapper(w);\n    \n    return 0;\n}',
  hint: 'Use typename for dependent types: typename T::iterator'
},
{
  id: 'cpp_templates_21',
  topicId: 'cpp_templates',
  question: 'Use template deduction guides (C++17) for class templates.',
  mathSolution: 'Deduction guides enable automatic template parameter deduction.',
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\ntemplate<typename T>\nclass Box {\nprivate:\n    T content;\npublic:\n    Box(const T& c) : content(c) {}\n    void display() { cout << \"Box contains: \" << content << endl; }\n};\n\n// Deduction guide\nBox(const char*) -> Box<string>;\n\ntemplate<typename T, typename U>\nclass Pair {\npublic:\n    T first;\n    U second;\n    Pair(T f, U s) : first(f), second(s) {}\n};\n\n// Deduction guide for Pair\nPair(const char*, const char*) -> Pair<string, string>;\n\nint main() {\n    Box b1(42);           // Deduced as Box<int>\n    Box b2(3.14);         // Deduced as Box<double>\n    Box b3(\"Hello\");      // Deduced as Box<string> (via deduction guide)\n    \n    b1.display();\n    b2.display();\n    b3.display();\n    \n    Pair p1(1, 2);                // Pair<int, int>\n    Pair p2(3.14, \"pi\");         // Pair<double, const char*>\n    Pair p3(\"Hello\", \"World\");   // Pair<string, string> (via deduction guide)\n    \n    return 0;\n}',
  hint: 'Deduction guides: Box(const char*) -> Box<string>;'
},
{
  id: 'cpp_templates_22',
  topicId: 'cpp_templates',
  question: 'Create a template with constexpr if for compile-time branching (C++17).',
  mathSolution: 'if constexpr discards false branches at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nauto process(T value) {\n    if constexpr (is_integral<T>::value) {\n        cout << \"Integral: \";\n        return value * 2;\n    } else if constexpr (is_floating_point<T>::value) {\n        cout << \"Floating point: \";\n        return value * 2.0;\n    } else if constexpr (is_same<T, string>::value) {\n        cout << \"String: \";\n        return value + value;\n    } else {\n        cout << \"Other: \";\n        return value;\n    }\n}\n\ntemplate<typename T>\nvoid printInfo(const T& value) {\n    if constexpr (is_pointer<T>::value) {\n        cout << \"Pointer to: \" << *value << endl;\n    } else if constexpr (is_array<T>::value) {\n        cout << \"Array of size: \" << sizeof(value) / sizeof(value[0]) << endl;\n    } else {\n        cout << \"Value: \" << value << endl;\n    }\n}\n\nint main() {\n    cout << process(42) << endl;\n    cout << process(3.14) << endl;\n    cout << process(string(\"Hi\")) << endl;\n    \n    int x = 10;\n    int arr[] = {1, 2, 3};\n    \n    printInfo(5);\n    printInfo(&x);\n    printInfo(arr);\n    \n    return 0;\n}',
  hint: 'if constexpr eliminates branches not taken at compile time.'
},
{
  id: 'cpp_templates_23',
  topicId: 'cpp_templates',
  question: 'Create template variables for compile-time constants (C++14).',
  mathSolution: 'Variable templates allow templated constants.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<typename T>\nconstexpr T pi = T(3.1415926535897932385);\n\ntemplate<typename T>\nconstexpr T euler = T(2.71828182845904523536);\n\ntemplate<typename T>\nconstexpr T zero = T(0);\n\ntemplate<typename T>\nconstexpr T square(T x) { return x * x; }\n\nint main() {\n    double piDouble = pi<double>;\n    float piFloat = pi<float>;\n    int piInt = pi<int>;  // Truncated\n    \n    cout.precision(15);\n    cout << \"pi<double>: \" << piDouble << endl;\n    cout << \"pi<float>: \" << piFloat << endl;\n    cout << \"pi<int>: \" << piInt << endl;\n    \n    cout << \"euler<double>: \" << euler<double> << endl;\n    cout << \"zero<int>: \" << zero<int> << endl;\n    \n    cout << \"square(5): \" << square(5) << endl;\n    \n    return 0;\n}',
  hint: 'Variable template: template<typename T> constexpr T variable = T(value);'
},
{
  id: 'cpp_templates_24',
  topicId: 'cpp_templates',
  question: 'Use concepts to constrain template parameters (C++20).',
  mathSolution: 'Concepts define requirements for template arguments.',
  codeSolution: '#include <iostream>\n#include <concepts>\n#include <string>\nusing namespace std;\n\ntemplate<typename T>\nconcept Numeric = requires(T a, T b) {\n    { a + b } -> convertible_to<T>;\n    { a - b } -> convertible_to<T>;\n    { a * b } -> convertible_to<T>;\n    { a / b } -> convertible_to<T>;\n    { a > b } -> convertible_to<bool>;\n};\n\ntemplate<typename T>\nconcept Printable = requires(T t) {\n    { cout << t } -> convertible_to<ostream&>;\n};\n\ntemplate<Numeric T>\nT add(T a, T b) {\n    return a + b;\n}\n\ntemplate<Numeric T>\nT multiply(T a, T b) {\n    return a * b;\n}\n\ntemplate<Printable T>\nvoid print(const T& value) {\n    cout << value << endl;\n}\n\nint main() {\n    cout << add(5, 3) << endl;\n    cout << add(5.5, 3.2) << endl;\n    cout << multiply(4, 2) << endl;\n    \n    print(42);\n    print(\"Hello\");\n    print(3.14);\n    \n    // add(\"a\", \"b\");  // Error: string does not satisfy Numeric concept\n    \n    return 0;\n}',
  hint: 'Concepts: template<typename T> concept Name = requires(T t) { ... }'
},
{
  id: 'cpp_templates_25',
  topicId: 'cpp_templates',
  question: 'Create a template with requires clause for constraints (C++20).',
  mathSolution: 'requires clause specifies template parameter requirements.',
  codeSolution: '#include <iostream>\n#include <concepts>\n#include <vector>\n#include <list>\nusing namespace std;\n\ntemplate<typename T>\nrequires is_integral_v<T>\nT doubleValue(T x) {\n    return x * 2;\n}\n\ntemplate<typename T>\nrequires is_floating_point_v<T>\ndouble half(T x) {\n    return x / 2.0;\n}\n\ntemplate<typename Container>\nrequires requires(Container c) {\n    { c.begin() } -> input_iterator;\n    { c.end() } -> input_iterator;\n}\nvoid printContainer(const Container& c) {\n    for (const auto& item : c) {\n        cout << item << \" \";\n    }\n    cout << endl;\n}\n\ntemplate<typename T>\nrequires requires(T t) {\n    { t.size() } -> convertible_to<size_t>;\n    { t.empty() } -> convertible_to<bool>;\n}\nvoid checkContainer(const T& c) {\n    cout << \"Size: \" << c.size() << \", Empty: \" << (c.empty() ? \"Yes\" : \"No\") << endl;\n}\n\nint main() {\n    cout << doubleValue(5) << endl;   // OK\n    // cout << doubleValue(5.5) << endl; // Error\n    \n    cout << half(5.5) << endl;        // OK\n    \n    vector<int> v = {1, 2, 3, 4, 5};\n    list<string> l = {\"a\", \"b\", \"c\"};\n    \n    printContainer(v);\n    printContainer(l);\n    \n    checkContainer(v);\n    checkContainer(l);\n    \n    return 0;\n}',
  hint: 'requires clause: template<typename T> requires condition'
},
{
  id: 'cpp_templates_26',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time factorial computation.',
  mathSolution: 'Template metaprogramming computes values at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\ntemplate<int N>\nstruct Factorial {\n    static constexpr int value = N * Factorial<N - 1>::value;\n};\n\ntemplate<>\nstruct Factorial<0> {\n    static constexpr int value = 1;\n};\n\ntemplate<int N>\nstruct Fibonacci {\n    static constexpr int value = Fibonacci<N - 1>::value + Fibonacci<N - 2>::value;\n};\n\ntemplate<>\nstruct Fibonacci<0> {\n    static constexpr int value = 0;\n};\n\ntemplate<>\nstruct Fibonacci<1> {\n    static constexpr int value = 1;\n};\n\ntemplate<int N>\nstruct PowerOfTwo {\n    static constexpr int value = 2 * PowerOfTwo<N - 1>::value;\n};\n\ntemplate<>\nstruct PowerOfTwo<0> {\n    static constexpr int value = 1;\n};\n\nint main() {\n    cout << \"5! = \" << Factorial<5>::value << endl;\n    cout << \"10! = \" << Factorial<10>::value << endl;\n    \n    cout << \"Fibonacci(10) = \" << Fibonacci<10>::value << endl;\n    \n    cout << \"2^10 = \" << PowerOfTwo<10>::value << endl;\n    \n    // Compile-time arrays\n    int arr[Factorial<5>::value];\n    cout << \"Array size: \" << sizeof(arr) / sizeof(arr[0]) << endl;\n    \n    return 0;\n}',
  hint: 'Template metaprogramming uses recursive templates for compile-time computation.'
},
{
  id: 'cpp_templates_27',
  topicId: 'cpp_templates',
  question: 'Create a type trait to check if a type is a vector.',
  mathSolution: 'Type traits provide compile-time type information.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\ntemplate<typename T>\nstruct IsVector : false_type {};\n\ntemplate<typename T>\nstruct IsVector<vector<T>> : true_type {};\n\ntemplate<typename T>\nstruct IsList : false_type {};\n\ntemplate<typename T>\nstruct IsList<list<T>> : true_type {};\n\ntemplate<typename T>\nstruct RemovePointer {\n    using type = T;\n};\n\ntemplate<typename T>\nstruct RemovePointer<T*> {\n    using type = T;\n};\n\ntemplate<typename T>\nvoid checkType() {\n    if constexpr (IsVector<T>::value) {\n        cout << \"Type is a vector\" << endl;\n    } else if constexpr (IsList<T>::value) {\n        cout << \"Type is a list\" << endl;\n    } else {\n        cout << \"Type is neither vector nor list\" << endl;\n    }\n}\n\nint main() {\n    cout << boolalpha;\n    \n    cout << IsVector<vector<int>>::value << endl;   // true\n    cout << IsVector<list<int>>::value << endl;     // false\n    \n    cout << IsList<vector<int>>::value << endl;     // false\n    cout << IsList<list<int>>::value << endl;       // true\n    \n    checkType<vector<int>>();\n    checkType<list<double>>();\n    checkType<int>();\n    \n    RemovePointer<int*>::type x = 42;\n    cout << \"RemovePointer: \" << x << endl;\n    \n    return 0;\n}',
  hint: 'Type traits are partial specializations for metaprogramming.'
},
{
  id: 'cpp_templates_28',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time integer sequences (C++14).',
  mathSolution: 'Integer sequences enable compile-time iteration.',
  codeSolution: '#include <iostream>\n#include <utility>\nusing namespace std;\n\ntemplate<typename T, T... Ints>\nvoid printSequence(integer_sequence<T, Ints...>) {\n    ((cout << Ints << \" \"), ...);\n    cout << endl;\n}\n\ntemplate<typename T, T N>\nusing make_integer_sequence = integer_sequence<T, __integer_pack(N)...>;\n\ntemplate<size_t... Is>\nvoid printIndices(index_sequence<Is...>) {\n    ((cout << Is << \" \"), ...);\n    cout << endl;\n}\n\ntemplate<typename Tuple, size_t... Is>\nvoid printTupleImpl(const Tuple& t, index_sequence<Is...>) {\n    ((cout << get<Is>(t) << \" \"), ...);\n    cout << endl;\n}\n\ntemplate<typename... Args>\nvoid printTuple(const tuple<Args...>& t) {\n    printTupleImpl(t, index_sequence_for<Args...>{});\n}\n\nint main() {\n    using MySeq = integer_sequence<int, 1, 2, 3, 4, 5>;\n    printSequence(MySeq{});\n    \n    using MyIndex = index_sequence<0, 1, 2, 3, 4>;\n    printIndices(MyIndex{});\n    \n    auto t = make_tuple(10, 20, 30, 40);\n    printTuple(t);\n    \n    return 0;\n}',
  hint: 'integer_sequence enables compile-time indexing and iteration.'
},
{
  id: 'cpp_templates_29',
  topicId: 'cpp_templates',
  question: 'Create a template metafunction for type selection (conditional).',
  mathSolution: 'Metafunction selects type based on condition.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<bool Condition, typename T, typename F>\nstruct Conditional {\n    using type = T;\n};\n\ntemplate<typename T, typename F>\nstruct Conditional<false, T, F> {\n    using type = F;\n};\n\ntemplate<bool Condition, typename T, typename F>\nusing conditional_t = typename Conditional<Condition, T, F>::type;\n\ntemplate<typename T>\nstruct IsPointer {\n    static constexpr bool value = false;\n};\n\ntemplate<typename T>\nstruct IsPointer<T*> {\n    static constexpr bool value = true;\n};\n\ntemplate<typename T>\nstruct MakeConst {\n    using type = const T;\n};\n\ntemplate<typename T>\nstruct MakeConst<T*> {\n    using type = const T*;\n};\n\nint main() {\n    using Type1 = conditional_t<true, int, double>;\n    using Type2 = conditional_t<false, int, double>;\n    \n    cout << boolalpha;\n    cout << \"IsPointer<int>: \" << IsPointer<int>::value << endl;\n    cout << \"IsPointer<int*>: \" << IsPointer<int*>::value << endl;\n    \n    cout << \"Same types: \" << is_same<Type1, int>::value << endl;\n    cout << \"Same types: \" << is_same<Type2, double>::value << endl;\n    \n    return 0;\n}',
  hint: 'Template metafunctions compute types at compile time.'
},
{
  id: 'cpp_templates_30',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time assert (static_assert).',
  mathSolution: 'static_assert validates template parameters at compile time.',
  codeSolution: '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\ntemplate<typename T>\nclass SimpleVector {\n    static_assert(!is_const<T>::value, \"Vector element cannot be const\");\n    static_assert(!is_volatile<T>::value, \"Vector element cannot be volatile\");\n    static_assert(is_copy_constructible<T>::value, \"T must be copy constructible\");\n    \n    T* data;\n    size_t size;\npublic:\n    SimpleVector(size_t n) : size(n), data(new T[n]) {}\n    ~SimpleVector() { delete[] data; }\n};\n\ntemplate<typename T, size_t N>\nclass FixedArray {\n    static_assert(N > 0, \"Array size must be positive\");\n    static_assert(N <= 1000, \"Array size too large\");\n    T arr[N];\npublic:\n    size_t size() const { return N; }\n};\n\ntemplate<typename T>\nT safeDivide(T a, T b) {\n    static_assert(is_arithmetic<T>::value, \"Division requires arithmetic types\");\n    if (b == 0) throw runtime_error(\"Division by zero\");\n    return a / b;\n}\n\nint main() {\n    SimpleVector<int> v1(10);          // OK\n    // SimpleVector<const int> v2(10);  // Error\n    \n    FixedArray<int, 50> fa1;           // OK\n    // FixedArray<int, 0> fa2;          // Error\n    // FixedArray<int, 2000> fa3;       // Error\n    \n    cout << safeDivide(10, 2) << endl;\n    \n    return 0;\n}',
  hint: 'static_assert provides compile-time validation of conditions.'
},
{
  id: 'cpp_templates_31',
  topicId: 'cpp_templates',
  question: 'Create a variadic template to compute maximum of arguments.',
  mathSolution: 'Variadic templates can compute maximum using fold expressions.',
  codeSolution: '#include <iostream>\n#include <algorithm>\nusing namespace std;\n\ntemplate<typename T>\nT maximum(T x) {\n    return x;\n}\n\ntemplate<typename T, typename... Args>\nT maximum(T first, Args... rest) {\n    T maxRest = maximum(rest...);\n    return (first > maxRest) ? first : maxRest;\n}\n\n// Using fold expression (C++17)\ntemplate<typename... Args>\nauto maxFold(Args... args) {\n    return max({args...});\n}\n\n// Min using fold\ntemplate<typename... Args>\nauto minFold(Args... args) {\n    return min({args...});\n}\n\ntemplate<typename... Args>\nvoid printAll(Args... args) {\n    ((cout << args << \" \"), ...);\n    cout << endl;\n}\n\nint main() {\n    cout << maximum(5, 2, 8, 1, 9, 3) << endl;  // 9\n    cout << maximum(5.5, 3.2, 7.1, 2.4) << endl; // 7.1\n    cout << maximum(\"apple\", \"banana\", \"cherry\") << endl;  // cherry\n    \n    cout << maxFold(1, 5, 3, 9, 2) << endl;\n    cout << minFold(1, 5, 3, 9, 2) << endl;\n    \n    printAll(1, 2.5, \"Hello\", \'A\');\n    \n    return 0;\n}',
  hint: 'Variadic templates enable processing of variable argument lists.'
},
{
  "id": "cpp_templates_32",
  "topicId": "cpp_templates",
  "question": "Create a template for compile-time string hashing.",
  "mathSolution": "Constexpr template computes hash at compile time.",
  "codeSolution": "#include <iostream>\n#include <cstddef>\nusing namespace std;\n\nconstexpr unsigned long long hashString(const char* str, unsigned long long hash = 5381) {\n    return (*str == 0) ? hash : hashString(str + 1, (hash * 33) ^ static_cast<unsigned long long>(*str));\n}\n\nconstexpr unsigned long long operator\"\" _hash(const char* str, size_t) {\n    return hashString(str);\n}\n\ntemplate<unsigned long long H>\nstruct HashValue {\n    static constexpr unsigned long long value = H;\n};\n\nvoid processByHash(unsigned long long hash) {\n    cout << \"Runtime hash: \" << hash << endl;\n}\n\ntemplate<unsigned long long Hash>\nvoid processByHash() {\n    cout << \"Compile-time hash: \" << Hash << endl;\n}\n\nint main() {\n    constexpr auto hash1 = hashString(\"Hello\");\n    constexpr auto hash2 = \"World\"_hash;\n    constexpr auto hash3 = \"C++\"_hash;\n    \n    cout << \"Hash of 'Hello': \" << hash1 << endl;\n    cout << \"Hash of 'World': \" << hash2 << endl;\n    cout << \"Hash of 'C++': \" << hash3 << endl;\n    \n    processByHash(hash1);\n    processByHash<hash1>();\n    processByHash<hash3>();\n    \n    return 0;\n}",
  "hint": "constexpr template functions enable compile-time computation."
},
{
  id: 'cpp_templates_33',
  topicId: 'cpp_templates',
  question: 'Create a template for type erasure using std::function.',
  mathSolution: 'Type erasure hides concrete types behind uniform interface.',
  codeSolution: '#include <iostream>\n#include <functional>\n#include <memory>\nusing namespace std;\n\ntemplate<typename T>\nclass Printable {\nprivate:\n    struct Concept {\n        virtual void print() = 0;\n        virtual ~Concept() {}\n    };\n    \n    template<typename U>\n    struct Model : Concept {\n        U data;\n        Model(const U& u) : data(u) {}\n        void print() override { cout << data; }\n    };\n    \n    unique_ptr<Concept> pimpl;\n    \npublic:\n    template<typename U>\n    Printable(const U& value) : pimpl(make_unique<Model<U>>(value)) {}\n    \n    void print() const { pimpl->print(); }\n};\n\nint main() {\n    Printable<int> p1(42);\n    Printable<double> p2(3.14);\n    Printable<string> p3(\"Hello\");\n    \n    p1.print(); cout << endl;\n    p2.print(); cout << endl;\n    p3.print(); cout << endl;\n    \n    // Type erasure with std::function\n    vector<function<void()>> callbacks;\n    callbacks.push_back([]() { cout << \"Lambda 1\" << endl; });\n    callbacks.push_back([]() { cout << \"Lambda 2\" << endl; });\n    callbacks.push_back([]() { cout << \"Lambda 3\" << endl; });\n    \n    for (const auto& cb : callbacks) cb();\n    \n    return 0;\n}',
  hint: 'Type erasure provides uniform interface for different types.'
},
{
  id: 'cpp_templates_34',
  topicId: 'cpp_templates',
  question: 'Create a policy-based template design.',
  mathSolution: 'Policy templates enable compile-time algorithm selection.',
  codeSolution: '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\n// Sorting policies\ntemplate<typename T>\nstruct Ascending {\n    bool operator()(const T& a, const T& b) const { return a < b; }\n};\n\ntemplate<typename T>\nstruct Descending {\n    bool operator()(const T& a, const T& b) const { return a > b; }\n};\n\n// Threading policies\nstruct SingleThreaded {\n    static void lock() {}\n    static void unlock() {}\n};\n\nstruct MultiThreaded {\n    static void lock() { cout << \"Locking mutex\" << endl; }\n    static void unlock() { cout << \"Unlocking mutex\" << endl; }\n};\n\n// Container with policies\ntemplate<typename T, typename Compare = Ascending<T>, typename Threading = SingleThreaded>\nclass SortedContainer {\nprivate:\n    vector<T> data;\n    Compare comp;\n    \npublic:\n    void insert(const T& value) {\n        Threading::lock();\n        data.push_back(value);\n        sort(data.begin(), data.end(), comp);\n        Threading::unlock();\n    }\n    \n    void display() const {\n        for (const auto& v : data) cout << v << \" \";\n        cout << endl;\n    }\n};\n\nint main() {\n    SortedContainer<int, Ascending<int>> asc;\n    asc.insert(5);\n    asc.insert(2);\n    asc.insert(8);\n    asc.insert(1);\n    cout << \"Ascending: \";\n    asc.display();\n    \n    SortedContainer<int, Descending<int>> desc;\n    desc.insert(5);\n    desc.insert(2);\n    desc.insert(8);\n    desc.insert(1);\n    cout << \"Descending: \";\n    desc.display();\n    \n    SortedContainer<int, Ascending<int>, MultiThreaded> threadSafe;\n    threadSafe.insert(10);\n    threadSafe.insert(5);\n    cout << \"Thread-safe: \";\n    threadSafe.display();\n    \n    return 0;\n}',
  hint: 'Policy-based design allows compile-time selection of behaviors.'
},
{
  id: 'cpp_templates_35',
  topicId: 'cpp_templates',
  question: 'Create a template with tag dispatching.',
  mathSolution: 'Tag dispatching selects overloads based on type traits.',
  codeSolution: '#include <iostream>\n#include <iterator>\n#include <vector>\n#include <list>\nusing namespace std;\n\n// Tags\nstruct random_access_tag {};\nstruct bidirectional_tag {};\nstruct forward_tag {};\n\n// Tag for iterator category\ntemplate<typename Iterator>\nstruct iterator_category {\n    using type = forward_tag;\n};\n\ntemplate<typename T>\nstruct iterator_category<T*> {\n    using type = random_access_tag;\n};\n\n// Algorithm implementations\nvoid advance(random_access_tag, int& pos, int n) {\n    pos += n;\n    cout << \"Random access advance\" << endl;\n}\n\nvoid advance(bidirectional_tag, int& pos, int n) {\n    if (n > 0) pos += n;\n    else pos -= n;\n    cout << \"Bidirectional advance\" << endl;\n}\n\nvoid advance(forward_tag, int& pos, int n) {\n    for (int i = 0; i < n; i++) pos++;\n    cout << \"Forward advance\" << endl;\n}\n\ntemplate<typename Iterator>\nvoid myAdvance(Iterator it, int n) {\n    using Category = typename iterator_category<Iterator>::type;\n    advance(Category{}, n, n);\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int* ptr = arr;\n    myAdvance(ptr, 3);\n    cout << *ptr << endl;\n    \n    return 0;\n}',
  hint: 'Tag dispatching enables compile-time algorithm selection based on type properties.'
},
{
  id: 'cpp_templates_36',
  topicId: 'cpp_templates',
  question: 'Create a template for tuple-like type with index-based access.',
  mathSolution: 'Index-based access using integer sequences.',
  codeSolution: '#include <iostream>\n#include <tuple>\nusing namespace std;\n\ntemplate<typename... Types>\nclass MyTuple {\nprivate:\n    tuple<Types...> data;\n    \n    template<size_t I>\n    auto& getImpl() {\n        return get<I>(data);\n    }\n    \n    template<size_t... Is>\n    void printImpl(index_sequence<Is...>) {\n        ((cout << get<Is>(data) << \" \"), ...);\n        cout << endl;\n    }\n    \npublic:\n    MyTuple(Types... args) : data(args...) {}\n    \n    template<size_t I>\n    auto& get() {\n        return getImpl<I>();\n    }\n    \n    void print() {\n        printImpl(index_sequence_for<Types...>{});\n    }\n    \n    size_t size() const { return sizeof...(Types); }\n};\n\nint main() {\n    MyTuple<int, double, string> t(42, 3.14, \"Hello\");\n    \n    cout << get<0>(t) << endl;\n    cout << get<1>(t) << endl;\n    cout << get<2>(t) << endl;\n    \n    t.print();\n    cout << \"Tuple size: \" << t.size() << endl;\n    \n    get<0>(t) = 100;\n    t.print();\n    \n    return 0;\n}',
  hint: 'Tuple-like types use integer sequences for index-based access.'
},
{
  id: 'cpp_templates_37',
  topicId: 'cpp_templates',
  question: 'Create a template for type-safe printf using variadic templates.',
  mathSolution: 'Variadic templates enable type-safe printf implementation.',
  codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nvoid safePrintf(const char* format) {\n    cout << format;\n}\n\ntemplate<typename T, typename... Args>\nvoid safePrintf(const char* format, T value, Args... args) {\n    while (*format) {\n        if (*format == '%' && *(format + 1) == '%') {\n            cout << '%';\n            format += 2;\n        } else if (*format == '%') {\n            cout << value;\n            safePrintf(format + 2, args...);\n            return;\n        } else {\n            cout << *format++;\n        }\n    }\n}\n\ntemplate<typename... Args>\nvoid print(Args... args) {\n    ((cout << args << \" \"), ...);\n    cout << endl;\n}\n\nint main() {\n    safePrintf(\"Integer: %\\n\", 42);\n    safePrintf(\"Double: %\\n\", 3.14);\n    safePrintf(\"String: %\\n\", string(\"Hello\"));\n    safePrintf(\"Multiple: %, %, %\\n\", 1, 2.5, \"Three\");\n    \n    print(1, 2.5, \"Hello\", \'A\');\n    \n    return 0;\n}',
  hint: 'Variadic templates enable type-safe implementations of printf-like functions.'
},
{
  id: 'cpp_templates_38',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time matrix operations.',
  mathSolution: 'Template metaprogramming computes matrix operations at compile time.',
  codeSolution: '#include <iostream>\n#include <array>\nusing namespace std;\n\ntemplate<typename T, size_t Rows, size_t Cols>\nclass Matrix {\nprivate:\n    array<array<T, Cols>, Rows> data;\n    \npublic:\n    Matrix() {\n        for (size_t i = 0; i < Rows; i++)\n            for (size_t j = 0; j < Cols; j++)\n                data[i][j] = T();\n    }\n    \n    T& operator()(size_t i, size_t j) { return data[i][j]; }\n    const T& operator()(size_t i, size_t j) const { return data[i][j]; }\n    \n    template<size_t OtherCols>\n    Matrix<T, Rows, OtherCols> operator*(const Matrix<T, Cols, OtherCols>& other) const {\n        Matrix<T, Rows, OtherCols> result;\n        for (size_t i = 0; i < Rows; i++) {\n            for (size_t j = 0; j < OtherCols; j++) {\n                T sum = T();\n                for (size_t k = 0; k < Cols; k++) {\n                    sum += data[i][k] * other(k, j);\n                }\n                result(i, j) = sum;\n            }\n        }\n        return result;\n    }\n    \n    void display() const {\n        for (size_t i = 0; i < Rows; i++) {\n            for (size_t j = 0; j < Cols; j++) {\n                cout << data[i][j] << \" \";\n            }\n            cout << endl;\n        }\n    }\n};\n\nint main() {\n    Matrix<int, 2, 3> A;\n    A(0,0) = 1; A(0,1) = 2; A(0,2) = 3;\n    A(1,0) = 4; A(1,1) = 5; A(1,2) = 6;\n    \n    Matrix<int, 3, 2> B;\n    B(0,0) = 7; B(0,1) = 8;\n    B(1,0) = 9; B(1,1) = 10;\n    B(2,0) = 11; B(2,1) = 12;\n    \n    auto C = A * B;\n    \n    cout << \"Matrix A (2x3):\\n\";\n    A.display();\n    \n    cout << \"\\nMatrix B (3x2):\\n\";\n    B.display();\n    \n    cout << \"\\nMatrix C = A * B (2x2):\\n\";\n    C.display();\n    \n    return 0;\n}',
  hint: 'Template matrix operations enable compile-time dimension checking.'
},
{
  id: 'cpp_templates_39',
  topicId: 'cpp_templates',
  question: 'Create a template for compile-time finite state machine.',
  mathSolution: 'Templates can encode state machines at compile time.',
  codeSolution: '#include <iostream>\nusing namespace std;\n\nstruct RedState;\nstruct GreenState;\nstruct YellowState;\n\ntemplate<typename State>\nclass TrafficLight {\npublic:\n    void transition();\n};\n\nstruct RedState {\n    static void print() { cout << \"Red light\" << endl; }\n    using NextState = GreenState;\n};\n\nstruct GreenState {\n    static void print() { cout << \"Green light\" << endl; }\n    using NextState = YellowState;\n};\n\nstruct YellowState {\n    static void print() { cout << \"Yellow light\" << endl; }\n    using NextState = RedState;\n};\n\ntemplate<>\nclass TrafficLight<RedState> {\npublic:\n    void transition() {\n        RedState::print();\n        TrafficLight<GreenState> next;\n        next.transition();\n    }\n};\n\ntemplate<>\nclass TrafficLight<GreenState> {\npublic:\n    void transition() {\n        GreenState::print();\n        TrafficLight<YellowState> next;\n        next.transition();\n    }\n};\n\ntemplate<>\nclass TrafficLight<YellowState> {\npublic:\n    void transition() {\n        YellowState::print();\n        TrafficLight<RedState> next;\n        next.transition();\n    }\n};\n\ntemplate<int N>\nstruct Countdown {\n    static constexpr int value = N;\n    static void print() {\n        cout << value << \"... \";\n        Countdown<N-1>::print();\n    }\n};\n\ntemplate<>\nstruct Countdown<0> {\n    static void print() { cout << \"Go!\" << endl; }\n};\n\nint main() {\n    TrafficLight<RedState> light;\n    light.transition();\n    \n    Countdown<5>::print();\n    \n    return 0;\n}',
  hint: 'Template state machines provide compile-time state verification.'
},
{
  id: 'cpp_templates_40',
  topicId: 'cpp_templates',
  question: 'Use template specialization for optimizing boolean operations.',
  mathSolution: 'Template specialization can optimize for specific types.',
  codeSolution: '#include <iostream>\n#include <bitset>\nusing namespace std;\n\n// Generic implementation\ntemplate<typename T>\nvoid bitwiseAnd(T a, T b) {\n    cout << a & b << endl;\n}\n\n// Specialization for int\ntemplate<>\nvoid bitwiseAnd<int>(int a, int b) {\n    cout << \"Int AND: \" << (a & b) << endl;\n}\n\n// Specialization for bitset\ntemplate<size_t N>\nvoid bitwiseAnd(bitset<N> a, bitset<N> b) {\n    cout << \"Bitset AND: \" << (a & b) << endl;\n}\n\ntemplate<typename T>\nclass OptimizedVector {\n    T* data;\n    size_t size;\npublic:\n    OptimizedVector(size_t n) : size(n), data(new T[n]) {}\n    ~OptimizedVector() { delete[] data; }\n    \n    void fill(const T& value) {\n        for (size_t i = 0; i < size; i++) data[i] = value;\n    }\n};\n\n// Specialization for bool (optimized)\ntemplate<>\nclass OptimizedVector<bool> {\n    char* data;\n    size_t size;\npublic:\n    OptimizedVector(size_t n) : size(n), data(new char[(n + 7) / 8]) {}\n    ~OptimizedVector() { delete[] data; }\n    \n    void fill(bool value) {\n        unsigned char byte = value ? 0xFF : 0x00;\n        for (size_t i = 0; i < (size + 7) / 8; i++) data[i] = byte;\n    }\n};\n\nint main() {\n    bitwiseAnd(5, 3);\n    bitwiseAnd(bitset<4>(0b1010), bitset<4>(0b1100));\n    \n    OptimizedVector<int> v1(100);\n    OptimizedVector<bool> v2(100);\n    v1.fill(42);\n    v2.fill(true);\n    \n    cout << \"Specialized vector created successfully\" << endl;\n    \n    return 0;\n}',
  hint: 'Template specializations optimize for specific types.'
},

);