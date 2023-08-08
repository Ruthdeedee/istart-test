import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Menubar from './components/Menubar/Menubar';
import SwitchBtn from './components/Tab/Tab';
function App() {
  return (
    <div className="App">
      <SwitchBtn />
    <Menubar/>
    <Dashboard/>
    </div>
  );
}

export default App;
