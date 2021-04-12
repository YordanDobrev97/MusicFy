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

import "./player.css";

const Player = (props) => {
  const [play, setPlay] = useState(false);

  const url = play ? `${props.link}?autoplay=1` : `${props.link}`;
  let playerBtn = "play";
  if (play) {
    playerBtn = "pause";
  }

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
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
        <iframe
          width="560"
          height="315"
          src={url}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
