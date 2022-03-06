import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import YouTube from "react-youtube";
import "./TrailerPopup.css";

const TrailerPopup = forwardRef((props, ref) => {
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    handleToOpenTrailer(trailerId) {
      handleToOpen(trailerId);
    },
  }));
  const [videoId, setVideoId] = useState("u3VTKvdAuIY");
  const [open, setOpen] = useState(false);
  function handleToClose() {
    setOpen(false);
  }
  function handleToOpen(trailerId) {
    if (trailerId !== undefined) {
      setVideoId(trailerId);
    }
    setOpen(true);
  }

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      <Dialog
        className="youtube_dailogue_root"
        open={open}
        maxWidth="100%"
        fullWidth
        fullScreen
        onClose={handleToClose}
      >
        <DialogTitle className="youtube_dailogue">{"Play trailer"}</DialogTitle>
        <DialogContent className="youtube_dailogue">
          <YouTube videoId={videoId} opts={opts}></YouTube>
        </DialogContent>
        <DialogActions color="primary">
          <Button
            className="youtube_close_btn"
            onClick={handleToClose}
            color="primary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default TrailerPopup;
