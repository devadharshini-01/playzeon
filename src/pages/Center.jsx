import { Breadcrumb, Button, Card, Col, Row, Spinner } from "react-bootstrap";
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
  const [edit, setEdit] = useState();

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
        `https://grouse-humane-terribly.ngrok-free.app/api/v1/centers?organizationId.equals=${orgid}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true", 
            "Authorization":`Bearer ${Token}`
          }
        }
        
      )

      .then((response) => {
      
        setResponse(response);
       
      });
  }, [orgid]);
  useEffect(() => {
    if (data?.orgid) localStorage.setItem("orgId",data?.orgId);
    console.log(orgid,"AAA")
  }, [data]);
  console.log(response, "jjhhfd");

  return (
    <>

<Header />
    <Row className="vh-100">
    <Col md={2} lg={2} className="d-none d-sm-none d-md-block d-lg-block">
          <Sidebar active={active} setActive={setActive}  />
        </Col>
      
    
       <Col sm={12} md={10} lg={10} xl={10}>

        <Breadcrumb >
           <Breadcrumb.Item >Center</Breadcrumb.Item>
         </Breadcrumb>
         <hr></hr>

         <Row >
           <Col md={6} lg={12}>
             <Card className=" border-0 bg-white p-3">
               <Row>
                 <Col sm={3} >
                   <Card className="outline-dashed h-50px border-0 ms-2">
                     <img className=" mt-5 mx-auto w-50 " src={logo} onClick={()=>navigate("/Add-center")}></img>
                     <p className="text-center text-color">Add Center</p>
                   </Card>
                 </Col>
                
                 {response?.data?.length ? (
                  response?.data?.map((item) => (
                     <Col lg={3} key={item.id} className="mb-4 ">
                       <Card className="  cursor-pointer h-50px P-3" onClick={()=>navigate("/Facilites")}>
                         {item?.photos[0]?.url ? (
                           <Card.Img
                             className={`object-fit  mx-auto p-0 ${
                               url === "bg-color" ? "bg-color" : ""
                             }`}
                             variant="top"
                             src={item?.photos[0]?.url}
                             
                           />
                         ) : (
                           <div className="bg-color ">
                             <Card.Text
                               className="text-white mt-10px ms-3"
                               title={item.title}
                             >
                               {item.title}
                             </Card.Text>
                           </div>
                         )}

                         <Card.Body>
                           <Card.Text className="fw-10px">
                             {item.streetAddress},{item.suite}
                             <br />
                             {item.city},{item.stateProvince},
                           </Card.Text>

                           <div className="text-color fw-16px">
                             <b>Busniess hours</b>
                           </div>

                           <Card.Text className=" fw-16px">
                             {item?.centerHours?.map((values) => {
                               return (
                                
                                 <div className="fw-10px">{`${values.weekday}`}: {`${values.startTime} To ${values.endTime}`}</div>
                               );
                             })}
                             <b></b>{" "}
                           </Card.Text>
                          

                           {/* <Card.Text className=" fw-16px"> */}
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
           </Col>
         </Row>
      
       
       </Col>
  
    </Row>

  

  

  
   
  
  
      
    </>
  );
};
export default Center;
