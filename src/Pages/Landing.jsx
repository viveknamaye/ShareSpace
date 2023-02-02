import React from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'

const Landing = () => {
  return (
    <section class='bg-white dark:bg-gray-900'>
      <div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div class='mr-auto place-self-center lg:col-span-7'>
          <h1 class='max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            Find your perfect <span className='text-blue-600'>PG</span> &{' '}
            <span className='text-blue-600'>roommate</span>, effortlessly.
          </h1>
          <p class='max-w-md mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Say goodbye to the hassle of finding a PG and a compatible roommate
          </p>
          <SearchBar />
        </div>
        <div class='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <img src='' alt='mockup' />
        </div>
      </div>
    </section>
  )
}

export default Landing
