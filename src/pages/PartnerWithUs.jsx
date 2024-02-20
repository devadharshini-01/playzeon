import { Button } from "react-bootstrap";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

const PartnerWithUs=()=>{
    return(
        <>
        <div className="homebanner ">
        <Card className="card p-4 h-75 b-0 cardcolor">
         <p><span><Icon className="mb-1 mb-1 font-color" icon="material-symbols:error-outline" width="20" height="20" /></span>Please full this short form and our team will get in touch with you shortly</p>
         <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Organization name</Form.Label>
                <Form.Control
                  className="box-showdow "
                  type="email"
                 
                />
              </Form.Group>
             <Row>
                <Col>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First name</Form.Label>
                <Form.Control
                  className="box-showdow "
                  type="email"
                 
                />
              </Form.Group>
                </Col>
                <Col>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  className="box-showdow "
                  type="email"
                 
                />
              </Form.Group>
                </Col>
             </Row>
             <Row className="mt-3">
                <Col>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  className="box-showdow "
                  type="email"
                 
                />
              </Form.Group>
                </Col>
                <Col>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="box-showdow "
                  type="email"
                 
                />
              </Form.Group></Col>
             </Row>
        </Form>
        <Button className="w-100 text-white signin p-0 mt-2 " variant="btn">
                <p className="mt-2">Sign in</p>
              </Button>
        </Card>
      </div>
     
   
        </>
    )
}
export default PartnerWithUs;