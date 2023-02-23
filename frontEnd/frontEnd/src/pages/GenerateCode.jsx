import React from "react";
import QRCode from "qrcode";
import { useState } from "react";
import Button from "@mui/material/Button";
import AdminNavigation from "./Navigation/AdminNavigation";
import Container from "@mui/material/Container";

function GenerateCode() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQr(url);
      }
    );
  };

  const headerstyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  const labelstyle = {
    color: "#8d8d8d",
    position: "absolute",
    top: "75px",
    left: "230px",
    background: "white",
    transition: "300ms",
    transform: "translate(-50%, -50%)",
  };

  const ImageSize = {
    height: "400px",
    width: "400px",
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
      </div>
      <AdminNavigation />

      <Container>
        <footer className='main-footer'>
          <div className='app'>
            <br></br>
            <br></br>
            <br></br>

            <h1 style={headerstyle}>QR Generator</h1>
            <br></br>

            <input
              type='datetime-local'
              placeholder='e.g. https://google.com'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <br></br>
            <br></br>
            <Button variant='contained' onClick={GenerateQRCode}>
              Generate
            </Button>
            <br></br>
            <br></br>
            {qr && (
              <>
                <img style={ImageSize} src={qr} />
                <Button
                  variant='contained'
                  color='success'
                  href={qr}
                  download='qrcode.png'
                >
                  Download
                </Button>
              </>
            )}
          </div>
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
      <br></br>
      <br></br>
    </div>
  );
}

export default GenerateCode;
