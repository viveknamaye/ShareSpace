// import React from 'react'

// const Feed = () => {
//   return (
//     <>
//       <Sidebar />
//       <div>Feed</div>
//     </>
//   )
// }

// export default Feed
import SearchBar from '../../Components/SearchBar/SearchBar'
import { useState } from 'react'
import './Feed.css'
import FeedCard from '../../Components/FeedCard/FeedCard'
import Sidebar from '../../Components/Sidebar/Sidebar'
export default function Feed (props) {
  const [feed, setFeed] = useState([
    {
      name: 'VRINDAVAN NIVAS',
      location: 'Bangalore, India',
      size: '2',
      rent: '23000',
      tags: ['non-smoking', 'non-drinking'],
      stars: '4'
    },
    {
      name: 'VRINDAVAN NIVAS',
      location: 'Bangalore, India',
      size: '2',
      rent: '23000',
      tags: ['non-smoking', 'non-drinking'],
      stars: '4'
    },
    {
      name: 'VRINDAVAN NIVAS',
      location: 'Bangalore, India',
      size: '2',
      rent: '23000',
      tags: ['non-smoking', 'non-drinking'],
      stars: '4'
    }
  ])
  return (
    <>
      <div className='feedpage'>
        <div className='col1'>
          <Sidebar />
        </div>
        <div className='col2'>
          <SearchBar />
          {/* <div className='searchbar'>searchbar</div> */}
          <div className='feedcontainer'>
            {feed.map(room => {
              return (
                <>
                  <FeedCard data={room} />
                </>
              )
            })}
          </div>
        </div>
        <div className='col3'>
          <div className='titlerow'>
            <p className='ftitle'>FILTERS</p>
            <div className='apply'>APPLY</div>
          </div>
          <div className='filterrow'>
            <div className='category'>RENTS</div>
            <div className='filteritem'>
              <input type='checkbox' id='2000-5000' value='rent1' />
              <label htmlFor='2000-5000'>2000-5000</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='5000-10000' value='rent2' />
              <label htmlFor='5000-10000'>5000-10000</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='10000-15000' value='rent3' />
              <label htmlFor='10000-15000'>10000-15000</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='15000-20000' value='rent4' />
              <label htmlFor='15000-20000'>15000-20000</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='20000-25000' value='rent5' />
              <label htmlFor='20000-25000'>20000-25000</label>
            </div>
          </div>
          <div className='filterrow'>
            <div className='category'>HABITS</div>
            <div className='filteritem'>
              <input type='checkbox' id='smoking' value='smoking' />
              <label htmlFor='smoking'>SMOKING</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='smoking' value='smoking' />
              <label htmlFor='smoking'>SMOKING</label>
            </div>
          </div>
          <div className='filterrow'>
            <div className='category'>ACCOMODATION</div>
            <div className='filteritem'>
              <input type='checkbox' id='acc1' value='acc1' />
              <label htmlFor='acc1'>1</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='acc2' value='acc2' />
              <label htmlFor='acc2'>2</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='acc4' value='acc4' />
              <label htmlFor='acc4'>4</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='acc6' value='acc6' />
              <label htmlFor='acc6'>6</label>
            </div>
          </div>
          <div className='filterrow'>
            <div className='category'>GENDER SPECIFIC</div>
            <div className='filteritem'>
              <input type='checkbox' id='male' value='male' />
              <label htmlFor='male'>MALE ONLY</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='female' value='female' />
              <label htmlFor='female'>FEMALE ONLY</label>
            </div>
            <div className='filteritem'>
              <input type='checkbox' id='mix' value='mix' />
              <label htmlFor='MIX'>MIX</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
