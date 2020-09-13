import React from "react";
import { Alert } from "antd";

function AlertMessage() {
  return (
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
    />
  );
}

export default AlertMessage;
