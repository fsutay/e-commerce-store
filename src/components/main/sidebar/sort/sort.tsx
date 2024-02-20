import React, { ChangeEvent } from "react";
import { SortOptions } from "../../../../enums/SortOptions";
import { useAppDispatch } from "../../../../hooks/hooks";
import { sort } from "../../../../store/filter-slice";

const Sort = () => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSortOption: SortOptions = event.target.value as SortOptions;
    dispatch(sort(selectedSortOption));
  };
  return (
    <div className="md:mt-4">
      <label htmlFor="sortSelect">Sort :</label>
      <select id="sortSelect" onChange={handleSortChange}>
        <option value={SortOptions.LOW_TO_HIGH}>Low to High</option>
        <option value={SortOptions.HIGH_TO_LOW}>High to Low</option>
        <option value={SortOptions.A_TO_Z}>A to Z</option>
        <option value={SortOptions.Z_TO_A}>Z to A</option>
      </select>
    </div>
  );
};

export default Sort;
