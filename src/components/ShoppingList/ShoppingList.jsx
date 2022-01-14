import axios from "axios";

function ShoppingList ({shoppingList, deleteItem}) {
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
            <p className="itemDiv" key={item.id}>
                {item.name}<br />
                {item.quantity} {item.unit}<br />
                <button>Buy</button>
                <button onClick={(event) => deleteItem(item.id)}>Remove</button>
            </p>
        ))};
        </div>
        
        </>

    )
}
export default ShoppingList
