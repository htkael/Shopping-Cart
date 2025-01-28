import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const { cart, setCart } = useOutletContext();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  const addToCart = (item, quantity) => {
    const foundItem = cart.find((element) => element.id === item.id);
    if (foundItem) {
      const newQuant = parseInt(foundItem.quantity) + parseInt(quantity);
      quantity = newQuant;
      const removed = cart.filter((element) => element.id !== item.id);
      setCart([...removed, { ...item, quantity }]);
      return;
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const handleQuantityChange = (itemId, number) => {
    setQuantities({
      ...quantities,
      [itemId]: number || 0,
    });
  };

  useEffect(() => {
    async function getItems() {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const products = data.map((entry, index) => ({
          id: index,
          name: entry.title,
          image: entry.image,
          price: entry.price,
          desc: entry.description,
        }));

        setItems(products);
      } catch (error) {
        console.error(`Failed to fetch products: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }
    getItems();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const productList = items.map((item) => {
    return (
      <div className="card" key={item.id} onClick={() => {}}>
        <img src={item.image} alt={item.name} />
        <div>
          {item.name} - ${item.price}{" "}
        </div>
        <input
          type="number"
          min={1}
          value={quantities[item.id] || ""}
          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
        />
        <button
          onClick={() => addToCart(item, quantities[item.id] || 1)}
          disabled={!quantities[item.id]}
        >
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>{productList}</h1>
    </div>
  );
}
