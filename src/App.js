import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// React 2
import List from './2components/List'; 
import Button from './2components/Button';
// import DeleteBtn from './2components/DeleteBtn' //optional

// React 3
import axios from 'axios';

const products = [{id: "jvmquxr", desc: "Solid Black", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-1.jpg?alt=media&token=af7620f5-e9a1-4108-939c-472c48307528", price: 45, title: "Mountains Baseball Cap", category: "hat", company: "DevMountain"}, {id: "9ad1jor", desc: "Red", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-2.jpg?alt=media&token=7401ac35-408b-4f10-8749-3dd6378f4198", price: 45, title: "Mountains Baseball Cap", category: "hat", company: "DevMountain"}, {id: "gqwu3di", desc: "Combo", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fcombo-tee.jpg?alt=media&token=068eefa0-d83f-497f-9809-5d0272a1639d", price: 55, title: "Combo T-shirt Set", category: "shirt", company: "DevMountain"}, {id: "fav2t9", desc: "Blue", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-1.jpeg?alt=media&token=0fbf36a3-a477-49f7-aa99-2bdb1030c449", price: 25, title: "Ripple Effect", category: "shirt", company: "DevMountain"}, {id: "rpy14i", desc: "Two-Pack", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-3.jpeg?alt=media&token=4dec772a-65ec-481b-bc60-a7c80f5b2c38", price: 33, title: "Two T-Shirt Set", category: "shirt", company: "DevMountain"}, {id: "4866flxr", desc: "Moon", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-4.jpeg?alt=media&token=1e1b81c8-a24f-4d34-85e4-153e4d00470e", price: 25, title: "Black T Shirt", category: "shirt", company: "DevMountain"}, {id: "27kqpvi", desc: "Rings", image: "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-5.jpeg?alt=media&token=c27be083-eb5b-4a1f-98be-780f234fb5ce", price: 24, title: "Momentum", category: "shirt", company: "DevMountain"}]

class App extends Component {
    constructor(){
        super();
        this.state = {
          products: [],
          cart: [],
          name: '',
          message: '',
          // React 2
          shipping: false,
          giftWrap: false,
          validZip: false,
        }
      }

      componentDidMount(){
        axios.get('http://localhost:3000/products').then(res => {
          this.setState({
            products: res.data
          })
        })
      }

    // Create addProduct method here //
    addProduct = (item) => {
      let num;
      setTimeout(() => {
        num = this.state.total + item.price;
        item.quantity+=1
        console.log(item)
        if(this.state.cart.includes(item)){
          this.setState(prevState => prevState)
          return
        }
          console.log(this.state)
          // item.cartId = this.state.cart.length
          console.log(item)
        this.setState({
          total: num,
          cart: [...this.state.cart, item]
        })}, 100)
        num = 0;
      }

