import React, { useEffect } from "react";
import { useState } from "react";

const UserInput = ({
  setInputarr,
  inputarr,
  editableUserData,
  handleUpdate,
  editableIndex,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [inputdata, SetInputdata] = useState({
    name: editableUserData?.name,
    age: editableUserData?.age,
  });
  const changehandle = (e) => {
    SetInputdata({
      ...inputdata,
      [e.target.name]: e.target.value,
    });
  };

  const submithandle = (e) => {
    let { name, age } = inputdata;
    setInputarr([
      ...inputarr,
      {
        name,
        age,
      },
    ]);

    SetInputdata({ name: "", age: "" });
  };

  useEffect(() => {
    SetInputdata({ name: editableUserData?.name, age: editableUserData?.age });
  }, [editableUserData]);

  return (
    <>
      {showForm ? (
        <div
          className="grid gap-6 mb-6 md:grid-cols-1 w-1/2 "
          style={{ margin: "0 auto" }}
        >
          <div>
            <label
              forhtml="User_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter name
            </label>
            <input
              type="text"
              id="User_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the Name"
              required
              autoComplete="off"
              name="name"
              value={inputdata.name}
              onChange={changehandle}
            />
          </div>
          <div>
            <label
              forhtml="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Age
            </label>
            <input
              type="number"
              id="age"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the Age"
              required
              autoComplete="off"
              name="age"
              value={inputdata.age}
              onChange={changehandle}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={submithandle}
          >
            Add
          </button>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleUpdate(inputdata, editableIndex)}
          >
            Update
          </button>

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => SetInputdata({ name: "", age: "" })}
          >
            Reset
          </button>
        </div>
      ) : (
        <div
          className="grid gap-6 mb-6 md:grid-cols-1 w-1/2 "
          style={{ margin: "0 auto" }}
        >
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setShowForm(!showForm)}
          >
            Add new entry
          </button>
        </div>
      )}
    </>
  );
};
export default UserInput;
