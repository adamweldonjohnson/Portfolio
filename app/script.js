//SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('.reveal-left', {
  duration: 750,
  delay: 250,
  origin: 'left'
});
sr.reveal('.reveal-right', {
  duration: 500,
  delay: 400,
  origin: 'right'
});
sr.reveal('.card', {
  duration: 1000,
  delay: 400,
  origin: 'bottom'
});



//TARGETING BUTTONS
const devBtn = document.getElementById('devBtn');
const videoBtn = document.getElementById('videoBtn');
const photoBtn = document.getElementById('photoBtn');

//TARGETING DROPDOWNS
const devProjects = document.getElementById('devProjects');
const videoProjects = document.getElementById('videoProjects');
const photoProjects = document.getElementById('photoProjects');

//BUTTON TEST FUNCTION
function works() {
  console.log('works');
}

function reveal() {

}

//CALLING TEST FUNCTION ON CLICK
devBtn.addEventListener('click', works);
videoBtn.addEventListener('click', works);
photoBtn.addEventListener('click', works);

//TOGGLING HIDDEN CLASS
devBtn.addEventListener('click', function() {
  // devProjects.classList.toggle('hidden');
  devProjects.classList.toggle('reveal');
});

videoBtn.addEventListener('click', function() {
  videoProjects.classList.toggle('reveal');
});

videoBtn.addEventListener('click', function() {
  videoProjects.classList.toggle('reveal');
});