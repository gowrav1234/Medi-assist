import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Register from "./components/Register/Register";
import MediDetails from "./components/Detiles-Page/DetailsPage";
import { useContext } from "react";
import { AuthContext } from "./components/auth/auth";
import Cart from "./components/Cart/Cart";
import Counter from "./Counter";
import Contactus from "./components/Contactus/Contact-Us";
import Footer from "./components/Footer/Footer";

function App() {
  const { isLogin } = useContext(AuthContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!isLogin && <Route path="/register" element={<Register />} />}
        <Route path="/item-details/:id" element={<MediDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
<Footer />
    </>
  );
}
export default App;
