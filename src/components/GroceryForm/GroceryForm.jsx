// Importing useState from react
import {useState} from 'react';

function GroceryForm () {
    // Constants we need for later
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');
    const [newItemUnits, setNewItemUnits] = useState('');


    // Function for submit button
    const handleSubmit = (event) => {
        // Prevent page refresh
        event.preventDefault();

        // Create new item object for later to be sent
        // to the database
        let newItem = {
            name: newItemName,
            quantity: newItemQuantity,
            unit: newItemUnits
        };
        console.log('new Item is:', newItem);

        // Here is where I need to call the POST function

        // Clear inputs
        setNewItemName('');
        setNewItemQuantity('');
        setNewItemUnits('');

    };

    return (
        <>
            <h1>Add Groceries</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Item
                </label>
                <input
                    type="text"
                    placeholder="Item"
                    value={newItemName}
                    onChange={(evt) => setNewItemName(evt.target.value)}
                ></input>
                <label>
                    Quantity
                </label>
                <input
                    type="text"
                    placeholder="Quantity"
                    value={newItemQuantity}
                    onChange={(evt) => setNewItemQuantity(evt.target.value)}
                ></input>
                <label>
                    Units
                </label>
                <input
                    type="text"
                    placeholder="Units"
                    value={newItemUnits}
                    onChange={(evt) => setNewItemUnits(evt.target.value)}
                ></input>
                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    )
};

export default GroceryForm;