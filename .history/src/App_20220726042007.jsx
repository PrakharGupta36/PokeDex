import Main from "./components/Main";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProfilePage() {
  let userID  = useParams();

  console.log(userId);

  return <h1> Hello World </h1>;
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
