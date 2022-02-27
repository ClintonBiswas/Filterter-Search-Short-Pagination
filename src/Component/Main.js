import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Data from "../Data";

const Main = () => {
  const [data, setdata] = useState([]);
  const [value, setvalue] = useState("");
  const [shortvalue, setshortvalue] = useState("DSC");

  useEffect(() => {
    loadData(0, 4, 0);
  }, []);
  const loadData = (start, end, increase) => {
    setdata(Data);
    //setdata((Data.start = { start }));
    //setdata((Data.end = { end }));
  };
  const handlesearch = (e) => {
    e.preventDefault();
    let search = value;
    let searchdata = Data.filter((item) => item.name.includes(search));

    //let a = Data.filter((item) => item.email.includes(search));
    setdata(searchdata);
    //setdata(a);
    setvalue("");
  };
  const loaduserData = () => {
    loadData();
  };
  const shortoption = ["name", "username", "phone", "email", "status"];

  const handleshort = (e) => {
    let value = e.target.value;
    if (shortvalue === "DSC") {
      const sorted = [...Data].sort((a, b) =>
        a[value].toLowerCase() > b[value].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setshortvalue("DSC");
    }
    if (shortvalue === "ASC") {
      const sorted = [...Data].sort((a, b) =>
        a[value].toLowerCase() < b[value].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setshortvalue("ASC");
    }
  };
  const handlefilter = (a) => {
    let statuslist = Data.filter((item) => item.status === a);
    setdata(statuslist);
  };

  return (
    <div className="container">
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
        Filter, Search, Short, Pagination Using Array Of Objects.
      </h2>
      <form
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
          placeholder="Enter Name"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <Button type="submit" className="btn btn-dark">
          Search
        </Button>
        <Button className=" mx-2 btn btn-info" onClick={() => loaduserData()}>
          Reset
        </Button>
      </form>
      <div className="row" style={{ marginBottom: "50px", marginTop: "20px" }}>
        <div className="col-lg-7">
          <h4>Short By: </h4>
          <select
            style={{ width: "50%", borderRadius: "3px", height: "35px" }}
            onChange={handleshort}
            value={shortvalue}
          >
            <option>Please Select Value</option>
            {shortoption.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-5">
          <h4>Filter By:</h4>
          <Button
            className="btn btn-success"
            onClick={() => handlefilter("active")}
          >
            Active
          </Button>
          <Button
            className="btn btn-danger mx-2"
            onClick={() => handlefilter("inactive")}
          >
            Inactive
          </Button>
        </div>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        {data.length === 0 ? (
          <tbody className="text-center">
            <tr
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
              size="12"
            >
              No Data Found
            </tr>
          </tbody>
        ) : (
          data.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
              </tr>
            </tbody>
          ))
        )}
      </Table>
    </div>
  );
};

export default Main;
