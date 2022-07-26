import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

async function ProfilePage() {
  let { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  const fetch = await fetch(url);
  const data = await fetch.
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
