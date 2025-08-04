import './App.css';
import Navbar from './components/navbar/Navbar';
import  ContactSection from './components/ContactSection/ContactSection';
import Contactdetails from './components/Contactdetails/Contactdetails';
import SantoriniHome from './components/SantoriniHome/SantoriniHomecode.jsx';
import HomeForm from './components/HomeForm/HomeForm';
import Review from './components/Reviews/Reviewscode';
import Services from './components/Services/Services';
import Number from './components/numbers/Numbers';
import ImgGalary from './components/ImgGalary/ImgGalary';
import Choose from './components/Choose/Choose';
import OurRoom from './components/OurRoom/OurRoom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SantoriniHome /> 
      <HomeForm />
      <Review />
      <OurRoom /> 
      <Choose />
      <ImgGalary />
      <Number />
      <Services/> 
      <Contactdetails />
      <ContactSection />
    </div>
  );
}

export default App;
