import { CssBaseline } from "@mui/material";
import { useStoreState } from "easy-peasy";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import HomePage from "./pages/HomePage";
import PlaylistItem from "./pages/PlaylistItem";
const NotFound = lazy(() => import("./pages/NotFound"));

const Playlists = lazy(() => import("./pages/Playlists"));
const PageLoading = lazy(() => import("./components/Loading/PageLoading"));

function App() {
  const [count, setCount] = useState(0);

  const playlists = useStoreState((state) => state.playlists);

  console.log(playlists);
  useEffect(() => {}, []);
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/playlists"
          element={<Playlists playlists={playlists} />}
        />
        <Route
          path="/playlists/:playlistId"
          element={
            <Suspense fallback={<PageLoading />}>
              <PlaylistItem />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
