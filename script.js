const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const skipButtons = document.querySelectorAll("[data-skip]");

// Play / Pause
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play button icon
function updateButton() {
    toggle.textContent = video.paused ? "►" : "❚❚";
}

// Update progress bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}

// Skip forward/backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Change volume
function handleVolume() {
    video.volume = this.value;
}

// Change playback speed
function handlePlaybackRate() {
    video.playbackRate = this.value;
}

// Scrub video
function scrub(event) {
    const scrubTime =
        (event.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener("click", togglePlay);

toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);

volume.addEventListener("input", handleVolume);

playbackSpeed.addEventListener("input", handlePlaybackRate);

skipButtons.forEach(button => {
    button.addEventListener("click", skip);
});

progress.addEventListener("click", scrub);