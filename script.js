const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const sliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');


// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


// Change button icon
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}


// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}


// Skip buttons
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}


// Volume and playback speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}


// Click on progress bar to seek
function scrub(e) {
  const scrubTime =
    (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
}



// Event Listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

sliders.forEach(slider =>
  slider.addEventListener('input', handleRangeUpdate)
);

skipButtons.forEach(button =>
  button.addEventListener('click', skip)
);

progress.addEventListener('click', scrub);