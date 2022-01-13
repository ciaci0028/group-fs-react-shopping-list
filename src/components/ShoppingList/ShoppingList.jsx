import axios from "axios";

function ShoppingList ({shoppingList}) {
    console.log('list', shoppingList);

    const deleteItem = (event) => {
        console.log('in delete item axios');
        const id = event;
        console.log('id is', id);
        //axios.delete
        axios.delete(`/list/${id}`)
            .then()
            .catch();
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
