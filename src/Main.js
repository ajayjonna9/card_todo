import React, { useState } from "react";
import Form from "./components/Form/Form";
import ListData from "./components/ListData/ListData";
import "./main.css";
import Error from "./components/Error/Error";
const Main = () => {
  const [userData, setUserData] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [errobj, seterrObj] = useState("");

  const addindErrObj = (errmsg) => {
    console.log(errmsg);
    seterrObj(errmsg);

    console.log(errobj);
  };

  const onAdding = (data) => {
    setUserData((pre) => {
      return [...pre, data];
    });
  };
  const setError = () => {
    setInvalid(!invalid);
  };

  return (
    <div>
      <Form isvalid={setInvalid} onAdding={onAdding} addingErr={addindErrObj} />
      {invalid ? (
        <Error seterror={setError} errmsg={errobj} />
      ) : (
        userData.length > 0 && (
          <div className="userdata">
            {userData.map((data) => {
              return (
                <ListData key={data.id} name={data.userName} age={data.age} />
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Main;
