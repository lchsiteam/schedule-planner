function calc () {
    var selectedClasses;

    selectedClasses = localStorage.getItem("selectedClasses");
    selectedClasses = ['11116','11115']

    var classes;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            classes = JSON.parse(this.responseText);
            console.log('did it')
            thing(classes)
        }
    };
    xmlhttp.open("GET", "documents/defaultClasses.json", true);
    xmlhttp.send();

    
    function thing (classes) {
        
        var totalTime = 0;

        for (var location in selectedClasses) {
            id = selectedClasses[location]
            for (var location2 in classes) {
                element = classes[location2]
                if (element.classID == id ) {   
                    totalTime += element.dailyHomework;
                }
            }
        }
        console.log(totalTime);
    }
}