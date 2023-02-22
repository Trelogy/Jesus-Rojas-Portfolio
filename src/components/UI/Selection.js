import React, { Fragment, useState } from "react";
import Select from "react-select";

import classes from "./Selection.module.css";

const Selection = (props) => {
  const [selected, setSelected] = useState(props.onSelect[0]);
  
  const selectChangeHandler = ({value}) => {
    setSelected(value);
  };

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

  return (
    <Fragment>
     <Select
        className={classes.selections}
        defaultValue={selected}
        options={props.onSelect}
        styles={customStyles}
        isClearable={false}
        isSearchable={false}
        onChange={selectChangeHandler}  
      >{props.children}</Select>
    </Fragment>
  );
};

export default Selection;
