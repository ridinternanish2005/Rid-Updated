QuizData.questions.push(
  //closure ,promises ,asyn,errorhandling
{
  id: 'js_closure_1',
  topicId: 'js_closure',
  question: 'Create a basic closure where inner function accesses outer variable.',
  mathSolution: 'Inner function retains access to outer function\'s variables.',
  codeSolution: 'function outer() {\n    let message = "Hello from outer";\n    \n    function inner() {\n        console.log(message);  // Accesses outer variable\n    }\n    \n    return inner;\n}\n\nconst myFunction = outer();\nmyFunction();  // Hello from outer',
  hint: 'Functions remember the scope where they were created.'
},
{
  id: 'js_closure_2',
  topicId: 'js_closure',
  question: 'Create a counter using closure.',
  mathSolution: 'Closure maintains private counter variable.',
  codeSolution: 'function createCounter() {\n    let count = 0;\n    \n    return function() {\n        count++;\n        return count;\n    };\n}\n\nconst counter1 = createCounter();\nconst counter2 = createCounter();\n\nconsole.log(counter1());  // 1\nconsole.log(counter1());  // 2\nconsole.log(counter2());  // 1 (independent counter)',
  hint: 'Each closure has its own private copy of variables.'
},
{
  id: 'js_closure_3',
  topicId: 'js_closure',
  question: 'Create a closure with multiple methods (counter with increment/decrement).',
  mathSolution: 'Return object with functions sharing private variable.',
  codeSolution: 'function createCounter() {\n    let count = 0;\n    \n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        decrement: function() {\n            count--;\n            return count;\n        },\n        getValue: function() {\n            return count;\n        },\n        reset: function() {\n            count = 0;\n            return count;\n        }\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment());  // 1\nconsole.log(counter.increment());  // 2\nconsole.log(counter.decrement());  // 1\nconsole.log(counter.getValue());   // 1\ncounter.reset();\nconsole.log(counter.getValue());   // 0',
  hint: 'Multiple functions can share the same closure scope.'
},
{
  id: 'js_closure_4',
  topicId: 'js_closure',
  question: 'Use closure to create private variables (encapsulation).',
  mathSolution: 'Variables inside closure are not accessible from outside.',
  codeSolution: 'function createPerson(name, age) {\n    let _name = name;\n    let _age = age;\n    \n    return {\n        getName: function() {\n            return _name;\n        },\n        getAge: function() {\n            return _age;\n        },\n        setAge: function(newAge) {\n            if (newAge >= 0 && newAge < 150) {\n                _age = newAge;\n                return true;\n            }\n            return false;\n        }\n    };\n}\n\nconst person = createPerson("John", 30);\nconsole.log(person.getName());     // John\nconsole.log(person._name);         // undefined (private)\nperson.setAge(31);\nconsole.log(person.getAge());      // 31\nperson.setAge(200);                // Invalid\nconsole.log(person.getAge());      // 31 (unchanged)',
  hint: 'Closures enable true data privacy in JavaScript.'
},
{
  id: 'js_closure_5',
  topicId: 'js_closure',
  question: 'Fix loop closure issue (classic problem with var).',
  mathSolution: 'Use closure to capture loop variable correctly.',
  codeSolution: '// Problem with var - this prints 3,3,3\nfor (var i = 0; i < 3; i++) {\n    setTimeout(function() {\n        console.log(i);\n    }, 100);\n}\n\n// Solution 1: IIFE closure\nfor (var i = 0; i < 3; i++) {\n    (function(j) {\n        setTimeout(function() {\n            console.log(j);\n        }, 100);\n    })(i);\n}\n\n// Solution 2: Use let (block scope)\nfor (let i = 0; i < 3; i++) {\n    setTimeout(function() {\n        console.log(i);\n    }, 100);\n}',
  hint: 'IIFE creates new closure scope for each loop iteration.'
},
{
  id: 'js_closure_6',
  topicId: 'js_closure',
  question: 'Create function factory using closures.',
  mathSolution: 'Generate similar functions with different parameters.',
  codeSolution: 'function multiplyBy(factor) {\n    return function(number) {\n        return number * factor;\n    };\n}\n\nconst double = multiplyBy(2);\nconst triple = multiplyBy(3);\nconst quadruple = multiplyBy(4);\n\nconsole.log(double(5));    // 10\nconsole.log(triple(5));    // 15\nconsole.log(quadruple(5)); // 20',
  hint: 'Function factories create customized functions using closures.'
},
{
  id: 'js_closure_7',
  topicId: 'js_closure',
  question: 'Create memoization (caching) using closure.',
  mathSolution: 'Cache stores results of expensive operations.',
  codeSolution: 'function memoize(fn) {\n    const cache = {};\n    \n    return function(...args) {\n        const key = JSON.stringify(args);\n        if (cache[key] === undefined) {\n            console.log("Computing result for:", args);\n            cache[key] = fn(...args);\n        } else {\n            console.log("Returning cached result for:", args);\n        }\n        return cache[key];\n    };\n}\n\nfunction expensiveOperation(x) {\n    // Simulate expensive calculation\n    return x * x;\n}\n\nconst memoizedSquare = memoize(expensiveOperation);\nconsole.log(memoizedSquare(5));  // Computing... 25\nconsole.log(memoizedSquare(5));  // Cached... 25\nconsole.log(memoizedSquare(10)); // Computing... 100',
  hint: 'Cache object persists in closure between function calls.'
},
{
  id: 'js_closure_8',
  topicId: 'js_closure',
  question: 'Create once function (runs only once) using closure.',
  mathSolution: 'Flag variable in closure tracks if function executed.',
  codeSolution: 'function once(fn) {\n    let called = false;\n    let result;\n    \n    return function(...args) {\n        if (!called) {\n            called = true;\n            result = fn(...args);\n        }\n        return result;\n    };\n}\n\nconst initialize = once(() => {\n    console.log("Initializing...");\n    return { status: "ready", timestamp: Date.now() };\n});\n\nconsole.log(initialize());  // Initializing... { status: "ready", ... }\nconsole.log(initialize());  // { status: "ready", ... } (no log)\nconsole.log(initialize());  // Same cached result',
  hint: 'Flag variable tracks whether function has been called.'
},
{
  id: 'js_closure_9',
  topicId: 'js_closure',
  question: 'Create debounce function using closure.',
  mathSolution: 'Timer reference preserved across calls.',
  codeSolution: 'function debounce(fn, delay) {\n    let timeoutId;\n    \n    return function(...args) {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => {\n            fn(...args);\n        }, delay);\n    };\n}\n\nconst searchAPI = debounce((query) => {\n    console.log(`Searching for: ${query}`);\n}, 500);\n\nsearchAPI("h");\nsearchAPI("he");\nsearchAPI("hel");\nsearchAPI("hell");\nsearchAPI("hello");\n// Only "Searching for: hello" logs after 500ms',
  hint: 'timeoutId persists across calls, allowing debouncing.'
},
{
  id: 'js_closure_10',
  topicId: 'js_closure',
  question: 'Create throttle function using closure.',
  mathSolution: 'Track last execution time in closure.',
  codeSolution: 'function throttle(fn, limit) {\n    let lastCall = 0;\n    \n    return function(...args) {\n        const now = Date.now();\n        if (now - lastCall >= limit) {\n            lastCall = now;\n            fn(...args);\n        }\n    };\n}\n\nconst logScroll = throttle(() => {\n    console.log("Scroll event at:", new Date().toISOString());\n}, 1000);\n\n// Simulate rapid scrolls\nfor (let i = 0; i < 10; i++) {\n    setTimeout(() => logScroll(), i * 100);\n}\n// Only executes ~once per second',
  hint: 'lastCall timestamp persists in closure scope.'
},
{
  id: 'js_closure_11',
  topicId: 'js_closure',
  question: 'Create currying function using closure.',
  mathSolution: 'Accumulate arguments using nested closures.',
  codeSolution: 'function curry(fn) {\n    return function curried(...args) {\n        if (args.length >= fn.length) {\n            return fn(...args);\n        }\n        return function(...more) {\n            return curried(...args, ...more);\n        };\n    };\n}\n\nfunction sum(a, b, c) {\n    return a + b + c;\n}\n\nconst curriedSum = curry(sum);\nconsole.log(curriedSum(1)(2)(3));  // 6\nconsole.log(curriedSum(1, 2)(3));  // 6\nconsole.log(curriedSum(1)(2, 3));  // 6',
  hint: 'Each currying level returns new closure with accumulated args.'
},
{
  id: 'js_closure_12',
  topicId: 'js_closure',
  question: 'Create partial application using closure.',
  mathSolution: 'Fix some arguments, return function for remaining.',
  codeSolution: 'function partial(fn, ...fixedArgs) {\n    return function(...remainingArgs) {\n        return fn(...fixedArgs, ...remainingArgs);\n    };\n}\n\nfunction greet(greeting, name, punctuation) {\n    return `${greeting}, ${name}${punctuation}`;\n}\n\nconst sayHello = partial(greet, "Hello");\nconst sayHelloJohn = partial(sayHello, "John");\n\nconsole.log(sayHelloJohn("!"));      // Hello, John!\nconsole.log(sayHello("Jane", "?"));  // Hello, Jane?',
  hint: 'Partial application fixes some arguments, returns closure for rest.'
},
{
  id: 'js_closure_13',
  topicId: 'js_closure',
  question: 'Create iterator using closure.',
  mathSolution: 'Maintain index state in closure.',
  codeSolution: 'function createIterator(array) {\n    let index = 0;\n    \n    return {\n        next: function() {\n            if (index < array.length) {\n                return { value: array[index++], done: false };\n            }\n            return { done: true };\n        },\n        hasNext: function() {\n            return index < array.length;\n        },\n        reset: function() {\n            index = 0;\n        }\n    };\n}\n\nconst iterator = createIterator(["a", "b", "c"]);\nconsole.log(iterator.next());  // { value: "a", done: false }\nconsole.log(iterator.next());  // { value: "b", done: false }\nconsole.log(iterator.hasNext());  // true\nconsole.log(iterator.next());  // { value: "c", done: false }\nconsole.log(iterator.next());  // { done: true }\niterator.reset();\nconsole.log(iterator.next().value);  // "a"',
  hint: 'Index variable persists, tracking iteration position.'
},
{
  id: 'js_closure_14',
  topicId: 'js_closure',
  question: 'Create event listener with closure to remember state.',
  mathSolution: 'Closure maintains state across event invocations.',
  codeSolution: 'function createClickCounter(element) {\n    let clickCount = 0;\n    \n    element.addEventListener("click", function() {\n        clickCount++;\n        console.log(`Clicked ${clickCount} times`);\n        element.textContent = `Clicks: ${clickCount}`;\n    });\n    \n    return function() {\n        return clickCount;\n    };\n}\n\n// HTML: <button id="myButton">Click me</button>\n// const button = document.getElementById("myButton");\n// const getCount = createClickCounter(button);\n// Each click logs the count and updates button text',
  hint: 'Event handler closure remembers click count between events.'
},
{
  id: 'js_closure_15',
  topicId: 'js_closure',
  question: 'Create module pattern using closure (revealing module pattern).',
  mathSolution: 'Return object with only wanted public methods.',
  codeSolution: 'const calculator = (function() {\n    let result = 0;\n    let history = [];\n    \n    function add(x) {\n        result += x;\n        history.push(`Added ${x}`);\n        return result;\n    }\n    \n    function subtract(x) {\n        result -= x;\n        history.push(`Subtracted ${x}`);\n        return result;\n    }\n    \n    function multiply(x) {\n        result *= x;\n        history.push(`Multiplied by ${x}`);\n        return result;\n    }\n    \n    function getValue() {\n        return result;\n    }\n    \n    function getHistory() {\n        return [...history];\n    }\n    \n    function reset() {\n        result = 0;\n        history = [];\n        return result;\n    }\n    \n    return {\n        add, subtract, multiply,\n        getValue, getHistory, reset\n    };\n})();\n\nconsole.log(calculator.add(5));     // 5\nconsole.log(calculator.multiply(2)); // 10\nconsole.log(calculator.subtract(3)); // 7\nconsole.log(calculator.getValue());   // 7\nconsole.log(calculator.getHistory()); // ["Added 5", "Multiplied by 2", "Subtracted 3"]',
  hint: 'The module pattern creates encapsulated code with private state.'
},
{
  id: 'js_closure_16',
  topicId: 'js_closure',
  question: 'Create function that remembers state between calls.',
  mathSolution: 'Use closure to track running totals or averages.',
  codeSolution: 'function createRunningAverage() {\n    let sum = 0;\n    let count = 0;\n    \n    return function(number) {\n        sum += number;\n        count++;\n        return sum / count;\n    };\n}\n\nconst avg = createRunningAverage();\nconsole.log(avg(10));  // 10\nconsole.log(avg(20));  // 15\nconsole.log(avg(30));  // 20\nconsole.log(avg(40));  // 25',
  hint: 'Sum and count persist across multiple calls.'
},
{
  id: 'js_closure_17',
  topicId: 'js_closure',
  question: 'Create function that generates unique IDs.',
  mathSolution: 'Increment counter stored in closure.',
  codeSolution: 'function createIdGenerator(prefix = "id") {\n    let counter = 0;\n    \n    return function() {\n        counter++;\n        return `${prefix}_${counter}`;\n    };\n}\n\nconst generateUserId = createIdGenerator("user");\nconst generateProductId = createIdGenerator("product");\n\nconsole.log(generateUserId());    // user_1\nconsole.log(generateUserId());    // user_2\nconsole.log(generateProductId()); // product_1\nconsole.log(generateProductId()); // product_2',
  hint: 'Each generator has its own independent counter.'
},
{
  id: 'js_closure_18',
  topicId: 'js_closure',
  question: 'Create function that limits number of calls.',
  mathSolution: 'Track call count in closure.',
  codeSolution: 'function limitCalls(fn, maxCalls) {\n    let calls = 0;\n    \n    return function(...args) {\n        if (calls < maxCalls) {\n            calls++;\n            return fn(...args);\n        }\n        console.log("Function limit reached");\n        return undefined;\n    };\n}\n\nconst limitedLog = limitCalls((msg) => console.log(msg), 3);\nlimitedLog("Call 1");  // Call 1\nlimitedLog("Call 2");  // Call 2\nlimitedLog("Call 3");  // Call 3\nlimitedLog("Call 4");  // Function limit reached (no output)',
  hint: 'Call counter tracks how many times function executed.'
},
{
  id: 'js_closure_19',
  topicId: 'js_closure',
  question: 'Create function that delays execution (sleep).',
  mathSolution: 'Preserve arguments and context in closure.',
  codeSolution: 'function delay(fn, ms) {\n    return function(...args) {\n        setTimeout(() => {\n            fn(...args);\n        }, ms);\n    };\n}\n\nconst delayedGreet = delay((name) => {\n    console.log(`Hello, ${name}!`);\n}, 1000);\n\ndelayedGreet("John");  // Hello, John! after 1 second\n\n// With arguments\nconst delayedSum = delay((a, b) => {\n    console.log(`Sum: ${a + b}`);\n}, 2000);\n\ndelayedSum(5, 3);  // Sum: 8 after 2 seconds',
  hint: 'Delay function returns closure that preserves arguments for setTimeout.'
},
{
  id: 'js_closure_20',
  topicId: 'js_closure',
  question: 'Create function that returns different results on each call.',
  mathSolution: 'Maintain state sequence in closure.',
  codeSolution: 'function createCycler(...values) {\n    let index = 0;\n    \n    return function() {\n        const result = values[index];\n        index = (index + 1) % values.length;\n        return result;\n    };\n}\n\nconst getColor = createCycler("red", "green", "blue", "yellow");\nconsole.log(getColor());  // red\nconsole.log(getColor());  // green\nconsole.log(getColor());  // blue\nconsole.log(getColor());  // yellow\nconsole.log(getColor());  // red (cycles back)',
  hint: 'Index cycles through values array, wrapping around.'
},
{
  id: 'js_closure_21',
  topicId: 'js_closure',
  question: 'Create function that caches results by argument.',
  mathSolution: 'Use object in closure to store computed values.',
  codeSolution: 'function createCache() {\n    const cache = {};\n    \n    return {\n        get: function(key) {\n            return cache[key];\n        },\n        set: function(key, value) {\n            cache[key] = value;\n        },\n        has: function(key) {\n            return key in cache;\n        },\n        delete: function(key) {\n            delete cache[key];\n        },\n        clear: function() {\n            Object.keys(cache).forEach(key => delete cache[key]);\n        }\n    };\n}\n\nconst userCache = createCache();\nuserCache.set("user_1", { name: "John", age: 30 });\nuserCache.set("user_2", { name: "Jane", age: 25 });\n\nconsole.log(userCache.get("user_1"));  // { name: "John", age: 30 }\nconsole.log(userCache.has("user_3"));  // false\nuserCache.delete("user_2");\nconsole.log(userCache.has("user_2"));  // false',
  hint: 'Cache object persists, storing results between calls.'
},
{
  id: 'js_closure_22',
  topicId: 'js_closure',
  question: 'Create function with configurable behavior.',
  mathSolution: 'Configure function once, use many times.',
  codeSolution: 'function createFormatter(config) {\n    return function(value) {\n        if (config.prefix) value = config.prefix + value;\n        if (config.suffix) value = value + config.suffix;\n        if (config.uppercase) value = value.toUpperCase();\n        if (config.lowercase) value = value.toLowerCase();\n        if (config.padStart) value = value.padStart(config.padStart);\n        if (config.padEnd) value = value.padEnd(config.padEnd);\n        return value;\n    };\n}\n\nconst formatCurrency = createFormatter({\n    prefix: "$",\n    suffix: ".00\",\n    uppercase: false\n});\n\nconst formatCode = createFormatter({\n    uppercase: true,\n    padStart: 10,\n    suffix: "_CODE\"\n});\n\nconsole.log(formatCurrency(100));  // $100.00\nconsole.log(formatCode("ABC\"));    // "       ABC_CODE"',
  hint: 'Configuration stored in closure, applied every call.'
},
{
  id: 'js_closure_23',
  topicId: 'js_closure',
  question: 'Create function that validates based on rule set.',
  mathSolution: 'Validation rules stored in closure.',
  codeSolution: 'function createValidator(rules) {\n    return function(value) {\n        const errors = [];\n        \n        if (rules.required && (!value || value.trim() === "")) {\n            errors.push("Field is required");\n        }\n        if (rules.minLength && value.length < rules.minLength) {\n            errors.push(`Minimum length is ${rules.minLength}`);\n        }\n        if (rules.maxLength && value.length > rules.maxLength) {\n            errors.push(`Maximum length is ${rules.maxLength}`);\n        }\n        if (rules.pattern && !rules.pattern.test(value)) {\n            errors.push(`Invalid format`);\n        }\n        if (rules.custom && !rules.custom(value)) {\n            errors.push(rules.customMessage || "Invalid value");\n        }\n        \n        return {\n            isValid: errors.length === 0,\n            errors: errors\n        };\n    };\n}\n\nconst validateEmail = createValidator({\n    required: true,\n    pattern: /^[^@]+@[^@]+\\.[^@]+$/,\n    minLength: 5,\n    maxLength: 100\n});\n\nconst validateUsername = createValidator({\n    required: true,\n    minLength: 3,\n    maxLength: 20,\n    pattern: /^[a-zA-Z0-9_]+$/,\n    custom: (value) => !value.includes("admin"),\n    customMessage: "Username cannot contain \'admin\'"\n});\n\nconsole.log(validateEmail("john@example.com"));  // { isValid: true, errors: [] }\nconsole.log(validateEmail("invalid"));           // { isValid: false, errors: [...] }',
  hint: 'Validation rules become permanent part of validator function.'
},
{
  id: 'js_closure_24',
  topicId: 'js_closure',
  question: 'Create function for rate limiting API calls.',
  mathSolution: 'Track timestamps of recent calls.',
  codeSolution: 'function createRateLimiter(limit, windowMs) {\n    const calls = [];\n    \n    return function() {\n        const now = Date.now();\n        \n        // Remove old calls outside time window\n        while (calls.length && calls[0] < now - windowMs) {\n            calls.shift();\n        }\n        \n        if (calls.length < limit) {\n            calls.push(now);\n            return true;\n        }\n        return false;\n    };\n}\n\nconst rateLimiter = createRateLimiter(3, 10000); // 3 calls per 10 seconds\n\nfor (let i = 0; i < 10; i++) {\n    console.log(`Call ${i}:`, rateLimiter() ? "Allowed\" : "Blocked\");\n}',
  hint: 'Calls array tracks each call timestamp for rate limiting.'
},
{
  id: 'js_closure_25',
  topicId: 'js_closure',
  question: 'Create function that retries another function.',
  mathSolution: 'Retry count and delay stored in closure.',
  codeSolution: 'function retryable(maxRetries, delay = 1000) {\n    return function(fn) {\n        return async function(...args) {\n            let lastError;\n            \n            for (let i = 0; i <= maxRetries; i++) {\n                try {\n                    return await fn(...args);\n                } catch (error) {\n                    lastError = error;\n                    console.log(`Attempt ${i + 1} failed, retrying in ${delay}ms`);\n                    await new Promise(resolve => setTimeout(resolve, delay));\n                }\n            }\n            throw lastError;\n        };\n    };\n}\n\nconst retryableOperation = retryable(3, 500);\n\nlet attempts = 0;\nconst flakyFunction = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Temporary failure");\n    return "Success!";\n};\n\nconst robustFunction = retryableOperation(flakyFunction);\nrobustFunction().then(console.log).catch(console.log);  // Success! after retries',
  hint: 'Retry function returns closure that wraps target function.'
},
{
  id: 'js_closure_26',
  topicId: 'js_closure',
  question: 'Create function composition using closures.',
  mathSolution: 'Combine multiple functions into pipeline.',
  codeSolution: 'function compose(...functions) {\n    return function(initialValue) {\n        return functions.reduceRight((value, fn) => fn(value), initialValue);\n    };\n}\n\nfunction pipe(...functions) {\n    return function(initialValue) {\n        return functions.reduce((value, fn) => fn(value), initialValue);\n    };\n}\n\nconst add2 = x => x + 2;\nconst multiply3 = x => x * 3;\nconst square = x => x * x;\n\nconst composed = compose(square, multiply3, add2);\nconst piped = pipe(add2, multiply3, square);\n\nconsole.log(composed(5));  // ((5+2)*3)^2 = 441\nconsole.log(piped(5));     // ((5+2)*3)^2 = 441\n\n// Create specific pipelines\nconst processOrder = pipe(\n    x => x * 0.9,    // 10% discount\n    x => x + 5,       // shipping\n    x => Math.round(x * 100) / 100  // round to 2 decimals\n);\n\nconsole.log(processOrder(100));  // (100*0.9)+5 = 95.00',
  hint: 'Compose/pipe accumulates transformations in closure.'
},
{
  id: 'js_closure_27',
  topicId: 'js_closure',
  question: 'Create function for state machine using closure.',
  mathSolution: 'Current state stored in closure, transitions return new state.',
  codeSolution: 'function createStateMachine(initialState, transitions) {\n    let currentState = initialState;\n    \n    return function(action) {\n        const nextState = transitions[currentState]?.[action];\n        if (nextState) {\n            currentState = nextState;\n            return { state: currentState, changed: true };\n        }\n        return { state: currentState, changed: false, error: \"Invalid transition\" };\n    };\n}\n\nconst trafficLight = createStateMachine(\"red\", {\n    red: { next: \"green\", timer: 3000 },\n    green: { next: \"yellow\", timer: 2000 },\n    yellow: { next: \"red\", timer: 1000 }\n});\n\nconsole.log(trafficLight(\"next\"));  // { state: \"green\", changed: true }\nconsole.log(trafficLight(\"next\"));  // { state: \"yellow\", changed: true }\nconsole.log(trafficLight(\"next\"));  // { state: \"red\", changed: true }\nconsole.log(trafficLight(\"reset\")); // { state: \"red\", changed: false, error: \"Invalid transition\" }',
  hint: 'State machine transitions stored in closure, current state preserved.'
},
{
  id: 'js_closure_28',
  topicId: 'js_closure',
  question: 'Create function for lazy evaluation using closure.',
  mathSolution: 'Computation deferred until value needed.',
  codeSolution: 'function lazy(fn) {\n    let computed = false;\n    let result;\n    \n    return function() {\n        if (!computed) {\n            result = fn();\n            computed = true;\n        }\n        return result;\n    };\n}\n\nconst expensiveComputation = lazy(() => {\n    console.log("Performing expensive calculation...\");\n    let sum = 0;\n    for (let i = 0; i < 1000000; i++) sum += i;\n    return sum;\n});\n\nconsole.log("Lazy function created, not computed yet\");\nconsole.log(expensiveComputation());  // Performs calculation\nconsole.log(expensiveComputation());  // Returns cached result (no calculation)',
  hint: 'Lazy evaluation defers work until first access.'
},
{
  id: 'js_closure_29',
  topicId: 'js_closure',
  question: 'Create function with undo/redo functionality.',
  mathSolution: 'Maintain history stack in closure.',
  codeSolution: 'function createUndoable(initialValue) {\n    let current = initialValue;\n    const history = [initialValue];\n    let position = 0;\n    \n    return {\n        get: () => current,\n        set: (value) => {\n            current = value;\n            history.length = position + 1;\n            history.push(value);\n            position++;\n        },\n        undo: () => {\n            if (position > 0) {\n                position--;\n                current = history[position];\n                return current;\n            }\n            return null;\n        },\n        redo: () => {\n            if (position < history.length - 1) {\n                position++;\n                current = history[position];\n                return current;\n            }\n            return null;\n        },\n        getHistory: () => [...history]\n    };\n}\n\nconst state = createUndoable(0);\nstate.set(10);\nstate.set(20);\nstate.set(30);\nconsole.log(state.get());  // 30\nstate.undo();\nconsole.log(state.get());  // 20\nstate.undo();\nconsole.log(state.get());  // 10\nstate.redo();\nconsole.log(state.get());  // 20\nconsole.log(state.getHistory());  // [0, 10, 20, 30]',
  hint: 'History stack and position pointer stored in closure.'
},
{
  id: 'js_closure_30',
  topicId: 'js_closure',
  question: 'Create function for time-based caching (TTL).',
  mathSolution: 'Store timestamps with cached values.',
  codeSolution: 'function createTTLCache(ttlMs = 60000) {\n    const cache = new Map();\n    \n    return {\n        set: (key, value) => {\n            cache.set(key, {\n                value,\n                expires: Date.now() + ttlMs\n            });\n        },\n        get: (key) => {\n            const item = cache.get(key);\n            if (!item) return null;\n            if (Date.now() > item.expires) {\n                cache.delete(key);\n                return null;\n            }\n            return item.value;\n        },\n        has: (key) => {\n            const item = cache.get(key);\n            if (!item) return false;\n            if (Date.now() > item.expires) {\n                cache.delete(key);\n                return false;\n            }\n            return true;\n        },\n        clear: () => cache.clear()\n    };\n}\n\nconst userCache = createTTLCache(5000); // 5 seconds TTL\nuserCache.set(\"user_1\", { name: \"John\" });\nconsole.log(userCache.get(\"user_1\"));  // { name: \"John\" }\nsetTimeout(() => {\n    console.log(userCache.get(\"user_1\"));  // null (expired)\n}, 6000);',
  hint: 'Cache stores value and expiration timestamp.'
},
{
  id: 'js_closure_31',
  topicId: 'js_closure',
  question: 'Create function for batch processing with delay.',
  mathSolution: 'Accumulate items and process after delay.',
  codeSolution: 'function createBatcher(processBatch, delay = 100) {\n    let batch = [];\n    let timeoutId;\n    \n    return function(item) {\n        batch.push(item);\n        \n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => {\n            if (batch.length > 0) {\n                processBatch([...batch]);\n                batch = [];\n            }\n        }, delay);\n    };\n}\n\nconst logBatch = createBatcher((items) => {\n    console.log(`Processing batch of ${items.length} items:`, items);\n}, 500);\n\nlogBatch(\"item1\");\nlogBatch(\"item2\");\nlogBatch(\"item3\");\nsetTimeout(() => logBatch(\"item4\"), 300);  // Joins first batch\nsetTimeout(() => logBatch(\"item5\"), 600);  // New batch',
  hint: 'Batcher collects items and processes batches together.'
},
{
  id: 'js_closure_32',
  topicId: 'js_closure',
  question: 'Create function for polling with interval.',
  mathSolution: 'Preserve interval reference for stopping.',
  codeSolution: 'function createPoller(fn, interval) {\n    let isRunning = false;\n    let intervalId;\n    \n    function poll() {\n        if (!isRunning) return;\n        fn();\n        intervalId = setTimeout(poll, interval);\n    }\n    \n    return {\n        start: () => {\n            if (!isRunning) {\n                isRunning = true;\n                poll();\n            }\n        },\n        stop: () => {\n            isRunning = false;\n            if (intervalId) {\n                clearTimeout(intervalId);\n                intervalId = null;\n            }\n        },\n        isActive: () => isRunning\n    };\n}\n\nconst poller = createPoller(() => {\n    console.log(\"Checking for updates at\", new Date().toLocaleTimeString());\n}, 2000);\n\npoller.start();\n// Stop after 7 seconds\nsetTimeout(() => {\n    poller.stop();\n    console.log(\"Polling stopped\");\n}, 7000);',
  hint: 'Poller maintains running state and interval ID.'
},
{
  id: 'js_closure_33',
  topicId: 'js_closure',
  question: 'Create function for subscriber/publisher pattern.',
  mathSolution: 'Maintain subscriber list in closure.',
  codeSolution: 'function createEventBus() {\n    const subscribers = {};\n    \n    return {\n        subscribe: (event, callback) => {\n            if (!subscribers[event]) {\n                subscribers[event] = [];\n            }\n            subscribers[event].push(callback);\n            \n            // Return unsubscribe function\n            return () => {\n                const index = subscribers[event].indexOf(callback);\n                if (index > -1) {\n                    subscribers[event].splice(index, 1);\n                }\n            };\n        },\n        emit: (event, data) => {\n            if (subscribers[event]) {\n                subscribers[event].forEach(callback => {\n                    callback(data);\n                });\n            }\n        },\n        clear: (event) => {\n            if (event) delete subscribers[event];\n            else Object.keys(subscribers).forEach(key => delete subscribers[key]);\n        }\n    };\n}\n\nconst bus = createEventBus();\n\nconst unsubscribe = bus.subscribe(\"user-login\", (user) => {\n    console.log(`User ${user.name} logged in at ${user.time}`);\n});\n\nbus.subscribe(\"user-login\", (user) => {\n    console.log(`Welcome, ${user.name}!`);\n});\n\nbus.emit(\"user-login\", { name: \"John\", time: Date.now() });\n\nunsubscribe();  // Remove first subscriber\nbus.emit(\"user-login\", { name: \"Jane\", time: Date.now() });\n// Only second subscriber runs',
  hint: 'Event bus maintains subscriber registry in closure.'
},
{
  id: 'js_closure_34',
  topicId: 'js_closure',
  question: 'Create function for timeout with promise.',
  mathSolution: 'Closure preserves timer reference.',
  codeSolution: 'function createTimeout(delay) {\n    let timeoutId;\n    let rejectFn;\n    \n    const timeoutPromise = new Promise((resolve, reject) => {\n        rejectFn = reject;\n        timeoutId = setTimeout(() => {\n            reject(new Error(`Timeout after ${delay}ms`));\n        }, delay);\n    });\n    \n    return {\n        promise: timeoutPromise,\n        cancel: () => {\n            clearTimeout(timeoutId);\n            rejectFn({ cancelled: true });\n        }\n    };\n}\n\nconst timeout = createTimeout(3000);\ntimeout.promise.catch(err => console.log(err.message));\n\n// Cancel after 1 second\nsetTimeout(() => timeout.cancel(), 1000);',
  hint: 'Timeout preserves IDs and reject functions.'
},
{
  id: 'js_closure_35',
  topicId: 'js_closure',
  question: 'Create function for transform stream processing.',
  mathSolution: 'Maintain buffer and state between chunks.',
  codeSolution: 'function createLineSplitter() {\n    let buffer = \"\";\n    \n    return function(chunk) {\n        buffer += chunk;\n        const lines = buffer.split(\"\\n\");\n        buffer = lines.pop() || \"\";\n        return lines;\n    };\n}\n\nconst splitter = createLineSplitter();\n\nconsole.log(splitter(\"Hello\\nWorld\\nTest\"));  // [\"Hello\", \"World\"]\nconsole.log(splitter(\"ing\\nMore\\nData\\n\"));   // [\"Testing\", \"More\", \"Data\"]\nconsole.log(splitter(\"Final\"));                // [] (buffered)\nconsole.log(splitter(\"\\nComplete\"));          // [\"Final\", \"Complete\"]',
  hint: 'Buffer persists between calls for partial data.'
},
{
  id: 'js_closure_36',
  topicId: 'js_closure',
  question: 'Create throttled queue for API requests.',
  mathSolution: 'Queue and processing state in closure.',
  codeSolution: 'function createThrottledQueue(limit = 2, interval = 1000) {\n    const queue = [];\n    let active = 0;\n    let lastRun = 0;\n    \n    async function process() {\n        if (queue.length === 0 || active >= limit) return;\n        \n        const now = Date.now();\n        const timeSinceLast = now - lastRun;\n        if (timeSinceLast < interval / limit) {\n            setTimeout(process, interval / limit - timeSinceLast);\n            return;\n        }\n        \n        const { fn, resolve, reject } = queue.shift();\n        active++;\n        lastRun = Date.now();\n        \n        try {\n            const result = await fn();\n            resolve(result);\n        } catch (error) {\n            reject(error);\n        } finally {\n            active--;\n            process();\n        }\n    }\n    \n    return function(fn) {\n        return new Promise((resolve, reject) => {\n            queue.push({ fn, resolve, reject });\n            process();\n        });\n    };\n}\n\nconst throttledRequest = createThrottledQueue(2, 1000);\n\nfor (let i = 0; i < 5; i++) {\n    throttledRequest(async () => {\n        console.log(`Request ${i} at ${Date.now()}`);\n        return i;\n    });\n}',
  hint: 'Queue stores pending requests, processes at limited rate.'
},
{
  id: 'js_closure_37',
  topicId: 'js_closure',
  question: 'Create function for simple dependency injection.',
  mathSolution: 'Dependencies stored in closure for later use.',
  codeSolution: 'function createContainer() {\n    const dependencies = {};\n    const instances = {};\n    \n    return {\n        register: (name, dependency) => {\n            dependencies[name] = dependency;\n        },\n        factory: (name, factoryFn) => {\n            dependencies[name] = factoryFn;\n        },\n        get: (name) => {\n            if (instances[name]) return instances[name];\n            \n            const dependency = dependencies[name];\n            if (!dependency) throw new Error(`Dependency ${name} not found`);\n            \n            if (typeof dependency === \"function\" && !dependency.prototype) {\n                // Factory function\n                instances[name] = dependency(this);\n            } else {\n                instances[name] = dependency;\n            }\n            \n            return instances[name];\n        },\n        clear: () => {\n            Object.keys(instances).forEach(key => delete instances[key]);\n        }\n    };\n}\n\nconst container = createContainer();\n\ncontainer.register(\"config\", { apiUrl: \"https://api.example.com\", timeout: 5000 });\ncontainer.factory(\"apiClient\", (c) => {\n    const config = c.get(\"config\");\n    return {\n        fetch: (endpoint) => fetch(`${config.apiUrl}/${endpoint}`)\n    };\n});\n\nconst apiClient = container.get(\"apiClient\");\nconsole.log(apiClient.fetch);  // Function\n// apiClient.fetch(\"users\") would make request',
  hint: 'Container stores registration and resolved instances.'
},
{
  id: 'js_closure_38',
  topicId: 'js_closure',
  question: 'Create function for request deduplication.',
  mathSolution: 'Track in-flight requests by key.',
  codeSolution: 'function createRequestDeduplicator() {\n    const pendingRequests = new Map();\n    \n    return async function(requestFn, key) {\n        if (pendingRequests.has(key)) {\n            console.log(`Deduplicating request for: ${key}`);\n            return pendingRequests.get(key);\n        }\n        \n        const promise = requestFn().finally(() => {\n            pendingRequests.delete(key);\n        });\n        \n        pendingRequests.set(key, promise);\n        return promise;\n    };\n}\n\nconst dedupe = createRequestDeduplicator();\n\nlet callCount = 0;\nconst fetchUser = async () => {\n    callCount++;\n    await new Promise(r => setTimeout(r, 100));\n    return { id: 1, name: \"John\" };\n};\n\n// Multiple identical requests\nPromise.all([\n    dedupe(() => fetchUser(), \"user_1\"),\n    dedupe(() => fetchUser(), \"user_1\"),\n    dedupe(() => fetchUser(), \"user_1\"),\n    dedupe(() => fetchUser(), \"user_2\")\n]).then(results => {\n    console.log(`Fetch called ${callCount} times`);  // Called 2 times\n});',
  hint: 'PendingRequests Map stores in-progress promises.'
},
{
  id: 'js_closure_39',
  topicId: 'js_closure',
  question: 'Create function for circular buffer.',
  mathSolution: 'Buffer array and pointer stored in closure.',
  codeSolution: 'function createCircularBuffer(size) {\n    const buffer = new Array(size);\n    let writeIndex = 0;\n    let readIndex = 0;\n    let count = 0;\n    \n    return {\n        write: (value) => {\n            buffer[writeIndex] = value;\n            writeIndex = (writeIndex + 1) % size;\n            if (count < size) count++;\n            else readIndex = (readIndex + 1) % size;\n        },\n        read: () => {\n            if (count === 0) return null;\n            const value = buffer[readIndex];\n            readIndex = (readIndex + 1) % size;\n            count--;\n            return value;\n        },\n        peek: () => count === 0 ? null : buffer[readIndex],\n        size: () => count,\n        capacity: () => size,\n        clear: () => {\n            writeIndex = 0;\n            readIndex = 0;\n            count = 0;\n        }\n    };\n}\n\nconst buffer = createCircularBuffer(3);\nbuffer.write(1);\nbuffer.write(2);\nbuffer.write(3);\nbuffer.write(4);  // Overwrites 1\nconsole.log(buffer.read());  // 2\nconsole.log(buffer.read());  // 3\nconsole.log(buffer.read());  // 4\nconsole.log(buffer.read());  // null',
  hint: 'Circular buffer maintains indices and count in closure.'
},
{
  id: 'js_closure_40',
  topicId: 'js_closure',
  question: 'Create function with automatic resource cleanup.',
  mathSolution: 'Resource reference and cleanup in closure.',
  codeSolution: 'function withResource(create, cleanup) {\n    return async function(callback) {\n        const resource = await create();\n        try {\n            return await callback(resource);\n        } finally {\n            await cleanup(resource);\n        }\n    };\n}\n\n// Example: File operations\nconst withFile = withResource(\n    () => ({ fd: 123, name: \"test.txt\", content: \"data\" }),\n    async (file) => console.log(`Closing file: ${file.name}`)\n);\n\n// Example: Database connection\nconst withDB = withResource(\n    async () => ({ connected: true, query: (sql) => `Result of ${sql}` }),\n    async (db) => console.log(\"Disconnecting database\")\n);\n\nwithFile(async (file) => {\n    console.log(`Reading ${file.name}`);\n    return file.content;\n}).then(console.log);\n\nwithDB(async (db) => {\n    console.log(db.query(\"SELECT * FROM users\"));\n    return \"done\";\n});',
  hint: 'Resource manager ensures cleanup happens regardless of errors.'
},
{
  id: 'js_closure_41',
  topicId: 'js_closure',
  question: 'Create function for pub/sub with wildcard topics.',
  mathSolution: 'Topic matching logic in closure.',
  codeSolution: 'function createWildcardEventBus() {\n    const subscribers = new Map();\n    \n    function matchTopic(topic, pattern) {\n        const topicParts = topic.split(\".\");\n        const patternParts = pattern.split(\".\");\n        \n        if (patternParts.length > topicParts.length) return false;\n        \n        for (let i = 0; i < patternParts.length; i++) {\n            if (patternParts[i] === \"**\") return true;\n            if (patternParts[i] !== \"*\" && patternParts[i] !== topicParts[i]) return false;\n        }\n        return true;\n    }\n    \n    return {\n        subscribe: (pattern, callback) => {\n            if (!subscribers.has(pattern)) {\n                subscribers.set(pattern, []);\n            }\n            subscribers.get(pattern).push(callback);\n            \n            return () => {\n                const callbacks = subscribers.get(pattern);\n                const index = callbacks.indexOf(callback);\n                if (index > -1) callbacks.splice(index, 1);\n            };\n        },\n        publish: (topic, data) => {\n            subscribers.forEach((callbacks, pattern) => {\n                if (matchTopic(topic, pattern)) {\n                    callbacks.forEach(cb => cb(data, topic));\n                }\n            });\n        }\n    };\n}\n\nconst bus = createWildcardEventBus();\n\nbus.subscribe(\"user.*\", (data, topic) => {\n    console.log(`Wildcard: ${topic} ->`, data);\n});\n\nbus.subscribe(\"user.login\", (data) => {\n    console.log(`User logged in: ${data.name}`);\n});\n\nbus.publish(\"user.login\", { name: \"John\", time: Date.now() });\nbus.publish(\"user.logout\", { name: \"John\" });\nbus.publish(\"system.alert\", { message: \"Warning\" });  // Not matched',
  hint: 'Wildcard matcher enables flexible topic subscriptions.'
},
{
  id: 'js_closure_42',
  topicId: 'js_closure',
  question: 'Create function for priority queue.',
  mathSolution: 'Items stored with priority, sorted on insertion.',
  codeSolution: 'function createPriorityQueue() {\n    const items = [];\n    \n    return {\n        enqueue: (value, priority = 0) => {\n            items.push({ value, priority });\n            items.sort((a, b) => b.priority - a.priority);\n        },\n        dequeue: () => {\n            if (items.length === 0) return null;\n            return items.shift().value;\n        },\n        peek: () => items[0]?.value || null,\n        size: () => items.length,\n        isEmpty: () => items.length === 0\n    };\n}\n\nconst pq = createPriorityQueue();\npq.enqueue(\"low priority\", 1);\npq.enqueue(\"high priority\", 10);\npq.enqueue(\"medium priority\", 5);\npq.enqueue(\"critical\", 100);\n\nconsole.log(pq.dequeue());  // critical\nconsole.log(pq.dequeue());  // high priority\nconsole.log(pq.dequeue());  // medium priority\nconsole.log(pq.dequeue());  // low priority',
  hint: 'Priority queue maintains sorted order in closure.'
},
{
  id: 'js_closure_43',
  topicId: 'js_closure',
  question: 'Create function for sliding window statistics.',
  mathSolution: 'Maintain window array and running stats.',
  codeSolution: 'function createSlidingWindow(windowSize) {\n    const window = [];\n    let sum = 0;\n    \n    return {\n        add: (value) => {\n            window.push(value);\n            sum += value;\n            if (window.length > windowSize) {\n                sum -= window.shift();\n            }\n        },\n        getAverage: () => {\n            if (window.length === 0) return 0;\n            return sum / window.length;\n        },\n        getMax: () => window.length === 0 ? 0 : Math.max(...window),\n        getMin: () => window.length === 0 ? 0 : Math.min(...window),\n        getSize: () => window.length,\n        clear: () => {\n            window.length = 0;\n            sum = 0;\n        }\n    };\n}\n\nconst stats = createSlidingWindow(5);\n[10, 20, 30, 40, 50, 60, 70].forEach(v => {\n    stats.add(v);\n    console.log(`Avg of last ${stats.getSize()}: ${stats.getAverage()}`);\n});\n// Keeps only last 5 values, rolling average',
  hint: 'Sliding window maintains sum for O(1) average calculation.'
},
{
  id: 'js_closure_44',
  topicId: 'js_closure',
  question: 'Create function for retry with exponential backoff.',
  mathSolution: 'Track attempt count and calculate delay.',
  codeSolution: 'function createRetryWithBackoff(maxRetries, baseDelay = 100, maxDelay = 10000) {\n    return function(fn) {\n        let attempt = 0;\n        \n        async function execute() {\n            try {\n                return await fn();\n            } catch (error) {\n                if (attempt >= maxRetries) throw error;\n                \n                const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay);\n                console.log(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms`);\n                attempt++;\n                \n                await new Promise(resolve => setTimeout(resolve, delay));\n                return execute();\n            }\n        }\n        \n        return execute();\n    };\n}\n\nlet attempts = 0;\nconst flakyOp = () => {\n    attempts++;\n    if (attempts < 4) throw new Error(`Attempt ${attempts} failed`);\n    return \"Success after retries\";\n};\n\nconst withBackoff = createRetryWithBackoff(5, 100, 2000);\nwithBackoff(flakyOp).then(console.log).catch(console.log);',
  hint: 'Exponential backoff increases delay between retries.'
},
{
  id: 'js_closure_45',
  topicId: 'js_closure',
  question: 'Create function for rate-limited queue with time window.',
  mathSolution: 'Track request times within window.',
  codeSolution: 'function createRateLimitedQueue(maxRequests, windowMs) {\n    const queue = [];\n    const requestTimes = [];\n    let processing = false;\n    \n    async function process() {\n        if (processing) return;\n        processing = true;\n        \n        while (queue.length > 0) {\n            const now = Date.now();\n            // Clean old timestamps\n            while (requestTimes.length && requestTimes[0] <= now - windowMs) {\n                requestTimes.shift();\n            }\n            \n            if (requestTimes.length >= maxRequests) {\n                const waitTime = requestTimes[0] + windowMs - now;\n                await new Promise(resolve => setTimeout(resolve, waitTime));\n                continue;\n            }\n            \n            const { fn, resolve, reject } = queue.shift();\n            requestTimes.push(Date.now());\n            \n            try {\n                const result = await fn();\n                resolve(result);\n            } catch (error) {\n                reject(error);\n            }\n        }\n        \n        processing = false;\n    }\n    \n    return function(fn) {\n        return new Promise((resolve, reject) => {\n            queue.push({ fn, resolve, reject });\n            process();\n        });\n    };\n}\n\nconst limited = createRateLimitedQueue(2, 1000);\n\nfor (let i = 0; i < 10; i++) {\n    limited(async () => {\n        console.log(`Request ${i} at ${Date.now() % 10000}`);\n        return i;\n    }).catch(console.log);\n}',
  hint: 'Queue ensures request rate doesn\'t exceed limit.'
},
{
  id: 'js_closure_46',
  topicId: 'js_closure',
  question: 'Create function for property path access (lodash.get style).',
  mathSolution: 'Path parsing and traversal cached in closure.',
  codeSolution: 'function createPathGetter(path) {\n    const keys = path.split(\".\");\n    \n    return function(obj) {\n        let current = obj;\n        for (const key of keys) {\n            if (current === null || current === undefined) return undefined;\n            current = current[key];\n        }\n        return current;\n    };\n}\n\nconst data = {\n    user: {\n        profile: {\n            name: \"John Doe\",\n            address: {\n                city: \"New York\",\n                zip: 10001\n            }\n        }\n    }\n};\n\nconst getName = createPathGetter(\"user.profile.name\");\nconst getCity = createPathGetter(\"user.profile.address.city\");\nconst getMissing = createPathGetter(\"user.profile.phone\");\n\nconsole.log(getName(data));   // John Doe\nconsole.log(getCity(data));   // New York\nconsole.log(getMissing(data)); // undefined',
  hint: 'Pre-parsed path stored in closure for performance.'
},
{
  id: 'js_closure_47',
  topicId: 'js_closure',
  question: 'Create function for LIFO cache (LRU - Least Recently Used).',
  mathSolution: 'Maintain order array and cache map.',
  codeSolution: 'function createLRUCache(capacity) {\n    const cache = new Map();\n    const order = [];\n    \n    return {\n        get: (key) => {\n            if (!cache.has(key)) return null;\n            \n            // Move to end (most recent)\n            const index = order.indexOf(key);\n            order.splice(index, 1);\n            order.push(key);\n            return cache.get(key);\n        },\n        set: (key, value) => {\n            if (cache.has(key)) {\n                const index = order.indexOf(key);\n                order.splice(index, 1);\n            } else if (order.length >= capacity) {\n                const oldest = order.shift();\n                cache.delete(oldest);\n            }\n            \n            cache.set(key, value);\n            order.push(key);\n        },\n        has: (key) => cache.has(key),\n        size: () => cache.size,\n        clear: () => {\n            cache.clear();\n            order.length = 0;\n        }\n    };\n}\n\nconst lru = createLRUCache(3);\nlru.set(\"a\", 1);\nlru.set(\"b\", 2);\nlru.set(\"c\", 3);\nlru.get(\"a\");  // Makes \"a\" most recent\nlru.set(\"d\", 4);  // Removes \"b\" (least recent)\n\nconsole.log(lru.get(\"a\"));  // 1 (exists)\nconsole.log(lru.get(\"b\"));  // null (evicted)\nconsole.log(lru.get(\"c\"));  // 3 (exists)\nconsole.log(lru.get(\"d\"));  // 4 (exists)',
  hint: 'LRU cache tracks access order in separate array.'
},
{
  id: 'js_closure_48',
  topicId: 'js_closure',
  question: 'Create function for async queue with concurrency limit.',
  mathSolution: 'Track active tasks and pending queue.',
  codeSolution: 'function createAsyncQueue(concurrency = 3) {\n    const queue = [];\n    let active = 0;\n    \n    async function process() {\n        if (active >= concurrency || queue.length === 0) return;\n        \n        active++;\n        const { fn, resolve, reject } = queue.shift();\n        \n        try {\n            const result = await fn();\n            resolve(result);\n        } catch (error) {\n            reject(error);\n        } finally {\n            active--;\n            process();\n        }\n    }\n    \n    return function(fn) {\n        return new Promise((resolve, reject) => {\n            queue.push({ fn, resolve, reject });\n            process();\n        });\n    };\n}\n\nconst asyncQueue = createAsyncQueue(2);\n\nfunction createDelayedTask(id, delay) {\n    return () => new Promise(resolve => {\n        setTimeout(() => {\n            console.log(`Task ${id} completed at ${Date.now() % 10000}`);\n            resolve(id);\n        }, delay);\n    });\n}\n\n// Start 5 tasks with concurrency limit 2\nfor (let i = 0; i < 5; i++) {\n    asyncQueue(createDelayedTask(i, 1000)).then(console.log);\n}',
  hint: 'Queue controls how many tasks run simultaneously.'
},
{
  id: 'js_closure_49',
  topicId: 'js_closure',
  question: 'Create function for time-limited cache with cleanup.',
  mathSolution: 'Cache entries with expiration, auto-cleanup.',
  codeSolution: 'function createTimedCache(defaultTTL = 60000) {\n    const cache = new Map();\n    let cleanupInterval;\n    \n    function startCleanup(interval = 30000) {\n        if (cleanupInterval) clearInterval(cleanupInterval);\n        cleanupInterval = setInterval(() => {\n            const now = Date.now();\n            for (const [key, { expires }] of cache) {\n                if (expires <= now) {\n                    cache.delete(key);\n                }\n            }\n        }, interval);\n    }\n    \n    function stopCleanup() {\n        if (cleanupInterval) {\n            clearInterval(cleanupInterval);\n            cleanupInterval = null;\n        }\n    }\n    \n    return {\n        set: (key, value, ttl = defaultTTL) => {\n            cache.set(key, {\n                value,\n                expires: Date.now() + ttl\n            });\n        },\n        get: (key) => {\n            const item = cache.get(key);\n            if (!item) return null;\n            if (item.expires <= Date.now()) {\n                cache.delete(key);\n                return null;\n            }\n            return item.value;\n        },\n        has: (key) => {\n            const item = cache.get(key);\n            if (!item) return false;\n            if (item.expires <= Date.now()) {\n                cache.delete(key);\n                return false;\n            }\n            return true;\n        },\n        delete: (key) => cache.delete(key),\n        clear: () => cache.clear(),\n        size: () => cache.size,\n        startCleanup,\n        stopCleanup\n    };\n}\n\nconst cache = createTimedCache(2000);\ncache.set(\"key1\", \"value1\");\nconsole.log(cache.get(\"key1\"));  // value1\nsetTimeout(() => {\n    console.log(cache.get(\"key1\"));  // null (expired)\n}, 3000);',
  hint: 'Timed cache auto-removes expired entries periodically.'
},
{
  id: 'js_closure_50',
  topicId: 'js_closure',
  question: 'Build complete state management store (Redux-like).',
  mathSolution: 'Store state, listeners, and actions in closure.',
  codeSolution: 'function createStore(initialState, reducer) {\n    let state = initialState;\n    let listeners = [];\n    let isDispatching = false;\n    \n    function getState() {\n        return state;\n    }\n    \n    function dispatch(action) {\n        if (isDispatching) {\n            throw new Error(\"Reducers may not dispatch actions\");\n        }\n        \n        try {\n            isDispatching = true;\n            state = reducer(state, action);\n        } finally {\n            isDispatching = false;\n        }\n        \n        listeners.forEach(listener => listener());\n        return action;\n    }\n    \n    function subscribe(listener) {\n        listeners.push(listener);\n        \n        return function unsubscribe() {\n            const index = listeners.indexOf(listener);\n            if (index > -1) listeners.splice(index, 1);\n        };\n    }\n    \n    function replaceReducer(newReducer) {\n        reducer = newReducer;\n        dispatch({ type: \"@@INIT\" });\n    }\n    \n    // Initialize\n    dispatch({ type: \"@@INIT\" });\n    \n    return { getState, dispatch, subscribe, replaceReducer };\n}\n\n// Example usage\nconst initialState = {\n    counter: 0,\n    user: null,\n    loading: false\n};\n\nfunction rootReducer(state = initialState, action) {\n    switch (action.type) {\n        case \"INCREMENT\":\n            return { ...state, counter: state.counter + 1 };\n        case \"DECREMENT\":\n            return { ...state, counter: state.counter - 1 };\n        case \"SET_USER\":\n            return { ...state, user: action.payload };\n        case \"SET_LOADING\":\n            return { ...state, loading: action.payload };\n        default:\n            return state;\n    }\n}\n\nconst store = createStore(initialState, rootReducer);\n\nconst unsubscribe = store.subscribe(() => {\n    console.log(\"State changed:\", store.getState());\n});\n\nstore.dispatch({ type: \"INCREMENT\" });\nstore.dispatch({ type: \"INCREMENT\" });\nstore.dispatch({ type: \"DECREMENT\" });\nstore.dispatch({ type: \"SET_USER\", payload: { name: \"John\", id: 1 } });\n\nconsole.log(\"Final state:\", store.getState());\nunsubscribe();',
  hint: 'Complete Redux-like store using closures for state and subscriptions.'
},
//promises
{
  id: 'js_promises_1',
  topicId: 'js_promises',
  question: 'Create a resolved promise using Promise.resolve().',
  mathSolution: 'Promise.resolve() creates already resolved promise.',
  codeSolution: 'const resolvedPromise = Promise.resolve("Success!");\nresolvedPromise.then(result => {\n    console.log(result);  // Success!\n});',
  hint: 'Use Promise.resolve() for immediate resolved values.'
},
{
  id: 'js_promises_2',
  topicId: 'js_promises',
  question: 'Create a rejected promise using Promise.reject().',
  mathSolution: 'Promise.reject() creates already rejected promise.',
  codeSolution: 'const rejectedPromise = Promise.reject("Error occurred!");\nrejectedPromise.catch(error => {\n    console.log(error);  // Error occurred!\n});',
  hint: 'Use Promise.reject() for immediate rejection.'
},
{
  id: 'js_promises_3',
  topicId: 'js_promises',
  question: 'Create a promise using the Promise constructor.',
  mathSolution: 'new Promise((resolve, reject) => {...}) creates promise.',
  codeSolution: 'const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve("Operation successful!");\n    }, 1000);\n});\nmyPromise.then(result => console.log(result));',
  hint: 'Call resolve() for success, reject() for failure.'
},
{
  id: 'js_promises_4',
  topicId: 'js_promises',
  question: 'Handle promise resolution using .then() method.',
  mathSolution: '.then() takes callback for resolved value.',
  codeSolution: 'const promise = Promise.resolve(42);\npromise.then(value => {\n    console.log(value);  // 42\n});',
  hint: '.then() executes when promise resolves.'
},
{
  id: 'js_promises_5',
  topicId: 'js_promises',
  question: 'Handle promise rejection using .catch() method.',
  mathSolution: '.catch() takes callback for rejected error.',
  codeSolution: 'const promise = Promise.reject("Something went wrong");\npromise.catch(error => {\n    console.log(error);  // Something went wrong\n});',
  hint: '.catch() handles errors from rejected promises.'
},
{
  id: 'js_promises_6',
  topicId: 'js_promises',
  question: 'Use .finally() to run code regardless of promise outcome.',
  mathSolution: '.finally() executes after resolve or reject.',
  codeSolution: 'const promise = Promise.resolve("Done");\npromise\n    .then(result => console.log(result))\n    .finally(() => console.log("Cleanup done"));\n// Output: Done\n//         Cleanup done',
  hint: '.finally() is great for cleanup operations.'
},
{
  id: 'js_promises_7',
  topicId: 'js_promises',
  question: 'Chain multiple .then() handlers.',
  mathSolution: '.then() returns new promise for chaining.',
  codeSolution: 'Promise.resolve(5)\n    .then(num => num * 2)\n    .then(num => num + 3)\n    .then(num => console.log(num))  // 13\n    .catch(err => console.error(err));',
  hint: 'Each .then() returns a new promise.'
},
{
  id: 'js_promises_8',
  topicId: 'js_promises',
  question: 'Return a promise from .then() for async chaining.',
  mathSolution: 'Returning promise from .then() waits for its resolution.',
  codeSolution: 'function asyncAdd(a, b) {\n    return Promise.resolve(a + b);\n}\nPromise.resolve(5)\n    .then(num => asyncAdd(num, 3))\n    .then(result => console.log(result))  // 8\n    .catch(err => console.error(err));',
  hint: 'Returning promise from .then() flattens nesting.'
},
{
  id: 'js_promises_9',
  topicId: 'js_promises',
  question: 'Throw error in .then() to trigger .catch().',
  mathSolution: 'Throwing error inside .then() goes to .catch().',
  codeSolution: 'Promise.resolve("data")\n    .then(data => {\n        throw new Error("Processing failed");\n    })\n    .catch(error => {\n        console.log(error.message);  // Processing failed\n    });',
  hint: 'Throw error to jump to catch handler.'
},
{
  id: 'js_promises_10',
  topicId: 'js_promises',
  question: 'Use Promise.all() to wait for multiple promises.',
  mathSolution: 'Promise.all() resolves when all promises resolve, rejects if any rejects.',
  codeSolution: 'const promise1 = Promise.resolve(1);\nconst promise2 = Promise.resolve(2);\nconst promise3 = Promise.resolve(3);\nPromise.all([promise1, promise2, promise3])\n    .then(results => console.log(results))  // [1, 2, 3]\n    .catch(err => console.error(err));',
  hint: 'Promise.all() returns array of results in same order.'
},
{
  id: 'js_promises_11',
  topicId: 'js_promises',
  question: 'Use Promise.all() with async delays.',
  mathSolution: 'Promise.all() waits for all promises to complete.',
  codeSolution: 'const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));\nPromise.all([delay(100, "A"), delay(50, "B"), delay(80, "C")])\n    .then(results => console.log(results))  // ["A", "B", "C"] (after 100ms)\n    .catch(err => console.error(err));',
  hint: 'Promise.all() waits for slowest promise.'
},
{
  id: 'js_promises_12',
  topicId: 'js_promises',
  question: 'Handle rejection in Promise.all() (fails fast).',
  mathSolution: 'Promise.all() rejects immediately if any promise rejects.',
  codeSolution: 'const promise1 = Promise.resolve(1);\nconst promise2 = Promise.reject("Error!");\nconst promise3 = Promise.resolve(3);\nPromise.all([promise1, promise2, promise3])\n    .then(results => console.log(results))\n    .catch(error => console.log(error));  // Error!',
  hint: 'Promise.all() fails fast on first rejection.'
},
{
  id: 'js_promises_13',
  topicId: 'js_promises',
  question: 'Use Promise.allSettled() to wait for all promises regardless of outcome.',
  mathSolution: 'Promise.allSettled() resolves when all promises settle (resolve or reject).',
  codeSolution: 'const promise1 = Promise.resolve(1);\nconst promise2 = Promise.reject("Error!");\nconst promise3 = Promise.resolve(3);\nPromise.allSettled([promise1, promise2, promise3])\n    .then(results => {\n        results.forEach(result => {\n            if (result.status === "fulfilled") {\n                console.log(`Value: ${result.value}`);\n            } else {\n                console.log(`Reason: ${result.reason}`);\n            }\n        });\n    });',
  hint: 'allSettled never rejects, always resolves with status objects.'
},
{
  id: 'js_promises_14',
  topicId: 'js_promises',
  question: 'Use Promise.race() to get first settled promise.',
  mathSolution: 'Promise.race() resolves/rejects with first promise that settles.',
  codeSolution: 'const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));\nconst slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));\nPromise.race([fast, slow])\n    .then(result => console.log(result));  // Fast',
  hint: 'Promise.race() returns first promise to settle (resolve or reject).'
},
{
  id: 'js_promises_15',
  topicId: 'js_promises',
  question: 'Use Promise.any() to get first fulfilled promise.',
  mathSolution: 'Promise.any() returns first fulfilled promise, ignores rejections.',
  codeSolution: 'const p1 = Promise.reject("Error1");\nconst p2 = Promise.resolve("Success");\nconst p3 = Promise.resolve("Another");\nPromise.any([p1, p2, p3])\n    .then(result => console.log(result))  // Success\n    .catch(err => console.log(err));',
  hint: 'Promise.any() ignores rejections, needs at least one success.'
},
{
  id: 'js_promises_16',
  topicId: 'js_promises',
  question: 'Handle Promise.any() when all promises reject.',
  mathSolution: 'Promise.any() rejects with AggregateError if all reject.',
  codeSolution: 'const p1 = Promise.reject("Error1");\nconst p2 = Promise.reject("Error2");\nPromise.any([p1, p2])\n    .then(result => console.log(result))\n    .catch(error => {\n        console.log(error instanceof AggregateError);  // true\n        console.log(error.errors);  // ["Error1", "Error2"]\n    });',
  hint: 'AggregateError contains all rejection reasons.'
},
{
  id: 'js_promises_17',
  topicId: 'js_promises',
  question: 'Create delay function using Promise and setTimeout.',
  mathSolution: 'Return promise that resolves after milliseconds.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\ndelay(1000).then(() => console.log("1 second passed"));',
  hint: 'Use setTimeout inside promise constructor.'
},
{
  id: 'js_promises_18',
  topicId: 'js_promises',
  question: 'Create promise that rejects after timeout.',
  mathSolution: 'Promise that rejects if operation takes too long.',
  codeSolution: 'function timeout(ms, message = "Timeout") {\n    return new Promise((_, reject) => {\n        setTimeout(() => reject(new Error(message)), ms);\n    });\n}\ntimeout(1000).catch(err => console.log(err.message));  // Timeout',
  hint: 'Use with Promise.race() for timeout functionality.'
},
{
  id: 'js_promises_19',
  topicId: 'js_promises',
  question: 'Implement timeout for any promise using Promise.race().',
  mathSolution: 'Race a promise against a timeout promise.',
  codeSolution: 'function withTimeout(promise, ms) {\n    const timeoutPromise = new Promise((_, reject) => \n        setTimeout(() => reject(new Error("Timeout")), ms));\n    return Promise.race([promise, timeoutPromise]);\n}\nconst slowPromise = new Promise(resolve => setTimeout(() => resolve("Done"), 2000));\nwithTimeout(slowPromise, 1000)\n    .then(result => console.log(result))\n    .catch(err => console.log(err.message));  // Timeout',
  hint: 'Race your promise with a timeout promise.'
},
{
  id: 'js_promises_20',
  topicId: 'js_promises',
  question: 'Convert callback-based function to promise.',
  mathSolution: 'Wrap callback in Promise constructor.',
  codeSolution: 'function readFilePromise(filename) {\n    return new Promise((resolve, reject) => {\n        // Simulating Node.js fs.readFile\n        setTimeout(() => {\n            if (filename === "valid.txt") {\n                resolve("File content");\n            } else {\n                reject(new Error("File not found"));\n            }\n        }, 100);\n    });\n}\nreadFilePromise("valid.txt")\n    .then(content => console.log(content))\n    .catch(err => console.log(err.message));',
  hint: 'Call resolve on success, reject on error.'
},
{
  id: 'js_promises_21',
  topicId: 'js_promises',
  question: 'Create a promise that resolves with dynamic data.',
  mathSolution: 'Use setTimeout to simulate async operation.',
  codeSolution: 'function fetchUserData(userId) {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve({ id: userId, name: "John Doe", age: 30 });\n        }, 500);\n    });\n}\nfetchUserData(1).then(user => console.log(user.name));  // John Doe',
  hint: 'Promises are great for async data fetching.'
},
{
  id: 'js_promises_22',
  topicId: 'js_promises',
  question: 'Chain promises for sequential async operations.',
  mathSolution: 'Return promise from .then() for sequential execution.',
  codeSolution: 'function step1() { return Promise.resolve("Step 1 done"); }\nfunction step2(prev) { return Promise.resolve(`${prev} -> Step 2 done`); }\nfunction step3(prev) { return Promise.resolve(`${prev} -> Step 3 done`); }\nstep1()\n    .then(result => step2(result))\n    .then(result => step3(result))\n    .then(final => console.log(final));\n// Step 1 done -> Step 2 done -> Step 3 done',
  hint: 'Each step waits for previous to complete.'
},
{
  id: 'js_promises_23',
  topicId: 'js_promises',
  question: 'Handle errors in promise chain.',
  mathSolution: 'Single .catch() handles errors from anywhere in chain.',
  codeSolution: 'Promise.resolve("start")\n    .then(() => { throw new Error("Something failed"); })\n    .then(() => console.log("This won\'t run"))\n    .catch(err => console.log(`Caught: ${err.message}`))  // Caught: Something failed\n    .finally(() => console.log("Cleanup"));',
  hint: 'One catch at end handles all preceding errors.'
},
{
  id: 'js_promises_24',
  topicId: 'js_promises',
  question: 'Use Promise.resolve() to normalize values to promises.',
  mathSolution: 'Promise.resolve() wraps non-promise values.',
  codeSolution: 'function asyncOperation(value) {\n    return Promise.resolve(value).then(v => v * 2);\n}\nconsole.log(asyncOperation(5));  // Promise\nasyncOperation(5).then(r => console.log(r));  // 10',
  hint: 'Promise.resolve() creates promise from any value.'
},
{
  id: 'js_promises_25',
  topicId: 'js_promises',
  question: 'Create a promise that resolves after random time.',
  mathSolution: 'Set random timeout to simulate variable latency.',
  codeSolution: 'function randomDelay(value) {\n    const delay = Math.random() * 2000;\n    return new Promise(resolve => {\n        setTimeout(() => resolve(value), delay);\n    });\n}\nrandomDelay("Done").then(result => console.log(result));',
  hint: 'Use for testing race conditions.'
},
{
  id: 'js_promises_26',
  topicId: 'js_promises',
  question: 'Retry failed promises with recursion.',
  mathSolution: 'Retry function that calls itself on failure.',
  codeSolution: 'function retry(fn, retries = 3) {\n    return fn().catch(err => {\n        if (retries > 0) {\n            console.log(`Retrying... ${retries} left`);\n            return retry(fn, retries - 1);\n        }\n        throw err;\n    });\n}\nlet attempts = 0;\nconst flakyFunction = () => {\n    attempts++;\n    if (attempts < 3) return Promise.reject("Failed");\n    return Promise.resolve("Success");\n};\nretry(flakyFunction, 3).then(result => console.log(result));  // Success',
  hint: 'Recursive retry with decreasing retry count.'
},
{
  id: 'js_promises_27',
  topicId: 'js_promises',
  question: 'Implement Promise.all() from scratch.',
  mathSolution: 'Track all promises, resolve when all complete.',
  codeSolution: 'function myPromiseAll(promises) {\n    return new Promise((resolve, reject) => {\n        const results = [];\n        let completed = 0;\n        promises.forEach((promise, index) => {\n            Promise.resolve(promise)\n                .then(result => {\n                    results[index] = result;\n                    completed++;\n                    if (completed === promises.length) resolve(results);\n                })\n                .catch(reject);\n        });\n        if (promises.length === 0) resolve([]);\n    });\n}\nmyPromiseAll([Promise.resolve(1), Promise.resolve(2)])\n    .then(results => console.log(results));  // [1, 2]',
  hint: 'Count completed promises, store results in order.'
},
{
  id: 'js_promises_28',
  topicId: 'js_promises',
  question: 'Implement Promise.race() from scratch.',
  mathSolution: 'Resolve or reject with first settled promise.',
  codeSolution: 'function myPromiseRace(promises) {\n    return new Promise((resolve, reject) => {\n        promises.forEach(promise => {\n            Promise.resolve(promise).then(resolve).catch(reject);\n        });\n    });\n}\nconst fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));\nconst slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 200));\nmyPromiseRace([fast, slow]).then(result => console.log(result));  // Fast',
  hint: 'First promise to settle determines outcome.'
},
{
  id: 'js_promises_29',
  topicId: 'js_promises',
  question: 'Implement Promise.any() from scratch.',
  mathSolution: 'Resolve with first fulfilled, reject if all reject.',
  codeSolution: 'function myPromiseAny(promises) {\n    return new Promise((resolve, reject) => {\n        const errors = [];\n        let rejectedCount = 0;\n        promises.forEach((promise, index) => {\n            Promise.resolve(promise)\n                .then(resolve)\n                .catch(err => {\n                    errors[index] = err;\n                    rejectedCount++;\n                    if (rejectedCount === promises.length) {\n                        reject(new AggregateError(errors, "All promises rejected"));\n                    }\n                });\n        });\n    });\n}\nmyPromiseAny([Promise.reject("Error"), Promise.resolve("Success")])\n    .then(result => console.log(result));  // Success',
  hint: 'Track rejections, resolve on first fulfillment.'
},
{
  id: 'js_promises_30',
  topicId: 'js_promises',
  question: 'Use promise for parallel API requests.',
  mathSolution: 'Promise.all for concurrent requests.',
  codeSolution: 'const fetchUser = () => Promise.resolve({ id: 1, name: "John" });\nconst fetchPosts = () => Promise.resolve([{ id: 1, title: "Post1" }]);\nconst fetchComments = () => Promise.resolve([{ id: 1, text: "Comment" }]);\nPromise.all([fetchUser(), fetchPosts(), fetchComments()])\n    .then(([user, posts, comments]) => {\n        console.log(user, posts, comments);\n    });',
  hint: 'Run independent async operations in parallel.'
},
{
  id: 'js_promises_31',
  topicId: 'js_promises',
  question: 'Use promise for sequential API calls (each depends on previous).',
  mathSolution: 'Chain promises for dependent operations.',
  codeSolution: 'function getUser(id) { return Promise.resolve({ id, name: "John" }); }\nfunction getPosts(userId) { return Promise.resolve([`Post by user ${userId}`]); }\nfunction getComments(postId) { return Promise.resolve([`Comment on post ${postId}`]); }\ngetUser(1)\n    .then(user => getPosts(user.id))\n    .then(posts => getComments(posts[0].id))\n    .then(comments => console.log(comments));',
  hint: 'Each step uses result from previous step.'
},
{
  id: 'js_promises_32',
  topicId: 'js_promises',
  question: 'Create a promise that resolves with set of values.',
  mathSolution: 'Resolve with object containing multiple values.',
  codeSolution: 'function fetchDashboardData() {\n    return Promise.all([\n        Promise.resolve({ stats: [1,2,3] }),\n        Promise.resolve({ recentUsers: ["Alice", "Bob"] }),\n        Promise.resolve({ notifications: 5 })\n    ]).then(([stats, users, notifications]) => ({\n        stats,\n        users,\n        notifications\n    }));\n}\nfetchDashboardData().then(data => console.log(data));',
  hint: 'Use object destructuring for clean API.'
},
{
  id: 'js_promises_33',
  topicId: 'js_promises',
  question: 'Handle promise rejection with fallback value.',
  mathSolution: 'Use .catch() to return default value.',
  codeSolution: 'function fetchData() {\n    return Promise.reject("Network error");\n}\nfetchData()\n    .catch(error => {\n        console.log(`Error: ${error}`);\n        return "Default data";\n    })\n    .then(data => console.log(data));  // Default data',
  hint: 'Return fallback value in catch handler.'
},
{
  id: 'js_promises_34',
  topicId: 'js_promises',
  question: 'Use promise to load script dynamically.',
  mathSolution: 'Create script element, resolve on load, reject on error.',
  codeSolution: 'function loadScript(src) {\n    return new Promise((resolve, reject) => {\n        const script = document.createElement("script");\n        script.src = src;\n        script.onload = () => resolve(script);\n        script.onerror = () => reject(new Error(`Failed to load ${src}`));\n        document.head.appendChild(script);\n    });\n}\n// loadScript("https://code.jquery.com/jquery-3.6.0.min.js")\n//     .then(() => console.log("Script loaded"))\n//     .catch(err => console.log(err));',
  hint: 'Works for dynamic script loading.'
},
{
  id: 'js_promises_35',
  topicId: 'js_promises',
  question: 'Implement promise with progress notification (pattern).',
  mathSolution: 'Use callback for progress, not standard promise.',
  codeSolution: 'function uploadFile(file, onProgress) {\n    return new Promise((resolve, reject) => {\n        let progress = 0;\n        const interval = setInterval(() => {\n            progress += 10;\n            onProgress(progress);\n            if (progress >= 100) {\n                clearInterval(interval);\n                resolve("Upload complete");\n            }\n        }, 200);\n    });\n}\nuploadFile("myfile.txt", progress => console.log(`Progress: ${progress}%`))\n    .then(result => console.log(result));',
  hint: 'Use callback parameter for progress updates.'
},
{
  id: 'js_promises_36',
  topicId: 'js_promises',
  question: 'Use promise for caching results.',
  mathSolution: 'Cache promise, not just value.',
  codeSolution: 'const cache = new Map();\nfunction getData(key) {\n    if (cache.has(key)) return cache.get(key);\n    const promise = new Promise(resolve => {\n        setTimeout(() => resolve(`Data for ${key}`), 1000);\n    });\n    cache.set(key, promise);\n    return promise;\n}\ngetData("user1").then(data => console.log(data));\ngetData("user1").then(data => console.log(data)); // Uses cached promise',
  hint: 'Store promise in cache to avoid duplicate async calls.'
},
{
  id: 'js_promises_37',
  topicId: 'js_promises',
  question: 'Convert Node.js callback-style function to promise (promisify).',
  mathSolution: 'Wrapper that returns promise, calls callback function.',
  codeSolution: 'function promisify(fn) {\n    return function(...args) {\n        return new Promise((resolve, reject) => {\n            fn(...args, (error, result) => {\n                if (error) reject(error);\n                else resolve(result);\n            });\n        });\n    };\n}\n// Example with setTimeout\nfunction delayCallback(ms, callback) {\n    setTimeout(() => callback(null, `Waited ${ms}ms`), ms);\n}\nconst delayPromise = promisify(delayCallback);\ndelayPromise(500).then(result => console.log(result));',
  hint: 'Promisify converts error-first callbacks to promises.'
},
{
  id: 'js_promises_38',
  topicId: 'js_promises',
  question: 'Create promise that resolves after condition becomes true.',
  mathSolution: 'Polling with setInterval, resolve when condition met.',
  codeSolution: 'function waitFor(condition, interval = 100) {\n    return new Promise(resolve => {\n        const check = setInterval(() => {\n            if (condition()) {\n                clearInterval(check);\n                resolve();\n            }\n        }, interval);\n    });\n}\nlet flag = false;\nsetTimeout(() => { flag = true; }, 1000);\nwaitFor(() => flag === true).then(() => console.log("Condition met!"));',
  hint: 'Poll until condition becomes true.'
},
{
  id: 'js_promises_39',
  topicId: 'js_promises',
  question: 'Use promise to batch multiple async operations.',
  mathSolution: 'Process array in chunks to limit concurrency.',
  codeSolution: 'async function processInBatches(items, batchSize, processor) {\n    const results = [];\n    for (let i = 0; i < items.length; i += batchSize) {\n        const batch = items.slice(i, i + batchSize);\n        const batchResults = await Promise.all(batch.map(processor));\n        results.push(...batchResults);\n    }\n    return results;\n}\nconst items = [1,2,3,4,5,6];\nconst processor = x => Promise.resolve(x * 2);\nprocessInBatches(items, 2, processor).then(results => console.log(results));',
  hint: 'Process in batches to control concurrency.'
},
{
  id: 'js_promises_40',
  topicId: 'js_promises',
  question: 'Use promise for debounced async operation.',
  mathSolution: 'Debounce with promise that cancels previous calls.',
  codeSolution: 'function debouncePromise(fn, delay) {\n    let timeoutId;\n    let rejectFn;\n    return function(...args) {\n        if (rejectFn) rejectFn(new Error("Cancelled"));\n        return new Promise((resolve, reject) => {\n            rejectFn = reject;\n            clearTimeout(timeoutId);\n            timeoutId = setTimeout(() => {\n                fn(...args).then(resolve).catch(reject);\n                rejectFn = null;\n            }, delay);\n        });\n    };\n}\nconst searchAPI = debouncePromise(query => {\n    return Promise.resolve(`Results for: ${query}`);\n}, 300);\nsearchAPI("hello").then(console.log);\nsearchAPI("hello world").then(console.log); // Only last call executes',
  hint: 'Cancel previous pending operations.'
},
{
  id: 'js_async_1',
  topicId: 'js_async',
  question: 'Declare an async function that returns a string.',
  mathSolution: 'async keyword makes function return a promise.',
  codeSolution: 'async function greet() {\n    return "Hello World";\n}\ngreet().then(result => console.log(result));  // Hello World',
  hint: 'Async functions automatically return a promise.'
},
{
  id: 'js_async_2',
  topicId: 'js_async',
  question: 'Use await to wait for promise resolution.',
  mathSolution: 'await pauses execution until promise resolves.',
  codeSolution: 'async function getData() {\n    const result = await Promise.resolve("Data loaded");\n    console.log(result);  // Data loaded\n}\ngetData();',
  hint: 'await only works inside async functions.'
},
{
  id: 'js_async_3',
  topicId: 'js_async',
  question: 'Handle promise rejection with try-catch in async function.',
  mathSolution: 'Use try-catch block to handle errors.',
  codeSolution: 'async function fetchData() {\n    try {\n        const result = await Promise.reject("Error occurred");\n        console.log(result);\n    } catch (error) {\n        console.log(`Caught: ${error}`);  // Caught: Error occurred\n    }\n}\nfetchData();',
  hint: 'try-catch works with await for error handling.'
},
{
  id: 'js_async_4',
  topicId: 'js_async',
  question: 'Use await with multiple promises sequentially.',
  mathSolution: 'await each promise one after another.',
  codeSolution: 'async function sequential() {\n    const result1 = await Promise.resolve("First");\n    console.log(result1);\n    const result2 = await Promise.resolve("Second");\n    console.log(result2);\n}\nsequential();  // First, Second',
  hint: 'Each await waits for previous to complete.'
},
{
  id: 'js_async_5',
  topicId: 'js_async',
  question: 'Run multiple promises in parallel with Promise.all() and await.',
  mathSolution: 'Use Promise.all() with await for parallel execution.',
  codeSolution: 'async function parallel() {\n    const [result1, result2] = await Promise.all([\n        Promise.resolve("First"),\n        Promise.resolve("Second")\n    ]);\n    console.log(result1, result2);  // First Second\n}\nparallel();',
  hint: 'Promise.all() runs promises concurrently.'
},
{
  id: 'js_async_6',
  topicId: 'js_async',
  question: 'Create delay function using promise and await.',
  mathSolution: 'Return promise that resolves after setTimeout.',
  codeSolution: 'function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\nasync function demo() {\n    console.log("Start");\n    await delay(1000);\n    console.log("After 1 second");\n}\ndemo();',
  hint: 'await delay(ms) pauses execution.'
},
{
  id: 'js_async_7',
  topicId: 'js_async',
  question: 'Use async/await with fetch API.',
  mathSolution: 'await fetch() and await response.json().',
  codeSolution: 'async function getUser() {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");\n        const user = await response.json();\n        console.log(user.name);\n    } catch (error) {\n        console.log("Fetch failed:", error);\n    }\n}\n// getUser();  // Uncomment to run',
  hint: 'await both fetch and json() methods.'
},
{
  id: 'js_async_8',
  topicId: 'js_async',
  question: 'Use Promise.allSettled() with async/await.',
  mathSolution: 'allSettled waits for all promises to settle.',
  codeSolution: 'async function allSettledDemo() {\n    const results = await Promise.allSettled([\n        Promise.resolve("Success"),\n        Promise.reject("Failure"),\n        Promise.resolve("Another success")\n    ]);\n    results.forEach(result => {\n        if (result.status === "fulfilled") {\n            console.log(`Value: ${result.value}`);\n        } else {\n            console.log(`Reason: ${result.reason}`);\n        }\n    });\n}\nallSettledDemo();',
  hint: 'allSettled never rejects, always resolves.'
},
{
  id: 'js_async_9',
  topicId: 'js_async',
  question: 'Use Promise.race() with async/await.',
  mathSolution: 'race resolves/rejects with first settled promise.',
  codeSolution: 'async function raceDemo() {\n    const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));\n    const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));\n    const result = await Promise.race([fast, slow]);\n    console.log(result);  // Fast\n}\nraceDemo();',
  hint: 'race returns first promise that completes.'
},
{
  id: 'js_async_10',
  topicId: 'js_async',
  question: 'Use Promise.any() with async/await.',
  mathSolution: 'any returns first fulfilled promise, ignores rejections.',
  codeSolution: 'async function anyDemo() {\n    const result = await Promise.any([\n        Promise.reject("Error"),\n        Promise.resolve("Success"),\n        Promise.resolve("Another")\n    ]);\n    console.log(result);  // Success\n}\nanyDemo();',
  hint: 'any ignores rejections, needs at least one success.'
},
{
  id: 'js_async_11',
  topicId: 'js_async',
  question: 'Create async function that returns a promise explicitly.',
  mathSolution: 'async functions always return promise, can return manually.',
  codeSolution: 'async function getValue() {\n    return Promise.resolve(42);\n}\ngetValue().then(v => console.log(v));  // 42',
  hint: 'Returning promise from async works fine.'
},
{
  id: 'js_async_12',
  topicId: 'js_async',
  question: 'Throw error in async function to reject promise.',
  mathSolution: 'throw inside async rejects the returned promise.',
  codeSolution: 'async function throwError() {\n    throw new Error("Something went wrong");\n}\nthrowError().catch(err => console.log(err.message));  // Something went wrong',
  hint: 'throw in async = reject promise.'
},
{
  id: 'js_async_13',
  topicId: 'js_async',
  question: 'Use async/await with try-catch-finally.',
  mathSolution: 'finally runs after success or error.',
  codeSolution: 'async function withFinally() {\n    try {\n        await Promise.resolve("Success");\n        console.log("Operation successful");\n    } catch (error) {\n        console.log("Error:", error);\n    } finally {\n        console.log("Cleanup complete");\n    }\n}\nwithFinally();',
  hint: 'finally is great for cleanup code.'
},
{
  id: 'js_async_14',
  topicId: 'js_async',
  question: 'Convert promise chain to async/await.',
  mathSolution: 'Replace .then() with await and .catch() with try-catch.',
  codeSolution: '// Promise chain\nfunction promiseChain() {\n    return Promise.resolve(5)\n        .then(n => n * 2)\n        .then(n => n + 3);\n}\n// Async/await version\nasync function asyncVersion() {\n    let n = await Promise.resolve(5);\n    n = n * 2;\n    n = n + 3;\n    return n;\n}\nasyncVersion().then(console.log);  // 13',
  hint: 'await makes async code look synchronous.'
},
{
  id: 'js_async_15',
  topicId: 'js_async',
  question: 'Use await with Promise.resolve() for consistent handling.',
  mathSolution: 'await works with any value, not just promises.',
  codeSolution: 'async function demo() {\n    const num = await 42;\n    const str = await "Hello";\n    const bool = await true;\n    console.log(num, str, bool);  // 42 Hello true\n}\ndemo();',
  hint: 'await wraps non-promise values in Promise.resolve().'
},
{
  id: 'js_async_16',
  topicId: 'js_async',
  question: 'Create async function that processes array with for loop.',
  mathSolution: 'Use for loop with await for sequential processing.',
  codeSolution: 'async function processArray(items) {\n    const results = [];\n    for (const item of items) {\n        const result = await Promise.resolve(item * 2);\n        results.push(result);\n    }\n    return results;\n}\nprocessArray([1, 2, 3, 4]).then(r => console.log(r));  // [2, 4, 6, 8]',
  hint: 'for loop with await processes sequentially.'
},
{
  id: 'js_async_17',
  topicId: 'js_async',
  question: 'Use for...of with await for sequential async iteration.',
  mathSolution: 'for...of works with await for async iterables.',
  codeSolution: 'async function* asyncGenerator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nasync function iterate() {\n    for await (const value of asyncGenerator()) {\n        console.log(value);  // 1, 2, 3\n    }\n}\niterate();',
  hint: 'for await...of iterates over async iterables.'
},
{
  id: 'js_async_18',
  topicId: 'js_async',
  question: 'Handle multiple promises with Promise.all() error recovery.',
  mathSolution: 'Use allSettled or individual try-catch for error recovery.',
  codeSolution: 'async function handleErrors() {\n    const promises = [\n        Promise.resolve(1),\n        Promise.reject("Error"),\n        Promise.resolve(3)\n    ];\n    const results = await Promise.allSettled(promises);\n    const successful = results.filter(r => r.status === "fulfilled").map(r => r.value);\n    console.log(successful);  // [1, 3]\n}\nhandleErrors();',
  hint: 'allSettled allows partial success.'
},
{
  id: 'js_async_19',
  topicId: 'js_async',
  question: 'Create async function with timeout using Promise.race().',
  mathSolution: 'Race operation against timeout promise.',
  codeSolution: 'function withTimeout(promise, ms) {\n    const timeout = new Promise((_, reject) => \n        setTimeout(() => reject(new Error("Timeout")), ms)\n    );\n    return Promise.race([promise, timeout]);\n}\nasync function fetchWithTimeout() {\n    try {\n        const slowOp = new Promise(resolve => setTimeout(() => resolve("Done"), 2000));\n        const result = await withTimeout(slowOp, 1000);\n        console.log(result);\n    } catch (error) {\n        console.log(error.message);  // Timeout\n    }\n}\nfetchWithTimeout();',
  hint: 'Race async operation with timeout promise.'
},
{
  id: 'js_async_20',
  topicId: 'js_async',
  question: 'Use async/await with file reading (Node.js example).',
  mathSolution: 'Use fs.promises for promise-based file operations.',
  codeSolution: '// Node.js example\n// const fs = require("fs").promises;\n// async function readFile() {\n//     try {\n//         const data = await fs.readFile("file.txt", "utf8");\n//         console.log(data);\n//     } catch (err) {\n//         console.log(err.message);\n//     }\n// }\n// readFile();',
  hint: 'Use fs.promises API for promise-based file operations.'
},
{
  id: 'js_async_21',
  topicId: 'js_async',
  question: 'Implement retry logic with async/await.',
  mathSolution: 'Retry failed async operations recursively.',
  codeSolution: 'async function retry(fn, retries = 3) {\n    try {\n        return await fn();\n    } catch (error) {\n        if (retries > 0) {\n            console.log(`Retrying... ${retries} left`);\n            return retry(fn, retries - 1);\n        }\n        throw error;\n    }\n}\nlet attempts = 0;\nconst flakyFn = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Failed");\n    return "Success";\n};\nretry(flakyFn, 3).then(console.log).catch(console.log);  // Success',
  hint: 'Recursive retry with decreasing retry count.'
},
{
  id: 'js_async_22',
  topicId: 'js_async',
  question: 'Use async/await with map() - careful with concurrency.',
  mathSolution: 'map with await processes sequentially, use Promise.all for parallel.',
  codeSolution: 'const numbers = [1, 2, 3, 4];\n// Sequential with for-of\nasync function sequential() {\n    const results = [];\n    for (const n of numbers) {\n        results.push(await Promise.resolve(n * 2));\n    }\n    return results;\n}\n// Parallel with Promise.all\nasync function parallel() {\n    return await Promise.all(numbers.map(async n => {\n        return await Promise.resolve(n * 2);\n    }));\n}\nsequential().then(console.log);  // [2,4,6,8]\nparallel().then(console.log);   // [2,4,6,8]',
  hint: 'map with async callback runs in parallel, not sequential.'
},
{
  id: 'js_async_23',
  topicId: 'js_async',
  question: 'Use async/await with reduce() for sequential accumulation.',
  mathSolution: 'reduce with await for sequential async operations.',
  codeSolution: 'async function sequentialSum(numbers) {\n    const sum = await numbers.reduce(async (accPromise, num) => {\n        const acc = await accPromise;\n        return acc + num;\n    }, Promise.resolve(0));\n    return sum;\n}\nsequentialSum([1, 2, 3, 4, 5]).then(console.log);  // 15',
  hint: 'await inside reduce requires careful handling.'
},
{
  id: 'js_async_24',
  topicId: 'js_async',
  question: 'Create async function that caches results.',
  mathSolution: 'Cache promises or results to avoid duplicate work.',
  codeSolution: 'const cache = new Map();\nasync function getData(key) {\n    if (cache.has(key)) return cache.get(key);\n    const promise = new Promise(resolve => {\n        setTimeout(() => resolve(`Data for ${key}`), 1000);\n    });\n    cache.set(key, promise);\n    return promise;\n}\nasync function demo() {\n    const data1 = await getData("user1");\n    const data2 = await getData("user1");  // Uses cached promise\n    console.log(data1, data2);\n}\ndemo();',
  hint: 'Cache async operations to avoid redundant work.'
},
{
  id: 'js_async_25',
  topicId: 'js_async',
  question: 'Use top-level await (ES2022).',
  mathSolution: 'await can be used at module top level.',
  codeSolution: '// In module (.mjs or type="module"):\n// const data = await fetch("https://api.example.com/data");\n// console.log(data);\n// Note: Only works in modules, not in regular scripts',
  hint: 'Top-level await only works in ES modules.'
},
{
  id: 'js_async_26',
  topicId: 'js_async',
  question: 'Implement debounced async function.',
  mathSolution: 'Debounce with promise that cancels previous calls.',
  codeSolution: 'function debounceAsync(fn, delay) {\n    let timeoutId;\n    let rejectFn;\n    return function(...args) {\n        if (rejectFn) rejectFn(new Error("Cancelled"));\n        return new Promise((resolve, reject) => {\n            rejectFn = reject;\n            clearTimeout(timeoutId);\n            timeoutId = setTimeout(async () => {\n                try {\n                    const result = await fn(...args);\n                    resolve(result);\n                } catch (err) {\n                    reject(err);\n                }\n                rejectFn = null;\n            }, delay);\n        });\n    };\n}\nconst search = debounceAsync(async query => {\n    return `Results for: ${query}`;\n}, 300);\nsearch("a").then(console.log);\nsearch("ab").then(console.log);\nsearch("abc").then(console.log);  // Only last call executes',
  hint: 'Cancel previous pending async operations.'
},
{
  id: 'js_async_27',
  topicId: 'js_async',
  question: 'Implement rate limiter with async/await.',
  mathSolution: 'Queue requests and process with delay.',
  codeSolution: 'class RateLimiter {\n    constructor(limit, interval) {\n        this.limit = limit;\n        this.interval = interval;\n        this.tokens = limit;\n        this.lastRefill = Date.now();\n    }\n    async acquire() {\n        const now = Date.now();\n        const timePassed = now - this.lastRefill;\n        if (timePassed >= this.interval) {\n            this.tokens = this.limit;\n            this.lastRefill = now;\n        }\n        if (this.tokens > 0) {\n            this.tokens--;\n            return;\n        }\n        const waitTime = this.interval - timePassed;\n        await new Promise(resolve => setTimeout(resolve, waitTime));\n        return this.acquire();\n    }\n    async execute(fn) {\n        await this.acquire();\n        return fn();\n    }\n}\nconst limiter = new RateLimiter(2, 1000);\nfor (let i = 0; i < 5; i++) {\n    limiter.execute(async () => {\n        console.log(`Request ${i} at ${Date.now()}`);\n    });\n}',
  hint: 'Rate limiting controls request frequency.'
},
{
  id: 'js_async_28',
  topicId: 'js_async',
  question: 'Create async queue for sequential processing.',
  mathSolution: 'Queue that processes tasks one at a time.',
  codeSolution: 'class AsyncQueue {\n    constructor() {\n        this.queue = [];\n        this.processing = false;\n    }\n    async add(task) {\n        return new Promise((resolve, reject) => {\n            this.queue.push({ task, resolve, reject });\n            this.process();\n        });\n    }\n    async process() {\n        if (this.processing) return;\n        this.processing = true;\n        while (this.queue.length > 0) {\n            const { task, resolve, reject } = this.queue.shift();\n            try {\n                const result = await task();\n                resolve(result);\n            } catch (err) {\n                reject(err);\n            }\n        }\n        this.processing = false;\n    }\n}\nconst queue = new AsyncQueue();\nqueue.add(() => delay(1000).then(() => console.log(1)));\nqueue.add(() => delay(500).then(() => console.log(2)));\nqueue.add(() => delay(100).then(() => console.log(3)));\n// Output: 1, 2, 3 (in order)',
  hint: 'Queue ensures FIFO execution order.'
},
{
  id: 'js_async_29',
  topicId: 'js_async',
  question: 'Use async/await with Web Workers.',
  mathSolution: 'Wrap worker messages in promises.',
  codeSolution: '// Main thread\n// function runWorker(worker, data) {\n//     return new Promise((resolve, reject) => {\n//         worker.onmessage = e => resolve(e.data);\n//         worker.onerror = e => reject(e);\n//         worker.postMessage(data);\n//     });\n// }\n// async function compute() {\n//     const worker = new Worker("worker.js");\n//     const result = await runWorker(worker, 1000000);\n//     console.log(result);\n//     worker.terminate();\n// }\n// compute();',
  hint: 'Async/await works well with worker promises.'
},
{
  id: 'js_async_30',
  topicId: 'js_async',
  question: 'Create async function that polls until condition is met.',
  mathSolution: 'Poll with setTimeout in async loop.',
  codeSolution: 'async function waitFor(condition, interval = 100, timeout = 5000) {\n    const startTime = Date.now();\n    while (true) {\n        if (condition()) return;\n        if (Date.now() - startTime >= timeout) {\n            throw new Error("Timeout");\n        }\n        await new Promise(resolve => setTimeout(resolve, interval));\n    }\n}\nlet ready = false;\nsetTimeout(() => { ready = true; }, 2000);\nwaitFor(() => ready).then(() => console.log("Ready!"));',
  hint: 'Polling loop with await delay.'
},
{
  id: 'js_async_31',
  topicId: 'js_async',
  question: 'Use async/await with IndexedDB.',
  mathSolution: 'Wrap IndexedDB operations in promises.',
  codeSolution: '// Simplified IndexedDB wrapper\n// function openDB(name, version) {\n//     return new Promise((resolve, reject) => {\n//         const request = indexedDB.open(name, version);\n//         request.onsuccess = () => resolve(request.result);\n//         request.onerror = () => reject(request.error);\n//     });\n// }\n// async function saveData(data) {\n//     const db = await openDB("myDB", 1);\n//     const transaction = db.transaction(["store"], "readwrite");\n//     const store = transaction.objectStore("store");\n//     return new Promise((resolve, reject) => {\n//         const request = store.add(data);\n//         request.onsuccess = () => resolve();\n//         request.onerror = () => reject(request.error);\n//     });\n// }\n// await saveData({ id: 1, name: "John" });',
  hint: 'Wrap callback-based APIs in promises.'
},
{
  id: 'js_async_32',
  topicId: 'js_async',
  question: 'Implement semaphore for concurrency control with async/await.',
  mathSolution: 'Limit number of concurrent async operations.',
  codeSolution: 'class Semaphore {\n    constructor(max) {\n        this.max = max;\n        this.active = 0;\n        this.queue = [];\n    }\n    async acquire() {\n        if (this.active < this.max) {\n            this.active++;\n            return;\n        }\n        await new Promise(resolve => this.queue.push(resolve));\n    }\n    release() {\n        if (this.queue.length > 0) {\n            const resolve = this.queue.shift();\n            resolve();\n        } else {\n            this.active--;\n        }\n    }\n    async run(fn) {\n        await this.acquire();\n        try {\n            return await fn();\n        } finally {\n            this.release();\n        }\n    }\n}\nconst semaphore = new Semaphore(2);\nconst tasks = [1,2,3,4,5].map(x => \n    semaphore.run(async () => {\n        await delay(1000);\n        console.log(`Task ${x} done at ${Date.now()}`);\n    })\n);\nPromise.all(tasks);',
  hint: 'Semaphore limits concurrent operations.'
},
{
  id: 'js_async_33',
  topicId: 'js_async',
  question: 'Use async/await with requestAnimationFrame for animations.',
  mathSolution: 'Wrap requestAnimationFrame in promise.',
  codeSolution: 'function animateFrame() {\n    return new Promise(resolve => {\n        requestAnimationFrame(resolve);\n    });\n}\nasync function animate() {\n    let position = 0;\n    while (position < 200) {\n        position += 5;\n        console.log(`Position: ${position}`);\n        await animateFrame();\n    }\n}\n// animate();  // Will animate over multiple frames',
  hint: 'Await requestAnimationFrame for smooth animations.'
},
{
  id: 'js_async_34',
  topicId: 'js_async',
  question: 'Handle uncaught rejections in async functions.',
  mathSolution: 'Add global unhandledrejection handler.',
  codeSolution: 'window.addEventListener("unhandledrejection", event => {\n    console.log("Unhandled rejection:", event.reason);\n});\nasync function throwError() {\n    throw new Error("Async error");\n}\nthrowError();  // Triggers unhandledrejection\n// Better: Always catch async function calls',
  hint: 'Always catch async function calls to avoid unhandled rejections.'
},
{
  id: 'js_async_35',
  topicId: 'js_async',
  question: 'Convert callback to async function using promisify pattern.',
  mathSolution: 'Wrap callback-based function in async/await friendly wrapper.',
  codeSolution: 'function promisify(fn) {\n    return function(...args) {\n        return new Promise((resolve, reject) => {\n            fn(...args, (err, result) => {\n                if (err) reject(err);\n                else resolve(result);\n            });\n        });\n    };\n}\n// Example with setTimeout\nfunction callbackDelay(ms, callback) {\n    setTimeout(() => callback(null, `Waited ${ms}ms`), ms);\n}\nconst delayPromise = promisify(callbackDelay);\nasync function demo() {\n    const result = await delayPromise(500);\n    console.log(result);\n}\ndemo();',
  hint: 'Promisify converts error-first callbacks to promises.'
},
{
  id: 'js_async_36',
  topicId: 'js_async',
  question: 'Use async/await with stream processing (Node.js example).',
  mathSolution: 'Process streams with async iteration.',
  codeSolution: '// Node.js stream example\n// const { Readable } = require("stream");\n// async function processStream(stream) {\n//     for await (const chunk of stream) {\n//         console.log(chunk);\n//     }\n// }\n// const stream = Readable.from(["Hello", " ", "World"]);\n// processStream(stream);  // Hello, [space], World',
  hint: 'for await...of works with Node.js streams.'
},
{
  id: 'js_async_37',
  topicId: 'js_async',
  question: 'Implement async memoization with TTL (time to live).',
  mathSolution: 'Cache results with expiration time.',
  codeSolution: 'function memoizeAsync(fn, ttl = 60000) {\n    const cache = new Map();\n    return async function(...args) {\n        const key = JSON.stringify(args);\n        const cached = cache.get(key);\n        if (cached && Date.now() - cached.timestamp < ttl) {\n            return cached.value;\n        }\n        const value = await fn(...args);\n        cache.set(key, { value, timestamp: Date.now() });\n        return value;\n    };\n}\nconst expensiveOp = memoizeAsync(async x => {\n    console.log(`Computing ${x}...`);\n    return x * 2;\n}, 5000);\nexpensiveOp(5).then(console.log);  // Computing 5... 10\nexpensiveOp(5).then(console.log);  // 10 (cached)',
  hint: 'Cache with expiration time.'
},
{
  id: 'js_async_38',
  topicId: 'js_async',
  question: 'Use async/await with batch processing and progress reporting.',
  mathSolution: 'Process batches and report progress.',
  codeSolution: 'async function processBatch(items, batchSize, processor, onProgress) {\n    const results = [];\n    for (let i = 0; i < items.length; i += batchSize) {\n        const batch = items.slice(i, i + batchSize);\n        const batchResults = await Promise.all(batch.map(processor));\n        results.push(...batchResults);\n        if (onProgress) {\n            onProgress(Math.min(i + batchSize, items.length), items.length);\n        }\n    }\n    return results;\n}\nconst items = Array.from({ length: 10 }, (_, i) => i);\nconst processor = async x => {\n    await delay(100);\n    return x * 2;\n};\nprocessBatch(items, 3, processor, (done, total) => {\n    console.log(`Progress: ${done}/${total}`);\n}).then(results => console.log(results));',
  hint: 'Report progress in batch processing.'
},
{
  id: 'js_async_39',
  topicId: 'js_async',
  question: 'Create async function with abort signal for cancellation.',
  mathSolution: 'Use AbortController with async operations.',
  codeSolution: 'async function fetchWithAbort(url, signal) {\n    if (signal.aborted) throw new Error("Aborted");\n    const response = await fetch(url, { signal });\n    return response.json();\n}\nconst controller = new AbortController();\nsetTimeout(() => controller.abort(), 100);\nfetchWithAbort("https://jsonplaceholder.typicode.com/users/1", controller.signal)\n    .then(data => console.log(data))\n    .catch(err => console.log(err.message));  // Aborted or The user aborted a request',
  hint: 'AbortController cancels fetch and other async operations.'
},
{
  id: 'js_async_40',
  topicId: 'js_async',
  question: 'Implement async function with exponential backoff.',
  mathSolution: 'Increase delay exponentially on each retry.',
  codeSolution: 'async function fetchWithBackoff(fn, maxRetries = 5, baseDelay = 100) {\n    for (let i = 0; i <= maxRetries; i++) {\n        try {\n            return await fn();\n        } catch (error) {\n            if (i === maxRetries) throw error;\n            const delay = baseDelay * Math.pow(2, i);\n            console.log(`Retry ${i + 1} after ${delay}ms`);\n            await new Promise(resolve => setTimeout(resolve, delay));\n        }\n    }\n}\nlet attempts = 0;\nconst flakyFetch = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Network error");\n    return "Success";\n};\nfetchWithBackoff(flakyFetch, 5).then(console.log);  // Success',
  hint: 'Exponential backoff prevents overwhelming servers.'
},
//erro handling
{
  id: 'js_error_1',
  topicId: 'js_error',
  question: 'Use try-catch block to handle runtime errors.',
  mathSolution: 'try block contains code that may throw, catch handles errors.',
  codeSolution: 'try {\n    const result = 10 / 0;\n    console.log(result);  // Infinity (no error)\n    throw new Error("Custom error");\n} catch (error) {\n    console.log("Caught:", error.message);  // Caught: Custom error\n}',
  hint: 'Wrap risky code in try block, handle errors in catch.'
},
{
  id: 'js_error_2',
  topicId: 'js_error',
  question: 'Use try-catch-finally to always execute cleanup code.',
  mathSolution: 'finally block runs regardless of error occurrence.',
  codeSolution: 'try {\n    console.log("Trying...");\n    throw new Error("Something went wrong");\n} catch (error) {\n    console.log("Caught:", error.message);\n} finally {\n    console.log("Cleanup always runs");  // Always executes\n}',
  hint: 'Use finally for cleanup code that must run always.'
},
{
  id: 'js_error_3',
  topicId: 'js_error',
  question: 'Throw a generic Error object.',
  mathSolution: 'Use throw new Error() to create and throw error.',
  codeSolution: 'function validateAge(age) {\n    if (age < 0) {\n        throw new Error("Age cannot be negative");\n    }\n    if (age < 18) {\n        throw new Error("Must be 18 or older");\n    }\n    return "Valid age";\n}\n\ntry {\n    console.log(validateAge(-5));\n} catch (error) {\n    console.log(error.message);  // Age cannot be negative\n}',
  hint: 'Use throw to create custom error conditions.'
},
{
  id: 'js_error_4',
  topicId: 'js_error',
  question: 'Create custom error class extending Error.',
  mathSolution: 'Extend Error class to create custom error types.',
  codeSolution: 'class ValidationError extends Error {\n    constructor(message, field) {\n        super(message);\n        this.name = "ValidationError";\n        this.field = field;\n    }\n}\n\nclass NetworkError extends Error {\n    constructor(message, statusCode) {\n        super(message);\n        this.name = "NetworkError";\n        this.statusCode = statusCode;\n    }\n}\n\ntry {\n    throw new ValidationError("Invalid email format", "email");\n} catch (error) {\n    if (error instanceof ValidationError) {\n        console.log(`${error.name}: ${error.message} (field: ${error.field})`);\n    }\n}',
  hint: 'Custom error classes help differentiate error types.'
},
{
  id: 'js_error_5',
  topicId: 'js_error',
  question: 'Catch specific error types using instanceof.',
  mathSolution: 'Use instanceof to check error type in catch block.',
  codeSolution: 'class DatabaseError extends Error {}\nclass AuthError extends Error {}\n\ntry {\n    // Simulate different errors\n    throw new DatabaseError("Connection failed");\n} catch (error) {\n    if (error instanceof DatabaseError) {\n        console.log("DB Error:", error.message);\n    } else if (error instanceof AuthError) {\n        console.log("Auth Error:", error.message);\n    } else {\n        console.log("Unknown error:", error.message);\n    }\n}',
  hint: 'Use instanceof to handle different error types differently.'
},
{
  id: 'js_error_6',
  topicId: 'js_error',
  question: 'Rethrow error after partial handling.',
  mathSolution: 'Catch, log, then throw again for upper level.',
  codeSolution: 'function processData(data) {\n    try {\n        // Attempt processing\n        if (!data) throw new Error("No data provided");\n        return data.toUpperCase();\n    } catch (error) {\n        console.log("Logging error in processData:", error.message);\n        throw error;  // Rethrow for caller to handle\n    }\n}\n\ntry {\n    processData(null);\n} catch (error) {\n    console.log("Upper level caught:", error.message);\n}',
  hint: 'Rethrow when error needs handling at multiple levels.'
},
{
  id: 'js_error_7',
  topicId: 'js_error',
  question: 'Handle synchronous errors in async/await with try-catch.',
  mathSolution: 'Wrap await calls in try-catch blocks.',
  codeSolution: 'async function fetchData() {\n    try {\n        const response = await fetch("https://invalid.url");\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.log("Fetch failed:", error.message);\n        return null;\n    }\n}\n\nfetchData();',
  hint: 'Always use try-catch with await to handle promise rejections.'
},
{
  id: 'js_error_8',
  topicId: 'js_error',
  question: 'Catch errors in Promise chains with .catch().',
  mathSolution: 'Use .catch() at end of promise chain.',
  codeSolution: 'Promise.resolve("data")\n    .then(data => {\n        throw new Error("Processing failed");\n    })\n    .then(result => console.log(result))\n    .catch(error => {\n        console.log("Caught in chain:", error.message);\n    });',
  hint: 'A single .catch() at chain end handles all errors.'
},
{
  id: 'js_error_9',
  topicId: 'js_error',
  question: 'Handle unhandled promise rejections globally.',
  mathSolution: 'Use unhandledrejection event listener.',
  codeSolution: 'window.addEventListener("unhandledrejection", (event) => {\n    console.log("Unhandled rejection:", event.reason);\n    event.preventDefault();  // Prevent console error\n});\n\n// This rejection will be caught by the handler\nPromise.reject("Something failed");',
  hint: 'Global handler prevents unhandled rejection crashes.'
},
{
  id: 'js_error_10',
  topicId: 'js_error',
  question: 'Handle uncaught errors globally in Node.js.',
  mathSolution: 'Use process.on("uncaughtException") handler.',
  codeSolution: '// Node.js only\n// process.on("uncaughtException", (error) => {\n//     console.log("Uncaught exception:", error.message);\n//     process.exit(1);  // Exit after logging\n// });\n// \n// throw new Error("Something broke");',
  hint: 'Global exception handling prevents crashes but should be used sparingly.'
},
{
  id: 'js_error_11',
  topicId: 'js_error',
  question: 'Access error stack trace for debugging.',
  mathSolution: 'Error objects have stack property with call stack.',
  codeSolution: 'function functionA() {\n    functionB();\n}\n\nfunction functionB() {\n    throw new Error("Error in functionB");\n}\n\ntry {\n    functionA();\n} catch (error) {\n    console.log("Message:", error.message);\n    console.log("Stack trace:\\n", error.stack);\n}',
  hint: 'error.stack shows the call chain leading to error.'
},
{
  id: 'js_error_12',
  topicId: 'js_error',
  question: 'Create error with specific name property.',
  mathSolution: 'Set name property to identify error type.',
  codeSolution: 'const error = new Error("Invalid input");\nerror.name = "InputError";\n\ntry {\n    throw error;\n} catch (err) {\n    console.log(err.name);      // InputError\n    console.log(err.message);   // Invalid input\n}',
  hint: 'Custom name helps identify error types without classes.'
},
{
  id: 'js_error_13',
  topicId: 'js_error',
  question: 'Handle TypeError when accessing undefined property.',
  mathSolution: 'Catch TypeError and provide fallback.',
  codeSolution: 'const obj = null;\n\ntry {\n    console.log(obj.name.toUpperCase());  // TypeError\n} catch (error) {\n    if (error instanceof TypeError) {\n        console.log("Property access error:", error.message);\n        console.log("Using default value instead");\n    }\n}',
  hint: 'TypeError occurs when accessing properties on null/undefined.'
},
{
  id: 'js_error_14',
  topicId: 'js_error',
  question: 'Handle RangeError for invalid numeric ranges.',
  mathSolution: 'Catch RangeError when values exceed limits.',
  codeSolution: 'function factorial(n) {\n    if (n < 0) {\n        throw new RangeError("Factorial not defined for negative numbers");\n    }\n    if (n > 170) {\n        throw new RangeError("Number too large, would cause Infinity");\n    }\n    let result = 1;\n    for (let i = 2; i <= n; i++) result *= i;\n    return result;\n}\n\ntry {\n    console.log(factorial(-5));\n} catch (error) {\n    if (error instanceof RangeError) {\n        console.log("Range error:", error.message);\n    }\n}',
  hint: 'RangeError indicates numeric value out of allowed range.'
},
{
  id: 'js_error_15',
  topicId: 'js_error',
  question: 'Handle ReferenceError for undefined variables.',
  mathSolution: 'Catch ReferenceError when variable doesn\'t exist.',
  codeSolution: 'try {\n    console.log(undefinedVariable);  // ReferenceError\n} catch (error) {\n    if (error instanceof ReferenceError) {\n        console.log("Variable not defined:", error.message);\n    }\n}\n\n// Better: Use typeof check\nif (typeof someVariable !== "undefined") {\n    console.log(someVariable);\n}',
  hint: 'ReferenceError occurs when accessing undeclared variables.'
},
{
  id: 'js_error_16',
  topicId: 'js_error',
  question: 'Handle SyntaxError from eval() or JSON.parse().',
  mathSolution: 'Catch SyntaxError when parsing invalid JSON or code.',
  codeSolution: 'function safeParseJSON(jsonString) {\n    try {\n        return JSON.parse(jsonString);\n    } catch (error) {\n        if (error instanceof SyntaxError) {\n            console.log("Invalid JSON syntax:", error.message);\n            return null;\n        }\n        throw error;\n    }\n}\n\nsafeParseJSON(\'{"name": "John"\');  // Missing closing brace\nsafeParseJSON(\'{"name": "John"}\');  // Works',
  hint: 'Always catch SyntaxError when parsing JSON or using eval().'
},
{
  id: 'js_error_17',
  topicId: 'js_error',
  question: 'Handle URIError from encodeURIComponent() with malformed URI.',
  mathSolution: 'URIError occurs with malformed URI strings.',
  codeSolution: 'function safeEncodeURI(str) {\n    try {\n        return encodeURIComponent(str);\n    } catch (error) {\n        if (error instanceof URIError) {\n            console.log("Malformed URI:", error.message);\n            return null;\n        }\n        throw error;\n    }\n}\n\nconsole.log(safeEncodeURI("hello world"));  // hello%20world\n// Some malformed strings can cause URIError',
  hint: 'URIError occurs with invalid character sequences in URIs.'
},
{
  id: 'js_error_18',
  topicId: 'js_error',
  question: 'Use optional chaining (?.) to avoid TypeError.',
  mathSolution: 'Optional chaining returns undefined instead of throwing.',
  codeSolution: 'const user = null;\n\n// Without optional chaining - throws TypeError\n// console.log(user.name);\n\n// With optional chaining - returns undefined\nconsole.log(user?.name);  // undefined\n\n// Chaining multiple levels\nconst data = { profile: { address: { city: "NYC" } } };\nconsole.log(data?.profile?.address?.city);     // NYC\nconsole.log(data?.profile?.address?.zip);      // undefined\nconsole.log(data?.nonexistent?.property);      // undefined',
  hint: 'Optional chaining prevents TypeError from null/undefined access.'
},
{
  id: 'js_error_19',
  topicId: 'js_error',
  question: 'Use nullish coalescing (??) for default values.',
  mathSolution: '?? provides default for null/undefined values.',
  codeSolution: 'function getUsername(user) {\n    return user?.name ?? "Guest";\n}\n\nconsole.log(getUsername(null));              // Guest\nconsole.log(getUsername(undefined));         // Guest\nconsole.log(getUsername({ name: "John" }));  // John\nconsole.log(getUsername({ name: "" }));      // "" (empty string not nullish)',
  hint: '?? only checks for null or undefined, not other falsy values.'
},
{
  id: 'js_error_20',
  topicId: 'js_error',
  question: 'Use try-catch with finally for resource cleanup.',
  mathSolution: 'finally ensures resources are released regardless of error.',
  codeSolution: 'let fileHandle = null;\n\nfunction readFile() {\n    try {\n        fileHandle = openFile();  // Simulated file open\n        console.log("File opened");\n        // Process file\n        if (errorCondition) throw new Error("Processing error");\n        return fileHandle.read();\n    } catch (error) {\n        console.log("Error:", error.message);\n        return null;\n    } finally {\n        if (fileHandle) {\n            fileHandle.close();\n            console.log("File closed");\n        }\n    }\n}\n\nfunction openFile() { return { close: () => {}, read: () => "data" }; }\nconst errorCondition = true;\nreadFile();',
  hint: 'finally is perfect for closing files, DB connections, etc.'
},
{
  id: 'js_error_21',
  topicId: 'js_error',
  question: 'Handle async errors with .catch() on promise.',
  mathSolution: 'Attach .catch() to handle promise rejections.',
  codeSolution: 'async function fetchUser(id) {\n    const response = await fetch(`/api/users/${id}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n}\n\n// Handling with .catch()\nfetchUser(999)\n    .then(user => console.log(user))\n    .catch(error => console.log("Promise catch:", error.message));',
  hint: 'Always attach .catch() to promises or use try-catch with await.'
},
{
  id: 'js_error_22',
  topicId: 'js_error',
  question: 'Handle errors in Promise.all() gracefully.',
  mathSolution: 'Use Promise.allSettled() or handle rejection separately.',
  codeSolution: 'const promises = [\n    Promise.resolve(1),\n    Promise.reject("Error in promise 2"),\n    Promise.resolve(3)\n];\n\n// Promise.all fails fast\nPromise.all(promises)\n    .then(results => console.log(results))\n    .catch(error => console.log("Promise.all failed:", error));\n\n// Promise.allSettled never fails\nPromise.allSettled(promises)\n    .then(results => {\n        const successful = results.filter(r => r.status === "fulfilled");\n        const failed = results.filter(r => r.status === "rejected");\n        console.log("Successful:", successful.length);\n        console.log("Failed:", failed.length);\n    });',
  hint: 'Use allSettled when you need all results regardless of failures.'
},
{
  id: 'js_error_23',
  topicId: 'js_error',
  question: 'Handle errors in async/await with multiple try-catch blocks.',
  mathSolution: 'Use separate try-catch for different async operations.',
  codeSolution: 'async function processUserData(userId) {\n    let user, posts;\n    \n    try {\n        user = await fetch(`/api/users/${userId}`).then(r => r.json());\n    } catch (error) {\n        console.log("Failed to fetch user:", error.message);\n        return null;\n    }\n    \n    try {\n        posts = await fetch(`/api/users/${userId}/posts`).then(r => r.json());\n    } catch (error) {\n        console.log("Failed to fetch posts, but user data available");\n        posts = [];\n    }\n    \n    return { user, posts };\n}\n\nprocessUserData(1);',
  hint: 'Separate try-catch blocks allow partial success.'
},
{
  id: 'js_error_24',
  topicId: 'js_error',
  question: 'Add custom properties to error objects.',
  mathSolution: 'Attach additional data to error for better debugging.',
  codeSolution: 'function validateUser(user) {\n    const errors = [];\n    \n    if (!user.name) {\n        const error = new Error("Name is required");\n        error.code = "MISSING_NAME";\n        error.field = "name";\n        error.statusCode = 400;\n        throw error;\n    }\n    \n    if (user.age < 0) {\n        const error = new Error("Invalid age");\n        error.code = "INVALID_AGE";\n        error.field = "age";\n        error.value = user.age;\n        throw error;\n    }\n}\n\ntry {\n    validateUser({ age: -5 });\n} catch (error) {\n    console.log(`Error ${error.code}: ${error.message}`);\n    console.log(`Field: ${error.field}, Value: ${error.value}`);\n}',
  hint: 'Add custom properties like code, field, statusCode to errors.'
},
{
  id: 'js_error_25',
  topicId: 'js_error',
  question: 'Create error wrapper for API responses.',
  mathSolution: 'Wrap API errors with status codes and messages.',
  codeSolution: 'class APIError extends Error {\n    constructor(message, statusCode, data = null) {\n        super(message);\n        this.name = "APIError";\n        this.statusCode = statusCode;\n        this.data = data;\n    }\n}\n\nasync function apiRequest(url, options) {\n    const response = await fetch(url, options);\n    \n    if (!response.ok) {\n        const errorData = await response.json().catch(() => ({}));\n        throw new APIError(\n            errorData.message || `HTTP ${response.status}`,\n            response.status,\n            errorData\n        );\n    }\n    \n    return response.json();\n}\n\n// Usage\n// try {\n//     await apiRequest("/api/users", {});\n// } catch (error) {\n//     if (error instanceof APIError) {\n//         console.log(`API Error ${error.statusCode}: ${error.message}`);\n//     }\n// }',
  hint: 'Wrap API errors with status codes for better handling.'
},
{
  id: 'js_error_26',
  topicId: 'js_error',
  question: 'Validate function parameters and throw TypeError.',
  mathSolution: 'Check parameter types and throw descriptive errors.',
  codeSolution: 'function calculateArea(width, height) {\n    if (typeof width !== "number") {\n        throw new TypeError(`Width must be a number, got ${typeof width}`);\n    }\n    if (typeof height !== "number") {\n        throw new TypeError(`Height must be a number, got ${typeof height}`);\n    }\n    if (width <= 0) {\n        throw new RangeError(`Width must be positive, got ${width}`);\n    }\n    if (height <= 0) {\n        throw new RangeError(`Height must be positive, got ${height}`);\n    }\n    \n    return width * height;\n}\n\ntry {\n    calculateArea("10", 5);\n} catch (error) {\n    console.log(error.name + ":", error.message);\n}',
  hint: 'Validate inputs early and throw descriptive errors.'
},
{
  id: 'js_error_27',
  topicId: 'js_error',
  question: 'Use assert function for invariant checking.',
  mathSolution: 'Create assertion function to check conditions.',
  codeSolution: 'function assert(condition, message, ErrorClass = Error) {\n    if (!condition) {\n        throw new ErrorClass(message);\n    }\n}\n\nfunction withdrawMoney(balance, amount) {\n    assert(\n        typeof balance === "number",\n        "Balance must be a number",\n        TypeError\n    );\n    assert(\n        typeof amount === "number",\n        "Amount must be a number",\n        TypeError\n    );\n    assert(\n        amount > 0,\n        "Amount must be positive",\n        RangeError\n    );\n    assert(\n        balance >= amount,\n        "Insufficient funds",\n        Error\n    );\n    \n    return balance - amount;\n}\n\ntry {\n    withdrawMoney(100, 200);\n} catch (error) {\n    console.log(error.message);  // Insufficient funds\n}',
  hint: 'Assertion functions make invariant checking concise.'
},
{
  id: 'js_error_28',
  topicId: 'js_error',
  question: 'Handle errors in event listeners.',
  mathSolution: 'Wrap event handler code in try-catch.',
  codeSolution: '// HTML: <button id="myButton">Click</button>\nconst button = document.getElementById("myButton");\n\nbutton.addEventListener("click", (event) => {\n    try {\n        // Risky operation\n        const data = JSON.parse(localStorage.getItem("config"));\n        processData(data);\n    } catch (error) {\n        console.log("Error in click handler:", error.message);\n        // Show user-friendly message\n        button.textContent = "Error occurred";\n    }\n});\n\nfunction processData(data) {\n    if (!data) throw new Error("No data found");\n    console.log(data);\n}',
  hint: 'Always catch errors in event handlers to prevent silent failures.'
},
{
  id: 'js_error_29',
  topicId: 'js_error',
  question: 'Handle errors in setTimeout and setInterval.',
  mathSolution: 'Wrap callback code in try-catch.',
  codeSolution: '// setTimeout with error handling\nsetTimeout(() => {\n    try {\n        // Code that might throw\n        throw new Error("Async error in timeout");\n    } catch (error) {\n        console.log("Caught in timeout:", error.message);\n    }\n}, 1000);\n\n// setInterval with error handling\nconst interval = setInterval(() => {\n    try {\n        console.log("Tick");\n        // Simulate occasional error\n        if (Math.random() < 0.3) {\n            throw new Error("Random error");\n        }\n    } catch (error) {\n        console.log("Error in interval:", error.message);\n        // Interval continues despite error\n    }\n}, 1000);\n\n// Clear after 5 seconds\nsetTimeout(() => clearInterval(interval), 5000);',
  hint: 'Async callbacks need internal try-catch as errors don\'t bubble.'
},
{
  id: 'js_error_30',
  topicId: 'js_error',
  question: 'Implement retry logic with error handling.',
  mathSolution: 'Retry failed operations with exponential backoff.',
  codeSolution: 'async function retryOperation(operation, maxRetries = 3, delay = 1000) {\n    let lastError;\n    \n    for (let attempt = 1; attempt <= maxRetries; attempt++) {\n        try {\n            console.log(`Attempt ${attempt}/${maxRetries}`);\n            return await operation();\n        } catch (error) {\n            lastError = error;\n            console.log(`Attempt ${attempt} failed:`, error.message);\n            \n            if (attempt === maxRetries) break;\n            \n            const waitTime = delay * Math.pow(2, attempt - 1);\n            console.log(`Waiting ${waitTime}ms before retry...`);\n            await new Promise(resolve => setTimeout(resolve, waitTime));\n        }\n    }\n    \n    throw new Error(`All ${maxRetries} attempts failed. Last error: ${lastError.message}`);\n}\n\nlet attempts = 0;\nconst flakyOperation = async () => {\n    attempts++;\n    if (attempts < 3) throw new Error("Temporary failure");\n    return "Success!";\n};\n\nretryOperation(flakyOperation, 3, 500)\n    .then(result => console.log(result))\n    .catch(error => console.log(error.message));',
  hint: 'Implement exponential backoff for retrying failed operations.'
},
{
  id: 'js_error_31',
  topicId: 'js_error',
  question: 'Create error logger for debugging.',
  mathSolution: 'Centralized error logging function.',
  codeSolution: 'const errorLogger = {\n    errors: [],\n    \n    log(error, context = {}) {\n        const errorEntry = {\n            id: Date.now(),\n            timestamp: new Date().toISOString(),\n            name: error.name,\n            message: error.message,\n            stack: error.stack,\n            context,\n            url: window.location.href,\n            userAgent: navigator.userAgent\n        };\n        \n        this.errors.push(errorEntry);\n        console.error(`[${errorEntry.timestamp}] ${error.name}: ${error.message}`, context);\n        \n        // Could send to server\n        // this.sendToServer(errorEntry);\n        \n        return errorEntry;\n    },\n    \n    getErrors() {\n        return this.errors;\n    },\n    \n    clear() {\n        this.errors = [];\n    }\n};\n\n// Usage\ntry {\n    throw new TypeError("Invalid operation");\n} catch (error) {\n    errorLogger.log(error, { userId: 123, operation: "processData" });\n}\n\nconsole.log(errorLogger.getErrors().length);  // 1',
  hint: 'Centralized logging helps with debugging and monitoring.'
},
{
  id: 'js_error_32',
  topicId: 'js_error',
  question: 'Use error boundary pattern in synchronous code.',
  mathSolution: 'Wrap entire function in try-catch as boundary.',
  codeSolution: 'function errorBoundary(fn, fallbackValue = null) {\n    return function(...args) {\n        try {\n            return fn(...args);\n        } catch (error) {\n            console.log(`Error in ${fn.name}:`, error.message);\n            return typeof fallbackValue === "function" \n                ? fallbackValue(error) \n                : fallbackValue;\n        }\n    };\n}\n\nconst riskyFunction = (num) => {\n    if (num < 0) throw new Error("Negative number not allowed");\n    return Math.sqrt(num);\n};\n\nconst safeSqrt = errorBoundary(riskyFunction, 0);\n\nconsole.log(safeSqrt(16));   // 4\nconsole.log(safeSqrt(-1));   // 0 (fallback)\nconsole.log(safeSqrt(25));   // 5',
  hint: 'Error boundary pattern wraps functions to prevent crashes.'
},
{
  id: 'js_error_33',
  topicId: 'js_error',
  question: 'Handle promise rejection without .catch() using async wrapper.',
  mathSolution: 'Create wrapper that catches promise rejections.',
  codeSolution: 'function asyncHandler(asyncFn) {\n    return function(...args) {\n        asyncFn(...args).catch(error => {\n            console.log(`Async error in ${asyncFn.name}:`, error.message);\n            // Handle or rethrow as needed\n        });\n    };\n}\n\n// Without wrapper - unhandled rejection\n// async function fetchUser(id) {\n//     const response = await fetch(`/api/users/${id}`);\n//     return response.json();\n// }\n\n// With wrapper - error caught\nconst safeFetchUser = asyncHandler(async function fetchUser(id) {\n    const response = await fetch(`/api/users/${id}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return response.json();\n});\n\nsafeFetchUser(999);  // Error caught, no unhandled rejection',
  hint: 'Wrap async functions to automatically catch all rejections.'
},
{
  id: 'js_error_34',
  topicId: 'js_error',
  question: 'Handle JSON parsing errors with default values.',
  mathSolution: 'Provide fallback when JSON.parse fails.',
  codeSolution: 'function safeParseJSON(jsonString, fallback = null) {\n    if (typeof jsonString !== "string") {\n        return fallback;\n    }\n    \n    try {\n        return JSON.parse(jsonString);\n    } catch (error) {\n        if (error instanceof SyntaxError) {\n            console.log("Invalid JSON, using fallback");\n            return fallback;\n        }\n        throw error;\n    }\n}\n\n// Test cases\nconsole.log(safeParseJSON(\'{"name":"John"}\'));      // {name: "John"}\nconsole.log(safeParseJSON(\'invalid json\'));         // null\nconsole.log(safeParseJSON(\'invalid\', {}));          // {}\nconsole.log(safeParseJSON(\'{"name": "John"\', []));  // []',
  hint: 'Always provide fallback when parsing external JSON.'
},
{
  id: 'js_error_35',
  topicId: 'js_error',
  question: 'Catch and rethrow with additional context.',
  mathSolution: 'Add context before rethrowing original error.',
  codeSolution: 'async function fetchUserWithContext(userId) {\n    try {\n        const response = await fetch(`/api/users/${userId}`);\n        if (!response.ok) {\n            throw new Error(`HTTP ${response.status}`);\n        }\n        return await response.json();\n    } catch (error) {\n        // Add context without losing original error\n        error.context = { userId, timestamp: Date.now() };\n        error.message = `Failed to fetch user ${userId}: ${error.message}`;\n        throw error;\n    }\n}\n\nasync function processRequest() {\n    try {\n        const user = await fetchUserWithContext(999);\n        console.log(user);\n    } catch (error) {\n        console.log("Error:", error.message);\n        console.log("Context:", error.context);\n    }\n}\n\nprocessRequest();',
  hint: 'Add context to errors before rethrowing for better debugging.'
},
{
  id: 'js_error_36',
  topicId: 'js_error',
  question: 'Use finally to restore state after error.',
  mathSolution: 'Restore application state in finally block.',
  codeSolution: 'class ButtonManager {\n    constructor(buttonId) {\n        this.button = document.getElementById(buttonId);\n        this.originalText = this.button?.textContent || "";\n    }\n    \n    async performAction() {\n        if (!this.button) return;\n        \n        // Save state\n        const originalText = this.button.textContent;\n        this.button.disabled = true;\n        this.button.textContent = "Processing...";\n        \n        try {\n            // Risky operation\n            await this.doAsyncWork();\n            this.button.textContent = "Success!";\n        } catch (error) {\n            this.button.textContent = "Error!";\n            console.log(error.message);\n        } finally {\n            // Always restore button\n            setTimeout(() => {\n                this.button.disabled = false;\n                this.button.textContent = originalText;\n            }, 2000);\n        }\n    }\n    \n    async doAsyncWork() {\n        // Simulate async work\n        return new Promise((resolve, reject) => {\n            setTimeout(() => {\n                Math.random() > 0.5 ? resolve() : reject(new Error("Failed"));\n            }, 1000);\n        });\n    }\n}\n\n// const manager = new ButtonManager("submitBtn");\n// manager.performAction();',
  hint: 'Use finally to restore UI state, close resources, etc.'
},
{
  id: 'js_error_37',
  topicId: 'js_error',
  question: 'Create validation error aggregation.',
  mathSolution: 'Collect multiple validation errors before throwing.',
  codeSolution: 'class ValidationError extends Error {\n    constructor(errors) {\n        super("Validation failed");\n        this.name = "ValidationError";\n        this.errors = errors;\n    }\n}\n\nfunction validateUser(user) {\n    const errors = [];\n    \n    if (!user.name) {\n        errors.push({ field: "name", message: "Name is required" });\n    } else if (user.name.length < 2) {\n        errors.push({ field: "name", message: "Name must be at least 2 characters" });\n    }\n    \n    if (!user.email) {\n        errors.push({ field: "email", message: "Email is required" });\n    } else if (!user.email.includes("@")) {\n        errors.push({ field: "email", message: "Invalid email format" });\n    }\n    \n    if (user.age !== undefined && (user.age < 0 || user.age > 150)) {\n        errors.push({ field: "age", message: "Age must be between 0 and 150" });\n    }\n    \n    if (errors.length > 0) {\n        throw new ValidationError(errors);\n    }\n    \n    return true;\n}\n\ntry {\n    validateUser({ email: "invalid", age: -5 });\n} catch (error) {\n    if (error instanceof ValidationError) {\n        console.log(`Validation failed with ${error.errors.length} errors:`);\n        error.errors.forEach(err => {\n            console.log(`  - ${err.field}: ${err.message}`);\n        });\n    }\n}',
  hint: 'Collect all validation errors before throwing for better UX.'
},
{
  id: 'js_error_38',
  topicId: 'js_error',
  question: 'Handle specific error codes in catch block.',
  mathSolution: 'Check error code or property to determine handling.',
  codeSolution: 'class DatabaseError extends Error {\n    constructor(message, code) {\n        super(message);\n        this.name = "DatabaseError";\n        this.code = code;\n    }\n}\n\nasync function queryDatabase(sql) {\n    // Simulate database errors\n    if (sql.includes("DROP")) {\n        throw new DatabaseError("Permission denied", "ER_NO_PERMISSION");\n    }\n    if (sql.includes("SELECT")) {\n        throw new DatabaseError("Table not found", "ER_NO_SUCH_TABLE");\n    }\n    return { rows: [] };\n}\n\nasync function executeQuery(sql) {\n    try {\n        return await queryDatabase(sql);\n    } catch (error) {\n        if (error.code === "ER_NO_PERMISSION") {\n            console.log("Permission error, logging attempt");\n            return null;\n        }\n        if (error.code === "ER_NO_SUCH_TABLE") {\n            console.log("Table missing, creating...");\n            // Create table logic\n            return { rows: [] };\n        }\n        throw error;\n    }\n}\n\nexecuteQuery("SELECT * FROM users");',
  hint: 'Use error codes for granular error handling.'
},
{
  id: 'js_error_39',
  topicId: 'js_error',
  question: 'Handle errors in Web Workers.',
  mathSolution: 'Listen to error events from worker.',
  codeSolution: '// Main thread\nconst worker = new Worker("worker.js");\n\nworker.onerror = (error) => {\n    console.log("Worker error:", error.message);\n    console.log("Line:", error.lineno);\n    console.log("File:", error.filename);\n};\n\nworker.onmessage = (event) => {\n    console.log("Worker result:", event.data);\n};\n\n// Send message to worker\nworker.postMessage({ task: "complex calculation" });\n\n// worker.js (separate file)\n// self.onmessage = function(event) {\n//     try {\n//         // Simulate error\n//         throw new Error("Something went wrong in worker");\n//         self.postMessage("result");\n//     } catch (error) {\n//         self.postMessage({ error: error.message });\n//     }\n// };',
  hint: 'Use onerror handler and try-catch inside workers.'
},
{
  id: 'js_error_40',
  topicId: 'js_error',
  question: 'Handle errors in callback functions.',
  mathSolution: 'Use error-first callback pattern.',
  codeSolution: '// Error-first callback pattern\nfunction readFile(filename, callback) {\n    // Simulate async operation\n    setTimeout(() => {\n        if (filename === "valid.txt") {\n            callback(null, "File contents");\n        } else {\n            callback(new Error(`File not found: ${filename}`), null);\n        }\n    }, 100);\n}\n\n// Using the callback\nreadFile("invalid.txt", (error, data) => {\n    if (error) {\n        console.log("Error:", error.message);\n        return;\n    }\n    console.log("Data:", data);\n});\n\n// Promise wrapper for callback\nfunction readFilePromise(filename) {\n    return new Promise((resolve, reject) => {\n        readFile(filename, (error, data) => {\n            if (error) reject(error);\n            else resolve(data);\n        });\n    });\n}\n\nreadFilePromise("valid.txt")\n    .then(data => console.log(data))\n    .catch(error => console.log(error.message));',
  hint: 'Error-first callbacks: first parameter is error, second is result.'
},
);