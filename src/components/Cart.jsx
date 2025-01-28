import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const removeFromCart = (indexToRemove) => {
    const filtered = cart.filter((_, index) => indexToRemove !== index);
    setCart(filtered);
  };

  let totalPrice = 0;
  const cartList = cart.map((entry, index) => {
    console.log(entry);
    let sum = entry.price * entry.quantity;
    console.log(sum);
    totalPrice += sum;
    console.log(`total: ${totalPrice}`);
    return (
      <div key={index}>
        <div>{entry.name}</div>
        <div>- {entry.quantity}</div>
        <button onClick={() => removeFromCart(index)}>Remove Item</button>
      </div>
    );
  });

  if (cart.length < 1) return <i>Sorry, no items in cart</i>;

  return (
    <>
      <div>
        <h1>This is your cart:</h1>
        <div>Your cart: {cartList}</div>
        {totalPrice > 0 && <div>Total: ${totalPrice}</div>}
      </div>
    </>
  );
}
