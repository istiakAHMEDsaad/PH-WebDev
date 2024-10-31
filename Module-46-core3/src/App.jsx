import './App.css';
import ReuseableForm from './reuseable/ReuseableForm';
// import SimpleForm from './components/SimpleForm';
// import StateFulForm from './components/StateFulForm';
// import RefRorm from './components/RefRorm';
// import HookForm from './components/HookForm';

function App() {
  const handleSignUpBtn = (data) => {
    console.log('signup', data);
  };

  const handleUpdateBtn = (data) => {
    console.log('update', data);
  };

  return (
    <>
      <div>
        {/* <SimpleForm></SimpleForm> */}
        {/* <StateFulForm></StateFulForm> */}
        {/* <RefRorm></RefRorm> */}
        {/* <HookForm></HookForm> */}
        <ReuseableForm formTitle={'Sign up'} handleSubmited={handleSignUpBtn}>
          <div>
            <h2 className='text-2xl md:text-3xl text-orange-600'>Please Signup</h2>
            <p className='text-lg text-gray-500'>Sign up with your account</p>
          </div>
        </ReuseableForm>
        <ReuseableForm
          formTitle={'Profile update'}
          handleSubmited={handleUpdateBtn}
          submitBtn={'Update'}
        >
          <div>
            <h2 className='text-2xl md:text-3xl text-orange-600'>Update your profile</h2>
            <p className='text-lg text-gray-500'>Remember always update your profile ☺</p>
          </div>
        </ReuseableForm>
      </div>
    </>
  );
}

export default App;
