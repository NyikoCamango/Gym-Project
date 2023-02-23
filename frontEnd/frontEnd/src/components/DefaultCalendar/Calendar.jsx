import React from "react";
import { useState } from "react";
import Calendars from "react-calendar";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Calendars onChange={setDate} value={date} />
    </div>
  );
}
