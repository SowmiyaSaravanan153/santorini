import './App.css';
import Navbar from './components/navbar/Navbar';
import  ContactSection from './components/ContactSection/ContactSection';
import Contactdetails from './components/Contactdetails/Contactdetails';
import SantoriniHome from './components/SantoriniHome/SantoriniHomecode.jsx';
import HomeForm from './components/HomeForm/HomeForm';
import Review from './components/Reviews/Reviewscode';
import Services from './components/Services/Services';
import Number from './components/numbers/Numbers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SantoriniHome />
      <HomeForm />
      <Review />
      <Number />
      <Services/> 
      <Contactdetails />
      <ContactSection /> 

    
    </div>
  );
}

export default App;
