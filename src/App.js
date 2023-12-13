import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookLogic from './components/BookLogic';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router basename="/bookstore">
        <Routes>
          <Route path="/" element={<BookLogic />} />
          <Route path="/categories" element={<h1>Placeholder for categories Section</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
