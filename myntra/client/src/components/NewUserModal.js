import React, {useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const NewUserModal = ({ closeModal, addUser }) => {
    

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        addUser({id, name, pass})
        setId('')
        setName('')
        setPass('')
    }



    return (
        <>
            <Modal.Header closeButton>Create User</Modal.Header>
            <Modal.Body>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type='email'
                        value={id} 
                        onChange={(e)=>setId(e.target.value)} required />
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text'
                        value={name}
                        onChange={(e)=>setName(e.target.value)} required />
                        <Form.Label>Enter your Myntra Password</Form.Label>
                        <Form.Control type='password' 
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)} required />
                    </Form.Group>
                    <Button type = 'submit'>Add User</Button>
                </Form>
            </Modal.Body>
        </>
    )
}

export default NewUserModal
