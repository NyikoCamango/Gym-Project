import QRCode from "qrcode";
import Button from "@mui/material/Button";
import React from "react";
import { useState } from "react";

function QrCode() {
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
      <div className='app'>
        <h1>QR Generator</h1>
        <input
          type='text'
          placeholder='e.g. UJ QR CODE'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant='contained' onClick={GenerateQRCode}>
          Generate
        </Button>
        {qr && (
          <>
            <img src={qr} alt=""/>
            <Button
              variant='outlined'
              color='success'
              href={qr}
              download='qrcode.png'
            >
              Download
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default QrCode;
