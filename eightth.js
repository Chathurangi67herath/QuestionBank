document.getElementById("submit").onclick = function(){
    var x = document.getElementById("a").value;
    var y = document.getElementById("equal").value;
    var z = document.getElementById("c").value;
    var q = document.getElementById("d").value;
    document.getElementById("we").style.visibility="visible";

    if ((x=="y") && (y =='temp') && (z =="x")&& (q =="y")){
        document.getElementById("we").style.backgroundColor="rgb(32, 10, 94)";
        document.getElementById("we").innerHTML="Well Done !";
       document.getElementById("next").style.visibility="visible";
       document.getElementById("submit").style.display="none";
       document.getElementById("try").style.display="none";
       document.getElementById("a").style.backgroundColor="#9CA9FB";
       document.getElementById("equal").style.backgroundColor="#9CA9FB";
       document.getElementById("c").style.backgroundColor="#9CA9FB";
       document.getElementById("d").style.backgroundColor="#9CA9FB"; 
       confetti.start();
    }
    else{
        
        document.getElementById("we").style.backgroundColor="red";
        document.getElementById("we").innerHTML="Incorrect. Try Again !";
        document.getElementById("try").style.backgroundColor="#FABFCA";
        document.getElementById("try").style.visibility="visible";

       
       if(x!="y") {
        document.getElementById("a").style.backgroundColor="#FABFCA";
       }
       if(y!='temp') {
        document.getElementById("equal").style.backgroundColor="#FABFCA";
       }
       if(z!="x") {
        document.getElementById("c").style.backgroundColor="#FABFCA";
       }
       if(q!="y") {
        document.getElementById("d").style.backgroundColor="#FABFCA";
       }
    


    }
}

document.getElementById("try").onclick = function(){
    document.getElementById("a").style.backgroundColor="";
    document.getElementById("a").value="";
    document.getElementById("equal").style.backgroundColor="";
    document.getElementById("equal").value="";
    document.getElementById("c").style.backgroundColor="";
    document.getElementById("c").value="";
    document.getElementById("d").style.backgroundColor="";
    document.getElementById("d").value="";
    document.getElementById("we").style.backgroundColor="blue";
    document.getElementById("we").innerHTML="You Can. Try Again !";
    document.getElementById("try").style.backgroundColor="lightblue";

    
    
    
}
