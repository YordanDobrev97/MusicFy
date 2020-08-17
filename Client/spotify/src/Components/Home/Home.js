import React, { Component } from 'react';
import songService from '../Services/list-song';
import Songs from '../Async/LoadSong';
import MusicPlayer from '../MusicPlayer/index';

import styles from './home.module.css';

class Home extends Component{
    async randomSongs() {
        const songs = await songService.getRandomSongs();
        return songs;
    }


    render() {
        return (
           <div>
               <img className={styles.img} width='230px' height='230px' src='https://i.ytimg.com/vi/o7iL2KzDh38/maxresdefault.jpg'/>
               <img className={styles.img} width='230px' height='230px' src='https://i.ytimg.com/vi/cY3zyFSoD5E/maxresdefault.jpg'/>
           </div>
        )
    }
}

export default Home;