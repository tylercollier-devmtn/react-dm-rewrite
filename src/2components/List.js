import React from 'react';
import Button from './Button';
import DeleteBtn from './DeleteBtn'

// Create Reusable List Component here //

const List = (props) => {
    console.log(props)
    let list = props.products.map((item, i) => {
        console.log('Item---', item)
        return (
            <div key={i}>
            <ul className='list' >
                 {props.showPicture ? <div className='image'><img src={item.picture} alt={item.productName} /></div> : null}
                 <li><b>{item.productName}</b></li>
                 <br/>
                 <li>${item.price}</li>
                 <br/>
                 {!props.showPicture ? <li>Quantity: {item.quantity}</li> : null}
                 {props.add ? <Button icon="shoppingTrolley" params={item} action={props.add} /> : <DeleteBtn delete={() => props.delete(item)} icon="noEntry" />}
                
             </ul>
            </div>
        )
    })
    return list
}


// image list - image url
// some text
// optional btn 
 
export default List;