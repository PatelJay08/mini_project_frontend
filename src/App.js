import "./App.css"
import LandingPage from "./landingPage/LandingPage"
import { BrowserRouter as Router, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import HomePage from "./components/home/HomePage"
import Body from "./components/seatbooking/Body"
import Final from "./components/seatbooking/Final"
import { Routes } from "react-router-dom"
import AddmovieComponent from "./components/adminPage/AddmovieComponent"


function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Switch> */}
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/book' element={<Body />} />
          <Route path='/singlepage/:id' element={<SinglePage />} exact />
          <Route path="/admin/addmovie" element={<AddmovieComponent />} />
          <Route path="/Final/:selected/:totalprice" element={<Final />} />
        </Routes>
        {/* </Switch> */}
        <Footer />
      </Router>
    </>
  )
}

export default App

