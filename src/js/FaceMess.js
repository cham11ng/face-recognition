import WebCam from './WebCam';
import * as utils from './Utils';
import ImageProcessor from './ImageProcessor';

class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.capturedCanvas = document.getElementById('capturedImage');
    this.capturedCanvas.width = utils.CAPTURE_WIDTH;
    this.capturedCanvas.height = utils.CAPTURE_HEIGHT;
    this.webcam = new WebCam(this.canvas, this.capturedCanvas);
  }

  static createById(id) {
    const canvas = document.getElementById(id);
    canvas.height = utils.CANVAS_HEIGHT;
    canvas.width = utils.CANVAS_WIDTH;

    return new FaceMess(canvas);
  }

  static createWithImage(id, src) {
    const canvasObject = FaceMess.createById(id);
    canvasObject.browseImage(src);

    return canvasObject;
  }

  startWebCam() {
    return this.webcam.start();
  }

  stopWebCam() {
    return this.webcam.stop();
  }

  capture(name) {
    this.webcam.capture(name);
  }

  browseImage(src) {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const scale = utils.CAPTURE_WIDTH / image.width;
      const context = this.capturedCanvas.getContext('2d');
      context.clearRect(0, 0, utils.CAPTURE_WIDTH, utils.CAPTURE_HEIGHT);
      context.drawImage(
        image,
        0,
        (utils.CAPTURE_HEIGHT - image.height * scale) / 2,
        utils.CAPTURE_WIDTH,
        image.height * scale
      );
      ImageProcessor.extract8PointRadius1Feature(this.capturedCanvas);
    };
  }

  handleLocalFile(file) {
    if (file.type.match(/image.*/)) {
      this.browseImage(window.URL.createObjectURL(new Blob(file, { type: 'application/zip' })));
    }
  }
}

export default FaceMess;
