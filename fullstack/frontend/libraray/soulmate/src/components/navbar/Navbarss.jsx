import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

function Navbarss() {
  const myval=useSelector((state)=>state.changeNamber)
    return (
        <>
        <Navbar bg="warning" expand="lg">
  <Container>
    <Navbar.Brand href="#home">     React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link   to="/">{myval}</Link>    </Nav.Link>
        <Nav.Link ><Link   to="/">Home</Link>    </Nav.Link>
        <Nav.Link ><Link   to="/about">About</Link>     </Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Handflowes</NavDropdown.Item>
          <NavDropdown.Item > <Link   to="/basket">basket</Link>  </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>    
        </>
    )
}

export default Navbarss
