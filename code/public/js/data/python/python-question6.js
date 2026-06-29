QuizData.questions.push(
    //1.AsynPrograming 2.Decorators 3.generator ,4.LambdaFubction ka data 
  {
    id: "py_async_1",
    topicId: "py_async",
    question: "Write a simple async function that prints 'Hello' and then 'World' after a 1-second delay.",
    mathSolution: "Use asyncio.sleep(1) to create a 1-second delay",
    codeSolution: "import asyncio\n\nasync def say_hello():\n    print('Hello')\n    await asyncio.sleep(1)\n    print('World')\n\nasyncio.run(say_hello())",
    hint: "Define function with `async def`, use `await asyncio.sleep(1)`"
  },
  {
    id: "py_async_2",
    topicId: "py_async",
    question: "Create an async function that returns 'Task Complete' after 2 seconds and print the result.",
    mathSolution: "Function returns string after 2s delay",
    codeSolution: "import asyncio\n\nasync def complete_task():\n    await asyncio.sleep(2)\n    return 'Task Complete'\n\nasync def main():\n    result = await complete_task()\n    print(result)\n\nasyncio.run(main())",
    hint: "Use `return` statement after await"
  },
  {
    id: "py_async_3",
    topicId: "py_async",
    question: "Run two async functions concurrently using asyncio.gather().",
    mathSolution: "Both functions execute simultaneously, total time ~2s",
    codeSolution: "import asyncio\n\nasync def task1():\n    await asyncio.sleep(2)\n    print('Task 1 done')\n\nasync def task2():\n    await asyncio.sleep(1)\n    print('Task 2 done')\n\nasync def main():\n    await asyncio.gather(task1(), task2())\n\nasyncio.run(main())",
    hint: "Use `asyncio.gather()` to run multiple coroutines"
  },
  {
    id: "py_async_4",
    topicId: "py_async",
    question: "Create a list of 5 coroutines that sleep for different times and run them concurrently.",
    mathSolution: "5 tasks run concurrently, total time = max sleep time",
    codeSolution: "import asyncio\n\nasync def sleep_task(seconds):\n    await asyncio.sleep(seconds)\n    print(f'Slept for {seconds}s')\n\nasync def main():\n    tasks = [sleep_task(i) for i in [1, 2, 3, 1, 2]]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use list comprehension to create tasks and unpack with *"
  },
  {
    id: "py_async_5",
    topicId: "py_async",
    question: "Implement a timeout for an async function using asyncio.wait_for().",
    mathSolution: "Function raises TimeoutError if execution exceeds given time",
    codeSolution: "import asyncio\n\nasync def slow_function():\n    await asyncio.sleep(5)\n    return 'Done'\n\nasync def main():\n    try:\n        result = await asyncio.wait_for(slow_function(), timeout=2)\n        print(result)\n    except asyncio.TimeoutError:\n        print('Function timed out')\n\nasyncio.run(main())",
    hint: "Wrap await with `asyncio.wait_for(coroutine, timeout)`"
  },
  {
    id: "py_async_6",
    topicId: "py_async",
    question: "Create an async generator that yields numbers 1 to 5 with 0.5s delay between each.",
    mathSolution: "Generator yields 5 values with 0.5s intervals",
    codeSolution: "import asyncio\n\nasync def async_counter():\n    for i in range(1, 6):\n        await asyncio.sleep(0.5)\n        yield i\n\nasync def main():\n    async for num in async_counter():\n        print(num)\n\nasyncio.run(main())",
    hint: "Use `yield` in async function and `async for` to iterate"
  },
  {
    id: "py_async_7",
    topicId: "py_async",
    question: "Use asyncio.Queue to pass messages between producer and consumer coroutines.",
    mathSolution: "Producer puts 5 items, consumer gets them concurrently",
    codeSolution: "import asyncio\n\nasync def producer(queue):\n    for i in range(5):\n        await asyncio.sleep(0.5)\n        await queue.put(f'item {i}')\n        print(f'Produced item {i}')\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        print(f'Consumed {item}')\n        queue.task_done()\n\nasync def main():\n    queue = asyncio.Queue()\n    producer_task = asyncio.create_task(producer(queue))\n    consumer_task = asyncio.create_task(consumer(queue))\n    await producer_task\n    await queue.join()\n    consumer_task.cancel()\n\nasyncio.run(main())",
    hint: "Use `asyncio.Queue()` for async communication"
  },
  {
    id: "py_async_8",
    topicId: "py_async",
    question: "Create a semaphore to limit concurrent execution to 3 tasks.",
    mathSolution: "Semaphore allows only 3 tasks to run concurrently",
    codeSolution: "import asyncio\n\nasync def worker(semaphore, id):\n    async with semaphore:\n        print(f'Worker {id} started')\n        await asyncio.sleep(2)\n        print(f'Worker {id} finished')\n\nasync def main():\n    semaphore = asyncio.Semaphore(3)\n    tasks = [worker(semaphore, i) for i in range(10)]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `asyncio.Semaphore(n)` and `async with semaphore:`"
  },
  {
    id: "py_async_9",
    topicId: "py_async",
    question: "Cancel a running task using task.cancel().",
    mathSolution: "Task raises CancelledError when cancelled",
    codeSolution: "import asyncio\n\nasync def long_task():\n    try:\n        await asyncio.sleep(10)\n    except asyncio.CancelledError:\n        print('Task was cancelled')\n        raise\n\nasync def main():\n    task = asyncio.create_task(long_task())\n    await asyncio.sleep(1)\n    task.cancel()\n    try:\n        await task\n    except asyncio.CancelledError:\n        print('Main caught cancellation')\n\nasyncio.run(main())",
    hint: "Use `task.cancel()` and handle `asyncio.CancelledError`"
  },
  {
    id: "py_async_10",
    topicId: "py_async",
    question: "Use asyncio.shield() to protect a task from cancellation.",
    mathSolution: "Shielded task continues even if surrounding task is cancelled",
    codeSolution: "import asyncio\n\nasync def critical_task():\n    await asyncio.sleep(3)\n    print('Critical task completed')\n    return 'Important data'\n\nasync def main():\n    task = asyncio.create_task(critical_task())\n    shielded = asyncio.shield(task)\n    await asyncio.sleep(1)\n    task.cancel()\n    try:\n        result = await shielded\n        print(f'Got result: {result}')\n    except asyncio.CancelledError:\n        print('Shielded task was not cancelled')\n\nasyncio.run(main())",
    hint: "Wrap task with `asyncio.shield()` to prevent cancellation"
  },
  {
    id: "py_async_11",
    topicId: "py_async",
    question: "Create a custom event loop policy to use a different event loop.",
    mathSolution: "Set custom policy for event loop creation",
    codeSolution: "import asyncio\n\nclass MyEventLoopPolicy(asyncio.DefaultEventLoopPolicy):\n    def new_event_loop(self):\n        loop = super().new_event_loop()\n        print('Custom event loop created')\n        return loop\n\nasync def main():\n    print('Running in custom event loop')\n\nasyncio.set_event_loop_policy(MyEventLoopPolicy())\nasyncio.run(main())",
    hint: "Subclass `DefaultEventLoopPolicy` and override methods"
  },
  {
    id: "py_async_12",
    topicId: "py_async",
    question: "Use asyncio.as_completed() to process tasks as they complete.",
    mathSolution: "Tasks yield results in completion order, not start order",
    codeSolution: "import asyncio\n\nasync def task_with_delay(id, delay):\n    await asyncio.sleep(delay)\n    return f'Task {id} completed after {delay}s'\n\nasync def main():\n    tasks = [\n        task_with_delay(1, 3),\n        task_with_delay(2, 1),\n        task_with_delay(3, 2)\n    ]\n    for coro in asyncio.as_completed(tasks):\n        result = await coro\n        print(result)\n\nasyncio.run(main())",
    hint: "Use `asyncio.as_completed()` to iterate over tasks in completion order"
  },
  {
    id: "py_async_13",
    topicId: "py_async",
    question: "Create a subprocess using asyncio and read its output.",
    mathSolution: "Run 'echo hello' and capture stdout",
    codeSolution: "import asyncio\n\nasync def run_subprocess():\n    proc = await asyncio.create_subprocess_shell(\n        'echo hello',\n        stdout=asyncio.subprocess.PIPE,\n        stderr=asyncio.subprocess.PIPE\n    )\n    stdout, stderr = await proc.communicate()\n    print(f'stdout: {stdout.decode()}')\n\nasyncio.run(run_subprocess())",
    hint: "Use `asyncio.create_subprocess_shell()` or `create_subprocess_exec()`"
  },
  {
    id: "py_async_14",
    topicId: "py_async",
    question: "Use asyncio.locks.Lock to prevent race conditions.",
    mathSolution: "Lock ensures only one coroutine accesses shared resource at a time",
    codeSolution: "import asyncio\n\ncounter = 0\n\nasync def increment(lock):\n    global counter\n    async with lock:\n        temp = counter\n        await asyncio.sleep(0.1)\n        counter = temp + 1\n\nasync def main():\n    lock = asyncio.Lock()\n    tasks = [increment(lock) for _ in range(10)]\n    await asyncio.gather(*tasks)\n    print(f'Final counter: {counter}')\n\nif __name__ == '__main__':\n    # Works with Python 3.7+\n    asyncio.run(main())",
    hint: "Use `async with lock:` to protect critical sections"
},
  {
    id: "py_async_15",
    topicId: "py_async",
    question: "Implement an async context manager using __aenter__ and __aexit__.",
    mathSolution: "Context manager sets up and tears down async resources",
    codeSolution: "import asyncio\n\nclass AsyncResource:\n    async def __aenter__(self):\n        print('Acquiring resource')\n        await asyncio.sleep(1)\n        return self\n    \n    async def __aexit__(self, exc_type, exc_val, exc_tb):\n        print('Releasing resource')\n        await asyncio.sleep(1)\n    \n    async def use(self):\n        print('Using resource')\n\nasync def main():\n    async with AsyncResource() as resource:\n        await resource.use()\n\nasyncio.run(main())",
    hint: "Define `__aenter__` and `__aexit__` methods"
  },
  {
    id: "py_async_16",
    topicId: "py_async",
    question: "Use asyncio.create_task() to run multiple tasks concurrently.",
    mathSolution: "Create and await multiple tasks for concurrent execution",
    codeSolution: "import asyncio\n\nasync def print_numbers():\n    for i in range(5):\n        print(i)\n        await asyncio.sleep(0.5)\n\nasync def print_letters():\n    for letter in 'abcde':\n        print(letter)\n        await asyncio.sleep(0.3)\n\nasync def main():\n    task1 = asyncio.create_task(print_numbers())\n    task2 = asyncio.create_task(print_letters())\n    await task1\n    await task2\n\nasyncio.run(main())",
    hint: "Use `asyncio.create_task()` to schedule coroutines"
  },
  {
    id: "py_async_17",
    topicId: "py_async",
    question: "Handle exceptions in gather() using return_exceptions=True.",
    mathSolution: "Gather returns exceptions as values instead of raising",
    codeSolution: "import asyncio\n\nasync def might_fail(id):\n    if id == 2:\n        raise ValueError(f'Task {id} failed')\n    await asyncio.sleep(id)\n    return f'Task {id} succeeded'\n\nasync def main():\n    results = await asyncio.gather(\n        might_fail(1),\n        might_fail(2),\n        might_fail(3),\n        return_exceptions=True\n    )\n    for result in results:\n        if isinstance(result, Exception):\n            print(f'Caught: {result}')\n        else:\n            print(f'Result: {result}')\n\nasyncio.run(main())",
    hint: "Set `return_exceptions=True` in gather()"
  },
  {
    id: "py_async_18",
    topicId: "py_async",
    question: "Create a future manually and set its result.",
    mathSolution: "Future resolves with set_result() after delay",
    codeSolution: "import asyncio\n\nasync def set_future(future):\n    await asyncio.sleep(2)\n    future.set_result('Future is done')\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    future = loop.create_future()\n    asyncio.create_task(set_future(future))\n    result = await future\n    print(result)\n\nasyncio.run(main())",
    hint: "Use `loop.create_future()` to create a future"
  },
  {
    id: "py_async_19",
    topicId: "py_async",
    question: "Use asyncio.wait() with different return conditions (FIRST_COMPLETED).",
    mathSolution: "Wait returns when first task completes",
    codeSolution: "import asyncio\n\nasync def my_task(name, delay):\n    await asyncio.sleep(delay)\n    return name\n\nasync def main():\n    tasks = [\n        asyncio.create_task(my_task('A', 3)),\n        asyncio.create_task(my_task('B', 1)),\n        asyncio.create_task(my_task('C', 2))\n    ]\n    done, pending = await asyncio.wait(tasks, return_when=asyncio.FIRST_COMPLETED)\n    for t in done:\n        print(f'Completed: {t.result()}')\n    for t in pending:\n        t.cancel()\n\nasyncio.run(main())",
    hint: "Use `return_when=asyncio.FIRST_COMPLETED`"
},
  {
    id: "py_async_20",
    topicId: "py_async",
    question: "Implement a simple async TCP echo server.",
    mathSolution: "Server echoes received data back to client",
    codeSolution: "import asyncio\n\nasync def handle_client(reader, writer):\n    data = await reader.read(100)\n    message = data.decode()\n    addr = writer.get_extra_info('peername')\n    print(f'Received {message} from {addr}')\n    writer.write(data)\n    await writer.drain()\n    writer.close()\n    await writer.wait_closed()\n\nasync def main():\n    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)\n    async with server:\n        await server.serve_forever()\n\nasyncio.run(main())",
    hint: "Use `asyncio.start_server()`"
  },
  {
    id: "py_async_21",
    topicId: "py_async",
    question: "Create a TCP client that connects to the echo server.",
    mathSolution: "Client sends message and receives echo",
    codeSolution: "import asyncio\n\nasync def tcp_client():\n    reader, writer = await asyncio.open_connection('127.0.0.1', 8888)\n    message = 'Hello World'\n    writer.write(message.encode())\n    await writer.drain()\n    data = await reader.read(100)\n    print(f'Received: {data.decode()}')\n    writer.close()\n    await writer.wait_closed()\n\nasyncio.run(tcp_client())",
    hint: "Use `asyncio.open_connection()`"
  },
  {
    id: "py_async_22",
    topicId: "py_async",
    question: "Use asyncio.ensure_future() to schedule a coroutine.",
    mathSolution: "Alternative to create_task() for scheduling",
    codeSolution: "import asyncio\n\nasync def say_hello():\n    await asyncio.sleep(1)\n    print('Hello')\n\nasync def main():\n    task = asyncio.ensure_future(say_hello())\n    await task\n\nasyncio.run(main())",
    hint: "`asyncio.ensure_future()` schedules coroutine execution"
  },
  {
    id: "py_async_23",
    topicId: "py_async",
    question: "Implement a rate limiter using asyncio.Semaphore.",
    mathSolution: "Limit to 2 requests per second",
    codeSolution: "import asyncio\n\nclass RateLimiter:\n    def __init__(self, rate):\n        self.semaphore = asyncio.Semaphore(rate)\n    \n    async def acquire(self):\n        await self.semaphore.acquire()\n        asyncio.create_task(self.release())\n    \n    async def release(self):\n        await asyncio.sleep(1)\n        self.semaphore.release()\n\nasync def make_request(limiter, id):\n    await limiter.acquire()\n    print(f'Request {id} started')\n    await asyncio.sleep(0.5)\n    print(f'Request {id} finished')\n\nasync def main():\n    limiter = RateLimiter(2)\n    tasks = [make_request(limiter, i) for i in range(10)]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use semaphore with timed release for rate limiting"
  },
  {
    id: "py_async_24",
    topicId: "py_async",
    question: "Use asyncio.Condition to coordinate coroutines.",
    mathSolution: "Condition allows coroutines to wait for notifications",
    codeSolution: "import asyncio\n\nasync def consumer(condition, name):\n    async with condition:\n        print(f'{name} waiting')\n        await condition.wait()\n        print(f'{name} notified')\n\nasync def producer(condition):\n    await asyncio.sleep(2)\n    async with condition:\n        condition.notify_all()\n    print('Producer notified all')\n\nasync def main():\n    condition = asyncio.Condition()\n    consumers = [consumer(condition, f'Consumer {i}') for i in range(3)]\n    tasks = [asyncio.create_task(c) for c in consumers]\n    tasks.append(asyncio.create_task(producer(condition)))\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `condition.wait()` and `condition.notify()`"
  },
  {
    id: "py_async_25",
    topicId: "py_async",
    question: "Implement an async iterator that generates Fibonacci numbers.",
    mathSolution: "Async iterator yields Fibonacci sequence with delays",
    codeSolution: "import asyncio\n\nclass AsyncFibonacci:\n    def __init__(self, limit):\n        self.limit = limit\n        self.a, self.b = 0, 1\n        self.count = 0\n    \n    def __aiter__(self):\n        return self\n    \n    async def __anext__(self):\n        if self.count >= self.limit:\n            raise StopAsyncIteration\n        await asyncio.sleep(0.5)\n        result = self.a\n        self.a, self.b = self.b, self.a + self.b\n        self.count += 1\n        return result\n\nasync def main():\n    async for num in AsyncFibonacci(10):\n        print(num)\n\nasyncio.run(main())",
    hint: "Implement `__aiter__` and `__anext__` methods"
  },
  {
    id: "py_async_26",
    topicId: "py_async",
    question: "Use asyncio.run_coroutine_threadsafe() from another thread.",
    mathSolution: "Submit coroutine to event loop from different thread",
    codeSolution: "import asyncio\nimport threading\nimport time\n\nasync def async_task():\n    await asyncio.sleep(0.5)\n    return 'Hello from async_task'\n\ndef run_in_thread(loop):\n    # This runs in a separate thread\n    future = asyncio.run_coroutine_threadsafe(async_task(), loop)\n    result = future.result()  # Wait for result\n    print(f'Thread received: {result}')\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    \n    # Create thread\n    thread = threading.Thread(target=run_in_thread, args=(loop,))\n    thread.start()\n    \n    # Do other async work while thread runs\n    print('Main: Doing other work...')\n    await asyncio.sleep(1)\n    \n    thread.join()\n    print('Main: Done')\n\nasyncio.run(main())",
    hint: "Use `asyncio.run_coroutine_threadsafe()` for cross-thread operations"
},
  {
    id: "py_async_27",
    topicId: "py_async",
    question: "Use asyncio.gather() to run multiple tasks concurrently and handle results.",
    mathSolution: "gather() runs multiple coroutines concurrently and returns results",
    codeSolution: "import asyncio\n\nasync def task(name, delay):\n    await asyncio.sleep(delay)\n    print(f'Task {name} completed after {delay}s')\n    return f'Result-{name}'\n\nasync def main():\n    # Run multiple tasks concurrently\n    results = await asyncio.gather(\n        task('A', 2),\n        task('B', 1),\n        task('C', 3)\n    )\n    \n    print(f'\\nAll tasks completed!')\n    for i, result in enumerate(results):\n        print(f'Task {chr(65+i)} returned: {result}')\n\nasyncio.run(main())",
    hint: "Use `asyncio.gather()` to run multiple coroutines concurrently"
},
  {
    id: "py_async_28",
    topicId: "py_async",
    question: "Use asyncio.wait_for() to set a timeout on an operation.",
    mathSolution: "wait_for() raises TimeoutError if coroutine takes too long",
    codeSolution: "import asyncio\n\nasync def fetch_data(name, delay):\n    print(f'Fetching {name}...')\n    await asyncio.sleep(delay)\n    return f'Data from {name}'\n\nasync def main():\n    try:\n        # Timeout after 3 seconds\n        result = await asyncio.wait_for(fetch_data('API', 2), timeout=3)\n        print(f'Success: {result}')\n    except asyncio.TimeoutError:\n        print('Operation timed out')\n    \n    try:\n        # This will timeout\n        result = await asyncio.wait_for(fetch_data('Slow API', 5), timeout=2)\n        print(f'Success: {result}')\n    except asyncio.TimeoutError:\n        print('Slow API timed out after 2 seconds')\n\nasyncio.run(main())",
    hint: "Use `asyncio.wait_for(coroutine, timeout)` for timeouts (Python 3.7+)"
},
  {
    id: "py_async_29",
    topicId: "py_async",
    question: "Implement a simple async file reader using aiofiles (simulate with asyncio).",
    mathSolution: "Simulate async file reading with delays",
    codeSolution: "import asyncio\n\nclass AsyncFile:\n    def __init__(self, filename):\n        self.filename = filename\n        self.content = ['line 1\\n', 'line 2\\n', 'line 3\\n']\n    \n    async def readline(self):\n        await asyncio.sleep(0.1)\n        if self.content:\n            return self.content.pop(0)\n        return ''\n\nasync def read_file():\n    file = AsyncFile('test.txt')\n    while True:\n        line = await file.readline()\n        if not line:\n            break\n        print(line.strip())\n\nasyncio.run(read_file())",
    hint: "Simulate async I/O with await asyncio.sleep()"
  },
  {
    id: "py_async_30",
    topicId: "py_async",
    question: "Create a pool of workers using asyncio.Queue.",
    mathSolution: "Multiple workers process tasks from queue",
    codeSolution: "import asyncio\n\nasync def worker(name, queue):\n    while True:\n        task = await queue.get()\n        if task is None:\n            break\n        print(f'Worker {name} processing task {task}')\n        await asyncio.sleep(task)\n        queue.task_done()\n\nasync def main():\n    queue = asyncio.Queue()\n    for i in range(10):\n        await queue.put(i % 3 + 1)\n    for i in range(3):\n        await queue.put(None)\n    workers = [asyncio.create_task(worker(f'W{i}', queue)) for i in range(3)]\n    await asyncio.gather(*workers)\n\nasyncio.run(main())",
    hint: "Use None as sentinel to stop workers"
  },
  {
    id: "py_async_31",
    topicId: "py_async",
    question: "Implement a retry mechanism for failed async operations.",
    mathSolution: "Retry operation up to 3 times with exponential backoff",
    codeSolution: "import asyncio\n\nasync def unreliable_operation():\n    import random\n    if random.random() < 0.7:\n        raise ValueError('Operation failed')\n    return 'Success'\n\nasync def retry_operation(max_retries=3):\n    for attempt in range(max_retries):\n        try:\n            result = await unreliable_operation()\n            return result\n        except Exception as e:\n            print(f'Attempt {attempt + 1} failed: {e}')\n            if attempt < max_retries - 1:\n                wait_time = 2 ** attempt\n                await asyncio.sleep(wait_time)\n    raise Exception('All retries failed')\n\nasync def main():\n    try:\n        result = await retry_operation()\n        print(result)\n    except Exception as e:\n        print(e)\n\nasyncio.run(main())",
    hint: "Use exponential backoff with asyncio.sleep()"
  },
  {
    id: "py_async_32",
    topicId: "py_async",
    question: "Use asyncio.Event to signal between coroutines.",
    mathSolution: "Event allows one coroutine to signal others",
    codeSolution: "import asyncio\n\nasync def waiter(event, name):\n    print(f'{name} waiting for event')\n    await event.wait()\n    print(f'{name} received event')\n\nasync def setter(event):\n    await asyncio.sleep(2)\n    print('Setting event')\n    event.set()\n\nasync def main():\n    event = asyncio.Event()\n    waiters = [waiter(event, f'Waiter {i}') for i in range(3)]\n    tasks = [asyncio.create_task(w) for w in waiters]\n    tasks.append(asyncio.create_task(setter(event)))\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `event.wait()` and `event.set()`"
  },
  {
    id: "py_async_33",
    topicId: "py_async",
    question: "Implement a simple async HTTP client using asyncio.open_connection.",
    mathSolution: "Send HTTP GET request and parse response",
    codeSolution: "import asyncio\n\nasync def fetch_http():\n    reader, writer = await asyncio.open_connection('example.com', 80)\n    request = 'GET / HTTP/1.0\\r\\nHost: example.com\\r\\n\\r\\n'\n    writer.write(request.encode())\n    await writer.drain()\n    response = await reader.read(1024)\n    writer.close()\n    await writer.wait_closed()\n    print(response.decode()[:200])\n\nasyncio.run(fetch_http())",
    hint: "Format HTTP request correctly with CRLF"
  },
  {
    id: "py_async_34",
    topicId: "py_async",
    question: "Use asyncio.Barrier to synchronize multiple coroutines.",
    mathSolution: "Barrier waits for all coroutines to reach a point",
    codeSolution: "import asyncio\n\nasync def worker(barrier, name):\n    print(f'{name} working')\n    await asyncio.sleep(name)\n    print(f'{name} waiting at barrier')\n    await barrier.wait()\n    print(f'{name} passed barrier')\n\nasync def main():\n    barrier = asyncio.Barrier(3)\n    tasks = [worker(barrier, i) for i in range(1, 4)]\n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "Use `asyncio.Barrier(n)` for n-party synchronization"
  },
  {
    id: "py_async_35",
    topicId: "py_async",
    question: "Create a timeout decorator for async functions.",
    mathSolution: "Decorator adds timeout capability to any async function",
    codeSolution: "import asyncio\nfrom functools import wraps\n\ndef timeout(seconds):\n    def decorator(func):\n        @wraps(func)\n        async def wrapper(*args, **kwargs):\n            try:\n                return await asyncio.wait_for(func(*args, **kwargs), timeout=seconds)\n            except asyncio.TimeoutError:\n                raise TimeoutError(f'Function {func.__name__} timed out')\n        return wrapper\n    return decorator\n\n@timeout(2)\nasync def slow_function():\n    await asyncio.sleep(3)\n    return 'Done'\n\nasync def main():\n    try:\n        result = await slow_function()\n        print(result)\n    except TimeoutError as e:\n        print(e)\n\nasyncio.run(main())",
    hint: "Use `asyncio.wait_for()` inside decorator"
  },
  {
    id: "py_async_36",
    topicId: "py_async",
    question: "Implement a circuit breaker pattern for async functions.",
    mathSolution: "Circuit breaker prevents calls when failure threshold reached",
    codeSolution: "import asyncio\nfrom datetime import datetime, timedelta\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n    \n    async def call(self, func, *args, **kwargs):\n        if self.state == 'OPEN':\n            if datetime.now() - self.last_failure_time > timedelta(seconds=self.recovery_timeout):\n                self.state = 'HALF_OPEN'\n            else:\n                raise Exception('Circuit breaker is OPEN')\n        \n        try:\n            result = await func(*args, **kwargs)\n            if self.state == 'HALF_OPEN':\n                self.state = 'CLOSED'\n                self.failure_count = 0\n            return result\n        except Exception as e:\n            self.failure_count += 1\n            self.last_failure_time = datetime.now()\n            if self.failure_count >= self.failure_threshold:\n                self.state = 'OPEN'\n            raise e\n\nasync def unstable_function():\n    import random\n    if random.random() < 0.8:\n        raise ValueError('Failed')\n    return 'Success'\n\nasync def main():\n    breaker = CircuitBreaker()\n    for i in range(10):\n        try:\n            result = await breaker.call(unstable_function)\n            print(f'Call {i}: {result}')\n        except Exception as e:\n            print(f'Call {i}: {e}')\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Track failure count and state transitions"
  },
  {
    id: "py_async_37",
    topicId: "py_async",
    question: "Use asyncio.StreamReader and StreamWriter for simple chat.",
    mathSolution: "Implement a basic chat server",
    codeSolution: "import asyncio\n\nclients = set()\n\nasync def handle_client(reader, writer):\n    clients.add(writer)\n    addr = writer.get_extra_info('peername')\n    print(f'New connection from {addr}')\n    \n    try:\n        while True:\n            data = await reader.read(100)\n            if not data:\n                break\n            message = data.decode()\n            print(f'Received from {addr}: {message}')\n            for client in clients:\n                if client != writer:\n                    client.write(f'{addr}: {message}'.encode())\n                    await client.drain()\n    except asyncio.CancelledError:\n        pass\n    finally:\n        clients.remove(writer)\n        writer.close()\n        await writer.wait_closed()\n        print(f'Connection from {addr} closed')\n\nasync def main():\n    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)\n    async with server:\n        await server.serve_forever()\n\nasyncio.run(main())",
    hint: "Maintain set of clients for broadcasting"
  },
  {
    id: "py_async_38",
    topicId: "py_async",
    question: "Implement a task that runs periodically using asyncio.",
    mathSolution: "Run a task every N seconds",
    codeSolution: "import asyncio\n\nasync def periodic_task(interval):\n    count = 0\n    while True:\n        count += 1\n        print(f'Periodic task executed {count} times')\n        await asyncio.sleep(interval)\n\nasync def main():\n    task = asyncio.create_task(periodic_task(2))\n    await asyncio.sleep(10)\n    task.cancel()\n    try:\n        await task\n    except asyncio.CancelledError:\n        print('Periodic task cancelled')\n\nasyncio.run(main())",
    hint: "Use while loop with asyncio.sleep()"
  },
  {
    id: "py_async_39",
    topicId: "py_async",
    question: "Use asyncio.Queue with maxsize to implement a bounded buffer.",
    mathSolution: "Queue size limited to maxsize items",
    codeSolution: "import asyncio\n\nasync def producer(queue):\n    for i in range(10):\n        await queue.put(i)\n        print(f'Produced {i}, queue size: {queue.qsize()}')\n        await asyncio.sleep(0.1)\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        print(f'Consumed {item}')\n        await asyncio.sleep(0.3)\n        queue.task_done()\n\nasync def main():\n    queue = asyncio.Queue(maxsize=3)\n    producer_task = asyncio.create_task(producer(queue))\n    consumer_task = asyncio.create_task(consumer(queue))\n    await producer_task\n    await queue.join()\n    consumer_task.cancel()\n\nasyncio.run(main())",
    hint: "Queue.put() will wait when queue is full"
  },
  {
    id: "py_async_40",
    topicId: "py_async",
    question: "Implement a simple async cache with TTL.",
    mathSolution: "Cache stores values with time-based expiration",
    codeSolution: "import asyncio\nimport time\n\nclass AsyncCache:\n    def __init__(self, ttl=5):\n        self.cache = {}\n        self.ttl = ttl\n    \n    async def get(self, key):\n        if key in self.cache:\n            value, timestamp = self.cache[key]\n            if time.time() - timestamp < self.ttl:\n                return value\n            else:\n                del self.cache[key]\n        return None\n    \n    async def set(self, key, value):\n        self.cache[key] = (value, time.time())\n\nasync def expensive_operation(key, cache):\n    result = await cache.get(key)\n    if result:\n        print(f'Cache hit for {key}')\n        return result\n    \n    print(f'Cache miss for {key}, computing...')\n    await asyncio.sleep(2)\n    result = f'Result for {key}'\n    await cache.set(key, result)\n    return result\n\nasync def main():\n    cache = AsyncCache()\n    for key in ['A', 'B', 'A']:\n        result = await expensive_operation(key, cache)\n        print(result)\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Store timestamp with cached values"
  },
  {
    id: "py_async_41",
    topicId: "py_async",
    question: "Use asyncio.gather with error handling for mixed results.",
    mathSolution: "Handle individual task results with error recovery",
    codeSolution: "import asyncio\n\nasync def task_with_handling(id):\n    try:\n        if id == 2:\n            raise ValueError(f'Task {id} failed')\n        await asyncio.sleep(id)\n        return f'Task {id} result'\n    except Exception as e:\n        return f'Task {id} error: {e}'\n\nasync def main():\n    results = await asyncio.gather(*[task_with_handling(i) for i in range(1, 5)])\n    for result in results:\n        print(result)\n\nasyncio.run(main())",
    hint: "Handle exceptions inside each task"
  },
  {
    id: "py_async_42",
    topicId: "py_async",
    question: "Implement a simple async task scheduler with priorities.",
    mathSolution: "Tasks executed based on priority levels",
    codeSolution: "import asyncio\nimport heapq\n\nclass PriorityScheduler:\n    def __init__(self):\n        self.queue = []\n        self.counter = 0\n    \n    async def add_task(self, priority, coro):\n        self.counter += 1\n        heapq.heappush(self.queue, (priority, self.counter, coro))\n    \n    async def run(self):\n        while self.queue:\n            priority, _, coro = heapq.heappop(self.queue)\n            result = await coro\n            print(f'Task with priority {priority} completed: {result}')\n\nasync def sample_task(name, delay):\n    await asyncio.sleep(delay)\n    return name\n\nasync def main():\n    scheduler = PriorityScheduler()\n    await scheduler.add_task(2, sample_task('Low priority', 0.5))\n    await scheduler.add_task(1, sample_task('High priority', 1))\n    await scheduler.add_task(1, sample_task('Another high', 0.3))\n    await scheduler.run()\n\nasyncio.run(main())",
    hint: "Use heapq for priority queue implementation"
  },
  {
    id: "py_async_43",
    topicId: "py_async",
    question: "Use asyncio.current_task() to get current task information.",
    mathSolution: "Get name and details of currently running task",
    codeSolution: "import asyncio\n\nasync def task_with_info(name):\n    current = asyncio.current_task()\n    current.set_name(name)\n    print(f'Task name: {current.get_name()}')\n    print(f'Task: {current}')\n    await asyncio.sleep(1)\n    return name\n\nasync def main():\n    tasks = [\n        asyncio.create_task(task_with_info('Task A')),\n        asyncio.create_task(task_with_info('Task B'))\n    ]\n    results = await asyncio.gather(*tasks)\n    print(results)\n\nasyncio.run(main())",
    hint: "Use `asyncio.current_task()` to get current task"
  },
  {
    id: "py_async_44",
    topicId: "py_async",
    question: "Implement a simple async debounce function.",
    mathSolution: "Debounce delays function execution until no new calls for specified time",
    codeSolution: "import asyncio\n\nclass Debouncer:\n    def __init__(self, delay):\n        self.delay = delay\n        self.task = None\n    \n    async def call(self, func, *args, **kwargs):\n        if self.task:\n            self.task.cancel()\n        \n        async def debounced():\n            await asyncio.sleep(self.delay)\n            return await func(*args, **kwargs)\n        \n        self.task = asyncio.create_task(debounced())\n        return await self.task\n\nasync def search(query):\n    print(f'Searching for: {query}')\n    await asyncio.sleep(0.5)\n    return f'Results for {query}'\n\nasync def main():\n    debouncer = Debouncer(1)\n    queries = ['a', 'ab', 'abc', 'abcd']\n    for query in queries:\n        result = await debouncer.call(search, query)\n        print(result)\n        await asyncio.sleep(0.2)\n\nasyncio.run(main())",
    hint: "Cancel previous task before scheduling new one"
  },
  {
    id: "py_async_45",
    topicId: "py_async",
    question: "Use asyncio.to_thread() to run blocking code in thread pool.",
    mathSolution: "Run CPU-bound or blocking code without blocking event loop",
    codeSolution: "import asyncio\nimport time\n\ndef blocking_io():\n    time.sleep(2)\n    return 'Blocking operation result'\n\nasync def main():\n    print('Starting blocking operation')\n    result = await asyncio.to_thread(blocking_io)\n    print(f'Got: {result}')\n    \n    # Non-blocking task runs concurrently\n    async def other_task():\n        for i in range(5):\n            await asyncio.sleep(0.5)\n            print(f'Other task: {i}')\n    \n    await asyncio.gather(\n        asyncio.to_thread(blocking_io),\n        other_task()\n    )\n\nasyncio.run(main())",
    hint: "Use `asyncio.to_thread()` for blocking functions"
  },
  {
    id: "py_async_46",
    topicId: "py_async",
    question: "Implement a simple async pipeline with multiple stages.",
    mathSolution: "Data flows through processing stages concurrently",
    codeSolution: "import asyncio\n\nasync def stage1(input_queue, output_queue):\n    while True:\n        item = await input_queue.get()\n        if item is None:\n            await output_queue.put(None)\n            break\n        processed = item * 2\n        print(f'Stage 1: {item} -> {processed}')\n        await asyncio.sleep(0.3)\n        await output_queue.put(processed)\n\nasync def stage2(input_queue, output_queue):\n    while True:\n        item = await input_queue.get()\n        if item is None:\n            await output_queue.put(None)\n            break\n        processed = item + 10\n        print(f'Stage 2: {item} -> {processed}')\n        await asyncio.sleep(0.2)\n        await output_queue.put(processed)\n\nasync def producer(queue):\n    for i in range(5):\n        await queue.put(i)\n        await asyncio.sleep(0.1)\n    await queue.put(None)\n\nasync def consumer(queue):\n    while True:\n        item = await queue.get()\n        if item is None:\n            break\n        print(f'Final result: {item}')\n\nasync def main():\n    queue1 = asyncio.Queue()\n    queue2 = asyncio.Queue()\n    queue3 = asyncio.Queue()\n    \n    await asyncio.gather(\n        producer(queue1),\n        stage1(queue1, queue2),\n        stage2(queue2, queue3),\n        consumer(queue3)\n    )\n\nasyncio.run(main())",
    hint: "Use None as sentinel to signal completion"
  },
  {
    id: "py_async_47",
    topicId: "py_async",
    question: "Use asyncio.all_tasks() to get all running tasks.",
    mathSolution: "List all currently scheduled tasks",
    codeSolution: "import asyncio\n\nasync def task_with_name(name, delay):\n    await asyncio.sleep(delay)\n    return name\n\nasync def main():\n    tasks = [\n        asyncio.create_task(task_with_name(f'Task {i}', i))\n        for i in range(1, 4)\n    ]\n    \n    all_tasks = asyncio.all_tasks()\n    current = asyncio.current_task()\n    \n    print(f'Total tasks: {len(all_tasks)}')\n    for task in all_tasks:\n        if task != current:\n            print(f'Task: {task}')\n    \n    await asyncio.gather(*tasks)\n\nasyncio.run(main())",
    hint: "`asyncio.all_tasks()` returns set of all pending tasks"
  },
  {
    id: "py_async_48",
    topicId: "py_async",
    question: "Implement a simple async pub/sub system.",
    mathSolution: "Publishers send messages to multiple subscribers",
    codeSolution: "import asyncio\n\nclass PubSub:\n    def __init__(self):\n        self.subscribers = {}\n    \n    def subscribe(self, topic):\n        if topic not in self.subscribers:\n            self.subscribers[topic] = []\n        queue = asyncio.Queue()\n        self.subscribers[topic].append(queue)\n        return queue\n    \n    async def publish(self, topic, message):\n        if topic in self.subscribers:\n            for queue in self.subscribers[topic]:\n                await queue.put(message)\n\nasync def subscriber(name, topic, pubsub):\n    queue = pubsub.subscribe(topic)\n    while True:\n        message = await queue.get()\n        if message is None:\n            break\n        print(f'{name} received: {message}')\n\nasync def main():\n    pubsub = PubSub()\n    \n    sub1 = asyncio.create_task(subscriber('Sub1', 'news', pubsub))\n    sub2 = asyncio.create_task(subscriber('Sub2', 'news', pubsub))\n    sub3 = asyncio.create_task(subscriber('Sub3', 'sports', pubsub))\n    \n    await pubsub.publish('news', 'Breaking news!')\n    await pubsub.publish('sports', 'Sports update')\n    await asyncio.sleep(1)\n    \n    # Cleanup\n    for task in [sub1, sub2, sub3]:\n        task.cancel()\n\nasyncio.run(main())",
    hint: "Maintain queues per topic for subscribers"
  },
  {
    id: "py_async_49",
    topicId: "py_async",
    question: "Use asyncio.run_in_executor() with ProcessPoolExecutor.",
    mathSolution: "Run CPU-intensive tasks in separate processes",
    codeSolution: "import asyncio\nimport concurrent.futures\nimport math\n\ndef cpu_intensive(n):\n    return sum(math.sqrt(i) for i in range(n))\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    \n    with concurrent.futures.ProcessPoolExecutor() as pool:\n        tasks = [\n            loop.run_in_executor(pool, cpu_intensive, 10**7)\n            for _ in range(4)\n        ]\n        results = await asyncio.gather(*tasks)\n        print(f'Results: {[int(r) for r in results]}')\n\nasyncio.run(main())",
    hint: "Use ProcessPoolExecutor for CPU-bound tasks"
  },
  {
    id: "py_async_50",
    topicId: "py_async",
    question: "Implement a graceful shutdown handler for async applications.",
    mathSolution: "Handle signals to clean up resources on shutdown",
    codeSolution: "import asyncio\nimport signal\n\nasync def main_task():\n    try:\n        while True:\n            print('Working...')\n            await asyncio.sleep(1)\n    except asyncio.CancelledError:\n        print('Main task cancelled, cleaning up...')\n        await asyncio.sleep(2)\n        print('Cleanup complete')\n\nasync def shutdown(signal, loop):\n    print(f'Received signal {signal.name}, shutting down...')\n    tasks = [t for t in asyncio.all_tasks() if t is not asyncio.current_task()]\n    for task in tasks:\n        task.cancel()\n    await asyncio.gather(*tasks, return_exceptions=True)\n    loop.stop()\n\nasync def main():\n    loop = asyncio.get_running_loop()\n    \n    for sig in (signal.SIGTERM, signal.SIGINT):\n        loop.add_signal_handler(sig, lambda s=sig: asyncio.create_task(shutdown(s, loop)))\n    \n    try:\n        await main_task()\n    except asyncio.CancelledError:\n        print('Main task was cancelled')\n\nif __name__ == '__main__':\n    asyncio.run(main())",
    hint: "Use `loop.add_signal_handler()` for graceful shutdown"
  },
  //Decorators
  {
    Id: "py_dec_1",
    topicId: "py_decorators",
    question: "Create a simple decorator that prints 'Before' and 'After' function execution.",
    mathSolution: "Decorator wraps function with pre and post execution code",
    codeSolution: "def simple_decorator(func):\n    def wrapper():\n        print('Before function execution')\n        func()\n        print('After function execution')\n    return wrapper\n\n@simple_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()",
    hint: "Define inner wrapper function that calls original function"
},
{
    Id: "py_dec_2",
    topicId: "py_decorators",
    question: "Create a decorator that measures execution time of a function.",
    mathSolution: "Measure time before and after function call",
    codeSolution: "import time\n\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.4f} seconds')\n        return result\n    return wrapper\n\n@timer_decorator\ndef slow_function():\n    time.sleep(1)\n    return 'Done'\n\nresult = slow_function()\nprint(f'Result: {result}')",
    hint: "Use time.time() before and after function call"
},
{
    Id: "py_dec_3",
    topicId: "py_decorators",
    question: "Create a decorator that logs function calls with arguments.",
    mathSolution: "Log function name and arguments when called",
    codeSolution: "def logger_decorator(func):\n    def wrapper(*args, **kwargs):\n        print(f'Calling {func.__name__} with args={args}, kwargs={kwargs}')\n        result = func(*args, **kwargs)\n        print(f'{func.__name__} returned {result}')\n        return result\n    return wrapper\n\n@logger_decorator\ndef add(a, b):\n    return a + b\n\n@logger_decorator\ndef greet(name, greeting='Hello'):\n    return f'{greeting}, {name}'\n\nadd(3, 5)\ngreet('Alice', greeting='Hi')",
    hint: "Capture *args and **kwargs to log all arguments"
},
{
    Id: "py_dec_4",
    topicId: "py_decorators",
    question: "Create a decorator that caches return values (memoization).",
    mathSolution: "Store results in cache dictionary keyed by arguments",
    codeSolution: "def cache_decorator(func):\n    cache = {}\n    \n    def wrapper(*args, **kwargs):\n        key = str(args) + str(sorted(kwargs.items()))\n        \n        if key in cache:\n            print(f'Cache hit for {args}')\n            return cache[key]\n        \n        print(f'Cache miss for {args}')\n        result = func(*args, **kwargs)\n        cache[key] = result\n        return result\n    \n    return wrapper\n\n@cache_decorator\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n@cache_decorator\ndef expensive_calculation(x, y):\n    print(f'Calculating {x} + {y}...')\n    return x + y\n\nprint(fibonacci(10))\nprint(expensive_calculation(5, 3))\nprint(expensive_calculation(5, 3))  # Cached",
    hint: "Use dictionary to store results with argument tuple as key"
},
{
    Id: "py_dec_5",
    topicId: "py_decorators",
    question: "Create a decorator that validates function arguments.",
    mathSolution: "Check arguments before function execution",
    codeSolution: "def validate_positive(func):\n    def wrapper(*args, **kwargs):\n        for arg in args:\n            if isinstance(arg, (int, float)) and arg < 0:\n                raise ValueError(f'Argument {arg} must be positive')\n        for key, value in kwargs.items():\n            if isinstance(value, (int, float)) and value < 0:\n                raise ValueError(f'Argument {key}={value} must be positive')\n        return func(*args, **kwargs)\n    return wrapper\n\n@validate_positive\ndef calculate_area(length, width):\n    return length * width\n\n@validate_positive\ndef set_temperature(temp):\n    return f'Temperature set to {temp}'\n\nprint(calculate_area(5, 3))\ntry:\n    calculate_area(-5, 3)\nexcept ValueError as e:\n    print(f'Error: {e}')",
    hint: "Check each argument's type and value before calling function"
},
{
    Id: "py_dec_6",
    topicId: "py_decorators",
    question: "Create a decorator that retries failed function calls.",
    mathSolution: "Retry function up to max_attempts if exception occurs",
    codeSolution: "import time\nimport random\n\ndef retry_decorator(max_attempts=3, delay=1):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_attempts):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    print(f'Attempt {attempt + 1} failed: {e}')\n                    if attempt < max_attempts - 1:\n                        print(f'Retrying in {delay} seconds...')\n                        time.sleep(delay)\n                    else:\n                        print('Max attempts reached')\n                        raise\n        return wrapper\n    return decorator\n\n@retry_decorator(max_attempts=3, delay=1)\ndef unstable_network_call():\n    if random.random() < 0.7:\n        raise ConnectionError('Network timeout')\n    return 'Success!'\n\nfor i in range(5):\n    try:\n        result = unstable_network_call()\n        print(f'Result: {result}')\n    except Exception as e:\n        print(f'Failed: {e}')\n    print('-' * 20)",
    hint: "Use loop with try/except, sleep between retries"
},
{
    Id: "py_dec_7",
    topicId: "py_decorators",
    question: "Create a decorator that limits function call rate (rate limiting).",
    mathSolution: "Track call times and enforce minimum interval",
    codeSolution: "import time\n\ndef rate_limiter(max_calls_per_second):\n    min_interval = 1.0 / max_calls_per_second\n    last_called = [0.0]\n    \n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            elapsed = time.time() - last_called[0]\n            if elapsed < min_interval:\n                sleep_time = min_interval - elapsed\n                print(f'Rate limit: sleeping for {sleep_time:.2f}s')\n                time.sleep(sleep_time)\n            \n            result = func(*args, **kwargs)\n            last_called[0] = time.time()\n            return result\n        return wrapper\n    return decorator\n\n@rate_limiter(max_calls_per_second=2)\ndef api_call(request_id):\n    print(f'Processing API call {request_id}')\n    return f'Response {request_id}'\n\nfor i in range(5):\n    print(api_call(i))",
    hint: "Track last call time and sleep if called too soon"
},
{
    Id: "py_dec_8",
    topicId: "py_decorators",
    question: "Create a decorator that ensures function returns a specific type.",
    mathSolution: "Check return type and convert/raise error if wrong",
    codeSolution: "def ensure_return_type(expected_type):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            if not isinstance(result, expected_type):\n                raise TypeError(f'Expected return type {expected_type.__name__}, got {type(result).__name__}')\n            return result\n        return wrapper\n    return decorator\n\n@ensure_return_type(int)\ndef add_to_int(a, b):\n    return a + b\n\n@ensure_return_type(str)\ndef format_name(first, last):\n    return f'{first} {last}'\n\nprint(add_to_int(5, 3))\nprint(format_name('John', 'Doe'))\n\ntry:\n    add_to_int(5, 3.5)  # Returns float\nexcept TypeError as e:\n    print(f'Error: {e}')",
    hint: "Use isinstance() to check return type"
},
{
    Id: "py_dec_9",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout using threading (cross-platform).",
    mathSolution: "Use threading.Timer to implement timeout",
    codeSolution: "import threading\nimport functools\nimport time\n\nclass TimeoutError(Exception):\n    pass\n\ndef timeout_decorator(seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = []\n            error = []\n            \n            def target():\n                try:\n                    result.append(func(*args, **kwargs))\n                except Exception as e:\n                    error.append(e)\n            \n            thread = threading.Thread(target=target)\n            thread.daemon = True\n            thread.start()\n            thread.join(timeout=seconds)\n            \n            if thread.is_alive():\n                raise TimeoutError(f'Function timed out after {seconds} seconds')\n            \n            if error:\n                raise error[0]\n            \n            return result[0]\n        return wrapper\n    return decorator\n\n@timeout_decorator(2)\ndef slow_function():\n    time.sleep(3)\n    return 'Finished'\n\n@timeout_decorator(2)\ndef fast_function():\n    time.sleep(1)\n    return 'Fast function done'\n\nprint('Fast function:')\nprint(fast_function())\nprint('\\nSlow function:')\ntry:\n    print(slow_function())\nexcept TimeoutError as e:\n    print(f'Timeout: {e}')",
    hint: "Use threading with join(timeout) for cross-platform timeout"
},
{
    Id: "py_dec_10",
    topicId: "py_decorators",
    question: "Create a decorator that preserves function metadata using functools.wraps.",
    mathSolution: "functools.wraps copies function name, docstring, etc.",
    codeSolution: "import functools\n\ndef my_decorator(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        \"\"\"Wrapper function\"\"\"\n        print(f'Calling {func.__name__}')\n        return func(*args, **kwargs)\n    return wrapper\n\n@my_decorator\ndef example_function(x):\n    \"\"\"This is an example function.\"\"\"\n    return x * 2\n\nprint(f'Function name: {example_function.__name__}')\nprint(f'Docstring: {example_function.__doc__}')\nprint(f'Module: {example_function.__module__}')\nprint(f'\\nResult: {example_function(5)}')",
    hint: "Always use @functools.wraps in decorators to preserve metadata"
},
{
    Id: "py_dec_11",
    topicId: "py_decorators",
    question: "Create a decorator that counts function calls.",
    mathSolution: "Increment counter each time function is called",
    codeSolution: "import functools\n\ndef call_counter(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        wrapper.count += 1\n        print(f'{func.__name__} called {wrapper.count} times')\n        return func(*args, **kwargs)\n    wrapper.count = 0\n    return wrapper\n\n@call_counter\ndef say_hello(name):\n    return f'Hello, {name}'\n\n@call_counter\ndef add(a, b):\n    return a + b\n\nprint(say_hello('Alice'))\nprint(say_hello('Bob'))\nprint(add(3, 5))\nprint(add(10, 20))\n\nprint(f'\\nTotal calls to say_hello: {say_hello.count}')\nprint(f'Total calls to add: {add.count}')",
    hint: "Add attribute to wrapper function to store count"
},
{
    Id: "py_dec_12",
    topicId: "py_decorators",
    question: "Create a decorator that checks authorization (user role).",
    mathSolution: "Check if user has required role before executing",
    codeSolution: "import functools\n\ndef requires_role(required_role):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(user, *args, **kwargs):\n            if user.get('role') != required_role:\n                raise PermissionError(f'User {user[\"name\"]} needs {required_role} role')\n            return func(user, *args, **kwargs)\n        return wrapper\n    return decorator\n\n@requires_role('admin')\ndef delete_user(user, user_id):\n    return f'User {user_id} deleted by {user[\"name\"]}'\n\n@requires_role('user')\ndef view_profile(user, profile_id):\n    return f'Viewing profile {profile_id}'\n\nadmin_user = {'name': 'Alice', 'role': 'admin'}\nregular_user = {'name': 'Bob', 'role': 'user'}\n\nprint(delete_user(admin_user, 123))\nprint(view_profile(regular_user, 456))\n\ntry:\n    print(delete_user(regular_user, 789))\nexcept PermissionError as e:\n    print(f'Error: {e}')",
    hint: "Pass user object as first argument to check permissions"
},
{
    Id: "py_dec_13",
    topicId: "py_decorators",
    question: "Create a decorator that adds HTML tags to function output.",
    mathSolution: "Wrap function output in HTML tags",
    codeSolution: "import functools\n\ndef html_tag(tag_name):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            return f'<{tag_name}>{result}</{tag_name}>'\n        return wrapper\n    return decorator\n\n@html_tag('h1')\ndef title(text):\n    return text\n\n@html_tag('p')\ndef paragraph(text):\n    return text\n\n@html_tag('div')\n@html_tag('section')\ndef nested_content(text):\n    return text\n\nprint(title('Welcome to My Site'))\nprint(paragraph('This is a paragraph'))\nprint(nested_content('Nested content'))",
    hint: "Decorators can be stacked (applied bottom-up)"
},
{
    Id: "py_dec_14",
    topicId: "py_decorators",
    question: "Create a decorator that memoizes function results with TTL (time-to-live).",
    mathSolution: "Cache results with expiration timestamp",
    codeSolution: "import time\nimport functools\n\ndef memoize_ttl(ttl_seconds):\n    def decorator(func):\n        cache = {}\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            current_time = time.time()\n            \n            if key in cache:\n                result, timestamp = cache[key]\n                if current_time - timestamp < ttl_seconds:\n                    print(f'Cache hit for {args}')\n                    return result\n                else:\n                    print(f'Cache expired for {args}')\n            \n            print(f'Computing result for {args}')\n            result = func(*args, **kwargs)\n            cache[key] = (result, current_time)\n            return result\n        \n        return wrapper\n    return decorator\n\n@memoize_ttl(ttl_seconds=2)\ndef expensive_operation(x, y):\n    time.sleep(1)\n    return x * y\n\nprint(expensive_operation(5, 3))\nprint(expensive_operation(5, 3))\nprint(expensive_operation(5, 3))\n\ntime.sleep(3)\nprint(expensive_operation(5, 3))",
    hint: "Store timestamp with cached value for expiration check"
},
{
    Id: "py_dec_15",
    topicId: "py_decorators",
    question: "Create a decorator that debounces function calls (rate limiting with reset).",
    mathSolution: "Delay execution until calls stop for specified time",
    codeSolution: "import time\nimport threading\nimport functools\n\ndef debounce(wait_seconds):\n    def decorator(func):\n        timer = None\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            nonlocal timer\n            \n            def call_func():\n                func(*args, **kwargs)\n            \n            if timer is not None:\n                timer.cancel()\n            \n            timer = threading.Timer(wait_seconds, call_func)\n            timer.start()\n            \n        return wrapper\n    return decorator\n\n@debounce(2)\ndef search(query):\n    print(f'Searching for: {query}')\n\nprint('User typing: \"a\"')\nsearch('a')\ntime.sleep(0.5)\n\nprint('User typing: \"ap\"')\nsearch('ap')\ntime.sleep(0.5)\n\nprint('User typing: \"app\"')\nsearch('app')\ntime.sleep(0.5)\n\nprint('User typing: \"appl\"')\nsearch('appl')\ntime.sleep(0.5)\n\nprint('User typing: \"apple\"')\nsearch('apple')\n\nprint('Waiting for debounce...')\ntime.sleep(3)",
    hint: "Use threading.Timer to delay execution, cancel previous timer"
},
{
    Id: "py_dec_16",
    topicId: "py_decorators",
    question: "Create a decorator that throttles function calls (max once per period).",
    mathSolution: "Prevent function from being called more than once in time period",
    codeSolution: "import time\nimport functools\n\ndef throttle(period_seconds):\n    def decorator(func):\n        last_called = 0\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            nonlocal last_called\n            current_time = time.time()\n            \n            if current_time - last_called >= period_seconds:\n                result = func(*args, **kwargs)\n                last_called = current_time\n                return result\n            else:\n                print(f'Throttled: wait {period_seconds - (current_time - last_called):.1f}s')\n                return None\n        \n        return wrapper\n    return decorator\n\n@throttle(3)\ndef make_request(url):\n    print(f'Making request to {url}')\n    return f'Response from {url}'\n\nprint(make_request('api.example.com'))\nprint(make_request('api.example.com'))\nprint(make_request('api.example.com'))\ntime.sleep(3)\nprint(make_request('api.example.com'))",
    hint: "Track last call time and reject if within period"
},
{
    Id: "py_dec_17",
    topicId: "py_decorators",
    question: "Create a decorator that adds retry with exponential backoff.",
    mathSolution: "Increase delay exponentially between retries",
    codeSolution: "import time\nimport random\nimport functools\n\ndef retry_exponential(max_retries=5, base_delay=1):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_retries):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        print(f'All {max_retries} retries failed')\n                        raise\n                    \n                    delay = base_delay * (2 ** attempt) + random.uniform(0, 0.1)\n                    print(f'Attempt {attempt + 1} failed. Retrying in {delay:.2f}s...')\n                    time.sleep(delay)\n            \n        return wrapper\n    return decorator\n\n@retry_exponential(max_retries=4, base_delay=1)\ndef flaky_service():\n    if random.random() < 0.7:\n        raise ValueError('Service temporarily unavailable')\n    return 'Service response'\n\nfor i in range(3):\n    try:\n        result = flaky_service()\n        print(f'Success: {result}')\n    except Exception as e:\n        print(f'Final failure: {e}')\n    print('-' * 30)",
    hint: "Use exponential formula: delay = base_delay * (2^attempt)"
},
{
    Id: "py_dec_18",
    topicId: "py_decorators",
    question: "Create a decorator that validates function output against a schema.",
    mathSolution: "Check if return value matches expected structure",
    codeSolution: "import functools\n\ndef validate_output(schema):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = func(*args, **kwargs)\n            \n            def validate_value(value, expected_type):\n                if expected_type == 'int':\n                    return isinstance(value, int)\n                elif expected_type == 'float':\n                    return isinstance(value, (int, float))\n                elif expected_type == 'str':\n                    return isinstance(value, str)\n                elif expected_type == 'list':\n                    return isinstance(value, list)\n                elif expected_type == 'dict':\n                    return isinstance(value, dict)\n                return True\n            \n            if isinstance(schema, dict):\n                for key, expected_type in schema.items():\n                    if key not in result:\n                        raise ValueError(f'Missing key {key} in output')\n                    if not validate_value(result[key], expected_type):\n                        raise TypeError(f'Key {key} should be {expected_type}')\n            \n            return result\n        return wrapper\n    return decorator\n\n@validate_output({'name': 'str', 'age': 'int', 'scores': 'list'})\ndef get_student_data():\n    return {'name': 'Alice', 'age': 20, 'scores': [85, 90, 78]}\n\n@validate_output({'x': 'float', 'y': 'float'})\ndef get_point():\n    return {'x': 10, 'y': 20.5}\n\nprint(get_student_data())\nprint(get_point())",
    hint: "Recursively validate dictionary structure and types"
},
{
    Id: "py_dec_19",
    topicId: "py_decorators",
    question: "Create a decorator that adds singleton pattern to a class.",
    mathSolution: "Ensure only one instance of class is created",
    codeSolution: "import functools\n\ndef singleton(cls):\n    instances = {}\n    \n    @functools.wraps(cls)\n    def get_instance(*args, **kwargs):\n        if cls not in instances:\n            instances[cls] = cls(*args, **kwargs)\n        return instances[cls]\n    \n    return get_instance\n\n@singleton\nclass DatabaseConnection:\n    def __init__(self):\n        self.connection_id = id(self)\n        print(f'Creating new database connection (ID: {self.connection_id})')\n    \n    def query(self, sql):\n        return f'Executing: {sql} on connection {self.connection_id}'\n\n@singleton\nclass Configuration:\n    def __init__(self):\n        self.settings = {}\n        print('Loading configuration...')\n    \n    def get(self, key):\n        return self.settings.get(key)\n\ndb1 = DatabaseConnection()\ndb2 = DatabaseConnection()\nprint(f'db1 is db2: {db1 is db2}')\nprint(db1.query('SELECT * FROM users'))\nprint(db2.query('SELECT * FROM products'))\n\nconfig1 = Configuration()\nconfig2 = Configuration()\nprint(f'config1 is config2: {config1 is config2}')",
    hint: "Store instance in class-level dictionary"
},
{
    Id: "py_dec_20",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout using threading (cross-platform).",
    mathSolution: "Use threading.Timer to interrupt long-running function",
    codeSolution: "import threading\nimport functools\nimport time\n\nclass TimeoutError(Exception):\n    pass\n\ndef timeout(seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            result = []\n            error = []\n            \n            def target():\n                try:\n                    result.append(func(*args, **kwargs))\n                except Exception as e:\n                    error.append(e)\n            \n            thread = threading.Thread(target=target)\n            thread.daemon = True\n            thread.start()\n            thread.join(timeout=seconds)\n            \n            if thread.is_alive():\n                raise TimeoutError(f'Function timed out after {seconds} seconds')\n            \n            if error:\n                raise error[0]\n            \n            return result[0]\n        return wrapper\n    return decorator\n\n@timeout(2)\ndef slow_function():\n    time.sleep(3)\n    return 'Finished'\n\n@timeout(2)\ndef fast_function():\n    time.sleep(1)\n    return 'Fast function done'\n\nprint(fast_function())\n\ntry:\n    print(slow_function())\nexcept TimeoutError as e:\n    print(f'Timeout: {e}')",
    hint: "Use threading with join(timeout) for cross-platform timeout"
},
{
    Id: "py_dec_21",
    topicId: "py_decorators",
    question: "Create a decorator that adds a circuit breaker pattern.",
    mathSolution: "Prevent calls after too many failures, reset after timeout",
    codeSolution: "import time\nimport functools\n\nclass CircuitBreaker:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n\ndef circuit_breaker(failure_threshold=3, recovery_timeout=5):\n    breaker = CircuitBreaker(failure_threshold, recovery_timeout)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            current_time = time.time()\n            \n            if breaker.state == 'OPEN':\n                if current_time - breaker.last_failure_time > breaker.recovery_timeout:\n                    breaker.state = 'HALF_OPEN'\n                    print('Circuit half-open - testing...')\n                else:\n                    raise Exception('Circuit breaker is OPEN')\n            \n            try:\n                result = func(*args, **kwargs)\n                \n                if breaker.state == 'HALF_OPEN':\n                    breaker.state = 'CLOSED'\n                    breaker.failure_count = 0\n                    print('Circuit closed -恢复正常')\n                \n                return result\n                \n            except Exception as e:\n                breaker.failure_count += 1\n                breaker.last_failure_time = current_time\n                \n                if breaker.failure_count >= breaker.failure_threshold:\n                    breaker.state = 'OPEN'\n                    print('Circuit OPEN - too many failures')\n                \n                raise e\n        \n        return wrapper\n    return decorator\n\n@circuit_breaker(failure_threshold=2, recovery_timeout=3)\ndef unreliable_service():\n    import random\n    if random.random() < 0.7:\n        raise ValueError('Service failed')\n    return 'Service success'\n\nfor i in range(10):\n    try:\n        result = unreliable_service()\n        print(f'Call {i}: {result}')\n    except Exception as e:\n        print(f'Call {i}: {e}')\n    time.sleep(1)",
    hint: "Track failure count and state transitions"
},
{
    Id: "py_dec_22",
    topicId: "py_decorators",
    question: "Create a decorator that adds logging with different log levels.",
    mathSolution: "Log function calls with specified severity level",
    codeSolution: "import functools\nimport datetime\n\nclass Logger:\n    def __init__(self, name='app'):\n        self.name = name\n    \n    def log(self, level, message):\n        timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')\n        print(f'[{timestamp}] {level}: {self.name} - {message}')\n\ndef log_level(level='INFO'):\n    logger = Logger()\n    \n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            logger.log(level, f'Calling {func.__name__} with args={args}, kwargs={kwargs}')\n            try:\n                result = func(*args, **kwargs)\n                logger.log(level, f'{func.__name__} returned {result}')\n                return result\n            except Exception as e:\n                logger.log('ERROR', f'{func.__name__} raised {e}')\n                raise\n        return wrapper\n    return decorator\n\n@log_level('INFO')\ndef add(a, b):\n    return a + b\n\n@log_level('DEBUG')\ndef divide(a, b):\n    if b == 0:\n        raise ValueError('Division by zero')\n    return a / b\n\nprint(add(5, 3))\nprint('-' * 30)\nprint(divide(10, 2))\nprint('-' * 30)\ntry:\n    print(divide(10, 0))\nexcept:\n    pass",
    hint: "Use different log levels (INFO, DEBUG, ERROR, WARNING)"
},
{
    Id: "py_dec_23",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with max size (LRU).",
    mathSolution: "Implement Least Recently Used cache eviction",
    codeSolution: "import functools\nfrom collections import OrderedDict\n\ndef lru_cache(maxsize=128):\n    def decorator(func):\n        cache = OrderedDict()\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            if key in cache:\n                cache.move_to_end(key)\n                print(f'Cache hit: {args}')\n                return cache[key]\n            \n            print(f'Cache miss: {args}')\n            result = func(*args, **kwargs)\n            \n            cache[key] = result\n            if len(cache) > maxsize:\n                removed_key, _ = cache.popitem(last=False)\n                print(f'Evicted: {removed_key}')\n            \n            return result\n        \n        return wrapper\n    return decorator\n\n@lru_cache(maxsize=3)\ndef expensive_func(n):\n    print(f'Computing {n}...')\n    return n * n\n\nfor i in [1, 2, 3, 1, 4, 5, 2, 3]:\n    print(f'Result: {expensive_func(i)}\\n')",
    hint: "Use OrderedDict to track access order"
},
{
    Id: "py_dec_24",
    topicId: "py_decorators",
    question: "Create a decorator that adds performance profiling.",
    mathSolution: "Track time spent in function and number of calls",
    codeSolution: "import time\nimport functools\n\nclass Profiler:\n    def __init__(self):\n        self.stats = {}\n    \n    def __call__(self, func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            start = time.perf_counter()\n            result = func(*args, **kwargs)\n            end = time.perf_counter()\n            \n            elapsed = end - start\n            \n            if func.__name__ not in self.stats:\n                self.stats[func.__name__] = {\n                    'calls': 0,\n                    'total_time': 0,\n                    'min_time': float('inf'),\n                    'max_time': 0\n                }\n            \n            stats = self.stats[func.__name__]\n            stats['calls'] += 1\n            stats['total_time'] += elapsed\n            stats['min_time'] = min(stats['min_time'], elapsed)\n            stats['max_time'] = max(stats['max_time'], elapsed)\n            \n            return result\n        return wrapper\n    \n    def report(self):\n        print('\\n=== Profiling Report ===')\n        for func_name, stats in self.stats.items():\n            avg_time = stats['total_time'] / stats['calls']\n            print(f\"{func_name}:\")\n            print(f\"  Calls: {stats['calls']}\")\n            print(f\"  Total: {stats['total_time']:.4f}s\")\n            print(f\"  Avg: {avg_time:.4f}s\")\n            print(f\"  Min: {stats['min_time']:.4f}s\")\n            print(f\"  Max: {stats['max_time']:.4f}s\")\n\nprofiler = Profiler()\n\n@profiler\ndef slow_function():\n    time.sleep(0.5)\n    return 'Slow done'\n\n@profiler\ndef fast_function():\n    time.sleep(0.1)\n    return 'Fast done'\n\nfor _ in range(3):\n    slow_function()\n    fast_function()\n\nprofiler.report()",
    hint: "Use perf_counter() for precise timing"
},
{
    Id: "py_dec_25",
    topicId: "py_decorators",
    question: "Create a decorator that adds a retry with custom backoff strategy.",
    mathSolution: "Support different backoff algorithms: linear, exponential, fibonacci",
    codeSolution: "import time\nimport random\nimport functools\n\ndef backoff_retry(max_retries=5, backoff_type='exponential', base_delay=1):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(max_retries):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        print(f'All retries failed')\n                        raise\n                    \n                    if backoff_type == 'linear':\n                        delay = base_delay * (attempt + 1)\n                    elif backoff_type == 'exponential':\n                        delay = base_delay * (2 ** attempt)\n                    elif backoff_type == 'fibonacci':\n                        fib = [1, 1]\n                        for i in range(2, attempt + 2):\n                            fib.append(fib[i-1] + fib[i-2])\n                        delay = base_delay * fib[attempt]\n                    else:\n                        delay = base_delay\n                    \n                    jitter = random.uniform(0, 0.1 * delay)\n                    total_delay = delay + jitter\n                    \n                    print(f'Attempt {attempt + 1} failed. Retrying in {total_delay:.2f}s')\n                    time.sleep(total_delay)\n        \n        return wrapper\n    return decorator\n\n@backoff_retry(max_retries=4, backoff_type='linear', base_delay=1)\ndef linear_retry():\n    if random.random() < 0.6:\n        raise Exception('Failed')\n    return 'Success'\n\n@backoff_retry(max_retries=4, backoff_type='exponential', base_delay=1)\ndef exp_retry():\n    if random.random() < 0.6:\n        raise Exception('Failed')\n    return 'Success'\n\nprint('Linear backoff:')\nfor i in range(3):\n    try:\n        print(linear_retry())\n    except:\n        print('Failed\\n')\n\nprint('\\nExponential backoff:')\nfor i in range(3):\n    try:\n        print(exp_retry())\n    except:\n        print('Failed\\n')",
    hint: "Add jitter to prevent thundering herd problem"
},
{
    Id: "py_dec_26",
    topicId: "py_decorators",
    question: "Create a decorator that adds a database transaction wrapper.",
    mathSolution: "Begin, commit, or rollback transaction based on success/failure",
    codeSolution: "import functools\n\nclass Database:\n    def __init__(self):\n        self.data = {}\n        self.in_transaction = False\n    \n    def begin(self):\n        print('Beginning transaction')\n        self.in_transaction = True\n        self.snapshot = self.data.copy()\n    \n    def commit(self):\n        print('Committing transaction')\n        self.in_transaction = False\n        self.snapshot = None\n    \n    def rollback(self):\n        print('Rolling back transaction')\n        if self.in_transaction:\n            self.data = self.snapshot\n            self.in_transaction = False\n    \n    def insert(self, key, value):\n        if self.in_transaction:\n            self.data[key] = value\n            print(f'Inserted {key}={value} (in transaction)')\n        else:\n            raise Exception('Not in transaction')\n\ndb = Database()\n\ndef transactional(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        db.begin()\n        try:\n            result = func(*args, **kwargs)\n            db.commit()\n            return result\n        except Exception as e:\n            db.rollback()\n            print(f'Transaction rolled back due to: {e}')\n            raise\n    return wrapper\n\n@transactional\ndef update_database_success():\n    db.insert('user1', 'Alice')\n    db.insert('user2', 'Bob')\n    print('Operations successful')\n    return 'Success'\n\n@transactional\ndef update_database_failure():\n    db.insert('user3', 'Charlie')\n    raise ValueError('Something went wrong')\n    db.insert('user4', 'David')\n\ntry:\n    print(update_database_success())\n    print(f'Database: {db.data}')\nexcept:\n    pass\n\nprint('\\n' + '='*30)\ntry:\n    print(update_database_failure())\nexcept:\n    print(f'Database after failure: {db.data}')",
    hint: "Save snapshot before transaction for rollback"
},
{
    Id: "py_dec_27",
    topicId: "py_decorators",
    question: "Create a decorator that adds input validation using type hints.",
    mathSolution: "Check function arguments against type hints",
    codeSolution: "import functools\nimport inspect\n\ndef validate_types(func):\n    sig = inspect.signature(func)\n    \n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        bound = sig.bind(*args, **kwargs)\n        bound.apply_defaults()\n        \n        for name, value in bound.arguments.items():\n            param = sig.parameters[name]\n            if param.annotation != inspect.Parameter.empty:\n                expected = param.annotation\n                if not isinstance(value, expected):\n                    raise TypeError(f'Argument {name} should be {expected.__name__}, got {type(value).__name__}')\n        \n        return func(*args, **kwargs)\n    \n    return wrapper\n\n@validate_types\ndef process_user(name: str, age: int, active: bool = True):\n    return f'{name} ({age}) - {\"Active\" if active else \"Inactive\"}'\n\n@validate_types\ndef calculate(a: float, b: float) -> float:\n    return a + b\n\nprint(process_user('Alice', 30, True))\nprint(calculate(5.5, 3.2))\n\ntry:\n    print(process_user('Bob', '25', True))\nexcept TypeError as e:\n    print(f'Error: {e}')\n\ntry:\n    print(calculate(5, '3'))\nexcept TypeError as e:\n    print(f'Error: {e}')",
    hint: "Use inspect.signature to get parameter annotations"
},
{
    Id: "py_dec_28",
    topicId: "py_decorators",
    question: "Create a decorator that adds a delay before function execution.",
    mathSolution: "Sleep for specified seconds before calling function",
    codeSolution: "import time\nimport functools\n\ndef delay(seconds, jitter=False):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            wait_time = seconds\n            if jitter:\n                import random\n                wait_time = seconds + random.uniform(-0.5, 0.5)\n            \n            print(f'Waiting {wait_time:.2f} seconds...')\n            time.sleep(wait_time)\n            result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@delay(2)\ndef say_hello(name):\n    return f'Hello, {name}'\n\n@delay(1, jitter=True)\ndef make_request():\n    return 'Request completed'\n\nprint(say_hello('Alice'))\nprint('-' * 20)\nfor i in range(3):\n    print(make_request())",
    hint: "Add jitter to prevent synchronized requests"
},
{
    Id: "py_dec_29",
    topicId: "py_decorators",
    question: "Create a decorator that adds a fallback value on failure.",
    mathSolution: "Return fallback value if function raises exception",
    codeSolution: "import functools\n\ndef fallback(fallback_value):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            try:\n                return func(*args, **kwargs)\n            except Exception as e:\n                print(f'Error: {e}. Using fallback value.')\n                return fallback_value\n        return wrapper\n    return decorator\n\n@fallback('Unknown')\ndef get_user_name(user_id):\n    users = {1: 'Alice', 2: 'Bob'}\n    if user_id not in users:\n        raise ValueError(f'User {user_id} not found')\n    return users[user_id]\n\n@fallback(0)\ndef divide(a, b):\n    return a / b\n\nprint(get_user_name(1))\nprint(get_user_name(3))\nprint(divide(10, 2))\nprint(divide(10, 0))",
    hint: "Catch all exceptions and return fallback value"
},
{
    Id: "py_dec_30",
    topicId: "py_decorators",
    question: "Create a decorator that adds a lock for thread safety.",
    mathSolution: "Use threading.Lock to prevent race conditions",
    codeSolution: "import threading\nimport functools\nimport time\n\ndef synchronized(lock=None):\n    if lock is None:\n        lock = threading.Lock()\n    \n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            with lock:\n                return func(*args, **kwargs)\n        return wrapper\n    return decorator\n\nclass Counter:\n    def __init__(self):\n        self.value = 0\n        self.lock = threading.Lock()\n    \n    @synchronized()\n    def increment(self):\n        temp = self.value\n        time.sleep(0.0001)\n        self.value = temp + 1\n    \n    @synchronized()\n    def decrement(self):\n        temp = self.value\n        time.sleep(0.0001)\n        self.value = temp - 1\n    \n    def get_value(self):\n        return self.value\n\ncounter = Counter()\n\ndef worker(increment=True):\n    for _ in range(100):\n        if increment:\n            counter.increment()\n        else:\n            counter.decrement()\n\nthreads = []\nfor i in range(10):\n    t = threading.Thread(target=worker, args=(i < 5,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()\n\nprint(f'Final counter value: {counter.get_value()}')",
    hint: "Use with lock: context manager for thread safety"
},
{
    Id: "py_dec_31",
    topicId: "py_decorators",
    question: "Create a decorator that adds a read-only property to a class.",
    mathSolution: "Make attribute readable but not writable",
    codeSolution: "def readonly_property(func):\n    return property(func)\n\nclass Person:\n    def __init__(self, name, birth_year):\n        self._name = name\n        self._birth_year = birth_year\n    \n    @readonly_property\n    def name(self):\n        return self._name\n    \n    @readonly_property\n    def birth_year(self):\n        return self._birth_year\n    \n    @readonly_property\n    def age(self):\n        from datetime import date\n        return date.today().year - self._birth_year\n\np = Person('Alice', 1990)\nprint(f'Name: {p.name}')\nprint(f'Birth year: {p.birth_year}')\nprint(f'Age: {p.age}')",
    hint: "property() creates read-only attribute without setter"
},
{
    Id: "py_dec_32",
    topicId: "py_decorators",
    question: "Create a decorator that adds a deprecated warning.",
    mathSolution: "Warn when deprecated function is called",
    codeSolution: "import functools\nimport warnings\n\ndef deprecated(message=None):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            warning_msg = message or f'{func.__name__} is deprecated'\n            warnings.warn(warning_msg, DeprecationWarning, stacklevel=2)\n            return func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@deprecated('Use new_function() instead')\ndef old_function():\n    return 'Doing something old'\n\n@deprecated()\ndef another_old_function():\n    return 'Also deprecated'\n\nprint(old_function())\nprint(another_old_function())\n\nprint('\\nRun with: python -W always script.py to see warnings')",
    hint: "Use warnings.warn() with DeprecationWarning"
},
{
    Id: "py_dec_33",
    topicId: "py_decorators",
    question: "Create a decorator that adds memoization with disk persistence.",
    mathSolution: "Cache results to disk using pickle",
    codeSolution: "import functools\nimport pickle\nimport hashlib\nimport os\nimport time\n\ndef disk_cache(cache_dir='cache'):\n    def decorator(func):\n        os.makedirs(cache_dir, exist_ok=True)\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key_data = f'{func.__name__}:{args}:{sorted(kwargs.items())}'\n            key = hashlib.md5(key_data.encode()).hexdigest()\n            cache_path = os.path.join(cache_dir, f'{key}.pickle')\n            \n            if os.path.exists(cache_path):\n                mod_time = os.path.getmtime(cache_path)\n                print(f'Cache hit: {key} (cached {time.ctime(mod_time)})')\n                with open(cache_path, 'rb') as f:\n                    return pickle.load(f)\n            \n            print(f'Cache miss: {key}')\n            result = func(*args, **kwargs)\n            with open(cache_path, 'wb') as f:\n                pickle.dump(result, f)\n            \n            return result\n        \n        return wrapper\n    return decorator\n\n@disk_cache(cache_dir='function_cache')\ndef expensive_computation(n):\n    print(f'Computing {n}...')\n    time.sleep(2)\n    return n * n\n\nprint(expensive_computation(5))\nprint(expensive_computation(5))\nprint(expensive_computation(10))\nprint(expensive_computation(10))\n\nimport shutil\nshutil.rmtree('function_cache', ignore_errors=True)",
    hint: "Use hashlib to create unique filename from arguments"
},
{
    Id: "py_dec_34",
    topicId: "py_decorators",
    question: "Create a decorator that adds a rate limiter per user/IP.",
    mathSolution: "Track calls per identifier with time window",
    codeSolution: "import time\nimport functools\nfrom collections import defaultdict\n\nclass RateLimiter:\n    def __init__(self):\n        self.calls = defaultdict(list)\n    \n    def is_allowed(self, key, max_calls, window_seconds):\n        now = time.time()\n        self.calls[key] = [t for t in self.calls[key] if now - t < window_seconds]\n        \n        if len(self.calls[key]) < max_calls:\n            self.calls[key].append(now)\n            return True\n        return False\n\nrate_limiter = RateLimiter()\n\ndef rate_limit_by_key(key_func, max_calls, window_seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = key_func(*args, **kwargs)\n            \n            if rate_limiter.is_allowed(key, max_calls, window_seconds):\n                return func(*args, **kwargs)\n            else:\n                raise Exception(f'Rate limit exceeded for {key}')\n        \n        return wrapper\n    return decorator\n\n@rate_limit_by_key(lambda user_id: f'user:{user_id}', max_calls=3, window_seconds=10)\ndef api_call(user_id):\n    return f'API response for user {user_id}'\n\nfor user in [1, 2, 1, 1, 1, 1]:\n    try:\n        print(api_call(user))\n    except Exception as e:\n        print(f'Error: {e}')\n    time.sleep(1)",
    hint: "Generate key dynamically from arguments (user ID, IP, etc.)"
},
{
    Id: "py_dec_35",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with background refresh.",
    mathSolution: "Refresh cache in background before it expires",
    codeSolution: "import time\nimport threading\nimport functools\n\ndef background_refresh(ttl_seconds=60, refresh_before=10):\n    def decorator(func):\n        cache = {}\n        lock = threading.Lock()\n        refresh_threads = {}\n        \n        def refresh_key(key, args, kwargs):\n            time.sleep(ttl_seconds - refresh_before)\n            with lock:\n                if key in cache:\n                    print(f'Background refreshing {key}')\n                    result = func(*args, **kwargs)\n                    cache[key] = (result, time.time())\n        \n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            with lock:\n                if key in cache:\n                    result, timestamp = cache[key]\n                    age = time.time() - timestamp\n                    \n                    if age < ttl_seconds:\n                        print(f'Cache hit: {key} (age: {age:.1f}s)')\n                        return result\n                    else:\n                        print(f'Cache expired: {key}')\n                \n                print(f'Computing: {key}')\n                result = func(*args, **kwargs)\n                cache[key] = (result, time.time())\n                \n                if key not in refresh_threads or not refresh_threads[key].is_alive():\n                    refresh_threads[key] = threading.Thread(\n                        target=refresh_key, args=(key, args, kwargs), daemon=True\n                    )\n                    refresh_threads[key].start()\n                \n                return result\n        \n        return wrapper\n    return decorator\n\n@background_refresh(ttl_seconds=5, refresh_before=2)\ndef get_data(item_id):\n    print(f'Fetching data for {item_id}...')\n    time.sleep(1)\n    return f'Data for {item_id}'\n\nfor i in range(10):\n    print(get_data('A'))\n    time.sleep(1.5)",
    hint: "Start background thread to refresh cache before expiration"
},
{
    Id: "py_dec_36",
    topicId: "py_decorators",
    question: "Create a decorator that adds conditional execution based on predicate.",
    mathSolution: "Only execute function if predicate returns True",
    codeSolution: "import functools\n\ndef conditional(predicate):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            if predicate(*args, **kwargs):\n                print(f'Condition met, executing {func.__name__}')\n                return func(*args, **kwargs)\n            else:\n                print(f'Condition not met, skipping {func.__name__}')\n                return None\n        return wrapper\n    return decorator\n\ndef is_positive(x):\n    return x > 0\n\ndef is_admin(user):\n    return user.get('role') == 'admin'\n\n@conditional(is_positive)\ndef sqrt(x):\n    return x ** 0.5\n\n@conditional(is_admin)\ndef delete_user(user, user_id):\n    return f'User {user_id} deleted by {user[\"name\"]}'\n\nprint(sqrt(16))\nprint(sqrt(-5))\n\nadmin = {'name': 'Alice', 'role': 'admin'}\nuser = {'name': 'Bob', 'role': 'user'}\nprint(delete_user(admin, 123))\nprint(delete_user(user, 456))",
    hint: "Pass same arguments to predicate and function"
},
{
    Id: "py_dec_37",
    topicId: "py_decorators",
    question: "Create a decorator that adds method tracing with indentation.",
    mathSolution: "Track nested function calls with indentation level",
    codeSolution: "import functools\n\nclass Tracer:\n    def __init__(self):\n        self.indent = 0\n    \n    def trace(self, func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            indent_str = '  ' * self.indent\n            print(f'{indent_str}→ Entering {func.__name__}(args={args}, kwargs={kwargs})')\n            \n            self.indent += 1\n            try:\n                result = func(*args, **kwargs)\n                print(f'{indent_str}← {func.__name__} returned {result}')\n                return result\n            except Exception as e:\n                print(f'{indent_str}← {func.__name__} raised {e}')\n                raise\n            finally:\n                self.indent -= 1\n        \n        return wrapper\n\ntracer = Tracer()\n\n@tracer.trace\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)\n\n@tracer.trace\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint('Factorial of 3:')\nfactorial(3)\n\nprint('\\nFibonacci of 4:')\nfibonacci(4)",
    hint: "Use global indent counter to show call hierarchy"
},
{
    Id: "py_dec_38",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout with asyncio.",
    mathSolution: "Use asyncio.wait_for for async function timeout",
    codeSolution: "import asyncio\nimport functools\n\ndef async_timeout(seconds):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            try:\n                return await asyncio.wait_for(func(*args, **kwargs), timeout=seconds)\n            except asyncio.TimeoutError:\n                print(f'Function {func.__name__} timed out after {seconds}s')\n                raise\n        return wrapper\n    return decorator\n\n@async_timeout(2)\nasync def slow_async():\n    await asyncio.sleep(3)\n    return 'Slow result'\n\n@async_timeout(2)\nasync def fast_async():\n    await asyncio.sleep(1)\n    return 'Fast result'\n\nasync def main():\n    print(await fast_async())\n    try:\n        print(await slow_async())\n    except asyncio.TimeoutError:\n        print('Caught timeout')\n\nasyncio.run(main())",
    hint: "Use asyncio.wait_for() for timeout in async functions"
},
{
    Id: "py_dec_39",
    topicId: "py_decorators",
    question: "Create a decorator that adds a circuit breaker for async functions.",
    mathSolution: "Async circuit breaker with failure tracking",
    codeSolution: "import asyncio\nimport functools\nimport time\n\nclass AsyncCircuitBreaker:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n        self.lock = asyncio.Lock()\n\ndef async_circuit_breaker(failure_threshold=3, recovery_timeout=5):\n    breaker = AsyncCircuitBreaker(failure_threshold, recovery_timeout)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            async with breaker.lock:\n                current_time = time.time()\n                \n                if breaker.state == 'OPEN':\n                    if current_time - breaker.last_failure_time > breaker.recovery_timeout:\n                        breaker.state = 'HALF_OPEN'\n                        print('Circuit half-open - testing...')\n                    else:\n                        raise Exception('Circuit breaker is OPEN')\n            \n            try:\n                result = await func(*args, **kwargs)\n                \n                async with breaker.lock:\n                    if breaker.state == 'HALF_OPEN':\n                        breaker.state = 'CLOSED'\n                        breaker.failure_count = 0\n                        print('Circuit closed -恢复正常')\n                \n                return result\n                \n            except Exception as e:\n                async with breaker.lock:\n                    breaker.failure_count += 1\n                    breaker.last_failure_time = time.time()\n                    \n                    if breaker.failure_count >= breaker.failure_threshold:\n                        breaker.state = 'OPEN'\n                        print('Circuit OPEN - too many failures')\n                \n                raise e\n        \n        return wrapper\n    return decorator\n\n@async_circuit_breaker(failure_threshold=2, recovery_timeout=3)\nasync def unreliable_async():\n    import random\n    await asyncio.sleep(0.5)\n    if random.random() < 0.7:\n        raise ValueError('Async service failed')\n    return 'Async success'\n\nasync def main():\n    for i in range(10):\n        try:\n            result = await unreliable_async()\n            print(f'Call {i}: {result}')\n        except Exception as e:\n            print(f'Call {i}: {e}')\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Use asyncio.Lock for thread-safe state updates"
},
{
    Id: "py_dec_40",
    topicId: "py_decorators",
    question: "Create a decorator that adds retry with async/await.",
    mathSolution: "Async retry decorator with configurable delays",
    codeSolution: "import asyncio\nimport functools\n\ndef async_retry(max_retries=3, delay=1, backoff=2):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            last_exception = None\n            \n            for attempt in range(max_retries):\n                try:\n                    return await func(*args, **kwargs)\n                except Exception as e:\n                    last_exception = e\n                    if attempt < max_retries - 1:\n                        wait_time = delay * (backoff ** attempt)\n                        print(f'Attempt {attempt + 1} failed. Retrying in {wait_time}s...')\n                        await asyncio.sleep(wait_time)\n                    else:\n                        print(f'All {max_retries} attempts failed')\n            \n            raise last_exception\n        \n        return wrapper\n    return decorator\n\n@async_retry(max_retries=4, delay=1, backoff=2)\nasync def flaky_async():\n    import random\n    if random.random() < 0.6:\n        raise ValueError('Async operation failed')\n    return 'Async operation succeeded'\n\nasync def main():\n    for i in range(3):\n        try:\n            result = await flaky_async()\n            print(f'Success: {result}')\n        except Exception as e:\n            print(f'Final failure: {e}')\n        print('-' * 30)\n\nasyncio.run(main())",
    hint: "Use await asyncio.sleep() for non-blocking delays"
},
{
    Id: "py_dec_41",
    topicId: "py_decorators",
    question: "Create a decorator that adds a semaphore for concurrent limits.",
    mathSolution: "Limit number of concurrent async function calls",
    codeSolution: "import asyncio\nimport functools\n\ndef async_concurrent_limit(limit=5):\n    semaphore = asyncio.Semaphore(limit)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            async with semaphore:\n                print(f'Acquired semaphore. Available: {semaphore._value}')\n                return await func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@async_concurrent_limit(limit=3)\nasync def limited_task(task_id, duration):\n    print(f'Task {task_id} starting (will take {duration}s)')\n    await asyncio.sleep(duration)\n    print(f'Task {task_id} finished')\n    return f'Result {task_id}'\n\nasync def main():\n    tasks = [\n        limited_task(i, 2) for i in range(10)\n    ]\n    results = await asyncio.gather(*tasks)\n    print(f'All results: {results}')\n\nasyncio.run(main())",
    hint: "Use asyncio.Semaphore to limit concurrent executions"
},
{
    Id: "py_dec_42",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with async support.",
    mathSolution: "Async memoization with cache storage",
    codeSolution: "import asyncio\nimport functools\n\ndef async_cache(maxsize=128):\n    def decorator(func):\n        cache = {}\n        pending = {}\n        \n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            if key in cache:\n                print(f'Cache hit: {key}')\n                return cache[key]\n            \n            if key in pending:\n                print(f'Already computing: {key}, waiting...')\n                return await pending[key]\n            \n            print(f'Computing: {key}')\n            future = asyncio.create_task(func(*args, **kwargs))\n            pending[key] = future\n            \n            try:\n                result = await future\n                cache[key] = result\n                \n                if len(cache) > maxsize:\n                    oldest = next(iter(cache))\n                    del cache[oldest]\n                    print(f'Evicted: {oldest}')\n                \n                return result\n            finally:\n                del pending[key]\n        \n        return wrapper\n    return decorator\n\n@async_cache(maxsize=3)\nasync def expensive_async(n):\n    print(f'Starting expensive calculation for {n}')\n    await asyncio.sleep(2)\n    return n * n\n\nasync def main():\n    print(await expensive_async(5))\n    print(await expensive_async(10))\n    print(await expensive_async(5))\n    print(await expensive_async(3))\n    print(await expensive_async(7))\n    print(await expensive_async(5))\n\nasyncio.run(main())",
    hint: "Track pending futures to avoid duplicate computations"
},
{
    Id: "py_dec_43",
    topicId: "py_decorators",
    question: "Create a decorator that adds a timeout with fallback for async.",
    mathSolution: "Return fallback value if async function times out",
    codeSolution: "import asyncio\nimport functools\n\ndef async_timeout_fallback(seconds, fallback_value):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            try:\n                return await asyncio.wait_for(func(*args, **kwargs), timeout=seconds)\n            except asyncio.TimeoutError:\n                print(f'Function {func.__name__} timed out after {seconds}s, using fallback')\n                return fallback_value\n        return wrapper\n    return decorator\n\n@async_timeout_fallback(2, 'Default response')\nasync def fetch_data(source):\n    import random\n    delay = random.uniform(1, 3)\n    print(f'Fetching from {source} (will take {delay:.1f}s)')\n    await asyncio.sleep(delay)\n    return f'Data from {source}'\n\nasync def main():\n    sources = ['API', 'Database', 'Cache']\n    for source in sources:\n        result = await fetch_data(source)\n        print(f'Result: {result}\\n')\n\nasyncio.run(main())",
    hint: "Catch TimeoutError and return fallback value"
},
{
    Id: "py_dec_44",
    topicId: "py_decorators",
    question: "Create a decorator that adds a circuit breaker with async/await.",
    mathSolution: "Async circuit breaker with half-open state",
    codeSolution: "import asyncio\nimport functools\nimport time\n\nclass AsyncCircuitBreakerState:\n    def __init__(self, failure_threshold=3, recovery_timeout=5):\n        self.failure_threshold = failure_threshold\n        self.recovery_timeout = recovery_timeout\n        self.failure_count = 0\n        self.last_failure_time = None\n        self.state = 'CLOSED'\n        self.lock = asyncio.Lock()\n\ndef async_circuit_breaker_with_half_open(failure_threshold=3, recovery_timeout=5):\n    state = AsyncCircuitBreakerState(failure_threshold, recovery_timeout)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            async with state.lock:\n                current_time = time.time()\n                \n                if state.state == 'OPEN':\n                    if current_time - state.last_failure_time > state.recovery_timeout:\n                        state.state = 'HALF_OPEN'\n                        print('🔓 Circuit HALF-OPEN - allowing trial request')\n                    else:\n                        print('🔴 Circuit OPEN - request rejected')\n                        raise Exception('Circuit breaker is OPEN')\n                \n                if state.state == 'HALF_OPEN':\n                    print('🟡 Circuit HALF-OPEN - trial request')\n            \n            try:\n                result = await func(*args, **kwargs)\n                \n                async with state.lock:\n                    if state.state == 'HALF_OPEN':\n                        state.state = 'CLOSED'\n                        state.failure_count = 0\n                        print('🟢 Circuit CLOSED -恢复正常')\n                \n                return result\n                \n            except Exception as e:\n                async with state.lock:\n                    state.failure_count += 1\n                    state.last_failure_time = time.time()\n                    \n                    if state.failure_count >= state.failure_threshold or state.state == 'HALF_OPEN':\n                        state.state = 'OPEN'\n                        print('🔴 Circuit OPEN - too many failures')\n                \n                raise e\n        \n        return wrapper\n    return decorator\n\n@async_circuit_breaker_with_half_open(failure_threshold=2, recovery_timeout=3)\nasync def unstable_service(request_id):\n    import random\n    await asyncio.sleep(0.5)\n    if random.random() < 0.6:\n        raise ValueError(f'Service {request_id} failed')\n    return f'Service {request_id} succeeded'\n\nasync def main():\n    for i in range(12):\n        try:\n            result = await unstable_service(i)\n            print(f'✅ Request {i}: {result}')\n        except Exception as e:\n            print(f'❌ Request {i}: {e}')\n        await asyncio.sleep(1)\n\nasyncio.run(main())",
    hint: "Use HALF_OPEN state to test recovery"
},
{
    Id: "py_dec_45",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache with TTL for async.",
    mathSolution: "Async cache with time-based expiration",
    codeSolution: "import asyncio\nimport functools\nimport time\n\ndef async_cache_ttl(ttl_seconds=60):\n    def decorator(func):\n        cache = {}\n        \n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            current_time = time.time()\n            \n            if key in cache:\n                result, timestamp = cache[key]\n                if current_time - timestamp < ttl_seconds:\n                    print(f'Cache hit: {key}')\n                    return result\n                else:\n                    print(f'Cache expired: {key}')\n            \n            print(f'Computing: {key}')\n            result = await func(*args, **kwargs)\n            cache[key] = (result, current_time)\n            \n            if len(cache) > 100:\n                expired = [k for k, (_, ts) in cache.items() if current_time - ts >= ttl_seconds]\n                for k in expired:\n                    del cache[k]\n            \n            return result\n        \n        return wrapper\n    return decorator\n\n@async_cache_ttl(ttl_seconds=3)\nasync def fetch_data(item):\n    print(f'Fetching {item} from slow source...')\n    await asyncio.sleep(1)\n    return f'Data for {item}'\n\nasync def main():\n    print(await fetch_data('A'))\n    print(await fetch_data('B'))\n    print(await fetch_data('A'))\n    \n    await asyncio.sleep(4)\n    print(await fetch_data('A'))\n\nasyncio.run(main())",
    hint: "Store timestamp with cached value for TTL check"
},
{
    Id: "py_dec_46",
    topicId: "py_decorators",
    question: "Create a decorator that adds a retry with exponential backoff for async.",
    mathSolution: "Async retry with increasing delays",
    codeSolution: "import asyncio\nimport functools\nimport random\n\ndef async_retry_exponential(max_retries=5, base_delay=1, max_delay=60):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            for attempt in range(max_retries):\n                try:\n                    return await func(*args, **kwargs)\n                except Exception as e:\n                    if attempt == max_retries - 1:\n                        print(f'All {max_retries} attempts failed')\n                        raise\n                    \n                    delay = min(base_delay * (2 ** attempt), max_delay)\n                    jitter = random.uniform(0, 0.1 * delay)\n                    total_delay = delay + jitter\n                    \n                    print(f'Attempt {attempt + 1} failed. Retrying in {total_delay:.2f}s...')\n                    await asyncio.sleep(total_delay)\n        \n        return wrapper\n    return decorator\n\n@async_retry_exponential(max_retries=4, base_delay=1)\nasync def flaky_api(endpoint):\n    import random\n    await asyncio.sleep(0.5)\n    if random.random() < 0.5:\n        raise ConnectionError(f'Failed to connect to {endpoint}')\n    return f'Response from {endpoint}'\n\nasync def main():\n    endpoints = ['users', 'posts', 'comments']\n    for endpoint in endpoints:\n        try:\n            result = await flaky_api(endpoint)\n            print(f'✅ Success: {result}')\n        except Exception as e:\n            print(f'❌ Failed: {e}')\n        print('-' * 30)\n\nasyncio.run(main())",
    hint: "Use min() to cap maximum delay"
},
{
    Id: "py_dec_47",
    topicId: "py_decorators",
    question: "Create a decorator that adds a bulkhead pattern (separate semaphores per endpoint).",
    mathSolution: "Isolate failures by limiting concurrent calls per resource",
    codeSolution: "import asyncio\nimport functools\n\nclass Bulkhead:\n    def __init__(self):\n        self.semaphores = {}\n        self.lock = asyncio.Lock()\n    \n    async def get_semaphore(self, key, max_concurrent):\n        async with self.lock:\n            if key not in self.semaphores:\n                self.semaphores[key] = asyncio.Semaphore(max_concurrent)\n            return self.semaphores[key]\n\nbulkhead = Bulkhead()\n\ndef bulkhead_decorator(key_func, max_concurrent=5):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = key_func(*args, **kwargs)\n            semaphore = await bulkhead.get_semaphore(key, max_concurrent)\n            \n            async with semaphore:\n                print(f'[{key}] Acquired (concurrent: {max_concurrent - semaphore._value + 1}/{max_concurrent})')\n                return await func(*args, **kwargs)\n        \n        return wrapper\n    return decorator\n\n@bulkhead_decorator(lambda service: service, max_concurrent=2)\nasync def call_service(service, duration):\n    print(f'Calling {service}...')\n    await asyncio.sleep(duration)\n    return f'{service} response'\n\nasync def main():\n    tasks = []\n    for i in range(5):\n        tasks.append(call_service('auth', 2))\n    for i in range(5):\n        tasks.append(call_service('payments', 3))\n    \n    results = await asyncio.gather(*tasks, return_exceptions=True)\n    print(f'Completed {len([r for r in results if not isinstance(r, Exception)])} calls')\n\nasyncio.run(main())",
    hint: "Create separate semaphores per resource key"
},
{
    Id: "py_dec_48",
    topicId: "py_decorators",
    question: "Create a decorator that adds a cache stampede protection.",
    mathSolution: "Prevent multiple simultaneous cache rebuilds",
    codeSolution: "import asyncio\nimport functools\n\ndef cache_stampede_protection(ttl_seconds=60):\n    def decorator(func):\n        cache = {}\n        pending = {}\n        \n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            key = str(args) + str(sorted(kwargs.items()))\n            \n            if key in cache:\n                value, timestamp = cache[key]\n                import time\n                age = time.time() - timestamp\n                \n                if age < ttl_seconds * 0.8:\n                    return value\n                \n                if age < ttl_seconds:\n                    if key not in pending:\n                        print(f'Stale cache for {key}, refreshing in background')\n                        pending[key] = asyncio.create_task(func(*args, **kwargs))\n                        pending[key].add_done_callback(lambda _: pending.pop(key, None))\n                    return value\n            \n            if key in pending:\n                print(f'Waiting for {key} computation')\n                return await pending[key]\n            \n            print(f'Computing fresh value for {key}')\n            pending[key] = asyncio.create_task(func(*args, **kwargs))\n            try:\n                result = await pending[key]\n                import time\n                cache[key] = (result, time.time())\n                return result\n            finally:\n                pending.pop(key, None)\n        \n        return wrapper\n    return decorator\n\n@cache_stampede_protection(ttl_seconds=5)\nasync def expensive_query(query):\n    print(f'Executing expensive query: {query}')\n    await asyncio.sleep(2)\n    return f'Result for {query}'\n\nasync def main():\n    tasks = [expensive_query('SELECT * FROM users') for _ in range(10)]\n    results = await asyncio.gather(*tasks)\n    print(f'All results: {results[:3]}... (total {len(results)})')\n\nasyncio.run(main())",
    hint: "Use stale-while-revalidate pattern with background refresh"
},
{
    Id: "py_dec_49",
    topicId: "py_decorators",
    question: "Create a decorator that adds a rate limiter with token bucket algorithm.",
    mathSolution: "Token bucket rate limiting with async support",
    codeSolution: "import asyncio\nimport functools\nimport time\n\nclass TokenBucket:\n    def __init__(self, rate, capacity):\n        self.rate = rate\n        self.capacity = capacity\n        self.tokens = capacity\n        self.last_refill = time.time()\n        self.lock = asyncio.Lock()\n    \n    async def consume(self, tokens=1):\n        async with self.lock:\n            now = time.time()\n            elapsed = now - self.last_refill\n            self.tokens = min(self.capacity, self.tokens + elapsed * self.rate)\n            self.last_refill = now\n            \n            if self.tokens >= tokens:\n                self.tokens -= tokens\n                return True\n            return False\n\ndef token_bucket_rate_limit(rate=1, capacity=5):\n    bucket = TokenBucket(rate, capacity)\n    \n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            if await bucket.consume():\n                return await func(*args, **kwargs)\n            else:\n                raise Exception('Rate limit exceeded')\n        return wrapper\n    return decorator\n\n@token_bucket_rate_limit(rate=2, capacity=3)\nasync def api_request(request_id):\n    print(f'Processing request {request_id}')\n    await asyncio.sleep(0.5)\n    return f'Response {request_id}'\n\nasync def main():\n    tasks = []\n    for i in range(10):\n        tasks.append(api_request(i))\n        if i % 3 == 2:\n            await asyncio.sleep(1)\n    \n    for i, task in enumerate(tasks):\n        try:\n            result = await task\n            print(f'✅ {result}')\n        except Exception as e:\n            print(f'❌ Request {i}: {e}')\n\nasyncio.run(main())",
    hint: "Refill tokens based on elapsed time since last check"
},
{
    Id: "py_dec_50",
    topicId: "py_decorators",
    question: "Create a decorator that adds a distributed lock using Redis (simulated).",
    mathSolution: "Distributed locking to prevent concurrent execution across processes",
    codeSolution: "import asyncio\nimport functools\nimport time\nimport uuid\n\nclass DistributedLock:\n    def __init__(self):\n        self.locks = {}\n    \n    async def acquire(self, lock_name, timeout=10, retry_interval=0.1):\n        lock_id = str(uuid.uuid4())\n        start = time.time()\n        \n        while time.time() - start < timeout:\n            if lock_name not in self.locks:\n                self.locks[lock_name] = lock_id\n                return lock_id\n            await asyncio.sleep(retry_interval)\n        \n        return None\n    \n    async def release(self, lock_name, lock_id):\n        if lock_name in self.locks and self.locks[lock_name] == lock_id:\n            del self.locks[lock_name]\n            return True\n        return False\n\ndistributed_lock = DistributedLock()\n\ndef distributed_lock_decorator(lock_name_func, timeout=10):\n    def decorator(func):\n        @functools.wraps(func)\n        async def wrapper(*args, **kwargs):\n            lock_name = lock_name_func(*args, **kwargs)\n            lock_id = await distributed_lock.acquire(lock_name, timeout)\n            \n            if not lock_id:\n                raise Exception(f'Could not acquire lock: {lock_name}')\n            \n            try:\n                print(f'Acquired lock: {lock_name}')\n                return await func(*args, **kwargs)\n            finally:\n                await distributed_lock.release(lock_name, lock_id)\n                print(f'Released lock: {lock_name}')\n        \n        return wrapper\n    return decorator\n\n@distributed_lock_decorator(lambda user_id: f'user:{user_id}')\nasync def update_user(user_id):\n    print(f'Updating user {user_id}...')\n    await asyncio.sleep(2)\n    return f'User {user_id} updated'\n\nasync def main():\n    tasks = [\n        update_user(123),\n        update_user(123),\n        update_user(456),\n        update_user(456),\n        update_user(123)\n    ]\n    \n    results = await asyncio.gather(*tasks, return_exceptions=True)\n    for i, result in enumerate(results):\n        if isinstance(result, Exception):\n            print(f'Task {i}: Failed - {result}')\n        else:\n            print(f'Task {i}: {result}')\n\nasyncio.run(main())",
    hint: "Use unique lock ID to prevent releasing locks held by others"
},
//Generator
{
  id: 'py_gen_1',
  topicId: 'py_generators',
  question: 'Create a simple generator function that yields numbers from 1 to n.',
  mathSolution: 'Use yield keyword in a loop to generate values one at a time.',
  codeSolution: 'def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\n# Usage\nprint("Counting up to 5:")\nfor num in count_up_to(5):\n    print(num)  # Prints 1,2,3,4,5',
  hint: 'yield produces a value and pauses function execution.'
},
{
  id: 'py_gen_2',
  topicId: 'py_generators',
  question: 'Create a generator that yields even numbers up to a limit.',
  mathSolution: 'Use modulo operator to check even numbers and yield them.',
  codeSolution: 'def even_numbers(limit):\n    for i in range(0, limit+1, 2):\n        yield i\n\n# Usage\nevens = even_numbers(10)\nprint(list(evens))  # [0,2,4,6,8,10]',
  hint: 'range() with step 2 generates even numbers efficiently.'
},
{
  id: 'py_gen_3',
  topicId: 'py_generators',
  question: 'Write a generator that yields Fibonacci numbers indefinitely.',
  mathSolution: 'Use infinite loop with yield to generate Fibonacci sequence.',
  codeSolution: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\n# Usage\nfib = fibonacci()\nprint("First 10 Fibonacci numbers:")\nfor _ in range(10):\n    print(next(fib))  # Prints first 10 Fibonacci numbers',
  hint: 'Use next() to get next value from infinite generator.'
},
{
  id: 'py_gen_4',
  topicId: 'py_generators',
  question: 'Create a generator that reads data line by line (simulated).',
  mathSolution: 'Yield each line to demonstrate lazy evaluation.',
  codeSolution: 'def read_simulated_lines(data):\n    for line in data.split("\\n"):\n        yield line.strip()\n\n# Usage\nsample_data = "Line 1\\nLine 2\\nLine 3\\nLine 4"\nprint("Reading lines:")\nfor line in read_simulated_lines(sample_data):\n    print(f"  Processing: {line}")',
  hint: 'Generators are perfect for processing large datasets lazily.'
},
{
  id: 'py_gen_5',
  topicId: 'py_generators',
  question: 'Use generator expression to create squares of numbers.',
  mathSolution: 'Generator expressions use () instead of [] and yield values lazily.',
  codeSolution: 'squares = (x**2 for x in range(10))\n\n# Usage\nprint("Squares of 0-9:")\nfor square in squares:\n    print(square)  # Prints 0,1,4,9,16,25,36,49,64,81',
  hint: 'Generator expressions are memory-efficient compared to list comprehensions.'
},
{
  id: 'py_gen_6',
  topicId: 'py_generators',
  question: 'Create a generator that yields prime numbers up to n.',
  mathSolution: 'Check each number for primality and yield if prime.',
  codeSolution: 'def primes(limit):\n    def is_prime(num):\n        if num < 2:\n            return False\n        for i in range(2, int(num**0.5) + 1):\n            if num % i == 0:\n                return False\n        return True\n    \n    for num in range(2, limit + 1):\n        if is_prime(num):\n            yield num\n\n# Usage\nprint("Prime numbers up to 20:")\nprint(list(primes(20)))  # [2,3,5,7,11,13,17,19]',
  hint: 'Only check divisors up to square root for efficiency.'
},
{
  id: 'py_gen_7',
  topicId: 'py_generators',
  question: 'Use asyncio.wait_for() to set a timeout on an operation.',
  mathSolution: 'wait_for() raises TimeoutError if coroutine takes too long',
  codeSolution: 'import asyncio\n\nasync def fetch_data(name, delay):\n    print(f\'Fetching {name}...\')\n    await asyncio.sleep(delay)\n    return f\'Data from {name}\'\n\nasync def main():\n    try:\n        result = await asyncio.wait_for(fetch_data(\'API\', 2), timeout=3)\n        print(f\'Success: {result}\')\n    except asyncio.TimeoutError:\n        print(\'Operation timed out\')\n    \n    try:\n        result = await asyncio.wait_for(fetch_data(\'Slow API\', 5), timeout=2)\n        print(f\'Success: {result}\')\n    except asyncio.TimeoutError:\n        print(\'Slow API timed out after 2 seconds\')\n\nasyncio.run(main())',
  hint: 'Use `asyncio.wait_for(coroutine, timeout)` for timeouts (Python 3.7+)'
},
{
  id: 'py_gen_8',
  topicId: 'py_generators',
  question: 'Create a generator that yields chunks of data from a list.',
  mathSolution: 'Split iterable into chunks of specified size.',
  codeSolution: 'def chunks(iterable, chunk_size):\n    for i in range(0, len(iterable), chunk_size):\n        yield iterable[i:i + chunk_size]\n\n# Usage\ndata = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(f"Data: {data}")\nprint("Chunks of size 3:")\nfor chunk in chunks(data, 3):\n    print(f"  {chunk}")',
  hint: 'Useful for batch processing large datasets.'
},
{
  id: 'py_gen_9',
  topicId: 'py_generators',
  question: 'Implement range() function using generator.',
  mathSolution: 'Create custom range generator with start, stop, step parameters.',
  codeSolution: 'def my_range(start, stop=None, step=1):\n    if stop is None:\n        start, stop = 0, start\n    if step > 0:\n        while start < stop:\n            yield start\n            start += step\n    else:\n        while start > stop:\n            yield start\n            start += step\n\n# Usage\nprint("my_range(5):")\nfor i in my_range(5):\n    print(i, end=" ")  # 0,1,2,3,4\n\nprint("\\n\\nmy_range(2, 10, 2):")\nfor i in my_range(2, 10, 2):\n    print(i, end=" ")  # 2,4,6,8\nprint()',
  hint: 'Handle different parameter combinations like built-in range.'
},
{
  id: 'py_gen_10',
  topicId: 'py_generators',
  question: 'Create a generator that yields random numbers within a range.',
  mathSolution: 'Use random module with infinite loop.',
  codeSolution: 'import random\n\ndef random_numbers(low, high, count=None):\n    if count is None:\n        while True:\n            yield random.randint(low, high)\n    else:\n        for _ in range(count):\n            yield random.randint(low, high)\n\n# Usage\nprint("First 5 random numbers (1-100):")\nrands = random_numbers(1, 100)\nfor _ in range(5):\n    print(next(rands))',
  hint: 'Generators can be finite or infinite based on logic.'
},
{
  id: 'py_gen_11',
  topicId: 'py_generators',
  question: 'Write a generator that yields permutations of a list.',
  mathSolution: 'Use recursion to generate all permutations.',
  codeSolution: 'def permutations(items):\n    if len(items) <= 1:\n        yield items\n    else:\n        for i in range(len(items)):\n            for perm in permutations(items[:i] + items[i+1:]):\n                yield [items[i]] + perm\n\n# Usage\nprint("Permutations of [1,2,3]:")\nfor perm in permutations([1,2,3]):\n    print(perm)',
  hint: 'Recursive generators can generate combinatorial sequences.'
},
{
  id: 'py_gen_12',
  topicId: 'py_generators',
  question: 'Create a generator that yields sliding windows of a sequence.',
  mathSolution: 'Yield consecutive windows of specified size.',
  codeSolution: 'def sliding_window(sequence, window_size):\n    for i in range(len(sequence) - window_size + 1):\n        yield sequence[i:i + window_size]\n\n# Usage\nnumbers = [10, 20, 30, 40, 50, 60]\nprint(f"Sequence: {numbers}")\nprint(f"Windows of size 3:")\nfor window in sliding_window(numbers, 3):\n    print(f"  {window}")',
  hint: 'Useful for time series analysis and moving averages.'
},
{
  id: 'py_gen_13',
  topicId: 'py_generators',
  question: 'Implement zip() function using generator.',
  mathSolution: 'Take multiple iterables and yield tuples of corresponding elements.',
  codeSolution: 'def my_zip(*iterables):\n    iterators = [iter(it) for it in iterables]\n    while True:\n        try:\n            yield tuple(next(it) for it in iterators)\n        except StopIteration:\n            break\n\n# Usage\nnames = ["Alice", "Bob", "Charlie"]\nages = [25, 30, 35]\nprint("Zipped names and ages:")\nfor name, age in my_zip(names, ages):\n    print(f"  {name} is {age} years old")',
  hint: 'Stop when shortest iterable is exhausted.'
},
{
  id: 'py_gen_14',
  topicId: 'py_generators',
  question: 'Create a generator that yields unique elements from a sequence.',
  mathSolution: 'Keep track of seen elements and yield new ones.',
  codeSolution: 'def unique_elements(iterable):\n    seen = set()\n    for item in iterable:\n        if item not in seen:\n            seen.add(item)\n            yield item\n\n# Usage\nitems = [1, 2, 2, 3, 3, 3, 4, 5, 5]\nprint(f"Original: {items}")\nprint(f"Unique: {list(unique_elements(items))}")',
  hint: 'Use set to track seen items efficiently.'
},
{
  id: 'py_gen_15',
  topicId: 'py_generators',
  question: 'Write a generator that yields flattened nested lists.',
  mathSolution: 'Recursively traverse nested structure and yield non-list items.',
  codeSolution: 'def flatten(nested_list):\n    for item in nested_list:\n        if isinstance(item, list):\n            yield from flatten(item)\n        else:\n            yield item\n\n# Usage\nnested = [1, [2, [3, 4]], 5, [6, 7]]\nprint(f"Nested: {nested}")\nprint(f"Flattened: {list(flatten(nested))}")',
  hint: 'yield from delegates to sub-generator recursively.'
},
{
  id: 'py_gen_16',
  topicId: 'py_generators',
  question: 'Create a generator that yields infinite powers of 2.',
  mathSolution: 'Use while loop with multiplication.',
  codeSolution: 'def powers_of_two():\n    n = 1\n    while True:\n        yield n\n        n *= 2\n\n# Usage\npowers = powers_of_two()\nprint("First 10 powers of 2:")\nfor _ in range(10):\n    print(next(powers), end=" ")',
  hint: 'Infinite generators need next() or break to stop.'
},
{
  id: 'py_gen_17',
  topicId: 'py_generators',
  question: 'Implement enumerate() using generator.',
  mathSolution: 'Yield index and value pairs from iterable.',
  codeSolution: 'def my_enumerate(iterable, start=0):\n    index = start\n    for item in iterable:\n        yield index, item\n        index += 1\n\n# Usage\nfruits = ["apple", "banana", "cherry"]\nprint("Enumerated fruits (starting at 1):")\nfor i, fruit in my_enumerate(fruits, 1):\n    print(f"  {i}: {fruit}")',
  hint: 'Start parameter allows custom starting index.'
},
{
  id: 'py_gen_18',
  topicId: 'py_generators',
  question: 'Write a generator that yields infinite powers of 2 (another example).',
  mathSolution: 'Use while loop with multiplication.',
  codeSolution: 'def powers_of_two_limit(limit):\n    n = 1\n    while n <= limit:\n        yield n\n        n *= 2\n\n# Usage\nprint("Powers of 2 up to 100:")\nfor power in powers_of_two_limit(100):\n    print(power, end=" ")',
  hint: 'Infinite generators need next() or break to stop.'
},
{
  id: 'py_gen_19',
  topicId: 'py_generators',
  question: 'Write a generator that yields batches of data from a large list.',
  mathSolution: 'Fetch records in batches to manage memory.',
  codeSolution: 'def batch_fetch(data, batch_size=3):\n    for i in range(0, len(data), batch_size):\n        yield data[i:i+batch_size]\n\n# Usage\nlarge_data = list(range(20))\nprint(f"Data: {large_data}")\nprint("Batches of size 5:")\nfor batch in batch_fetch(large_data, 5):\n    print(f"  {batch}")',
  hint: 'Batch processing prevents loading all data into memory at once.'
},
{
  id: 'py_gen_20',
  topicId: 'py_generators',
  question: 'Create a generator that yields items in reverse order.',
  mathSolution: 'Use list reversal or iteration from end.',
  codeSolution: 'def reverse_items(iterable):\n    for item in reversed(list(iterable)):\n        yield item\n\n# Usage\nitems = [10, 20, 30, 40, 50]\nprint(f"Original: {items}")\nprint("Reversed:")\nfor item in reverse_items(items):\n    print(f"  {item}")',
  hint: 'Convert to list first for reverse iteration.'
},
{
  id: 'py_gen_21',
  topicId: 'py_generators',
  question: 'Implement a generator that yields distinct permutations (without duplicates).',
  mathSolution: 'Skip duplicates when generating permutations.',
  codeSolution: 'def distinct_permutations(items):\n    items = sorted(items)\n    used = [False] * len(items)\n    \n    def generate(current):\n        if len(current) == len(items):\n            yield tuple(current)\n            return\n        last_used = None\n        for i in range(len(items)):\n            if not used[i] and items[i] != last_used:\n                used[i] = True\n                yield from generate(current + [items[i]])\n                used[i] = False\n                last_used = items[i]\n    \n    yield from generate([])\n\n# Usage\nprint("Distinct permutations of [1,1,2]:")\nprint(list(distinct_permutations([1,1,2])))',
  hint: 'Sort items and skip same values to avoid duplicates.'
},
{
  id: 'py_gen_22',
  topicId: 'py_generators',
  question: 'Create a generator that yields combinations of a given length.',
  mathSolution: 'Recursively generate all combinations.',
  codeSolution: 'def combinations(items, r):\n    if r == 0:\n        yield []\n    elif r == len(items):\n        yield items\n    elif r < len(items):\n        for combo in combinations(items[1:], r-1):\n            yield [items[0]] + combo\n        for combo in combinations(items[1:], r):\n            yield combo\n\n# Usage\nitems = [1, 2, 3, 4]\nprint(f"Combinations of {items} of length 2:")\nfor combo in combinations(items, 2):\n    print(combo)',
  hint: 'Combinations are order-independent selections.'
},
{
  id: 'py_gen_23',
  topicId: 'py_generators',
  question: 'Write a generator that yields Cartesian product of iterables.',
  mathSolution: 'Nested loops with recursion for multiple iterables.',
  codeSolution: 'def product(*iterables, repeat=1):\n    if repeat > 1:\n        iterables = iterables * repeat\n    \n    pools = [tuple(pool) for pool in iterables]\n    result = [[]]\n    for pool in pools:\n        result = [x+[y] for x in result for y in pool]\n    for prod in result:\n        yield tuple(prod)\n\n# Usage\nprint("Cartesian product of [1,2] and ["a","b"]:")\nfor p in product([1,2], ["a","b"]):\n    print(p)',
  hint: 'Cartesian product is all possible ordered pairs/tuples.'
},
{
  id: 'py_gen_24',
  topicId: 'py_generators',
  question: 'Create a generator that yields infinite repeating cycle of elements.',
  mathSolution: 'Repeat elements indefinitely using modulo indexing.',
  codeSolution: 'def cycle(iterable):\n    saved = []\n    for element in iterable:\n        yield element\n        saved.append(element)\n    while saved:\n        for element in saved:\n            yield element\n\n# Usage\ncolors = cycle(["red", "green", "blue"])\nprint("First 5 colors in cycle:")\nfor _ in range(5):\n    print(next(colors))',
  hint: 'Save elements first time to repeat them later.'
},
{
  id: 'py_gen_25',
  topicId: 'py_generators',
  question: 'Implement accumulate() generator that yields running totals.',
  mathSolution: 'Keep running sum and yield after each addition.',
  codeSolution: 'def accumulate(iterable):\n    total = 0\n    for item in iterable:\n        total += item\n        yield total\n\n# Usage\nnumbers = [1, 2, 3, 4, 5]\nprint(f"Original: {numbers}")\nprint(f"Running totals: {list(accumulate(numbers))}")',
  hint: 'Useful for prefix sums and running statistics.'
},
{
  id: 'py_gen_26',
  topicId: 'py_generators',
  question: 'Create a generator that yields pairwise elements (a,b), (b,c), (c,d).',
  mathSolution: 'Use two pointers: previous and current.',
  codeSolution: 'def pairwise(iterable):\n    iterator = iter(iterable)\n    try:\n        prev = next(iterator)\n    except StopIteration:\n        return\n    for curr in iterator:\n        yield (prev, curr)\n        prev = curr\n\n# Usage\nprint("Pairwise of [1,2,3,4,5]:")\nprint(list(pairwise([1,2,3,4,5])))',
  hint: 'Useful for calculating differences between consecutive elements.'
},
{
  id: 'py_gen_27',
  topicId: 'py_generators',
  question: 'Write a generator that yields only items at even indices.',
  mathSolution: 'Use enumerate to track index and yield when index is even.',
  codeSolution: 'def even_indexed(iterable):\n    for i, item in enumerate(iterable):\n        if i % 2 == 0:\n            yield item\n\n# Usage\nitems = [10, 20, 30, 40, 50, 60, 70]\nprint(f"Original: {items}")\nprint(f"Even-indexed items: {list(even_indexed(items))}")',
  hint: 'First element is index 0 (even).'
},
{
  id: 'py_gen_28',
  topicId: 'py_generators',
  question: 'Create a generator that yields items with their indices reversed.',
  mathSolution: 'Start from end and move backwards.',
  codeSolution: 'def enumerate_reversed(iterable):\n    items = list(iterable)\n    for i in range(len(items)-1, -1, -1):\n        yield i, items[i]\n\n# Usage\nprint("Reversed indices of [\'a\',\'b\',\'c\']:")\nfor i, val in enumerate_reversed(["a","b","c"]):\n    print(f"  {i}:{val}")',
  hint: 'Convert to list to access by index from end.'
},
{
  id: 'py_gen_29',
  topicId: 'py_generators',
  question: 'Implement a generator that yields Fibonacci numbers with memoization.',
  mathSolution: 'Cache computed values for efficiency.',
  codeSolution: 'def fibonacci_memo():\n    cache = {0: 0, 1: 1}\n    def fib(n):\n        if n not in cache:\n            cache[n] = fib(n-1) + fib(n-2)\n        return cache[n]\n    n = 0\n    while True:\n        yield fib(n)\n        n += 1\n\n# Usage\nfib = fibonacci_memo()\nprint("First 10 Fibonacci numbers:")\nfor _ in range(10):\n    print(next(fib), end=" ")\nprint()',
  hint: 'Memoization prevents redundant calculations.'
},
{
  id: 'py_gen_30',
  topicId: 'py_generators',
  question: 'Create a generator that yields the Collatz sequence for a starting number.',
  mathSolution: 'Apply Collatz rules: if even n/2, if odd 3n+1 until 1.',
  codeSolution: 'def collatz(n):\n    yield n\n    while n != 1:\n        if n % 2 == 0:\n            n = n // 2\n        else:\n            n = 3 * n + 1\n        yield n\n\n# Usage\nprint("Collatz sequence starting at 13:")\nprint(list(collatz(13)))',
  hint: 'Collatz conjecture: sequence always reaches 1.'
},
{
  id: 'py_gen_31',
  topicId: 'py_generators',
  question: 'Write a generator that yields prime factors of a number.',
  mathSolution: 'Divide by smallest primes repeatedly.',
  codeSolution: 'def prime_factors(n):\n    # Factor out 2s\n    while n % 2 == 0:\n        yield 2\n        n = n // 2\n    \n    # Factor out odd primes\n    i = 3\n    while i * i <= n:\n        while n % i == 0:\n            yield i\n            n = n // i\n        i += 2\n    \n    if n > 1:\n        yield n\n\n# Usage\nprint("Prime factors of 84:")\nprint(list(prime_factors(84)))',
  hint: 'Factor out all 2s first, then odd numbers.'
},
{
  id: 'py_gen_32',
  topicId: 'py_generators',
  question: 'Create a generator that yields dates in a range (date generator).',
  mathSolution: 'Use datetime module and yield dates incrementally.',
  codeSolution: 'from datetime import datetime, timedelta\n\ndef date_range(start_date, end_date):\n    current = start_date\n    while current <= end_date:\n        yield current\n        current += timedelta(days=1)\n\n# Usage\nstart = datetime(2024, 1, 1)\nend = datetime(2024, 1, 5)\nprint("Dates from Jan 1 to Jan 5 2024:")\nfor date in date_range(start, end):\n    print(date.strftime("%Y-%m-%d"))',
  hint: 'timedelta(days=1) increments by one day.'
},
{
  id: 'py_gen_33',
  topicId: 'py_generators',
  question: 'Implement a generator that yields paginated results from a large dataset.',
  mathSolution: 'Fetch next page when current page is exhausted.',
  codeSolution: 'def paginate(data, page_size=3):\n    for i in range(0, len(data), page_size):\n        yield data[i:i+page_size]\n\n# Usage\ndataset = [f"Item {i}" for i in range(1, 11)]\nprint(f"Total items: {len(dataset)}")\nprint("Pages:")\nfor page_num, page in enumerate(paginate(dataset, 3), 1):\n    print(f"  Page {page_num}: {page}")',
  hint: 'Continue fetching until empty page is returned.'
},
{
  id: 'py_gen_34',
  topicId: 'py_generators',
  question: 'Create a generator that yields rolling averages of a sequence.',
  mathSolution: 'Maintain window and compute average for each position.',
  codeSolution: 'def rolling_average(iterable, window_size):\n    window = []\n    for value in iterable:\n        window.append(value)\n        if len(window) > window_size:\n            window.pop(0)\n        if len(window) == window_size:\n            yield sum(window) / window_size\n\n# Usage\nprices = [10, 12, 11, 13, 14, 12, 15]\nprint(f"Prices: {prices}")\nprint("3-day rolling averages:")\nfor avg in rolling_average(prices, 3):\n    print(f"  {avg:.2f}")',
  hint: 'Rolling average smooths out short-term fluctuations.'
},
{
  id: 'py_gen_35',
  topicId: 'py_generators',
  question: 'Write a generator that yields all substrings of a string.',
  mathSolution: 'Generate all possible start and end positions.',
  codeSolution: 'def substrings(s):\n    length = len(s)\n    for i in range(length):\n        for j in range(i + 1, length + 1):\n            yield s[i:j]\n\n# Usage\nprint("All substrings of \'abc\':")\nprint(list(substrings("abc")))',
  hint: 'Time complexity O(n²) for generating all substrings.'
},
{
  id: 'py_gen_36',
  topicId: 'py_generators',
  question: 'Create a generator that yields lines matching a pattern from data.',
  mathSolution: 'Use regex pattern to filter lines.',
  codeSolution: 'import re\n\ndef grep_regex(pattern, data):\n    regex = re.compile(pattern)\n    for line in data.split("\\n"):\n        if regex.search(line):\n            yield line.strip()\n\n# Usage\nsample_data = "John: 123-45-6789\\nJane: 987-65-4321\\nBob: 123456789\\nAlice: 111-22-3333"\nprint("Sample data:")\nprint(sample_data)\nprint("\\nLines containing SSN pattern (XXX-XX-XXXX):")\nfor line in grep_regex(r"\\d{3}-\\d{2}-\\d{4}", sample_data):\n    print(f"  {line}")',
  hint: 'regex.search() finds pattern anywhere in line.'
},
{
  id: 'py_gen_37',
  topicId: 'py_generators',
  question: 'Implement a generator that yields only items satisfying a predicate.',
  mathSolution: 'Filter items using predicate function.',
  codeSolution: 'def filter_generator(predicate, iterable):\n    for item in iterable:\n        if predicate(item):\n            yield item\n\n# Usage\nnumbers = [1, 2, 3, 4, 5, 6]\nprint(f"Original: {numbers}")\nprint(f"Odd numbers: {list(filter_generator(lambda x: x % 2 == 1, numbers))}")',
  hint: 'This is similar to built-in filter() function.'
},
{
  id: 'py_gen_38',
  topicId: 'py_generators',
  question: 'Create a generator that yields transformed items (map functionality).',
  mathSolution: 'Apply transformation function to each item.',
  codeSolution: 'def map_generator(transform, iterable):\n    for item in iterable:\n        yield transform(item)\n\n# Usage\nnumbers = [1, 2, 3, 4]\nprint(f"Original: {numbers}")\nprint(f"Squares: {list(map_generator(lambda x: x**2, numbers))}")',
  hint: 'This is similar to built-in map() function.'
},
{
  id: 'py_gen_39',
  topicId: 'py_generators',
  question: 'Write a generator that yields first n elements from an iterable (take functionality).',
  mathSolution: 'Yield items until count reaches n.',
  codeSolution: 'def take(n, iterable):\n    iterator = iter(iterable)\n    for _ in range(n):\n        try:\n            yield next(iterator)\n        except StopIteration:\n            break\n\n# Usage\ninfinite = (x for x in range(1000000))\nfirst_5 = list(take(5, infinite))\nprint(f"First 5 numbers from infinite generator: {first_5}")',
  hint: 'Useful for limiting infinite generators.'
},
{
  id: 'py_gen_40',
  topicId: 'py_generators',
  question: 'Create a generator that yields items while condition is true (takewhile).',
  mathSolution: 'Stop yielding when predicate becomes false.',
  codeSolution: 'def take_while(predicate, iterable):\n    for item in iterable:\n        if not predicate(item):\n            break\n        yield item\n\n# Usage\nnumbers = [2, 4, 6, 7, 8, 10]\nprint(f"Original: {numbers}")\nprint(f"Take while even: {list(take_while(lambda x: x % 2 == 0, numbers))}")',
  hint: 'Stops at first item that fails predicate.'
},

//Lamda 
{
  id: 'py_lambda_1',
  topicId: 'py_lambda',
  question: 'Create a lambda function that adds 10 to a given number.',
  mathSolution: 'Lambda functions are anonymous single-expression functions.',
  codeSolution: 'add_10 = lambda x: x + 10\nprint(add_10(5))  # Output: 15',
  hint: 'Lambda syntax: lambda arguments: expression'
},
{
  id: 'py_lambda_2',
  topicId: 'py_lambda',
  question: 'Write a lambda function that multiplies two numbers.',
  mathSolution: 'Lambda can take multiple arguments separated by commas.',
  codeSolution: 'multiply = lambda a, b: a * b\nprint(multiply(4, 5))  # Output: 20',
  hint: 'Multiple arguments work like in regular functions.'
},
{
  id: 'py_lambda_3',
  topicId: 'py_lambda',
  question: 'Create a lambda function to check if a number is even.',
  mathSolution: 'Use modulo operator to check divisibility by 2.',
  codeSolution: 'is_even = lambda x: x % 2 == 0\nprint(is_even(6))  # Output: True\nprint(is_even(7))  # Output: False',
  hint: 'Returns boolean True/False.'
},
{
  id: 'py_lambda_4',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to square all numbers in a list.',
  mathSolution: 'map() applies lambda to each element of the list.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)  # Output: [1, 4, 9, 16, 25]',
  hint: 'map() returns iterator, convert to list to see results.'
},
{
  id: 'py_lambda_5',
  topicId: 'py_lambda',
  question: 'Use lambda with filter() to get only odd numbers from a list.',
  mathSolution: 'filter() keeps elements where lambda returns True.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8]\nodds = list(filter(lambda x: x % 2 == 1, numbers))\nprint(odds)  # Output: [1, 3, 5, 7]',
  hint: 'filter() selects elements that satisfy condition.'
},
{
  id: 'py_lambda_6',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort a list of tuples by second element.',
  mathSolution: 'key parameter specifies function to extract comparison key.',
  codeSolution: 'pairs = [(1, "apple"), (3, "banana"), (2, "cherry")]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])\nprint(sorted_pairs)  # Sorted alphabetically by fruit name',
  hint: 'lambda x: x[1] extracts second element of each tuple.'
},
{
  id: 'py_lambda_7',
  topicId: 'py_lambda',
  question: 'Create a lambda function that returns the length of a string.',
  mathSolution: 'Use len() function inside lambda.',
  codeSolution: 'string_length = lambda s: len(s)\nprint(string_length("hello"))  # Output: 5',
  hint: 'Lambda can call other functions.'
},
{
  id: 'py_lambda_8',
  topicId: 'py_lambda',
  question: 'Use lambda with max() to find the longest word in a list.',
  mathSolution: 'key parameter tells max() what to base comparison on.',
  codeSolution: 'words = ["apple", "banana", "cherry", "date"]\nlongest = max(words, key=lambda x: len(x))\nprint(longest)  # Output: banana',
  hint: 'key=lambda x: len(x) compares by length.'
},
{
  id: 'py_lambda_9',
  topicId: 'py_lambda',
  question: 'Create a lambda function that converts Celsius to Fahrenheit.',
  mathSolution: 'Formula: F = C * 9/5 + 32',
  codeSolution: 'c_to_f = lambda c: (c * 9/5) + 32\nprint(c_to_f(0))   # Output: 32.0\nprint(c_to_f(100)) # Output: 212.0',
  hint: 'Use floating point for accurate conversion.'
},
{
  id: 'py_lambda_10',
  topicId: 'py_lambda',
  question: 'Use lambda with reduce() to find the product of all numbers in a list.',
  mathSolution: 'reduce() cumulatively applies lambda to pairs of elements.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 120',
  hint: 'reduce() is in functools module.'
},
{
  id: 'py_lambda_11',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the first character of a string.',
  mathSolution: 'Index into string using [0].',
  codeSolution: 'first_char = lambda s: s[0] if s else None\nprint(first_char("hello"))  # Output: h\nprint(first_char(""))       # Output: None',
  hint: 'Handle empty strings to avoid IndexError.'
},
{
  id: 'py_lambda_12',
  topicId: 'py_lambda',
  question: 'Use lambda with list comprehension to create a list of lambda functions.',
  mathSolution: 'Each lambda captures different value from loop.',
  codeSolution: 'multipliers = [lambda x, i=i: x * i for i in range(1, 4)]\nprint(multipliers[0](5))  # Output: 5\nprint(multipliers[1](5))  # Output: 10\nprint(multipliers[2](5))  # Output: 15',
  hint: 'Use default argument i=i to capture current value.'
},
{
  id: 'py_lambda_13',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the absolute value of a number.',
  mathSolution: 'Use conditional expression to handle negative numbers.',
  codeSolution: 'abs_value = lambda x: x if x >= 0 else -x\nprint(abs_value(-5))  # Output: 5\nprint(abs_value(3))   # Output: 3',
  hint: 'Ternary operator: value_if_true if condition else value_if_false'
},
{
  id: 'py_lambda_14',
  topicId: 'py_lambda',
  question: 'Use lambda with any() to check if any number in list is even.',
  mathSolution: 'any() returns True if any element satisfies condition.',
  codeSolution: 'numbers = [1, 3, 5, 6, 7]\nhas_even = any(map(lambda x: x % 2 == 0, numbers))\nprint(has_even)  # Output: True',
  hint: 'Combine map() with any() for efficient checking.'
},
{
  id: 'py_lambda_15',
  topicId: 'py_lambda',
  question: 'Use lambda with all() to check if all numbers in list are positive.',
  mathSolution: 'all() returns True only if all elements satisfy condition.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\nall_positive = all(map(lambda x: x > 0, numbers))\nprint(all_positive)  # Output: True',
  hint: 'all() is equivalent to AND operation on all elements.'
},
{
  id: 'py_lambda_16',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the reverse of a string.',
  mathSolution: 'Use slicing [::-1] to reverse string.',
  codeSolution: 'reverse_str = lambda s: s[::-1]\nprint(reverse_str("hello"))  # Output: olleh',
  hint: 'Slicing works on strings too.'
},
{
  id: 'py_lambda_17',
  topicId: 'py_lambda',
  question: 'Use lambda with min() to find the smallest number by absolute value.',
  mathSolution: 'key parameter can use abs() function.',
  codeSolution: 'numbers = [-5, 3, -2, 7, -1]\nsmallest_abs = min(numbers, key=lambda x: abs(x))\nprint(smallest_abs)  # Output: -1',
  hint: 'abs() returns absolute value.'
},
{
  id: 'py_lambda_18',
  topicId: 'py_lambda',
  question: 'Create a lambda that checks if a string is palindrome.',
  mathSolution: 'Compare string with its reverse.',
  codeSolution: 'is_palindrome = lambda s: s == s[::-1]\nprint(is_palindrome("radar"))  # Output: True\nprint(is_palindrome("hello"))  # Output: False',
  hint: 'Case-sensitive comparison; convert to lowercase if needed.'
},
{
  id: 'py_lambda_19',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort dictionary items by value.',
  mathSolution: 'items() returns key-value pairs, sort by value.',
  codeSolution: 'scores = {"Alice": 85, "Bob": 92, "Charlie": 78}\nsorted_by_score = sorted(scores.items(), key=lambda x: x[1])\nprint(sorted_by_score)  # [("Charlie",78), ("Alice",85), ("Bob",92)]',
  hint: 'x[0] is key, x[1] is value.'
},
{
  id: 'py_lambda_20',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the factorial of a number using recursion (not recommended).',
  mathSolution: 'Lambda can call itself recursively, but avoid for clarity.',
  codeSolution: 'factorial = lambda n: 1 if n <= 1 else n * factorial(n-1)\nprint(factorial(5))  # Output: 120',
  hint: 'Recursive lambdas need a name to refer to themselves.'
},
{
  id: 'py_lambda_21',
  topicId: 'py_lambda',
  question: 'Use lambda with list.sort() to sort strings by their last character.',
  mathSolution: 'key extracts last character for comparison.',
  codeSolution: 'words = ["apple", "banana", "cherry", "date"]\nwords.sort(key=lambda x: x[-1])\nprint(words)  # Sorted by last character: banana, apple, date, cherry',
  hint: 'x[-1] gets last character of string.'
},
{
  id: 'py_lambda_22',
  topicId: 'py_lambda',
  question: 'Create a lambda that converts a string to uppercase.',
  mathSolution: 'Use upper() string method.',
  codeSolution: 'to_upper = lambda s: s.upper()\nprint(to_upper("hello"))  # Output: HELLO',
  hint: 'String methods work inside lambda.'
},
{
  id: 'py_lambda_23',
  topicId: 'py_lambda',
  question: 'Use lambda with filter() to remove empty strings from a list.',
  mathSolution: 'Empty string evaluates to False in boolean context.',
  codeSolution: 'strings = ["hello", "", "world", "", "python"]\nnon_empty = list(filter(lambda x: x, strings))\nprint(non_empty)  # Output: ["hello", "world", "python"]',
  hint: 'Empty string is falsy, non-empty strings are truthy.'
},
{
  id: 'py_lambda_24',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the sum of digits of a number.',
  mathSolution: 'Convert to string, sum digits, convert back.',
  codeSolution: 'sum_digits = lambda n: sum(int(d) for d in str(n))\nprint(sum_digits(123))  # Output: 6\nprint(sum_digits(456))  # Output: 15',
  hint: 'Use generator expression inside sum().'
},
{
  id: 'py_lambda_25',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to add corresponding elements of two lists.',
  mathSolution: 'zip() combines lists, map applies lambda to pairs.',
  codeSolution: 'list1 = [1, 2, 3]\nlist2 = [4, 5, 6]\nsums = list(map(lambda x, y: x + y, list1, list2))\nprint(sums)  # Output: [5, 7, 9]',
  hint: 'map() can take multiple iterables.'
},
{
  id: 'py_lambda_26',
  topicId: 'py_lambda',
  question: 'Create a lambda that checks if a number is prime (simple version).',
  mathSolution: 'Check divisibility from 2 to sqrt(n).',
  codeSolution: 'is_prime = lambda n: n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))\nprint(is_prime(7))   # Output: True\nprint(is_prime(10))  # Output: False',
  hint: 'all() with generator stops early when condition fails.'
},
{
  id: 'py_lambda_27',
  topicId: 'py_lambda',
  question: 'Use lambda with max() to find the most frequent element in a list.',
  mathSolution: 'Use count() method as key function.',
  codeSolution: 'numbers = [1, 2, 3, 2, 2, 4, 5, 2]\nmost_frequent = max(set(numbers), key=lambda x: numbers.count(x))\nprint(most_frequent)  # Output: 2',
  hint: 'set() removes duplicates for unique candidates.'
},
{
  id: 'py_lambda_28',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the type of a variable as string.',
  mathSolution: 'Use type() and __name__ to get type name.',
  codeSolution: 'get_type = lambda x: type(x).__name__\nprint(get_type(5))        # Output: int\nprint(get_type("hello"))  # Output: str\nprint(get_type([1,2]))    # Output: list',
  hint: '__name__ gives class name as string.'
},
{
  id: 'py_lambda_29',
  topicId: 'py_lambda',
  question: 'Use lambda with sorted() to sort strings by number of vowels.',
  mathSolution: 'Count vowels in each string for sorting key.',
  codeSolution: 'words = ["apple", "banana", "cherry", "date"]\nvowel_count = lambda s: sum(1 for c in s.lower() if c in "aeiou")\nsorted_words = sorted(words, key=vowel_count)\nprint(sorted_words)  # Sorted by vowel count',
  hint: 'Count vowels using generator expression.'
},
{
  id: 'py_lambda_30',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns True if a number is a perfect square.',
  mathSolution: 'Check if square root is integer.',
  codeSolution: 'is_perfect_square = lambda n: int(n**0.5)**2 == n\nprint(is_perfect_square(16))  # Output: True\nprint(is_perfect_square(20))  # Output: False',
  hint: 'Compare square of integer square root with original.'
},
{
  id: 'py_lambda_31',
  topicId: 'py_lambda',
  question: 'Use lambda with reduce() to find the maximum element in a list.',
  mathSolution: 'reduce() can compare pairs and keep larger.',
  codeSolution: 'from functools import reduce\nnumbers = [3, 7, 2, 9, 1, 5]\nmaximum = reduce(lambda x, y: x if x > y else y, numbers)\nprint(maximum)  # Output: 9',
  hint: 'lambda returns the larger of two values.'
},
{
  id: 'py_lambda_32',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the n-th power of a number (currying style).',
  mathSolution: 'Return a lambda that captures the exponent.',
  codeSolution: 'power = lambda exp: lambda base: base ** exp\nsquare = power(2)\ncube = power(3)\nprint(square(5))  # Output: 25\nprint(cube(5))    # Output: 125',
  hint: 'This demonstrates closure in lambda.'
},
{
  id: 'py_lambda_33',
  topicId: 'py_lambda',
  question: 'Use lambda with map() to convert list of strings to integers.',
  mathSolution: 'int() function converts string to integer.',
  codeSolution: 'str_nums = ["1", "2", "3", "4", "5"]\nint_nums = list(map(lambda x: int(x), str_nums))\nprint(int_nums)  # Output: [1, 2, 3, 4, 5]',
  hint: 'map(int, str_nums) works too, but lambda shows concept.'
},
{
  id: 'py_lambda_34',
  topicId: 'py_lambda',
  question: 'Create a lambda that returns the gcd of two numbers using Euclidean algorithm.',
  mathSolution: 'Recursive lambda for GCD calculation.',
  codeSolution: 'gcd = lambda a, b: a if b == 0 else gcd(b, a % b)\nprint(gcd(48, 18))  # Output: 6',
  hint: 'Euclidean algorithm: gcd(a,b) = gcd(b, a%b) until b=0.'
},
{
  id: 'py_lambda_35',
  topicId: 'py_lambda',
  question: 'Use lambda with filter() to get numbers within a specific range.',
  mathSolution: 'Combine conditions with and operator.',
  codeSolution: 'numbers = [5, 12, 8, 15, 3, 20, 7]\nin_range = list(filter(lambda x: 10 <= x <= 20, numbers))\nprint(in_range)  # Output: [12, 15, 20]',
  hint: 'Python allows chained comparisons like 10 <= x <= 20.'
},
);