import React from "react";
import "./Error.css";
import Button from "../Button/Button";
const Error = (props) => {
  console.log(props.errmsg);
  return (
    <div className="error ">
      <div className="card">
        <header>Somthing went wrong</header>
        <div className="errmsg">
          <h4>{props.errmsg}</h4>

          <footer>
            <Button onclick={props.seterror}>Ok</Button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Error;
