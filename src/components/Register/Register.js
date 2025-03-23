import React from "react";
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    function confirm(event){
        event.preventDefault();
        alert("Registered successfully");
        navigate("/");
    }
  return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <Paper
        elevation={5}
        className="p-6 w-[400px] bg-white shadow-lg border border-white rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Create a PopX Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={confirm}>
          <TextField label="Full Name*" variant="outlined" fullWidth required />
          <TextField label="Phone Number" variant="outlined" fullWidth />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <TextField label="Company Name" variant="outlined" fullWidth />

          <FormControl>
            <FormLabel>Are you an agency?</FormLabel>
            <RadioGroup >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Account
          </Button>
        </form>
      </Paper>
    </div>
    
  );
}

export default Register;
