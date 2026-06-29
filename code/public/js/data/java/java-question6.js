QuizData.questions.push(
  //  GENERICS ,FileHandling ,streamApi ,Lambda
  {
    id: "generics_1",
    topicId: "generics",
    question: "Create a simple generic class with type parameter T.",
    mathSolution: "Generic class uses type parameter in angle brackets",
    codeSolution: 'public class Main {\n    static class Box<T> {\n        private T content;\n        public void set(T content) { this.content = content; }\n        public T get() { return content; }\n    }\n    public static void main(String[] args) {\n        Box<String> stringBox = new Box<>();\n        stringBox.set("Hello Generics");\n        System.out.println(stringBox.get());\n        Box<Integer> intBox = new Box<>();\n        intBox.set(42);\n        System.out.println(intBox.get());\n    }\n}',
    hint: "Type parameter T is placeholder for actual type",
  },
  {
    id: "generics_2",
    topicId: "generics",
    question: "Generic class with multiple type parameters.",
    mathSolution: "Multiple type parameters separated by commas",
    codeSolution: 'public class Main {\n    static class Pair<K, V> {\n        private K key;\n        private V value;\n        public Pair(K key, V value) { this.key = key; this.value = value; }\n        public K getKey() { return key; }\n        public V getValue() { return value; }\n    }\n    public static void main(String[] args) {\n        Pair<String, Integer> person = new Pair<>("Alice", 25);\n        System.out.println(person.getKey() + " is " + person.getValue() + " years old");\n        Pair<Integer, String> idToName = new Pair<>(101, "Bob");\n        System.out.println("ID: " + idToName.getKey() + " -> " + idToName.getValue());\n    }\n}',
    hint: "Can have multiple type parameters like <K, V, T>",
  },
  {
    id: "generics_3",
    topicId: "generics",
    question: "Generic method in non-generic class.",
    mathSolution: "Generic methods have type parameter before return type",
    codeSolution: 'public class Main {\n    static class Utilities {\n        public static <T> void printArray(T[] array) {\n            for(T element : array) System.out.print(element + " ");\n            System.out.println();\n        }\n        public static <T> T getLast(T[] array) {\n            if(array.length == 0) return null;\n            return array[array.length - 1];\n        }\n    }\n    public static void main(String[] args) {\n        String[] names = {"Alice", "Bob", "Charlie"};\n        Integer[] numbers = {1, 2, 3, 4, 5};\n        Utilities.printArray(names);\n        Utilities.printArray(numbers);\n        System.out.println("Last name: " + Utilities.getLast(names));\n        System.out.println("Last number: " + Utilities.getLast(numbers));\n    }\n}',
    hint: "Generic methods work with any type",
  },
  {
    id: "generics_4",
    topicId: "generics",
    question: "Generic constructor in generic and non-generic classes.",
    mathSolution: "Constructors can also be generic",
    codeSolution: 'public class Main {\n    static class GenericConstructor {\n        private double value;\n        public <T extends Number> GenericConstructor(T num) { value = num.doubleValue(); }\n        void display() { System.out.println("Value: " + value); }\n    }\n    public static void main(String[] args) {\n        GenericConstructor gc1 = new GenericConstructor(10);\n        gc1.display();\n        GenericConstructor gc2 = new GenericConstructor(3.14);\n        gc2.display();\n    }\n}',
    hint: "Constructors can have their own type parameters",
  },

  // BOUNDED TYPE PARAMETERS (4)
  {
    id: "generics_5",
    topicId: "generics",
    question: "Bounded type parameter with extends.",
    mathSolution: "<T extends Number> restricts T to Number subclasses",
    codeSolution: 'public class Main {\n    static class NumericBox<T extends Number> {\n        private T number;\n        public NumericBox(T number) { this.number = number; }\n        public double doubleValue() { return number.doubleValue(); }\n        public int intValue() { return number.intValue(); }\n    }\n    public static void main(String[] args) {\n        NumericBox<Integer> intBox = new NumericBox<>(10);\n        NumericBox<Double> doubleBox = new NumericBox<>(5.5);\n        System.out.println("Int as double: " + intBox.doubleValue());\n        System.out.println("Double as int: " + doubleBox.intValue());\n    }\n}',
    hint: "extends bounds type to subclasses of specified class",
  },
  {
    id: "generics_6",
    topicId: "generics",
    question: "Bounded type parameter with interface.",
    mathSolution: "<T extends Comparable<T>> ensures T implements Comparable",
    codeSolution: 'public class Main {\n    static class MaxFinder {\n        public static <T extends Comparable<T>> T findMax(T a, T b, T c) {\n            T max = a;\n            if(b.compareTo(max) > 0) max = b;\n            if(c.compareTo(max) > 0) max = c;\n            return max;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println("Max of 10,20,15: " + MaxFinder.findMax(10,20,15));\n        System.out.println("Max of 5.5,2.2,7.7: " + MaxFinder.findMax(5.5,2.2,7.7));\n        System.out.println("Max of \'apple\',\'banana\',\'cherry\': " + MaxFinder.findMax("apple","banana","cherry"));\n    }\n}',
    hint: "extends can be class or interface, or both with &",
  },
  {
    id: "generics_7",
    topicId: "generics",
    question: "Multiple bounds with &.",
    mathSolution: "<T extends ClassA & InterfaceB & InterfaceC>",
    codeSolution: 'public class Main {\n    interface Drawable { void draw(); }\n    interface Colorable { String getColor(); }\n    static class Shape { protected String name; Shape(String n) { name = n; } }\n    static class Circle extends Shape implements Drawable, Colorable {\n        private String color;\n        Circle(String name, String color) { super(name); this.color = color; }\n        public void draw() { System.out.println("Drawing " + color + " circle"); }\n        public String getColor() { return color; }\n    }\n    static class Processor {\n        public static <T extends Shape & Drawable & Colorable> void process(T item) {\n            System.out.println("Processing: " + item.name);\n            item.draw();\n            System.out.println("Color: " + item.getColor());\n        }\n    }\n    public static void main(String[] args) {\n        Circle circle = new Circle("MyCircle", "Red");\n        Processor.process(circle);\n    }\n}',
    hint: "First bound must be class (if any), then interfaces",
  },
  {
    id: "generics_8",
    topicId: "generics",
    question: "Generic method with bounded wildcard.",
    mathSolution: "Wildcard ? with extends for upper bound",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class NumberProcessor {\n        public static double sumOfList(List<? extends Number> list) {\n            double sum = 0;\n            for(Number n : list) sum += n.doubleValue();\n            return sum;\n        }\n        public static void printNumbers(List<? extends Number> list) {\n            for(Number n : list) System.out.print(n + " ");\n            System.out.println();\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(1,2,3,4,5);\n        List<Double> doubles = Arrays.asList(1.1,2.2,3.3);\n        System.out.println("Sum of ints: " + NumberProcessor.sumOfList(ints));\n        System.out.println("Sum of doubles: " + NumberProcessor.sumOfList(doubles));\n        NumberProcessor.printNumbers(ints);\n        NumberProcessor.printNumbers(doubles);\n    }\n}',
    hint: "Upper bounded wildcard for reading",
  },

  // WILDCARDS (4)
  {
    id: "generics_9",
    topicId: "generics",
    question: "Unbounded wildcard - <?>.",
    mathSolution: "Unbounded wildcard for any type",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class WildcardDemo {\n        public static void printList(List<?> list) {\n            for(Object obj : list) System.out.print(obj + " ");\n            System.out.println();\n        }\n        public static int getListSize(List<?> list) { return list.size(); }\n    }\n    public static void main(String[] args) {\n        List<Integer> intList = Arrays.asList(1,2,3);\n        List<String> strList = Arrays.asList("A","B","C");\n        List<Double> dblList = Arrays.asList(1.1,2.2,3.3);\n        WildcardDemo.printList(intList);\n        WildcardDemo.printList(strList);\n        WildcardDemo.printList(dblList);\n        System.out.println("Size: " + WildcardDemo.getListSize(strList));\n    }\n}',
    hint: "<?> means any type, useful for read-only operations",
  },
  {
    id: "generics_10",
    topicId: "generics",
    question: "Lower bounded wildcard - <? super T>.",
    mathSolution: "Lower bound allows writing to collection",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class LowerBoundDemo {\n        public static void addNumbers(List<? super Integer> list) {\n            for(int i=1; i<=5; i++) list.add(i);\n        }\n    }\n    public static void main(String[] args) {\n        List<Number> numList = new ArrayList<>();\n        List<Object> objList = new ArrayList<>();\n        List<Integer> intList = new ArrayList<>();\n        LowerBoundDemo.addNumbers(numList);\n        LowerBoundDemo.addNumbers(objList);\n        LowerBoundDemo.addNumbers(intList);\n        System.out.println("Number list: " + numList);\n        System.out.println("Object list: " + objList);\n        System.out.println("Integer list: " + intList);\n    }\n}',
    hint: "Lower bounded wildcard for writing (add operation)",
  },
  {
    id: "generics_11",
    topicId: "generics",
    question: "Wildcard guidelines - PECS (Producer Extends, Consumer Super).",
    mathSolution: "Use extends for read, super for write",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class PecsDemo {\n        public static double sum(Collection<? extends Number> producer) {\n            double total = 0;\n            for(Number n : producer) total += n.doubleValue();\n            return total;\n        }\n        public static void addIntegers(Collection<? super Integer> consumer) {\n            for(int i=1; i<=5; i++) consumer.add(i);\n        }\n        public static <T> void swap(List<T> list, int i, int j) {\n            T temp = list.get(i);\n            list.set(i, list.get(j));\n            list.set(j, temp);\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(1,2,3,4,5);\n        List<Double> doubles = Arrays.asList(1.1,2.2,3.3);\n        System.out.println("Sum ints: " + PecsDemo.sum(ints));\n        System.out.println("Sum doubles: " + PecsDemo.sum(doubles));\n        List<Number> numbers = new ArrayList<>();\n        List<Object> objects = new ArrayList<>();\n        PecsDemo.addIntegers(numbers);\n        PecsDemo.addIntegers(objects);\n        System.out.println("Numbers: " + numbers);\n        System.out.println("Objects: " + objects);\n        List<String> names = Arrays.asList("A","B","C","D");\n        PecsDemo.swap(names,1,2);\n        System.out.println("Swapped: " + names);\n    }\n}',
    hint: "PECS: Producer Extends, Consumer Super",
  },
  {
    id: "generics_12",
    topicId: "generics",
    question: "Wildcard capture and helper methods.",
    mathSolution: "Helper methods to capture wildcard for operations",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class WildcardCapture {\n        public static void swap(List<?> list, int i, int j) { swapHelper(list, i, j); }\n        private static <T> void swapHelper(List<T> list, int i, int j) {\n            T temp = list.get(i);\n            list.set(i, list.get(j));\n            list.set(j, temp);\n        }\n        public static void reverse(List<?> list) { reverseHelper(list); }\n        private static <T> void reverseHelper(List<T> list) {\n            int size = list.size();\n            for(int i=0; i<size/2; i++) {\n                T temp = list.get(i);\n                list.set(i, list.get(size-1-i));\n                list.set(size-1-i, temp);\n            }\n        }\n    }\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>(Arrays.asList("A","B","C","D"));\n        System.out.println("Original: " + names);\n        WildcardCapture.swap(names,1,2);\n        System.out.println("After swap: " + names);\n        WildcardCapture.reverse(names);\n        System.out.println("After reverse: " + names);\n        List<Integer> nums = new ArrayList<>(Arrays.asList(1,2,3,4,5));\n        WildcardCapture.reverse(nums);\n        System.out.println("Reversed nums: " + nums);\n    }\n}',
    hint: "Helper methods capture wildcard as named type parameter",
  },

  // GENERIC COLLECTIONS (3)
  {
  id: "generics_13",
  topicId: "generics",
  question: "Generic List with type safety.",
  mathSolution: "Type-safe collections using generics",
  codeSolution: 'import java.util.*;\npublic class Main {\n    static class CollectionUtils {\n        @SafeVarargs\n        public static <T> void addAll(List<T> list, T... items) {\n            for(T item : items) list.add(item);\n        }\n        public static <T> List<T> reverse(List<T> list) {\n            List<T> result = new ArrayList<>();\n            for(int i=list.size()-1; i>=0; i--) result.add(list.get(i));\n            return result;\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = new ArrayList<>();\n        CollectionUtils.addAll(numbers, 1,2,3,4,5);\n        System.out.println("Numbers: " + numbers);\n        List<Integer> reversed = CollectionUtils.reverse(numbers);\n        System.out.println("Reversed: " + reversed);\n        List<String> colors = new ArrayList<>();\n        CollectionUtils.addAll(colors, "Red","Green","Blue");\n        System.out.println("Colors: " + colors);\n    }\n}',
  hint: "Generics provide compile-time type safety for collections",
},
  {
    id: "generics_14",
    topicId: "generics",
    question: "Generic Map with key-value pairs.",
    mathSolution: "HashMap with generic key and value types",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class MapUtils {\n        public static <K, V> void printMap(Map<K, V> map) {\n            for(Map.Entry<K, V> entry : map.entrySet())\n                System.out.println(entry.getKey() + " -> " + entry.getValue());\n        }\n    }\n    public static void main(String[] args) {\n        Map<String, Integer> ages = new HashMap<>();\n        ages.put("Alice",25); ages.put("Bob",30); ages.put("Charlie",28);\n        MapUtils.printMap(ages);\n        Map<Integer, String> idToName = new HashMap<>();\n        idToName.put(101,"John"); idToName.put(102,"Jane");\n        MapUtils.printMap(idToName);\n        Map<String, List<Integer>> studentGrades = new HashMap<>();\n        studentGrades.put("Alice", Arrays.asList(85,90,95));\n        studentGrades.put("Bob", Arrays.asList(75,80,85));\n        for(Map.Entry<String, List<Integer>> entry : studentGrades.entrySet())\n            System.out.println(entry.getKey() + " grades: " + entry.getValue());\n    }\n}',
    hint: "Maps can have generic key and value types",
  },
  {
    id: "generics_15",
    topicId: "generics",
    question: "Generic Comparator for sorting.",
    mathSolution: "Generic Comparator with type parameter",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        public String toString() { return name + "(" + age + ")"; }\n    }\n    static class AgeComparator implements Comparator<Person> {\n        public int compare(Person p1, Person p2) { return Integer.compare(p1.age, p2.age); }\n    }\n    static class NameComparator implements Comparator<Person> {\n        public int compare(Person p1, Person p2) { return p1.name.compareTo(p2.name); }\n    }\n    public static void main(String[] args) {\n        List<Person> people = Arrays.asList(\n            new Person("Charlie",30), new Person("Alice",25), new Person("Bob",28));\n        System.out.println("Original: " + people);\n        Collections.sort(people, new AgeComparator());\n        System.out.println("By age: " + people);\n        Collections.sort(people, new NameComparator());\n        System.out.println("By name: " + people);\n    }\n}',
    hint: "Comparators can be generic for type safety",
  },

  // GENERIC INHERITANCE (3)
  {
    id: "generics_16",
    topicId: "generics",
    question: "Generic class inheritance.",
    mathSolution: "Subclasses can specify or extend type parameters",
    codeSolution: 'public class Main {\n    static class GenericParent<T> {\n        private T data;\n        public GenericParent(T data) { this.data = data; }\n        public T getData() { return data; }\n    }\n    static class GenericChild<T> extends GenericParent<T> {\n        public GenericChild(T data) { super(data); }\n        public void print() { System.out.println("Data: " + getData()); }\n    }\n    static class StringChild extends GenericParent<String> {\n        public StringChild(String data) { super(data); }\n        public void printUpper() { System.out.println(getData().toUpperCase()); }\n    }\n    public static void main(String[] args) {\n        GenericChild<Integer> child = new GenericChild<>(100);\n        child.print();\n        StringChild strChild = new StringChild("hello");\n        strChild.printUpper();\n    }\n}',
    hint: "Subclasses can inherit, specify, or extend generic parameters",
  },
  {
    id: "generics_17",
    topicId: "generics",
    question: "Generic interfaces and implementation.",
    mathSolution: "Interfaces can be generic and implemented in various ways",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface Repository<T> {\n        void save(T item);\n        T findById(int id);\n        List<T> findAll();\n        void delete(int id);\n    }\n    static class InMemoryRepository<T> implements Repository<T> {\n        private Map<Integer, T> data = new HashMap<>();\n        private int nextId = 1;\n        public void save(T item) { data.put(nextId++, item); }\n        public T findById(int id) { return data.get(id); }\n        public List<T> findAll() { return new ArrayList<>(data.values()); }\n        public void delete(int id) { data.remove(id); }\n    }\n    public static void main(String[] args) {\n        Repository<Integer> intRepo = new InMemoryRepository<>();\n        intRepo.save(100); intRepo.save(200);\n        System.out.println("Int repo: " + intRepo.findAll());\n        Repository<String> strRepo = new InMemoryRepository<>();\n        strRepo.save("Hello"); strRepo.save("World");\n        System.out.println("String repo: " + strRepo.findAll());\n    }\n}',
    hint: "Interfaces can be generic, implementations have options",
  },
  {
  id: "generics_18",
  topicId: "generics",
  question: "Raw types and type erasure.",
  mathSolution: "Type erasure removes generic type information at runtime",
  codeSolution: 'import java.util.*;\npublic class Main {\n    @SuppressWarnings("unchecked")\n    public static void main(String[] args) {\n        List<String> strings = new ArrayList<>();\n        List<Integer> integers = new ArrayList<>();\n        System.out.println(strings.getClass() == integers.getClass()); // true\n        List rawList = new ArrayList();\n        rawList.add("Hello");\n        rawList.add(123);\n        System.out.println("Raw list: " + rawList);\n        System.out.println("Type erasure removes generic type info at runtime");\n    }\n}',
  hint: "Type erasure removes generics at runtime for backward compatibility",
},

  // ADVANCED GENERICS (4)
  {
    id: "generics_19",
    topicId: "generics",
    question: "Generic type inference with diamond operator.",
    mathSolution: "Diamond operator <> infers type from context",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class InferenceDemo {\n        public static <T> List<T> emptyList() { return new ArrayList<>(); }\n        public static <T> T identity(T value) { return value; }\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = InferenceDemo.emptyList();\n        ints.add(10); ints.add(20);\n        String s = InferenceDemo.identity("Hello");\n        Integer i = InferenceDemo.identity(100);\n        System.out.println("List: " + ints);\n        System.out.println("String: " + s);\n        System.out.println("Integer: " + i);\n    }\n}',
    hint: "Diamond operator and type inference reduce boilerplate",
  },
  {
    id: "generics_20",
    topicId: "generics",
    question: "Recursive type bound (self-referential generics).",
    mathSolution: "<T extends Comparable<T>> is recursive type bound",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class MaxFinder {\n        public static <T extends Comparable<T>> T max(Collection<T> collection) {\n            Iterator<T> it = collection.iterator();\n            if(!it.hasNext()) return null;\n            T max = it.next();\n            while(it.hasNext()) {\n                T current = it.next();\n                if(current.compareTo(max) > 0) max = current;\n            }\n            return max;\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> nums = Arrays.asList(10,25,5,30,15);\n        System.out.println("Max int: " + MaxFinder.max(nums));\n        List<String> strs = Arrays.asList("apple","banana","cherry");\n        System.out.println("Max string: " + MaxFinder.max(strs));\n    }\n}',
    hint: "Recursive bounds ensure type implements Comparable of itself",
  },
  {
    id: "generics_21",
    topicId: "generics",
    question: "Generic array creation workaround.",
    mathSolution: "Cannot create generic arrays directly, use workarounds",
    codeSolution: 'import java.lang.reflect.Array;\nimport java.util.*;\npublic class Main {\n    @SuppressWarnings("unchecked")\n    public static <T> T[] createArray(Class<T> clazz, int size) {\n        return (T[]) Array.newInstance(clazz, size);\n    }\n    public static void main(String[] args) {\n        String[] strArray = createArray(String.class, 5);\n        strArray[0] = "Hello";\n        strArray[1] = "World";\n        System.out.println(Arrays.toString(strArray));\n        Integer[] intArray = createArray(Integer.class, 3);\n        intArray[0] = 10;\n        intArray[1] = 20;\n        System.out.println(Arrays.toString(intArray));\n    }\n}',
    hint: "Java doesn't support generic array creation due to type erasure",
  },
  {
    id: "generics_22",
    topicId: "generics",
    question: "Type tokens for runtime generic type information.",
    mathSolution: "Use Class<T> as runtime type token",
    codeSolution: 'import java.lang.reflect.*;\nimport java.util.*;\npublic class Main {\n    public static <T> T[] createArray(Class<T> clazz, int size) {\n        @SuppressWarnings("unchecked")\n        T[] array = (T[]) Array.newInstance(clazz, size);\n        return array;\n    }\n    abstract static class TypeReference<T> {\n        private final Type type;\n        protected TypeReference() {\n            Type superClass = getClass().getGenericSuperclass();\n            if(superClass instanceof ParameterizedType)\n                type = ((ParameterizedType) superClass).getActualTypeArguments()[0];\n            else throw new RuntimeException("Invalid");\n        }\n        public Type getType() { return type; }\n    }\n    public static void main(String[] args) {\n        String[] strArray = createArray(String.class, 3);\n        strArray[0] = "Java";\n        System.out.println(Arrays.toString(strArray));\n        TypeReference<List<String>> ref = new TypeReference<List<String>>() {};\n        System.out.println("Type: " + ref.getType());\n    }\n}',
    hint: "Class<T> and TypeReference preserve type info at runtime",
  },

  // GENERICS EXCEPTIONS AND LIMITATIONS (3)
  {
    id: "generics_23",
    topicId: "generics",
    question: "Cannot create instances of type parameters.",
    mathSolution: "Type parameters cannot be instantiated directly",
    codeSolution: 'import java.lang.reflect.Array;\npublic class Main {\n    static class GenericClass<T> {\n        private Class<T> type;\n        public GenericClass(Class<T> type) { this.type = type; }\n        public T createInstance() throws Exception { return type.getDeclaredConstructor().newInstance(); }\n        public boolean isInstance(Object obj) { return type.isInstance(obj); }\n    }\n    public static void main(String[] args) throws Exception {\n        GenericClass<String> gc = new GenericClass<>(String.class);\n        String str = gc.createInstance();\n        System.out.println("Created: " + str);\n        System.out.println("Is instance of String? " + gc.isInstance("Hello"));\n        System.out.println("Is instance of Integer? " + gc.isInstance(123));\n    }\n}',
    hint: "Type erasure prevents instantiation of type parameters",
  },
  {
    id: "generics_24",
    topicId: "generics",
    question: "Cannot overload methods with same erasure.",
    mathSolution: "Method overloading conflicts after type erasure",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class ErasureConflict {\n        public void processStrings(List<String> list) { System.out.println("Processing strings"); }\n        public void processIntegers(List<Integer> list) { System.out.println("Processing integers"); }\n        public void process(List<?> list) { System.out.println("Processing any list"); }\n    }\n    public static void main(String[] args) {\n        ErasureConflict ec = new ErasureConflict();\n        ec.processStrings(Arrays.asList("A","B"));\n        ec.processIntegers(Arrays.asList(1,2));\n        ec.process(Arrays.asList(1,2,3));\n        System.out.println("After type erasure, List<String> and List<Integer> become List, so overloading fails. Use different names.");\n    }\n}',
    hint: "After type erasure, List<String> and List<Integer> both become List",
  },
  {
    id: "generics_25",
    topicId: "generics",
    question: "Cannot catch or throw generic exceptions.",
    mathSolution: "Exception classes cannot be generic",
    codeSolution: 'public class Main {\n    static class ExceptionDemo {\n        public <T extends Exception> void methodThatThrows(T exception) throws T {\n            throw exception;\n        }\n        public <T extends Throwable> void throwAsUnchecked(Throwable t) throws T {\n            @SuppressWarnings("unchecked")\n            T exception = (T) t;\n            throw exception;\n        }\n    }\n    public static void main(String[] args) {\n        ExceptionDemo demo = new ExceptionDemo();\n        try {\n            demo.methodThatThrows(new IllegalArgumentException("Error"));\n        } catch(IllegalArgumentException e) {\n            System.out.println("Caught: " + e.getMessage());\n        }\n        System.out.println("Generic exception classes not allowed; cannot catch T.");\n    }\n}',
    hint: "Java doesn't support generic exception classes or catching",
  },
  {
    "id": "generics_26",
    "topicId": "generics",
    "question": "Create a generic method that accepts a List and returns a Set of the same element type, removing duplicates.",
    "mathSolution": "Use HashSet to collect unique elements from the list.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> Set<T> toSet(List<T> list) {\n        return new HashSet<>(list);\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5);\n        Set<Integer> unique = toSet(numbers);\n        System.out.println(\"Unique numbers: \" + unique);\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\");\n        Set<String> uniqueWords = toSet(words);\n        System.out.println(\"Unique words: \" + uniqueWords);\n    }\n}",
    "hint": "Use HashSet constructor that accepts Collection."
  },
  {
    "id": "generics_27",
    "topicId": "generics",
    "question": "Write a generic method that returns the last element of any non-empty array, or null if empty.",
    "mathSolution": "Check array length and return last element.",
    "codeSolution": "public class Main {\n    public static <T> T lastElement(T[] array) {\n        return array == null || array.length == 0 ? null : array[array.length - 1];\n    }\n    public static void main(String[] args) {\n        String[] strs = {\"Java\", \"Python\", \"C++\"};\n        System.out.println(\"Last: \" + lastElement(strs));\n        Integer[] ints = {10, 20, 30};\n        System.out.println(\"Last: \" + lastElement(ints));\n        Double[] empty = new Double[0];\n        System.out.println(\"Last of empty: \" + lastElement(empty));\n    }\n}",
    "hint": "Return type T, handle null/empty case."
  },
  {
    "id": "generics_28",
    "topicId": "generics",
    "question": "Implement a generic interface Processor<T> with a method process(T input). Provide two implementations: StringProcessor and IntegerProcessor.",
    "mathSolution": "Interface defines contract; concrete classes implement with specific types.",
    "codeSolution": "public class Main {\n    interface Processor<T> {\n        void process(T input);\n    }\n    static class StringProcessor implements Processor<String> {\n        public void process(String input) {\n            System.out.println(\"Processing string: \" + input.toUpperCase());\n        }\n    }\n    static class IntegerProcessor implements Processor<Integer> {\n        public void process(Integer input) {\n            System.out.println(\"Processing integer: \" + (input * input));\n        }\n    }\n    public static void main(String[] args) {\n        Processor<String> sp = new StringProcessor();\n        sp.process(\"hello\");\n        Processor<Integer> ip = new IntegerProcessor();\n        ip.process(7);\n    }\n}",
    "hint": "Implement interface with concrete type parameters."
  },
  {
  "id": "generics_29",
  "topicId": "generics",
  "question": "Create a generic class Pair<T, U> that holds two values of possibly different types. Add methods to swap the values (only if types are the same).",
  "mathSolution": "Swap method should only be available when types are identical.",
  "codeSolution": "public class Main {\n    static class Pair<T, U> {\n        T first;\n        U second;\n        Pair(T first, U second) { this.first = first; this.second = second; }\n        @SuppressWarnings(\"unchecked\")\n        public void swap() {\n            if (first.getClass().equals(second.getClass())) {\n                T temp = first;\n                first = (T) second;\n                second = (U) temp;\n                System.out.println(\"Swapped inside Pair\");\n            } else {\n                System.out.println(\"Cannot swap different types\");\n            }\n        }\n        public String toString() { return \"(\" + first + \", \" + second + \")\"; }\n    }\n    public static void main(String[] args) {\n        Pair<String, String> p1 = new Pair<>(\"A\", \"B\");\n        System.out.println(\"Before: \" + p1);\n        p1.swap();\n        System.out.println(\"After: \" + p1);\n        Pair<Integer, String> p2 = new Pair<>(10, \"ten\");\n        p2.swap();\n        System.out.println(p2);\n    }\n}",
  "hint": "Use getClass() to compare runtime types for conditional swap and @SuppressWarnings for unchecked cast."
},
  {
    "id": "generics_30",
    "topicId": "generics",
    "question": "Write a generic method that takes a List<? extends Number> and returns the average value as double.",
    "mathSolution": "Iterate and sum numbers using doubleValue().",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static double average(List<? extends Number> numbers) {\n        if (numbers.isEmpty()) return 0.0;\n        double sum = 0.0;\n        for (Number n : numbers) sum += n.doubleValue();\n        return sum / numbers.size();\n    }\n    public static void main(String[] args) {\n        List<Integer> ints = Arrays.asList(10, 20, 30);\n        System.out.println(\"Average: \" + average(ints));\n        List<Double> doubles = Arrays.asList(2.5, 3.5, 4.0);\n        System.out.println(\"Average: \" + average(doubles));\n    }\n}",
    "hint": "Use <? extends Number> to accept any Number subclass."
  },
  {
    "id": "generics_31",
    "topicId": "generics",
    "question": "Create a generic cache class that stores key-value pairs with expiration time (simulated by timestamp). Add a method to clean expired entries.",
    "mathSolution": "Store value with timestamp; check on access and during cleanup.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class TimedValue<V> {\n        V value;\n        long timestamp;\n        TimedValue(V value) { this.value = value; this.timestamp = System.currentTimeMillis(); }\n    }\n    static class Cache<K, V> {\n        private Map<K, TimedValue<V>> map = new HashMap<>();\n        private long ttlMillis;\n        Cache(long ttlMillis) { this.ttlMillis = ttlMillis; }\n        public void put(K key, V value) {\n            map.put(key, new TimedValue<>(value));\n        }\n        public V get(K key) {\n            TimedValue<V> tv = map.get(key);\n            if (tv == null) return null;\n            if (System.currentTimeMillis() - tv.timestamp > ttlMillis) {\n                map.remove(key);\n                return null;\n            }\n            return tv.value;\n        }\n        public void clean() {\n            map.entrySet().removeIf(entry -> System.currentTimeMillis() - entry.getValue().timestamp > ttlMillis);\n        }\n        public int size() { return map.size(); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Cache<String, Integer> cache = new Cache<>(2000);\n        cache.put(\"a\", 1);\n        Thread.sleep(1000);\n        System.out.println(\"Get a: \" + cache.get(\"a\"));\n        Thread.sleep(1500);\n        System.out.println(\"Get a after expiration: \" + cache.get(\"a\"));\n        cache.put(\"b\", 2);\n        cache.clean();\n        System.out.println(\"Cache size after clean: \" + cache.size());\n    }\n}",
    "hint": "Use timestamp and ttl to manage expiration."
  },
  {
    "id": "generics_32",
    "topicId": "generics",
    "question": "Implement a generic method that copies elements from a source list to a destination list, but only if the destination is a supertype of the source element type.",
    "mathSolution": "Use wildcard with super to allow writing.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> void copy(List<? extends T> src, List<? super T> dest) {\n        dest.addAll(src);\n    }\n    public static void main(String[] args) {\n        List<Integer> src = Arrays.asList(1, 2, 3);\n        List<Number> dest = new ArrayList<>();\n        copy(src, dest);\n        System.out.println(\"Destination: \" + dest);\n        List<Object> objDest = new ArrayList<>();\n        copy(src, objDest);\n        System.out.println(\"Object destination: \" + objDest);\n    }\n}",
    "hint": "Producer extends, consumer super (PECS)."
  },
  {
    "id": "generics_33",
    "topicId": "generics",
    "question": "Create a generic class Box<T> with a static method that returns a Box of the same type parameter, but the static method cannot use T directly. Use a separate generic method.",
    "mathSolution": "Static methods have their own type parameters independent of class T.",
    "codeSolution": "public class Main {\n    static class Box<T> {\n        private T item;\n        public void set(T item) { this.item = item; }\n        public T get() { return item; }\n        public static <U> Box<U> empty() {\n            return new Box<>();\n        }\n    }\n    public static void main(String[] args) {\n        Box<String> stringBox = Box.empty();\n        stringBox.set(\"Hello\");\n        System.out.println(stringBox.get());\n        Box<Integer> intBox = Box.empty();\n        intBox.set(42);\n        System.out.println(intBox.get());\n    }\n}",
    "hint": "Static generic methods use their own type parameters."
  },
  {
    "id": "generics_34",
    "topicId": "generics",
    "question": "Write a generic method that returns the maximum element from a collection, using a custom Comparator.",
    "mathSolution": "Use Collections.max with Comparator.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> T max(Collection<T> coll, Comparator<? super T> comp) {\n        if (coll.isEmpty()) return null;\n        T max = null;\n        for (T t : coll) {\n            if (max == null || comp.compare(t, max) > 0) max = t;\n        }\n        return max;\n    }\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n        String longest = max(names, Comparator.comparingInt(String::length));\n        System.out.println(\"Longest name: \" + longest);\n        List<Integer> numbers = Arrays.asList(5, 2, 8, 1);\n        Integer maxNum = max(numbers, Comparator.naturalOrder());\n        System.out.println(\"Maximum number: \" + maxNum);\n    }\n}",
    "hint": "Use Comparator<? super T> for flexibility."
  },
   {
    "id": "generics_35",
    "topicId": "generics",
    "question": "Create a generic tuple class Tuple2<A, B> with two fields. Add a method to convert to a list.",
    "mathSolution": "Store fields; toList returns List<Object> with both values.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Tuple2<A, B> {\n        public final A first;\n        public final B second;\n        Tuple2(A first, B second) { this.first = first; this.second = second; }\n        public List<Object> toList() {\n            return Arrays.asList(first, second);\n        }\n        public String toString() { return \"(\" + first + \", \" + second + \")\"; }\n    }\n    public static void main(String[] args) {\n        Tuple2<String, Integer> tuple = new Tuple2<>(\"Age\", 25);\n        System.out.println(\"Tuple: \" + tuple);\n        System.out.println(\"As list: \" + tuple.toList());\n    }\n}",
    "hint": "Use public final fields or getters for immutable tuple."
  },
  {
    "id": "generics_36",
    "topicId": "generics",
    "question": "Implement a generic method that takes a list and a predicate (function from T to boolean) and returns a new list with elements that satisfy the predicate.",
    "mathSolution": "Use generic functional interface Predicate.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Predicate;\npublic class Main {\n    public static <T> List<T> filter(List<T> list, Predicate<? super T> predicate) {\n        List<T> result = new ArrayList<>();\n        for (T item : list) {\n            if (predicate.test(item)) result.add(item);\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);\n        List<Integer> evens = filter(numbers, n -> n % 2 == 0);\n        System.out.println(\"Even numbers: \" + evens);\n        List<String> words = Arrays.asList(\"cat\", \"elephant\", \"dog\", \"hippopotamus\");\n        List<String> longWords = filter(words, s -> s.length() > 4);\n        System.out.println(\"Long words: \" + longWords);\n    }\n}",
    "hint": "Use Predicate from java.util.function."
  },
  {
    "id": "generics_37",
    "topicId": "generics",
    "question": "Create a generic interface Transformer<T, R> with a method transform(T input) returning R. Implement for String to Integer (length) and Integer to String (description).",
    "mathSolution": "Functional transformation between types.",
    "codeSolution": "public class Main {\n    interface Transformer<T, R> {\n        R transform(T input);\n    }\n    public static void main(String[] args) {\n        Transformer<String, Integer> lengthTransformer = s -> s.length();\n        System.out.println(\"Length of 'Java': \" + lengthTransformer.transform(\"Java\"));\n        Transformer<Integer, String> descTransformer = n -> \"Number: \" + n;\n        System.out.println(descTransformer.transform(42));\n    }\n}",
    "hint": "Generic interface can transform any T to any R."
  },
  {
    "id": "generics_38",
    "topicId": "generics",
    "question": "Write a generic method that safely casts a list of one type to another, throwing ClassCastException if elements are not of the target type.",
    "mathSolution": "Iterate and check each element's type.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    @SuppressWarnings(\"unchecked\")\n    public static <T> List<T> castList(List<?> list, Class<T> clazz) {\n        for (Object obj : list) {\n            if (!clazz.isInstance(obj)) {\n                throw new ClassCastException(\"Element \" + obj + \" is not of type \" + clazz.getSimpleName());\n            }\n        }\n        return (List<T>) list;\n    }\n    public static void main(String[] args) {\n        List<Object> mixed = Arrays.asList(\"Hello\", \"World\");\n        List<String> strings = castList(mixed, String.class);\n        System.out.println(\"Cast successful: \" + strings);\n        try {\n            List<Object> mixed2 = Arrays.asList(\"Hello\", 123);\n            List<String> fail = castList(mixed2, String.class);\n        } catch(ClassCastException e) {\n            System.out.println(\"Caught: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use Class.isInstance() for runtime type checking."
  },
  {
    "id": "generics_39",
    "topicId": "generics",
    "question": "Create a generic builder class for constructing immutable objects (e.g., a Person with name and age). Use generics to enforce type safety during chaining.",
    "mathSolution": "Builder with generic self-type for fluent API.",
    "codeSolution": "public class Main {\n    static class Person {\n        private final String name;\n        private final int age;\n        private Person(Builder<?> builder) { this.name = builder.name; this.age = builder.age; }\n        public String toString() { return name + \" (\" + age + \")\"; }\n        public static Builder<?> builder() { return new Builder<>(); }\n        static class Builder<T extends Builder<T>> {\n            private String name;\n            private int age;\n            @SuppressWarnings(\"unchecked\")\n            public T name(String name) { this.name = name; return (T) this; }\n            @SuppressWarnings(\"unchecked\")\n            public T age(int age) { this.age = age; return (T) this; }\n            public Person build() { return new Person(this); }\n        }\n    }\n    public static void main(String[] args) {\n        Person p = Person.builder().name(\"Alice\").age(30).build();\n        System.out.println(p);\n    }\n}",
    "hint": "Use recursive generic bound for fluent builder."
  },
  {
    "id": "generics_40",
    "topicId": "generics",
    "question": "Implement a generic method that returns the common prefix of two lists, i.e., a list of elements that are equal up to the shorter length.",
    "mathSolution": "Compare elements pairwise until mismatch.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static <T> List<T> commonPrefix(List<T> list1, List<T> list2) {\n        List<T> result = new ArrayList<>();\n        int minSize = Math.min(list1.size(), list2.size());\n        for (int i = 0; i < minSize; i++) {\n            if (list1.get(i).equals(list2.get(i))) {\n                result.add(list1.get(i));\n            } else {\n                break;\n            }\n        }\n        return result;\n    }\n    public static void main(String[] args) {\n        List<Integer> a = Arrays.asList(1,2,3,4,5);\n        List<Integer> b = Arrays.asList(1,2,3,0,9);\n        System.out.println(\"Common prefix: \" + commonPrefix(a, b));\n        List<String> s1 = Arrays.asList(\"a\",\"b\",\"c\");\n        List<String> s2 = Arrays.asList(\"a\",\"b\",\"d\");\n        System.out.println(\"Common prefix: \" + commonPrefix(s1, s2));\n    }\n}",
    "hint": "Use equals() to compare elements for equality."
  },
   // FILE CREATION AND BASIC OPERATIONS (5)
  {
    id: "file_1",
    topicId: "file",
    question: "Create a new file using File class.",
    mathSolution: "Use createNewFile() method",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("test.txt");\n        try {\n            if(file.createNewFile()) System.out.println("File created: " + file.getName());\n            else System.out.println("File already exists");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "createNewFile() returns boolean",
  },
  {
    id: "file_2",
    topicId: "file",
    question: "Check if file exists and get file properties.",
    mathSolution: "Use exists(), length(), etc.",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("test.txt");\n        if(file.exists()) {\n            System.out.println("File name: " + file.getName());\n            System.out.println("Absolute path: " + file.getAbsolutePath());\n            System.out.println("Size: " + file.length() + " bytes");\n            System.out.println("Readable: " + file.canRead());\n            System.out.println("Writable: " + file.canWrite());\n        } else {\n            System.out.println("File does not exist");\n        }\n    }\n}',
    hint: "File class has many property methods",
  },
  {
    id: "file_3",
    topicId: "file",
    question: "Delete a file.",
    mathSolution: "Use delete() method",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("temp.txt");\n        if(file.delete()) System.out.println("Deleted: " + file.getName());\n        else System.out.println("Delete failed (file may not exist)");\n    }\n}',
    hint: "delete() returns boolean",
  },
  {
    id: "file_4",
    topicId: "file",
    question: "Rename or move a file.",
    mathSolution: "Use renameTo() method",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File oldFile = new File("old.txt");\n        File newFile = new File("new.txt");\n        if(oldFile.renameTo(newFile)) System.out.println("Renamed successfully");\n        else System.out.println("Rename failed (source may not exist)");\n    }\n}',
    hint: "renameTo() moves/renames file",
  },
  {
    id: "file_5",
    topicId: "file",
    question: "Create directory and nested directories.",
    mathSolution: "Use mkdir() and mkdirs()",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File dir = new File("myFolder");\n        if(dir.mkdir()) System.out.println("Directory created");\n        else System.out.println("Directory already exists or failed");\n        File nested = new File("parent/child/grandchild");\n        if(nested.mkdirs()) System.out.println("Nested directories created");\n        else System.out.println("Nested directories already exist or failed");\n    }\n}',
    hint: "mkdirs() creates all parent directories",
  },

  // FILE WRITING (5)
  {
    id: "file_6",
    topicId: "file",
    question: "Write to file using FileWriter.",
    mathSolution: "FileWriter writes character data",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (FileWriter writer = new FileWriter("output.txt")) {\n            writer.write("Hello World!\\n");\n            writer.write("Second line");\n            System.out.println("Written successfully");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "FileWriter for text files",
  },
  {
    id: "file_7",
    topicId: "file",
    question: "Write to file using BufferedWriter.",
    mathSolution: "BufferedWriter for better performance",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (BufferedWriter writer = new BufferedWriter(new FileWriter("buffered.txt"))) {\n            writer.write("Buffered writing");\n            writer.newLine();\n            writer.write("Another line");\n            System.out.println("Buffered write complete");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "BufferedWriter has newLine() method",
  },
  {
    id: "file_8",
    topicId: "file",
    question: "Append to existing file.",
    mathSolution: "Use FileWriter with append flag",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (FileWriter writer = new FileWriter("log.txt", true)) {\n            writer.write("New log entry at " + new java.util.Date() + "\\n");\n            System.out.println("Appended to file");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Pass true as second parameter to append",
  },
  {
    id: "file_9",
    topicId: "file",
    question: "Write to file using PrintWriter.",
    mathSolution: "PrintWriter has print/println methods",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (PrintWriter pw = new PrintWriter(new File("print.txt"))) {\n            pw.println("PrintWriter example");\n            pw.printf("Formatted: %d + %d = %d%n", 5, 3, 5+3);\n            System.out.println("PrintWriter done");\n        } catch(FileNotFoundException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "PrintWriter supports format strings",
  },
  {
    id: "file_10",
    topicId: "file",
    question: "Write binary data using FileOutputStream.",
    mathSolution: "FileOutputStream for bytes",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (FileOutputStream fos = new FileOutputStream("binary.dat")) {\n            byte[] data = {65, 66, 67, 68, 69};\n            fos.write(data);\n            System.out.println("Binary data written");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "FileOutputStream writes bytes",
  },

  // FILE READING (5) – all corrected to create sample files
  {
    id: "file_11",
    topicId: "file",
    question: "Read file using FileReader.",
    mathSolution: "FileReader reads character by character",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File sample = new File("input.txt");\n        if(!sample.exists()) {\n            try (FileWriter fw = new FileWriter(sample)) {\n                fw.write("Hello from sample file\\nSecond line");\n            } catch(IOException e) {}\n        }\n        try (FileReader reader = new FileReader("input.txt")) {\n            int character;\n            while((character = reader.read()) != -1) {\n                System.out.print((char)character);\n            }\n        } catch(IOException e) {\n            System.out.println("Cannot read file: " + e.getMessage());\n        }\n    }\n}',
    hint: "read() returns -1 at end of file",
  },
  {
    id: "file_12",
    topicId: "file",
    question: "Read file using BufferedReader (line by line).",
    mathSolution: "BufferedReader reads lines efficiently",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File sample = new File("input.txt");\n        if(!sample.exists()) {\n            try (FileWriter fw = new FileWriter(sample)) {\n                fw.write("Line 1\\nLine 2\\nLine 3");\n            } catch(IOException e) {}\n        }\n        try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {\n            String line;\n            while((line = br.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch(IOException e) {\n            System.out.println("Cannot read file: " + e.getMessage());\n        }\n    }\n}',
    hint: "readLine() returns null at EOF",
  },
  {
  id: "file_13",
  topicId: "file",
  question: "Read file using Scanner.",
  mathSolution: "Scanner provides parsing methods",
  codeSolution: 'import java.io.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        File sample = new File("data.txt");\n        if(!sample.exists()) {\n            try (FileWriter fw = new FileWriter(sample)) {\n                fw.write("Apple\\nBanana\\nOrange");\n            } catch(IOException e) {}\n        }\n        try (Scanner scanner = new Scanner(new File("data.txt"))) {\n            while(scanner.hasNextLine()) {\n                System.out.println(scanner.nextLine());\n            }\n        } catch(FileNotFoundException e) {\n            System.out.println("File not found - but we created it, shouldn\'t happen");\n        }\n    }\n}',
  hint: "Scanner has hasNextLine() and nextLine()",
},
  {
    id: "file_14",
    topicId: "file",
    question: "Read binary data using FileInputStream.",
    mathSolution: "FileInputStream reads bytes",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File bin = new File("binary.dat");\n        if(!bin.exists() || bin.length() == 0) {\n            try (FileOutputStream fos = new FileOutputStream(bin)) {\n                byte[] data = {65, 66, 67, 68, 69};\n                fos.write(data);\n            } catch(IOException e) {}\n        }\n        try (FileInputStream fis = new FileInputStream("binary.dat")) {\n            int byteData;\n            while((byteData = fis.read()) != -1) {\n                System.out.print(byteData + " ");\n            }\n            System.out.println();\n        } catch(IOException e) {\n            System.out.println("Cannot read file: " + e.getMessage());\n        }\n    }\n}',
    hint: "read() returns int from 0-255 or -1",
  },
  {
    id: "file_15",
    topicId: "file",
    question: "Read file into byte array.",
    mathSolution: "Read all bytes at once",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("sample.txt");\n        if(!file.exists()) {\n            try (FileWriter fw = new FileWriter(file)) {\n                fw.write("Hello byte array!");\n            } catch(IOException e) {}\n        }\n        if(file.length() > Integer.MAX_VALUE) return;\n        byte[] fileData = new byte[(int)file.length()];\n        try (FileInputStream fis = new FileInputStream(file)) {\n            int bytesRead = fis.read(fileData);\n            System.out.println("Read " + bytesRead + " bytes");\n            System.out.println(new String(fileData));\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Read entire file into byte array",
  },

  // FILE AND DIRECTORY LISTING (3)
  {
    id: "file_16",
    topicId: "file",
    question: "List all files in a directory.",
    mathSolution: "Use list() or listFiles()",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File dir = new File(".");\n        File[] files = dir.listFiles();\n        if(files != null) {\n            System.out.println("Files in current directory:");\n            for(File f : files) {\n                if(f.isFile()) System.out.println("File: " + f.getName());\n                else if(f.isDirectory()) System.out.println("Dir:  " + f.getName());\n            }\n        }\n    }\n}',
    hint: "listFiles() returns File array",
  },
  {
    id: "file_17",
    topicId: "file",
    question: "Filter files by extension.",
    mathSolution: "Use FilenameFilter",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File dir = new File(".");\n        String[] txtFiles = dir.list((d, name) -> name.endsWith(".txt"));\n        if(txtFiles != null) {\n            System.out.println("Text files:");\n            for(String f : txtFiles) System.out.println(f);\n        }\n    }\n}',
    hint: "FilenameFilter filters file names (lambda used here)",
  },
  {
    id: "file_18",
    topicId: "file",
    question: "Recursively list all files in subdirectories.",
    mathSolution: "Recursive directory traversal",
    codeSolution: 'import java.io.*;\npublic class Main {\n    static void listFilesRecursive(File dir) {\n        File[] files = dir.listFiles();\n        if(files != null) {\n            for(File f : files) {\n                if(f.isDirectory()) listFilesRecursive(f);\n                else System.out.println(f.getAbsolutePath());\n            }\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println("Recursive file listing:");\n        listFilesRecursive(new File("."));\n    }\n}',
    hint: "Recursive method for nested directories",
  },

  // FILE STREAMS AND ADVANCED (5) – corrected to create sample files where needed
  {
    id: "file_19",
    topicId: "file",
    question: "Copy file using FileInputStream and FileOutputStream.",
    mathSolution: "Read from source, write to destination",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File src = new File("source.txt");\n        if(!src.exists()) {\n            try (FileWriter fw = new FileWriter(src)) {\n                fw.write("Content to copy.");\n            } catch(IOException e) {}\n        }\n        try (FileInputStream fis = new FileInputStream("source.txt");\n             FileOutputStream fos = new FileOutputStream("copy.txt")) {\n            int b;\n            while((b = fis.read()) != -1) fos.write(b);\n            System.out.println("File copied");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Read and write byte by byte",
  },
  {
    id: "file_20",
    topicId: "file",
    question: "Copy large file using buffer for performance.",
    mathSolution: "Use buffered streams",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        // Create a small dummy file if large.zip does not exist\n        File large = new File("large.zip");\n        if(!large.exists()) {\n            try (FileOutputStream fos = new FileOutputStream(large)) {\n                byte[] dummy = new byte[100];\n                fos.write(dummy);\n            } catch(IOException e) {}\n        }\n        try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("large.zip"));\n             BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("large_copy.zip"))) {\n            byte[] buffer = new byte[4096];\n            int bytesRead;\n            while((bytesRead = bis.read(buffer)) != -1) {\n                bos.write(buffer, 0, bytesRead);\n            }\n            System.out.println("Large file copied");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Use buffer array for efficiency",
  },
  {
    id: "file_21",
    topicId: "file",
    question: "Read file using try-with-resources.",
    mathSolution: "Automatic resource management",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File f = new File("input.txt");\n        if(!f.exists()) {\n            try (FileWriter fw = new FileWriter(f)) {\n                fw.write("Line one\\nLine two");\n            } catch(IOException e) {}\n        }\n        try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) {\n            String line;\n            while((line = br.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Resources in try() close automatically",
  },
  {
    id: "file_22",
    topicId: "file",
    question: "Read file using Files class (Java NIO).",
    mathSolution: "Files class utility methods",
    codeSolution: 'import java.nio.file.*;\nimport java.io.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Path path = Paths.get("input.txt");\n        try {\n            if(!Files.exists(path)) {\n                Files.write(path, Arrays.asList("First line", "Second line"));\n            }\n            List<String> lines = Files.readAllLines(path);\n            for(String line : lines) System.out.println(line);\n            byte[] data = Files.readAllBytes(path);\n            System.out.println("File size: " + data.length);\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Files.readAllLines() reads all lines",
  },
  {
    id: "file_23",
    topicId: "file",
    question: "Write using Files class (Java NIO).",
    mathSolution: "Files.write() for simple writing",
    codeSolution: 'import java.nio.file.*;\nimport java.io.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        try {\n            Path path = Paths.get("nio_output.txt");\n            List<String> lines = Arrays.asList("Line 1", "Line 2", "Line 3");\n            Files.write(path, lines);\n            System.out.println("Written using NIO");\n            Files.write(path, "\\nAppended line".getBytes(), StandardOpenOption.APPEND);\n            System.out.println("Appended");\n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "Files.write() with options",
  },

  // FILE PERMISSIONS AND ATTRIBUTES (2)
  {
    id: "file_24",
    topicId: "file",
    question: "Set file permissions (read, write, execute).",
    mathSolution: "Use setReadable(), setWritable(), setExecutable()",
    codeSolution: 'import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("script.sh");\n        if(file.exists()) {\n            file.setReadable(true);\n            file.setWritable(true);\n            file.setExecutable(true);\n            System.out.println("Permissions set: rwx");\n            System.out.println("Read: " + file.canRead());\n            System.out.println("Write: " + file.canWrite());\n            System.out.println("Exec: " + file.canExecute());\n        } else {\n            System.out.println("File does not exist");\n        }\n    }\n}',
    hint: "Set permissions with boolean flags",
  },
  {
    id: "file_25",
    topicId: "file",
    question: "Get file last modified time and set new time.",
    mathSolution: "Use lastModified() and setLastModified()",
    codeSolution: 'import java.io.*;\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n        File file = new File("test.txt");\n        if(file.exists()) {\n            long lastModified = file.lastModified();\n            System.out.println("Last modified: " + new Date(lastModified));\n            boolean success = file.setLastModified(System.currentTimeMillis());\n            if(success) System.out.println("Modified time updated");\n            else System.out.println("Failed to update time");\n        } else {\n            System.out.println("File does not exist");\n        }\n    }\n}',
    hint: "lastModified returns timestamp in milliseconds",
  },
  {
    "id": "file_26",
    "topicId": "file",
    "question": "Write a Serializable object (Person with name and age) to a file using ObjectOutputStream and read it back using ObjectInputStream.",
    "mathSolution": "Serialization allows writing objects to a stream; deserialization reconstructs them.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    static class Person implements Serializable {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        public String toString() { return name + \" (\" + age + \")\"; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person(\"Alice\", 25);\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(\"person.dat\"));\n             ObjectInputStream ois = new ObjectInputStream(new FileInputStream(\"person.dat\"))) {\n            oos.writeObject(p);\n            Person readPerson = (Person) ois.readObject();\n            System.out.println(\"Read object: \" + readPerson);\n        } catch(IOException | ClassNotFoundException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "Implement Serializable interface, use writeObject() and readObject()."
  },
  {
    "id": "file_27",
    "topicId": "file",
    "question": "Use RandomAccessFile to write a string at position 10 and read from position 5.",
    "mathSolution": "RandomAccessFile allows reading/writing at any file pointer position.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (RandomAccessFile raf = new RandomAccessFile(\"random.txt\", \"rw\")) {\n            raf.writeBytes(\"HelloWorld12345\");\n            raf.seek(5);\n            byte[] buffer = new byte[5];\n            raf.read(buffer);\n            System.out.println(\"From position 5: \" + new String(buffer));\n            raf.seek(10);\n            raf.writeBytes(\"JAVA\");\n            raf.seek(0);\n            byte[] all = new byte[(int)raf.length()];\n            raf.read(all);\n            System.out.println(\"Final content: \" + new String(all));\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "Use seek() to move file pointer, write() and read() methods."
  },
  {
    "id": "file_28",
    "topicId": "file",
    "question": "Create a temporary file using File.createTempFile() and ensure it is deleted when the JVM exits.",
    "mathSolution": "createTempFile() creates a unique file in default temp directory; deleteOnExit() marks it for deletion.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        File temp = File.createTempFile(\"myprefix\", \".tmp\");\n        temp.deleteOnExit();\n        System.out.println(\"Temp file created: \" + temp.getAbsolutePath());\n        try (FileWriter fw = new FileWriter(temp)) {\n            fw.write(\"Temporary data\");\n        }\n        System.out.println(\"File will be deleted on JVM exit.\");\n    }\n}",
    "hint": "Use createTempFile(prefix, suffix) and deleteOnExit()."
  },
  {
  "id": "file_29",
  "topicId": "file",
  "question": "Check if a given path is a regular file, directory, or symbolic link using Files class (NIO).",
  "mathSolution": "Files.isRegularFile(), isDirectory(), isSymbolicLink() provide type information.",
  "codeSolution": "import java.nio.file.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path p1 = Paths.get(\"test.txt\");\n        Path p2 = Paths.get(\"myFolder\");\n        if (!Files.exists(p1)) Files.createFile(p1);\n        if (!Files.exists(p2)) Files.createDirectory(p2);\n        System.out.println(p1 + \" is regular file: \" + Files.isRegularFile(p1));\n        System.out.println(p1 + \" is directory: \" + Files.isDirectory(p1));\n        System.out.println(p2 + \" is directory: \" + Files.isDirectory(p2));\n    }\n}",
  "hint": "Use Files helper methods for file type checks."
},
  {
    "id": "file_30",
    "topicId": "file",
    "question": "Get the size of a file in a human readable format (e.g., 1.5 MB) using File.length().",
    "mathSolution": "Convert bytes to KB, MB, GB using division and conditional logic.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    static String readableSize(long bytes) {\n        if (bytes < 1024) return bytes + \" B\";\n        int exp = (int)(Math.log(bytes) / Math.log(1024));\n        char pre = \"KMGTPE\".charAt(exp-1);\n        return String.format(\"%.1f %sB\", bytes / Math.pow(1024, exp), pre);\n    }\n    public static void main(String[] args) {\n        File f = new File(\"test.txt\");\n        if (!f.exists()) {\n            try { f.createNewFile(); } catch(IOException e) {}\n        }\n        long size = f.length();\n        System.out.println(\"Raw size: \" + size + \" bytes\");\n        System.out.println(\"Readable size: \" + readableSize(size));\n    }\n}",
    "hint": "Use Math.log to determine appropriate unit."
  },
  {
    "id": "file_31",
    "topicId": "file",
    "question": "List all available drives (roots) on the system using File.listRoots().",
    "mathSolution": "listRoots() returns an array of File objects representing root directories.",
    "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        File[] roots = File.listRoots();\n        System.out.println(\"Available drives:\");\n        for (File root : roots) {\n            System.out.println(root.getAbsolutePath());\n        }\n    }\n}",
    "hint": "File.listRoots() works on Windows and Unix."
  },
  {
    "id": "file_32",
    "topicId": "file",
    "question": "Use FileChannel to copy a file using transferTo method for efficient copying.",
    "mathSolution": "FileChannel.transferTo() copies data directly between channels without user space.",
    "codeSolution": "import java.io.*;\nimport java.nio.channels.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        File src = new File(\"source.txt\");\n        File dest = new File(\"dest.txt\");\n        if (!src.exists()) {\n            try (FileWriter fw = new FileWriter(src)) { fw.write(\"Data for channel copy\"); }\n        }\n        try (FileInputStream fis = new FileInputStream(src);\n             FileOutputStream fos = new FileOutputStream(dest);\n             FileChannel inChannel = fis.getChannel();\n             FileChannel outChannel = fos.getChannel()) {\n            long transferred = inChannel.transferTo(0, inChannel.size(), outChannel);\n            System.out.println(\"Copied \" + transferred + \" bytes using FileChannel.transferTo()\");\n        }\n    }\n}",
    "hint": "Get FileChannel from streams and use transferTo."
  },
  {
    "id": "file_33",
    "topicId": "file",
    "question": "Read a text file line by line using Files.lines() (Stream API) and print each line.",
    "mathSolution": "Files.lines() returns a Stream<String> that can be processed with forEach.",
    "codeSolution": "import java.nio.file.*;\nimport java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        Path path = Paths.get(\"input.txt\");\n        try {\n            if (!Files.exists(path)) {\n                Files.write(path, \"Line 1\\nLine 2\\nLine 3\".getBytes());\n            }\n            Files.lines(path).forEach(System.out::println);\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "Use Files.lines() and close the stream automatically."
  },
  {
  "id": "file_34",
  "topicId": "file",
  "question": "Write multiple lines to a file using Files.write() with an Iterable (e.g., List).",
  "mathSolution": "Files.write(Path, Iterable<? extends CharSequence>, Charset, OpenOption) is convenient.",
  "codeSolution": "import java.nio.file.*;\nimport java.util.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> lines = Arrays.asList(\"First line\", \"Second line\", \"Third line\");\n        Path path = Paths.get(\"lines.txt\");\n        try {\n            Files.write(path, lines);\n            System.out.println(\"Written \" + lines.size() + \" lines.\");\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
  "hint": "Files.write can accept a List of strings."
},
  {
    "id": "file_35",
    "topicId": "file",
    "question": "Check if two files have identical content by reading all bytes and comparing with Arrays.equals.",
    "mathSolution": "Files.readAllBytes() reads entire file; compare byte arrays.",
    "codeSolution": "import java.nio.file.*;\nimport java.util.Arrays;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path f1 = Paths.get(\"file1.txt\");\n        Path f2 = Paths.get(\"file2.txt\");\n        if (!Files.exists(f1)) Files.write(f1, \"Hello\".getBytes());\n        if (!Files.exists(f2)) Files.write(f2, \"Hello\".getBytes());\n        byte[] data1 = Files.readAllBytes(f1);\n        byte[] data2 = Files.readAllBytes(f2);\n        boolean equal = Arrays.equals(data1, data2);\n        System.out.println(\"Files are identical: \" + equal);\n    }\n}",
    "hint": "Use Files.readAllBytes() and Arrays.equals()."
  },
  {
    "id": "file_36",
    "topicId": "file",
    "question": "Move a file from one directory to another using Files.move with StandardCopyOption.REPLACE_EXISTING.",
    "mathSolution": "Files.move requires source and target paths; options control overwriting.",
    "codeSolution": "import java.nio.file.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path source = Paths.get(\"source.txt\");\n        Path target = Paths.get(\"subdir/source.txt\");\n        if (!Files.exists(source)) Files.write(source, \"Move me\".getBytes());\n        if (!Files.exists(Paths.get(\"subdir\"))) Files.createDirectory(Paths.get(\"subdir\"));\n        Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);\n        System.out.println(\"File moved to: \" + target.toAbsolutePath());\n    }\n}",
    "hint": "Use Files.move() with REPLACE_EXISTING to overwrite."
  },
  {
    "id": "file_37",
    "topicId": "file",
    "question": "Create a symbolic link (if supported) using Files.createSymbolicLink and verify it.",
    "mathSolution": "Symbolic links are created with createSymbolicLink; need to handle UnsupportedOperationException.",
    "codeSolution": "import java.nio.file.*;\npublic class Main {\n    public static void main(String[] args) {\n        Path target = Paths.get(\"test.txt\");\n        Path link = Paths.get(\"link_to_test.txt\");\n        try {\n            if (!Files.exists(target)) Files.createFile(target);\n            Files.createSymbolicLink(link, target);\n            System.out.println(\"Symbolic link created: \" + link);\n            System.out.println(\"Is symbolic link? \" + Files.isSymbolicLink(link));\n        } catch(UnsupportedOperationException e) {\n            System.out.println(\"Symbolic links not supported on this file system\");\n        } catch(Exception e) {\n            System.out.println(\"Error: \" + e);\n        }\n    }\n}",
    "hint": "createSymbolicLink may throw UnsupportedOperationException on some OS/file systems."
  },
  {
    "id": "file_38",
    "topicId": "file",
    "question": "Read file attributes like creation time, last access time, and last modified time using Files.readAttributes.",
    "mathSolution": "BasicFileAttributes interface provides timestamps.",
    "codeSolution": "import java.nio.file.*;\nimport java.nio.file.attribute.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path path = Paths.get(\"test.txt\");\n        if (!Files.exists(path)) Files.createFile(path);\n        BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);\n        System.out.println(\"Creation time: \" + attrs.creationTime());\n        System.out.println(\"Last access time: \" + attrs.lastAccessTime());\n        System.out.println(\"Last modified time: \" + attrs.lastModifiedTime());\n    }\n}",
    "hint": "Use BasicFileAttributes to get file timestamps."
  },
  {
    "id": "file_39",
    "topicId": "file",
    "question": "Write to a file using FileChannel and ByteBuffer. Use a buffer with capacity 1024.",
    "mathSolution": "ByteBuffer stores data; channel.write() writes from buffer.",
    "codeSolution": "import java.io.*;\nimport java.nio.*;\nimport java.nio.channels.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        try (FileChannel channel = new FileOutputStream(\"nio_buffer.txt\").getChannel()) {\n            ByteBuffer buffer = ByteBuffer.allocate(1024);\n            String data = \"Writing via FileChannel and ByteBuffer\";\n            buffer.put(data.getBytes());\n            buffer.flip();\n            while (buffer.hasRemaining()) channel.write(buffer);\n            System.out.println(\"Data written using FileChannel.\");\n        }\n    }\n}",
    "hint": "Flip buffer after putting data before writing."
  },
  {
  "id": "file_40",
  "topicId": "file",
  "question": "Read from console (System.in) using BufferedReader and write the input to a file until user types 'exit'.",
  "mathSolution": "Use BufferedReader to read lines; break on \"exit\" or end-of-input.",
  "codeSolution": "import java.io.*;\npublic class Main {\n    public static void main(String[] args) {\n        try (BufferedReader console = new BufferedReader(new InputStreamReader(System.in));\n             FileWriter fw = new FileWriter(\"console_output.txt\")) {\n            System.out.println(\"Enter text (type 'exit' to finish):\");\n            String line;\n            while ((line = console.readLine()) != null) {\n                if (line.equalsIgnoreCase(\"exit\")) {\n                    break;\n                }\n                fw.write(line + \"\\n\");\n            }\n            System.out.println(\"Input saved to console_output.txt\");\n        } catch(IOException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
  "hint": "Check for null from readLine() to handle EOF gracefully."
},
//streamapi
 {
    id: "stream_1",
    topicId: "stream",
    question: "Create stream from different sources.",
    mathSolution: "Streams can be created from collections, arrays, or values",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList("Apple", "Banana", "Orange");\n        Stream<String> streamFromList = list.stream();\n        String[] array = {"Red", "Green", "Blue"};\n        Stream<String> streamFromArray = Arrays.stream(array);\n        Stream<Integer> streamFromValues = Stream.of(1, 2, 3, 4, 5);\n        IntStream intStream = IntStream.range(1, 10);\n        IntStream intStreamClosed = IntStream.rangeClosed(1, 10);\n        Stream<String> streamFromBuilder = Stream.<String>builder().add("One").add("Two").add("Three").build();\n        Stream<Double> randomStream = Stream.generate(Math::random).limit(5);\n        Stream<Integer> iterateStream = Stream.iterate(0, n -> n + 2).limit(5);\n        System.out.println("From list: " + streamFromList.collect(Collectors.toList()));\n        System.out.println("From array: " + streamFromArray.collect(Collectors.toList()));\n        System.out.println("From values: " + streamFromValues.collect(Collectors.toList()));\n        System.out.println("Int range: " + intStream.boxed().collect(Collectors.toList()));\n        System.out.println("From builder: " + streamFromBuilder.collect(Collectors.toList()));\n        System.out.println("Random: " + randomStream.collect(Collectors.toList()));\n        System.out.println("Iterate: " + iterateStream.collect(Collectors.toList()));\n    }\n}',
    hint: "Stream.of(), Arrays.stream(), collection.stream()",
  },
  {
    id: "stream_2",
    topicId: "stream",
    question: "Convert stream back to collection.",
    mathSolution: "Use collectors to convert stream to collections",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");\n        List<String> listResult = names.stream().filter(name -> name.length() > 3).collect(Collectors.toList());\n        System.out.println("List: " + listResult);\n        Set<String> setResult = names.stream().filter(name -> name.startsWith("A") || name.startsWith("C")).collect(Collectors.toSet());\n        System.out.println("Set: " + setResult);\n        TreeSet<String> treeSet = names.stream().collect(Collectors.toCollection(TreeSet::new));\n        System.out.println("TreeSet: " + treeSet);\n        Map<String, Integer> mapResult = names.stream().collect(Collectors.toMap(name -> name, name -> name.length(), (v1, v2) -> v1));\n        System.out.println("Map: " + mapResult);\n        String[] arrayResult = names.stream().filter(name -> name.contains("a")).toArray(String[]::new);\n        System.out.println("Array: " + Arrays.toString(arrayResult));\n    }\n}',
    hint: "collect(Collectors.toList()), toSet(), toMap(), toArray()",
  },
  {
    id: "stream_3",
    topicId: "stream",
    question: "Primitive streams (IntStream, LongStream, DoubleStream).",
    mathSolution: "Specialized streams for primitive types to avoid boxing",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        IntStream intStream = IntStream.of(1, 2, 3, 4, 5);\n        int sum = intStream.sum();\n        System.out.println("Sum: " + sum);\n        intStream = IntStream.range(1, 6);\n        System.out.println("Range: " + Arrays.toString(intStream.toArray()));\n        intStream = IntStream.rangeClosed(1, 5);\n        System.out.println("Range closed: " + Arrays.toString(intStream.toArray()));\n        IntSummaryStatistics stats = IntStream.of(10, 20, 30, 40, 50).summaryStatistics();\n        System.out.println("Stats: count=" + stats.getCount() + ", sum=" + stats.getSum() + ", min=" + stats.getMin() + ", max=" + stats.getMax() + ", average=" + stats.getAverage());\n        DoubleStream doubleStream = DoubleStream.of(1.1, 2.2, 3.3, 4.4, 5.5);\n        double average = doubleStream.average().orElse(0);\n        System.out.println("Average: " + average);\n        LongStream longStream = LongStream.range(1L, 10L);\n        long count = longStream.count();\n        System.out.println("Count: " + count);\n        Stream<Integer> boxedStream = IntStream.range(1, 6).boxed();\n        IntStream unboxedStream = boxedStream.mapToInt(Integer::intValue);\n        List<String> numbers = Arrays.asList("1", "2", "3", "4", "5");\n        int total = numbers.stream().mapToInt(Integer::parseInt).sum();\n        System.out.println("Total: " + total);\n    }\n}',
    hint: "Use primitive streams for better performance with numbers",
  },
  {
    id: "stream_4",
    topicId: "stream",
    question: "Infinite streams with generate and iterate.",
    mathSolution: "Generate infinite streams with limit()",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream<Double> randomStream = Stream.generate(Math::random).limit(5);\n        System.out.println("5 random numbers: " + randomStream.collect(Collectors.toList()));\n        Stream<Integer> constantStream = Stream.generate(() -> 42).limit(3);\n        System.out.println("Constant 42s: " + constantStream.collect(Collectors.toList()));\n        Stream<Integer> evenNumbers = Stream.iterate(0, n -> n + 2).limit(6);\n        System.out.println("First 6 even numbers: " + evenNumbers.collect(Collectors.toList()));\n        Stream<Integer> powersOfTwo = Stream.iterate(1, n -> n * 2).limit(5);\n        System.out.println("First 5 powers of 2: " + powersOfTwo.collect(Collectors.toList()));\n        Stream<Integer> numbersUntil10 = Stream.iterate(1, n -> n < 10, n -> n + 2);\n        System.out.println("Odd numbers < 10: " + numbersUntil10.collect(Collectors.toList()));\n        Stream<int[]> fibonacci = Stream.iterate(new int[]{0, 1}, f -> new int[]{f[1], f[0] + f[1]}).limit(8);\n        fibonacci.forEach(f -> System.out.print(f[0] + " "));\n        System.out.println();\n        Random random = new Random();\n        Stream<Integer> randomInts = Stream.generate(() -> random.nextInt(100)).limit(6);\n        System.out.println("6 random ints 0-99: " + randomInts.collect(Collectors.toList()));\n    }\n}',
    hint: "Use limit() to cap infinite streams",
  },

  // INTERMEDIATE OPERATIONS (5)
  {
    id: "stream_5",
    topicId: "stream",
    question: "Filter elements using predicate.",
    mathSolution: "filter() keeps elements that satisfy predicate",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        List<Integer> evens = numbers.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\n        System.out.println("Even numbers: " + evens);\n        List<Integer> greaterThan5 = numbers.stream().filter(n -> n > 5).collect(Collectors.toList());\n        System.out.println("Greater than 5: " + greaterThan5);\n        List<Integer> between3And8 = numbers.stream().filter(n -> n > 3).filter(n -> n < 8).collect(Collectors.toList());\n        System.out.println("Between 3 and 8: " + between3And8);\n        List<String> names = Arrays.asList("Alice", "Bob", "Anna", "Charlie", "Amanda", "Alex");\n        List<String> startsWithA = names.stream().filter(name -> name.startsWith("A")).collect(Collectors.toList());\n        System.out.println("Names starting with A: " + startsWithA);\n        List<String> longNames = names.stream().filter(name -> name.length() > 4).collect(Collectors.toList());\n        System.out.println("Names longer than 4: " + longNames);\n        List<String> aNamesLong = names.stream().filter(name -> name.startsWith("A") && name.length() > 4).collect(Collectors.toList());\n        System.out.println("A-names longer than 4: " + aNamesLong);\n    }\n}',
    hint: "filter() is lazy and returns new stream",
  },
  {
    id: "stream_6",
    topicId: "stream",
    question: "Transform elements using map().",
    mathSolution: "map() applies function to each element",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("alice", "bob", "charlie", "david");\n        List<String> upperCase = names.stream().map(String::toUpperCase).collect(Collectors.toList());\n        System.out.println("Uppercase: " + upperCase);\n        List<Integer> lengths = names.stream().map(String::length).collect(Collectors.toList());\n        System.out.println("Lengths: " + lengths);\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        List<Integer> squares = numbers.stream().map(n -> n * n).collect(Collectors.toList());\n        System.out.println("Squares: " + squares);\n        List<Double> cubes = numbers.stream().map(n -> Math.pow(n, 3)).collect(Collectors.toList());\n        System.out.println("Cubes: " + cubes);\n        class Person { String name; int age; Person(String n, int a) { name = n; age = a; } public String toString() { return name + "(" + age + ")"; } }\n        List<Person> people = names.stream().map(name -> new Person(name, name.length() * 5)).collect(Collectors.toList());\n        System.out.println("People: " + people);\n        List<String> result = numbers.stream().map(n -> n * 2).map(n -> "Number: " + n).collect(Collectors.toList());\n        System.out.println("Mapped twice: " + result);\n    }\n}',
    hint: "map() transforms each element to something else",
  },
  {
    id: "stream_7",
    topicId: "stream",
    question: "Flatten nested collections with flatMap().",
    mathSolution: "flatMap() flattens multiple streams into one",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<List<Integer>> nestedNumbers = Arrays.asList(Arrays.asList(1,2,3), Arrays.asList(4,5,6), Arrays.asList(7,8,9));\n        System.out.println("Nested: " + nestedNumbers);\n        List<Integer> flattened = nestedNumbers.stream().flatMap(list -> list.stream()).collect(Collectors.toList());\n        System.out.println("Flattened: " + flattened);\n        List<String> sentences = Arrays.asList("Hello world", "Java streams are powerful", "flatMap is useful");\n        List<String> words = sentences.stream().flatMap(sentence -> Arrays.stream(sentence.split(" "))).collect(Collectors.toList());\n        System.out.println("Words: " + words);\n        List<String> words2 = Arrays.asList("Hello", "World");\n        List<Character> characters = words2.stream().flatMap(word -> word.chars().mapToObj(c -> (char) c)).distinct().collect(Collectors.toList());\n        System.out.println("Unique characters: " + characters);\n        List<Optional<String>> optionals = Arrays.asList(Optional.of("Hello"), Optional.empty(), Optional.of("World"));\n        List<String> values = optionals.stream().flatMap(Optional::stream).collect(Collectors.toList());\n        System.out.println("Present values: " + values);\n        int[][] array2D = {{1,2},{3,4},{5,6}};\n        List<Integer> flattenedArray = Arrays.stream(array2D).flatMapToInt(Arrays::stream).boxed().collect(Collectors.toList());\n        System.out.println("Flattened 2D array: " + flattenedArray);\n    }\n}',
    hint: "flatMap() is map() + flattening",
  },
  {
    id: "stream_8",
    topicId: "stream",
    question: "Remove duplicates with distinct().",
    mathSolution: "distinct() returns stream with unique elements",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        public boolean equals(Object o) { if(this==o) return true; if(!(o instanceof Person)) return false; Person p = (Person)o; return age==p.age && Objects.equals(name,p.name); }\n        public int hashCode() { return Objects.hash(name, age); }\n        public String toString() { return name + "(" + age + ")"; }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,2,4,1,5,3,6,4);\n        System.out.println("Original: " + numbers);\n        List<Integer> distinct = numbers.stream().distinct().collect(Collectors.toList());\n        System.out.println("Distinct: " + distinct);\n        List<String> names = Arrays.asList("Alice","Bob","Alice","Charlie","Bob","David");\n        System.out.println("Original names: " + names);\n        List<String> distinctNames = names.stream().distinct().collect(Collectors.toList());\n        System.out.println("Distinct names: " + distinctNames);\n        List<Person> people = Arrays.asList(new Person("Alice",25), new Person("Bob",30), new Person("Alice",25), new Person("Charlie",35), new Person("Bob",30));\n        List<Person> distinctPeople = people.stream().distinct().collect(Collectors.toList());\n        System.out.println("Distinct people: " + distinctPeople);\n    }\n}',
    hint: "distinct() uses equals() for comparison",
  },
  {
  id: "stream_9",
  topicId: "stream",
  question: "Sort elements using sorted().",
  mathSolution: "sorted() sorts elements naturally or with comparator",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Person { String name; int age; Person(String n, int a) { name = n; age = a; } public String toString() { return name + "(" + age + ")"; } }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5,2,8,1,9,3,6,4,7);\n        List<Integer> sorted = numbers.stream().sorted().collect(Collectors.toList());\n        System.out.println("Sorted ascending: " + sorted);\n        List<Integer> reverseSorted = numbers.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());\n        System.out.println("Sorted descending: " + reverseSorted);\n        List<String> names = Arrays.asList("Charlie","Alice","Bob","David");\n        List<String> sortedNames = names.stream().sorted().collect(Collectors.toList());\n        System.out.println("Sorted names: " + sortedNames);\n        List<String> sortedByLength = names.stream().sorted(Comparator.comparing(String::length)).collect(Collectors.toList());\n        System.out.println("Sorted by length: " + sortedByLength);\n        List<String> sortedByLengthThenAlpha = names.stream().sorted(Comparator.comparing(String::length).thenComparing(Comparator.naturalOrder())).collect(Collectors.toList());\n        System.out.println("By length then alpha: " + sortedByLengthThenAlpha);\n        List<Person> people = Arrays.asList(new Person("Alice",30), new Person("Bob",25), new Person("Charlie",35), new Person("David",25));\n        List<Person> sortedPeople = people.stream().sorted(Comparator.comparingInt((Person p) -> p.age).thenComparing((Person p) -> p.name)).collect(Collectors.toList());\n        System.out.println("Sorted people: " + sortedPeople);\n    }\n}',
  hint: "sorted() with Comparator for custom sorting",
},

  // TERMINAL OPERATIONS (5)
  {
    id: "stream_10",
    topicId: "stream",
    question: "Reduce stream to single value with reduce().",
    mathSolution: "reduce() combines elements using binary operator",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5);\n        int sum = numbers.stream().reduce(0, (a,b) -> a+b);\n        System.out.println("Sum: " + sum);\n        int sum2 = numbers.stream().reduce(0, Integer::sum);\n        System.out.println("Sum (method ref): " + sum2);\n        int product = numbers.stream().reduce(1, (a,b) -> a*b);\n        System.out.println("Product: " + product);\n        int max = numbers.stream().reduce(Integer.MIN_VALUE, (a,b) -> a>b ? a : b);\n        System.out.println("Max: " + max);\n        int min = numbers.stream().reduce(Integer.MAX_VALUE, (a,b) -> a<b ? a : b);\n        System.out.println("Min: " + min);\n        Optional<Integer> sumOptional = numbers.stream().reduce((a,b) -> a+b);\n        sumOptional.ifPresent(s -> System.out.println("Sum optional: " + s));\n        List<String> words = Arrays.asList("Hello"," ","World","!");\n        String sentence = words.stream().reduce("", (a,b) -> a+b);\n        System.out.println("Concatenated: " + sentence);\n        List<String> names = Arrays.asList("Alice","Bob","Christopher","David");\n        Optional<String> longest = names.stream().reduce((a,b) -> a.length() > b.length() ? a : b);\n        longest.ifPresent(s -> System.out.println("Longest name: " + s));\n        long count = numbers.stream().reduce(0, (cnt,n) -> cnt+1, (c1,c2) -> c1+c2);\n        System.out.println("Count: " + count);\n    }\n}',
    hint: "reduce() with identity for empty stream, without for non-empty",
  },
  {
    id: "stream_11",
    topicId: "stream",
    question: "Collect elements with collect() and Collectors.",
    mathSolution: "collect() is mutable reduction operation",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice","Bob","Charlie","David","Anna");\n        String joined = names.stream().collect(Collectors.joining(", "));\n        System.out.println("Joined: " + joined);\n        String joinedWithPrefix = names.stream().collect(Collectors.joining(", ", "[", "]"));\n        System.out.println("Joined with brackets: " + joinedWithPrefix);\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5);\n        Double average = numbers.stream().collect(Collectors.averagingInt(Integer::intValue));\n        System.out.println("Average: " + average);\n        Integer sum = numbers.stream().collect(Collectors.summingInt(Integer::intValue));\n        System.out.println("Sum: " + sum);\n        IntSummaryStatistics stats = numbers.stream().collect(Collectors.summarizingInt(Integer::intValue));\n        System.out.println("Stats: " + stats);\n        Map<Boolean, List<String>> partitioned = names.stream().collect(Collectors.partitioningBy(name -> name.startsWith("A")));\n        System.out.println("Starts with A: " + partitioned.get(true));\n        System.out.println("Doesn\'t start with A: " + partitioned.get(false));\n        Map<Integer, List<String>> byLength = names.stream().collect(Collectors.groupingBy(String::length));\n        System.out.println("Grouped by length: " + byLength);\n        Map<Integer, Long> countByLength = names.stream().collect(Collectors.groupingBy(String::length, Collectors.counting()));\n        System.out.println("Count by length: " + countByLength);\n    }\n}',
    hint: "Collectors provides many useful reduction operations",
  },
  {
    id: "stream_12",
    topicId: "stream",
    question: "Match operations - anyMatch, allMatch, noneMatch.",
    mathSolution: "Match operations return boolean based on predicate",
    codeSolution: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        boolean anyEven = numbers.stream().anyMatch(n -> n%2==0);\n        System.out.println("Any even? " + anyEven);\n        boolean anyGreaterThan10 = numbers.stream().anyMatch(n -> n>10);\n        System.out.println("Any > 10? " + anyGreaterThan10);\n        boolean allPositive = numbers.stream().allMatch(n -> n>0);\n        System.out.println("All positive? " + allPositive);\n        boolean allEven = numbers.stream().allMatch(n -> n%2==0);\n        System.out.println("All even? " + allEven);\n        boolean noneNegative = numbers.stream().noneMatch(n -> n<0);\n        System.out.println("None negative? " + noneNegative);\n        boolean noneGreaterThan5 = numbers.stream().noneMatch(n -> n>5);\n        System.out.println("None > 5? " + noneGreaterThan5);\n        List<String> names = Arrays.asList("Alice","Bob","Charlie",null,"David");\n        boolean anyNull = names.stream().anyMatch(Objects::isNull);\n        System.out.println("Any null? " + anyNull);\n        boolean allNonNull = names.stream().filter(Objects::nonNull).allMatch(name -> name.length()>2);\n        System.out.println("All non-null length > 2? " + allNonNull);\n        List<Integer> bigList = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        boolean found = bigList.stream().peek(n -> System.out.println("Checking: " + n)).anyMatch(n -> n>5);\n        System.out.println("Found > 5: " + found);\n    }\n}',
    hint: "Match operations are short-circuiting",
  },
  {
    id: "stream_13",
    topicId: "stream",
    question: "Find operations - findFirst, findAny.",
    mathSolution: "Find returns Optional of first or any element",
    codeSolution: 'import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        Optional<Integer> first = numbers.stream().filter(n -> n>5).findFirst();\n        first.ifPresent(n -> System.out.println("First > 5: " + n));\n        Optional<Integer> firstParallel = numbers.parallelStream().filter(n -> n>5).findFirst();\n        firstParallel.ifPresent(n -> System.out.println("First > 5 (parallel): " + n));\n        Optional<Integer> any = numbers.stream().filter(n -> n>5).findAny();\n        any.ifPresent(n -> System.out.println("Any > 5: " + n));\n        Optional<Integer> anyParallel = numbers.parallelStream().filter(n -> n%2==0).findAny();\n        anyParallel.ifPresent(n -> System.out.println("Any even (parallel): " + n));\n        Optional<Integer> notFound = numbers.stream().filter(n -> n>100).findFirst();\n        System.out.println("Found > 100? " + notFound.isPresent());\n        int result = numbers.stream().filter(n -> n>100).findFirst().orElse(0);\n        System.out.println("Result with default: " + result);\n        try {\n            int value = numbers.stream().filter(n -> n>100).findFirst().orElseThrow(NoSuchElementException::new);\n        } catch(NoSuchElementException e) {\n            System.out.println("Exception thrown as expected");\n        }\n    }\n}',
    hint: "findFirst for first element, findAny for parallel-friendly",
  },
  {
    id: "stream_14",
    topicId: "stream",
    question: "Count, min, max operations.",
    mathSolution: "count returns long, min/max return Optional",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Person { String name; int age; Person(String n, int a) { name = n; age = a; } public String toString() { return name + "(" + age + ")"; } }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5,2,8,1,9,3,6,4,7);\n        long count = numbers.stream().count();\n        System.out.println("Count: " + count);\n        long evenCount = numbers.stream().filter(n -> n%2==0).count();\n        System.out.println("Even count: " + evenCount);\n        Optional<Integer> min = numbers.stream().min(Integer::compareTo);\n        min.ifPresent(n -> System.out.println("Min: " + n));\n        Optional<Integer> max = numbers.stream().max(Integer::compareTo);\n        max.ifPresent(n -> System.out.println("Max: " + n));\n        List<String> names = Arrays.asList("Alice","Bob","Charlie","David");\n        Optional<String> shortest = names.stream().min(Comparator.comparing(String::length));\n        shortest.ifPresent(s -> System.out.println("Shortest name: " + s));\n        Optional<String> longest = names.stream().max(Comparator.comparing(String::length));\n        longest.ifPresent(s -> System.out.println("Longest name: " + s));\n        List<Person> people = Arrays.asList(new Person("Alice",25), new Person("Bob",30), new Person("Charlie",22), new Person("David",35));\n        Optional<Person> youngest = people.stream().min(Comparator.comparingInt(p -> p.age));\n        youngest.ifPresent(p -> System.out.println("Youngest: " + p));\n        Optional<Person> oldest = people.stream().max(Comparator.comparingInt(p -> p.age));\n        oldest.ifPresent(p -> System.out.println("Oldest: " + p));\n    }\n}',
    hint: "min() and max() need Comparator",
  },

  // ADVANCED STREAM OPERATIONS (5)
  {
    id: "stream_15",
    topicId: "stream",
    question: "Grouping and partitioning collectors.",
    mathSolution: "groupingBy for multiple groups, partitioningBy for two groups",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Employee { String name; String dept; double salary; int age; Employee(String n, String d, double s, int a) { name=n; dept=d; salary=s; age=a; } public String toString() { return name; } }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee("Alice","IT",75000,25), new Employee("Bob","HR",65000,30), new Employee("Charlie","IT",85000,28),\n            new Employee("David","Finance",70000,35), new Employee("Eve","HR",60000,22), new Employee("Frank","IT",80000,32));\n        Map<String, List<Employee>> byDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept));\n        System.out.println("By department: " + byDept);\n        Map<String, Long> countByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.counting()));\n        System.out.println("Count by dept: " + countByDept);\n        Map<String, Double> salaryByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.summingDouble(e -> e.salary)));\n        System.out.println("Salary by dept: " + salaryByDept);\n        Map<String, Double> avgSalaryByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.averagingDouble(e -> e.salary)));\n        System.out.println("Avg salary by dept: " + avgSalaryByDept);\n        Map<String, List<String>> namesByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.mapping(e -> e.name, Collectors.toList())));\n        System.out.println("Names by dept: " + namesByDept);\n        Map<Boolean, List<Employee>> bySalary = employees.stream().collect(Collectors.partitioningBy(e -> e.salary > 70000));\n        System.out.println("High salary: " + bySalary.get(true));\n        System.out.println("Low salary: " + bySalary.get(false));\n        Map<String, Map<String, List<Employee>>> byDeptAndAge = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.groupingBy(e -> e.age > 30 ? "Senior" : "Junior")));\n        System.out.println("By dept and level: " + byDeptAndAge);\n    }\n}',
    hint: "groupingBy can have downstream collectors",
  },
  {
  id: "stream_16",
  topicId: "stream",
  question: "Parallel streams for performance.",
  mathSolution: "parallelStream() for concurrent processing",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = IntStream.rangeClosed(1, 1_000_000).boxed().collect(Collectors.toList());\n        long start = System.currentTimeMillis();\n        long sumSeq = numbers.stream().mapToLong(Integer::longValue).sum();\n        long end = System.currentTimeMillis();\n        System.out.println("Sequential sum: " + sumSeq + ", time: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        long sumPar = numbers.parallelStream().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Parallel sum: " + sumPar + ", time: " + (end-start) + "ms");\n        Stream<Integer> seqStream = numbers.stream();\n        Stream<Integer> parStream = numbers.parallelStream();\n        System.out.println("Sequential is parallel? " + seqStream.isParallel());\n        System.out.println("Parallel is parallel? " + parStream.isParallel());\n        List<Integer> result = numbers.stream().parallel().filter(n -> n%1000==0).sequential().limit(5).collect(Collectors.toList());\n        System.out.println("Result: " + result);\n        System.out.println("\\nParallel forEach (unordered):");\n        IntStream.range(1,10).parallel().forEach(n -> System.out.print(n + " "));\n        System.out.println("\\n\\nParallel forEachOrdered (preserves order):");\n        IntStream.range(1,10).parallel().forEachOrdered(n -> System.out.print(n + " "));\n        List<Integer> smallList = Arrays.asList(1,2,3,4,5);\n        System.out.println("\\n\\nSmall list parallel overhead:");\n        smallList.parallelStream().forEach(n -> System.out.println(Thread.currentThread().getName() + ": " + n));\n    }\n}',
  hint: "parallel() for large datasets, sequential() for ordered operations",
},
  {
    id: "stream_17",
    topicId: "stream",
    question: "Stream debugging with peek().",
    mathSolution: "peek() allows viewing elements without modifying",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Person { String name; int age; Person(String n, int a) { name=n; age=a; } public String toString() { return name + "(" + age + ")"; } }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        List<Integer> result = numbers.stream()\n            .peek(n -> System.out.println("Original: " + n))\n            .filter(n -> n%2==0)\n            .peek(n -> System.out.println("After filter: " + n))\n            .map(n -> n*2)\n            .peek(n -> System.out.println("After map: " + n))\n            .limit(3)\n            .peek(n -> System.out.println("After limit: " + n))\n            .collect(Collectors.toList());\n        System.out.println("Final result: " + result);\n        List<Person> people = Arrays.asList(new Person("Alice",25), new Person("Bob",30), new Person("Charlie",28));\n        List<String> names = people.stream()\n            .peek(p -> System.out.println("Processing: " + p))\n            .filter(p -> p.age > 25)\n            .peek(p -> System.out.println("After filter: " + p))\n            .map(p -> p.name)\n            .peek(name -> System.out.println("After map: " + name))\n            .collect(Collectors.toList());\n        System.out.println("Names: " + names);\n        long count = numbers.stream().peek(System.out::println).count();\n        System.out.println("Count: " + count);\n        System.out.println("\\nParallel peek:");\n        numbers.parallelStream().peek(n -> System.out.println(Thread.currentThread().getName() + ": " + n)).forEach(n -> {});\n    }\n}',
    hint: "peek() is mainly for debugging, not for production logic",
  },
  {
    id: "stream_18",
    topicId: "stream",
    question: "Custom collectors.",
    mathSolution: "Collector.of() for custom reduction operations",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\nimport java.util.concurrent.ConcurrentHashMap;\npublic class Main {\n    static class CustomCollectors {\n        public static <T> Collector<T, ?, Map<String, Object>> statistics(java.util.function.Function<T, Integer> mapper) {\n            return Collector.of(\n                () -> new int[4],\n                (acc, el) -> { int v = mapper.apply(el); acc[0] += v; acc[1]++; if(acc[2]==0) acc[2]=v; else if(v<acc[2]) acc[2]=v; if(acc[3]==0) acc[3]=v; else if(v>acc[3]) acc[3]=v; },\n                (a,b) -> { a[0]+=b[0]; a[1]+=b[1]; a[2]=Math.min(a[2],b[2]); a[3]=Math.max(a[3],b[3]); return a; },\n                acc -> { Map<String,Object> m = new HashMap<>(); m.put("sum",acc[0]); m.put("count",acc[1]); m.put("min",acc[2]); m.put("max",acc[3]); m.put("average",acc[1]>0 ? (double)acc[0]/acc[1] : 0); return m; }\n            );\n        }\n        public static <T,K,V> Collector<T,?,ConcurrentHashMap<K,V>> toConcurrentMap(java.util.function.Function<T,K> keyMapper, java.util.function.Function<T,V> valueMapper) {\n            return Collector.of(ConcurrentHashMap::new, (map,el) -> map.put(keyMapper.apply(el), valueMapper.apply(el)), (m1,m2) -> { m1.putAll(m2); return m1; }, Collector.Characteristics.CONCURRENT);\n        }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5,2,8,1,9,3,6,4,7);\n        Map<String,Object> stats = numbers.stream().collect(CustomCollectors.statistics(n -> n));\n        System.out.println("Statistics: " + stats);\n        ConcurrentHashMap<String,Integer> map = numbers.stream().collect(CustomCollectors.toConcurrentMap(n -> "Number_"+n, n -> n*n));\n        System.out.println("Concurrent map: " + map);\n        Map<Boolean,List<Integer>> partitioned = numbers.stream().collect(Collectors.partitioningBy(n -> n%2==0));\n        System.out.println("Even: " + partitioned.get(true));\n        System.out.println("Odd: " + partitioned.get(false));\n    }\n}',
    hint: "Custom collectors for specialized reduction operations",
  },
  {
    id: "stream_19",
    topicId: "stream",
    question: "Stream of primitives vs boxed streams.",
    mathSolution: "Primitive streams avoid boxing overhead",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        IntStream intStream = IntStream.rangeClosed(1,10);\n        int sum = intStream.sum();\n        System.out.println("Sum: " + sum);\n        intStream = IntStream.rangeClosed(1,10);\n        double avg = intStream.average().orElse(0);\n        System.out.println("Average: " + avg);\n        intStream = IntStream.rangeClosed(1,10);\n        OptionalInt min = intStream.min();\n        min.ifPresent(m -> System.out.println("Min: " + m));\n        Stream<Integer> boxedStream = IntStream.rangeClosed(1,5).boxed();\n        List<Integer> boxedList = boxedStream.collect(Collectors.toList());\n        System.out.println("Boxed: " + boxedList);\n        List<String> numbers = Arrays.asList("1","2","3","4","5");\n        int total = numbers.stream().mapToInt(Integer::parseInt).sum();\n        System.out.println("Total: " + total);\n        int size = 10_000_000;\n        long start = System.currentTimeMillis();\n        long sumPrimitive = IntStream.rangeClosed(1,size).asLongStream().sum();\n        long end = System.currentTimeMillis();\n        System.out.println("Primitive sum: " + sumPrimitive + ", time: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        long sumBoxed = IntStream.rangeClosed(1,size).boxed().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Boxed sum: " + sumBoxed + ", time: " + (end-start) + "ms");\n        int[] intArray = {1,2,3,4,5};\n        IntStream arrayStream = Arrays.stream(intArray);\n        DoubleStream doubleStream = DoubleStream.of(1.1,2.2,3.3,4.4,5.5);\n        double product = doubleStream.reduce(1.0, (a,b) -> a*b);\n        System.out.println("Product: " + product);\n    }\n}',
    hint: "Use primitive streams for numeric operations for better performance",
  },

  // REAL-WORLD SCENARIOS (4)
  {
    id: "stream_20",
    topicId: "stream",
    question: "Process employee data with streams.",
    mathSolution: "Real-world data processing with streams",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Employee { String name; String dept; double salary; int age; String gender; Employee(String n, String d, double s, int a, String g) { name=n; dept=d; salary=s; age=a; gender=g; } public String toString() { return name; } }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee("Alice","IT",75000,25,"F"), new Employee("Bob","IT",85000,32,"M"), new Employee("Charlie","HR",65000,28,"M"),\n            new Employee("Diana","HR",70000,35,"F"), new Employee("Eve","Finance",90000,42,"F"), new Employee("Frank","Finance",80000,38,"M"),\n            new Employee("Grace","IT",95000,29,"F"), new Employee("Henry","HR",60000,24,"M"));\n        Map<String,Double> avgSalaryByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.averagingDouble(e -> e.salary)));\n        System.out.println("Average salary by department: " + avgSalaryByDept);\n        Map<String, Optional<Employee>> highestPaidByDept = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.maxBy(Comparator.comparingDouble(e -> e.salary))));\n        System.out.println("\\nHighest paid by department:");\n        highestPaidByDept.forEach((dept, emp) -> System.out.println(dept + ": " + emp.orElse(null)));\n        Map<String,Double> totalSalaryByGender = employees.stream().collect(Collectors.groupingBy(e -> e.gender, Collectors.summingDouble(e -> e.salary)));\n        System.out.println("\\nTotal salary by gender: " + totalSalaryByGender);\n        Double avgOverall = employees.stream().mapToDouble(e -> e.salary).average().orElse(0);\n        List<Employee> aboveAvg = employees.stream().filter(e -> e.salary > avgOverall).collect(Collectors.toList());\n        System.out.println("\\nAbove average salary (" + avgOverall + "): " + aboveAvg);\n        Map<String, DoubleSummaryStatistics> deptStats = employees.stream().collect(Collectors.groupingBy(e -> e.dept, Collectors.summarizingDouble(e -> e.salary)));\n        System.out.println("\\nDepartment statistics:");\n        deptStats.forEach((dept, stats) -> System.out.println(dept + ": count=" + stats.getCount() + ", avg=" + stats.getAverage() + ", max=" + stats.getMax()));\n        List<String> namesByAge = employees.stream().sorted(Comparator.comparingInt(e -> e.age)).map(e -> e.name).collect(Collectors.toList());\n        System.out.println("\\nEmployees by age: " + namesByAge);\n    }\n}',
    hint: "Streams excel at data processing tasks",
  },
  {
  id: "stream_21",
  topicId: "stream",
  question: "Process sales data with streams.",
  mathSolution: "Analyze sales transactions using streams",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\nimport java.time.*;\npublic class Main {\n    static class Sale { String product; String category; double amount; LocalDate date; String region; Sale(String p, String c, double a, LocalDate d, String r) { product=p; category=c; amount=a; date=d; region=r; } public String toString() { return product + "($" + amount + ")"; } }\n    public static void main(String[] args) {\n        List<Sale> sales = Arrays.asList(\n            new Sale("Laptop","Electronics",1200,LocalDate.of(2024,1,15),"North"),\n            new Sale("Mouse","Electronics",25,LocalDate.of(2024,1,16),"South"),\n            new Sale("Desk","Furniture",350,LocalDate.of(2024,1,17),"North"),\n            new Sale("Chair","Furniture",150,LocalDate.of(2024,1,18),"West"),\n            new Sale("Phone","Electronics",800,LocalDate.of(2024,1,19),"South"),\n            new Sale("Tablet","Electronics",500,LocalDate.of(2024,1,20),"North"),\n            new Sale("Monitor","Electronics",300,LocalDate.of(2024,1,21),"East"),\n            new Sale("Bookshelf","Furniture",200,LocalDate.of(2024,1,22),"West"));\n        Map<String,Double> salesByCategory = sales.stream().collect(Collectors.groupingBy((Sale s) -> s.category, Collectors.summingDouble(s -> s.amount)));\n        System.out.println("Sales by category: " + salesByCategory);\n        List<String> topProducts = sales.stream().sorted(Comparator.comparingDouble((Sale s) -> s.amount).reversed()).limit(3).map(s -> s.product + "($" + s.amount + ")").collect(Collectors.toList());\n        System.out.println("\\nTop 3 products: " + topProducts);\n        Map<String,Double> avgByRegion = sales.stream().collect(Collectors.groupingBy((Sale s) -> s.region, Collectors.averagingDouble(s -> s.amount)));\n        System.out.println("\\nAverage by region: " + avgByRegion);\n        Map<YearMonth,Double> salesByMonth = sales.stream().collect(Collectors.groupingBy((Sale s) -> YearMonth.from(s.date), Collectors.summingDouble(s -> s.amount)));\n        System.out.println("\\nSales by month: " + salesByMonth);\n        Double avgSale = sales.stream().mapToDouble(s -> s.amount).average().orElse(0);\n        List<String> highValueProducts = sales.stream().filter(s -> s.amount > avgSale).map(s -> s.product).distinct().collect(Collectors.toList());\n        System.out.println("\\nHigh value products (>$" + avgSale + "): " + highValueProducts);\n        Map.Entry<String,Double> topCategory = sales.stream().collect(Collectors.groupingBy((Sale s) -> s.category, Collectors.summingDouble(s -> s.amount))).entrySet().stream().max(Map.Entry.comparingByValue()).orElse(null);\n        System.out.println("\\nTop category: " + topCategory);\n    }\n}',
  hint: "Streams are perfect for business data analysis",
},
  {
  id: "stream_22",
  topicId: "stream",
  question: "Process log files with streams.",
  mathSolution: "Parse and analyze log entries using streams",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class LogEntry { String timestamp; String level; String component; String message; int responseTime; LogEntry(String t, String l, String c, String m, int rt) { timestamp=t; level=l; component=c; message=m; responseTime=rt; } public String toString() { return timestamp + " [" + level + "] " + component + ": " + message; } }\n    public static void main(String[] args) {\n        List<LogEntry> logs = Arrays.asList(\n            new LogEntry("2024-01-15 10:23:45","INFO","AuthService","User login successful",120),\n            new LogEntry("2024-01-15 10:24:12","ERROR","DBService","Connection timeout",5000),\n            new LogEntry("2024-01-15 10:24:45","WARN","CacheService","Cache miss rate high",45),\n            new LogEntry("2024-01-15 10:25:03","INFO","AuthService","Token refreshed",30),\n            new LogEntry("2024-01-15 10:25:30","ERROR","APIService","External API timeout",8000),\n            new LogEntry("2024-01-15 10:26:15","INFO","DBService","Query executed",150),\n            new LogEntry("2024-01-15 10:26:45","ERROR","AuthService","Invalid token",25),\n            new LogEntry("2024-01-15 10:27:10","WARN","APIService","Rate limit approaching",60));\n        Map<String,Long> logCountByLevel = logs.stream().collect(Collectors.groupingBy(log -> log.level, Collectors.counting()));\n        System.out.println("Log counts by level: " + logCountByLevel);\n        List<LogEntry> errors = logs.stream().filter(log -> log.level.equals("ERROR")).collect(Collectors.toList());\n        System.out.println("\\nErrors:");\n        errors.forEach(System.out::println);\n        Map<String,Double> avgTimeByComponent = logs.stream().collect(Collectors.groupingBy(log -> log.component, Collectors.averagingInt(log -> log.responseTime)));\n        System.out.println("\\nAverage response time by component: " + avgTimeByComponent);\n        List<LogEntry> slowRequests = logs.stream().filter(log -> log.responseTime > 1000).sorted(Comparator.comparingInt((LogEntry log) -> log.responseTime).reversed()).collect(Collectors.toList());\n        System.out.println("\\nSlow requests:");\n        slowRequests.forEach(System.out::println);\n        Map<String,Long> errorMessages = logs.stream().filter(log -> log.level.equals("ERROR")).collect(Collectors.groupingBy(log -> log.message, Collectors.counting()));\n        System.out.println("\\nError messages frequency: " + errorMessages);\n        Map<String,Long> errorsByHour = logs.stream().filter(log -> log.level.equals("ERROR")).collect(Collectors.groupingBy(log -> log.timestamp.substring(11,13), Collectors.counting()));\n        System.out.println("\\nErrors by hour: " + errorsByHour);\n        Set<String> componentsWithErrors = logs.stream().filter(log -> log.level.equals("ERROR")).map(log -> log.component).collect(Collectors.toSet());\n        System.out.println("\\nComponents with errors: " + componentsWithErrors);\n    }\n}',
  hint: "Streams help analyze log data efficiently",
},
  {
    id: "stream_23",
    topicId: "stream",
    question: "Process student grades with streams.",
    mathSolution: "Calculate statistics and rankings from student data",
    codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Student { String name; int grade; List<Integer> scores; String major; Student(String n, int g, List<Integer> s, String m) { name=n; grade=g; scores=s; major=m; } double getAverage() { return scores.stream().mapToInt(Integer::intValue).average().orElse(0); } public String toString() { return name + " (" + major + ")"; } }\n    public static void main(String[] args) {\n        List<Student> students = Arrays.asList(\n            new Student("Alice",10,Arrays.asList(85,90,92,88,95),"Science"),\n            new Student("Bob",11,Arrays.asList(75,80,78,82,85),"Arts"),\n            new Student("Charlie",10,Arrays.asList(92,88,94,90,96),"Science"),\n            new Student("Diana",12,Arrays.asList(88,85,90,87,92),"Math"),\n            new Student("Eve",11,Arrays.asList(95,92,98,94,97),"Science"),\n            new Student("Frank",10,Arrays.asList(70,75,72,68,74),"Arts"),\n            new Student("Grace",12,Arrays.asList(89,92,87,91,90),"Math"));\n        Map<String,Double> studentAverages = students.stream().collect(Collectors.toMap(s -> s.name, Student::getAverage));\n        System.out.println("Student averages: " + studentAverages);\n        List<Student> topStudents = students.stream().sorted(Comparator.comparingDouble(Student::getAverage).reversed()).limit(3).collect(Collectors.toList());\n        System.out.println("\\nTop 3 students: " + topStudents);\n        Map<Integer,Double> avgByGrade = students.stream().collect(Collectors.groupingBy(s -> s.grade, Collectors.averagingDouble(Student::getAverage)));\n        System.out.println("\\nAverage by grade: " + avgByGrade);\n        Map<String,Double> avgByMajor = students.stream().collect(Collectors.groupingBy(s -> s.major, Collectors.averagingDouble(Student::getAverage)));\n        System.out.println("\\nAverage by major: " + avgByMajor);\n        List<String> honorRoll = students.stream().filter(s -> s.getAverage() >= 90).map(s -> s.name).collect(Collectors.toList());\n        System.out.println("\\nHonor roll (avg >= 90): " + honorRoll);\n        Map<String,Integer> highestScore = students.stream().collect(Collectors.toMap(s -> s.name, s -> s.scores.stream().max(Integer::compareTo).orElse(0)));\n        System.out.println("\\nHighest score by student: " + highestScore);\n        Map<Integer,Long> gradeDistribution = students.stream().collect(Collectors.groupingBy(s -> s.grade, Collectors.counting()));\n        System.out.println("\\nGrade distribution: " + gradeDistribution);\n        Map<String,Boolean> improved = students.stream().collect(Collectors.toMap(s -> s.name, s -> s.scores.get(s.scores.size()-1) > s.scores.get(0)));\n        System.out.println("\\nImproved from first to last: " + improved);\n    }\n}',
    hint: "Streams make educational data analysis straightforward",
  },

  // STREAM PITFALLS AND BEST PRACTICES (2)
  {
  id: "stream_24",
  topicId: "stream",
  question: "Stream cannot be reused after terminal operation.",
  mathSolution: "Streams are single-use, need to recreate",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5);\n        Stream<Integer> stream = numbers.stream();\n        long count = stream.count();\n        System.out.println("Count: " + count);\n        try {\n            stream.forEach(System.out::println);\n        } catch(IllegalStateException e) {\n            System.out.println("Error: " + e);\n        }\n        System.out.println("Creating new streams each time works:");\n        numbers.stream().forEach(n -> System.out.print(n + " "));\n        System.out.println();\n        int sum = numbers.stream().mapToInt(Integer::intValue).sum();\n        System.out.println("Sum: " + sum);\n        System.out.println("Always create fresh stream, do not store in field.");\n        Stream<Integer> lazyStream = numbers.stream().filter(n -> {\n            System.out.println("Filtering: " + n);\n            return n % 2 == 0;\n        });\n        System.out.println("Stream created, no filtering yet");\n        lazyStream.forEach(System.out::println);\n    }\n}',
  hint: "Streams are single-use; recreate or use supplier",
},
  {
  id: "stream_25",
  topicId: "stream",
  question: "Stream performance considerations and best practices.",
  mathSolution: "Choose right stream operations for optimal performance",
  codeSolution: 'import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = IntStream.rangeClosed(1, 1_000_000).boxed().collect(Collectors.toList());\n        long start = System.currentTimeMillis();\n        int sum1 = numbers.stream().mapToInt(Integer::intValue).sum();\n        long end = System.currentTimeMillis();\n        System.out.println("Boxed sum: " + sum1 + ", time: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        int sum2 = IntStream.rangeClosed(1, 1_000_000).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Primitive sum: " + sum2 + ", time: " + (end-start) + "ms");\n        List<String> names = Arrays.asList("Alice","Bob","Charlie","David","Eve");\n        List<Integer> lengths1 = names.stream().map(String::length).filter(len -> len>3).collect(Collectors.toList());\n        List<Integer> lengths2 = names.stream().filter(name -> name.length()>3).map(String::length).collect(Collectors.toList());\n        System.out.println("Efficiency: filter before map reduces operations.");\n        List<Double> random1 = Stream.generate(Math::random).limit(5).collect(Collectors.toList());\n        boolean found = numbers.stream().anyMatch(n -> n>999_999);\n        List<Integer> largeList = IntStream.rangeClosed(1, 1_000_000).boxed().collect(Collectors.toList());\n        start = System.currentTimeMillis();\n        long sumSeq = largeList.stream().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Sequential: " + (end-start) + "ms");\n        start = System.currentTimeMillis();\n        long sumPar = largeList.parallelStream().mapToLong(Integer::longValue).sum();\n        end = System.currentTimeMillis();\n        System.out.println("Parallel: " + (end-start) + "ms");\n        List<Integer> sideEffect = new ArrayList<>();\n        numbers.stream().limit(100).forEach(sideEffect::add);\n        List<Integer> better = numbers.stream().limit(100).collect(Collectors.toList());\n        List<String> upper1 = names.stream().map(s -> s.toUpperCase()).collect(Collectors.toList());\n        List<String> upper2 = names.stream().map(String::toUpperCase).collect(Collectors.toList());\n        System.out.println("Use method references for readability.");\n    }\n}',
  hint: "Order operations wisely, use primitive streams, consider parallel for large data",
},
{
    "id": "stream_26",
    "topicId": "stream",
    "question": "Use Stream.iterate with a predicate (Java 9+) to generate numbers from 0 to 10 inclusive, stopping when condition fails. Print the numbers.",
    "mathSolution": "Stream.iterate(seed, hasNext, next) generates elements until predicate fails.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream.iterate(0, n -> n <= 10, n -> n + 1)\n              .forEach(System.out::println);\n    }\n}",
    "hint": "Stream.iterate(seed, predicate, next) creates finite stream."
  },
  {
    "id": "stream_27",
    "topicId": "stream",
    "question": "Use takeWhile and dropWhile (Java 9+) to take numbers less than 5 and then drop numbers less than 8 from a sorted list. Print results.",
    "mathSolution": "takeWhile takes elements while predicate true; dropWhile drops while true.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6,7,8,9,10);\n        List<Integer> taken = numbers.stream().takeWhile(n -> n < 5).collect(Collectors.toList());\n        List<Integer> dropped = numbers.stream().dropWhile(n -> n < 8).collect(Collectors.toList());\n        System.out.println(\"Taken (<5): \" + taken);\n        System.out.println(\"Dropped (<8): \" + dropped);\n    }\n}",
    "hint": "takeWhile and dropWhile are short-circuiting for ordered streams."
  },
  {
    "id": "stream_28",
    "topicId": "stream",
    "question": "Use Stream.concat to merge two streams of strings, then collect into a list. Print merged list.",
    "mathSolution": "Stream.concat merges two streams in order.",
    "codeSolution": "import java.util.stream.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream<String> stream1 = Stream.of(\"A\", \"B\", \"C\");\n        Stream<String> stream2 = Stream.of(\"D\", \"E\", \"F\");\n        List<String> merged = Stream.concat(stream1, stream2).collect(Collectors.toList());\n        System.out.println(\"Merged: \" + merged);\n    }\n}",
    "hint": "concat creates a lazy concatenated stream."
  },
  {
    "id": "stream_29",
    "topicId": "stream",
    "question": "Use Stream.ofNullable (Java 9+) to create a stream from a possibly null list. If list is null, return empty stream; else stream its elements.",
    "mathSolution": "ofNullable returns empty stream if argument is null.",
    "codeSolution": "import java.util.stream.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = null;\n        long count = Stream.ofNullable(list).flatMap(Collection::stream).count();\n        System.out.println(\"Count of elements from null list: \" + count);\n        list = Arrays.asList(\"X\", \"Y\", \"Z\");\n        count = Stream.ofNullable(list).flatMap(Collection::stream).count();\n        System.out.println(\"Count of elements from non-null list: \" + count);\n    }\n}",
    "hint": "ofNullable avoids null pointer exceptions."
  },
  {
    "id": "stream_30",
    "topicId": "stream",
    "question": "Use IntStream.range to generate numbers 1 to 10, box them to Integer, and collect into a list. Print the list.",
    "mathSolution": "range(start, endExclusive) generates primitive ints; boxed() converts to Stream<Integer>.",
    "codeSolution": "import java.util.stream.*;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = IntStream.range(1, 11).boxed().collect(Collectors.toList());\n        System.out.println(\"Numbers 1 to 10: \" + numbers);\n    }\n}",
    "hint": "Use boxed() to convert IntStream to Stream<Integer>."
  },
  {
    "id": "stream_31",
    "topicId": "stream",
    "question": "Use collect(Supplier, accumulator, combiner) to create a LinkedList from a stream of integers. Print the list.",
    "mathSolution": "Custom collector: supplier creates LinkedList, accumulator adds, combiner merges.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        LinkedList<Integer> list = Stream.of(5, 1, 9, 3, 7)\n            .collect(LinkedList::new, LinkedList::add, LinkedList::addAll);\n        System.out.println(\"LinkedList: \" + list);\n    }\n}",
    "hint": "Three-arg collect allows custom collection logic."
  },
  {
    "id": "stream_32",
    "topicId": "stream",
    "question": "Use DoubleStream to calculate the product of numbers 1.0 to 5.0 using reduce. Print the product.",
    "mathSolution": "reduce(identity, binaryOperator) combines elements.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        double product = DoubleStream.of(1.0, 2.0, 3.0, 4.0, 5.0)\n            .reduce(1.0, (a, b) -> a * b);\n        System.out.println(\"Product: \" + product);\n    }\n}",
    "hint": "DoubleStream.reduce with multiplication."
  },
  {
    "id": "stream_33",
    "topicId": "stream",
    "question": "Use Collectors.mapping to transform each string to its length and collect into a set. Print the set of lengths.",
    "mathSolution": "mapping applies a function before downstream collector.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"cherry\", \"date\");\n        Set<Integer> lengths = words.stream()\n            .collect(Collectors.mapping(String::length, Collectors.toSet()));\n        System.out.println(\"Lengths: \" + lengths);\n    }\n}",
    "hint": "mapping is often used with groupingBy."
  },
  {
    "id": "stream_34",
    "topicId": "stream",
    "question": "Use flatMap to convert a list of sentences into a list of words (split by spaces). Print all words.",
    "mathSolution": "flatMap flattens Stream<String[]> into Stream<String>.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> sentences = Arrays.asList(\"Hello world\", \"Java streams\", \"flatMap example\");\n        List<String> words = sentences.stream()\n            .flatMap(s -> Arrays.stream(s.split(\" \")))\n            .collect(Collectors.toList());\n        System.out.println(\"Words: \" + words);\n    }\n}",
    "hint": "split returns array; Arrays.stream converts to stream."
  },
  {
    "id": "stream_35",
    "topicId": "stream",
    "question": "Find the first number greater than 10 in a list using filter and findFirst. If present, print; else print 'not found'.",
    "mathSolution": "filter(predicate).findFirst() returns Optional.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(5, 8, 12, 3, 15);\n        numbers.stream()\n            .filter(n -> n > 10)\n            .findFirst()\n            .ifPresentOrElse(\n                n -> System.out.println(\"First >10: \" + n),\n                () -> System.out.println(\"Not found\")\n            );\n    }\n}",
    "hint": "ifPresentOrElse handles presence and absence."
  },
  {
    "id": "stream_36",
    "topicId": "stream",
    "question": "Check if all employee names are uppercase using allMatch on a list of strings. Print result.",
    "mathSolution": "allMatch checks if every element satisfies predicate.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList(\"ALICE\", \"BOB\", \"CHARLIE\");\n        boolean allUpper = names.stream().allMatch(s -> s.equals(s.toUpperCase()));\n        System.out.println(\"All uppercase? \" + allUpper);\n        names = Arrays.asList(\"Alice\", \"BOB\", \"CHARLIE\");\n        allUpper = names.stream().allMatch(s -> s.equals(s.toUpperCase()));\n        System.out.println(\"All uppercase? \" + allUpper);\n    }\n}",
    "hint": "allMatch is short-circuiting."
  },
  {
    "id": "stream_37",
    "topicId": "stream",
    "question": "Generate the first 10 multiples of 3 using Stream.iterate and limit. Print them.",
    "mathSolution": "iterate with seed and unary operator, then limit.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        Stream.iterate(3, n -> n + 3)\n              .limit(10)\n              .forEach(System.out::println);\n    }\n}",
    "hint": "Use limit to make infinite stream finite."
  },
  {
    "id": "stream_38",
    "topicId": "stream",
    "question": "Group a list of employees by department and then by city using two-level groupingBy. Print the result.",
    "mathSolution": "groupingBy with downstream groupingBy.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static class Employee {\n        String name; String dept; String city;\n        Employee(String n, String d, String c) { name=n; dept=d; city=c; }\n        public String toString() { return name; }\n    }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee(\"Alice\", \"IT\", \"NYC\"),\n            new Employee(\"Bob\", \"HR\", \"LA\"),\n            new Employee(\"Charlie\", \"IT\", \"NYC\"),\n            new Employee(\"David\", \"HR\", \"NYC\"),\n            new Employee(\"Eve\", \"IT\", \"LA\")\n        );\n        Map<String, Map<String, List<Employee>>> grouped = employees.stream()\n            .collect(Collectors.groupingBy(e -> e.dept,\n                     Collectors.groupingBy(e -> e.city)));\n        System.out.println(\"Grouped by dept then city: \" + grouped);\n    }\n}",
    "hint": "Nested groupingBy creates multi-level map."
  },
  {
    "id": "stream_39",
    "topicId": "stream",
    "question": "Find the employee with the highest salary using max with Comparator.comparingDouble. Print the employee name.",
    "mathSolution": "max returns Optional; use get() after checking presence.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Employee {\n        String name; double salary;\n        Employee(String n, double s) { name=n; salary=s; }\n        public String toString() { return name; }\n    }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee(\"Alice\", 75000),\n            new Employee(\"Bob\", 82000),\n            new Employee(\"Charlie\", 70000)\n        );\n        Employee highest = employees.stream()\n            .max(Comparator.comparingDouble(e -> e.salary))\n            .orElse(null);\n        System.out.println(\"Highest paid: \" + highest);\n    }\n}",
    "hint": "max returns Optional; handle with orElse."
  },
  {
    "id": "stream_40",
    "topicId": "stream",
    "question": "Compute the sum of squares of all even numbers from 1 to 10 using mapToInt and sum.",
    "mathSolution": "filter even, map to square, sum.",
    "codeSolution": "import java.util.stream.*;\npublic class Main {\n    public static void main(String[] args) {\n        int sumSquares = IntStream.rangeClosed(1, 10)\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * n)\n            .sum();\n        System.out.println(\"Sum of squares of evens: \" + sumSquares);\n    }\n}",
    "hint": "IntStream.sum() is a terminal operation."
  },
  //lamda
   {
    id: "lambda_1",
    topicId: "lambda",
    question: "Write a lambda expression with no parameters.",
    mathSolution: "Empty parentheses for zero-parameter lambda",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        Runnable r2 = () -> System.out.println("Hello from lambda");\n        r2.run();\n    }\n}',
    hint: "Use () for no parameters",
  },
  {
    id: "lambda_2",
    topicId: "lambda",
    question: "Write a lambda expression with one parameter.",
    mathSolution: "Single parameter can omit parentheses",
    codeSolution: 'import java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        Function<Integer, Integer> square = x -> x * x;\n        System.out.println("Square of 5: " + square.apply(5));\n    }\n}',
    hint: "Parentheses optional for single parameter",
  },
  {
    id: "lambda_3",
    topicId: "lambda",
    question: "Write a lambda expression with multiple parameters.",
    mathSolution: "Multiple parameters require parentheses",
    codeSolution: 'public class Main {\n    interface MathOperation { int operate(int a, int b); }\n    public static void main(String[] args) {\n        MathOperation addition = (a, b) -> a + b;\n        MathOperation multiplication = (a, b) -> a * b;\n        System.out.println("10 + 5 = " + addition.operate(10, 5));\n        System.out.println("10 * 5 = " + multiplication.operate(10, 5));\n    }\n}',
    hint: "Multiple parameters need parentheses",
  },
  {
    id: "lambda_4",
    topicId: "lambda",
    question: "Write a lambda expression with multiple statements in body.",
    mathSolution: "Multi-statement lambda requires curly braces and return",
    codeSolution: 'public class Main {\n    interface StringProcessor { String process(String s); }\n    public static void main(String[] args) {\n        StringProcessor processor = (str) -> {\n            String trimmed = str.trim();\n            String upper = trimmed.toUpperCase();\n            return "Processed: " + upper;\n        };\n        System.out.println(processor.process("  hello world  "));\n    }\n}',
    hint: "Use {} for multiple statements and explicit return",
  },

  // FUNCTIONAL INTERFACES (5)
  {
    id: "lambda_5",
    topicId: "lambda",
    question: "Use Predicate functional interface with lambda.",
    mathSolution: "Predicate<T> tests a condition and returns boolean",
    codeSolution: 'import java.util.function.Predicate;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n        Predicate<String> isEmpty = s -> s.isEmpty();\n        System.out.println("Is 4 even? " + isEven.test(4));\n        System.out.println("Is 7 even? " + isEven.test(7));\n        System.out.println("Is \'\' empty? " + isEmpty.test(""));\n        System.out.println("Is \'Hello\' empty? " + isEmpty.test("Hello"));\n    }\n}',
    hint: "Predicate returns boolean with test() method",
  },
  {
    id: "lambda_6",
    topicId: "lambda",
    question: "Use Function functional interface with lambda.",
    mathSolution: "Function<T,R> transforms T to R",
    codeSolution: 'import java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        Function<String, Integer> stringLength = s -> s.length();\n        Function<Integer, String> intToString = n -> "Number: " + n;\n        Function<String, String> quote = s -> "\'" + s + "\'";\n        System.out.println("Length of \'Hello\': " + stringLength.apply("Hello"));\n        System.out.println(intToString.apply(42));\n        System.out.println(quote.apply("Lambda"));\n        Function<String, String> quoteLength = stringLength.andThen(len -> "Length: " + len);\n        System.out.println(quoteLength.apply("Hello World"));\n    }\n}',
    hint: "Function has apply() method",
  },
  {
    id: "lambda_7",
    topicId: "lambda",
    question: "Use Consumer functional interface with lambda.",
    mathSolution: "Consumer<T> accepts input but returns no result",
    codeSolution: 'import java.util.function.Consumer;\nimport java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        Consumer<String> print = s -> System.out.print(s + " ");\n        Consumer<String> printWithStars = s -> System.out.print("*" + s + "* ");\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        System.out.print("Names: ");\n        names.forEach(print);\n        System.out.print("\\nWith stars: ");\n        names.forEach(printWithStars);\n        Consumer<String> printTwice = print.andThen(print);\n        System.out.print("\\nTwice: ");\n        names.forEach(printTwice);\n        System.out.println();\n    }\n}',
    hint: "Consumer has accept() method",
  },
  {
    id: "lambda_8",
    topicId: "lambda",
    question: "Use Supplier functional interface with lambda.",
    mathSolution: "Supplier<T> provides a value with no input",
    codeSolution: 'import java.util.function.Supplier;\nimport java.util.Random;\npublic class Main {\n    public static void main(String[] args) {\n        Supplier<String> greeting = () -> "Hello, World!";\n        Supplier<Integer> randomNumber = () -> new Random().nextInt(100);\n        Supplier<Double> randomDouble = () -> Math.random() * 100;\n        System.out.println(greeting.get());\n        System.out.println("Random number: " + randomNumber.get());\n        System.out.println("Random double: " + randomDouble.get());\n        Supplier<Double> pi = () -> 3.14159;\n        System.out.println("Pi: " + pi.get());\n    }\n}',
    hint: "Supplier has get() method",
  },
  {
    id: "lambda_9",
    topicId: "lambda",
    question: "Combine multiple Predicates using and(), or(), negate().",
    mathSolution: "Predicate logical operations for complex conditions",
    codeSolution: 'import java.util.function.Predicate;\nimport java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n        Predicate<Integer> isPositive = n -> n > 0;\n        Predicate<Integer> isDivisibleBy3 = n -> n % 3 == 0;\n        Predicate<Integer> isEvenAndPositive = isEven.and(isPositive);\n        System.out.println("4 is even and positive: " + isEvenAndPositive.test(4));\n        System.out.println("-2 is even and positive: " + isEvenAndPositive.test(-2));\n        Predicate<Integer> isEvenOrDivisibleBy3 = isEven.or(isDivisibleBy3);\n        System.out.println("9 is even or divisible by 3: " + isEvenOrDivisibleBy3.test(9));\n        System.out.println("5 is even or divisible by 3: " + isEvenOrDivisibleBy3.test(5));\n        Predicate<Integer> isOdd = isEven.negate();\n        System.out.println("7 is odd: " + isOdd.test(7));\n        List<Integer> numbers = Arrays.asList(-3, -2, -1, 0, 1, 2, 3, 4, 5);\n        System.out.print("Even and positive: ");\n        numbers.stream().filter(isEven.and(isPositive)).forEach(n -> System.out.print(n + " "));\n        System.out.println();\n    }\n}',
    hint: "Predicate has and(), or(), negate() methods",
  },

  // LAMBDA WITH COLLECTIONS (5)
  {
    id: "lambda_10",
    topicId: "lambda",
    question: "Iterate over collection using forEach with lambda.",
    mathSolution: "forEach takes Consumer lambda",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> fruits = Arrays.asList("Apple", "Banana", "Orange", "Mango");\n        fruits.forEach(fruit -> System.out.println("I like " + fruit));\n        System.out.println("\\nUppercase:");\n        fruits.forEach(fruit -> System.out.println(fruit.toUpperCase()));\n        Map<String, Integer> ages = new HashMap<>();\n        ages.put("Alice", 25);\n        ages.put("Bob", 30);\n        ages.put("Charlie", 28);\n        ages.forEach((name, age) -> System.out.println(name + " is " + age + " years old"));\n    }\n}',
    hint: "forEach is a default method in Iterable",
  },
  {
    id: "lambda_11",
    topicId: "lambda",
    question: "Filter a list using lambda with Stream API.",
    mathSolution: "filter() with Predicate lambda",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        List<Integer> evens = numbers.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());\n        System.out.println("Even numbers: " + evens);\n        List<Integer> greaterThan5 = numbers.stream().filter(n -> n > 5).collect(Collectors.toList());\n        System.out.println("Greater than 5: " + greaterThan5);\n        List<String> names = Arrays.asList("Alice", "Bob", "Anna", "Charlie", "Amanda");\n        List<String> startsWithA = names.stream().filter(name -> name.startsWith("A")).collect(Collectors.toList());\n        System.out.println("Names starting with A: " + startsWithA);\n    }\n}',
    hint: "filter() returns a new stream with matching elements",
  },
  {
    id: "lambda_12",
    topicId: "lambda",
    question: "Transform a list using map() with lambda.",
    mathSolution: "map() applies Function to each element",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("alice", "bob", "charlie");\n        List<String> upperNames = names.stream().map(name -> name.toUpperCase()).collect(Collectors.toList());\n        System.out.println("Uppercase: " + upperNames);\n        List<Integer> nameLengths = names.stream().map(name -> name.length()).collect(Collectors.toList());\n        System.out.println("Lengths: " + nameLengths);\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        List<Integer> squares = numbers.stream().map(n -> n * n).collect(Collectors.toList());\n        System.out.println("Squares: " + squares);\n    }\n}',
    hint: "map() transforms each element",
  },
  {
    id: "lambda_13",
    topicId: "lambda",
    question: "Sort a list using lambda comparator.",
    mathSolution: "Comparator as lambda for custom sorting",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.Collections;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Charlie", "Alice", "Bob", "David");\n        System.out.println("Original: " + names);\n        Collections.sort(names);\n        System.out.println("Natural order: " + names);\n        Collections.sort(names, (a, b) -> a.length() - b.length());\n        System.out.println("By length: " + names);\n        Collections.sort(names, (a, b) -> b.compareTo(a));\n        System.out.println("Reverse alphabetical: " + names);\n        List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);\n        numbers.sort((a, b) -> a - b);\n        System.out.println("Numbers ascending: " + numbers);\n        numbers.sort((a, b) -> b - a);\n        System.out.println("Numbers descending: " + numbers);\n    }\n}',
    hint: "Comparator is a functional interface",
  },
  {
    id: "lambda_14",
    topicId: "lambda",
    question: "Use reduce() to aggregate stream elements.",
    mathSolution: "reduce() combines elements using binary operator",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        int sum = numbers.stream().reduce(0, (a, b) -> a + b);\n        System.out.println("Sum: " + sum);\n        int product = numbers.stream().reduce(1, (a, b) -> a * b);\n        System.out.println("Product: " + product);\n        int max = numbers.stream().reduce(Integer.MIN_VALUE, (a, b) -> a > b ? a : b);\n        System.out.println("Max: " + max);\n        int min = numbers.stream().reduce(Integer.MAX_VALUE, (a, b) -> a < b ? a : b);\n        System.out.println("Min: " + min);\n        List<String> words = Arrays.asList("Hello", " ", "World", "!");\n        String sentence = words.stream().reduce("", (a, b) -> a + b);\n        System.out.println("Concatenated: " + sentence);\n    }\n}',
    hint: "reduce() combines elements into single result",
  },

  // METHOD REFERENCES (3)
  {
    id: "lambda_15",
    topicId: "lambda",
    question: "Use static method reference.",
    mathSolution: "ClassName::staticMethodName",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    static class MathUtils {\n        static int square(int x) { return x * x; }\n        static boolean isEven(int x) { return x % 2 == 0; }\n    }\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        numbers.stream().map(MathUtils::square).forEach(x -> System.out.print(x + " "));\n        System.out.println("\\nEven numbers:");\n        numbers.stream().filter(MathUtils::isEven).forEach(x -> System.out.print(x + " "));\n        System.out.println();\n    }\n}',
    hint: "Static method reference uses Class::method",
  },
  {
    id: "lambda_16",
    topicId: "lambda",
    question: "Use instance method reference.",
    mathSolution: "object::instanceMethod or Class::instanceMethod",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    static class Printer {\n        void print(String s) { System.out.println("Printing: " + s); }\n    }\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        Printer printer = new Printer();\n        names.forEach(printer::print);\n        System.out.println("\\nUppercase:");\n        names.stream().map(String::toUpperCase).forEach(System.out::println);\n    }\n}',
    hint: "Two types: bound and unbound method references",
  },
  {
    id: "lambda_17",
    topicId: "lambda",
    question: "Use constructor reference.",
    mathSolution: "ClassName::new",
    codeSolution: 'import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.Collectors;\npublic class Main {\n    static class Person {\n        String name;\n        Person() { name = "Unknown"; }\n        Person(String name) { this.name = name; }\n        public String toString() { return name; }\n    }\n    public static void main(String[] args) {\n        Supplier<Person> personFactory = Person::new;\n        Person p1 = personFactory.get();\n        System.out.println("Default person: " + p1);\n        Function<String, Person> personCreator = Person::new;\n        Person p2 = personCreator.apply("Alice");\n        System.out.println("Named person: " + p2);\n        List<String> names = Arrays.asList("Bob", "Charlie", "David");\n        List<Person> people = names.stream().map(Person::new).collect(Collectors.toList());\n        System.out.println("People: " + people);\n        Function<Integer, String[]> arrayCreator = String[]::new;\n        String[] array = arrayCreator.apply(5);\n        System.out.println("Array length: " + array.length);\n    }\n}',
    hint: "Constructor references create new objects",
  },

  // ADVANCED LAMBDA CONCEPTS (5)
  {
    id: "lambda_18",
    topicId: "lambda",
    question: "Create custom functional interface.",
    mathSolution: "@FunctionalInterface annotation ensures single abstract method",
    codeSolution: 'public class Main {\n    @FunctionalInterface\n    interface StringFormatter {\n        String format(String s1, String s2);\n        default void printHelp() { System.out.println("Formats two strings"); }\n        static StringFormatter createJoiner(String delimiter) {\n            return (s1, s2) -> s1 + delimiter + s2;\n        }\n    }\n    public static void main(String[] args) {\n        StringFormatter joiner = (a, b) -> a + " " + b;\n        System.out.println(joiner.format("Hello", "World"));\n        StringFormatter csv = (a, b) -> a + "," + b;\n        System.out.println(csv.format("Apple", "Banana"));\n        StringFormatter reverser = (a, b) -> new StringBuilder(a + b).reverse().toString();\n        System.out.println(reverser.format("AB", "CD"));\n        StringFormatter customJoiner = StringFormatter.createJoiner(" - ");\n        System.out.println(customJoiner.format("First", "Second"));\n    }\n}',
    hint: "@FunctionalInterface is optional but recommended",
  },
  {
    id: "lambda_19",
    topicId: "lambda",
    question: "Lambda with effectively final variables.",
    mathSolution: "Lambda can access effectively final local variables",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        String prefix = "Name: "; // effectively final\n        int multiplier = 2;\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(name -> System.out.println(prefix + name));\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        numbers.stream().map(n -> n * multiplier).forEach(n -> System.out.print(n + " "));\n        System.out.println();\n        class Example {\n            int instanceCounter = 0;\n            void process() { numbers.forEach(n -> instanceCounter++); }\n        }\n        System.out.println("Instance variable can be modified inside lambda.");\n    }\n}',
    hint: "Local variables must be effectively final (not changed after initialization)",
  },
  {
  id: "lambda_20",
  topicId: "lambda",
  question: "Handle checked exceptions in lambda.",
  mathSolution: "Wrap checked exceptions or use custom functional interface",
  codeSolution: 'import java.util.function.Function;\nimport java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    @FunctionalInterface\n    interface ThrowingFunction<T, R> { R apply(T t) throws Exception; }\n\n    @SuppressWarnings("unchecked")\n    static <T, R> Function<T, R> wrap(ThrowingFunction<T, R> throwingFunction) {\n        return t -> {\n            try {\n                return throwingFunction.apply(t);\n            } catch (Exception e) {\n                // Return error message as String (safe because R is expected to be String in this demo)\n                return (R) ("Error: " + e.getMessage());\n            }\n        };\n    }\n\n    static String riskyOperation(String s) throws Exception {\n        if (s.equals("error")) {\n            throw new Exception("Simulated checked exception");\n        }\n        return "Processed: " + s;\n    }\n\n    public static void main(String[] args) {\n        List<String> inputs = Arrays.asList("hello", "world", "error", "lambda");\n        \n        // Solution 1: inline try-catch\n        System.out.println("Inline try-catch:");\n        inputs.stream().map(name -> {\n            try {\n                return riskyOperation(name);\n            } catch (Exception e) {\n                return "Error: " + e.getMessage();\n            }\n        }).forEach(System.out::println);\n        \n        // Solution 2: wrap helper (returns error message internally)\n        System.out.println("\\nUsing wrapper:");\n        inputs.stream()\n            .map(wrap(s -> riskyOperation(s)))\n            .forEach(System.out::println);\n        \n        System.out.println("\\nHandled checked exceptions in lambda (no crashes).");\n    }\n}',
  hint: "Standard functional interfaces don't throw checked exceptions – wrap and return error",
},
  {
    id: "lambda_21",
    topicId: "lambda",
    question: "Use flatMap() for nested collections.",
    mathSolution: "flatMap flattens multiple streams into one",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    public static void main(String[] args) {\n        List<List<Integer>> nestedNumbers = Arrays.asList(\n            Arrays.asList(1, 2, 3),\n            Arrays.asList(4, 5, 6),\n            Arrays.asList(7, 8, 9)\n        );\n        System.out.println("Nested: " + nestedNumbers);\n        List<Integer> flattened = nestedNumbers.stream().flatMap(list -> list.stream()).collect(Collectors.toList());\n        System.out.println("Flattened: " + flattened);\n        List<String> words = Arrays.asList("Hello", "World");\n        List<Character> characters = words.stream().flatMap(word -> word.chars().mapToObj(c -> (char) c)).collect(Collectors.toList());\n        System.out.println("Characters: " + characters);\n        List<String> sentences = Arrays.asList("Java is great", "Lambda expressions are cool");\n        List<String> allWords = sentences.stream().flatMap(sentence -> Arrays.stream(sentence.split(" "))).collect(Collectors.toList());\n        System.out.println("All words: " + allWords);\n    }\n}',
    hint: "flatMap() is map() + flattening",
  },
  {
    id: "lambda_22",
    topicId: "lambda",
    question: "Use groupingBy with lambda for complex grouping.",
    mathSolution: "Collectors.groupingBy with classifier function",
    codeSolution: 'import java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n    static class Person { String name; int age; String city; Person(String n, int a, String c) { name=n; age=a; city=c; } public String toString() { return name; } }\n    public static void main(String[] args) {\n        List<Person> people = Arrays.asList(\n            new Person("Alice", 25, "NYC"),\n            new Person("Bob", 30, "LA"),\n            new Person("Charlie", 25, "NYC"),\n            new Person("David", 30, "Chicago"),\n            new Person("Eve", 25, "LA")\n        );\n        Map<String, List<Person>> byCity = people.stream().collect(Collectors.groupingBy(p -> p.city));\n        System.out.println("By city: " + byCity);\n        Map<Integer, List<Person>> byAge = people.stream().collect(Collectors.groupingBy(p -> p.age));\n        System.out.println("By age: " + byAge);\n        Map<String, List<Person>> byAgeRange = people.stream().collect(Collectors.groupingBy(p -> p.age < 30 ? "Under 30" : "30 and over"));\n        System.out.println("By age range: " + byAgeRange);\n        Map<String, Long> countByCity = people.stream().collect(Collectors.groupingBy(p -> p.city, Collectors.counting()));\n        System.out.println("Count by city: " + countByCity);\n    }\n}',
    hint: "groupingBy creates Map from classifier function",
  },

  // PRACTICAL APPLICATIONS (3)
  {
    id: "lambda_23",
    topicId: "lambda",
    question: "Implement event handler using lambda.",
    mathSolution: "Lambda simplifies event listener implementation",
    codeSolution: 'import java.util.*;\npublic class Main {\n    interface ActionListener { void actionPerformed(String source); }\n    static class Button {\n        private List<ActionListener> listeners = new ArrayList<>();\n        void addActionListener(ActionListener listener) { listeners.add(listener); }\n        void click() { listeners.forEach(l -> l.actionPerformed("Button clicked")); }\n    }\n    public static void main(String[] args) {\n        Button button1 = new Button();\n        button1.addActionListener(new ActionListener() {\n            public void actionPerformed(String msg) { System.out.println("Button 1: " + msg); }\n        });\n        Button button2 = new Button();\n        button2.addActionListener(e -> System.out.println("Button 2: " + e));\n        Button button3 = new Button();\n        button3.addActionListener(e -> {\n            System.out.println("Button 3: " + e);\n            System.out.println("Event source: button3");\n        });\n        button1.click();\n        button2.click();\n        button3.click();\n    }\n}',
    hint: "Lambda makes event handling concise",
  },
  {
    id: "lambda_24",
    topicId: "lambda",
    question: "Use lambda with custom sorting of objects.",
    mathSolution: "Comparator.comparing with lambda for multi-level sorting",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Employee {\n        String name; double salary; int age;\n        Employee(String n, double s, int a) { name=n; salary=s; age=a; }\n        double getSalary() { return salary; }\n        int getAge() { return age; }\n        public String toString() { return name + "($" + salary + "," + age + ")"; }\n    }\n    public static void main(String[] args) {\n        List<Employee> employees = Arrays.asList(\n            new Employee("Alice", 75000, 25),\n            new Employee("Bob", 65000, 30),\n            new Employee("Charlie", 75000, 28),\n            new Employee("David", 80000, 35),\n            new Employee("Eve", 65000, 22)\n        );\n        employees.sort((e1, e2) -> Double.compare(e1.salary, e2.salary));\n        System.out.println("By salary: " + employees);\n        employees.sort((e1, e2) -> Double.compare(e2.salary, e1.salary));\n        System.out.println("By salary desc: " + employees);\n        employees.sort((e1, e2) -> e1.name.compareTo(e2.name));\n        System.out.println("By name: " + employees);\n        employees.sort((e1, e2) -> {\n            if(e1.salary != e2.salary) return Double.compare(e1.salary, e2.salary);\n            else return Integer.compare(e1.age, e2.age);\n        });\n        System.out.println("By salary then age: " + employees);\n        employees.sort(Comparator.comparing(Employee::getSalary).thenComparing(Employee::getAge).reversed());\n        System.out.println("Using Comparator.comparing: " + employees);\n    }\n}',
    hint: "Lambda enables flexible sorting logic",
  },
  {
    id: "lambda_25",
    topicId: "lambda",
    question: "Implement strategy pattern with lambda.",
    mathSolution: "Lambda replaces strategy interface implementations",
    codeSolution: 'import java.util.function.Function;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n    static void processPayment(double amount, Function<Double, String> processor) {\n        System.out.println(processor.apply(amount));\n    }\n    public static void main(String[] args) {\n        Function<Double, String> creditCard = amount -> "Paid $" + amount + " using Credit Card (fee: $" + (amount * 0.02) + ")";\n        Function<Double, String> paypal = amount -> "Paid $" + amount + " using PayPal (fee: $" + (amount * 0.03) + ")";\n        Function<Double, String> bitcoin = amount -> "Paid $" + amount + " using Bitcoin (fee: $" + (amount * 0.01) + ")";\n        Function<Double, String> cash = amount -> "Paid $" + amount + " in Cash (no fee)";\n        processPayment(100.50, creditCard);\n        processPayment(75.25, paypal);\n        processPayment(200.00, bitcoin);\n        processPayment(50.00, cash);\n        processPayment(30.00, amount -> "Gift card payment of $" + amount + " (balance: $" + (amount - 5) + ")");\n        List<Double> prices = Arrays.asList(10.0, 20.0, 30.0);\n        Function<Double, Double> noDiscount = price -> price;\n        Function<Double, Double> tenPercentOff = price -> price * 0.9;\n        System.out.println("\\nPrices with different discounts:");\n        prices.stream().map(noDiscount).forEach(p -> System.out.print(p + " "));\n        System.out.println();\n        prices.stream().map(tenPercentOff).forEach(p -> System.out.print(p + " "));\n        System.out.println();\n    }\n}',
    hint: "Strategy pattern becomes trivial with lambdas",
  },
   {
    "id": "lambda_26",
    "topicId": "lambda",
    "question": "Create a lambda that takes two integers and returns their greatest common divisor (GCD). Use a custom functional interface.",
    "mathSolution": "Implement Euclidean algorithm using lambda.",
    "codeSolution": "public class Main {\n    interface GCDCalculator { int gcd(int a, int b); }\n    public static void main(String[] args) {\n        GCDCalculator gcd = (a, b) -> {\n            while (b != 0) { int temp = b; b = a % b; a = temp; }\n            return a;\n        };\n        System.out.println(\"GCD of 48 and 18: \" + gcd.gcd(48, 18));\n        System.out.println(\"GCD of 56 and 98: \" + gcd.gcd(56, 98));\n    }\n}",
    "hint": "Euclidean algorithm: while b != 0, set a = b, b = a % b."
  },
  {
    "id": "lambda_27",
    "topicId": "lambda",
    "question": "Write a lambda that takes a list of integers and returns the count of numbers greater than a threshold. Use a functional interface that accepts a List<Integer> and an int threshold.",
    "mathSolution": "Use stream filter and count.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface Counter { int countAbove(List<Integer> list, int threshold); }\n    public static void main(String[] args) {\n        Counter counter = (list, threshold) ->\n            (int) list.stream().filter(n -> n > threshold).count();\n        List<Integer> numbers = Arrays.asList(5, 12, 8, 3, 15, 7);\n        System.out.println(\"Above 10: \" + counter.countAbove(numbers, 10));\n        System.out.println(\"Above 5: \" + counter.countAbove(numbers, 5));\n    }\n}",
    "hint": "Use stream().filter().count() and cast to int."
  },
  {
    "id": "lambda_28",
    "topicId": "lambda",
    "question": "Use a lambda with a custom functional interface to convert a string to its acronym (first letter of each word).",
    "mathSolution": "Split string, take first character of each word, join.",
    "codeSolution": "public class Main {\n    interface AcronymGenerator { String generate(String phrase); }\n    public static void main(String[] args) {\n        AcronymGenerator acronym = phrase -> {\n            String[] words = phrase.split(\" \");\n            StringBuilder sb = new StringBuilder();\n            for (String w : words) sb.append(Character.toUpperCase(w.charAt(0)));\n            return sb.toString();\n        };\n        System.out.println(acronym.generate(\"World Health Organization\"));\n        System.out.println(acronym.generate(\"Java Programming Language\"));\n    }\n}",
    "hint": "Split on space, take charAt(0) of each word."
  },
  {
  "id": "lambda_29",
  "topicId": "lambda",
  "question": "Write a lambda that returns a formatted string of a list of objects using a delimiter and a transformer function.",
  "mathSolution": "Use stream map and collect with joining.",
  "codeSolution": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\npublic class Main {\n    interface ListFormatter<T> { String format(List<T> list, Function<T, String> transformer, String delimiter); }\n    public static void main(String[] args) {\n        ListFormatter<Integer> intFormatter = (list, transformer, delim) ->\n            list.stream().map(transformer).collect(Collectors.joining(delim));\n        List<Integer> nums = Arrays.asList(1, 2, 3);\n        System.out.println(intFormatter.format(nums, n -> \"[\" + n + \"]\", \"-\"));\n        \n        ListFormatter<String> strFormatter = (list, transformer, delim) ->\n            list.stream().map(transformer).collect(Collectors.joining(delim));\n        List<String> words = Arrays.asList(\"Hello\", \"World\");\n        System.out.println(strFormatter.format(words, s -> s.toUpperCase(), \" \"));\n    }\n}",
  "hint": "Use map() and Collectors.joining()."
},
  {
    "id": "lambda_30",
    "topicId": "lambda",
    "question": "Create a lambda that reverses the order of characters in each word of a sentence, preserving word order.",
    "mathSolution": "Split, reverse each word, join.",
    "codeSolution": "public class Main {\n    interface WordReverser { String reverseWords(String sentence); }\n    public static void main(String[] args) {\n        WordReverser reverser = sentence -> {\n            String[] words = sentence.split(\" \");\n            StringBuilder result = new StringBuilder();\n            for (String w : words) {\n                result.append(new StringBuilder(w).reverse().toString()).append(\" \");\n            }\n            return result.toString().trim();\n        };\n        System.out.println(reverser.reverseWords(\"Hello World\"));\n        System.out.println(reverser.reverseWords(\"Java Lambda Expression\"));\n    }\n}",
    "hint": "Use StringBuilder.reverse() for each word."
  },
  {
    "id": "lambda_31",
    "topicId": "lambda",
    "question": "Write a lambda that checks if a given string is a valid email address (contains @ and .). Use Predicate.",
    "mathSolution": "Predicate with contains check.",
    "codeSolution": "import java.util.function.Predicate;\npublic class Main {\n    public static void main(String[] args) {\n        Predicate<String> isValidEmail = email -> email != null && email.contains(\"@\") && email.contains(\".\");\n        System.out.println(isValidEmail.test(\"test@example.com\"));\n        System.out.println(isValidEmail.test(\"invalid\"));\n        System.out.println(isValidEmail.test(\"user@domain\"));\n    }\n}",
    "hint": "Check for '@' and '.' in the string."
  },
  {
    "id": "lambda_32",
    "topicId": "lambda",
    "question": "Use a lambda to sort a list of strings by their length, then alphabetically for same length.",
    "mathSolution": "Comparator with thenComparing.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"cat\", \"banana\", \"apple\", \"dog\", \"car\");\n        words.sort(Comparator.comparingInt(String::length).thenComparing(Comparator.naturalOrder()));\n        System.out.println(words);\n    }\n}",
    "hint": "Use Comparator.comparingInt and thenComparing."
  },
  {
    "id": "lambda_33",
    "topicId": "lambda",
    "question": "Create a lambda that takes a BiFunction to combine two strings and then apply a function to the result.",
    "mathSolution": "Use andThen on BiFunction.",
    "codeSolution": "import java.util.function.BiFunction;\nimport java.util.function.Function;\npublic class Main {\n    public static void main(String[] args) {\n        BiFunction<String, String, String> concat = (a, b) -> a + b;\n        Function<String, String> toUpper = String::toUpperCase;\n        BiFunction<String, String, String> combined = concat.andThen(toUpper);\n        System.out.println(combined.apply(\"hello \", \"world\"));\n        System.out.println(combined.apply(\"java \", \"lambda\"));\n    }\n}",
    "hint": "Use BiFunction.andThen() to chain operations."
  },
  {
    "id": "lambda_34",
    "topicId": "lambda",
    "question": "Write a lambda that filters a list of integers and returns a list of only prime numbers. Use a custom functional interface.",
    "mathSolution": "Check primality for each number.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface PrimeFilter { List<Integer> getPrimes(List<Integer> numbers); }\n    static boolean isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i <= Math.sqrt(n); i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n    public static void main(String[] args) {\n        PrimeFilter primeFilter = list -> {\n            List<Integer> result = new ArrayList<>();\n            for (int n : list) if (isPrime(n)) result.add(n);\n            return result;\n        };\n        List<Integer> numbers = Arrays.asList(2, 3, 4, 5, 6, 7, 8, 9, 10, 11);\n        System.out.println(\"Primes: \" + primeFilter.getPrimes(numbers));\n    }\n}",
    "hint": "Helper method to check primality; filter using loop."
  },
  {
    "id": "lambda_35",
    "topicId": "lambda",
    "question": "Use a lambda to find the longest string in a list. If multiple, return the first one. Use BinaryOperator.",
    "mathSolution": "BinaryOperator.reduce with length comparison.",
    "codeSolution": "import java.util.*;\nimport java.util.function.BinaryOperator;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> words = Arrays.asList(\"cat\", \"elephant\", \"dog\", \"giraffe\", \"hippopotamus\");\n        BinaryOperator<String> longest = (s1, s2) -> s1.length() >= s2.length() ? s1 : s2;\n        String result = words.stream().reduce(longest).orElse(null);\n        System.out.println(\"Longest string: \" + result);\n    }\n}",
    "hint": "Use stream.reduce with a BinaryOperator."
  },
  {
    "id": "lambda_36",
    "topicId": "lambda",
    "question": "Write a lambda that returns a map of word frequencies from a list of strings using a custom functional interface.",
    "mathSolution": "Use Collectors.groupingBy and counting.",
    "codeSolution": "import java.util.*;\nimport java.util.function.Function;\nimport java.util.stream.Collectors;\npublic class Main {\n    interface FrequencyCounter { Map<String, Long> countFrequencies(List<String> words); }\n    public static void main(String[] args) {\n        FrequencyCounter counter = words -> words.stream()\n            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"apple\", \"orange\", \"banana\", \"apple\");\n        System.out.println(counter.countFrequencies(words));\n    }\n}",
    "hint": "Use Collectors.groupingBy with counting downstream."
  },
  {
    "id": "lambda_37",
    "topicId": "lambda",
    "question": "Create a lambda that takes a string and returns the number of vowels in it. Use a custom functional interface.",
    "mathSolution": "Count vowels (a,e,i,o,u) case-insensitive.",
    "codeSolution": "public class Main {\n    interface VowelCounter { int countVowels(String str); }\n    public static void main(String[] args) {\n        VowelCounter counter = s -> {\n            int count = 0;\n            for (char c : s.toLowerCase().toCharArray()) {\n                if (\"aeiou\".indexOf(c) != -1) count++;\n            }\n            return count;\n        };\n        System.out.println(counter.countVowels(\"Hello World\"));\n        System.out.println(counter.countVowels(\"Lambda Expressions\"));\n    }\n}",
    "hint": "Convert to lowercase and check against vowel set."
  },
  {
    "id": "lambda_38",
    "topicId": "lambda",
    "question": "Use a lambda to perform a binary operation (addition, subtraction, multiplication) on two integers selected by an operator character. Use a map of lambdas.",
    "mathSolution": "Map<Character, IntBinaryOperator>.",
    "codeSolution": "import java.util.*;\nimport java.util.function.IntBinaryOperator;\npublic class Main {\n    public static void main(String[] args) {\n        Map<Character, IntBinaryOperator> operations = new HashMap<>();\n        operations.put('+', (a, b) -> a + b);\n        operations.put('-', (a, b) -> a - b);\n        operations.put('*', (a, b) -> a * b);\n        operations.put('/', (a, b) -> a / b);\n        int x = 10, y = 5;\n        System.out.println(x + \" + \" + y + \" = \" + operations.get('+').applyAsInt(x, y));\n        System.out.println(x + \" - \" + y + \" = \" + operations.get('-').applyAsInt(x, y));\n        System.out.println(x + \" * \" + y + \" = \" + operations.get('*').applyAsInt(x, y));\n        System.out.println(x + \" / \" + y + \" = \" + operations.get('/').applyAsInt(x, y));\n    }\n}",
    "hint": "Store lambdas in a map keyed by operator."
  },
  {
    "id": "lambda_39",
    "topicId": "lambda",
    "question": "Write a lambda that returns a new list containing the squares of the elements of the input list, but only if the original element is even. Use Stream API.",
    "mathSolution": "Filter even, map to square, collect.",
    "codeSolution": "import java.util.*;\nimport java.util.stream.Collectors;\npublic class Main {\n    interface SquareEven { List<Integer> squareEven(List<Integer> numbers); }\n    public static void main(String[] args) {\n        SquareEven processor = list -> list.stream()\n            .filter(n -> n % 2 == 0)\n            .map(n -> n * n)\n            .collect(Collectors.toList());\n        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);\n        System.out.println(\"Squares of evens: \" + processor.squareEven(nums));\n    }\n}",
    "hint": "Use filter, map, and collect."
  },
  {
    "id": "lambda_40",
    "topicId": "lambda",
    "question": "Create a lambda that returns the average of a list of integers, returning 0 if empty. Use a custom functional interface.",
    "mathSolution": "Calculate sum and count, return average.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    interface AverageCalculator { double average(List<Integer> numbers); }\n    public static void main(String[] args) {\n        AverageCalculator avgCalc = list -> {\n            if (list.isEmpty()) return 0.0;\n            int sum = 0;\n            for (int n : list) sum += n;\n            return (double) sum / list.size();\n        };\n        List<Integer> nums = Arrays.asList(10, 20, 30, 40, 50);\n        System.out.println(\"Average: \" + avgCalc.average(nums));\n        System.out.println(\"Empty list: \" + avgCalc.average(new ArrayList<>()));\n    }\n}",
    "hint": "Handle empty list to avoid division by zero."
  }
);