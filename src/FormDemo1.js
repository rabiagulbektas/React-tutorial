import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class FormDemo1 extends Component {
    state={userName:'',city:''}
    onChangeHandler=(event)=>{
        //event.target.value event'e sebep olan nesnenin(iyani input bilgisi) değeri
        //this.setState({userName:event.target.value})
        let name=event.target.name;
        let value=event.target.value;
        this.setState({[name]:value})
    }

    onSubmitHandler=(event)=>{
        event.preventDefault();//default davranışı uygulama demek
       alert(this.state.userName);
    }
  render() {
    return (
      <div>
        {/* onSubmit event'i submit olduğunda onSubmitHandler fonksiyonunu çalıştıracak*/}
        <Form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            {/* Her karakter değişiminde onChange çalışır ve değişiklikleri tutar */}
            <input name='userName' onChange={this.onChangeHandler} type="text"></input>
            <h3>User Name is {this.state.userName}</h3>

            <h3>City</h3>
            <input name='city' onChange={this.onChangeHandler} type="text"></input>
            <h3>City is {this.state.city}</h3>
            <input type="submit" value="Save"></input>
        </Form>
      </div>
    )
  }
}
