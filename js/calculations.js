function calc () {
    var selectedClasses,numOfClasses;

    selectedClasses = localStorage.getItem("selectedClasses");
    selectedClasses = selectedClasses.split(',')

    if (selectedClasses[0] == "") {
        numOfClasses = 0
    } else {
        numOfClasses = selectedClasses.length
    }

    var classes;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            classes = JSON.parse(this.responseText);
            totalTime = calcTime(classes,selectedClasses)
            output (totalTime,numOfClasses)
        }
    };
    xmlhttp.open("GET", "documents/defaultClasses.json", true);
    xmlhttp.send();

    
    function calcTime (classes,selectedClasses) {
        var totalTime = 0;
        for (let classesIndex = 0; classesIndex < classes.length; classesIndex++) {
            const element = classes[classesIndex];
            for (let selectedIndex = 0; selectedIndex < selectedClasses.length; selectedIndex++) {
                const classCheck = selectedClasses[selectedIndex];
                if (element.classID == classCheck) {
                    totalTime += element.dailyHomework
                }
                
            }

        }

        return totalTime
    }
}


    function output (totalTime,numOfClasses) {
        var hours, hoursText, minutes, minutesText
        hours = Math.floor(totalTime/60)
        minutes = totalTime % 60

        if (hours == 1) {
            hoursText = '1 Hour '
        } else {
            hoursText = hours + ' Hours '
        }

        if (minutes == 0) {
            minutesText = ''
        } else {
            minutesText = minutes + ' minutes'
        }
        document.getElementById('total-time').innerHTML =  hoursText + minutesText
        console.log(numOfClasses)
    }