import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap"
import logo from "../../assets/images/Athlitik_White_New.svg";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from "@iconify/react";
const Header =()=>{
    const navigate=useNavigate()
    return(
        <>
  {/* <Navbar className="bg-dark shadow " variant="dark" expand="lg">
    <Row>
      <Col>
      <img className="ms-2 headerlogo"  src={logo}></img>
      </Col>
    </Row>

        <Container >
          <Navbar.Toggle aria-controls="navbar-dark-example " />
  
           
          <p className="text-white ">ABC Sports Organization</p>
      

          <Navbar.Collapse
            className="justify-content-end "
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
      </Navbar> */}
          {/*   */}
     
          <Navbar expand="lg" className="bg-dark">
          <img className="ms-2 headerlogo"  src={logo}></img>
          <div className="text-white  fw-20px ms-2">ABC Sprots Center</div>
      <Container>
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav>
          <Navbar.Collapse
            className="justify-content-end "
            id="navbar-dark-example "
          >
            <Nav >
              <span>
       
                <Icon className="text-white mt-1" icon="ic:baseline-account-circle" width="30" height="30"  />
              </span>
              <NavDropdown
              className="text-white"
                id="nav-dropdown-dark-example"
                title={<span className="text-white ">Admin</span>}
             
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
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>


   
        
          
         
        
     

      
  
        </>
    )
}
export default Header