import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./Content";

const Details = () => {
  const { services } = useGlobalContext();
  const { id } = useParams();
  const book = services.find((book) => book.id === parseInt(id));
  if (!book) {
    return <div>No record found</div>;
  }
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <div className="container  mt-5 pt-4">
          <div className="row ">
            <div className="col-lg-3 ">
              <div className="card" >
                <img src={book.image_url} className="card-img-top" alt="..." />
                
              </div>
            </div>
            <div className="col-lg-9 p-4 ">

                <h4 className="my-2 mx-2"><b>Title:</b> <span>{book.title}</span></h4>
                <h4 className="my-2 mx-2"><b>Author:</b> <span>{book.authors}</span></h4>
                <h4 className="my-2 mx-2" style={{display:"inline-block"}}><b>Description:</b></h4> <span>{book.description}</span>
                <h4 className="my-2 mx-2"><b>Rating:</b> <span>{book.rating}</span></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
