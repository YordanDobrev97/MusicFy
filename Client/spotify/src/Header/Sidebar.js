import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu';

class SideBar extends Component {
    render() {
        return (
            <Menu>
                <a className='menu-item' href='/'>Home</a>
                <a className='menu-item' href='/songs'>Songs</a>
                <a className='menu-item' href='/playlist'>Playlist</a>

                <a className='menu-item' href='/login'>Login</a>
                <a className='menu-item' href='/register'>Register</a>
            </Menu>
        )
    }
}

export default SideBar;