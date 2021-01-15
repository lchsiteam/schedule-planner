dragula([$("all-classes"), $("current-classes")])
    .on("drop", function (el) {
        console.log(el);
    });