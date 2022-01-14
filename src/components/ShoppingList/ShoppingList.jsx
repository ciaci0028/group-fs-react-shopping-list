
function ShoppingList ({shoppingList, deleteItem, modifyItem, clearAll, resetItems}) {
    console.log('list', shoppingList);


    return (
        <>
        <div >
            <div>
                <h2>Shopping List</h2>
                <button onClick={() => resetItems()}>Reset</button>
                <button onClick={() => clearAll()}>Clear</button>
            </div>
        {shoppingList.map(item => (
            <p className="itemDiv" key={item.id}>
                {item.name}<br />
                {item.quantity} {item.unit}<br />
                <button 
                    onClick={(event) => modifyItem(item)}
                >
                    Buy
                </button>
                <button onClick={(event) => deleteItem(item.id)}>Remove</button>
            </p>
        ))}
        </div>
        
        </>

    )
}
export default ShoppingList
