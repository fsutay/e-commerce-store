import Header from "./components/header/header";
import Main from "./components/main/main";
import { categoriesList, colorsList, pricesList, productsList } from "./store/filter-slice";
import data from "./data.json"
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";

function App() {
  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(productsList(data.products));
    dispatch(categoriesList(data.categories));
    dispatch(colorsList(data.colors));
    dispatch(pricesList(data.prices));

  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
