import { useEffect, useState } from 'react';
import './App.css';
import Sunglass from './components/Sunglass';
import Watch from './components/Watch';

function App() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
      .then((res) => res.json())
      .then((data) => setWatches(data))
      .catch((error) => console.error(error));
  }, []);
  /* const watches = [
    {
      id: 1,
      model: 'Apple Watch Series 8',
      features: [
        'Always-On Retina display',
        'Blood Oxygen app',
        'ECG app',
        'Fall Detection',
        'Crash Detection',
      ],
      price: 399,
    },
    {
      id: 2,
      model: 'Samsung Galaxy Watch 6 Classic',
      features: [
        'Super AMOLED display',
        'Blood Pressure monitoring',
        'Body Composition',
        'Sleep tracking',
        'GPS',
      ],
      price: 429,
    },
    {
      id: 3,
      model: 'Fitbit Sense 2',
      features: [
        'AMOLED display',
        'ECG app',
        'EDA sensor',
        'Temperature sensor',
        'GPS',
      ],
      price: 299,
    },
    {
      id: 4,
      model: 'Garmin Forerunner 955',
      features: [
        'AMOLED display',
        'Multi-sport GPS',
        'Performance metrics',
        'Battery life up to 30 hours',
        'Music storage',
      ],
      price: 599,
    },
    {
      id: 5,
      model: 'Amazfit GTR 4',
      features: [
        'AMOLED display',
        'Blood Oxygen monitoring',
        'Heart rate monitoring',
        'Stress tracking',
        'GPS',
      ],
      price: 169,
    },
  ]; */

  return (
    <>
      <div className='mb-4'>
        <h1 className='text-3xl font-semibold text-purple-400 text-center'>
          Data Storage and Integration
        </h1>
        <hr className='border-2 border-rose-400' />
      </div>
      <div>
        {watches.map((watch) => (
          <Watch key={watches.id} watch={watch}></Watch>
        ))}
        <Sunglass></Sunglass>
      </div>
    </>
  );
}

export default App;
