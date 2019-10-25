import * as utils from './Utils';
import Histogram from './Histogram';
import ImageProcessor from './ImageProcessor';

class WebCam {
  constructor(canvas, capturedCanvas) {
    this.scaleV = 1;
    this.scaleH = -1;
    this.stream = '';
    this.isActive = false;
    this.cameraTimeout = '';
    this.video = document.createElement('video');

    this.canvas = canvas;
    this.capturedCanvas = capturedCanvas;
    this.context = this.canvas.getContext('2d');
    this.capturedContext = this.capturedCanvas.getContext('2d');
  }

  start() {
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }

    // Some browsers partially implement mediaDevices. We can't just assign an object
    // with getUserMedia as it would overwrite existing properties.
    // Here, we will just add the getUserMedia property if it's missing.
    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function(constraints) {
        // First get ahold of the legacy getUserMedia, if present
        const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }

        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: false
        })
        .then(stream => {
          this.stream = stream;

          if ('srcObject' in this.video) {
            this.video.srcObject = stream;
          } else {
            // Avoid using this in new browsers, as it is going away.
            this.video.src = window.URL.createObjectURL(stream);
          }

          this.video.onloadedmetadata = () => this.video.play();
          this.isActive = true;

          draw();
        })
        .catch();
    }

    const draw = () => {
      this.flipHorizontal();
      this.drawRecognitionFrame();
      this.capturedContext.drawImage(
        this.canvas,
        (utils.CANVAS_WIDTH - utils.FACE_WIDTH) / 2,
        (utils.CANVAS_HEIGHT - utils.FACE_HEIGHT) / 2,
        utils.FACE_WIDTH,
        utils.FACE_HEIGHT,
        0,
        0,
        this.capturedCanvas.width,
        this.capturedCanvas.height
      );

      this.cameraTimeout = setTimeout(draw, 100, this.video, this.context);
      this.drawOutput(ImageProcessor.evaluateRecognition(this.capturedCanvas));
    };
  }

  stop() {
    clearTimeout(this.cameraTimeout);
    this.stream.getTracks()[0].stop();
    this.isActive = false;
  }

  capture(name) {
    this.capturedContext.clearRect(0, 0, this.capturedCanvas.width, this.capturedCanvas.height);
    this.capturedContext.drawImage(
      this.canvas,
      ...utils.FACE_FRAME,
      0,
      0,
      this.capturedCanvas.width,
      this.capturedCanvas.height
    );
    ImageProcessor.extract8PointRadius1Feature(this.capturedCanvas);
    Histogram.generateHistogramValue(this.capturedCanvas, name);
  }

  /**
   * By default web cam video is opposite.
   */
  flipHorizontal() {
    const positionX = (this.scaleH === 1 ? 0 : utils.CANVAS_WIDTH * -1) + (utils.CANVAS_WIDTH - utils.CAMERA_WIDTH) / 2;
    const positionY =
      (this.scaleV === 1 ? 0 : utils.CANVAS_HEIGHT * -1) + (utils.CANVAS_HEIGHT - utils.CAMERA_HEIGHT) / 2;
    this.context.save();
    this.context.scale(this.scaleH, this.scaleV);
    this.context.drawImage(this.video, positionX, positionY);
    this.context.restore();
  }

  /**
   * Recognition frame is region where core feature extraction and recognition works.
   */
  drawRecognitionFrame() {
    this.context.beginPath();
    this.context.moveTo(utils.FACE_FRAME[0], utils.FACE_FRAME[1]);
    this.context.lineTo(utils.FACE_FRAME[0] + utils.FACE_FRAME[2], utils.FACE_FRAME[1]);
    this.context.lineTo(utils.FACE_FRAME[0] + utils.FACE_FRAME[2], utils.FACE_FRAME[1] + utils.FACE_FRAME[3]);
    this.context.lineTo(utils.FACE_FRAME[0], utils.FACE_FRAME[1] + utils.FACE_FRAME[3]);
    this.context.lineTo(utils.FACE_FRAME[0], utils.FACE_FRAME[1]);
    this.context.stroke();
    this.context.closePath();
  }

  drawOutput(maxMatch) {
    if (maxMatch !== undefined) {
      this.context.textAlign = 'center';
      this.context.font = 'bold 20pt Calibri';
      this.context.fillStyle = '#ffffff';
      this.context.fillText(`You're`, this.canvas.width / 2, this.canvas.height / 2 - 20);
      this.context.fillText(maxMatch.name, this.canvas.width / 2, this.canvas.height / 2 + 20);
    }
  }
}

export default WebCam;
