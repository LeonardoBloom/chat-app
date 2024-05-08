import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {

    const chatUser = localStorage.getItem("chat-user")
    const loggedUser = JSON.parse(chatUser)
    const username = loggedUser.username
    return (
        <div className='flex sm:h-[450px] md:h-[650px] rounded-xl overflow-hidden bg-gray-400
        bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer 
            username = {username}
            />
            
        </div>
    )
}

export default Home