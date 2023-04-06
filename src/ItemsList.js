import React from "react";

function ItemsList(props)
{
    //const items = ['item 1', 'item 2', 'item 3'];
    const items = props.items;
    return(
     <ul>
       {items.map(item => (
        <li key={item}>{item} </li>
       ))}
     </ul> 
    
    );
    

}

export default ItemsList;