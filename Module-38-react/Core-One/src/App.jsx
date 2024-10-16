import './App.css';
import './index.css';

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold">Learning React</h1>
      {/* 1 */}
      <Person></Person>
      {/* 2 */}
      <Student grade="12" department="science"></Student>
      {/* 3 */}
      <Student grade="11" department="commerce"></Student>
      {/* 4 */}
      <Developer
        quality1="expart"
        quality2="noob"
        problemsolve1="1000"
        problemsolve2="4"
      ></Developer>
      {/* 5 */}
      <Developer></Developer>
      {/* 6 */}
      <Developer
        quality1="boss"
        quality2="power"
        problemsolve1="3500"
        problemsolve2="2000"
      ></Developer>
      {/* 6 */}
      <Device name="1992 computer 😥" price="13000"></Device>
      {/* 7 */}
      <Device name="mac 2019 " price="13000"></Device>
    </>
  );
}

// Person
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
      <hr></hr>
    </>
  );
}

// Students
function Student({ grade, department }) {
  // console.log(grade, department);
  return (
    <div className="student">
      <h3>
        I&apos;m Student, Grade: {grade}, Department: {department}
      </h3>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
}

// Developer
function Developer({ quality1='modarate', quality2='ok level', problemsolve1=500, problemsolve2=200 }) {
  const developerStyle = {
    border: '2px solid purple',
    padding: '1.25rem',
    margin: '1.25rem',
    borderRadius: '0.8rem',
  };

  return (
    <>
      <div style={developerStyle}>
        <h5>
          Rahim is an {quality1} programmer, he solved {problemsolve1} question
        </h5>
        <p>Coding level supreme ⚡</p>
      </div>
      <div
        style={{
          border: '2px solid wheat',
          padding: '1.25rem',
          margin: '1.25rem',
          borderRadius: '0.8rem',
        }}
      >
        <h5>
          Jakariya is an {quality2} programmer, he solved {problemsolve2}{' '}
          question
        </h5>
        <p>Coding level 💩</p>
      </div>
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <>
      <h4>
        * My device is: {props.name} & price is: {props.price}
      </h4>
    </>
  );
}

export default App;
