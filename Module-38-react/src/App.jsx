import './App.css';
import './index.css';
import './Todo';
import Todo from './Todo';
import { Todo2 } from './Todo';
import { Todo3 } from './Todo';
import { Todo4 } from './Todo';
import { Todo5 } from './Todo';
import { Todo6 } from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore';

function App() {
  const actors = ['Enaa', 'Meena', 'Tina', 'Rina'];
  const singers = [
    {
      id: 1,
      name: 'Dr Mahfuzur',
      age: 68,
    },
    {
      id: 2,
      name: 'Eva Rahman',
      age: 46,
    },
    {
      id: 3,
      name: 'Shuvro Dev',
      age: 55,
    },
    {
      id: 4,
      name: 'Pritom Biswas',
      age: 28,
    },
  ];

  const books = [
    { id: 1, name: 'Physics', price: 240 },
    { id: 2, name: 'Chemistry', price: 220 },
    { id: 3, name: 'Biology', price: 270 },
    { id: 4, name: 'Math', price: 180 },
  ];

  return (
    <>
      <h1 className="text-5xl font-bold">Learning React</h1>
      <BookStore books={books}></BookStore>

      <Actor name="Holiciya"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <Singer name="Johurul Islam"></Singer>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
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
      {/* 8 */}
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="exploare core concept" isDone={false}></Todo>
      <Todo task="Playing game" isDone={false}></Todo>
      <Todo task="Pet a cat" isDone={true}></Todo>

      <Todo2 task="Vaat khai" isDone={true}></Todo2>
      <Todo2 task="Home work kori" isDone={false}></Todo2>

      <Todo3 task="Ghor porishkar" isDone={false}></Todo3>
      <Todo3 task="Bashon maja" isDone={false}></Todo3>
      <Todo3 task="Khabar khawa" isDone={true}></Todo3>

      <Todo4 task="Ghurte gechilam" isDone={true}></Todo4>

      <Todo5 task="Delivery the knife" isDone={false}></Todo5>
      <Todo5 task="Delivery the paper" isDone={true}></Todo5>

      <Todo6 task="Help mom" isDone={true}></Todo6>
      <Todo6 task="Help sister" isDone={false}></Todo6>
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
function Developer({
  quality1 = 'modarate',
  quality2 = 'ok level',
  problemsolve1 = 500,
  problemsolve2 = 200,
}) {
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
