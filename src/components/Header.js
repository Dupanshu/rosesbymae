function Header(props) {
  return (
    <header>
      <div className="header">
        <div className="logo"><span>{props.logo}</span></div>

        <div>
          <nav>
            <ul>
              {props.list.map(navItem => (
                <li><span>{navItem}</span></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="cart-side">
          {props.cartSide.map(cartItem => (
            <div>{cartItem}</div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;

