function GroceryForm () {
    return (
        <>
            <h1>Add Groceries</h1>
            <form>
                <label>
                    Item
                </label>
                <input
                    type="text"
                    placeholder="Item"
                ></input>
                <label>
                    Quantity
                </label>
                <input
                    type="text"
                    placeholder="Quantity"
                ></input>
                <label>
                    Units
                </label>
                <input
                    type="text"
                    placeholder="Units"
                ></input>
                <button>
                    Submit
                </button>
            </form>
        </>
    )
};

export default GroceryForm;