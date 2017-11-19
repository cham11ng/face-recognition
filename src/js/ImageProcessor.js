class ImageProcessor {
  static getImageData(canvas) {
    return canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
  }

  static rgb2gray(imageData) {
    let data = imageData.data;
    for (let i = 0, dataLength = data.length; i < dataLength; i += 4) {
      data[i] = data[i + 1] = data[i + 2] = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
    }

    return imageData;
  }

  static getPixelValue(imageData, position) {
    return imageData.data[position * 4];
  }
}

export default ImageProcessor;