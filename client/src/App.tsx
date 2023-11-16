import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThaiIdCardReaderPage from "./pages/ThaiIdCardReaderPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ThaiIdCardReaderPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
