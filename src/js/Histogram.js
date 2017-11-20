import * as utils from "./Utils";

class Histogram {
  static uniformBinaryPixels(imageData) {
    let histogramData = [], data = imageData.data;
    for (let i = 0, uniformLength = utils.UNIFORM_BINARY_PATTERN.length; i < uniformLength; i++) {
      let count = 0;
      for (let j = 0, dataLength = data.length; j < dataLength; j += 4) {
        if (utils.UNIFORM_BINARY_PATTERN[i] === data[j]) {
          count++;
        }
      }
      histogramData.push({
        'bin': utils.UNIFORM_BINARY_PATTERN[i],
        'frequency': count
      });
    }

    return histogramData;
  }
}

export default Histogram;