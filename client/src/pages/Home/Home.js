import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import Header from "../../components/Header";

const Home = () => {
    
  return (
    <div className="flex flex-col h-[100vh]">
        <Header/>
        <main className="flex justify-center items-center bg-slate-300 flex-1">
        <h1>HomePage</h1>
        </main>
      
    </div>
  );
};

export default Home;
