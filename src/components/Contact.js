import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://example.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Card className='mt-5 mb-5 contact-card' style={{backgroundColor:'goldenrod', margin:'auto'}}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control placeholder='Enter message here' as="textarea" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} />
          </Form.Group>

          <Button className='mt-3' style={{width:'100%'}} variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ContactForm;
