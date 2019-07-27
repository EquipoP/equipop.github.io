function verifyAns() {
    document.getElementById("welcome").style.display = "none";
    var failMSG1 = document.getElementById("fail1");
    var failMSG2 = document.getElementById("fail2");
    var inputNum = document.getElementById("input1").value;
    inputNum = inputNum.concat(document.getElementById("input2").value,document.getElementById("input3").value,document.getElementById("input4").value)
    console.log(inputNum);
    if (inputNum == '4338'){
        failMSG1.style.display = "";
        failMSG2.style.display = "";
        document.getElementById("success").style.display= "inline-block";
        document.getElementById("success").innerHTML = success1;
    }
    else if (inputNum == '4358'){
        failMSG1.style.display = "";
        failMSG2.style.display = "";
        document.getElementById("success").style.display= "inline-block";
        document.getElementById("success").innerHTML = success2;
    }
    else if (inputNum == '4368'){
        failMSG1.style.display = "";
        failMSG2.style.display = "";
        document.getElementById("success").style.display= "inline-block";
        document.getElementById("success").innerHTML = success3;
    }
    else if (inputNum == '4398'){
        failMSG1.style.display = "";
        failMSG2.style.display = "";
        document.getElementById("success").style.display= "inline-block";
        document.getElementById("success").innerHTML = success4;
    }
    else{
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

var success1 = "CORRECTO, SI USTED ESTÁ EN LA EX-SECRETARÍA LA LLAVE ESTÁ EN 1";
var success2 = "CORRECTO, SI USTED ESTÁ EN EL VESTUARIO FEMENINO LA LLAVE ESTÁ EN 2"
var success3 = "CORRECTO, SI USTED ESTÁ EN LA EX-DIRECCIÓN LA LLAVE ESTÁ EN 3"
var success4 = "CORRECTO, SI USTED ESTÁ EN LA SALA DEL FONDO LA LLAVE ESTÁ EN 4"
