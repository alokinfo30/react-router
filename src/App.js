import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Learn Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} />
        </Route>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2023 | Learn-Tech-With-Alok
      </footer>
    </div>
  );
}

export default App;
