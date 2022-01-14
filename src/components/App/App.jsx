import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';

import ShoppingList from '../ShoppingList/ShoppingList'
import GroceryForm from '../GroceryForm/GroceryForm'




function App() {
    let [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        fetchList();
    }, []);

    
    // Start of get
    const fetchList = () => {
        axios.get('/list')
        .then(response => {
            console.log('GET', response.data);
            setShoppingList(response.data);
        })
        .catch((error) => {
            console.log('GET Failed', error);
        });
    }; // end of get

    // start of post
    const addItem = ((newItem) => {
        console.log('new item is:', newItem)
        axios.post('/list', newItem)
            .then( (response) => {
            console.log('Response:', response);
            fetchList();
        })
        .catch(function (error) {
            console.log('Error on add:', error);
        });
     }); // end of post

    
    const modifyItem = ((modifiedItem) => {
        console.log('in modify item put axios', modifiedItem);
        
        // Change status to true
        modifiedItem.purchased = true;

        // axios put
        axios.put(`/list/${modifiedItem.id}`, modifiedItem)
            .then((response) =>{
                console.log('modify successful', response);
                fetchList();
            })
            .catch((err) =>{
                console.log('modify Failed', err);
            });

        
    });

    const resetItems = () => {
        console.log('in reset');
        fetchList();
    }

    const deleteItem = (event) => {
        console.log('in delete item axios');
        const id = event;
        console.log('id is', id);
        //axios.delete
        axios.delete(`/list/${id}`)
            .then((response) =>{
                console.log('Delete successful', response);
                fetchList();
            })
            .catch((err) =>{
                console.log('Delete Failed', err);
            });
    };
    
    const clearAll = () => {
        console.log('in clearAll axios');
        
        //axios.delete
        axios.delete(`/list`)
            .then((response) =>{
                console.log('Clear successful', response);
                fetchList();
            })
            .catch((err) =>{
                console.log('Clear Failed', err);
            });
    };


    return (
        <div className="App">
            <Header />
            <GroceryForm addItem={addItem}/>
            <ShoppingList 
                shoppingList={shoppingList} 
                deleteItem={deleteItem}
                clearAll={clearAll}
                modifyItem={modifyItem}
                resetItems={resetItems}
            /> 

        </div>
    );
}

export default App;
