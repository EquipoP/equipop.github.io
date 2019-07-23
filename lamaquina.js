function verifyAns() {
    document.getElementById("welcome").style.display = "none";
    var failMSG1 = document.getElementById("fail1");
    var failMSG2 = document.getElementById("fail2");
    var inputNum = document.getElementById("input1").value;
    inputNum = inputNum.concat(document.getElementById("input2").value,document.getElementById("input3").value,document.getElementById("input4").value)
    console.log(inputNum);
    if (inputNum == '1998'){
        failMSG1.style.display = "";
        failMSG2.style.display = "";
        document.getElementById("success").style.display= "inline-block";
        document.getElementById("success").innerHTML = "RESPUESTA CORRECTA, LA LLAVE ESTÁ ABAJO DE LA MESA";
    }else{
        document.getElementById("success").style.display= "";
        if (failMSG1.style.display == ""){
            failMSG1.style.display = "inline-block";
            failMSG2.style.display = "";
        }else{
            failMSG1.style.display = "";
            failMSG2.style.display = "inline-block";
        }
    }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
