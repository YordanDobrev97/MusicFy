import React, { useState, useEffect } from "react";
import firebase from "../../config";

import "./player.css";

const Player = (props) => {
  const [play, setPlay] = useState(false);

  const url = play ? `${props.link}?autoplay=1` : `${props.link}`;

  useEffect(() => {
    const songs = firebase
      .firestore()
      .collection("songs")
      .get()
      .then((snapshot) => {
        const song = snapshot.docs.map((doc) => doc.data());
        console.log(song);
      });
  });

  return (
    <div className="player-container">
      <div className="container">
        <button onClick={() => setPlay(!play)} className="play"></button>
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
