//SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('.reveal-left', {
  duration: 750,
  delay: 150,
  origin: 'left'
});
sr.reveal('.reveal-right', {
  duration: 500,
  delay: 350,
  origin: 'right'
});
sr.reveal('.card', {
  duration: 1000,
  delay: 150,
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

//CALLING TEST FUNCTION ON CLICK

// videoBtn.addEventListener('click', works);
// photoBtn.addEventListener('click', works);

//TOGGLING HIDDEN CLASS
devBtn.addEventListener('click', function() {
  // devProjects.classList.toggle('hidden');
  devProjects.classList.toggle('reveal');
});

photoBtn.addEventListener('click', function() {
  photoProjects.classList.toggle('reveal-bottom');
});

// videoBtn.addEventListener('click', function() {
//   videoProjects.classList.toggle('reveal');
// });