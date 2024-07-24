import logo from './logo.svg';
import './App.css';
import { Routes , Route, Router} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  
  return (
    <div>
      <Routes>
         <Route path = "/" element={<Home />} />
         <Route path = "/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
