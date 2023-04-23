import "./App.css"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import DetailsPage from "./components/details/DetailsPage"
import TropicalLocations from "./components/TropicalLocations"
import WinterLocations from "./components/WinterLocations"
import BookNow from "./components/details/BookNow"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/details/" element={<DetailsPage />} />
        <Route path="/tropical-locations/" element={<TropicalLocations />} />
        <Route path="/winter-locations/" element={<WinterLocations />} />
        <Route path="/book-now/" element={<BookNow />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
