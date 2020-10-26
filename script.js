const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch(err) {
    // catch error
    console.log('Whoops, Error!', err);
  }
}

button.addEventListener('click', async () => {
  // disable button
  button.disabled = true;
  // start pip
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// on load
selectMediaStream();