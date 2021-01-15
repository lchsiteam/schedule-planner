var addClassOpen = false, settingsOpen = false;
var document = new Document();
 
/* Adding Boxes to UI */
var container = document.getElementById("current-classes");
var allClasses = document.getElementById("all-classes");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var classes = JSON.parse(this.responseText);
    classes.forEach(displayClass);
  }
};
xmlhttp.open("GET", "documents/defaultClasses.json", true);
xmlhttp.send();

function displayClass(item, index) {
  addClassBox(item, false);
  // if (item.selected) {
  //   addClassBox(item, true);
  // }
}

function addClassBox(item, selected) {
  var name = item.className;
  var color = item.color;
  var subject = item.subject;
  var gradeLevel = item.gradeLevel;
  var ap = item.ap;
  var honors = item.honors;
  var classID = item.classID;

  var background = document.createElement("div");
  background.className = "class-container";
  background.setAttribute("data-name", name);
  background.setAttribute("data-subject", subject);
  background.setAttribute("data-grade-level", gradeLevel);
  background.setAttribute("data-ap", ap);
  background.setAttribute("data-honors", honors);
  background.setAttribute("data-class-id", classID);

  var header = document.createElement("div");
  header.className = "class-name";
  header.innerHTML = name;
  header.style.backgroundColor = color;
  background.appendChild(header);

  var subjectDiv = document.createElement("div");
  subjectDiv.innerHTML = subject;
  subjectDiv.className = "class-subject";
  background.appendChild(subjectDiv);

  var classCode = document.createElement("div");
  classCode.innerHTML = classID;
  classCode.className = "class-id"
  background.appendChild(classCode);


  if (selected) {
    container.appendChild(background);
  } else {
    allClasses.appendChild(background);
  }
}