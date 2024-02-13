import FooterCard from "../FooterCard";
import Layout from "../Layout";
import {NavbarComponent} from "../NavBar";

const Home = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto py-3">
        <NavbarComponent />
        <Layout />
        <FooterCard />
      </div>
    </div>
  );
};

export default Home;
