import React, { useState } from "react";

const Orders = () => {
  const [tabs, setTabs] = useState(1);
  return (
    <div className="main-container py-[50px]">
      <div className="mb-[1rem] flex gap-12">
        <div
          className={`font-medium cursor-pointer pb-[2px] ${
            tabs === 1 ? "border-b-2  border-primary" : ""
          }`}
          onClick={() => setTabs(1)}
        >
          Current orders
        </div>
        <div
          className={`font-medium cursor-pointer pb-[2px] ${
            tabs === 2 ? "border-b-2  border-primary" : ""
          }`}
          onClick={() => setTabs(2)}
        >
          Last orders
        </div>
      </div>

      {tabs === 1 && " Current orders"}
      {tabs === 2 && " Last orders"}
    </div>
  );
};

export default Orders;
