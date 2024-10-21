import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Bottles from './components/Bottles';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Bottles></Bottles>
      </div>
    </>
  );
}

export default App;
