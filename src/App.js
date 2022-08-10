import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import {Route,Switch} from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
import NotFount from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  //componente özel datayı state ile tutuyoruz
  state = { currentCategory: "", products: [], cart: [] };

  //componentDidMount bir hazır fonksiyondur. Yaşam döngüsü event'i için component yerleşti işlemi yapabilirsin diyoruz.
  componentDidMount() {
    this.getProducts();
  }
  //ListGroupItem'a tıklandığında o kategorinin ismini verecek, bunun için onClick ile changeCategory  oluşturuldu
  //changeCategory fonksiyonuda bir props
  changeCategory = (category) => {
    //Tıklanılan kategorinin ismini alacak ve currentCategory'e atacak
    this.setState({ currentCategory: category.categoryName });
    //Kategori id'sine göre ürünleri getirmek için getProducts(category.id)
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json()) //önce gelen data json'döndürüldü
      .then((data) => this.setState({ products: data }));
  };

  //ürün ekleme işlemi için addToCart fonksiyonu oluşturuldu
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    //aynı eleman varsa tekrar eklemeyecek adedini 1 arttıracak
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      //ürün hic eklenmediyse ekle
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "added to cart!");
  };

  //Sepetten ürün silme için
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + "removed from cart!");
  };

  render() {
    //title bir props. props; bir component'den başka bir componente taşınan data,event
    //State ile
    //propslar tutmak için nesne oluşturduk
    let productInfo = { title: "Product list" };
    let categoryInfo = { title: "Category list" };
    return (
      //Navi componenti app'in içerisinde olacağı için onu burada <Navi></Navi> ile yerleştiricez, ve import edicez
      //Navi component gini CategoryList ve ProductList componentleri de dahil edildi
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            {/* Burada xs ile row'u 12 parçaya ayırıyor */}
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Switch>
              {/* <Routes> */}
                <Route
                  exact
                  path="/"
                  render={
                    props => (
                      <ProductList
                        {...props}//prop'ların bir kopyasını al ve onu gönder demek
                        products={this.state.products}
                        addToCart={this.addToCart}
                        currentCategory={this.state.currentCategory}
                        info={productInfo}
                      />
                    )}
                />
                <Route exact path="/cart" render={
                    props => (
                      <CartList
                        {...props}//prop'ların bir kopyasını al ve onu gönder demek
                        cart={this.state.cart}
                        removeFromCart={this.removeFromCart}
                      />
                    )
                  } />
                <Route  path="/form1" component={FormDemo1}/>
                <Route  path="/form2" component={FormDemo2}/>
                <Route component={NotFount} />
              {/* </Routes> */}
              {/* Switch sırasıyla rootları gezmeye yarıyor */}
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
