
import './App.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navigation from './components/Navigation';
import BookLogic from './components/BookLogic';


const router = createBrowserRouter([
  {
    path: "/",
    element: <BookLogic />,
  },
  {
    path: "/categories",
    element: <h1>Placeholder for categories Section</h1>,
  }
])

function App() {
  return (
    <div className="App">
      <Navigation />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
