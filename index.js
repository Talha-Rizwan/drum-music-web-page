// alert("working");


// var audio=new Audio('sounds/tom-1.mp3')



// var all_buttons=document.querySelectorAll(".drum");




for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicking);
}



var HTML_button;

function clicking(){
//    alert("a button is clicked");
console.log(this.innerHTML);
this.style.color='red';
// audio.play();
HTML_button=this.innerHTML;

// this.classlist.add("pressed");
// console.log(this.classlist);
// console.log(this);

var active_key=document.querySelector("."+ HTML_button);
    console.log(active_key);
    active_key.classList.add("pressed");
    // active_key.classList.toggle("pressed");

    setTimeout(function(){
        active_key.classList.remove("pressed")},100);


switch (HTML_button){
    case "w":
        var kick1=new Audio('sounds/tom-1.mp3');
        kick1.play();
        break;
    
    case "a":
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
        break; 
    
    case "s":
        var kick=new Audio('sounds/snare.mp3');
        kick.play();
        break; 

    default:
        var audio=new Audio('sounds/tom-1.mp3')
        audio.play();
        break;
    
    }

    


    

}

document.addEventListener("keydown",function(event){
    console.log(event.key);

    switch (event.key){
        case "w":
            var kick1=new Audio('sounds/tom-1.mp3');
            kick1.play();
            break;
        
        case "a":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
            break; 
        
        case "s":
            var kick=new Audio('sounds/snare.mp3');
            kick.play();
            break; 
    
        default:
            var audio=new Audio('sounds/tom-1.mp3')
            audio.play();
            break;
        
        }



});
