import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory, Redirect } from "react-router-dom";

const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [surname, setSurname] = useState("");
  const history = useHistory();

  /*const onFinish = (values) => {
    if (values.username === "admin" && values.password === "secret") {
      history.push("/welcome");
    } else if (values.username);
    console.log("Success:", values);
  }; */

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const fnRegister = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/register`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        fname,
        surname,
        role: "USER",
      }),
    });

    const { user } = await response.json();
    console.log(user);
    // if(user.role === "TRAINER") {
    //   navigation.navigate("Trainer")
    // } else {
    //   navigation.navigate("Home")
    // }
    alert("Sucessfully registered!!");
    history.push({
      pathname: "/login",
    });
  };
  /* const nextPage = (data) =>
    history.push({
      pathname: "/login",
    });*/

  return (
    <div>
      <header id='header'>
        <nav className='main-header navbar navbar-expand navbar-blue navbar-light'>
          <ul className='navbar-nav'>
            <nav>
              <ul class='nav-menu'>
                <li className='nav-item d-none d-sm-inline-block'>
                  <a href='home' className='nav-link'>
                    <h1>
                      <b>UJ GYMNASIUM</b>
                    </h1>
                  </a>
                </li>
              </ul>
            </nav>
          </ul>
        </nav>
      </header>

      <Paper>
        <br></br>
        <Container component='main' maxWidth='xs'>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Form
              name='basic'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              onFinish={fnRegister}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Typography component='h2' variant='h5' sx={{ m: 2 }}>
                Welcome
              </Typography>

              <Typography component='h6' variant='h7' sx={{ m: 0 }}>
                Sign up to continue!
              </Typography>

              <Form.Item
                name='firstname'
                onChange={(text) => setFname(text.target.value)}
                value={fname}
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <label>First Name</label>
                <Input
                  onChange={(text) => setFname(text.target.value)}
                  fullWidth
                />
              </Form.Item>

              <Form.Item
                name='lastname'
                value={surname}
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <label>Last Name</label>
                <Input
                  fullWidth
                  onChange={(text) => setSurname(text.target.value)}
                />
              </Form.Item>

              <Form.Item
                name='email'
                value={email}
                onChange={(text) => setEmail(text.target.value)}
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <label>Email</label>
                <Input
                  fullWidth
                  onChange={(text) => setEmail(text.target.value)}
                />
              </Form.Item>

              <Form.Item
                name='password'
                value={[password]}
                onChange={(text) => setPassword(text.target.value)}
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <label>Password</label>

                <Input
                  type='password'
                  fullWidth
                  onChange={(text) => setPassword(text.target.value)}
                />
              </Form.Item>

              <Form.Item
                name='confirmpassword'
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <label>Confirm Password</label>

                <Input type='password' />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type='primary' onClick={fnRegister}>
                  Sign up
                </Button>
              </Form.Item>

              <Form container justifyContent='flex-end'>
                <Form.Item>
                  <li>
                    Already a user.
                    <Link href='Login' variant='body2'>
                      <u>Login</u>
                    </Link>
                  </li>
                </Form.Item>
              </Form>
            </Form>
          </Box>
        </Container>
      </Paper>
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
    </div>
  );
};

export default RegisterPage;
