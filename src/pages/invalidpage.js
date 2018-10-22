import React from 'react'
import { Container } from 'semantic-ui-react';
import Header from './../components/header';

export default () => {
  return (
    <Container>
        <Header type="error"/>
        <div>
            <p>The page you are looking for is either removed or does not exist.</p>
            <p>Please check your route or try again later!</p>
        </div>
    </Container>
  )
}
