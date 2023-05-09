import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const csrftoken = getCookie("csrftoken");
      try {
        const response = await axios.get("http://127.0.0.1:8000/mwani-admin/", {
          headers: {
            "X-CSRFToken": csrftoken,
          },
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(data) && data.map((item) => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.message}</td>
    <td>{item.created_at}</td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
