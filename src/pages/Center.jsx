import { Breadcrumb, Card, Col, Row, Spinner } from "react-bootstrap";
import Sidebar from "../component/layout/Sidebar";
import Header from "../component/layout/Header";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { DashboardGetAction } from "../redux/action/DashboardAPiAction";
import logo from "../assets/images/addplus.svg"; 


const Center = ({ active, setActive }) => {
  const[edit,setEdit]=useState();
  const url = edit ? "photos" : "bg-color";

  const [response, setResponse] = useState();
  const navigate = useNavigate();
  const Token = localStorage.getItem("accessToken");
  const orgid = localStorage.getItem("orgId");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.dashboardgetapi);
  useEffect(() => {
    dispatch(DashboardGetAction());
  }, []);
  useEffect(() => {
    console.log(orgid);
    axios
      .get(
        `  https://abbd-2405-201-e059-b805-ed44-498e-91cd-6527.ngrok-free.app/api/v1/centers?organizationId.equals=${orgid}`,
        { headers: { Authorization: `Bearer ${Token}` } }
      )

      .then((response) => {
        setResponse(response);
      });
  }, [orgid]);
  useEffect(() => {
   
    if (!orgid) localStorage.setItem("orgId", data?.data?.orgId);
  }, [data]);
  console.log(response, "jjhhfd");
  return (
    <>
      <Header />
      <Row>
        <Col md={2} lg={2} className="d-none d-sm-none d-md-block d-lg-block">
          <Sidebar active={active} setActive={setActive} />
        </Col>
        <Col sm={12} md={10} lg={10}>
        <Breadcrumb>
            <Breadcrumb.Item>Center</Breadcrumb.Item>
          </Breadcrumb>
          <hr></hr>
      
     
       <Row>
       <Card className=" border-0 bg-white p-3">
    <Row>
    <Card className="w-50px h-50px outline-dashed border-0 ms-2">
    <img className="mt-5 mx-auto w-50 " src={logo}></img>
            <Card.Text className="text-center">Add Location</Card.Text>
          </Card>
       
          {console.log(data.data, "1234")}
          {response?.data?.length ? (
            response.data.map((item) => (
              <Col  md={3} key={item.id} className="mb-4 ">
             

              
                <Card className="w-50px h-50px cursor-pointer  ">
           
                {item?.photos[0]?.url?  <Card.Img
              
             
            
              className={`object-fit  mx-auto p-0 ${url === "bg-color" ? "bg-color" : ""}`}
              variant="top"
              src={item?.photos[0]?.url}
              
            />:<div className="bg-color ">
                <Card.Text className="text-white mt-10px ms-3" title={item.title}>
                    {item.title}
                  </Card.Text>
              </div>}
          
               
                  
        
            
      <Card.Body >
       
        <Card.Text className="fw-10px">
                  {item.streetAddress},
    {item.suite}<br />
    {item.city},
    {item.stateProvince},
                  </Card.Text>
    
             
                 
                <div className="text-color fw-16px"><b>Busniess hours</b></div>
                <Card.Text className=" fw-16px">Sun - Sat: {item?.centerHours[0]?.startTime} To  {item?.centerHours[0]?.endTime}</Card.Text>
       
    
                
              
               
                
       
      </Card.Body>
      
    </Card>
              </Col>
            ))
          ) : data.loading ? (
            <Spinner
              animation="border"
              role="status"
              className="spinner"
            ></Spinner>
          ) : (
            "no data found"
          )}
    </Row>
     
          
          </Card>
        </Row>
      
 
          </Col>
         
 

          
 
       </Row>

   
   
    </>
  );
};
export default Center;
