import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Data from "../Data";

const Paginationn = () => {
  const [pages, setpages] = useState(0);

  const userperpage = 4;
  const pagevisited = pages * userperpage;

  const displayUser = Data.slice(pagevisited, pagevisited + userperpage).map(
    (user) => {
      return (
        <div
          style={{
            height: "auto",
            width: "275px",
            borderRadius: "3px solid black",
            backgroundColor: "gray",
            marginBottom: "40px",
          }}
          className="row"
        >
          <div className="col-lg-12">
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.username}</h3>
          </div>
        </div>
      );
    }
  );
  const pagecount = Math.ceil(Data.length / userperpage);
  const changepage = ({ selected }) => {
    setpages(selected);
  };
  return (
    <div>
      <h2 style={{ marginTop: "100px", marginBottom: "50px", color: "red" }}>
        This is Pagination
      </h2>
      {displayUser}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pagecount}
        onPageChange={changepage}
        containerClassName={"paginationsBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Paginationn;
