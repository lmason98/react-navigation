import React, { FunctionComponent } from "react";
import { Routes, Route } from 'react-router-dom';

import './body.css';

import Dash from '../dash/dash';
import Molding from '../molding/molding';

/*
* Name: Body
* Description: App body
* */
const Body: FunctionComponent = () => {
  return (
    <div className="body-div">
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/molding" element={<Molding />} />
      </Routes>
    </div>
  );
}

export default Body;
