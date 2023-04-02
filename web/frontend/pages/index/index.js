let mediaStream = null;
let video = document.getElementById("liveCam");

let constraints = {
    video: {
        width: 1200,
        height: 600,
    },
    audio: false
}

const getMediaStream = (constraints) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
                video.play();
            }

            startCameraButton.innerText = "Stop Camera";
            startCameraButton.classList.remove("btn-primary");
            startCameraButton.classList.add("btn-danger");
            startCameraButton.removeEventListener("click", startCamera);
            startCameraButton.addEventListener("click", stopCamera);
        }).catch(function(err) {
            console.log(err)
        });
    } else {
        alert("Your browser does not support the MediaDevices.getUserMedia() method.");
    }
}

const startCameraButton = document.getElementById("startCamera");

const startCamera = () => {
    getMediaStream(constraints);
}

const stopCamera = () => {
    video.srcObject.getTracks().forEach(track => track.stop());
    startCameraButton.innerText = "Start Camera";
    startCameraButton.classList.remove("btn-danger");
    startCameraButton.classList.add("btn-primary");
    startCameraButton.addEventListener("click", startCamera);
}

startCameraButton.addEventListener("click", startCamera);

const snapPictureButton  = document.getElementById("snapPicture");

snapPictureButton.addEventListener("click", () => {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, 1200, 600);
});
