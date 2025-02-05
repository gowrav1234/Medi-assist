import { Button } from "@radix-ui/themes";
import { useContext, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/auth.jsx";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const { setLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.password === "") {
      enqueueSnackbar("Please fill the form completely", {
        variant: "error",
      });
      return;
    }

    if (formData.password.length < 5) {
      enqueueSnackbar("Password length must be greater than 5", {
        variant: "error",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("mediUsers"));

    const filteredData = users.filter(
      (each) =>
        each.email === formData.email && each.password === formData.password
    );

    if (filteredData.length === 0) {
      enqueueSnackbar("User Doesn't exist. Please enter valid details", {
        variant: "error",
      });
      return;
    }

    localStorage.setItem("isLogin", JSON.stringify(true));
    setLogin(true);

    enqueueSnackbar("Login completed successfully", {
      variant: "success",
    });
  };
  return (
    
    <>
    
      <div className="bg-bg flex justify-center align-center">
      <form
        className=" login-form flex flex-col border rounded-lg p-6 w-1/3"
        onSubmit={handleSubmit}
      >
        <h1 className="font-semibold text-2xl">Welcome to Medi Assist</h1>
        <p>Please login to avail our services</p>
        <label htmlFor="email" className="mt-3">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          id="email"
          className="border rounded p-1"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label htmlFor="password" className="mt-3">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          id="password"
          className="border rounded p-1"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <div>
          <Button variant="solid" type="submit" size="2" className=" text-white bg-primary mt-4">
            Login
          </Button>
        </div>

        <p>
          Dont have an account?
          <span className="text-blue-700">
            <Link to={"/register"}> Register Now</Link>
          </span>
        </p>
      </form>
      </div>
    </>
  );
};

export default Login;
