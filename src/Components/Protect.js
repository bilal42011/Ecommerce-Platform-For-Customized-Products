import { useSelector } from "react-redux/";
import { Navigate, Outlet } from "react-router-dom";

export default function Protect({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" />;
  else if (!user.isVerified) return <Navigate to="/profile/verify-account" />;
  else return <Outlet />;
}
