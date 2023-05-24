function apostar(){
    //Generar numero aleatorio con metodo matematico random
    var a=Math.round(Math.random()*10);//Generar numero random
    document.getElementById("resultado").value=a;
    //Asignar numero ingresado al azar
    var b=document.getElementById("apostado").value;
    if (a==b){
    document.getElementById("salida").value="Gano";
    }else{
    document.getElementById("salida").value="Perdio";
    }
}
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
  
  }