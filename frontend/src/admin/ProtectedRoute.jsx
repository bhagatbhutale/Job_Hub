import store from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const { user } = useSelector(store => store.auth);
  

  useEffect(() => {
    if (user === null || user.role === "recruiter") {
      <Navigate to="/" />;
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
