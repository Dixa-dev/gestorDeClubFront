import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormRegistration from "./components/pages/inscription/FormRegistration.jsx"
import ListPlayers from "./components/pages/players/ListPlayers.jsx"
import NavBar from "./components/layout/navBar/NavBar"
import Home from "./components/pages/home/Home"
import CuotasPorMes from "./components/pages/home/estadisticas/Pie.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<FormRegistration />} />
      <Route path="/players" element={<ListPlayers />} />
      <Route path="/estadisticas" element={<CuotasPorMes/>} />
     

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
