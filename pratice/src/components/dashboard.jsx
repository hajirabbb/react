import  React   from 'react';
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite";;


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await account.deleteSession("current");
    navigate("/");
  };

  return (
    <div className="p-8">
      <h1>Welcome to the GHIPSS Dashboard</h1>
       
      <button className="absolute top-6 right-6 px-5.5 py-2.5 bg-black text-white border-none rounded-full cursor-pointer" onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;