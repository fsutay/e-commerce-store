import { BsFillBagFill } from "react-icons/bs";
import { ICartItemProps } from "../../../../interfaces/ICartItemProps";

const CartItem: React.FC<{ product: ICartItemProps }> = ({ product }) => {
  return (
    <section className=" border-2 p-5 flex flex-col  md:items-center h-full md:justify-between">
      <img src={product.img} alt={product.title} className="card-img md:w-52" />
      <div className="mt-4">
        <h3>{product.title}</h3>
        <section>
          {product.star}
          <span>{product.reviews}</span>
        </section>
        <section>
          <div>
            <del>{product.prevPrice}</del> {product.newPrice}
          </div>
          <div>
            <BsFillBagFill />
          </div>
        </section>
      </div>
    </section>
  );
};

export default CartItem;
