<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
=======
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faFastBackward,
  faPauseCircle,
  faPlayCircle,
  faForward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";
>>>>>>> 2ba9e3de5e392c116f124859f21b2affa7b76e9d

import "./player.css";
import SongContext from '../../SongContext'

const Player = (props) => {
  const context = useContext(SongContext)
  const [song, setPlay] = useState(context[0]);
  const [time, setTime] = useState("0")
  const [currentTime, setCurrentTime] = useState("0")
  const [songName, setName] = useState("")

  useEffect(() => {
    const {link, time, name} = context[0];
    console.log(link);
    setPlay(link + '?autoplay=1')
    setTime(time)
    setName(name)
  }, [context]);

  return (
<<<<<<< HEAD
    <div class="container-audio">
        <h1>You are currently listening: {songName}</h1>
        <p>Time: {time}</p>
        {song ? (<React.Fragment></React.Fragment>) : (<button>Pause</button>)}
=======
    <div className="player-container">
      <div className="btn-group">
        <button type="button" className="btn btn-dark">
          <FontAwesomeIcon icon={faFastBackward} style={{ color: "grey" }} />
        </button>
        <button type="button" className="btn btn-dark">
          <FontAwesomeIcon icon={faBackward} style={{ color: "grey" }} />
        </button>
        <button type="button" className="btn btn-dark">
          <FontAwesomeIcon icon={faPauseCircle} style={{ color: "grey" }} />
        </button>
        <button type="button" className="btn btn-dark">
          <FontAwesomeIcon icon={faPlayCircle} style={{ color: "grey" }} />
        </button>
        <button type="button" className="btn btn-dark">
          <FontAwesomeIcon icon={faForward} style={{ color: "grey" }} />
        </button>
        <button type="button" className="btn btn-dark">
          <FontAwesomeIcon icon={faFastBackward} style={{ color: "grey" }} />
        </button>
      </div>
      <div class="main-control">
        <div className="btn _timeline">
          <span className="current-time">00:00</span>
          <span className="timescope">
            <span className="timescope-dot"></span>
          </span>
          <span className="end-time">4:00</span>
        </div>
      </div>
      <div className="video">
>>>>>>> 2ba9e3de5e392c116f124859f21b2affa7b76e9d
        <iframe
          width="560"
          height="315"
          src={song}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
    </div>
  );
};

export default Player;
