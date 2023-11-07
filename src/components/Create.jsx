import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://6547204c902874dff3abfb6a.mockapi.io/crud-project", {
        name: name,
        age: age,
      })

      .then(() => {
        history("/");
      });
  };

  return (
    <div style={{ margin: "10rem" }}>
      <Form>
      <h2>Create</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Link to={"/"}>
          <Button className="m-3">ReadPage</Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
