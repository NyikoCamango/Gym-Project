import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import { useState } from "react";
import AsyncStorage from "react-async";

const LoginPage = ({ navigation }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    if (values.username === "admin" && values.password === "secret") {
      history.push("/dash");
    } else if (
      values.username === "bond@mail.com" &&
      values.password === "mam"
    ) {
      history.push("/profilesummary");
    } else if (
      values.username === "tshepo@mail.com" &&
      values.password === "mam"
    ) {
      history.push("/profilesumary");
    }
    console.log("Success:", values);
    alert("Success:", values);
    fnRegister();
  };
  const fnRegister = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
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
      if (user.role === "admin") {
        navigation.navigate("dash");
      } else {
        navigation.navigate("profilesummary");
      }
    }
  };

  return (
    <React.Fragment>
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
      <br />
      <br />/<br />
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component='h1' variant='h5' sx={{ m: 1 }}>
            Sign-in
          </Typography>
          <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.Item
              label='Username'
              name='username'
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                onChange={(e) => {
                  {
                    setUsername(e.target.value);
                  }
                }}
                value={username}
              />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                onChange={(e) => {
                  {
                    setPassword(e.target.value);
                  }
                }}
                value={password}
              />
            </Form.Item>

            <Form.Item
              name='remember'
              valuePropName='checked'
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type='primary' htmlType='submit' onClick={fnRegister}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default LoginPage;
