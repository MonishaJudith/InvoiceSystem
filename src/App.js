import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './HTML/LoginPage';
function App() {
  return (
 <Router>
 <Routes>
  <Route path='/' element={<LoginPage/>}></Route>
  </Routes>
  </Router>
  );
}

export default App;
