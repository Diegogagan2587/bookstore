
import './App.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navigation from './components/Navigation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>this is the root /</h1>,
  },
  {
    path: "/categories",
    element: <h1>This will be categories section</h1>,
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
