import { Route, Routes } from "react-router-dom";
import {
  Booking,
  Contact,
  Destination,
  Footer,
  Gallery,
  Header,
  Hero,
  Travel,
} from "./pages";
function App() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
