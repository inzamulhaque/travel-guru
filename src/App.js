import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
