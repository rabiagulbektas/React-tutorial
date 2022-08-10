//rcc deyip enter'a basınca direk bir class component oluşturuluyor
//Bir component oluşturuldu
import React, { Component } from "react";
import { Table,Button } from "reactstrap";

//export; public anlamına geliyor
export default class ProductList extends Component {
  
  //render; değişen veriye göre componenti yeniler
  render() {
    return (
      <div>
        <h2>
          {this.props.info.title}-{this.props.currentCategory}
        </h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              //birden fazla ürün olduğu için map kullanıldı
              this.props.products.map(product => (
                <tr key={product.id}>
                 <th scope="row">{product.id}</th>
                 <td>{product.productName}</td>
                 <td>{product.unitPrice}</td>
                 <td>{product.quantityPerUnit}</td>
                 <td>{product.unitsInStock}</td>
                 {/* ürün ekleme işlemi için onClick event tanımlandı */}
                 <td><Button onClick={()=>this.props.addToCart(product)} color="info">add</Button></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
