

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
    removeOnSpill: function (el) {
      if (el.parent == document.getElementById("current-classes")) {
        return true;
      }
    }
})
    .on("drop", function (el) {
      update();
    }

    ).on("remove", function (el) {
      update();
    }
    
    );

    function update () {
      var classes = [];
      var x = document.getElementById("current-classes").children

        for (let index = 0; index < x.length; index++) {
          const element = x[index];
          var id = element.getAttribute("data-class-id")
          classes.push(id);
      }
      localStorage.setItem("selectedClasses", classes);
      
      calc()
    }

























    
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