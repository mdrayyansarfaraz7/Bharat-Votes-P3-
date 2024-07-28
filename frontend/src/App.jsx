
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {Outlet} from 'react-router-dom';

function App() {
 
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
