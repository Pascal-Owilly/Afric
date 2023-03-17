import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css';
import './Why.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/contact/', {
        name,
        email,
        message,
      });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
<div className='contact-section'>
<div className='contact-section-content'>

    <h5 className='text-center text-white' style={{margin:'auto'}}>Send us a message we'll get right back to you</h5>

    <Card className='contact-card text-white mt-5'>
    {status === 'success' && (
            <p className="mt-3 text-white">Thank you for contacting us. We will get back to you as soon a possible!</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-danger">
              There was an error sending your message.
            </p>
          )}
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {/* <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group> */}

          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
            className='input'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{backgroundColor: 'rgb(255, 255, 255, 0.7)', border:'none'}}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{backgroundColor: 'rgb(255, 255, 255, 0.7)', border:'none'}}
            />
          </Form.Group>

          <Button className='mt-3 text-white' variant="transparent" type="submit" style={{width:'100%', backgroundColor:'rgb(128, 0, 128, 0.5)'}}>
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
};

export default ContactForm;
