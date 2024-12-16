document.getElementById('videoButton').addEventListener('click', function () {
    var videoContainer = document.getElementById('videoContainer');
    var closeButton = document.getElementById('closeButton');
    var video = videojs('video-walkthrough');

    // Show the video container
    videoContainer.style.display = 'flex';

    // Play the video
    video.play();

    // Close button event
    closeButton.addEventListener('click', function () {
      // Pause the video
      video.pause();

      // Hide the video container
      videoContainer.style.display = 'none';
    });
  });