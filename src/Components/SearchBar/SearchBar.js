import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = event => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <div className='search-bar'>
      <form>
        <div class='max-w-xl'>
          <div class='flex space-x-4'>
            <div class='flex shadow-md rounded-md overflow-hidden w-full'>
              <input
                type='text'
                name='location'
                id='location'
                value={searchTerm}
                onChange={handleSearch}
                placeholder='find your way through'
                autocomplete='given-name'
                class='w-full rounded-md rounded-r-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
              ></input>
              <button class='bg-indigo-600 text-white px-6 text-lg font-semibold py-3 rounded-r-md'>
                Search...
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
