import React, { useState } from "react";
import { Container, Paper, TextField, Typography, Button } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {};

  return (
    <Container component={"main"} maxWidth="sx">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>

              <Typography 
              textAlign={"center"}
              margin={"1"}
              >Or</Typography>
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="text"
                color="primary"
                onClick={toggleLogin}
              >
                Sign Up Instead of Login
              </Button>
            </form>
          </>
        ) : (
          <span>You are not login</span>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
