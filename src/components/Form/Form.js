import React, { useRef, useState } from "react";
import "./Form.css";
import Button from "../Button/Button";
const Form = (props) => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    age: "",
    collegename: "",
  });
  //   const val = useRef();
  const onchange = (e) => {
    if (e.target.name === "username") {
      setUserDetails((pre) => {
        return { ...pre, userName: e.target.value };
      });
    }
    if (e.target.name === "age") {
      setUserDetails((pre) => {
        return { ...pre, age: e.target.value };
      });
    }
    if (e.target.name === "collegename") {
      setUserDetails((pre) => {
        return { ...pre, collegename: e.target.value };
      });
    }
  };

  const onSubmiting = (e) => {
    e.preventDefault();
    // console.log(val.current.value);

    if (
      userDetails.userName === "" ||
      userDetails.age === "" ||
      userDetails.age < 0 ||
      userDetails.collegename === ""
    ) {
      props.isvalid(true);
      let err;
      if (userDetails.age < 0) {
        err = "age is not-ve";
      } else {
        err = "Enter username or age";
      }
      props.addingErr(err);
      return;
    } else {
      const obj = {
        id: Math.random(),
        ...userDetails,
      };

      props.onAdding(obj);
    }
  };
  return (
    <div className="form">
      <form onSubmit={onSubmiting}>
        <h3 className="heading">User Name</h3>
        <input type="text" name="username" onChange={onchange}></input>
        <h3 className="heading">Age (Years)</h3>
        <input type="number" name="age" onChange={onchange}></input>
        <h3 className="heading">College Name</h3>
        <input type="text" name="collegename" onChange={onchange}></input>
        {/* <h3 className="heading">College Name</h3>
        <input type="text" name="colleg" ref={val}></input> */}
        <br />

        <Button type="submit"> Add User </Button>
      </form>
    </div>
  );
};

export default Form;
