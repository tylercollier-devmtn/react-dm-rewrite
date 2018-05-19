import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dm_bottle from './assets/DM_Bottle.jpg';
import dm_hat from './assets/DM_Hat.jpeg';
import dm_ladies from './assets/DM_Ladies_Tee.jpg';
import dm_lanyard from './assets/DM_Lanyard.jpg';
import dm_socks from './assets/DM_Socks.jpeg';
import dm_tee from './assets/DM_Tee.jpg';

//React 2
import List from './2components/List';
import Button from './2components/Button';
import DeleteBtn from './2components/DeleteBtn'


const products = [{id: 0, product_name: 'WebDev Tri T-Shirt', price: 24.99, picture: dm_tee}, {id: 1, product_name: 'WebDev Ladies Tri T-shirt', price: 24.99, picture: dm_ladies}, {id: 2, product_name: '#DevLife Modern Dad Cap', price: 18.99, picture: dm_hat}, {id: 3, product_name: 'DevMountain Shiny Bottle', price: 29.99, picture: dm_bottle}, {id: 4, product_name: 'DevMountain Lanyard', price: 5.99, picture: dm_lanyard}, {id: 5, product_name: 'DevMountain Moonwalk Socks', price: 14.99, picture: dm_socks} ]

class App extends Component {
    constructor(){
        super();
        this.state = {
          total: 0,
          cart: [],
          name: '',
          message: '',
          // React 2
          shipping: false,
          giftWrap: false,
          validZip: false,
        }
      }

    // Create addProduct method here //
    addProduct = (item) => {
      console.log(item)
      let num;
      let newCart;
      setTimeout(() => {
    //     let count = 0;
    //   if(this.state.cart.length){
    //     console.log('hey2222')
    //     newCart = this.state.cart.slice().map(e => {
    //     if(e.product_name === item.product_name){
    //       ++count
    //       let name = products.slice().map(elem => {
    //         if(elem.product_name === e.product_name){
    //           return elem.product_name + ` x ${count}`;
    //         } 
    //       })
    //       e.product_name = name
    //     }
    //     return e;
    //   })
    //   this.setState({
    //     cart: newCart
    //   })
    //   return
    // }
        num = this.state.total + item.price;
        //Potential Black Diamond to round decimal places
        let total = Math.round(num * 100) / 100
        // End Potential Black Diamond
          console.log(this.state)
        this.setState({
          total: total,
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
      toggleCheck = (e) => {
        let val = e.target.value;
        let copy = this.state.cart.slice();
        if(val === 'Standard'){
          let newCart = copy.filter(e => {
            if(e.product_name === 'Expedited Shipping') {
            this.setState({
              total: this.state.total -= 5.99
            })
            return
            } else {
              return e
            }})
          console.log('2', newCart, copy)
          this.setState(() => {
            return {
            cart: newCart,
            // total: .reduce((a, c) => a + c.price, 0)
            shipping: !this.state.shipping
            }
          })
          console.log(newCart, copy)
          // this.addProduct({id: 6, product_name: 'Standard Shipping', price: 0.00})
        } else if (val === 'Expedited'){
          // let copy = this.state.cart.slice();
          let newCart = copy.filter(e => e.product_name !== 'Standard Shipping')
          console.log(newCart, copy)
          this.setState(() => {
            return {
            cart: newCart,
            shipping: true
            }
          })
          console.log('E', copy)
          // this.addProduct({id: 7, product_name: 'Expedited Shipping', price: 5.99})
        } else {
          let copy = this.state.cart.slice();
          console.log('Gift', copy)
          // this.addProduct({id: 8, product_name: 'Gift Wrap', price: 9.99})
          this.setState({
            giftWrap: !this.state.giftWrap
          })
        }
      }


      // toggleCheck = (e) => {
      //   let copy = this.state.cart.slice();
      //   let val = e.target.value
      //   let newTotal;
      //   if(val === 'Standard'){
      //     let newCart = copy.find((e, i) => {
      //       if(e.product_name === 'Expedited Shipping'){
      //         copy[i] = {product_name: 'Standard Shipping', price: 0.00}
      //       } 
      //     })
      //     console.log(newCart)
      //     if(newCart === undefined){ 
      //       this.addProduct({product_name: 'Standard Shipping', price: 0.00})
      //       newTotal = copy.reduce((total, val) => total + val.price, 0);
      //       this.setState({
      //         standardCheck: true,
      //         expeditedCheck: false,
      //         total: newTotal,
      //       })
      //     } else {
      //       this.setState({
      //         standardCheck: true,
      //         expeditedCheck: false,
      //         cart: copy,
      //       })
      //     }
      //   } else if(val === 'Expedited') {
      //     copy.find((e, i) => {
      //       if(e.product_name === 'Expedited Shipping'){
      //         copy[i] = {product_name: 'Expedited Shipping', price: 5.99}
      //       } 
      //     })
      //     this.setState({
      //       standardCheck: false,
      //       expeditedCheck: true,
      //     })
      //     this.addProduct({product_name: 'Expedited Shipping', price: 5.99})
      //   } else {
      //     this.setState({
      //       giftWrap: !this.state.giftWrap,
      //     })
      //     this.addProduct({product_name: 'Gift Wrap', price: 9.99})
      //   }
      
      // }


      // Create clearCart method here //
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
          standardCheck: false,
          expeditedCheck: false,
          giftWrap: false,
          message: 'Payment Successful!'
          })
        }
      }

      // REACT 2 //
      deleteItem = (id) => {
        let copy = this.state.cart.slice();
        let newCart = copy.filter(e => e.id !== id)
        setTimeout(() => {
          console.log(newCart, copy)
        }, 1000)
            this.setState({
              cart: newCart,
              total: newCart.reduce((a, c) => a + c.price, 0)
            })
      }

      calculateTotal(){
        let total = this.state.cart.map(e => {
          return e.price
        }).reduce((a, c) => a + c, 0)
        console.log('--------total', total);
        return total
      }

  render() {
    // let productList = products.map((item, i) => {
    //     return (
    //         // React 2
    //         <List key={i}>
    //           <ul>
    //             <div className='image'>
    //               <img name={item.id} src={item.picture} alt={item.product_name}/>
    //             </div>
    //               <li>{item.product_name}</li>
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
    //           <li>{e.product_name}</li>
    //           <li>{e.price}</li>
    //           <DeleteBtn delete={() => this.deleteItem(e.id)} icon="fas fa-times-circle" />
    //         </ul>
    //       </List>
    //     )
    //   })

    return (
      <div className="App">

      <header>
        <h1 className='title'>DevMountain Shop</h1>
      </header>

        <div className='products'>
        {/* {productList} */}

        {/* Child Component Being Rendered is List - All attributes in the List tag are props - Here is were we render the return of List - Ex: List() */}
        <List products={products} add={this.addProduct} showPicture={true}/> 
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
                        <label><input value='Standard' type="radio" onClick={e => this.toggleCheck(e)} defaultChecked={!this.state.shipping}/>Standard</label>
                        <label><input value='Expedited' type="radio" onClick={e => this.toggleCheck(e)} defaultChecked={this.state.shippingk}/>Expedited ($5.99)</label>
                        <label><input value='Gift Wrap' type="checkbox" onClick={e => this.toggleCheck(e)} checked={this.state.giftWrap}/>Gift Wrap ($9.99)</label>
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