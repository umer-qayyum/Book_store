import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <i className="bi bi-book-fill me-3"></i>Book-Store
          </Link>

          <form className="d-flex " role="search">
            <Link
              className="navbar-brand"
              to="/mybooks"
              style={{ textDecoration: "none", color: "white" }}
            >
              My_Books
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
