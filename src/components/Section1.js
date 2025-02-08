import { RiHeartAdd2Line } from "react-icons/ri";
import { BiCartAdd } from "react-icons/bi";

function Section1(props) {
  return (
    <section className="section1 container2">
      <h1>Featured Collection</h1>
      <div className="sec1-flex">
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
    </section>
  );
}

export default Section1;

