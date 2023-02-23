import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { List } from "antd";
import { context } from "react";
import QrCode from "./QrCode";
import Usernavigation from "./Navigation/Usernavigation";
import GenerateCode from "./GenerateCode";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const Mainheaderstyle = {
  color: "white",
  backgroundColor: "DodgerOrange",
  padding: "10px",
  fontFamily: "Arial",
};
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, surname, arrivetime, exittime) {
  return { name, surname, arrivetime, exittime };
}

const rows = [
  createData("Chris", "Excel", "12h00", "13h33"),
  createData("Masego", "Tlabe", "07h44", "08h20"),
  createData("Rhulani", "Maseko", "10h11", "12h14"),
  createData("James", "parker", "12h23", "16h00"),
];

export default function CustomizedTables() {
  const [index, setIndex] = useState("");
  const quotes = [
    {
      quote: "SHJKHFJK",
    },
    {
      quote: "DLKSOPD",
    },
    {
      quote: "UEYYDCV",
    },
    {
      quote: "APOEPJK",
    },

    {
      quote: "QOWIEUE",
    },
    {
      quote: "SCNXSDK",
    },
    {
      quote: "SOWIDIU",
    },
    {
      quote: "QPWEEII",
    },
    {
      quote: "CUUERY",
    },
    {
      quote: "UERTYRT",
    },

    {
      quote: "PCVSKLC",
    },
    {
      quote: "NCBSUE",
    },
    {
      quote: "MSWDIJK",
    },
  ];
  const generate = () => {
    const indexs = Math.floor(Math.random() * quotes.length);
    setIndex(indexs);
  };
  const [list, setList] = useState([]);
  const [lists, setLists] = useState([]);
  const [initLoading, setInitLoading] = useState(true);
  const getMembers = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/attendance`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { list } = await response.json();
    setInitLoading(false);
    setList(list);
  };

  useEffect(() => {
    getMembers();
  });
  const HandleSubmit = () => {
    attend();
    alert("Attendance successfully recorded");
  };
  const attend = async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/attendance`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { lists } = await response.json();
    setInitLoading(false);
    setLists(lists);
  };

  useEffect(() => {
    attend();
  });
  return (
    <div>
      <header id='header'>
        <hr></hr>
        <div class='container'>
          <div class='row align-items-center justify-content-center d-flex'>
            <nav id='nav-menu-container'>
              <ul class='nav-menu'>
                <li>
                  <a href='Trainers'>TRAINERS</a>
                </li>
                <li>
                  <a href='gymlocation'>GYMLOCATION</a>
                </li>
                <li>
                  <a href='Attendance'>ATTENDANCE</a>
                </li>
                <li>
                  <a href='usercomplaints'>ADD-COMPLAIN</a>
                </li>
                <li>
                  <a href='UserViewAnnouncement'>VIEW-ANNOUNCEMENTS</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <br></br>
      <br></br>
      <br></br>
      <Usernavigation />
      <br></br>
      <br></br>
      <br></br>
      <footer className='main-footer'>
        <div className='app'></div>
        <Container component='main' maxWidth='lg'>
          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": { m: 1, width: "151ch" },
            }}
            noValidate
            autoComplete='off'
          >
            <div>
              <Typography
                align='center'
                component='h1'
                variant='h3'
                sx={{ m: 1 }}
              >
                {" "}
                <span>
                  {" "}
                  <b>Attendance Register</b>
                </span>
              </Typography>
            </div>
            <br />
            <div>
              <GenerateCode />
            </div>

            <div>
              <Button variant='outlined' onClick={generate}>
                {" "}
                GetCODE
              </Button>
              <div>
                {" "}
                <Typography component='h7' variant='h7' sx={{ m: 1 }}>
                  <i> Please enter the attendance code</i>
                </Typography>
              </div>
              <div>
                <br />
                <Typography value={index}>
                  <b>* {quotes[index] && quotes[index].quote}*</b>{" "}
                </Typography>
              </div>
              <div>
                <TextField
                  size='lg'
                  id='Code'
                  label='Code'
                  multiline
                  fullWidth
                  rows={1}
                  variant='outlined'
                  rules={[{ required: true }]}
                />
              </div>
              <br />
              <div>
                <Typography component='h7' variant='h7' sx={{ m: 1 }}>
                  <i>Please enter your name</i>
                </Typography>
              </div>
              <div>
                <TextField
                  size='lg'
                  id='name'
                  label='name'
                  multiline
                  fullWidth
                  rows={1}
                  variant='outlined'
                  rules={[{ required: true }]}
                />
              </div>
              <br />
              <div>
                <Typography component='h7' variant='h7' sx={{ m: 1 }}>
                  <i>Please enter your surname</i>
                </Typography>
              </div>
              <div>
                <TextField
                  size='lg'
                  id='surname'
                  label='surname'
                  multiline
                  fullWidth
                  rows={1}
                  variant='outlined'
                  rules={[{ required: true }]}
                />
              </div>
              <div>
                {" "}
                <Typography component='h7' variant='h7' sx={{ m: 1 }}>
                  <i>Select Arrival time</i>
                </Typography>
              </div>

              <div>
                <TextField
                  id='arrive time'
                  label='Arrival'
                  type='datetime-local'
                  defaultValue='2022-12-24T10:30'
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <br />
              <div>
                {" "}
                <Typography component='h7' variant='h7' sx={{ m: 1 }}>
                  <i>Select Departure Time</i>
                </Typography>
              </div>

              <div>
                <TextField
                  id='departure atime'
                  label='Departure'
                  type='datetime-local'
                  defaultValue='2022-12-24T10:30'
                  sx={{ width: 250 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <br />
              <div>
                <Button onclick={HandleSubmit} variant='contained'>
                  {" "}
                  SUBMIT
                </Button>
              </div>

              <br />
            </div>
          </Box>
          <footor />

          <List
            className='demo-loadmore-list'
            loading={initLoading}
            itemLayout='horizontal'
            dataSource={list}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a onClick={() => attend(item.id)} key={item.id}>
                    Attend
                  </a>,
                ]}
              >
                {/* <Skeleton avatar title={false} loading={item.loading} active> */}
                <List.Item.Meta
                  //   avatar={<Avatar src={item.picture.large} />}
                  title={item.title}
                  description={`Scheduled for ${item.eventDate.substring(
                    0,
                    10
                  )}`}
                />
                <div>{item.description}</div>
                {/* </Skeleton> */}
              </List.Item>
            )}
          />
          <List
            className='demo-loadmore-list'
            loading={initLoading}
            itemLayout='horizontal'
            dataSource={lists}
            renderItem={(item) => (
              <List.Item
                actions={
                  context === "MEMBER" && [
                    <a onClick={() => attend(item.id)} key={item.id}>
                      Todays Attendance
                    </a>,
                  ]
                }
              >
                {/* <Skeleton avatar title={false} loading={item.loading} active> */}
                <List.Item.Meta
                  //   avatar={<Avatar src={item.picture.large} />}
                  title={<a href='https://ant.design'>{item.email}</a>}
                  description={`Joined on ${item.updatedAt.substring(0, 10)}`}
                />
                {/* <div>content</div> */}
                {/* </Skeleton> */}
              </List.Item>
            )}
          />
        </Container>
      </footer>
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
}
