import Banner from '../components/Home/Banner';
import Packages from '../components/Packages';
import WhyChooseUs from '../components/WhyChooseUs';
// import Banner from './../components/Home/Banner';
const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Packages/>
      <WhyChooseUs/>
      <Packages/> 
    </div>
  );
};

export default Home;
