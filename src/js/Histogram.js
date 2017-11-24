import * as utils from "./Utils";

class Histogram {
  static init(bins) {
    let histogram = [];
    for (let i = 0, binLength = bins.length; i < binLength; i++) {
      histogram.push({
        'bin': bins[i],
        'frequency': 0,
        'normalized': 0
      });
    }
    return histogram;
  }

  static uniformBinary(imageData) {
    let data = imageData.data;
    let histogram = this.init(utils.UNIFORM_BINARY_PATTERN);
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
    return this.chiSquare(firstHistogram, secondHistogram);
  }

  static chiSquare(firstHistogram, secondHistogram) {
    let total = firstHistogram.length;
    let sum = 0;
    for (let i = 0; i < total; i++) {
      sum += Math.pow((firstHistogram[i].normalized - secondHistogram[i].normalized), 2) / secondHistogram[i].normalized;
    }

    return sum;
  }

  static isNormalized(histogram, dataLength) {
    let totalFrequencies = 0, totalNormalizedValue = 0;
    for (let k = 0; k < histogram.length; k++) {
      totalFrequencies += histogram[k].frequency;
      totalNormalizedValue += histogram[k].normalized;
    }
    return (totalFrequencies === dataLength / 4) && Math.round(totalNormalizedValue) === 1;
  }
}

export default Histogram;