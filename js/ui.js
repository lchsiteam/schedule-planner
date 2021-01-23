var addClassOpen = false, settingsOpen = false;
 
var gridViewButton = document.getElementById("grid-view");
var addClassButton = document.getElementById("add-classes");
var settingsButton = document.getElementById("settings-button");
var centerContainer = document.getElementById("center-elements")
var addClassContainer = document.getElementById("add-classes-container");
var settingsContainer = document.getElementById("settings-container");

addClassButton.addEventListener('click', function () {
  if (addClassOpen) {
    addClassContainer.classList.remove("hidden-elements-shift");
    centerContainer.classList.remove("center-elements-shift");
    addClassOpen = false;
  } else if (settingsOpen) {
    //close settings
    //open menu
  } else {
    //open menu
    addClassContainer.classList.add("hidden-elements-shift");
    centerContainer.classList.add("center-elements-shift");
    addClassOpen = true;
  }
});