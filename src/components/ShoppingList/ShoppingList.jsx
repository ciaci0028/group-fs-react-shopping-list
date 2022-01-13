function ShoppingList ({shoppingList}) {
    console.log('list', shoppingList);

    const deleteItem = () => {
        console.log('in delete item axios');
        //axios.delete
    };
    return (
        <>
        <div >
            <div>
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
            </div>
        {shoppingList.map(item => (
            <p className="itemDiv" key={item.id}>
                {item.name}<br/>
                {item.quantity} {item.unit}<br/>
                <button>Buy</button>
                <button onClick={deleteItem}>Remove</button>
            </p>
        ))};
        </div>
        
        </>

    )
}
export default ShoppingList
