import React, { useState, useEffect, useContext } from "react";

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
    <div class="container-audio">
        <h1>You are currently listening: {songName}</h1>
        <p>Time: {time}</p>
        {song ? (<React.Fragment></React.Fragment>) : (<button>Pause</button>)}
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
