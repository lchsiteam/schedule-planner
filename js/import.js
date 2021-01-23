var classes

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    classes = JSON.parse(this.responseText);
    
  }
};
xmlhttp.open("GET", "documents/defaultClasses.json", true);
xmlhttp.send();

export {classes};