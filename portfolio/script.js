function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)  // Select the .key class, then use sq brackets to access the data-key attribute and match it to the numerical key that has been pressed (from the event listener)
  
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  // key.addClass('playing');  // jQuery
}; 

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => { 
  key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound)