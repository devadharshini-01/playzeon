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
                  <Col sm={5} md={5}>
                    <h5>Football field</h5>
                  </Col>
                  <Col sm={2} md={2}>
                    <Button className="bg-white border-0 text-blue justify-content-end ">
                      <Icon
                        className="mb-1"
                        icon="gridicons:add"
                        width="15"
                        height="15"
                      />
                      Add
                    </Button>
       
                  </Col>
                  {/* <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Features</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}

                </Row>
                <Row>
                    <Col>
                    <p>S.no</p>
                    </Col>
                    <Col>
                    <p>Name</p>
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
