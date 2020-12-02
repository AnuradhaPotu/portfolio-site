import {Navbar,Nav} from 'react-bootstrap'
import React,{useState} from 'react'
import "./mynavbar.style.css";

const MyNavBar = () => {
  const [expanded, setExpanded] = useState(false);
    return(
        <div>
        <Navbar
          fixed="top"
          variant="dark"
          expand="md"
          className="animate-navbar nav-theme justify-content-between"
          expanded={expanded}
        >
          <div>
            <Navbar.Brand href="#home">
             My Portfolio
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto " >
                <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
                <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
                <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
                 <Nav.Link href="#timeline" onClick={() => setExpanded(false)}>Experience</Nav.Link>
                <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  };
    


export default MyNavBar;