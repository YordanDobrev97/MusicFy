import React, { useState, useEffect } from "react";
import firebase from "../../config";
import Player from "../Player/index";

import styles from "./style.module.css";

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("songs")
      .get()
      .then((snapshot) => {
        const songs = snapshot.docs.map((doc) => doc.data());
        setSongs(songs);
      });
  }, []);
  return (
    <div className={styles["song-container"]}>
      {songs.map((song) => {
        return (
          <div
            className="card col-sm-6 w-50"
            style={{ maxWidth: "30%", backgroundColor: "firebrick" }}
          >
            <h3>
              {song.artist} - {song.name}
            </h3>
            ;
            <img
              width="200"
              height="180"
              src={song.image}
              style={{
                margin: "auto",
              }}
            />
            <Player link={song.youtubeLink} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
