import React, { useState, useRef } from 'react';
import "./videoPlayer.css";
import video_p from "../../assets/video.mp4";
const VideoPlayer = ({ playState, setPlayState }) => {
    const videoRef = useRef(null);
  
    const handlePlayPause = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setPlayState(!playState);
    };
  
    return (
      <div className="video-player">
        <video ref={videoRef} src={video_p} controls={playState} />
        <button onClick={handlePlayPause}>
          {playState ? 'Pause' : 'Play'}
        </button>
      </div>
    );
  };
  
  export default VideoPlayer;