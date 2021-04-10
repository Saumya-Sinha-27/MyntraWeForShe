
import React, { useRef, useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import NewUserModal from './NewUserModal'


const Login = ({ onIdSubmit, addUser }) => {

    const [id, setId] = useState('saumyavib2018@gmail.com')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
       onIdSubmit({id, pass})
    }

    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div class="parent clearfix">
            <div class="bg-illustration">
            <div class="burger-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        <div class="login">
            <div class="container">
            <h1><img src="/images/MyntraLogo.PNG" /></h1>
            <h1>Wanna Shop with your friends?</h1>
            <div class="login-form">
           <Form onSubmit={handleSubmit}>
               <Form.Group>
                   <Form.Label>Email ID</Form.Label>
                   <Form.Control type='email' 
                   value={id}
                   onChange={(e)=>setId(e.target.value)} required>
                   </Form.Control>
                   <Form.Label>Password</Form.Label>
                   <Form.Control type='password' 
                   value={pass}
                   onChange={(e)=>setPass(e.target.value)} required>
                   </Form.Control>
               </Form.Group>
               <Button type='submit'
               className='mr-2'>Login</Button>
               <Button variant='secondary'
               onClick={()=>setModalOpen(true)}>Sign Up</Button>
           </Form>
           </div>

            <Modal show={modalOpen} onHide={closeModal}>
                <NewUserModal closeModal={closeModal} addUser={addUser} />
            </Modal>
            </div>

        </div>
        </div>
    )
}

export default Login
