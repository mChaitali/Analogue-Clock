import { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <div className="clock">
      <div className="numbers">
        <div className="number twelve">12</div>
        <div className="number three">3</div>
        <div className="number six">6</div>
        <div className="number nine">9</div>
      </div>
      <div
        className="hour_hand"
        style={{
          transform: `rotate(${
            (time.getHours() + time.getMinutes() / 60) * 30
          }deg)`,
        }}
      ></div>
      <div
        className="minute_hand"
        style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}
      ></div>
      <div
        className="second_hand"
        style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
      ></div>
    </div>
  );
}

export default Clock;
