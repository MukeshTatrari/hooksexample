import './App.css';
import DataFetching from './components/DataFetching';
import React from 'react';
import HookCounter from './components/HookCounter';
import HookCounterExample from './components/HookCounterExample';
import UseEffectExample from './components/UseEffectExample';
import UseStateExample from './components/UseStateExample';
import UseContextExample from './UseContextExample/UseContextExample';
import CounterOne from './UseReducerExample/CounterOne';
import CounterTwo from './UseReducerExample/CounterTwo';
import ParentContext from './UseContextExample/ParentContext';
import Main from './Test/Main';
import ABC from './Test/hooks/ABC';
import UseRef1 from './UseRef/UseRef1';
import UseRef3 from './UseRef/UseRef3';
import WithoutUseCallback from './UseCallback/WithoutUseCallback';
import UseCallbackExample from './UseCallback/UseCallbackExample';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UseStateExample />
      <HookCounterExample />
      <HookCounter />
      <UseEffectExample />
      <DataFetching />
      <UserContext.Provider value={'Mukesh'}>
        <ChannelContext.Provider value={'No Channel'}>
          <UseContextExample />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterOne />
      <CounterTwo />
      <ParentContext/> */}
      {/* <ABC/> */}
      {/* {/* <Main/> */}

      <UseRef1 />
      {/* <UseRef3 />  */}

      {/* <WithoutUseCallback/> */}
      {/* <UseCallbackExample/> */}

    </div>
  );
}

export default App;
