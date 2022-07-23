import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
    <Routes>
    <Route path="/" element={<App />} >
<Route index element={<Homepage/>} />
<Route path="browse" element={<div>Browse Route</div>} />
<Route path="becomeseller" element={<div>Become a Seller</div>} />
<Route path="requestcustomproduct" element={<div>Request Custom Product</div>} />
<Route path="login" element={<div>Welcome to login</div>} />
<Route path="signup" element={<div>Welcome to Sign Up</div>} />
    </Route>
</Routes>
</Router>
);