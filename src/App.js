import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
//import { Button, Table } from "react-bootstrap";
import Main from "./Component/Main";
import Paginationn from "./Component/Paginationn";
//import { Table } from "react-bootstrap";
function App() {
  // const [data, setData] = useState([]);
  // const [value, setvalue] = useState("");

  // useEffect(() => {
  //   loadData();
  // }, []);
  // const loadData = async () => {
  //   return await axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => setData(response.data))
  //     .catch((err) => console.log(err));
  // };

  // const loaduserData = () => {
  //   loadData();
  // };
  // const handlesearch = async (e) => {
  //   e.preventDefault();
  //   return await axios
  //     .get(`https://jsonplaceholder.typicode.com/users?q=${value}`)
  //     .then((response) => {
  //       setData(response.data);
  //       setvalue("");
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className="container">
      {/* <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          marginTop: "50px",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handlesearch}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name..."
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <Button type="submit" className="btn btn-dark">
          Search
        </Button>
        <Button className="mx-2 btn btn-info" onClick={() => loaduserData()}>
          Reset
        </Button>
      </form>
      <h2
        style={{
          marginTop: "100px",
          marginBottom: "50px",
          fontFamily: "sans-serif",
          textAlign: "center",
          fontWeight: "bold",
          color: "gray",
        }}
      >
        Filter, Search, Short, Pagination Using Api
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>ID.</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        {data.length === 0 ? (
          <tbody
            className="text-center"
            style={{ color: "black", fontWeight: "bold", fontSize: "16px" }}
          >
            <td>No Data Found</td>
          </tbody>
        ) : (
          data.map((iteam, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{index + 1}</td>
                <td>{iteam.name}</td>
                <td>{iteam.username}</td>
                <td>{iteam.email}</td>
              </tr>
            </tbody>
          ))
        )}
      </Table> */}
      <Main />
      <Paginationn />
    </div>
  );
}

export default App;
