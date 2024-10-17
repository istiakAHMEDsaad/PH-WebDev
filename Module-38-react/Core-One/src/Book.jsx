import './index.css';
export default function Books({ book }) {
  const { name, price } = book;
  return (
    <div>
      <h3 className="text-2xl text-purple-500">
        Book name: <span className="text-amber-500">{book.name}</span>
      </h3>
      <p className="text-xl text-cyan-500">
        Price <span className="text-emerald-500">{price}</span>
      </p>
    </div>
  );
}
