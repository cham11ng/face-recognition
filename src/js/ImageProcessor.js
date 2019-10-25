import Session from './Session';
import { FACE_DATA } from './Data';
import * as utils from './Utils';
import Histogram from './Histogram';

class ImageProcessor {
  static getImageData(canvas, ...parameters) {
    return parameters.length === 4
      ? canvas.getContext('2d').getImageData(...parameters)
      : canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
  }

  static rgb2gray(data) {
    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      data[i] = data[i + 1] = data[i + 2] = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
    }

    return data;
  }

  static rgbCanvas2grey(canvas) {
    const imageData = this.getImageData(canvas);

    return this.rgb2gray(imageData.data);
  }

  static getPixelValue(context, x, y) {
    const pixel = context.getImageData(x, y, 1, 1);

    return pixel.data[0];
  }

  static extract8PointRadius1Feature(canvas, radius = 1) {
    const context = canvas.getContext('2d');
    const imageData = this.getImageData(canvas);
    const data = imageData.data;
    const backupData = imageData.data.slice();

    for (let y = 1; y < canvas.height - 1; y++) {
      for (let x = 1, index = 0; x < canvas.width - 1; x++, index += 4) {
        let sum = 0;
        const neighbourValue = [];
        const centerPosition = utils.get1DPosition(canvas.width, x, y) * utils.RGBA_SHIFT;
        const centerValue = this.getGrayScaleValue(backupData, centerPosition);
        neighbourValue[7] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - radius, y - radius) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[6] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x, y - radius) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[5] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + radius, y - radius) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[4] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + radius, y) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[3] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x + radius, y + radius) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[2] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x, y + radius) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[1] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - radius, y + radius) * utils.RGBA_SHIFT) - centerValue;
        neighbourValue[0] = this.getGrayScaleValue(backupData, utils.get1DPosition(canvas.width, x - radius, y) * utils.RGBA_SHIFT) - centerValue;

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

  static evaluateRecognition(canvas) {
    this.extract8PointRadius1Feature(canvas);

    /* let maxMatch = {
      value: 1,
      name: 'Unknown'
    };*/
    const maxMatchBlock = {
      value: 1,
      name: 'Unknown'
    };
    let observedBlockHistogram = [];
    // let observedHistogram = Histogram.uniformBinary(this.getImageData(canvas));

    for (let i = 0, totalBlock = utils.BLOCK_9_BY_9.length; i < totalBlock; i++) {
      observedBlockHistogram = observedBlockHistogram.concat(utils.valuesArray(Histogram.uniformBinary(this.getImageData(canvas, ...utils.BLOCK_9_BY_9[i])), 'normalized'));
    }

    // this.compareWithData(utils.valuesArray(observedHistogram, 'normalized'), Object.assign({}, Session.get('data'), FACE_DATA), 'area', maxMatch);
    this.compareWithData(observedBlockHistogram, Object.assign({}, Session.get('data'), FACE_DATA), 'blocks', maxMatchBlock);

    if (maxMatchBlock.value < utils.CHI_RECOGNITION_BLOCKS_DOF) {
      return maxMatchBlock;
    }
  }

  static compareWithData(relativeData, data, type, maxMatch) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const difference = Histogram.compareHistogram(relativeData, data[key][type]);
        if (difference < maxMatch.value) {
          maxMatch.name = key;
          maxMatch.value = difference;
        }
      }
    }
  }
}

export default ImageProcessor;
