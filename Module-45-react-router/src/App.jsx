import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { ColorRing } from 'react-loader-spinner';

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location)
  return (
    <>
      <div>
        <Header></Header>
      </div>
      {navigation.state === 'loading' ? (
        <ColorRing
          visible={true}
          height='80'
          width='80'
          ariaLabel='color-ring-loading'
          wrapperStyle={{}}
          wrapperClass='color-ring-wrapper'
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        ></ColorRing>
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
}

export default App;
