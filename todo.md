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
    [x] axios.get (get items from db)
    [x] axios.post (add new item)
    [ ] axios.delete (remove item)
        [ ] Remove button (remove item)
        [ ] Clear button (clears all items)
    [ ] axios.put (update item as purchased)
        [ ] Buy (removes buttons and says "purchased")
        [ ] Reset (clears statuses)
[ ] routers
    [ ] list.router.js
        [x] get endpoint
        [x] post endpoint
        [ ] delete endpoint
        [ ] put endpoint
[ ] Sources / components
    [x] ShoppingList.jsx (displays groceries)   
        [x] Includes remove and buy buttons
        [ ] Reset button
        [ ] Clear button
    [x] GroceryForm.jsx (input form)
[ ] CSS


IMPORTANT SYNCHRONICITIES:
db name: shopping_list
router url: '/list'
