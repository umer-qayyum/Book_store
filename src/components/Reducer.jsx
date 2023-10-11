import React from "react";

const Reducer = (state, action) => {
  if (action.type === "GET_SERVICES") {
    return {
      ...state,
      services: action.payload,
    };
  }

  return state;
};

export default Reducer;
