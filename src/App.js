import React, { Component } from "react";
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import { Container, Row, Col } from "reactstrap"

export default class App extends Component {
    state={currentCategory:"", products:[ ] };
    //componentDidMount bir hazır fonksiyondur. Yaşam döngüsü event'i için component yerleşti işlemi yapabilirsin diyoruz.
    componentDidMount(){
      this.getProducts();
    }
    //ListGroupItem'a tıklandığında o kategorinin ismini verecek, bunun için onClick ile changeCategory  oluşturuldu
    //changeCategory fonksiyonuda bir props
    changeCategory = (category) => {
      this.setState({ currentCategory: category.categoryName });
    };

    getProducts=()=>{
      fetch("http://localhost:3000/products")
      .then(response=>response.json())//önce gelen data json'döndürüldü
      .then(data=>this.setState({products:data}));
    };

  render(){
    //title bir props. props; bir component'den başka bir componente taşınan data,event
    //State ile
    //propslar tutmak için nesne oluşturduk
    let productInfo={ title:"Product list"}
    let categoryInfo={title:"Category list"}
    return (
      //Navi componenti app'in içerisinde olacağı için onu burada <Navi></Navi> ile yerleştiricez, ve import edicez
      //Navi component gini CategoryList ve ProductList componentleri de dahil edildi
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            {/* Burada xs ile row'u 12 parçaya ayırıyor */}
            <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
            </Col>
            <Col xs="9">
            <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
