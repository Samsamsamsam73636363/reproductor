import './style.css'
fetch('https://leonardoapi.onrender.com/music')
    .then((res) => res.json())
    .then((resJson) => {
        let tracklist = document.getElementById
        ('track-list')
        
        const audio = document.getElementById("audio");
        const playPause = document.getElementById("play");
            
        playPause.addEventListener("click", () => {
          if (audio.paused || audio.ended) {
            playPause.querySelector(".pause-btn").classList.toggle("hide");
            playPause.querySelector(".play-btn").classList.toggle("hide");
            audio.play();
          } else {
            audio.pause();
            playPause.querySelector(".pause-btn").classList.toggle("hide");
            playPause.querySelector(".play-btn").classList.toggle("hide");
          }

        });

        resJson.map((song) => {
            const div = document.createElement('div')
            div.classList.add(
                'box',
                'color'
            )
            div.innerHTML = `
                <img src="${song.path.front}" alt="">
                <h3>"${song.title}"</h3>
                <p>"${song.author}"</p>
            `
            div.addEventListener('click', () => {
                console.log('click sobre ' + song.title)
                document.getElementById('audio')
                .setAttribute('src', song.path.audio)
                
            })
            tracklist.appendChild(div)
        })
        
        
   })
   
