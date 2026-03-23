import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Landing from "./pages/Landing";
import LogoAnimation from "./components/animations/LogoAnimation";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* First screen */}
        <Route path="/" element={<LogoAnimation />} />

        {/* Pages with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;