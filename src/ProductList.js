//rcc deyip enter'a basınca direk bir class component oluşturuluyor
//Bir component oluşturuldu
import React, {Component} from "react";
//export; public anlamına geliyor
export default class ProductList extends Component{
    //render; değişen veriye göre componenti yeniler
    render(){
        return(
            <div>
                <h2>{this.props.info.title}</h2>
            </div>
        )
    }
}