import React from 'react';
import './App.css';
import Toast from './Toast'

class App extends React.Component {
  state = {
    flag: false
  }
  render () {
    // const { flag } = this.state
    return (
      <div>
        <button onClick={() => {Toast.addNotice('info', '内容一', 3000)}}>open</button>
        {/* <Toast show={flag}/> */}
      </div>
    )
  }
}
export default App;
