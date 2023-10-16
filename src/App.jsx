import './App.css';
import Navigation from './components/Navigation';
import Info from "./components/Info";
import Plans from "./components/Plans";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
// import Application from './components/Application';

import { useSelector } from "react-redux";




function App() {
  const section = useSelector(state => state.global.section);
  // const isCompleted = useSelector(state => state.global.isCompleted);

  return (
    <div className='App'>
      {/* {isCompleted && <Application />} */}
      <Navigation />
      <div className="content">
        {section === 0 && <Info />}
        {section === 1 && <Plans />}
        {section === 2 && <AddOns />}
        {section === 3 && <Summary />}
      </div>
    </div>
  )
}


export default App
