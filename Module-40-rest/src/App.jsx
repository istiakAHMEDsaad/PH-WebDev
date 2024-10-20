import './App.css';
import Countries from './components/Countries';

function App() {
  return (
    <>
      <div className='py-5'>
        <h1 className='text-4xl text-center font-semibold text-cyan-500 underline mb-5'>
          Restful Countires API
        </h1>
        <div className='border border-rose-500 rounded-md p-5'>
          <Countries></Countries>
        </div>
      </div>
    </>
  );
}

export default App;
