import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { setChecked } from '../../../../store/filter-slice';
import { RootState } from '../../../../store/store';

const Prices = () => {
  const prices = useAppSelector((state: RootState) => state.prices);
  const dispatch = useAppDispatch();

  const handleChange = (index: number) => {
    dispatch(setChecked({ type: 'price', index }));
  };

  return (
    <div className='mt-4'>
      <p>Prices</p>
      <div className='flex flex-col gap-1 mt-1'>
        {prices.map((price, i) => (
          <div key={i}>
            <input
              type="radio"
              id={`price-${i}`}
              value={price.range}
              onChange={() => handleChange(i)}
              checked={price.checked}
              name='price'
              className='mr-2'
            />
            <label htmlFor={`price-${i}`}>{price.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
