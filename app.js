window.addEventListener('load',function(){
    const keys = document.querySelectorAll('.keys div');
    const sounds = document.querySelectorAll('.sound');
    const visual = document.querySelector('.visuals');
    const colors = ["#73a4ec","#f16191","#a51ec0","#46ec6a","#e5f04e","#f37d4e"];
    const balls = document.createElement('div');
    keys.forEach((key,index)=>{
        key.addEventListener('click',function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            visual.appendChild(balls);
            balls.style.background = colors[index];
            balls.style.animation = "fly 1s ease"
        });
    });
    balls.addEventListener('animationend',function(){
        visual.removeChild(balls);
    });

});