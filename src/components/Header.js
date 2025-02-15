import { VscThreeBars } from "react-icons/vsc";

function Header(props) {
  return (
    <header>
      <div className="header container2">
        <div className="logo"><span>{props.logo}</span></div>

        <div>
          <nav>
            <ul>
              {props.list.map(navItem => (
                <li key={navItem.id}><span>{navItem.text}</span></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="cart-side">
          {props.cartSide.map(cartItem => (
            <div key={cartItem.id}>{cartItem.icon}</div>
          ))}
        </div>
        <div className="hmbrgr"><VscThreeBars /></div>
      </div>
    </header>
  );
}

export default Header;

