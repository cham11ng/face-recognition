import ImageProcessor from "./ImageProcessor";
import {POINT_8, RADIUS_1, NEIGHBOUR_SHIFT, unitStep, get1DPosition, getCoordinate} from "./Utils";

class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.greyScaleCanvas = this.canvas.cloneNode(true);
    this.featureCanvas = this.canvas.cloneNode(true);
    this.greyScaleContext = this.greyScaleCanvas.getContext('2d');
    this.featureContext = this.featureCanvas.getContext('2d');
    this.height = this.canvas.height;
    this.width = this.canvas.width;
  }

  static createById(id) {
    return new FaceMess(document.getElementById(id));
  }

  static createWithImage(id, src) {
    let canvasObject = FaceMess.createById(id);
    canvasObject.drawImage(src);

    return canvasObject;
  }

  drawImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      this.context.drawImage(image, 0, 0, this.height, this.width);
      this.greyScaleContext.drawImage(this.canvas, 0, 0);
      this.featureContext.drawImage(this.greyScaleCanvas, 0, 0);
    };
  }

  extractFacialFeature() {
    let greyScaleImageData = ImageProcessor.getImageData(this.greyScaleCanvas);
    greyScaleImageData = ImageProcessor.rgb2gray(greyScaleImageData);

    let pixelValues = [137, 135, 115, 99, 82, 79, 70, 54, 45];
    console.log(this.getLBPOfPixel(pixelValues, POINT_8, RADIUS_1, 4));
    /*for (let i = 0; i < this.width * this.height; i += 4) {

    }*/
  }

  getLBPOfPixel(data, p, r, centerPosition) {
    let sum = 0;
    for (let i = 0; i < p; i++) {
      let difference = data[this.getNeighbourPosition(p, r, centerPosition, i)] - data[centerPosition];
      sum += unitStep(difference) * Math.pow(2, (p - i - 1) % p);
    }

    return sum;
  }

  getNeighbourPosition(p, r, centerPosition, point) {
    let coordinate = getCoordinate(3, centerPosition);

    return get1DPosition(
      3,
      coordinate.x + r * Math.floor(Math.round(Math.cos(2 * Math.PI * (point - NEIGHBOUR_SHIFT) / p))),
      coordinate.y + r * Math.floor(Math.round(Math.sin(2 * Math.PI * (point - NEIGHBOUR_SHIFT) / p)))
    );
  }
}

export default FaceMess;