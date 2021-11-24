
function myFunction(){
    myVar = setTimeout(showPage, 4000);
}
  
function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("body").style.display = "block";

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

function isIntoView(elem)
{
    var documentViewTop = $(window).scrollTop();
    var documentViewBottom = documentViewTop + $(window).height();

    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();

    return ((elementBottom <= documentViewBottom) && (elementTop >= documentViewTop));
}
// let count1=count2=count3=count4=count5=count6=1;
// const progress = document.querySelectorAll(".progress");

// $(window).scroll(function(){
//    if (isIntoView($('.skill1')) && count1){
//     var number1 = document.getElementById("skill1_no");
//     let counter1 = 0;
//     progress[0].style.display = "block";
//     progress[1].style.display = "block";
//     setInterval(()=>{
//         if(counter1==90){
//             clearInterval();
//         }
//         else{
//             counter1+=1;
//             number1.textContent = counter1 + "%";
//         }
//     },88)
//     count1=0;
// }
// if (isIntoView($('.skill2'))&& count2){
//     var number2 = document.getElementById("skill2_no");
//     let counter2 = 0;
//     progress[2].style.display = "block";
//     progress[3].style.display = "block";
//     setInterval(()=>{
//         if(counter2==75){
//             clearInterval();
//         }
//         else{
//             counter2+=1;
//             number2.textContent = counter2 + "%";
//         }
//     },80);
//     count2=0;
//   }
//   if (isIntoView($('.skill3'))&&count3){
//     var number3 = document.getElementById("skill3_no");
//     let counter3 = 0;
//     progress[4].style.display = "block";
//     progress[5].style.display = "block";
//     setInterval(()=>{
//         if(counter3 == 50){
//             clearInterval();
//         }
//         else{
//             counter3+=1;
//             number3.textContent = counter3 + "%";
//         }
//     },85);
//     count3=0;
// }
// if (isIntoView($('.skill4')) && count4){

//     var number4 = document.getElementById("skill4_no");
//     let counter4 = 0;
//     progress[6].style.display = "block";
//     progress[7].style.display = "block";
//     setInterval(()=>{
//         if(counter4 == 50){
//             clearInterval();
//         }
//         else{
//             counter4+=1;
//             number4.textContent = counter4 + "%";
//         }
//     },85);
//     count4=0;
// }
// if (isIntoView($('.skill5')) && count5){
//     var number5 = document.getElementById("skill5_no");
//     let counter5 = 0;
//     progress[8].style.display = "block";
//     progress[9].style.display = "block";
//     setInterval(()=>{
//         if(counter5 == 90){
//             clearInterval();
//         }
//         else{
//             counter5+=1;
//             number5.textContent = counter5 + "%";
//         }
//     },88);
//     count5=0;
// }
// if (isIntoView($('.skill6')) && count6){
//     var number6 = document.getElementById("skill6_no");
//     let counter6 = 0;
//     progress[10].style.display = "block";
//     progress[11].style.display = "block";
//     setInterval(()=>{
//         if(counter6 == 90){
//             clearInterval();
//         }
//         else{
//             counter6+=1;
//             number6.textContent = counter6 + "%";
//         }
//     },88);
//     count6=0;
// }
// });
// };

// Contact Form

function SubForm(){
    $.ajax({
        url:"https://api.apispreadsheets.com/data/15356/",
        type:"post",
        data:$("#contact-form").serializeArray(),
        success: function(){
            alert("Form Data Submitted. I will reach you out in a while. Thanks :)")
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}
