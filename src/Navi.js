//rcc deyip enter'a basınca direk bir class component oluşturuluyor
//Bir component oluşturuldu
import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  import {Link} from 'react-router-dom';
import CartSummary from "./CartSummary";
//export; public anlamına geliyor
export default class Navi extends React.Component{
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.state={
            isOpen:false
        };
    }
    toggle(){
        this.setState({
                isOpen:!this.state.isOpen
            });
    }
    //render; değişen veriye göre componenti yeniler
    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                <Link to="form1">Form Demo 1</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                <Link to="form2">Form Demo 2</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://githıb.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        );
    }
}