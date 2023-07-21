import React from "react";
import '../components/CSS/PageNotFound.css';
import NotFound from '../assets/notFound.png';

const PageNotFound = () => {
  return (
    <div className='notFound'>
      <h1>Page Not Found</h1>
      <img src={NotFound} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
