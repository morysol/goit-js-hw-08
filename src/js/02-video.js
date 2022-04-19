// Select with the DOM API
const _ = require('lodash');

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Vimeo.Player(iframe);

function loggingSeconds(data) {
  console.log('full throttle  ', data.seconds);
  // "videoplayer-current-time"
  // _.throttle(console.log('seconds  ', data.seconds), 1000);
}

// iframePlayer.on('timeupdate', _.throttle(loggingSeconds, 300));
iframePlayer.on('timeupdate', _.throttle(loggingSecondsn, 1000));

iframePlayer.on('pause', function (data) {
  // data is an object containing properties specific to that event

  console.log(data.seconds);
  // console.log('get -------', this.getCurrentTime());

  this.setCurrentTime(data.seconds + 10.001);
  console.log('set', data.seconds);
});
