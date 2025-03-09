import { Routes, Route } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { PiFlowerTulip } from "react-icons/pi";

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import TopAd from "./components/TopAd";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  const companyName = 'EternalRosesByMae';
  const navItems = [
    {
      id: 1,
      text: "Home"
    }, 
    {
      id: 2,
      text: "Collections"
    }, 
    {
      id: 3,
      text: "About"
    }, 
    {
      id: 4,
      text: "FAQ"
    }, 
    {
      id: 5,
      text: "Contact"
    }
  ];
  const cartItems = [
    {
      id: 6,
      icon: <IoSearchOutline />
    }, 
    {
      id: 7,
      icon: <IoHeartOutline />
    }, 
    {
      id: 8,
      icon: <PiFlowerTulip />
    }
  ]

  return (
    <main>
    <TopAd />
    <Header logo={companyName} list={navItems} cartSide={cartItems} />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='*' element={<NotFound />} />
    </Routes>
    <Footer logo={companyName} />
    </main>
  );
}

export default App;
