import './App.css';
import ContactSection from './components/ContactSection/ContactSection';
// Importing the Navbar component
import Contactdetails from './components/Contactdetails/Contactdetails';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactSection/> 
      <Contactdetails/>
    </div>
  );
}

export default App;
