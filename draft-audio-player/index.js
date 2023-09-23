
const playBtn = document.querySelector('.btn--play');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');
const timeDuration = document.querySelector('.time-duration')
const timeCurrent = document.querySelector('.time-current')
const progressBar = document.querySelector('.time-progress')


const audio = new Audio();
let arrSong = [
    'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3',
    './assets/audio/dontstartnow.mp3',
    './assets/audio/beyonce.mp3',
    'https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3'

]

let isPlay = false;
let songNum = 0;
let currentSong = arrSong[songNum]

let playbackPosition = 0;


function playAudio() {
//   audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
  
  // currentSong = arrSong[songNum]
  audio.src = currentSong;
  // audio.currentTime = playbackPosition;
  // audio.currentTime = 0;

//   audio.addEventListener('loadedmetadata', function() {
  audio.addEventListener('loadeddata', function() {
    console.log(`Время песни: ${audio.duration} секунд`);
    console.log(`Время песни: ${getTimeCodeFromNum(audio.duration)} секунд`);
    timeDuration.innerHTML = `${getTimeCodeFromNum(audio.duration)}`;

    audio.currentTime = playbackPosition;
    
  });

  // playBtn.classList.toggle('pause');


  if (!isPlay) {
    isPlay = true;
    audio.play();
    // playBtn.innerHTML = 'Play audio';
    playBtn.classList.add('pause');
  } else {
    isPlay = false;
    audio.pause();
    // playBtn.innerHTML = 'Stop audio';
    playBtn.classList.remove('pause');

    audio.currentTime = 0;
    playbackPosition = 0;
  }
}


/************************************************* */

// Добавьте следующую функцию, чтобы сохранять позицию остановки:

function savePlaybackPosition() {
  playbackPosition = audio.currentTime;
  // playbackPosition = 0;
  console.log(`Конец`)
  playBtn.classList.remove('pause');
}

// Вызовите эту функцию при остановке песни:

audio.addEventListener('ended', savePlaybackPosition);

/************************************************* */


function prevSong(){
  if (!songNum) { songNum = arrSong.length-1}
  else {songNum--}
  currentSong = arrSong[songNum]
  if (isPlay) { // если песня играет, то пусть играет
    isPlay = false;
    playbackPosition = 0;
    playAudio()
  } 
  else {
    audio.src = currentSong;
    playbackPosition = 0;
    audio.addEventListener('loadeddata', function() {
      timeDuration.innerHTML = `${getTimeCodeFromNum(audio.duration)}`;
    });
  }
  
}

function nextSong(){
  if (songNum === arrSong.length-1) { songNum = 0}
  else {songNum++}
  currentSong = arrSong[songNum]
  if (isPlay) { // если песня играет, то пусть играет
    isPlay = false;
    playbackPosition = 0;
    playAudio()
  } 
  else {
    audio.src = currentSong;
    playbackPosition = 0;
    audio.addEventListener('loadeddata', function() {
      timeDuration.innerHTML = `${getTimeCodeFromNum(audio.duration)}`;
    });
  }
  
}

setInterval(() => {
  // меняю текущее время
  timeCurrent.textContent = getTimeCodeFromNum(audio.currentTime);
  // заставляю бежать time-progress
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";

  playbackPosition = audio.currentTime
}, 500);


// function toggleBtn() {
//   playBtn.classList.toggle('pause');
// }

// playBtn.addEventListener('click', toggleBtn);

playBtn.addEventListener('click', playAudio);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


/*************************************************** */

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
