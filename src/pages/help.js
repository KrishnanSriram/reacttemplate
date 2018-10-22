import React from 'react'
import { Container } from 'semantic-ui-react';
import Header from './../components/header';

export default (props) => {
  return (
    <Container>
      <div>
        <Header type="help" />
        <p>This is Help page</p>
      </div>
    </Container>
  );
}
