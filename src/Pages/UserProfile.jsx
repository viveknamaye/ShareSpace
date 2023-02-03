import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

const UserProfile = () => {
  return (
    <>
        <Sidebar />
            <div class="p-4 sm:ml-64 mt-16">
                <div class="w-full max-w-5xl p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">

                    <div className="flex gap-4 justify-between items-start">

                        <aside id="default-sidebar" class="relative top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                            <div class="h-full px-3 py-4 overflow-y-auto border-r-2 dark:bg-gray-800">
                                <ul class="space-y-2">
                                    <li>
                                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9997 2.33331C7.58301 2.33331 2.33301 7.58331 2.33301 14C2.33301 20.4166 7.58301 25.6666 13.9997 25.6666C20.4163 25.6666 25.6663 20.4166 25.6663 14C25.6663 7.58331 20.4163 2.33331 13.9997 2.33331ZM13.9997 23.3333C8.86634 23.3333 4.66634 19.1333 4.66634 14C4.66634 8.86665 8.86634 4.66665 13.9997 4.66665C19.133 4.66665 23.333 8.86665 23.333 14C23.333 19.1333 19.133 23.3333 13.9997 23.3333Z" fill="#615858" />
                                                <path d="M20.4177 17.9666C19.6011 17.15 18.6677 16.5666 17.6177 16.1C18.4344 15.1666 19.0177 14 19.0177 12.6C19.0177 9.79998 16.8011 7.58331 14.0011 7.58331C11.2011 7.58331 8.98439 9.79998 8.98439 12.6C8.98439 14 9.56772 15.1666 10.3844 16.1C9.33439 16.5666 8.40106 17.15 7.58438 17.9666C7.11771 18.4333 7.11771 19.1333 7.58438 19.6C7.81772 19.8333 8.16772 19.95 8.40106 19.95C8.75106 19.95 8.98439 19.8333 9.21772 19.6C10.5011 18.3166 12.1344 17.6166 14.0011 17.6166C15.7511 17.6166 17.5011 18.3166 18.7844 19.6C19.2511 20.0666 19.9511 20.0666 20.4177 19.6C20.8844 19.1333 20.8844 18.4333 20.4177 17.9666ZM11.3177 12.6C11.3177 11.0833 12.4844 9.91665 14.0011 9.91665C15.5177 9.91665 16.6844 11.0833 16.6844 12.6C16.6844 14.1166 15.5177 15.2833 14.0011 15.2833C12.4844 15.2833 11.3177 14.1166 11.3177 12.6Z" fill="#615858" />
                                            </svg>



                                            <span class="ml-3 font-bold text-gray-500">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 8C17 6.4087 16.3679 4.88258 15.2426 3.75736C14.1174 2.63214 12.5913 2 11 2C9.4087 2 7.88258 2.63214 6.75736 3.75736C5.63214 4.88258 5 6.4087 5 8C5 15 2 17 2 17H20C20 17 17 15 17 8Z" stroke="#615858" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.73 21C12.5542 21.3031 12.3019 21.5547 11.9982 21.7295C11.6946 21.9044 11.3504 21.9965 11 21.9965C10.6496 21.9965 10.3054 21.9044 10.0018 21.7295C9.69818 21.5547 9.44583 21.3031 9.27002 21" stroke="#615858" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>



                                            <span class="flex-1 ml-3 whitespace-nowrap font-bold text-gray-500">My Notifications</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>


                        <form onSubmit={null} className="w-full md:w-3/4">
                            <div className='mb-2 text-sm uppercase text-center p-2 font-bold text-slate-500'>Complete/Update your profile</div>

                            <div className="flex items-center gap-4 justify-between">
                                <div className='mb-2 w-1/2'>
                                    <label className="block text-sm font-medium mb-1" htmlFor="challengetitle">First Name <span className='text-red-500'>*</span></label>
                                    <input value={'Akshay'} id="challengetitle" className="w-full text-sm  border rounded-sm py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-400" type="text" required autoComplete="on" />
                                </div>
                                <div className='mb-2 w-1/2'>
                                    <label className="block text-sm font-medium mb-1" htmlFor="days">Last Name <span className='text-red-500'>*</span></label>
                                    <input value={'Kanade'} id="days" className="w-full text-sm border rounded-sm py-2 px-2 shadow-sm  focus:border-indigo-500 focus:ring-indigo-400" type="text" required autoComplete="on" />
                                </div>
                            </div>

                            <div className='mb-2 w-1/2'>
                                <label className="block text-sm font-medium mb-1" htmlFor="challengetitle">Street Name <span className='text-red-500'>*</span></label>
                                <input id="challengetitle" value={'Road no.01, Main road'} className="w-full text-sm  border rounded-sm py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-400" type="text" required autoComplete="on" />
                            </div>

                            <div className="flex items-center gap-4 justify-between">
                                <div className='mb-2 w-1/2'>
                                    <label className="block text-sm font-medium mb-1" htmlFor="challengetitle">City <span className='text-red-500'>*</span></label>
                                    <input id="challengetitle" value={'Mumbai'} className="w-full text-sm  border rounded-sm py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-400" type="text" required autoComplete="on" />
                                </div>
                                <div className='mb-2 w-1/2'>
                                    <label className="block text-sm font-medium mb-1" htmlFor="challengetitle">State <span className='text-red-500'>*</span></label>
                                    <input id="challengetitle" value={'Maharashtra'} className="w-full text-sm  border rounded-sm py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-400" type="text" required autoComplete="on" />
                                </div>
                                <div className='mb-2 w-1/2'>
                                    <label className="block text-sm font-medium mb-1" htmlFor="challengetitle">Pincode <span className='text-red-500'>*</span></label>
                                    <input id="challengetitle" value={400089} className="w-full text-sm  border rounded-sm py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-400" type="text" required autoComplete="on" />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 justify-between">
                                <div className='mb-2 w-1/2'>
                                    <label className="block text-sm font-medium mb-1" htmlFor="challengetitle">Mobile Number <span className='text-red-500'>*</span></label>
                                    <input id="challengetitle" value={8850030844} className="w-full text-sm  border rounded-sm py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-400" type="number" required autoComplete="on" />
                                </div>
                                <div className='mb-2 w-1/2'>
                                    <label className="block text-sm font-medium mb-1" htmlFor="challengetitle">Occupation <span className='text-red-500'>*</span></label>
                                    <input id="challengetitle" value={'Student'} className="w-full text-sm  border rounded-sm py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-400" type="text" required autoComplete="on" />
                                </div>
                                <div class="w-1/2 mb-2">
                                    <label for="country" class="block text-sm font-medium text-gray-400">Gender</label>
                                    <select id="country" name="country" value={'Male'}  autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>


                            <div className="w-full lg:w-6/12 mb-3">
                                <div className="block text-sm font-medium mb-1 text-slate-400">
                                    Smoking
                                </div>
                                <div className="w-full flex items-center justify-between gap-2">
                                    {/* <div onChange={(e) => setData({ ...data, mask: e.target.value })}> */}
                                    {/* <label className="inline-flex items-center"> */}
                                    {/* <input type="radio" name="mask" value="1" required checked={data.mask === "1" ? true : false} /><span className="ml-2">Yes</span> */}
                                    {/* <input type="radio" name="mask" value="1" required /><span className="ml-2">Yes</span> */}
                                    {/* </label> */}
                                    <div class="w-1/2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                    </div>
                                    {/* <label className="ml-6 inline-flex items-center"> */}
                                    {/* <input type="radio" name="mask" value="0" required checked={data.mask === "0" ? true : false} /><span className="ml-2">No</span> */}
                                    {/* <input type="radio" name="mask" value="0" required /><span className="ml-2">No</span> */}
                                    {/* </label> */}
                                    <div class="w-1/2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-radio-1" type="radio" value="" checked name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 mb-3">
                                <div className="block text-sm font-medium mb-1 text-slate-400">
                                    Drinking
                                </div>
                                <div className="w-full flex items-center justify-between gap-2">
                                    {/* <div onChange={(e) => setData({ ...data, mask: e.target.value })}> */}
                                    {/* <label className="inline-flex items-center"> */}
                                    {/* <input type="radio" name="mask" value="1" required checked={data.mask === "1" ? true : false} /><span className="ml-2">Yes</span> */}
                                    {/* <input type="radio" name="mask" value="1" required /><span className="ml-2">Yes</span> */}
                                    {/* </label> */}
                                    <div class="w-1/2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-radio-2" type="radio" value="" name="bordered-radio-2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                    </div>
                                    {/* <label className="ml-6 inline-flex items-center"> */}
                                    {/* <input type="radio" name="mask" value="0" required checked={data.mask === "0" ? true : false} /><span className="ml-2">No</span> */}
                                    {/* <input type="radio" name="mask" value="0" required /><span className="ml-2">No</span> */}
                                    {/* </label> */}
                                    <div class="w-1/2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input id="bordered-radio-2" type="radio" value="" checked name="bordered-radio-2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                    </div>
                                </div>
                            </div>



                            <div className='mb-2'>
                                <label class="block text-sm font-medium mb-1" htmlFor="affirmation">Bio <span class="text-red-500">*</span></label>
                                <textarea id="affirmation" value={'A BE final year student.'} class="px-2 py-2 w-full text-sm border rounded-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows="4" required></textarea>
                            </div>


                            <div className="mt-2">
                                <div className='flex items-center justify-end'>
                                    <button className="flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700" type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>


            </div>
    </>
  )
}

export default UserProfile