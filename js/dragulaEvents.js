

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
    invalid: function (el) {
        return el.parentElement == document.getElementById("current-classes");
    }
})
    .on("drop", function (el) {
      var classes = localStorage.getItem("selectedClasses");
      if (classes == null) {
        classes = [""];
      } else {
        classes = classes.split(",");
      }
      
      var id = el.getAttribute("data-class-id");
      
      classes.push(id);
      localStorage.setItem("selectedClasses", classes);
      
      calc()
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