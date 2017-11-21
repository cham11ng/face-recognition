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
}

export default ImageProcessor;