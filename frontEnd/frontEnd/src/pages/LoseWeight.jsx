import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputLabel, Select, MenuItem } from "@mui/material";
import { Form, Input, Button } from "antd";
import FormControl from "@mui/material/FormControl";
import UserNavigation from "./Navigation/Usernavigation";

const LoseWeightPage = () => {
  const [currentweight, setcurrentWeight] = useState("");
  const [bodygoalweight, setbodygoalWeight] = useState("");
  const [selectDuration, setDuration] = useState("");

  //function to update user Body Goal
  const NewBodyGoal = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/BodyGoal`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentweight,
        bodygoalweight,
        selectDuration,
      }),
    });
    const { user } = await response.json();
    console.log(user);
    alert("Successfully updated User details");
  };

  return (
    <div>
      <div>
        <header id='header'>
          <nav className='main-header navbar navbar-expand navbar-blue navbar-light'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  data-widget='pushmenu'
                  href='home'
                  role='button'
                >
                  <i className='fas fa-bars' />
                </a>
              </li>
              <h4>UJ GYMNASIUM</h4>
            </ul>
          </nav>
        </header>
      </div>
      <br></br>
      <br></br>
      <footer className='main-footer'>
        <Container>
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
              initialValues={{ remember: true }}
              onFinish={NewBodyGoal}
              autoComplete='off'
            >
              <Typography component='h2' variant='h5' sx={{ m: 2 }}>
                GETTING SHREDDED
              </Typography>
              <Form.Item
                name='currentweight'
                rules={[{ required: true, message: "Please current weight!" }]}
              >
                <div>
                  <img src='assets/icon/icon3.png' alt='#' />
                </div>
                <label>What is your current weight? (in kg's)</label>
                <Input fullWidth onChange={(e) => setcurrentWeight(e)} />
              </Form.Item>

              <Form.Item
                name='bodygoalweight'
                rules={[
                  {
                    required: true,
                    message: "Please input targetted body weight!",
                  },
                ]}
              >
                <label>What is your targeted goal?(in kg's)</label>
                <Input fullWidth onChange={(e) => setbodygoalWeight(e)} />
              </Form.Item>

              <Form.Item>
                <label>Select program you want to enroll with</label>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Month(s)
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    /*value={age}*/
                    label='Age'
                    onChange={(e) => setDuration(e)}
                    /*onChange={handleChange}*/
                  >
                    <MenuItem value={1}>0-3 months</MenuItem>
                    <MenuItem value={2}>3-6 months</MenuItem>
                    <MenuItem value={3}>6-9 months</MenuItem>
                    <MenuItem value={4}>9-12 months</MenuItem>
                  </Select>
                </FormControl>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Box>
        </Container>
      </footer>

      <UserNavigation />
      <footer className='main-footer'>
        <br></br>

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
                  <a href='Ulink.co.za'>
                    <i class='fa fa-facebook'></i>
                  </a>
                  <a href='Ulink.co.za'>
                    <i class='fa fa-instagram'></i>
                  </a>
                  <a href='Ulink.co.za'>
                    <i class='fa fa-envelope'></i>
                  </a>
                </div>
              </div>
            </div>

            <div class='col-lg-3  col-md-8 col-sm8'>
              <div class='single-footer-widget'>
                <h4>Terms of service</h4>
                <li>
                  <a href='announcement'>Privacy Policy</a>
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
        <br></br>
      </footer>
    </div>
  );
};
export default LoseWeightPage;
