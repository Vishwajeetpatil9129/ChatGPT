import "./App.css";
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from "./MyContext.jsx";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from "./pages/sign-in.jsx";
import SignUpPage from "./pages/sign-up.jsx";

function App() {
  const [prompt , setPrompt] = useState("");
  const [reply , setReply] = useState(null);
  const [currThreadId , setCurrThreadId] = useState(uuidv1());
  const [prevChats , setPrevChats] = useState([]);
  const [newChat , setNewChat] = useState(true);
  const [allThreads , setAllThreads] = useState([]);

  const providerValue = {
    prompt , setPrompt,
    reply , setReply,
    currThreadId , setCurrThreadId,
    prevChats , setPrevChats,
    newChat , setNewChat,
    allThreads , setAllThreads
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        {/* Protected Main Route */}
        <Route path="/" element={
          <>
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>

            <SignedIn>
              <div className="main">
                <header>
                  <UserButton />
                </header>
                <MyContext.Provider value={providerValue}>
                  <Sidebar />
                  <ChatWindow />
                </MyContext.Provider>
              </div>
            </SignedIn>
          </>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;