import React, { useEffect, useState } from "react";
import PixapayContext from "./PixapayContext";

const PixapayState = (props) => {
  const key = "46550285-b80258cc95de97e06cd6f4fd2";
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("london");

  useEffect(() => {
    const fetchapi = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
    };
    fetchapi();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    // console.log(data.hits);
  };


  return (
    <PixapayContext.Provider value={{ imageData, fetchImageByCategory,setQuery }}>
      {props.children}
    </PixapayContext.Provider>
  );
};

export default PixapayState;
