import FaceMess from './js/FaceMess';

FaceMess.createWithImage('camera', 'images/lenna.png');

const faceMess = FaceMess.createById('camera');
const webCamIcon = document.querySelector('#webCam .fa');

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
  if (faceMess.webcam.isActive) {
    const input = document.querySelector('.name input');
    faceMess.stopWebCam();
    webCamIcon.setAttribute('class', 'fa fa-play fa-2x');
    input.style.display = 'block';
    input.onkeydown = (event) => {
      if (event.keyCode === 13) { // Enter
        faceMess.capture(input.value);
        input.style.display = 'none';
        input.value = '';
      }
    };
  }
});
