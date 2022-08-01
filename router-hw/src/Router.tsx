import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { About } from "./About/About"
import { App } from "./App"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={"Hello, this is HOME!"} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
 
