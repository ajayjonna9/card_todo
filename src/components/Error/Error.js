import React from "react";
import "./Error.css";
import Button from "../Button/Button";
import ReactDOM from "react-dom";
const ErrorElement = (props) => {
  return (
    <div className="error">
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
const Error = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ErrorElement seterror={props.seterror} errmsg={props.errmsg} />,
        document.getElementById("root1")
      )}
    </React.Fragment>
  );
};

export default Error;
