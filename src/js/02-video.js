// Select with the DOM API
const _ = require('lodash');

const iframePlayer = new Vimeo.Player(document.querySelector('#vimeo-player'));

const videoplayerStartTime = parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;

iframePlayer.setCurrentTime(videoplayerStartTime);

function loggingSeconds(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

iframePlayer.on('timeupdate', _.throttle(loggingSeconds, 1000));
