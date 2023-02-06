import './App.css';
import InfoPage from './components/InfoPage';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="flex--container">

      <section className='container--left'>
        <InfoPage/>
        <About/>
        <Footer/>
      </section>

    </div>
  );
}

export default App;
