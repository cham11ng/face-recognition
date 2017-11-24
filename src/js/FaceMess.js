import WebCam from "./WebCam";
import Histogram from "./Histogram";
import ImageProcessor from "./ImageProcessor";

class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.webcam = new WebCam();
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext('2d');
    this.capturedCanvas = document.getElementById('capturedImage');
    this.capturedContext = this.capturedCanvas.getContext('2d');
  }

  static createById(id) {
    return new FaceMess(document.getElementById(id));
  }

  static createWithImage(id, src) {
    let canvasObject = FaceMess.createById(id);
    canvasObject.browseImage(src);

    return canvasObject;
  }

  startWebCam() {
    this.webcam.start(this.canvas, this.capturedCanvas);
  }

  stopWebCam() {
    this.webcam.stop();
  }

  capture() {
    this.capturedContext.clearRect(0, 0, this.width, this.height);
    this.capturedContext.drawImage(this.canvas, 0, 0);
    ImageProcessor.extractFeature(this.capturedCanvas);
    this.generateHistogramValue();
  }

  generateHistogramValue() {
    console.log(Histogram.uniformBinary(ImageProcessor.getImageData(this.capturedCanvas)));
  }

  browseImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      let scale = this.width / image.width;
      this.capturedContext.clearRect(0, 0, this.width, this.height);
      this.capturedContext.drawImage(image, 0, (this.height - image.height * scale) / 2, this.width, image.height * scale);
      ImageProcessor.extractFeature(this.capturedCanvas);
      this.generateHistogramValue();
    };
  }

  handleLocalFile(file) {
    if (file.type.match(/image.*/)) {
      this.browseImage(window.URL.createObjectURL(file));
    }
  }
}

export default FaceMess;