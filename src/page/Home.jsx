import Nav from "../componnents/Nav";
import Slides from "../componnents/Slides";
import Frames from "../componnents/Frames";
import Form from "../componnents/Form";
import ServiceSection from "../componnents/ServiceSection";
import RunDown from "../componnents/RunDown";
import Feature from "../componnents/Feature";

const Home = () => {
  // "hibiscus h-full min-h-[100vh] overflow-hidden"

  // Fetch data here
  return (
    <div className="hibiscus h-full !max-h-full !overflow-auto">
      <div>
        <Nav />
        <Slides />
        <Frames />
        <ServiceSection />
        <RunDown />
        <Feature />
        <Form />
      </div>
    </div>
  );
};

export default Home;
