var announceList = document.querySelector(".announce-list");
var submitCreatedanounceBtn = document.getElementById("submit-createdanounce-btn");

var resetContent1 = "";
var resetContent2 = "";
var resetContent3 = "";

//append data to announce-item


var anouncementCreate = document.querySelector(".anouncement-create")
var popupContainner = document.querySelector(".popup-containner")

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


function appendNewAnnounce() {
    // Get values when the user triggers the append function
    var announceName = document.getElementById("announceName").value;
    var announceContent = document.getElementById("announceContent").value;
    var announcedate = document.getElementById("announcedate").value;

    // Check if values are not empty
    if (!announceName || !announceContent || !announcedate) {
        alert("Please fill in all fields");
        return;
    }

    // Create elements inside the function
    var announceItem = document.createElement("div");
    announceItem.classList.add("announce-item");

    var themeAndCheck = document.createElement("div");
    themeAndCheck.classList.add("themeAndCheck");

    var themeCheck = document.createElement("input");
    themeCheck.classList.add("theme-check");
    themeCheck.type = "checkbox";
    themeCheck.name = "theme-check";

    var anounceTheme = document.createElement("h4");
    anounceTheme.classList.add("anounce-theme");

    var anouncePara = document.createElement("p");
    anouncePara.classList.add("anounce-para");

    var updateTime = document.createElement("p");
    updateTime.classList.add("update-time");

    // Set innerHTML for created elements
    anounceTheme.innerHTML = announceName;
    themeAndCheck.appendChild(themeCheck);
    themeAndCheck.appendChild(anounceTheme);
    announceItem.appendChild(themeAndCheck);


    anouncePara.innerHTML = announceContent;
    updateTime.innerHTML = announcedate;
    announceItem.appendChild(anouncePara);
    announceItem.appendChild(updateTime);

    // Append the new announcement
    announceList.appendChild(announceItem);

    // Reset values and hide the announcement creation element
    reset(submitCreatedanounceBtn);
    isnotvisible(anouncementCreate);
}

function reset(item) {
    if (item === submitCreatedanounceBtn) {
        document.getElementById("announceName").value = resetContent1;
        document.getElementById("announceContent").value = resetContent2;
        document.getElementById("announcedate").value = resetContent3;
        return;
    }
}