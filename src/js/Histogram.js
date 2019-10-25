import Session from './Session';
import * as utils from './Utils';
import ImageProcessor from './ImageProcessor';

class Histogram {
  static init(bins) {
    const histogram = [];

    for (let i = 0, binLength = bins.length; i < binLength; i++) {
      histogram.push({
        bin: bins[i],
        frequency: 0,
        normalized: 0
      });
    }

    return histogram;
  }

  static uniformBinary(imageData) {
    const data = imageData.data;
    const histogram = this.init(utils.UNIFORM_BINARY_PATTERN);
    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      let isNotUniform = true;
      for (let j = 1, uniformLength = utils.UNIFORM_BINARY_PATTERN.length; j < uniformLength; j++) {
        if (utils.UNIFORM_BINARY_PATTERN[j] === data[i]) {
          this.incrementHistogramFrequency(histogram, j, dataLength);
          isNotUniform = false;
          break;
        }
      }
      if (isNotUniform) {
        this.incrementHistogramFrequency(histogram, 0, dataLength);
      }
    }
    // console.log(this.isNormalized(histogram, data.length));

    return histogram;
  }

  static incrementHistogramFrequency(histogram, index, dataLength) {
    histogram[index].frequency++;
    histogram[index].normalized = histogram[index].frequency / (dataLength / 4);
  }

  static compareHistogram(firstHistogram, secondHistogram) {
    return this.weightedChiSquare(firstHistogram, secondHistogram);
  }

  static chiSquare(firstHistogram, secondHistogram) {
    const total = firstHistogram.length;
    let sum = 0;
    for (let i = 0; i < total; i++) {
      sum += Math.pow(firstHistogram[i] - secondHistogram[i], 2) / secondHistogram[i];
    }

    return sum;
  }

  static weightedChiSquare(firstHistogram, secondHistogram) {
    const total = firstHistogram.length;
    let sum = 0;
    for (let i = 0, j = 0; i < total; i++) {
      j = Math.floor(i / utils.UNIFORM_BINARY_PATTERN.length);
      sum +=
        (utils.WEIGHT_BLOCK[j] * Math.pow(firstHistogram[i] - secondHistogram[i], 2)) /
        (firstHistogram[i] + secondHistogram[i]);
    }

    return sum;
  }

  static isNormalized(histogram, dataLength) {
    let totalFrequencies = 0,
      totalNormalizedValue = 0;
    for (let k = 1; k < histogram.length; k++) {
      totalFrequencies += histogram[k].frequency;
      totalNormalizedValue += histogram[k].normalized;
    }

    return totalFrequencies === dataLength / 4 && Math.round(totalNormalizedValue) === 1;
  }

  static generateHistogramValue(canvas, name) {
    let data = {},
      observedBlockHistogram = [];
    if (Session.has()) {
      data = Session.get('data');
    }

    for (let i = 0, totalBlock = utils.BLOCK_9_BY_9.length; i < totalBlock; i++) {
      observedBlockHistogram = observedBlockHistogram.concat(
        utils.valuesArray(
          Histogram.uniformBinary(ImageProcessor.getImageData(canvas, ...utils.BLOCK_9_BY_9[i])),
          'normalized'
        )
      );
    }

    data[name] = {
      area: utils.valuesArray(this.uniformBinary(ImageProcessor.getImageData(canvas)), 'normalized'),
      blocks: observedBlockHistogram
    };
    Session.put('data', data);
  }
}

export default Histogram;
