import React from "react";
import "../components/CSS/PageNotFound.css";
import NotFound from "../assets/notFound.png";

const PageNotFound = () => {
  return (
    <div className="notFound">
      <div title="Page Not Found" className="div">Page Not Found</div>
      <img src={NotFound} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
