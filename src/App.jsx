import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProfilePage from "./components/Profile";
import { useState } from "react";

export default function App() {



  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/pokemon/:id' element={<ProfilePage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
