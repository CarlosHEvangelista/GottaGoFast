import { Home } from "./pages/Home/Home";

import { NewRoom } from "./pages/NewRoom/NewRoom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/room/new",
    element: <NewRoom />,
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
