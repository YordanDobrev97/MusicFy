import React, { useState, useEffect, useContext } from "react";
import firebase from "../../config";

import styles from "./style.module.css";
import SongContext from "../../SongContext";

const Home = (props) => {
  const [songs, setSongs] = useState([]);
  let setSong = useContext(SongContext);

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

  const playSong = (link) => {
    const youtbeLink = link.target.value;
    setSong(youtbeLink);
  };

  return (
    <div className={styles["song-container"]}>
      {songs.map((song) => {
        return (
          <div
            key={song.youtbeLink}
            className="card col-sm-6 "
            style={{ maxWidth: "30%", backgroundColor: "slategrey" }}
          >
            <h3>
              {song.artist} - {song.name}
            </h3>

            <img
              width="200"
              height="180"
              src={song.image}
              style={{
                margin: "auto",
              }}
            />
            <button
              className="m-auto w-25 btn btn-primary"
              value={song.youtubeLink}
              onClick={playSong.bind(this)}
            >
              Play
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
