import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/auth";
import { enqueueSnackbar } from "notistack";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const { isLogin, setLogin, cartData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogin(false);
    localStorage.setItem("isLogin", JSON.stringify(false));
    navigate("/");
    enqueueSnackbar("Logout done successfully", { variant: "info" });
  };

return (
  <>
    {/* Main Header Before Login */}
    <nav className="flex justify-between items-center px-6 bg-nav">
      {/* Only show image if not logged in */}
      {!isLogin && (
        <img
          height={70}
          width={80}
          className="py-1"
          src="https://img.freepik.com/free-vector/doctors-silhouettes_23-2147498611.jpg"
          alt="logo"
        />
      )}
      
      {!isLogin ? (
        <ul className="flex gap-6 items-center">
          {/* Before login: Display Login and Register buttons */}
          <li className=" nav-1 font-semibold">
            <Link className="nav-1" to={"/login"}>Login</Link>
          </li>
          <li className=" nav-1 font-semibold">
            <Link className="nav-1" to={"/register"}>Register</Link>
          </li>
        </ul>
      ) : (
       
        <ul className="flex items-center justify-center w-full space-x-6">
  {/* After login: Centered image and welcome message */}
  {/* <li className="flex items-center justify-center font-semibold text-xl text-center">
    <img
      height={70}
      width={80}
      className="py-1"
      src="https://img.freepik.com/free-vector/doctors-silhouettes_23-2147498611.jpg"
      alt="logo"
    />
    <p className="ml-4">Welcome, I am here to assist you!</p>
  </li> */}
  <li className="flex items-center justify-center font-semibold text-xl text-center">
  <img
    height={70}
    width={80}
    className="py-1"
    src="https://img.freepik.com/free-vector/doctors-silhouettes_23-2147498611.jpg"
    alt="logo"
  />
  <p className="ml-4 hidden md:block">Welcome, I am here to assist you!</p>
</li>


  
  {/* Logout Button */}
  <li
    className="logout  font-semibold cursor-pointer"
    onClick={handleLogout}
  >
    Logout
  </li>
</ul>

      )}
    </nav>

    {/* Secondary Header After Login */}
    {isLogin && (
      <nav className=" nav-2 flex justify-center items-center px-10 bg-gray-300 mt-4">
        <ul className="  flex gap-6 items-center">
          {/* Secondary navigation with evenly spaced options */}
          <li className=" in-header font-semibold">
            <Link className="in-header" to={"/"}>Home</Link>
          </li>
          <li className="  in-header font-semibold">
            <Link to={"/contactus"}>Contact Us</Link>
          </li>
          <li className="  in-header font-semibold flex">
            <Link to={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} className="cart" />
            {/* Cart */}
            </Link>
            <sup className="bg-green-700 flex items-center justify-center rounded-full px-2">
              {cartData.length}
            </sup>
          </li>
          
          {/* <li className="font-semibold" onClick={handleLogout}>
            Logout
          </li> */}
        </ul>
      </nav>
    )}
  </>
);

};

export default Header;
