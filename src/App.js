import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dm_bottle from './assets/DM_Bottle.jpg';
import dm_hat from './assets/DM_Hat.jpeg';
import dm_ladies from './assets/DM_Ladies_Tee.jpg';
import dm_lanyard from './assets/DM_Lanyard.jpg';
import dm_socks from './assets/DM_Socks.jpeg';
import dm_tee from './assets/DM_Tee.jpg';
 
const products = [{product_name: 'WebDev Tri T-Shirt', price: 25.00, picture: dm_tee}, {product_name: 'WebDev Ladies Tri T-shirt', price: 25.00, picture: dm_ladies}, {product_name: '#DevLife Modern Dad Cap', price: 19.00, picture: dm_hat}, {product_name: 'DevMountain Shiny Bottle', price: 20.00, picture: dm_bottle}, {product_name: 'DevMountain Lanyard', price: 6.00, picture: dm_lanyard}, {product_name: 'DevMountain Moonwalk Socks', price: 15.00, picture: dm_socks} ]

class App extends Component {
  constructor(){
    super();
    this.state = {
      cart: [],
      name: '',
      message: '',
    }
  }

// Create addProduct Method Here //
addProduct = (e) => {
  this.setState({
    cart: [...this.state.cart, e]
  })
}

// Create clearCart Method here //
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
    cart: [],
    name: '',
    message: 'Payment Successful!'
    })
  }
}

// Create handleUserInput Method here //
handleUserInput (e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value});
}

// Create calculateTotal Method Here //
calculateTotal(){
  let total = this.state.cart.map(e => {
    return e.price
  }).reduce((a, c) => a + c, 0);
  return total;
}

  render() {
    // Map through products array to display their picture, name, price and include an 'Add to Cart' button 
    let productList = products.map((e, i) => {
      return (
        <div key={i}>
          <img src={e.picture} alt={e.product_name}/>
          <h1>{e.product_name}</h1>
          <h4>${e.price}</h4>
          <button onClick={() => this.addProduct(e)}>Add To Cart</button>
        </div>
      )
    })
    // Map through the cart array in state to display the items name and price when added to the cart
    let currentCart = this.state.cart.map((e, i) => {
      return (
        <div className='cart' key={i}>
          <span className='name'>{e.product_name}</span>
          <span className='price'>${e.price}</span>
        </div>
      )
    })

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

        {/* Display Products Here */}
        <div className='products'>
        {productList}
        </div>

        {/* Create Checkout Section Here */}
        <div className="checkout">
            {currentCart}
            <div className='checkout-bottom'>
                <div>
                  <input value={this.state.name} className="input" onChange={e => this.handleUserInput(e)} type="text" name='name' placeholder='Enter Name'/>
                </div>
                <h1>${this.calculateTotal()}</h1>
            </div>
            <button type='submit' onClick={this.clearCart}>Confirm Payment</button>
            {this.state.message ? <h4>{this.state.message}</h4> : null}
        </div>

      </div>
    );
  }
}

export default App;
