import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certificate from './components/certificate';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
         <Header/>
         <Hero/>
         <About/>
         <Certificate />
         <Resume />
         <Contact /> 
         <Footer />
    </div>
  );
}

export default App;
