import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Landing from "./pages/Landing";
import LogoAnimation from "./components/animations/LogoAnimation";
import './App.css';
import About from "./pages/About";
import Courses from "./pages/Courses";
import ContactCard from "./pages/ContactCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* First screen */}
        <Route path="/" element={<LogoAnimation />} />

        {/* Pages with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/ContactCard" element={<ContactCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;