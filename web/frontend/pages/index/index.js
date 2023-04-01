let mediaStream = null;

let constraints = {
    video: true,
    audio: false
}

// const getMediaStream = async (constraints) => {
//     try {
//         mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
//         let video = document.getElementById("liveCam")
//         video.srcObject = mediaStream;
//         video.onloadedmetadata = function(e) {
//             video.play();
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

const startCameraButton = document.getElementById("startCamera").addEventListener("click", () => {
    console.log('You clicked me!')
});

const snapPictureButton  = document.getElementById("snapPicture").addEventListener("click", () => {
    console.log('You clicked me!')
});
