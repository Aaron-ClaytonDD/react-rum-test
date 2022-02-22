import logo from './logo.svg';
import './App.css';
import { datadogRum } from '@datadog/browser-rum';
    
datadogRum.init({
    applicationId: '6972b043-3f82-43e8-ada8-07ffdf48123d',
    clientToken: 'pub3333f6d81339a88d9e43af5a9dd3afad',
    site: 'datadoghq.com',
    service:'rum-test',
    env:'aarons-env',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Hello zart
        </a>
      </header>
    </div>
  );
}

export default App;
