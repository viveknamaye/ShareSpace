import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

const GroupDetails = () => {
  return (
    <>
        <Sidebar />
        <div class="p-4 sm:ml-64 mt-16">
                <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                    <a className='flex items-center gap-2 mb-4' href="">
                        <span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="#615858" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <span className='font-bold text-gray-500'>Back</span>
                    </a>
                    <div className='flex gap-4 justify-between items-center'>

                        <div>
                            image
                        </div>

                        <div>
                            info
                        </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default GroupDetails