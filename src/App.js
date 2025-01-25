import Header from "./components/Header";
import TopAd from "./components/TopAd";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { PiFlowerTulip } from "react-icons/pi";

function App() {
  const companyName = 'EternalRosesByMae';
  const navItems = ["Home", "Collections", "About", "FAQ", "Contact"];
  const cartItems = [<IoSearchOutline />, <IoHeartOutline />, <PiFlowerTulip />]

  return (
    <>
    <TopAd />
    <Header logo={companyName} list={navItems} cartSide={cartItems}/>
    </>
  );
}

export default App;
