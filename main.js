//js soal 1
function cekjawaban1(){
    var jawaban = document.getElementById("input-1").value;
    var kj = document.getElementById("kj1").innerHTML;
    var soal = document.getElementById("soal1");
    var y = document.getElementById("y1");
    var x = document.getElementById("x1");
    var z = document.getElementById("z1");
    var input = document.getElementById("input-1");
    var next = document.getElementById("next1");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp1(){
    document.getElementById("z1").style.display = "none";
    document.getElementById("input-1").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show1(){
    var soal = document.getElementById("soal1");
    var x = document.getElementById("x1");
    var jawaban = document.getElementById("input-1");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next1(){
    document.getElementById("utas1").style.display = "none" ;
    document.getElementById("utas2").style.display = "block";
}
//js soal 2
function cekjawaban2(){
    var jawaban = document.getElementById("input-2").value;
    var kj = document.getElementById("kj2").innerHTML;
    var soal = document.getElementById("soal2");
    var y = document.getElementById("y2");
    var x = document.getElementById("x2");
    var z = document.getElementById("z2");
    var input = document.getElementById("input-2");
    var next = document.getElementById("next2");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp2(){
    document.getElementById("z2").style.display = "none";
    document.getElementById("input-2").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show2(){
    var soal = document.getElementById("soal2");
    var x = document.getElementById("x2");
    var jawaban = document.getElementById("input-2");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next2(){
    document.getElementById("utas2").style.display = "none" ;
    document.getElementById("utas3").style.display = "block";
}
//js soal 3
function cekjawaban3(){
    var jawaban = document.getElementById("input-3").value;
    var kj = document.getElementById("kj3").innerHTML;
    var soal = document.getElementById("soal3");
    var y = document.getElementById("y3");
    var x = document.getElementById("x3");
    var z = document.getElementById("z3");
    var input = document.getElementById("input-3");
    var next = document.getElementById("next3");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp3(){
    document.getElementById("z3").style.display = "none";
    document.getElementById("input-3").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show3(){
    var soal = document.getElementById("soal3");
    var x = document.getElementById("x3");
    var jawaban = document.getElementById("input-3");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next3(){
    document.getElementById("utas3").style.display = "none" ;
    document.getElementById("utas4").style.display = "block";
}
//js soal 4
function cekjawaban4(){
    var jawaban = document.getElementById("input-4").value;
    var kj = document.getElementById("kj4").innerHTML;
    var soal = document.getElementById("soal4");
    var y = document.getElementById("y4");
    var x = document.getElementById("x4");
    var z = document.getElementById("z4");
    var input = document.getElementById("input-4");
    var next = document.getElementById("next4");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp4(){
    document.getElementById("z4").style.display = "none";
    document.getElementById("input-4").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show4(){
    var soal = document.getElementById("soal4");
    var x = document.getElementById("x4");
    var jawaban = document.getElementById("input-4");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next4(){
    document.getElementById("utas4").style.display = "none" ;
    document.getElementById("utas5").style.display = "block";
}
//js soal 5
function cekjawaban5(){
    var jawaban = document.getElementById("input-5").value;
    var kj = document.getElementById("kj5").innerHTML;
    var soal = document.getElementById("soal5");
    var y = document.getElementById("y5");
    var x = document.getElementById("x5");
    var z = document.getElementById("z5");
    var input = document.getElementById("input-5");
    var next = document.getElementById("next5");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp5(){
    document.getElementById("z5").style.display = "none";
    document.getElementById("input-5").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show5(){
    var soal = document.getElementById("soal5");
    var x = document.getElementById("x5");
    var jawaban = document.getElementById("input-5");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next5(){
    document.getElementById("utas5").style.display = "none" ;
    document.getElementById("utas6").style.display = "block";
}
//js soal 6
function cekjawaban6(){
    var jawaban = document.getElementById("input-6").value;
    var kj = document.getElementById("kj6").innerHTML;
    var soal = document.getElementById("soal6");
    var y = document.getElementById("y6");
    var x = document.getElementById("x6");
    var z = document.getElementById("z6");
    var input = document.getElementById("input-6");
    var next = document.getElementById("next6");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp6(){
    document.getElementById("z6").style.display = "none";
    document.getElementById("input-6").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show6(){
    var soal = document.getElementById("soal6");
    var x = document.getElementById("x6");
    var jawaban = document.getElementById("input-6");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next6(){
    document.getElementById("utas6").style.display = "none" ;
    document.getElementById("utas7").style.display = "block";
}
//js soal 7
function cekjawaban7(){
    var jawaban = document.getElementById("input-7").value;
    var kj = document.getElementById("kj7").innerHTML;
    var soal = document.getElementById("soal7");
    var y = document.getElementById("y7");
    var x = document.getElementById("x7");
    var z = document.getElementById("z7");
    var input = document.getElementById("input-7");
    var next = document.getElementById("next7");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp7(){
    document.getElementById("z7").style.display = "none";
    document.getElementById("input-7").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show7(){
    var soal = document.getElementById("soal7");
    var x = document.getElementById("x7");
    var jawaban = document.getElementById("input-7");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next7(){
    document.getElementById("utas7").style.display = "none" ;
    document.getElementById("utas8").style.display = "block";
}
//js soal 8
function cekjawaban8(){
    var jawaban = document.getElementById("input-8").value;
    var kj = document.getElementById("kj8").innerHTML;
    var soal = document.getElementById("soal8");
    var y = document.getElementById("y8");
    var x = document.getElementById("x8");
    var z = document.getElementById("z8");
    var input = document.getElementById("input-8");
    var next = document.getElementById("next8");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp8(){
    document.getElementById("z8").style.display = "none";
    document.getElementById("input-8").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show8(){
    var soal = document.getElementById("soal8");
    var x = document.getElementById("x8");
    var jawaban = document.getElementById("input-8");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next8(){
    document.getElementById("utas8").style.display = "none" ;
    document.getElementById("utas9").style.display = "block";
}
//js soal 9
function cekjawaban9(){
    var jawaban = document.getElementById("input-9").value;
    var kj = document.getElementById("kj9").innerHTML;
    var soal = document.getElementById("soal9");
    var y = document.getElementById("y9");
    var x = document.getElementById("x9");
    var z = document.getElementById("z9");
    var input = document.getElementById("input-9");
    var next = document.getElementById("next9");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp9(){
    document.getElementById("z9").style.display = "none";
    document.getElementById("input-9").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show9(){
    var soal = document.getElementById("soal9");
    var x = document.getElementById("x9");
    var jawaban = document.getElementById("input-9");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next9(){
    document.getElementById("utas9").style.display = "none" ;
    document.getElementById("utas10").style.display = "block";
}
//js soal 10
function cekjawaban10(){
    var jawaban = document.getElementById("input-10").value;
    var kj = document.getElementById("kj10").innerHTML;
    var soal = document.getElementById("soal10");
    var y = document.getElementById("y10");
    var x = document.getElementById("x10");
    var z = document.getElementById("z10");
    var input = document.getElementById("input-10");
    var next = document.getElementById("next10");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp10(){
    document.getElementById("z10").style.display = "none";
    document.getElementById("input-10").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show10(){
    var soal = document.getElementById("soal10");
    var x = document.getElementById("x10");
    var jawaban = document.getElementById("input-10");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next10(){
    document.getElementById("utas10").style.display = "none" ;
    document.getElementById("utas11").style.display = "block";
}
//js soal 11
function cekjawaban11(){
    var jawaban = document.getElementById("input-11").value;
    var kj = document.getElementById("kj11").innerHTML;
    var soal = document.getElementById("soal11");
    var y = document.getElementById("y11");
    var x = document.getElementById("x11");
    var z = document.getElementById("z11");
    var input = document.getElementById("input-11");
    var next = document.getElementById("next11");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp11(){
    document.getElementById("z11").style.display = "none";
    document.getElementById("input-11").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show11(){
    var soal = document.getElementById("soal11");
    var x = document.getElementById("x11");
    var jawaban = document.getElementById("input-11");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next11(){
    document.getElementById("utas11").style.display = "none" ;
    document.getElementById("utas12").style.display = "block";
}
//js soal 12
function cekjawaban12(){
    var jawaban = document.getElementById("input-12").value;
    var kj = document.getElementById("kj12").innerHTML;
    var soal = document.getElementById("soal12");
    var y = document.getElementById("y12");
    var x = document.getElementById("x12");
    var z = document.getElementById("z12");
    var input = document.getElementById("input-12");
    var next = document.getElementById("next12");
    if (jawaban === kj){
        y.style.display = "block";
        next.style.display = "block";
    } else if (jawaban === ""){
        z.style.display = "block";
        input.className = "form-control invalid-input form-control-lg mr-sm-2 my-3";
    } else {
        x.style.display = "block";
    }
    if (jawaban === ""){
        soal.style.display = "block";
    } else {
        soal.style.display = "none";
    }
}
function kp12(){
    document.getElementById("z12").style.display = "none";
    document.getElementById("input-12").className = "form-control form-control-lg mr-sm-2 my-3";
}
function show12(){
    var soal = document.getElementById("soal12");
    var x = document.getElementById("x12");
    var jawaban = document.getElementById("input-12");
    soal.style.display = "block"
    x.style.display = "none"
    jawaban.value = ""
}
function next12(){
    document.getElementById("utas12").style.display = "none" ;
}
function next13(){
    document.getElementById("skj").style.display = "block";
}
//js other
    //js animate bounce
    function switchtheme(){
        var primcolor = document.body.style.getPropertyValue("--primary-color");
        if (primcolor === "#ffa69e"){
            document.body.style.setProperty("--primary-color","#aed9e0");
            document.body.style.setProperty("--secondary-color","#ffa69e");
        } else {
            document.body.style.setProperty("--primary-color","#ffa69e");
            document.body.style.setProperty("--secondary-color","#aed9e0");
        }

    }
    //js preload
