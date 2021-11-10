import './App.css';
import './components/HeaderMenu'
import MainTitle from './components/MainTitle'
import HeaderMenu from './components/HeaderMenu'
import MainMap from './components/MainMap'
import MainSobre from './components/MainSobre';
import FooterMenu from './components/FooterMenu';


function App() {
  return (
    <div className="App">
      <header>
      <nav>
        <ul>
          <a href=""> <HeaderMenu /> </a>
          <p>Melhor Vemser de todos os tempos</p>
        </ul>
      </nav>
      </header>     
      <main>
        <MainTitle />
        <MainSobre/>
        <MainMap />
      </main> 

      <footer>
      <nav>
        <ul>
          <a href=""> <FooterMenu /> </a>
        </ul>
      </nav>
       
      </footer>
   

      


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
