function ShoppingList ({shoppingList}) {
    console.log('list', shoppingList);
    return (
        <>
        <div >
            <div>
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
            </div>
        {shoppingList.map(item => (
            <p className="itemDiv">
                <h3>{item.name}</h3>
                <h3>{item.quantity} {item.unit}</h3>
                <button>Buy</button>
                <button>Remove</button>
            </p>
        ))};
        </div>
        
        </>

    )
}
export default ShoppingList
