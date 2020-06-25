(() =>{
    let rotateY = 0,
        rotateX = 0;

    let speed = 10;

    // setInterval(function(){
    //     rotateY -= speed;
    //     rotateX += speed;
        

    //     document.querySelector('.cube').style.transform =
    //     'rotateY('+rotateY+'deg)' +
    //     'rotateX('+rotateX+'deg)' ;
    // },100);
    document.onkeydown = (e) => {
             if (e.keyCode === 37) rotateY -= speed
        else if (e.keyCode === 38) rotateX += speed
        else if (e.keyCode === 39) rotateY += speed
        else if (e.keyCode === 40) rotateX -= speed


        

        document.querySelector('.cube').style.transform =
         'rotateY('+rotateY+'deg)' +
         'rotateX('+rotateX+'deg)' ;
        }
        
})();