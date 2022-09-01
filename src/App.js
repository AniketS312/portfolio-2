import './App.css';
import Main from './Main/Main';
import SideBar from './SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar 
        PageNumber="01"  
      />
      <Main />
    </div>
  );
};


export default App;
