import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import Header from "../component/layout/Header";
import Sidebar from "../component/layout/Sidebar";

const Facilites =({active,setActive})=>{
    return(
        <>
  
            <div className="overflow-hidden">
                <div className="vh-100">
                <Header/>
                <Row>
                <Col md={2} lg={2} className="vh-100">
                    <Sidebar active={active} setActive={setActive} />
                </Col>
                <Col md={10} lg={10} >
                <Breadcrumb>
           <Breadcrumb.Item>Facilites</Breadcrumb.Item>
         </Breadcrumb>
         <hr></hr>
      <Card className="">
        

      </Card>
                </Col>
                </Row>
                </div>
           
            </div>
              
      
       
        </>
    )
} 
export default Facilites;