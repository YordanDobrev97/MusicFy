import React, { Component } from 'react';
import songService from '../Services/list-song';
import Songs from '../Async/LoadSong';

class Home extends Component{
    async randomSongs() {
        const songs = await songService.getRandomSongs();
        return songs;
    }

    render() {
        return (
            <div>
                <Songs songs={this.randomSongs}/>
            </div>
        )
    }
}

export default Home;