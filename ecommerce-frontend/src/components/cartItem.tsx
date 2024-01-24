import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  cartItem: any;
};

const cartItem = ({ cartItem }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={cartItem.photo} alt={cartItem.name} />
      <article>
        <Link to={`/product/${cartItem.productId}`}>
          <h3>{cartItem.name}</h3>
        </Link>
        <span>{cartItem.price}</span>
      </article>
      <div className="quantity">
        <button>-</button>
        <span>{cartItem.quantity}</span>
        <button>+</button>
      </div>

      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default cartItem;
