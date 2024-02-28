import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../../assets/images/Athlitik_White_New.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";

const Login = () => {
  const navigate = useNavigate();
  
  const handleValue = async (values) => {
    await axios
      .post(
        " https://grouse-humane-terribly.ngrok-free.app/api/user-management/login",
        values
       
      )
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);

        navigate("/center");
        console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });

  };

  const schema = yup.object().shape({
    userName: yup.string().required("email is a required field"),
    password: yup.string().required("password is a required field"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleValue}
      initialValues={{
        userName: "",
        password: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div className="homebanner">
            <div className="overlay pt-lg-5 pt-2">
              <Container>
                <div className="d-flex align-item-center row ">
                  <div className="col-sm-10 " >
                    <img className="mt-3 d-flex  fw-300 "  src={logo}></img>
              

                  </div>
                </div>
                <Row>
                  <Col
                    sm={6}
                    md={7}
                    lg={8}
                    className=" d-none d-sm-none d-md-block d-lg-block "
                  >
                    <div className="d-flex flex-column text-white margin-left align-item-center fw-bold pt-lg-5 pt-2 ">
                      <h3 className="fs-3  ms-5 pt-5">Books sports center</h3>

                      <h3 className="fs-2  mt-1 pt-5">
                        Connect with other players{" "}
                      </h3>

                      <h3 className="fs-3 ms-5 pt-5">Signin for lessons </h3>
                    </div>
                  </Col>
                  <Col sm={6} md={5} lg={4}>
                    <Card className=" w-100 ">
                      <div className="bg-secondary p-3">
                        <div className="flex-column d-flex ">
                          <Row className="pt-3">
                            <Form.Group
                             
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>User name</Form.Label>
                              <Form.Control
                                className="shadow-sm "
                                type="userName"
                                name="userName"
                                placeholder="User name"
                                values={values.userName}
                                onChange={handleChange}
                                isInvalid={!!errors.userName}
                              />
                              {
                                <p className="text-primary">
                                  {errors.userName}
                                </p>
                              }
                            </Form.Group>
                            <Form.Group
                              className=""
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                className="shadow-sm "
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                              />
                              {
                                <p className="text-primary">
                                  {errors.password}
                                </p>
                              }
                            </Form.Group>

                            <small className=" d-block text-end  text-primary">
                              Forgot password?
                            </small>

                            <Button
                              type="submit"
                              className="w-90px mx-auto mt-3 shadow-sm w-75px bg-primary border-0 p-2"
                            >
                              Sign in
                            </Button>

                            <Row>
                              <Col md={5} lg={5} className="mt-2">
                                <p className="fs-13px text-nowrap m-0">
                                  Don't have an account?
                                </p>
                                <p className="text-primary fs-13px  ">Signin</p>
                              </Col>
                              <Col md={1} lg={1}></Col>
                              <Col md={6} lg={6} className="mt-2">
                                <p className="fs-13px m-0 text-nowrap">
                                  Are you a sports organization?
                                </p>
                                <p className="text-primary fs-13px">
                                  Parter With Us
                                </p>
                              </Col>
                            </Row>
                          </Row>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default Login;
