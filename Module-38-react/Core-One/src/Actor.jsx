import './index.css';
export default function Actor({ name }) {
  return (
    <h3 className="text-red-500 text-2xl">
      His girlfriend name is: <span className="text-teal-500">{name}</span>
    </h3>
  );
}
export function Singer({name}){
    return(
        <p className='text-gray-500 text-xl'>Singer name is: <span className='text-purple-500'>{name}</span></p>
    )
}