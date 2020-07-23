import React from 'react';
import Async from "react-async";
import ReactPlayer from "react-player";
import styles from '../Song/song.module.css'

function Songs(props) {
    const {songs} = props;
    return (
        <div>
            <Async promiseFn={songs}>
              {({ data, err, isLoading }) => {
                if (isLoading) return "Loading...";
                if (err) return `Something went wrong`;
    
                if (data)
                  return (
                    <div>
                      {data.map((s) => (
                        <div className={styles["player-wrapper"]}>
                          <ReactPlayer className={styles["react-player"]} url={s.sourceUrl} width='80%' height='80%'/>
                          <div>❤️ {s.likes}</div>
                        </div>
                      ))}
                    </div>
                  )
              }}
            </Async>
        </div>
    )
}

export default Songs;