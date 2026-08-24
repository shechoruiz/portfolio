import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnChange from './components/ScrollToTopOnChange'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ScrollToTopOnChange />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
