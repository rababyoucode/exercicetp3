let date = new Date();
document.getElementById("pp").innerHTML="Bonjour la date est:" +date.toLocaleDateString();

let time= new Date();
document.getElementById("yr").innerHTML= "l'annee est : " + time.getFullYear();

function validateForm(){
  
  var valname   = document.getElementById("fname").value; //var pour validation Nom
  var varlprenon= document.getElementById("lname").value; //var pour validation Prénom
  var valcode= document.getElementById("code").value; //var pour validation du Code
  var valpaye= document.getElementById("paye").value; //var pour validation choix Paye
  var valage= document.getElementById("dn").value; //var pour validation de l'age
  age =new Date().getFullYear()-new Date(valage).getFullYear(); //var pour calcule age de l'utilisateur
  var el=document.getElementById("mail").value; //var pour validation de l'Email
  var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i'); //var que l'EMAIL doit contenir universelement
  testemail = regEmail.test(el); //var pour testé Var "el" contient les carractaire universel dans Var "regEmail"
  var varpas = document.getElementById("passw").value; //var pour validation de passWord
  var varvir = document.getElementById("vpass").value; //var pour validation de la verification du passWord
  var prefcont = document.querySelector('input[name = "con"]:checked'); //var pour validation Préference de contact
// les CONDITION DE VALIDATION
// 1 pour le nom "plus de carractaire"
    if(valname.length < 2 ){
      document.getElementById("err").style.display="block";
    }else{document.getElementById("err").style="display:none";}
// 2 pour le prénom "plus de carractaire"
    if(varlprenon.length < 2 ){
      document.getElementById("err2").innerHTML="Veuillez entre votre Prénom";  
    }else{
      document.getElementById("err2").innerHTML="";}
// 3 pour le Code Postal "doit contenir des chiffre"
    if(valcode == ""){
      document.getElementById("err3").innerHTML="Veuillez entre votre Code Postal"; 
    }else{
      document.getElementById("err3").innerHTML="";}
// 4 pour paye "doit choisir un paye"
    if(valpaye == ""){
      document.getElementById("err4").innerHTML="Veuillez choisir un Paye";
    }else{
      document.getElementById("err4").innerHTML="";}
// 5 pour l'age "entre 18 et 35"
    if(age<18 || age>35){
      document.getElementById("err5").innerHTML="Age non valide";
    }else{
      document.getElementById("err5").innerHTML="";}
// 6 pour genre "doit choisir un genre"
    if(document.getElementById("fem").checked == false && document.getElementById("men").checked == false ){
      document.getElementById("err6").innerHTML="Veuillez choisir un Genre";
    }else{
      document.getElementById("err6").innerHTML="";}
// 7 pour email "conforme au carractaire universl"
    if(!testemail){
      document.getElementById("err7").innerHTML="Email invalide";}
      else{
        document.getElementById("err7").innerHTML="";}
// 8 pour le mot de pass "doit entre le mot de pass"
      if(varpas != varvir){
        document.getElementById("err8").innerHTML="Pas meme mot de pass";}
        else{
          document.getElementById("err8").innerHTML="";}
// 9 pour la Préference de contac "doit choisir une la Préference de contac"
      if(prefcont == null){   
         document.getElementById("err9").innerHTML="Veuillez choisir la Préference de contact";
      } else {document.getElementById("err9").innerHTML=""; }
// 10 pour la Verification PassWord "le meme chiffre entré dans le mot de pass"              
    if(varpas.length < 6 ||  varpas.length>8){
        document.getElementById("err10").innerHTML="PassWord invalide";}
      else{
        document.getElementById("err10").innerHTML="";}
  }

    
