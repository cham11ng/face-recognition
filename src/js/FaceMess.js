import ImageProcessor from "./ImageProcessor";
import {POINT_8, RADIUS_1, NEIGHBOUR_SHIFT, unitStep, get1DPosition, getCoordinate} from "./Utils";

class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.grayScaleCanvas = this.canvas.cloneNode(true);
    this.featureCanvas = this.canvas.cloneNode(true);
    this.grayScaleContext = this.grayScaleCanvas.getContext('2d');
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
      this.grayScaleContext.drawImage(this.canvas, 0, 0);
      this.featureContext.drawImage(this.grayScaleCanvas, 0, 0);
      this.extractFacialFeature();
    };
  }

  extractFacialFeature() {
    let imageData = ImageProcessor.getImageData(this.canvas);
    let grayScaleImageData = ImageProcessor.getImageData(this.grayScaleCanvas);
    grayScaleImageData = ImageProcessor.rgb2gray(grayScaleImageData);
    let data = imageData.data;

    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      let coordinate = getCoordinate(this.width, i / 4);
      if (coordinate.x === 0 || coordinate.y === 0 || coordinate.x === this.width - 1 || coordinate.y === this.height - 1) {
        continue;
      }
      // console.log(coordinate);
      data[i] = data[i + 1] = data[i + 2] = this.getLBPOfPixel(grayScaleImageData.data, POINT_8, RADIUS_1, i / 4);
    }
    this.context.putImageData(imageData, 0, 0);
  }

  getLBPOfPixel(data, p, r, centerPosition) {
    let sum = 0;
    for (let i = 0; i < p; i++) {
      let difference = data[this.getNeighbourPosition(p, r, centerPosition, i) * 4] - data[centerPosition];
      sum += unitStep(difference) * Math.pow(2, (p - i - 1) % p);
    }

    return sum;
  }

  getNeighbourPosition(p, r, centerPosition, point) {
    let coordinate = getCoordinate(this.width, centerPosition);

    return get1DPosition(
      this.width,
      coordinate.x + r * Math.floor(Math.round(Math.cos(2 * Math.PI * (point - NEIGHBOUR_SHIFT) / p))),
      coordinate.y + r * Math.floor(Math.round(Math.sin(2 * Math.PI * (point - NEIGHBOUR_SHIFT) / p)))
    );
  }
}

export default FaceMess;