function $(id) {
    return document.getElementById(id);
  }

dragula([$("all-classes"), $("current-classes")], { 
    copy: function (el, source) {
        return source === document.getElementById("all-classes");
    },
    accepts: function (el, target) {
        return target !== document.getElementById("all-classes");
    },
    removeOnSpill: function (el, source) {
        return source == document.getElementById("current-classes");
    }
})
    .on("drop", function (el) {
      var classes = window.localStorage.getItem("selectedClasses");
      if (classes == null) {
        localStorage.setItem("selectedClaseses", []);
      }

      var id = el.getAttribute("data-class-id");
      classes.push(id);

      localStorage.setItem("currentClasses", classes);
      






        // checkCookie();
        // var selectedClasses = getCookie("selectedClasses");
        // var id = el.getAttribute("data-class-id");
        // var json = JSON.parse(selectedClasses);
        // json.classIDs.push({
        //     id
        // })
        // setCookie("selectedClasses", JSON.stringify(json), 365);
    }
    // .on("click", function (el) {
    //   if (el.parent.class == "selected-classes") {

    //   } else if (el.parent.class == "all-classes") {

    //   }
    // }
    // )
    );

























    
    // function getCookie(cname) {
    //     var name = cname + "=";
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for(var i = 0; i < ca.length; i++) {
    //       var c = ca[i];
    //       while (c.charAt(0) == ' ') {
    //         c = c.substring(1);
    //       }
    //       if (c.indexOf(name) == 0) {
    //         return c.substring(name.length, c.length);
    //       }
    //     }
    //     return "";
    //   }

    //   function setCookie(cname,cvalue,exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //     var expires = "expires=" + d.toGMTString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //   }

    //   function checkCookie() {
    //     var user=getCookie("selectedClasses");
    //     if (user != "") {
    //     } else {
    //         setCookie("selectedClasses", "{\"classIDs\":[]}", 365);
    //     }
    //   }