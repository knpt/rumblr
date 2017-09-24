
import React from 'react';
import store from './Reducers/index'
import { Provider } from 'react-redux'
import HomeNavigator from './Components/HomeNav'


export default App = ()=> {
  return (
    <Provider store={store}>
      <HomeNavigator/>
    </Provider>
  )
}

