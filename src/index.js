import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
    <Routes>
    <Route path="/" element={<App />} >
<Route index element={<Homepage/>} />
<Route path="browse" element={<h1>Browse Route</h1>} />
<Route path="becomeseller" element={<h1>Become a Seller</h1>} />
<Route path="requestcustomproduct" element={<h1>Request Custom Product</h1>} />
<Route path="login" element={<h1>Welcome to login</h1>} />
<Route path="signup" element={<h1>Welcome to Sign Up</h1>} />
    </Route>
</Routes>
</Router>
);