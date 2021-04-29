import React, { useState, useEffect, useContext } from "react";
import "./player.css";
import SongContext from '../../SongContext'

const Player = (props) => {
  const context = useContext(SongContext)
  const [song, setPlay] = useState(context[0]);
  const [time, setTime] = useState("0")
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [songName, setName] = useState("")
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    const {link, time, name} = context[0];
    if (name) {
      setPlay(link + '?autoplay=1')
      setTime(time)
      setName(name)
    }

    if (time === `${minutes}:${seconds}`) {
      setFinish(true)
    }

    if (finish) {
      setSeconds(0)
      setMinutes(0)
      setTime("0")
      setPlay("")
      setFinish(true)
    }

    let interval;
    if (songName) {
        interval = setInterval(() => {
        const newTime = seconds + 1

        if (newTime > 59) {
            setSeconds(0)
            setMinutes(minutes + 1)
        } else {
            setSeconds(newTime)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [context, seconds, songName, finish]);

  const timing = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
  return (
    <div class="container-audio">
        <h1>You are currently listening: {songName}</h1>
    <div className="player-container">
      <div className="btn-group">
      </div>
      <div class="main-control">
        <div className="btn _timeline">
          <span className="current-time">{timing}</span>
          <span className="timescope">
            <span className="timescope-dot"></span>
          </span>
          <span className="end-time">{time}</span>
        </div>
      </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={song}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
      </div>
    </div>
    </div>
  );
};

export default Player;
