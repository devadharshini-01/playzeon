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
import moment from "moment";
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
  const id = localStorage.getItem("id");

  const [selectedTimezoneId, setSelectedTimezoneId] = useState(null);
  const [timezoneError, setTimezoneError] = useState(false);
  const [centerHours, setCenterHours] = useState([]);
  const[errors,setErrors]=useState()
  const [businesshours, setBusinessHours] = useState({
    startDate: "",
    endDate: "",
    weekday: [],
  });
  const dispatch = useDispatch();

  const data = useSelector((state) => state.center.centergetapi);
  const value = useSelector((state) => state.addcenter.centerpostapi);

  useEffect(() => {
    dispatch(CenterAction());
  }, []);
  const handleTimezone = (timezoneId) => {
    setSelectedTimezoneId(timezoneId);
    // console.log(timezoneId,"time");
  };

  const schema = yup.object().shape({
    title: yup.string().required("Name is  required "),
    streetAddress: yup.string().required("Street is  required "),
    city: yup.string().required("city is  required "),
    state: yup.string().min(2, "more than one").required("state is  required "),
    zipCode: yup
      .string()
      .min(5, "more than 5")
      .required("zipCode is  required "),
    phonenumber: yup.string().required("Phonenumber is  required "),
    email: yup.string().email().required("email is required "),
    suite: yup.string().required("suite is required"),
    add: yup.string().required("fill all details"),
  });
  console.log(selectedTimezoneId);
  console.log(timezoneError);

  const handleSubmit = (values) => {
    if (selectedTimezoneId === null) {
      setTimezoneError(true);
    } else {
      setTimezoneError(false);

      values.timezone.id = selectedTimezoneId;

      const updatedValue = {
        ...values,
        centerHours: [
          {
            ...values.centerHours[0],
            weekday: businesshours.weekday.toString(),
          },
        ],
      };

      console.log(updatedValue, "updatedValue");
      console.log("values123", selectedTimezoneId, values);
      dispatch(CenterPostAction(updatedValue));

      navigate("/Center");
    }
  };
  const handleCheck = (event) => {
    if (event.target.checked)
      setBusinessHours({
        ...businesshours,
        weekday: [...businesshours.weekday, event.target.value],
      });
    else {
      setBusinessHours({
        ...businesshours,
        weekday: businesshours.weekday.filter(
          (item) => item !== event.target.value
        ),
      });
    }
  };
  console.log(businesshours, "bus");

  return (
    <>
      <div className="overflow-hidden">
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmit}
          initialValues={{
            displayName: true,
            title: "",
            add: "",
            streetAddress: "",

            suite: "",
            city: "",
            stateProvince: "dr",
            zipCode: "",
            photos: [],
            email: "",
            organization: {
              id: orgId,
            },
            phonenumber: "",
            centerHours: [
              {
                weekday: businesshours.weekday,
                startTime: moment(
                  businesshours.startDate,
                  "yyyy-mm-ddthh:mm:ssz"
                ).format("LT"),
                endTime: moment(
                  businesshours.endDate,
                  "yyyy-mm-ddthh:mm:ssz"
                ).format("LT"),
                createdAt: "2023-10-14T05:46:12Z",
                updatedAt: "2023-10-14T05:46:12Z",
              },
            ],
            createdAt: "2023-10-14T05:46:48Z",
            updatedAt: "2023-10-14T05:46:48Z",
            centerUsers: [
              {
                user: {
                  id: id,
                },
              },
            ],
            timezone: {
              id: selectedTimezoneId,
            },
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
               
            console.log(errors),
            (
              <Form noValidate onSubmit={handleSubmit}>
                <div className="vh-100">
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
                      <div className="vh-100 overflow-scroll pb-5">
                        <Col>
                          <div>
                            <Breadcrumb className="mt-4">
                              <div
                                onClick={() => navigate("/Center")}
                                className="text-color "
                              >
                                <b> Centers</b>
                              </div>
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
                                    name="streetAddress"
                                    values="streetAddress"
                                    onChange={handleChange}
                                    isInvalid={!!errors.streetAddress}
                                  />
                                  <p className="text-primary">
                                    {errors.streetAddress}
                                  </p>
                                </Col>
                                <Col md={2} lg={1}>
                                  <Formcontrol
                                    label="Suite"
                                    type="text"
                                    name="suite"
                                    values="suite"
                                    onChange={handleChange}
                                    isInvalid={!!errors.suite}
                                  />
                                  <p className="text-primary">{errors.suite}</p>
                                </Col>
                                <Col md={2} lg={2}>
                                  <Formcontrol
                                    label="City"
                                    type="text"
                                    mandatory={true}
                                    name="city"
                                    values="city"
                                    onChange={handleChange}
                                    isInvalid={!!errors.city}
                                  />
                                  <p className="text-primary">{errors.city}</p>
                                </Col>
                                <Col md={2} lg={2}>
                                  <Formcontrol
                                    label="State"
                                    type="text"
                                    min={2}
                                    mandatory={true}
                                    name="state"
                                    values="state"
                                    onChange={handleChange}
                                    isInvalid={!!errors.state}
                                  />
                                  <p className="text-primary">{errors.state}</p>
                                </Col>
                                <Col md={2} lg={2}>
                                  <Formcontrol
                                    label="Zip"
                                    type="number"
                                    mandatory={true}
                                    name="zipCode"
                                    values="zipCode"
                                    onChange={handleChange}
                                    isInvalid={!!errors.zipCode}
                                  />
                                  <p className="text-primary">
                                    {errors.zipCode}
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={4} lg={4}>
                                  <Phonenumber
                                    label="phone number"
                                    mandatory={true}
                                    values="phonenumber"
                                    type="number"
                                    name="phonenumber"
                                    onChange={handleChange}
                                    isInvalid={!!errors.phonenumber}
                                  />

                                  <p className="text-primary">
                                    {errors.phonenumber}
                                  </p>
                                </Col>
                                <Col md={6} lg={4}>
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
                                <Col md={6} lg={4}>
                                  <Formselect
                                    label="Timezone"
                                    data={data}
                                    onChange={handleTimezone}
                                    mandatory={true}
                                    selectedTimezoneId={selectedTimezoneId}
                                    timezoneError={timezoneError}
                                  />
                                </Col>
                              </Row>
                              <div className="mt-2 text-color">
                                <b>
                                  Business hours
                                  <span className="text-primary">*</span>
                                </b>
                              </div>
                              <Row>
                                <Col sm={6} md={12} lg={7}>
                                  <Form>
                                    <Row className="p-1">
                                      <Col>
                                        <FormCheck
                                          id="myCheckbox1"
                                          label="Sun"
                                          name="sun"
                                          value="sun"
                                          checked={businesshours.weekday.includes(
                                            "sun"
                                          )}
                                          onChange={handleCheck}
                                        />
                                      </Col>
                                      <Col className="ms-2">
                                        <FormCheck
                                          id="myCheckbox2"
                                          label="Mon"
                                          name="Mon"
                                          value="Mon"
                                          checked={businesshours.weekday.includes(
                                            "Mon"
                                          )}
                                          onChange={handleCheck}
                                        />
                                      </Col>
                                      <Col className="ms-2">
                                        <FormCheck
                                          id="myCheckbox3"
                                          label="Tue"
                                          name="Tue"
                                          value="Tue"
                                          checked={businesshours.weekday.includes(
                                            "Tue"
                                          )}
                                          onChange={handleCheck}
                                        />
                                      </Col>
                                      <Col className="ms-2">
                                        <FormCheck
                                          id="myCheckbox4"
                                          label="Wed"
                                          name="Wed"
                                          value="Wed"
                                          checked={businesshours.weekday.includes(
                                            "Wed"
                                          )}
                                          onChange={handleCheck}
                                        />
                                      </Col>
                                      <Col className="ms-2">
                                        <FormCheck
                                          id="myCheckbox5"
                                          label="Thu"
                                          name="Thu"
                                          value="Thu"
                                          checked={businesshours.weekday.includes(
                                            "Thu"
                                          )}
                                          onChange={handleCheck}
                                        />
                                      </Col>
                                      <Col className="ms-2">
                                        <FormCheck
                                          id="myCheckbox6"
                                          label="Fri"
                                          name="Fri"
                                          value="Fri"
                                          checked={businesshours.weekday.includes(
                                            "Fri"
                                          )}
                                          onChange={handleCheck}
                                        />
                                      </Col>
                                      <Col>
                                        <FormCheck
                                          id="myCheckbox7"
                                          label="Sat"
                                          name="Sat"
                                          value="Sat"
                                          checked={businesshours.weekday.includes(
                                            "Sat"
                                          )}
                                          onChange={handleCheck}
                                        />
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col sm={6} md={4} lg={4}>
                                        <DatePicker
                                          className="p-1 border-1 rounded mt-1 "
                                          selected={businesshours.startDate}
                                          onChange={(date) =>
                                            setBusinessHours({
                                              ...businesshours,
                                              startDate: date,
                                            })
                                          }
                                          startDateText="Select time"
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
                                          selected={businesshours.endDate}
                                          onChange={(date) =>
                                            setBusinessHours({
                                              ...businesshours,
                                              endDate: date,
                                            })
                                          }
                                          showTimeSelect
                                          showTimeSelectOnly
                                          timeIntervals={30}
                                          timeCaption="Time"
                                          dateFormat="h:mm aa"
                                        />
                                      </Col>
                                      {console.log(centerHours, "centerHours")}
                                      <Col md={2} lg={2}>
                                      <Button
                  onClick={() => {
                    if (
                      businesshours.startDate !== "" &&
                      businesshours.endDate !== "" &&
                      businesshours.weekday.length > 0
                    ) 
                      setBusinessHours({
                        weekday: [],
                        startDate: "",
                        endDate: "",
                      });
                    
          
                 
                  }}
                
                  className="bg-white border-0 text-blue"
                >
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
                                    {centerHours.map((item, index) => (
                                      <div key={index}>
                                        <p>
                                          {item.weekday} :
                                          {moment(
                                            item.startDate,
                                            "yyyy-mm-ddthh:mm:ssz"
                                          ).format("LT")}{" "}
                                          {moment(
                                            item.endDate,
                                            "yyyy-mm-ddthh:mm:ssz"
                                          ).format("LT")}
                                        </p>
                                      </div>
                                    ))}
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
                                    <b className="text-color">
                                      Add more images
                                    </b>
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
                              <Button variant="outline-primary ms-1 btn-sm-width  mt-3 ">
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
                                <Button
                                  type="submit"
                                  className="bg-primary border-0"
                                >
                                  Save
                                </Button>
                              </div>
                            </Card>
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            )
          )}
        </Formik>
      </div>

      {/* </Form>
      )} */}
    </>
  );
};
export default AddCenter;
