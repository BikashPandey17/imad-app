/*console.log('Loaded!');
//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New HTML';

//move the image
var element = document.getElementById('madi');
marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 2;
    madi.style.marginLeft = marginLeft + 'px';
}

madi.onclick=function(){
   var interval = setInterval(moveRight, 50); 
  // madi.style.marginLeft='100px';
}
*/
var count=document.getElementById("counter");
button.onclick = function(){
    //make a request to counter end point 
    //capture the response and store it in a variable
    //render that variable in the correct span
    counter=counter + 1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};