import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/assets/style.css";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navigation/Navbar";
import FavoritePlaylist from "./pages/Favorite";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PlaylistItem from "./pages/PlaylistItem";
import Playlists from "./pages/Playlists";
import RecentPlaylist from "./pages/Recent";

// const Favorite = lazy(() => import("./pages/Favorite"));
// const PlaylistItem = lazy(() => import("./pages/PlaylistItem"));
// const Recent = lazy(() => import("./pages/Recent"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// const Playlists = lazy(() => import("./pages/Playlists"));
// const PageLoading = lazy(() => import("./components/Loading/PageLoading"));

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:playlistId" element={<PlaylistItem />} />
        <Route path="/favorite" element={<FavoritePlaylist />} />
        <Route path="/recent" element={<RecentPlaylist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
