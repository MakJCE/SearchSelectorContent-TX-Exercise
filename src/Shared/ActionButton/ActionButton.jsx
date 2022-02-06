import React from "react";
import { Button } from "@material-ui/core";

const ActionButton = ({ label, action }) => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={action}
        color="primary"
        style={{ textTransform: "none", fontSize: 21 }}
      >
        {label}
      </Button>
    </div>
  );
};

export default ActionButton;
