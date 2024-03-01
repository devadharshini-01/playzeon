import {
  Breadcrumb,
  Card,
  Col,
  Form,
  FormCheck,
  Row,
  Button,
} from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import Formcontrol from "../component/custom/Formcontrol";
import Phonenumber from "../component/custom/Phonenumber";
import Header from "../component/layout/Header";
import Sidebar from "../component/layout/Sidebar";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { CenterAction, CenterPostAction } from "../redux/action/CenterAction";
import logo from "../assets/images/addbanner.svg";
import picture from "../assets/images/addimage.svg";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Formselect from "../component/custom/Formselect";

const AddCenter = ({ active, setActive }) => {
  const navigate = useNavigate();
  const orgId = localStorage.getItem("orgId");



  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const data = useSelector((state) => state.center.centergetapi);
  const value = useSelector ((state)=>state.addcenter.centerpostapi);
  console.log(data, "+++++");
  console.log(value,"value");

  const handleChange = (values) => {
    // console.log(values,"value from handle change");
    dispatch(CenterPostAction(values));
  };
useEffect(()=>{
  dispatch(CenterAction ())
},[])
  
  

  const schema = yup.object().shape({
    title: yup.string().required("Name is  required "),
    StreetAddress: yup.string().required("Street is  required "),
    City: yup.string().required("city is  required "),
    State: yup.string().required("state is  required "),
    ZipCode: yup.string().required("zipCode is  required "),
    Phonenumber: yup.string().required("Phonenumber is  required "),
    email: yup.string().email().required("email is required "),
    Suite: yup.string().required("suite is required"),
  
  });

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleChange}
        initialValues={{
          displayName: true,
          title: "",
          StreetAddress: "",
        
          Suite: "",
          City: "",
          stateProvince: "",
          ZipCode: "",
          email: "",
          organization: {
            id: orgId,
          },
          Phonenumber: "",
          centerHours: [
            {
              weekday: "Sun,Mon,Tue,Wed,Thu,Fri,Sat",
              startTime: "12:00 AM",
              endTime: "11:30 PM",
              createdAt: "2023-10-14T05:46:12Z",
              updatedAt: "2023-10-14T05:46:12Z",
            },
          ],
          createdAt: "2023-10-14T05:46:48Z",
          updatedAt: "2023-10-14T05:46:48Z",
          centerUsers: [
            {
              user: {
                id: "303ebb60-7de0-4088-95bd-07052e722417",
              },
            },
          ],
          timezone: {
            id:""
          },
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Header />

            <Row>
              <Col
                md={2}
                lg={2}
                className="d-none d-sm-none d-md-block d-lg-block"
              >
                <Sidebar active={active} setActive={setActive} />
              </Col>
              <Col md={10} lg={10}>
                <Col>
                  <div>
                    <Breadcrumb className="mt-4">
                      <Breadcrumb.Item
                        onClick={() => navigate("/Center")}
                        className="text-color "
                      >
                        Centers
                      </Breadcrumb.Item>
                      <Icon
                        icon="radix-icons:caret-right"
                        width="25"
                        height="25"
                      />
                      <Breadcrumb.Item active className="text-dark">
                        Add center
                      </Breadcrumb.Item>
                    </Breadcrumb>
                    <hr></hr>
                    <Card className=" border-0 p-4 ">
                      <Row>
                        <Col md={4} lg={4}>
                          <Formcontrol
                            label="Name"
                            type="text"
                            mandatory={true}
                            name="title"
                            values={values.title}
                            onChange={handleChange}
                            isInvalid={!!errors.title}
                          />
                          <p className="text-primary">{errors.title}</p>
                        </Col>
                      </Row>
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
                          <Formcontrol
                            label="Street"
                            type="text"
                            mandatory={true}
                            name="StreetAddress"
                            values="StreetAddress"
                            onChange={handleChange}
                            isInvalid={!!errors.StreetAddress}
                          />
                          <p className="text-primary">{errors.StreetAddress}</p>
                        </Col>
                        <Col md={2} lg={1}>
                          <Formcontrol
                            label="Suite"
                            type="text"
                            name="Suite"
                            values="Suite"
                            onChange={handleChange}
                            isInvalid={!!errors.Suite}
                          />
                          <p className="text-primary">{errors.Suite}</p>
                        </Col>
                        <Col md={2} lg={2}>
                          <Formcontrol
                            label="City"
                            type="text"
                            mandatory={true}
                            name="City"
                            values="City"
                            onChange={handleChange}
                            isInvalid={!!errors.City}
                          />
                          <p className="text-primary">{errors.City}</p>
                        </Col>
                        <Col md={2} lg={2}>
                          <Formcontrol
                            label="State"
                            type="text"
                            mandatory={true}
                            name="State"
                            values="State"
                            onChange={handleChange}
                            isInvalid={!!errors.State}
                          />
                          <p className="text-primary">{errors.State}</p>
                        </Col>
                        <Col md={2} lg={2}>
                          <Formcontrol
                            label="Zip"
                            type="text"
                            mandatory={true}
                            name="ZipCode"
                            values="ZipCode"
                            onChange={handleChange}
                            isInvalid={!!errors.ZipCode}
                          />
                          <p className="text-primary">{errors.ZipCode}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} lg={4}>
                          <Phonenumber
                            label="phone number"
                            mandatory={true}
                            values="Phonenumber"
                            name="Phonenumber"
                            onChange={handleChange}
                            isInvalid={!!errors.Phonenumber}
                          />

                          <p className="text-primary">{errors.Phonenumber}</p>
                        </Col>
                        <Col md={4} lg={4}>
                          <Formcontrol
                            label="Email"
                            type="text"
                            mandatory={true}
                            name="email"
                            values="email"
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                          />

                          <p className="text-primary">{errors.email}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4} lg={4}>
                          <div className="mb-2">
                            Time Zone
                            <span className="text-primary">
                              <b>*</b>
                            </span>
                          </div>
                        <Formselect data={data}/>
                        </Col>
                      </Row>
                      <div className="mt-2 text-color">
                        <b>
                          Business hours<span className="text-primary">*</span>
                        </b>
                      </div>
                      <Row>
                        <Col sm={6} md={12} lg={7}>
                          <Form>
                            <Row className="p-1">
                              <Col>
                                <FormCheck id="myCheckbox1" label="Sun" />
                              </Col>
                              <Col className="ms-2">
                                <FormCheck id="myCheckbox2" label="Mon" />
                              </Col>
                              <Col className="ms-2">
                                <FormCheck id="myCheckbox3" label="Tue" />
                              </Col>
                              <Col className="ms-2">
                                <FormCheck id="myCheckbox4" label="Wed" />
                              </Col>
                              <Col className="ms-2">
                                <FormCheck id="myCheckbox5" label="Thu" />
                              </Col>
                              <Col className="ms-2">
                                <FormCheck id="myCheckbox6" label="Fri" />
                              </Col>
                              <Col>
                                <FormCheck id="myCheckbox7" label="Sat" />
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={6} md={4} lg={4}>
                                <DatePicker
                                  className="p-1 border-1 rounded mt-1 "
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={30}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                />
                              </Col>
                              <Col sm={6} md={4} lg={4}>
                                <DatePicker
                                  className="p-1 mt-1 rounded border-1 "
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  showTimeSelect
                                  showTimeSelectOnly
                                  timeIntervals={15}
                                  timeCaption="Time"
                                  dateFormat="h:mm aa"
                                />
                              </Col>
                              <Col md={2} lg={2}>
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
                          </Form>
                        </Col>
                      </Row>
                      <b className="text-bold mt-5">Upload images</b>
                      <hr></hr>
                      <Row>
                        <Col md={3} lg={2}>
                          <div className="text-color">
                            <b>Banner image</b>
                          </div>
                          <img
                            className="border  rounded mt-3 "
                            src={logo}
                          ></img>
                        </Col>
                        <Col md={3} lg={2} className="">
                          <div className="fs-13px text-color">
                            <b>Min 800px x 600px</b>
                          </div>
                        </Col>
                        <Col md={3} lg={2}>
                          <div>
                            <b className="text-color">Add more images</b>
                          </div>
                          <img
                            className="border rounded  addimage mt-3"
                            src={picture}
                          ></img>
                        </Col>
                        <Col md={3} lg={2}>
                          <div>
                            <b className="text-color fs-13px">
                              Min 300px x 300px
                            </b>
                          </div>
                        </Col>
                      </Row>
                      <Row />
                      <Button variant="outline-primary ms-1 w-25  mt-3 ">
                        Browse
                      </Button>{" "}
                      <hr className="mt-3"></hr>
                      <div className="  gap-2 d-flex justify-content-end">
                        <Button
                          onClick={() => navigate("/Center")}
                          className="border-0 bg-white text-primary"
                        >
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-primary border-0">
                          Save
                        </Button>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>

      {/* </Form>
      )} */}
    </>
  );
};
export default AddCenter;
