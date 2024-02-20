import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap"
import logo from "../../assets/images/Athlitik_White_New.svg";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from "@iconify/react";
const Header =()=>{
    const navigate=useNavigate()
    return(
        <>
  <Navbar className="bg-dark" variant="dark" expand="lg">
  <img className="ms-2  "  src={logo}></img>
        <Container >
          <Navbar.Toggle aria-controls="navbar-dark-example " />
          <p className="text-white ms-5 ">ABC Sports Organization</p>
          <Navbar.Collapse
            className="justify-content-end"
            id="navbar-dark-example "
          >
            <Nav>
              <span>
              <Icon className="text-white" icon="flowbite:user-solid" width="30" height="30"  />
              </span>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Admin"
                className="text-white"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  onClick={() => navigate("CenterInfo")}
               
                >
                  Center info
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/")}
              
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          {/*   */}
     


{/* 
<Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
    Devadharshini
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Center info</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
   
   
        
          
         
        
     

      
  
        </>
    )
}
export default Header