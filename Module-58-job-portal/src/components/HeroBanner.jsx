// @ts-ignore
import imageOne from '../assets/img1.avif';
import imageTwo from '../assets/img2.avif';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className='bg-base-200 px-10'>
      {/* lg:flex-row-reverse */}
      <div className='flex lg:flex-row flex-col items-center'>
        <div className='lg:order-2 basis-[40%]'>
          <motion.img
            initial={{ x: -200, y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 3,
              delay: 1,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            src={imageOne}
            className='w-64 md:w-96 rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] border-l-8 border-b-8 border-blue-600'
          />
          <motion.img
            initial={{ x: 160, y: -20 }}
            animate={{ x: [0, 50, 0] }}
            transition={{
              delay: 1,
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            src={imageTwo}
            className='w-64 md:w-96 rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] border-l-8 border-b-8 border-blue-600'
          />
        </div>

        <div className='lg:order-1 lg:basis-[60%]'>
          <h1 className='text-5xl font-bold text-blue-950'>
            The <span className='text-blue-500'>Easiest Way</span> <br /> to Get
            Your New Job!
          </h1>
          <p className='py-6 w-3/6 text-gray-500'>
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
/* initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              repeat: Infinity
            }} */
