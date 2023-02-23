import { Stack, Alert, AlertTitle, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserViewAnnouncementPage = ({ context }) => {
  const [list, setList] = useState([]);
  const [initLoading, setInitLoading] = useState(true);
  const getComplaints = async () => {
    let url = ` https://fetch-your-body.herokuapp.com/public/annoucement`;
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
      getComplaints();
    }
  }, [context]);
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
      <br></br>

      <Typography align='center' component='h1' variant='h3' sx={{ m: 1 }}>
        <span>User Announcements</span>
      </Typography>

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
          severity='info'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>Announcement</AlertTitle>There is going to be an event
          next week monday for abbs
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          severity='info'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>Announcement</AlertTitle>Bring your swimming clothes on
          Tuesday between 3:00 p.m-4:30 p.m
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          severity='info'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>Announcement</AlertTitle>Doctor Dans will give a talk on
          food intake for certain body goals
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          severity='info'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>Announcement</AlertTitle>There will be a soccer match
          event at SWC campus therefore the gym will close earlier than normal
          on Thursday 30 June
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          severity='info'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>Announcement</AlertTitle>New announcement to be made
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          severity='info'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>Announcement</AlertTitle>Netball trials this thursday
        </Alert>
      </Stack>
      <br></br>
      <Stack>
        <Alert
          sx={{ width: "80%", margin: "auto" }}
          severity='info'
          onClose={() => alert("Close complaint")}
        >
          <AlertTitle>Announcement</AlertTitle>Soccer trials this Friday
        </Alert>
      </Stack>
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
                  <a href='Ulink.co.ca'>
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
};

export default UserViewAnnouncementPage;
