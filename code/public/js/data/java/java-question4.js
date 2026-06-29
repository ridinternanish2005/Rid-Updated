QuizData.questions.push(
  // Inheritance ,polymorphism abstract ,encapsulation
  {
    id: "inheritance_1",
    topicId: "inheritance",
    question: "Create a simple inheritance hierarchy with Animal and Dog classes.",
    mathSolution: "Child class extends parent class",
    codeSolution: 'public class Main {\n    static class Animal {\n        void eat() { System.out.println("Animal is eating"); }\n    }\n    static class Dog extends Animal {\n        void bark() { System.out.println("Dog is barking"); }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();\n        d.bark();\n    }\n}',
    hint: "Use extends keyword",
  },
  {
    id: "inheritance_2",
    topicId: "inheritance",
    question: "Demonstrate multi-level inheritance.",
    mathSolution: "Grandparent -> Parent -> Child",
    codeSolution: 'public class Main {\n    static class Vehicle {\n        void move() { System.out.println("Vehicle moves"); }\n    }\n    static class Car extends Vehicle {\n        void wheels() { System.out.println("Car has 4 wheels"); }\n    }\n    static class SportsCar extends Car {\n        void turbo() { System.out.println("SportsCar has turbo"); }\n    }\n    public static void main(String[] args) {\n        SportsCar sc = new SportsCar();\n        sc.move();\n        sc.wheels();\n        sc.turbo();\n    }\n}',
    hint: "Chain of inheritance",
  },
  {
    id: "inheritance_3",
    topicId: "inheritance",
    question: "Access parent class fields in child class.",
    mathSolution: "Child inherits non-private fields",
    codeSolution: 'public class Main {\n    static class Person {\n        String name;\n        int age;\n        Person(String n, int a) { name = n; age = a; }\n    }\n    static class Student extends Person {\n        int rollNo;\n        Student(String n, int a, int r) { super(n, a); rollNo = r; }\n        void display() { System.out.println("Name: " + name + ", Age: " + age + ", Roll: " + rollNo); }\n    }\n    public static void main(String[] args) {\n        Student s = new Student("Alice", 20, 101);\n        s.display();\n    }\n}',
    hint: "super() calls parent constructor",
  },
  {
    id: "inheritance_4",
    topicId: "inheritance",
    question: "Use protected members for inheritance access.",
    mathSolution: "protected members accessible in child classes",
    codeSolution: 'public class Main {\n    static class Parent {\n        private int privateVar = 10;\n        protected int protectedVar = 20;\n        public int publicVar = 30;\n        int defaultVar = 40;\n    }\n    static class Child extends Parent {\n        void display() {\n            // System.out.println(privateVar); // ERROR\n            System.out.println("Protected: " + protectedVar);\n            System.out.println("Public: " + publicVar);\n            System.out.println("Default: " + defaultVar);\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}',
    hint: "protected is between private and public",
  },

  // METHOD OVERRIDING (4)
  {
    id: "inheritance_5",
    topicId: "inheritance",
    question: "Override a method in child class.",
    mathSolution: "Child provides specific implementation",
    codeSolution: 'public class Main {\n    static class Shape {\n        void draw() { System.out.println("Drawing shape"); }\n    }\n    static class Circle extends Shape {\n        @Override\n        void draw() { System.out.println("Drawing circle"); }\n    }\n    static class Rectangle extends Shape {\n        @Override\n        void draw() { System.out.println("Drawing rectangle"); }\n    }\n    public static void main(String[] args) {\n        Shape s1 = new Circle();\n        Shape s2 = new Rectangle();\n        s1.draw();\n        s2.draw();\n    }\n}',
    hint: "@Override annotation recommended",
  },
  {
    id: "inheritance_6",
    topicId: "inheritance",
    question: "Call parent class overridden method using super.",
    mathSolution: "super.method() calls parent version",
    codeSolution: 'public class Main {\n    static class Parent {\n        void display() { System.out.println("Parent display"); }\n    }\n    static class Child extends Parent {\n        @Override\n        void display() {\n            super.display();\n            System.out.println("Child display");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}',
    hint: "super to access parent's method",
  },
  {
    id: "inheritance_7",
    topicId: "inheritance",
    question: "Rules of method overriding - return types.",
    mathSolution: "Covariant return types allowed",
    codeSolution: 'public class Main {\n    static class Parent {\n        Object getValue() { return "Parent value"; }\n    }\n    static class Child extends Parent {\n        @Override\n        String getValue() { return "Child value"; }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        System.out.println(c.getValue());\n    }\n}',
    hint: "Can return subtype of parent's return type",
  },
  {
    id: "inheritance_8",
    topicId: "inheritance",
    question: "Cannot override static methods - method hiding.",
    mathSolution: "Static methods are hidden, not overridden",
    codeSolution: 'public class Main {\n    static class Parent {\n        static void staticMethod() { System.out.println("Parent static"); }\n        void instanceMethod() { System.out.println("Parent instance"); }\n    }\n    static class Child extends Parent {\n        static void staticMethod() { System.out.println("Child static"); }\n        @Override\n        void instanceMethod() { System.out.println("Child instance"); }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.staticMethod();   // Parent static (resolved at compile time)\n        p.instanceMethod(); // Child instance (runtime polymorphic)\n    }\n}',
    hint: "Static methods are resolved at compile-time",
  },

  // CONSTRUCTORS IN INHERITANCE (3)
  {
    id: "inheritance_9",
    topicId: "inheritance",
    question: "Constructor chaining in inheritance.",
    mathSolution: "Parent constructor called before child",
    codeSolution: 'public class Main {\n    static class A { A() { System.out.println("A constructor"); } }\n    static class B extends A { B() { System.out.println("B constructor"); } }\n    static class C extends B { C() { System.out.println("C constructor"); } }\n    public static void main(String[] args) {\n        C c = new C();\n    }\n}',
    hint: "Constructors execute from top to bottom",
  },
  {
    id: "inheritance_10",
    topicId: "inheritance",
    question: "Call parameterized parent constructor using super().",
    mathSolution: "super() must be first statement",
    codeSolution: 'public class Main {\n    static class Employee {\n        String name; double salary;\n        Employee(String n, double s) { name = n; salary = s; System.out.println("Employee constructor"); }\n    }\n    static class Manager extends Employee {\n        double bonus;\n        Manager(String n, double s, double b) { super(n, s); bonus = b; System.out.println("Manager constructor"); }\n        void display() { System.out.println(name + ", Salary: $" + salary + ", Bonus: $" + bonus); }\n    }\n    public static void main(String[] args) {\n        Manager m = new Manager("John", 50000, 5000);\n        m.display();\n    }\n}',
    hint: "super() with parameters",
  },
  {
    id: "inheritance_11",
    topicId: "inheritance",
    question: "Implicit super() call if no parent constructor defined.",
    mathSolution: "Default constructor inserted automatically",
    codeSolution: 'public class Main {\n    static class Parent {}\n    static class Child extends Parent {\n        Child() { System.out.println("Child constructor"); }\n    }\n    static class Parent2 {\n        Parent2(int x) { System.out.println("Parent2 param: " + x); }\n    }\n    static class Child2 extends Parent2 {\n        Child2() { super(10); System.out.println("Child2 constructor"); }\n    }\n    public static void main(String[] args) {\n        System.out.println("--- Default ---");\n        Child c = new Child();\n        System.out.println("--- Parameterized parent ---");\n        Child2 c2 = new Child2();\n    }\n}',
    hint: "If parent has no default constructor, must call super explicitly",
  },

  // POLYMORPHISM (3)
  {
    id: "inheritance_12",
    topicId: "inheritance",
    question: "Runtime polymorphism with method overriding.",
    mathSolution: "Parent reference, child object",
    codeSolution: 'public class Main {\n    static class Animal {\n        void sound() { System.out.println("Animal makes sound"); }\n    }\n    static class Cat extends Animal {\n        void sound() { System.out.println("Cat meows"); }\n    }\n    static class Dog extends Animal {\n        void sound() { System.out.println("Dog barks"); }\n    }\n    public static void main(String[] args) {\n        Animal a1 = new Cat();\n        Animal a2 = new Dog();\n        a1.sound();\n        a2.sound();\n        Animal[] animals = {new Cat(), new Dog(), new Animal()};\n        for(Animal a : animals) a.sound();\n    }\n}',
    hint: "Actual method called based on object type at runtime",
  },
  {
    id: "inheritance_13",
    topicId: "inheritance",
    question: "Use instanceof to check object type.",
    mathSolution: "instanceof operator for type checking",
    codeSolution: 'public class Main {\n    static class Vehicle {}\n    static class Car extends Vehicle {}\n    static class Bike extends Vehicle {}\n    public static void main(String[] args) {\n        Vehicle v1 = new Car();\n        Vehicle v2 = new Bike();\n        System.out.println("v1 instanceof Car: " + (v1 instanceof Car));\n        System.out.println("v1 instanceof Bike: " + (v1 instanceof Bike));\n        System.out.println("v1 instanceof Vehicle: " + (v1 instanceof Vehicle));\n        if(v1 instanceof Car) {\n            Car c = (Car) v1;\n            System.out.println("Casted to Car");\n        }\n    }\n}',
    hint: "Always check before downcasting",
  },
  {
    id: "inheritance_14",
    topicId: "inheritance",
    question: "Polymorphism with method parameters.",
    mathSolution: "Method accepts parent type, works with any child",
    codeSolution: 'public class Main {\n    static class Media {\n        void play() { System.out.println("Playing media"); }\n    }\n    static class Song extends Media {\n        void play() { System.out.println("Playing song"); }\n    }\n    static class Video extends Media {\n        void play() { System.out.println("Playing video"); }\n    }\n    static class Player {\n        void playMedia(Media m) { m.play(); }\n    }\n    public static void main(String[] args) {\n        Player p = new Player();\n        p.playMedia(new Song());\n        p.playMedia(new Video());\n        p.playMedia(new Media());\n    }\n}',
    hint: "Method works with any Media subclass",
  },

  // ABSTRACT CLASSES (3)
  {
    id: "inheritance_15",
    topicId: "inheritance",
    question: "Create abstract class with abstract methods.",
    mathSolution: "Abstract classes cannot be instantiated",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        abstract double area();\n        void display() { System.out.println("Area: " + area()); }\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(double r) { radius = r; }\n        double area() { return Math.PI * radius * radius; }\n    }\n    static class Rectangle extends Shape {\n        double l, w;\n        Rectangle(double len, double wid) { l = len; w = wid; }\n        double area() { return l * w; }\n    }\n    public static void main(String[] args) {\n        Shape c = new Circle(5);\n        Shape r = new Rectangle(4, 6);\n        c.display();\n        r.display();\n    }\n}',
    hint: "Abstract methods must be implemented by concrete subclasses",
  },
  {
    id: "inheritance_16",
    topicId: "inheritance",
    question: "Abstract class with constructor.",
    mathSolution: "Abstract classes can have constructors",
    codeSolution: 'public class Main {\n    static abstract class Database {\n        String connection;\n        Database(String conn) { connection = conn; System.out.println("Connecting to " + connection); }\n        abstract void query(String sql);\n    }\n    static class MySQL extends Database {\n        MySQL(String conn) { super(conn); }\n        void query(String sql) { System.out.println("MySQL executing: " + sql); }\n    }\n    static class PostgreSQL extends Database {\n        PostgreSQL(String conn) { super(conn); }\n        void query(String sql) { System.out.println("PostgreSQL executing: " + sql); }\n    }\n    public static void main(String[] args) {\n        MySQL db1 = new MySQL("localhost:3306/mydb");\n        db1.query("SELECT * FROM users");\n    }\n}',
    hint: "Abstract class constructors called via super()",
  },
  {
    id: "inheritance_17",
    topicId: "inheritance",
    question: "Abstract class can have concrete methods.",
    mathSolution: "Abstract classes can provide default implementations",
    codeSolution: 'import java.util.Date;\npublic class Main {\n    static abstract class Logger {\n        abstract void log(String message);\n        void logWithTimestamp(String message) {\n            String timestamp = new Date().toString();\n            log("[" + timestamp + "] " + message);\n        }\n        void logError(String error) { log("ERROR: " + error); }\n    }\n    static class ConsoleLogger extends Logger {\n        void log(String message) { System.out.println("Console: " + message); }\n    }\n    public static void main(String[] args) {\n        ConsoleLogger logger = new ConsoleLogger();\n        logger.logWithTimestamp("Application started");\n        logger.logError("Null pointer exception");\n    }\n}',
    hint: "Abstract classes can provide partial implementation",
  },

  // FINAL KEYWORD IN INHERITANCE (2)
  {
    id: "inheritance_18",
    topicId: "inheritance",
    question: "Prevent inheritance using final class.",
    mathSolution: "final classes cannot be extended",
    codeSolution: 'public class Main {\n    static final class MathConstants {\n        static final double PI = 3.14159;\n    }\n    static class Calculator {\n        double circleArea(double r) { return MathConstants.PI * r * r; }\n    }\n    public static void main(String[] args) {\n        System.out.println("PI: " + MathConstants.PI);\n        Calculator calc = new Calculator();\n        System.out.println("Area: " + calc.circleArea(5));\n    }\n}',
    hint: "final class for security/immutability",
  },
  {
    id: "inheritance_19",
    topicId: "inheritance",
    question: "Prevent method overriding using final method.",
    mathSolution: "final methods cannot be overridden",
    codeSolution: 'public class Main {\n    static class Parent {\n        final void show() { System.out.println("This is final method"); }\n        void normal() { System.out.println("Normal method"); }\n    }\n    static class Child extends Parent {\n        // void show() {} // would cause error\n        void normal() { System.out.println("Overridden normal method"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.show();\n        c.normal();\n    }\n}',
    hint: "final methods for critical implementations",
  },

  // OBJECT CLASS METHODS (2)
  {
    id: "inheritance_20",
    topicId: "inheritance",
    question: "Override toString() method inherited from Object.",
    mathSolution: "toString() provides string representation",
    codeSolution: 'public class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        @Override\n        public String toString() { return "Person[name=" + name + ", age=" + age + "]"; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person("Alice", 25);\n        System.out.println(p);\n    }\n}',
    hint: "All classes inherit from Object",
  },
  {
    id: "inheritance_21",
    topicId: "inheritance",
    question: "Override equals() and hashCode() methods.",
    mathSolution: "Proper implementation for object equality",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Student {\n        int id; String name;\n        Student(int i, String n) { id = i; name = n; }\n        @Override\n        public boolean equals(Object obj) {\n            if(this == obj) return true;\n            if(obj == null || getClass() != obj.getClass()) return false;\n            Student s = (Student) obj;\n            return id == s.id && Objects.equals(name, s.name);\n        }\n        @Override\n        public int hashCode() { return Objects.hash(id, name); }\n    }\n    public static void main(String[] args) {\n        Student s1 = new Student(101, "Alice");\n        Student s2 = new Student(101, "Alice");\n        Student s3 = new Student(102, "Bob");\n        System.out.println("s1.equals(s2): " + s1.equals(s2));\n        System.out.println("s1.equals(s3): " + s1.equals(s3));\n        Set<Student> set = new HashSet<>();\n        set.add(s1);\n        set.add(s2);\n        System.out.println("Set size: " + set.size());\n    }\n}',
    hint: "equals and hashCode must be consistent",
  },

  // INTERFACE VS ABSTRACT CLASS (3)
  {
    id: "inheritance_22",
    topicId: "inheritance",
    question: "Implement multiple interfaces.",
    mathSolution: "Java supports multiple interface inheritance",
    codeSolution: 'public class Main {\n    interface Flyable { void fly(); }\n    interface Swimmable { void swim(); }\n    static class Duck implements Flyable, Swimmable {\n        public void fly() { System.out.println("Duck flying"); }\n        public void swim() { System.out.println("Duck swimming"); }\n    }\n    static class Plane implements Flyable {\n        public void fly() { System.out.println("Plane flying"); }\n    }\n    public static void main(String[] args) {\n        Duck d = new Duck();\n        d.fly();\n        d.swim();\n        Plane p = new Plane();\n        p.fly();\n    }\n}',
    hint: "A class can implement multiple interfaces",
  },
  {
    id: "inheritance_23",
    topicId: "inheritance",
    question: "Default methods in interfaces.",
    mathSolution: "Interfaces can have default implementations",
    codeSolution: 'public class Main {\n    interface Vehicle {\n        void start();\n        default void honk() { System.out.println("Beep beep!"); }\n        static void service() { System.out.println("Vehicle service"); }\n    }\n    static class Car implements Vehicle {\n        public void start() { System.out.println("Car starting"); }\n    }\n    static class Bike implements Vehicle {\n        public void start() { System.out.println("Bike starting"); }\n        public void honk() { System.out.println("Bike horn: Tring tring!"); }\n    }\n    public static void main(String[] args) {\n        Car c = new Car();\n        c.start();\n        c.honk();\n        Bike b = new Bike();\n        b.start();\n        b.honk();\n        Vehicle.service();\n    }\n}',
    hint: "default methods add functionality without breaking existing code",
  },
  {
    id: "inheritance_24",
    topicId: "inheritance",
    question: "Diamond problem with multiple inheritance of interfaces.",
    mathSolution: "Java resolves with explicit override",
    codeSolution: 'public class Main {\n    interface A { default void show() { System.out.println("A show"); } }\n    interface B { default void show() { System.out.println("B show"); } }\n    static class C implements A, B {\n        public void show() {\n            A.super.show();\n            B.super.show();\n            System.out.println("C show");\n        }\n    }\n    public static void main(String[] args) {\n        C c = new C();\n        c.show();\n    }\n}',
    hint: "Use super to call specific interface default method",
  },

  // COMPOSITION VS INHERITANCE (1)
  {
    id: "inheritance_25",
    topicId: "inheritance",
    question: "Prefer composition over inheritance.",
    mathSolution: "Has-a relationship vs Is-a relationship",
    codeSolution: 'public class Main {\n    static class Engine {\n        void start() { System.out.println("Engine started"); }\n        void stop() { System.out.println("Engine stopped"); }\n    }\n    static class Car { // Composition: Car has Engine\n        private Engine engine;\n        private String model;\n        Car(String m) { model = m; engine = new Engine(); }\n        void startCar() { System.out.print(model + ": "); engine.start(); }\n        void stopCar() { System.out.print(model + ": "); engine.stop(); }\n        void drive() { System.out.println(model + " driving"); }\n    }\n    public static void main(String[] args) {\n        Car myCar = new Car("Tesla");\n        myCar.startCar();\n        myCar.drive();\n        myCar.stopCar();\n    }\n}',
    hint: "Favor composition over inheritance for flexibility",
  },
  {
    "id": "inheritance_26",
    "topicId": "inheritance",
    "question": "Demonstrate field hiding (shadowing) in inheritance. Create a parent class with a variable `value` and a child class that also declares `value`. Show that the child's variable hides the parent's, and access the parent's variable using `super`.",
    "mathSolution": "Fields are resolved at compile-time based on reference type; child's field hides parent's.",
    "codeSolution": "public class Main {\n    static class Parent {\n        int value = 10;\n    }\n    static class Child extends Parent {\n        int value = 20;\n        void display() {\n            System.out.println(\"Child value: \" + value);\n            System.out.println(\"Parent value: \" + super.value);\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}",
    "hint": "Use `super.field` to access hidden parent field."
  },
  {
    "id": "inheritance_27",
    "topicId": "inheritance",
    "question": "Create a subclass that overloads the constructor with different parameters, calling different super constructors using `super()` based on the arguments.",
    "mathSolution": "Subclass constructors can choose which parent constructor to invoke.",
    "codeSolution": "public class Main {\n    static class Employee {\n        String name;\n        int id;\n        Employee() { this(\"Unknown\", 0); }\n        Employee(String name) { this(name, 0); }\n        Employee(String name, int id) { this.name = name; this.id = id; }\n    }\n    static class Manager extends Employee {\n        String department;\n        Manager() { super(); department = \"General\"; }\n        Manager(String name) { super(name); department = \"General\"; }\n        Manager(String name, int id, String dept) { super(name, id); department = dept; }\n        void display() { System.out.println(name + \" (ID:\" + id + \") - \" + department); }\n    }\n    public static void main(String[] args) {\n        new Manager().display();\n        new Manager(\"Alice\").display();\n        new Manager(\"Bob\", 101, \"IT\").display();\n    }\n}",
    "hint": "Overload subclass constructors to call different parent constructors."
  },
  {
    "id": "inheritance_28",
    "topicId": "inheritance",
    "question": "Override a method in child class that throws a more specific checked exception than the parent (allowed). Also show that overriding cannot throw a broader checked exception.",
    "mathSolution": "Child method can throw subclass of parent's exception or none, but not a broader exception.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    static class Parent {\n        void readFile() throws IOException {\n            System.out.println(\"Parent reading\");\n        }\n    }\n    static class Child extends Parent {\n        @Override\n        void readFile() throws FileNotFoundException {\n            System.out.println(\"Child reading (narrower exception)\");\n        }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        try {\n            p.readFile();\n        } catch(IOException e) {}\n    }\n}",
    "hint": "Overriding method can throw a subclass of the parent's exception (covariant exceptions)."
  },
  {
    "id": "inheritance_29",
    "topicId": "inheritance",
    "question": "Use `super` to call a parent method that has been overridden, but also access a hidden parent field from within a method.",
    "mathSolution": "`super` can access both methods and fields that are hidden/overridden.",
    "codeSolution": "public class Main {\n    static class Parent {\n        String msg = \"Parent message\";\n        void show() { System.out.println(\"Parent show\"); }\n    }\n    static class Child extends Parent {\n        String msg = \"Child message\";\n        void show() {\n            super.show();\n            System.out.println(\"Child show\");\n            System.out.println(\"Parent msg: \" + super.msg);\n        }\n    }\n    public static void main(String[] args) {\n        new Child().show();\n    }\n}",
    "hint": "Use `super.method()` and `super.field` to access parent's members."
  },
  {
    "id": "inheritance_30",
    "topicId": "inheritance",
    "question": "Define a static nested class inside a parent class and extend it in a child class's static nested class. Demonstrate inheritance of static nested classes.",
    "mathSolution": "Static nested classes can extend each other within the inheritance hierarchy.",
    "codeSolution": "public class Main {\n    static class OuterParent {\n        static class Nested {\n            void display() { System.out.println(\"Parent nested\"); }\n        }\n    }\n    static class OuterChild extends OuterParent {\n        static class Nested extends OuterParent.Nested {\n            void display() {\n                super.display();\n                System.out.println(\"Child nested\");\n            }\n        }\n    }\n    public static void main(String[] args) {\n        OuterChild.Nested nested = new OuterChild.Nested();\n        nested.display();\n    }\n}",
    "hint": "Static nested classes are independent but can be extended across inheritance."
  },
  {
    "id": "inheritance_31",
    "topicId": "inheritance",
    "question": "Observe the order of execution of instance initializer blocks and constructors in a multi-level inheritance hierarchy.",
    "mathSolution": "Instance initializers run after superclass constructor but before the current class constructor body.",
    "codeSolution": "public class Main {\n    static class A {\n        { System.out.println(\"A instance init\"); }\n        A() { System.out.println(\"A constructor\"); }\n    }\n    static class B extends A {\n        { System.out.println(\"B instance init\"); }\n        B() { System.out.println(\"B constructor\"); }\n    }\n    static class C extends B {\n        { System.out.println(\"C instance init\"); }\n        C() { System.out.println(\"C constructor\"); }\n    }\n    public static void main(String[] args) {\n        new C();\n    }\n}",
    "hint": "Order: superclass constructor → instance init → constructor body for each level."
  },
  {
    "id": "inheritance_32",
    "topicId": "inheritance",
    "question": "Demonstrate safe downcasting using instanceof and then cast to call child-specific methods.",
    "mathSolution": "Always check type with instanceof before downcasting to avoid ClassCastException.",
    "codeSolution": "public class Main {\n    static class Animal { void sound() { System.out.println(\"Animal sound\"); } }\n    static class Dog extends Animal { void bark() { System.out.println(\"Dog barking\"); } }\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        if (a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.bark();\n        }\n        a = new Animal();\n        if (a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.bark();\n        } else {\n            System.out.println(\"Not a Dog\");\n        }\n    }\n}",
    "hint": "Check with instanceof before casting."
  },
  {
    "id": "inheritance_33",
    "topicId": "inheritance",
    "question": "Override a protected method in a child class and change its access modifier to public (allowed, since it's broader).",
    "mathSolution": "Overriding method can increase accessibility (protected → public) but cannot reduce it.",
    "codeSolution": "public class Main {\n    static class Parent {\n        protected void display() { System.out.println(\"Parent display\"); }\n    }\n    static class Child extends Parent {\n        @Override\n        public void display() { System.out.println(\"Child display\"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n        Parent p = new Child();\n        p.display();\n    }\n}",
    "hint": "Overriding method can have a less restrictive access modifier."
  },
  {
    "id": "inheritance_34",
    "topicId": "inheritance",
    "question": "Call a child's overridden method from the parent constructor. Show the pitfall (method called before child is fully constructed).",
    "mathSolution": "Overridden methods called from parent constructor use child's implementation even though child's fields may not be initialized.",
    "codeSolution": "public class Main {\n    static class Parent {\n        Parent() { display(); }\n        void display() { System.out.println(\"Parent display\"); }\n    }\n    static class Child extends Parent {\n        private String value = \"Child value\";\n        Child() { System.out.println(\"Child constructor\"); }\n        @Override\n        void display() { System.out.println(\"Child display: \" + value); }\n    }\n    public static void main(String[] args) {\n        new Child();\n    }\n}",
    "hint": "Avoid calling overridden methods in constructor; they may run before child's fields are initialized."
  },
  {
    "id": "inheritance_35",
    "topicId": "inheritance",
    "question": "Create an abstract class that extends another abstract class. Implement only some abstract methods, leaving others for further subclasses.",
    "mathSolution": "Abstract classes can inherit from abstract classes and optionally implement methods.",
    "codeSolution": "public class Main {\n    static abstract class Vehicle {\n        abstract void start();\n        abstract void stop();\n    }\n    static abstract class Car extends Vehicle {\n        void start() { System.out.println(\"Car starting\"); }\n    }\n    static class ElectricCar extends Car {\n        void stop() { System.out.println(\"Electric car stopping\"); }\n    }\n    public static void main(String[] args) {\n        ElectricCar ec = new ElectricCar();\n        ec.start();\n        ec.stop();\n    }\n}",
    "hint": "An abstract class can partially implement an abstract parent."
  },
   {
    "id": "inheritance_36",
    "topicId": "inheritance",
    "question": "Create an interface with a default method that calls an abstract method. Implement the interface and provide the abstract method.",
    "mathSolution": "Default methods can invoke abstract methods to define a template.",
    "codeSolution": "public class Main {\n    interface Formatter {\n        String format(String s);\n        default void printFormatted(String s) {\n            System.out.println(\"Formatted: \" + format(s));\n        }\n    }\n    static class UpperCaseFormatter implements Formatter {\n        public String format(String s) { return s.toUpperCase(); }\n    }\n    public static void main(String[] args) {\n        UpperCaseFormatter uf = new UpperCaseFormatter();\n        uf.printFormatted(\"hello\");\n    }\n}",
    "hint": "Default methods can use abstract methods as building blocks."
  },
  {
    "id": "inheritance_37",
    "topicId": "inheritance",
    "question": "Inherit a final variable from a parent class. Show that it can be accessed but not modified by the child.",
    "mathSolution": "Final variables are immutable and accessible to subclasses.",
    "codeSolution": "public class Main {\n    static class Parent {\n        final int VALUE = 100;\n    }\n    static class Child extends Parent {\n        void display() { System.out.println(\"Final VALUE: \" + VALUE); }\n    }\n    public static void main(String[] args) {\n        new Child().display();\n    }\n}",
    "hint": "Final fields are inherited but cannot be reassigned."
  },
  {
    "id": "inheritance_38",
    "topicId": "inheritance",
    "question": "Override a method that is declared as synchronized in the parent. The child's override may or may not be synchronized.",
    "mathSolution": "synchronized is not part of the method signature; it can be added or removed in overrides.",
    "codeSolution": "public class Main {\n    static class Parent {\n        synchronized void syncMethod() {\n            System.out.println(\"Parent synchronized method\");\n        }\n    }\n    static class Child extends Parent {\n        void syncMethod() { // not synchronized\n            System.out.println(\"Child non-synchronized override\");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.syncMethod();\n    }\n}",
    "hint": "synchronized modifier is not required to match in overrides."
  },
  {
    "id": "inheritance_39",
    "topicId": "inheritance",
    "question": "Create a generic parent class (Box<T>) and extend it with a concrete type (StringBox). Show usage of type parameter inheritance.",
    "mathSolution": "Subclass can specify the generic type parameter of the parent.",
    "codeSolution": "public class Main {\n    static class Box<T> {\n        T item;\n        void set(T item) { this.item = item; }\n        T get() { return item; }\n    }\n    static class StringBox extends Box<String> {\n        void print() { System.out.println(\"StringBox: \" + get()); }\n    }\n    public static void main(String[] args) {\n        StringBox sb = new StringBox();\n        sb.set(\"Hello Generics\");\n        sb.print();\n    }\n}",
    "hint": "Subclass can bind parent's type parameter to a concrete type."
  },
  {
    "id": "inheritance_40",
    "topicId": "inheritance",
    "question": "Create an anonymous class that extends an abstract class with a single abstract method and instantiate it.",
    "mathSolution": "Anonymous class provides inline implementation.",
    "codeSolution": "public class Main {\n    static abstract class Greeting {\n        abstract void sayHello();\n    }\n    public static void main(String[] args) {\n        Greeting g = new Greeting() {\n            void sayHello() { System.out.println(\"Hello from anonymous class!\"); }\n        };\n        g.sayHello();\n    }\n}",
    "hint": "Anonymous classes are a concise way to subclass on the fly."
  },
  //polymorphism
   {
    id: "polymorphism_1",
    topicId: "polymorphism",
    question: "Demonstrate method overloading with different parameter types.",
    mathSolution: "Same method name, different parameter types",
    codeSolution: 'public class Main {\n    static class Calculator {\n        int add(int a, int b) { return a + b; }\n        double add(double a, double b) { return a + b; }\n        String add(String a, String b) { return a + b; }\n    }\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println("Int sum: " + calc.add(10, 20));\n        System.out.println("Double sum: " + calc.add(10.5, 20.7));\n        System.out.println("String concat: " + calc.add("Hello", "World"));\n    }\n}',
    hint: "Same method name, different parameter types",
  },
  {
    id: "polymorphism_2",
    topicId: "polymorphism",
    question: "Method overloading with different number of parameters.",
    mathSolution: "Same method name, different parameter count",
    codeSolution: 'public class Main {\n    static class Area {\n        double calculate(double radius) { return Math.PI * radius * radius; }\n        double calculate(double length, double width) { return length * width; }\n        double calculate(double a, double b, double c) { return a + b + c; }\n    }\n    public static void main(String[] args) {\n        Area area = new Area();\n        System.out.println("Circle area: " + area.calculate(5));\n        System.out.println("Rectangle area: " + area.calculate(4, 6));\n        System.out.println("Sum of three: " + area.calculate(1, 2, 3));\n    }\n}',
    hint: "Different number of parameters",
  },
  {
    id: "polymorphism_3",
    topicId: "polymorphism",
    question: "Method overloading with different order of parameters.",
    mathSolution: "Same method name, different parameter order",
    codeSolution: 'public class Main {\n    static class Display {\n        void show(String name, int age) { System.out.println(name + " is " + age + " years old"); }\n        void show(int age, String name) { System.out.println("Age " + age + ", Name: " + name); }\n    }\n    public static void main(String[] args) {\n        Display d = new Display();\n        d.show("Alice", 25);\n        d.show(30, "Bob");\n    }\n}',
    hint: "Order of parameters distinguishes methods",
  },
  {
    id: "polymorphism_4",
    topicId: "polymorphism",
    question: "Method overloading with type promotion.",
    mathSolution: "Automatic type promotion in overloading",
    codeSolution: 'public class Main {\n    static class Promo {\n        void show(int a) { System.out.println("int method: " + a); }\n        void show(double a) { System.out.println("double method: " + a); }\n        void show(byte a) { System.out.println("byte method: " + a); }\n    }\n    public static void main(String[] args) {\n        Promo p = new Promo();\n        p.show(10);\n        p.show(10.5f);\n        p.show(65);\n        p.show((byte)5);\n    }\n}',
    hint: "byte -> short -> int -> long -> float -> double",
  },
  {
    id: "polymorphism_5",
    topicId: "polymorphism",
    question: "Method overloading with varargs.",
    mathSolution: "Variable arguments as overloaded method",
    codeSolution: 'public class Main {\n    static class VarargsDemo {\n        void print(String... args) {\n            System.out.print("Varargs (" + args.length + "): ");\n            for(String s : args) System.out.print(s + " ");\n            System.out.println();\n        }\n        void print(String s1) { System.out.println("Single: " + s1); }\n        void print(String s1, String s2) { System.out.println("Two: " + s1 + " and " + s2); }\n    }\n    public static void main(String[] args) {\n        VarargsDemo v = new VarargsDemo();\n        v.print("Hello");\n        v.print("Hello", "World");\n        v.print("A", "B", "C");\n        v.print();\n    }\n}',
    hint: "Varargs is least specific in overloading",
  },
  {
    id: "polymorphism_6",
    topicId: "polymorphism",
    question: "Constructor overloading.",
    mathSolution: "Multiple constructors in same class",
    codeSolution: 'public class Main {\n    static class Employee {\n        int id; String name; double salary;\n        Employee() { this(0, "Unknown", 0.0); System.out.println("Default constructor"); }\n        Employee(int id) { this(id, "Unknown", 0.0); System.out.println("Constructor with id"); }\n        Employee(int id, String name) { this(id, name, 0.0); System.out.println("Constructor with id and name"); }\n        Employee(int id, String name, double salary) {\n            this.id = id; this.name = name; this.salary = salary;\n            System.out.println("Constructor with all fields");\n        }\n        void display() { System.out.println(id + ", " + name + ", $" + salary); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee();\n        Employee e2 = new Employee(101);\n        Employee e3 = new Employee(102, "Alice");\n        Employee e4 = new Employee(103, "Bob", 50000);\n        e1.display(); e2.display(); e3.display(); e4.display();\n    }\n}',
    hint: "Constructors can be overloaded like methods",
  },

  // RUNTIME POLYMORPHISM (METHOD OVERRIDING) (7)
  {
    id: "polymorphism_7",
    topicId: "polymorphism",
    question: "Basic runtime polymorphism with method overriding.",
    mathSolution: "Parent reference, child object",
    codeSolution: 'public class Main {\n    static class Animal { void sound() { System.out.println("Animal makes sound"); } }\n    static class Dog extends Animal { void sound() { System.out.println("Dog barks"); } }\n    static class Cat extends Animal { void sound() { System.out.println("Cat meows"); } }\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.sound();\n        a2.sound();\n        Animal[] animals = {new Dog(), new Cat(), new Animal()};\n        for(Animal a : animals) a.sound();\n    }\n}',
    hint: "Actual method called based on object at runtime",
  },
  {
    id: "polymorphism_8",
    topicId: "polymorphism",
    question: "Polymorphism with method parameters.",
    mathSolution: "Method accepts parent type, works with any child",
    codeSolution: 'public class Main {\n    static class Shape { void draw() { System.out.println("Drawing shape"); } }\n    static class Circle extends Shape { void draw() { System.out.println("Drawing circle"); } }\n    static class Rectangle extends Shape { void draw() { System.out.println("Drawing rectangle"); } }\n    static class Triangle extends Shape { void draw() { System.out.println("Drawing triangle"); } }\n    static class Canvas { void drawShape(Shape s) { s.draw(); } }\n    public static void main(String[] args) {\n        Canvas canvas = new Canvas();\n        canvas.drawShape(new Circle());\n        canvas.drawShape(new Rectangle());\n        canvas.drawShape(new Triangle());\n        canvas.drawShape(new Shape());\n    }\n}',
    hint: "Method works with any Shape subclass",
  },
  {
    id: "polymorphism_9",
    topicId: "polymorphism",
    question: "Polymorphic return types.",
    mathSolution: "Method returns parent type, can return any child",
    codeSolution: 'public class Main {\n    static class Animal { String type = "Animal"; }\n    static class Dog extends Animal { String breed = "Labrador"; }\n    static class Cat extends Animal { String color = "Black"; }\n    static class AnimalFactory {\n        Animal getAnimal(String type) {\n            if(type.equals("dog")) return new Dog();\n            if(type.equals("cat")) return new Cat();\n            return new Animal();\n        }\n    }\n    public static void main(String[] args) {\n        AnimalFactory factory = new AnimalFactory();\n        Animal a1 = factory.getAnimal("dog");\n        Animal a2 = factory.getAnimal("cat");\n        System.out.println("Type: " + a1.type);\n        if(a1 instanceof Dog) {\n            Dog d = (Dog) a1;\n            System.out.println("Dog breed: " + d.breed);\n        }\n        System.out.println("Type: " + a2.type);\n    }\n}',
    hint: "Return type can be parent, actual object can be child",
  },
  {
    id: "polymorphism_10",
    topicId: "polymorphism",
    question: "Dynamic method dispatch with superclass reference.",
    mathSolution: "Decision at runtime which method to call",
    codeSolution: 'public class Main {\n    static class Bank { double getRate() { return 0; } }\n    static class SBI extends Bank { double getRate() { return 8.5; } }\n    static class ICICI extends Bank { double getRate() { return 9.2; } }\n    static class HDFC extends Bank { double getRate() { return 8.9; } }\n    public static void main(String[] args) {\n        Bank b;\n        b = new SBI();\n        System.out.println("SBI Rate: " + b.getRate());\n        b = new ICICI();\n        System.out.println("ICICI Rate: " + b.getRate());\n        b = new HDFC();\n        System.out.println("HDFC Rate: " + b.getRate());\n    }\n}',
    hint: "Method resolution happens at runtime",
  },
  {
    id: "polymorphism_11",
    topicId: "polymorphism",
    question: "Polymorphism with abstract classes.",
    mathSolution: "Abstract methods enforce polymorphism",
    codeSolution: 'public class Main {\n    static abstract class Vehicle {\n        abstract void start();\n        abstract void stop();\n        void display() { System.out.println("This is a vehicle"); }\n    }\n    static class Car extends Vehicle {\n        void start() { System.out.println("Car started with key"); }\n        void stop() { System.out.println("Car stopped"); }\n    }\n    static class Bike extends Vehicle {\n        void start() { System.out.println("Bike started with kick"); }\n        void stop() { System.out.println("Bike stopped"); }\n    }\n    static class ElectricCar extends Vehicle {\n        void start() { System.out.println("Electric car started silently"); }\n        void stop() { System.out.println("Electric car stopped"); }\n    }\n    public static void main(String[] args) {\n        Vehicle[] vehicles = {new Car(), new Bike(), new ElectricCar()};\n        for(Vehicle v : vehicles) {\n            v.start();\n            v.display();\n            v.stop();\n            System.out.println();\n        }\n    }\n}',
    hint: "Abstract classes are designed for polymorphism",
  },
  {
    id: "polymorphism_12",
    topicId: "polymorphism",
    question: "Polymorphism with interfaces.",
    mathSolution: "Interface references can point to implementing classes",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Drawable { void draw(); }\n    static class Circle implements Drawable { public void draw() { System.out.println("Drawing circle"); } }\n    static class Rectangle implements Drawable { public void draw() { System.out.println("Drawing rectangle"); } }\n    static class Text implements Drawable { public void draw() { System.out.println("Drawing text"); } }\n    public static void main(String[] args) {\n        Drawable d1 = new Circle();\n        Drawable d2 = new Rectangle();\n        Drawable d3 = new Text();\n        d1.draw(); d2.draw(); d3.draw();\n        List<Drawable> list = Arrays.asList(new Circle(), new Rectangle(), new Text());\n        for(Drawable d : list) d.draw();\n    }\n}',
    hint: "Interfaces enable polymorphic behavior across unrelated classes",
  },
  {
    id: "polymorphism_13",
    topicId: "polymorphism",
    question: "Polymorphism with method overriding and super call.",
    mathSolution: "super to call parent's overridden method",
    codeSolution: 'public class Main {\n    static class Parent { void show() { System.out.println("Parent show"); } }\n    static class Child extends Parent { void show() { super.show(); System.out.println("Child show"); } }\n    static class GrandChild extends Child { void show() { super.show(); System.out.println("GrandChild show"); } }\n    public static void main(String[] args) {\n        Parent p = new GrandChild();\n        p.show();\n    }\n}',
    hint: "super can call immediate parent's method",
  },

  // DOWNCASTING AND INSTANCEOF (3)
  {
    id: "polymorphism_14",
    topicId: "polymorphism",
    question: "Safe downcasting using instanceof.",
    mathSolution: "Check type before casting",
    codeSolution: 'public class Main {\n    static class Employee { void work() { System.out.println("Employee working"); } }\n    static class Manager extends Employee { void manage() { System.out.println("Manager managing"); } }\n    static class Developer extends Employee { void code() { System.out.println("Developer coding"); } }\n    public static void main(String[] args) {\n        Employee emp = new Manager();\n        if(emp instanceof Manager) {\n            Manager m = (Manager) emp;\n            m.manage();\n            m.work();\n        }\n        if(emp instanceof Developer) {\n            Developer d = (Developer) emp;\n            d.code();\n        } else {\n            System.out.println("Not a developer");\n        }\n    }\n}',
    hint: "Always use instanceof before downcasting",
  },
  {
  id: "polymorphism_15",
  topicId: "polymorphism",
  question: "Pattern matching for instanceof (Java 16+).",
  mathSolution: "Modern instanceof with variable declaration",
  codeSolution: 'public class Main {\n    static class Animal { void sound() { System.out.println("Animal sound"); } }\n    static class Dog extends Animal { void bark() { System.out.println("Dog barking"); } }\n    static class Cat extends Animal { void meow() { System.out.println("Cat meowing"); } }\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        // Traditional instanceof (works on all Java versions)\n        if(a instanceof Dog) {\n            Dog d = (Dog) a;\n            d.bark();\n        }\n        if(a instanceof Cat) {\n            Cat c = (Cat) a;\n            c.meow();\n        } else {\n            System.out.println("Not a cat");\n        }\n        // Traditional ternary (no pattern matching)\n        String type = (a instanceof Dog) ? "It is a Dog" : "Not a dog";\n        System.out.println(type);\n    }\n}',
  hint: "Traditional instanceof with explicit casting (compatible with older Java)",
},
  {
    id: "polymorphism_16",
    topicId: "polymorphism",
    question: "ClassCastException with invalid downcasting.",
    mathSolution: "Understanding runtime type errors",
    codeSolution: 'public class Main {\n    static class Fruit {}\n    static class Apple extends Fruit { void makeAppleJuice() { System.out.println("Apple juice"); } }\n    static class Orange extends Fruit { void makeOrangeJuice() { System.out.println("Orange juice"); } }\n    public static void main(String[] args) {\n        Fruit f = new Apple();\n        Apple a = (Apple) f;\n        a.makeAppleJuice();\n        try {\n            Orange o = (Orange) f;\n            o.makeOrangeJuice();\n        } catch(ClassCastException e) {\n            System.out.println("Cannot cast Apple to Orange: " + e);\n        }\n        if(f instanceof Orange) {\n            Orange o = (Orange) f;\n            o.makeOrangeJuice();\n        } else {\n            System.out.println("Not an orange");\n        }\n    }\n}',
    hint: "Downcasting only works for actual object type",
  },

  // COVARIANT RETURN TYPES (2)
  {
    id: "polymorphism_17",
    topicId: "polymorphism",
    question: "Covariant return types in overridden methods.",
    mathSolution: "Override can return subtype of parent's return type",
    codeSolution: 'public class Main {\n    static class Animal { Animal reproduce() { System.out.println("Animal reproduces"); return new Animal(); } }\n    static class Dog extends Animal { Dog reproduce() { System.out.println("Dog gives birth to puppies"); return new Dog(); } }\n    static class Cat extends Animal { Cat reproduce() { System.out.println("Cat gives birth to kittens"); return new Cat(); } }\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        Dog puppy = dog.reproduce();\n        Animal animal = new Cat();\n        Cat kitten = (Cat) animal.reproduce();\n        System.out.println("Covariant returns work!");\n    }\n}',
    hint: "Covariant return types reduce need for casting",
  },
  {
  id: "polymorphism_18",
  topicId: "polymorphism",
  question: "Covariant return types with interfaces.",
  mathSolution: "Interface methods can have covariant returns",
  codeSolution: 'public class Main {\n    static class Animal {\n        Animal reproduce() {\n            System.out.println("Animal reproduces");\n            return new Animal();\n        }\n    }\n    static class Dog extends Animal {\n        @Override\n        Dog reproduce() {\n            System.out.println("Dog gives birth to puppies");\n            return new Dog();\n        }\n    }\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        Dog puppy = dog.reproduce(); // covariant return: Dog, not Animal\n        System.out.println("Covariant return works: " + puppy.getClass().getSimpleName());\n    }\n}',
  hint: "Overridden method can return a subtype of the parent's return type",
},

  // POLYMORPHISM WITH STATIC METHODS (2)
  {
    id: "polymorphism_19",
    topicId: "polymorphism",
    question: "Static methods are not polymorphic (method hiding).",
    mathSolution: "Static methods are resolved at compile-time",
    codeSolution: 'public class Main {\n    static class Parent {\n        static void staticMethod() { System.out.println("Parent static"); }\n        void instanceMethod() { System.out.println("Parent instance"); }\n    }\n    static class Child extends Parent {\n        static void staticMethod() { System.out.println("Child static"); }\n        void instanceMethod() { System.out.println("Child instance"); }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.staticMethod();   // Parent static (compile-time binding)\n        p.instanceMethod(); // Child instance (runtime binding)\n        Parent.staticMethod();\n        Child.staticMethod();\n    }\n}',
    hint: "Static methods are hidden, not overridden",
  },
  {
    id: "polymorphism_20",
    topicId: "polymorphism",
    question: "Polymorphism with static methods - best practices.",
    mathSolution: "Avoid calling static methods polymorphically",
    codeSolution: 'public class Main {\n    static class Utility {\n        static String getType() { return "Utility"; }\n    }\n    static class DatabaseUtility extends Utility {\n        static String getType() { return "DatabaseUtility"; }\n    }\n    static class BetterUtility {\n        String getType() { return "BetterUtility"; }\n    }\n    static class BetterDatabaseUtility extends BetterUtility {\n        String getType() { return "BetterDatabaseUtility"; }\n    }\n    public static void main(String[] args) {\n        Utility u = new DatabaseUtility();\n        System.out.println("Static call: " + u.getType()); // Utility.getType()\n        BetterUtility bu = new BetterDatabaseUtility();\n        System.out.println("Instance call: " + bu.getType()); // polymorphic\n    }\n}',
    hint: "Use instance methods for polymorphic behavior",
  },

  // POLYMORPHISM WITH FIELDS (2)
  {
    id: "polymorphism_21",
    topicId: "polymorphism",
    question: "Fields are not polymorphic (variable hiding).",
    mathSolution: "Field access based on reference type, not object",
    codeSolution: 'public class Main {\n    static class Parent { String name = "Parent"; int value = 100; }\n    static class Child extends Parent { String name = "Child"; int value = 200; }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        Child c = new Child();\n        System.out.println("p.name: " + p.name); // Parent\n        System.out.println("p.value: " + p.value); // 100\n        System.out.println("c.name: " + c.name); // Child\n        System.out.println("c.value: " + c.value); // 200\n        System.out.println("((Parent)c).name: " + ((Parent)c).name); // Parent\n    }\n}',
    hint: "Fields are resolved at compile-time, not runtime",
  },
  {
    id: "polymorphism_22",
    topicId: "polymorphism",
    question: "Use methods to access fields polymorphically.",
    mathSolution: "Getter methods can be overridden for polymorphic field access",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name = "Person";\n        String getName() { return name; }\n    }\n    static class Student extends Person {\n        private String name = "Student";\n        String getName() { return name; }\n        String getParentName() { return super.getName(); }\n    }\n    public static void main(String[] args) {\n        Person p = new Student();\n        System.out.println("Polymorphic name: " + p.getName()); // Student\n        Student s = new Student();\n        System.out.println("Child name: " + s.getName());\n        System.out.println("Parent name: " + s.getParentName());\n    }\n}',
    hint: "Use getter/setter methods for polymorphic behavior",
  },

  // PRACTICAL APPLICATIONS (3)
  {
    id: "polymorphism_23",
    topicId: "polymorphism",
    question: "Polymorphism in collections.",
    mathSolution: "Store different types in collection using parent type",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Payment { void pay(double amount); }\n    static class CreditCard implements Payment { public void pay(double amount) { System.out.println("Paid $" + amount + " using Credit Card"); } }\n    static class PayPal implements Payment { public void pay(double amount) { System.out.println("Paid $" + amount + " using PayPal"); } }\n    static class Cash implements Payment { public void pay(double amount) { System.out.println("Paid $" + amount + " in Cash"); } }\n    static class ShoppingCart {\n        List<Payment> payments = new ArrayList<>();\n        void addPaymentMethod(Payment p) { payments.add(p); }\n        void checkout(double total) {\n            System.out.println("Total: $" + total);\n            for(Payment p : payments) p.pay(total / payments.size());\n        }\n    }\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart();\n        cart.addPaymentMethod(new CreditCard());\n        cart.addPaymentMethod(new PayPal());\n        cart.addPaymentMethod(new Cash());\n        cart.checkout(300);\n    }\n}',
    hint: "Collections can hold different types via polymorphism",
  },
  {
    id: "polymorphism_24",
    topicId: "polymorphism",
    question: "Strategy pattern using polymorphism.",
    mathSolution: "Behavioral pattern using polymorphic interfaces",
    codeSolution: 'public class Main {\n    interface SortingStrategy { void sort(int[] arr); }\n    static class BubbleSort implements SortingStrategy { public void sort(int[] arr) { System.out.println("Sorting using Bubble Sort"); } }\n    static class QuickSort implements SortingStrategy { public void sort(int[] arr) { System.out.println("Sorting using Quick Sort"); } }\n    static class MergeSort implements SortingStrategy { public void sort(int[] arr) { System.out.println("Sorting using Merge Sort"); } }\n    static class Sorter {\n        private SortingStrategy strategy;\n        void setStrategy(SortingStrategy s) { strategy = s; }\n        void executeSort(int[] arr) { strategy.sort(arr); }\n    }\n    public static void main(String[] args) {\n        Sorter sorter = new Sorter();\n        int[] data = {5,2,8,1,9};\n        sorter.setStrategy(new BubbleSort());\n        sorter.executeSort(data);\n        sorter.setStrategy(new QuickSort());\n        sorter.executeSort(data);\n        sorter.setStrategy(new MergeSort());\n        sorter.executeSort(data);\n    }\n}',
    hint: "Polymorphism enables strategy pattern",
  },
  {
    id: "polymorphism_25",
    topicId: "polymorphism",
    question: "Factory pattern returning polymorphic types.",
    mathSolution: "Factory creates objects of different types",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Notification { void send(String message); }\n    static class EmailNotification implements Notification { public void send(String message) { System.out.println("Sending Email: " + message); } }\n    static class SMSNotification implements Notification { public void send(String message) { System.out.println("Sending SMS: " + message); } }\n    static class PushNotification implements Notification { public void send(String message) { System.out.println("Sending Push: " + message); } }\n    static class NotificationFactory {\n        Notification createNotification(String type) {\n            if(type.equals("email")) return new EmailNotification();\n            if(type.equals("sms")) return new SMSNotification();\n            if(type.equals("push")) return new PushNotification();\n            throw new IllegalArgumentException("Unknown type: " + type);\n        }\n    }\n    public static void main(String[] args) {\n        NotificationFactory factory = new NotificationFactory();\n        String[] types = {"email", "sms", "push"};\n        for(String type : types) {\n            Notification n = factory.createNotification(type);\n            n.send("Hello " + type);\n        }\n        List<Notification> notifications = new ArrayList<>();\n        notifications.add(factory.createNotification("email"));\n        notifications.add(factory.createNotification("sms"));\n        notifications.add(factory.createNotification("push"));\n        for(Notification n : notifications) n.send("Broadcast message");\n    }\n}',
    hint: "Factory pattern uses polymorphism extensively",
  },
  {
  "id": "polymorphism_26",
  "topicId": "polymorphism",
  "question": "Demonstrate method overloading where one method accepts a `String` and another accepts an `Object`. Show how Java chooses the most specific method.",
  "mathSolution": "Java selects the most specific method during compile-time based on argument types.",
  "codeSolution": "public class Main {\n    static class OverloadDemo {\n        void print(Object obj) { System.out.println(\"Object: \" + obj); }\n        void print(String str) { System.out.println(\"String: \" + str); }\n    }\n    public static void main(String[] args) {\n        OverloadDemo demo = new OverloadDemo();\n        demo.print(\"Hello\");      // calls String version\n        demo.print(42);            // autoboxed to Integer, calls Object version\n    }\n}",
  "hint": "String is more specific than Object."
},
  {
    "id": "polymorphism_27",
    "topicId": "polymorphism",
    "question": "Write a method that accepts a `Number` and uses instanceof to check its exact subtype (Integer, Double). Demonstrate runtime type identification.",
    "mathSolution": "Use `instanceof` to differentiate between subtypes at runtime.",
    "codeSolution": "public class Main {\n    static void process(Number n) {\n        if (n instanceof Integer) {\n            System.out.println(\"Integer: \" + n.intValue());\n        } else if (n instanceof Double) {\n            System.out.println(\"Double: \" + n.doubleValue());\n        } else {\n            System.out.println(\"Other Number: \" + n);\n        }\n    }\n    public static void main(String[] args) {\n        process(100);\n        process(3.14);\n        process(99L);\n    }\n}",
    "hint": "Use instanceof to check exact type."
  },
  {
    "id": "polymorphism_28",
    "topicId": "polymorphism",
    "question": "Create a class hierarchy: `Vehicle` (abstract), `Car`, `Bike`. Override a method `getMaxSpeed()`. Store objects in an array and call the method polymorphically.",
    "mathSolution": "Abstract method forces subclasses to provide implementation, demonstrating runtime polymorphism.",
    "codeSolution": "public class Main {\n    static abstract class Vehicle {\n        abstract int getMaxSpeed();\n    }\n    static class Car extends Vehicle {\n        int getMaxSpeed() { return 180; }\n    }\n    static class Bike extends Vehicle {\n        int getMaxSpeed() { return 120; }\n    }\n    public static void main(String[] args) {\n        Vehicle[] vehicles = { new Car(), new Bike() };\n        for (Vehicle v : vehicles) {\n            System.out.println(v.getClass().getSimpleName() + \" max speed: \" + v.getMaxSpeed());\n        }\n    }\n}",
    "hint": "Abstract method forces overriding."
  },
  {
    "id": "polymorphism_29",
    "topicId": "polymorphism",
    "question": "Write a generic method that accepts a list of any type and prints each element using polymorphism. Use wildcard `? extends Object`.",
    "mathSolution": "Unbounded wildcard works with any list type.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static void printList(List<?> list) {\n        for (Object elem : list) {\n            System.out.println(elem);\n        }\n    }\n    public static void main(String[] args) {\n        printList(Arrays.asList(1, 2, 3));\n        printList(Arrays.asList(\"A\", \"B\", \"C\"));\n    }\n}",
    "hint": "List<?> works with any type."
  },
  {
    "id": "polymorphism_30",
    "topicId": "polymorphism",
    "question": "Create an interface `ComparableShape` with method `double area()`. Implement two classes `Circle` and `Rectangle`. Write a method that returns the shape with larger area using polymorphism.",
    "mathSolution": "Interface defines contract; method compares via area.",
    "codeSolution": "public class Main {\n    interface ComparableShape {\n        double area();\n    }\n    static class Circle implements ComparableShape {\n        double radius;\n        Circle(double r) { radius = r; }\n        public double area() { return Math.PI * radius * radius; }\n    }\n    static class Rectangle implements ComparableShape {\n        double l, w;\n        Rectangle(double l, double w) { this.l = l; this.w = w; }\n        public double area() { return l * w; }\n    }\n    static ComparableShape larger(ComparableShape a, ComparableShape b) {\n        return a.area() > b.area() ? a : b;\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5);\n        Rectangle r = new Rectangle(10, 2);\n        ComparableShape larger = larger(c, r);\n        System.out.println(\"Larger area: \" + larger.area());\n    }\n}",
    "hint": "Interface enables polymorphic comparison."
  },
  {
    "id": "polymorphism_31",
    "topicId": "polymorphism",
    "question": "Write a method that takes a `Collection<? extends Number>` and returns the average as double. Show it works with `List<Integer>` and `List<Double>`.",
    "mathSolution": "Upper bounded wildcard allows reading numbers.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static double average(Collection<? extends Number> coll) {\n        if (coll.isEmpty()) return 0.0;\n        double sum = 0.0;\n        for (Number n : coll) sum += n.doubleValue();\n        return sum / coll.size();\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(1, 2, 3, 4, 5);\n        List<Double> dbls = Arrays.asList(1.5, 2.5, 3.5);\n        System.out.println(\"Average ints: \" + average(ints));\n        System.out.println(\"Average doubles: \" + average(dbls));\n    }\n}",
    "hint": "Use `? extends Number` for reading numbers."
  },
  {
    "id": "polymorphism_32",
    "topicId": "polymorphism",
    "question": "Create a method that accepts a `Supplier<T>` and returns a `T` instance. Use lambda to supply different types (String, Integer).",
    "mathSolution": "Supplier is a functional interface that provides an instance.",
    "codeSolution": "import java.util.function.Supplier;\npublic class Main {\n    static <T> T getInstance(Supplier<T> supplier) {\n        return supplier.get();\n    }\n    public static void main(String[] args) {\n        String str = getInstance(() -> \"Hello\");\n        Integer num = getInstance(() -> 42);\n        System.out.println(str);\n        System.out.println(num);\n    }\n}",
    "hint": "Supplier lambda returns new objects."
  },
  {
    "id": "polymorphism_33",
    "topicId": "polymorphism",
    "question": "Demonstrate that private methods are not overridden. Create a parent class with a private method, and a child class with same signature. Show that parent's method is not visible.",
    "mathSolution": "Private methods are not inherited and cannot be overridden.",
    "codeSolution": "public class Main {\n    static class Parent {\n        private void show() { System.out.println(\"Parent private\"); }\n        public void callShow() { show(); }\n    }\n    static class Child extends Parent {\n        // This is a new method, not overriding\n        private void show() { System.out.println(\"Child private\"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.callShow(); // calls Parent's show (private)\n    }\n}",
    "hint": "Private methods are hidden, not overridden."
  },
  {
    "id": "polymorphism_34",
    "topicId": "polymorphism",
    "question": "Use method overloading with `int` and `Integer` parameters. Show which one gets called when passing an `int` and when passing an `Integer`.",
    "mathSolution": "Primitive int matches int method; autoboxing calls Integer method only if int method is absent.",
    "codeSolution": "public class Main {\n    static void test(int x) { System.out.println(\"int version: \" + x); }\n    static void test(Integer x) { System.out.println(\"Integer version: \" + x); }\n    public static void main(String[] args) {\n        test(5);      // calls int\n        test(Integer.valueOf(10)); // calls Integer\n    }\n}",
    "hint": "Exact match before autoboxing."
  },
  {
    "id": "polymorphism_35",
    "topicId": "polymorphism",
    "question": "Write a polymorphic method that accepts a `List<? super Integer>` and adds numbers 1 to 5 to it. Show it works with `List<Number>` and `List<Object>`.",
    "mathSolution": "Lower bounded wildcard allows adding Integer or its subclasses.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static void addNumbers(List<? super Integer> list) {\n        for (int i = 1; i <= 5; i++) list.add(i);\n    }\n    public static void main(String[] args) {\n        List<Number> numList = new ArrayList<>();\n        List<Object> objList = new ArrayList<>();\n        addNumbers(numList);\n        addNumbers(objList);\n        System.out.println(\"Numbers: \" + numList);\n        System.out.println(\"Objects: \" + objList);\n    }\n}",
    "hint": "`? super Integer` allows adding Integers."
  },
  {
    "id": "polymorphism_36",
    "topicId": "polymorphism",
    "question": "Create a method that returns a `Function<T, R>` that converts a string to its length (String -> Integer) and another that converts integer to string (Integer -> String). Compose them.",
    "mathSolution": "Function composition using `andThen`.",
    "codeSolution": "import java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        Function<String, Integer> length = s -> s.length();\n        Function<Integer, String> toString = n -> \"Number: \" + n;\n        Function<String, String> lengthToString = length.andThen(toString);\n        System.out.println(lengthToString.apply(\"Hello\"));\n    }\n}",
    "hint": "Use `andThen` to chain functions."
  },
  {
    "id": "polymorphism_37",
    "topicId": "polymorphism",
    "question": "Write a polymorphic method that takes a `Consumer<T>` and applies it to each element of a list. Use it with different consumers (print, square).",
    "mathSolution": "Consumer is a functional interface for side effects.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Consumer;\npublic class Main {\n    static <T> void forEach(List<T> list, Consumer<T> consumer) {\n        for (T t : list) consumer.accept(t);\n    }\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1, 2, 3);\n        forEach(nums, n -> System.out.println(\"Value: \" + n));\n        List<String> words = Arrays.asList(\"a\", \"bc\", \"def\");\n        forEach(words, s -> System.out.println(\"Length: \" + s.length()));\n    }\n}",
    "hint": "Consumer can perform any action."
  },
  {
    "id": "polymorphism_38",
    "topicId": "polymorphism",
    "question": "Demonstrate that a subclass can return a more specific type when overriding a method (covariant return). Example: Parent method returns `Number`, Child returns `Integer`.",
    "mathSolution": "Covariant return allows narrowing return type.",
    "codeSolution": "public class Main {\n    static class Parent {\n        Number getValue() { return 10; }\n    }\n    static class Child extends Parent {\n        @Override\n        Integer getValue() { return 20; }\n    }\n    public static void main(String[] args) {\n        Parent p = new Child();\n        System.out.println(p.getValue());\n    }\n}",
    "hint": "Overriding method can return a subtype of the parent's return type."
  },
  {
    "id": "polymorphism_39",
    "topicId": "polymorphism",
    "question": "Write a method that accepts a `Predicate<T>` and filters a list, returning a new list. Use it to filter even numbers and strings starting with 'A'.",
    "mathSolution": "Predicate tests condition; filter collects matching elements.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Predicate;\npublic class Main {\n    static <T> List<T> filter(List<T> list, Predicate<T> pred) {\n        List<T> result = new ArrayList<>();\n        for (T t : list) if (pred.test(t)) result.add(t);\n        return result;\n    }\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(1,2,3,4,5,6);\n        System.out.println(filter(nums, n -> n % 2 == 0));\n        List<String> words = Arrays.asList(\"Apple\", \"Banana\", \"Avocado\");\n        System.out.println(filter(words, s -> s.startsWith(\"A\")));\n    }\n}",
    "hint": "Predicate returns boolean for each element."
  },
  {
    "id": "polymorphism_40",
    "topicId": "polymorphism",
    "question": "Create an enum `Operation` with constants `PLUS`, `MINUS`, `TIMES`, `DIVIDE`. Each constant implements an abstract method `apply(int a, int b)`. Use polymorphism to perform arithmetic.",
    "mathSolution": "Enum with abstract method per constant.",
    "codeSolution": "public class Main {\n    enum Operation {\n        PLUS { int apply(int a, int b) { return a + b; } },\n        MINUS { int apply(int a, int b) { return a - b; } },\n        TIMES { int apply(int a, int b) { return a * b; } },\n        DIVIDE { int apply(int a, int b) { return a / b; } };\n        abstract int apply(int a, int b);\n    }\n    public static void main(String[] args) {\n        int x = 10, y = 5;\n        for (Operation op : Operation.values()) {\n            System.out.println(op + \": \" + op.apply(x, y));\n        }\n    }\n}",
    "hint": "Enum constants can have their own method implementations."
  },
  //abstrction
   {
    id: "abstraction_1",
    topicId: "abstraction",
    question: "Create an abstract class with abstract method.",
    mathSolution: "Abstract class cannot be instantiated, abstract methods have no body",
    codeSolution: 'public class Main {\n    static abstract class Vehicle {\n        abstract void start();\n        void stop() { System.out.println("Vehicle stopping"); }\n    }\n    static class Car extends Vehicle {\n        void start() { System.out.println("Car starting with key"); }\n    }\n    static class Bike extends Vehicle {\n        void start() { System.out.println("Bike starting with kick"); }\n    }\n    public static void main(String[] args) {\n        Car car = new Car();\n        car.start();\n        car.stop();\n        Bike bike = new Bike();\n        bike.start();\n        bike.stop();\n    }\n}',
    hint: "Abstract methods must be implemented by concrete subclasses",
  },
  {
    id: "abstraction_2",
    topicId: "abstraction",
    question: "Abstract class with constructor.",
    mathSolution: "Abstract classes can have constructors",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        String color;\n        Shape(String color) { this.color = color; System.out.println("Shape constructor called with color: " + color); }\n        abstract double area();\n        void displayColor() { System.out.println("Color: " + color); }\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(String color, double radius) { super(color); this.radius = radius; System.out.println("Circle constructor called"); }\n        double area() { return Math.PI * radius * radius; }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle("Red", 5);\n        c.displayColor();\n        System.out.println("Area: " + c.area());\n    }\n}',
    hint: "Abstract class constructors are called via super()",
  },
  {
    id: "abstraction_3",
    topicId: "abstraction",
    question: "Abstract class with concrete methods.",
    mathSolution: "Abstract classes can provide default implementations",
    codeSolution: 'public class Main {\n    static abstract class Database {\n        abstract void connect();\n        abstract void disconnect();\n        void executeQuery(String sql) {\n            connect();\n            System.out.println("Executing: " + sql);\n            disconnect();\n        }\n        void log(String message) { System.out.println("[LOG] " + message); }\n    }\n    static class MySQLDatabase extends Database {\n        void connect() { System.out.println("Connecting to MySQL database"); }\n        void disconnect() { System.out.println("Disconnecting from MySQL"); }\n    }\n    static class PostgreSQLDatabase extends Database {\n        void connect() { System.out.println("Connecting to PostgreSQL database"); }\n        void disconnect() { System.out.println("Disconnecting from PostgreSQL"); }\n    }\n    public static void main(String[] args) {\n        MySQLDatabase mysql = new MySQLDatabase();\n        mysql.executeQuery("SELECT * FROM users");\n        mysql.log("Query executed");\n        System.out.println();\n        PostgreSQLDatabase pg = new PostgreSQLDatabase();\n        pg.executeQuery("SELECT * FROM products");\n    }\n}',
    hint: "Concrete methods provide common functionality",
  },
  {
    id: "abstraction_4",
    topicId: "abstraction",
    question: "Abstract class with final methods.",
    mathSolution: "Final methods in abstract class cannot be overridden",
    codeSolution: 'public class Main {\n    static abstract class Template {\n        final void performTask() {\n            step1();\n            step2();\n            step3();\n        }\n        abstract void step1();\n        abstract void step2();\n        void step3() { System.out.println("Step 3: Default implementation"); }\n    }\n    static class DataProcessor extends Template {\n        void step1() { System.out.println("DataProcessor: Loading data"); }\n        void step2() { System.out.println("DataProcessor: Processing data"); }\n    }\n    static class FileProcessor extends Template {\n        void step1() { System.out.println("FileProcessor: Opening file"); }\n        void step2() { System.out.println("FileProcessor: Reading file"); }\n        void step3() { System.out.println("FileProcessor: Closing file"); }\n    }\n    public static void main(String[] args) {\n        DataProcessor dp = new DataProcessor();\n        dp.performTask();\n        System.out.println();\n        FileProcessor fp = new FileProcessor();\n        fp.performTask();\n    }\n}',
    hint: "final methods in abstract class define fixed algorithm",
  },
  {
    id: "abstraction_5",
    topicId: "abstraction",
    question: "Abstract class with static methods.",
    mathSolution: "Static methods in abstract class",
    codeSolution: 'public class Main {\n    static abstract class Calculator {\n        static int add(int a, int b) { return a + b; }\n        static int multiply(int a, int b) { return a * b; }\n        abstract double calculate(double x);\n    }\n    static class SquareCalculator extends Calculator {\n        double calculate(double x) { return x * x; }\n    }\n    static class CubeCalculator extends Calculator {\n        double calculate(double x) { return x * x * x; }\n    }\n    public static void main(String[] args) {\n        System.out.println("Add: " + Calculator.add(10, 20));\n        System.out.println("Multiply: " + Calculator.multiply(5, 6));\n        SquareCalculator sq = new SquareCalculator();\n        System.out.println("Square of 5: " + sq.calculate(5));\n        CubeCalculator cb = new CubeCalculator();\n        System.out.println("Cube of 3: " + cb.calculate(3));\n    }\n}',
    hint: "Static methods belong to class, not instance",
  },

  // INTERFACES - BASIC (5)
  {
    id: "abstraction_6",
    topicId: "abstraction",
    question: "Create and implement a simple interface.",
    mathSolution: "Interface defines contract, classes implement",
    codeSolution: 'public class Main {\n    interface Drawable {\n        void draw();\n        int VERSION = 1;\n    }\n    static class Circle implements Drawable {\n        public void draw() { System.out.println("Drawing circle"); }\n    }\n    static class Rectangle implements Drawable {\n        public void draw() { System.out.println("Drawing rectangle"); }\n    }\n    public static void main(String[] args) {\n        Drawable d1 = new Circle();\n        Drawable d2 = new Rectangle();\n        d1.draw();\n        d2.draw();\n        System.out.println("Version: " + Drawable.VERSION);\n    }\n}',
    hint: "Interface methods are implicitly public abstract",
  },
  {
    id: "abstraction_7",
    topicId: "abstraction",
    question: "Implement multiple interfaces.",
    mathSolution: "A class can implement multiple interfaces",
    codeSolution: 'public class Main {\n    interface Flyable { void fly(); }\n    interface Swimmable { void swim(); }\n    interface Runnable { void run(); }\n    static class Duck implements Flyable, Swimmable, Runnable {\n        public void fly() { System.out.println("Duck flying"); }\n        public void swim() { System.out.println("Duck swimming"); }\n        public void run() { System.out.println("Duck running"); }\n    }\n    static class Plane implements Flyable {\n        public void fly() { System.out.println("Plane flying"); }\n    }\n    public static void main(String[] args) {\n        Duck d = new Duck();\n        d.fly();\n        d.swim();\n        d.run();\n        Plane p = new Plane();\n        p.fly();\n    }\n}',
    hint: "Multiple inheritance of type in Java",
  },
  {
    id: "abstraction_8",
    topicId: "abstraction",
    question: "Interface extending another interface.",
    mathSolution: "Interfaces can extend multiple interfaces",
    codeSolution: 'public class Main {\n    interface BasicAnimal { void eat(); void sleep(); }\n    interface Pet { void play(); }\n    interface GuardDog extends BasicAnimal { void guard(); }\n    interface FriendlyDog extends BasicAnimal, Pet { void wagTail(); }\n    static class Labrador implements FriendlyDog {\n        public void eat() { System.out.println("Labrador eating"); }\n        public void sleep() { System.out.println("Labrador sleeping"); }\n        public void play() { System.out.println("Labrador playing"); }\n        public void wagTail() { System.out.println("Labrador wagging tail"); }\n    }\n    static class GermanShepherd implements GuardDog {\n        public void eat() { System.out.println("German Shepherd eating"); }\n        public void sleep() { System.out.println("German Shepherd sleeping"); }\n        public void guard() { System.out.println("German Shepherd guarding"); }\n    }\n    public static void main(String[] args) {\n        Labrador lab = new Labrador();\n        lab.eat();\n        lab.play();\n        lab.wagTail();\n        GermanShepherd gs = new GermanShepherd();\n        gs.guard();\n    }\n}',
    hint: "Interface inheritance builds complex contracts",
  },
  {
    id: "abstraction_9",
    topicId: "abstraction",
    question: "Default methods in interfaces (Java 8+).",
    mathSolution: "Default methods provide implementation in interfaces",
    codeSolution: 'public class Main {\n    interface Logger {\n        void log(String message);\n        default void logInfo(String message) { log("[INFO] " + message); }\n        default void logError(String message) { log("[ERROR] " + message); }\n        static void logSystem(String message) { System.out.println("[SYSTEM] " + message); }\n    }\n    static class ConsoleLogger implements Logger {\n        public void log(String message) { System.out.println("Console: " + message); }\n    }\n    static class FileLogger implements Logger {\n        public void log(String message) { System.out.println("File: " + message); }\n        public void logInfo(String message) { log("[FILE-INFO] " + message); }\n    }\n    public static void main(String[] args) {\n        ConsoleLogger console = new ConsoleLogger();\n        console.logInfo("Application started");\n        console.logError("Null pointer exception");\n        FileLogger file = new FileLogger();\n        file.logInfo("Data saved");\n        Logger.logSystem("System check");\n    }\n}',
    hint: "Default methods add functionality without breaking existing code",
  },
  {
    id: "abstraction_10",
    topicId: "abstraction",
    question: "Private methods in interfaces (Java 9+).",
    mathSolution: "Private methods help share code between default methods",
    codeSolution: 'public class Main {\n    interface PaymentProcessor {\n        void processPayment(double amount);\n        default void processCardPayment(double amount) {\n            validateAmount(amount);\n            logTransaction("CARD", amount);\n            processPayment(amount);\n        }\n        default void processUPIPayment(double amount) {\n            validateAmount(amount);\n            logTransaction("UPI", amount);\n            processPayment(amount);\n        }\n        private void validateAmount(double amount) {\n            if(amount <= 0) throw new IllegalArgumentException("Invalid amount");\n            System.out.println("Amount validated: $" + amount);\n        }\n        private static void logTransaction(String type, double amount) {\n            System.out.println(type + " transaction of $" + amount + " initiated");\n        }\n    }\n    static class PayPalProcessor implements PaymentProcessor {\n        public void processPayment(double amount) { System.out.println("Processing payment via PayPal"); }\n    }\n    public static void main(String[] args) {\n        PayPalProcessor pp = new PayPalProcessor();\n        pp.processCardPayment(100.50);\n        pp.processUPIPayment(75.25);\n    }\n}',
    hint: "Private methods encapsulate common logic in interfaces",
  },

  // ABSTRACT CLASS VS INTERFACE (4)
  {
    id: "abstraction_11",
    topicId: "abstraction",
    question: "Abstract class vs Interface - when to use which.",
    mathSolution: "Abstract class for common base, interface for contract",
    codeSolution: 'public class Main {\n    static abstract class Bird {\n        String name; int age;\n        Bird(String name, int age) { this.name = name; this.age = age; }\n        abstract void makeSound();\n        void eat() { System.out.println(name + " is eating"); }\n    }\n    interface Flyable { void fly(); }\n    interface Singable { void sing(); }\n    interface Swimmable { void swim(); }\n    static class Sparrow extends Bird implements Flyable, Singable {\n        Sparrow(String name, int age) { super(name, age); }\n        void makeSound() { System.out.println(name + " chirps"); }\n        public void fly() { System.out.println(name + " flies fast"); }\n        public void sing() { System.out.println(name + " sings sweetly"); }\n    }\n    static class Penguin extends Bird implements Swimmable {\n        Penguin(String name, int age) { super(name, age); }\n        void makeSound() { System.out.println(name + " honks"); }\n        public void swim() { System.out.println(name + " swims"); }\n    }\n    public static void main(String[] args) {\n        Sparrow s = new Sparrow("Jack", 2);\n        s.makeSound();\n        s.fly();\n        s.sing();\n        s.eat();\n        Penguin p = new Penguin("Penny", 3);\n        p.makeSound();\n        p.swim();\n    }\n}',
    hint: "Abstract class: is-a relationship; Interface: can-do relationship",
  },
  {
    id: "abstraction_12",
    topicId: "abstraction",
    question: "Abstract class with both abstract and concrete methods.",
    mathSolution: "Abstract class provides partial implementation",
    codeSolution: 'public class Main {\n    static abstract class ReportGenerator {\n        public final void generateReport() {\n            openFile();\n            writeHeader();\n            writeBody();\n            writeFooter();\n            closeFile();\n        }\n        private void openFile() { System.out.println("Opening report file"); }\n        private void closeFile() { System.out.println("Closing report file"); }\n        protected abstract void writeHeader();\n        protected abstract void writeBody();\n        protected void writeFooter() { System.out.println("Writing default footer"); }\n    }\n    static class PDFReport extends ReportGenerator {\n        protected void writeHeader() { System.out.println("PDF Header with logo"); }\n        protected void writeBody() { System.out.println("PDF Body with tables"); }\n    }\n    static class CSVReport extends ReportGenerator {\n        protected void writeHeader() { System.out.println("CSV Header: ID,Name,Amount"); }\n        protected void writeBody() { System.out.println("CSV Body: 1,John,100.50"); }\n        protected void writeFooter() { System.out.println("CSV Footer: Total rows: 1"); }\n    }\n    public static void main(String[] args) {\n        PDFReport pdf = new PDFReport();\n        pdf.generateReport();\n        System.out.println();\n        CSVReport csv = new CSVReport();\n        csv.generateReport();\n    }\n}',
    hint: "Template method pattern uses abstract class",
  },
  {
    id: "abstraction_13",
    topicId: "abstraction",
    question: "Interface with default, static, and private methods.",
    mathSolution: "Modern interfaces have multiple method types",
    codeSolution: 'public class Main {\n    interface Calculator {\n        int calculate(int x, int y);\n        default int add(int a, int b) { log("Adding " + a + " and " + b); return a + b; }\n        default int multiply(int a, int b) { log("Multiplying " + a + " and " + b); return a * b; }\n        private void log(String operation) { System.out.println("[LOG] " + operation); }\n        static void showVersion() { System.out.println("Calculator version 1.0"); }\n    }\n    static class SimpleCalculator implements Calculator {\n        public int calculate(int x, int y) { return x + y; }\n        public int multiply(int a, int b) { return a * b * 2; }\n    }\n    public static void main(String[] args) {\n        SimpleCalculator calc = new SimpleCalculator();\n        System.out.println("Add: " + calc.add(5, 3));\n        System.out.println("Multiply: " + calc.multiply(5, 3));\n        System.out.println("Calculate: " + calc.calculate(10, 20));\n        Calculator.showVersion();\n    }\n}',
    hint: "Interfaces evolved to include implementation",
  },
  {
    id: "abstraction_14",
    topicId: "abstraction",
    question: "Diamond problem with default methods.",
    mathSolution: "Resolving multiple interface inheritance conflict",
    codeSolution: 'public class Main {\n    interface A { default void show() { System.out.println("A show"); } }\n    interface B { default void show() { System.out.println("B show"); } }\n    interface C extends A, B {\n        default void show() { A.super.show(); B.super.show(); System.out.println("C show"); }\n    }\n    static class D implements A, B {\n        public void show() { A.super.show(); System.out.println("D show"); }\n    }\n    static class E implements C {} // inherits C\'s resolved show\n    public static void main(String[] args) {\n        C c = new C() {};\n        c.show();\n        System.out.println();\n        D d = new D();\n        d.show();\n        System.out.println();\n        E e = new E();\n        e.show();\n    }\n}',
    hint: "Use super to call specific interface default method",
  },

  // ABSTRACTION IN REAL-WORLD SCENARIOS (5)
  {
    id: "abstraction_15",
    topicId: "abstraction",
    question: "Data Access Object (DAO) pattern with abstraction.",
    mathSolution: "Abstract DAO for database operations",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class User {\n        int id; String name; String email;\n        User(int id, String n, String e) { this.id = id; name = n; email = e; }\n        public String toString() { return id + ": " + name + " <" + email + ">"; }\n    }\n    interface UserDAO {\n        void save(User user);\n        User findById(int id);\n        List<User> findAll();\n        void delete(int id);\n        void update(User user);\n    }\n    static class InMemoryUserDAO implements UserDAO {\n        private Map<Integer, User> database = new HashMap<>();\n        private int nextId = 1;\n        public void save(User user) { user.id = nextId++; database.put(user.id, user); System.out.println("Saved: " + user); }\n        public User findById(int id) { return database.get(id); }\n        public List<User> findAll() { return new ArrayList<>(database.values()); }\n        public void delete(int id) { database.remove(id); }\n        public void update(User user) { database.put(user.id, user); }\n    }\n    public static void main(String[] args) {\n        UserDAO userDAO = new InMemoryUserDAO();\n        userDAO.save(new User(0, "Alice", "alice@email.com"));\n        userDAO.save(new User(0, "Bob", "bob@email.com"));\n        System.out.println("All users: " + userDAO.findAll());\n        User user = userDAO.findById(1);\n        System.out.println("Found: " + user);\n        userDAO.delete(2);\n        System.out.println("After delete: " + userDAO.findAll());\n    }\n}',
    hint: "Abstraction allows swapping implementations easily",
  },
  {
    id: "abstraction_16",
    topicId: "abstraction",
    question: "Strategy pattern using interfaces.",
    mathSolution: "Different algorithms through abstraction",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface CompressionStrategy {\n        byte[] compress(byte[] data);\n        String getAlgorithmName();\n    }\n    static class ZipCompression implements CompressionStrategy {\n        public byte[] compress(byte[] data) { System.out.println("Compressing using ZIP algorithm"); return data; }\n        public String getAlgorithmName() { return "ZIP"; }\n    }\n    static class GzipCompression implements CompressionStrategy {\n        public byte[] compress(byte[] data) { System.out.println("Compressing using GZIP algorithm"); return data; }\n        public String getAlgorithmName() { return "GZIP"; }\n    }\n    static class RarCompression implements CompressionStrategy {\n        public byte[] compress(byte[] data) { System.out.println("Compressing using RAR algorithm"); return data; }\n        public String getAlgorithmName() { return "RAR"; }\n    }\n    static class FileCompressor {\n        private CompressionStrategy strategy;\n        void setStrategy(CompressionStrategy s) { strategy = s; }\n        void compressFile(String filename, byte[] data) {\n            System.out.println("Compressing " + filename + " using " + strategy.getAlgorithmName());\n            byte[] compressed = strategy.compress(data);\n            System.out.println("Compression complete");\n        }\n    }\n    public static void main(String[] args) {\n        FileCompressor compressor = new FileCompressor();\n        byte[] data = "Sample file content".getBytes();\n        compressor.setStrategy(new ZipCompression());\n        compressor.compressFile("document.txt", data);\n        compressor.setStrategy(new GzipCompression());\n        compressor.compressFile("image.jpg", data);\n        compressor.setStrategy(new RarCompression());\n        compressor.compressFile("backup.dat", data);\n    }\n}',
    hint: "Strategy pattern encapsulates interchangeable algorithms",
  },
  {
    id: "abstraction_17",
    topicId: "abstraction",
    question: "Factory pattern with abstract product.",
    mathSolution: "Abstract factory creates abstract products",
    codeSolution: 'public class Main {\n    interface Button { void render(); void onClick(); }\n    static class WindowsButton implements Button {\n        public void render() { System.out.println("Rendering Windows style button"); }\n        public void onClick() { System.out.println("Windows button clicked"); }\n    }\n    static class MacButton implements Button {\n        public void render() { System.out.println("Rendering Mac style button"); }\n        public void onClick() { System.out.println("Mac button clicked"); }\n    }\n    static class LinuxButton implements Button {\n        public void render() { System.out.println("Rendering Linux style button"); }\n        public void onClick() { System.out.println("Linux button clicked"); }\n    }\n    interface GUIFactory { Button createButton(); }\n    static class WindowsFactory implements GUIFactory { public Button createButton() { return new WindowsButton(); } }\n    static class MacFactory implements GUIFactory { public Button createButton() { return new MacButton(); } }\n    static class LinuxFactory implements GUIFactory { public Button createButton() { return new LinuxButton(); } }\n    public static void main(String[] args) {\n        GUIFactory factory;\n        String os = System.getProperty("os.name").toLowerCase();\n        if(os.contains("win")) factory = new WindowsFactory();\n        else if(os.contains("mac")) factory = new MacFactory();\n        else factory = new LinuxFactory();\n        Button button = factory.createButton();\n        button.render();\n        button.onClick();\n    }\n}',
    hint: "Abstract factory creates families of related objects",
  },
  {
    id: "abstraction_18",
    topicId: "abstraction",
    question: "Adapter pattern using interfaces.",
    mathSolution: "Adapt one interface to another",
    codeSolution: 'public class Main {\n    interface MediaPlayer { void play(String audioType, String fileName); }\n    interface AdvancedMediaPlayer { void playVlc(String fileName); void playMp4(String fileName); }\n    static class VlcPlayer implements AdvancedMediaPlayer {\n        public void playVlc(String fileName) { System.out.println("Playing vlc file: " + fileName); }\n        public void playMp4(String fileName) { /* do nothing */ }\n    }\n    static class Mp4Player implements AdvancedMediaPlayer {\n        public void playVlc(String fileName) { /* do nothing */ }\n        public void playMp4(String fileName) { System.out.println("Playing mp4 file: " + fileName); }\n    }\n    static class MediaAdapter implements MediaPlayer {\n        AdvancedMediaPlayer advancedMusicPlayer;\n        MediaAdapter(String audioType) {\n            if(audioType.equalsIgnoreCase("vlc")) advancedMusicPlayer = new VlcPlayer();\n            else if(audioType.equalsIgnoreCase("mp4")) advancedMusicPlayer = new Mp4Player();\n        }\n        public void play(String audioType, String fileName) {\n            if(audioType.equalsIgnoreCase("vlc")) advancedMusicPlayer.playVlc(fileName);\n            else if(audioType.equalsIgnoreCase("mp4")) advancedMusicPlayer.playMp4(fileName);\n        }\n    }\n    static class AudioPlayer implements MediaPlayer {\n        MediaAdapter mediaAdapter;\n        public void play(String audioType, String fileName) {\n            if(audioType.equalsIgnoreCase("mp3")) System.out.println("Playing mp3 file: " + fileName);\n            else if(audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {\n                mediaAdapter = new MediaAdapter(audioType);\n                mediaAdapter.play(audioType, fileName);\n            } else System.out.println("Invalid media type");\n        }\n    }\n    public static void main(String[] args) {\n        AudioPlayer player = new AudioPlayer();\n        player.play("mp3", "song.mp3");\n        player.play("mp4", "video.mp4");\n        player.play("vlc", "movie.vlc");\n        player.play("avi", "random.avi");\n    }\n}',
    hint: "Adapter makes incompatible interfaces work together",
  },
  {
    id: "abstraction_19",
    topicId: "abstraction",
    question: "Observer pattern using interfaces.",
    mathSolution: "Subject notifies observers through abstraction",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Observer { void update(String message); }\n    interface Subject { void attach(Observer o); void detach(Observer o); void notifyObservers(String message); }\n    static class NewsAgency implements Subject {\n        private List<Observer> observers = new ArrayList<>();\n        private String news;\n        public void attach(Observer o) { observers.add(o); }\n        public void detach(Observer o) { observers.remove(o); }\n        public void notifyObservers(String message) { for(Observer o : observers) o.update(message); }\n        public void setNews(String news) { this.news = news; System.out.println("\\nNews published: " + news); notifyObservers(news); }\n    }\n    static class EmailSubscriber implements Observer {\n        private String name;\n        EmailSubscriber(String name) { this.name = name; }\n        public void update(String message) { System.out.println("Email to " + name + ": Breaking news - " + message); }\n    }\n    static class SMSSubscriber implements Observer {\n        private String phone;\n        SMSSubscriber(String phone) { this.phone = phone; }\n        public void update(String message) { System.out.println("SMS to " + phone + ": Alert - " + message); }\n    }\n    static class AppNotification implements Observer {\n        public void update(String message) { System.out.println("Mobile app notification: " + message); }\n    }\n    public static void main(String[] args) {\n        NewsAgency agency = new NewsAgency();\n        Observer email1 = new EmailSubscriber("Alice");\n        Observer email2 = new EmailSubscriber("Bob");\n        Observer sms = new SMSSubscriber("+1234567890");\n        Observer app = new AppNotification();\n        agency.attach(email1);\n        agency.attach(email2);\n        agency.attach(sms);\n        agency.attach(app);\n        agency.setNews("Java 21 released!");\n        agency.detach(email2);\n        agency.setNews("New features in Java");\n    }\n}',
    hint: "Observer pattern implements publish-subscribe",
  },
  {
    "id": "abstraction_20",
    "topicId": "abstraction",
    "question": "Create an abstract class with a generic type parameter T. Implement a concrete subclass that stores an integer value.",
    "mathSolution": "Generic abstract class allows type parameter to be specified by subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Storage<T> {\n        abstract void store(T item);\n        abstract T retrieve();\n    }\n    static class IntegerStorage extends Storage<Integer> {\n        private Integer value;\n        void store(Integer item) { value = item; }\n        Integer retrieve() { return value; }\n    }\n    public static void main(String[] args) {\n        IntegerStorage storage = new IntegerStorage();\n        storage.store(42);\n        System.out.println(\"Stored value: \" + storage.retrieve());\n    }\n}",
    "hint": "Use <T> after abstract class name and override methods with concrete type."
  },
  {
    "id": "abstraction_21",
    "topicId": "abstraction",
    "question": "Define an interface with a generic method that accepts any type and returns a string representation.",
    "mathSolution": "Generic methods in interfaces allow type flexibility.",
    "codeSolution": "public class Main {\n    interface Formatter {\n        <T> String format(T value);\n    }\n    static class SimpleFormatter implements Formatter {\n        public <T> String format(T value) {\n            return \"Formatted: \" + value.toString();\n        }\n    }\n    public static void main(String[] args) {\n        SimpleFormatter formatter = new SimpleFormatter();\n        System.out.println(formatter.format(123));\n        System.out.println(formatter.format(\"Hello\"));\n    }\n}",
    "hint": "Declare <T> before return type in interface method."
  },
  {
    "id": "abstraction_22",
    "topicId": "abstraction",
    "question": "Create an abstract class that partially implements an interface. A concrete class should complete the implementation.",
    "mathSolution": "Abstract class can provide default implementations for some interface methods.",
    "codeSolution": "public class Main {\n    interface Worker {\n        void start();\n        void stop();\n    }\n    static abstract class BaseWorker implements Worker {\n        public void start() { System.out.println(\"Worker started\"); }\n        // stop() remains abstract\n    }\n    static class ConcreteWorker extends BaseWorker {\n        public void stop() { System.out.println(\"Worker stopped\"); }\n    }\n    public static void main(String[] args) {\n        ConcreteWorker w = new ConcreteWorker();\n        w.start();\n        w.stop();\n    }\n}",
    "hint": "Abstract class can implement some interface methods, leaving others abstract."
  },
  {
    "id": "abstraction_23",
    "topicId": "abstraction",
    "question": "Create two interfaces with default methods having the same signature. Resolve the conflict in a class implementing both.",
    "mathSolution": "Class must override the conflicting default method and optionally call specific super methods.",
    "codeSolution": "public class Main {\n    interface A { default void show() { System.out.println(\"A\"); } }\n    interface B { default void show() { System.out.println(\"B\"); } }\n    static class C implements A, B {\n        public void show() {\n            A.super.show();\n            B.super.show();\n            System.out.println(\"C\");\n        }\n    }\n    public static void main(String[] args) {\n        new C().show();\n    }\n}",
    "hint": "Override and use InterfaceName.super.methodName()."
  },
  {
    "id": "abstraction_24",
    "topicId": "abstraction",
    "question": "Define an abstract class with a final variable that is initialized in the constructor. Use it in a concrete subclass.",
    "mathSolution": "Final instance variables must be assigned before constructor completes.",
    "codeSolution": "public class Main {\n    static abstract class Vehicle {\n        final String registrationNumber;\n        Vehicle(String regNo) { registrationNumber = regNo; }\n        abstract void move();\n    }\n    static class Car extends Vehicle {\n        Car(String regNo) { super(regNo); }\n        void move() { System.out.println(\"Car moving. Reg: \" + registrationNumber); }\n    }\n    public static void main(String[] args) {\n        Car c = new Car(\"ABC-1234\");\n        c.move();\n    }\n}",
    "hint": "Final variables can be set in constructor and are then immutable."
  },
  {
    "id": "abstraction_25",
    "topicId": "abstraction",
    "question": "Create an interface with a static factory method that returns an instance of a class implementing that interface.",
    "mathSolution": "Static methods in interfaces can provide factory instances.",
    "codeSolution": "public class Main {\n    interface Greeting {\n        void sayHello();\n        static Greeting createEnglish() {\n            return () -> System.out.println(\"Hello!\");\n        }\n        static Greeting createSpanish() {\n            return () -> System.out.println(\"Hola!\");\n        }\n    }\n    public static void main(String[] args) {\n        Greeting english = Greeting.createEnglish();\n        Greeting spanish = Greeting.createSpanish();\n        english.sayHello();\n        spanish.sayHello();\n    }\n}",
    "hint": "Static interface methods are called on the interface name, not on implementing classes."
  },
  {
    "id": "abstraction_26",
    "topicId": "abstraction",
    "question": "Write an abstract class with an abstract method that throws a checked exception. Implement the method in a subclass.",
    "mathSolution": "Abstract method can declare exceptions; subclasses must handle or propagate.",
    "codeSolution": "public class Main {\n    static abstract class FileHandler {\n        abstract void readFile(String path) throws java.io.IOException;\n    }\n    static class TextFileHandler extends FileHandler {\n        void readFile(String path) throws java.io.IOException {\n            System.out.println(\"Reading file: \" + path);\n            if (path.equals(\"missing.txt\"))\n                throw new java.io.IOException(\"File not found\");\n        }\n    }\n    public static void main(String[] args) {\n        TextFileHandler handler = new TextFileHandler();\n        try {\n            handler.readFile(\"data.txt\");\n            handler.readFile(\"missing.txt\");\n        } catch(java.io.IOException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Subclass may throw the same exception or a subclass, not a broader checked exception."
  },
  {
    "id": "abstraction_27",
    "topicId": "abstraction",
    "question": "Design an interface with two default methods where one calls the other. Use it in a class without overriding.",
    "mathSolution": "Default methods can call each other, providing reusable behavior.",
    "codeSolution": "public class Main {\n    interface Calculator {\n        default int add(int a, int b) { return a + b; }\n        default int addTwice(int a, int b) { return add(a, b) + add(a, b); }\n    }\n    static class MyCalc implements Calculator {}\n    public static void main(String[] args) {\n        MyCalc calc = new MyCalc();\n        System.out.println(\"Add: \" + calc.add(3,5));\n        System.out.println(\"Add twice: \" + calc.addTwice(3,5));\n    }\n}",
    "hint": "Default methods can invoke other default or abstract methods of the same interface."
  },
  {
    "id": "abstraction_28",
    "topicId": "abstraction",
    "question": "Create an abstract class with a protected abstract method. Implement it in a subclass from a different package (simulate using same file).",
    "mathSolution": "Protected abstract methods are accessible only within the same package or by subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Parent {\n        protected abstract void display();\n    }\n    static class Child extends Parent {\n        protected void display() { System.out.println(\"Child implementation\"); }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}",
    "hint": "Protected access allows subclasses to implement the method regardless of package."
  },
  {
    "id": "abstraction_29",
    "topicId": "abstraction",
    "question": "Define an interface with a private static method that is used by a default method to perform common logic.",
    "mathSolution": "Private static methods in interfaces encapsulate reusable code without exposing it.",
    "codeSolution": "public class Main {\n    interface Logger {\n        default void logError(String msg) {\n            String formatted = format(\"ERROR\", msg);\n            System.out.println(formatted);\n        }\n        default void logInfo(String msg) {\n            String formatted = format(\"INFO\", msg);\n            System.out.println(formatted);\n        }\n        private static String format(String level, String msg) {\n            return \"[\" + level + \"] \" + msg;\n        }\n    }\n    static class App implements Logger {}\n    public static void main(String[] args) {\n        App app = new App();\n        app.logError(\"Something went wrong\");\n        app.logInfo(\"Application started\");\n    }\n}",
    "hint": "Private static methods are accessible only within the interface."
  },
  {
    "id": "abstraction_30",
    "topicId": "abstraction",
    "question": "Create an abstract class with an abstract method that returns an instance of the same abstract type (self-referential).",
    "mathSolution": "Abstract methods can return the abstract type, allowing fluent interfaces.",
    "codeSolution": "public class Main {\n    static abstract class Shape {\n        abstract Shape scale(double factor);\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(double r) { radius = r; }\n        Shape scale(double factor) {\n            radius *= factor;\n            return this;\n        }\n        void display() { System.out.println(\"Radius: \" + radius); }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5);\n        c.scale(2).scale(0.5);\n        c.display();\n    }\n}",
    "hint": "Return type can be abstract class; subclass returns itself for method chaining."
  },
  {
    "id": "abstraction_31",
    "topicId": "abstraction",
    "question": "Implement an interface that extends two other interfaces and adds a new abstract method. Use it in a concrete class.",
    "mathSolution": "Interface can extend multiple interfaces, combining their contracts.",
    "codeSolution": "public class Main {\n    interface Readable { void read(); }\n    interface Writable { void write(); }\n    interface ReadWrite extends Readable, Writable { void close(); }\n    static class FileHandler implements ReadWrite {\n        public void read() { System.out.println(\"Reading\"); }\n        public void write() { System.out.println(\"Writing\"); }\n        public void close() { System.out.println(\"Closing\"); }\n    }\n    public static void main(String[] args) {\n        FileHandler fh = new FileHandler();\n        fh.read();\n        fh.write();\n        fh.close();\n    }\n}",
    "hint": "Implementing class must override all abstract methods from all parent interfaces."
  },
  {
    "id": "abstraction_32",
    "topicId": "abstraction",
    "question": "Create an abstract class that implements Comparable and provides natural ordering by an integer field.",
    "mathSolution": "Abstract classes can implement interfaces; subclasses inherit the comparison logic.",
    "codeSolution": "public class Main {\n    static abstract class Entity implements Comparable<Entity> {\n        int id;\n        Entity(int id) { this.id = id; }\n        public int compareTo(Entity other) {\n            return Integer.compare(this.id, other.id);\n        }\n        abstract void display();\n    }\n    static class User extends Entity {\n        User(int id) { super(id); }\n        void display() { System.out.println(\"User ID: \" + id); }\n    }\n    public static void main(String[] args) {\n        User u1 = new User(10);\n        User u2 = new User(5);\n        System.out.println(\"u1.compareTo(u2): \" + u1.compareTo(u2));\n    }\n}",
    "hint": "Abstract class can provide common comparator logic for all subclasses."
  },
  {
    "id": "abstraction_33",
    "topicId": "abstraction",
    "question": "Write an interface with a default method that uses a lambda expression to process a collection.",
    "mathSolution": "Default methods can utilize functional programming features.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Processor {\n        default void processAll(List<String> items) {\n            items.forEach(item -> System.out.println(\"Processing: \" + item));\n        }\n    }\n    static class BatchProcessor implements Processor {}\n    public static void main(String[] args) {\n        BatchProcessor bp = new BatchProcessor();\n        bp.processAll(Arrays.asList(\"A\", \"B\", \"C\"));\n    }\n}",
    "hint": "Lambda expressions can be used inside default methods for iteration."
  },
  {
    "id": "abstraction_34",
    "topicId": "abstraction",
    "question": "Create an abstract class that holds a static counter to track number of instances created. Increment it in constructor.",
    "mathSolution": "Static variables are shared across all instances, even of subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Base {\n        static int instanceCount = 0;\n        Base() { instanceCount++; }\n        abstract void identify();\n    }\n    static class A extends Base {\n        void identify() { System.out.println(\"A\"); }\n    }\n    static class B extends Base {\n        void identify() { System.out.println(\"B\"); }\n    }\n    public static void main(String[] args) {\n        new A();\n        new B();\n        new A();\n        System.out.println(\"Total instances: \" + Base.instanceCount);\n    }\n}",
    "hint": "Static members are inherited, but each subclass shares the same static variable."
  },
  {
    "id": "abstraction_35",
    "topicId": "abstraction",
    "question": "Design an interface with an abstract method that takes a variable number of arguments (varargs). Implement it.",
    "mathSolution": "Varargs can be used in interface abstract methods.",
    "codeSolution": "public class Main {\n    interface Concatenator {\n        String concat(String... parts);\n    }\n    static class SimpleConcatenator implements Concatenator {\n        public String concat(String... parts) {\n            StringBuilder sb = new StringBuilder();\n            for (String p : parts) sb.append(p);\n            return sb.toString();\n        }\n    }\n    public static void main(String[] args) {\n        SimpleConcatenator c = new SimpleConcatenator();\n        System.out.println(c.concat(\"Hello\", \" \", \"World\"));\n    }\n}",
    "hint": "Varargs in methods are treated as arrays inside the method body."
  },
  {
    "id": "abstraction_36",
    "topicId": "abstraction",
    "question": "Create an abstract class with a default method that returns a custom object. Use it in a subclass.",
    "mathSolution": "Abstract classes can provide concrete methods that return instances.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static abstract class DataProvider {\n        List<String> getDefaultData() {\n            return Arrays.asList(\"Default1\", \"Default2\");\n        }\n        abstract void process();\n    }\n    static class MyProvider extends DataProvider {\n        void process() {\n            System.out.println(\"Processing: \" + getDefaultData());\n        }\n    }\n    public static void main(String[] args) {\n        MyProvider mp = new MyProvider();\n        mp.process();\n    }\n}",
    "hint": "Concrete methods in abstract classes can be inherited and used by subclasses."
  },
  {
    "id": "abstraction_37",
    "topicId": "abstraction",
    "question": "Implement a marker interface (empty) and use instanceof to conditionally execute logic.",
    "mathSolution": "Marker interfaces tag classes for special processing.",
    "codeSolution": "public class Main {\n    interface Secure { }\n    static class User { }\n    static class Admin implements Secure { }\n    public static void main(String[] args) {\n        Object[] objs = { new User(), new Admin() };\n        for (Object obj : objs) {\n            if (obj instanceof Secure) {\n                System.out.println(obj.getClass().getSimpleName() + \" is secure\");\n            } else {\n                System.out.println(obj.getClass().getSimpleName() + \" is not secure\");\n            }\n        }\n    }\n}",
    "hint": "Marker interfaces have no methods; they are used as a flag for type checking."
  },
  {
    "id": "abstraction_38",
    "topicId": "abstraction",
    "question": "Create an abstract class with a template method that uses primitive operations implemented by subclasses. Example: beverage preparation.",
    "mathSolution": "Template method pattern: skeleton algorithm with steps implemented in subclasses.",
    "codeSolution": "public class Main {\n    static abstract class Beverage {\n        final void prepare() {\n            boilWater();\n            brew();\n            pourInCup();\n            addCondiments();\n        }\n        void boilWater() { System.out.println(\"Boiling water\"); }\n        void pourInCup() { System.out.println(\"Pouring into cup\"); }\n        abstract void brew();\n        abstract void addCondiments();\n    }\n    static class Tea extends Beverage {\n        void brew() { System.out.println(\"Steeping tea\"); }\n        void addCondiments() { System.out.println(\"Adding lemon\"); }\n    }\n    static class Coffee extends Beverage {\n        void brew() { System.out.println(\"Dripping coffee\"); }\n        void addCondiments() { System.out.println(\"Adding sugar and milk\"); }\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Tea:\");\n        new Tea().prepare();\n        System.out.println(\"\\nCoffee:\");\n        new Coffee().prepare();\n    }\n}",
    "hint": "Template method is final to prevent subclasses from altering the algorithm structure."
  },
  {
    "id": "abstraction_39",
    "topicId": "abstraction",
    "question": "Define an abstract class with an abstract method that has a covariant return type. Override it in a subclass.",
    "mathSolution": "Covariant return allows overriding method to return a more specific subtype.",
    "codeSolution": "public class Main {\n    static abstract class Animal {\n        abstract Animal reproduce();\n    }\n    static class Dog extends Animal {\n        Dog reproduce() {\n            System.out.println(\"Dog gives birth to puppies\");\n            return new Dog();\n        }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        Dog puppy = d.reproduce();\n        System.out.println(\"New puppy created\");\n    }\n}",
    "hint": "Override method can return a subtype of the original return type (covariant)."
  },
  {
    "id": "abstraction_40",
    "topicId": "abstraction",
    "question": "Create a functional interface (single abstract method) and use it with a lambda expression to sort a list of strings by length.",
    "mathSolution": "Functional interfaces enable lambda expressions for concise implementation.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    @FunctionalInterface\n    interface StringComparator {\n        int compare(String s1, String s2);\n    }\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Christina\", \"Dave\");\n        StringComparator byLength = (a, b) -> a.length() - b.length();\n        names.sort(byLength::compare);\n        System.out.println(names);\n    }\n}",
    "hint": "Functional interfaces can be used with method references as well as lambdas."
  },
  //encapsulation
   {
    id: "encapsulation_1",
    topicId: "encapsulation",
    question: "Create a class with private fields and public getters/setters.",
    mathSolution: "Hide data, provide controlled access through methods",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name;\n        private int age;\n        public String getName() { return name; }\n        public int getAge() { return age; }\n        public void setName(String name) { this.name = name; }\n        public void setAge(int age) { if(age > 0) this.age = age; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setName("Alice");\n        p.setAge(25);\n        System.out.println(p.getName() + " is " + p.getAge() + " years old");\n    }\n}',
    hint: "Private fields + public methods = encapsulation",
  },
  {
    id: "encapsulation_2",
    topicId: "encapsulation",
    question: "Add validation in setter methods.",
    mathSolution: "Control what values can be assigned",
    codeSolution: 'public class Main {\n    static class BankAccount {\n        private String accountNumber;\n        private double balance;\n        private String accountHolder;\n        public void setAccountNumber(String accNo) {\n            if(accNo != null && accNo.length() == 10) this.accountNumber = accNo;\n            else System.out.println("Invalid account number");\n        }\n        public void setBalance(double balance) {\n            if(balance >= 0) this.balance = balance;\n            else System.out.println("Balance cannot be negative");\n        }\n        public void setAccountHolder(String name) {\n            if(name != null && !name.trim().isEmpty()) this.accountHolder = name;\n        }\n        public void display() {\n            System.out.println("Account: " + accountNumber);\n            System.out.println("Holder: " + accountHolder);\n            System.out.println("Balance: $" + balance);\n        }\n    }\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.setAccountNumber("ACC1234567");\n        acc.setAccountNumber("ACC12345678");\n        acc.setAccountHolder("John Doe");\n        acc.setBalance(1000);\n        acc.setBalance(-500);\n        acc.display();\n    }\n}',
    hint: "Setters protect data integrity",
  },
  {
    id: "encapsulation_3",
    topicId: "encapsulation",
    question: "Read-only class (only getters, no setters).",
    mathSolution: "Immutable data exposure through getters only",
    codeSolution: 'public class Main {\n    static class Product {\n        private String id;\n        private String name;\n        private double price;\n        public Product(String id, String name, double price) {\n            this.id = id; this.name = name; this.price = price;\n        }\n        public String getId() { return id; }\n        public String getName() { return name; }\n        public double getPrice() { return price; }\n    }\n    public static void main(String[] args) {\n        Product p = new Product("P101", "Laptop", 999.99);\n        System.out.println(p.getId() + ": " + p.getName() + " - $" + p.getPrice());\n    }\n}',
    hint: "Read-only class for data that shouldn't change",
  },
  {
    id: "encapsulation_4",
    topicId: "encapsulation",
    question: "Write-only class (only setters, no getters).",
    mathSolution: "Data can be set but not read directly",
    codeSolution: 'public class Main {\n    static class PasswordManager {\n        private String password;\n        public void setPassword(String password) {\n            this.password = password;\n            System.out.println("Password set and encrypted: " + encrypt(password));\n        }\n        private String encrypt(String pwd) { return "***" + pwd.hashCode() + "***"; }\n        public boolean authenticate(String input) {\n            return password != null && password.equals(input);\n        }\n    }\n    public static void main(String[] args) {\n        PasswordManager pm = new PasswordManager();\n        pm.setPassword("secret123");\n        System.out.println("Authentication: " + pm.authenticate("wrong"));\n        System.out.println("Authentication: " + pm.authenticate("secret123"));\n    }\n}',
    hint: "Write-only for sensitive data",
  },

  // GETTER/SETTER VARIATIONS (4)
  {
    id: "encapsulation_5",
    topicId: "encapsulation",
    question: "Custom getter that returns calculated value.",
    mathSolution: "Getter can compute value instead of just returning",
    codeSolution: 'public class Main {\n    static class Rectangle {\n        private double length, width;\n        public void setLength(double l) { length = l; }\n        public void setWidth(double w) { width = w; }\n        public double getArea() { return length * width; }\n        public double getPerimeter() { return 2 * (length + width); }\n        public double getLength() { return length; }\n        public double getWidth() { return width; }\n    }\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle();\n        r.setLength(5.5);\n        r.setWidth(3.2);\n        System.out.println("Length: " + r.getLength());\n        System.out.println("Width: " + r.getWidth());\n        System.out.println("Area: " + r.getArea());\n        System.out.println("Perimeter: " + r.getPerimeter());\n    }\n}',
    hint: "Getters can compute derived values",
  },
  {
    id: "encapsulation_6",
    topicId: "encapsulation",
    question: "Setter with side effects.",
    mathSolution: "Setting one field can affect others",
    codeSolution: 'public class Main {\n    static class Temperature {\n        private double celsius, fahrenheit;\n        public void setCelsius(double c) {\n            celsius = c;\n            fahrenheit = (c * 9/5) + 32;\n        }\n        public void setFahrenheit(double f) {\n            fahrenheit = f;\n            celsius = (f - 32) * 5/9;\n        }\n        public double getCelsius() { return celsius; }\n        public double getFahrenheit() { return fahrenheit; }\n    }\n    public static void main(String[] args) {\n        Temperature temp = new Temperature();\n        temp.setCelsius(25);\n        System.out.println("Celsius: " + temp.getCelsius());\n        System.out.println("Fahrenheit: " + temp.getFahrenheit());\n        temp.setFahrenheit(98.6);\n        System.out.println("Celsius: " + temp.getCelsius());\n        System.out.println("Fahrenheit: " + temp.getFahrenheit());\n    }\n}',
    hint: "Setters can maintain consistency between fields",
  },
  {
    id: "encapsulation_7",
    topicId: "encapsulation",
    question: "Getter returning defensive copy of collection.",
    mathSolution: "Protect internal collections from modification",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Student {\n        private String name;\n        private List<Integer> grades = new ArrayList<>();\n        public void setName(String name) { this.name = name; }\n        public void addGrade(int grade) { grades.add(grade); }\n        public List<Integer> getGrades() { return new ArrayList<>(grades); }\n        public List<Integer> getGradesUnmodifiable() { return Collections.unmodifiableList(grades); }\n    }\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.setName("Alice");\n        s.addGrade(85);\n        s.addGrade(90);\n        List<Integer> grades = s.getGrades();\n        grades.add(95);\n        System.out.println("Original grades: " + s.getGrades());\n        List<Integer> unmod = s.getGradesUnmodifiable();\n        System.out.println("Unmodifiable view: " + unmod);\n    }\n}',
    hint: "Defensive copying prevents external modification",
  },
  {
    id: "encapsulation_8",
    topicId: "encapsulation",
    question: "Boolean getter with 'is' prefix convention.",
    mathSolution: "Boolean getters use 'is' instead of 'get'",
    codeSolution: 'public class Main {\n    static class User {\n        private boolean active, admin, loggedIn;\n        public void setActive(boolean active) { this.active = active; }\n        public void setAdmin(boolean admin) { this.admin = admin; }\n        public void setLoggedIn(boolean loggedIn) { this.loggedIn = loggedIn; }\n        public boolean isActive() { return active; }\n        public boolean isAdmin() { return admin; }\n        public boolean isLoggedIn() { return loggedIn; }\n    }\n    public static void main(String[] args) {\n        User u = new User();\n        u.setActive(true);\n        u.setAdmin(false);\n        u.setLoggedIn(true);\n        System.out.println("Active: " + u.isActive());\n        System.out.println("Admin: " + u.isAdmin());\n        System.out.println("Logged in: " + u.isLoggedIn());\n        if(u.isActive() && u.isLoggedIn()) System.out.println("User can access system");\n    }\n}',
    hint: "Convention: isXyz() for boolean getters",
  },

  // PACKAGE-LEVEL ENCAPSULATION (3)
  {
    id: "encapsulation_9",
    topicId: "encapsulation",
    question: "Use default (package-private) access modifier.",
    mathSolution: "Package-private accessible within same package",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name;\n        int age;\n        protected String city;\n        public String country;\n        public Person(String name, int age, String city, String country) {\n            this.name = name; this.age = age; this.city = city; this.country = country;\n        }\n        public String getName() { return name; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person("Alice", 25, "NYC", "USA");\n        System.out.println("Age: " + p.age);\n        System.out.println("City: " + p.city);\n        System.out.println("Country: " + p.country);\n    }\n}',
    hint: "Default access balances encapsulation and accessibility",
  },
  {
    id: "encapsulation_10",
    topicId: "encapsulation",
    question: "Protected access in different packages.",
    mathSolution: "Protected members accessible in subclasses",
    codeSolution: 'public class Main {\n    static class Animal {\n        protected String species;\n        protected void makeSound() { System.out.println("Animal sound"); }\n    }\n    static class Dog extends Animal {\n        public void display() {\n            species = "Canine";\n            makeSound();\n            System.out.println("Species: " + species);\n        }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.display();\n    }\n}',
    hint: "Protected allows inheritance-based access across packages",
  },
  {
    id: "encapsulation_11",
    topicId: "encapsulation",
    question: "Design public API with encapsulated internals.",
    mathSolution: "Hide implementation details, expose only what's needed",
    codeSolution: 'public class Main {\n    static class Stack {\n        private int[] elements;\n        private int size;\n        private static final int DEFAULT_CAPACITY = 10;\n        public Stack() { elements = new int[DEFAULT_CAPACITY]; size = 0; }\n        public void push(int value) {\n            if(size == elements.length) resize();\n            elements[size++] = value;\n        }\n        public int pop() {\n            if(isEmpty()) throw new IllegalStateException("Stack empty");\n            return elements[--size];\n        }\n        public int peek() { if(isEmpty()) throw new IllegalStateException("Stack empty"); return elements[size-1]; }\n        public boolean isEmpty() { return size == 0; }\n        public int size() { return size; }\n        private void resize() {\n            int[] newElements = new int[elements.length * 2];\n            System.arraycopy(elements, 0, newElements, 0, size);\n            elements = newElements;\n        }\n    }\n    public static void main(String[] args) {\n        Stack stack = new Stack();\n        stack.push(10);\n        stack.push(20);\n        stack.push(30);\n        System.out.println("Pop: " + stack.pop());\n        System.out.println("Peek: " + stack.peek());\n        System.out.println("Size: " + stack.size());\n    }\n}',
    hint: "Public API should hide implementation details",
  },

  // IMMUTABLE CLASSES (3)
  {
    id: "encapsulation_12",
    topicId: "encapsulation",
    question: "Create a fully immutable class.",
    mathSolution: "All fields final, no setters, defensive copying",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static final class ImmutablePerson {\n        private final String name;\n        private final int age;\n        private final List<String> hobbies;\n        public ImmutablePerson(String name, int age, List<String> hobbies) {\n            this.name = name;\n            this.age = age;\n            this.hobbies = new ArrayList<>(hobbies);\n        }\n        public String getName() { return name; }\n        public int getAge() { return age; }\n        public List<String> getHobbies() { return new ArrayList<>(hobbies); }\n    }\n    public static void main(String[] args) {\n        List<String> hobbies = new ArrayList<>(Arrays.asList("Reading", "Gaming"));\n        ImmutablePerson p = new ImmutablePerson("Alice", 25, hobbies);\n        hobbies.add("Swimming");\n        System.out.println(p.getName() + ", " + p.getAge());\n        System.out.println("Hobbies: " + p.getHobbies());\n    }\n}',
    hint: "Immutable objects are thread-safe and reliable",
  },
  {
    id: "encapsulation_13",
    topicId: "encapsulation",
    question: "Immutable class with builder pattern.",
    mathSolution: "Builder constructs immutable objects",
    codeSolution: 'public class Main {\n    static final class Employee {\n        private final int id;\n        private final String name;\n        private final String department;\n        private final double salary;\n        private Employee(Builder builder) {\n            this.id = builder.id;\n            this.name = builder.name;\n            this.department = builder.department;\n            this.salary = builder.salary;\n        }\n        public int getId() { return id; }\n        public String getName() { return name; }\n        public String getDepartment() { return department; }\n        public double getSalary() { return salary; }\n        public static class Builder {\n            private int id;\n            private String name;\n            private String department;\n            private double salary;\n            public Builder id(int id) { this.id = id; return this; }\n            public Builder name(String name) { this.name = name; return this; }\n            public Builder department(String dept) { this.department = dept; return this; }\n            public Builder salary(double salary) { this.salary = salary; return this; }\n            public Employee build() { return new Employee(this); }\n        }\n    }\n    public static void main(String[] args) {\n        Employee emp = new Employee.Builder().id(101).name("Alice").department("Engineering").salary(75000).build();\n        System.out.println(emp.getName() + " works in " + emp.getDepartment());\n    }\n}',
    hint: "Builder pattern handles many parameters elegantly",
  },
  {
    id: "encapsulation_14",
    topicId: "encapsulation",
    question: "Defensive copying in constructor and getters.",
    mathSolution: "Protect against external modification of internal state",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Student { String name; Student(String n) { name = n; } public String toString() { return name; } }\n    static class Course {\n        private final String name;\n        private final List<Student> students;\n        public Course(String name, List<Student> students) {\n            this.name = name;\n            this.students = new ArrayList<>(students);\n        }\n        public String getName() { return name; }\n        public List<Student> getStudents() { return new ArrayList<>(students); }\n        public void addStudent(Student s) { students.add(s); }\n        public int getStudentCount() { return students.size(); }\n    }\n    public static void main(String[] args) {\n        List<Student> externalList = new ArrayList<>();\n        externalList.add(new Student("Alice"));\n        externalList.add(new Student("Bob"));\n        Course course = new Course("Java", externalList);\n        externalList.add(new Student("Charlie"));\n        System.out.println("Course students: " + course.getStudents());\n        System.out.println("Count: " + course.getStudentCount());\n        List<Student> retrieved = course.getStudents();\n        retrieved.add(new Student("Dave"));\n        System.out.println("After external modify attempt: " + course.getStudents());\n    }\n}',
    hint: "Defensive copying prevents state corruption",
  },

  // ENCAPSULATION WITH INHERITANCE (3)
  {
    id: "encapsulation_15",
    topicId: "encapsulation",
    question: "Protected fields in inheritance hierarchy.",
    mathSolution: "Protected allows access in subclasses",
    codeSolution: 'public class Main {\n    static class Shape {\n        protected String color;\n        protected double area;\n        protected void calculateArea() {}\n        public void display() { System.out.println("Color: " + color + ", Area: " + area); }\n    }\n    static class Circle extends Shape {\n        private double radius;\n        public Circle(double radius, String color) { this.radius = radius; this.color = color; }\n        protected void calculateArea() { area = Math.PI * radius * radius; }\n        public void processCircle() { calculateArea(); }\n    }\n    static class Rectangle extends Shape {\n        private double length, width;\n        public Rectangle(double l, double w, String color) { length = l; width = w; this.color = color; }\n        protected void calculateArea() { area = length * width; }\n        public void processRect() { calculateArea(); }\n    }\n    public static void main(String[] args) {\n        Circle c = new Circle(5, "Red");\n        c.processCircle();\n        c.display();\n        Rectangle r = new Rectangle(4, 6, "Blue");\n        r.processRect();\n        r.display();\n    }\n}',
    hint: "Protected balances encapsulation and inheritance",
  },
  {
    id: "encapsulation_16",
    topicId: "encapsulation",
    question: "Template method pattern with protected abstract methods.",
    mathSolution: "Protected abstract methods define contract for subclasses",
    codeSolution: 'public class Main {\n    static abstract class DataProcessor {\n        public final void process() {\n            loadData();\n            processData();\n            saveResults();\n            cleanup();\n        }\n        protected abstract void loadData();\n        protected abstract void processData();\n        protected abstract void saveResults();\n        protected void cleanup() { System.out.println("Default cleanup"); }\n    }\n    static class CSVProcessor extends DataProcessor {\n        protected void loadData() { System.out.println("Loading CSV file"); }\n        protected void processData() { System.out.println("Processing CSV data"); }\n        protected void saveResults() { System.out.println("Saving CSV results"); }\n    }\n    static class XMLProcessor extends DataProcessor {\n        protected void loadData() { System.out.println("Loading XML file"); }\n        protected void processData() { System.out.println("Parsing XML data"); }\n        protected void saveResults() { System.out.println("Saving XML results"); }\n        protected void cleanup() { System.out.println("Closing XML parser"); }\n    }\n    public static void main(String[] args) {\n        CSVProcessor csv = new CSVProcessor();\n        csv.process();\n        System.out.println();\n        XMLProcessor xml = new XMLProcessor();\n        xml.process();\n    }\n}',
    hint: "Template method pattern uses protected abstract methods",
  },
  {
    id: "encapsulation_17",
    topicId: "encapsulation",
    question: "Accessing private fields via protected methods.",
    mathSolution: "Protected methods provide controlled access to private fields",
    codeSolution: 'public class Main {\n    static class Employee {\n        private String name;\n        private double salary;\n        public Employee(String name, double salary) { this.name = name; this.salary = salary; }\n        protected String getName() { return name; }\n        protected double getSalary() { return salary; }\n        protected double calculateBonus() { return salary * 0.1; }\n    }\n    static class Manager extends Employee {\n        private double teamBonus;\n        public Manager(String name, double salary, double teamBonus) { super(name, salary); this.teamBonus = teamBonus; }\n        public void displayDetails() {\n            System.out.println("Manager: " + getName());\n            System.out.println("Base salary: $" + getSalary());\n            System.out.println("Personal bonus: $" + calculateBonus());\n            System.out.println("Team bonus: $" + teamBonus);\n            System.out.println("Total: $" + (getSalary() + calculateBonus() + teamBonus));\n        }\n    }\n    public static void main(String[] args) {\n        Manager m = new Manager("Alice", 80000, 5000);\n        m.displayDetails();\n    }\n}',
    hint: "Protected methods give subclasses controlled access",
  },

  // ENCAPSULATION BEST PRACTICES (3)
  {
    id: "encapsulation_18",
    topicId: "encapsulation",
    question: "Prefer immutable fields where possible.",
    mathSolution: "Final fields make class thread-safe and simpler",
    codeSolution: 'public class Main {\n    static class Configuration {\n        private final String appName;\n        private final String version;\n        private final int maxUsers;\n        private final boolean debugMode;\n        public Configuration(String appName, String version, int maxUsers, boolean debugMode) {\n            this.appName = appName; this.version = version; this.maxUsers = maxUsers; this.debugMode = debugMode;\n        }\n        public String getAppName() { return appName; }\n        public String getVersion() { return version; }\n        public int getMaxUsers() { return maxUsers; }\n        public boolean isDebugMode() { return debugMode; }\n        public Configuration withMaxUsers(int newMax) { return new Configuration(appName, version, newMax, debugMode); }\n        public Configuration enableDebug() { return new Configuration(appName, version, maxUsers, true); }\n    }\n    public static void main(String[] args) {\n        Configuration config = new Configuration("MyApp", "1.0", 100, false);\n        System.out.println(config.getAppName() + " v" + config.getVersion());\n        Configuration debugConfig = config.enableDebug();\n        Configuration biggerConfig = config.withMaxUsers(500);\n        System.out.println("Original max users: " + config.getMaxUsers());\n        System.out.println("Debug mode: " + debugConfig.isDebugMode());\n        System.out.println("Bigger config: " + biggerConfig.getMaxUsers());\n    }\n}',
    hint: "Immutable fields simplify reasoning about code",
  },
  {
    id: "encapsulation_19",
    topicId: "encapsulation",
    question: "Encapsulate what varies - hide implementation details.",
    mathSolution: "Hide changing implementations behind stable interface",
    codeSolution: 'public class Main {\n    interface PaymentGateway {\n        void processPayment(double amount);\n        String getStatus();\n    }\n    static class PayPalGateway implements PaymentGateway {\n        private String apiKey;\n        private String status;\n        public PayPalGateway(String apiKey) { this.apiKey = apiKey; }\n        public void processPayment(double amount) {\n            System.out.println("Connecting to PayPal API with key: ****" + apiKey.substring(apiKey.length()-4));\n            status = "SUCCESS";\n        }\n        public String getStatus() { return status; }\n    }\n    static class StripeGateway implements PaymentGateway {\n        private String secretKey;\n        private String transactionId;\n        public StripeGateway(String secretKey) { this.secretKey = secretKey; }\n        public void processPayment(double amount) {\n            System.out.println("Stripe processing with key length: " + secretKey.length());\n            transactionId = "txn_" + System.currentTimeMillis();\n        }\n        public String getStatus() { return transactionId != null ? "COMPLETED" : "PENDING"; }\n    }\n    static class PaymentService {\n        private PaymentGateway gateway;\n        public PaymentService(PaymentGateway gateway) { this.gateway = gateway; }\n        public void pay(double amount) { gateway.processPayment(amount); System.out.println("Payment status: " + gateway.getStatus()); }\n    }\n    public static void main(String[] args) {\n        PaymentService service1 = new PaymentService(new PayPalGateway("paypal_key_123"));\n        service1.pay(100.50);\n        PaymentService service2 = new PaymentService(new StripeGateway("stripe_secret_456"));\n        service2.pay(75.25);\n    }\n}',
    hint: "Encapsulate varying implementations behind stable interfaces",
  },
  {
    id: "encapsulation_20",
    topicId: "encapsulation",
    question: "Encapsulation with validation and business rules.",
    mathSolution: "Keep business logic inside the class",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class BankAccount {\n        private String accountNumber;\n        private double balance;\n        private double overdraftLimit;\n        private List<String> transactions;\n        public BankAccount(String accountNumber, double overdraftLimit) {\n            this.accountNumber = accountNumber;\n            this.overdraftLimit = overdraftLimit;\n            this.balance = 0;\n            this.transactions = new ArrayList<>();\n            addTransaction("Account created");\n        }\n        public void deposit(double amount) {\n            if(amount <= 0) throw new IllegalArgumentException("Deposit amount must be positive");\n            balance += amount;\n            addTransaction("Deposited: $" + amount);\n        }\n        public boolean withdraw(double amount) {\n            if(amount <= 0) throw new IllegalArgumentException("Withdrawal amount must be positive");\n            if(amount > balance + overdraftLimit) { System.out.println("Insufficient funds"); return false; }\n            balance -= amount;\n            addTransaction("Withdrew: $" + amount);\n            return true;\n        }\n        public double getBalance() { return balance; }\n        public List<String> getTransactionHistory() { return new ArrayList<>(transactions); }\n        private void addTransaction(String transaction) { transactions.add(transaction + " - Balance: $" + balance); }\n        public void displayAccountInfo() {\n            System.out.println("Account: " + accountNumber);\n            System.out.println("Balance: $" + balance);\n            System.out.println("Overdraft limit: $" + overdraftLimit);\n            System.out.println("Available: $" + (balance + overdraftLimit));\n        }\n    }\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount("ACC123", 500);\n        acc.deposit(1000);\n        acc.withdraw(200);\n        acc.withdraw(1500);\n        acc.withdraw(1000);\n        acc.displayAccountInfo();\n        System.out.println("\\nTransactions:");\n        for(String t : acc.getTransactionHistory()) System.out.println(t);\n    }\n}',
    hint: "Business rules are encapsulated within the class",
  },
  {
    "id": "encapsulation_21",
    "topicId": "encapsulation",
    "question": "Create a class with a private field that is lazily initialized using a getter. The field is expensive to compute, so compute it only once when first accessed.",
    "mathSolution": "Lazy initialization delays resource-heavy computation until needed.",
    "codeSolution": "public class Main {\n    static class LazyData {\n        private String heavyData;\n        private String computeHeavyData() {\n            System.out.println(\"Computing heavy data...\");\n            return \"Expensive Computation Result\";\n        }\n        public String getData() {\n            if (heavyData == null) {\n                heavyData = computeHeavyData();\n            }\n            return heavyData;\n        }\n    }\n    public static void main(String[] args) {\n        LazyData data = new LazyData();\n        System.out.println(\"Object created, data not yet computed.\");\n        System.out.println(\"First access: \" + data.getData());\n        System.out.println(\"Second access: \" + data.getData());\n    }\n}",
    "hint": "Check if field is null in getter before computing."
  },
  {
    "id": "encapsulation_22",
    "topicId": "encapsulation",
    "question": "Implement a setter that validates age range (0 to 120). Throw IllegalArgumentException for invalid age.",
    "mathSolution": "Setter should enforce business rules on allowed values.",
    "codeSolution": "public class Main {\n    static class Person {\n        private int age;\n        public void setAge(int age) {\n            if (age < 0 || age > 120) {\n                throw new IllegalArgumentException(\"Age must be between 0 and 120\");\n            }\n            this.age = age;\n            System.out.println(\"Age set to \" + age);\n        }\n        public int getAge() { return age; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        try {\n            p.setAge(25);\n            p.setAge(150);\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use if condition and throw IllegalArgumentException."
  },
  {
    "id": "encapsulation_23",
    "topicId": "encapsulation",
    "question": "Create a getter that returns a formatted string representation of a private date field (using java.time.LocalDate).",
    "mathSolution": "Getter can return a transformed version of internal data.",
    "codeSolution": "import java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\npublic class Main {\n    static class Event {\n        private LocalDate date;\n        public Event(int year, int month, int day) {\n            this.date = LocalDate.of(year, month, day);\n        }\n        public String getFormattedDate() {\n            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"dd/MM/yyyy\");\n            return date.format(formatter);\n        }\n    }\n    public static void main(String[] args) {\n        Event e = new Event(2024, 12, 25);\n        System.out.println(\"Formatted date: \" + e.getFormattedDate());\n    }\n}",
    "hint": "Use DateTimeFormatter to format date in getter."
  },
  {
    "id": "encapsulation_24",
    "topicId": "encapsulation",
    "question": "Write a setter that triggers a side effect: updating a lastModified timestamp whenever any field changes.",
    "mathSolution": "Encapsulate related state changes together.",
    "codeSolution": "import java.time.LocalDateTime;\npublic class Main {\n    static class Document {\n        private String content;\n        private LocalDateTime lastModified;\n        public void setContent(String content) {\n            this.content = content;\n            this.lastModified = LocalDateTime.now();\n            System.out.println(\"Content updated. Last modified: \" + lastModified);\n        }\n        public String getContent() { return content; }\n        public LocalDateTime getLastModified() { return lastModified; }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Document doc = new Document();\n        doc.setContent(\"First version\");\n        Thread.sleep(1000);\n        doc.setContent(\"Second version\");\n    }\n}",
    "hint": "Update lastModified inside setter."
  },
  {
    "id": "encapsulation_25",
    "topicId": "encapsulation",
    "question": "Use an enum to restrict possible values for a field in a setter. Provide a getter for the enum.",
    "mathSolution": "Enums provide compile-time safety for fixed set of values.",
    "codeSolution": "public class Main {\n    enum Status { PENDING, APPROVED, REJECTED }\n    static class Request {\n        private Status status;\n        public void setStatus(Status status) {\n            this.status = status;\n            System.out.println(\"Status set to \" + status);\n        }\n        public Status getStatus() { return status; }\n    }\n    public static void main(String[] args) {\n        Request req = new Request();\n        req.setStatus(Status.PENDING);\n        req.setStatus(Status.APPROVED);\n    }\n}",
    "hint": "Use enum type for field to limit possible values."
  },
  {
    "id": "encapsulation_26",
    "topicId": "encapsulation",
    "question": "Make a class thread-safe by adding synchronized keyword to getter and setter methods for a shared counter.",
    "mathSolution": "Synchronization ensures visibility and atomicity in multithreaded environment.",
    "codeSolution": "public class Main {\n    static class Counter {\n        private int count = 0;\n        public synchronized void increment() {\n            count++;\n        }\n        public synchronized int getCount() {\n            return count;\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        Thread t1 = new Thread(() -> { for(int i=0;i<1000;i++) counter.increment(); });\n        Thread t2 = new Thread(() -> { for(int i=0;i<1000;i++) counter.increment(); });\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n        System.out.println(\"Final count: \" + counter.getCount());\n    }\n}",
    "hint": "Use synchronized keyword on methods to prevent race conditions."
  },
  {
    "id": "encapsulation_27",
    "topicId": "encapsulation",
    "question": "Create a getter that returns an Optional to clearly indicate that a value may be absent.",
    "mathSolution": "Optional makes null handling explicit and safer.",
    "codeSolution": "import java.util.Optional;\npublic class Main {\n    static class User {\n        private String middleName;\n        public void setMiddleName(String middleName) { this.middleName = middleName; }\n        public Optional<String> getMiddleName() {\n            return Optional.ofNullable(middleName);\n        }\n    }\n    public static void main(String[] args) {\n        User u = new User();\n        System.out.println(\"Middle name present? \" + u.getMiddleName().isPresent());\n        u.setMiddleName(\"James\");\n        u.getMiddleName().ifPresent(m -> System.out.println(\"Middle name: \" + m));\n    }\n}",
    "hint": "Return Optional.ofNullable(field) in getter."
  },
  {
    "id": "encapsulation_28",
    "topicId": "encapsulation",
    "question": "Encapsulate a counter that cannot exceed a maximum limit. Provide increment and decrement methods with validation.",
    "mathSolution": "Encapsulation ensures internal state remains consistent.",
    "codeSolution": "public class Main {\n    static class BoundedCounter {\n        private int value;\n        private final int max;\n        public BoundedCounter(int max) { this.max = max; }\n        public void increment() {\n            if (value < max) {\n                value++;\n                System.out.println(\"Incremented to \" + value);\n            } else {\n                System.out.println(\"Cannot increment beyond \" + max);\n            }\n        }\n        public void decrement() {\n            if (value > 0) {\n                value--;\n                System.out.println(\"Decremented to \" + value);\n            } else {\n                System.out.println(\"Cannot decrement below 0\");\n            }\n        }\n        public int getValue() { return value; }\n    }\n    public static void main(String[] args) {\n        BoundedCounter c = new BoundedCounter(3);\n        c.increment(); c.increment(); c.increment(); c.increment();\n        c.decrement(); c.decrement(); c.decrement(); c.decrement();\n    }\n}",
    "hint": "Check bounds before updating."
  },
  {
    "id": "encapsulation_29",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a time interval (start and end as LocalTime). Provide a method to check if a given time falls within the interval.",
    "mathSolution": "Encapsulate validation logic inside the class.",
    "codeSolution": "import java.time.LocalTime;\npublic class Main {\n    static class TimeInterval {\n        private LocalTime start;\n        private LocalTime end;\n        public void setInterval(LocalTime start, LocalTime end) {\n            if (start.isAfter(end)) {\n                throw new IllegalArgumentException(\"Start must be before end\");\n            }\n            this.start = start;\n            this.end = end;\n        }\n        public boolean contains(LocalTime time) {\n            return !time.isBefore(start) && !time.isAfter(end);\n        }\n    }\n    public static void main(String[] args) {\n        TimeInterval interval = new TimeInterval();\n        interval.setInterval(LocalTime.of(9, 0), LocalTime.of(17, 0));\n        System.out.println(interval.contains(LocalTime.of(12, 0))); // true\n        System.out.println(interval.contains(LocalTime.of(18, 0))); // false\n    }\n}",
    "hint": "Validate start < end in setter."
  },
  {
    "id": "encapsulation_30",
    "topicId": "encapsulation",
    "question": "Implement a shopping cart class that encapsulates a list of items. Provide methods to add, remove, and calculate total price.",
    "mathSolution": "Encapsulate collection and related operations.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class ShoppingCart {\n        private List<String> items = new ArrayList<>();\n        private List<Double> prices = new ArrayList<>();\n        public void addItem(String name, double price) {\n            items.add(name);\n            prices.add(price);\n            System.out.println(\"Added: \" + name + \" ($\" + price + \")\");\n        }\n        public void removeItem(int index) {\n            if (index >= 0 && index < items.size()) {\n                System.out.println(\"Removed: \" + items.remove(index));\n                prices.remove(index);\n            }\n        }\n        public double getTotal() {\n            double total = 0;\n            for (double p : prices) total += p;\n            return total;\n        }\n    }\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart();\n        cart.addItem(\"Laptop\", 1200.00);\n        cart.addItem(\"Mouse\", 25.50);\n        cart.removeItem(1);\n        System.out.println(\"Total: $\" + cart.getTotal());\n    }\n}",
    "hint": "Store items and prices in parallel lists or a map."
  },
  {
    "id": "encapsulation_31",
    "topicId": "encapsulation",
    "question": "Encapsulate a student's grades in a list and provide a method to calculate the average grade. Ensure grades are between 0 and 100.",
    "mathSolution": "Validation and business logic inside class.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Student {\n        private List<Integer> grades = new ArrayList<>();\n        public void addGrade(int grade) {\n            if (grade < 0 || grade > 100) {\n                throw new IllegalArgumentException(\"Grade must be between 0 and 100\");\n            }\n            grades.add(grade);\n        }\n        public double getAverage() {\n            if (grades.isEmpty()) return 0;\n            int sum = 0;\n            for (int g : grades) sum += g;\n            return (double) sum / grades.size();\n        }\n    }\n    public static void main(String[] args) {\n        Student s = new Student();\n        s.addGrade(85);\n        s.addGrade(92);\n        s.addGrade(78);\n        System.out.println(\"Average grade: \" + s.getAverage());\n    }\n}",
    "hint": "Validate grade before adding to list."
  },
  {
    "id": "encapsulation_32",
    "topicId": "encapsulation",
    "question": "Create a Book class with ISBN validation (must be exactly 13 digits). Provide getters and a constructor.",
    "mathSolution": "Encapsulate validation in constructor and setter.",
    "codeSolution": "public class Main {\n    static class Book {\n        private String isbn;\n        private String title;\n        public Book(String isbn, String title) {\n            setIsbn(isbn);\n            this.title = title;\n        }\n        public void setIsbn(String isbn) {\n            if (isbn == null || !isbn.matches(\"\\\\d{13}\")) {\n                throw new IllegalArgumentException(\"ISBN must be 13 digits\");\n            }\n            this.isbn = isbn;\n        }\n        public String getIsbn() { return isbn; }\n        public String getTitle() { return title; }\n    }\n    public static void main(String[] args) {\n        try {\n            Book b1 = new Book(\"9780134685991\", \"Effective Java\");\n            System.out.println(b1.getTitle() + \" - ISBN: \" + b1.getIsbn());\n            Book b2 = new Book(\"123\", \"Invalid\");\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use regex to validate ISBN format."
  },
  {
    "id": "encapsulation_33",
    "topicId": "encapsulation",
    "question": "Implement a class that encapsulates a 2D point (x, y) as immutable. Provide a method to calculate distance from origin.",
    "mathSolution": "Immutable objects are inherently thread-safe and predictable.",
    "codeSolution": "public class Main {\n    static final class Point {\n        private final int x;\n        private final int y;\n        public Point(int x, int y) { this.x = x; this.y = y; }\n        public int getX() { return x; }\n        public int getY() { return y; }\n        public double distanceFromOrigin() {\n            return Math.sqrt(x*x + y*y);\n        }\n    }\n    public static void main(String[] args) {\n        Point p = new Point(3, 4);\n        System.out.println(\"Point: (\" + p.getX() + \", \" + p.getY() + \")\");\n        System.out.println(\"Distance from origin: \" + p.distanceFromOrigin());\n    }\n}",
    "hint": "Make fields final and provide no setters."
  },
  {
    "id": "encapsulation_34",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a counter with a maximum value. Use java.util.concurrent.atomic.AtomicInteger for thread-safe increments.",
    "mathSolution": "Atomic classes provide lock-free thread safety.",
    "codeSolution": "import java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n    static class SafeCounter {\n        private AtomicInteger value = new AtomicInteger(0);\n        private final int max;\n        public SafeCounter(int max) { this.max = max; }\n        public boolean increment() {\n            int current;\n            do {\n                current = value.get();\n                if (current >= max) return false;\n            } while (!value.compareAndSet(current, current + 1));\n            return true;\n        }\n        public int getValue() { return value.get(); }\n    }\n    public static void main(String[] args) {\n        SafeCounter c = new SafeCounter(5);\n        for (int i = 0; i < 6; i++) {\n            System.out.println(\"Increment success: \" + c.increment());\n        }\n        System.out.println(\"Final value: \" + c.getValue());\n    }\n}",
    "hint": "Use compareAndSet for safe increment."
  },
  {
    "id": "encapsulation_35",
    "topicId": "encapsulation",
    "question": "Encapsulate a range (min and max) with validation that min <= max. Provide methods to check if a value is within range.",
    "mathSolution": "Consistency validation in constructor/setter.",
    "codeSolution": "public class Main {\n    static class Range {\n        private final int min;\n        private final int max;\n        public Range(int min, int max) {\n            if (min > max) throw new IllegalArgumentException(\"min must be <= max\");\n            this.min = min;\n            this.max = max;\n        }\n        public boolean contains(int value) {\n            return value >= min && value <= max;\n        }\n        public int getMin() { return min; }\n        public int getMax() { return max; }\n    }\n    public static void main(String[] args) {\n        Range r = new Range(10, 20);\n        System.out.println(\"Contains 15: \" + r.contains(15));\n        System.out.println(\"Contains 25: \" + r.contains(25));\n    }\n}",
    "hint": "Validate in constructor."
  },
  {
    "id": "encapsulation_36",
    "topicId": "encapsulation",
    "question": "Create a Person class that encapsulates an email address and validates it (contains '@' and '.').",
    "mathSolution": "String validation in setter.",
    "codeSolution": "public class Main {\n    static class Person {\n        private String email;\n        public void setEmail(String email) {\n            if (email == null || !email.contains(\"@\") || !email.contains(\".\")) {\n                throw new IllegalArgumentException(\"Invalid email format\");\n            }\n            this.email = email;\n            System.out.println(\"Email set to \" + email);\n        }\n        public String getEmail() { return email; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        try {\n            p.setEmail(\"test@example.com\");\n            p.setEmail(\"invalid\");\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Check presence of '@' and '.' in email."
  },
  {
    "id": "encapsulation_37",
    "topicId": "encapsulation",
    "question": "Implement a product class where the price can never be negative. If negative value is passed to setter, set price to 0 instead.",
    "mathSolution": "Default safe value on invalid input.",
    "codeSolution": "public class Main {\n    static class Product {\n        private double price;\n        public void setPrice(double price) {\n            if (price < 0) {\n                System.out.println(\"Invalid price, setting to 0\");\n                this.price = 0;\n            } else {\n                this.price = price;\n            }\n        }\n        public double getPrice() { return price; }\n    }\n    public static void main(String[] args) {\n        Product p = new Product();\n        p.setPrice(-10);\n        System.out.println(\"Price: $\" + p.getPrice());\n        p.setPrice(99.99);\n        System.out.println(\"Price: $\" + p.getPrice());\n    }\n}",
    "hint": "Apply correction logic in setter."
  },
  {
    "id": "encapsulation_38",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a discount percentage (0-100). Provide a getter that returns the discounted price for a given original price.",
    "mathSolution": "Business logic encapsulated in getter.",
    "codeSolution": "public class Main {\n    static class Discount {\n        private int percent;\n        public void setPercent(int percent) {\n            if (percent < 0) this.percent = 0;\n            else if (percent > 100) this.percent = 100;\n            else this.percent = percent;\n        }\n        public double applyDiscount(double price) {\n            return price * (100 - percent) / 100;\n        }\n    }\n    public static void main(String[] args) {\n        Discount d = new Discount();\n        d.setPercent(20);\n        System.out.println(\"Discounted price: $\" + d.applyDiscount(100));\n    }\n}",
    "hint": "Clamp percentage to valid range."
  },
  {
    "id": "encapsulation_39",
    "topicId": "encapsulation",
    "question": "Encapsulate a bank account with a method to transfer money to another account, ensuring sufficient balance.",
    "mathSolution": "Cross-object validation.",
    "codeSolution": "public class Main {\n    static class BankAccount {\n        private double balance;\n        public void deposit(double amount) { balance += amount; }\n        public boolean withdraw(double amount) {\n            if (amount <= balance) {\n                balance -= amount;\n                return true;\n            }\n            return false;\n        }\n        public double getBalance() { return balance; }\n        public boolean transfer(BankAccount to, double amount) {\n            if (withdraw(amount)) {\n                to.deposit(amount);\n                return true;\n            }\n            return false;\n        }\n    }\n    public static void main(String[] args) {\n        BankAccount acc1 = new BankAccount();\n        BankAccount acc2 = new BankAccount();\n        acc1.deposit(1000);\n        System.out.println(\"Transfer 300: \" + acc1.transfer(acc2, 300));\n        System.out.println(\"Acc1 balance: \" + acc1.getBalance());\n        System.out.println(\"Acc2 balance: \" + acc2.getBalance());\n    }\n}",
    "hint": "Use withdraw and deposit internally for transfer."
  },
  {
    "id": "encapsulation_40",
    "topicId": "encapsulation",
    "question": "Create a class that encapsulates a calendar date with month and day. Provide a method to add days, ensuring month rollover.",
    "mathSolution": "Encapsulate complex logic inside class.",
    "codeSolution": "public class Main {\n    static class SimpleDate {\n        private int day;\n        private int month;\n        private static final int[] daysInMonth = {31,28,31,30,31,30,31,31,30,31,30,31};\n        public SimpleDate(int month, int day) {\n            if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month-1])\n                throw new IllegalArgumentException(\"Invalid date\");\n            this.month = month;\n            this.day = day;\n        }\n        public void addDays(int days) {\n            day += days;\n            while (day > daysInMonth[month-1]) {\n                day -= daysInMonth[month-1];\n                month++;\n                if (month > 12) month = 1;\n            }\n        }\n        public String getDate() { return month + \"/\" + day; }\n    }\n    public static void main(String[] args) {\n        SimpleDate date = new SimpleDate(2, 28);\n        date.addDays(3);\n        System.out.println(\"After adding 3 days: \" + date.getDate());\n    }\n}",
    "hint": "Handle month overflow by decrementing days."
  }
);