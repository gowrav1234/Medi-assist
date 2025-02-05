import "./Cart.css";

// import { Button } from "@radix-ui/themes";
import { useContext } from "react";
import { AuthContext } from "../auth/auth";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartData, setCartData } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleAddQuantity = (id) => {
    const newCart = cartData.map((each) =>
      each.id === id ? { ...each, quantity: each.quantity + 1 } : each
    );
    localStorage.setItem("cartData", JSON.stringify(newCart));
    setCartData(newCart);
  };

  const handleRemoveQuantity = (id) => {
    const newCart = cartData
      .map((each) =>
        each.id === id ? { ...each, quantity: each.quantity - 1 } : each
      )
      .filter((each) => each.quantity > 0);

    localStorage.setItem("cartData", JSON.stringify(newCart));
    setCartData(newCart);
  };

  const handleDelete = (id) => {
    const newCart = cartData.filter((each) => each.id !== id);
    localStorage.setItem("cartData", JSON.stringify(newCart));
    setCartData(newCart);
  };

  return (
    <div>
      {cartData.map((each) => (
        <div
          key={each.id} // Add key prop here
          className="flex border justify-between border-black rounded-xl p-3 w-[60vw] m-3"
        >
          <div
            className="flex"
            onClick={() => navigation(`/item-details/${each.id}`)}
          >
            <img
              src={each.image}
              width={150}
              height={100}
              className="cart-img rounded-xl mb-2"
            />
            <div className="px-3">
              <div className="mb-3">
                <h1 className="font-semibold text-xl">{each.title}</h1>
                <h1 className="text-sm text-gray-500">{each.seller}</h1>
              </div>
              <h1 className="text-lg text-gray-500">
                MRP <span className="line-through">₹{each.originalPrice}</span>
              </h1>
              <h1 className="text-3xl mb-3">
                ₹{each.price}
                <span className="text-sm text-red-500">({each.discount})</span>
              </h1>
            </div>
          </div>
          <div className="my-auto  text-center">
            <div className="flex h-fit items-center my-auto gap-3  justify-center border-1 border-blue-500 w-fit rounded-md">
              <button className="bg-g p-2" onClick={() => handleAddQuantity(each.id)} key={`add-${each.id}`}>
                +
              </button>
              <h1>{each.quantity}</h1>
              <button className="bg-g p-2" onClick={() => handleRemoveQuantity(each.id)} key={`remove-${each.id}`}>
                -
              </button>
            </div>
            <DeleteIcon
              onClick={() => handleDelete(each.id)}
              key={`delete-${each.id}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

