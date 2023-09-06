document.getElementById("submit").onclick = function(){
    var x = document.getElementById("scanf").value;
    var y = document.getElementById("variable").value;
    var z = document.getElementById("percentage").value;
    document.getElementById("we").style.visibility="visible";

    if ((x=="scanf") && (y =='&num') && (z =="%d")){
        document.getElementById("we").style.backgroundColor="rgb(32, 10, 94)";
        document.getElementById("we").innerHTML="Well Done !";
       document.getElementById("next").style.visibility="visible";
       document.getElementById("submit").style.display="none";
       document.getElementById("try").style.display="none";
       document.getElementById("scanf").style.backgroundColor="#9CA9FB";
       document.getElementById("variable").style.backgroundColor="#9CA9FB";
       document.getElementById("percentage").style.backgroundColor="#9CA9FB";
        confetti.start();
    }
    else{
        
        document.getElementById("we").style.backgroundColor="red";
        document.getElementById("we").innerHTML="Incorrect. Try Again !";
        document.getElementById("try").style.backgroundColor="#FABFCA";
        document.getElementById("try").style.visibility="visible";

       
       if(x!="scanf") {
        document.getElementById("scanf").style.backgroundColor="#FABFCA";
       }
       if(y!='&num') {
        document.getElementById("variable").style.backgroundColor="#FABFCA";
       }
       if(z!="%d") {
        document.getElementById("percentage").style.backgroundColor="#FABFCA";
       }
    


    }
}

document.getElementById("try").onclick = function(){
    document.getElementById("scanf").style.backgroundColor="";
    document.getElementById("scanf").value="";
    document.getElementById("variable").style.backgroundColor="";
    document.getElementById("variable").value="";
    document.getElementById("percentage").style.backgroundColor="";
    document.getElementById("percentage").value="";
    document.getElementById("we").style.backgroundColor="blue";
    document.getElementById("we").innerHTML="You Can. Try Again !";
    document.getElementById("try").style.backgroundColor="lightblue";

    
    
    
}
