import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { List } from "antd";
import { context } from "react";

import AdminNavigation from "./Navigation/AdminNavigation";

export default function AdminAttendance() {
  const [list, setList] = useState([]);
  const [lists, setLists] = useState([]);
  const [initLoading, setInitLoading] = useState(true);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

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
    createData("Pamela", "Jones", "08h22", "10h22"),
    createData("Willy", "Gomes", "11h33", "12h33"),
    createData("Game", "fruit", "15h22", "16h00"),
    createData("Kelly", "Smith", "08h23", "09h21"),
    createData("Rick", "James", "11h23", "12h00"),
    createData("Thandiwe", "Masuku", "10h22", "11h30"),
    createData("Danny", "Willp", "13h21", "15h22"),
    createData("Tshepo", "Themba", "10h20", "11h20"),
  ];
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
                <li class='menu-active'>
                  <a href='welcome'>MEMBERS</a>
                </li>
                <li>
                  <a href='complaints'>COMPLAINTS</a>
                </li>
                <li>
                  <a href='adminattendance'>ATTENDANCE</a>
                </li>
                <li>
                  <a href='news'>GENERATE-ANNOUNCEMENTS</a>
                </li>
                <li>
                  <a href='qrcode'>GENERATE-QRCODE</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <AdminNavigation />
      <br></br>
      <br></br>
      <footor className='main-footer'>
        <Container component='main' maxWidth='lg'>
          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": { m: 2, width: "141ch" },
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
                  <b>Todays Register</b>
                </span>
              </Typography>
            </div>
            <br />
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align='right'>Surname</StyledTableCell>
                  <StyledTableCell align='right'>ArriveTime</StyledTableCell>
                  <StyledTableCell align='right'>ExitTime</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {row.surname}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {row.arrivetime}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                      {row.exittime}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <List
            className='demo-loadmore-list'
            loading={initLoading}
            itemLayout='horizontal'
            dataSource={list}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <button onClick={() => attend(item.id)} key={item.id}>
                    Attend
                  </button>,
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
      </footor>
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
                  <a href='Ulink.co.za'>Privacy Policy</a>
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
