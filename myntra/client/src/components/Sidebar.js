import React from 'react'
import {Tab, Nav, Button, Modal} from 'react-bootstrap'
import {useState} from 'react'
import Conversation from './Conversation'
import Addfriend from './Addfriend'
import NewConversationModal from './NewConversationModal'
import NewAddModal from './NewAddModal'

const CONVERSATIONS_KEY = 'conversations'
const ADD_KEY = 'add'

const Sidebar = ({ id }) => {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    const [modalOpen, setModalOpen] = useState(false)
    function closeModal() {
        setModalOpen(false)
      }

    return (
        <div style={{ width: '250px ', backgroundColor:'#F2D2BD'}}
        className="d-flex flex-column">
            <Tab.Container activeKey={activeKey}
            onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>
                            Conversations
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={ADD_KEY}>
                            Add Friend
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            <Tab.Content className="border-right overflow-auto flex-grow-1">
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversation />
                </Tab.Pane>
                <Tab.Pane eventKey={ADD_KEY}>
                    <Addfriend />
                </Tab.Pane>
            </Tab.Content>
            <div className="p-2 border-top border-right small">
            Your Id: <span className="text-muted">{id}</span>
            </div>
            <Button onClick={() => setModalOpen(true)} className="rounded-0">
            New {conversationsOpen ? 'Conversation' : 'Contact'}
            </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                <NewConversationModal closeModal={closeModal} /> :
                <NewAddModal closeModal={closeModal} />
                }
            </Modal>
        </div>
    )
}

export default Sidebar
