import React from 'react'
import { Container } from 'semantic-ui-react';
import Header from './../components/header';

export default (props) => {
  return (
    <Container>
      <div>
        <Header type="about" />
        <p>This is ABOUT page</p>
      </div>
    </Container>
  );
}