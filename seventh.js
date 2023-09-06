document.getElementById("submit").onclick = function(){
    var x = document.getElementById("a").value;
    var y = document.getElementById("b").value;
    var z = document.getElementById("c").value;
    var q = document.getElementById("d").value;
    document.getElementById("we").style.visibility="visible";

    if ((x=="%c") && (y =='%d') && (z =="c")&& (q =="c")){
        document.getElementById("we").style.backgroundColor="rgb(32, 10, 94)";
        document.getElementById("we").innerHTML="Well Done !";
       document.getElementById("next").style.visibility="visible";
       document.getElementById("submit").style.display="none";
       document.getElementById("try").style.display="none";
       document.getElementById("a").style.backgroundColor="#9CA9FB";
       document.getElementById("b").style.backgroundColor="#9CA9FB";
       document.getElementById("c").style.backgroundColor="#9CA9FB";
       document.getElementById("d").style.backgroundColor="#9CA9FB"; 
       confetti.start();
    }
    else{
        
        document.getElementById("we").style.backgroundColor="red";
        document.getElementById("we").innerHTML="Incorrect. Try Again !";
        document.getElementById("try").style.backgroundColor="#FABFCA";
        document.getElementById("try").style.visibility="visible";

       
       if(x!="%c") {
        document.getElementById("a").style.backgroundColor="#FABFCA";
       }
       if(y!='%d') {
        document.getElementById("b").style.backgroundColor="#FABFCA";
       }
       if(z!="c") {
        document.getElementById("c").style.backgroundColor="#FABFCA";
       }
       if(q!="c") {
        document.getElementById("d").style.backgroundColor="#FABFCA";
       }
    


    }
}

document.getElementById("try").onclick = function(){
    document.getElementById("a").style.backgroundColor="";
    document.getElementById("a").value="";
    document.getElementById("b").style.backgroundColor="";
    document.getElementById("b").value="";
    document.getElementById("c").style.backgroundColor="";
    document.getElementById("c").value="";
    document.getElementById("d").style.backgroundColor="";
    document.getElementById("d").value="";
    document.getElementById("we").style.backgroundColor="blue";
    document.getElementById("we").innerHTML="You Can. Try Again !";
    document.getElementById("try").style.backgroundColor="lightblue";

    
    
    
}
