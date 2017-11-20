import WebCam from "./WebCam";
import * as utils from "./Utils";
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

  capture() {
    this.capturedContext.drawImage(this.canvas, 0, 0, utils.WIDTH, utils.HEIGHT);
    this.extractFeature();
  }

  browseImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      this.capturedContext.drawImage(image, 0, 0, this.height, this.width);
      this.extractFeature();
    };
  }

  extractFeature() {
    let imageData = ImageProcessor.getImageData(this.capturedCanvas);
    this.grayScaleContext.drawImage(this.capturedCanvas, 0, 0);
    let grayScaleImageData = ImageProcessor.getImageData(this.grayScaleCanvas);
    grayScaleImageData = ImageProcessor.rgb2gray(grayScaleImageData);
    let data = imageData.data;

    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      let coordinate = utils.getCoordinate(this.width, i / 4);
      if (coordinate.x < utils.RADIUS_1 // ignoring border
        || coordinate.y < utils.RADIUS_1
        || coordinate.x >= (this.width - utils.RADIUS_1)
        || coordinate.y >= (this.height - utils.RADIUS_1)) {
        continue;
      }
      data[i] = data[i + 1] = data[i + 2] = this.getLBPOfPixel(grayScaleImageData.data, utils.POINT_8, utils.RADIUS_1, i / 4);
    }

    this.capturedContext.putImageData(imageData, 0, 0);
  }

  getLBPOfPixel(data, p, r, centerPosition) {
    let sum = 0;
    for (let i = 0; i < p; i++) {
      let difference = data[this.getNeighbourPosition(p, r, centerPosition, i) * 4] - data[centerPosition];
      sum += utils.unitStep(difference) * Math.pow(2, p - (i + 1));
    }

    return sum;
  }

  getNeighbourPosition(p, r, centerPosition, point) {
    let coordinate = utils.getCoordinate(this.width, centerPosition);

    return utils.get1DPosition(
      this.width,
      coordinate.x + r * Math.floor(Math.round(Math.cos(2 * Math.PI * (point - utils.NEIGHBOUR_SHIFT) / p))),
      coordinate.y + r * Math.floor(Math.round(Math.sin(2 * Math.PI * (point - utils.NEIGHBOUR_SHIFT) / p)))
    );
  }
}

export default FaceMess;