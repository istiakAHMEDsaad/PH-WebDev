import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from 'recharts';
import { ColorRing } from 'react-loader-spinner';

const BrokenPhone = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then((data) => {
        const phoneData = data.data.data;
        const allPhoneData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1]),
          };
          return obj;
        });
        console.log(phoneData);
        setPhones(allPhoneData);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && (
        <div>
          <ColorRing
            visible={true}
            height='80'
            width='80'
            ariaLabel='color-ring-loading'
            wrapperStyle={{}}
            wrapperClass='color-ring-wrapper'
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      )}
      <h2 className='text-2xl font-bold'>Total Phone: {phones.length}</h2>
      <BarChart width={800} height={400} data={phones}>
        <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar dataKey='price' fill='#66cdaa' />
      </BarChart>
    </div>
  );
};

export default BrokenPhone;
