import React, { Component } from 'react';
import styles from './player.module.css';
import file from '../Audio/Elitsa Naumova ft. Siso - Na Ruba.mp3';

class MusicPlayer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false
        }
    }

    play() {
        this.setState({
            isPlay: true
        })
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <audio className={styles.player} src={file} controls onClick={this.play}></audio>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;