import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <nav>
        <Link to="Home">
          <button>Home</button>
        </Link>
        <Link to={"shop"}>
          <button>Shop</button>
        </Link>
        <Link to={"cart"}>
          <button>Cart {cart.length}</button>
        </Link>
      </nav>
      <Outlet context={{ cart, setCart }} />
    </>
  );
};

export default Nav;
