import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Favorites from "./pages/Favorites";

function App() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch}></Navbar>

      <main className="flex flex-col p-2xl w-full box-border">s
        <Routes>
          <Route path="/" element={<Home search={search} />}></Route>

          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;