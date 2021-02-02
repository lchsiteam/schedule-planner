function calc () {
    var selectedClasses,numOfClasses;

    selectedClasses = localStorage.getItem("selectedClasses");
    if (selectedClasses == null) {
        selectedClasses = [];
    } else {
        selectedClasses = selectedClasses.split(',');
    }

    numOfClasses = selectedClasses.length - 1;

    var classes;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            classes = JSON.parse(this.responseText);
            totalTime = calcTime(classes,selectedClasses);
            output (totalTime,numOfClasses);
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
                    if (element.dailyHomework != -1) {
                        totalTime += element.dailyHomework;
                    }
                }  
            }
        }
        return totalTime;
    }
}


function output (totalTime,numOfClasses) {
    var freeTime, school;

    switch (numOfClasses) {
        case 0:
            school = 0;
            break;
        case 1:
            school = 60;
            break;
        case 2:
            school = 130;
            break;
        case 3:
            school = 200;
            break;
        case 4:
            school = 270;
            break;
        case 5:
            school = 360;
            break;
        case 6:
            school = 420;
            break;
        case 7:
            school = 480;
            break;
        default:
            school = 480;
    }

    homework = totalTime;
    sleep = 540;
    freeTime = 1440 - (school + homework + sleep);
    if (freeTime < 0) {
        sleep += freeTime;
        freeTime = 0;
    }

    document.getElementById('sleep').style.height =  (sleep / 1440 * 100) + "%" ;
    formatHours(sleep, 'sleep-text')

    document.getElementById('school').style.height =  (school / 1440 * 100) + "%" ;
    formatHours(school, 'school-text')

    document.getElementById('homework').style.height =  (homework / 1440 * 100) + "%" ;
    formatHours(homework, 'homework-text')

    document.getElementById('free-time').style.height =  (freeTime / 1440 * 100) + "%" ;
    formatHours(freeTime, 'free-text')
}

function formatHours (minutes, element) {

    var hoursText, hours, minutesText;
    hours = Math.floor(minutes/60)
    minutes = minutes % 60

    if (hours == 1) {
        hoursText = '1 Hour ';
    } else {
        hoursText = hours + ' Hours ';
    }

    if (minutes == 0) {
        minutesText = '';
    } else {
        minutesText = '\n' +  minutes + ' minutes';
    }
    document.getElementById(element).innerHTML = hoursText + minutesText;

}
