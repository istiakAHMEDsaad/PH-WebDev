import './index.css';
export default function Singer({ singer }) {
  console.log(singer);
  return (
    <div>
      <h3 className="text-2xl text-pink-500">Singer name: {}</h3>
      <p className="text-lg text-fuchsia-400">Singer age: {}</p>
    </div>
  );
}
