import { Breadcrumb, Card, Col, Form, FormCheck, Row ,Button, FormSelect} from "react-bootstrap";
import Formcontrol from "../component/custom/Formcontrol";
import Phonenumber from "../component/custom/Phonenumber";
import Header from "../component/layout/Header";
import Sidebar from "../component/layout/Sidebar";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import Formselect from "../component/custom/Select";
import {useSelector, useDispatch } from "react-redux";
import { CenterAction } from "../redux/action/CenterAction";
import logo from "../assets/images/addbanner.svg"; 
import picture from "../assets/images/addimage.svg";

const Addcenter = ({ active, setActive }) => {
  const [startDate, setStartDate] = useState(new Date());
 
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(CenterAction())
},[])
   
 const data = useSelector((state)=>state.center.centergetapi)   
 console.log(data,"+++++");
  



  
  return (
    <>  
    <div className="h-100">
    <Header />
    <Col md={2} lg={2}>
          <Sidebar active={active} setActive={setActive}/>
        </Col>
    </div>
    <Row>
      
      <Col>
        <div className="h-100 overflow-hidden">
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
    <Row>
      <Col md={4} lg={4}>
      </Col>
      <Col md={4} lg={4}>
      </Col>
      <Col md={2} lg={2}>
        <Button className="bg-white border-0 text-blue "> 
        <Icon className="mb-1" icon="gridicons:add" width="15" height="15"   />
          Add
        </Button>
      </Col>
    </Row>
        {/* <DatePicker
         
    selected={startDate}
    onChange={(date) => setStartDate(date)}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    timeCaption="Time"
    dateFormat="h:mm aa"
  /> */}
      </Form>
    </Col>

  </Row>
  <b className="text-bold">Upload images</b>
<hr></hr>
<Row>
<Col md={3} lg={3}>
  <div className="text-color"><b>Banner image</b></div>
  <img className="border w-100 rounded mt-3 "  src={logo}></img>
</Col>
<Col md={2} lg={2}>
<div className="fs-13px text-color"><b >Min 800px x 600px</b></div>
  </Col>
<Col md={3} lg={3}>
<div><b className="text-color">Add more images</b></div>
<img className="border rounded  addimage" src={picture} ></img>
</Col>
<Col md={2} lg={2}>
<div><b className="text-color fs-13px">Min 300px x 300px</b></div>
</Col>
<Row/>
<Row>


 

 






</Row>
<Button variant="outline-primary  w-25 mt-3">Browse</Button>{' '}
<hr className="mt-3"></hr>
</Row>
<div className="  gap-2 d-flex justify-content-end">
                  <Button  className="border-0 bg-white text-primary">
                    Cancel
                  </Button>
                  <Button className="bg-primary border-0">

                    Save
                  </Button>
                </div>


            </Card>
          </div>
        </div>
      </Col>
    </Row>
      <div>

      </div>
     
    </>
  );
};
export default Addcenter;
