import React from 'react'

const Sidebar = () => {
    return (
        <>

            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" class="fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2">
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1143 6.3531C18.4098 5.8823 17.5902 5.8823 16.8857 6.3531L16.8602 6.36981L7.59151 12.295C6.56733 12.9484 6 14.0759 6 15.2057V27.8641C6 29.0591 6.94389 30 8.12687 30H27.8731C29.0561 30 30 29.0591 30 27.8641V15.2057C30 14.0373 29.3819 12.9897 28.3793 12.2764L19.1398 6.36981L19.1143 6.3531ZM20.7675 3.8497C19.0609 2.71676 16.939 2.71677 15.2325 3.84971L5.97684 9.76659C5.97663 9.76672 5.97705 9.76646 5.97684 9.76659C4.04619 10.9986 3 13.1039 3 15.2057V27.8641C3 30.7089 5.27999 33 8.12687 33H27.8731C30.72 33 33 30.7089 33 27.8641V15.2057C33 12.8825 31.7476 10.9749 30.078 9.80333C30.0604 9.79095 30.0425 9.77896 30.0243 9.76735L20.7675 3.8497Z" fill="#615858" />
                                </svg>

                                <span class="ml-3 font-bold text-gray-500">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30C24.6274 30 30 24.6274 30 18C30 11.3726 24.6274 6 18 6ZM3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18ZM22.1232 13.8899L17.7525 15.3837C16.4991 15.8429 15.6953 16.7093 15.4023 17.685C15.3968 17.7032 15.391 17.7214 15.3848 17.7395L13.8897 22.1057L18.2475 20.6163C19.5009 20.1571 20.3047 19.2907 20.5977 18.315C20.6051 18.2903 20.6132 18.2658 20.6219 18.2415L21.3636 16.1666L22.1232 13.8899ZM24.7425 11.1048C25.3722 11.6768 25.6165 12.5244 25.4476 13.368C25.4354 13.4291 25.4194 13.4893 25.3997 13.5483L24.2043 17.1312L24.1939 17.1613L23.4589 19.2174C22.8475 21.2046 21.2726 22.7091 19.2593 23.4405L19.2322 23.4501L13.5543 25.3908C13.5143 25.4045 13.4737 25.4164 13.4327 25.4267C12.6777 25.6153 11.8564 25.4391 11.2575 24.8952C10.6278 24.3232 10.3835 23.4756 10.5524 22.632C10.5654 22.5671 10.5827 22.5031 10.6041 22.4405L12.5379 16.7929C13.1471 14.8006 14.724 13.2922 16.7407 12.5595L16.7678 12.5499L22.4457 10.6092C22.4857 10.5955 22.5263 10.5836 22.5673 10.5733C23.3223 10.3847 24.1436 10.5609 24.7425 11.1048Z" fill="#615858" />
                                </svg>

                                <span class="flex-1 ml-3 whitespace-nowrap  font-bold text-gray-500">Explore</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3194 3.69401C16.9421 2.76866 18.9229 2.76866 20.5456 3.69401C20.5578 3.70095 20.5699 3.70808 20.5818 3.71541L28.9352 8.83224C30.5835 9.78156 31.5 11.4968 31.5 13.358V22.7806C31.5 24.5802 30.6295 26.3431 29.0478 27.1815L20.7168 32.2846C20.7049 32.2919 20.6928 32.2991 20.6806 32.306C19.0579 33.2313 17.0771 33.2313 15.4544 32.306C15.4422 32.2991 15.4301 32.2919 15.4182 32.2846L7.06478 27.1677C5.41643 26.2184 4.5 24.5032 4.5 22.642V13.358C4.5 11.4985 5.41476 9.78472 7.06027 8.83486L15.2749 3.72054C15.2895 3.71141 15.3044 3.70256 15.3194 3.69401ZM16.6509 6.10519L8.44013 11.2171C8.42546 11.2262 8.41062 11.2351 8.39562 11.2436C7.6263 11.6823 7.2 12.4551 7.2 13.358V22.642C7.2 23.5449 7.6263 24.3177 8.39562 24.7564C8.40779 24.7633 8.41986 24.7704 8.43182 24.7778L16.7821 29.8927C17.5808 30.3406 18.5542 30.3406 19.3529 29.8927L27.7032 24.7778C27.7319 24.7602 27.7613 24.7436 27.7913 24.7283C28.3386 24.4474 28.8 23.7338 28.8 22.7806V13.358C28.8 12.4551 28.3737 11.6823 27.6044 11.2436C27.5922 11.2367 27.5801 11.2296 27.5682 11.2222L19.218 6.10733C18.4205 5.66009 17.4489 5.65938 16.6509 6.10519ZM18 15.1594C16.4343 15.1594 15.165 16.4622 15.165 18.0693C15.165 19.6764 16.4343 20.9792 18 20.9792C19.5657 20.9792 20.835 19.6764 20.835 18.0693C20.835 16.4622 19.5657 15.1594 18 15.1594ZM12.465 18.0693C12.465 14.9316 14.9431 12.388 18 12.388C21.0569 12.388 23.535 14.9316 23.535 18.0693C23.535 21.207 21.0569 23.7506 18 23.7506C14.9431 23.7506 12.465 21.207 12.465 18.0693Z" fill="#615858" />
                                </svg>

                                <span class="flex-1 ml-3 whitespace-nowrap  font-bold text-gray-500">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#615858" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 17L21 12L16 7" stroke="#615858" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 12H9" stroke="#615858" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span class="flex-1 ml-3 whitespace-nowrap  font-bold text-gray-500">Log out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            

        </>
    )
}

export default Sidebar