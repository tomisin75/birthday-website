// Play/Pause button functionality
function playPause() {
    var video = document.getElementById("videoPlayer");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  
  // Mute/Unmute button functionality
  function muteUnmute() {
    var video = document.getElementById("videoPlayer");
    video.muted = !video.muted;
  }
  
  // Adjust volume based on the slider input
  function adjustVolume(volume) {
    var video = document.getElementById("videoPlayer");
    video.volume = volume;
  }
  
  // Upload a new video
  function loadNewVideo() {
    var videoFile = document.getElementById("videoUpload").files[0];
    var videoPlayer = document.getElementById("videoPlayer");
    var videoSource = document.getElementById("videoSource");
  
    // Check if a video file was selected
    if (videoFile) {
      var videoURL = URL.createObjectURL(videoFile); // Create a URL for the video file
      videoSource.src = videoURL; // Set the new source for the video player
      videoPlayer.load(); // Load the new video
      videoPlayer.play(); // Automatically start playing the video after upload
    }
  }
  