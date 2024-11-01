import './App.css';
import { Routes, Route } from 'react-router-dom';
import Data from './providers/Data';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className='App'>
      <Data>
        <Header/>
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Home/>} />
            <Route path={process.env.PUBLIC_URL + "/About"} element={<About/>} />
            <Route path={process.env.PUBLIC_URL + "/History"} element={<History/>} />
            <Route path={process.env.PUBLIC_URL + "/Contacts"} element={<Contacts/>} />
          </Routes>
      </Data>
    </div>
  );
}

export default App;