    // Create handleUserInput method here //
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value)
        if(name === 'zip' && value.length === 5){
          console.log('hey!')
          this.setState({
            validZip: true
          })
        } else {
          this.setState({
            validZip: false
          })
        }
        this.setState({[name]: value});
      }

      // Create toggleCheck method here //
      // Method needs to update shipping and giftWrap properties in state //
      toggleCheck = (e) => {
        let val = e.target.value;
        if(val === 'Standard'){
          this.setState({
            shipping: !this.state.shipping
          })
        } else if (val === 'Expedited'){
          this.setState({
            shipping: true
          })
        } else {
          this.setState({
            giftWrap: !this.state.giftWrap
          })
        }
      }



      // Create clearCart method here //
      // Method needs to validate Checkout Inputs & Reset State //
      clearCart = () => {
        if(!this.state.name || !this.state.email || !this.state.zip){
          this.setState({
            message: '*All values are required.'
          })
          return 
        } else if(this.state.name.length < 3){
          this.setState({
            message: '*You must enter a longer name.'
          })
          return
        } else {
        this.setState({
          total: 0,
          cart: [],
          name: '',
          email: '', 
          zip: '',
          shipping: !this.state.shipping,
          giftWrap: false,
          message: 'Payment Successful!'
          })
        }
      }

      // REACT 2 //

      // Create deleteItem method here to remove items from cart //
      deleteItem = (item) => {
        let copy = this.state.cart.slice()
        // let newCart;
        // if(copy.includes(item) && item.quantity > 1){
        //   item.quantity--
        //   this.setState(this.state)
        //   return
        // } else {
          let newCart = copy.filter(element => element !== item)
          setTimeout(() => {
          }, 1000)
              this.setState({
                cart: newCart
              })
        }
      

      // Create calulateTotal Method here //
      calculateTotal(){
        let total = this.state.cart.map(e => {
          // if(e.quantity > 1){
          //   total = e.price * e.quantity
          //   return total
          // }
          return e.price
        }).reduce((a, c) => a + c, 0)
        if(this.state.shipping) {
          total += 5;
        }
        if(this.state.giftWrap) {
          total += 10;
        }
        // console.log('--------total', total);
        return total
      }

  render() {
    // let productList = products.map((item, i) => {
    //     return (
    //         // React 2
    //         <List key={i}>
    //           <ul>
    //             <div className='image'>
    //               <img name={item.id} src={item.image} alt={item.title}/>
    //             </div>
    //               <li>{item.title}</li>
    //               <li>{item.price}</li>
    //               <button onClick={() => this.addProduct(item)}>Add To Cart</button>
    //           </ul>
    //         </List>
    //     )
    // })
    // let currentCart = this.state.cart.map((e, i) => {
    //     return (
    //       <List key={i}>
    //         <ul>
    //           <li>{e.title}</li>
    //           <li>{e.price}</li>
    //           <DeleteBtn delete={() => this.deleteItem(e.id)} icon="fas fa-times-circle" />
    //         </ul>
    //       </List>
    //     )
    //   })
    // console.log(this.state)
    return (
      <div className="App">

      <header>
        <h1 className='title'>DevMountain Shop</h1>
      </header>

        <div className='products'>
        {/* {productList} */}

        {/* Child Component Being Rendered is List - All attributes in the List tag are props - Here is were we render the return of List - Ex: List() */}
        <List products={this.state.products} add={this.addProduct} showPicture={true}/> 
        </div>

        <div className="checkout">
        {/* {currentCart} */}
        <div className='items'>
          <List products={this.state.cart} showPicture={false} delete={this.deleteItem}/>
        </div>
            <div className='checkout-bottom'>

                <div className='input-group'>
                <h3>Customer Information:</h3>
                  <input value={this.state.name} className="input" onChange={e => this.handleUserInput(e)} type="text" name='name' placeholder='Enter Name'/>
                  <input value={this.state.email} className='input' onChange={e => this.handleUserInput(e)} type="text" name='email' placeholder='Enter Email'/>
                  <input value={this.state.zip} className='input' onChange={e => this.handleUserInput(e)} type='number' name='zip' placeholder='Enter Zip Code' />
                  {this.state.zip ? this.state.validZip ? <i className="fas fa-check-circle">Zip Code Verified</i> : <i className="fas fa-times-circle">Zip Code Not Verified</i> : null}

                  <div id="confirm">
                    <div className='checkout-options'>
                        <label><input value='Standard' type="radio" cursor='pointer' onChange={e => this.toggleCheck(e)} checked={!this.state.shipping}/>Standard</label>
                        <label><input value='Expedited' type="radio" cursor='pointer' onChange={e => this.toggleCheck(e)} checked={this.state.shipping}/>Expedited ($5.00)</label>
                        <label><input value='Gift Wrap' type="checkbox" cursor='pointer' onClick={e => this.toggleCheck(e)} checked={this.state.giftWrap}/>Gift Wrap ($10.00)</label>
                    </div>
                        {!this.state.message ?  null : this.state.message !== 'Payment Successful!' ? <h4 style={{color: 'red'}}>{this.state.message}</h4> : <h4 style={{color: 'green'}}>{this.state.message}</h4>}
                  </div>
                </div>

                <h1>${this.calculateTotal()}</h1>
                <Button text='Confirm Payment' action={this.clearCart} />
                {/* <button className='confirm-btn' type='submit' onClick={this.clearCart}>Confirm Payment</button>  */}
                <br/>
            </div>

           


            
        </div>
      </div>
    );
  }
}

export default App;