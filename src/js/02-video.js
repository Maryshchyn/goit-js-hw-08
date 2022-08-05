import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const onPlay = function(data) {
    player.on('play', onPlay);
};
player.on('timeupdate', throttle(timeUpdateNow, 2000));
function timeUpdateNow(evt) {
    localStorage.setItem(LOCALSTORAGE_KEY, evt.seconds);
    console.log(`Video now:  ${evt.seconds}`); 
}

const saveCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (saveCurrentTime) {
    player.setCurrentTime(saveCurrentTime)
    console.log(saveCurrentTime);
    localStorage.removeItem(LOCALSTORAGE_KEY);
}