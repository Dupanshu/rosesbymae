import { Routes, Route } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { PiFlowerTulip } from "react-icons/pi";
import videoSource from "./media/165306-832460162.mp4"

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
      text: "Home",
      link: "/"
    }, 
    {
      id: 2,
      text: "Collections",
      link: "/collections"
    }, 
    {
      id: 3,
      text: "About",
      link: "/about"
    }, 
    {
      id: 4,
      text: "FAQ",
      link: "/faq"
    }, 
    {
      id: 5,
      text: "Contact",
      link: "/contact"
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
    <video id="video" autoPlay muted loop>
      <source src={videoSource}
      type="video/mp4"/>
    </video>
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
