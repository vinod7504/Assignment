import Button from "@mui/material/Button";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-end h-screen pb-10">
        <h1 className="font-bold text-2xl mb-2">Welcome to PopX</h1>
        <p className="mb-4 w-[200px]">
          lorem ipsum dollar conetnt get ready to this challenge
        </p>
        <div className="flex flex-col gap-4">
          <Button
            variant="contained"
            href="register"
            className="!bg-purple-700"
          >
            Create Account
          </Button>
          <Button variant="contained" href="login" className="!bg-purple-400">
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
