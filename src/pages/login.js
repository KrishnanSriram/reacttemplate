import React from 'react'
import { Container, Form, Button, Checkbox } from 'semantic-ui-react';
import Header from './../components/header';

export default () => {
  return (
    <Container>
        <Header type="login"/>
        <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type="password" />
            </Form.Field>
            <Form.Field>
            <Checkbox label='Remember me' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
  )
}
