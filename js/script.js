const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
              videoElement.play();
        }
    }catch (e) {
        // Catch Error Here

    }
}

button.addEventListener('click', async () => {
   //Disable the Button
   button.disabled = true;
   // Start Picture in Picture
    await  videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load

selectMediaStream();