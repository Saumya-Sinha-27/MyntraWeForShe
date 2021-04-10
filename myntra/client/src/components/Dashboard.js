import React from 'react'
import Sidebar from './Sidebar'
import OpenConversation from './OpenConversation';
import { useConversations } from './context/ConversationsProvider';
import Trending from './Trending';
import BNavbar from './BNavbar'


const Dashboard = ({ id }) => {

    const { selectedConversation } = useConversations()


    return (
        <>
        <div className="d-flex" 
        style={{ height: '94.5vh' }}>
           <Sidebar id={id} />
           {selectedConversation && <OpenConversation />}
           <Trending />
          
        </div>

        <BNavbar className='mt-10' />
        </>
    )
}

export default Dashboard
