import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/contactus">Contact Us</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>          
            <Menu.Item>
                <Link to="/login">Login</Link>
            </Menu.Item>            
        </Menu.Menu>
      </Menu>
    )
  }
}