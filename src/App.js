import './App.css';
import InfoPage from './components/InfoPage';
import About from './components/About';


function App() {
  return (
    <div className="flex--container">

      <section className='container--left'>
        <InfoPage/>
        <About/>
      </section>

    </div>
  );
}

export default App;
