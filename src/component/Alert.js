import React from "react";
import Alerts from "@mui/material/Alert";
import { CryptoState } from "../CryptoContext";
import Snackbar from "@mui/material/Snackbar";

const Alert = () => {
  const { alert, setAlert } = CryptoState();
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <Alerts
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </Alerts>
    </Snackbar>
  );
};

export default Alert;
