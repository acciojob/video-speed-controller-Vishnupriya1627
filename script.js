const video = document.querySelector(".viewer");
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

// Update Play/Pause Button
function updateButton() {
    toggle.textContent = video.paused ? "►" : "❚ ❚";
}

// Update Progress Bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Set Volume
function handleVolume() {
    video.volume = volume.value;
}

// Set Playback Speed
function handleSpeed() {
    video.playbackRate = playbackSpeed.value;
}

// Skip Forward / Backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Seek Video by Clicking Progress Bar
function scrub(e) {
    const scrubTime =
        (e.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
}

// Event Listeners
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);

volume.addEventListener("input", handleVolume);

playbackSpeed.addEventListener("input", handleSpeed);

skipButtons.forEach(button =>
    button.addEventListener("click", skip)
);

progress.addEventListener("click", scrub);