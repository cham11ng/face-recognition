import FaceMess from './js/FaceMess';

// let canvas = FaceMess.createWithImage('canvas', 'images/cham11ng.jpg');

let faceMess = FaceMess.createById('canvas');
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
