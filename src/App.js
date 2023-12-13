import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BookLogic from './components/BookLogic';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<BookLogic />} />
        <Route
          path="/categories"
          element={<h1>Placeholder for categories Section</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
