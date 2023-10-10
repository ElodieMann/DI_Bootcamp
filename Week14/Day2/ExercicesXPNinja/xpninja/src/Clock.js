import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [dayOfMonth, setDayOfMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  const updateDateTime = () => {
    const currentDate = new Date();
    setYear(currentDate.getFullYear());
    setMonth(currentDate.getMonth() + 1);
    setDayOfWeek(currentDate.getDay());
    setDayOfMonth(currentDate.getDate());
    setHour(currentDate.getHours());
    setMinute(currentDate.getMinutes());
    setSecond(currentDate.getSeconds());
  };
  useEffect(() => {
    const interval = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="clock">
        <div className="linear">
          <div>{year}</div>
          <div>{month} month</div>
          <div>{dayOfWeek} day of week  </div>
          <div>{dayOfMonth} day of month </div>
          <div>{hour < 10 ? `0${hour}` : hour} : </div>
          <div>{minute < 10 ? `0${minute}` : minute} : </div>
          <div>{second < 10 ? `0${second}` : second} : </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
