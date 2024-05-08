import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import LoggedUser from './LoggedUser'


const Sidebar = () => {
    return (
        <div className='border-r border-dlate-500 p-4 px-8 flex flex-col'>
            <LoggedUser />
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar