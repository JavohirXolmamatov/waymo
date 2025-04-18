import { Route, Routes } from "react-router-dom";
import {
  Booking,
  Contact,
  Destination,
  ErrorPage,
  Footer,
  Gallery,
  Header,
  Hero,
  Travel,
} from "./pages";
function App() {
  return (
    <div className="">
      <header className="fixed w-full z-50 top-0 left-0 right-0">
        <Header />
      </header>
      <main className="">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />

          {/* Error page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
