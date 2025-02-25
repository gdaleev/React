import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from './components/Header/Header.jsx'
import HeroSection from "./components/Hero Section/HeroSection.jsx";
import Products from "./components/Products/Products.jsx";


function App() {
  return (
    <>
      <Header/>
      <HeroSection />
      <Products />
      <Footer />
    </>
  );
}

export default App;
