import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' 
            className='input input-bordered rounded-full input-ghost input-secondary h-10 w-full focus:bg-transparent placeholder-gray-300 focus:text-white' />
            <button type='submit' className='btn btn-circle bg-pink-500 text-white border-none'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

// input input-ghost input-secondary h-10 w-full focus:bg-transparent text-white placeholder-gray-300

export default SearchInput