

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import AppLayout from './components/AppLayout';
function App() {
  return (
    <Router>
      <AppLayout></AppLayout>
    </Router>);
}

export default App;
