
// import './App.css';
import './style.css'
import HeaderComponent from './Components/Header/HeaderComponent';
import FooterComponent from './Components/Footer/FooterComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Auth/LoginPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
    <div>
      <HeaderComponent/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      <FooterComponent/>
    </div>
    
    </Router>
  );
}

export default App;
