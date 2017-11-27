import WebCam from "./WebCam";
import * as utils from "./Utils";
import ImageProcessor from "./ImageProcessor";

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
    let canvas = document.getElementById(id);
    canvas.height = utils.CANVAS_HEIGHT;
    canvas.width = utils.CANVAS_WIDTH;
    return new FaceMess(canvas);
  }

  static createWithImage(id, src) {
    let canvasObject = FaceMess.createById(id);
    canvasObject.browseImage(src);

    return canvasObject;
  }

  startWebCam() {
    this.webcam.start();
  }

  stopWebCam() {
    this.webcam.stop();
  }

  capture(name) {
    this.webcam.capture(name);
  }

  browseImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      let scale = utils.CAPTURE_WIDTH / image.width;
      let context = this.capturedCanvas.getContext('2d');
      context.clearRect(0, 0, utils.CAPTURE_WIDTH, utils.CAPTURE_HEIGHT);
      context.drawImage(image, 0, (utils.CAPTURE_HEIGHT - image.height * scale) / 2, utils.CAPTURE_WIDTH, image.height * scale);
      ImageProcessor.extractFeature(this.capturedCanvas);
    };
  }

  handleLocalFile(file) {
    if (file.type.match(/image.*/)) {
      this.browseImage(window.URL.createObjectURL(file));
    }
  }
}

export default FaceMess;