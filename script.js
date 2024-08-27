// script.js

// Get the video and audio elements
const video = document.getElementById('background-video');
const audio = document.getElementById('background-audio');

// Play the video and audio automatically
video.play();
audio.play();

// Add some effects to the note on hover
const note = document.querySelector('.note');

note.addEventListener('mouseover', () => {
    // Add a fade-in effect to the note
    note.style.opacity = 1;
});

note.addEventListener('mouseout', () => {
    // Add a fade-out effect to the note
    note.style.opacity = 0.5;
});