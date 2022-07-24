document.getElementById("submit").onclick = function(){
    var x = document.getElementById("printf").value;
    var y = document.getElementById("quotes").value;
    var z = document.getElementById("semicolan").value;
    document.getElementById("we").style.visibility="visible";

    if ((x=="printf") && (y =='"') && (z ==";")){
        document.getElementById("we").style.backgroundColor="rgb(32, 10, 94)";
        document.getElementById("we").innerHTML="Well Done !";
       document.getElementById("next").style.visibility="visible";
       document.getElementById("submit").style.display="none";
       document.getElementById("try").style.display="none";
       document.getElementById("printf").style.backgroundColor="#9CA9FB";
       document.getElementById("quotes").style.backgroundColor="#9CA9FB";
       document.getElementById("semicolan").style.backgroundColor="#9CA9FB";
        confetti.start();
    }
    else{
        
        document.getElementById("we").style.backgroundColor="red";
        document.getElementById("we").innerHTML="Incorrect. Try Again !";
        document.getElementById("try").style.backgroundColor="#FABFCA";
        document.getElementById("try").style.visibility="visible";

       
       if(x!="printf") {
        document.getElementById("printf").style.backgroundColor="#FABFCA";
       }
       if(y!='"') {
        document.getElementById("quotes").style.backgroundColor="#FABFCA";
       }
       if(z!=";") {
        document.getElementById("semicolan").style.backgroundColor="#FABFCA";
       }
    


    }
}

document.getElementById("try").onclick = function(){
    document.getElementById("printf").style.backgroundColor="";
    document.getElementById("printf").value="";
    document.getElementById("quotes").style.backgroundColor="";
    document.getElementById("quotes").value="";
    document.getElementById("semicolan").style.backgroundColor="";
    document.getElementById("semicolan").value="";
    document.getElementById("we").style.backgroundColor="blue";
    document.getElementById("we").innerHTML="You Can. Try Again !";
    document.getElementById("try").style.backgroundColor="lightblue";

    
    
    
}
