import React from "react";
import "./style.css";

const profile = {
  name: "sample name",
  surname: "sample surname",
  hobbies: ["sioocer", "movies", "chatting"],
  someOtherThings: [
    {
      key: 2,
      value: "some 2 value",
    },
    {
      key: 5,
      value: "some 5 value",
    },
  ],
};

const attendence = [
  {
    date: "20 - 01 - 2022",
    jnr: 23,
    mid: 50,
    snr: 20,
  },
  {
    date: "22 - 01 - 2022",
    jnr: 23,
    mid: 50,
    snr: 20,
  },
  {
    date: "23 - 01 - 2022",
    jnr: 23,
    mid: 50,
    snr: 20,
  },
  {
    date: "24 - 01 - 2022",
    jnr: 23,
    mid: 50,
    snr: 20,
  },
  {
    date: "25 - 01 - 2022",
    jnr: 23,
    mid: 50,
    snr: 20,
  },
  {
    date: "26 - 01 - 2022",
    jnr: 23,
    mid: 50,
    snr: 20,
  },
];

export default function App() {
  return (
    <>
      <div>
        <h1>{profile.name}</h1>
        <p>{profile.surname}</p>
        {profile.hobbies.map((hobby) => (
          <p> - {hobby}</p>
        ))}
      </div>

      <div>
        {profile.someOtherThings.map((item) => (
          <>
            <p>{item.key}</p>
            <span>{item.value}</span>
          </>
        ))}
      </div>

      {/* Attendence */}
      <div>
        <h2>Attendence</h2>

        <div>
          {attendence.map((item) => (
            // display date, and totals,
            <>
              <div>date: {item.date}</div>
              <div>Snr: {item.snr}</div>
              <div>Jnr: {item.jnr}</div>
              <div>Md {item.mid}</div>
              <br />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
