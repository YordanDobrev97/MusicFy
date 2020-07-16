import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from '../../Home';
import Songs from '../Song/Songs';
import Playlist from '../Playlist/Playlist';
import Login from '../Login/Login';
import Register from '../Register/Register';

import styles from './sidebar.module.css';

class SideBarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isHide: false
        }
    }

    hideSideBar = () => {
      this.setState({
          isHide: !this.state.isHide
      })
  }
  
    render() {
        return (
            //back to home logic todo...
            <HashRouter>
                <div className={this.state.isHide ? styles.hide: styles.sidenav}>
                    <ul>
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/songs'>Songs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/playlist'>Playlist</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' isHide={false} onClick={this.hideSideBar}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register' isHide={false} onClick={this.hideSideBar}>Register</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <Route path='/home' component={Home} />
                    <Route path='/songs' component={Songs} />
                    <Route path='/playlist' component={Playlist} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    </div>
            </HashRouter>
        )
    }
}

export default SideBarComponent;