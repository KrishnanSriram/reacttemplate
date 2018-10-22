import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

export default({type}) => {
    let icon = "users";
    let title = "Home";
    if(type === "home") {
        icon = "users";
        title = "Home";
    } else if(type === "about") {
        icon = "puzzle";
        title = "About";
    } else if(type === "help") {
        icon = "question circle";
        title = "Help";
    } else if(type === "contactus") {
        icon = "tty";
        title = "Contact Us";
    } else if(type === "register") {
        icon = "address card outline";
        title = "Register";
    } else if(type === "login") {
        icon = "chess";
        title = "Login";
    } else {
        icon = "cogs";
        title = "Unrecognized Page";
    }
    return(
        <div>
            <Header as='h2' icon textAlign='center'>
            <Icon name={icon} circular />
            <Header.Content>{title}</Header.Content>
            </Header>
            {/* <Image centered size='large' src='/images/wireframe/centered-paragraph.png' /> */}
        </div>
    )
  
}