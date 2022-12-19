import "./App.css";
import React, { useState } from "react";
import UserData from "./Components/UserData";
import UserInput from "./Components/UserInput";
const App = () => {
  const [inputarr, setInputarr] = useState([]);

  const [editableUserData, setEditableUserData] = useState();

  // const [editableIndex, setEditableIndex] = useState();


  const deleteHandle = (i) => {
    let newdataArr = [...inputarr];
    newdataArr.splice(i, 1);
    setInputarr(newdataArr);
  };
  const handleUpdate = (updatedData, index) => {
    console.log("updatedData", updatedData);
    console.log("index", index);

    // let newArr = inputarr.map((item, i) => {
    //   if (index === i) {
    //     return { name: updatedData.name, age: updatedData.age };
    //   } else {
    //     return item;
    //   }
    // });
    // console.log("newArr", newArr);
    // setInputarr(newArr);
  };
  const editHandle = (i) => {
    const extractedData = inputarr.filter(
      (data, index) => index === i && data
    )[0];

    setEditableIndex(i);
    setEditableUserData(extractedData);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center my-4">React Test Task</h1>
      <UserInput
        setInputarr={setInputarr}
        inputarr={inputarr}
        editableUserData={editableUserData}
        handleUpdate={handleUpdate}
        editableIndex={editableIndex}
      />

      {inputarr.length !== 0 && (
        <UserData
          data={inputarr}
          deleteHandle={deleteHandle}
          editHandle={editHandle}
          setInputarr={setInputarr}
        />
      )}
    </div>
  );
};

export default App;
