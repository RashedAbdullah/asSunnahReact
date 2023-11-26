import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
// import { BsBrightnessHighFill } from "react-icons/bs";


function Header() {
  return (
    <Navbar expand="lg" className="bgColor p-2">
      <Container fluid>
        <Navbar.Brand className='text-white' href="#">Abdul Ahad Rashed</Navbar.Brand>
        <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            id='displayNone'
            style={{ maxHeight: '100vh' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-white' href="#action2">Projects</Nav.Link>
            <Nav.Link className='text-white' href="#action2">Blogs</Nav.Link>
            <Nav.Link className='text-white' href="#action2">Contact</Nav.Link>
            <Nav.Link className='text-white' href="#action2">About me</Nav.Link>

            {/* <NavDropdown className='text-white' title="Show" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
          <div className='Langs'>
            <div className='en'><p>English</p></div>
            <div className='ar'><p>العربية</p></div>
          </div>
          {/* <div className='lightMode'><BsBrightnessHighFill /></div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;