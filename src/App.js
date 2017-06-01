import React from 'react';
import Main from './Main'
import { Provider } from 'react-redux'
import store from './redux/store'
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
export default App
