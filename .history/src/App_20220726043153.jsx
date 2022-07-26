import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

async function ProfilePage() {
  let { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const response = await fetch(url);

  console.log(response);
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
