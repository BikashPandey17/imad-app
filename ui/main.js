console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New HTML';

//move the image
var element = document.getElementById('madi');
marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    madi.style.marginLeft = marginLeft + 'px';
}

madi.onclick=function(){
   var interval = setInterval(moveRight, 50); 
  // madi.style.marginLeft='100px';
}
