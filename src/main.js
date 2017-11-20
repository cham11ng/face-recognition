import FaceMess from './js/FaceMess';

// let canvas = FaceMess.createWithImage('canvas', 'images/cham11ng.jpg');

let faceMess = FaceMess.createById('canvas');

faceMess.canvas.addEventListener('click', () => {
  faceMess.triggerWebCam();
});

document.getElementById('capture').addEventListener('click', () => {
  faceMess.capture();
});