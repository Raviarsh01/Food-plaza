import React, { useState } from "react";

const SelectItem = () => {
  return (
    <div className="detail-container">
      <div>
        <img src='' alt='img'></img>
      </div>
      <div className="detail-flex2">
        <h2 className="detail-heading">Item Name</h2>
        <p>Item detail</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default SelectItem;
