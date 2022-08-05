import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
// --------------------------------------------------------------
const onPlay = function(data) {
    player.on('play', onPlay);
};

    // -----------------------------------------------
    player.setCurrentTime(saveCurrentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
// -----------------------------------------------------
const saveCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (saveCurrentTime) {
    player.setCurrentTime(saveCurrentTime)
    console.log(saveCurrentTime);
    localStorage.removeItem(LOCALSTORAGE_KEY);
}