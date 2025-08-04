import './App.css';
import Navbar from './components/navbar/Navbar';
import  ContactSection from './components/ContactSection/ContactSection';
import Contactdetails from './components/Contactdetails/Contactdetails';
import SantoriniHome from './components/SantoriniHome/SantoriniHomecode.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SantoriniHome />
      <Contactdetails />
      <ContactSection /> 
      
    </div>
  );
}

export default App;
