import { FiInstagram } from "react-icons/fi";


function Footer(props) {

  return (
    <footer>
      <div className="container4">
        <div className="footer">
          <div className="upper-ftr">
            <div className ="logo"><span>{props.logo}</span></div>
          </div>
          <div className="lower-ftr">
            <div>
              <p>&copy; {new Date().getFullYear()} EternalRosesByMae </p>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </div>
            <div><a href="https://www.instagram.com/eternalrosesbymae" title="instagram"><FiInstagram /></a></div>
          </div>
        </div>
      </div>
    </footer>
  );

}

export default Footer;

