import React, { Component } from "react";
import songService from "../Services/list-song";
import Songs from '../Async/LoadSong';

import styles from '../Home/home.module.css';

class ListSong extends Component {
  async getSongs() {
    const songs = await songService.getMostLikes()
    return songs;
  }

  render() {
    return (
      <div>
         <div className={styles.contaner}>
               <img className={styles.img} src='https://i2.sndcdn.com/artworks-000352463268-5bfny8-t500x500.jpg'/>
               <img className={styles.img} src='https://i.ytimg.com/vi/o7iL2KzDh38/maxresdefault.jpg'/>
               <img className={styles.img} src='https://i.ytimg.com/vi/cY3zyFSoD5E/maxresdefault.jpg'/>
           </div>
      </div>
    );
  }
}

export default ListSong;
