import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setChecked } from "../../../../store/filter-slice";
import { RootState } from "../../../../store/store";
import { FilterType } from "../../../../enums/FilterType";

const Colors: React.FC = () => {
  const colors = useAppSelector((state: RootState) => state.colors);
  const dispatch = useAppDispatch();

  const handleChange = (index: number) => {
    dispatch(setChecked({ type: FilterType.COLOR, index }));
  };
  
  return (
    <div>
      <p>Colors</p>
      <div className='flex flex-col gap-1 mt-1'>
        {colors.map((color, i) => (
          <div key={i}>
            <input
              type="checkbox"
              id={`color-${i}`}
              name="color"
              onChange={() => handleChange(i)}
              checked={color.checked}
              className='mr-2'
            />
            <label htmlFor={`color-${i}`}>{color.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
