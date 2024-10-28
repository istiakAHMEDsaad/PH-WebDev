import './App.css';
import LinechartGraph from './components/LinechartGraph';
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
      <section>
        <LinechartGraph></LinechartGraph>
      </section>
    </>
  );
}

export default App;
