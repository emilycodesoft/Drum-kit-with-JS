// var keys = [{keyCode: 65, color: '#ffc600', boxShadow: '0px 0px 10px #ffc600'}]

window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.sound[data-key="${e.keyCode}"]`)
  if (!audio) return;// stop de function
  // let soundColor = keys.find((sound) => sound.keyCode = e.keyCode)
  /* key.style.borderColor = soundColor.color;
  key.style.boxShadow = soundColor.boxShadow */
  key.classList.add('playing')
  audio.currentTime = 0; // rewind to the start
  audio.play();
})

const sounds = document.querySelectorAll('.sound')

function removeTransition (e) {
  if (e.propertyName != 'transform') return; // skip if it's not a transform
  console.log(e.propertyName);
  this.classList.remove('playing') // this is the sound by the addEvent listener of sound in the line 23.
}

sounds.forEach(sound => {
  sound.addEventListener('transitionend', removeTransition)
});
