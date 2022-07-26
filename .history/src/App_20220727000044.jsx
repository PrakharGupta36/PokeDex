import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProfilePage from "./components/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        exitBeforeEnter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/pokemon/:id' element={<ProfilePage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
