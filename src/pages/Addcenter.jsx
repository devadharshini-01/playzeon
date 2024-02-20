import { Breadcrumb, Card, Col, Form, FormCheck, Row ,Button} from "react-bootstrap";
import Formcontrol from "../component/custom/Formcontrol";
import Phonenumber from "../component/custom/Phonenumber";
import Header from "../component/layout/Header";
import Sidebar from "../component/layout/Sidebar";
import { Icon } from "@iconify/react";
import TimePicker from 'react-bootstrap-time-picker';

const addcenter = ({ active, setActive }) => {
  return (
    <>
      <Header />

      <Row>
        <Col md={2} lg={2}>
          <Sidebar />
        </Col>
        <Col>
          <div className="vh-100">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item >Location</Breadcrumb.Item>

                <Breadcrumb.Item active>Add location</Breadcrumb.Item>
              </Breadcrumb>
              <hr></hr>
              <Card className="w-100 border-0 p-4">
                <Formcontrol label="Name :" type="text" 
                 className={"nameinput"}/>
                <FormCheck
                  id="myCheckbox"
                  label="Display this name to playeon users"
                 
                />
                <div className="mt-4">
                <p>Address&timing</p> 
                <hr></hr>
                </div>
             
             
                <Row>
                  <Col md={5} lg={5}>
                    <Formcontrol label="street :" type="text" 
                   />
                  </Col>
                  <Col md={7} lg={7}>
                    <Row>
                      <Col md={2} lg={2}>
                        <Formcontrol label="suite :" type="text" />
                      </Col>
                      <Col md={3} lg={3}>
                        <Formcontrol label="city :" type="text" />
                      </Col>
                      <Col md={3} lg={3}>
                        <Formcontrol label="state :" type="text" />
                      </Col>
                      <Col md={3} lg={3}>
                        <Formcontrol label="zip :" type="text" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col md={5} lg={5}>
                    <Phonenumber label="Phonenumber" type="text"   />
                  </Col>
                  <Col md={5} lg={5}>
                    <Formcontrol label="Email :" type="text"  />
                  </Col>
                </Row>
                <div className="mt-2">
                Business hours
                </div>
            
              
       {/* <Row>
      <Col md={7} lg={7}>
        <Form>
          <Row>
            <Col>
              <FormCheck id="myCheckbox1" label="Sun" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox2" label="Mon" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox3" label="Tue" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox4" label="Wed" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox5" label="Thu" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox6" label="Fri" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox7" label="Sat" />
            </Col>
          </Row>
        </Form>
      </Col>
      <Col md={5} lg={5}>
        <Row>
          <Col md={4} lg={4}>
          <Form.Control 
           icon="fa:clock-o" width="10" height="10" 
       />
          </Col>
          <Col md={4} lg={4}>
          <Form.Control 
       />
      
          </Col>
        </Row>
        
        
      </Col>
      
    </Row> */}
      <Row>
      <Col md={7} lg={7}>
        <Form>
          <Row className="p-1">
            <Col>
              <FormCheck id="myCheckbox1" label="Sun" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox2" label="Mon" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox3" label="Tue" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox4" label="Wed" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox5" label="Thu" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox6" label="Fri" />
            </Col>
            <Col>
              <FormCheck id="myCheckbox7" label="Sat" />
            </Col>
          </Row>
        </Form>
      </Col>
      <Col md={5} lg={5}>
        <Row>
          <Col md={6} lg={6}>
          <Row>
          <Col md={6} lg={6}>
      
          </Col>
          <Col md={6} lg={6}>
     
     
      
          </Col>
        </Row>
          </Col>
          <Col md={6} lg={6}>
          <button type="button" className="no-border">Add</button>
          </Col>
        </Row>
      </Col>
    </Row>
    Upload images & videos
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default addcenter;
