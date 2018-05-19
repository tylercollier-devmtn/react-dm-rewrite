import React from 'react';
import Button from './Button';
import DeleteBtn from './DeleteBtn'

const List = (props) => {
    console.log(props)
    let list = props.products.map((item, i) => {
        return (
            <div key={i}>
            <ul className='list' >
                 {props.showPicture ? <div className='image'><img src={item.picture} alt={item.product_name} /></div> : null}
                 <li><b>{item.product_name}</b></li>
                 <br/>
                 <li>{item.price}</li>
                 <br/>
                 {props.add ? <Button text='Add To Cart' params={item} action={props.add} /> : <DeleteBtn delete={() => props.delete(item.id)} icon="fas fa-times-circle" />}
                
             </ul>
            </div>
        )
    })
    return list
}


// image list - image url
// some text
// opitonal btn 

// const List = (props) => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }
 
export default List;