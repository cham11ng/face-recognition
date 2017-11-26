import FaceMess from './js/FaceMess';

FaceMess.createWithImage('camera', 'images/lenna.png');

let faceMess = FaceMess.createById('camera');
let webCamIcon = document.querySelector('#webCam .fa');

document.getElementById('webCam').addEventListener('click', () => {
  if (faceMess.webcam.isActive) {
    faceMess.stopWebCam();
    webCamIcon.setAttribute('class', 'fa fa-play fa-2x');
  } else {
    faceMess.startWebCam();
    webCamIcon.setAttribute('class', 'fa fa-pause fa-2x');
  }
});

document.getElementById('capture').addEventListener('click', () => {
  faceMess.capture();
});