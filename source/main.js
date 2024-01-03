// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// var roleteacher = document.getElementById("option-teacher")
// var rolestudent = document.getElementById("option-student")
var selectedRole = document.getElementById("authority");
var idValue = document.getElementById("id")
var pwValue = document.getElementById("pw")
var userName = document.getElementById(".user-name")
var anouncementCreate = document.querySelector(".anouncement-create")
var popupContainner = document.querySelector(".popup-containner")
function login() {
    
    if (selectedRole.value === "teacher" && idValue.value==="Huong" && pwValue.value==="9999") {
        
        window.location.href = "http://127.0.0.1:5500/source/teacher.html";
       
        return
    } 
    if (selectedRole.value === "student" && idValue.value==="Binh" && pwValue.value==="9999") {
        window.location.href = "http://127.0.0.1:5500/source/student.html";
       
    }
    
}
var visibleEle = ""
function isvisible(visibleEle) {
    if(visibleEle === anouncementCreate) {
        anouncementCreate.classList.add("isVisible")
        return
    }
    if(visibleEle === popupContainner) {
        popupContainner.classList.add("isVisible")
    }
    
}

function isnotvisible(visibleEle) {
    if(visibleEle === anouncementCreate) {
        anouncementCreate.classList.remove("isVisible")
        return
    }
    if(visibleEle === popupContainner) {
        popupContainner.classList.remove("isVisible")
    }
    
}

