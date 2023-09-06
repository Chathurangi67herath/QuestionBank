document.getElementById("submit").onclick = function(){
    var x = document.getElementById("chamodi").value;
    document.getElementById("we").style.visibility="visible";

    if (x=="Chamodi"){
        document.getElementById("we").style.backgroundColor="rgb(32, 10, 94)";
        document.getElementById("we").innerHTML="Well Done !";
       document.getElementById("next").style.visibility="visible";
       document.getElementById("submit").style.display="none";
       document.getElementById("try").style.display="none";
       document.getElementById("chamodi").style.backgroundColor="#9CA9FB";
      
        confetti.start();
    }
    else{
        
        document.getElementById("we").style.backgroundColor="red";
        document.getElementById("we").innerHTML="Incorrect. Try Again !";
        document.getElementById("try").style.backgroundColor="#FABFCA";
        document.getElementById("try").style.visibility="visible";

       
       if(x!="printf") {
        document.getElementById("chamodi").style.backgroundColor="#FABFCA";
       }
      
    


    }
}

document.getElementById("try").onclick = function(){
    document.getElementById("chamodi").style.backgroundColor="";
    document.getElementById("chamodi").value="";
    document.getElementById("we").style.backgroundColor="blue";
    document.getElementById("we").innerHTML="You Can. Try Again !";
    document.getElementById("try").style.backgroundColor="lightblue";

    
    
    
}
