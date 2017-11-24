import * as utils from "./Utils";

class ImageProcessor {
  static getImageData(canvas) {
    return canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
  }

  static rgb2gray(data) {
    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      data[i] = data[i + 1] = data[i + 2] = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
    }

    return data;
  }

  static rgbCanvas2grey(canvas) {
    let imageData = this.getImageData(canvas);
    return this.rgb2gray(imageData.data);
  }

  static getPixelValue(context, x, y) {
    let pixel = context.getImageData(x, y, 1, 1);

    return pixel.data[0];
  }

  static extractFeature(canvas) {
    let context = canvas.getContext('2d');
    let imageData = ImageProcessor.getImageData(canvas);
    let data = imageData.data;
    let backupData = imageData.data.slice();

    for (let y = 1; y < canvas.height - 1; y++) {
      for (let x = 1, index = 0; x < canvas.width - 1; x++, index += 4) {
        let sum = 0;
        let neighbourValue = [];
        let centerPosition = utils.get1DPosition(canvas.width, x, y) * utils.RGBA_SHIFT;
        let centerValue = this.getGrayScaleValue(backupData, centerPosition);
        neighbourValue[7] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - 1, y - 1) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[6] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x, y - 1) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[5] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + 1, y - 1) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[4] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + 1, y) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[3] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + 1, y + 1) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[2] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x, y + 1) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[1] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - 1, y + 1) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[0] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - 1, y) * utils.RGBA_SHIFT) - centerValue;

        for (let k = 0, totalNeighbour = neighbourValue.length; k < totalNeighbour; k++) {
          sum += utils.unitStep(neighbourValue[k]) * Math.pow(2, k);
        }
        data[centerPosition] = data[centerPosition + 1] = data[centerPosition + 2] = sum;
      }
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.putImageData(imageData, 0, 0);
  }

  static getGrayScaleValue(data, position) {
    return data[position] * 0.3 + data[position + 1] * 0.59 + data[position + 2] * 0.11;
  }
}

export default ImageProcessor;