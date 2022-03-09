import logo from './logo.svg';
import React from 'react';
import './App.css';
import CounterClick from './Component/CounterClick/CounterClick';
import HoverClick from './Component/HoverClick';
import ComponentC from './Component/useContext/ComponentC';


export const UserContext = React.createContext()

function App() {
  return (
  <div className="App">
      {/* <CounterClick />
      <HoverClick /> */}
  <UserContext.Provider value={'Valar'}>
      <ComponentC />
  </UserContext.Provider>
          </div>
  );
}

export default App;
