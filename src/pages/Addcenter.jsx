import { Breadcrumb, Card, Col, Form, FormCheck, Row ,Button, FormSelect} from "react-bootstrap";
import Formcontrol from "../component/custom/Formcontrol";
import Phonenumber from "../component/custom/Phonenumber";
import Header from "../component/layout/Header";
import Sidebar from "../component/layout/Sidebar";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useEffect } from "react";
import Formselect from "../component/custom/Select";
import {useSelector, useDispatch } from "react-redux";
import { CenterAction } from "../redux/action/CenterAction";
import logo from "../assets/images/addbanner.svg"; 

const Addcenter = ({ active, setActive }) => {
  
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(CenterAction())
},[])
   
 const data = useSelector((state)=>state.center.centergetapi)   
 console.log(data,"+++++");
  



  
  return (
    <>  
      <Header />

      <Row>
        <Col md={2} lg={2}>
          <Sidebar active={active} setActive={setActive}/>
        </Col>
        <Col>
          <div className="vh-100">
            <div>
              <Breadcrumb>
                <Breadcrumb.Item >Centers</Breadcrumb.Item>
                <Icon icon="radix-icons:caret-right" width="25" height="25"   />
                <Breadcrumb.Item active>Add center</Breadcrumb.Item>
              </Breadcrumb>
              <hr></hr>
              <Card className=" border-0 p-4">
                <Formcontrol label="Name :" type="text" 
                 className={"w-100px"}/>
                <FormCheck
                  id="myCheckbox"
                  label="Display this name to playeon users"
                 
                />
                <div className="mt-4">
                <b>Address & timings</b> 
                <hr></hr>
                </div>
                <Row>
                  <Col md={4} lg={4}>
                  <Formcontrol label="Street:" type="text" 
               />
                  </Col>
                <Col md={1} lg={1}>
                <Formcontrol label="Suite:" type="text" 
               />
                </Col>
                <Col md={2} lg={2}>
                <Formcontrol label="City:" type="text" 
               />
                </Col>
                <Col md={2} lg={2}>
                <Formcontrol label="State:" type="text" 
               />
                </Col>
                <Col md={2} lg={2}>
                <Formcontrol label="Zip:" type="text" 
               />
                </Col>
                </Row>
             <Row>
            <Col md={4} lg={4}>
            <Phonenumber label="phone number:"/>
            </Col>
            <Col md={4} lg={4}>
            <Formcontrol label="Email:" type="text" 
               />
            </Col>
             </Row>
             <Row>
             <Col md={4} lg={4}>
             <Formselect option="option"  
                />
             </Col>
             </Row>
          
       
          
            
                <div className="mt-2">
                Business hours
                </div>
            
              
    
      <Row>
      <Col md={7} lg={7}>
        <Form>
          <Row className="p-1">
            <Col>
              <FormCheck id="myCheckbox1" label="Sun"    />
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

    </Row>
    <div>Upload images</div>
 <hr></hr>
 <p>Banner image</p>
 <p>Min:800px x 600px</p>
 <Card >
 <img className="mt-5 mx-auto  " src={logo}></img>
 </Card>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Addcenter;
