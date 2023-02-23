import React from "react";
import Slider from "react-slick";
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { width } from "@mui/system";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "Orange", fontSize: "30px" }} />
    </div>
  );
};
const Nextbtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "Orange", fontSize: "30px" }} />
    </div>
  );
};
function Testimonials() {
  return (
    <div className='' style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "50%" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<Nextbtn />}>
          <Card img='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp' />
          <Card img='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5.webp' />
          <Card img='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4.webp' />
        </Slider>
      </div>
    </div>
  );
}
Card = ({ img }) => {
  return (
    <div
      className='Testimonial'
      style={{
        display: "flex",
        color: "gray",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />
      <p style={{ marginTop: 25 }}>
        {" "}
        I lost 13kg in 3 months thanks to the UJ GYM app
      </p>
      <p>
        {" "}
        <b>
          <i>JOSH WILLIAM</i>
        </b>
        , Trainer
      </p>
    </div>
  );
};
export default Testimonials;
