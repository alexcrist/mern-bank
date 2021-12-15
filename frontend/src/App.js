import { useState, useEffect } from 'react';
import Amount from './Amount';
import Edit from './Edit';
import { fetchDollarAmount } from './api';

function App() {

  const [dollarAmount, setDollarAmount] = useState(0);

  useEffect(function () {
    async function onLoad() {
      const amount = await fetchDollarAmount();
      setDollarAmount(amount);
    }
    onLoad();
  }, []);
  
  return (
    <div className='app'>
      <Amount dollarAmount={dollarAmount} />
      <Edit dollarAmount={dollarAmount} setDollarAmount={setDollarAmount} />
    </div>
  );
}

export default App;
