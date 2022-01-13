

function ShoppingList ({list}) {
    console.log('list', list);
    return (
        <>
        <ul>
        {list.map(item => (
            <li>
                {item.name}
            </li>
        ))};
        </ul>
       
        
        </>

    )
}
export default ShoppingList
