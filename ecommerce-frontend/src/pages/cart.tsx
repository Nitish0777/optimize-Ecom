import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItemCard from "../components/cartItem";
import { Link } from "react-router-dom";

const subtotal = 100;
const cartItems = [
  {
    productId: 1,
    name: "Product 1",
    price: 100,
    description: "This is a product",
    photo: "https://picsum.photos/200/300",
    quantity: 1,
    stock: 10,
  },
];
const tax = Math.round(subtotal * 0.18);
const shipping = 50;
const discount = 440;
const total = subtotal + tax + shipping;
const cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidate, setIsValidate] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidate(true);
      } else {
        setIsValidate(false);
      }
    }, 1000);
    return () => clearTimeout(timeOutId);
    setIsValidate(false);
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, index) => <CartItemCard key={index} cartItem={i} />)
        ) : (
          <h1>No items in cart</h1>
        )}
      </main>
      <aside>
        <p>
          Subtotal: {"\u20B9"}
          {subtotal}
        </p>
        <p>
          Shipping Charges: {"\u20B9"}
          {shipping}
        </p>
        <p>
          Tax: {"\u20B9"}
          {tax}
        </p>
        <p>
          Discount:{" "}
          <em>
            {" "}
            {"\u20B9"}
            {discount}
          </em>
          :{" "}
        </p>
        <p>
          <b>
            Total: {"\u20B9"}
            {total}
          </b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidate ? (
            <span className="green">
              {discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default cart;
