import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    function addItem = (newShoppingList) => {
        axios.post('/list', newShoppingList)
            .then( (response) => {
             console.log('Response:', response);
        })
        .catch(function (error) {
          console.log('Error on add:', error);
        });
    };
        
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
