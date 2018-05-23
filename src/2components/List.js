import React from 'react';
import Button from './Button';
import DeleteBtn from './DeleteBtn'

// Create Reusable List Component here //

const List = (props) => {
    let list = props.products.map((item, i) => {
        return (
            <div key={i}>
                <ul className='list' >
                        {props.showPicture ? <div className='image'>
                                            <img src={item.image} alt={item.title} />
                                         </div> : null}
                        <li><b>{item.title}</b></li>
                            <br/>
                        <li>${item.price}</li>
                            <br/>
                        {props.add ? <Button text='Add To Cart' params={item} action={props.add} /> : <DeleteBtn action={() => props.delete(item)} icon="noEntry" />}
                </ul>
            </div>
        )
    })
    return list
}

// Possible Icon for 'Add to Cart' button is icon='shoppingTrolley'
 
export default List;