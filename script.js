const COLORS = {
    'C1' : '#451e3e',
    'C2' : '\u2661',
    'C3' : '\u2665'
}

const audio = document.getElementById('audio');
const video = document.getElementById('back');
const photo = document.getElementById('photo');
const audioLike = document.getElementById('like')
const playBtn = document.getElementById('play');
const refreshBtn = document.getElementById('refresh');
const heartBtn = document.getElementById('heart');
const progress = document.getElementById('progress');
let mouseDownSlider = false;

audio.addEventListener("loadeddata", () => {
    progress.value = 0;
});

audio.addEventListener("timeupdate", () => {
   if(!mouseDownSlider) {
       progress.value = audio.currentTime / audio.duration * 100;
   }
});

audio.addEventListener("ended", () => {
   playBtn.textContent = "▶";
});

playBtn.addEventListener("click", () => {
   if(audio.paused){
       video.play();
       photo.style.setProperty("animation", "rotate 20s linear infinite");
       audio.play();
   }else{
       video.pause();
       photo.style.removeProperty("animation");
       audio.pause();
   }
   playBtn.textContent = audio.paused ? "▶" : "⏸";
});

progress.addEventListener("change", () => {
   const percent = progress.value / 100;
   audio.currentTime = (audio.duration || 0) * percent;
});

refreshBtn.addEventListener("click", () => {
    audio.currentTime = 0;
});

heartBtn.addEventListener("click", () => {
   const like = heartBtn.textContent;
   if(like === COLORS['C2']){
       audioLike.play();
       heartBtn.textContent = COLORS['C3'];
   }else{
       heartBtn.textContent = COLORS['C2'];
   }
});
