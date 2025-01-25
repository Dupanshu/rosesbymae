import Header from "./components/Header";
import TopAd from "./components/TopAd";
import { IconName } from "react-icons/fa";

function App() {
  const companyName = 'EternalRosesByMae';
  const navItems = ["Home", "Collections", "About", "FAQ", "Contact"];
  return (
    <>
    <TopAd />
    <Header logo={companyName} list={navItems}/>
    </>
  );
}

export default App;
