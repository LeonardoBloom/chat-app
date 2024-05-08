import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';


const SearchInput = () => {

    const [search, setSearch] = useState("")
    const { setSelectedConversation }= useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!search) return;
        if(search.length < 3) {
            return toast.error("Search must be at least 3 characterss long")
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
        // TODO: Search algorithm that filters on each keystroke

        if(conversation) {
            setSelectedConversation(conversation)
            setSearch('')
        } else toast.error("Sorry, this user could not be found")
    } 

    return (
        <form className='flex items-center gap-2'
        onSubmit={handleSubmit}>
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