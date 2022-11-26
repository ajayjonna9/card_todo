import React from "react";
import "./ListData.css";

const ListData = (props) => {
  return (
    <div>
      <h3 className="data">
        {props.name} ({props.age} Years old)
      </h3>
    </div>
  );
};

export default ListData;
