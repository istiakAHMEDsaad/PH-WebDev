import "./index.css";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  //! Add Value
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  //! Reduce Value
  const handleReduce = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
    } else if (count <= 0) {
      const newCount = count - 0;
      setCount(newCount);
    }
  };
  return (
    <>
      <div className="mt-4 border-4 border-dotted border-orange-500 p-5">
        <h3 className="text-3xl underline pb-5 text-pink-500 text-center">
          Counter: <span className="text-amber-500">{count}</span>
        </h3>

        <div className="flex">
          <button
            className="mx-auto block border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-all delay-75 px-8 py-2 text-xl mb-2"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="mx-auto block border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-all delay-75 px-4 py-2 text-xl"
            onClick={handleReduce}
          >
            Reduce
          </button>
        </div>
      </div>
    </>
  );
}
