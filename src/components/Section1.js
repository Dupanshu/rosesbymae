import { RiHeartAdd2Line } from "react-icons/ri";
import { BiCartAdd } from "react-icons/bi";
import background from "../media/rose-vine.png"

function Section1(props) {
  return (
    <section className="section1">
      <div className="container3">
        <h1>Featured Collection</h1>
        <div className="sec1-flex">
          <img src={background} alt="background" title="background" className="background"/>
          <img src={background} alt="background2" title="background2" className="background2"/>
          {props.flexItem.map(showItem =>(
            <div key={showItem.id} className="sec1-flx-div">
              <img src={`//unsplash.it/284/255`} alt='Pic1' title='Pic1' />
              <div className="prod-info">
                <div>
                  <p>{showItem.prodName}</p>
                  <p>{showItem.price}</p>
                </div>
                <div className="icn-flx">
                  <BiCartAdd />
                  <RiHeartAdd2Line />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section1;

