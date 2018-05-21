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


const products = [{id: 0, productName: 'WebDev Tri T-Shirt', price: 25.00, picture: dm_tee}, {id: 1, productName: 'WebDev Ladies Tri T-shirt', price: 25.00, picture: dm_ladies}, {id: 2, productName: '#DevLife Modern Dad Cap', price: 19.00, picture: dm_hat}, {id: 3, productName: 'DevMountain Shiny Bottle', price: 20.00, picture: dm_bottle}, {id: 4, productName: 'DevMountain Lanyard', price: 6.00, picture: dm_lanyard}, {id: 5, productName: 'DevMountain Moonwalk Socks', price: 15.00, picture: dm_socks} ]

class App extends Component {
    constructor(){
        super();
        this.state = {
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
    //     if(e.productName === item.productName){
    //       ++count
    //       let name = products.slice().map(elem => {
    //         if(elem.productName === e.productName){
    //           return elem.productName + ` x ${count}`;
    //         } 
    //       })
    //       e.productName = name
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
            if(e.productName === 'Expedited Shipping') {
            this.setState({
              total: this.state.total - 5.99
            })
            return
            } else {
              return e
            }})
          console.log('2', newCart, copy)
          this.setState(() => {
            return {
            cart: newCart,
            shipping: !this.state.shipping
            }
          })
          console.log(newCart, copy)
        } else if (val === 'Expedited'){
          let newCart = copy.filter(e => e.productName !== 'Standard Shipping')
          console.log(newCart, copy)
          this.setState(() => {
            return {
            cart: newCart,
            shipping: true
            }
          })
          console.log('E', copy)
        } else {
          let copy = this.state.cart.slice();
          console.log('Gift', copy)
          this.setState({
            giftWrap: !this.state.giftWrap
          })
        }
      }



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
        if(this.state.shipping) {
          total += 5;
        }
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
    //               <img name={item.id} src={item.picture} alt={item.productName}/>
    //             </div>
    //               <li>{item.productName}</li>
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
    //           <li>{e.productName}</li>
    //           <li>{e.price}</li>
    //           <DeleteBtn delete={() => this.deleteItem(e.id)} icon="fas fa-times-circle" />
    //         </ul>
    //       </List>
    //     )
    //   })
    console.log(this.state)
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
                        <label><input value='Standard' type="radio" onChange={e => this.toggleCheck(e)} checked={!this.state.shipping}/>Standard</label>
                        <label><input value='Expedited' type="radio" onChange={e => this.toggleCheck(e)} checked={this.state.shipping}/>Expedited ($5.99)</label>
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