# Project Summary

In this project, we'll introduce you to React by creating a small project from scratch. We'll make use of the ```create-react-app``` CLI tool to quickly generate a React boilerplate. The goal of this project is to create a simple interface for creating a DevMountain Shop that utilizes a basic cart feature.

### Live Example

Click Me!

### Setup

1. ```Fork``` and ```clone`` this repository.
2. Run ```sudo npm install -g create-react-app``` in your terminal.


# Step 1

## Summary

In this step, we'll use ```create-react-app``` to create the React boilerplate.

## Instructions

* ```cd``` into the root directory of the project.
* Run ```create-react-app ./```.
* Once the install is completed, delete the ```README.md``` that the boilerplate generates and rename ```README.old.md back``` to ```README.md```.
* Run ```npm start``` or ```yarn start```.

## Solution

# Step 2

## Summary

In this step, we'll clear the boilerplate that is made for us in ```src/App.js```.

## Instructions

* Open ```src/App.js```
* Inside of the ```return()``` statement, replace everything with a single ```<div>``` element. 

## Solution

<details>
    <summary><code>src/App.js</code></summary>

```jsx
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
// Create Constructor Here


  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
```

</details>

# Step 3

## Summary

In this step, we are going to render the included list of products inside the ```return()``` to include the ```picture```, ```productName```, ```price``` and an ```Add To Cart``` Button. 

## Instructions

* Open ```src/App.js```.
* Inside the ```render()``` but above the ```return```, map through the products array. In the return of the map, create a ```<div>``` that contains an ```<img>``` tag for the items picture, an ```<h1>``` tag for the item name, an ```<h4>``` tag for the items price and lastly, the a ```<button>``` tag so the product can be added to our cart. 
* To finish this step

## Solution

# Step 4

## Summary

## Instructions

## Solution

# Step 5

## Summary

## Instructions

## Solution

# Step 6

## Summary

## Instructions

## Solution

# Step 7

## Summary

## Instructions

## Solution
