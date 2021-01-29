function calc () {
    var selectedClasses;

    selectedClasses = localStorage.getItem("selectedClasses");
    selectedClasses = selectedClasses.split(',')

    var classes;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            classes = JSON.parse(this.responseText);
            thing(classes,selectedClasses)
        }
    };
    xmlhttp.open("GET", "documents/defaultClasses.json", true);
    xmlhttp.send();

    
    function thing (classes,selectedClasses) {
        var totalTime = 0;
        console.log(selectedClasses)
        for (let classesIndex = 0; classesIndex < classes.length; classesIndex++) {
            const element = classes[classesIndex];
            for (let selectedIndex = 0; selectedIndex < selectedClasses.length; selectedIndex++) {
                const classCheck = selectedClasses[selectedIndex];
                if (element.classID == classCheck) {
                    totalTime += element.dailyHomework
                }
                
            }

        }
        console.log(totalTime)
    }
}