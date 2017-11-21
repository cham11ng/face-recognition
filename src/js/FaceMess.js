import WebCam from "./WebCam";
import * as utils from "./Utils";
import Histogram from "./Histogram";
import ImageProcessor from "./ImageProcessor";

class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.webcam = new WebCam();
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext('2d');
    this.grayScaleCanvas = this.canvas.cloneNode(true);
    this.grayScaleContext = this.grayScaleCanvas.getContext('2d');
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
    this.webcam.start(this.context);
  }

  stopWebCam() {
    this.webcam.stop();
  }

  generateHistogramValue() {
    console.log(Histogram.uniformBinary(ImageProcessor.getImageData(this.capturedCanvas)));
  }

  capture() {
    this.capturedContext.drawImage(this.canvas, 0, 0);
    this.extractFeature();
    this.generateHistogramValue();
  }

  browseImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      this.capturedContext.drawImage(image, (this.width - utils.CAMERA_WIDTH) / 2, (this.height - utils.CAMERA_HEIGHT) / 2, this.height, this.width);
      this.extractFeature();
      this.generateHistogramValue();
    };
  }

  extractFeature() {
    let imageData = ImageProcessor.getImageData(this.capturedCanvas);
    this.grayScaleContext.drawImage(this.capturedCanvas, 0, 0);
    let grayScaleData = ImageProcessor.rgbCanvas2grey(this.grayScaleCanvas);
    let data = imageData.data;

    for (let y = 1; y < this.height - 1; y++) {
      for (let x = 1, index = 0; x < this.width - 1; x++, index += 4) {
        let sum = 0;
        let neighbourValue = [];
        let centerPosition = utils.get1DPosition(this.width, x, y) * utils.RGBA_SHIFT;
        let centerValue = grayScaleData[centerPosition];
        neighbourValue[7] = grayScaleData[utils.get1DPosition(this.width, x - 1, y - 1) * utils.RGBA_SHIFT] - centerValue;
        neighbourValue[6] = grayScaleData[utils.get1DPosition(this.width, x, y - 1) * utils.RGBA_SHIFT] - centerValue;
        neighbourValue[5] = grayScaleData[utils.get1DPosition(this.width, x + 1, y - 1) * utils.RGBA_SHIFT] - centerValue;
        neighbourValue[4] = grayScaleData[utils.get1DPosition(this.width, x + 1, y) * utils.RGBA_SHIFT] - centerValue;
        neighbourValue[3] = grayScaleData[utils.get1DPosition(this.width, x + 1, y + 1) * utils.RGBA_SHIFT] - centerValue;
        neighbourValue[2] = grayScaleData[utils.get1DPosition(this.width, x, y + 1) * utils.RGBA_SHIFT] - centerValue;
        neighbourValue[1] = grayScaleData[utils.get1DPosition(this.width, x - 1, y + 1) * utils.RGBA_SHIFT] - centerValue;
        neighbourValue[0] = grayScaleData[utils.get1DPosition(this.width, x - 1, y) * utils.RGBA_SHIFT] - centerValue;

        for (let k = 0, totalNeighbour = neighbourValue.length; k < totalNeighbour; k++) {
          sum += utils.unitStep(neighbourValue[k]) * Math.pow(2, k);
        }
        data[centerPosition] = data[centerPosition + 1] = data[centerPosition + 2] = sum;
      }
    }

    this.capturedContext.putImageData(imageData, 0, 0);
  }
}

export default FaceMess;