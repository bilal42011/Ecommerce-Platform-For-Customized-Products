import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/Store";
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
import CustomProposalDetails from "./Pages/CustomProposalDetails";
import BuyerRequestInfoPage from "./Pages/BuyerRequestInfoPage";
import CreateProposal from "./Pages/CreateProposal";
import Dashboard from "./Pages/Dashboard";
import Cart from "./Pages/Cart";
import BecomeASeller from "./Pages/BecomeASeller";
import Protect from "./Components/Protect";
import SellerOrderPage from "./Pages/SellerOrderPage";
import BuyerOrderPage from "./Pages/BuyerOrderPage";
import EditProfile from "./Pages/EditProfile";
import AuthCodePage from "./Components/Signup/AuthCodePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="browse" element={<SearchResultsPage />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="users/:userId" element={<UserProfile />} />
          <Route path="verify-account" element={<AuthCodePage />} />
          <Route path="profile" element={<Protect />}>
            <Route index element={<UserProfile />} />
            <Route path="edit" element={<EditProfile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="become-a-seller" element={<BecomeASeller />} />
            <Route
              path="orders/seller/:orderId"
              element={<SellerOrderPage />}
            />
            <Route path="orders/buyer/:orderId" element={<BuyerOrderPage />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="requestcustomproduct"
              element={<RequestCustomProduct />}
            />
            <Route path="buyers-requests" element={<Outlet />}>
              <Route index element={<ViewBuyerRequests />} />
              <Route path=":requestId" element={<BuyerRequestInfoPage />} />
              <Route path=":requestId/proposal" element={<CreateProposal />} />
            </Route>
            <Route path="customrequests" element={<Outlet />}>
              <Route index element={<CustomRequests />}></Route>
              <Route path=":requestId" element={<Outlet />}>
                <Route index element={<CustomRequestProposals />} />
                <Route
                  path="proposals/:proposalId"
                  element={<CustomProposalDetails />}
                />
              </Route>
            </Route>
            <Route path="products/create" element={<CreateProduct />} />
            <Route path="products/:productId/edit" element={<EditProduct />} />
            <Route path="chats" element={<ChatsPage />} />
            <Route path="chats/:userId" element={<ChatsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </Provider>
);
