window.onload=function(){
  
    var typed = new Typed('#element', {
    strings: ["Web Developer","Youtuber","Content Creator","HTML Developer","JS Developer","Php Developer"],
    typeSpeed: 30,
    backSpeed: 50,
    backDelay: 100,
    loop: true,
  });
  let ag = document.querySelector('#myForm')
let dog =  document.querySelector(".c")
document.getElementById("myForm").addEventListener('submit', function(e) {
    e.preventDefault();
    var inputs = ['input1', 'input2', 'input3', 'input4', 'textarea'];
    var warnings = ['warning1', 'warning2', 'warning3', 'warning4', 'warning5'];

    for (var i = 0; i < inputs.length; i++) {
        var input = document.getElementById(inputs[i]).value;
        if (!input) {
            document.getElementById(warnings[i]).textContent = 'This field is required.';
             
           
        } else {
            document.getElementById(warnings[i]).textContent = '';
            

function des(){
let dis = document.getElementById(inputs[i]).value
if(!dis){
ag.classList.add("rem") = false 
}else{
ag.classList.add("rem")  
ag.reset()
alert("Form is completed succesfully! ")
document.getElementById(warnings[i]).textContent = '';
}
}
des()
        }
    }
});

function be(){

ag.classList.remove("rem")

et.classList.add("e3")
}

let cdn= document.getElementById("cu")
cdn.onclick=()=>{
    document.getElementById("un").classList.remove("dl")
    cdn.classList.add("dl")
}
document.getElementById("un").onclick=()=>{
    document.getElementById("un").classList.add("dl")
    cdn.classList.remove("dl")
    //document.getElementById("logo").classList.add("loso")
}
}

//form     //js



  



  
