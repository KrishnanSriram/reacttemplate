import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'
import Header from './../components/header';

export default () => (
    <Container>
        <Header type="register"/>
        <Form>
            <Form.Group unstackable widths={2}>
                <Form.Input label='First name' placeholder='First name' />
                <Form.Input label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths={2}>
                <Form.Input label='Address' placeholder='Address' />
                <Form.Input label='Phone' placeholder='Phone' />
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button type='submit'>Submit</Button>
        </Form>
    </Container>
)