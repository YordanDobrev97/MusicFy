import React, { Component } from "react";
import Async from "react-async";
import ReactPlayer from "react-player";
import { Button } from 'react-bootstrap'

import songService from "../Services/list-song";
import styles from './song.module.css'

class Songs extends Component {
  async getSongs() {
    const songs = await songService.getAll();

    const result = [];
    Object.keys(songs).map((key) => {
      result.push(songs[key]);
    });

    return result;
  }

  render() {
    return (
      <div>
        <Async promiseFn={this.getSongs}>
          {({ data, err, isLoading }) => {
            if (isLoading) return "Loading...";
            if (err) return `Something went wrong`;

            if (data)
              return (
                <div>
                  {data.map((s) => (
                    <div className={styles["player-wrapper"]}>
                      <ReactPlayer className={styles["react-player"]} url={s.sourceUrl} width='80%' height='80%'/>
                      <Button>❤️ {s.likes}</Button>
                    </div>
                  ))}
                </div>
              );
          }}
        </Async>
      </div>
    );
  }
}

export default Songs;
