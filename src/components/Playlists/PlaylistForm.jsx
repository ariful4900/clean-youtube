import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlaylistForm = ({ handleClose, open }) => {
  const playlists = useStoreActions((state) => state.playlists);
  const [state, setState] = useState("");
  const navigate = useNavigate();
  console.log(state);

  const handlePlaylist = () => {
    playlists.getPlaylist(state);
    setState("");
    handleClose();
    navigate("/playlists");
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Add To Playlist</span>{" "}
          <span style={{ cursor: "pointer" }} onClick={handleClose}>
            <ClearIcon />
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new playlist please insert the playlist id or playlist
            link. Please Make sure the list is correct, Otherwise we wont'able
            to fetch the playlist information
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Playlist Id Or Playlist Link"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePlaylist}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PlaylistForm;
