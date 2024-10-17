import './index.css'
//! Conditional Rendering 1
export default function Todo({ task, isDone }) {
  if (isDone === true) {
    return <p className='text-emerald-500 text-lg'>Task 1: {task}✔</p>;
  } else {
    return <p className='text-emerald-500 text-lg'>Task 1: {task}❌</p>;
  }
}

//! Conditional Rendering 2
export function Todo2({ task, isDone }) {
  if (isDone) {
    return <p className='text-cyan-500 text-lg'>Task 2: {task} ✅</p>;
  }
  return <p className='text-cyan-500 text-lg'>Task 2: {task} ❌</p>;
}

//! Condiitonal Rendering 3 [ternary]
export function Todo3({ task, isDone }) {
  return (
    <li className='text-orange-500 text-lg'>
      {isDone ? 'Finished task😉' : 'Work in progress😥'} :{task}
    </li>
  );
}

//! Conditional Rendering 4 [ternary]
export function Todo4({ task, isDone }) {
  return (
    <>
      <ol type="i">
        <li className='text-lime-500 text-lg'>
          {task} {isDone && ': ✅'}
        </li>
      </ol>
    </>
  );
}

//! Conditional Rendering 5 [ternary]
export function Todo5({ task, isDone }) {
  if (isDone === true) {
    return (
      <p className='text-amber-500 text-lg'>
        -{task} is &apos;{isDone && 'complete 😀'}&apos;
      </p>
    );
  } else {
    return (
      <p className='text-amber-500 text-lg'>
        -{task} is &apos;{isDone || 'not complete 😿'}&apos;
      </p>
    );
  }
}

//! Conditional Rendering 6 [ternary]
export function Todo6({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li className='text-teal-500 text-lg'>Finished👍: {task}</li>;
  } else {
    listItem = <li className='text-teal-500 text-lg'>Unfinished👎: {task}</li>;
  }
  return listItem;
}
