import { createContext } from 'react';

export const serverProvider = createContext(null);
const MyProvider = ({ children }) => {
  const myName = 'saad';
  const myValue = {
    myName,
  };

  return (
    <serverProvider.Provider value={myValue}>
      {children}
    </serverProvider.Provider>
  );
};

export default MyProvider;
