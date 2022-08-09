import React from 'react';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
function App() {
  return (
    //Navi componenti app'in içerisinde olacağı için onu burada <Navi></Navi> ile yerleştiricez, ve import edicez
    //Navi component gini CategoryList ve ProductList componentleri de dahil edildi
    <div>
      <Navi></Navi>
      <CategoryList/>
      <ProductList/>
    </div>
  );
}

export default App;
