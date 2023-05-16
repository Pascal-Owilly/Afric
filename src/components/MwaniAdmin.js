import React, { useState } from "react";

function AdminPanel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [recentActions, setRecentActions] = useState([]);

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access);
        setIsLoggedIn(true);
      } else {
        alert(data.detail);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

// Function to handle fetching contacts from Django API
const getContacts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/contacts/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      setContacts(data);
    } else {
      alert(data.detail);
    }
  } catch (error) {
    console.error(error);
  }
};


  // Function to handle fetching subscriptions from Django API
  const getSubscriptions = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/subscribe/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      setSubscriptions(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle fetching recent actions from Django API
  const getRecentActions = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/actions/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      setRecentActions(data);
    } catch (error) {
      console.error(error);
    }
  };

  // If user is not logged in, render login form
  if (!isLoggedIn) {
    return (
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="name"
          id="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  // If user is logged in, render admin panel
  return (
<>
<div style={{height:'100vh'}}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop:'30vh'}}>
    <a className="navbar-brand" href="#">Navbar w/ text</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </nav>

    <div>
      <h1>Admin Panel</h1>
      <button onClick={() => getContacts()}>Get Contacts</button>
      <button onClick={() => getSubscriptions()}>Get Subscriptions</button>
      <button onClick={() => getRecentActions()}>Get Recent Actions</button>
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
              <li key={contact.id}>
                <p>{contact.email}</p>
                <p>{contact.message}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Subscriptions</h2>
          <ul>
            {subscriptions.map((subscription) => (
              <li key={subscription.id}>
                <p>{subscription.email}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Recent Actions</h2>
          <ul>
            {recentActions.map((action) => (
              <li key={action.id}>
                <p>{action.description}</p>
                <p>{action.timestamp}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      </>
    );
  }

  export default AdminPanel;
