import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import TopAd from "./components/TopAd";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { PiFlowerTulip } from "react-icons/pi";
import Home from './pages/Home';

function App() {
  const companyName = 'EternalRosesByMae';
  const navItems = ["Home", "Collections", "About", "FAQ", "Contact"];
  const cartItems = [<IoSearchOutline />, <IoHeartOutline />, <PiFlowerTulip />]

  return (
    <main>
    <TopAd />
    <Header logo={companyName} list={navItems} cartSide={cartItems} />
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
    </main>
  );
}

export default App;
