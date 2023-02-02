import React from 'react'

const Landing = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Find your perfect <span className='text-blue-600'>PG</span> & <span className='text-blue-600'>roommate</span>, effortlessly.</h1>
                    <p class="max-w-md mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Say goodbye to the hassle of finding a PG and a compatible roommate</p>
                        <form>
                            <div class="max-w-xl">
                                <div class="flex space-x-4">
                                    <div class="flex shadow-md rounded-md overflow-hidden w-full">
                                        {/* <input type="text" class="w-full shadow-sm rounded-md rounded-r-none border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" /> */}
                                        <input type="text" name="location" id="location" autocomplete="given-name" class="w-full rounded-md rounded-r-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></input>
                                        <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-3 rounded-r-md">Search...</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="" alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Landing