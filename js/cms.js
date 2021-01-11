var document = new Document();
var container = document.getElementById("current-classes");
var allClasses = document.getElementById("all-classes");
var searchBox = document.getElementById("search-searchbox");
searchBox.onkeyup = function(){sorting()};

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var classes = JSON.parse(this.responseText);
    classes.forEach(displayClass);
  }
};
xmlhttp.open("GET", "../documents/classes.json", true);
xmlhttp.send();

function displayClass(item, index) {
  addClassBox(item, false);
  if (item.selected) {
    addClassBox(item, true);
  }
}

function addClassBox(item, selected) {
  var background = document.createElement("div");
  background.className = "class-container w-inline-block";

  var header = document.createElement("div");
  header.className = "class-name";
  header.innerHTML = item.className;
  header.style.backgroundColor = item.color;
  background.appendChild(header);

  var fullName = document.createElement("div");
  fullName.className = "class-full-name";
  fullName.innerHTML = item.fullClassName;
  background.appendChild(fullName);

  if (selected) {
    container.appendChild(background);
  } else {
    allClasses.appendChild(background);
  }
}

function sorting() {
  var input, filter, classContainer, classes, a, i, txtValue;
  input = document.getElementById("search-searchbox");
  filter = input.value.toUpperCase();

  classContainer = document.getElementById("all-classes");
  classes = classContainer.children;
  for (i = 0; i < classes.length; i++) {
    a = classes[i];
    txtValue = a.children[0].innerHTML;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      classes[i].style.display = "";
    } else {
      classes[i].style.display = "none";
    }
  }
}
