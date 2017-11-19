import * as utils from "./Utils";
import ImageProcessor from "./ImageProcessor";

class FaceMess {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext('2d');
    this.featureCanvas = this.canvas.cloneNode(true);
    this.grayScaleCanvas = this.canvas.cloneNode(true);
    this.featureContext = this.featureCanvas.getContext('2d');
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
    let video = document.createElement('video');

    // capture video
    navigator.getUserMedia({
      video: true,
      audio: false
    }, (stream) => {
      video.src = window.URL.createObjectURL(stream);
      draw(video, this.context);
    }, function (error) {
      console.log(error);
    });

    function draw(video, context) {
      context.drawImage(video, 0, 0);
      setTimeout(draw, 10, video, context);
    }

    this.captureImage();
  }

  captureImage() {
    document.getElementById('capture').addEventListener('click', () => {
      this.capturedContext.drawImage(this.canvas, 0, 0, utils.WIDTH, utils.HEIGHT);
      this.extractFeature();
    });
  }

  browseImage(src) {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      this.context.drawImage(image, 0, 0, this.height, this.width);
      this.grayScaleContext.drawImage(this.canvas, 0, 0);
      this.featureContext.drawImage(this.grayScaleCanvas, 0, 0);
      this.extractFeature();
    };
  }

  extractFeature() {
    let imageData = ImageProcessor.getImageData(this.capturedCanvas);
    this.grayScaleContext.drawImage(this.canvas, 0, 0);
    let grayScaleImageData = ImageProcessor.getImageData(this.grayScaleCanvas);
    grayScaleImageData = ImageProcessor.rgb2gray(grayScaleImageData);
    let data = imageData.data;

    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      let coordinate = utils.getCoordinate(this.width, i / 4);
      if (coordinate.x === 0 || coordinate.y === 0 || coordinate.x === this.width - 1 || coordinate.y === this.height - 1) {
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
      sum += utils.unitStep(difference) * Math.pow(2, (p - i - 1) % p);
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