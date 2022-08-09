//rcc deyip enter'a basınca direk bir class component oluşturuluyor
//Bir component oluşturuldu
import React, { Component } from "react";
import {ListGroup,ListGroupItem} from 'reactstrap';
//export; public anlamına geliyor
export default class CategoryList extends Component {
    //kategorilere özel bir data tutmak için state oluşturuldu
    //burada state içime kategorileri tutmak için bir dizi oluşturuldu ve ellemanlar yazıldı
    state={
        categories:[
            {categoryId:1,categoryName:"Beverages"},
            {categoryId:2,categoryName:"Condiments"},
        ]
    };

    //render; değişen veriye göre componenti yeniler
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                 <ListGroup>
                    {
                        //birden fazla kategori olduğu için map kullanıldı
                        this.state.categories.map(category=>(
                            <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
                        ))
                    }

                </ListGroup>
            </div>
        )
    }
}