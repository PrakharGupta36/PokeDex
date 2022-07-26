import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProfilePage from "./components/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/pokemon/:id' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
