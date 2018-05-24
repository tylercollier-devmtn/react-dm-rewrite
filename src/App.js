import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import dm_bottle from './assets/DM_Bottle.jpg';
// import dm_hat from './assets/DM_Hat.jpeg';
// import dm_ladies from './assets/DM_Ladies_Tee.jpg';
// import dm_lanyard from './assets/DM_Lanyard.jpg';
// import dm_socks from './assets/DM_Socks.jpeg';
// import dm_tee from './assets/DM_Tee.jpg';
 
const products = [{id: "jvmquxr", desc: "Solid Black", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-1.jpg?alt=media&token=af7620f5-e9a1-4108-939c-472c48307528", price: 45, title: "Mountains Baseball Cap", category: "hat", company: "DevMountain"}, {id: "9ad1jor", desc: "Red", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-2.jpg?alt=media&token=7401ac35-408b-4f10-8749-3dd6378f4198", price: 45, title: "Mountains Baseball Cap", category: "hat", company: "DevMountain"}, {id: "gqwu3di", desc: "Combo", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fcombo-tee.jpg?alt=media&token=068eefa0-d83f-497f-9809-5d0272a1639d", price: 55, title: "Combo T-shirt Set", category: "shirt", company: "DevMountain"}, {id: "fav2t9", desc: "Blue", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-1.jpeg?alt=media&token=0fbf36a3-a477-49f7-aa99-2bdb1030c449", price: 25, title: "Ripple Effect", category: "shirt", company: "DevMountain"}, {id: "rpy14i", desc: "Two-Pack", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-3.jpeg?alt=media&token=4dec772a-65ec-481b-bc60-a7c80f5b2c38", price: 33, title: "Two T-Shirt Set", category: "shirt", company: "DevMountain"}, {id: "4866flxr", desc: "Moon", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-4.jpeg?alt=media&token=1e1b81c8-a24f-4d34-85e4-153e4d00470e", price: 25, title: "Black T Shirt", category: "shirt", company: "DevMountain"}, {id: "27kqpvi", desc: "Rings", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-5.jpeg?alt=media&token=c27be083-eb5b-4a1f-98be-780f234fb5ce", price: 24, title: "Momentum", category: "shirt", company: "DevMountain"}]

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
  return this.state.cart.map(e => {
    return e.price
  }).reduce((a, c) => a + c, 0);
  // return total;
}

  render() {
    // Map through products array to display their picture, name, price and include an 'Add to Cart' button 
    let productList = products.map((e, i) => {
      return (
        <div key={i}>
          <img src={e.image} alt={e.title}/>
          <h1>{e.title}</h1>
          <h4>${e.price}</h4>
          <button onClick={() => this.addProduct(e)}>Add To Cart</button>
        </div>
      )
    })
    // Map through the cart array in state to display the items name and price when added to the cart
    let currentCart = this.state.cart.map((e, i) => {
      return (
        <div className='cart' key={i}>
          <span className='name'>{e.title}</span>
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
