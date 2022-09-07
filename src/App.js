import { useState } from 'react';

import './App.css';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';

function App() {
const [mainHeight, setMainHeight] = useState(0)

  return (
    <div className="App">
      <SideBar 
        PageNumber="01"  
      />
      <Main 
        height = {setMainHeight}
      />
    </div>
  );
};


export default App;
