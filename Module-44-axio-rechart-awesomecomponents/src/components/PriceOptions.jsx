import PriceOption from './PriceOption';

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: 'Basic Membership',
      features: [
        'Access to gym facilities',
        'Standard workout equipment',
        'Limited gym hours',
        'Access to locker room',
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: 'Premium Membership',
      features: [
        'Access to gym facilities',
        'Full range of workout equipment',
        'Extended gym hours',
        'Group fitness classes',
        'Access to locker room',
      ],
      price: 50.0,
    },
    {
      id: 3,
      name: 'Platinum Membership',
      features: [
        'Access to gym facilities',
        'Full range of workout equipment',
        '24/7 gym access',
        'Personal training sessions',
        'Access to sauna and spa',
        'Access to locker room',
        'Towel service',
      ],
      price: 80.0,
    },
  ];

  return (
    <section className='md:container mx-auto mt-5 px-4 md:px-0'>
      <h2 className='text-4xl font-bold'>Best Price for You 😉</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </section>
  );
};

export default PriceOptions;
