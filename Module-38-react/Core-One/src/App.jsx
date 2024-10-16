import './App.css';
import './index.css';

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold">Learning React</h1>
      <Person></Person>
    </>
  );
}

function Person() {
  const myName = 'saad';
  const myAge = 25;
  const myDetails = { name: 'Rahim', age: 18 };
  return (
    <>
      <p className="text-2xl">
        My name is: {myName}, My age is: {myAge}
      </p>
      <p className="text-2xl">
        His name is {myDetails.name}, His age is: {myDetails.age}
      </p>
    </>
  );
}

export default App;
