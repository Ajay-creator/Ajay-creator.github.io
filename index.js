function myFunction() {
    myVar = setTimeout(showPage, 5000);
  }
  
function showPage() {
document.getElementById("loader").style.display = "none";
}

var menuBar = document.getElementById("menu-bar");
        menuBar.addEventListener("click",() => {
            var menu = document.getElementById("menu");
            menu.classList.toggle("active");

            var bar = document.getElementById("bar")
            if(bar.classList[1]=="fa-bars"){
                bar.classList.remove("fa-bars");
                bar.classList.add("fa-close");
            }
            else{
                bar.classList.add("fa-bars");
                bar.classList.remove("fa-close");
            }
        })

var socialMediaBar = document.getElementById("social-media-bar");
socialMediaBar.addEventListener("click",() => {
    var socialMedia = document.getElementById("social-media");
    socialMedia.classList.toggle("social-media-active");

    var bar = document.getElementById("s-bar")
    if(bar.classList[1]=="fa-retweet"){
        bar.classList.remove("fa-retweet");
        bar.classList.add("fa-close");
    }
    else{
        bar.classList.add("fa-retweet");
        bar.classList.remove("fa-close");
    }
});


var number1 = document.getElementById("skill1_no");
let counter1 = 0;
setInterval(()=>{
    if(counter1==80){
        clearInterval();
    }
    else{
        counter1+=1;
        number1.textContent = counter1 + "%";
    }
},88)

var number2 = document.getElementById("skill2_no");
let counter2 = 0;
setInterval(()=>{
    if(counter2==95){
        clearInterval();
    }
    else{
        counter2+=1;
        number2.textContent = counter2 + "%";
    }
},80);

var number3 = document.getElementById("skill3_no");
let counter3 = 0;
setInterval(()=>{
    if(counter3 == 50){
        clearInterval();
    }
    else{
        counter3+=1;
        number3.textContent = counter3 + "%";
    }
},85);

var number4 = document.getElementById("skill4_no");
let counter4 = 0;
setInterval(()=>{
    if(counter4 == 75){
        clearInterval();
    }
    else{
        counter4+=1;
        number4.textContent = counter4 + "%";
    }
},90);

var number5 = document.getElementById("skill5_no");
let counter5 = 0;
setInterval(()=>{
    if(counter5 == 90){
        clearInterval();
    }
    else{
        counter5+=1;
        number5.textContent = counter5 + "%";
    }
},85);


var project = document.getElementsByClassName("project");

project[0].addEventListener("mouseover",() => {
    
    var details = document.getElementsByClassName("details");
    details[0].classList.add("active");
    var name = document.getElementsByClassName("name")[0];
    name.textContent = ""

});
project[0].addEventListener("mouseout",() => {
    var details = document.getElementsByClassName("details");
    details[0].classList.remove("active");
    var name = document.getElementsByClassName("name")[0];
    name.textContent = "FSAE Chassis"
});

project[1].addEventListener("mouseover",() => {
    
    var details = document.getElementsByClassName("details");
    details[1].classList.add("active");
    var name = document.getElementsByClassName("name")[2];
    name.textContent = ""

});
project[1].addEventListener("mouseout",() => {
    var details = document.getElementsByClassName("details");
    details[1].classList.remove("active");
    var name = document.getElementsByClassName("name")[2];
    name.textContent = "Portfolio"
});


project[2].addEventListener("mouseover",() => {
    
    var details = document.getElementsByClassName("details");
    details[2].classList.add("active");
    var name = document.getElementsByClassName("name")[4];
    name.textContent = ""

});
project[2].addEventListener("mouseout",() => {
    var details = document.getElementsByClassName("details");
    details[2].classList.remove("active");
    var name = document.getElementsByClassName("name")[4];
    name.textContent = "FLY"
});


project[3].addEventListener("mouseover",() => {
    
    var details = document.getElementsByClassName("details");
    details[3].classList.add("active");
    var name = document.getElementsByClassName("name")[6];
    name.textContent = ""

});
project[3].addEventListener("mouseout",() => {
    var details = document.getElementsByClassName("details");
    details[3].classList.remove("active");
    var name = document.getElementsByClassName("name")[6];
    name.textContent = "E commerce"
});
