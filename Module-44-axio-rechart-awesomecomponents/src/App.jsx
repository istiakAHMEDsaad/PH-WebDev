import './App.css';
import BrokenPhone from './components/BrokenPhone';
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
      <section>
        <BrokenPhone></BrokenPhone>
      </section>
    </>
  );
}

export default App;
