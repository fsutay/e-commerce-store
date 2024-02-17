import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterPriceOptions } from '../enums/FilterPriceOptions';
import { ICategories } from '../interfaces/ICategories';
import { IColors } from '../interfaces/IColors';
import { IPrices } from '../interfaces/IPrices';
import { IProduct } from '../interfaces/IProduct';
import { IFilterState } from '../interfaces/IFilterState';
import { FilterType } from '../enums/FilterType';


const initialState: IFilterState = {
  products: [],
  searchText: '',
  filteredProducts: [],
  categories: [],
  colors: [],
  prices: []
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    productsList: (state, action: PayloadAction<IProduct[]>) => {
      state.products = [...state.products, ...action.payload];
      state.filteredProducts = [...state.products, ...action.payload];
    },
    filteredProducts: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      state.filteredProducts = state.products.filter(product =>
        product.title.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
    categoriesList: (state, action: PayloadAction<ICategories[]>) => {
      state.categories = action.payload;
    },
    colorsList: (state, action: PayloadAction<IColors[]>) => {
      state.colors = action.payload;
    },
    pricesList: (state, action: PayloadAction<IPrices[]>) => {
      state.prices = action.payload
    },

    setChecked: (state, action: PayloadAction<{ type: FilterType; index: number }>) => {
      const { type, index } = action.payload;

      const setColorChecked =()=>{
        state.colors[index].checked = !state.colors[index].checked;
      }

      const setCategoryChecked =()=>{
        state.categories[index].checked = !state.categories[index].checked;
      }

      const setPriceChecked =()=>{
        state.prices.forEach((_,priceIndex)=>{
          state.prices[priceIndex].checked = index==priceIndex;
        });
      }

      switch(type){
        case FilterType.COLOR:
          setColorChecked();
          break;
        case FilterType.CATEGORY:
          setCategoryChecked();
          break;
        case FilterType.PRICE:
          setPriceChecked();
          break;
        default:
          break;
      }

      const searchQuery = state.searchText.toLowerCase();

      let filteredBySearch = state.products.filter(product =>
        product.title.toLowerCase().includes(searchQuery)
      );

      state.filteredProducts = filteredBySearch.filter(product => {
        let selectedColors = state.colors.filter(color => color.checked);
        let selectedCategories = state.categories.filter(category => category.checked);
        let selectedPrice = state.prices.find(price => price.checked);
        if (selectedColors.length===0 && selectedCategories.length===0 && selectedPrice?.range===FilterPriceOptions.ALL) {
          return true;
        }

        if (selectedColors.length === 0) {
          selectedColors = state.colors;
        }

        if (selectedCategories.length === 0) {
          selectedCategories = state.categories;
        }

        let priceIsOk = false;
        if(selectedPrice?.range===FilterPriceOptions.ALL){
          priceIsOk=true;
        }else if(selectedPrice?.range===FilterPriceOptions.LESS_THAN_50){
          priceIsOk=product.newPrice<=50;
        }else if(selectedPrice?.range===FilterPriceOptions.BETWEEN_50_AND_100){
          priceIsOk=product.newPrice>=50 && product.newPrice<=100;
        }else if(selectedPrice?.range===FilterPriceOptions.MORE_THAN_100){
          priceIsOk=product.newPrice>=100;
        }

        return priceIsOk && selectedColors.some(color => color.color === product.color) &&
          selectedCategories.some(category => category.category === product.category);
      });
    },
  },

});

const filterReducer = filterSlice.reducer;

export const { filteredProducts, productsList, categoriesList, colorsList, pricesList, setChecked } = filterSlice.actions;
export default filterReducer;
