import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dm_bottle from './assets/DM_Bottle.jpg';
import dm_hat from './assets/DM_Hat.jpeg';
import dm_ladies from './assets/DM_Ladies_Tee.jpg';
import dm_lanyard from './assets/DM_Lanyard.jpg';
import dm_socks from './assets/DM_Socks.jpeg';
import dm_tee from './assets/DM_Tee.jpg';
 
const products = [{product_name: 'WebDev Tri T-Shirt', price: 24.99, picture: dm_tee}, {product_name: 'WebDev Ladies Tri T-shirt', price: 24.99, picture: dm_ladies}, {product_name: '#DevLife Modern Dad Cap', price: 18.99, picture: dm_hat}, {product_name: 'DevMountain Shiny Bottle', price: 29.99, picture: dm_bottle}, {product_name: 'DevMountain Lanyard', price: 5.99, picture: dm_lanyard}, {product_name: 'DevMountain Moonwalk Socks', price: 14.99, picture: dm_socks} ]

class App extends Component {
  constructor(){
    super();
    this.state = {
      total: 0,
      cart: [],
      name: '',
      message: '',
    }
  }

addProduct = (e) => {

  let num = this.state.total + e.price;
  //Potential Black Diamond to round decimal places
  let total = Math.round(num * 100) / 100
  // End Potential Black Diamond
  this.setState({
    total: total,
    cart: [...this.state.cart, e]
  })
  num = 0;
}

clearCart = () => {
  if(!this.state.name){
    this.setState({
      message: 'You must enter a name to continue. '
    })
    return 
  } else if(this.state.name.length < 3){
    this.setState({
      message: 'You must enter a longer name.'
    })
    return
  } else {
  this.setState({
    total: 0,
    cart: [],
    name: '',
    message: ''
    })
  }
}

handleUserInput (e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value});
}

  render() {
    let productList = products.map((e, i) => {
      return (
        <div key={i}>
          <img src={e.picture} alt={e.product_name}/>
          <h1>{e.product_name}</h1>
          <h4>{e.price}</h4>
          <button onClick={() => this.addProduct(e)}>Add To Cart</button>
        </div>
      )
    })
    let currentCart = this.state.cart.map((e, i) => {
      return (
        <div className='cart' key={i}>
          <span className='name'>{e.product_name}</span>
          <span className='price'>{e.price}</span>
        </div>
      )
    })
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          DevMountain Shop
        </h1>

        <div className='products'>
        {productList}
        </div>

        <div className="checkout">
            {currentCart}
            <div className='checkout-bottom'>
                <div>
                  <input value={this.state.name} className="input" onChange={e => this.handleUserInput(e)} type="text" name='name' placeholder='Enter Name'/>
                </div>
                <h1>${this.state.total}</h1>
            </div>
            <button type='submit' onClick={this.clearCart}>Confirm Payment</button>
            {this.state.message ? <h4>{this.state.message}</h4> : null}
        </div>
      </div>
    );
  }
}

export default App;
