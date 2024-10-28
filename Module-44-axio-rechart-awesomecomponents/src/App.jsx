import './App.css';
import MyNav from './components/MyNav';
import PriceOptions from './components/PriceOptions';

function App() {
  return (
    <>
      <div>
        <MyNav></MyNav>
      </div>
      <main>
        <PriceOptions></PriceOptions>
      </main>
    </>
  );
}

export default App;
