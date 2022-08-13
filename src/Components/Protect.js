import { useSelector } from "react-redux/";
import { Navigate, Outlet } from "react-router-dom";

export default function Protect({ children }) {
  const user = useSelector((state) => state.auth.user?.user);

  return user ? <Outlet /> : <Navigate to="/login" />;
}
