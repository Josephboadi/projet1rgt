import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../components/auth/LogoutButton";
import LoginButton from "../../components/auth/LoginButton";
import Header from "../../components/Header";


const Users = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userData, setUserData] = useState(null)

  // let data1 = {}

  useEffect(() => {
    axios
    .post(`/api/v1/user/login`, {
      user,
    })
    .then((data) => {
      setUserData(data?.data)
    });

    return 
  },[user])

  if (isLoading) {
    return "loading...";
  } 

  return (
    <div className="flex flex-col h-[100vh]">
      <Header/>
      <main className="flex flex-col justify-center items-center bg-slate-300 flex-1">
      <img src={userData?.user?.imageURL} alt={userData?.user?.name} />
      <h2>
        {userData?.user?.name}
        
      </h2>
      <p>{userData?.user?.email}</p>
      </main>
      
      
    </div>
  );
};

export default Users;
