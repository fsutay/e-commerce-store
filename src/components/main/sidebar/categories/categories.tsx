import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { RootState } from "../../../../store/store";
import { setChecked } from "../../../../store/filter-slice";
import { FilterType } from "../../../../enums/FilterType";

const Categories: React.FC = () => {
  const categories = useAppSelector((state: RootState) => state.categories);
const dispatch=useAppDispatch()

    const handleChange = (index: number) => {
      dispatch(setChecked({ type: FilterType.CATEGORY, index }));
    };
    
  return (
    <div className='mt-4'>
      <p>Categories</p>
      <div className='flex flex-col gap-1 mt-1'>
        {categories.map((category, i) => (
          <div key={i}>
            <input
              type="checkbox"
              id={`category-${i}`}
              name="category"
              className='mr-2' 
              onChange={() => handleChange(i)}
              checked={category.checked}
              />
        
            <label htmlFor={`category-${i}`}>{category.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
