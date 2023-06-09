import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/BlogList";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colorlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import AddBlog from "./pages/AddBlog";
import Addblogcat from "./pages/Addblogcat";
import AddColor from "./pages/AddColors";
import Addcat from "./pages/Addcat";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<Resetpassword />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="blog-list" element={<BlogList />} />
            <Route path="blog" element={<AddBlog />} />
            <Route path="blog-category-list" element={<Blogcatlist />} />
            <Route path="blog-category" element={<Addblogcat />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="color" element={<AddColor />} />
            <Route path="color-list" element={<Colorlist />} />
            <Route path="category" element={<Addcat />} />
            <Route path="category-list" element={<Categorylist />} />
            <Route path="brand" element={<AddBrand />} />
            <Route path="brand-list" element={<Brandlist />} />
            <Route path="product" element={<AddProduct />} />
            <Route path="product-list" element={<Productlist />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
