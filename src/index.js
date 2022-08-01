import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";
import ProductPage from "./Pages/ProductPage.js";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/Signup/Signup";
import RequestCustomProduct from "./Pages/RequestCustomProduct";
import ViewBuyerRequests from "./Pages/ViewBuyerRequests";
import UserProfile from "./Pages/UserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="browse" element={<div>Browse Route</div>} />
        <Route path="becomeseller" element={<div>Become a Seller</div>} />
        <Route path="requestcustomproduct" element={<RequestCustomProduct />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="products/*" element={<ProductPage />} />
        <Route path="buyers-requests" element={<ViewBuyerRequests />} />
        <Route path="sellerprofile/:userId" element={<UserProfile />} />
      </Route>
    </Routes>
  </Router>
);
