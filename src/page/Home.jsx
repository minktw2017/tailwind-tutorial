import Nav from "../componnents/Nav";
import Slides from "../componnents/Slides";
import Frames from "../componnents/Frames";
import Form from "../componnents/Form";
import ServiceSection from "../componnents/ServiceSection";
import RunDown from "../componnents/RunDown";
import Feature from "../componnents/Feature";

// "hibiscus h-full min-h-[100vh] overflow-hidden"
// className="-z-20 sticky top-0 w-full min-h-screen"
// <div className="absolute left-0 top-0 -z-20 min-h-full w-full" />
// <div className="bgSquare bgSquareUp absolute left-[150px] -z-10" /> !overflow-auto
const Home = () => {
  // Fetch data here
  return (
    <div className="h-screen !max-h-screen !overflow-auto bgGradient">
      <Nav />
      <Slides />
      <Frames />
      <ServiceSection />
      <RunDown />
      <Feature />
      <Form />
    </div>
  );
};

export default Home;
