import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8"></div>
    </>
  );
};

export default DisplayAlbum;
