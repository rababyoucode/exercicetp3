let date = new Date();
document.getElementById("pp").innerHTML="Bonjour la date est:" +date.toLocaleDateString();

let time= new Date();
document.getElementById("yr").innerHTML= "l'annee est : " + time.getFullYear();




/*function validateForm() {
    let valname = document.forms["myForm"]["fname"].value;
    if (valname == "") {
      alert("Veuillez entre votre nom");
      return false;
    }
  }*/

function validateForm(){
  
  var valname   = document.getElementById("fname").value;
  var varlprenon= document.getElementById("lname").value;
  var valcode= document.getElementById("code").value;
  var valpaye= document.getElementById("paye").value;
  var valage= document.getElementById("dn").value;
  age =new Date().getFullYear()-new Date(valage).getFullYear();
  var el=document.getElementById("mail").value;
  var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
   testemail = regEmail.test(el);

alert("inside function");
  alert("check "+valname);
    if(valname.length < 2 ){
      alert("inside if");
      document.getElementById("err").style.display="block";
    }
    if(varlprenon.length < 2 ){
      
      document.getElementById("err2").innerHTML="Veuillez entre votre Prénom";  
    }
    if(valcode == ""){
      document.getElementById("err3").innerHTML="Veuillez entre votre Code Postal"; 
    }
    if(valpaye == ""){
      document.getElementById("err4").innerHTML="Veuillez choisir un Paye";
    }  
    if(age<18 || age>35){
      document.getElementById("err5").innerHTML="Age non valide";
    }
    alert("********* if");
    if(document.getElementById("fem").checked == false && document.getElementById("men").checked == false ){
      document.getElementById("err6").innerHTML="Veuillez choisir un Genre";
    }else{
      document.getElementById("err6").innerHTML="";
         }
         if(el){
          alert("ree");
         }
    if(!testemail){
      alert("eeeee");
      document.getElementById("err7").innerHTML="Email invalide";}
  }

    
