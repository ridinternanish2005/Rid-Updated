QuizData.questions.push(
    //execptional handling ,File Handling , Module&Package ,Multithreding
{
  id: 'py_ex_1',
  topicId: 'py_exceptional_handling',
  question: 'Write a program to handle division by zero using try-except block.',
  mathSolution: 'Use try-except to catch ZeroDivisionError when performing division.',
  codeSolution: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return result\n    except ZeroDivisionError:\n        return "Error: Division by zero is not allowed"\n\n# Test cases\nprint(safe_divide(10, 2))   # Output: 5.0\nprint(safe_divide(10, 0))   # Output: Error: Division by zero is not allowed',
  hint: 'Place the division operation in try block and catch ZeroDivisionError.'
},
{
  id: 'py_ex_2',
  topicId: 'py_exceptional_handling',
  question: 'Handle multiple exceptions (ValueError and ZeroDivisionError) when taking user input for division.',
  mathSolution: 'Use multiple except blocks to handle different types of errors separately.',
  codeSolution: 'def divide_numbers(num1, num2):\n    try:\n        result = num1 / num2\n        return f"Result: {result}"\n    except ValueError:\n        return "Error: Please enter valid integers"\n    except ZeroDivisionError:\n        return "Error: Denominator cannot be zero"\n\n# Test cases\nprint(divide_numbers(10, 2))    # Output: Result: 5.0\nprint(divide_numbers(10, 0))    # Output: Error: Denominator cannot be zero',
  hint: 'Catch ValueError for invalid integer conversion and ZeroDivisionError for division by zero.'
},
{
  id: 'py_ex_3',
  topicId: 'py_exceptional_handling',
  question: 'Use else clause with try-except to execute code when no exception occurs.',
  mathSolution: 'The else block runs only if try block completes without any exception.',
  codeSolution: 'def read_file_safe(filename):\n    try:\n        file = open(filename, "r")\n    except FileNotFoundError:\n        return "File not found!"\n    else:\n        content = file.read()\n        file.close()\n        return content\n\n# Test cases\nprint(read_file_safe("existing.txt"))  # Will read if file exists\nprint(read_file_safe("nonexistent.txt"))  # Output: File not found!',
  hint: 'Else block executes only when try block succeeds without exceptions.'
},
{
  id: 'py_ex_4',
  topicId: 'py_exceptional_handling',
  question: 'Implement finally clause to ensure file is closed regardless of exceptions.',
  mathSolution: 'Finally block always executes, whether exception occurs or not.',
  codeSolution: 'def process_file(filename):\n    file = None\n    try:\n        file = open(filename, "r")\n        data = file.read()\n        return data\n    except FileNotFoundError:\n        return "File not found"\n    finally:\n        if file:\n            file.close()\n            print("File closed")\n\n# Test cases\nprint(process_file("test.txt"))  # Will try to read file\nprint(process_file("nonexistent.txt"))  # Output: File not found\n# Always prints "File closed"',
  hint: 'Finally block is used for cleanup operations that must always execute.'
},
{
  id: 'py_ex_5',
  topicId: 'py_exceptional_handling',
  question: 'Raise a custom exception when age is negative.',
  mathSolution: 'Use raise statement to manually trigger an exception when condition is met.',
  codeSolution: 'def set_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    return f"Age set to {age}"\n\n# Test cases\ntry:\n    print(set_age(25))   # Output: Age set to 25\n    print(set_age(-5))   # Raises ValueError\nexcept ValueError as e:\n    print(f"Error: {e}")  # Output: Error: Age cannot be negative',
  hint: 'Use raise keyword followed by the exception class and error message.'
},
{
  id: 'py_ex_6',
  topicId: 'py_exceptional_handling',
  question: 'Create a custom exception class called InsufficientFundsError for a bank account.',
  mathSolution: 'Define a new exception class by inheriting from Exception base class.',
  codeSolution: 'class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f"Insufficient funds: balance {balance}, attempted withdrawal {amount}")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\n# Test cases\ntry:\n    print(withdraw(100, 50))   # Output: 50\n    print(withdraw(100, 150))  # Raises InsufficientFundsError\nexcept InsufficientFundsError as e:\n    print(f"Error: {e}")  # Output: Error: Insufficient funds: balance 100, attempted withdrawal 150',
  hint: 'Create a class that inherits from Exception and customize the __init__ method.'
},
{
  id: 'py_ex_7',
  topicId: 'py_exceptional_handling',
  question: 'Handle FileNotFoundError when trying to open a non-existent file.',
  mathSolution: 'Catch specific file-related exceptions when working with file operations.',
  codeSolution: 'def read_file_content(filename):\n    try:\n        with open(filename, "r") as file:\n            return file.read()\n    except FileNotFoundError:\n        return f"File {filename} does not exist"\n    except PermissionError:\n        return f"Permission denied to read {filename}"\n\n# Test cases\nprint(read_file_content("test.txt"))  # Will read if exists\nprint(read_file_content("missing.txt"))  # Output: File missing.txt does not exist',
  hint: 'Use with statement for automatic file handling and catch specific file exceptions.'
},
{
  id: 'py_ex_8',
  topicId: 'py_exceptional_handling',
  question: 'Handle KeyboardInterrupt to gracefully exit a program.',
  mathSolution: 'Catch KeyboardInterrupt (Ctrl+C) to perform cleanup before exiting.',
  codeSolution: 'def long_running_process():\n    import time\n    count = 0\n    try:\n        while count < 5:  # Limit to 5 iterations for demo\n            print(f"Processing... iteration {count + 1}")\n            time.sleep(1)\n            count += 1\n    except KeyboardInterrupt:\n        print("\\nProcess interrupted by user. Cleaning up...")\n    print("Process completed")\n\n# Test case\nlong_running_process()  # Press Ctrl+C during execution to see interrupt handling',
  hint: 'KeyboardInterrupt is raised when user presses Ctrl+C.'
},
{
  id: 'py_ex_9',
  topicId: 'py_exceptional_handling',
  question: 'Handle IndexError when accessing list elements beyond its range.',
  mathSolution: 'Catch IndexError when trying to access invalid list indices.',
  codeSolution: 'def safe_list_access(lst, index):\n    try:\n        return lst[index]\n    except IndexError:\n        return f"Index {index} is out of range. List length is {len(lst)}"\n\n# Test cases\nmy_list = [10, 20, 30, 40, 50]\nprint(safe_list_access(my_list, 2))   # Output: 30\nprint(safe_list_access(my_list, 10))  # Output: Index 10 is out of range. List length is 5',
  hint: 'IndexError occurs when trying to access an index that doesn\'t exist in the list.'
},
{
  id: 'py_ex_10',
  topicId: 'py_exceptional_handling',
  question: 'Handle KeyError when accessing missing dictionary keys.',
  mathSolution: 'Use try-except to catch KeyError or use get() method as alternative.',
  codeSolution: 'def get_dict_value(data, key):\n    try:\n        return data[key]\n    except KeyError:\n        return f"Key {key} not found in dictionary"\n\n# Test cases\nmy_dict = {"name": "Alice", "age": 25}\nprint(get_dict_value(my_dict, "name"))  # Output: Alice\nprint(get_dict_value(my_dict, "city"))  # Output: Key city not found in dictionary',
  hint: 'KeyError occurs when accessing a non-existent key in a dictionary.'
},
{
  id: 'py_ex_11',
  topicId: 'py_exceptional_handling',
  question: 'Use assert statement to validate function parameters.',
  mathSolution: 'Assertions are used for debugging and testing conditions that should never happen.',
  codeSolution: 'def calculate_bmi(weight, height):\n    assert weight > 0, "Weight must be positive"\n    assert height > 0, "Height must be positive"\n    return weight / (height ** 2)\n\n# Test cases\ntry:\n    print(calculate_bmi(70, 1.75))  # Output: 22.857...\n    print(calculate_bmi(-70, 1.75)) # Raises AssertionError\nexcept AssertionError as e:\n    print(f"Assertion failed: {e}")  # Output: Assertion failed: Weight must be positive',
  hint: 'Assert raises AssertionError if condition is False. Can be disabled with -O flag.'
},
{
  id: 'py_ex_12',
  topicId: 'py_exceptional_handling',
  question: 'Implement a retry mechanism for operations that might fail temporarily.',
  mathSolution: 'Use a loop with try-except to retry failed operations multiple times.',
  codeSolution: 'def retry_operation(func, max_retries=3):\n    for attempt in range(max_retries):\n        try:\n            return func()\n        except Exception as e:\n            print(f"Attempt {attempt + 1} failed: {e}")\n            if attempt == max_retries - 1:\n                return "Operation failed after all retries"\n            print("Retrying...")\n    return None\n\n# Test cases\nattempt_count = 0\ndef unstable_operation():\n    global attempt_count\n    attempt_count += 1\n    if attempt_count < 2:\n        raise ValueError("Temporary failure")\n    return "Success"\n\nprint(retry_operation(unstable_operation))  # Output: Success (after retry)',
  hint: 'Wrap the operation in a loop and catch exceptions to retry.'
},
{
  id: 'py_ex_13',
  topicId: 'py_exceptional_handling',
  question: 'Handle multiple exceptions in a single except block using tuples.',
  mathSolution: 'Group multiple exception types in a tuple to handle them similarly.',
  codeSolution: 'def process_data(data):\n    try:\n        num = int(data)\n        result = 100 / num\n        return result\n    except (ValueError, ZeroDivisionError) as e:\n        return f"Error: {type(e).__name__} - {e}"\n\n# Test cases\nprint(process_data("10"))     # Output: 10.0\nprint(process_data("abc"))    # Output: Error: ValueError - invalid literal for int()\nprint(process_data("0"))      # Output: Error: ZeroDivisionError - division by zero',
  hint: 'Use parentheses to create a tuple of exception types in a single except block.'
},
{
  id: 'py_ex_14',
  topicId: 'py_exceptional_handling',
  question: 'Use exception chaining to preserve original exception context.',
  mathSolution: 'Use "from" keyword to chain exceptions, preserving the original error context.',
  codeSolution: 'def convert_and_process(data):\n    try:\n        num = int(data)\n        return num * 2\n    except ValueError as e:\n        raise TypeError(f"Invalid data type provided: {data}") from e\n\n# Test cases\ntry:\n    print(convert_and_process("123"))  # Output: 246\n    print(convert_and_process("abc"))  # Raises TypeError\nexcept TypeError as e:\n    print(f"Error: {e}")\n    print(f"Original cause: {e.__cause__}")',
  hint: 'Exception chaining helps track the root cause of an error.'
},
{
  id: 'py_ex_15',
  topicId: 'py_exceptional_handling',
  question: 'Handle TypeError when performing operations on incompatible types.',
  mathSolution: 'Catch TypeError when operations are performed on unsupported data types.',
  codeSolution: 'def add_numbers(a, b):\n    try:\n        return a + b\n    except TypeError:\n        return f"Error: Cannot add {type(a).__name__} and {type(b).__name__}"\n\n# Test cases\nprint(add_numbers(5, 3))        # Output: 8\nprint(add_numbers("Hello", "World"))  # Output: HelloWorld\nprint(add_numbers(5, "10"))     # Output: Error: Cannot add int and str',
  hint: 'TypeError occurs when an operation is applied to an object of inappropriate type.'
},
{
  id: 'py_ex_16',
  topicId: 'py_exceptional_handling',
  question: 'Implement a context manager using try-except-finally for resource management.',
  mathSolution: 'Use try-finally to ensure resources are released even if errors occur.',
  codeSolution: 'class DatabaseConnection:\n    def __enter__(self):\n        print("Connecting to database")\n        self.connected = True\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Closing database connection")\n        self.connected = False\n        if exc_type:\n            print(f"Error occurred: {exc_val}")\n        return False  # Don\'t suppress exceptions\n    \n    def query(self, sql):\n        if not self.connected:\n            raise ConnectionError("Not connected to database")\n        return f"Executing: {sql}"\n\n# Test case\nwith DatabaseConnection() as db:\n    result = db.query("SELECT * FROM users")\n    print(result)',
  hint: 'Context managers use __enter__ and __exit__ methods for automatic resource cleanup.'
},
{
  id: 'py_ex_17',
  topicId: 'py_exceptional_handling',
  question: 'Handle AttributeError when accessing non-existent object attributes.',
  mathSolution: 'Catch AttributeError when trying to access attributes that don\'t exist.',
  codeSolution: 'def safe_getattr(obj, attr_name):\n    try:\n        return getattr(obj, attr_name)\n    except AttributeError:\n        return f"Object has no attribute {attr_name}"\n\n# Test cases\nclass Person:\n    name = "Alice"\n\np = Person()\nprint(safe_getattr(p, "name"))   # Output: Alice\nprint(safe_getattr(p, "age"))    # Output: Object has no attribute age',
  hint: 'AttributeError occurs when accessing an attribute that doesn\'t exist on an object.'
},
{
  id: 'py_ex_18',
  topicId: 'py_exceptional_handling',
  question: 'Handle ImportError when modules are not available.',
  mathSolution: 'Use try-except to gracefully handle missing optional dependencies.',
  codeSolution: 'try:\n    import numpy as np\n    HAS_NUMPY = True\n    print("NumPy available")\nexcept ImportError:\n    HAS_NUMPY = False\n    print("NumPy not available. Using fallback implementation.")\n\n# Demonstrate usage\nif HAS_NUMPY:\n    print("Using NumPy for calculations")\nelse:\n    print("Using standard Python for calculations")',
  hint: 'ImportError is raised when an imported module cannot be found.'
},
{
  id: 'py_ex_19',
  topicId: 'py_exceptional_handling',
  question: 'Create a function that validates email and raises appropriate exceptions.',
  mathSolution: 'Raise different exception types based on validation failures.',
  codeSolution: 'def validate_email(email):\n    if not isinstance(email, str):\n        raise TypeError("Email must be a string")\n    if "@" not in email:\n        raise ValueError("Email must contain @")\n    if len(email) < 5:\n        raise ValueError("Email too short")\n    return True\n\n# Test cases\ntry:\n    print(validate_email("john@example.com"))  # Output: True\n    print(validate_email("invalid"))  # Raises ValueError\nexcept ValueError as e:\n    print(f"Validation error: {e}")\ntry:\n    validate_email(123)  # Raises TypeError\nexcept TypeError as e:\n    print(f"Type error: {e}")',
  hint: 'Use different exception types for different validation failures.'
},
{
  id: 'py_ex_20',
  topicId: 'py_exceptional_handling',
  question: 'Handle StopIteration exception in custom iterator.',
  mathSolution: 'StopIteration signals the end of iteration and should be handled appropriately.',
  codeSolution: 'class CountDown:\n    def __init__(self, start):\n        self.current = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        self.current -= 1\n        return self.current + 1\n\n# Test case\ncounter = CountDown(3)\nprint("Countdown:")\ntry:\n    while True:\n        print(next(counter))\nexcept StopIteration:\n    print("Countdown finished")\n# Output: 3, 2, 1, Countdown finished',
  hint: 'StopIteration is used to signal that an iterator has no more items.'
},
{
  id: 'py_ex_21',
  topicId: 'py_exceptional_handling',
  question: 'Handle OverflowError for mathematical calculations exceeding limits.',
  mathSolution: 'Catch OverflowError when calculations produce numbers too large for representation.',
  codeSolution: 'def calculate_factorial(n):\n    try:\n        result = 1\n        for i in range(1, n + 1):\n            result *= i\n        return result\n    except OverflowError:\n        return f"Factorial of {n} is too large to compute"\n\n# Test cases\nprint(calculate_factorial(5))    # Output: 120\nprint(calculate_factorial(1000)) # Output: Very large number (works in Python)',
  hint: 'OverflowError occurs when a calculation exceeds the maximum limit for a numeric type.'
},
{
  id: 'py_ex_22',
  topicId: 'py_exceptional_handling',
  question: 'Implement logging of exceptions with traceback information.',
  mathSolution: 'Use logging module to record exception details including stack trace.',
  codeSolution: 'import logging\nimport traceback\nimport sys\n\n# Configure logging to show output\nlogging.basicConfig(level=logging.ERROR, stream=sys.stdout)\n\ndef log_exceptions(func):\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except Exception as e:\n            error_msg = f"Exception in {func.__name__}: {e}\\n{traceback.format_exc()}"\n            logging.error(error_msg)\n            return f"Error occurred: {e}"\n    return wrapper\n\n@log_exceptions\ndef risky_operation():\n    return 1 / 0\n\n# Test case\nresult = risky_operation()\nprint(result)  # Output: Error occurred: division by zero',
  hint: 'Use traceback.format_exc() to get the full stack trace as a string.'
},
{
  id: 'py_ex_23',
  topicId: 'py_exceptional_handling',
  question: 'Handle RecursionError for deep or infinite recursion.',
  mathSolution: 'Catch RecursionError when recursion depth exceeds Python\'s limit.',
  codeSolution: 'def recursive_function(n):\n    try:\n        if n <= 1:\n            return 1\n        return n * recursive_function(n - 1)\n    except RecursionError:\n        return "Recursion depth exceeded. Consider using iteration."\n\n# Test cases\nprint(recursive_function(5))   # Output: 120\nprint(recursive_function(2000))  # Output: Recursion depth exceeded...',
  hint: 'Python has a default recursion limit (usually 1000) to prevent stack overflow.'
},
{
  id: 'py_ex_24',
  topicId: 'py_exceptional_handling',
  question: 'Create a safe calculator that handles all mathematical errors.',
  mathSolution: 'Handle various math-related exceptions including ZeroDivisionError, OverflowError, etc.',
  codeSolution: 'import math\n\ndef safe_calculator(operation, a, b=None):\n    try:\n        if operation == "divide":\n            return a / b\n        elif operation == "sqrt":\n            if a < 0:\n                raise ValueError("Cannot calculate square root of negative number")\n            return math.sqrt(a)\n        elif operation == "log":\n            if a <= 0:\n                raise ValueError("Logarithm argument must be positive")\n            return math.log(a)\n        elif operation == "power":\n            return a ** b\n    except ZeroDivisionError:\n        return "Error: Division by zero"\n    except ValueError as e:\n        return f"Error: {e}"\n    except OverflowError:\n        return "Error: Result too large"\n\n# Test cases\nprint(safe_calculator("divide", 10, 2))   # Output: 5.0\nprint(safe_calculator("divide", 10, 0))   # Output: Error: Division by zero\nprint(safe_calculator("sqrt", 16))        # Output: 4.0\nprint(safe_calculator("sqrt", -4))        # Output: Error: Cannot calculate square root of negative number',
  hint: 'Different math operations can raise different types of exceptions.'
},
{
  id: 'py_ex_25',
  topicId: 'py_exceptional_handling',
  question: 'Handle UnicodeError when dealing with text encoding/decoding.',
  mathSolution: 'Catch UnicodeError when text cannot be encoded or decoded properly.',
  codeSolution: 'def safe_encode(text, encoding="utf-8"):\n    try:\n        return text.encode(encoding)\n    except UnicodeEncodeError as e:\n        return f"Cannot encode: {e}"\n\ndef safe_decode(bytes_data, encoding="utf-8"):\n    try:\n        return bytes_data.decode(encoding)\n    except UnicodeDecodeError as e:\n        return f"Cannot decode: {e}"\n\n# Test cases\nprint(safe_encode("Hello"))  # Output: b\'Hello\'\nprint(safe_decode(b\'Hello\'))  # Output: Hello\nprint(safe_encode("😊"))  # Works fine with UTF-8',
  hint: 'UnicodeError (and its subclasses UnicodeEncodeError/UnicodeDecodeError) occur during text encoding/decoding.'
},
{
  id: 'py_ex_26',
  topicId: 'py_exceptional_handling',
  question: 'Implement a timeout mechanism using exception handling.',
  mathSolution: 'Use signal module with exception handling to implement timeouts.',
  codeSolution: 'import time\nimport functools\n\nclass TimeoutError(Exception):\n    pass\n\ndef run_with_timeout(timeout_seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            start = time.time()\n            result = func(*args, **kwargs)\n            if time.time() - start > timeout_seconds:\n                return "Operation timed out"\n            return result\n        return wrapper\n    return decorator\n\n# Test case\n@run_with_timeout(timeout_seconds=2)\ndef slow_operation():\n    time.sleep(3)\n    return "Completed"\n\nprint(slow_operation())',
  hint: 'Decorator must return another function to accept func properly.'
},
{
  id: 'py_ex_27',
  topicId: 'py_exceptional_handling',
  question: 'Handle MemoryError when operations exceed available memory.',
  mathSolution: 'Catch MemoryError when Python runs out of memory.',
  codeSolution: 'def create_large_list(size):\n    try:\n        return [0] * size\n    except MemoryError:\n        return f"Cannot create list of size {size}: insufficient memory"\n\n# Test cases\nprint(len(create_large_list(1000)))  # Output: 1000\n# Uncomment below to test memory error (may crash system)\n# print(create_large_list(10**10))  # May cause MemoryError',
  hint: 'MemoryError occurs when an operation runs out of memory.'
},
{
  id: 'py_ex_28',
  topicId: 'py_exceptional_handling',
  question: 'Create a function that safely converts string to number with error handling.',
  mathSolution: 'Handle multiple conversion errors and provide meaningful messages.',
  codeSolution: 'def safe_convert_to_number(value):\n    try:\n        return int(value)\n    except ValueError:\n        try:\n            return float(value)\n        except ValueError:\n            return f"Cannot convert {value} to a number"\n        except TypeError:\n            return f"Invalid type: {type(value).__name__}"\n\n# Test cases\nprint(safe_convert_to_number("123"))    # Output: 123\nprint(safe_convert_to_number("45.67"))  # Output: 45.67\nprint(safe_convert_to_number("abc"))    # Output: Cannot convert abc to a number',
  hint: 'Nested try-except blocks can handle different conversion attempts.'
},
{
  id: 'py_ex_29',
  topicId: 'py_exceptional_handling',
  question: 'Handle PermissionError when accessing files without proper permissions.',
  mathSolution: 'Catch PermissionError when file operations are not allowed.',
  codeSolution: 'def write_to_file(filename, content):\n    try:\n        # Simulate file write operation\n        # In a real environment, this would be: with open(filename, "w") as file:\n        if filename == "/protected/file.txt":\n            raise PermissionError("Permission denied")\n        elif filename == "/dev/null":\n            raise IsADirectoryError("Is a directory")\n        else:\n            return f"Successfully wrote to {filename}"\n    except PermissionError:\n        return f"No permission to write to {filename}"\n    except IsADirectoryError:\n        return f"{filename} is a directory, not a file"\n\n# Test cases\nprint(write_to_file("user_file.txt", "Hello World"))  # Output: Successfully wrote to user_file.txt\nprint(write_to_file("/protected/file.txt", "Secret"))  # Output: No permission to write to /protected/file.txt\nprint(write_to_file("/dev/null", "Data"))  # Output: /dev/null is a directory, not a file',
  hint: 'PermissionError occurs when you don\'t have the required permissions for an operation. This example demonstrates exception handling without actual file operations.'
},
{
  id: 'py_ex_30',
  topicId: 'py_exceptional_handling',
  question: 'Implement a retry decorator with exponential backoff.',
  mathSolution: 'Use a decorator that retries failed operations with increasing delays.',
  codeSolution: 'import time\n\ndef retry_with_backoff(max_retries=3, initial_delay=1):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            delay = initial_delay\n            for attempt in range(max_retries):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        return f"Failed after {max_retries} attempts: {e}"\n                    print(f"Attempt {attempt + 1} failed: {e}. Retrying in {delay}s...")\n                    time.sleep(delay)\n                    delay *= 2  # Exponential backoff\n            return None\n        return wrapper\n    return decorator\n\n# Test case\n@retry_with_backoff(max_retries=3, initial_delay=0.5)\ndef unstable_network_call():\n    import random\n    if random.random() < 0.7:\n        raise ConnectionError("Network timeout")\n    return "Success"\n\nprint(unstable_network_call())  # May succeed or show retry attempts',
  hint: 'Exponential backoff increases delay between retries to avoid overwhelming services.'
},
{
  id: 'py_ex_31',
  topicId: 'py_exceptional_handling',
  question: 'Handle ConnectionError for network operations.',
  mathSolution: 'Catch network-related errors when making HTTP requests.',
  codeSolution: 'import urllib.request\nimport urllib.error\n\ndef fetch_url(url):\n    try:\n        response = urllib.request.urlopen(url, timeout=5)\n        content = response.read().decode(\'utf-8\')\n        return f"Success: {len(content)} bytes retrieved"\n    except urllib.error.URLError as e:\n        if "timed out" in str(e).lower():\n            return f"Request to {url} timed out"\n        else:\n            return f"Failed to connect to {url}: {e.reason}"\n    except ConnectionError:\n        return f"Connection error to {url}"\n    except Exception as e:\n        return f"Error: {type(e).__name__} - {e}"\n\n# Test cases with mock/simulated responses\ndef test_fetch_url():\n    # Test with an invalid URL (will show connection error)\n    print(fetch_url("https://nonexistent-domain-xyz123.com"))\n    \n    # Test with invalid URL format\n    print(fetch_url("not_a_valid_url"))\n    \n    print("Network error handling demonstration completed")\n\ntest_fetch_url()',
  hint: 'ConnectionError occurs when network operations fail. Use urllib which is built into Python.'
},
{
  id: 'py_ex_32',
  topicId: 'py_exceptional_handling',
  question: 'Create a safe dictionary access with nested key handling.',
  mathSolution: 'Handle KeyError at multiple levels when accessing nested dictionaries.',
  codeSolution: 'def safe_nested_get(data, default=None, *keys):\n    current = data\n    for key in keys:\n        try:\n            current = current[key]\n        except (KeyError, TypeError, IndexError):\n            return default\n    return current\n\n# Test cases\nuser_data = {"user": {"profile": {"name": "John", "age": 30}}}\nprint(safe_nested_get(user_data, "Unknown", "user", "profile", "name"))  # Output: John\nprint(safe_nested_get(user_data, "Unknown", "user", "profile", "city"))   # Output: Unknown\nprint(safe_nested_get(user_data, "Unknown", "user", "address", "street"))  # Output: Unknown',
  hint: 'Handle multiple exception types when navigating through nested structures.'
},
{
  id: 'py_ex_33',
  topicId: 'py_exceptional_handling',
  question: 'Handle SystemExit and KeyboardInterrupt gracefully.',
  mathSolution: 'Catch system-level exceptions to perform cleanup before exiting.',
  codeSolution: 'def main_loop():\n    count = 0\n    try:\n        while count < 10:\n            count += 1\n            print(f"Running iteration {count}")\n            if count == 5:\n                import sys\n                sys.exit(0)  # Simulate system exit\n    except KeyboardInterrupt:\n        print("\\nReceived interrupt signal. Cleaning up...")\n    except SystemExit:\n        print("System exit requested. Performing cleanup...")\n    finally:\n        print("Cleanup completed. Goodbye!")\n\n# Test case\nprint("Starting main loop...")\nmain_loop()',
  hint: 'SystemExit is raised by sys.exit(), KeyboardInterrupt by Ctrl+C.'
},
{
  id: 'py_ex_34',
  topicId: 'py_exceptional_handling',
  question: 'Implement a circuit breaker pattern for fault-tolerant systems.',
  mathSolution: 'Track failures and temporarily disable operations after threshold.',
  codeSolution: 'import time\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=3, timeout=5):\n        self.failure_threshold = failure_threshold\n        self.timeout = timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = "CLOSED"  # CLOSED, OPEN, HALF_OPEN\n    \n    def execute(self, func, *args, **kwargs):\n        if self.state == "OPEN":\n            if time.time() - self.last_failure_time > self.timeout:\n                self.state = "HALF_OPEN"\n            else:\n                return "Circuit breaker is OPEN - operation blocked"\n        \n        try:\n            result = func(*args, **kwargs)\n            if self.state == "HALF_OPEN":\n                self.state = "CLOSED"\n                self.failure_count = 0\n                print("Circuit breaker closed -恢复正常")\n            return result\n        except Exception as e:\n            self.failure_count += 1\n            self.last_failure_time = time.time()\n            if self.failure_count >= self.failure_threshold:\n                self.state = "OPEN"\n                print(f"Circuit breaker OPEN after {self.failure_count} failures")\n            return f"Operation failed: {e}"\n\n# Test cases\ncb = CircuitBreaker(failure_threshold=2, timeout=3)\n\nfailing_func = lambda: (_ for _ in ()).throw(Exception("Service unavailable"))\nprint(cb.execute(lambda: "Success"))  # Output: Success\nprint(cb.execute(failing_func))  # Output: Operation failed\nprint(cb.execute(failing_func))  # Output: Circuit breaker OPEN\nprint(cb.execute(lambda: "Success"))  # Output: Circuit breaker is OPEN',
  hint: 'Circuit breaker prevents repeated calls to failing services.'
},
{
  id: 'py_ex_35',
  topicId: 'py_exceptional_handling',
  question: 'Handle JSON decode errors gracefully.',
  mathSolution: 'Catch JSONDecodeError when parsing invalid JSON data.',
  codeSolution: 'import json\n\ndef safe_json_parse(json_string):\n    try:\n        return json.loads(json_string)\n    except json.JSONDecodeError as e:\n        return f"Invalid JSON: {e.msg} at position {e.pos}"\n    except TypeError as e:\n        return f"Expected string, got {type(json_string).__name__}"\n\n# Test cases\nprint(safe_json_parse(\'{"name": "Alice", "age": 25}\'))  # Output: {\'name\': \'Alice\', \'age\': 25}\nprint(safe_json_parse(\'{"name": "Alice"\'))  # Output: Invalid JSON: Expecting value at position 15\nprint(safe_json_parse(123))  # Output: Expected string, got int',
  hint: 'JSONDecodeError provides detailed information about parsing failures.'
},
{
  id: 'py_ex_36',
  topicId: 'py_exceptional_handling',
  question: 'Create a function that validates and converts date strings.',
  mathSolution: 'Handle ValueError when parsing invalid date formats.',
  codeSolution: 'from datetime import datetime\n\ndef parse_date(date_string, format="%Y-%m-%d"):\n    try:\n        return datetime.strptime(date_string, format)\n    except ValueError as e:\n        return f"Invalid date format: {e}"\n    except TypeError:\n        return f"Expected string, got {type(date_string).__name__}"\n\n# Test cases\nprint(parse_date("2024-01-15"))  # Output: 2024-01-15 00:00:00\nprint(parse_date("15/01/2024", "%d/%m/%Y"))  # Output: 2024-01-15 00:00:00\nprint(parse_date("invalid-date"))  # Output: Invalid date format: ...',
  hint: 'datetime.strptime raises ValueError for invalid date strings.'
},
{
  id: 'py_ex_37',
  topicId: 'py_exceptional_handling',
  question: 'Handle ArithmeticError for mathematical operation failures.',
  mathSolution: 'ArithmeticError is the base class for various math-related exceptions.',
  codeSolution: 'def safe_math_operation(func):\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except ArithmeticError as e:\n            return f"Mathematical error: {e}"\n    return wrapper\n\n@safe_math_operation\ndef divide(a, b):\n    return a / b\n\n@safe_math_operation\ndef large_power(base, exp):\n    return base ** exp\n\n# Test cases\nprint(divide(10, 2))   # Output: 5.0\nprint(divide(10, 0))   # Output: Mathematical error: division by zero\nprint(large_power(2, 1000))  # Output: Very large number (works)',
  hint: 'ArithmeticError includes ZeroDivisionError, OverflowError, and FloatingPointError.'
},
{
  id: 'py_ex_38',
  topicId: 'py_exceptional_handling',
  question: 'Implement a fallback mechanism when primary operation fails.',
  mathSolution: 'Use try-except to fall back to alternative methods.',
  codeSolution: 'def read_data_with_fallback(primary_file, backup_file):\n    try:\n        with open(primary_file, "r") as f:\n            return f.read()\n    except FileNotFoundError:\n        print(f"Primary file {primary_file} not found. Trying backup...")\n        try:\n            with open(backup_file, "r") as f:\n                return f.read()\n        except FileNotFoundError:\n            return "No data sources available"\n    except PermissionError:\n        return f"No permission to read {primary_file}"\n\n# Test cases\nprint(read_data_with_fallback("primary.txt", "backup.txt"))  # Tries both files\n# Create test files to see fallback in action',
  hint: 'Nested try-except blocks provide multiple fallback levels.'
},
{
  id: 'py_ex_39',
  topicId: 'py_exceptional_handling',
  question: 'Handle EOFError when reading beyond file end.',
  mathSolution: 'Catch EOFError when input operations reach end of file unexpectedly.',
  codeSolution: 'from io import StringIO\n\ndef safe_read_lines(file_obj):\n    lines = []\n    try:\n        while True:\n            line = file_obj.readline()\n            if not line:\n                break\n            lines.append(line.strip())\n    except EOFError:\n        print("Reached end of file")\n    return lines\n\n# Test case 1: Using StringIO instead of actual file (no file system needed)\nprint("Test Case 1 - Normal reading:")\ndata = "Line 1\\nLine 2\\nLine 3"\nfile_obj = StringIO(data)\nresult = safe_read_lines(file_obj)\nprint(result)  # Output: ["Line 1", "Line 2", "Line 3"]\n\n# Test case 2: Simulating EOFError\nprint("\\nTest Case 2 - Simulating EOFError:")\nclass EOFGenerator:\n    def __init__(self):\n        self.calls = 0\n    \n    def readline(self):\n        self.calls += 1\n        if self.calls == 1:\n            return "First line\\n"\n        elif self.calls == 2:\n            return "Second line\\n"\n        else:\n            raise EOFError("End of file reached")\n\nmock_file = EOFGenerator()\nresult2 = safe_read_lines(mock_file)\nprint(f"Lines read before EOFError: {result2}")  # Output: ["First line", "Second line"]\n\n# Test case 3: Empty content\nprint("\\nTest Case 3 - Empty content:")\nempty_file = StringIO("")\nresult3 = safe_read_lines(empty_file)\nprint(result3)  # Output: []',
  hint: 'EOFError occurs when input functions hit end-of-file unexpectedly. Use StringIO to simulate file operations without actual file system access.'
},
{
  id: 'py_ex_40',
  topicId: 'py_exceptional_handling',
  question: 'Create a context manager that handles exceptions and rolls back changes.',
  mathSolution: 'Use context manager with exception handling to implement transaction-like behavior.',
  codeSolution: 'class Transaction:\n    def __init__(self):\n        self.changes = []\n        self.committed = False\n    \n    def __enter__(self):\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if exc_type is not None:\n            print(f"Error occurred: {exc_val}. Rolling back changes...")\n            self.rollback()\n        else:\n            self.commit()\n        return False  # Don\'t suppress exceptions\n    \n    def add_change(self, change):\n        self.changes.append(change)\n    \n    def commit(self):\n        print(f"Committing changes: {self.changes}")\n        self.committed = True\n    \n    def rollback(self):\n        print(f"Rolling back changes: {self.changes}")\n        self.changes = []\n\n# Test cases\nprint("Successful transaction:")\nwith Transaction() as t:\n    t.add_change("Update user profile")\n    t.add_change("Add to log")\n    print("Transaction completed without errors")\n\nprint("\\nFailed transaction:")\ntry:\n    with Transaction() as t:\n        t.add_change("Update database")\n        t.add_change("Send email")\n        raise ValueError("Something went wrong")\nexcept ValueError:\n    print("Handled exception outside context")',
  hint: 'Context managers can automatically handle cleanup and rollback on exceptions.'
},
{
  id: 'py_ex_41',
  topicId: 'py_exceptional_handling',
  question: 'Handle NotImplementedError for abstract methods.',
  mathSolution: 'Raise NotImplementedError in base class methods that should be overridden.',
  codeSolution: 'class Shape:\n    def area(self):\n        raise NotImplementedError("Subclasses must implement area()")\n    \n    def perimeter(self):\n        raise NotImplementedError("Subclasses must implement perimeter()")\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14 * self.radius ** 2\n    \n    # perimeter not implemented\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n    \n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\n# Test cases\ncircle = Circle(5)\nprint(f"Circle area: {circle.area()}")  # Output: Circle area: 78.5\ntry:\n    print(circle.perimeter())  # Raises NotImplementedError\nexcept NotImplementedError as e:\n    print(f"Error: {e}")  # Output: Error: Subclasses must implement perimeter()\n\nrectangle = Rectangle(4, 6)\nprint(f"Rectangle area: {rectangle.area()}")  # Output: Rectangle area: 24\nprint(f"Rectangle perimeter: {rectangle.perimeter()}")  # Output: Rectangle perimeter: 20',
  hint: 'NotImplementedError indicates that a method needs to be implemented in a subclass.'
},
{
  id: 'py_ex_42',
  topicId: 'py_exceptional_handling',
  question: 'Handle OSError and its subclasses for system-related errors.',
  mathSolution: 'Catch OSError for various operating system related failures.',
  codeSolution: 'def safe_file_operation(filename):\n    try:\n        with open(filename, "r") as f:\n            return f.read()\n    except OSError as e:\n        error_messages = {\n            "FileNotFoundError": "File not found",\n            "PermissionError": "Permission denied",\n            "IsADirectoryError": "Path is a directory",\n        }\n        error_type = type(e).__name__\n        return f"{error_messages.get(error_type, str(e))}: {filename}"\n\n# Test cases\nprint(safe_file_operation("nonexistent.txt"))  # Output: File not found: nonexistent.txt\nprint(safe_file_operation("."))  # Output: Path is a directory: .',
  hint: 'OSError is the parent class for many file and system-related exceptions.'
},
{
  id: 'py_ex_43',
  topicId: 'py_exceptional_handling',
  question: 'Create a rate limiter that handles too many requests.',
  mathSolution: 'Use exception handling to enforce rate limits.',
  codeSolution: 'import time\n\nclass RateLimitExceeded(Exception):\n    pass\n\nclass RateLimiter:\n    def __init__(self, max_calls, period):\n        self.max_calls = max_calls\n        self.period = period\n        self.calls = []\n    \n    def __call__(self, func):\n        def wrapper(*args, **kwargs):\n            now = time.time()\n            # Remove old calls\n            self.calls = [call for call in self.calls if now - call < self.period]\n            \n            if len(self.calls) >= self.max_calls:\n                raise RateLimitExceeded(f"Rate limit exceeded. Max {self.max_calls} calls per {self.period} seconds")\n            \n            self.calls.append(now)\n            return func(*args, **kwargs)\n        return wrapper\n\n@RateLimiter(max_calls=2, period=5)\ndef api_call():\n    return "API response"\n\n# Test cases\nprint(api_call())  # Output: API response\nprint(api_call())  # Output: API response\ntry:\n    print(api_call())  # Raises RateLimitExceeded\nexcept RateLimitExceeded as e:\n    print(f"Error: {e}")  # Output: Error: Rate limit exceeded...',
  hint: 'Rate limiting prevents excessive API calls by raising exceptions when limits exceeded.'
},
{
  id: 'py_ex_44',
  topicId: 'py_exceptional_handling',
  question: 'Handle BufferError when buffer operations fail.',
  mathSolution: 'Catch BufferError when working with buffer protocols fails.',
  codeSolution: 'def process_buffer(data):\n    try:\n        # Create a memoryview\n        view = memoryview(data)\n        # Try to modify buffer\n        view[0] = 0\n        return bytes(view)\n    except BufferError as e:\n        return f"Buffer operation failed: {e}"\n    except TypeError as e:\n        return f"Cannot create buffer from {type(data).__name__}: {e}"\n\n# Test cases\nbyte_data = bytearray([1, 2, 3, 4, 5])\nprint(process_buffer(byte_data))  # Output: bytearray(b\'\\x00\\x02\\x03\\x04\\x05\')\nprint(process_buffer("string"))  # Output: Cannot create buffer from str: cannot modify read-only buffer',
  hint: 'BufferError occurs when buffer operations cannot be performed.'
},
{
  id: 'py_ex_45',
  topicId: 'py_exceptional_handling',
  question: 'Implement a validation chain that collects all errors.',
  mathSolution: 'Collect multiple validation errors instead of raising first one.',
  codeSolution: 'class ValidationError(Exception):\n    def __init__(self, errors):\n        self.errors = errors\n        super().__init__(f"Validation failed: {len(errors)} errors")\n\ndef validate_user_data(data):\n    errors = []\n    \n    # Validate name\n    if "name" not in data:\n        errors.append("Name is required")\n    elif len(data["name"]) < 2:\n        errors.append("Name must be at least 2 characters")\n    \n    # Validate age\n    if "age" not in data:\n        errors.append("Age is required")\n    else:\n        try:\n            age = int(data["age"])\n            if age < 0 or age > 150:\n                errors.append("Age must be between 0 and 150")\n        except ValueError:\n            errors.append("Age must be a number")\n    \n    # Validate email\n    if "email" in data and "@" not in data["email"]:\n        errors.append("Invalid email format")\n    \n    if errors:\n        raise ValidationError(errors)\n    return "Validation successful"\n\n# Test cases\ntry:\n    print(validate_user_data({"name": "A", "age": "abc"}))\nexcept ValidationError as e:\n    print(f"Error: {e}")\n    for error in e.errors:\n        print(f"  - {error}")\n\n# Output will show all validation errors collected',
  hint: 'Collect all errors in a list and raise a single exception with all errors.'
},
{
  id: 'py_ex_46',
  topicId: 'py_exceptional_handling',
  question: 'Handle LookupError for collection access failures.',
  mathSolution: 'LookupError is the base class for IndexError and KeyError.',
  codeSolution: 'def safe_collection_access(collection, key_or_index):\n    try:\n        return collection[key_or_index]\n    except LookupError as e:\n        if isinstance(e, IndexError):\n            return f"Index {key_or_index} out of range"\n        elif isinstance(e, KeyError):\n            return f"Key {key_or_index} not found"\n        else:\n            return f"Lookup error: {e}"\n\n# Test cases\nmy_list = [10, 20, 30, 40, 50]\nmy_dict = {"a": 1, "b": 2, "c": 3}\n\nprint(safe_collection_access(my_list, 2))   # Output: 30\nprint(safe_collection_access(my_list, 10))  # Output: Index 10 out of range\nprint(safe_collection_access(my_dict, "b")) # Output: 2\nprint(safe_collection_access(my_dict, "z")) # Output: Key z not found',
  hint: 'LookupError handles both invalid indices and missing keys.'
},
{
  id: 'py_ex_47',
  topicId: 'py_exceptional_handling',
  question: 'Create a graceful shutdown handler for long-running processes.',
  mathSolution: 'Handle various signals and exceptions to shutdown gracefully.',
  codeSolution: 'import signal\nimport sys\nimport time\n\nclass GracefulShutdown:\n    def __init__(self):\n        self.shutdown_requested = False\n    \n    def setup_handlers(self):\n        signal.signal(signal.SIGINT, self.handle_shutdown)\n        signal.signal(signal.SIGTERM, self.handle_shutdown)\n    \n    def handle_shutdown(self, signum, frame):\n        print(f"\\nReceived shutdown signal {signum}")\n        self.shutdown_requested = True\n    \n    def run(self, main_func, max_iterations=5):\n        self.setup_handlers()\n        iteration = 0\n        try:\n            while not self.shutdown_requested and iteration < max_iterations:\n                iteration += 1\n                print(f"Working... iteration {iteration}")\n                main_func()\n                time.sleep(1)\n        except Exception as e:\n            print(f"Error during execution: {e}")\n        finally:\n            print("Performing cleanup...")\n            print("Shutdown complete")\n\n# Test case\ndef main_work():\n    print("Processing data...")\n\nshutdown_handler = GracefulShutdown()\nshutdown_handler.run(main_work)\nprint("Program completed normally")',
  hint: 'Handle signals to allow graceful shutdown on Ctrl+C or termination.'
},
{
  id: 'py_ex_48',
  topicId: 'py_exceptional_handling',
  question: 'Handle FloatingPointError for floating-point operation failures.',
  mathSolution: 'Catch FloatingPointError when floating-point calculations produce errors.',
  codeSolution: 'import math\n\ndef safe_floating_operation(func):\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except FloatingPointError as e:\n            return f"Floating point error: {e}"\n        except OverflowError:\n            return "Result too large"\n        except ZeroDivisionError:\n            return "Division by zero"\n    return wrapper\n\n@safe_floating_operation\ndef compute_reciprocal(x):\n    return 1.0 / x\n\n@safe_floating_operation\ndef compute_log(x):\n    if x <= 0:\n        raise ValueError("Cannot compute log of non-positive number")\n    return math.log(x)\n\n# Test cases\nprint(compute_reciprocal(2))   # Output: 0.5\nprint(compute_reciprocal(0))   # Output: Division by zero\nprint(compute_log(10))         # Output: 2.302585092994046\n\ntry:\n    print(compute_log(-5))      # Raises ValueError\nexcept ValueError as e:\n    print(f"Error: {e}")',
  hint: 'FloatingPointError occurs when floating-point operations fail (rare in standard Python).'
},
{
  id: 'py_ex_49',
  topicId: 'py_exceptional_handling',
  question: 'Handle BrokenPipeError when writing to closed pipes.',
  mathSolution: 'Catch BrokenPipeError when communication with subprocess fails.',
  codeSolution: 'import subprocess\n\ndef communicate_with_process(command, input_data):\n    try:\n        process = subprocess.Popen(\n            command,\n            stdin=subprocess.PIPE,\n            stdout=subprocess.PIPE,\n            stderr=subprocess.PIPE,\n            text=True\n        )\n        stdout, stderr = process.communicate(input=input_data, timeout=5)\n        return stdout if stdout else "No output"\n    except BrokenPipeError:\n        return "Pipe broken: process may have crashed"\n    except subprocess.TimeoutExpired:\n        process.kill()\n        return "Process timed out"\n    except subprocess.CalledProcessError as e:\n        return f"Process failed with error: {e}"\n    except FileNotFoundError:\n        return "Command not found"\n\n# Test cases\nprint(communicate_with_process(["echo", "Hello"], None))  # Output: Hello\nprint(communicate_with_process(["nonexistentcommand"], None))  # Output: Command not found',
  hint: 'BrokenPipeError occurs when writing to a pipe that has been closed.'
},
{
  id: 'py_ex_50',
  topicId: 'py_exceptional_handling',
  question: 'Create a comprehensive error handling system with custom error types.',
  mathSolution: 'Design a hierarchy of custom exceptions for different error categories.',
  codeSolution: 'class ApplicationError(Exception):\n    """Base class for application exceptions"""\n    def __init__(self, message, code=None):\n        self.message = message\n        self.code = code\n        super().__init__(message)\n\nclass ValidationError(ApplicationError):\n    """Raised when data validation fails"""\n    def __init__(self, message, field=None, code="VALIDATION_ERROR"):\n        self.field = field\n        super().__init__(message, code)\n\nclass DatabaseError(ApplicationError):\n    """Raised when database operations fail"""\n    def __init__(self, message, query=None, code="DB_ERROR"):\n        self.query = query\n        super().__init__(message, code)\n\nclass AuthenticationError(ApplicationError):\n    """Raised when authentication fails"""\n    def __init__(self, message, user=None, code="AUTH_ERROR"):\n        self.user = user\n        super().__init__(message, code)\n\n# Usage example\ndef process_user_registration(user_data):\n    try:\n        # Validate data\n        if "email" not in user_data:\n            raise ValidationError("Email is required", field="email")\n        \n        if "username" not in user_data:\n            raise ValidationError("Username is required", field="username")\n        \n        # Check authentication\n        if not user_data.get("authenticated", False):\n            raise AuthenticationError("User not authenticated", user=user_data.get("username"))\n        \n             \n    except ApplicationError as e:\n        # Build error response with all details\n        error_response = {\n            "error": e.message,\n            "code": e.code,\n            "type": type(e).__name__\n        }\n        # Add specific fields based on error type\n        if isinstance(e, ValidationError) and e.field:\n            error_response["field"] = e.field\n        if isinstance(e, DatabaseError) and e.query:\n            error_response["query"] = e.query\n        if isinstance(e, AuthenticationError) and e.user:\n            error_response["user"] = e.user\n        \n        return error_response\n\n# Test cases\nprint(process_user_registration({"authenticated": True}))  # Validation error - missing email\nprint(process_user_registration({"email": "test@test.com", "authenticated": True}))  # Validation error - missing username\nprint(process_user_registration({"email": "test@test.com", "username": "john", "authenticated": True}))  # Success',
  hint: 'Create a hierarchy of custom exceptions for better error handling and debugging.'
},
//filehandling
{
  id: 'py_file_1',
  topicId: 'py_file_handling',
  question: 'Open a text file in read mode and display its contents.',
  mathSolution: 'Use open() function with "r" mode and read the file content.',
  codeSolution: 'def read_file(filename):\n    try:\n        file = open(filename, "r")\n        content = file.read()\n        file.close()\n        return content\n    except FileNotFoundError:\n        return f"File {filename} not found"',
  hint: 'Always close the file after reading to free resources.'
},
{
  id: 'py_file_2',
  topicId: 'py_file_handling',
  question: 'Write user input to a text file using write mode.',
  mathSolution: 'Use open() with "w" mode to write data to a file (overwrites existing content).',
  codeSolution: 'def write_to_file(filename, text):\n    file = open(filename, "w")\n    file.write(text)\n    file.close()\n    return f"Data written to {filename}"',
  hint: 'Write mode creates a new file or truncates existing file.'
},
{
  id: 'py_file_3',
  topicId: 'py_file_handling',
  question: 'Append data to an existing file without overwriting.',
  mathSolution: 'Use "a" mode to append content at the end of the file.',
  codeSolution: 'def append_to_file(filename, text):\n    file = open(filename, "a")\n    file.write(text + "\\n")\n    file.close()\n    return f"Data appended to {filename}"',
  hint: 'Append mode creates the file if it doesn\'t exist.'
},
{
  id: 'py_file_4',
  topicId: 'py_file_handling',
  question: 'Read a file line by line using readline() method.',
  mathSolution: 'Use readline() in a loop to read one line at a time.',
  codeSolution: 'def read_file_line_by_line(filename):\n    file = open(filename, "r")\n    lines = []\n    while True:\n        line = file.readline()\n        if not line:\n            break\n        lines.append(line.strip())\n    file.close()\n    return lines',
  hint: 'readline() returns empty string when end of file is reached.'
},
{
  id: 'py_file_5',
  topicId: 'py_file_handling',
  question: 'Read all lines of a file into a list using readlines().',
  mathSolution: 'readlines() returns a list containing each line as a list item.',
  codeSolution: 'def read_all_lines(filename):\n    file = open(filename, "r")\n    lines = file.readlines()\n    file.close()\n    # Remove newline characters\n    return [line.strip() for line in lines]',
  hint: 'readlines() keeps the newline characters at the end of each line.'
},
{
  id: 'py_file_6',
  topicId: 'py_file_handling',
  question: 'Use the with statement (context manager) for automatic file closing.',
  mathSolution: 'The with statement ensures file is properly closed after operations.',
  codeSolution: 'def safe_read(filename):\n    with open(filename, "r") as file:\n        content = file.read()\n        return content\n    # File automatically closed here',
  hint: 'Context manager eliminates the need for explicit close().'
},
{
  id: 'py_file_7',
  topicId: 'py_file_handling',
  question: 'Count the number of lines, words, and characters in a text file.',
  mathSolution: 'Read file and count lines, split words, and count characters.',
  codeSolution: 'def count_file_stats(filename):\n    with open(filename, "r") as file:\n        content = file.read()\n        lines = len(content.split("\\n"))\n        words = len(content.split())\n        chars = len(content)\n        return {"lines": lines, "words": words, "characters": chars}',
  hint: 'Use split() without arguments to split on whitespace for word count.'
},
{
  id: 'py_file_8',
  topicId: 'py_file_handling',
  question: 'Copy contents from one file to another.',
  mathSolution: 'Read from source file and write to destination file.',
  codeSolution: 'def copy_file(source, destination):\n    with open(source, "r") as src:\n        content = src.read()\n    with open(destination, "w") as dest:\n        dest.write(content)\n    return f"File copied from {source} to {destination}"',
  hint: 'Use separate with statements or nested with statements.'
},
{
  id: 'py_file_9',
  topicId: 'py_file_handling',
  question: 'Merge contents of multiple files into a single file.',
  mathSolution: 'Read each input file and write their contents to output file.',
  codeSolution: 'def merge_files(file_list, output_file):\n    with open(output_file, "w") as outfile:\n        for filename in file_list:\n            with open(filename, "r") as infile:\n                outfile.write(infile.read())\n                outfile.write("\\n")\n    return f"Merged {len(file_list)} files into {output_file}"',
  hint: 'Add separators between files for readability.'
},
{
  id: 'py_file_10',
  topicId: 'py_file_handling',
  question: 'Search for a specific word in a file and return line numbers.',
  mathSolution: 'Read line by line and check if word exists in each line.',
  codeSolution: 'def search_word(filename, word):\n    matches = []\n    with open(filename, "r") as file:\n        for line_num, line in enumerate(file, 1):\n            if word.lower() in line.lower():\n                matches.append((line_num, line.strip()))\n    return matches',
  hint: 'Use enumerate() to get line numbers starting from 1.'
},
{
  id: 'py_file_11',
  topicId: 'py_file_handling',
  question: 'Replace a specific word with another word in a file.',
  mathSolution: 'Read file, replace text, and write back to file.',
  codeSolution: 'def replace_word(filename, old_word, new_word):\n    with open(filename, "r") as file:\n        content = file.read()\n    content = content.replace(old_word, new_word)\n    with open(filename, "w") as file:\n        file.write(content)\n    return f"Replaced {old_word} with {new_word} in {filename}"',
  hint: 'Be careful with overwriting - consider creating a backup first.'
},
{
  id: 'py_file_12',
  topicId: 'py_file_handling',
  question: 'Read a specific line from a file by line number.',
  mathSolution: 'Use linecache module or iterate to desired line.',
  codeSolution: 'def read_specific_line(filename, line_number):\n    with open(filename, "r") as file:\n        for current_line, content in enumerate(file, 1):\n            if current_line == line_number:\n                return content.strip()\n    return f"Line {line_number} not found"',
  hint: 'Line numbers typically start from 1 in file operations.'
},
{
  id: 'py_file_13',
  topicId: 'py_file_handling',
  question: 'Check if a file exists before attempting to read it.',
  mathSolution: 'Use os.path.exists() or pathlib module to check file existence.',
  codeSolution: 'import os\n\ndef safe_file_read(filename):\n    if os.path.exists(filename):\n        with open(filename, "r") as file:\n            return file.read()\n    else:\n        return f"File {filename} does not exist"',
  hint: 'os.path.exists() returns True if file or directory exists.'
},
{
  id: 'py_file_14',
  topicId: 'py_file_handling',
  question: 'Get file size in bytes, KB, and MB.',
  mathSolution: 'Use os.path.getsize() to get file size in bytes.',
  codeSolution: 'import os\n\ndef get_file_size(filename):\n    if os.path.exists(filename):\n        bytes_size = os.path.getsize(filename)\n        kb_size = bytes_size / 1024\n        mb_size = kb_size / 1024\n        return {\n            "bytes": bytes_size,\n            "KB": round(kb_size, 2),\n            "MB": round(mb_size, 2)\n        }\n    return "File not found"',
  hint: '1 KB = 1024 bytes, 1 MB = 1024 KB.'
},
{
  id: 'py_file_15',
  topicId: 'py_file_handling',
  question: 'Get file creation and modification timestamps.',
  mathSolution: 'Use os.path.getctime() and os.path.getmtime() functions.',
  codeSolution: 'import os\nimport time\n\ndef get_file_timestamps(filename):\n    if os.path.exists(filename):\n        ctime = os.path.getctime(filename)  # creation time\n        mtime = os.path.getmtime(filename)  # modification time\n        return {\n            "created": time.ctime(ctime),\n            "modified": time.ctime(mtime)\n        }\n    return "File not found"',
  hint: 'getctime() returns creation time on Windows, change time on Unix.'
},
{
  id: 'py_file_16',
  topicId: 'py_file_handling',
  question: 'Rename and delete files using os module.',
  mathSolution: 'Use os.rename() and os.remove() for file operations.',
  codeSolution: 'import os\n\ndef rename_file(old_name, new_name):\n    if os.path.exists(old_name):\n        os.rename(old_name, new_name)\n        return f"File renamed to {new_name}"\n    return "File not found"\n\ndef delete_file(filename):\n    if os.path.exists(filename):\n        os.remove(filename)\n        return f"File {filename} deleted"\n    return "File not found"',
  hint: 'Be careful with delete operations as they are permanent.'
},
{
  id: 'py_file_17',
  topicId: 'py_file_handling',
  question: 'Create a directory and handle file operations within it.',
  mathSolution: 'Use os.makedirs() to create directories recursively.',
  codeSolution: 'import os\n\ndef create_and_write_file(directory, filename, content):\n    # Create directory if it doesn\'t exist\n    os.makedirs(directory, exist_ok=True)\n    \n    # Create full file path\n    filepath = os.path.join(directory, filename)\n    \n    with open(filepath, "w") as file:\n        file.write(content)\n    return f"File created at {filepath}"',
  hint: 'exist_ok=True prevents error if directory already exists.'
},
{
  id: 'py_file_18',
  topicId: 'py_file_handling',
  question: 'List all files in a directory with specific extension.',
  mathSolution: 'Use os.listdir() and filter by file extension.',
  codeSolution: 'import os\n\ndef list_files_by_extension(directory, extension):\n    files = []\n    for filename in os.listdir(directory):\n        if filename.endswith(extension):\n            files.append(filename)\n    return files',
  hint: 'Use os.path.isfile() to ensure you\'re only listing files, not directories.'
},
{
  id: 'py_file_19',
  topicId: 'py_file_handling',
  question: 'Read a CSV file and display its contents as dictionaries.',
  mathSolution: 'Use csv module to read CSV files with dictionary format.',
  codeSolution: 'import csv\n\ndef read_csv_as_dicts(filename):\n    data = []\n    with open(filename, "r") as file:\n        reader = csv.DictReader(file)\n        for row in reader:\n            data.append(row)\n    return data',
  hint: 'DictReader uses first row as field names automatically.'
},
{
  id: 'py_file_20',
  topicId: 'py_file_handling',
  question: 'Write data to a CSV file from a list of dictionaries.',
  mathSolution: 'Use csv.DictWriter to write dictionary data to CSV.',
  codeSolution: 'import csv\n\ndef write_csv_from_dicts(filename, data, fieldnames):\n    with open(filename, "w", newline="") as file:\n        writer = csv.DictWriter(file, fieldnames=fieldnames)\n        writer.writeheader()\n        writer.writerows(data)\n    return f"Data written to {filename}"',
  hint: 'newline="" prevents extra blank lines in CSV on Windows.'
},
{
  id: 'py_file_21',
  topicId: 'py_file_handling',
  question: 'Read a JSON file and parse its contents.',
  mathSolution: 'Use json module to load and parse JSON data.',
  codeSolution: 'import json\n\ndef read_json_file(filename):\n    with open(filename, "r") as file:\n        data = json.load(file)\n    return data',
  hint: 'JSON data is automatically converted to Python dictionaries/lists.'
},
{
  id: 'py_file_22',
  topicId: 'py_file_handling',
  question: 'Write Python data to a JSON file.',
  mathSolution: 'Use json.dump() to write Python objects to JSON file.',
  codeSolution: 'import json\n\ndef write_json_file(filename, data):\n    with open(filename, "w") as file:\n        json.dump(data, file, indent=4)\n    return f"Data written to {filename}"',
  hint: 'indent parameter makes the JSON file human-readable.'
},
{
  id: 'py_file_23',
  topicId: 'py_file_handling',
  question: 'Read a file in binary mode and display first few bytes.',
  mathSolution: 'Use "rb" mode to read file as binary data.',
  codeSolution: 'def read_binary_file(filename, num_bytes=100):\n    with open(filename, "rb") as file:\n        data = file.read(num_bytes)\n    return data',
  hint: 'Binary mode returns bytes objects instead of strings.'
},
{
  id: 'py_file_24',
  topicId: 'py_file_handling',
  question: 'Copy an image file from source to destination.',
  mathSolution: 'Read in binary mode and write in binary mode for non-text files.',
  codeSolution: 'def copy_image(source, destination):\n    with open(source, "rb") as src:\n        with open(destination, "wb") as dest:\n            dest.write(src.read())\n    return f"Image copied from {source} to {destination}"',
  hint: 'Always use binary mode ("rb"/"wb") for non-text files.'
},
{
  id: 'py_file_25',
  topicId: 'py_file_handling',
  question: 'Read a large file in chunks to manage memory efficiently.',
  mathSolution: 'Read file in fixed-size chunks instead of loading entire file.',
  codeSolution: 'def read_file_in_chunks(filename, chunk_size=1024):\n    chunks = []\n    with open(filename, "r") as file:\n        while True:\n            chunk = file.read(chunk_size)\n            if not chunk:\n                break\n            chunks.append(chunk)\n    return chunks',
  hint: 'Chunk size can be adjusted based on available memory.'
},
{
  id: 'py_file_26',
  topicId: 'py_file_handling',
  question: 'Find and replace text in a file using temporary file.',
  mathSolution: 'Create temporary file, write modified content, replace original.',
  codeSolution: 'import os\nimport tempfile\n\ndef safe_replace(filename, old_text, new_text):\n    # Create temporary file\n    with tempfile.NamedTemporaryFile(mode="w", delete=False) as temp:\n        with open(filename, "r") as original:\n            for line in original:\n                temp.write(line.replace(old_text, new_text))\n    \n    # Replace original with temporary file\n    os.replace(temp.name, filename)\n    return f"Text replaced in {filename}"',
  hint: 'Using temporary file prevents data loss if error occurs.'
},
{
  id: 'py_file_27',
  topicId: 'py_file_handling',
  question: 'Read file from specific offset position.',
  mathSolution: 'Use seek() to move file pointer to specific position.',
  codeSolution: 'def read_from_offset(filename, offset, num_bytes):\n    with open(filename, "r") as file:\n        file.seek(offset)\n        data = file.read(num_bytes)\n    return data',
  hint: 'seek(0) moves to beginning, seek(0, 2) moves to end of file.'
},
{
  id: 'py_file_28',
  topicId: 'py_file_handling',
  question: 'Get current file pointer position using tell().',
  mathSolution: 'tell() returns current position of file pointer.',
  codeSolution: 'def get_file_position(filename):\n    with open(filename, "r") as file:\n        file.read(50)  # Read first 50 characters\n        position = file.tell()\n    return f"File pointer at position: {position}"',
  hint: 'File pointer position is measured in bytes from beginning.'
},
{
  id: 'py_file_29',
  topicId: 'py_file_handling',
  question: 'Read last N lines of a file efficiently.',
  mathSolution: 'Use deque with maxlen to store last N lines while reading.',
  codeSolution: 'from collections import deque\n\ndef read_last_lines(filename, n=10):\n    with open(filename, "r") as file:\n        last_lines = deque(file, maxlen=n)\n    return list(last_lines)',
  hint: 'deque with maxlen maintains only the last n items efficiently.'
},
{
  id: 'py_file_30',
  topicId: 'py_file_handling',
  question: 'Create a file lock to prevent concurrent access.',
  mathSolution: 'Use fcntl (Linux) or msvcrt (Windows) for file locking.',
  codeSolution: 'import fcntl\n\ndef write_with_lock(filename, content):\n    with open(filename, "w") as file:\n        try:\n            # Acquire exclusive lock\n            fcntl.flock(file, fcntl.LOCK_EX | fcntl.LOCK_NB)\n            file.write(content)\n            file.flush()\n            # Release lock\n            fcntl.flock(file, fcntl.LOCK_UN)\n            return "Write successful"\n        except IOError:\n            return "File is locked by another process"',
  hint: 'File locking is platform-dependent. Use portalocker for cross-platform solution.'
},
{
  id: 'py_file_31',
  topicId: 'py_file_handling',
  question: 'Read a file and remove duplicate lines.',
  mathSolution: 'Use set to track seen lines while preserving order.',
  codeSolution: 'def remove_duplicate_lines(filename):\n    seen = set()\n    unique_lines = []\n    \n    with open(filename, "r") as file:\n        for line in file:\n            if line not in seen:\n                seen.add(line)\n                unique_lines.append(line)\n    \n    with open(filename, "w") as file:\n        file.writelines(unique_lines)\n    return f"Removed duplicates from {filename}"',
  hint: 'Use OrderedDict or set with list to preserve line order.'
},
{
  id: 'py_file_32',
  topicId: 'py_file_handling',
  question: 'Split a large file into multiple smaller files.',
  mathSolution: 'Read source file and write chunks to multiple output files.',
  codeSolution: 'def split_file(filename, lines_per_file=1000):\n    file_count = 1\n    with open(filename, "r") as source:\n        for line_count, line in enumerate(source, 1):\n            if line_count % lines_per_file == 1:\n                if file_count > 1:\n                    output.close()\n                output_name = f"{filename}_part{file_count}.txt"\n                output = open(output_name, "w")\n                file_count += 1\n            output.write(line)\n        output.close()\n    return f"File split into {file_count-1} parts"',
  hint: 'Close previous output file before opening new one.'
},
{
  id: 'py_file_33',
  topicId: 'py_file_handling',
  question: 'Create a temporary file for intermediate processing.',
  mathSolution: 'Use tempfile module to create temporary files.',
  codeSolution: 'import tempfile\nimport os\n\ndef process_with_temp(data):\n    # Create temporary file (deleted automatically when closed)\n    with tempfile.NamedTemporaryFile(mode="w+", delete=True) as temp:\n        temp.write(data)\n        temp.flush()\n        temp.seek(0)  # Go back to beginning\n        # Process temporary file\n        result = temp.read().upper()\n        return result',
  hint: 'Temporary files are automatically cleaned up when closed.'
},
{
  id: 'py_file_34',
  topicId: 'py_file_handling',
  question: 'Read file contents in reverse order (lines reversed).',
  mathSolution: 'Read all lines and reverse, or seek from end for large files.',
  codeSolution: 'def read_reverse(filename):\n    with open(filename, "r") as file:\n        lines = file.readlines()\n    return lines[::-1]  # Return reversed lines',
  hint: 'For very large files, read from end using seek().'
},
{
  id: 'py_file_35',
  topicId: 'py_file_handling',
  question: 'Create a file with specific permissions (Unix).',
  mathSolution: 'Use os.open() with mode parameter to set file permissions.',
  codeSolution: 'import os\n\ndef create_file_with_permissions(filename, content):\n    # Open with specific permissions (0o644 = rw-r--r--)\n    fd = os.open(filename, os.O_WRONLY | os.O_CREAT, 0o644)\n    with os.fdopen(fd, "w") as file:\n        file.write(content)\n    return f"File created with permissions 644"',
  hint: 'Permissions are specified in octal format (e.g., 0o755).'
},
{
  id: 'py_file_36',
  topicId: 'py_file_handling',
  question: 'Read a file and encrypt/decrypt its contents (simple Caesar cipher).',
  mathSolution: 'Apply character shifting for basic encryption.',
  codeSolution: 'def caesar_cipher(text, shift):\n    result = ""\n    for char in text:\n        if char.isalpha():\n            ascii_offset = 65 if char.isupper() else 97\n            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)\n        else:\n            result += char\n    return result\n\ndef encrypt_file(filename, shift):\n    with open(filename, "r") as file:\n        content = file.read()\n    encrypted = caesar_cipher(content, shift)\n    with open(filename + ".enc", "w") as file:\n        file.write(encrypted)\n    return f"File encrypted to {filename}.enc"',
  hint: 'Use negative shift for decryption.'
},
{
  id: 'py_file_37',
  topicId: 'py_file_handling',
  question: 'Compress and decompress files using gzip.',
  mathSolution: 'Use gzip module for file compression.',
  codeSolution: 'import gzip\n\ndef compress_file(filename):\n    with open(filename, "rb") as f_in:\n        with gzip.open(filename + ".gz", "wb") as f_out:\n            f_out.writelines(f_in)\n    return f"File compressed to {filename}.gz"\n\ndef decompress_file(gz_filename):\n    with gzip.open(gz_filename, "rb") as f_in:\n        with open(gz_filename[:-3], "wb") as f_out:\n            f_out.write(f_in.read())\n    return f"File decompressed from {gz_filename}"',
  hint: 'gzip works with binary mode for compression.'
},
{
  id: 'py_file_38',
  topicId: 'py_file_handling',
  question: 'Read and write Excel files using openpyxl.',
  mathSolution: 'Use openpyxl to work with Excel .xlsx files.',
  codeSolution: 'from openpyxl import Workbook, load_workbook\n\ndef create_excel_file(filename, data):\n    wb = Workbook()\n    ws = wb.active\n    ws.title = "Sheet1"\n    \n    # Write headers\n    headers = ["Name", "Age", "City"]\n    ws.append(headers)\n    \n    # Write data\n    for row in data:\n        ws.append(row)\n    \n    wb.save(filename)\n    return f"Excel file created: {filename}"\n\ndef read_excel_file(filename):\n    wb = load_workbook(filename)\n    ws = wb.active\n    data = []\n    for row in ws.iter_rows(values_only=True):\n        data.append(list(row))\n    return data',
  hint: 'Install openpyxl with: pip install openpyxl'
},
{
  id: 'py_file_39',
  topicId: 'py_file_handling',
  question: 'Monitor a file for changes (tail -f functionality).',
  mathSolution: 'Continuously check file size and read new lines.',
  codeSolution: 'import time\nimport os\n\ndef tail_file(filename, lines=10):\n    """Print last N lines and follow new lines"""\n    with open(filename, "r") as file:\n        # Go to end of file\n        file.seek(0, 2)\n        \n        while True:\n            line = file.readline()\n            if line:\n                print(line.strip())\n            else:\n                time.sleep(0.1)  # Wait for new data',
  hint: 'Use file.tell() to remember position between reads.'
},
{
  id: 'py_file_40',
  topicId: 'py_file_handling',
  question: 'Generate a file checksum (MD5) to verify integrity.',
  mathSolution: 'Use hashlib to compute file hash.',
  codeSolution: 'import hashlib\n\ndef file_checksum(filename):\n    hash_md5 = hashlib.md5()\n    with open(filename, "rb") as file:\n        for chunk in iter(lambda: file.read(4096), b""):\n            hash_md5.update(chunk)\n    return hash_md5.hexdigest()',
  hint: 'Read in chunks to handle large files efficiently.'
},

//modules&Packages
{
  id: 'py_mod_1',
  topicId: 'py_modules_packages',
  question: 'Import the math module and calculate the square root of 25.',
  mathSolution: 'Use import math then math.sqrt() function.',
  codeSolution: 'import math\nresult = math.sqrt(25)\nprint(result)  # Output: 5.0',
  hint: 'math.sqrt() returns floating point square root.'
},
{
  id: 'py_mod_2',
  topicId: 'py_modules_packages',
  question: 'Import only the sqrt function from math module.',
  mathSolution: 'Use from math import sqrt to import specific function.',
  codeSolution: 'from math import sqrt\nresult = sqrt(25)\nprint(result)  # Output: 5.0',
  hint: 'This allows using sqrt() directly without math prefix.'
},
{
  id: 'py_mod_3',
  topicId: 'py_modules_packages',
  question: 'Import math module with alias m and calculate pi value.',
  mathSolution: 'Use import math as m to create alias.',
  codeSolution: 'import math as m\nprint(m.pi)  # Output: 3.141592653589793',
  hint: 'Alias makes code shorter when module name is long.'
},
{
  id: 'py_mod_4',
  topicId: 'py_modules_packages',
  question: 'Use random module to generate a random integer between 1 and 10.',
  mathSolution: 'random.randint(a, b) returns random integer N such that a <= N <= b.',
  codeSolution: 'import random\nnum = random.randint(1, 10)\nprint(num)  # Random number between 1 and 10',
  hint: 'randint is inclusive of both endpoints.'
},
{
  id: 'py_mod_5',
  topicId: 'py_modules_packages',
  question: 'Use datetime module to get current date and time.',
  mathSolution: 'datetime.datetime.now() returns current date and time.',
  codeSolution: 'import datetime\nnow = datetime.datetime.now()\nprint(now)  # Output: YYYY-MM-DD HH:MM:SS.microseconds',
  hint: 'Use strftime() to format date in custom format.'
},
{
  id: 'py_mod_6',
  topicId: 'py_modules_packages',
  question: 'Create a custom module named mymath.py with add and subtract functions.',
  mathSolution: 'Create separate file with functions, then import.',
  codeSolution: '# Method 1: Simulate module using SimpleNamespace\nfrom types import SimpleNamespace\n\n# Create a module simulation\nmymath = SimpleNamespace()\n\n# Add functions to the module\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\nmymath.add = add\nmymath.subtract = subtract\n\n# Test the module\nprint("=== Custom Module Demo ===\\n")\nprint(f"add(10, 5) = {mymath.add(10, 5)}")      # Output: 15\nprint(f"subtract(10, 5) = {mymath.subtract(10, 5)}") # Output: 5\n\n# Method 2: Using a class as module alternative\nprint("\\n--- Alternative Method ---\\n")\n\nclass MyMath:\n    @staticmethod\n    def add(a, b):\n        return a + b\n    \n    @staticmethod\n    def subtract(a, b):\n        return a - b\n\nprint(f"add(20, 8) = {MyMath.add(20, 8)}")\nprint(f"subtract(20, 8) = {MyMath.subtract(20, 8)}")',
  hint: 'Module file must be in same directory or Python path. In single-file environment, use SimpleNamespace or class to simulate module.'
},
{
  id: 'py_mod_7',
  topicId: 'py_modules_packages',
  question: 'Use os module to get current working directory.',
  mathSolution: 'os.getcwd() returns current working directory path.',
  codeSolution: 'import os\ncwd = os.getcwd()\nprint(f"Current directory: {cwd}")',
  hint: 'os module provides operating system dependent functionality.'
},
{
  id: 'py_mod_8',
  topicId: 'py_modules_packages',
  question: 'Use sys module to get Python version and platform information.',
  mathSolution: 'sys.version gives Python version, sys.platform gives OS.',
  codeSolution: 'import sys\nprint(f"Python version: {sys.version}")\nprint(f"Platform: {sys.platform}")',
  hint: 'sys module provides access to interpreter variables.'
},
{
  id: 'py_mod_9',
  topicId: 'py_modules_packages',
  question: 'Use json module to convert Python dict to JSON string.',
  mathSolution: 'json.dumps() serializes Python object to JSON string.',
  codeSolution: 'import json\ndata = {"name": "Alice", "age": 25, "city": "New York"}\njson_str = json.dumps(data, indent=2)\nprint(json_str)',
  hint: 'indent parameter makes JSON human-readable.'
},
{
  id: 'py_mod_10',
  topicId: 'py_modules_packages',
  question: 'Use json module to parse JSON string into Python dict.',
  mathSolution: 'json.loads() parses JSON string to Python object.',
  codeSolution: 'import json\njson_str = \'{"name": "Bob", "age": 30, "city": "London"}\'\ndata = json.loads(json_str)\nprint(data["name"])  # Output: Bob\nprint(type(data))    # Output: <class \'dict\'>',
  hint: 'JSON keys become dictionary keys.'
},
{
  id: 'py_mod_11',
  topicId: 'py_modules_packages',
  question: 'Use re module to check if a string matches a pattern.',
  mathSolution: 're.match() checks if pattern matches at beginning of string.',
  codeSolution: 'import re\npattern = r"^[A-Z][a-z]*$"\ntext = "Hello"\nif re.match(pattern, text):\n    print("Valid: Starts with capital, followed by lowercase")\nelse:\n    print("Invalid")',
  hint: 'r before string denotes raw string (backslashes not escaped).'
},
{
  id: 'py_mod_12',
  topicId: 'py_modules_packages',
  question: 'Use re module to find all email addresses in a text.',
  mathSolution: 're.findall() returns all non-overlapping matches.',
  codeSolution: 'import re\ntext = "Contact us at info@example.com or support@test.org"\nemails = re.findall(r"[\\w.-]+@[\\w.-]+\\.\\w+", text)\nprint(emails)  # Output: ["info@example.com", "support@test.org"]',
  hint: 'Regular expression pattern matches email format.'
},
{
  id: 'py_mod_13',
  topicId: 'py_modules_packages',
  question: 'Use collections.Counter to count elements in a list.',
  mathSolution: 'Counter creates dictionary of element frequencies.',
  codeSolution: 'from collections import Counter\nitems = ["apple", "banana", "apple", "orange", "banana", "apple"]\ncounts = Counter(items)\nprint(counts)  # Output: Counter({"apple": 3, "banana": 2, "orange": 1})',
  hint: 'most_common() returns elements sorted by frequency.'
},
{
  id: 'py_mod_14',
  topicId: 'py_modules_packages',
  question: 'Use collections.defaultdict to create dictionary with default value.',
  mathSolution: 'defaultdict provides default value for missing keys.',
  codeSolution: 'from collections import defaultdict\n# Default value for missing keys is 0\nword_count = defaultdict(int)\nwords = ["apple", "banana", "apple"]\nfor word in words:\n    word_count[word] += 1\nprint(dict(word_count))  # Output: {"apple": 2, "banana": 1}',
  hint: 'int() returns 0, list() returns empty list, etc.'
},
{
  id: 'py_mod_15',
  topicId: 'py_modules_packages',
  question: 'Use collections.deque for efficient queue operations.',
  mathSolution: 'deque supports O(1) append and pop from both ends.',
  codeSolution: 'from collections import deque\nqueue = deque(["first", "second", "third"])\nqueue.append("fourth")      # Add to right end\nqueue.appendleft("zeroth")  # Add to left end\nprint(queue.popleft())       # Remove from left: "zeroth"\nprint(queue.pop())           # Remove from right: "fourth"',
  hint: 'deque is faster than list for insert/pop at beginning.'
},
{
  id: 'py_mod_16',
  topicId: 'py_modules_packages',
  question: 'Use itertools.permutations to generate all permutations of a list.',
  mathSolution: 'permutations returns all possible ordered arrangements.',
  codeSolution: 'from itertools import permutations\nitems = [1, 2, 3]\nperms = list(permutations(items, 2))\nprint(perms)  # Output: [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]',
  hint: 'Second argument specifies length of permutations.'
},
{
  id: 'py_mod_17',
  topicId: 'py_modules_packages',
  question: 'Use itertools.combinations to generate all combinations of a list.',
  mathSolution: 'combinations returns all possible unordered selections.',
  codeSolution: 'from itertools import combinations\nitems = [1, 2, 3, 4]\ncombs = list(combinations(items, 2))\nprint(combs)  # Output: [(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)]',
  hint: 'Order doesn\'t matter in combinations.'
},
{
  id: 'py_mod_18',
  topicId: 'py_modules_packages',
  question: 'Use itertools.product to generate Cartesian product of iterables.',
  mathSolution: 'product returns all possible ordered pairs from multiple iterables.',
  codeSolution: 'from itertools import product\ncolors = ["red", "green"]\nsizes = ["S", "M", "L"]\nproducts = list(product(colors, sizes))\nprint(products)  # Output: [("red","S"), ("red","M"), ("red","L"), ("green","S"), ("green","M"), ("green","L")]',
  hint: 'repeat parameter allows product with same iterable.'
},
{
  id: 'py_mod_19',
  topicId: 'py_modules_packages',
  question: 'Use itertools.cycle to cycle through elements infinitely.',
  mathSolution: 'cycle creates infinite iterator that repeats the iterable.',
  codeSolution: 'from itertools import cycle\ncolors = cycle(["red", "green", "blue"])\nfor i, color in enumerate(colors):\n    print(color)\n    if i == 5:  # Stop after 6 items\n        break\n# Output: red, green, blue, red, green, blue',
  hint: 'Be careful with infinite iterators - always have break condition.'
},
{
  id: 'py_mod_20',
  topicId: 'py_modules_packages',
  question: 'Use itertools.groupby to group adjacent elements.',
  mathSolution: 'groupby groups consecutive elements with same key.',
  codeSolution: 'from itertools import groupby\ndata = [1, 1, 2, 2, 2, 3, 3, 1, 1]\nfor key, group in groupby(data):\n    print(f"{key}: {list(group)}")\n# Output:\n# 1: [1, 1]\n# 2: [2, 2, 2]\n# 3: [3, 3]\n# 1: [1, 1]',
  hint: 'groupby only groups consecutive identical elements.'
},
{
  id: 'py_mod_21',
  topicId: 'py_modules_packages',
  question: 'Use functools.reduce to compute product of all numbers in a list.',
  mathSolution: 'reduce cumulatively applies function to pairs of elements.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 120',
  hint: 'reduce is in functools module (not built-in).'
},
{
  id: 'py_mod_22',
  topicId: 'py_modules_packages',
  question: 'Use functools.partial to create a function with fixed arguments.',
  mathSolution: 'partial binds values to some arguments of a function.',
  codeSolution: 'from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))  # Output: 25\nprint(cube(5))    # Output: 125',
  hint: 'partial is useful for creating specialized functions.'
},
{
  id: 'py_mod_23',
  topicId: 'py_modules_packages',
  question: 'Use functools.lru_cache to memoize Fibonacci function.',
  mathSolution: 'lru_cache caches results to avoid redundant computation.',
  codeSolution: 'from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(50))  # Fast even for large n',
  hint: 'lru_cache stores function results in a cache.'
},
{
  id: 'py_mod_19',
  topicId: 'py_modules_packages',
  question: 'Use itertools.cycle to cycle through elements infinitely.',
  mathSolution: 'cycle creates infinite iterator that repeats the iterable.',
  codeSolution: 'from itertools import cycle\ncolors = cycle(["red", "green", "blue"])\nfor i, color in enumerate(colors):\n    print(color)\n    if i == 5:  # Stop after 6 items\n        break\n# Output: red, green, blue, red, green, blue',
  hint: 'Be careful with infinite iterators - always have break condition.'
},
{
  id: 'py_mod_25',
  topicId: 'py_modules_packages',
  question: 'Use argparse module to parse command line arguments.',
  mathSolution: 'argparse creates command-line interfaces with argument parsing.',
  codeSolution: 'import argparse\n\nprint("=== Argparse Module Demonstration ===\\n")\n\n# Method 1: Simulating command line arguments\nprint("Method 1: Using parse_args() with simulated arguments\\n")\n\nparser = argparse.ArgumentParser(description="Process some integers.")\nparser.add_argument("numbers", metavar="N", type=int, nargs="+", help="an integer for the accumulator")\nparser.add_argument("--sum", dest="accumulate", action="store_const", const=sum, default=max, help="sum the integers (default: find the max)")\n\n# Simulate command line arguments\nprint("Simulating: python program.py 1 2 3 4 --sum")\nargs = parser.parse_args(["1", "2", "3", "4", "--sum"])\nprint(f"Result with --sum: {args.accumulate(args.numbers)}")\n\n# Simulate without --sum\nprint("\\nSimulating: python program.py 1 2 3 4")\nargs = parser.parse_args(["1", "2", "3", "4"])\nprint(f"Result without --sum (default max): {args.accumulate(args.numbers)}\")\n\n# Method 2: Show the help text\nprint("\\nMethod 2: Help text (use --help to see)\")\nprint(\"=\" * 50)\nparser.print_help()\n\nprint("\\n\\n=== How to use in real command line ===\")\nprint("python myprogram.py 1 2 3 4 --sum    # Output: 10\")\nprint(\"python myprogram.py 1 2 3 4         # Output: 4 (max)\")\nprint(\"python myprogram.py --help          # Shows help\")',
  hint: 'Run with --help to see automatically generated help. This demo simulates command line arguments.'
},
{
  id: 'py_mod_26',
  topicId: 'py_modules_packages',
  question: 'Use logging module to log messages with different severity levels.',
  mathSolution: 'logging provides flexible logging system.',
  codeSolution: 'import logging\n\nprint("=== Logging Module Tutorial ===\\n")\n\n# Configure logging\nlogging.basicConfig(\n    level=logging.INFO,\n    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",\n    datefmt="%H:%M:%S"\n)\n\nprint("Log messages being generated:\\n\")\n\n# Log different levels\nlogging.info("Application started\")\nlogging.warning("Low disk space warning\")\nlogging.error("Failed to connect to database\")\n\nprint(\"\\nOnly INFO, WARNING, and ERROR appear because level=INFO\")\nprint(\"DEBUG messages are ignored at this level\\n\")\n\nprint("To see DEBUG messages, change level=logging.DEBUG\")\nprint("Example: logging.basicConfig(level=logging.DEBUG)\")\n\nprint("\\n--- Log Format Components ---\")\nprint("%(asctime)s - Timestamp\")\nprint(\"%(name)s - Logger name\")\nprint(\"%(levelname)s - Severity level\")\nprint(\"%(message)s - The log message\")',
  hint: 'Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL.'
},
{
  id: 'py_mod_27',
  topicId: 'py_modules_packages',
  question: 'Use subprocess module to run system commands.',
  mathSolution: 'subprocess.run() executes command and returns result.',
  codeSolution: 'import subprocess\n\n# Run command and capture output\nresult = subprocess.run(["echo", "Hello World"], capture_output=True, text=True)\nprint(result.stdout)  # Output: Hello World\n\n# Check return code\nresult = subprocess.run(["ls", "nonexistent"], capture_output=True, text=True)\nprint(f"Return code: {result.returncode}")  # Non-zero for error',
  hint: 'capture_output=True captures stdout and stderr.'
},
{
  id: 'py_mod_28',
  topicId: 'py_modules_packages',
  question: 'Use pathlib module for path manipulation.',
  mathSolution: 'pathlib provides object-oriented filesystem paths.',
  codeSolution: 'from pathlib import Path\n\n# Create Path object\npath = Path("/home/user/documents/file.txt")\n\nprint(path.name)        # Output: file.txt\nprint(path.stem)        # Output: file\nprint(path.suffix)      # Output: .txt\nprint(path.parent)      # Output: /home/user/documents\nprint(path.exists())    # Check if file exists',
  hint: 'Path objects work across different operating systems.'
},
{
  id: 'py_mod_29',
  topicId: 'py_modules_packages',
  question: 'Use shutil module for high-level file operations.',
  mathSolution: 'shutil provides functions for copying, moving, and deleting files.',
  codeSolution: 'import shutil\n\nprint("=== Shutil Module Tutorial ===\\n")\n\nprint("What is shutil?\")\nprint("shutil (shell utility) provides high-level file operations.\\n\")\n\nprint("Common shutil functions and their usage:\\n\")\n\n# Function 1: copy\ndef demo_copy():\n    print("1. shutil.copy(source, destination)\")\n    print("   Purpose: Copy file from source to destination\")\n    print("   Example: shutil.copy(\\"report.pdf\\", \\"backup/report.pdf\\")\")\n    print("   Result: File copied successfully\\n\")\n    return "Copied"\n\n# Function 2: copytree\ndef demo_copytree():\n    print("2. shutil.copytree(src, dst)\")\n    print(\"   Purpose: Recursively copy entire directory tree\")\n    print(\"   Example: shutil.copytree(\\"project/\\", \\"backup/project/\\")\")\n    print(\"   Result: All files and subdirectories copied\\n\")\n    return "Copied tree"\n\n# Function 3: move\ndef demo_move():\n    print("3. shutil.move(src, dst)\")\n    print(\"   Purpose: Move or rename file/directory\")\n    print(\"   Example: shutil.move(\\"old_name.txt\\", \\"new_name.txt\\")\")\n    print(\"   Result: File moved/renamed\\n\")\n    return "Moved"\n\n# Function 4: rmtree\ndef demo_rmtree():\n    print("4. shutil.rmtree(path)\")\n    print(\"   Purpose: Delete entire directory tree\")\n    print(\"   Example: shutil.rmtree(\\"temp_folder\\")\")\n    print(\"   Result: Directory and all contents removed\\n\")\n    return "Removed"\n\n# Function 5: disk_usage\ndef demo_disk_usage():\n    print(\"5. shutil.disk_usage(path)\")\n    print(\"   Purpose: Get disk usage statistics\")\n    print(\"   Example: usage = shutil.disk_usage(\\"/\\")\")\n    print(\"   Returns: (total, used, free) bytes\\n\")\n    return "Usage info"\n\n# Run demonstrations\ndemo_copy()\ndemo_copytree()\ndemo_move()\ndemo_rmtree()\ndemo_disk_usage()\n\nprint("=== Real World Example ===\")\nprint(\"\"\"\nimport shutil\n\n# Backup a file\nshutil.copy2(\"important.txt\", \"important_backup.txt\")\n\n# Archive a project\nshutil.make_archive(\"project_backup\", \"zip\", \"project_folder\")\n\n# Find executable\npython_path = shutil.which(\"python\")\nprint(f\"Python location: {python_path}\")\n\"\"\")',
  hint: 'shutil operations are more powerful than basic os functions.'
},
{
  id: 'py_mod_30',
  topicId: 'py_modules_packages',
  question: 'Use glob module to find files matching pattern.',
  mathSolution: 'glob returns list of paths matching Unix-style pattern.',
  codeSolution: 'import glob\n\n# Find all .txt files\ntext_files = glob.glob("*.txt")\nprint(text_files)  # List of .txt files in current directory\n\n# Recursive search\nall_py = glob.glob("**/*.py", recursive=True)\nprint(all_py)  # All Python files in subdirectories',
  hint: '** matches any number of subdirectories.'
},
{
  id: 'py_mod_31',
  topicId: 'py_modules_packages',
  question: 'Use pickle module to serialize and deserialize Python objects.',
  mathSolution: 'pickle converts Python objects to byte streams and back.',
  codeSolution: 'import pickle\n\ndata = {"name": "Alice", "scores": [85, 90, 78], "active": True}\n\n# Serialize to file\nwith open("data.pkl", "wb") as f:\n    pickle.dump(data, f)\n\n# Deserialize from file\nwith open("data.pkl", "rb") as f:\n    loaded_data = pickle.load(f)\n\nprint(loaded_data)  # Original dictionary restored',
  hint: 'Always use binary mode ("wb"/"rb") for pickle files.'
},
{
  id: 'py_mod_32',
  topicId: 'py_modules_packages',
  question: 'Use csv module to read and write CSV files.',
  mathSolution: 'csv module handles comma-separated value files.',
  codeSolution: 'import csv\n\n# Writing CSV\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age", "City"])\n    writer.writerow(["Alice", 25, "New York"])\n    writer.writerow(["Bob", 30, "London"])\n\n# Reading CSV\nwith open("data.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)',
  hint: 'newline="" prevents extra blank lines on Windows.'
},
{
  id: 'py_mod_33',
  topicId: 'py_modules_packages',
  question: 'Use time module for timing code execution.',
  mathSolution: 'time.time() returns current time in seconds.',
  codeSolution: 'import time\n\nstart = time.time()\n\n# Simulate work\ntime.sleep(2)\n\nend = time.time()\nprint(f"Execution time: {end - start:.2f} seconds")\n\n# Get formatted local time\nprint(time.strftime("%Y-%m-%d %H:%M:%S"))',
  hint: 'time.perf_counter() is more accurate for benchmarking.'
},
{
  id: 'py_mod_34',
  topicId: 'py_modules_packages',
  question: 'Use threading module to run functions concurrently.',
  mathSolution: 'Thread allows multiple operations to run in parallel.',
  codeSolution: 'import threading\nimport time\n\ndef print_numbers():\n    for i in range(5):\n        print(f"Number: {i}")\n        time.sleep(1)\n\ndef print_letters():\n    for letter in "ABCDE":\n        print(f"Letter: {letter}")\n        time.sleep(1)\n\n# Create threads\nt1 = threading.Thread(target=print_numbers)\nt2 = threading.Thread(target=print_letters)\n\n# Start threads\nt1.start()\nt2.start()\n\n# Wait for completion\nt1.join()\nt2.join()\nprint("Both threads completed")',
  hint: 'join() waits for thread to finish.'
},
{
  id: 'py_mod_35',
  topicId: 'py_modules_packages',
  question: 'Use multiprocessing module for parallel processing.',
  mathSolution: 'Process runs in separate memory space for true parallelism.',
  codeSolution: 'import multiprocessing\n\ndef square(n):\n    return n * n\n\nif __name__ == "__main__":\n    numbers = [1, 2, 3, 4, 5]\n    with multiprocessing.Pool(processes=3) as pool:\n        results = pool.map(square, numbers)\n    print(results)  # Output: [1, 4, 9, 16, 25]',
  hint: 'Protect entry point with if __name__ == "__main__" on Windows.'
},
{
  id: 'py_mod_36',
  topicId: 'py_modules_packages',
  question: 'Use queue module for thread-safe communication.',
  mathSolution: 'Queue provides safe exchange of data between threads.',
  codeSolution: 'import threading\nimport queue\nimport time\n\ndef producer(q):\n    for i in range(5):\n        q.put(f"Item {i}")\n        print(f"Produced: Item {i}")\n        time.sleep(1)\n\ndef consumer(q):\n    while True:\n        item = q.get()\n        if item is None:\n            break\n        print(f"Consumed: {item}")\n        q.task_done()\n\nq = queue.Queue()\nt1 = threading.Thread(target=producer, args=(q,))\nt2 = threading.Thread(target=consumer, args=(q,))\n\nt1.start()\nt2.start()\n\nt1.join()\nq.put(None)  # Signal consumer to stop\nt2.join()',
  hint: 'Queue handles synchronization automatically.'
},
{
  id: 'py_mod_37',
  topicId: 'py_modules_packages',
  question: 'Use urllib.request to fetch data from a URL.',
  mathSolution: 'urllib.request can download web content.',
  codeSolution: 'import urllib.request\n\nurl = "https://api.github.com"\ntry:\n    response = urllib.request.urlopen(url)\n    data = response.read()\n    print(f"Status: {response.status}")\n    print(f"Data length: {len(data)} bytes")\nexcept urllib.error.URLError as e:\n    print(f"Error: {e.reason}")',
  hint: 'response.read() returns bytes, decode() to get string.'
},
{
  id: 'py_mod_38',
  topicId: 'py_modules_packages',
  question: 'Use smtplib to send email via SMTP.',
  mathSolution: 'smtplib handles SMTP protocol for sending emails.',
  codeSolution: 'import smtplib\nfrom email.message import EmailMessage\n\nmsg = EmailMessage()\nmsg.set_content("This is a test email.")\nmsg["Subject"] = "Test from Python"\nmsg["From"] = "sender@example.com"\nmsg["To"] = "receiver@example.com"\n\ntry:\n    server = smtplib.SMTP("smtp.gmail.com", 587)\n    server.starttls()\n    server.login("username", "password")\n    server.send_message(msg)\n    server.quit()\n    print("Email sent")\nexcept Exception as e:\n    print(f"Error: {e}")',
  hint: 'Use app passwords for Gmail with 2-factor authentication.'
},
{
  id: 'py_mod_39',
  topicId: 'py_modules_packages',
  question: 'Use sqlite3 module to create and query a database.',
  mathSolution: 'sqlite3 provides built-in SQL database functionality.',
  codeSolution: 'import sqlite3\n\n# Connect to database (creates if not exists)\nconn = sqlite3.connect("example.db")\ncursor = conn.cursor()\n\n# Create table\ncursor.execute("""CREATE TABLE IF NOT EXISTS users\n                  (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)""")\n\n# Insert data\ncursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Alice", 25))\n\n# Query data\ncursor.execute("SELECT * FROM users")\nrows = cursor.fetchall()\nfor row in rows:\n    print(row)\n\n# Commit and close\nconn.commit()\nconn.close()',
  hint: 'Use parameterized queries to prevent SQL injection.'
},
{
  id: 'py_mod_40',
  topicId: 'py_modules_packages',
  question: 'Use zipfile module to create and extract ZIP archives.',
  mathSolution: 'zipfile provides tools for working with ZIP files.',
  codeSolution: 'import zipfile\nfrom io import BytesIO\n\nprint("=== Zipfile Module Demo ===\\n")\n\n# Create ZIP in memory\nzip_buffer = BytesIO()\nwith zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zipf:\n    zipf.writestr("file1.txt", "Content of file 1")\n    zipf.writestr("file2.txt", "Content of file 2")\n    zipf.writestr("file3.txt", "Content of file 3")\n\nprint("ZIP archive created in memory")\n\n# Read from the ZIP\nzip_buffer.seek(0)\nwith zipfile.ZipFile(zip_buffer, "r") as zipf:\n    print(f"Files in archive: {zipf.namelist()}")\n    for filename in zipf.namelist():\n        content = zipf.read(filename).decode()\n        print(f"  {filename}: {content}")\n        info = zipf.getinfo(filename)\n        print(f"    Size: {info.file_size} bytes")',
  hint: 'Use ZIP_DEFLATED for compression (requires zlib). This example uses BytesIO to work without real files.'
},

//Multithreding
{
  id: 'py_thread_1',
  topicId: 'py_multithreading',
  question: 'Create and start a simple thread that prints numbers from 1 to 5.',
  mathSolution: 'Use threading.Thread to create and start a thread.',
  codeSolution: 'import threading\nimport time\n\ndef print_numbers():\n    for i in range(1, 6):\n        print(f"Number: {i}")\n        time.sleep(1)\n\n# Create and start thread\nthread = threading.Thread(target=print_numbers)\nthread.start()\n\n# Wait for thread to complete\nthread.join()\nprint("Main thread continues...")',
  hint: 'join() makes main thread wait for child thread to finish.'
},
{
  id: 'py_thread_2',
  topicId: 'py_multithreading',
  question: 'Create multiple threads that run concurrently.',
  mathSolution: 'Start multiple threads to run functions simultaneously.',
  codeSolution: 'import threading\nimport time\n\ndef task(name, delay):\n    for i in range(3):\n        print(f"Task {name}: iteration {i}")\n        time.sleep(delay)\n\n# Create multiple threads\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=task, args=(f"Thread-{i}", i+1))\n    threads.append(t)\n    t.start()\n\n# Wait for all threads\nfor t in threads:\n    t.join()\n\nprint("All threads completed")',
  hint: 'Threads run concurrently; output order may vary.'
},
{
  id: 'py_thread_3',
  topicId: 'py_multithreading',
  question: 'Pass arguments to a thread function.',
  mathSolution: 'Use args parameter to pass tuple of arguments.',
  codeSolution: 'import threading\n\ndef greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\n# Pass positional arguments\nt1 = threading.Thread(target=greet, args=("Alice",))\nt1.start()\nt1.join()\n\n# Pass keyword arguments\nimport threading\nt2 = threading.Thread(target=greet, kwargs={"name": "Bob", "greeting": "Hi"})\nt2.start()\nt2.join()',
  hint: 'args takes a tuple, kwargs takes a dictionary.'
},
{
  id: 'py_thread_4',
  topicId: 'py_multithreading',
  question: 'Create a thread by extending Thread class.',
  mathSolution: 'Subclass threading.Thread and override run() method.',
  codeSolution: 'import threading\nimport time\n\nclass MyThread(threading.Thread):\n    def __init__(self, name, delay):\n        super().__init__()\n        self.name = name\n        self.delay = delay\n    \n    def run(self):\n        print(f"Thread {self.name} starting")\n        for i in range(3):\n            print(f"{self.name}: {i}")\n            time.sleep(self.delay)\n        print(f"Thread {self.name} finished")\n\n# Create and start threads\nt1 = MyThread("A", 1)\nt2 = MyThread("B", 0.5)\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()',
  hint: 'run() contains the code to execute in the thread.'
},
{
  id: 'py_thread_5',
  topicId: 'py_multithreading',
  question: 'Check if a thread is alive and get its name.',
  mathSolution: 'Use is_alive() and name attribute to get thread status.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    time.sleep(2)\n\nthread = threading.Thread(target=worker, name="WorkerThread")\nprint(f"Before start - Alive: {thread.is_alive()}")\n\nthread.start()\nprint(f"After start - Alive: {thread.is_alive()}")\nprint(f"Thread name: {thread.name}")\n\nthread.join()\nprint(f"After join - Alive: {thread.is_alive()}")',
  hint: 'Thread names can be set for debugging purposes.'
},
{
  id: 'py_thread_6',
  topicId: 'py_multithreading',
  question: 'Use threading.current_thread() to get current thread info.',
  mathSolution: 'current_thread() returns the Thread object for calling thread.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    current = threading.current_thread()\n    print(f"Thread name: {current.name}")\n    print(f"Thread ID: {current.ident}")\n    print(f"Is daemon: {current.daemon}")\n    time.sleep(1)\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, name=f"Worker-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'ident is thread identifier (may be reused after thread ends).'
},
{
  id: 'py_thread_7',
  topicId: 'py_multithreading',
  question: 'Create a daemon thread that exits when main thread exits.',
  mathSolution: 'Set daemon=True before starting thread.',
  codeSolution: 'import threading\nimport time\n\ndef background_task():\n    while True:\n        print("Background task running...")\n        time.sleep(1)\n\n# Create daemon thread\ndaemon_thread = threading.Thread(target=background_task, daemon=True)\ndaemon_thread.start()\n\n# Main thread does some work\ntime.sleep(3)\nprint("Main thread exiting - daemon thread will be killed")',
  hint: 'Daemon threads are abruptly stopped when all non-daemon threads exit.'
},
{
  id: 'py_thread_8',
  topicId: 'py_multithreading',
  question: 'Use thread synchronization with Lock to avoid race conditions.',
  mathSolution: 'Lock ensures only one thread accesses shared resource at a time.',
  codeSolution: 'import threading\nimport time\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(100000):\n        lock.acquire()\n        counter += 1\n        lock.release()\n\ndef decrement():\n    global counter\n    for _ in range(100000):\n        with lock:  # Using with statement for automatic release\n            counter -= 1\n\n# Create threads\nt1 = threading.Thread(target=increment)\nt2 = threading.Thread(target=decrement)\n\nt1.start()\nt2.start()\nt1.join()\nt2.join()\n\nprint(f"Final counter: {counter}")  # Should be 0 with proper locking',
  hint: 'Use with lock: for automatic acquire/release.'
},
{
  id: 'py_thread_9',
  topicId: 'py_multithreading',
  question: 'Use RLock for reentrant locking in same thread.',
  mathSolution: 'RLock can be acquired multiple times by same thread without deadlock.',
  codeSolution: 'import threading\n\nlock = threading.RLock()\n\ndef function1():\n    with lock:\n        print("Function1 acquired lock")\n        function2()\n\ndef function2():\n    with lock:\n        print("Function2 acquired lock (reentrant)")\n\n# This works with RLock, would deadlock with regular Lock\nt = threading.Thread(target=function1)\nt.start()\nt.join()',
  hint: 'RLock is useful when a function calls another that needs same lock.'
},
{
  id: 'py_thread_10',
  topicId: 'py_multithreading',
  question: 'Use Semaphore to limit concurrent access to resources.',
  mathSolution: 'Semaphore allows only specified number of threads to access resource.',
  codeSolution: 'import threading\nimport time\n\nsemaphore = threading.Semaphore(2)  # Allow 2 concurrent accesses\n\ndef access_resource(thread_id):\n    print(f"Thread {thread_id} waiting for semaphore")\n    semaphore.acquire()\n    print(f"Thread {thread_id} acquired semaphore")\n    time.sleep(2)  # Simulate work\n    semaphore.release()\n    print(f"Thread {thread_id} released semaphore")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=access_resource, args=(i,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Only 2 threads can run the critical section simultaneously.'
},
{
  id: 'py_thread_11',
  topicId: 'py_multithreading',
  question: 'Use BoundedSemaphore to track releases count.',
  mathSolution: 'BoundedSemaphore raises ValueError if released more than acquired.',
  codeSolution: 'import threading\n\nbounded_sem = threading.BoundedSemaphore(2)\n\ndef worker():\n    bounded_sem.acquire()\n    print("Working...")\n    bounded_sem.release()\n    # bounded_sem.release()  # This would raise ValueError\n\nthreads = [threading.Thread(target=worker) for _ in range(3)]\nfor t in threads:\n    t.start()\nfor t in threads:\n    t.join()',
  hint: 'BoundedSemaphore prevents programming errors by tracking count.'
},
{
  id: 'py_thread_12',
  topicId: 'py_multithreading',
  question: 'Use Event for thread communication (producer-consumer pattern).',
  mathSolution: 'Event allows one thread to signal others.',
  codeSolution: 'import threading\nimport time\n\nevent = threading.Event()\n\ndef waiter():\n    print("Waiter: waiting for event")\n    event.wait()\n    print("Waiter: event received!")\n\ndef setter():\n    print("Setter: sleeping for 2 seconds")\n    time.sleep(2)\n    print("Setter: setting event")\n    event.set()\n\n# Create threads\nwaiter_thread = threading.Thread(target=waiter)\nsetter_thread = threading.Thread(target=setter)\n\nwaiter_thread.start()\nsetter_thread.start()\n\nwaiter_thread.join()\nsetter_thread.join()',
  hint: 'event.set() wakes all threads waiting on event.wait().'
},
{
  id: 'py_thread_13',
  topicId: 'py_multithreading',
  question: 'Use Condition for more complex thread synchronization.',
  mathSolution: 'Condition allows threads to wait for a condition and be notified.',
  codeSolution: 'import threading\nimport time\n\ncondition = threading.Condition()\nitems = []\n\ndef producer():\n    for i in range(5):\n        with condition:\n            items.append(f"Item-{i}")\n            print(f"Produced Item-{i}")\n            condition.notify()  # Notify one waiting thread\n        time.sleep(1)\n\ndef consumer():\n    while True:\n        with condition:\n            while not items:\n                print("Consumer waiting...")\n                condition.wait()\n            item = items.pop(0)\n            print(f"Consumed {item}")\n            if item == "Item-4":\n                break\n\n# Create threads\nproducer_thread = threading.Thread(target=producer)\nconsumer_thread = threading.Thread(target=consumer)\n\nproducer_thread.start()\nconsumer_thread.start()\n\nproducer_thread.join()\nconsumer_thread.join()',
  hint: 'wait() releases lock, notify() wakes one waiting thread.'
},
{
  id: 'py_thread_14',
  topicId: 'py_multithreading',
  question: 'Use Queue for thread-safe data exchange.',
  mathSolution: 'Queue handles all synchronization automatically.',
  codeSolution: 'import threading\nimport queue\nimport time\n\nq = queue.Queue(maxsize=3)\n\ndef producer():\n    for i in range(5):\n        q.put(f"Item-{i}")\n        print(f"Produced Item-{i}")\n        time.sleep(1)\n\ndef consumer():\n    while True:\n        item = q.get()\n        if item is None:\n            break\n        print(f"Consumed {item}")\n        q.task_done()\n        time.sleep(2)\n\n# Create threads\nproducer_thread = threading.Thread(target=producer)\nconsumer_thread = threading.Thread(target=consumer)\n\nproducer_thread.start()\nconsumer_thread.start()\n\nproducer_thread.join()\nq.put(None)  # Signal consumer to stop\nconsumer_thread.join()',
  hint: 'Queue is thread-safe and blocks on put/get when full/empty.'
},
{
  id: 'py_thread_15',
  topicId: 'py_multithreading',
  question: 'Use threading.local() for thread-local data.',
  mathSolution: 'threading.local() creates data unique to each thread.',
  codeSolution: 'import threading\nimport random\n\nthread_local = threading.local()\n\ndef set_data():\n    thread_local.value = random.randint(1, 100)\n    print(f"Thread {threading.current_thread().name} set value: {thread_local.value}")\n\ndef get_data():\n    print(f"Thread {threading.current_thread().name} has value: {thread_local.value}")\n\ndef worker():\n    set_data()\n    get_data()\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, name=f"Thread-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Each thread has its own copy of thread_local variables.'
},
{
  id: 'py_thread_16',
  topicId: 'py_multithreading',
  question: 'Use threading.Timer for delayed execution.',
  mathSolution: 'Timer runs function after specified delay.',
  codeSolution: 'import threading\nimport time\n\ndef delayed_print(message):\n    print(f"Delayed message: {message}")\n\nprint("Starting timer...")\ntimer = threading.Timer(3.0, delayed_print, args=("Hello after 3 seconds",))\ntimer.start()\n\n# Timer can be cancelled before it executes\n# timer.cancel()  # Uncomment to cancel\n\ntime.sleep(4)  # Wait longer than timer',
  hint: 'Timer runs only once; use loop for periodic execution.'
},
{
  id: 'py_thread_17',
  topicId: 'py_multithreading',
  question: 'Use Barrier to synchronize multiple threads at a point.',
  mathSolution: 'Barrier makes threads wait until all have reached the barrier.',
  codeSolution: 'import threading\nimport time\n\nbarrier = threading.Barrier(3)  # 3 threads must reach barrier\n\ndef worker(name):\n    print(f"{name} starting phase 1")\n    time.sleep(2)\n    print(f"{name} reached barrier")\n    barrier.wait()\n    print(f"{name} starting phase 2")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, args=(f"Worker-{i}",))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'All threads continue together after barrier is reached.'
},
{
  id: 'py_thread_18',
  topicId: 'py_multithreading',
  question: 'Handle thread exceptions and check thread status.',
  mathSolution: 'Exceptions in threads don\'t affect main thread automatically.',
  codeSolution: 'import threading\nimport time\n\ndef faulty_function():\n    time.sleep(1)\n    raise ValueError("Something went wrong in thread")\n\ndef worker():\n    try:\n        faulty_function()\n    except Exception as e:\n        print(f"Caught exception in thread: {e}")\n\nthread = threading.Thread(target=worker)\nthread.start()\nthread.join()\nprint("Main thread continues")',
  hint: 'Handle exceptions inside thread to prevent silent failures.'
},
{
  id: 'py_thread_19',
  topicId: 'py_multithreading',
  question: 'Get return value from a thread (using Queue).',
  mathSolution: 'Use Queue to pass results back from thread.',
  codeSolution: 'import threading\nimport queue\n\ndef worker(input_queue, output_queue):\n    while True:\n        item = input_queue.get()\n        if item is None:\n            break\n        result = item * item  # Square the number\n        output_queue.put(result)\n\ninput_q = queue.Queue()\noutput_q = queue.Queue()\n\n# Start worker thread\nthread = threading.Thread(target=worker, args=(input_q, output_q))\nthread.start()\n\n# Send work\nfor i in range(5):\n    input_q.put(i)\n\n# Signal thread to stop\ninput_q.put(None)\n\n# Collect results\nresults = []\nwhile not output_q.empty():\n    results.append(output_q.get())\n\nthread.join()\nprint(f"Results: {results}")',
  hint: 'Queue is the standard way to get results from threads.'
},
{
  id: 'py_thread_20',
  topicId: 'py_multithreading',
  question: 'Use threading.active_count() to count active threads.',
  mathSolution: 'active_count() returns number of Thread objects alive.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    time.sleep(2)\n\nprint(f"Active threads before: {threading.active_count()}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker)\n    threads.append(t)\n    t.start()\n\nprint(f"Active threads during: {threading.active_count()}")\n\nfor t in threads:\n    t.join()\n\nprint(f"Active threads after: {threading.active_count()}")',
  hint: 'Main thread is always counted.'
},
{
  id: 'py_thread_21',
  topicId: 'py_multithreading',
  question: 'Use threading.enumerate() to get list of all threads.',
  mathSolution: 'enumerate() returns list of all Thread objects alive.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    time.sleep(2)\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, name=f"Worker-{i}")\n    threads.append(t)\n    t.start()\n\n# Get list of all threads\nall_threads = threading.enumerate()\nprint("All active threads:")\nfor thread in all_threads:\n    print(f"  {thread.name} (daemon: {thread.daemon})")\n\nfor t in threads:\n    t.join()',
  hint: 'List includes main thread and any other threads.'
},
{
  id: 'py_thread_22',
  topicId: 'py_multithreading',
  question: 'Implement a thread pool manually.',
  mathSolution: 'Create fixed number of worker threads that process tasks.',
  codeSolution: 'import threading\nimport queue\nimport time\n\nclass ThreadPool:\n    def __init__(self, num_threads):\n        self.tasks = queue.Queue()\n        self.threads = []\n        for _ in range(num_threads):\n            t = threading.Thread(target=self.worker)\n            t.start()\n            self.threads.append(t)\n    \n    def worker(self):\n        while True:\n            func, args, kwargs = self.tasks.get()\n            if func is None:\n                break\n            try:\n                func(*args, **kwargs)\n            except Exception as e:\n                print(f"Error: {e}")\n            self.tasks.task_done()\n    \n    def submit(self, func, *args, **kwargs):\n        self.tasks.put((func, args, kwargs))\n    \n    def shutdown(self):\n        for _ in self.threads:\n            self.tasks.put((None, None, None))\n        for t in self.threads:\n            t.join()\n\n# Usage\ndef task(n):\n    print(f"Processing {n}")\n    time.sleep(1)\n\npool = ThreadPool(3)\nfor i in range(10):\n    pool.submit(task, i)\n\npool.shutdown()',
  hint: 'Thread pool reuses threads to avoid creation overhead.'
},
{
  id: 'py_thread_23',
  topicId: 'py_multithreading',
  question: 'Use concurrent.futures.ThreadPoolExecutor for high-level threading.',
  mathSolution: 'ThreadPoolExecutor provides simple interface for thread pools.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor\nimport time\n\ndef task(n):\n    print(f"Task {n} starting")\n    time.sleep(2)\n    print(f"Task {n} completed")\n    return n * n\n\n# Using ThreadPoolExecutor\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    # Submit individual tasks\n    futures = [executor.submit(task, i) for i in range(5)]\n    \n    # Get results\n    for future in futures:\n        print(f"Result: {future.result()}")',
  hint: 'Executor handles thread creation and management automatically.'
},
{
  id: 'py_thread_24',
  topicId: 'py_multithreading',
  question: 'Use ThreadPoolExecutor.map() for easy parallel mapping.',
  mathSolution: 'map() applies function to iterable elements in parallel.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor\nimport time\n\ndef square(n):\n    time.sleep(1)\n    return n * n\n\nnumbers = [1, 2, 3, 4, 5]\n\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    # map returns results in order\n    results = list(executor.map(square, numbers))\n\nprint(f"Squares: {results}")  # [1, 4, 9, 16, 25]',
  hint: 'map() maintains order of results matching input order.'
},
{
  id: 'py_thread_25',
  topicId: 'py_multithreading',
  question: 'Handle exceptions in ThreadPoolExecutor.',
  mathSolution: 'Exceptions are raised when calling result() on future.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor\n\ndef faulty_task(x):\n    if x == 3:\n        raise ValueError("Bad value!")\n    return x * 2\n\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    futures = [executor.submit(faulty_task, i) for i in range(5)]\n    \n    for future in futures:\n        try:\n            result = future.result()\n            print(f"Result: {result}")\n        except Exception as e:\n            print(f"Task failed: {e}")',
  hint: 'Exception in thread is captured and raised when result() is called.'
},
{
  id: 'py_thread_26',
  topicId: 'py_multithreading',
  question: 'Set thread timeout using Future.timeout.',
  mathSolution: 'result(timeout) raises TimeoutError if task takes too long.',
  codeSolution: 'from concurrent.futures import ThreadPoolExecutor, TimeoutError\nimport time\n\ndef slow_task():\n    time.sleep(5)\n    return "Done"\n\nwith ThreadPoolExecutor() as executor:\n    future = executor.submit(slow_task)\n    \n    try:\n        result = future.result(timeout=2)\n        print(result)\n    except TimeoutError:\n        print("Task timed out")\n        future.cancel()',
  hint: 'Cancel task if timeout occurs to free resources.'
},
{
  id: 'py_thread_27',
  topicId: 'py_multithreading',
  question: 'Use threading.Event to implement a simple timeout.',
  mathSolution: 'event.wait(timeout) returns False if timeout occurs.',
  codeSolution: 'import threading\nimport time\n\ndef worker(event):\n    print("Worker started")\n    time.sleep(3)\n    event.set()\n    print("Worker completed")\n\nevent = threading.Event()\nthread = threading.Thread(target=worker, args=(event,))\nthread.start()\n\n# Wait with timeout\nif event.wait(timeout=2):\n    print("Worker finished in time")\nelse:\n    print("Worker timed out")\n\nthread.join()',
  hint: 'event.wait() returns True if event is set, False on timeout.'
},
{
  id: 'py_thread_28',
  topicId: 'py_multithreading',
  question: 'Implement reader-writer problem using Lock.',
  mathSolution: 'Use locks to allow multiple readers or single writer.',
  codeSolution: 'import threading\nimport time\n\nclass ReadWriteLock:\n    def __init__(self):\n        self.read_lock = threading.Lock()\n        self.write_lock = threading.Lock()\n        self.readers = 0\n    \n    def acquire_read(self):\n        with self.read_lock:\n            self.readers += 1\n            if self.readers == 1:\n                self.write_lock.acquire()\n    \n    def release_read(self):\n        with self.read_lock:\n            self.readers -= 1\n            if self.readers == 0:\n                self.write_lock.release()\n    \n    def acquire_write(self):\n        self.write_lock.acquire()\n    \n    def release_write(self):\n        self.write_lock.release()\n\nrw_lock = ReadWriteLock()\ndata = []\n\ndef reader(reader_id):\n    rw_lock.acquire_read()\n    print(f"Reader {reader_id} reading: {data}")\n    time.sleep(1)\n    rw_lock.release_read()\n\ndef writer(writer_id, value):\n    rw_lock.acquire_write()\n    print(f"Writer {writer_id} writing")\n    data.append(value)\n    time.sleep(1)\n    rw_lock.release_write()\n\n# Create threads\nthreads = []\nfor i in range(3):\n    threads.append(threading.Thread(target=reader, args=(i,)))\nfor i in range(2):\n    threads.append(threading.Thread(target=writer, args=(i, i)))\n\nfor t in threads:\n    t.start()\nfor t in threads:\n    t.join()',
  hint: 'Multiple readers can read simultaneously, writers get exclusive access.'
},
{
  id: 'py_thread_29',
  topicId: 'py_multithreading',
  question: 'Implement a rate limiter using threading.Semaphore.',
  mathSolution: 'Semaphore with timed releases can limit operation rate.',
  codeSolution: 'import threading\nimport time\n\nclass RateLimiter:\n    def __init__(self, max_calls, period):\n        self.semaphore = threading.Semaphore(max_calls)\n        self.period = period\n    \n    def acquire(self):\n        self.semaphore.acquire()\n        # Schedule release after period\n        threading.Timer(self.period, self.semaphore.release).start()\n\nrate_limiter = RateLimiter(2, 5)  # 2 calls per 5 seconds\n\ndef api_call(call_id):\n    rate_limiter.acquire()\n    print(f"API call {call_id} at {time.strftime %H:%M:%S \n\n# Make multiple calls\nfor i in range(5):\n    threading.Thread(target=api_call, args=(i,)).start()\n    time.sleep(1)',
  hint: 'Rate limiting prevents overwhelming external services.'
},
{
  id: 'py_thread_30',
  topicId: 'py_multithreading',
  question: 'Use threading.Barrier for phased computation.',
  mathSolution: 'Barrier synchronizes threads at multiple phases.',
  codeSolution: 'import threading\nimport time\n\nbarrier = threading.Barrier(3)\n\ndef phase_worker(name):\n    for phase in range(1, 4):\n        print(f"{name} working on phase {phase}")\n        time.sleep(2)\n        print(f"{name} reached barrier for phase {phase}")\n        barrier.wait()\n        print(f"{name} starting phase {phase+1 if phase < 3 else completed")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=phase_worker, args=(f"Worker-{i}",))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Barrier ensures all threads complete current phase before next.'
},
{
  id: 'py_thread_31',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe counter using Lock.',
  mathSolution: 'Lock ensures atomic increment/decrement operations.',
  codeSolution: 'import threading\n\nclass ThreadSafeCounter:\n    def __init__(self):\n        self.value = 0\n        self.lock = threading.Lock()\n    \n    def increment(self):\n        with self.lock:\n            self.value += 1\n    \n    def decrement(self):\n        with self.lock:\n            self.value -= 1\n    \n    def get_value(self):\n        with self.lock:\n            return self.value\n\ncounter = ThreadSafeCounter()\n\ndef worker(inc_count, dec_count):\n    for _ in range(inc_count):\n        counter.increment()\n    for _ in range(dec_count):\n        counter.decrement()\n\nthreads = []\nfor i in range(10):\n    t = threading.Thread(target=worker, args=(1000, 500))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(f"Final counter value: {counter.get_value()}")',
  hint: 'Without lock, race conditions would cause incorrect results.'
},
{
  id: 'py_thread_32',
  topicId: 'py_multithreading',
  question: 'Use threading.Event to implement a simple barrier.',
  mathSolution: 'Multiple events can simulate barrier behavior.',
  codeSolution: 'import threading\nimport time\n\ndef worker(name, events):\n    print(f"{name} working...")\n    time.sleep(2)\n    # Signal completion\n    events[name].set()\n    # Wait for others\n    for other_name, event in events.items():\n        if other_name != name:\n            event.wait()\n    print(f"{name} continuing after all finished")\n\nthread_names = ["A", "B", "C"]\nevents = {name: threading.Event() for name in thread_names}\n\nthreads = []\nfor name in thread_names:\n    t = threading.Thread(target=worker, args=(name, events))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'This is a custom implementation of barrier using events.'
},
{
  id: 'py_thread_33',
  topicId: 'py_multithreading',
  question: 'Detect and avoid deadlock with timeout.',
  mathSolution: 'Use timeout in lock acquisition to detect potential deadlock.',
  codeSolution: 'import threading\nimport time\n\nlock1 = threading.Lock()\nlock2 = threading.Lock()\n\ndef worker1():\n    for _ in range(3):\n        if lock1.acquire(timeout=1):\n            print("Worker1 acquired lock1")\n            time.sleep(0.1)\n            if lock2.acquire(timeout=1):\n                print("Worker1 acquired lock2")\n                lock2.release()\n            else:\n                print("Worker1 timed out on lock2")\n            lock1.release()\n        time.sleep(0.1)\n\ndef worker2():\n    for _ in range(3):\n        if lock2.acquire(timeout=1):\n            print("Worker2 acquired lock2")\n            time.sleep(0.1)\n            if lock1.acquire(timeout=1):\n                print("Worker2 acquired lock1")\n                lock1.release()\n            else:\n                print("Worker2 timed out on lock1")\n            lock2.release()\n        time.sleep(0.1)\n\nt1 = threading.Thread(target=worker1)\nt2 = threading.Thread(target=worker2)\n\nt1.start()\nt2.start()\n\nt1.join()\nt2.join()',
  hint: 'Timeout prevents indefinite blocking in deadlock situations.'
},
{
  id: 'py_thread_34',
  topicId: 'py_multithreading',
  question: 'Use threading.settrace() to trace thread execution.',
  mathSolution: 'settrace() sets trace function for all threads started.',
  codeSolution: 'import threading\nimport sys\n\ndef trace_function(frame, event, arg):\n    if event == "line":\n        print(f"Thread {threading.current_thread().name} executing line {frame.f_lineno}")\n    return trace_function\n\n# Set trace for all threads\nthreading.settrace(trace_function)\n\ndef worker():\n    x = 1\n    y = 2\n    z = x + y\n    print(f"Result: {z}")\n\nthread = threading.Thread(target=worker, name="Worker")\nthread.start()\nthread.join()\n\n# Disable tracing\nthreading.settrace(None)',
  hint: 'Tracing is useful for debugging but slows execution.'
},
{
  id: 'py_thread_35',
  topicId: 'py_multithreading',
  question: 'Implement thread-safe singleton pattern.',
  mathSolution: 'Use lock to ensure only one instance is created.',
  codeSolution: 'import threading\n\nclass Singleton:\n    _instance = None\n    _lock = threading.Lock()\n    \n    def __new__(cls):\n        if cls._instance is None:\n            with cls._lock:\n                if cls._instance is None:\n                    cls._instance = super().__new__(cls)\n        return cls._instance\n    \n    def __init__(self):\n        self.value = 0\n\ndef worker():\n    singleton = Singleton()\n    singleton.value += 1\n    print(f"Thread {threading.current_thread().name}: {singleton.value}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker, name=f"Thread-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Double-checked locking ensures thread-safe lazy initialization.'
},
{
  id: 'py_thread_36',
  topicId: 'py_multithreading',
  question: 'Use threading.main_thread() to get main thread reference.',
  mathSolution: 'main_thread() returns the main thread object.',
  codeSolution: 'import threading\nimport time\n\ndef worker():\n    main = threading.main_thread()\n    print(f"Worker thread: {threading.current_thread().name}")\n    print(f"Main thread: {main.name}")\n    print(f"Is main thread alive? {main.is_alive()}")\n\nthread = threading.Thread(target=worker)\nthread.start()\nthread.join()',
  hint: 'Useful for checking main thread status from child threads.'
},
{
  id: 'py_thread_37',
  topicId: 'py_multithreading',
  question: 'Implement a thread-safe bounded buffer.',
  mathSolution: 'Use Condition to coordinate producer and consumer.',
  codeSolution: 'import threading\nimport time\n\nclass BoundedBuffer:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.buffer = []\n        self.condition = threading.Condition()\n    \n    def put(self, item):\n        with self.condition:\n            while len(self.buffer) >= self.capacity:\n                print("Buffer full, producer waiting")\n                self.condition.wait()\n            self.buffer.append(item)\n            print(f"Produced: {item}")\n            self.condition.notify()\n    \n    def get(self):\n        with self.condition:\n            while not self.buffer:\n                print("Buffer empty, consumer waiting")\n                self.condition.wait()\n            item = self.buffer.pop(0)\n            print(f"Consumed: {item}")\n            self.condition.notify()\n            return item\n\nbuffer = BoundedBuffer(2)\n\ndef producer():\n    for i in range(5):\n        buffer.put(i)\n        time.sleep(0.5)\n\ndef consumer():\n    for _ in range(5):\n        buffer.get()\n        time.sleep(1)\n\nproducer_thread = threading.Thread(target=producer)\nconsumer_thread = threading.Thread(target=consumer)\n\nproducer_thread.start()\nconsumer_thread.start()\n\nproducer_thread.join()\nconsumer_thread.join()',
  hint: 'Condition.wait() releases lock and waits for notification.'
},
{
  id: 'py_thread_38',
  topicId: 'py_multithreading',
  question: 'Use threading.Timer for periodic task execution.',
  mathSolution: 'Timer can reschedule itself for periodic execution.',
  codeSolution: 'import threading\nimport time\n\nclass PeriodicTask:\n    def __init__(self, interval, function, *args, **kwargs):\n        self.interval = interval\n        self.function = function\n        self.args = args\n        self.kwargs = kwargs\n        self.timer = None\n        self.running = False\n    \n    def _run(self):\n        if self.running:\n            self.function(*self.args, **self.kwargs)\n            self.timer = threading.Timer(self.interval, self._run)\n            self.timer.start()\n    \n    def start(self):\n        self.running = True\n        self._run()\n    \n    def stop(self):\n        self.running = False\n        if self.timer:\n            self.timer.cancel()\n\ndef print_time():\n    print(f"Current time: {time.strftime %H:%M:%S )\n\ntask = PeriodicTask(2, print_time)\ntask.start()\n\n# Run for 10 seconds\ntime.sleep(10)\ntask.stop()',
  hint: 'Timer creates new thread for each execution.'
},
{
  id: 'py_thread_39',
  topicId: 'py_multithreading',
  question: 'Measure thread execution time.',
  mathSolution: 'Use time.perf_counter() to measure thread duration.',
  codeSolution: 'import threading\nimport time\n\ndef worker(thread_id):\n    start = time.perf_counter()\n    print(f"Thread {thread_id} starting")\n    time.sleep(2)\n    end = time.perf_counter()\n    print(f"Thread {thread_id} took {end - start:.2f} seconds")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=worker, args=(i,))\n    threads.append(t)\n    t.start()\n\noverall_start = time.perf_counter()\nfor t in threads:\n    t.join()\noverall_end = time.perf_counter()\n\nprint(f"Total execution time: {overall_end - overall_start:.2f} seconds")',
  hint: 'Total time may be less than sum of thread times due to concurrency.'
},
{
  id: 'py_thread_40',
  topicId: 'py_multithreading',
  question: 'Implement thread-safe lazy initialization.',
  mathSolution: 'Use Lock to ensure initialization happens once.',
  codeSolution: 'import threading\n\nclass LazyInit:\n    def __init__(self):\n        self._data = None\n        self._lock = threading.Lock()\n    \n    @property\n    def data(self):\n        if self._data is None:\n            with self._lock:\n                if self._data is None:\n                    print("Initializing data...")\n                    self._data = self._expensive_initialization()\n        return self._data\n    \n    def _expensive_initialization(self):\n        # Simulate expensive operation\n        import time\n        time.sleep(2)\n        return [i for i in range(100)]\n\nlazy = LazyInit()\n\ndef worker():\n    data = lazy.data\n    print(f"Thread {threading.current_thread().name} got data length: {len(data)}")\n\nthreads = []\nfor i in range(5):\n    t = threading.Thread(target=worker, name=f"Thread-{i}")\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()',
  hint: 'Only one thread performs initialization, others wait and reuse.'
},

);