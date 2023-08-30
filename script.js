const song = document.getElementById("song");
const progress = document.getElementById("progress");
const playIcon = document.getElementById("playIcon");
const songName = document.getElementById("songName");
const authorName = document.getElementById("authorName");
const image = document.querySelector("img");

const musicList = [{
                    Name : "Despacito",
                    author : "Luis Fonsi ft. Puerto Rican"
                },
                {
                    Name : "Maan meri jaan",
                    author : "King" 
                },
                {
                    Name : "Tere Pyar Mein",
                    author : "Arjit Singh"
                }];

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

function nextPreviousPlayPause(){
    if(playIcon.classList.contains("fa-pause")){
        song.play();
    }else{
        song.pause();
    }
}

let musicListIndex = 0;

function playNext(){
    musicListIndex++
    if(musicListIndex>=musicList.length){
        musicListIndex = 0;
    }
    
    song.src = "media/" + musicList[musicListIndex].Name + ".mp3";
    songName.innerText = musicList[musicListIndex].Name;
    authorName.innerText = musicList[musicListIndex].author;
    image.src = "media/" + musicList[musicListIndex].Name + ".jpg";
    nextPreviousPlayPause();
    
    

}

function playPrevious(){
    musicListIndex-- ; 
    console.log(musicListIndex);
    if(musicListIndex < 0){
        musicListIndex = musicList.length -1;
    }
    song.src = "media/" + musicList[musicListIndex].Name + ".mp3";
    songName.innerText = musicList[musicListIndex].Name;
    authorName.innerText = musicList[musicListIndex].author;
    image.src = "media/" + musicList[musicListIndex].Name + ".jpg";
    nextPreviousPlayPause();
    
    

}

setInterval(()=>{
    progress.value = song.currentTime;
},500)



progress.onchange = function(){ 
    song.currentTime = progress.value;
}

