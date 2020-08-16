import React, { Component } from 'react';
import songService from '../Services/list-song';
import Songs from '../Async/LoadSong';
import styles from './home.module.css';

class Home extends Component{
    async randomSongs() {
        const songs = await songService.getRandomSongs();
        return songs;
    }

    render() {
        return (
           <div className={styles.contaner}>
               <img className={styles.img} src='https://i2.sndcdn.com/artworks-000352463268-5bfny8-t500x500.jpg'/>
               <img className={styles.img} src='https://i.ytimg.com/vi/o7iL2KzDh38/maxresdefault.jpg'/>
               <img className={styles.img} src='https://i.ytimg.com/vi/cY3zyFSoD5E/maxresdefault.jpg'/>
           </div>
        )
    }
}

export default Home;