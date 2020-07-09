import React, { Component } from "react";
import {Navbar, Form, Button, FormControl} from "react-bootstrap/";
import styles  from './navigation.module.css';

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className={styles.navigation}>
        <Navbar.Brand href="/">
          <span className={styles.logo}>MusicFy-App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className='m-auto'>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
