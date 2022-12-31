import './App.css';
import {Routes,Route} from 'react-router'
import Header from './components/Header';
import NestedCard from './components/NestedCard';
import Actor from './components/Actor'
import Sports from './components/Sports'
import Politics from './components/Politics';
import Flower from './components/Flower';
import Wildlife from './components/Wildlife';
import Gym from './components/Gym';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path="/" element={<NestedCard/>}></Route>
     <Route path="/actor" element={<Actor/>}></Route>
     <Route path="/sports" element={<Sports/>}></Route>
     <Route path="/wildlife" element={<Wildlife/>}></Route>
     <Route path="/politics" element={<Politics/>}></Route>
     <Route path="/flower" element={<Flower/>}></Route>
     <Route path="/gym" element={<Gym/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
