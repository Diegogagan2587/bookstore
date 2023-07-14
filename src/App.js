
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
      <RouterProvider router={router} >
    </div>
  );
}

export default App;
