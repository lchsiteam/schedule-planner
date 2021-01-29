/* Adding Boxes to UI */
var container = document.getElementById("current-classes");
var allClasses = document.getElementById("all-classes");

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var classes = JSON.parse(this.responseText);
    classes.forEach(displayAllClass);

    var selectedClaseses = localStorage.getItem("selectedClasses");
    if (selectedClaseses == null) {
      selectedClaseses = [""];
    } else {
      selectedClaseses = selectedClaseses.split(",");
      for (var x in selectedClaseses) {
        var element = selectedClaseses[x];
        if (element != "") {
          console.log("yo1");
          var jsonClass = getId(element);
          addClassBox(jsonClass, true);
        }
      }
    }

    function getId(item) {
      console.log("yo2");
      for (var classThing in classes) {
        if (item == classThing.classID) {
          return classThing;
        }
      }
    }

    function displayAllClass(item, index) {
      addClassBox(item, false);
    }

    function addClassBox(item, selected) {
      var name = item.className;
      var color = item.color;
      var subject = item.subject;
      var description = item.classDescription;
      var gradeLevel = item.gradeLevel;
      var ap = item.ap;
      var honors = item.honors;
      var classID = item.classID;

      var background = document.createElement("div");
      background.className = "class-container";
      background.setAttribute("data-class-id", classID);

      var header = document.createElement("div");
      header.className = "class-name";
      header.innerHTML = name;
      header.style.backgroundColor = color;
      background.appendChild(header);

      var descriptionDiv = document.createElement("div");
      descriptionDiv.innerHTML = description;
      descriptionDiv.className = "class-desciption";
      background.appendChild(descriptionDiv);

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

  }
};
xmlhttp.open("GET", "documents/defaultClasses.json", true);
xmlhttp.send();