To do:
[x] SQL
    [x] Set up data base
        [x] SORT BY name
        [x] object {
                id PRIMARY SERIAL KEY, 
                name VARCHAR (80), 
                quantity INTEGER ** NEED TO FIGURE OUT DECIMALS, 
                unit VARCHAR(20)
                }
[ ] App.js
    [Sub] axios.get (get items from db)
    [Kay] axios.post (add new item)
    [Sab] axios.delete (remove item)
    [Sab] axios.put (update item as purchased)
[ ] routers
    [ ] list.router.js
        [Sub] get endpoint
        [Kay] post endpoint
        [Sab] delete endpoint
        [Sab] put endpoint
[ ] Sources / components
    [Sub] ShoppingList.jsx (displays groceries)   
        [ ] Includes remove and buy buttons
    [Sab] GroceryForm.jsx (input form)


IMPORTANT SYNCHRONICITIES:
db name: shopping_list
router url: '/list'
