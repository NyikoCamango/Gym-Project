import { Stack, Alert, AlertTitle, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AdminNavigation from "../pages/Navigation/AdminNavigation";
import Container from "@mui/material/Container";

const ComplaintPage = ({ context }) => {
  const [list, setList] = useState(null);
  const [initLoading, setInitLoading] = useState(true);
  const getComplaints = async () => {
    let url = ` https://fetch-your-body.herokuapp.com/public/complain`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { complaints } = await response.json();
    setInitLoading(false);
    setList(complaints);
  };

  /*Gettting complaints*/
  const festchcomplaints = () => {
    fetch(` https://fetch-your-body.herokuapp.com/public/complain`)
      .then((res) => res.json())
      .then((respond) => {
        console.log(JSON.stringify(respond)[1]);
        setList(respond);
      });
  };
  useEffect(() => {
    getComplaints();
    festchcomplaints();
    if (context === "complain") {
      /* getComplaints();*/
    }
  }, [context]);

  /*const functionRenderComplaints = () => {
    console.log(list);
    if (list == null) {
      return (
        <Stack>
          <Alert
            sx={{ width: "80%", margin: "auto" }}
            variant='filled'
            severity='error'
            onClose={() => alert("Close complaint")}
          >
            <AlertTitle> No complain received from server</AlertTitle>
          </Alert>
        </Stack>
      );
    } else {
      return (
        <Stack>
          <Alert
            sx={{ width: "80%", margin: "auto" }}
            variant='filled'
            severity='error'
            onClose={() => alert("Close complaint")}
          >
            <AlertTitle>Complaint</AlertTitle>
          </Alert>
        </Stack>
      );
    }
  };*/

  /* const getingComplaints = async () => {
    let url = ` https://fetch-your-body.herokuapp.com/public/complain`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { complaints } = await response.json();
    setInitLoading(false);
    setList(complaints);
  };
  useEffect(() => {
    if (context === "complaint") {
      getingComplaints();
    }
  }, [context]);*/

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
                  href='#'
                  role='button'
                >
                  <i className='fas fa-bars' />
                </a>
              </li>
              <h4>UJ GYMNASIUM</h4>
            </ul>
          </nav>
        </header>
        <AdminNavigation />
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container>
        <footer className='main-footer'>
          <Typography align='center' component='h1' variant='h3' sx={{ m: 1 }}>
            <span>User Complaints</span>
          </Typography>
          {festchcomplaints}
          <List
            className='demo-loadmore-list'
            loading={initLoading}
            itemLayout='horizontal'
            dataSource={list}
            renderItem={(item) => (
              <List.Item actions={context === "complaint"}>
                {/* <Skeleton avatar title={false} loading={item.loading} active> */}
                <List.Item.Meta
                  //   avatar={<Avatar src={item.picture.large} />}
                  title={<a href='https://ant.design'>{item.email}</a>}
                  description={`JDate filed ${item.updatedAt.substring(0, 10)}`}
                />
                {/* <div>content</div> */}
                {/* </Skeleton> */}
              </List.Item>
            )}
          />
          <Stack>
            <Alert
              sx={{ width: "80%", margin: "auto" }}
              variant='filled'
              severity='error'
              onClose={() => alert("Close complaint")}
            >
              <AlertTitle>Complaint</AlertTitle>The app takes time to load
            </Alert>
          </Stack>
          <br></br>
          <Stack>
            <Alert
              sx={{ width: "80%", margin: "auto" }}
              variant='filled'
              severity='error'
              onClose={() => alert("Close complaint")}
            >
              <AlertTitle>Complaint</AlertTitle>The workout provided hasn't been
              effective on me even though I have been putting in the work
            </Alert>
          </Stack>
          <br></br>

          <br></br>
          <Stack>
            <Alert
              sx={{ width: "80%", margin: "auto" }}
              variant='filled'
              severity='error'
              onClose={() => alert("Close complaint")}
            >
              <AlertTitle>Complaint</AlertTitle>The shower today was cold
            </Alert>
          </Stack>
          <br></br>
          <Stack>
            <Alert
              sx={{ width: "80%", margin: "auto" }}
              variant='filled'
              severity='error'
              onClose={() => alert("Close complaint")}
            >
              <AlertTitle>Complaint</AlertTitle>The showers need to be clean
            </Alert>
          </Stack>
          <br></br>
          <Stack>
            <Alert
              sx={{ width: "80%", margin: "auto" }}
              variant='filled'
              severity='error'
              onClose={() => alert("Close complaint")}
            >
              <AlertTitle>Complaint</AlertTitle>The toilets are not clean
            </Alert>
          </Stack>
        </footer>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
        <br></br>
      </footer>
    </div>
  );
};

export default ComplaintPage;
