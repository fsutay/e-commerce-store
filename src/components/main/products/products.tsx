import CartItem from './cart-item/cart-item';
import { useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../store/store';

const Products : React.FC= () => {
  const filteredProducts=useAppSelector((state:RootState)=>state.filteredProducts)
  return (
    <div className='md:flex md:flex-wrap mt-4'>
        {filteredProducts.map((product, index) => (
          <div key={index} className="ml-6 m-1">
            <CartItem product={product} />
          </div>
        ))}
    </div>
  );
}

export default Products;