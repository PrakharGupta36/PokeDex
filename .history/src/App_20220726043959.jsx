import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  async function getData() {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      
    </>
  );
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
