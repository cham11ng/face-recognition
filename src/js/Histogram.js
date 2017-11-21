import * as utils from "./Utils";

class Histogram {
  static init(bins) {
    let histogram = [];
    for (let i = 0, binLength = bins.length; i < binLength; i++) {
      histogram.push({
        'bin': bins[i],
        'frequency': 0
      });
    }
    return histogram;
  }

  static uniformBinary(imageData) {
    let nonUniformCount = 0;
    let data = imageData.data;
    let histogram = this.init(utils.UNIFORM_BINARY_PATTERN);
    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      let isNotUniform = true;
      for (let j = 1, uniformLength = utils.UNIFORM_BINARY_PATTERN.length; j < uniformLength; j++) {
        if (utils.UNIFORM_BINARY_PATTERN[j] === data[i]) {
          histogram[j].frequency++;
          isNotUniform = false;
          break;
        }
      }
      if (isNotUniform) {
        nonUniformCount++;
      }
    }
    histogram[0].frequency = nonUniformCount;

    return histogram;
  }
}

export default Histogram;