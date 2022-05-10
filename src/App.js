import React, { useEffect } from "react";
import './index.css'
import Header from "./componets/Header/Header";
import { Route, Routes } from 'react-router-dom'
import PageFavorites from"./componets/PageFavorites/PageFavorites"
import PageCart from "./componets/PageCart/PageCart"
import { getProductAC } from "./store/actionsCreator/productAC";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./componets/modal/modal";
import FormShopping from "./componets/FormShopping/FormShopping";
import Cards from "./componets/PageHome/Cards";
import AlertMessege from "./componets/Messegers/AlertMessege";





function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductAC())
  }, [dispatch])

  const arrProduct = useSelector(state => state.product.data)
  console.log(arrProduct);

  return (
    <div className="wrapper">
      <Header />
      < Modal />
      <AlertMessege messege="Спасибо за покупку" />
			<FormShopping cards={arrProduct} />
      <Routes>
        <Route path="/projectPZ/" element={<Cards cards={arrProduct}/>} />
        <Route path="/projectPZ/PageFavorites" element={<PageFavorites cards={arrProduct} />} />
        <Route path="/projectPZ/PageCart" element={<PageCart cards={arrProduct} />} />
      </Routes>

    </div>
  );
}

export default App;
