import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<h1 />} />
      </Routes>
    </BrowserRouter>
  );
}
