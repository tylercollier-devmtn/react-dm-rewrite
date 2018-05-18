import React from 'react';
import Button from './Button';
import DeleteBtn from './DeleteBtn'

const List = (props) => {
    console.log(props)
    let list = props.products.map((item, i) => {
        return (
            <div key={i}>
            <ul className='list' >
                 {props.showPicture ? <img src={item.picture} alt={item.product_name} /> : null}
                 <li><b>{item.product_name}</b></li>
                 <br/>
                 <li>{item.price}</li>
                 <br/>
                 {props.add ? <Button text='Add To Cart' params={item} action={props.add} /> : <DeleteBtn delete={() => props.delete(item.id)} icon="fas fa-times-circle" />}
                
             </ul>

            {/* {props.children} */}
            </div>
        )
    })
    // console.log(list)
    return list
}
 
export default List;