import React, { Fragment } from "react";

import Select from "react-select";

import classes from "./Selection.module.css";

const selection = [
  { label: "English", value: "English" },
  { label: "Spanish", value: "Spanish" },
];

const Selection = (props) => {
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isFocused
        ? "#343a40"
        : "#6c757d" & state.isSelected
        ? "#343a40"
        : "#6c757d",
      backgroundColor: state.isFocused
        ? "rgba(0,0,0,0.1)"
        : "#fff" & state.isSelected
        ? "rgba(0,0,0,0.1)"
        : "#fff",
      cursor: "pointer",
      borderRadius: ".5rem",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "transparent",
      padding: "0",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
    }),
    menu: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "white",
      borderRadius: ".5rem",
      position: "absolute",
      zIndex: 10,
      top: "-6rem",
      padding: "0",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#6c757d",
    }),
  };

  const selectChangeHandler = ({ value }) => {
    console.log(value);
  };

  return (
    <Fragment>
      <Select
        className={classes.selections}
        defaultValue={selection[0]}
        options={selection}
        styles={customStyles}
        isClearable={false}
        isSearchable={false}
        onChange={selectChangeHandler}
      />
    </Fragment>
  );
};

export default Selection;
