import { Link } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useState } from "react";

const user = {
  _id: "dsdsfds",
  role: "",
};

const header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoutHandler = () => {};
  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>
        Home
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to="/cart">
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            {user?.role === "admin" && (
              <Link onClick={() => setIsOpen(false)} to={"/admin/dashboard"}>
                Admin
              </Link>
            )}
            <Link onClick={() => setIsOpen(false)} to={"/orders"}>
              Orders
            </Link>
            <button onClick={logoutHandler}>
              <FaSignOutAlt />
            </button>
          </dialog>
        </>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </>
      )}
    </nav>
  );
};

export default header;
