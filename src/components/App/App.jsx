import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';

import ShoppingList from '../ShoppingList/ShoppingList'
import GroceryForm from '../GroceryForm/GroceryForm'



function App() {

    useEffect(() => {
        fetchList();
    }, []);
  
    let [ShoppingList, setShoppingList] = useState([]);
    
    // Start of get
    const fetchList = () => {
        axios.get('/list')
        .then((res) => {
            console.log('GET', res.data);
            setShoppingList(res.data);
        })
        .catch((error) => {
            console.log('GET Failed', error);
        });
    }; // end of get
  
    // start of post
    function addItem = (newShoppingList) => {
        axios.post('/list', newShoppingList)
            .then( (response) => {
             console.log('Response:', response);
        })
        .catch(function (error) {
          console.log('Error on add:', error);
        });
    }; // end of post
  
   const deleteItem = () => {
        console.log('in delete item axios');
        //axios.delete
    };

    const modifyItem = () => {
        console.log('in modify item put axios');
        // axios.put
    };

  return (
        <div className="App">
            <Header />
            <GroceryForm />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
