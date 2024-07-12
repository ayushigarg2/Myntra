import './App.css';
import './style.css';

import React, { useState } from 'react';


function App() {
  const [coins, setCoins] = useState(0);

  const incrementCoins = () => {
    setCoins(coins + 1);
  };

  const decrementCoins = () => {
    if (coins > 0) {
      setCoins(coins - 1);
    }
  };

  return (
    <div className="container">
      <h1>Profile Page</h1>
      <p>Name: John Doe</p>
      <div className="coins">
        Super Coins: {coins}
      </div>
      <button onClick={incrementCoins}>Correct Answer</button>
      <button onClick={decrementCoins} disabled={coins === 0}>Remove Coin</button>
    </div>
  );


}

export default App;
