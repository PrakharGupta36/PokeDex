import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();

  
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
