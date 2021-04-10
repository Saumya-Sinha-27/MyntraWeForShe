import React from 'react'
import {Navbar, Nav, Button, Dropdown, ListGroup,
     ButtonGroup, Popover, OverlayTrigger} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import {IoIosSettings} from 'react-icons/io'
import {FiShare} from 'react-icons/fi'
import {GrCheckbox} from 'react-icons/gr'
import {Link} from 'react-router-dom'

const BNavbar = () => {
    return (
        <div>
          <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Share on your own ease</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Cart"><FaShoppingCart style=
      {{width:"50px", height:"30px"}} /></Nav.Link>
      <Nav.Link href="/Wishlist"><FaRegHeart style=
      {{width:"50px", height:"30px"}}/></Nav.Link>
      <Nav.Link href="/Share"><FiShare style=
      {{width:"50px", height:"30px"}} /></Nav.Link>
      <Nav.Link href="#pricing">
      <OverlayTrigger
      trigger="click"
      overlay={
        <Popover id={'popover-positioned-top'}>
          <Popover.Title as="h3">{'Explore your Options'}</Popover.Title>
          <Popover.Content>
          <ListGroup>
            <ListGroup.Item>Go Public <GrCheckbox/></ListGroup.Item>
            <ListGroup.Item>Blocked Contacts</ListGroup.Item>
            <ListGroup.Item>Find More Friends</ListGroup.Item>
            <ListGroup.Item>Frequently Bought</ListGroup.Item>
            </ListGroup>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="primary">Settings <IoIosSettings/></Button>
    </OverlayTrigger>
        </Nav.Link>
    </Nav>
  </Navbar>
        </div>
    )
}

export default BNavbar
