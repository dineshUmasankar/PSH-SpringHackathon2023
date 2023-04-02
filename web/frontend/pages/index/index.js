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

        }).catch(function(err) {
            console.log(err)
        });
    } else {
        alert("Your browser does not support the MediaDevices.getUserMedia() method.");
    }
}

const startCameraButton = document.getElementById("startCamera");

const clickStartCameraBtn = () => {
    getMediaStream(constraints);
    changeStartToStopBtn();
}

const changeStartToStopBtn = () => {
    startCameraButton.innerText = "Stop Camera";
    startCameraButton.classList.remove("btn-primary");
    startCameraButton.classList.add("btn-danger");
    startCameraButton.removeEventListener("click", clickStartCameraBtn);
    startCameraButton.addEventListener("click", clickStopCameraBtn);
}

const clickStopCameraBtn = () => {
    video.srcObject.getTracks().forEach(track => track.stop());
    video.srcObject = null;
    startCameraButton.innerText = "Start Camera";
    startCameraButton.classList.remove("btn-danger");
    startCameraButton.classList.add("btn-primary");
    startCameraButton.addEventListener("click", clickStartCameraBtn);
}

startCameraButton.addEventListener("click", clickStartCameraBtn);

const snapPictureButton  = document.getElementById("snapPicture");
const canvas = document.getElementById("canvas");
const snapPicture = () => {
    if (video.srcObject == null) {
        alert("Please start the camera first.");
    } else {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);

        canvasToImage(canvas, {
            name: 'image',
            type: 'png',
            quality: 1
        })
    }
}

snapPictureButton.addEventListener("click", snapPicture);
