import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import products from './products'; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      cart: [],
      name: '',
      message: '',
    };
    this.updateName = this.updateName.bind(this);
  }

  // Create addProduct method here
  addProduct = product => {
    this.setState({
      cart: [...this.state.cart, product]
    });
  }

  // Create checkout method here
  checkout = () => {
    if (!this.state.name) {
      this.setState({ message: 'You must enter a name to continue. ' });
    } else {
      this.setState({
        cart: [],
        name: '',
        message: 'Payment Successful!'
      });
    }
  }

  // Create updateName here
  updateName(event) {
    this.setState({ name: event.target.value });
  }

  calculateTotal() {
    return this.state.cart.map(e => e.price).reduce((a, c) => a + c, 0);
  }

  render() {
    // Map through products array to display their picture, name, price and include an 'Add to Cart' button 
    let productList = products.map(product => {
      return (
        <div key={product.id}>
          <img src={product.picture} alt={product.name}/>
          <h1>{product.name}</h1>
          <h4>${product.price}</h4>
          <button onClick={() => this.addProduct(product)}>Add To Cart</button>
        </div>
      )
    });
    // Map through the cart array in state to display the items name and price when added to the cart
    let currentCart = this.state.cart.map((product, i) => {
      return (
        <div className='cart-item' key={i}>
          <span className='name'>{product.name}</span>
          <span className='price'>${product.price}</span>
        </div>
      )
    });

    return (
      <div>
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
              <input value={this.state.name} className="input" onChange={this.updateName} placeholder='Enter Name'/>
            </div>
            <h1>${this.calculateTotal()}</h1>
          </div>
          <button type='submit' onClick={this.checkout}>Checkout</button>
          {this.state.message && <h4>{this.state.message}</h4>}
        </div>

      </div>
    );
  }
}

export default App;
