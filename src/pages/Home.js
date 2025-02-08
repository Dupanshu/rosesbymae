import Banner from "../components/Banner";
import Section1 from "../components/Section1";

function Home() {
  const showItems = [
    {
      id: 1,
      prodName: "Red Rose",
      price: `$${40}`
    },
    {
      id: 2,
      prodName: "Blue Rose",
      price: `$${40}`
    },
    {
      id: 3,
      prodName: "Purple Rose",
      price: `$${40}`
    },
    {
      id: 4,
      prodName: "Blue Rose",
      price: `$${40}`
    }
  ]
  return (
    <>
      <Banner />
      <Section1 flexItem={showItems}/>
    </>
  );
}

export default Home;

