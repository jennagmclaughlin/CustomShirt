import React from 'react';
// import valtio states
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === "filled") {
        return {
            backgroundColor: snap.color,
            color: "#fff"
        }
    }
  }

  return (
    <button className={`rounded-xl max-w-[200px] uppercase ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton