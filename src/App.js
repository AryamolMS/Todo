import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Authentication/Authentication';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
