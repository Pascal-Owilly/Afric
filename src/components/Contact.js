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
      const response = await axios.post('https://www.mwani.africa/contact/', {
        name,
        email,
        message,
      });
      if (response.status === 201 || response.status === 200) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <div className='contact-section'>
        <div className='contact-section-content'>
          <Card className='contact-card text-white'>
            <p style={{fontSize:'22px', fontFamily:'verdana', textAlign:'center', lineHeight:'20px'}} className='contact-p'>Send us a message and we'll get to you as soon an possible</p>
            <hr />
            {status === 'success' && (
              <p className=" text-white">Thank you for contacting us. We will get back to you as soon a possible!</p>
            )}
            {status === 'error' && (
              <p className=" text-danger">
                Oops!, try again later.
              </p>
            )}
            <Card.Body id='card-details'>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group action="{% url 'send_email' %}" method="post" controlId="formEmail">
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
                    value={message
                    }
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    />
                    </Form.Group>
                    <Button variant=" mt-3" style={{backgroundColor:'purple', color:'white', width:'100%'}} type="submit"> Submit </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  </div>
</>
);
};

export default ContactForm;
