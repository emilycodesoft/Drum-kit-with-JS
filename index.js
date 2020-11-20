var keys = [
  {keyCode: 65, color: '#ffc600', boxShadow: '0px 0px 10px #ffc600'},
  {keyCode: 83, color: '#33FF00', boxShadow: '0px 0px 10px #33FF00'},
  {keyCode: 68, color: '#00B4FF', boxShadow: '0px 0px 10px #00B4FF'},
  {keyCode: 70, color: '#7500FF', boxShadow: '0px 0px 10px #7500FF'},
  {keyCode: 71, color: '#FF001B', boxShadow: '0px 0px 10px #FF001B'},
  {keyCode: 72, color: '#FF00F3', boxShadow: '0px 0px 10px #FF00F3'},
  {keyCode: 74, color: '#FF0045', boxShadow: '0px 0px 10px #FF0045'},
  {keyCode: 75, color: '#0044FF', boxShadow: '0px 0px 10px #0044FF'},
  {keyCode: 76, color: '#BAFF00', boxShadow: '0px 0px 10px #BAFF00'},
]
var key;
window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  key = document.querySelector(`.sound[data-key="${e.keyCode}"]`)
  if (!audio) return;// stop de function
  audio.currentTime = 0; // rewind to the start
  audio.play();
  let soundColor = keys.find((sound) => sound.keyCode == e.keyCode)
  // giveStyle(soundColor.color, soundColor.boxShadow)
  key.style.borderColor = soundColor.color;
  key.style.boxShadow = soundColor.boxShadow;
  key.classList.add('playing')
})

// function giveStyle (color, boxShadow) {
//   key.style.borderColor = color;
//   key.style.boxShadow = boxShadow;
// }
const sounds = document.querySelectorAll('.sound')

function removeTransition (e) {
  if (e.propertyName != 'transform') return; // skip if it's not a transform
  this.classList.remove('playing') // this is the sound by the addEvent listener of sound in the line 23.
  key.style.borderColor = '';
  key.style.boxShadow = '';
}

sounds.forEach(sound => {
  sound.addEventListener('transitionend', removeTransition)
});
