import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";

const home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="btn btn-primary">
          View All
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="1234567"
          name="Mackbook"
          price={6000}
          description="Laptop is Good"
          photo="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/4:3/w_1787,h_1340,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg"
          stock={100}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default home;
