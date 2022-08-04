import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import SearchResultsPage from "./Pages/SearchResultsPage";
import ProductPage from "./Pages/ProductPage.js";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/Signup";
import RequestCustomProduct from "./Pages/RequestCustomProduct";
import ViewBuyerRequests from "./Pages/ViewBuyerRequests";
import UserProfile from "./Pages/UserProfile";
import CustomRequestProposals from "./Pages/CustomRequestProposals";
import CustomRequests from "./Pages/CustomRequests";
import CreateProduct from "./Pages/CreateProduct";
import EditProduct from "./Pages/EditProduct";
import ChatsPage from "./Pages/ChatsPage";
import BuyerRequestInfo from "./Pages/BuyerRequestInfo";
import CreateProposal from "./Pages/CreateProposal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="browse" element={<div>Browse Route</div>} />
        <Route path="products/:product_id" element={<ProductPage />} />
        <Route path="profile/:userId" element={<Outlet />}>
          <Route index element={<UserProfile />} />
          <Route path="becomeseller" element={<div>Become a Seller</div>} />
          <Route
            path="requestcustomproduct"
            element={<RequestCustomProduct />}
          />
          <Route path="buyers-requests" element={<Outlet />}>
            <Route index element={<ViewBuyerRequests />} />
            <Route path=":request_id" element={<BuyerRequestInfo />} />
            <Route path=":request_id/proposal" element={<CreateProposal />} />
          </Route>
          <Route path="customrequests" element={<Outlet />}>
            <Route index element={<CustomRequests />}></Route>
            <Route path=":requestId" element={<Outlet />}>
              <Route index element={<div>Welcome to new request</div>}></Route>
              <Route
                path="customproposals"
                element={<CustomRequestProposals />}
              />
            </Route>
          </Route>
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/:product_id/edit" element={<EditProduct />} />
          <Route path="chats" element={<ChatsPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
