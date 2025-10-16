import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";


import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";




function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; // ✅ important
