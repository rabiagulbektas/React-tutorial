//rcc deyip enter'a basınca direk bir class component oluşturuluyor
//Bir component oluşturuldu
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
//export; public anlamına geliyor
export default class CategoryList extends Component {
  //kategorilere özel bir data tutmak için state oluşturuldu
  //burada state içime kategorileri tutmak için bir boş dizi oluşturuldu ve elemanları yerleştirmek için
  //getCategories oluşturuldu.json'da olan elemanlar gidecek onun için fetch ile url belirtiyoruz
  state = {
    categories: []
  };

  //componentDidMount bir hazır fonksiyondur. Yaşam döngüsü event'i için component yerleşti işlemi yapabilirsin diyoruz.
  componentDidMount(){
    this.getCategories();
  }

  //kategorileri listeleyecek
  getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())//önce gelen data json'döndürüldü
    .then(data=>this.setState({categories:data}));
  };

  //render; değişen veriye göre componenti yeniler
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {
            //birden fazla kategori olduğu için map kullanıldı
            this.state.categories.map((category) => (
              <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}//active ile seçili olan kategoriyi görücez
                onClick={() => this.props.changeCategory(category)}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
