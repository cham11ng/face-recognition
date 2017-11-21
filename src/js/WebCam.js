import * as utils from "./Utils";

class WebCam {
  constructor() {
    this.stream = '';
    this.isActive = false;
    this.cameraTimeout = '';
    this.video = document.createElement('video');
  }

  start(context) {
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
      context.drawImage(video, (utils.CANVAS_WIDTH - utils.CAMERA_WIDTH) / 2, (utils.CANVAS_HEIGHT - utils.CAMERA_HEIGHT) / 2);
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