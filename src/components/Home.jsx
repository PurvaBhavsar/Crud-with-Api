import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://6547204c902874dff3abfb6a.mockapi.io/crud-project")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://6547204c902874dff3abfb6a.mockapi.io/crud-project/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, age) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ margin: "10rem" }}>
      <h2>Read Operation</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.age}</td>
                  <td>
                    <center>
                    <Link to="/update">
                      <button
                        style={{backgroundColor:"green", color:"white", border:"none"}}
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.age
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                    </center>
                  </td>
                  <td>
                    <center>
                    <button
                     style={{backgroundColor:"red", color:"white", border:"none"}}
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete{" "}
                    </button>
                    </center>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
      <Link to={"/create"}>
        <button
          type="button"
          class="btn btn-primary"
          style={{ margin: "10px" }}
        >
          Create
        </button>
      </Link>
    </div>
  );
};

export default Read;
