import React, { useReducer } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { initialState, reducer, AppContext } from "./src/store/reducer";
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {

  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;