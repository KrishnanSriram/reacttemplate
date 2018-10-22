import React from 'react'
import { Container } from 'semantic-ui-react';
import Header from './../components/header';

export default (props) => {
  return (
    <Container>
      <div>
        <Header type="contactus" />
        <p>This is Contact Us page</p>
      </div>
    </Container>
  );
}