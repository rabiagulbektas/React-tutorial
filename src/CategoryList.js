//rcc deyip enter'a basınca direk bir class component oluşturuluyor
//Bir component oluşturuldu
import React, { Component } from "react";
import {ListGroup,ListGroupItem} from 'reactstrap';
//export; public anlamına geliyor
export default class CategoryList extends Component {
    //render; değişen veriye göre componenti yeniler
    render() {
        return (
            <div>
                <h3>Category Component</h3>
                 <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup> 
            </div>
        )
    }
}