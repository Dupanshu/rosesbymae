import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import TopAd from "./components/TopAd";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { PiFlowerTulip } from "react-icons/pi";
import Home from './pages/Home';
import NotFound from './pages/NotFound';

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
      <Route exact path='*' element={<NotFound />} />
    </Routes>
    </main>
  );
}

export default App;
