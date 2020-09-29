import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import DashboardComp from "./DashboardComp";

const LoginComp = () => {
  const [isLoggedIn, toggleLogin] = useState(false);
  if (!isLoggedIn) {
    return (
      <div>
        <Box
          component="span"
          m={30}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <TextField placeholder="Username" />
          <TextField placeholder="Password" />
          <br />
          <Button
            variant="contained"
            onClick={() => toggleLogin(isLoggedIn ? false : true)}
            color="secondary"
            size="medium"
          >
            Login
          </Button>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <DashboardComp />
      </div>
    );
  }
};

export default LoginComp;
