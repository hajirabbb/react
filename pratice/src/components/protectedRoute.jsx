import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { account } from "../appwrite";

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    account
      .get()
      .then(() => setStatus("authed"))
      .catch(() => setStatus("denied"));
  }, []);

  if (status === "checking") return <p>Loading...</p>;
  if (status === "denied") return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;