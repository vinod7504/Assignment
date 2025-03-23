import React from "react";
import { Avatar, Typography, Paper } from "@mui/material";

function Profile() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Paper elevation={5} className="p-6 w-[400px] bg-white shadow-lg border border-white rounded-lg">
        <h1 className="font-bold text-[25px]">Account Settings</h1>

        <div className="flex items-center gap-4">
        
          <Avatar 
            src="https://www.shutterstock.com/image-vector/isolated-object-avatar-dummy-symbol-260nw-1290290470.jpg" 
            alt="Profile Picture" 
            sx={{ width: 80, height: 80 }} 
          />

          <div>
            <Typography variant="h6" className="font-semibold">Vinod Kumar</Typography>
            <Typography variant="body1" color="textSecondary">vinodkumarjntua@gmail.com</Typography>
          </div>
        </div>

        <Typography className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor sapien in lorem cursus, a ultrices massa tincidunt.
        </Typography>
      </Paper>
    </div>
  );
}

export default Profile;
