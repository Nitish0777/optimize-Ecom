import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  handler: () => void;
};

const server = "http://localhost:4000";

const productCard = ({
  productId,
  price,
  name,
  photo,
  description,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>
        {"\u20B9"}
        {price}
      </span>
      <p>{description}</p>

      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default productCard;
