import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContexAPI } from '../Provider/ContexProviderAPI';

const CardDetails = () => {
  const { coffee } = useContext(ContexAPI);
  const selectedId = useParams();
  const _id = selectedId._id;

  const [conffeeDetals, setCoffeeDetails] = useState({});
  useEffect(() => {
    const singleCoffeeDetails = coffee.find((cofee_id) => cofee_id._id === _id);
    setCoffeeDetails(singleCoffeeDetails);
  }, [coffee, _id]);

  const {name} = conffeeDetals || {};
  return (
    <div>
      <h2>Card Details: {name}</h2>
    </div>
  );
};

export default CardDetails;
