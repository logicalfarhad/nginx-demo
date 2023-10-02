import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/persons`) // Use the backendUrl variable
      .then((response) => response.json())
      .then((data) => setPersons(data));
  }, [backendUrl]);

  return (
    <div className="App">
      <h1>Persons Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;

