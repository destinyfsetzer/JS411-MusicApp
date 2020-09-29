import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DashboardComp from "./DashboardComp";
import LockOpenIcon from "@material-ui/icons/LockOpen";

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
          <div display="flex">
            <AccountCircle />
            <TextField placeholder="Username" style={{ width: 180 }} />
            <br />
            <LockOpenIcon />
            <TextField
              placeholder="Password"
              type="password"
              style={{ width: 180 }}
            />
          </div>
          <br />
          <Button
            variant="contained"
            onClick={() => toggleLogin(isLoggedIn ? false : true)}
            color="secondary"
            size="medium"
            style={{ width: 200 }}
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
