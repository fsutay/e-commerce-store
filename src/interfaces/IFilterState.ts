import { ICategories } from "./ICategories";
import { IColors } from "./IColors";
import { IPrices } from "./IPrices";
import { IProduct } from "./IProduct";

export interface IFilterState {
  products: IProduct[];
  searchText: string;
  filteredProducts: IProduct[];
  categories: ICategories[];
  colors: IColors[];
  prices: IPrices[];
}
