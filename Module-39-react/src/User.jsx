import { useEffect, useState } from "react";

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}
