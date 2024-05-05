import React from 'react'
import UserIcon from '../../../public/user.png'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={UserIcon} />
                </div>
            </div>
            <div className='chat-bubble text-white bg-pink-600'>Hey</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>12:42</div>

        </div>
    )
}

export default Message