import React from 'react'
import { getRandomEmoji } from '../../utils/emojis'
import useGetConversations from '../../hooks/useGetConversations'
import Conversation from './Conversation'



const Conversations = () => {

    const {loading, conversations} = useGetConversations()

    console.log("Conversations", conversations)
    
    // const audio = new Audio('../../../public/audio/login.mp3')
    // audio.volume = 0.3

    // function audioPlay() {
    //     audio.play()
    // }
    

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIndex={ idx === conversations.length - 1}
                />
            ))}

            {/* {loading ? <span className="loading loading-spinner mx-auto"></span> : null }  */}
            {loading ? (
                <span className="loading loading-spinner mx-auto"></span>
                ) : 
                    null
                    } 
        </div>
    )
}

export default Conversations