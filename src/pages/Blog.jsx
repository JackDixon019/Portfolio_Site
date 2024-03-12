import { CodeBlock, dracula } from "react-code-blocks";
import JaggedSection from "../components/JaggedSection";
import NonJaggedSection from "../components/NonJaggedSection";
import { colours, styles } from "../components/styles";

export default function BlogPage() {
    return (
        <div>
            <JaggedSection id="intro">
                <h1 className={styles.title + colours.linkOnPapaya + " m-auto"}>Blog</h1>
            </JaggedSection>
            <NonJaggedSection colour="bg-smalt-800">
                <h1 className={styles.title + colours.linkOnSmalt}>
                    <a href="https://docs.python.org/3/library/asyncio.html">
                        Python Asyncio
                    </a>
                </h1>
                <div>
                    <article className="m-auto pb-12 pt-8 text-justify font-Montserrat lg:w-8/12">
                        <p className="mb-4">
                            By default, the control flow of a Python script goes
                            from top-to-bottom. It starts at the start of your
                            code, and finishes at the end of it. Of course,
                            things are never quite that simple, and the addition
                            of conditionals, loops, functions, and a multitude
                            of various control flow statements change the order
                            in which your code is executed. One thing that
                            doesn't change, however, is that your script will
                            only ever do one thing at a time unless explicitly
                            told otherwise. Your script may stick around in a{" "}
                            <code>for-loop</code>, but while in that loop,
                            nothing else will be happening. Python actually has
                            several ways to execute multiple portions of your
                            script at the same time - multi-threading and
                            multi-processing are two of the big ones - but
                            things can quickly become more error-prone and
                            confusing. Asyncio can be a great and easy way to
                            speed up your Python scripts.
                        </p>

                        <p className="mb-4">
                            Asyncio is actually "Asynchronous Input/Output" and,
                            as the name may suggest, is best used for handling
                            inputs and outputs. Something important to note
                            here, is that inputting and outputting are things
                            that are separate from python. See, unlike
                            multi-processing and multi-threading, asyncio isn't{" "}
                            <i>truly</i> running your script simultaneously.
                            Instead, it cheats a little bit. While waiting for a
                            portion of your script that doesn't require python,
                            such as reading or writing a file, your script can
                            actually get on with other things in the meantime.
                            While this isn't quite as fast as
                            multi-threading/multi-processing, it can often be
                            almost as good, especially when dealing with long
                            wait-times such as one might experience when
                            fetching information from the internet.
                        </p>

                        <p className="mb-4 text-base text-orange-peel-300">
                            e.g. Synchronously Running two webdrivers to scrape
                            a webpage. Arrows indicate control flow.
                            <CodeBlock
                                theme={dracula}
                                language="Python"
                                text={`starts first driver ➡️ waits for page to load 	 ➡️ clicks 1st link   ➡️ wait for link to load     ➡️ saves & scrapes page ➡️ starts 2nd driver ➡️ waits for page to load ➡️ clicks 2nd link➡️ wait for link to load ➡️ saves & scrapes 2nd page`}
                            />
                        </p>

                        <p className="mt-8 text-base text-orange-peel-300">
                            e.g. Asynchronously Running two webdrivers to scrape
                            a webpage. Arrows indicate control flow.
                            <CodeBlock
                                theme={dracula}
                                language="Python"
                                text={`starts first driver ➡️ waits for page to load 	 ➡️ clicks 1st link   ➡️ wait for link to load     ➡️ saves & scrapes page
                                    ↘️                    	             	↗️		                              ↘️			                       ↗️     	                   ↘️ 
                                        ➡️ starts 2nd driver ➡️ waits for page to load ➡️ clicks 2nd link➡️ wait for link to load ➡️ saves & scrapes 2nd page`}
                            />
                        </p>
                        <p className="mb-4 mt-8">
                            So how do you use it? Pretty simple really, by using
                            the keyword <code> "async" </code>
                            when defining a function, we are able to transform
                            this function into, well, into an async function.
                            This actually has some pretty major changes under
                            the hood. Let's try making a simple async function.
                        </p>

                        <pre>
                            <CodeBlock
                                language="Python"
                                theme={dracula}
                                text={`async def add_one(num:int) -> int: 
    return num + 1`}
                            ></CodeBlock>
                        </pre>
                        <p className="mb-4">
                            If you try to run this function, however, you might
                            not get what you expected...
                            <CodeBlock
                                language="Python"
                                theme={dracula}
                                text={`print(add_one(1)) # --> returns: <coroutine object add_one at 0x100a53400> `}
                            />
                            Hmmm, that's odd. Last I checked, 1+1 == 2? What's
                            going on is that an async function is treated as
                            something called a <code>"Coroutine"</code>. A
                            coroutine is essentially a function that can be
                            paused and resumed. Unlike a regular function,
                            simply calling it won't cause it to run and return a
                            result. Instead, it needs to be handled within a{" "}
                            <code>"Task"</code>.
                        </p>

                        <p className="mb-4">
                            There are several ways to handle tasks,{" "}
                            <code>asyncio.TaskGroup()</code>,{" "}
                            <code>asyncio.Gather()</code>, or other custom
                            asynchronous group handlers (if you really want to
                            dig into that) but the simplest way to manage a
                            single coroutine is to use{" "}
                            <code>asyncio.run()</code>
                        </p>

                        <p className="mb-4">
                            Unfortunately, this won't quite work for our
                            function just yet. Although it is indeed an async
                            function, an async function needs to have an{" "}
                            <code>awaitable</code>, something that is waited on
                            (Yeah, this is an awful definition.{" "}
                            <a
                                className={styles.link + colours.linkOnSmalt}
                                href="https://docs.python.org/3/library/asyncio-task.html#asyncio-awaitables"
                            >
                                It's also the official one...
                            </a>
                            ). For this example, we'll use{" "}
                            <code>asyncio.sleep()</code> to simulate an action
                            that takes time to resolve, such as fetching data
                            from a webpage. Importantly, we need to wait for
                            this action to finish before we return a result. We
                            declare where this waiting step will be with the{" "}
                            <code>await</code> keyword. Going back to our
                            add_one() function:
                        </p>

                        <p className="mb-4">
                            <CodeBlock
                                language="Python"
                                theme={dracula}
                                text={`import asyncio

async def add_one(num:int) -> int:
    await asyncio.sleep(1) # Sleeps for 1 second
    return num + 1

result = asyncio.run(add_one(1)) # -> returns 2
print(result) # -> 2`}
                            />
                        </p>

                        <p className="mb-4">
                            While this is all well and good, running a single
                            async function doesn't really showcase the
                            advantages of this system. Let's use one of those
                            other Task-handling methods I mentioned earlier:{" "}
                            <a
                                href="https://docs.python.org/3/library/asyncio-task.html#asyncio.TaskGroup"
                                className={styles.link + colours.linkOnSmalt}
                            >
                                <code>asyncio.TaskGroup()</code>
                            </a>
                            . By using this, we can run several coroutines at
                            once!
                        </p>

                        <p className="mb-4">
                            <code>asyncio.Taskgroup </code>
                            implicitly <code> awaits </code> its results, so it
                            must also be inside an async function, like so:
                        </p>

                        <p className="mb-4">
                            <CodeBlock
                                language="Python"
                                theme={dracula}
                                text={`async def run_together_async() -> list[int]:
    async with asyncio.TaskGroup() as tg:
        tasks = [tg.create_task(add_one_async(i)) for i in range(1, 6)]
    return [task.result() for task in tasks]`}
                            />
                            <p className="mb-4 text-base text-orange-peel-300">
                                Note that to get the results of our tasks, we
                                must call <code>task.result()</code>.
                            </p>
                        </p>

                        <p className="mb-4">
                            With this, we are now ready to see the advantage of
                            asyncio vs synchronous code. For better comparison,
                            let's start by making a non-async version of our
                            function, as well as adding a little timer to our
                            code so we can clearly see the time differences
                            between the two.
                        </p>

                        <p className="mb-4">
                            <CodeBlock
                                language="Python"
                                theme={dracula}
                                text={`import time


# This is the synchronous version of our function
def add_one_sync(num: int) -> int:
    print(f"adding 1 to %i " % num)
    time.sleep(1)  # keeping our 1 second simulated delay
    return num + 1


sync_start_time = time.time()
result = [add_one_sync(i) for i in range(1,6)]

print(result)  # -> [2, 3, 4, 5, 6]
sync_finish_time = time.time() - sync_start_time
print(f"Time taken to run synchronously: %.2f" % sync_finish_time)  # -> ~5.01 seconds`}
                            />
                        </p>

                        <p className="mb-4">
                            As you can see, each iteration takes 1 second, for a
                            total of 5 seconds. Now, let's try our asynchronous
                            approach:
                        </p>

                        <p className="mb-4">
                            <CodeBlock
                                language="Python"
                                theme={dracula}
                                text={`import asyncio
import time

# async version of our function
async def add_one_async(num: int) -> int:
    print(f"adding 1 to %i " % num)
    await asyncio.sleep(1)  # keeping our 1 second simulated delay
    return num + 1


# task-handling methods are implicitly awaited,
# hence, they must be inside an async function of their own.
async def run_together_async() -> list[int]:
    async with asyncio.TaskGroup() as tg:
        tasks = [tg.create_task(add_one_async(i)) for i in range(1, 6)]
    return [task.result() for task in tasks]


async_start_time = time.time()
async_result = asyncio.run(run_together_async())

print(async_result)  # -> [2, 3, 4, 5, 6]
async_finish_time = time.time() - async_start_time
print(f"Time taken to run asynchronously: %.2f" % async_finish_time)  # -> 1 second!!!`}
                            />
                        </p>

                        <p className="mb-4">
                            Wow, would you look at that! Instead of taking 5
                            seconds to run, our code was able to run in just 1
                            second. What is happening is that when a task
                            reaches an<code> await </code> statement within a
                            coroutine, the taskgroup begins the next task. After
                            reaching an <code> await </code> statement in the
                            next task, it first checks back in on the first task
                            to make sure it hasn't resolved yet, before
                            continuing on with the next task in the TaskGroup.
                            In this way, while we wait for that first 1 second,
                            we can start each other task, so that they are all
                            waiting together at (almost) the same time.
                        </p>
                        <p className="mb-4">
                            Good luck, and have fun with using asyncio in your future projects!
                        </p>
                    </article>
                </div>
            </NonJaggedSection>
        </div>
    );
}
