import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Slider, Typography } from '@mui/material';

const VideoPlayer = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player(playerRef.current, {
        videoId: "7GxxI0W3API",
        events: {
          onReady: (event) => {
            setDuration(event.target.getDuration());
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
          onTimeUpdate: () => {
            setCurrentTime(ytPlayer.getCurrentTime());
          },
        },
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
        }
      });
      setPlayer(ytPlayer);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (player) {
      player.setVolume(newValue * 100); // volume е в проценти
    }
  };

  const handleSeekChange = (event, newValue) => {
    setCurrentTime(newValue);
    if (player) {
      player.seekTo(newValue, true);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto', backgroundColor: '#121212', padding: 2, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <div 
          ref={playerRef} 
          style={{
            width: 0,
            height: 0,
            position: 'absolute',
            visibility: 'hidden',
          }}
        ></div>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button onClick={handlePlayPause} variant="contained" color="primary">
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
      </Box>

      <Box sx={{ width: '80%' }}>
          <Slider
            value={currentTime}
            min={0}
            max={duration}
            onChange={handleSeekChange}
            sx={{ color: '#1DB954' }}
          />
      </Box>
      
      {/* <Box>
        <Typography sx={{ color: '#bbb' }}>{Math.floor(currentTime)} / {Math.floor(duration)}</Typography>
      </Box> */}
     
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ color: '#bbb' }}>Volume</Typography>
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          min={0}
          max={1}
          step={0.01}
          sx={{ width: '80%' }}
        />
      </Box>
    </Box>
  );
};

export default VideoPlayer;
