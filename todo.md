To do:
[Sab] SQL
    [ ] Set up data base
        [ ] SORT BY name
        [ ] object {
                id PRIMARY SERIAL KEY, 
                name VARCHAR (80), 
                quantity INTEGER ** NEED TO FIGURE OUT DECIMALS, 
                unit VARCHAR(20)
                }
[ ] App.js
    [Sub] axios.get (get items from db)
    [Kay] axios.post (add new item)
    [ ] axios.delete (remove item)
    [ ] axios.put (update item as purchased)
[ ] routers
    [ ] list.router.js
        [Sub] get endpoint
        [Kay] post endpoint
        [ ] delete endpoint
        [ ] put endpoint
[ ] Sources / components
    [ ] GroceryList.jsx (displays groceries)   
        [ ] Includes remove and buy buttons
    [Sab] GroceryForm.jsx (input form)


IMPORTANT SYNCHRONICITIES:
db name: shopping_list
router url: '/list'
