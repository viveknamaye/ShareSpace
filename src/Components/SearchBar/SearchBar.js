import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const dummyData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Smith' },
    { id: 4, name: 'Sarah Johnson' }
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Filter the dummy data based on the search term
    const results = dummyData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
    console.log(results)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
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
