import React from "react";

import { useState, useEffect, context } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Form, Input, Button } from "antd";
import { useHistory, Redirect } from "react-router-dom";
import Image from "../image/fitness.jpg"; // Import using relative path

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [incorrect, setError] = useState(false);
  const [email, setEmail] = useState("");

  const fnlogin = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        password,
      }),
    });

    const { user } = await response.json();
    if (user) {
      try {
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem("user", jsonValue);
      } catch (e) {}

      console.log("USER ", user);
      if (user.role === "TRAINER") {
        navigation.navigate("Trainer");
      } else {
        navigation.navigate("User");
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData();

    if (event.fname === "Tshepo" && event.password === "secret") {
      history.push("/welcome");
    } else event.fname === "admin" && event.password === "secret";
    history.push("/profilesummary");
    console.log("Success:", event);

    alert("login  success");
  };
  const sendData = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fname, password }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    data.token && nextPage(data);
    response.status === 401 && setError(true);

    console.log("name:", fname, "Password: ", password);
  };

  const history = useHistory();

  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
    },
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const validateForm = () => fname.length > 0 && password.length > 0;

  const nextPage = (data) =>
    history.push({
      pathname: "/profilesummary",
      state: { profilesummary: data },
    });

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br></br>
          <br></br>

          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Typography component='h1' variant='h5' sx={{ m: 1 }}>
              Sign-in
            </Typography>

            <Form.Item name='fname'>
              <label>Username</label>
              <Input
                icon='user'
                fullWidth
                value={fname}
                onChange={(event) => setFname(event.target.value)}
              />
            </Form.Item>

            <Form.Item name='password'>
              <label>Password</label>
              <Input.Password
                icon='lock'
                onChange={(e) => setPassword(e.target.value)}
              />
              {props.role}
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type='primary'
                onClick={fnlogin}
                disabled={!validateForm()}
              >
                Submit
              </Button>
              <Form.Item>
                {" "}
                {incorrect && (
                  <p style={{ color: "red" }}>username or password incorrect</p>
                )}
                <div>
                  Don't have an account? <Link to='/register'>Register</Link>
                </div>
              </Form.Item>
            </Form.Item>
          </Form>
        </Box>
      </Container>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer class='footer-area section-gap'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-3  col-md-6 col-sm6'>
              <div class='single-footer-widget'>
                <h4>About Us</h4>
                <p>
                  The UJ Gymnasia are premier fitness centres with
                  state-of-the-art equipment.The gyms have a team of experienced
                  instructors who ensure that members receive the best fitness
                  results. The Gymnasia contribute to enhancing the quality of
                  lives of the University community. The Gym services are
                  catered to UJ students.
                </p>
              </div>
            </div>

            <div class='col-lg-3  col-md-6 col-sm6'>
              <div class='single-footer-widget'>
                <h4>Contact Us</h4>
                <p>APK Gym: (011) 559 2284</p>
                <p>APB Gym: (011) 559 1570</p>
                <p>DFC Gym: (011) 559 6413</p>
                <p>SWC Gym: (011) 559 5034</p>
                <p>Email: darshanr@uj.ac.za</p>
              </div>
            </div>

            <div class='col-lg-3  col-md-6 col-sm6'>
              <div class='single-footer-widget'>
                <h4> ​Follow UJ Gym</h4>
                <div class='footer-social col-lg-6'>
                  <a href='#'>
                    <i class='fa fa-facebook'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-instagram'></i>
                  </a>
                  <a href='#'>
                    <i class='fa fa-envelope'></i>
                  </a>
                </div>
              </div>
            </div>

            <div class='col-lg-3  col-md-8 col-sm8'>
              <div class='single-footer-widget'>
                <h4>Terms of service</h4>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
              </div>
            </div>

            <div class='footer-bottom row'>
              <p class='footer-text m-0 col-lg-6'>
                &copy; 2022 Fetch Your Body UJ. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      <br></br>
      <br></br>
    </div>
  );
};

export default LoginPage;
