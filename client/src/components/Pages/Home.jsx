import "react-multi-carousel/lib/styles.css";
import Header from "./Header";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Services from "../Services";
import RoleSelectionPageHome from './RoleSelectionPageHome';
function Home() {
  return (
    <>
      <Header className="z-150"/>
      <HeroSection/>
      <RoleSelectionPageHome/>
      <Services/>
      <Footer/>
    </>
  );
}
export default Home;
