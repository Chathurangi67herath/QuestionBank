document.getElementById("submit").onclick = function(){
    var x = document.getElementById("equal").value;
    var y = document.getElementById("variable").value;
    var z = document.getElementById("percentage").value;
    document.getElementById("we").style.visibility="visible";

    if ((x=="==") && (y =='0') && (z =="%")){
        document.getElementById("we").style.backgroundColor="rgb(32, 10, 94)";
        document.getElementById("we").innerHTML="Well Done !";
       document.getElementById("next").style.visibility="visible";
       document.getElementById("submit").style.display="none";
       document.getElementById("try").style.display="none";
       document.getElementById("equal").style.backgroundColor="#9CA9FB";
       document.getElementById("variable").style.backgroundColor="#9CA9FB";
       document.getElementById("percentage").style.backgroundColor="#9CA9FB";
        confetti.start();
    }
    else{
        
        document.getElementById("we").style.backgroundColor="red";
        document.getElementById("we").innerHTML="Incorrect. Try Again !";
        document.getElementById("try").style.backgroundColor="#FABFCA";
        document.getElementById("try").style.visibility="visible";

       
       if(x!="==") {
        document.getElementById("equal").style.backgroundColor="#FABFCA";
       }
       if(y!='0') {
        document.getElementById("variable").style.backgroundColor="#FABFCA";
       }
       if(z!="%") {
        document.getElementById("percentage").style.backgroundColor="#FABFCA";
       }
    


    }
}

document.getElementById("try").onclick = function(){
    document.getElementById("equal").style.backgroundColor="";
    document.getElementById("equal").value="";
    document.getElementById("variable").style.backgroundColor="";
    document.getElementById("variable").value="";
    document.getElementById("percentage").style.backgroundColor="";
    document.getElementById("percentage").value="";
    document.getElementById("we").style.backgroundColor="blue";
    document.getElementById("we").innerHTML="You Can. Try Again !";
    document.getElementById("try").style.backgroundColor="lightblue";

    
    
    
}
