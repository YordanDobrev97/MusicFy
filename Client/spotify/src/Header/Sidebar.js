import React, { Component } from 'react';
import styles from './sidebar.module.css';

class SideBarComponent extends Component {
    render() {
        return (
            <div className={styles.sidenav}>
                <a href="/home">Home</a>
                <a href="/songs">Songs</a>
                <a href="/playlist">Playlist</a>
                <a href="/login">Login</a>
                <a href="/register">Register</a>
          </div>
        )
    }
}

export default SideBarComponent;