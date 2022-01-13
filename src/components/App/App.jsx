import React from 'react';
import axios from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    axios.post('/list', newShoppingList)
    .then( (response) => {
      console.log('Response:', response);
      fetchShoppingList();
    })
    .catch(function (error) {
      console.log('Error on add:', error);
    });
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
