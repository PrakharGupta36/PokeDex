import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProfilePage() {
  let { id } = useParams();

  const fetch = 
}

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
