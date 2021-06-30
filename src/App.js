import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Homepage />
      </div>
    </Router>
  );
}

export default App;
