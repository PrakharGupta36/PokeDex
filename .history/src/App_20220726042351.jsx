import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

async function ProfilePage() {
  let { id } = useParams();

  const url  = await f
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
