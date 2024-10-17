import "./App.css";
import "./index.css";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("regular function 😎");
  }

  const handleClick2 = () => {
    alert("arrow function 😲");
  };

  const addToFive = (num) => {
    let increasVal = 0;
    increasVal = num++;
    return alert(increasVal);
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-[#53d2fa] mt-4">
        React Core Concept Part 2
      </h1>

      <div className="mt-2 flex justify-around border py-8 rounded-md">
        {/* --------- Button 1 --------- */}
        <button
          onClick={handleClick}
          className="bg-neutral-900 py-3 px-6 rounded-md border border-red-500 hover:bg-neutral-800 transition-all text-xl"
        >
          Click Me 😀
        </button>

        {/* --------- Button 2 --------- */}
        <button
          onClick={handleClick2}
          className="bg-neutral-900 py-3 px-6 rounded-md border border-pink-500 hover:bg-neutral-800 transition-all text-xl"
        >
          Click Me 😁
        </button>

        {/* --------- Button 3 --------- */}
        <button
          onClick={() => {
            alert("inline arrow function 😶");
          }}
          className="bg-neutral-900 py-3 px-6 rounded-md border border-purple-500 hover:bg-neutral-800 transition-all text-xl"
        >
          Click Me 😄
        </button>

        {/* --------- Button 3 --------- */}
        <button
          onClick={() => {
            addToFive(1);
          }}
          className="bg-neutral-900 py-3 px-6 rounded-md border border-amber-500 hover:bg-neutral-800 transition-all text-xl"
        >
          Click Me 😏
        </button>
      </div>

      <div>
        <Counter></Counter>
      </div>
    </>
  );
}

/**
 * function useState(num){
 *  function updateNum(value){
 *    num = value;
 *  }
 *  return [num, updateNum];
 * }
 *
 * const [count] = useState(5)
 */

export default App;
