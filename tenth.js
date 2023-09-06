document.getElementById("submit").onclick = function(){
    var x = document.getElementById("symbol").value;
  
    var z = document.getElementById("percentage").value;
    document.getElementById("we").style.visibility="visible";

    if ((x=="%d") && (z =="%d")){
        document.getElementById("we").style.backgroundColor="rgb(32, 10, 94)";
        document.getElementById("we").innerHTML="Well Done !";
       document.getElementById("next").style.visibility="visible";
       document.getElementById("submit").style.display="none";
       document.getElementById("try").style.display="none";
       document.getElementById("symbol").style.backgroundColor="#9CA9FB";
       document.getElementById("percentage").style.backgroundColor="#9CA9FB";
        confetti.start();
    }
    else{
        
        document.getElementById("we").style.backgroundColor="red";
        document.getElementById("we").innerHTML="Incorrect. Try Again !";
        document.getElementById("try").style.backgroundColor="#FABFCA";
        document.getElementById("try").style.visibility="visible";

       
       if(x!="%d") {
        document.getElementById("symbol").style.backgroundColor="#FABFCA";
       }
      
       if(z!="%d") {
        document.getElementById("percentage").style.backgroundColor="#FABFCA";
       }
    


    }
}

document.getElementById("try").onclick = function(){
    document.getElementById("symbol").style.backgroundColor="";
    document.getElementById("symbol").value="";
   document.getElementById("percentage").style.backgroundColor="";
    document.getElementById("percentage").value="";
    document.getElementById("we").style.backgroundColor="blue";
    document.getElementById("we").innerHTML="You Can. Try Again !";
    document.getElementById("try").style.backgroundColor="lightblue";

    
    
    
}
