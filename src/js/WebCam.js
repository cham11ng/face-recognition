import * as utils from "./Utils";

class WebCam {
  constructor() {
    this.stream = '';
    this.isActive = false;
    this.cameraTimeout = '';
    this.scaleH = -1;
    this.scaleV = 1;
    this.video = document.createElement('video');
  }

  start(context) {
    let positionX = (this.scaleH === 1 ? 0 : utils.CANVAS_WIDTH * -1) + (utils.CANVAS_WIDTH - utils.CAMERA_WIDTH) / 2;
    let positionY = (this.scaleV === 1 ? 0 : utils.CANVAS_HEIGHT * -1) + (utils.CANVAS_HEIGHT - utils.CAMERA_HEIGHT) / 2;
    navigator.getUserMedia({
      video: true,
      audio: false
    }, (stream) => {
      this.video.src = window.URL.createObjectURL(stream);
      this.stream = stream;
      draw(this.video, context);
    }, function (error) {
      console.log(error);
    });
    let draw = (video) => {
      context.save();
      context.scale(this.scaleH, this.scaleV);
      context.drawImage(video, positionX, positionY);
      context.restore();
      this.cameraTimeout = setTimeout(draw, 10, video, context);
    };
    this.isActive = true;
  }

  stop() {
    clearTimeout(this.cameraTimeout);
    this.stream.getTracks()[0].stop();
    this.isActive = false;
  }
}

export default WebCam;