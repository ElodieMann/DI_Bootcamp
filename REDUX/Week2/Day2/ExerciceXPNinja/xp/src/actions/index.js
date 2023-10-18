export const ageUpAsync = (val) => {
    return (dispatch) => {
      dispatch(loading());
      setTimeout(() => {
        dispatch({ type: "AGE_UP", value: val });
      }, 5000);
    };
  };
  
  export const ageDown = (val) => {
    return { type: "AGE_DOWN", value: val };
  };
  
  export const loading = () => {
    return { type: "LOADING" };
  };
  
  export const ageUp = (val) => {
    return (dispatch) => {
      dispatch({ type: "LOADING" });  
      setTimeout(() => {
        dispatch({ type: "AGE_UP", value: val });  
      }, 5000);
    };
  };
  