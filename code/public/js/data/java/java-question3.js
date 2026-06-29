QuizData.questions.push(
    //String ,oops ,constructor
  {
    id: "string_1",
    topicId: "java_string",
    question: "How do you find the length of a given string?",
    mathSolution: "Count number of characters in string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        int length = str.length();\n        System.out.println(length);\n    }\n}',
    hint: "Use length() method"
  },
  {
    id: "string_2",
    topicId: "java_string",
    question: "Write code to convert a string to uppercase.",
    mathSolution: "Convert all characters to capital letters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "hello";\n        String upper = str.toUpperCase();\n        System.out.println(upper);\n    }\n}',
    hint: "Use toUpperCase() method"
  },
  {
    id: "string_3",
    topicId: "java_string",
    question: "How do you convert a string to lowercase?",
    mathSolution: "Convert all characters to small letters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "WORLD";\n        String lower = str.toLowerCase();\n        System.out.println(lower);\n    }\n}',
    hint: "Use toLowerCase() method"
  },
  {
    id: "string_4",
    topicId: "java_string",
    question: "Write code to check if two strings are equal.",
    mathSolution: "Compare strings character by character",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Java";\n        String s2 = "Java";\n        boolean isEqual = s1.equals(s2);\n        System.out.println(isEqual);\n    }\n}',
    hint: "Use equals() method"
  },
  {
    id: "string_5",
    topicId: "java_string",
    question: "How do you get the first character of a string?",
    mathSolution: "Character at index 0",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Programming";\n        char first = str.charAt(0);\n        System.out.println(first);\n    }\n}',
    hint: "Use charAt() with index 0"
  },
  {
    id: "string_6",
    topicId: "java_string",
    question: "Write code to get the last character of a string.",
    mathSolution: "Character at index length-1",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Programming";\n        char last = str.charAt(str.length() - 1);\n        System.out.println(last);\n    }\n}',
    hint: "Use length()-1 as index"
  },
  {
    id: "string_7",
    topicId: "java_string",
    question: "How do you concatenate two strings?",
    mathSolution: "Join two strings together",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Hello";\n        String s2 = "World";\n        String result = s1 + s2;\n        System.out.println(result);\n    }\n}',
    hint: "Use + operator"
  },
  {
    id: "string_8",
    topicId: "java_string",
    question: "Write code to check if a string contains a substring.",
    mathSolution: "Check if substring exists in main string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World";\n        boolean contains = str.contains("World");\n        System.out.println(contains);\n    }\n}',
    hint: "Use contains() method"
  },
  {
    id: "string_9",
    topicId: "java_string",
    question: "How do you find the index of a character in a string?",
    mathSolution: "Find position of first occurrence",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        int index = str.indexOf(\'e\');\n        System.out.println(index);\n    }\n}',
    hint: "Use indexOf() method"
  },
  {
    id: "string_10",
    topicId: "java_string",
    question: "Write code to replace a character in a string.",
    mathSolution: "Replace all occurrences of old char with new",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        String replaced = str.replace(\'l\', \'p\');\n        System.out.println(replaced);\n    }\n}',
    hint: "Use replace() method"
  },
  {
    id: "string_11",
    topicId: "java_string",
    question: "How do you check if a string is empty?",
    mathSolution: "Check if length is zero",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "";\n        boolean isEmpty = str.isEmpty();\n        System.out.println(isEmpty);\n    }\n}',
    hint: "Use isEmpty() method"
  },
  {
    id: "string_12",
    topicId: "java_string",
    question: "Write code to extract substring from a string.",
    mathSolution: "Get part of string from start to end-1",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "HelloWorld";\n        String sub = str.substring(1, 5);\n        System.out.println(sub);\n    }\n}',
    hint: "Use substring(start, end) - end exclusive"
  },
  {
    id: "string_13",
    topicId: "java_string",
    question: "How do you remove whitespace from both ends?",
    mathSolution: "Trim leading and trailing spaces",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "  Hello  ";\n        String trimmed = str.trim();\n        System.out.println(trimmed);\n    }\n}',
    hint: "Use trim() method"
  },
  {
    id: "string_14",
    topicId: "java_string",
    question: "Write code to compare strings ignoring case.",
    mathSolution: "Compare without considering case",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Java";\n        String s2 = "JAVA";\n        boolean isEqual = s1.equalsIgnoreCase(s2);\n        System.out.println(isEqual);\n    }\n}',
    hint: "Use equalsIgnoreCase()"
  },
  {
    id: "string_15",
    topicId: "java_string",
    question: "How do you split a string by delimiter?",
    mathSolution: "Divide string into parts",
    codeSolution: 'import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        String str = "apple,banana,orange";\n        String[] fruits = str.split(",");\n        System.out.println(Arrays.toString(fruits));\n    }\n}',
    hint: "Use split() with delimiter"
  },
  {
    id: "string_16",
    topicId: "java_string",
    question: "Write code to check if string starts with prefix.",
    mathSolution: "Check beginning of string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean starts = str.startsWith("He");\n        System.out.println(starts);\n    }\n}',
    hint: "Use startsWith() method"
  },
  {
    id: "string_17",
    topicId: "java_string",
    question: "How do you check if string ends with suffix?",
    mathSolution: "Check ending of string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean ends = str.endsWith("lo");\n        System.out.println(ends);\n    }\n}',
    hint: "Use endsWith() method"
  },
  {
    id: "string_18",
    topicId: "java_string",
    question: "Write code to convert string to integer.",
    mathSolution: "Parse numeric string to int",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "123";\n        int num = Integer.parseInt(str);\n        System.out.println(num);\n    }\n}',
    hint: "Use Integer.parseInt()"
  },
  {
    id: "string_19",
    topicId: "java_string",
    question: "How do you convert integer to string?",
    mathSolution: "Convert number to string representation",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        int num = 456;\n        String str = String.valueOf(num);\n        System.out.println(str);\n    }\n}',
    hint: "Use String.valueOf()"
  },
  {
    id: "string_20",
    topicId: "java_string",
    question: "Write code to repeat a string multiple times.",
    mathSolution: "Concatenate string n times",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hi";\n        String repeated = str + str + str;\n        System.out.println(repeated);\n    }\n}',
    hint: "Use concatenation (repeat not available in older Java)"
  },
  {
    id: "string_21",
    topicId: "java_string",
    question: "How do you join strings with delimiter?",
    mathSolution: "Combine multiple strings with separator",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String joined = "2024" + "-" + "01" + "-" + "15";\n        System.out.println(joined);\n    }\n}',
    hint: "Use + operator or String.join() for Java 8+"
  },
  {
    id: "string_22",
    topicId: "java_string",
    question: "Write code to check if string is blank.",
    mathSolution: "Check if string contains only whitespace",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "   ";\n        boolean isBlank = str.trim().isEmpty();\n        System.out.println(isBlank);\n    }\n}',
    hint: "Use trim() and isEmpty() for older Java"
  },
  {
    id: "string_23",
    topicId: "java_string",
    question: "How do you get character at specific index?",
    mathSolution: "Character at given position",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Computer";\n        char ch = str.charAt(3);\n        System.out.println(ch);\n    }\n}',
    hint: "Index starts from 0"
  },
  {
    id: "string_24",
    topicId: "java_string",
    question: "Write code to find last index of character.",
    mathSolution: "Find last occurrence position",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World";\n        int index = str.lastIndexOf(\'o\');\n        System.out.println(index);\n    }\n}',
    hint: "Use lastIndexOf()"
  },
  {
    id: "string_25",
    topicId: "java_string",
    question: "How do you check if strings are not equal?",
    mathSolution: "Negate equality check",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "abc";\n        String s2 = "def";\n        boolean notEqual = !s1.equals(s2);\n        System.out.println(notEqual);\n    }\n}',
    hint: "Use ! with equals()"
  },
  {
    id: "string_26",
    topicId: "java_string",
    question: "Write code to extract substring from index to end.",
    mathSolution: "Get substring starting at index",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Programming";\n        String sub = str.substring(3);\n        System.out.println(sub);\n    }\n}',
    hint: "substring(start) goes to end"
  },
  {
    id: "string_27",
    topicId: "java_string",
    question: "How do you replace all occurrences of a char?",
    mathSolution: "Replace old char with new everywhere",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Java Programming";\n        String replaced = str.replace(\'a\', \'e\');\n        System.out.println(replaced);\n    }\n}',
    hint: "replace() works for chars"
  },
  {
    id: "string_28",
    topicId: "java_string",
    question: "Write code to convert string to char array.",
    mathSolution: "Convert to array of characters",
    codeSolution: 'import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        char[] chars = str.toCharArray();\n        System.out.println(Arrays.toString(chars));\n    }\n}',
    hint: "Use toCharArray()"
  },
  {
    id: "string_29",
    topicId: "java_string",
    question: "How do you check if string is null or empty?",
    mathSolution: "Validate string before use",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = null;\n        boolean isValid = str != null && !str.isEmpty();\n        System.out.println(isValid);\n    }\n}',
    hint: "Check null first"
  },
  {
    id: "string_30",
    topicId: "java_string",
    question: "Write code to format string with variables.",
    mathSolution: "Insert variables into string template",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String name = "John";\n        int age = 25;\n        String result = String.format("Name: %s, Age: %d", name, age);\n        System.out.println(result);\n    }\n}',
    hint: "Use String.format()"
  },
  {
    id: "string_31",
    topicId: "java_string",
    question: "How do you remove all spaces from string?",
    mathSolution: "Remove every space character",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World Java";\n        String noSpaces = str.replace(" ", "");\n        System.out.println(noSpaces);\n    }\n}',
    hint: "Replace space with empty"
  },
  {
    id: "string_32",
    topicId: "java_string",
    question: "Write code to compare strings lexicographically.",
    mathSolution: "Compare alphabetically",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "apple";\n        String s2 = "banana";\n        int result = s1.compareTo(s2);\n        System.out.println(result);\n    }\n}',
    hint: "compareTo() returns negative, zero, positive"
  },
  {
    id: "string_33",
    topicId: "java_string",
    question: "How do you convert double to string?",
    mathSolution: "Convert decimal to string",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        double pi = 3.14;\n        String str = Double.toString(pi);\n        System.out.println(str);\n    }\n}',
    hint: "Use Double.toString()"
  },
  {
    id: "string_34",
    topicId: "java_string",
    question: "Write code to check if string matches regex.",
    mathSolution: "Validate against pattern",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "12345";\n        boolean isDigits = str.matches("\\\\d+");\n        System.out.println(isDigits);\n    }\n}',
    hint: "Use matches() with regex"
  },
  {
    id: "string_35",
    topicId: "java_string",
    question: "How do you create string using new keyword?",
    mathSolution: "Create string object",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = new String("Hello");\n        System.out.println(str);\n    }\n}',
    hint: "String objects can be created with new"
  },
  {
    id: "string_36",
    topicId: "java_string",
    question: "Write code to get Unicode code point.",
    mathSolution: "Get ASCII/Unicode value",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Java";\n        int codePoint = str.codePointAt(0);\n        System.out.println(codePoint);\n    }\n}',
    hint: "Use codePointAt()"
  },
  {
    id: "string_37",
    topicId: "java_string",
    question: "How do you check string reference equality?",
    mathSolution: "Check if same object",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String s1 = "Hello";\n        String s2 = "Hello";\n        boolean sameRef = (s1 == s2);\n        System.out.println(sameRef);\n    }\n}',
    hint: "== compares references"
  },
  {
    id: "string_38",
    topicId: "java_string",
    question: "Write code to create multiline string.",
    mathSolution: "String with line breaks",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String multiline = "Line 1\\nLine 2\\nLine 3";\n        System.out.println(multiline);\n    }\n}',
    hint: "Use \\n for line breaks"
  },
  {
    id: "string_39",
    topicId: "java_string",
    question: "How do you indent a string?",
    mathSolution: "Add spaces at beginning",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        String indented = "    " + str;\n        System.out.println(indented);\n    }\n}',
    hint: "Simple concatenation"
  },
  {
    id: "string_40",
    topicId: "java_string",
    question: "Write code to convert string to boolean.",
    mathSolution: "Parse boolean value",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "true";\n        boolean bool = Boolean.parseBoolean(str);\n        System.out.println(bool);\n    }\n}',
    hint: "Use Boolean.parseBoolean()"
  },
  {
    id: "string_41",
    topicId: "java_string",
    question: "How do you reverse a string?",
    mathSolution: "Reverse character order",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        String reversed = new StringBuilder(str).reverse().toString();\n        System.out.println(reversed);\n    }\n}',
    hint: "Use StringBuilder.reverse()"
  },
  {
    id: "string_42",
    topicId: "java_string",
    question: "Write code to count character occurrences.",
    mathSolution: "Count frequency of specific char",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Java Programming";\n        char target = \'a\';\n        long count = str.chars().filter(ch -> ch == target).count();\n        System.out.println(count);\n    }\n}',
    hint: "Use stream or loop"
  },
  {
    id: "string_43",
    topicId: "java_string",
    question: "How do you check palindrome string?",
    mathSolution: "String equals its reverse",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "madam";\n        String reversed = new StringBuilder(str).reverse().toString();\n        boolean isPalindrome = str.equals(reversed);\n        System.out.println(isPalindrome);\n    }\n}',
    hint: "Compare with reverse"
  },
  {
    id: "string_44",
    topicId: "java_string",
    question: "Write code to extract all digits from string.",
    mathSolution: "Keep only numbers",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "abc123def456";\n        String digits = str.replaceAll("[^0-9]", "");\n        System.out.println(digits);\n    }\n}',
    hint: "Use replaceAll with regex"
  },
  {
    id: "string_45",
    topicId: "java_string",
    question: "How do you capitalize first letter?",
    mathSolution: "Make first character uppercase",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "java";\n        String capitalized = str.substring(0, 1).toUpperCase() + str.substring(1);\n        System.out.println(capitalized);\n    }\n}',
    hint: "Combine uppercase first + rest"
  },
  {
    id: "string_46",
    topicId: "java_string",
    question: "Write code to check for uppercase letters.",
    mathSolution: "Detect capital letters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean hasUpper = !str.equals(str.toLowerCase());\n        System.out.println(hasUpper);\n    }\n}',
    hint: "Compare with lowercase"
  },
  {
    id: "string_47",
    topicId: "java_string",
    question: "How do you remove duplicate characters?",
    mathSolution: "Keep unique characters only",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "aabbcc";\n        StringBuilder sb = new StringBuilder();\n        for (char c : str.toCharArray()) {\n            if (sb.indexOf(String.valueOf(c)) == -1) {\n                sb.append(c);\n            }\n        }\n        System.out.println(sb.toString());\n    }\n}',
    hint: "Use loop and check existing characters"
  },
  {
    id: "string_48",
    topicId: "java_string",
    question: "Write code to swap two strings without third variable.",
    mathSolution: "Use concatenation",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String a = "Hello";\n        String b = "World";\n        a = a + b;\n        b = a.substring(0, a.length() - b.length());\n        a = a.substring(b.length());\n        System.out.println("a = " + a + ", b = " + b);\n    }\n}',
    hint: "Use substring after concatenation"
  },
  {
    id: "string_49",
    topicId: "java_string",
    question: "How do you find longest word in sentence?",
    mathSolution: "Find word with max length",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String sentence = "Java programming is fun";\n        String[] words = sentence.split(" ");\n        String longest = "";\n        for (String w : words) {\n            if (w.length() > longest.length()) longest = w;\n        }\n        System.out.println(longest);\n    }\n}',
    hint: "Split and compare lengths"
  },
  {
    id: "string_50",
    topicId: "java_string",
    question: "Write code to count vowels in a string.",
    mathSolution: "Count a,e,i,o,u characters",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello World";\n        int count = 0;\n        for (char c : str.toLowerCase().toCharArray()) {\n            if ("aeiou".indexOf(c) != -1) count++;\n        }\n        System.out.println(count);\n    }\n}',
    hint: "Check for vowels (case insensitive)"
  },
  //oops
   {
    id: "java_opp_1",
    topicId: "java_oop",
    question: "What is a class in Java?",
    mathSolution: "Class is a blueprint for creating objects",
    codeSolution: 'public class Main {\n    static class Car {\n        String color;\n        void drive() {\n            System.out.println("Driving...");\n        }\n    }\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.color = "Red";\n        System.out.println("Car color: " + myCar.color);\n        myCar.drive();\n    }\n}',
    hint: "Class defines properties and behaviors"
  },
  {
    id: "java_opp_2",
    topicId: "java_oop",
    question: "What is an object in Java?",
    mathSolution: "Object is an instance of a class",
    codeSolution: 'public class Main {\n    static class Car {\n        String color;\n        void drive() { System.out.println("Driving..."); }\n    }\n    public static void main(String[] args) {\n        Car myCar = new Car();\n        myCar.color = "Red";\n        myCar.drive();\n        System.out.println("Object created successfully");\n    }\n}',
    hint: "Use new keyword to create object"
  },
  {
    id: "java_opp_3",
    topicId: "java_oop",
    question: "How do you create a constructor?",
    mathSolution: "Constructor initializes object state",
    codeSolution: 'public class Main {\n    static class Student {\n        String name;\n        Student(String n) {\n            name = n;\n            System.out.println("Constructor called. Name: " + name);\n        }\n    }\n    public static void main(String[] args) {\n        Student s = new Student("Alice");\n    }\n}',
    hint: "Constructor has same name as class"
  },
  {
    id: "java_opp_4",
    topicId: "java_oop",
    question: "What is method overloading?",
    mathSolution: "Multiple methods with same name but different parameters",
    codeSolution: 'public class Main {\n    static class Calculator {\n        int add(int a, int b) { return a + b; }\n        int add(int a, int b, int c) { return a + b + c; }\n    }\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        System.out.println("add(2,3) = " + calc.add(2,3));\n        System.out.println("add(2,3,4) = " + calc.add(2,3,4));\n    }\n}',
    hint: "Same method name, different parameters"
  },
  {
    id: "java_opp_5",
    topicId: "java_oop",
    question: "What is inheritance in Java?",
    mathSolution: "Child class acquires properties of parent class",
    codeSolution: 'public class Main {\n    static class Animal {\n        void eat() { System.out.println("Eating..."); }\n    }\n    static class Dog extends Animal {\n        void bark() { System.out.println("Barking..."); }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();\n        d.bark();\n    }\n}',
    hint: "Use extends keyword"
  },
  {
    id: "java_opp_6",
    topicId: "java_oop",
    question: "How do you use super keyword?",
    mathSolution: "Super refers to parent class",
    codeSolution: 'public class Main {\n    static class Parent {\n        Parent() { System.out.println("Parent constructor"); }\n    }\n    static class Child extends Parent {\n        Child() {\n            super();\n            System.out.println("Child constructor");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child();\n    }\n}',
    hint: "super() calls parent constructor"
  },
  {
    id: "java_opp_7",
    topicId: "java_oop",
    question: "What is method overriding?",
    mathSolution: "Child class redefines parent class method",
    codeSolution: 'public class Main {\n    static class Animal {\n        void sound() { System.out.println("Animal sound"); }\n    }\n    static class Cat extends Animal {\n        @Override\n        void sound() { System.out.println("Meow"); }\n    }\n    public static void main(String[] args) {\n        Animal a = new Cat();\n        a.sound();\n    }\n}',
    hint: "Same method signature in child class"
  },
  {
    id: "java_opp_8",
    topicId: "java_oop",
    question: "What is encapsulation?",
    mathSolution: "Hiding data and providing public methods",
    codeSolution: 'public class Main {\n    static class BankAccount {\n        private double balance;\n        public void deposit(double amount) { balance += amount; }\n        public double getBalance() { return balance; }\n    }\n    public static void main(String[] args) {\n        BankAccount acc = new BankAccount();\n        acc.deposit(1000);\n        System.out.println("Balance: " + acc.getBalance());\n    }\n}',
    hint: "Use private variables, public methods"
  },
  {
    id: "java_opp_9",
    topicId: "java_oop",
    question: "How do you create a getter and setter?",
    mathSolution: "Methods to access and modify private fields",
    codeSolution: 'public class Main {\n    static class Person {\n        private String name;\n        public String getName() { return name; }\n        public void setName(String n) { name = n; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person();\n        p.setName("John");\n        System.out.println("Name: " + p.getName());\n    }\n}',
    hint: "Getter returns, setter sets value"
  },
  {
    id: "java_opp_10",
    topicId: "java_oop",
    question: "What is abstraction in Java?",
    mathSolution: "Hiding implementation details",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        abstract void draw();\n    }\n    static class Circle extends Shape {\n        void draw() { System.out.println("Drawing circle"); }\n    }\n    public static void main(String[] args) {\n        Shape s = new Circle();\n        s.draw();\n    }\n}',
    hint: "Use abstract classes or interfaces"
  },
  {
    id: "java_opp_11",
    topicId: "java_oop",
    question: "What is an interface?",
    mathSolution: "Contract that classes must implement",
    codeSolution: 'public class Main {\n    interface Drawable {\n        void draw();\n    }\n    static class Rectangle implements Drawable {\n        public void draw() { System.out.println("Drawing rectangle"); }\n    }\n    public static void main(String[] args) {\n        Drawable d = new Rectangle();\n        d.draw();\n    }\n}',
    hint: "Use implements keyword"
  },
  {
    id: "java_opp_12",
    topicId: "java_oop",
    question: "What is polymorphism?",
    mathSolution: "Same method behaves differently for different objects",
    codeSolution: 'public class Main {\n    static class Animal { void sound() { System.out.println("Animal sound"); } }\n    static class Dog extends Animal { void sound() { System.out.println("Bark"); } }\n    static class Cat extends Animal { void sound() { System.out.println("Meow"); } }\n    public static void main(String[] args) {\n        Animal a1 = new Dog();\n        Animal a2 = new Cat();\n        a1.sound();\n        a2.sound();\n    }\n}',
    hint: "Many forms - compile time and runtime"
  },
  {
    id: "java_opp_13",
    topicId: "java_oop",
    question: "What is this keyword?",
    mathSolution: "Refers to current object instance",
    codeSolution: 'public class Main {\n    static class Employee {\n        String name;\n        Employee(String name) { this.name = name; }\n        void print() { System.out.println("Name: " + this.name); }\n    }\n    public static void main(String[] args) {\n        Employee e = new Employee("Alice");\n        e.print();\n    }\n}',
    hint: "Use this to refer to instance variables"
  },
  {
    id: "java_opp_14",
    topicId: "java_oop",
    question: "What is static keyword?",
    mathSolution: "Belongs to class rather than object",
    codeSolution: 'public class Main {\n    static class Counter {\n        static int count = 0;\n        Counter() { count++; }\n    }\n    public static void main(String[] args) {\n        new Counter(); new Counter(); new Counter();\n        System.out.println("Total objects: " + Counter.count);\n    }\n}',
    hint: "Static members shared across objects"
  },
  {
    id: "java_opp_15",
    topicId: "java_oop",
    question: "How do you create a static method?",
    mathSolution: "Method that can be called without object",
    codeSolution: 'public class Main {\n    static class MathUtils {\n        static int square(int x) { return x * x; }\n    }\n    public static void main(String[] args) {\n        int result = MathUtils.square(5);\n        System.out.println("Square of 5: " + result);\n    }\n}',
    hint: "Static methods belong to class"
  },
  {
  id: "java_opp_16",
  topicId: "java_oop",
  question: "What is final keyword?",
  mathSolution: "Makes variable constant, method non-overridable, class non-extendable",
  codeSolution: 'public class Main {\n    static final int MAX = 100;\n    static void display() {\n        System.out.println("Constant MAX: " + MAX);\n    }\n    public static void main(String[] args) {\n        display();\n    }\n}',
  hint: "Final prevents modification/inheritance"
},
  {
    id: "java_opp_17",
    topicId: "java_oop",
    question: "What is multiple inheritance in Java?",
    mathSolution: "Java doesn't support multiple inheritance with classes",
    codeSolution: 'public class Main {\n    interface A { void methodA(); }\n    interface B { void methodB(); }\n    static class C implements A, B {\n        public void methodA() { System.out.println("A"); }\n        public void methodB() { System.out.println("B"); }\n    }\n    public static void main(String[] args) {\n        C obj = new C();\n        obj.methodA();\n        obj.methodB();\n        System.out.println("Multiple inheritance achieved via interfaces");\n    }\n}',
    hint: "Use interfaces for multiple inheritance"
  },
  {
    id: "java_opp_18",
    topicId: "java_oop",
    question: "What is package in Java?",
    mathSolution: "Grouping related classes and interfaces",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Packages organize classes. Example: package com.example;");\n    }\n}',
    hint: "Package organizes classes"
  },
  {
    id: "java_opp_19",
    topicId: "java_oop",
    question: "How do you import a package?",
    mathSolution: "Use import statement",
    codeSolution: 'import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>();\n        list.add("Imported");\n        System.out.println(list.get(0));\n    }\n}',
    hint: "Import before class declaration"
  },
  {
  id: "java_opp_20",
  topicId: "java_oop",
  question: "What is access modifier private?",
  mathSolution: "Accessible only within same class",
  codeSolution: 'public class Main {\n    private static int data = 100;\n    private static void show() {\n        System.out.println("Private data: " + data);\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}',
  hint: "Most restrictive access"
},
  {
  id: "java_opp_21",
  topicId: "java_oop",
  question: "What is access modifier public?",
  mathSolution: "Accessible from anywhere",
  codeSolution: 'public class Main {\n    public static int data = 200;\n    public static void show() {\n        System.out.println("Public data: " + data);\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}',
  hint: "Least restrictive access"
},
  {
    id: "java_opp_22",
    topicId: "java_oop",
    question: "What is access modifier protected?",
    mathSolution: "Accessible within package and subclasses",
    codeSolution: 'public class Main {\n    protected static int data = 300;\n    protected static void show() { System.out.println("Protected data: " + data); }\n    public static void main(String[] args) {\n        show();\n    }\n}',
    hint: "Protected = package + subclasses"
  },
  {
  id: "java_opp_23",
  topicId: "java_oop",
  question: "What is default access modifier?",
  mathSolution: "Accessible only within same package",
  codeSolution: 'public class Main {\n    static int data = 400;\n    static void show() {\n        System.out.println("Default data: " + data);\n    }\n    public static void main(String[] args) {\n        show();\n    }\n}',
  hint: "No keyword means package-private"
},
  {
    id: "java_opp_24",
    topicId: "java_oop",
    question: "What is constructor chaining?",
    mathSolution: "Calling one constructor from another",
    codeSolution: 'public class Main {\n    static class Example {\n        Example() { this(10); System.out.println("No-arg"); }\n        Example(int x) { System.out.println("Parameterized: " + x); }\n    }\n    public static void main(String[] args) {\n        Example e = new Example();\n    }\n}',
    hint: "Use this() to call another constructor"
  },
  {
    id: "java_opp_25",
    topicId: "java_oop",
    question: "What is default constructor?",
    mathSolution: "Constructor provided by Java if none defined",
    codeSolution: 'public class Main {\n    static class Example {}\n    public static void main(String[] args) {\n        Example e = new Example();\n        System.out.println("Default constructor works");\n    }\n}',
    hint: "No-argument constructor by default"
  },
  {
    id: "java_opp_26",
    topicId: "java_oop",
    question: "What is parameterized constructor?",
    mathSolution: "Constructor that accepts parameters",
    codeSolution: 'public class Main {\n    static class Student {\n        String name;\n        Student(String n) { name = n; }\n    }\n    public static void main(String[] args) {\n        Student s = new Student("Bob");\n        System.out.println("Student name: " + s.name);\n    }\n}',
    hint: "Constructor with parameters"
  },
  {
    id: "java_opp_27",
    topicId: "java_oop",
    question: "What is copy constructor?",
    mathSolution: "Constructor that creates object from another object",
    codeSolution: 'public class Main {\n    static class Point {\n        int x, y;\n        Point(int x, int y) { this.x = x; this.y = y; }\n        Point(Point p) { this.x = p.x; this.y = p.y; }\n    }\n    public static void main(String[] args) {\n        Point p1 = new Point(5, 10);\n        Point p2 = new Point(p1);\n        System.out.println("p2: (" + p2.x + "," + p2.y + ")");\n    }\n}',
    hint: "Constructor takes object of same class"
  },
  {
    id: "java_opp_28",
    topicId: "java_oop",
    question: "What is garbage collection?",
    mathSolution: "Automatic memory management",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        for(int i=0; i<1000; i++) {\n            new Object();\n        }\n        System.out.println("Garbage collection is automatic in Java");\n    }\n}',
    hint: "System.gc() suggests but not guarantees"
  },
  {
  id: "java_opp_29",
  topicId: "java_oop",
  question: "What is finalize method?",
  mathSolution: "Called before garbage collection (deprecated)",
  codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("finalize() is deprecated. Use try-with-resources or Cleaner instead.");\n        System.out.println("Example: try (FileReader fr = new FileReader(\\"file.txt\\")) { ... }");\n    }\n}',
  hint: "Deprecated in newer Java versions – avoid using"
},
  {
    id: "java_opp_30",
    topicId: "java_oop",
    question: "What is instanceof operator?",
    mathSolution: "Checks if object is instance of a class",
    codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        String str = "Hello";\n        boolean result = str instanceof String;\n        System.out.println("str instanceof String: " + result);\n    }\n}',
    hint: "Use for type checking"
  },
  {
    id: "java_opp_31",
    topicId: "java_oop",
    question: "What is object cloning?",
    mathSolution: "Creating copy of an object",
    codeSolution: 'public class Main {\n    static class Example implements Cloneable {\n        int val;\n        Example(int v) { val = v; }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            return super.clone();\n        }\n    }\n    public static void main(String[] args) throws CloneNotSupportedException {\n        Example e1 = new Example(42);\n        Example e2 = (Example) e1.clone();\n        System.out.println("Cloned value: " + e2.val);\n    }\n}',
    hint: "Implement Cloneable interface"
  },
  {
    id: "java_opp_32",
    topicId: "java_oop",
    question: "What is shallow copy?",
    mathSolution: "Copies object but not nested objects",
    codeSolution: 'public class Main {\n    static class Address { String city; Address(String c) { city = c; } }\n    static class Person implements Cloneable {\n        String name; Address addr;\n        Person(String n, String c) { name = n; addr = new Address(c); }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            return super.clone();\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        Person p1 = new Person("John", "NYC");\n        Person p2 = (Person) p1.clone();\n        System.out.println(p2.addr.city);\n        System.out.println("Shallow copy: both share same Address");\n    }\n}',
    hint: "Shallow copy shares nested objects"
  },
  {
    id: "java_opp_33",
    topicId: "java_oop",
    question: "What is deep copy?",
    mathSolution: "Copies object and all nested objects",
    codeSolution: 'public class Main {\n    static class Address implements Cloneable {\n        String city;\n        Address(String c) { city = c; }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            return new Address(this.city);\n        }\n    }\n    static class Person implements Cloneable {\n        String name; Address addr;\n        Person(String n, String c) { name = n; addr = new Address(c); }\n        @Override\n        protected Object clone() throws CloneNotSupportedException {\n            Person p = (Person) super.clone();\n            p.addr = (Address) addr.clone();\n            return p;\n        }\n    }\n    public static void main(String[] args) throws Exception {\n        Person p1 = new Person("John", "NYC");\n        Person p2 = (Person) p1.clone();\n        System.out.println("Deep copy: separate Address objects");\n    }\n}',
    hint: "Deep copy clones all references"
  },
  {
    id: "java_opp_34",
    topicId: "java_oop",
    question: "What is abstract class?",
    mathSolution: "Class that cannot be instantiated",
    codeSolution: 'public class Main {\n    static abstract class Animal {\n        abstract void sound();\n        void sleep() { System.out.println("Sleeping"); }\n    }\n    static class Dog extends Animal {\n        void sound() { System.out.println("Bark"); }\n    }\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.sound();\n        a.sleep();\n    }\n}',
    hint: "Can have both abstract and concrete methods"
  },
  {
    id: "java_opp_35",
    topicId: "java_oop",
    question: "What is abstract method?",
    mathSolution: "Method without body, must be overridden",
    codeSolution: 'public class Main {\n    static abstract class Shape {\n        abstract double area();\n    }\n    static class Circle extends Shape {\n        double radius;\n        Circle(double r) { radius = r; }\n        double area() { return Math.PI * radius * radius; }\n    }\n    public static void main(String[] args) {\n        Shape s = new Circle(5);\n        System.out.println("Area: " + s.area());\n    }\n}',
    hint: "Abstract methods end with semicolon"
  },
  {
    id: "java_opp_36",
    topicId: "java_oop",
    question: "Interface vs Abstract class difference?",
    mathSolution: "Interface has only abstract methods (before Java 8)",
    codeSolution: 'public class Main {\n    interface Drawable {\n        void draw();\n        default void show() { System.out.println("Default method"); }\n    }\n    static class Circle implements Drawable {\n        public void draw() { System.out.println("Draw circle"); }\n    }\n    public static void main(String[] args) {\n        Drawable d = new Circle();\n        d.draw();\n        d.show();\n    }\n}',
    hint: "Interface supports multiple inheritance"
  },
  {
    id: "java_opp_37",
    topicId: "java_oop",
    question: "What is default method in interface?",
    mathSolution: "Method with implementation in interface (Java 8+)",
    codeSolution: 'public class Main {\n    interface Printer {\n        default void print() {\n            System.out.println("Default print");\n        }\n    }\n    static class MyPrinter implements Printer {}\n    public static void main(String[] args) {\n        Printer p = new MyPrinter();\n        p.print();\n    }\n}',
    hint: "Use default keyword"
  },
  {
    id: "java_opp_38",
    topicId: "java_oop",
    question: "What is static method in interface?",
    mathSolution: "Static method in interface (Java 8+)",
    codeSolution: 'public class Main {\n    interface MathOperation {\n        static int add(int a, int b) { return a + b; }\n    }\n    public static void main(String[] args) {\n        int sum = MathOperation.add(5, 3);\n        System.out.println("Sum: " + sum);\n    }\n}',
    hint: "Call using interface name"
  },
  {
    id: "java_opp_39",
    topicId: "java_oop",
    question: "What is private method in interface?",
    mathSolution: "Helper method in interface (Java 9+)",
    codeSolution: 'public class Main {\n    interface Logger {\n        private void log(String msg) { System.out.println("LOG: " + msg); }\n        default void info(String msg) { log(msg); }\n    }\n    static class App implements Logger {}\n    public static void main(String[] args) {\n        App a = new App();\n        a.info("Hello from private method");\n    }\n}',
    hint: "For code reuse in interface"
  },
  {
    id: "java_opp_40",
    topicId: "java_oop",
    question: "What is functional interface?",
    mathSolution: "Interface with single abstract method",
    codeSolution: '@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\npublic class Main {\n    public static void main(String[] args) {\n        Calculator add = (a, b) -> a + b;\n        System.out.println("Sum: " + add.calculate(5, 3));\n    }\n}',
    hint: "Can be used with lambda expressions"
  },
  {
    id: "java_opp_41",
    topicId: "java_oop",
    question: "What is lambda expression?",
    mathSolution: "Short way to implement functional interface",
    codeSolution: '@FunctionalInterface\ninterface MathOp { int operate(int a, int b); }\npublic class Main {\n    public static void main(String[] args) {\n        MathOp add = (x, y) -> x + y;\n        MathOp multiply = (x, y) -> x * y;\n        System.out.println("Add: " + add.operate(5,3));\n        System.out.println("Multiply: " + multiply.operate(5,3));\n    }\n}',
    hint: "-> separates parameters and body"
  },
  {
    id: "java_opp_42",
    topicId: "java_oop",
    question: "What is method reference?",
    mathSolution: "Shorter lambda syntax",
    codeSolution: 'import java.util.Arrays;\nimport java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        names.forEach(System.out::println);\n    }\n}',
    hint: "Use :: operator"
  },
  {
    id: "java_opp_43",
    topicId: "java_oop",
    question: "What is enum in Java?",
    mathSolution: "Fixed set of constants",
    codeSolution: 'enum Day { MONDAY, TUESDAY, WEDNESDAY }\npublic class Main {\n    public static void main(String[] args) {\n        Day today = Day.MONDAY;\n        System.out.println("Today is " + today);\n    }\n}',
    hint: "Enum can have fields and methods"
  },
  {
  id: "java_opp_44",
  topicId: "java_oop",
  question: "What is record in Java?",
  mathSolution: "Immutable data carrier (Java 14+)",
  codeSolution: 'public class Main {\n    static class Point {\n        private final int x, y;\n        Point(int x, int y) { this.x = x; this.y = y; }\n        int x() { return x; }\n        int y() { return y; }\n        @Override\n        public String toString() { return "Point[x=" + x + ", y=" + y + "]"; }\n    }\n    public static void main(String[] args) {\n        Point p = new Point(10, 20);\n        System.out.println(p);\n    }\n}',
  hint: "Auto-generates constructor, getters, equals, hashCode (simulated here)"
},
  {
  id: "java_opp_45",
  topicId: "java_oop",
  question: "What is sealed class?",
  mathSolution: "Restricts which classes can extend (Java 17+)",
  codeSolution: 'public class Main {\n    static class Animal {}\n    static class Dog extends Animal {}\n    static class Cat extends Animal {}\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.println("Sealed classes are a preview feature. Here we use normal inheritance.");\n        System.out.println("In sealed class: permits Dog, Cat – others cannot extend.");\n    }\n}',
  hint: "Use sealed, permits keywords (preview in Java 17)"
},
  {
    id: "java_opp_46",
    topicId: "java_oop",
    question: "What is nested class?",
    mathSolution: "Class defined inside another class",
    codeSolution: 'public class Main {\n    static class Outer {\n        class Inner { void show() { System.out.println("Inner class"); } }\n        static class StaticNested { static void display() { System.out.println("Static nested"); } }\n    }\n    public static void main(String[] args) {\n        Outer.Inner inner = new Outer().new Inner();\n        inner.show();\n        Outer.StaticNested.display();\n    }\n}',
    hint: "Inner class has access to outer class members"
  },
  {
    id: "java_opp_47",
    topicId: "java_oop",
    question: "What is anonymous class?",
    mathSolution: "Class without name for one-time use",
    codeSolution: 'public class Main {\n    interface Greeting { void greet(); }\n    public static void main(String[] args) {\n        Greeting g = new Greeting() {\n            public void greet() { System.out.println("Hello from anonymous"); }\n        };\n        g.greet();\n    }\n}',
    hint: "Use new keyword with interface/class"
  },
  {
  id: "java_opp_48",
  topicId: "java_oop",
  question: "What is Object class?",
  mathSolution: "Parent of all classes in Java",
  codeSolution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Object class is the root parent of all classes in Java.");\n        System.out.println("Every class implicitly extends java.lang.Object.");\n    }\n}',
  hint: "java.lang.Object is root class"
},
  {
    id: "java_opp_49",
    topicId: "java_oop",
    question: "How to override toString() method?",
    mathSolution: "Provide string representation of object",
    codeSolution: 'public class Main {\n    static class Person {\n        String name;\n        Person(String n) { name = n; }\n        @Override\n        public String toString() { return "Person: " + name; }\n    }\n    public static void main(String[] args) {\n        Person p = new Person("Alice");\n        System.out.println(p);\n    }\n}',
    hint: "Called when object is printed"
  },
  {
    id: "java_opp_50",
    topicId: "java_oop",
    question: "How to override equals() method?",
    mathSolution: "Define object equality",
    codeSolution: 'public class Main {\n    static class Person {\n        String name; int age;\n        Person(String n, int a) { name = n; age = a; }\n        @Override\n        public boolean equals(Object obj) {\n            if (this == obj) return true;\n            if (obj == null || getClass() != obj.getClass()) return false;\n            Person p = (Person) obj;\n            return age == p.age && name.equals(p.name);\n        }\n    }\n    public static void main(String[] args) {\n        Person p1 = new Person("John", 25);\n        Person p2 = new Person("John", 25);\n        System.out.println("p1 equals p2: " + p1.equals(p2));\n    }\n}',
    hint: "Also override hashCode()"
  },
  //constructor
   {
    id: "constructor_1",
    topicId: "constructor",
    question: "Create a simple default constructor.",
    mathSolution: "Constructor has same name as class, no return type",
    codeSolution: 'public class Main {\n    static class Student {\n        String name;\n        int age;\n        Student() {\n            name = "Unknown";\n            age = 0;\n            System.out.println("Default constructor called");\n        }\n        void display() {\n            System.out.println("Name: " + name + ", Age: " + age);\n        }\n    }\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.display();\n    }\n}',
    hint: "Constructor is called when object is created with new",
  },
  {
    id: "constructor_2",
    topicId: "constructor",
    question: "Create parameterized constructor.",
    mathSolution: "Constructor with parameters to initialize object",
    codeSolution: 'public class Main {\n    static class Rectangle {\n        double length, width;\n        Rectangle(double l, double w) {\n            length = l;\n            width = w;\n            System.out.println("Parameterized constructor called");\n        }\n        double area() {\n            return length * width;\n        }\n    }\n    public static void main(String[] args) {\n        Rectangle r1 = new Rectangle(5.5, 3.2);\n        System.out.println("Area: " + r1.area());\n    }\n}',
    hint: "Parameters passed during object creation",
  },
  {
    id: "constructor_3",
    topicId: "constructor",
    question: "Multiple constructors - constructor overloading.",
    mathSolution: "Class can have multiple constructors with different parameters",
    codeSolution: 'public class Main {\n    static class Box {\n        double length, width, height;\n        Box() { length = width = height = 1; System.out.println("Default Box"); }\n        Box(double side) { length = width = height = side; System.out.println("Cube Box"); }\n        Box(double l, double w, double h) { length = l; width = w; height = h; System.out.println("Parameterized Box"); }\n        double volume() { return length * width * height; }\n    }\n    public static void main(String[] args) {\n        Box b1 = new Box();\n        Box b2 = new Box(5);\n        Box b3 = new Box(2, 3, 4);\n        System.out.println("Volume b1: " + b1.volume());\n        System.out.println("Volume b2: " + b2.volume());\n        System.out.println("Volume b3: " + b3.volume());\n    }\n}',
    hint: "Overloaded constructors provide flexibility",
  },
  {
    id: "constructor_4",
    topicId: "constructor",
    question: "Constructor with default values if not provided.",
    mathSolution: "Use constructor chaining for defaults",
    codeSolution: 'public class Main {\n    static class Employee {\n        int id; String name; double salary;\n        Employee() { this(0, "Unknown", 0.0); }\n        Employee(int id) { this(id, "Unknown", 0.0); }\n        Employee(int id, String name) { this(id, name, 0.0); }\n        Employee(int id, String name, double salary) {\n            this.id = id; this.name = name; this.salary = salary;\n        }\n        void display() { System.out.println(id + ", " + name + ", $" + salary); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee();\n        Employee e2 = new Employee(101);\n        Employee e3 = new Employee(102, "Alice");\n        Employee e4 = new Employee(103, "Bob", 50000);\n        e1.display(); e2.display(); e3.display(); e4.display();\n    }\n}',
    hint: "this() calls another constructor in same class",
  },

  // CONSTRUCTOR CHAINING (4)
  {
    id: "constructor_5",
    topicId: "constructor",
    question: "Constructor chaining using this() keyword.",
    mathSolution: "One constructor calls another using this()",
    codeSolution: 'public class Main {\n    static class Person {\n        String name; int age; String city;\n        Person() { this("Unknown", 0, "Unknown"); System.out.println("No-arg constructor"); }\n        Person(String name) { this(name, 0, "Unknown"); System.out.println("One-arg constructor"); }\n        Person(String name, int age) { this(name, age, "Unknown"); System.out.println("Two-arg constructor"); }\n        Person(String name, int age, String city) {\n            this.name = name; this.age = age; this.city = city;\n            System.out.println("Three-arg constructor");\n        }\n        void display() { System.out.println(name + ", " + age + ", " + city); }\n    }\n    public static void main(String[] args) {\n        Person p1 = new Person();\n        System.out.println("---");\n        Person p2 = new Person("Alice");\n        System.out.println("---");\n        Person p3 = new Person("Bob", 25);\n        System.out.println("---");\n        Person p4 = new Person("Charlie", 30, "NYC");\n    }\n}',
    hint: "this() must be first statement in constructor",
  },
  {
    id: "constructor_6",
    topicId: "constructor",
    question: "Constructor chaining with inheritance using super().",
    mathSolution: "Child constructor calls parent constructor",
    codeSolution: 'public class Main {\n    static class Animal {\n        String type;\n        Animal() { this("Unknown animal"); System.out.println("Animal default constructor"); }\n        Animal(String type) { this.type = type; System.out.println("Animal parameterized constructor"); }\n    }\n    static class Dog extends Animal {\n        String breed;\n        Dog() { this("Unknown breed"); System.out.println("Dog default constructor"); }\n        Dog(String breed) {\n            super("Dog");\n            this.breed = breed;\n            System.out.println("Dog parameterized constructor");\n        }\n        void display() { System.out.println("Type: " + type + ", Breed: " + breed); }\n    }\n    public static void main(String[] args) {\n        Dog d = new Dog("Labrador");\n        d.display();\n    }\n}',
    hint: "super() calls parent constructor, must be first",
  },
  {
    id: "constructor_7",
    topicId: "constructor",
    question: "Implicit super() call if parent has default constructor.",
    mathSolution: "If no super(), default parent constructor called",
    codeSolution: 'public class Main {\n    static class Parent {\n        Parent() { System.out.println("Parent constructor"); }\n    }\n    static class Child extends Parent {\n        Child() { System.out.println("Child constructor"); }\n    }\n    static class GrandChild extends Child {\n        GrandChild() { System.out.println("GrandChild constructor"); }\n    }\n    public static void main(String[] args) {\n        GrandChild gc = new GrandChild();\n    }\n}',
    hint: "If no super(), default parent constructor called",
  },
  {
    id: "constructor_8",
    topicId: "constructor",
    question: "Parent must have default constructor if child doesn't call super explicitly.",
    mathSolution: "If parent lacks default constructor, child must call super explicitly",
    codeSolution: 'public class Main {\n    static class Parent {\n        String name;\n        Parent(String name) { this.name = name; System.out.println("Parent constructor: " + name); }\n    }\n    static class Child extends Parent {\n        int age;\n        Child(String name, int age) {\n            super(name);\n            this.age = age;\n            System.out.println("Child constructor");\n        }\n    }\n    public static void main(String[] args) {\n        Child c = new Child("Alice", 10);\n    }\n}',
    hint: "If parent has no default constructor, child must call super explicitly",
  },

  // COPY CONSTRUCTORS (3)
  {
    id: "constructor_9",
    topicId: "constructor",
    question: "Create a copy constructor to duplicate objects.",
    mathSolution: "Constructor that takes same type object as parameter",
    codeSolution: 'public class Main {\n    static class Point {\n        int x, y;\n        Point(int x, int y) { this.x = x; this.y = y; }\n        Point(Point p) { this.x = p.x; this.y = p.y; System.out.println("Copy constructor called"); }\n        void display() { System.out.println("(" + x + ", " + y + ")"); }\n    }\n    public static void main(String[] args) {\n        Point p1 = new Point(5, 10);\n        Point p2 = new Point(p1);\n        Point p3 = p1;\n        p1.x = 100;\n        System.out.print("p1: "); p1.display();\n        System.out.print("p2: "); p2.display();\n        System.out.print("p3: "); p3.display();\n    }\n}',
    hint: "Copy constructor creates new object with same values",
  },
  {
    id: "constructor_10",
    topicId: "constructor",
    question: "Deep copy vs shallow copy in copy constructor.",
    mathSolution: "Copy constructor should handle reference types properly",
    codeSolution: 'public class Main {\n    static class Address {\n        String city;\n        Address(String c) { city = c; }\n        Address(Address a) { city = a.city; }\n    }\n    static class Person {\n        String name;\n        Address address;\n        Person(String n, Address a) { name = n; address = a; }\n        Person(Person p) { this.name = p.name; this.address = p.address; }\n        Person deepCopy(Person p) { return new Person(p.name, new Address(p.address)); }\n        void display() { System.out.println(name + " lives in " + address.city); }\n    }\n    public static void main(String[] args) {\n        Address a = new Address("NYC");\n        Person p1 = new Person("Alice", a);\n        Person p2 = new Person(p1);\n        Person p3 = p1.deepCopy(p1);\n        p1.address.city = "Boston";\n        System.out.print("p1: "); p1.display();\n        System.out.print("p2: "); p2.display();\n        System.out.print("p3: "); p3.display();\n    }\n}',
    hint: "Deep copy creates copies of referenced objects too",
  },
  {
    id: "constructor_11",
    topicId: "constructor",
    question: "Copy constructor with complex objects.",
    mathSolution: "Copy all fields including collections",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static class Course {\n        String name;\n        Course(String n) { name = n; }\n        Course(Course c) { name = c.name; }\n    }\n    static class Student {\n        String name;\n        List<Course> courses;\n        Student(String n, List<Course> c) { name = n; courses = c; }\n        Student(Student s) {\n            this.name = s.name;\n            this.courses = new ArrayList<>();\n            for(Course c : s.courses) this.courses.add(new Course(c));\n        }\n        void display() {\n            System.out.print(name + " takes: ");\n            for(Course c : courses) System.out.print(c.name + " ");\n            System.out.println();\n        }\n    }\n    public static void main(String[] args) {\n        List<Course> courses = Arrays.asList(new Course("Math"), new Course("Science"));\n        Student s1 = new Student("Alice", courses);\n        Student s2 = new Student(s1);\n        s1.courses.set(0, new Course("Physics"));\n        s1.display();\n        s2.display();\n    }\n}',
    hint: "Collections need deep copying for complete independence",
  },

  // PRIVATE CONSTRUCTORS AND SINGLETON (3)
  {
    id: "constructor_12",
    topicId: "constructor",
    question: "Private constructor for singleton pattern.",
    mathSolution: "Private constructor prevents external instantiation",
    codeSolution: 'public class Main {\n    static class Singleton {\n        private static Singleton instance;\n        public String value;\n        private Singleton() { value = "Initial value"; System.out.println("Singleton created"); }\n        public static Singleton getInstance() {\n            if(instance == null) instance = new Singleton();\n            return instance;\n        }\n    }\n    public static void main(String[] args) {\n        Singleton s1 = Singleton.getInstance();\n        Singleton s2 = Singleton.getInstance();\n        s1.value = "Changed value";\n        System.out.println(s2.value);\n        System.out.println(s1 == s2);\n    }\n}',
    hint: "Private constructor for controlled instantiation",
  },
  {
    id: "constructor_13",
    topicId: "constructor",
    question: "Singleton with lazy initialization and thread safety.",
    mathSolution: "Thread-safe singleton with double-checked locking",
    codeSolution: 'public class Main {\n    static class ThreadSafeSingleton {\n        private static volatile ThreadSafeSingleton instance;\n        private ThreadSafeSingleton() { System.out.println("Instance created"); }\n        public static ThreadSafeSingleton getInstance() {\n            if(instance == null) {\n                synchronized(ThreadSafeSingleton.class) {\n                    if(instance == null) instance = new ThreadSafeSingleton();\n                }\n            }\n            return instance;\n        }\n    }\n    public static void main(String[] args) {\n        Runnable task = () -> ThreadSafeSingleton.getInstance();\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        Thread t3 = new Thread(task);\n        t1.start(); t2.start(); t3.start();\n        try { t1.join(); t2.join(); t3.join(); } catch(InterruptedException e) {}\n        System.out.println("Only one instance should be created.");\n    }\n}',
    hint: "Double-checked locking prevents multiple instances",
  },
  {
    id: "constructor_14",
    topicId: "constructor",
    question: "Utility class with private constructor.",
    mathSolution: "Private constructor prevents instantiation of utility class",
    codeSolution: 'public class Main {\n    static class MathUtils {\n        private MathUtils() { throw new UnsupportedOperationException("Utility class"); }\n        public static double circleArea(double r) { return Math.PI * r * r; }\n        public static double circleCircumference(double r) { return 2 * Math.PI * r; }\n        public static int factorial(int n) { if(n <= 1) return 1; return n * factorial(n-1); }\n    }\n    public static void main(String[] args) {\n        System.out.println("Area: " + MathUtils.circleArea(5));\n        System.out.println("Circumference: " + MathUtils.circleCircumference(5));\n        System.out.println("Factorial: " + MathUtils.factorial(5));\n    }\n}',
    hint: "Utility classes often have private constructors",
  },

  // CONSTRUCTOR WITH INHERITANCE (3)
  {
    id: "constructor_15",
    topicId: "constructor",
    question: "Constructor execution order in inheritance.",
    mathSolution: "Parent constructor executes before child",
    codeSolution: 'public class Main {\n    static class A { A() { System.out.println("A constructor"); } }\n    static class B extends A { B() { System.out.println("B constructor"); } }\n    static class C extends B { C() { System.out.println("C constructor"); } }\n    public static void main(String[] args) {\n        System.out.println("Creating C object:");\n        C c = new C();\n        System.out.println("\\nCreating B object:");\n        B b = new B();\n        System.out.println("\\nCreating A object:");\n        A a = new A();\n    }\n}',
    hint: "Constructors execute from top to bottom of hierarchy",
  },
  {
    id: "constructor_16",
    topicId: "constructor",
    question: "Passing parameters to parent constructor.",
    mathSolution: "Use super() with parameters",
    codeSolution: 'public class Main {\n    static class Vehicle {\n        String brand; int year;\n        Vehicle(String brand, int year) { this.brand = brand; this.year = year; System.out.println("Vehicle: " + brand + ", " + year); }\n    }\n    static class Car extends Vehicle {\n        String model;\n        Car(String brand, int year, String model) { super(brand, year); this.model = model; System.out.println("Car: " + model); }\n    }\n    static class SportsCar extends Car {\n        boolean turbo;\n        SportsCar(String brand, int year, String model, boolean turbo) { super(brand, year, model); this.turbo = turbo; System.out.println("SportsCar turbo: " + turbo); }\n        void display() { System.out.println(brand + " " + model + " " + year + " Turbo: " + turbo); }\n    }\n    public static void main(String[] args) {\n        SportsCar sc = new SportsCar("Ferrari", 2023, "F8", true);\n        sc.display();\n    }\n}',
    hint: "super() passes parameters up the chain",
  },
  {
    id: "constructor_17",
    topicId: "constructor",
    question: "Calling parent constructor conditionally.",
    mathSolution: "Different super() calls based on conditions",
    codeSolution: 'public class Main {\n    static class Person {\n        String name;\n        Person() { this.name = "Unknown"; System.out.println("Person default"); }\n        Person(String name) { this.name = name; System.out.println("Person param"); }\n    }\n    static class Employee extends Person {\n        int id;\n        Employee() { super(); this.id = 0; System.out.println("Employee default"); }\n        Employee(String name, int id) { super(name); this.id = id; System.out.println("Employee param"); }\n        Employee(int id) { this("Unknown", id); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee();\n        Employee e2 = new Employee("Alice", 101);\n        Employee e3 = new Employee(102);\n    }\n}',
    hint: "Choose which parent constructor to call",
  },

  // EXCEPTIONS IN CONSTRUCTORS (2)
  {
    id: "constructor_18",
    topicId: "constructor",
    question: "Throw exceptions from constructor.",
    mathSolution: "Constructors can throw exceptions",
    codeSolution: 'public class Main {\n    static class Account {\n        String accountNo; double balance;\n        Account(String accountNo, double balance) {\n            if(accountNo == null || accountNo.isEmpty()) throw new IllegalArgumentException("Account number cannot be empty");\n            if(balance < 0) throw new IllegalArgumentException("Initial balance cannot be negative");\n            this.accountNo = accountNo; this.balance = balance;\n            System.out.println("Account created: " + accountNo);\n        }\n        void display() { System.out.println("Account: " + accountNo + ", Balance: $" + balance); }\n    }\n    public static void main(String[] args) {\n        try {\n            Account a1 = new Account("ACC123", 1000);\n            a1.display();\n            Account a2 = new Account("", 500);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n        try {\n            Account a3 = new Account("ACC456", -100);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n    }\n}',
    hint: "Validate parameters and throw exceptions",
  },
  {
    id: "constructor_19",
    topicId: "constructor",
    question: "Handle checked exceptions in constructor.",
    mathSolution: "Constructor can throw checked exceptions",
    codeSolution: 'import java.io.*;\npublic class Main {\n    static class FileProcessor {\n        File file; BufferedReader reader;\n        FileProcessor(String fileName) throws FileNotFoundException {\n            file = new File(fileName);\n            reader = new BufferedReader(new FileReader(file));\n            System.out.println("File opened: " + fileName);\n        }\n        String readLine() throws IOException { return reader.readLine(); }\n        void close() throws IOException { if(reader != null) reader.close(); }\n    }\n    public static void main(String[] args) {\n        try {\n            FileProcessor fp = new FileProcessor("test.txt");\n            String line = fp.readLine();\n            System.out.println("Read: " + line);\n            fp.close();\n        } catch(FileNotFoundException e) { System.out.println("File not found: " + e.getMessage());\n        } catch(IOException e) { System.out.println("IO Error: " + e.getMessage()); }\n    }\n}',
    hint: "Declare exceptions in constructor signature",
  },

  // STATIC AND FINAL IN CONSTRUCTORS (2)
  {
    id: "constructor_20",
    topicId: "constructor",
    question: "Initialize final variables in constructor.",
    mathSolution: "Final variables must be initialized in constructor",
    codeSolution: 'public class Main {\n    static class Employee {\n        final int id; final String name;\n        static int count = 0;\n        Employee(int id, String name) {\n            this.id = id; this.name = name;\n            count++;\n            System.out.println("Employee created. Total: " + count);\n        }\n        void display() { System.out.println("ID: " + id + ", Name: " + name); }\n    }\n    public static void main(String[] args) {\n        Employee e1 = new Employee(101, "Alice");\n        Employee e2 = new Employee(102, "Bob");\n        e1.display();\n    }\n}',
    hint: "Final instance variables must be initialized in constructor",
  },
  {
    id: "constructor_21",
    topicId: "constructor",
    question: "Static block vs constructor initialization.",
    mathSolution: "Static blocks run once, constructors run per object",
    codeSolution: 'public class Main {\n    static class Database {\n        static String connection;\n        String table;\n        static {\n            connection = "Connected to DB";\n            System.out.println("Static block: " + connection);\n        }\n        {\n            System.out.println("Instance initializer for: " + table);\n            if(table == null) table = "default_table";\n        }\n        Database(String table) {\n            this.table = table;\n            System.out.println("Constructor: table = " + this.table);\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println("Creating first object:");\n        Database db1 = new Database("users");\n        System.out.println("\\nCreating second object:");\n        Database db2 = new Database("products");\n    }\n}',
    hint: "Order: static block -> instance init -> constructor",
  },

  // PRACTICAL APPLICATIONS (4)
  {
    id: "constructor_22",
    topicId: "constructor",
    question: "Builder pattern using constructor.",
    mathSolution: "Constructor with Builder pattern for many parameters",
    codeSolution: 'public class Main {\n    static class Computer {\n        private String cpu, ram, storage, gpu;\n        private boolean bluetooth;\n        private Computer(Builder b) { cpu = b.cpu; ram = b.ram; storage = b.storage; gpu = b.gpu; bluetooth = b.bluetooth; }\n        static class Builder {\n            private String cpu, ram, storage, gpu = "Integrated";\n            private boolean bluetooth = false;\n            Builder(String cpu, String ram, String storage) { this.cpu = cpu; this.ram = ram; this.storage = storage; }\n            Builder setGpu(String gpu) { this.gpu = gpu; return this; }\n            Builder setBluetooth(boolean bt) { this.bluetooth = bt; return this; }\n            Computer build() { return new Computer(this); }\n        }\n        void display() {\n            System.out.println("CPU: " + cpu + ", RAM: " + ram + ", Storage: " + storage);\n            System.out.println("GPU: " + gpu + ", Bluetooth: " + bluetooth);\n        }\n    }\n    public static void main(String[] args) {\n        Computer comp1 = new Computer.Builder("i7", "16GB", "512GB").setGpu("NVIDIA RTX").setBluetooth(true).build();\n        Computer comp2 = new Computer.Builder("i5", "8GB", "256GB").build();\n        comp1.display();\n        System.out.println("---");\n        comp2.display();\n    }\n}',
    hint: "Builder pattern handles many optional parameters",
  },
  {
    id: "constructor_23",
    topicId: "constructor",
    question: "Factory method using private constructor.",
    mathSolution: "Private constructor with static factory methods",
    codeSolution: 'public class Main {\n    static class Color {\n        private int r, g, b;\n        private Color(int r, int g, int b) { this.r = r; this.g = g; this.b = b; }\n        static Color fromRGB(int r, int g, int b) { return new Color(r, g, b); }\n        static Color fromHex(String hex) {\n            int r = Integer.parseInt(hex.substring(0,2),16);\n            int g = Integer.parseInt(hex.substring(2,4),16);\n            int b = Integer.parseInt(hex.substring(4,6),16);\n            return new Color(r, g, b);\n        }\n        static Color red() { return new Color(255,0,0); }\n        void display() { System.out.printf("RGB(%d,%d,%d) Hex: #%02X%02X%02X%n", r, g, b, r, g, b); }\n    }\n    public static void main(String[] args) {\n        Color c1 = Color.fromRGB(100,150,200);\n        Color c2 = Color.fromHex("FFAABB");\n        Color c3 = Color.red();\n        c1.display(); c2.display(); c3.display();\n    }\n}',
    hint: "Static factory methods provide meaningful names",
  },
  {
    id: "constructor_24",
    topicId: "constructor",
    question: "Immutable class with constructor.",
    mathSolution: "Constructor initializes all fields, no setters",
    codeSolution: 'import java.util.*;\npublic class Main {\n    static final class ImmutablePerson {\n        private final String name;\n        private final int age;\n        private final List<String> hobbies;\n        ImmutablePerson(String name, int age, List<String> hobbies) {\n            this.name = name; this.age = age;\n            this.hobbies = new ArrayList<>(hobbies);\n        }\n        public String getName() { return name; }\n        public int getAge() { return age; }\n        public List<String> getHobbies() { return new ArrayList<>(hobbies); }\n    }\n    public static void main(String[] args) {\n        List<String> hobbies = new ArrayList<>(Arrays.asList("Reading", "Gaming"));\n        ImmutablePerson p = new ImmutablePerson("Alice", 25, hobbies);\n        hobbies.add("Swimming");\n        System.out.println(p.getName() + ", " + p.getAge());\n        System.out.println("Hobbies: " + p.getHobbies());\n    }\n}',
    hint: "Defensive copying ensures immutability",
  },
  {
    id: "constructor_25",
    topicId: "constructor",
    question: "Constructor with validation logic.",
    mathSolution: "Validate parameters before initializing",
    codeSolution: 'public class Main {\n    static class BankAccount {\n        private String accountNumber, accountHolder;\n        private double balance;\n        private static final double MIN_BALANCE = 500;\n        BankAccount(String accountNumber, String accountHolder, double initialBalance) {\n            if(accountNumber == null || accountNumber.length() < 10) throw new IllegalArgumentException("Invalid account number");\n            if(accountHolder == null || accountHolder.trim().isEmpty()) throw new IllegalArgumentException("Account holder name required");\n            if(initialBalance < MIN_BALANCE) throw new IllegalArgumentException("Minimum balance required: " + MIN_BALANCE);\n            this.accountNumber = accountNumber;\n            this.accountHolder = accountHolder;\n            this.balance = initialBalance;\n            System.out.println("Account created for " + accountHolder);\n        }\n        void display() { System.out.println("Account: " + accountNumber + ", Holder: " + accountHolder + ", Balance: $" + balance); }\n    }\n    public static void main(String[] args) {\n        try {\n            BankAccount a1 = new BankAccount("ACC12345678", "John Doe", 1000);\n            a1.display();\n            BankAccount a2 = new BankAccount("ACC123", "Jane", 100);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n        try {\n            BankAccount a3 = new BankAccount("ACC87654321", "", 1000);\n        } catch(IllegalArgumentException e) { System.out.println("Error: " + e.getMessage()); }\n    }\n}',
    hint: "Validate all inputs in constructor",
  },
   {
    "id": "constructor_26",
    "topicId": "constructor",
    "question": "Create a constructor that accepts a variable number of integers (varargs) and stores them in an array. Print all numbers.",
    "mathSolution": "Varargs constructor allows flexible number of arguments treated as array.",
    "codeSolution": "public class Main {\n    static class NumberHolder {\n        private int[] values;\n        NumberHolder(int... nums) {\n            values = nums;\n            System.out.println(\"Varargs constructor called\");\n        }\n        void display() {\n            System.out.print(\"Numbers: \");\n            for(int n : values) System.out.print(n + \" \");\n            System.out.println();\n        }\n    }\n    public static void main(String[] args) {\n        NumberHolder h1 = new NumberHolder(1, 2, 3);\n        NumberHolder h2 = new NumberHolder(10, 20, 30, 40, 50);\n        h1.display();\n        h2.display();\n    }\n}",
    "hint": "Varargs are treated as array inside the constructor; call with any number of arguments."
  },
  {
    "id": "constructor_27",
    "topicId": "constructor",
    "question": "Implement a constructor that calculates factorial of a number recursively during object creation and stores the result.",
    "mathSolution": "Constructor can call a recursive method to compute value.",
    "codeSolution": "public class Main {\n    static class Factorial {\n        int value;\n        Factorial(int n) {\n            value = factorial(n);\n            System.out.println(n + \"! = \" + value);\n        }\n        private int factorial(int n) {\n            if(n <= 1) return 1;\n            return n * factorial(n - 1);\n        }\n    }\n    public static void main(String[] args) {\n        new Factorial(5);\n        new Factorial(6);\n    }\n}",
    "hint": "Recursive method can be private and called from constructor."
  },
  {
    "id": "constructor_28",
    "topicId": "constructor",
    "question": "Create a constructor that initializes a StringBuilder with a given string and then appends a suffix. Print the final string.",
    "mathSolution": "Constructor can perform multiple operations on mutable objects.",
    "codeSolution": "public class Main {\n    static class TextBuilder {\n        StringBuilder sb;\n        TextBuilder(String base, String suffix) {\n            sb = new StringBuilder(base);\n            sb.append(suffix);\n            System.out.println(\"Constructed string: \" + sb);\n        }\n    }\n    public static void main(String[] args) {\n        new TextBuilder(\"Hello\", \" World!\");\n        new TextBuilder(\"Java\", \" is fun\");\n    }\n}",
    "hint": "Use StringBuilder for efficient string manipulation in constructor."
  },
  {
    "id": "constructor_29",
    "topicId": "constructor",
    "question": "Create an enum with constants and write a constructor that takes an enum value to initialize a field. Print the description.",
    "mathSolution": "Constructor can accept enum parameters to configure object.",
    "codeSolution": "public class Main {\n    enum Priority { LOW, MEDIUM, HIGH }\n    static class Task {\n        Priority priority;\n        String name;\n        Task(String name, Priority p) {\n            this.name = name;\n            this.priority = p;\n            System.out.println(\"Task '\" + name + \"' has priority \" + priority);\n        }\n    }\n    public static void main(String[] args) {\n        new Task(\"Write code\", Priority.HIGH);\n        new Task(\"Test\", Priority.MEDIUM);\n    }\n}",
    "hint": "Enums can be used to limit valid values in constructor."
  },
  {
    "id": "constructor_30",
    "topicId": "constructor",
    "question": "Implement a constructor that uses java.util.Date to validate that a provided year is in the future. Throw exception if not.",
    "mathSolution": "Constructor can use system classes for validation.",
    "codeSolution": "import java.util.Calendar;\npublic class Main {\n    static class FutureEvent {\n        int year;\n        FutureEvent(int year) {\n            int currentYear = Calendar.getInstance().get(Calendar.YEAR);\n            if(year <= currentYear) {\n                throw new IllegalArgumentException(\"Year must be in the future\");\n            }\n            this.year = year;\n            System.out.println(\"Event scheduled for year \" + year);\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            new FutureEvent(2025);\n            new FutureEvent(2020);\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Use Calendar or LocalDate for date validation in constructor."
  },
  {
    "id": "constructor_31",
    "topicId": "constructor",
    "question": "Write a constructor that creates a defensive copy of a list passed as parameter. Modify the original list after object creation to prove immutability.",
    "mathSolution": "Defensive copying prevents external modification of internal state.",
    "codeSolution": "import java.util.*;\npublic class Main {\n    static class Team {\n        private List<String> members;\n        Team(List<String> members) {\n            this.members = new ArrayList<>(members);\n        }\n        List<String> getMembers() {\n            return new ArrayList<>(members);\n        }\n    }\n    public static void main(String[] args) {\n        List<String> original = new ArrayList<>(Arrays.asList(\"Alice\", \"Bob\"));\n        Team team = new Team(original);\n        original.add(\"Charlie\");\n        System.out.println(\"Original after change: \" + original);\n        System.out.println(\"Team members: \" + team.getMembers());\n    }\n}",
    "hint": "Create a new ArrayList from the passed list in constructor to avoid external changes."
  },
  {
    "id": "constructor_32",
    "topicId": "constructor",
    "question": "Create a constructor that initializes a static counter every time a new object is created. Also print the count inside constructor.",
    "mathSolution": "Static variable can count instances, including those from subclasses.",
    "codeSolution": "public class Main {\n    static class Item {\n        static int counter = 0;\n        int id;\n        Item() {\n            id = ++counter;\n            System.out.println(\"Created item #\" + id);\n        }\n    }\n    static class Product extends Item {\n        Product() { super(); }\n    }\n    public static void main(String[] args) {\n        new Item();\n        new Product();\n        new Item();\n        System.out.println(\"Total items created: \" + Item.counter);\n    }\n}",
    "hint": "Static variable is shared across all instances and subclasses."
  },
  {
    "id": "constructor_33",
    "topicId": "constructor",
    "question": "Design a constructor that accepts a string and converts it to uppercase using String.toUpperCase() before storing. Print stored value.",
    "mathSolution": "Constructor can transform input before assignment.",
    "codeSolution": "public class Main {\n    static class Message {\n        String content;\n        Message(String msg) {\n            this.content = msg.toUpperCase();\n            System.out.println(\"Stored: \" + content);\n        }\n    }\n    public static void main(String[] args) {\n        new Message(\"hello world\");\n        new Message(\"java is fun\");\n    }\n}",
    "hint": "Apply string transformations like toUpperCase() in constructor."
  },
  {
    "id": "constructor_34",
    "topicId": "constructor",
    "question": "Create a constructor that uses a static factory method pattern to return a pre-configured object (like a default configuration).",
    "mathSolution": "Private constructor with public static factory method.",
    "codeSolution": "public class Main {\n    static class Config {\n        String url;\n        int timeout;\n        private Config(String url, int timeout) {\n            this.url = url;\n            this.timeout = timeout;\n        }\n        static Config defaultConfig() {\n            return new Config(\"http://localhost\", 5000);\n        }\n        static Config custom(String url, int timeout) {\n            return new Config(url, timeout);\n        }\n        void display() {\n            System.out.println(\"URL: \" + url + \", Timeout: \" + timeout);\n        }\n    }\n    public static void main(String[] args) {\n        Config def = Config.defaultConfig();\n        Config cust = Config.custom(\"https://api.example.com\", 3000);\n        def.display();\n        cust.display();\n    }\n}",
    "hint": "Factory methods provide meaningful names and can return cached instances."
  },
  {
    "id": "constructor_35",
    "topicId": "constructor",
    "question": "Create a constructor that accepts an array and returns a new array with elements in reverse order (store reversed array).",
    "mathSolution": "Constructor can process array input and produce derived data.",
    "codeSolution": "import java.util.Arrays;\npublic class Main {\n    static class Reverser {\n        int[] reversed;\n        Reverser(int[] original) {\n            reversed = new int[original.length];\n            for(int i = 0; i < original.length; i++) {\n                reversed[i] = original[original.length - 1 - i];\n            }\n        }\n        void display() {\n            System.out.println(\"Reversed: \" + Arrays.toString(reversed));\n        }\n    }\n    public static void main(String[] args) {\n        Reverser r1 = new Reverser(new int[]{1,2,3,4});\n        Reverser r2 = new Reverser(new int[]{10,20,30});\n        r1.display();\n        r2.display();\n    }\n}",
    "hint": "Constructor can compute reversed array during object creation."
  },
  {
    "id": "constructor_36",
    "topicId": "constructor",
    "question": "Implement a constructor that accepts a string and checks if it is a palindrome. Store the result as boolean and print it.",
    "mathSolution": "Constructor can perform business logic and store derived values.",
    "codeSolution": "public class Main {\n    static class PalindromeChecker {\n        boolean isPalindrome;\n        PalindromeChecker(String s) {\n            String clean = s.replaceAll(\"\\\\s+\", \"\").toLowerCase();\n            String reversed = new StringBuilder(clean).reverse().toString();\n            isPalindrome = clean.equals(reversed);\n            System.out.println(\"\\\"\" + s + \"\\\" is palindrome? \" + isPalindrome);\n        }\n    }\n    public static void main(String[] args) {\n        new PalindromeChecker(\"racecar\");\n        new PalindromeChecker(\"hello world\");\n        new PalindromeChecker(\"A man a plan a canal panama\");\n    }\n}",
    "hint": "Use StringBuilder.reverse() to check palindrome in constructor."
  },
  {
    "id": "constructor_37",
    "topicId": "constructor",
    "question": "Create a constructor that uses java.time.LocalDate to parse a date string and store it. Handle parsing exception.",
    "mathSolution": "Constructor can use date/time API to validate and parse input.",
    "codeSolution": "import java.time.LocalDate;\nimport java.time.format.DateTimeParseException;\npublic class Main {\n    static class Event {\n        LocalDate date;\n        Event(String dateStr) {\n            try {\n                this.date = LocalDate.parse(dateStr);\n                System.out.println(\"Date set: \" + date);\n            } catch(DateTimeParseException e) {\n                System.out.println(\"Invalid date format: \" + dateStr);\n                this.date = LocalDate.now();\n            }\n        }\n    }\n    public static void main(String[] args) {\n        new Event(\"2024-12-25\");\n        new Event(\"invalid\");\n    }\n}",
    "hint": "Use LocalDate.parse() with try-catch for robust date initialization."
  },
  {
    "id": "constructor_38",
    "topicId": "constructor",
    "question": "Write a constructor that initializes a 2D array with random integers between 1 and 100. Print the array.",
    "mathSolution": "Constructor can allocate and fill multi-dimensional arrays.",
    "codeSolution": "import java.util.Random;\npublic class Main {\n    static class RandomMatrix {\n        int[][] matrix;\n        RandomMatrix(int rows, int cols) {\n            Random rand = new Random();\n            matrix = new int[rows][cols];\n            for(int i = 0; i < rows; i++) {\n                for(int j = 0; j < cols; j++) {\n                    matrix[i][j] = rand.nextInt(100) + 1;\n                }\n            }\n        }\n        void display() {\n            for(int[] row : matrix) {\n                for(int val : row) System.out.print(val + \" \");\n                System.out.println();\n            }\n        }\n    }\n    public static void main(String[] args) {\n        new RandomMatrix(3, 4).display();\n    }\n}",
    "hint": "Use nested loops to fill array in constructor."
  },
  {
    "id": "constructor_39",
    "topicId": "constructor",
    "question": "Create a constructor that uses a custom checked exception to reject negative radius for a Circle class.",
    "mathSolution": "Constructor can throw custom checked exception to enforce invariants.",
    "codeSolution": "public class Main {\n    static class NegativeRadiusException extends Exception {\n        NegativeRadiusException(String msg) { super(msg); }\n    }\n    static class Circle {\n        double radius;\n        Circle(double r) throws NegativeRadiusException {\n            if(r < 0) throw new NegativeRadiusException(\"Radius cannot be negative: \" + r);\n            this.radius = r;\n            System.out.println(\"Circle created with radius \" + r);\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            new Circle(5);\n            new Circle(-2);\n        } catch(NegativeRadiusException e) {\n            System.out.println(\"Exception: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Declare throws in constructor signature and use custom exception class."
  },
  {
    "id": "constructor_40",
    "topicId": "constructor",
    "question": "Construct a class that takes a string and ensures it is not null or empty using Objects.requireNonNull and a custom message.",
    "mathSolution": "Use Objects.requireNonNull for concise validation.",
    "codeSolution": "import java.util.Objects;\npublic class Main {\n    static class User {\n        String name;\n        User(String name) {\n            this.name = Objects.requireNonNull(name, \"Name cannot be null\");\n            if(this.name.trim().isEmpty()) {\n                throw new IllegalArgumentException(\"Name cannot be empty\");\n            }\n            System.out.println(\"User created: \" + this.name);\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            new User(\"Alice\");\n            new User(null);\n        } catch(Exception e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n        try {\n            new User(\"\");\n        } catch(IllegalArgumentException e) {\n            System.out.println(\"Error: \" + e.getMessage());\n        }\n    }\n}",
    "hint": "Objects.requireNonNull throws NullPointerException with custom message."
  }
);