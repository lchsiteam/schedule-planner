function $(id) {
	return document.getElementById(id);
}

dragula([$("all-classes"), $("selected-classes")], {
	copy: function (el, source) {
    return source === document.getElementById("all-classes");
	},
	accepts: function (el, target) {
    return target !== document.getElementById("all-classes");
	},
	removeOnSpill: function (el) {
	  if (el.parent == document.getElementById("selected-classes")) {
      return true;
	  }
	}
})

.on("drop", function (el) {
  update();
})
.on("remove", function (el) {
  update();
});


function update () {
  var classes = [];
  var x = document.getElementById("selected-classes").children

	for (let index = 0; index < x.length; index++) {
	  const element = x[index];
	  var id = element.getAttribute("data-class-id")
	  classes.push(id);
	}
  localStorage.setItem("selectedClasses", classes);

  calc()
}