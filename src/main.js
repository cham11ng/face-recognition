import FaceMess from './js/FaceMess';

let faceMess = FaceMess.createById('canvas');
let webCam = false;

faceMess.canvas.addEventListener('click', () => {
  if (webCam) {
    faceMess.stopWebCam();
    webCam = false;
  } else {
    faceMess.startWebCam();
    webCam = true;
  }
});
