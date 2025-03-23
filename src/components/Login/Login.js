import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    alert("Logged in successfully");
    navigate("/profile");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Paper
        elevation={5}
        className="p-6 w-[400px] bg-white shadow-lg border border-white rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          Sign in to your PopX account
        </h2>
        <Typography className="text-center text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!email || !password} 
            className="!bg-purple-700"
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default LoginPage;
