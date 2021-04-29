import React, { useState, useEffect, useContext } from "react";
import "./player.css";
import SongContext from '../../SongContext'

const Player = (props) => {
  const context = useContext(SongContext)
  const [song, setPlay] = useState(context[0]);
  const [songName, setName] = useState("")
  const [video, setVideo] = useState('no-video')

  useEffect(() => {
    const {link, name} = context[0];
    setPlay(link + '?autoplay=1')
    setName(name)

    if (name) {
      setVideo('video')
    }

  }, [context, songName]);

  return (
    <div class="container-audio">
        <h1>You are currently listening: {songName}</h1>
    <div className={video}>
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
