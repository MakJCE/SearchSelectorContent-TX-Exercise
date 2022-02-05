import React from "react";
import { Button } from "@material-ui/core";

const ActionButton = ({ label, action }) => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={action}
        color="secondary"
        style={{ textTransform: "none" }}
      >
        {label}
      </Button>
    </div>
  );
};

export default ActionButton;
