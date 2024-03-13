import { Breadcrumb, Card, Col, Row, Button, Table } from "react-bootstrap";
import Header from "../component/layout/Header";
import Sidebar from "../component/layout/Sidebar";
import { Icon } from "@iconify/react";

const Facility = ({ active, setActive }) => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="vh-100">
          <Header />
          <Row>
            <Col md={2} lg={2} className="vh-100">
              <Sidebar active={active} setActive={setActive} />
            </Col>
            <Col md={10} lg={10}>
              <Breadcrumb>
                <Breadcrumb.Item>Facilites</Breadcrumb.Item>
              </Breadcrumb>
              <hr></hr>
              <Card className="bg-white border-0">
                <Row>
                  <Col sm={6} md={6}>
                    <h5>Football field</h5>
                  </Col>
                  <Col>
                    <Button className="bg-white border-0 text-blue ">
                      <Icon
                        className="mb-1"
                        icon="gridicons:add"
                        width="15"
                        height="15"
                      />
                      Add
                    </Button>
       
                  </Col>
           

                </Row>
                <Row>
                  <Col>
                  S.no
                  </Col>
                  <Col>
                  Name
                  </Col>
                  <Col>
                  Features
                  </Col>
                  <Col>
                  Actions
                  </Col>
                </Row>
              
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Facility;
