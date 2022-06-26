import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/screen/Navbar'
import Cart from './views/Cart'

import Home from './views/Home'
import Product from './views/Product'
import Profile from './views/Profile'
import Settings from './views/Settings'
const App = () => {

    return (
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Product />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product" element={<Product />} />
            </Routes>

        </Router>

    )
}

export default App