//rcc deyip enter'a basınca direk bir class component oluşturuluyor
//Bir component oluşturuldu
import React, {Component} from "react";
//export; public anlamına geliyor
export default class Navi extends Component{
    //render; değişen veriye göre componenti yeniler
    render(){
        return(
            <div>
                <h2>Navi Component</h2>

            </div>
        )
    }
}