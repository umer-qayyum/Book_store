import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Content";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const MyBooks = () => {
  const { services } = useGlobalContext();
  const [search, setSearch] = useState("");
  const [foundBook, setFoundBook] = useState(null);
  useEffect(() => {
    const book = services.find((book) => book.title === search);
    if (book) {
      setFoundBook(book);
    } else {
      setFoundBook(null);
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="container">
          <div className="title d-flex align-items-center justify-content-center mt-3 mb-3">
            <h2>Books</h2>
          </div>
          <div className="searchBar d-flex justify-content-center mt-3 mb-5">
            <input
              style={{ width: "70%" }}
              className="form-control"
              placeholder="Search your book"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <p>{foundBook}</p>
          <div className="row ">
            {foundBook ? (
              <div>{/* <h1>{foundVideo.title}</h1> */}</div>
            ) : (
              <div className="sample  ms-5">

                {services.length > 0 &&
                  services.map((value) => {
                    const { id, image_url, title, authors } = value;
                    return (
                      <div
                        className="col-lg-4 col-12 mb-2"
                        style={{
                          display:
                            search === "" ||
                            title.toLowerCase().includes(search.toLowerCase())
                              ? "inline-block"
                              : "none",
                        }}
                        key={id}
                      >
                        <div className="card" style={{ width: "18rem" }}>
                          <img
                            src={image_url}
                            style={{ height: "300px" }}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                              <b>Author : </b>
                              {authors}
                            </p>
                            <NavLink
                              to={`/details/${id}`}
                              className="btn btn-primary"
                            >
                              Details
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBooks;
