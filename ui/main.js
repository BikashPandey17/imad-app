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
var button=document.getElementById("counter");
//var counter=0;
button.onclick = function(){
    //Create a request object to counter end point 
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
                
            }
        }
        //Don't do anything
    };
    //render that variable in the correct span
    
    /*counter = counter + 1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();*/
    
    //MAKE THE REQUEST
    
    request.open('GET','http://pandeybikash98.imad.hasura-app.io/counter',true);
    request.send('null');
};

//Submit Name
var nameInput=document.getElementById("name");
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
//shhould make a request to the server and send the name

//capture the name and render it as a list.
var names = ["name1","name2","name3","name4"];
for (var i=0;i<=names.length;i++)
{
    list+='<li>'+names[i]+'</li>';
}
var ul=document.getElementById("namelist")
ul.innerHTML=list;
};













