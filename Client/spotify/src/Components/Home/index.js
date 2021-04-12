import React, { useState, useEffect, useContext } from "react";
import firebase from "../../config";

import styles from "./style.module.css";
import SongContext from "../../SongContext";

const Home = (props) => {
  const [songs, setSongs] = useState([]);
  const [currentCount, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(6);
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

  const nextSongs = () => {
    if (maxCount < songs.length) {
      setCount(maxCount);
      setMaxCount(maxCount + 6);
    }
  };

  const prevSongs = () => {
    if (!(currentCount == 0 && maxCount == 6)) {
      setCount(currentCount - 6);
      setMaxCount(maxCount - 6);
    }
  };

  const currentSongs = songs.slice(currentCount, maxCount);
  return (
    <div className={styles["song-container"]}>
      {currentSongs.map((song) => {
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

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={prevSongs}>
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextSongs}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
