import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout><Home/></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
