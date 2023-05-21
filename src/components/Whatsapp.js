import React, { useState } from 'react';

const WhatsAppForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the WhatsApp message
    const formattedMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/254712154175?text=${encodeURIComponent(formattedMessage)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <div style={{marginTop:'50vh'}}>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Send WhatsApp Message</button>
    </form>
    </div>
  );
};

export default WhatsAppForm;
