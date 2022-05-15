/*global chrome*/
import logo from './manuvie-logo.png';
import './App.css';
import MaterialIcon from 'material-icons-react';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h3 className="App-title">Les 101 Dalmatiens Lead Gen</h3>
      </header>
      <main>
        <section className="App-intro">
          <p>Automating the process of LinkedIn lead generation for Manulife Asset Management.</p>
          <div className="flex card">
            <MaterialIcon icon="check" color="green" />
            <p className="space-x">You currently are on the correct page to use this service.</p>
          </div>
        </section>
        <section className="App-main">
          <h5>Settings</h5>
          <div className="Scrape-options-container">
            <div className="Scrape-option-box">
              <MaterialIcon icon="timer" size="medium"/>
              <p className="bold no-padding-margin">Set a time limit</p>
            </div>
            <div className="Scrape-option-box">
              <MaterialIcon icon="tune" size="medium"/>
              <p className="bold no-padding-margin">Set a lead limit</p>
            </div>
            <div className="Scrape-option-box">
              <MaterialIcon icon="all_inclusive" size="medium"/>
              <p className="bold no-padding-margin">Set no limit</p>
            </div>
          </div>
          <div className="Scrape-filename-input">
            <h5>Please provide a name for the excel worksheet.</h5>
            <div className="flex">
              <input/>
              <span className="light">.xlsx</span>
            </div>
          </div>
          <hr />
          <h5 className="light">Approximate count of prospects to be generated</h5>
          <h3>1,756</h3>
          <button className="Scrape-cta">Run Les 101 Dalmatiens</button>
        </section>
      </main>
    </div>
  );
}

export default App;
