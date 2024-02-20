import { Breadcrumb, Card, Col, Row, Spinner } from "react-bootstrap";
import Sidebar from "../component/layout/Sidebar";
import Header from "../component/layout/Header";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { DashboardGetAction } from "../redux/action/DashboardAPiAction";

const Center = ({ active, setActive }) => {
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
        `https://0a41-2405-201-e059-b805-e525-da6b-2897-c20e.ngrok-free.app/api/v1/centers?organizationId.equals=${orgid}`,
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
            <Breadcrumb.Item>Locations</Breadcrumb.Item>
          </Breadcrumb>
          <hr></hr>
          {/* <Card className="w-100 border-0 p-4">
            <Row>
         
            <Card className="w-50px h-50px outline-dashed border-0  ">
              <Icon
                icon="gg:add"
                className="mx-auto mt-5"
                width="75"
                height="75"
                onClick={() => navigate("/Add-Center")}
              />

              <Card.Text className="text-center">Add Location</Card.Text>
      
              
            </Card>
            {console.log(data.data, "1234")}
            {response?.data?.length ? (
              response.data.map((item) => (
                <Card key={item.id} className="container w-250px mb-2 mx-1 ms-2 w-50px h-50px p-3">
                 
                    
                  <Card.Text title={item.title}>
                    {item.title}
                  </Card.Text>
                  <Card.Text streetAddress={item.streetAddress}>
                    {item.streetAddress}
                  </Card.Text>
                  <Card.Text suite={item.suite}>
                    {item.suite}
                  </Card.Text>
                  <Card.Text stateProvince={item.stateProvince}>
                    {item.stateProvince}
                  </Card.Text>
                  <Card.Text startTime={item.startTime}>
                    {item.startTime}
                  </Card.Text>
                  <Card.Text endTime={item.endTime}>
                    {item.endTime}
                  </Card.Text>
                </Card>
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
         */}
           <Card className="w-100 border-0 p-4">
        <Row className="justify-content-center">
          <Card className="w-50px h-50px outline-dashed border-0 p-3 ms-3">
            <Icon
              icon="gg:add"
              className="mx-auto mt-5"
              width="75"
              height="75"
              onClick={() => navigate("/Add-Center")}
            />
            <Card.Text className="text-center">Add Location</Card.Text>
          </Card>
          {console.log(data.data, "1234")}
          {response?.data?.length ? (
            response.data.map((item) => (
              <Col xs={12} sm={6} md={6} lg={3} key={item.id} className="mb-4">
                <Card className="container w-250px h-250px p-3">
                  
                <Card.Img
                            alt="dashboardimage"
                            className="dashboardimg image mx-auto p-0 "
                            variant="top"
                            src={item?.photos[0]?.url}
                          />
                  <Card.Text title={item.title}>
                    {item.title}
                  </Card.Text>
                  <Card.Text streetAddress={item.streetAddress}>
                    {item.streetAddress}
                  </Card.Text>
                  <Card.Text suite={item.suite}>
                    {item.suite}
                  </Card.Text>
                  <Card.Text stateProvince={item.stateProvince}>
                    {item.stateProvince}
                  </Card.Text>
                
                  <Card.Text startTime={item?.centerHours[0]?.startTime}>
                    {item?.centerHours[0]?.startTime}
                  </Card.Text>
                  <Card.Text endTime={item?.centerHours[0]?.endTime}>
                    {item?.centerHours[0]?.endTime}
                  </Card.Text>
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
    </>
  );
};
export default Center;
