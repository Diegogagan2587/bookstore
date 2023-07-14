
import './App.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>this is the root /</h2>,
  }
])

function App() {
  return (
    <div className="App">
      <h1>My Place Holder</h1>
    </div>
  );
}

export default App;
