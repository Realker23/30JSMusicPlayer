const song = document.getElementById("song");
const progress = document.getElementById("progress");
const playIcon = document.getElementById("playIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    
    
}

function playPause(){
    if(playIcon.classList.contains("fa-pause")){
        song.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }else{
        song.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    }
}

setInterval(()=>{
    progress.value = song.currentTime;
},500)



progress.onchange = function(){ 
    song.currentTime = progress.value;
}

