import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";


function Header(props) {

  const [navVisible, setNavVisiblity] = useState(false);

  return (
    <header>
      <div className = "header container2">
        <div className ="logo"><span>{props.logo}</span></div>
        
        <div className = {navVisible ? 'visible' : 'hidden'}>
          <nav>
            <ul>
              {props.list.map(navItem => (
                <li key={navItem.id}><span>{navItem.text}</span></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className = {navVisible ? 'visible cart-side' : 'hidden cart-side'}>
          {props.cartSide.map(cartItem => (
            <div key={cartItem.id}>{cartItem.icon}</div>
          ))}
        </div>
        <div className="hmbrgr" onClick={() => setNavVisiblity(!navVisible)}>
          {navVisible ? <IoCloseSharp /> : <VscThreeBars />}
        </div>
        <div className={navVisible ? 'visible overlay' : 'hidden overlay'} onClick={() => setNavVisiblity(false)}></div>
      </div>
    </header>
  );
}

export default Header;

