import React from 'react';
import Header from './components/header/header.js';
import {Launch} from './components/launch/launch.js'
function App() {
  return (
    <div className="App">
     <Header />
      <Launch title="FalconSat" img="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg" date="2020-02-05" desc="Engine failure at 33 seconds and loss of vehicle"/>
    </div>
  );
}

export default App;
