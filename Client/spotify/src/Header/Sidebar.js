import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from '../Home';
import Songs from '../Songs';
import Playlist from '../Playlist';
import Login from '../Login';
import Register from '../Register';

import styles from './sidebar.module.css';

class SideBarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isHide: false
        }
    }

    login = () => {
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
                            <NavLink to='/login' isHide={false} onClick={this.login}>Login</NavLink>
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