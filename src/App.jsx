import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { appsData, productsData } from './data.js';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import AppsPage from "./pages/Apps"
import './App.css';

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AppsPage apps={apps}/>}></Route>
      </Routes>
    </div>
  );
}
