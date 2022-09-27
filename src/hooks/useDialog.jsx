import React from "react";

const useDialog = () => {
  const [state, setState] = React.useState(false);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };
  return {
    handleOpen,
    handleClose,
    open: state,
  };
};

export default useDialog;
