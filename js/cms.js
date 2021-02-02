/* Adding Boxes to UI */
var container = document.getElementById("selected-classes");
var allClasses = document.getElementById("all-classes");

var classes;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    classes = JSON.parse(this.responseText);
    classes.forEach(displayAllClass);
    showSelectedClasses(classes);
  }
};
xmlhttp.open("GET", "documents/defaultClasses.json", true);
xmlhttp.send();

function displayAllClass(item, index) {
  addClassBox(item, false);
}

function getId(id) {
  for (const classObject in classes) {
    const element = classes[classObject];
    if (element.classID == id) {
      return element;
    }
  }
}



function addClassBox(item, selected) {
  var name = item.className;
  var subject = item.subject;
  var description = item.classDescription;
  var gradeLevel = item.gradeLevel;
  var ap = item.ap;
  var honors = item.honors;
  var classID = item.classID;
  var homeworkTime = item.dailyHomework;
  var color;

  var background = document.createElement("div");
  background.className = "class-container";
  background.setAttribute("data-class-id", classID);

  switch (subject[0]) {
    case "math":
      color = "#ace6ff";
      break;
    case "english":
      color = "#ffe48c";
      break;
    case "history":
      color = "#ff8686";
      break;
    case "science":
      color = "#b1ffaa";
      break;
    case "art":
      color = "#ffb6f4";
      break;
    case "forLang":
      color = "#ffc996";
      break;
    case "elective":
      color = "#c7c7c7";
      break;
    case "sports":
      color = "#cea788";
      break;
    }

  var header = document.createElement("div");
  header.className = "class-name";
  header.innerHTML = name;
  header.style.backgroundColor = color;
  background.appendChild(header);

  var descriptionDiv = document.createElement("div");
  descriptionDiv.innerHTML = description;
  descriptionDiv.className = "class-desciption";
  descriptionDiv.placeholder = description;
  background.appendChild(descriptionDiv);

  var classCode = document.createElement("div");
  classCode.innerHTML = classID;
  classCode.className = "class-id"
  background.appendChild(classCode);

  var subjectDiv = document.createElement("div");
  if (homeworkTime == -1) {
    subjectDiv.innerHTML = "Homework Unknown";
  } else {
    subjectDiv.innerHTML = homeworkTime + " minutes";
  }
  subjectDiv.className = "class-subject";
  background.appendChild(subjectDiv);

  if (selected) {
    container.appendChild(background);
  } else {
    allClasses.appendChild(background);
  }
}

function showSelectedClasses(classes) {
  var selectedClaseses = localStorage.getItem("selectedClasses");
  if (selectedClaseses == null) {
    selectedClaseses = [];
  } else {
    selectedClaseses = selectedClaseses.split(",");
    for (var x in selectedClaseses) {
      var element = selectedClaseses[x];
      if (element != "") {
        var jsonClass = getId(element);
        addClassBox(jsonClass, true);
      }
    }
  }
}

var trashCan = document.getElementById("clear-classes");
trashCan.addEventListener("click", function () {
  for (let index = container.children.length; index > 0; index--) {
    const item = container.children[index - 1];
    if (item.className == "class-container") {
      item.remove();
      localStorage.setItem("selectedClasses", []);
      calc();
    }
  }
});