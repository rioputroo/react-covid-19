import { BrowserRouter } from 'react-router-dom';

import Highlight from './Highlight/Highlight';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>COVID-19 Indonesia</h2>
        <Highlight />
      </div>
    </BrowserRouter>
  );
}

export default App;
