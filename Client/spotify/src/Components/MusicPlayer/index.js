import React, { Component } from 'react';
import styles from './player.module.css';
import file from '../Audio/Alec Benjamin - Let Me Down Slowly.mp3';

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
               <div className="d-flex justify-content-center">
                    <audio controls  loop autoplay>
                        <source src={file} type="audio/ogg" />
                    </audio>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;