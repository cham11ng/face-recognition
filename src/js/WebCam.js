class WebCam {
  constructor() {
    this.stream = '';
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
      context.drawImage(video, 0, 0);
      this.cameraTimeout = setTimeout(draw, 10, video, context);
    };
  }

  stop() {
    clearTimeout(this.cameraTimeout);
    this.stream.getTracks()[0].stop();
  }
}

export default WebCam;