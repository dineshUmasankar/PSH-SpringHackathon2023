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
        alert('Your browser does not support getUserMedia API')
    }
}

const startCameraButton = document.getElementById("startCamera").addEventListener("click", () => {
    getMediaStream(constraints);
});

const snapPictureButton  = document.getElementById("snapPicture").addEventListener("click", () => {
    console.log('You clicked me!')
});
