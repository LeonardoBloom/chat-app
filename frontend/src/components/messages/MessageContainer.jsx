import React from 'react'
import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useEffect } from 'react'

const MessageContainer = ({username}) => {

    const {selectedConversation, setSelectedConversation} = useConversation()

    useEffect(() => {
        // cleanup
        return () => setSelectedConversation(null)
    },[setSelectedConversation])

    return (
        <div className='md: min-w-[500px] flex flex-col'>
        {!selectedConversation ? (
            <NoChatSelected 
                username={username}
            /> 
        ) : (
            <>
                {/* HEADER */}
                <div className='bg-pink-500 px-4 py-2 mb-2'>
                    <span className='label-text text-pink-100'>To: </span>
                    <span className='text-pink-50 font-bold'>{selectedConversation.username} <span className='text-pink-300'>({selectedConversation.fullName})</span></span>
                </div>

                <Messages />
                <MessageInput />

            </>
        )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = ({username}) => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col
            items-center gap-2'>
                <p> Welcome <span className='text-pink-400' >{username}</span> 😼 *uwu*</p>
                <p> Select a NyanChat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}