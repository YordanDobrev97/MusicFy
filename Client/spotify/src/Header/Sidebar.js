import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from '../Home';
import Songs from '../Songs';
import Playlist from '../Playlist';
import Login from '../Login';
import Register from '../Register';

import styles from './sidebar.module.css';

class SideBarComponent extends Component {
    render() {
        return (
            <HashRouter>
                <div className={styles.sidenav}>
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
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register'>Register</NavLink>
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