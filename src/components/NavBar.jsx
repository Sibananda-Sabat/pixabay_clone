import React from "react";
import { useContext } from "react";
import PixapayContext from "../context/PixapayContext";

const NavBar = () => {
  const { fetchImageByCategory,setQuery } = useContext(PixapayContext);
  //   const lowercase = (text)=>{
  //     let result = text.toLowerCase()
  //     // console.log(result);
  //     return result
  //   }
  return (
    <>
      <div className="container my-5 text-center">
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={(e) => fetchImageByCategory(e.target.textContent)}
        >
          nature
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-3"
          onClick={(e) => fetchImageByCategory(e.target.textContent)}
        >
          science
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={(e) => fetchImageByCategory(e.target.textContent)}
        >
          computer
        </button>
        <button
          type="button"
          className="btn btn-danger mx-3"
          onClick={(e) => fetchImageByCategory(e.target.textContent)}
        >
          buildings
        </button>
        <button
          type="button"
          className="btn btn-warning mx-3"
          onClick={(e) => fetchImageByCategory(e.target.textContent)}
        >
          sports
        </button>
        <button
          type="button"
          className="btn btn-light mx-3"
          onClick={(e) => fetchImageByCategory(e.target.textContent)}
        >
          transportation
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={(e) => fetchImageByCategory(e.target.textContent)}
        >
          food
        </button>
      </div>
      <div className="container" style={{width: '800px'}}>
        <input
          type="text"
          className="form-control bg-dark text-light"
          placeholder="Type anything to search.."
          id="searchbox"
          onChange={(e)=>setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default NavBar;
