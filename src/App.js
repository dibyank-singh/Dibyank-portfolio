import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Navbardemo from "./Components/Navbar/Navbardemo/Navbardemo";
import PersonalSec from "./Components/PersonalSection/PersonalSec";
import Carts from "./Components/Services/Carts/Carts";


function App() {
  return (
    <>
    {/* <Navbar />  */}
    <Navbardemo/>
    <Header/>
    <HeroSection/>
    <Carts/>
    <PersonalSec/>
    <Footer/>
    </>
  );
}

export default App;
