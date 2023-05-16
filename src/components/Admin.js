import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Admin.css';



const CardSection = () => {
  return (
    <>
      <Container fluid className='admin-redirect'>
        <Row>
          <Col md={12}>
            <Button className='admin-redirect-btn'><a style={{textDecoration:'none', color:'goldenrod'}} href='https://contact-mail.mwani.africa/mwani-admin'> Go to Admin Dashboard</a></Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardSection;
