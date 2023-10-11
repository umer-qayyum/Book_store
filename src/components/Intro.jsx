import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Intro = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center Intro">
        <div className="row" >
          <div className="col-lg-10 col">          
              <h1>Book-Store</h1>
              <p>A place isn't a place until it has a bookstore.</p>
              <Link to="/mybooks" className="btn btn-success">See Books</Link>            
          </div>
        </div>
    </div>  
    </>
  )
}

export default Intro
