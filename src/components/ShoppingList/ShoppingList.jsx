

function ShoppingList ({list}) {
    return (
        <>{
        list.map(list => (
            <ShoppingList key={list.id} list={list}/>
        ))
        }
       
        
        </>

    )
}
export default ShoppingList
