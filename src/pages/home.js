import React from 'react'
import { Container } from 'semantic-ui-react';
import Header from './../components/header';

export default (props) => {
  return (
    <Container>
      <Header type="home"/>
      <div>
        This is home page
      </div>
    </Container>
  )
}
