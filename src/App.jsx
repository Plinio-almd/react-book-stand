
import MainLayout from "./layouts/MainLayout"
import AuthPage from "./pages/AuthPage"
import HomeLibrary from "./pages/HomeLibrary"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom"
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <MainLayout />}>
      <Route
        index
        element={<HomeLibrary />}
      />
      <Route path="/login" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  )
}

export default App
